import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		tailwindcss(),
		imagetools(),
		sveltekit()
	],
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			output: {
				manualChunks: undefined
			}
		}
	},
	define: {
		__BUILD_DATE__: JSON.stringify(new Date().toISOString())
	}
});