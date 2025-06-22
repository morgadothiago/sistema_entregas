import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [BillingService],
  controllers: [BillingController],
})
export class BillingModule {}
