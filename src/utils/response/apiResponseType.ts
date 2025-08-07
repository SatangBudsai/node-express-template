export type ApiResponseType<T> = {
  code: number;
  status: "success" | "error";
  title: string;
  message: string;
  data?: T;
  errors?: any;
};
