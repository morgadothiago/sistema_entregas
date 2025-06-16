import { Injectable, NotFoundException } from "@nestjs/common";
import { DeliveryCreateDto } from "./dto/delivery-create.dto";
import { DeliverySimulateDto } from "./dto/delivery-simulate.dto";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleTypeService } from "../vehicle-type/vehicle-type.service";
import { LocationService } from "../location/location.service";
import { VehicleType } from "@prisma/client";
import { IRoute } from "../typing/location";

@Injectable()
export class DeliveryService {
  constructor(
    private prismaService: PrismaService,
    private vehicleType: VehicleTypeService,
    private locationService: LocationService,
  ) {}

  async simulateDelivery(
    body: DeliverySimulateDto,
    idUser: number,
  ): Promise<{
    location: IRoute;
    price: number;
  }> {
    const vehicleType: VehicleType = await this.vehicleType.findOne(
      body.vehicleType,
    );

    if (!vehicleType) {
      throw new NotFoundException(
        `Tipo de veiculo '${body.vehicleType}' nao foi encontrado`,
      );
    }

    const companyLocalization = await LocationService.getAddressLocalizationByUser(
      this.prismaService, idUser, 'companies'
    )

    const location = await this.locationService.reverse(
      body.city,
      body.state,
      body.address,
      body.number,
      body.zipCode,
    );

    const geoInfo = await this.locationService.findDistance(
      location,
      companyLocalization,
    );

    const price = this.vehicleType.calculatePrice(vehicleType, geoInfo);

    return {
      location: geoInfo,
      price,
    };
  }

  createDelivery(body: DeliveryCreateDto) {
    throw new Error("Method not implemented.");
  }
}
