import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        ppmondwest: ['var(--font-ppmondwest)', 'serif'],
        ppneuemontreal: ['var(--font-ppneuemontreal)', 'sans-serif'],
        ppneuebit: ['var(--font-ppneuebit)', 'sans-serif'],
      },
      maxWidth: {
        'text': '48rem',
        'image': '84rem',
      },
      fontSize: {
        '2xlnm': ['60px', '72px'],
        '2xlmw': ['72px', '72px'],
        xlnm: ['33.5px', '40px'],
        xlmw: ['40px', '40px'],
        mdnm: ['20px', '24px'],
        mdmw: ['23px', '24px'],
        smnm: ['15px', '18px'],
        smmw: ['16.5px', '18px'],
        xsnm: ['12px', '14px'],

        mdnb: ['23px', '16px'],
      },

      colors: {
        gray: {
          50: '#fafafa',
          200: '#a6a6a6',
          400: '#9e9e9e',
          600: '#606060'
        },
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
