import React from 'react';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('lo')}>ລາວ</button>
    </div>
  );
};

export default LanguageSwitcher;


