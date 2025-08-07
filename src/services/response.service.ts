import { ApiResponse } from "../utils/response/response.utils";
import {
  NotFoundError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  BadRequestError,
  ConflictError,
  InternalServerError,
} from "../utils/response/apiError";
type mockData = {
  name: string;
  tel: string;
};

export const responseService = {
  getData: () => {
    const data: mockData = {
      name: "test",
      tel: " test",
    };
    const x = 2;
    if (x < 2)
      throw new InternalServerError({
        code: 500,
        title: "Internal Server Error",
        message: "This is an error response",
      });
    return data;
  },
  getErrorMessage: () => {
    const x = 1;
    if (x < 2)
      throw new InternalServerError({
        code: 500,
        title: "Internal Server Error",
        message: "This is an error response",
        data: { additionalInfo: "Some extra data" },
        errors: { field: "NAME" },
      });
    console.log("XXXX");
  },
  getNotFoundMessage: () => {
    throw new NotFoundError();
  },
  getValidationErrorMessage: () => {
    throw new ValidationError({
      code: 400,
      title: "Validation Error",
      message: "This field is required",
      data: { additionalInfo: "Some extra data" },
      errors: { field: "NAME" },
    });
  },
  getUnauthorizedMessage: () => {
    throw new UnauthorizedError();
  },
  getForbiddenMessage: () => {
    throw new ForbiddenError();
  },
  getBadRequestMessage: () => {
    throw new BadRequestError();
  },
  getConflictMessage: () => {
    throw new ConflictError();
  },
  getInternalServerErrorMessage: () => {
    throw new InternalServerError();
  },
};
