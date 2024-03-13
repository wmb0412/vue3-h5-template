import { RequestOptions } from "@/types/axios";
import { defHttp } from "@/utils/http/axios";

enum Api {
  DemoGet = "/demo/get",
  DemoError = "/demo/error",
  DemoError2 = "/demo/error2"
}
export function getDemoApi(options?: RequestOptions) {
  return defHttp.get(Api.DemoGet, options);
}
export function getDemoApi2() {
  return defHttp.get(Api.DemoGet, {
    successMessageMode: "toast"
  });
}

export function demoErrorApi(data?: object, options?: RequestOptions) {
  return defHttp.post<any>(
    {
      url: Api.DemoError,
      data
    },
    options
  );
}
export function getDemoErrorApi(data?: object, options?: RequestOptions) {
  return defHttp.get<any>(
    {
      url: Api.DemoError2,
      data
    },
    options
  );
}
