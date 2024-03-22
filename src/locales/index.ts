import { useLocaleStoreWithOut } from "@/store/modules/locale";
import { LocaleType } from "@/types/config";
import { App } from "vue";
import { I18nOptions, createI18n } from "vue-i18n";
export let i18n: ReturnType<typeof createI18n>;
export const loadedSourceLang: LocaleType[] = [];
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options);
  app.use(i18n);
}

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getLocale;
  const message = await importLangSource(locale);
  return {
    locale,
    legacy: false,
    messages: {
      [locale]: message
    }
  };
}
async function importLangSource(locale: LocaleType) {
  loadedSourceLang.push(locale);
  const langModule = ((await import(`./lang/${locale}.ts`)) as any).default;
  const { message } = langModule;
  return message;
}
export async function setI18nMessage(locale: LocaleType) {
  if (!loadedSourceLang.includes(locale)) {
    const message = await importLangSource(locale);
    i18n.global.setLocaleMessage(locale, message);
  }
}
export function setI18nLanguage(locale: LocaleType) {
  console.log("i18n", i18n);
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as any).value = locale;
  }
}
type I18nGlobalTranslation = {
  (key: string): string;
  (key: string, locale: string): string;
  (key: string, locale: string, list: unknown[]): string;
  (key: string, locale: string, named: Record<string, unknown>): string;
  (key: string, list: unknown[]): string;
  (key: string, named: Record<string, unknown>): string;
};

export const t: I18nGlobalTranslation = (...args) =>
  (i18n?.global?.t as any)?.(...args);

// 为什么要编写此函数？
// 主要用于配合vscode i18nn ally插件。此功能仅用于路由
export const fakerT = key => key;
