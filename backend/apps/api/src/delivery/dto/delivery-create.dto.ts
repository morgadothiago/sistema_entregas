import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { DeliverySimulateDto } from "./delivery-simulate.dto";

export class DeliveryCreateDto extends DeliverySimulateDto{
  @ApiProperty({
    description: "Height of the delivery package in centimeters",
    minimum: 0,
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  height: number;

  @ApiProperty({
    description: "Width of the delivery package in centimeters",
    minimum: 0,
    example: 30,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  width: number;

  @ApiProperty({
    description: "Length of the delivery package in centimeters",
    minimum: 0,
    example: 40,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  length: number;

  @ApiProperty({
    description: "Weight of the delivery package in kilograms",
    minimum: 0,
    example: 5.5,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  weight: number;

  
  
}
