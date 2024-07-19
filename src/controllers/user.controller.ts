import { Body, Controller, Get, Post, Put, Route, Query, Tags } from "tsoa";
import { Prisma, user } from "@prisma/client";
import { PingResponse } from "../types/response/ping.response";
import { userService } from "../services/user.service";

@Tags("User")
@Route("user")
export class UserController extends Controller {
  @Get("/all")
  public async getAll(): Promise<user[]> {
    const res = await userService.getAll();
    return res;
  }
}
