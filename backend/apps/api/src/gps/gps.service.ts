import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CurrencyLocationDto } from "./dto/currency-location.dto";
import { PrismaService } from "../prisma/prisma.service";
import { GpsGateway } from "./gps.gateway";
import { DeliveryStatus } from "generated/prisma";

@Injectable()
export class GpsService {
  constructor(
    private prisma: PrismaService,
    private gpsWebsocket: GpsGateway,
  ) {}

  async getLocation(code: string) {
    const delivery = await this.prisma.delivery.findUnique({
      where: { code },
      include: {
        DeliveryMan: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        Localization: {
          select: {
            latitude: true,
            longitude: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!delivery)
      throw new NotFoundException(
        `Entrega com codigo '${code}' não foi encontrada`,
      );

    return delivery;
  }

  async createLocation(code: string, body: CurrencyLocationDto) {
    const { latitude, longitude } = body;

    const delivery = await this.prisma.delivery.findUnique({
      where: { code },
      select: {
        id: true,
        status: true,
      },
    });

    if (!delivery)
      throw new NotFoundException(
        `Entrega com codigo '${code}' não foi encontrada`,
      );

    if (
      ![DeliveryStatus.IN_PROGRESS].find((status) => status === delivery.status)
    )
      throw new ForbiddenException(
        `Entrega com codigo '${code}' não está em andamento`,
      );

    await this.prisma.localization.create({
      data: {
        latitude,
        longitude,
        deliveryId: delivery.id,
      },
    });

    this.gpsWebsocket.emitRoom(code, "update-location", {
      latitude,
      longitude,
    });
  }
}
