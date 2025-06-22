import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BillingService } from './billing.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [BillingService],
})
export class BillingModule {}
