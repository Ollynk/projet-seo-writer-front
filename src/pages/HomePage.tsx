import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import StepsSection from "../components/homepage/StepsSection";
import PartnersSection from "../components/homepage/PartnersSection";
import PricingSection from "../components/homepage/PricingSection";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const HomePage: React.FC = () => {
    return (
        <div className="w-full">
            <Header />
            <main>
                <div className="bg-gradient-main pt-16 pb-16">
                    <HeroSection />
                    <StepsSection />
                </div>
                {/* Partners Section */}
                <PartnersSection />
                {/* Pricing Section */}
                <PricingSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
