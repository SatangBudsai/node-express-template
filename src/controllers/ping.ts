import { Body, Controller, Get, Post, Put, Route, Query } from "tsoa";
import { Prisma, massage, user } from "@prisma/client";

interface PingResponse {
  message: string;
}

@Route("ping")
export class PingController extends Controller {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "hello",
    };
  }
  @Post("/")
  public async createMessage(
    @Body() req: Prisma.userCreateInput
  ): Promise<PingResponse> {
    return {
      message: `Create hello`,
    };
  }
  @Put("/")
  public async updateMessage(@Query() id: number): Promise<PingResponse> {
    return {
      message: `Update user : ${id}`,
    };
  }
}
