import type { Metadata } from "next";
import { Barlow_Condensed, Libre_Franklin } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trilho | Software sob medida para sua operação",
  description:
    "Sistemas sob medida que conectam estoque, financeiro, vendas e operação na rotina real da sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${libreFranklin.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
