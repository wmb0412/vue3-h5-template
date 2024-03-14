export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}
export type LocaleType = "zh_CN" | "en" | "ru" | "ja" | "ko";

export interface LocaleSetting {
  showPicker?: boolean;
  // Current language
  locale: LocaleType;
  // default language
  fallback: LocaleType;
}
