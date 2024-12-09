import React from "react";

interface StepCardProps {
    number: number;
    title: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title }) => {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-accent font-bold text-2xl mb-4">{number}.</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-4 space-y-2">
                <div className="h-2 bg-white/10 rounded w-3/4"></div>
                <div className="h-2 bg-white/10 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default StepCard;
