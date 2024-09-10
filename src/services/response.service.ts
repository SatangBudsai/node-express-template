import axios from "axios";
import { ApiResponse } from "../utils/response/ApiResponse";

type mockData = {
  name: string;
  tel: string;
};

function handleServiceError(error: any) {
  if (error instanceof ApiResponse.ValidationError) {
    // จัดการกับ ValidationError
    throw ApiResponse.ValidationError("ข้อมูลไม่ถูกต้อง");
  }

  if (error instanceof ApiResponse.NotFoundError) {
    // จัดการกับ NotFoundError
    throw ApiResponse.NotFoundError("ไม่พบข้อมูล");
  }

  if (error instanceof ApiResponse.UnauthorizedError) {
    // จัดการกับ UnauthorizedError
    throw ApiResponse.UnauthorizedError("ไม่ได้รับอนุญาต");
  }

  if (error instanceof ApiResponse.ForbiddenError) {
    // จัดการกับ ForbiddenError
    throw ApiResponse.ForbiddenError("ห้ามการเข้าถึง");
  }

  if (error instanceof ApiResponse.BadRequestError) {
    // จัดการกับ BadRequestError
    throw ApiResponse.BadRequestError("คำขอไม่ถูกต้อง");
  }

  if (error instanceof ApiResponse.ConflictError) {
    // จัดการกับ ConflictError
    throw ApiResponse.ConflictError("เกิดความขัดแย้ง");
  }

  if (error instanceof ApiResponse.InternalServerError) {
    // จัดการกับ InternalServerError
    throw ApiResponse.InternalServerError("เกิดข้อผิดพลาดในเซิร์ฟเวอร์");
  }

  if (error instanceof ApiResponse.UnknownError) {
    // จัดการกับ UnknownError
    throw ApiResponse.UnknownError("เกิดข้อผิดพลาดที่ไม่รู้จัก");
  }

  // กรณี error ที่ไม่คาดคิด
  throw ApiResponse.OccurredError("เกิดข้อผิดพลาดที่ไม่คาดคิด");
}

export const responseService = {
  getData: () => {
    const data: mockData = {
      name: "test",
      tel: " test",
    };
    const x = 2;
    if (x < 2) throw ApiResponse.UnknownError("asd");
    return data;
  },
  getNotFoundMessage: async (): Promise<string> => {
    let response;
    try {
      response = await axios.get("https://api.example.com");
      if (response.status === 203) {
        throw ApiResponse.NotFoundError("ไม่พบข้อมูล");
      } else {
        return "";
      }
    } catch (error) {
      throw ApiResponse.OccurredError("occurred error");
    }
  },
  getValidationErrorMessage: () => {
    throw ApiResponse.ValidationError("ข้อมูลไม่ถูกต้อง");
  },
};
