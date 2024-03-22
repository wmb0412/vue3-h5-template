import { LocaleSetting, LocaleType } from "@/types/config";
import { defineStore } from "pinia";
import { store } from "..";
import { PiniaEnum } from "@/enums/piniaEnum";
import { LocalStorageEnum } from "@/enums/storageEnum";
import { setI18nLanguage, setI18nMessage } from "@/locales";
import { setRouteTitle } from "@/router";

interface LocaleState {
  localInfo: LocaleSetting;
}
const initLocalInfo: LocaleSetting = {
  locale: "zh_CN",
  fallback: "zh_CN"
};
export const useLocaleStore = defineStore({
  id: PiniaEnum.APP_LOCALE,
  persist: {
    key: LocalStorageEnum.PINIA_LOCALES
  },
  state: (): LocaleState => ({
    localInfo: initLocalInfo
  }),
  getters: {
    getShowPicker(state): boolean {
      return !!state.localInfo?.showPicker;
    },
    getLocale(state): LocaleType {
      return state.localInfo?.locale;
    }
  },
  actions: {
    setLocaleInfo(info: Partial<LocaleSetting>) {
      const newLocalInfo = { ...this.localInfo, ...info };
      this.localInfo = newLocalInfo;
    },
    async toggleLocale() {
      const nextLocale = this.getLocale === "zh_CN" ? "en" : "zh_CN";
      await setI18nMessage(nextLocale);
      setI18nLanguage(nextLocale);
      setRouteTitle();
      this.setLocaleInfo({
        locale: nextLocale
      });
    }
  }
});

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
