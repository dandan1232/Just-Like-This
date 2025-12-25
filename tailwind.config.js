export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.12), 0 6px 16px rgba(15, 23, 42, 0.08)",
        glow: "0 0 0 1px rgba(255, 255, 255, 0.18), 0 12px 32px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: 0.9 },
          "50%": { transform: "scale(1.03)", opacity: 1 },
        },
      },
      animation: {
        floaty: "floaty 10s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
