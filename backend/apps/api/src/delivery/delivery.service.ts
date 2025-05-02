import { Injectable, NotFoundException } from "@nestjs/common";
import { DeliveryCreateDto } from "./dto/delivery-create.dto";
import { DeliverySimulateDto } from "./dto/delivery-simulate.dto";
import { PrismaService } from "../prisma/prisma.service";
import { ProfitService } from "../profit/profit.service";
import { VehicleTypeService } from "../vehicle-type/vehicle-type.service";
import { DeliveryUpdateDto } from "./dto/delivery-update.dto";
import { LocationService } from "../location/location.service";
import { Localization, VehicleType } from "@prisma/client";

@Injectable()
export class DeliveryService {
  constructor(
    private prismaService: PrismaService,
    private profit: ProfitService,
    private vehicleType: VehicleTypeService,
    private location: LocationService,
  ) {}

  updateDelivery(code: string, body: DeliveryUpdateDto) {
    throw new Error("Method not implemented.");
  }

  async simulateDelivery(body: DeliverySimulateDto, idUser: number) {
    const profit = await this.profit.findOne();
    let vehicleTypes: Partial<VehicleType>[];

    if (body.vehicleType) {
      const data = await this.vehicleType.findOne(body.vehicleType);
      vehicleTypes = data ? [data] : await this.vehicleType.findAll();
    } else {
      vehicleTypes = await this.vehicleType.findAll();
    }

    const client = await this.prismaService.client
      .findFirstOrThrow({
        where: { code: body.codeClient },
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
      })
      .catch(() => {
        throw new NotFoundException(
          `Cliente com codigo '${body.codeClient}' não encontrado`,
        );
      });

    const user = await this.prismaService.user.findFirstOrThrow({
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

    const distances = await this.location.findDistance(
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
