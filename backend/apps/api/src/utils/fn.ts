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

export const paginateResponse = <T>(
  data: T[],
  page: number,
  limit: number,
  total: number,
) => {
  if (data.length === 0) {
    return {
      data,
      total,
      currentPage: page,
      totalPage: 0,
    };
  }

  const lastPage = Math.ceil(total / limit);

  return {
    data,
    total,
    currentPage: page,
    totalPage: lastPage,
  };
};
