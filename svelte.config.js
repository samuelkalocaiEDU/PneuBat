import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
    },
    kit: {
        // Závorky u adaptéru musí zůstat ÚPLNĚ PRÁZDNÉ, aby byl Vercel spoko
        adapter: adapter(), 
        
        // Sem správně patří ignorování chybějících odkazů:
        prerender: {
            handleMissingId: 'warn'
        },
        
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