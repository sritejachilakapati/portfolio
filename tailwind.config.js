/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6e56cf",
        secondary: "#f97316",
        dark: {
          100: "#a0a0a0",
          200: "#2d2d3a",
          300: "#1a1a23",
          400: "#0f0f13",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
