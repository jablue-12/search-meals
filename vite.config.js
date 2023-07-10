import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import Icons from 'unplugin-icons/vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslint(), Icons()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url))
		}
	}
});
