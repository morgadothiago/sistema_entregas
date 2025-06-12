import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from "@nestjs/common";
import { DeliveryService } from "./delivery.service";
import { DeliveryCreateDto } from "./dto/delivery-create.dto";
import { DeliverySimulateDto } from "./dto/delivery-simulate.dto";
import { Request } from "express";
import { User } from "@prisma/client";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { DeliverySimulationResponseDto } from "./dto/delivery-simulation-response.dto";

@Controller("delivery")
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Post("simulate")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Simulate delivery" })
  @ApiOkResponse({
    description: "Delivery simulation successful",
    type: DeliverySimulationResponseDto,
  })
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
}
