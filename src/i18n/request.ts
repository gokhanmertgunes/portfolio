import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const incoming = locale ?? defaultLocale;
  const resolved = (locales as readonly string[]).includes(incoming)
    ? (incoming as Locale)
    : defaultLocale;

  return {
    locale: resolved,
    messages: (await import(`../messages/${resolved}.json`)).default,
  };
});

