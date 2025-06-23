import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { BillingService } from './billing.service';
import { BillingUpdateDto } from './dto/billing-update.dto';
import { User } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { BillingQueryParams } from './dto/filters.dto';
import { BillingPaginateResponse } from './dto/billing-paginate-response.dto';
import { IPaginateResponse } from '../utils/fn';
import { BillingFindOneResponse } from './dto/billing-findOne-response.dto';

@Controller('billing')
export class BillingController {
  constructor(private billingService: BillingService) {}

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'atualiza faturamento' })
  async invoiceBilling(
    @Body() body: BillingUpdateDto,
    @Param('id') id: string,
    @Req() req: Request & { user: User },
  ): Promise<void> {
    return this.billingService.invoiceBilling(body, +id, req.user);
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'cria ou atualiza recibos no faturamento' })
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  addReceipt(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<void> {
    return this.billingService.addReceipt(+id, req.user, file);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'paginação de faturamentos' })
  @ApiResponse({ type: BillingPaginateResponse, status: HttpStatus.OK })
  paginate(
    @Query() filters: BillingQueryParams,
    @Req() req: Request & { user: User },
  ): Promise<IPaginateResponse<BillingPaginateResponse>> {
    filters.user = req.user;

    return this.billingService.paginate(
      filters,
      +Math.max(Number(filters.page) || 1, 1),
      +Math.max(Number(filters.limit) || 100, 1),
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'busca um faturamentos' })
  @ApiResponse({ type: BillingFindOneResponse, status: HttpStatus.OK })
  findOne(
    @Param('id') idBilling: number,
    @Req() req: Request & { user: User },
  ): Promise<BillingFindOneResponse> {
    return this.billingService._findOne(+idBilling, req.user);
  }
}
