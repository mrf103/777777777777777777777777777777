export default {
  darkMode: ["class"],
  content: [
    './Pages/**/*.{js,jsx}',
    './Components/**/*.{js,jsx}',
    './index.html',
    './*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          50: '#f0f4f8',
          500: '#1e3a5f',
          600: '#1a324f',
        },
        secondary: {
          DEFAULT: '#2563eb',
          500: '#2563eb',
        },
        accent: {
          DEFAULT: '#c9a227',
          500: '#c9a227',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Noto Kufi Arabic', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
