/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#EEEEEE',
        secondary: '#222831', 
        'primary-light': '#718096',
        'secondary-light': '#EDF2F7',

        'text-light': '#EEEEEE',
        'text-dark': '#222831',

        'text-primary': '#2D3B48',
        'text-secondary': '#A0AEC0',

        'accent': '#00ADB5',
        'accent-alt': '#393E46',

        'content-primary': '#DDFFF7',
        'content-secondary': '#222831',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
