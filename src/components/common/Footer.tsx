import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-neutral-dark text-white mt-16 py-12">
            {/* Footer */}
            <footer className="bg-neutral-dark text-white mt-16 py-12">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        {Array(4)
                            .fill(0)
                            .map((_, i) => (
                                <div key={i}>
                                    <h4 className="font-semibold mb-4">Footer Section {i + 1}</h4>
                                    <ul className="space-y-2">
                                        {Array(4)
                                            .fill(0)
                                            .map((_, j) => (
                                                <li key={j} className="text-white/60 hover:text-white transition-colors">
                                                    <a href="#">Link {j + 1}</a>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
