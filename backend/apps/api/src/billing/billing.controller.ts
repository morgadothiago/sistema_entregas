import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingUpdateDto } from './dto/billing-update.dto';
import { User } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileStorageService } from '../file-storage/file-storage.service';

@Controller('billing')
export class BillingController {
  constructor(
    private billingService: BillingService,
    private fileStorage: FileStorageService,
  ) {}

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileInterceptor('file'))
  async invoiceBilling(
    @Body() body: BillingUpdateDto,
    @Param('id') id: string,
    @Req() req: Request & { user: User },
  ): Promise<void> {
    await this.billingService.invoiceBilling(body, +id, req.user);
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  addReceipt(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<void> {
    return this.billingService.addReceipt(+id, req.user, file);
  }

  /* async removeReceipt(@Param('id') id: string): Promise<void> {
    await this.billingService.removeReceipt(+id);
  } */
}
