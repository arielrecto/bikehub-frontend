/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ['bumblebee']
  },

  // daisyui: {
  //   themes: [
  //     {
  //       // mytheme: {
  //       //   "primary": "#003eff",
  //       //   "secondary": "#006af2",
  //       //   "accent": "#ff8600",
  //       //   "neutral": "#180b1d",
  //       //   "base-100": "#fff",
  //       //   "info": "#00c5f5",
  //       //   "success": "#00c168",
  //       //   "warning": "#ffaf00",
  //       //   "error": "#e13d53",
  //       // },

  //       mytheme: {
  //         "primary": "#88EE8D",
  //         "secondary": "#0027ff",
  //         "accent": "#7B3FF5",
  //         "neutral": "#01170F",
  //         "base-100": "#F5FEFB",
  //         "info": "#50e0ff",
  //         "success": "#317b00",
  //         "warning": "#e68f00",
  //         "error": "#e44061",
  //       },
  //     },
  //   ],
  // },

  plugins: [require('daisyui')],
}