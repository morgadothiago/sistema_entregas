import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { cronCustomExpression } from '../config/cron';
import { PrismaService } from '../prisma/prisma.service';
import {
    $Enums,
  BillingStatus,
  BillingType,
  DeliveryStatus,
  ExtractType,
  Prisma,
  Role,
  User,
  UserStatus,
} from '@prisma/client';
import { toZonedTime } from 'date-fns-tz';
import { BillingUpdateDto } from './dto/billing-update.dto';

@Injectable()
export class BillingService {

  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger('Faturamento');

  getBrazilDate() {
    const data = new Date();
    const fusoBrasil = 'America/Sao_Paulo';
    return toZonedTime(data, fusoBrasil);
  }

  @Cron(cronCustomExpression.SUNDAY_00H)
  async generateExpenseCompany() {
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

        console.log({ today, weekEnd, weekStart });
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
                amount: delivery.price,
                deliveryId: delivery.id,
                billingId: billing.id,
              });

              return acc;
            },
            {
              amount: 0,
              billingItems: [] as any[],
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

  private async updateUserBalance(userId: number, amount: number, type: 'CREDIT' | 'DEBIT', tx?: any) {
    const prisma = tx || this.prisma;
    const multiplier = type === 'CREDIT' ? 1 : -1;
    const finalAmount = amount * multiplier;

    await prisma.balance.upsert({
      where: { userId },
      update: { amount: { increment: finalAmount } },
      create: { userId, amount: finalAmount },
    });
  }

  private async createExtractEntry(userId: number, amount: number, type: ExtractType, description: string, billingId?: number, tx?: any) {
    const prisma = tx || this.prisma;
    await prisma.extract.create({
      data: { userId, amount, type, description, billingId },
    });
  }

  async invoiceBilling(body: BillingUpdateDto, id: number, user: User): Promise<void> {
    return this.prisma.$transaction(async (tx) => {
      const billing = await tx.billing.findUnique({
        where: {
          id, 
          ...(user.role !== Role.ADMIN && { userId: user.id })
        },
        select: {
          id: true,
          status: true,
          amount: true,
          type: true,
          userId: true,
          description: true,
        },
      });

      if (!billing)
        throw new NotFoundException('Fatura não encontrada');
      
      if (billing.status === BillingStatus.PAID)
        throw new BadRequestException('Não é possível alterar status de uma fatura já paga');
            
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
              }
            } 
          },
          select: {
            amount: true
          }
        });

        if (!balance || balance.amount.toNumber() < billing.amount.toNumber())
          throw new BadRequestException('Saldo insuficiente para pagar fatura');

        await this.updateUserBalance(billing.userId as number, billing.amount.toNumber(), 'DEBIT', tx);
        await this.createExtractEntry(
          billing.userId as number,
          billing.amount.toNumber(),
          ExtractType.DEBIT,
          body.description || billing.description || 'Pagamento de fatura',
          billing.id,
          tx
        );
      }

      this.logger.log(`Fatura ${id} atualizada - Status: ${body.status}, Valor: R$ ${billing.amount}`);
    });
  }
}
