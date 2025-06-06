import { IsString } from "class-validator";

export class SocketDto {
  @IsString()
  socketId: string;
}
