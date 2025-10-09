/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",          // Azul escuro
        secondary: "#3B82F6",        // Azul claro
        contraste: "#F97316",        // Laranja forte
        "primary-foreground": "#FFFFFF",
        "contraste-foreground": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
