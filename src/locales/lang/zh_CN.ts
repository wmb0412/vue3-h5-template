import { genMessage } from "../helper";
const modules = import.meta.glob("./zh-CN/**/*.{json,ts,js}", { eager: true });

export default {
  message: {
    ...genMessage(modules as Recordable<Recordable>, "zh-CN"),
    vantLocale: {}
  }
};
