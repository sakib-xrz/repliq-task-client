/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#D99904",

                    secondary: "#E8E8E8",

                    neutral: "#1F2937",

                    "base-100": "#FFFFFF",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};