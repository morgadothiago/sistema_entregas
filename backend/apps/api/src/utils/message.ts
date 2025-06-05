/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ValidationArguments } from "class-validator";

const message = {
  isDecimalPlates: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} deve ser um número com até ${validationArguments.constraints[0]["maxDecimalPlaces"]} casas decimais`;
  },
  isNumber: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} deve ser um número`;
  },
  isMax: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} deve ser menor ou igual a ${validationArguments.constraints[0]}`;
  },
  isMin: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} deve ser maior ou igual a ${validationArguments.constraints[0]}`;
  },
  isString: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} deve ser uma string`;
  },
  minLength: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} deve ter no mínimo ${validationArguments.constraints[0]} caracteres`;
  },
  isEmail: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} deve ser um email válido`;
  },
  isNotEmpty: (validationArguments: ValidationArguments) => {
    return `o campo ${validationArguments.property} não pode ser vazio`;
  },
};

export { message };
