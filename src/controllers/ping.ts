import { Controller, Get, Post, Route } from "tsoa";

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
  @Post("/create")
  public async createMessage(): Promise<PingResponse> {
    return {
      message: "Create hello",
    };
  }
}
