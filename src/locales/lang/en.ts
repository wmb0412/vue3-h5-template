import enUS from "vant/es/locale/lang/en-US";
import { Locale } from "vant";

import { genMessage } from "../helper";
const modules = import.meta.glob("./en/**/*.{json,ts,js}", { eager: true });

Locale.use("en-US", enUS);
export default {
  message: {
    ...genMessage(modules as Recordable<Recordable>, "en")
  },
  dateLocale: null,
  dateLocaleName: "en"
};
