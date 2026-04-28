import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { AppMotion } from "@/components/site/app-motion";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { locales } from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <AppMotion>{children}</AppMotion>
        </main>
        <SiteFooter />
      </div>
    </NextIntlClientProvider>
  );
}

