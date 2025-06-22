import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { cronCustomExpression } from '../config/cron';
import { PrismaService } from '../prisma/prisma.service';
import {
  BillingStatus,
  BillingType,
  DeliveryStatus,
  Prisma,
  Role,
  UserStatus,
} from '@prisma/client';
import { toZonedTime } from 'date-fns-tz';

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
        
        console.log({today, weekEnd, weekStart});
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
}
