import React from "react";
import StepCard from "./StepCard";
import { useTranslation } from "react-i18next";

const StepsSection: React.FC = () => {
    const { t } = useTranslation();
    
    const steps = [
        { number: 1, title: t("steps-section.steps.1") },
        { number: 2, title: t("steps-section.steps.2") },
        { number: 3, title: t("steps-section.steps.3") },
        { number: 4, title: t("steps-section.steps.4") },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-accent to-lime-500 bg-clip-text text-transparent">
                {t("steps-section.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {steps.map((step) => (
                    <StepCard key={step.number} {...step} />
                ))}
            </div>
        </div>
    );
};

export default StepsSection;
