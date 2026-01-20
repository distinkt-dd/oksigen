import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
	resolve: {
		extensions: ['.scss', '.js'],
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url),
			),
			'@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
			'@scripts': fileURLToPath(new URL('./src/scripts', import.meta.url)),
		},
	},
	base: '/',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use '@styles/helpers' as *;`,
			},
		},
	},
})
