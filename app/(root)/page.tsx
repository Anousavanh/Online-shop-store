import React from 'react';
import Collections from '@/components/Collections';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <Image src="/banner1.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
      dsads
      <Footer />
    </>
  );
}

export const dynamic = 'force-dynamic';
