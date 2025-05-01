import { Module } from "@nestjs/common";
import { DeliveryController } from "./delivery.controller";
import { DeliveryService } from "./delivery.service";
import { LocationService } from "../location/location.service";
import { VehicleTypeService } from "../vehicle-type/vehicle-type.service";
import { ProfitService } from "../profit/profit.service";

@Module({
  controllers: [DeliveryController],
  providers: [
    DeliveryService,
    LocationService,
    VehicleTypeService,
    ProfitService,
  ],
})
export class DeliveryModule {}
