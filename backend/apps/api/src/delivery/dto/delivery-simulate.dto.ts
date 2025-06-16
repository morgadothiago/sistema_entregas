import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DeliverySimulateDto {
  /* @ApiProperty({
    description: "altura do pacote em metros",
    minimum: 0,
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  height: number;

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
  weight: number; */

  @ApiProperty({
    description: "cidade do endereço de entrega",
    example: "São Paulo",
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: "estado do endereço de entrega",
    example: "SP",
  })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({
    description: "endereço de entrega",
    example: "Rua Exemplo",
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    description: "número do endereço de entrega",
    example: "123",
  })
  @IsNotEmpty()
  @IsString()
  number: string;

  @ApiProperty({
    description: "CEP do endereço de entrega",
    example: "12345-678",
  })
  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @ApiProperty({
    description: "tipo de veiculo",
    minimum: 0,
    required: true,
    example: 99.9,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  vehicleType: string;
}
