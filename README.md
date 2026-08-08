# Luan Eduardo | Psicólogo Clínico — Bio Link

Landing page "link da bio" para o Instagram [@luan.eduardopsi](https://www.instagram.com/luan.eduardopsi/), construída em Next.js (App Router).

## Stack

- Next.js 16 (App Router, TypeScript)
- CSS puro com custom properties (sem framework de UI)
- Fontes auto-hospedadas via `next/font/local` (Fraunces + Karla)
- Deploy: Vercel

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/page.tsx` — conteúdo da página (hero, queixas, sobre, atendimento, FAQ, contato)
- `app/components/` — componentes de UI (botão de WhatsApp, cards, FAQ, ícones)
- `app/globals.css` — design tokens e estilos
- `lib/site-config.ts` — dados de contato (WhatsApp, Instagram, CRP) centralizados

## Editar conteúdo

O texto, os cards de "queixas" e o FAQ ficam em `app/page.tsx`, em arrays no topo do arquivo — não é necessário mexer em componentes para trocar textos. O número de WhatsApp e o handle do Instagram ficam em `lib/site-config.ts`.

## Deploy

Publicado na Vercel a partir da branch principal deste repositório.
