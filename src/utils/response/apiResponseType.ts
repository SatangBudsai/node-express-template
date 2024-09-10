export type ApiResponseType<T> = {
  status: "success" | "error";
  code: number;
  message: string;
  data?: T;
};
