import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestão de Transporte",
  description: "Gestão logística de transporte de combustível do Grupo Tabocão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <header className={styles.header}>
            <h2 className="ctas">{String(metadata.title) + "🚚"}</h2>
            <Image
              className={styles.logo}
              src="/tabocao.png"
              alt="Logo Grupo Tabocão"
              width={180}
              height={38}
              priority
            />
            <UserButton showName />
          </header>
          <SignedOut>
            <text>Faça login para acessar a aplicação.</text>
          </SignedOut>
          <SignedIn>
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
