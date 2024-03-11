import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import NProgress from "@/utils/progress";
import setPageTitle from "@/utils/set-page-title";
import { Router } from "vue-router";
import { toRouteType } from "..";
import { createPermissionGuard } from "./permissionGuard";

export function setupRouterGuard(router: Router) {
  createCachedViewGuard(router);
  createPermissionGuard(router);
  createPageTitleGuard(router);
  createPageLoadingGuard(router);
}

function createPageLoadingGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}

function createCachedViewGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    useCachedViewStoreHook().addCachedView(to);
    next();
  });
}
function createPageTitleGuard(router: Router) {
  router.beforeEach((to: toRouteType, from, next) => {
    setPageTitle(to.meta.title);
    next();
  });
}
