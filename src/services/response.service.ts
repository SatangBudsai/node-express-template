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
      throw ApiResponse.Error({ message: "This is an error response" });
    return data;
  },
  getErrorMessage: () => {
    const x = 1;
    if (x < 2)
      throw ApiResponse.Error({ message: "This is an error response" });
    console.log("XXXX");
  },
  getNotFoundMessage: () => {
    throw ApiResponse.NotFound();
  },
  getValidationErrorMessage: () => {
    throw ApiResponse.ValidationError({
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
