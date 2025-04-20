import { UnprocessableEntityException } from "@nestjs/common";
import { ValidationError } from "class-validator";

export const exceptionFactory = (validationErrors: ValidationError[]) => {
  const errors = validationErrors.map((error) => {
    const constraints = Object.values(error.constraints || {});

    return {
      [error.property]: constraints,
    };
  });

  return new UnprocessableEntityException(errors);
};
