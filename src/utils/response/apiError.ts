export class ApiError extends Error {
  code: number;
  status: "success" | "error";
  title: string;
  data?: any;
  errors?: any;

  constructor(
    code: number,
    message: string,
    title?: string,
    data?: any,
    errors?: any
  ) {
    super(message);
    this.code = code;
    this.status = "error";
    this.title = title || "Error";
    this.data = data;
    this.errors = errors;
  }
}

export class NotFoundError extends ApiError {
  constructor(
    code: number = 404,
    title: string = "Not Found",
    message: string = "Not Found",
    data?: any,
    errors?: any
  ) {
    super(code, message, title, data, errors);
  }
}

export class ValidationError extends ApiError {
  constructor(
    code: number = 400,
    title: string = "Validation Error",
    message: string = "Validation Error",
    data?: any,
    errors?: any
  ) {
    super(code, message, title, data, errors);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(
    code: number = 401,
    title: string = "Unauthorized",
    message: string = "Unauthorized",
    data?: any,
    errors?: any
  ) {
    super(code, message, title, data, errors);
  }
}

export class ForbiddenError extends ApiError {
  constructor(
    code: number = 403,
    title: string = "Forbidden",
    message: string = "Forbidden",
    data?: any,
    errors?: any
  ) {
    super(code, message, title, data, errors);
  }
}

export class BadRequestError extends ApiError {
  constructor(
    code: number = 400,
    title: string = "Bad Request",
    message: string = "Bad Request",
    data?: any,
    errors?: any
  ) {
    super(code, message, title, data, errors);
  }
}

export class ConflictError extends ApiError {
  constructor(
    code: number = 409,
    title: string = "Conflict",
    message: string = "Conflict",
    data?: any,
    errors?: any
  ) {
    super(code, message, title, data, errors);
  }
}

export class InternalServerError extends ApiError {
  constructor(
    code: number = 500,
    title: string = "Internal Server Error",
    message: string = "Internal Server Error",
    data?: any,
    errors?: any
  ) {
    super(code, message, title, data, errors);
  }
}
