export type ApiResponseType<T> = {
  status: "success" | "error";
  message: string;
  code: number;
  data?: T;
};
