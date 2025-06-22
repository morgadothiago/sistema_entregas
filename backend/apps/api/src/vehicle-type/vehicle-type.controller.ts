import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VehicleTypeService } from './vehicle-type.service';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';
import { VehicleTypeQueryparams } from './dto/filters';

@Controller('vehicle-types')
@ApiTags('vehicle-type')
export class VehicleTypeController {
  constructor(private vehicleTypeService: VehicleTypeService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Pega todos' })
  async findAll(@Query() query: VehicleTypeQueryparams) {
    return this.vehicleTypeService.findAll(
      +Math.max(Number(query.page) || 1, 1),
      +Math.max(Number(query.limit) || 100, 1),
    );
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Atualiza um tipo de veiculo' })
  async create(@Body() body: CreateVehicleTypeDto) {
    return this.vehicleTypeService.create(body);
  }

  @Patch(':type')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Atualiza um tipo de veiculo' })
  async update(
    @Param('type') type: string,
    @Body() updateVehicleTypeDto: UpdateVehicleTypeDto,
  ) {
    return this.vehicleTypeService.update(type, updateVehicleTypeDto);
  }

  @Delete(':type')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deleta um tipo de veiculo' })
  async delete(@Param('type') type: string) {
    return this.vehicleTypeService.delete(type);
  }
}
