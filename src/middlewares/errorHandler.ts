// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/response/ApiResponse";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.code && err.message) {
    return res.status(err.code).json({
      status: "error",
      code: err.code,
      message: err.message,
      data: err.data || null, // ส่งข้อมูลเพิ่มเติมถ้ามี
    });
  }

  // จัดการ error ที่ไม่รู้จัก
  return res.status(500).json(
    ApiResponse.InternalServerError(
      "An unexpected error occurred",
      500,
      { path: req.path, method: req.method } // ส่งข้อมูลเพิ่มเติม เช่น path หรือ method
    )
  );
}
