import { Request, Response, NextFunction } from "express";
import { ApiResponseType } from "../utils/response/apiResponseType";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (res.headersSent) {
    return next(err);
  }

  console.log("Error Middleware:", err);

  const code = err.code || 500;
  const status = err.status || "error";
  const message = err.message || "Internal Server Error";
  const title = err.title || "Error";

  // Check if we should include errors in response
  const shouldLogErrors = process.env.LOGING_ERRORS === "Y";
  const response: ApiResponseType<any> = {
    code,
    status,
    title,
    message,
    data: err.data || null,
    errors: shouldLogErrors ? err.errors || null : err.errors,
  };

  res.status(code).json(response);
}
