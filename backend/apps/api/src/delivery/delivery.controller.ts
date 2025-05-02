import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
} from "@nestjs/common";
import { DeliveryService } from "./delivery.service";
import { DeliveryCreateDto } from "./dto/delivery-create.dto";
import { DeliveryUpdateDto } from "./dto/delivery-update.dto";
import { DeliverySimulateDto } from "./dto/delivery-simulate.dto";
import { Request } from "express";
import { User } from "@prisma/client";

@Controller("delivery")
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Post("simulate")
  @HttpCode(HttpStatus.OK)
  simulateDelivery(
    @Body() body: DeliverySimulateDto,
    @Req() req: Request & { user: User },
  ) {
    const user = req.user;

    return this.deliveryService.simulateDelivery(body, user.id);
  }

  @Post(":code")
  @HttpCode(HttpStatus.NO_CONTENT)
  createDelivery(@Body() body: DeliveryCreateDto) {
    return this.deliveryService.createDelivery(body);
  }

  @Patch(":code")
  @HttpCode(HttpStatus.NO_CONTENT)
  updateDelivery(@Param("code") code: string, @Body() body: DeliveryUpdateDto) {
    return this.deliveryService.updateDelivery(code, body);
  }
}
