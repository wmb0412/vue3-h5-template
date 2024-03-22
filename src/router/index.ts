import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized
} from "vue-router";
import routes from "./routes";
import setPageTitle from "@/utils/set-page-title";
import { t } from "@/locales";

const router = createRouter({
  history: createWebHistory(),
  routes
});

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
  };
}

export const setRouteTitle = () => {
  const currentRoute = router.currentRoute.value as toRouteType;
  setPageTitle(currentRoute.meta.title ? t(currentRoute.meta.title) : "");
};
export default router;
