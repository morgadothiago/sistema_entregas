import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  Matches,
  IsOptional,
} from "class-validator";
import { message } from "../../utils/message";

export class CompanyDto {
  @IsString({
    message: message.isString,
  })
  @IsNotEmpty({ message: message.isNotEmpty })
  name: string;

  @IsEmail({}, { message: message.isEmail })
  @IsNotEmpty({ message: message.isNotEmpty })
  email: string;

  @IsString({
    message: message.isString,
  })
  @IsNotEmpty({ message: message.isNotEmpty })
  @Matches(/^\d{14}$/, { message: "CNPJ deve conter 14 dígitos" })
  cnpj: string;

  @IsString({
    message: message.isString,
  })
  @MinLength(6, { message: message.minLength })
  password: string;

  @IsString({
    message: message.isString,
  })
  @IsNotEmpty({ message: message.isNotEmpty })
  phone: string;

  @IsString({
    message: message.isString,
  })
  @IsNotEmpty({ message: message.isNotEmpty })
  address: string;

  @IsString({
    message: message.isString,
  })
  @IsNotEmpty({ message: message.isNotEmpty })
  city: string;

  @IsString({
    message: message.isString,
  })
  number: string;

  @IsOptional()
  @IsString({
    message: message.isString,
  })
  complement: string;

  @IsString({
    message: message.isString,
  })
  @IsNotEmpty({ message: message.isNotEmpty })
  state: string;

  @IsString({
    message: message.isString,
  })
  @IsNotEmpty({ message: message.isNotEmpty })
  zipCode: string;
}
