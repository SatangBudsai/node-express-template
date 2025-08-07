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
      ApiResponse.InternalServerErrorThrow(
        500,
        "Internal Server Error",
        "This is an error response"
      );
    return data;
  },
  getErrorMessage: () => {
    const x = 1;
    if (x < 2)
      ApiResponse.InternalServerErrorThrow(
        500,
        "Internal Server Error",
        "This is an error response",
        { additionalInfo: "Some extra data" },
        { field: "NAME" }
      );
    console.log("XXXX");
  },
  getNotFoundMessage: () => {
    ApiResponse.NotFoundThrow();
  },
  getValidationErrorMessage: () => {
    ApiResponse.ValidationErrorThrow(
      400,
      "Validation Error",
      "This field is required",
      undefined,
      { field: "NAME" }
    );
  },
  getUnauthorizedMessage: () => {
    ApiResponse.UnauthorizedThrow();
  },
  getForbiddenMessage: () => {
    ApiResponse.ForbiddenThrow();
  },
  getBadRequestMessage: () => {
    ApiResponse.BadRequestThrow();
  },
  getConflictMessage: () => {
    ApiResponse.ConflictThrow();
  },
  getInternalServerErrorMessage: () => {
    ApiResponse.InternalServerErrorThrow();
  },
};
