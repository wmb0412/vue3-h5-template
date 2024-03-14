import { getUserInfoApi, userLoginApi, userLogoutApi } from "@/api/user";
import { PageEnum } from "@/enums/pageEnum";
import { LocalStorageEnum } from "@/enums/storageEnum";
import { defineStore } from "pinia";
import router from "@/router";
import { PiniaEnum } from "@/enums/piniaEnum";
import { store } from "..";

interface LoginParams {
  account: string;
  password: string;
}
interface UserInfo {
  id: string | number;
  name: string;
}
interface IUserState {
  token?: string;
  userInfo: UserInfo;
  lastUpdateTime: number;
}
export const useUserStore = defineStore({
  id: PiniaEnum.APP_USER,
  persist: {
    key: LocalStorageEnum.PINIA_USER
  },
  state: (): IUserState => ({
    userInfo: null,
    token: undefined,
    lastUpdateTime: 0
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || {};
    },
    getToken(): string {
      return this.token;
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    }
  },
  actions: {
    setToken(token: string | undefined) {
      this.token = token || "";
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
    },

    async Login(params: LoginParams) {
      const data = await userLoginApi(params);
      this.setToken(data.token);
      const redirectUrl = decodeURIComponent(
        (router.currentRoute?.value?.query?.redirect as string) ||
          PageEnum.BASE_HOME
      );
      router.push(redirectUrl);
    },

    async GetUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfoApi()
          .then(res => {
            this.setUserInfo(res);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    async Logout(toServer?: boolean) {
      if (this.getToken && toServer) {
        try {
          await userLogoutApi();
        } catch {
          console.error("注销Token失败");
        }
      }
      this.setToken(undefined);
      this.setUserInfo(null);
      router.push(PageEnum.BASE_LOGIN);
    }
  }
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
