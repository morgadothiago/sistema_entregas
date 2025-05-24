import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class UpdateVehicleTypeDto {
  @ApiProperty({
    required: false,
    description: "nome do tipo de veiculo",
    example: "carro",
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  type?: string;

  @ApiProperty({
    required: false,
    minimum: 0,
    description: "valor em reais por km",
    example: "10.50",
  })
  @IsOptional()
  @Min(0)
  @IsNumber()
  @IsNotEmpty()
  pricePerKm?: number;
}
