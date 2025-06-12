import { Injectable, NotFoundException } from "@nestjs/common";
import { DeliveryCreateDto } from "./dto/delivery-create.dto";
import { DeliverySimulateDto } from "./dto/delivery-simulate.dto";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleTypeService } from "../vehicle-type/vehicle-type.service";
import { DeliveryUpdateDto } from "./dto/delivery-update.dto";
import { LocationService } from "../location/location.service";
import { Localization, VehicleType } from "@prisma/client";

@Injectable()
export class DeliveryService {
  constructor(
    private prismaService: PrismaService,
    private vehicleType: VehicleTypeService,
    private locationService: LocationService,
  ) {}

  updateDelivery(code: string, body: DeliveryUpdateDto) {
    throw new Error("Method not implemented.");
  }

  async simulateDelivery(body: DeliverySimulateDto, idUser: number) {
    const vehicleTypes: VehicleType = await this.vehicleType.findOne(
      body.vehicleType,
    );

    if (!vehicleTypes) {
      throw new NotFoundException(
        `Tipo de veiculo '${body.vehicleType}' nao foi encontrado`,
      );
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: idUser },
      include: {
        Company: {
          include: {
            Address: {
              include: {
                Localization: {
                  select: {
                    longitude: true,
                    latitude: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const location = await this.locationService.reverse(
      body.city,
      body.state,
      body.address,
      body.number,
      body.zipCode,
    );

    const distances = await this.locationService.findDistance(
      client.Address?.Localization as Localization,
      user.Company?.Address?.Localization as Localization,
    );

    const prices = vehicleTypes.reduce(
      (acc, vehicleType, index) => {
        const prices = distances.map(({ distance, duration }) => {
          return {
            price: +(
              (distance / 1000) *
              (vehicleType.pricePerKm || 0) *
              (1 + (profit.percentage?.toNumber() || 0))
            ).toFixed(2),

            duration: duration / 3600,
            distance: distance / 1000,
          };
        });
        const key: string = vehicleType.type || `vehicleType${index}`;

        acc[key] = prices;

        return acc;
      },
      {} as Record<
        string,
        { price: number; duration: number; distance: number }[]
      >,
    );

    return prices;
  }

  createDelivery(body: DeliveryCreateDto) {
    throw new Error("Method not implemented.");
  }
}
