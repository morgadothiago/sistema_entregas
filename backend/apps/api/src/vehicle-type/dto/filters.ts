import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsNumber } from "class-validator";

export class VehicleTypeQueryparams {
  @ApiProperty({
    description: "Page number for pagination",
    required: false,
    default: "1",
  })
  @IsOptional()
  @IsNumber({ allowInfinity: false })
  page?: number;

  @ApiProperty({
    description: "Number of items per page",
    required: false,
    default: "100",
  })
  @IsOptional()
  @IsNumber({ allowInfinity: false })
  limit?: string;
}
