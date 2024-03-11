import { getUserInfoApi, userLoginApi, userLogoutApi } from "@/api/user";
import { PageEnum } from "@/enums/pageEnum";
import { ResultEnum } from "@/enums/requestEnum";
import { LocalStorageEnum } from "@/enums/storageEnum";
import { createStorage } from "@/utils/Storage";
import { defineStore } from "pinia";
import router from "@/router";
import { PiniaEnum } from "@/enums/piniaEnum";

const Storage = createStorage({ storage: localStorage });

interface LoginParams {
  username: string;
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
  state: (): IUserState => ({
    userInfo: null,
    token: undefined,
    lastUpdateTime: 0
  }),
  getters: {
    getUserInfo(): UserInfo {
      return (
        this.userInfo || Storage.get(LocalStorageEnum.CURRENT_USER, "") || {}
      );
    },
    getToken(): string {
      return this.token || Storage.get(LocalStorageEnum.ACCESS_TOKEN, "");
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    }
  },
  actions: {
    setToken(token: string | undefined) {
      this.token = token || "";
      Storage.set(LocalStorageEnum.ACCESS_TOKEN, token);
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
      Storage.set(LocalStorageEnum.CURRENT_USER, info);
    },

    async Login(params: LoginParams) {
      try {
        const response = await userLoginApi(params);
        const { data, code } = response;
        if (code === ResultEnum.SUCCESS) {
          router.push(PageEnum.BASE_HOME);
          // save token
          this.setToken(data.token);
        }
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
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
      Storage.remove(LocalStorageEnum.ACCESS_TOKEN);
      Storage.remove(LocalStorageEnum.CURRENT_USER);
      router.push(PageEnum.BASE_LOGIN);
      location.reload();
    }
  }
});
