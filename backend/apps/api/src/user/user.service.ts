import { Injectable, NotFoundException } from "@nestjs/common";
import { IUserQueryParams } from "./dto/filter";
import { PrismaService } from "../prisma/prisma.service";
import { paginateResponse } from "../utils/fn";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async paginate(filters: IUserQueryParams, page: number, registers: number) {
    const where = {
      email: filters.email,
      status: filters.status,
      role: filters.role,
    };

    console.log(where, page);

    const users = await this.prisma.user.findMany({
      where,
      omit: {
        password: true,
        createdAt: true,
        updatedAt: true,
        balanceId: true,
      },
      skip: (page - 1) * registers, // Pula os itens das páginas anteriores
      take: registers,
    });

    const total = await this.prisma.user.count({
      where,
    });
    console.log(users, total);
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
            Address: true,
          },
        },
        DeliveryMan: {},
      },
      omit: {
        password: true,
        createdAt: true,
        updatedAt: true,
        balanceId: true,
      },
    });

    if (!user) throw new NotFoundException(`usuario não encontrado`);

    return user;
  }
}
