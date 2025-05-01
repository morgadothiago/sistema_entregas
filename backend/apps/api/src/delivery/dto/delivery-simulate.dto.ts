import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DeliverySimulateDto {
  @ApiProperty({
    description: "altura do pacote em metros",
    minimum: 0,
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  higth: number;

  @ApiProperty({
    description: "largura do pacote em metros",
    minimum: 0,
    example: 30,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  width: number;

  @ApiProperty({
    description: "comprimento do pacote em metros",
    minimum: 0,
    example: 40,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  length: number;

  @ApiProperty({
    description: "peso do pacote em KG",
    minimum: 0,
    example: 5.5,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  weight: number;

  @ApiProperty({
    description: "codigo do cliente",
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  codeClient: string;

  @ApiProperty({
    description: "tipo de veiculo",
    minimum: 0,
    required: false,
    example: 99.9,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  vehicleType?: string;
}
