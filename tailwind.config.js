/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#003eff",
          "secondary": "#006af2",
          "accent": "#ff8600",
          "neutral": "#180b1d",
          "base-100": "#fff",
          "info": "#00c5f5",
          "success": "#00c168",
          "warning": "#ffaf00",
          "error": "#e13d53",
        },
      },
    ],
  },

  plugins: [require('daisyui')],
}