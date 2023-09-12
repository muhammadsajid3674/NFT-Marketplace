/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "67px",
        h2: "51px",
        h3: "38px",
        h4: "28px",
        h5: "22px",
        body: "16px",
        caption: "12px",
      },
      fontFamily: {
        spaceMono: "var(--font-space)",
        workSans: "var(--font-work)",
        workSansBold: "var(--font-work-semiBold)",
      },
      colors: {
        dark: "#2B2B2B",
        darkDim: "#3B3B3B",
        light: "#858584",
        action: "#A259FF",
        dimCaption: "#858584",
      },
      backgroundImage: {
        gradient1: "linear-gradient(128deg, #A259FF 49.75%, #377DF7 136.56%)",
        gradient2: "linear-gradient(101deg, #A259FF 13.57%, #FF6250 97.65%)",
        gradientOverlay: "linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
