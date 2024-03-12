export interface HttpResult<T = any> {
  code: number;
  type?: "success" | "error" | "warning";
  message: string;
  data?: T;
}
