import React from 'react';
import { useTranslation } from 'react-i18next';
import Collections from '@/components/Collections';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Image src="/banner1.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <h1>{t('welcome_message')}</h1>
      <Collections />
      <ProductList />
      <Footer />
    </>
  );
}

export const dynamic = 'force-dynamic';
