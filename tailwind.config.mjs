/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		 maxWidth: {
      '55': '55%',
    },
		 colors: {
        'normal': '#1C0E40',
		'white': '#f5f3ea',
		'footer': '#006241',
		'lightGreen': '#DFF9BA'
      },

	  fontFamily: {
         'header': ['"Plus Jakarta Sans"', 'Arial', 'sans-serif'],
         'sans': ['"Plus Jakarta Sans"', 'Arial', 'sans-serif'],
	  },
	},
	plugins: [],
}
