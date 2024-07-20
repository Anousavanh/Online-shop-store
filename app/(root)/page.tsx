import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

import Image from "next/image";

export default function Home() {
  return (
    <>
    <I18nextProvider i18n={i18n}>
      <Image src="banner1.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
      <Footer />
      </I18nextProvider>
    </>
  );
}

export const dynamic = "force-dynamic";

