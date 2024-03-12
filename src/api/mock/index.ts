import { http } from "@/utils/http";

export function getListApi(params?: object) {
  return http.request<Array<any>>({
    url: "/list/get",
    method: "get",
    params
  });
}

export function getListApiError(data?: object) {
  return http.request<any>({
    url: "/list/error",
    method: "post",
    data
  });
}
