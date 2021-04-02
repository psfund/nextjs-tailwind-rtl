import ar from "./ar";
import en from "./en";

const localeFiles = {
  ar: ar,
  en: en,
};

const localize = (locale, key) => {
  return localeFiles[locale][key];
};

export default localize;
