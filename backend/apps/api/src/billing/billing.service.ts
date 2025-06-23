import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { cronCustomExpression } from '../config/cron';
import { PrismaService } from '../prisma/prisma.service';
import {
  Billing,
  BillingStatus,
  BillingType,
  DeliveryStatus,
  ExtractType,
  File,
  Prisma,
  Role,
  User,
  UserStatus,
} from '@prisma/client';
import { toZonedTime } from 'date-fns-tz';
import { BillingUpdateDto } from './dto/billing-update.dto';
import { FileStorageService } from '../file-storage/file-storage.service';
import { BillingQueryParams } from './dto/filters.dto';
import { IPaginateResponse, paginateResponse } from '../utils/fn';
import { BillingPaginateResponse } from './dto/billing-paginate-response.dto';
import { BillingFindOneResponse } from './dto/billing-findOne-response.dto';

@Injectable()
export class BillingService {
  constructor(
    private prisma: PrismaService,
    private fileStorage: FileStorageService,
  ) {}
  private readonly logger = new Logger('Faturamento');

  getBrazilDate(): Date {
    const data = new Date();
    const fusoBrasil = 'America/Sao_Paulo';
    return toZonedTime(data, fusoBrasil);
  }

  async paginate(
    filters: BillingQueryParams,
    page: number,
    limit: number,
  ): Promise<IPaginateResponse<BillingPaginateResponse>> {
    const where: Prisma.BillingWhereInput = {
      ...(filters.status && {
        status: filters.status,
      }),
      ...(filters.type && {
        type: filters.type,
      }),
      ...(filters.user?.role !== Role.ADMIN && {
        userId: filters.user?.id,
      }),
      ...(filters.description && {
        description: {
          contains: filters.description,
          mode: 'insensitive',
        },
      }),
    };

    const [data, total] = await Promise.all([
      this.prisma.billing.findMany({
        where,
        select: {
          id: true,
          amount: true,
          description: true,
          type: true,
          status: true,
        },
      }),
      this.prisma.billing.count({
        where,
      }),
    ]);

    return paginateResponse(
      data as unknown as BillingPaginateResponse[],
      page,
      limit,
      total,
    );
  }

  async addReceipt(
    idBilling: number,
    user: Pick<User, 'id' | 'role' | 'status'>,
    file?: Express.Multer.File,
  ): Promise<void> {
    if (!file) {
      throw new BadRequestException('Arquivo não enviado');
    }

    const billing = await this.findOne(idBilling, user, true);

    if (!billing) {
      throw new NotFoundException('Fatura não encontrada');
    }

    await this.fileStorage.upsert(
      file,
      [
        'user',
        user.id.toString(),
        'billing',
        billing.id.toString(),
        (file as { originalname: string }).originalname,
      ] as string[],
      billing.File,
    );
  }

  async _findOne(
    id: number,
    user: Pick<User, 'id' | 'role' | 'status'>,
  ): Promise<BillingFindOneResponse> {
    const billing = await this.prisma.billing.findUnique({
      where: {
        id,
        ...(user.role !== Role.ADMIN && { userId: user.id }),
      },
      select: {
        id: true,
        status: true,
        amount: true,
        type: true,
        userId: true,
        description: true,
        File: {
          select: {
            id: true,
            filename: true,
            size: true,
            path: true,
            mimetype: true,
            publicId: true,
          },
        },
        Items: {
          select: {
            id: true,
            price: true,
            Delivery: {
              select: {
                status: true,
                completedAt: true,
                code: true,
              },
            },
          },
        },
      },
    });

    if (!billing) {
      throw new NotFoundException('Fatura não encontrada');
    }

    return billing as unknown as BillingFindOneResponse;
  }

  async findOne(
    id: number,
    user: Pick<User, 'id' | 'role' | 'status'>,
    addFile = false,
  ): Promise<Billing & { File?: File }> {
    const billing = await this.prisma.billing.findUnique({
      where: {
        id,
        ...(user.role !== Role.ADMIN && { userId: user.id }),
      },
      select: {
        id: true,
        status: true,
        amount: true,
        type: true,
        userId: true,
        description: true,
        File: addFile,
      },
    });

    if (!billing) {
      throw new NotFoundException('Fatura não encontrada');
    }

    return billing as Billing & { File?: File };
  }

