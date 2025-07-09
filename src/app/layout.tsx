import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import {
  ClerkProvider,
  SignIn,
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
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <header className={styles.header}>
            <h2 className="ctas">{String(metadata.title)}</h2>
            <UserButton showName />
          </header>
          <SignedOut>
            <div className={styles.hash}>
              <SignIn routing="hash" />
            </div>
          </SignedOut>
          <SignedIn>
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
