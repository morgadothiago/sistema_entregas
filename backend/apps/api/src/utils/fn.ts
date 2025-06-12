import {
  NotFoundException,
  UnprocessableEntityException,
} from "@nestjs/common";
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

export interface IPaginateResponse<T> {
  data: T[];
  total: number;
  currentPage: number;
  totalPage: number;
}

export const paginateResponse = <T>(
  data: T[],
  page: number,
  limit: number,
  total: number,
): IPaginateResponse<T> => {
  const totalPage = Math.ceil(total / limit);

  if (!data.length) {
    throw new NotFoundException({
      data,
      total,
      currentPage: page,
      totalPage,
    });
  }

  return {
    data,
    total,
    currentPage: page,
    totalPage,
  };
};

// Em um controller ou middleware
export function isMobileDevice(agent: string | undefined): boolean {
  console.log(agent);
  const userAgent = agent || "";

  // Regex para detectar dispositivos móveis comuns
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  return mobileRegex.test(userAgent);
}
