import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full flex justify-center px-4 pt-16">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                    <span className="bg-gradient-to-r from-accent to-lime-500 bg-clip-text text-transparent">{t("hero.title-1")}</span>
                    <span className="text-white">{t("hero.title")}</span>
                </h1>
                <p className="text-xl text-white/80 mb-8">{t("hero.subtitle")}</p>

                <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="url"
                            name="url"
                            id="url"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="none"
                            spellCheck="false"
                            data-form-type="other" // Aide à désactiver l'auto-remplissage sur Safari
                            placeholder={t("hero.placeholder")}
                            className="flex-grow p-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-shown:text-white/60 placeholder:text-white/60 border border-white/20"
                        />
                        <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex flex-col items-center">
                            <span className="text-lg">{t("hero.button")}</span>
                            <span className="text-sm mt-1 opacity-80">{t("hero.nocb")}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
