import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingUpdateDto } from './dto/billing-update.dto';
import { User } from '@prisma/client';

@Controller('billing')
export class BillingController {
  constructor(private billingService: BillingService) {}

  @Post(':id')
  @HttpCode(HttpStatus.OK)
  invoiceBilling(
    @Body() body: BillingUpdateDto,
    @Param('id') id: string,
    @Req() req: Request & { user: User },
  ): Promise<void> {
    return this.billingService.invoiceBilling(body, +id, req.user);
  }
}
