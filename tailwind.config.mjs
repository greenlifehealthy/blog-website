/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		 maxWidth: {
      '55': '55%',
    },
		 colors: {
        'normal': '#242424',
		'white': '#fff',
		'footer': '#006241',
		'lightGreen': '#DFF9BA'
      },

	  fontFamily: {
         'header': ['"Plus Jakarta Sans"', 'Arial', 'sans-serif'],
         'sans': ['"Source Serif 4"', 'Arial', 'sans-serif'],
         'style': ['"Playfair Display"', 'Arial', 'sans-serif'],
	  },
	},
	plugins: [],
}
