import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        // Accents from the Gashi logo: the leaf green of the butterfly body and
        // the amber/gold of the wings.
        laub: {
          50: "#EFF5EA",
          100: "#D9E8CF",
          200: "#B4D0A3",
          300: "#8BB577",
          400: "#619B48",
          500: "#427A2C",
          600: "#336020",
          700: "#284B19",
          800: "#1E3913",
          900: "#13260C"
        },
        erde: {
          50: "#FCF4E4",
          100: "#F7E3BB",
          200: "#EFC87E",
          300: "#E3A946",
          400: "#CE8A18",
          500: "#A86A0C",
          600: "#86520A",
          700: "#663E08",
          800: "#4A2D06",
          900: "#2F1C04"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
