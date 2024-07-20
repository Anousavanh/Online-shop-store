// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import '../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;