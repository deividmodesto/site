// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // CSS global (do Tailwind)
import Header from "@/components/Header"; // Importa o Header
import Footer from "@/components/Footer"; // Importa o Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo Reunidas",
  description: "Site institucional do Grupo Reunidas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header /> {/* <-- NOSSO HEADER AQUI */}

        <main className="container mx-auto my-8 min-h-screen">
          {children} {/* <-- AQUI É ONDE O CONTEÚDO DA PÁGINA (page.tsx) ENTRA */}
        </main>

        <Footer /> {/* <-- NOSSO FOOTER AQUI */}
      </body>
    </html>
  );
}