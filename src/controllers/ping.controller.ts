import { Body, Controller, Get, Post, Put, Route, Query, Tags } from "tsoa";
import { Prisma } from "@prisma/client";
import { pingService } from "../services/ping.service";
import { PingResponse } from "../types/response/ping.response";

@Tags("Ping")
@Route("ping")
export class PingController extends Controller {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    const res = await pingService.getMessage();
    return res;
  }

  @Put("/")
  public async updateMessage(
    @Query() id: number,
    @Query() id2: number
  ): Promise<PingResponse> {
    return {
      message: `Update user : ${id}`,
    };
  }
}
