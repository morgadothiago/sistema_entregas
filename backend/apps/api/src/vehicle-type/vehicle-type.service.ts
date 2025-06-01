import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleType } from "@prisma/client";
import { CreateVehicleTypeDto } from "./dto/create-vehicle-type.dto";
import { UpdateVehicleTypeDto } from "./dto/update-vehicle-type.dto";
import { IPaginateResponse, paginateResponse } from "../utils/fn";
import { Decimal } from "@prisma/client/runtime/library";

@Injectable()
export class VehicleTypeService {
  static data: Partial<VehicleType>[] = [];

  constructor(private prisma: PrismaService) {}

  async delete(type: string) {
    const vehicleType = await this.prisma.vehicleType.findUnique({
      where: { type },
      select: { id: true },
    });

    if (!vehicleType)
      throw new NotFoundException(
        `Tipo de veiculo '${type}' nao foi encontrado`,
      );

    await this.prisma.vehicleType.delete({
      where: {
        type: type,
      },
    });

    VehicleTypeService.data.filter((data) => data.type !== type);
  }

  async update(
    type: string,
    updateVehicleTypeDto: UpdateVehicleTypeDto,
  ): Promise<void> {
    const vehicleType = await this.prisma.vehicleType.findUnique({
      where: { type },
      select: { id: true },
    });

    if (!vehicleType)
      throw new NotFoundException(
        `Tipo de veiculo '${type}' nao foi encontrado`,
      );

    if (updateVehicleTypeDto.type) {
      const conflict = await this.prisma.vehicleType.findFirst({
        where: {
          type: updateVehicleTypeDto.type,
          id: {
            not: vehicleType.id,
          },
        },
      });

      if (conflict)
        throw new ConflictException(`Tipo de veiculo '${type}' já existe`);
    }

    const vehicleTypeDto = {
      tarifaBase: updateVehicleTypeDto.tarifaBase as unknown as Decimal,
      valorKMAdicional:
        updateVehicleTypeDto.valorKMAdicional as unknown as Decimal,
      ParadaAdicional:
        updateVehicleTypeDto.ParadaAdicional as unknown as Decimal,
      AjudanteAdicional:
        updateVehicleTypeDto.AjudanteAdicional as unknown as Decimal,
      type: updateVehicleTypeDto.type,
    };

    await this.prisma.vehicleType.update({
      where: { id: vehicleType.id },
      data: vehicleTypeDto,
    });
  }

  async create(body: CreateVehicleTypeDto): Promise<void> {
    const conflict = await this.prisma.vehicleType.findFirst({
      where: {
        type: body.type,
      },
    });

    if (conflict)
      throw new ConflictException(`Tipo de veiculo '${body.type}' já existe`);

    const vehicleTypeDto = {
      type: body.type,
      tarifaBase: new Decimal(body.tarifaBase),
      valorKMAdicional: new Decimal(body.valorKMAdicional),
      paradaAdicional: new Decimal(body.ParadaAdicional),
      ajudanteAdicional: new Decimal(body.AjudanteAdicional),
    };

    await this.prisma.vehicleType.create({
      data: vehicleTypeDto,
    });
  }

  async findAll(
    page: number,
    registers: number,
  ): Promise<IPaginateResponse<Partial<VehicleType>>> {
    const where = {};

    const [data, total] = await Promise.all([
      this.prisma.vehicleType.findMany({
        where,
        omit: { createdAt: true, updatedAt: true },
        skip: (page - 1) * registers,
        take: registers,
      }),

      this.prisma.vehicleType.count({
        where,
      }),
    ]);

    return paginateResponse(data, page, registers, total);
  }
}
