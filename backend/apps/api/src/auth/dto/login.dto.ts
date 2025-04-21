import { IsEmail, IsString, MinLength } from "class-validator";
import { message } from "../../utils/message";

export class LoginDto {
  @IsEmail(
    {},
    {
      message: message.isEmail,
    },
  )
  email: string;

  @IsString({ message: message.isString })
  @MinLength(6, { message: message.minLength })
  password: string;
}
