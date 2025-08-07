export class ApiError extends Error {
  statusCode: number;
  data?: any;

  constructor(statusCode: number, message: string, data?: any) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
  }
}

export class NotFoundError extends ApiError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}

export class ValidationError extends ApiError {
  constructor(data: any, message = "Validation Error") {
    super(400, message, data);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(data: any = undefined, message = "Unauthorized") {
    super(401, message);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}

export class ConflictError extends ApiError {
  constructor(message = "Conflict") {
    super(409, message);
  }
}

export class InternalServerError extends ApiError {
  constructor(message = "Internal Server Error", code = 500, data = undefined) {
    super(code, message, data);
  }
}
