import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const data = err.data || undefined;

  res.status(statusCode).json({
    status: "error",
    message,
    code: statusCode,
    data,
  });
}
