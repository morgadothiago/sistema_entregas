import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from "@nestjs/common";
import { CurrencyLocationDto } from "./dto/currency-location.dto";
import { PrismaService } from "../prisma/prisma.service";
import { GpsGateway } from "./gps.gateway";
import { DeliveryStatus } from "@prisma/client";
import { SocketDto } from "../websocket/dto/socket.dto";

@Injectable()
export class GpsService implements OnModuleInit {
  constructor(
    private prisma: PrismaService,
    private gpsWebsocket: GpsGateway,
  ) {}

  onModuleInit() {
    ["JWT_SECRET", "JWT_EXPIRATION"].forEach((env) => {
      if (!process.env[env]) {
        throw new Error(`Variável de ambiente ${env} não definida`);
      }
    });
  }

  async getLocation(code: string, socket: SocketDto) {
    const client = this.gpsWebsocket.getClient(socket.socketId || "");

    if (!client) {
      /*  throw new NotFoundException(
        `Cliente com socketId '${socket.socketId}' não foi encontrado`,
      ); */
      console.warn(
        `Cliente com socketId '${socket.socketId}' não foi encontrado`,
      );
    }

    const delivery = await this.prisma.delivery.findUnique({
      where: { code },
      include: {
        DeliveryMan: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
      },
    });

    if (!delivery)
      throw new NotFoundException(
        `Entrega com codigo '${code}' não foi encontrada`,
      );

    if (client) await this.gpsWebsocket.handleJoinRoom(client, code);

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

       const [address] = await this.prisma.$queryRawUnsafe<
      { id: number }[]
    >(
      `
      INSERT INTO "Address" (city, state, street, number, "zipCode", localization, deliveryId)
      VALUES ($1, $2, $3, $4, $5, ST_SetSRID(ST_MakePoint($6, $7), 4326), $8)
      RETURNING id
      `,
      'city',
      'state',
      'address',
      'number',
      'zipCode',
      longitude,
      latitude,
      delivery.id,
    );

    this.gpsWebsocket.emitRoom(code, "update-location", {
      latitude,
      longitude,
    });
  }
}
