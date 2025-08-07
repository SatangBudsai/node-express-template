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
  // Export Error classes as static properties
  static NotFoundError = NotFoundError;
  static ValidationError = ValidationError;
  static UnauthorizedError = UnauthorizedError;
  static ForbiddenError = ForbiddenError;
  static BadRequestError = BadRequestError;
  static ConflictError = ConflictError;
  static InternalServerError = InternalServerError;

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
}
