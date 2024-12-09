/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#25334D",
                accent: "#21BFAE",
                secondary: "#597AA3",
                background: "#F8FAFD",
                neutral: {
                    dark: "#2E2E2E",
                    mid: "#CCCCCC",
                },
                purple: {
                    dark: "#1E0B36",
                    light: "#4B2E83",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-main": "linear-gradient(to bottom, #023e8a, #03045e)",
            },
            zIndex: {
                '100': '100',
            }
        },
    },
    plugins: [],
};
