tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        background: "#ffffff",
        "background-light": "#ffffff",
        "background-dark": "#0f0f0f",
        "text-light": "#1a1a1a",
        "text-dark": "#e5e5e5",
        "border-light": "#e5e5e5",
        "border-dark": "#333333",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        display: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
      },
    },
  },
};
