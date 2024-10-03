import { sveltekit } from '@sveltejs/kit/vite';
import purge from '@erbelion/vite-plugin-sveltekit-purgecss';
import { enhancedImages } from '@sveltejs/enhanced-img';

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		purge(),
		enhancedImages() //
	]
});
