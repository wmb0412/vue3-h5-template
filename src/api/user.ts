import { http } from "@/utils/http";

export function userLoginApi(data): any {
  return http.request({
    url: "/user/login",
    method: "post",
    data
  });
}

/**
 * @description: 获取用户信息
 */
export function getUserInfoApi() {
  return http.request({
    url: "/user/info",
    method: "get"
  });
}

/**
 * @description: 用户登出
 */
export function userLogoutApi() {
  return http.request({
    url: "/user/logout",
    method: "POST"
  });
}
