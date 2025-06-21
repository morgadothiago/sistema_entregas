import { Injectable, NotFoundException } from "@nestjs/common";
import { DeliveryCreateDto } from "./dto/delivery-create.dto";
import { DeliverySimulateDto } from "./dto/delivery-simulate.dto";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleTypeService } from "../vehicle-type/vehicle-type.service";
import { LocationService } from "../location/location.service";
import { VehicleType } from "@prisma/client";
import { IRoute } from "../typing/location";
import { createCode } from "../utils/fn";
import { CacheService } from "../cache/cache.service";


@Injectable()
export class DeliveryService {
  constructor(
    private prismaService: PrismaService,
    private vehicleType: VehicleTypeService,
    private locationService: LocationService,
    private cacheService: CacheService
  ) {}

  async simulateDelivery(
    body: DeliverySimulateDto,
    idUser: number,
  ): Promise<{
    location: IRoute;
    price: number;
  }> {
    const companyLocalization = body.useAddressCompany 
    ? await this.locationService.getAddressLocalizationByUser(
        this.prismaService, idUser, 'companies'
      )
    : await this.locationService.reverse(
        body.address.city,
        body.address.state,
        body.address.street,
        body.address.number,
        body.address.zipCode,
    );

    const key = `simulate:${body.vehicleType}:${companyLocalization.longitude}:${companyLocalization.latitude}:${body.clientAddress.city}:${body.clientAddress.state}:${body.clientAddress.street}:${body.clientAddress.number}:${body.clientAddress.zipCode}`
    const cache = await this.cacheService.getValue(key)

    if(cache) {
      return JSON.parse(cache)
    }

    const vehicleType: VehicleType = await this.vehicleType.findOne(
      body.vehicleType,
    );

    if (!vehicleType) {
      throw new NotFoundException(
        `Tipo de veiculo '${body.vehicleType}' nao foi encontrado`,
      );
    }

    const location = await this.locationService.reverse(
      body.clientAddress.city,
      body.clientAddress.state,
      body.clientAddress.street,
      body.clientAddress.number,
      body.clientAddress.zipCode,
    );

    const geoInfo = await this.locationService.findDistance(
      location,
      companyLocalization,
    );

    const price = this.vehicleType.calculatePrice(vehicleType, geoInfo);

    const result =  {
      location: geoInfo,
      price,
    };

    await this.cacheService.setCache(key, JSON.stringify(result), 60 * 60)

    return result
  }
  
  generatePrefix(str: string): string {
    const words = str.toLocaleUpperCase().split(' ');

    if (words.length >= 2)
      return (words[0].charAt(0) + words[1].charAt(0)).concat('-');
    
    return words[0].substring(0, 2).concat('-')
  }

  async generateCode(_prefix = 'BR') {
    const prefix  = this.generatePrefix(_prefix)

    let code = createCode(4, prefix);

    while (true) {
      const delivery = await this.prismaService.delivery.findFirst({
        where: {
          code,
        },
        select: {
          id: true,
        },
      });

      if (!delivery)
        break;

      code = createCode(4, prefix);
    }

    return code;
  }

  async createDelivery(body: DeliveryCreateDto, idUser: number) {
    return this.prismaService.$transaction(async (prisma) => {

      const { price } = await this.simulateDelivery(body, idUser)
    
      const clientAddress = await this.locationService.createAddress(prisma as PrismaService, body.clientAddress)
      
      if(body.useAddressCompany)
        body.address = await this.locationService.getAddressByUser(prisma as PrismaService, idUser, "companies")
      
      const originAddress = await this.locationService.createAddress(prisma as PrismaService, body.address)
      
      if (!clientAddress || !originAddress) {
        throw new Error('Failed to create addresses');
      }
      
      const vehicleType = await this.vehicleType.findOne(body.vehicleType)
        
      if(!vehicleType)
          throw new NotFoundException(`Tipo de veiculo '${body.vehicleType}' não foi encontrado`)
      
      const code = await this.generateCode(body.clientAddress.street)

      await prisma.delivery.create({
        data: {
          code,
          height: body.height,
          width: body.width,
          length: body.length,
          weight: body.weight,
          information: body.information.trim(),
          price,
          email: body.email.trim(),
          telefone: body.telefone.trim(),
          vehicleType: body.vehicleType,
          Company: {
            connect: {
              idUser,
            },
          },
          ClientAddress: {
            connect: {
              id: clientAddress.id,
            },
          },
          OriginAddress: {
            connect: {
              id: originAddress.id,
            },
          },
        }
      })

      return {
        code
      }
    })
    
   
  }
}
