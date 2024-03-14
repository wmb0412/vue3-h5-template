import { fakerT as t } from "@/locales";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: t("login.loginButton")
    }
  },
  {
    path: "/",
    name: "root",
    component: () => import("@/layout/index.vue"),
    redirect: { name: "Demo" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: t("common.home")
        }
      },
      {
        path: "demo",
        name: "Demo",
        component: () => import("@/views/demo/index.vue"),
        meta: {
          title: t("common.demo")
        }
      },
      {
        path: "user",
        name: "User",
        component: () => import("@/views/user/index.vue"),
        meta: {
          title: t("common.user"),
          noCache: true
        }
      }
    ]
  }
];

export default routes;
