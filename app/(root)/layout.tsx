import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import i18n from '@/lib/i18n';
import { I18nextProvider } from 'react-i18next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maximum Store",
  description: "Maximum Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <I18nextProvider i18n={i18n}>
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
      </I18nextProvider>
    </html>
  );
}
