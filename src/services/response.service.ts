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
      ApiResponse.InternalServerError({
        title: "Internal Server Error",
        message: "This is an error response",
      });
    return data;
  },
  getErrorMessage: () => {
    const x = 1;
    if (x < 2)
      throw ApiResponse.InternalServerError({
        title: "Internal Server Error",
        message: "This is an error response",
        errors: { field: "NAME" },
        data: { additionalInfo: "Some extra data" },
      });
    console.log("XXXX");
  },
  getNotFoundMessage: () => {
    throw ApiResponse.NotFound();
  },
  getValidationErrorMessage: () => {
    throw ApiResponse.ValidationError({
      title: "Validation Error",
      message: "This field is required",
      errors: { field: "NAME" },
    });
  },
  getUnauthorizedMessage: () => {
    throw ApiResponse.Unauthorized();
  },
  getForbiddenMessage: () => {
    throw ApiResponse.Forbidden();
  },
  getBadRequestMessage: () => {
    throw ApiResponse.BadRequest();
  },
  getConflictMessage: () => {
    throw ApiResponse.Conflict();
  },
  getInternalServerErrorMessage: () => {
    throw ApiResponse.InternalServerError();
  },
};
