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
    if (x < 2) throw ApiResponse.Error("This is an error response");
    return data;
  },
  getErrorMessage: () => {
    const x = 1;
    if (x < 2) throw ApiResponse.Error("This is an error response");
    console.log("XXXX");
  },
  getNotFoundMessage: () => {
    ApiResponse.NotFound();
  },
  getValidationErrorMessage: () => {
    ApiResponse.ValidationError({ field: "This field is required" });
  },
  getUnauthorizedMessage: () => {
    ApiResponse.Unauthorized();
  },
  getForbiddenMessage: () => {
    ApiResponse.Forbidden();
  },
  getBadRequestMessage: () => {
    ApiResponse.BadRequest();
  },
  getConflictMessage: () => {
    ApiResponse.Conflict();
  },
  getInternalServerErrorMessage: () => {
    ApiResponse.InternalServerError();
  },
};
