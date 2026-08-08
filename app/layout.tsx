import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-normal.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/fraunces-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = localFont({
  src: [{ path: "./fonts/karla.woff2", weight: "300 700", style: "normal" }],
  variable: "--font-karla",
  display: "swap",
});

const siteUrl = "https://luanpsi.vercel.app";
const title = "Luan Eduardo | Psicólogo Clínico — CRP 13/11238";
const description =
  "Atendimento psicológico presencial em Jacaraú/PB e online para todo o Brasil. Depressão, ansiedade, ideação suicida e traumas emocionais. Terapia Cognitivo-Comportamental (TCC).";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Luan Eduardo | Psicólogo Clínico",
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
