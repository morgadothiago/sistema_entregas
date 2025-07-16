import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVehicleTypeDto {
  @ApiProperty({
    description: 'nome do tipo de veiculo',
    example: 'carro',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    description: 'tarifa base do veículo',
    example: 100.0,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  tarifaBase: number;

  @ApiProperty({
    description: 'valor por KM adicional',
    example: 10.5,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  valorKMAdicional: number;

  @ApiProperty({
    description: 'valor por parada adicional',
    example: 25.0,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  paradaAdicional: number;

  @ApiProperty({
    description: 'valor por ajudante adicional',
    example: 50.0,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  ajudanteAdicional: number;
}
