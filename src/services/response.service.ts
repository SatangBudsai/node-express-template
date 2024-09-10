import { ApiResponse } from "../utils/response/ApiResponse";

type mockData = {
  name: string;
  tel: string;
};

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
  getNotFoundMessage: (): string => {
    throw ApiResponse.NotFoundError("ไม่พบข้อมูล");
  },
  getValidationErrorMessage: () => {
    throw ApiResponse.ValidationError("ข้อมูลไม่ถูกต้อง");
  },
};
