// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter({
		runtime:'nodejs22.x',
		// split:false
	}
	) }
};

export default config;
