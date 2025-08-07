import {
  NotFoundError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  BadRequestError,
  ConflictError,
  InternalServerError,
} from "./apiError";
import { ApiResponseType } from "./apiResponseType";

declare const process: any;

// Helper function to check if logging errors is enabled
const shouldLogErrors = (): boolean => {
  try {
    return process?.env?.LOGING_ERRORS === "Y";
  } catch {
    return false;
  }
};

export class ApiResponse {
  static Success<T>(options: {
    data: T;
    message?: string;
    title?: string;
    code?: number;
  }): ApiResponseType<T> {
    const {
      data,
      message = "Success",
      title = "Success",
      code = 200,
    } = options;

    return {
      code,
      status: "success",
      title,
      message,
      data,
    };
  }

  static Created<T>(options: {
    data: T;
    message?: string;
    title?: string;
    code?: number;
  }): ApiResponseType<T> {
    const {
      data,
      message = "Created",
      title = "Created",
      code = 201,
    } = options;

    return {
      code,
      status: "success",
      title,
      message,
      data,
    };
  }

  static Error(
    options: {
      message?: string;
      title?: string;
      code?: number;
      data?: any;
      errors?: any;
    } = {}
  ): never {
    const {
      message = "Error",
      title = "Error",
      code = 500,
      data = undefined,
      errors = undefined,
    } = options;

    throw new InternalServerError(message, code, data, errors);
  }

  static ErrorResponse<T = null>(options: {
    message: string;
    title: string;
    code: number;
    data?: T;
    errors?: any;
  }): ApiResponseType<T> {
    const {
      message,
      title,
      code,
      data = null as T,
      errors = undefined,
    } = options;

    const response: ApiResponseType<T> = {
      code,
      status: "error",
      title,
      message,
      data,
    };

    // Only include errors if LOGING_ERRORS is set to 'Y' and errors exist
    if (shouldLogErrors() && errors) {
      response.errors = errors;
    }

    return response;
  }

  static NotFound<T = null>(
    options: {
      message?: string;
      title?: string;
      data?: T;
      errors?: any;
    } = {}
  ): ApiResponseType<T> {
    const {
      message = "Not found user in database.",
      title = "Not Found",
      data = null as T,
      errors = undefined,
    } = options;

    return this.ErrorResponse({
      message,
      title,
      code: 404,
      data,
      errors,
    });
  }

  static NotFoundThrow(
    message = "Not Found",
    title = "Not Found",
    errors?: any
  ): never {
    throw new NotFoundError(message, errors);
  }

  static NotFoundResponse<T = null>(
    message = "Not Found",
    title = "Not Found",
    data: T = null as T,
    errors: any = undefined
  ): ApiResponseType<T> {
    return this.ErrorResponse({
      message,
      title,
      code: 404,
      data,
      errors,
    });
  }

  static ValidationError<T = null>(
    options: {
      message?: string;
      title?: string;
      data?: T;
      errors?: any;
    } = {}
  ): ApiResponseType<T> {
    const {
      message = "Validation Error",
      title = "Validation Error",
      data = null as T,
      errors = undefined,
    } = options;

    return this.ErrorResponse({
      message,
      title,
      code: 400,
      data,
      errors,
    });
  }

  static ValidationErrorThrow(
    data: any,
    message = "Validation Error",
    errors?: any
  ): never {
    throw new ValidationError(data, message, errors);
  }

  static ValidationErrorResponse<T = null>(
    message = "Validation Error",
    title = "Validation Error",
    data: T = null as T,
    errors: any = undefined
  ): ApiResponseType<T> {
    return this.ErrorResponse({
      message,
      title,
      code: 400,
      data,
      errors,
    });
  }

  static Unauthorized<T = null>(
    options: {
      message?: string;
      title?: string;
      data?: T;
      errors?: any;
    } = {}
  ): ApiResponseType<T> {
    const {
      message = "Unauthorized",
      title = "Unauthorized",
      data = null as T,
      errors = undefined,
    } = options;

    return this.ErrorResponse({
      message,
      title,
      code: 401,
      data,
      errors,
    });
  }

