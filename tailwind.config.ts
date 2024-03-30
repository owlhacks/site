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
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-border-base)",
          hover: "var(--color-border-hover)",
        },
      },
      backgroundColor: {
        skin: {
          body: "var(--color-body-fill)",
          inverted: "var(--color-body-inverted)",
          light: "var(--color-body-light)",
          sky: "var(--color-sky-fill)",
          "btn-hover": "var(--color-button-hover)",
          discord: "var(--color-discord)",
        },
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
      scroll: {
        to: {
          transform: "translate(-100%)",
        },
      },
    },
    animation: {
      slideDown: "slideDown 350ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
export default config;
