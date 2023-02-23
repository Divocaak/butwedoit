import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server:{
		port: 3001,
		strictPort:true,
	}
};

export default config;
