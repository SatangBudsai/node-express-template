import { Body, Controller, Get, Post, Put, Route, Query } from "tsoa";

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
  public async createMessage(@Query() name: string): Promise<PingResponse> {
    return {
      message: `Create hello ${name}`,
    };
  }
  @Put("/")
  public async updateMessage(
    @Body() req: { name: string }
  ): Promise<PingResponse> {
    return {
      message: `Update user : ${req.name}`,
    };
  }
}
