import { ApiResponseType } from "./apiResponseType";

class ApiError extends Error {
  code?: number;
  status: "success" | "error";
  title: string;
  data?: any;
  errors?: any;

  constructor(options: {
    code?: number;
    message: string;
    title?: string;
    data?: any;
    errors?: any;
  }) {
    super(options.message);
    this.code = options.code;
    this.status = "error";
    this.title = options.title || "Error";
    this.data = options.data;
    this.errors = options.errors;
  }
}

class NotFoundError extends ApiError {
  constructor(
    options: {
      title?: string;
      message?: string;
      data?: any;
      errors?: any;
    } = {}
  ) {
    super({
      message: options.message || "Not Found",
      title: options.title || "Not Found",
      data: options.data,
      errors: options.errors,
    });
  }
}

class ValidationError extends ApiError {
  constructor(
    options: {
      title?: string;
      message?: string;
      data?: any;
      errors?: any;
    } = {}
  ) {
    super({
      message: options.message || "Validation Error",
      title: options.title || "Validation Error",
      data: options.data,
      errors: options.errors,
    });
  }
}

class UnauthorizedError extends ApiError {
  constructor(
    options: {
      title?: string;
      message?: string;
      data?: any;
      errors?: any;
    } = {}
  ) {
    super({
      message: options.message || "Unauthorized",
      title: options.title || "Unauthorized",
      data: options.data,
      errors: options.errors,
    });
  }
}

class ForbiddenError extends ApiError {
  constructor(
    options: {
      title?: string;
      message?: string;
      data?: any;
      errors?: any;
    } = {}
  ) {
    super({
      message: options.message || "Forbidden",
      title: options.title || "Forbidden",
      data: options.data,
      errors: options.errors,
    });
  }
}

class BadRequestError extends ApiError {
  constructor(
    options: {
      title?: string;
      message?: string;
      data?: any;
      errors?: any;
    } = {}
  ) {
    super({
      message: options.message || "Bad Request",
      title: options.title || "Bad Request",
      data: options.data,
      errors: options.errors,
    });
  }
}

class ConflictError extends ApiError {
  constructor(
    options: {
      title?: string;
      message?: string;
      data?: any;
      errors?: any;
    } = {}
  ) {
    super({
      message: options.message || "Conflict",
      title: options.title || "Conflict",
      data: options.data,
      errors: options.errors,
    });
  }
}

class InternalServerError extends ApiError {
  constructor(
    options: {
      title?: string;
      message?: string;
      data?: any;
      errors?: any;
    } = {}
  ) {
    super({
      message: options.message || "Internal Server Error",
      title: options.title || "Internal Server Error",
      data: options.data,
      errors: options.errors,
    });
  }
}

declare const process: any;

const shouldLogErrors = (): boolean => {
  try {
    return process?.env?.LOGING_ERRORS === "Y";
  } catch {
    return false;
  }
};

export class ApiResponse {
  static readonly NotFoundError = NotFoundError;
  static readonly ValidationError = ValidationError;
  static readonly UnauthorizedError = UnauthorizedError;
  static readonly ForbiddenError = ForbiddenError;
  static readonly BadRequestError = BadRequestError;
  static readonly ConflictError = ConflictError;
  static readonly InternalServerError = InternalServerError;

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
    title?: string;
    code?: number;
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
      code: code || 500,
      status: "error",
      title: title || "Error",
      message,
      data,
    };

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
