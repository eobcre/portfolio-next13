import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '600px',
      sm: '801px',
      'pre-md': '900px',
      md: '1047px',
      lg: '1129px',
      xl: '1280px',
      '2xl': '1440px',
      '6xl': '2560px',
    },
  },
  plugins: [],
};
export default config;