  @Cron(cronCustomExpression.SUNDAY_00H)
  async generateExpenseCompany(): Promise<void> {
    return this.prisma.$transaction(
      async (tx) => {
        const userCompanies = await tx.user.findMany({
          where: {
            role: Role.COMPANY,
            status: UserStatus.ACTIVE,
            Company: {
              id: {
                not: undefined,
              },
            },
          },
          select: {
            id: true,
            Balance: {
              select: {
                amount: true,
              },
            },
            Company: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });

        const today = this.getBrazilDate();

        const weekEnd = new Date(today);
        weekEnd.setDate(today.getDate() - 1);
        weekEnd.setUTCHours(23, 59, 59, 999);

        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - 7);
        weekStart.setUTCHours(0, 0, 0, 0);

        for (const user of userCompanies) {
          const deliveries = await tx.delivery.findMany({
            where: {
              status: DeliveryStatus.COMPLETED,
              companyId: user.Company?.id,
              completedAt: {
                gte: weekStart,
                lte: weekEnd,
              },
              BillingItem: {
                none: {},
              },
            },
            select: {
              id: true,
              price: true,
            },
          });

          if (!deliveries.length) {
            this.logger.log(
              `Empresa '${user.Company?.name}' não tem entregas concluídas para faturar nesta semana`,
            );
            continue;
          }

          const billing = await tx.billing.create({
            data: {
              amount: 0,
              status: BillingStatus.PENDING,
              type: BillingType.EXPENSE,
              userId: user.id,
              description: `Fatura semanal - entregas concluídas de ${weekStart.toLocaleDateString()} a ${weekEnd.toLocaleDateString()}`,
            },
            select: {
              id: true,
            },
          });

          const { amount, billingItems } = deliveries.reduce(
            (acc, delivery) => {
              acc.amount += delivery.price.toNumber();

              acc.billingItems.push({
                price: delivery.price,
                deliveryId: delivery.id,
                billingId: billing.id,
              });

              return acc;
            },
            {
              amount: 0,
              billingItems: [] as Array<{
                price: Prisma.Decimal;
                deliveryId: number;
                billingId: number;
              }>,
            },
          );

          await tx.billingItem.createMany({
            data: billingItems,
          });

          await tx.billing.update({
            where: {
              id: billing.id,
            },
            data: {
              amount: +amount.toFixed(2),
            },
          });
        }
      },
      {
        maxWait: 15000,
        timeout: 60000,
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
      },
    );
  }

  private async updateUserBalance(
    userId: number,
    amount: number,
    type: 'CREDIT' | 'DEBIT',
    tx?: PrismaService,
  ): Promise<void> {
    const prisma = tx ?? this.prisma;
    const multiplier = type === 'CREDIT' ? 1 : -1;
    const finalAmount = amount * multiplier;

    const balance = await prisma.balance.findFirst({
      where: {
        User: {
          some: {
            id: userId,
          },
        },
      },
      select: {
        id: true,
      },
    });

    await prisma.balance.update({
      where: {
        id: balance?.id,
      },
      data: {
        amount: {
          increment: finalAmount,
        },
      },
    });
  }

  private async createExtractEntry(
    userId: number,
    amount: number,
    type: ExtractType,
    description: string,
    billingId?: number,
    tx?: PrismaService,
  ): Promise<void> {
    const prisma = tx ?? this.prisma;
    await prisma.extract.create({
      data: { userId, amount, type },
    });
  }

  async invoiceBilling(
    body: BillingUpdateDto,
    id: number,
    user: User,
  ): Promise<void> {
    return this.prisma.$transaction(async (tx) => {
      const billing = await this.findOne(id, user);

      if (billing.status === BillingStatus.PAID) {
        throw new BadRequestException(
          'Não é possível alterar status de uma fatura já paga',
        );
      }
      await tx.billing.update({
        where: { id },
        data: { status: body.status, description: body.description },
      });

      if (body.status === BillingStatus.PAID) {
        const balance = await tx.balance.findFirst({
          where: {
            User: {
              some: {
                id: billing.userId as number,
              },
            },
          },
          select: {
            amount: true,
          },
        });

        if (!balance || balance.amount.lessThanOrEqualTo(billing.amount)) {
          throw new BadRequestException('Saldo insuficiente para pagar fatura');
        }

        const amount: number = +billing.amount;

        await this.updateUserBalance(
          billing.userId as number,
          amount,
          'DEBIT',
          tx as PrismaService,
        );
        await this.createExtractEntry(
          billing.userId as number,
          amount,
          'DEBIT',
          body.description ?? billing.description ?? 'Pagamento de fatura',
          billing.id,
          tx as PrismaService,
        );
      }

      this.logger.log(
        `Fatura ${id} atualizada - Status: ${body.status}, Valor: R$ ${billing.amount}`,
      );
    });
  }
}
