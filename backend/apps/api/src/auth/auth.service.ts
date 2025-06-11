import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyDto } from "./dto/company.dto";
import { Company, DeliveryMan, Role, UserStatus } from "@prisma/client";
import { DeliverymanDto } from "./dto/deliverymen.dto";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signupCompany(company: CompanyDto) {
    const salt = await bcrypt.genSalt(12);

    const hashedPassword = await bcrypt.hash(company.password, salt);

    const existingUser = await this.prisma.user.findUnique({
      where: { email: company.email },
    });

    if (existingUser) throw new ConflictException("Email já cadastrado");

    const existingCnpj = await this.prisma.user.findFirst({
      where: { Company: { cnpj: company.cnpj } },
    });

    if (existingCnpj) throw new ConflictException("CNPj já cadastrado");

    await this.prisma.user.create({
      data: {
        email: company.email,
        password: hashedPassword,
        role: Role.COMPANY,
        status: UserStatus.BLOCKED,
        information: "cadastro precisa ser desbloqueado",
        Company: {
          create: {
            name: company.name,
            cnpj: company.cnpj,
            phone: company.phone,
            Address: {
              create: {
                city: company.city,
                state: company.state,
                street: company.address,
                number: company.number,
                zipCode: company.zipCode,
                complement: company.complement,
                country: "Brasil",
              },
            },
          },
        },
        Balance: {
          create: {
            amount: 0,
          },
        },
      },
    });
  }

  async signupDeliveryman(deliveryman: DeliverymanDto): Promise<void> {
    return this.prisma.$transaction(async (tx) => {
      const vehicleType = await tx.vehicleType.findFirst({
        where: { type: deliveryman.vehicleType },
        select: { id: true },
      });

      if (!vehicleType || !vehicleType.id) {
        throw new NotFoundException("Tipo de veículo não encontrado");
      }

      const vehicleTypeId = vehicleType.id;

      const existingVehicle = await tx.vehicle.findFirst({
        where: { licensePlate: deliveryman.licensePlate },
        select: { id: true },
      });

      if (existingVehicle) {
        throw new ConflictException("Placa já cadastrada");
      }

      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(deliveryman.password, salt);

      const existingUser = await tx.user.findUnique({
        where: { email: deliveryman.email },
      });

      if (existingUser) throw new ConflictException("Email já cadastrado");

      const existingCpf = await tx.user.findFirst({
        where: { DeliveryMan: { cpf: deliveryman.cpf } },
      });

      if (existingCpf) throw new ConflictException("CPF já cadastrado");

      await tx.user.create({
        data: {
          email: deliveryman.email,
          password: hashedPassword,
          role: Role.DELIVERY,
          status: UserStatus.NO_DOCUMENTS as UserStatus,
          information: `
          ### Sistema
          - Aguardando documentos
          - Aguardando desbloqueio`,
          DeliveryMan: {
            create: {
              dob: new Date(deliveryman.dob),
              name: deliveryman.name,
              cpf: deliveryman.cpf,
              phone: deliveryman.phone,
              Address: {
                create: {
                  city: deliveryman.city,
                  state: deliveryman.state,
                  street: deliveryman.address,
                  number: deliveryman.number,
                  zipCode: deliveryman.zipCode,
                  complement: deliveryman.complement,
                  country: "Brasil",
                },
              },
              Vehicle: {
                create: {
                  brand: deliveryman.brand,
                  color: deliveryman.color,
                  licensePlate: deliveryman.licensePlate,
                  model: deliveryman.model,
                  vehicleTypeId,
                  year: deliveryman.year,
                },
              },
            },
          },
          Balance: {
            create: {
              amount: 0,
            },
          },
        },
      });
    });
  }

  async login(loginDto: LoginDto, isMobile: boolean) {
    const whereClause: {
      email: string;
      role?: Role;
    } = {
      email: loginDto.email,
    };

    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: whereClause,
        include: {
          Balance: {
            omit: {
              createdAt: true,
              updatedAt: true,
              id: true,
            },
          },
          Extract: {
            skip: 0,
            take: 10,
            orderBy: {
              createdAt: "desc",
            },
          },
          Company: {
            omit: {
              createdAt: true,
              updatedAt: true,
              id: true,
              idUser: true,
              idAddress: true,
            },
            include: {
              Address: {
                omit: {
                  createdAt: true,
                  updatedAt: true,
                  id: true,
                },
              },
            },
          },
          DeliveryMan: {
            omit: {
              createdAt: true,
              updatedAt: true,
              id: true,
              userId: true,
              addressId: true,
              vehicleId: true,
            },
            include: {
              Address: {
                omit: {
                  createdAt: true,
                  updatedAt: true,
                  id: true,
                },
              },
              Vehicle: {
                omit: {
                  createdAt: true,
                  updatedAt: true,
                  id: true,
                  vehicleTypeId: true,
                },
              },
            },
          },
        },
        omit: {
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        throw new UnauthorizedException("Credenciais inválidas");
      }

      if (user.role === Role.DELIVERY && isMobile) {
        throw new UnauthorizedException(
          "Apenas dispositivos móveis podem acessar a rota de entregadores",
        );
      }

      const isPasswordValid = await bcrypt.compare(
        loginDto.password,
        user.password,
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException("Credenciais inválidas");
      }

      const payload = { id: user.id };

      return {
        token: await this.jwtService.signAsync(payload),
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          Balance: user.Balance,
          Extract: user.Extract ?? [],
          Company: user.Company as unknown as Company,
          DeliveryMan: user.DeliveryMan as unknown as DeliveryMan,
        },
      };
    });
  }
}
