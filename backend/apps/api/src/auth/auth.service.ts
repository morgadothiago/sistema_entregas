import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyDto } from "./dto/company.dto";
import { Balance, Company, Extract, Role, UserStatus } from "@prisma/client";

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

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
      include: {
        Balance: true,
        Extract: true,
        Company: {
          include: { Address: true },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException("Credenciais inválidas");
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
        Balance: user.Balance as Balance,
        Extract: (user.Extract ?? []) as Extract[],
        Company: user.Company as Company,
      },
    };
  }
}
