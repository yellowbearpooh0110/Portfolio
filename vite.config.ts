import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@data': '/src/data',
			'@pages': '/src/pages',
			'@theme': '/src/theme',
		},
	},
});
