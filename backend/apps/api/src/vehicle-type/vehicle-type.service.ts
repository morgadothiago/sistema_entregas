import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleType } from "generated/prisma";
import { CreateVehicleTypeDto } from "./dto/create-vehicle-type.dto";
import { UpdateVehicleTypeDto } from "./dto/update-vehicle-type.dto";

@Injectable()
export class VehicleTypeService {
  static data: Partial<VehicleType>[] = [];

  constructor(private prisma: PrismaService) {}

  findOne(type: string): Partial<VehicleType> | undefined {
    return VehicleTypeService.data.find((data) => data.type === type);
  }

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
      pricePerKm: updateVehicleTypeDto.pricePerKm,
      type: updateVehicleTypeDto.type,
    };

    await this.prisma.vehicleType.update({
      where: { id: vehicleType.id },
      data: vehicleType,
    });

    const i = VehicleTypeService.data.findIndex((data) => data.type === type);
    VehicleTypeService.data[i] = vehicleTypeDto;
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
      pricePerKm: body.pricePerKm,
      type: body.type,
    };

    await this.prisma.vehicleType.create({
      data: vehicleTypeDto,
    });

    VehicleTypeService.data.push(vehicleTypeDto);
  }

  async findAll(): Promise<Partial<VehicleType>[]> {
    if (!VehicleTypeService.data.length) {
      VehicleTypeService.data = await this.prisma.vehicleType.findMany({
        where: {},
        select: {
          id: true,
          type: true,
          pricePerKm: true,
        },
      });
    }

    return VehicleTypeService.data;
  }
}
