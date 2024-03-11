import { PageEnum } from "@/enums/pageEnum";
import { useUserStoreWithOut } from "@/store/modules/user";
import { Router } from "vue-router";

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  router.beforeEach((to, form, next) => {
    const userStore = useUserStoreWithOut();
    const token = userStore.getToken;
    const isWhitePage = whitePathList.includes(to.path as PageEnum);
    if (!token && !isWhitePage) {
      next({
        path: LOGIN_PATH,
        replace: true,
        query: {
          redirect: to.fullPath
        }
      });
      return;
    }
    next();
  });
}