  static UnauthorizedThrow(
    data = undefined,
    message = "Unauthorized",
    errors?: any
  ): never {
    throw new UnauthorizedError(data, message, errors);
  }

  static UnauthorizedResponse<T = null>(
    message = "Unauthorized",
    title = "Unauthorized",
    data: T = null as T,
    errors: any = undefined
  ): ApiResponseType<T> {
    return this.ErrorResponse({
      message,
      title,
      code: 401,
      data,
      errors,
    });
  }

  static Forbidden<T = null>(
    options: {
      message?: string;
      title?: string;
      data?: T;
      errors?: any;
    } = {}
  ): ApiResponseType<T> {
    const {
      message = "Forbidden",
      title = "Forbidden",
      data = null as T,
      errors = undefined,
    } = options;

    return this.ErrorResponse({
      message,
      title,
      code: 403,
      data,
      errors,
    });
  }

  static ForbiddenThrow(message = "Forbidden", errors?: any): never {
    throw new ForbiddenError(message, errors);
  }

  static ForbiddenResponse<T = null>(
    message = "Forbidden",
    title = "Forbidden",
    data: T = null as T,
    errors: any = undefined
  ): ApiResponseType<T> {
    return this.ErrorResponse({
      message,
      title,
      code: 403,
      data,
      errors,
    });
  }

  static BadRequest<T = null>(
    options: {
      message?: string;
      title?: string;
      data?: T;
      errors?: any;
    } = {}
  ): ApiResponseType<T> {
    const {
      message = "Bad Request",
      title = "Bad Request",
      data = null as T,
      errors = undefined,
    } = options;

    return this.ErrorResponse({
      message,
      title,
      code: 400,
      data,
      errors,
    });
  }

  static BadRequestThrow(message = "Bad Request", errors?: any): never {
    throw new BadRequestError(message, errors);
  }

  static BadRequestResponse<T = null>(
    message = "Bad Request",
    title = "Bad Request",
    data: T = null as T,
    errors: any = undefined
  ): ApiResponseType<T> {
    return this.ErrorResponse({
      message,
      title,
      code: 400,
      data,
      errors,
    });
  }

  static Conflict<T = null>(
    options: {
      message?: string;
      title?: string;
      data?: T;
      errors?: any;
    } = {}
  ): ApiResponseType<T> {
    const {
      message = "Conflict",
      title = "Conflict",
      data = null as T,
      errors = undefined,
    } = options;

    return this.ErrorResponse({
      message,
      title,
      code: 409,
      data,
      errors,
    });
  }

  static ConflictThrow(message = "Conflict", errors?: any): never {
    throw new ConflictError(message, errors);
  }

  static ConflictResponse<T = null>(
    message = "Conflict",
    title = "Conflict",
    data: T = null as T,
    errors: any = undefined
  ): ApiResponseType<T> {
    return this.ErrorResponse({
      message,
      title,
      code: 409,
      data,
      errors,
    });
  }

  static InternalServerError<T = null>(
    options: {
      message?: string;
      title?: string;
      data?: T;
      errors?: any;
    } = {}
  ): ApiResponseType<T> {
    const {
      message = "Internal Server Error",
      title = "Internal Server Error",
      data = null as T,
      errors = undefined,
    } = options;

    return this.ErrorResponse({
      message,
      title,
      code: 500,
      data,
      errors,
    });
  }

  static InternalServerErrorThrow(
    message = "Internal Server Error",
    errors?: any
  ): never {
    throw new InternalServerError(message, 500, undefined, errors);
  }

  static InternalServerErrorResponse<T = null>(
    message = "Internal Server Error",
    title = "Internal Server Error",
    data: T = null as T,
    errors: any = undefined
  ): ApiResponseType<T> {
    return this.ErrorResponse({
      message,
      title,
      code: 500,
      data,
      errors,
    });
  }
}
