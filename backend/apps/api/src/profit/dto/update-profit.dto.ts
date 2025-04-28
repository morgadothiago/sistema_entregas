import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class UpdateProfitDto {
  @ApiProperty({
    description:
      "A porcentagem de lucro, representada como um número entre 0 e 1.",
    example: 0.25,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  percentage: number;
}
