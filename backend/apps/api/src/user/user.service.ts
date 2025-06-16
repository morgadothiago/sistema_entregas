import { Injectable, NotFoundException } from "@nestjs/common";
import { IUserQueryParams } from "./dto/filter";
import { PrismaService } from "../prisma/prisma.service";
import { paginateResponse } from "../utils/fn";
import { LocationService } from "../location/location.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async paginate(filters: IUserQueryParams, page: number, registers: number) {
    const where = {
      email: filters.email,
      status: filters.status,
      role: filters.role,
    };

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        omit: {
          password: true,
          createdAt: true,
          updatedAt: true,
          balanceId: true,
        },
        skip: (page - 1) * registers, // Pula os itens das páginas anteriores
        take: registers,
      }),

      this.prisma.user.count({
        where,
      }),
    ]);

    return paginateResponse(users, page, registers, total);
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Company: {
          omit: { id: true, idUser: true, createdAt: true, updatedAt: true },
          include: {
            Address: {
              omit: {
                createdAt: true,
                updatedAt: true
              }
            },
          },
        },
        DeliveryMan: {
          omit: {
            createdAt: true,
            updatedAt: true,
            userId: true,
            idAddress: true,
            vehicleId: true,
          },
          include: {
            Address: true,
            Vehicle: {
              omit: {
                id: true,
                createdAt: true,
                updatedAt: true,
              },

              include: {
                Type: {
                  select: {
                    type: true
                  }
                }
              }
            },
          }
        },
      },
      omit: {
        password: true,
        createdAt: true,
        updatedAt: true,
        balanceId: true,
      },
    });

    if (!user) throw new NotFoundException(`usuario com codigo '${id}' não encontrado`);

    const coordinates = await LocationService.getAddressLocalization(this.prisma, user.Company ? user.Company.Address.id : user.DeliveryMan?.Address.id as number);

    ((user.Company?.Address || user.DeliveryMan?.Address) as any).localization = coordinates;

    return user;
  }
}
