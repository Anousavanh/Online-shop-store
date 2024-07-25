import type { AppProps } from 'next/app';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import ToasterProvider from '@/lib/providers/ToasterProvider';
import '../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ClerkProvider>
        <ToasterProvider />
        <Navbar />
        <Component {...pageProps} />
      </ClerkProvider>
    </LanguageProvider>
  );
}

export default MyApp;
