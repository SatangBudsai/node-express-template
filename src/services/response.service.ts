import { ApiResponse } from "../utils/response/response.utils";
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
      throw new ApiResponse.InternalServerError({
        title: "Internal Server Error",
        message: "This is an error response",
      });
    return data;
  },
  getErrorMessage: () => {
    const x = 1;
    if (x < 2)
      throw new ApiResponse.InternalServerError({
        title: "Internal Server Error",
        message: "This is an error response",
        data: { additionalInfo: "Some extra data" },
        errors: { field: "NAME" },
      });
    console.log("XXXX");
  },
  getNotFoundMessage: () => {
    throw new ApiResponse.NotFoundError();
  },
  getValidationErrorMessage: () => {
    throw new ApiResponse.ValidationError({
      title: "Validation Error",
      message: "This field is required",
      data: { additionalInfo: "Some extra data" },
      errors: { field: "NAME" },
    });
  },
  getUnauthorizedMessage: () => {
    throw new ApiResponse.UnauthorizedError();
  },
  getForbiddenMessage: () => {
    throw new ApiResponse.ForbiddenError();
  },
  getBadRequestMessage: () => {
    throw new ApiResponse.BadRequestError();
  },
  getConflictMessage: () => {
    throw new ApiResponse.ConflictError();
  },
  getInternalServerErrorMessage: () => {
    throw new ApiResponse.InternalServerError();
  },
};
