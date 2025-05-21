import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateProfitDto } from "./dto/update-profit.dto";
import { ProfitMargin } from "@prisma/client";

@Injectable()
export class ProfitService {
  readonly id: number = 1;
  constructor(private prisma: PrismaService) {}

  async update(body: UpdateProfitDto) {
    await this.prisma.profitMargin.update({
      where: { id: this.id },
      data: {
        percentage: body.percentage,
      },
    });
  }

  async findOne(): Promise<Partial<ProfitMargin>> {
    return (
      (await this.prisma.profitMargin.findUnique({
        where: { id: this.id },
        select: { id: true, percentage: true },
      })) || ({} as ProfitMargin)
    );
  }
}
