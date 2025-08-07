import { Body, Controller, Get, Post, Put, Route, Query, Tags } from "tsoa";
import { Prisma, user } from "@prisma/client";
import { PingResponse } from "../types/response/ping.response";
import { userService } from "../services/user.service";
import { ApiResponse } from "../utils/response/response.utils";

@Tags("User")
@Route("user")
export class UserController extends Controller {
  @Get("/all")
  public async getAll(): Promise<user[]> {
    const res = await userService.getAll();
    return res;
  }

  @Get("/test-error")
  public async testError(): Promise<void> {
    // Test validation error with errors field
    ApiResponse.ValidationErrorThrow(
      400,
      "Validation Error",
      "This field is required",
      { field: "email" },
      {
        email: ["Email is required", "Email must be valid"],
        password: ["Password is required"],
      }
    );
  }
}
