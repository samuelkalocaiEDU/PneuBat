import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			fallback: undefined,
			pages: 'build',
			assets: 'build',
			precompress: true
		}),
		alias: {
			$components: 'src/lib/components',
			$lib: 'src/lib'
		}
	},
	vitePlugin: {
		inspector: false
	}
};

export default config;