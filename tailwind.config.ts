import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				brand: { DEFAULT: '#E63B2E', dark: '#BF2D22', light: '#FF5A4D' },
				surface: { DEFAULT: '#0F1117', card: '#1A1D27' },
				text: { primary: '#F5F5F5', muted: '#9CA3AF' }
			},
			fontFamily: {
				display: ['Barlow Condensed', 'sans-serif'],
				body: ['Inter Variable', 'sans-serif']
			}
		}
	},
	plugins: []
} satisfies Config;