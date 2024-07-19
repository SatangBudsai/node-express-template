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

export class ApiResponse {
  static Success<T>(
    data: T,
    message = "Success",
    code = 200
  ): ApiResponseType<T> {
    return {
      status: "success",
      message,
      code,
      data,
    };
  }

  static Error(message = "Error", code = 500): never {
    throw new InternalServerError(message);
  }

  static NotFound(message = "Not Found"): never {
    throw new NotFoundError(message);
  }

  static ValidationError(data: any, message = "Validation Error"): never {
    throw new ValidationError(data, message);
  }

  static Unauthorized(message = "Unauthorized"): never {
    throw new UnauthorizedError(message);
  }

  static Forbidden(message = "Forbidden"): never {
    throw new ForbiddenError(message);
  }

  static BadRequest(message = "Bad Request"): never {
    throw new BadRequestError(message);
  }

  static Conflict(message = "Conflict"): never {
    throw new ConflictError(message);
  }

  static InternalServerError(message = "Internal Server Error"): never {
    throw new InternalServerError(message);
  }
}
