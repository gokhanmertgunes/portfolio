# Gökhan Mert Güneş — Developer Portfolio

Modern, üretim kalitesinde kişisel portfolyo. Dark tema, premium tipografi, Framer Motion animasyonları, case study sayfaları ve ölçeklenebilir içerik mimarisiyle hazırlandı.

## Tech Stack

- **Next.js (App Router)**: Sayfa yönlendirme, SSR/RSC mimarisi, metadata/SEO.
- **TypeScript**: Tip güvenliği ve sürdürülebilir kod.
- **Tailwind CSS (v4)**: Tasarım sistemi/spacing/typography için utility-first styling.
- **shadcn/ui**: UI primitive’leri ve consistent komponent kalitesi.
- **Framer Motion**: Sayfa geçişleri, hero ve etkileşim animasyonları.
- **next/image**: Remote avatar ve şirket logoları için optimize görsel yükleme.

## Hızlı Başlangıç

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run start
```

## İçerik Nereden Yönetiliyor?

- **Site bilgileri / linkler / navigation**: `src/lib/site.ts`
  - Ad, unvan, konum, domain, email/GitHub/LinkedIn linkleri
  - Header menü linkleri (Projects / Experience / About / Writing)

- **Hero (profil foto + metinler + CTA)**: `src/components/sections/hero.tsx`
  - Profil fotoğrafı LinkedIn üzerinden remote URL ile çekilir

- **Projeler (case study data)**: `src/content/projects.ts`
  - `slug`, başlık, açıklama, tag’ler
  - `metrics`, `gallery`, `decisions`, `architecture`, `highlights`
  - Case study sayfaları: `src/app/projects/[slug]/page.tsx`

- **Experience (iş/rol timeline)**: `src/content/experience.ts`
  - Şirket logoları remote URL ile gelir (`logoSrc`)
  - UI: `src/components/sections/experience.tsx`

## Proje Yapısı (Özet)

- `src/app/`
  - `layout.tsx`: Global layout, metadata, default dark tema
  - `page.tsx`: Home sections (Hero, Projects, Experience, About, Writing)
  - `projects/[slug]/page.tsx`: Case study sayfaları

- `src/components/`
  - `sections/`: sayfa section bileşenleri (Hero / Projects / Experience)
  - `site/`: layout parçaları (Header / Footer / Container / Motion wrapper)
  - `work/`: proje kartları, case study hero, metrics, gallery, pager
  - `ui/`: shadcn/ui komponentleri + `lightbox`

- `src/content/`
  - `projects.ts`: projeler data kaynağı
  - `experience.ts`: deneyim data kaynağı

## Görseller (Avatar / Logolar / Gallery)

Bu projede görseller **remote URL** ile `next/image` üzerinden yükleniyor.

- İzin verilen domain’ler: `next.config.ts` içindeki `images.remotePatterns`
- Case study gallery görselleri için istersen:
  - Görselleri `public/projects/...` altına koy
  - `src/content/projects.ts` içinde `gallery[].src` değerlerini `/projects/...` olarak güncelle

## Deployment

En kolay yol: **Vercel**.

```bash
npm run build
```

CI/CD’de başarılı build aldıktan sonra deploy edebilirsin.

## Lisans

Kişisel kullanım için uygundur. İçerikler (metinler/görseller) sana özeldir.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
