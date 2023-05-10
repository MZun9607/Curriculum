/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'normalmodeblue': {
          50: "#E0EEFF",
          100: "#C2DDFF",
          200: "#8ABEFF",
          300: "#4D9DFF",
          400: "#147EFF",
          500: "#0063D8",
          600: "#004EAD",
          700: "#003980",
          800: "#002757",
          900: "#001229",
          950: "#000914"
        },
        'darkmodeblue': {
          50: "#F0F7FF",
          100: "#E0EEFF",
          200: "#BDDBFF",
          300: "#9ECAFF",
          400: "#80B9FF",
          500: "#5DA6FF",
          600: "#1A81FF",
          700: "#005ED1",
          800: "#003E8A",
          900: "#002047",
          950: "#001024"
        }
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
