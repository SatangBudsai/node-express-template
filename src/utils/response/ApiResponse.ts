import { ApiResponseType } from "./apiResponseType";

// src/utils/ApiResponse.ts
export class ApiResponse {
  static Success<T>(
    data: T,
    message: string = "Success",
    code: number = 200
  ): ApiResponseType<T> {
    return {
      status: "success",
      code,
      message,
      data,
    };
  }

  static ValidationError<T>(
    message: string,
    errorCode: number = 400,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static NotFoundError<T>(
    message: string,
    errorCode: number = 404,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static UnauthorizedError<T>(
    message: string,
    errorCode: number = 401,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static ForbiddenError<T>(
    message: string,
    errorCode: number = 403,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static BadRequestError<T>(
    message: string,
    errorCode: number = 400,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static ConflictError<T>(
    message: string,
    errorCode: number = 409,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static InternalServerError<T>(
    message: string,
    errorCode: number = 500,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static UnknownError<T>(
    message: string,
    errorCode: number = 500,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }

  static OccurredError<T>(
    message: string,
    errorCode: number = 500,
    additionalData: any = null
  ): ApiResponseType<T> {
    return {
      status: "error",
      code: errorCode,
      message,
      data: additionalData,
    };
  }
}
