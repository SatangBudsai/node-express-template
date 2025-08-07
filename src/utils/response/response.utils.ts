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

  static Error<T = null>(options: {
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

    return this.Error({
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

    return this.Error({
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

    return this.Error({
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

    return this.Error({
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

    return this.Error({
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

    return this.Error({
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

    return this.Error({
      message,
      title,
      code: 500,
      data,
      errors,
    });
  }

  // Throw methods for creating and throwing errors
  static NotFoundThrow(
    code: number = 404,
    title: string = "Not Found",
    message: string = "Not Found",
    data?: any,
    errors?: any
  ): never {
    throw new NotFoundError(code, title, message, data, errors);
  }

  static ValidationErrorThrow(
    code: number = 400,
    title: string = "Validation Error",
    message: string = "Validation Error",
    data?: any,
    errors?: any
  ): never {
    throw new ValidationError(code, title, message, data, errors);
  }

  static UnauthorizedThrow(
    code: number = 401,
    title: string = "Unauthorized",
    message: string = "Unauthorized",
    data?: any,
    errors?: any
  ): never {
    throw new UnauthorizedError(code, title, message, data, errors);
  }

  static ForbiddenThrow(
    code: number = 403,
    title: string = "Forbidden",
    message: string = "Forbidden",
    data?: any,
    errors?: any
  ): never {
    throw new ForbiddenError(code, title, message, data, errors);
  }

  static BadRequestThrow(
    code: number = 400,
    title: string = "Bad Request",
    message: string = "Bad Request",
    data?: any,
    errors?: any
  ): never {
    throw new BadRequestError(code, title, message, data, errors);
  }

  static ConflictThrow(
    code: number = 409,
    title: string = "Conflict",
    message: string = "Conflict",
    data?: any,
    errors?: any
  ): never {
    throw new ConflictError(code, title, message, data, errors);
  }

  static InternalServerErrorThrow(
    code: number = 500,
    title: string = "Internal Server Error",
    message: string = "Internal Server Error",
    data?: any,
    errors?: any
  ): never {
    throw new InternalServerError(code, title, message, data, errors);
  }
}
