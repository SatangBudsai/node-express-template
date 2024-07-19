import { Controller, Get, Route, Tags } from "tsoa";
import { responseService } from "../services/response.service";
import { ApiResponse } from "../utils/response/response.utils";
import { ApiResponseType } from "../utils/response/apiResponseType";
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

  @Get("error")
  public async getError(): Promise<void> {
    responseService.getErrorMessage();
  }

  @Get("not-found")
  public async getNotFound(): Promise<void> {
    responseService.getNotFoundMessage();
  }

  @Get("validation-error")
  public async getValidationError(): Promise<void> {
    responseService.getValidationErrorMessage();
  }

  @Get("unauthorized")
  public async getUnauthorized(): Promise<void> {
    responseService.getUnauthorizedMessage();
  }

  @Get("forbidden")
  public async getForbidden(): Promise<void> {
    responseService.getForbiddenMessage();
  }

  @Get("bad-request")
  public async getBadRequest(): Promise<void> {
    responseService.getBadRequestMessage();
  }

  @Get("conflict")
  public async getConflict(): Promise<void> {
    responseService.getConflictMessage();
  }

  @Get("internal-server-error")
  public async getInternalServerError(): Promise<void> {
    responseService.getInternalServerErrorMessage();
  }
}
