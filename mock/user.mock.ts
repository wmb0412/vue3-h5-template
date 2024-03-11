import { defineMock } from "vite-plugin-mock-dev-server";
export default defineMock([
  {
    url: "/dev-api/user/login",
    delay: 500,
    body: {
      code: 0,
      message: "123",
      data: {
        token: "woshitoken"
      }
    }
  },
  {
    url: "/dev-api/user/logout",
    delay: 300,
    body: {
      code: 0,
      data: {}
    }
  }
]);
