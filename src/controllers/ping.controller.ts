import { Body, Controller, Get, Post, Put, Route, Query, Tags } from "tsoa";
import { Prisma, massage, user } from "@prisma/client";
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

  @Post("/")
  public async createMessage(
    @Body() req: Omit<Prisma.userCreateInput, "mst_app">
  ): Promise<PingResponse> {
    return {
      message: `Create hello`,
    };
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
