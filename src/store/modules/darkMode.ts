import { defineStore } from "pinia";
import { store } from "@/store";
import { PiniaEnum } from "@/enums/piniaEnum";
import { LocalStorageEnum } from "@/enums/storageEnum";

// 系统是否是黑暗主题
const initDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useDarkModeStore = defineStore({
  id: PiniaEnum.DARK_MODE,
  persist: {
    key: LocalStorageEnum.PINIA_DARK_MODE
  },
  state: () => ({
    darkMode: initDarkMode
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    }
  }
});

export function useDarkModeStoreHook() {
  return useDarkModeStore(store);
}
