import { defineMock } from "vite-plugin-mock-dev-server";
import Mock from "mockjs";

export default defineMock([
  {
    url: "/dev-api/demo/get",
    delay: 1000,
    body: {
      code: 0,
      message: "OK",
      data: Mock.mock({
        "list|10": [
          {
            "id|+1": 1
          }
        ]
      }).list
    }
  },
  {
    url: "/dev-api/demo/error",
    delay: 300,
    body: {
      code: 1,
      message: "ERROR",
      data: null
    }
  }
]);
