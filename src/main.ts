import { createApp } from "vue";
import { store } from "./store";
// normalize.css
import "normalize.css/normalize.css";
import "vant/es/toast/style";

import "@/assets/iconfont/iconfont.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
// svg icon
import "virtual:svg-icons-register";

import App from "./App.vue";
import router from "./router";
import { setupRouterGuard } from "./router/guard";

async function bootstrap() {
  const app = createApp(App);

  app.use(store);

  app.use(router);

  setupRouterGuard(router);

  app.mount("#app");
}

bootstrap();
