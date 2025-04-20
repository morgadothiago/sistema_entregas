import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Query,
} from "@nestjs/common";
import { CurrencyLocationDto } from "./dto/currency-location.dto";
import { GpsService } from "./gps.service";
import { GpsGateway } from "./gps.gateway";
import { SocketDto } from "../websocket/dto/socket.dto";

@Controller("gps")
export class GpsController {
  constructor(
    private gpsService: GpsService,
    private gpsWebsocket: GpsGateway,
  ) {}

  @Get("delivery/:code")
  @HttpCode(HttpStatus.OK)
  async getLocation(@Param("code") code: string, @Query() socket: SocketDto) {
    const client = this.gpsWebsocket.getClient(socket.socketId);

    if (client) {
      await this.gpsWebsocket.handleJoinRoom(client, code);
    }

    return this.gpsService.getLocation(code);
  }

  @Patch("delivery/:code")
  @HttpCode(HttpStatus.NO_CONTENT)
  createLocation(
    @Body() body: CurrencyLocationDto,
    @Param("code") code: string,
  ) {
    return this.gpsService.createLocation(code, body);
  }
}
