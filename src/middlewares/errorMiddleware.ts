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
  const data = err.data || undefined;

  // Check if we should include errors in response
  // const shouldLogErrors = process.env.LOGING_ERRORS === "Y";
  const shouldLogErrors = true;

  const response: ApiResponseType<any> = {
    code,
    status,
    title,
    message,
    data,
    ...(shouldLogErrors && err.errors && { errors: err.errors }),
  };

  res.status(code).json(response);
}
