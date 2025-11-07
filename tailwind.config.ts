import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Typography plugin customization for dark mode tables
  typography: ({ theme }: any) => ({
        invert: {
          css: {
            '--tw-prose-borders': theme('colors.gray.700'),
            '--tw-prose-th-borders': theme('colors.gray.600'),
            'table': {
              borderColor: theme('colors.gray.700'),
              borderCollapse: 'collapse',
            },
            'thead': {
              borderColor: theme('colors.gray.600'),
              borderBottomWidth: '2px',
            },
            'th': {
              padding: '0.5rem 1rem',
              borderColor: theme('colors.gray.700'),
              backgroundColor: theme('colors.gray.800'),
            },
            'td': {
              padding: '0.5rem 1rem',
              borderColor: theme('colors.gray.700'),
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: 'rgba(255,255,255,0.02)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
