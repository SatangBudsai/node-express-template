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
  constructor(message = "Not Found", errors?: any) {
    super(404, message, "Not Found", undefined, errors);
  }
}

export class ValidationError extends ApiError {
  constructor(data: any, message = "Validation Error", errors?: any) {
    super(400, message, "Validation Error", data, errors);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(data: any = undefined, message = "Unauthorized", errors?: any) {
    super(401, message, "Unauthorized", data, errors);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = "Forbidden", errors?: any) {
    super(403, message, "Forbidden", undefined, errors);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request", errors?: any) {
    super(400, message, "Bad Request", undefined, errors);
  }
}

export class ConflictError extends ApiError {
  constructor(message = "Conflict", errors?: any) {
    super(409, message, "Conflict", undefined, errors);
  }
}

export class InternalServerError extends ApiError {
  constructor(
    message = "Internal Server Error",
    code = 500,
    data = undefined,
    errors?: any
  ) {
    super(code, message, "Internal Server Error", data, errors);
  }
}
