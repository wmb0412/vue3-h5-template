import { defHttp } from "@/utils/http/axios";

export function userLoginApi(data): any {
  return defHttp.post({
    url: "/user/login",
    data
  });
}

/**
 * @description: 获取用户信息
 */
export function getUserInfoApi() {
  return defHttp.get("/user/info");
}

/**
 * @description: 用户登出
 */
export function userLogoutApi() {
  return defHttp.post("/user/logout");
}
