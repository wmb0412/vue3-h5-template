import { defHttp } from "@/utils/http/axios";

enum Api {
  DemoGet = "/demo/get",
  DemoError = "/demo/error"
}
export function getDemoApi() {
  return defHttp.get(Api.DemoGet, {
    ignoreCancelToken: false
  });
}

export function demoErrorApi(data?: object) {
  return defHttp.post<any>({
    url: Api.DemoError,
    data
  });
}
