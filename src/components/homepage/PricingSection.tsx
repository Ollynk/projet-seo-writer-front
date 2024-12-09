import React from "react";
import { FiCheck } from "react-icons/fi";

const PricingSection: React.FC = () => {
    return (
        <div className="bg-white text-neutral-dark">
            <div className="w-full max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {["Free", "Pro", "Enterprise"].map((plan, index) => (
                        <div key={index} className="bg-background/5 rounded-xl p-8 border border-background/20 hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                            <ul className="space-y-4">
                                {Array(4)
                                    .fill(0)
                                    .map((_, i) => (
                                        <li key={i} className="flex items-center">
                                            <FiCheck className="text-accent mr-2" />
                                            <span>Feature {i + 1}</span>
                                        </li>
                                    ))}
                            </ul>
                            <button className="w-full bg-accent hover:bg-accent/90 text-white mt-8 py-3 rounded-lg font-semibold transition-all">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
