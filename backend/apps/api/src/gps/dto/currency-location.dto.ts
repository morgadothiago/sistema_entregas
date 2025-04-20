import { IsNumber, Max, Min } from "class-validator";
import { message } from "../../utils/message";

export class CurrencyLocationDto {
  @IsNumber({ maxDecimalPlaces: 8 })
  @Min(-90, {
    message: message.isMin,
  })
  @Max(90, { message: message.isMax })
  latitude: number;

  @IsNumber({ maxDecimalPlaces: 8 }, { message: message.isDecimalPlates })
  @Min(-180, {
    message: message.isMin,
  })
  @Max(180, { message: message.isMax })
  longitude: number;
}
