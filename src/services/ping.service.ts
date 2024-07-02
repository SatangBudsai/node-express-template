import { PingResponse } from "../types/response/ping.response";

export const pingService = {
  getMessage: (): PingResponse => {
    return {
      message: "hello",
    };
  },
};
