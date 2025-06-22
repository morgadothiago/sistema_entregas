import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Req,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingUpdateDto } from './dto/billing-update.dto';
import { User } from '@prisma/client';

@Controller('billing')
export class BillingController {
  constructor(private billingService: BillingService) {}

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async invoiceBilling(
    @Body() body: BillingUpdateDto,
    @Param('id') id: string,
    @Req() req: Request & { user: User },
  ): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await this.billingService.invoiceBilling(body, +id, req.user);
  }
}
