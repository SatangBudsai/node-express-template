import { Controller, Get, Route, Tags } from "tsoa";
import { responseService } from "../services/response.service";
import { ApiResponseType } from "../utils/response/apiResponseType";
import { ApiResponse } from "../utils/response/ApiResponse";
type mockData = {
  name: string;
  tel: string;
};
@Tags("Response")
@Route("response")
export class ResponseController extends Controller {
  @Get("success")
  public async getSuccess(): Promise<ApiResponseType<mockData>> {
    const res = responseService.getData();
    return ApiResponse.Success(res);
  }

  @Get("not-found")
  public async getNotFound(): Promise<ApiResponseType<string>> {
    const res = responseService.getNotFoundMessage();
    return ApiResponse.Success(res);
  }

  @Get("validation-error")
  public async getValidationError(): Promise<void> {
    responseService.getValidationErrorMessage();
  }
}
