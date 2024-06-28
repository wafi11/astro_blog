/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				bebas: ["Bebas Neue", "sans-serif"],
				blog: ["Montserrat", "sans-serif"],
			},
			container: {
				center: true,
				padding: "2rem",
				screens: {
				  "sm-2": "581px",
				  "md-2": "1100px",
				  "2xl": "1400px",
				},
			  },
			colors : {
				"accent" : "#FFDE95",
				"secondary" : "#ADD899",
				"pudar" : "#F6E6CB"
			}
		},
	},
	plugins: [],
}
