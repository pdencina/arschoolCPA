import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MetaPixel } from "@/components/meta-pixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AR School & Play Group | Colegio Cristiano en Puente Alto",
  description:
    "Matrícula abierta 2027. Colegio cristiano con proyecto educativo innovador en Puente Alto. Preescolar Play & Group y Enseñanza Básica AR School.",
  keywords: [
    "colegio puente alto",
    "colegio cristiano puente alto",
    "matrícula colegio puente alto",
    "preescolar puente alto",
    "jardín infantil puente alto",
    "play group puente alto",
  ],
  openGraph: {
    title: "AR School & Play Group | Puente Alto",
    description: "Matrícula abierta 2027 — Colegio cristiano en Puente Alto",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MetaPixel />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
