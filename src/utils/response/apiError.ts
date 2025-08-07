export class ApiError extends Error {
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

export class NotFoundError extends ApiError {
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

export class ValidationError extends ApiError {
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

export class UnauthorizedError extends ApiError {
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

export class ForbiddenError extends ApiError {
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

export class BadRequestError extends ApiError {
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

export class ConflictError extends ApiError {
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

export class InternalServerError extends ApiError {
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
