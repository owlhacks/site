import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          primary: "var(--color-theme-primary)",
          secondary: "var(--color-text-secondary)",
          inverted: "var(--color-body-fill)",
          muted: "var(--color-text-muted)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-border-base)",
          light: "var(--color-border-light)",
          lighter: "var(--color-border-lighter)",
          inverted: "var(--color-border-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-body-fill)",
          light: "var(--color-body-light)",
          lighter: "var(--color-border-lighter)",
          inverted: "var(--color-body-inverted)",
          primary: "var(--color-theme-primary)",
          secondary: "var(--color-text-secondary)",
          sky: "var(--color-sky-fill)",
          btn: "var(--color-button)",
          "btn-hover": "var(--color-button-hover)",
          discord: "var(--color-discord)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at center)",
        "gradient-linear":
          "linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%",
      },
      fill: {
        skin: {
          body: "var(--color-body-fill)",
          light: "var(--color-body-light)",
        },
      },
    },
    keyframes: {
      slideDown: {
        from: {
          height: "0px",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      slideUp: {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0px",
        },
      },
      slideUpAndFade: {
        from: {
          opacity: "0%",
          transform: "translateY(2px)",
        },
        to: {
          opacity: "100%",
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      slideDown: "slideDown 350ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUpAndFade: "slideUpAndFade 100ms",
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
export default config;
