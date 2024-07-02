import { Body, Controller, Get, Post, Put, Route } from "tsoa";

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
  public async createMessage(): Promise<PingResponse> {
    return {
      message: "Create hello",
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
