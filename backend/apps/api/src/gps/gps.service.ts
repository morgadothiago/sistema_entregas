import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CurrencyLocationDto } from './dto/currency-location.dto';
import { PrismaService } from '../prisma/prisma.service';
import { GpsGateway } from './gps.gateway';
import { DeliveryStatus } from '@prisma/client';
import { SocketDto } from '../websocket/dto/socket.dto';
import { ILocalization } from '../typing/location';

@Injectable()
export class GpsService implements OnModuleInit {
  constructor(
    private prisma: PrismaService,
    private gpsWebsocket: GpsGateway,
  ) {}

  onModuleInit(): void {
    ['JWT_SECRET', 'JWT_EXPIRATION'].forEach((env) => {
      if (!process.env[env]) {
        throw new Error(`Variável de ambiente ${env} não definida`);
      }
    });
  }

  async getLocation(code: string, socket: SocketDto) {
    const client = this.gpsWebsocket.getClient(socket.socketId ?? '');

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
      omit: {
        createdAt: true,
        updatedAt: true,
        idClientAddress: true,
        idOriginAddress: true,
      },
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

    if (!delivery) {
      throw new NotFoundException(
        `Entrega com codigo '${code}' não foi encontrada`,
      );
    }

    const routes = await this.prisma.$queryRawUnsafe<ILocalization[]>(
      `
      SELECT
        ST_X(coord::geometry) as longitude,
        ST_Y(coord::geometry) as latitude 
        FROM "routes" 
        WHERE delivery_id = $1
    `,
      delivery.id,
    );

    if (client) {
      await this.gpsWebsocket.handleJoinRoom(client, code);
    }

    (
      delivery as unknown as {
        Routes: ILocalization[];
      }
    ).Routes = routes;

    return delivery;
  }

  async createLocation(code: string, body: CurrencyLocationDto): Promise<void> {
    const { latitude, longitude } = body;

    const delivery = await this.prisma.delivery.findUnique({
      where: { code },
      select: {
        id: true,
        status: true,
      },
    });

    if (!delivery) {
      throw new NotFoundException(
        `Entrega com codigo '${code}' não foi encontrada`,
      );
    }

    if (
      ![DeliveryStatus.IN_PROGRESS].find((status) => status === delivery.status)
    ) {
      throw new ForbiddenException(
        `Entrega com codigo '${code}' não está em andamento`,
      );
    }

    await this.prisma.$queryRawUnsafe<{ id: number }[]>(
      `
      INSERT INTO "routes" (coord, delivery_id)
      VALUES (ST_SetSRID(ST_MakePoint($1, $2), 4326), $3)
      RETURNING id
      `,
      longitude,
      latitude,
      delivery.id,
    );

    this.gpsWebsocket.emitRoom(code, 'update-location', {
      latitude,
      longitude,
    });
  }
}
