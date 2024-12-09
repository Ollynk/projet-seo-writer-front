import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="fixed top-4 right-4 flex gap-2 z-[100]">
            <button
                onClick={() => changeLanguage("fr")}
                className={`px-3 py-1 rounded ${i18n.language === "fr" ? "bg-accent text-white" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
            >
                FR
            </button>
            <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-accent text-white" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSelector;
