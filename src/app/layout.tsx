import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { CustomCursor } from "./_components/custom-cursor";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sávio Marques | Desenvolvedor Back-end",
  description: "Portfólio de Sávio Marques - Desenvolvedor Back-end & Full Stack focado em Java, Spring Boot, Node, C++ e React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSerif.variable} ${inter.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-screen flex flex-col justify-between selection:bg-emerald-500/20 selection:text-emerald-200">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}