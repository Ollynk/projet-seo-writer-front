import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 w-full px-4 mt-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-black rounded-md shadow-lg">
                    <div className="px-6">
                        <div className="flex justify-between items-center h-14">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Link to="/" className="flex items-center">
                                    <span className="text-xl font-bold text-white">SEO Writer</span>
                                </Link>
                            </div>

                            {/* Navigation */}
                            <nav className="hidden md:flex space-x-8">
                                <div className="relative group">
                                    <button className="flex items-center text-gray-300 px-3 py-2 text-sm font-medium hover:text-white">
                                        PRODUCTS
                                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                <Link to="/blog" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-white">
                                    BLOG
                                </Link>
                                <Link to="/demo" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-white">
                                    BOOK A DEMO
                                </Link>
                                <Link to="/pricing" className="text-gray-300 px-3 py-2 text-sm font-medium hover:text-white">
                                    PRICING
                                </Link>
                            </nav>

                            {/* Auth Buttons */}
                            <div className="flex items-center space-x-3">
                                <Link to="/signin" className="text-gray-300 px-4 py-1.5 text-sm font-medium bg-gray-800 rounded-md hover:bg-gray-700">
                                    SIGN IN
                                </Link>
                                <Link to="/get-started" className="bg-[#E1FF7A] text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#d4ff4d]">
                                    GET STARTED
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
