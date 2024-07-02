import { Controller, Get, Route } from "tsoa";

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
}
