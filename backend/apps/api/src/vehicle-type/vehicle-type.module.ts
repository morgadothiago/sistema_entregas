import { Module } from "@nestjs/common";
import { VehicleTypeController } from "./vehicle-type.controller";
import { VehicleTypeService } from "./vehicle-type.service";
import { CacheService } from "cache/cache.service";

@Module({
  controllers: [VehicleTypeController],
  providers: [VehicleTypeService, CacheService],
})
export class VehicleTypeModule {}
