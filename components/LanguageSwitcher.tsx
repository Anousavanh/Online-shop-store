import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange("en")}
        disabled={language === "en"}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange("lo")}
        disabled={language === "th"}
      >
        ລາວ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
