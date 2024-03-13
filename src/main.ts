import { createApp } from "vue";
import { store } from "./store";
// normalize.css
import "normalize.css/normalize.css";

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

// https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#4.-yin-ru-han-shu-zu-jian-de-yang-shi
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";

async function bootstrap() {
  const app = createApp(App);

  app.use(store);

  app.use(router);

  setupRouterGuard(router);

  app.mount("#app");
}

bootstrap();
