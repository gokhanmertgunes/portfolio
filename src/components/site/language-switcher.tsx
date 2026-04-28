"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { locales, type Locale } from "@/i18n/routing";

function switchLocale(pathname: string, to: Locale) {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];
  if ((locales as readonly string[]).includes(maybeLocale)) {
    parts[1] = to;
    return parts.join("/") || `/${to}`;
  }
  return `/${to}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

export function LanguageSwitcher() {
  const t = useTranslations("header.lang");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const other: Locale = locale === "en" ? "tr" : "en";
  const href = switchLocale(pathname, other);

  return (
    <Button asChild variant="outline" className="h-9 rounded-xl px-3">
      <Link href={href} aria-label="Switch language">
        {t(other)}
      </Link>
    </Button>
  );
}

