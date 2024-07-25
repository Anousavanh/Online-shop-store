import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import ToasterProvider from '@/lib/providers/ToasterProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Maximum Store',
  description: 'Maximum Ecommerce Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ClerkProvider>
            <ToasterProvider />
            <Navbar />
            <LanguageSwitcher />
            {children}
          </ClerkProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
