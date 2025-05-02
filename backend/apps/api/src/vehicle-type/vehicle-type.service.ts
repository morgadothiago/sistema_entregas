import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleType } from "@prisma/client";
import { CreateVehicleTypeDto } from "./dto/create-vehicle-type.dto";
import { UpdateVehicleTypeDto } from "./dto/update-vehicle-type.dto";
import { CacheService } from "cache/cache.service";

@Injectable()
export class VehicleTypeService {
  constructor(
    private prisma: PrismaService,
    private cache: CacheService,
  ) {}

  async findOne(type: string): Promise<Partial<VehicleType> | undefined> {
    const data = await this.cache.getValue(
      `${VehicleTypeService.name}:${type}`,
    );

    if (data) return JSON.parse(data) as VehicleType;

    const vehicleType = await this.prisma.vehicleType.findUnique({
      where: { type },
      select: { id: true, pricePerKm: true, type: true },
    });

    if (!vehicleType)
      throw new NotFoundException(
        `Tipo de veiculo '${type}' nao foi encontrado`,
      );

    await this.cache.setCache(
      `${VehicleTypeService.name}:type`,
      JSON.stringify(vehicleType),
      60 * 60 * 24, // 24h
    );

    return vehicleType;
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
      data: vehicleTypeDto,
    });

    await this.cache.delete(`${VehicleTypeService.name}:type`);
    await this.cache.delete(VehicleTypeService.name);
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

    await this.cache.setCache(
      `${VehicleTypeService.name}:type`,
      JSON.stringify(vehicleTypeDto),
    );

    await this.cache.delete(VehicleTypeService.name);
  }

  async findAll(): Promise<Partial<VehicleType>[]> {
    const data = await this.cache.getValue(VehicleTypeService.name);

    if (data) return JSON.parse(data) as VehicleType[];

    const vehicleTypes = await this.prisma.vehicleType.findMany({
      where: {},
      select: {
        id: true,
        type: true,
        pricePerKm: true,
      },
    });

    await this.cache.setCache(
      VehicleTypeService.name,
      JSON.stringify(vehicleTypes),
      60 * 60 * 24, // 24h
    );

    return vehicleTypes;
  }
}
