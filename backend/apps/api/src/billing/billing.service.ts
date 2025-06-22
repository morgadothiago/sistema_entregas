import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { cronCustomExpression } from "../config/cron";
import { PrismaService } from "../prisma/prisma.service";
import {
  BillingStatus,
  BillingType,
  DeliveryStatus,
  Prisma,
  Role,
  UserStatus,
} from "@prisma/client";

@Injectable()
export class BillingService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger("Faturamento");

  @Cron("0 0 * * 1") // Segunda-feira às 00:00
  async generateExpenseCompany() {
    return this.prisma.$transaction(
      async (tx) => {
        const userCompanies = await tx.user.findMany({
          where: {
            role: Role.COMPANY,
            status: UserStatus.ACTIVE,
          },
          select: {
            id: true,
            Company: {
              select: {
                name: true,
              },
            },
          },
        });

        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - 7);
        weekStart.setHours(0, 0, 0, 0);

        const weekEnd = new Date();
        weekEnd.setHours(23, 59, 59, 999);

        for (const user of userCompanies) {
          const deliveries = await tx.delivery.findMany({
            where: {
              status: DeliveryStatus.COMPLETED,
              companyId: user.id, // Assumindo que existe este campo
              createdAt: {
                gte: weekStart,
                lt: weekEnd,
              },
              // Evita entregas já faturadas
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
              description: `Fatura da semana ${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`,
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
}
