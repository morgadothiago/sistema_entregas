import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVehicleTypeDto {
  @ApiProperty({
    required: false,
    description: 'nome do tipo de veiculo',
    example: 'carro',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  type?: string;

  @ApiProperty({
    description: 'tarifa base do veículo',
    example: 100.0,
    type: Number,
  })
  @IsNumber({ allowInfinity: false })
  @IsOptional()
  @IsNotEmpty()
  tarifaBase?: number;

  @ApiProperty({
    description: 'valor por KM adicional',
    example: 10.5,
    type: Number,
  })
  @IsNumber({ allowInfinity: false })
  @IsOptional()
  @IsNotEmpty()
  valorKMAdicional?: number;

  @ApiProperty({
    description: 'valor por parada adicional',
    example: 25.0,
    type: Number,
  })
  @IsNumber({ allowInfinity: false })
  @IsOptional()
  @IsNotEmpty()
  ParadaAdicional?: number;

  @ApiProperty({
    description: 'valor por ajudante adicional',
    example: 50.0,
    type: Number,
  })
  @IsNumber({ allowInfinity: false })
  @IsOptional()
  @IsNotEmpty()
  AjudanteAdicional?: number;
}
