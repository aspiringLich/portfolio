/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{svelte,html,js,ts,css}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
