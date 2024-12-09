import React from "react";

const PartnersSection: React.FC = () => {
    return (
        <div className="bg-white text-neutral-dark">
            <div className="w-full max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-center mb-8">Trusted By Leading Companies</h2>
                <div className="flex justify-center gap-8 flex-wrap">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i} className="w-32 h-12 bg-background/10 rounded-lg"></div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;
