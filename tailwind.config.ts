import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'background': '#ffffff',
        'primary': '#4f95f7',
        'bg': '#ffffff',
        'bg-sky': '#9DC6FF',
        'text': '#1b1b1b',
        'text-body': '#5e5e5e',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Mulish', 'sans-serif'],
        title: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  corePlugins: {
    preflight: false,
  },
};
export default config;
