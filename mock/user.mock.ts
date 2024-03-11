import { defineMock } from "vite-plugin-mock-dev-server";
export default defineMock([
  {
    url: "/dev-api/user/login",
    delay: 1000,
    body: {
      code: 0,
      message: "123",
      data: {
        token: "woshitoken"
      }
    }
  }
]);
