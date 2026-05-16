import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig, type UserConfig } from 'vite-plus';

const config: UserConfig = defineConfig({
	plugins: [qwikVite()],
	resolve: {
		tsconfigPaths: true,
	},
	staged: {
		'*': 'vp check --fix',
	},
	pack: {
		dts: true,
		clean: true,
		format: ['esm'],
		outExtensions: () => ({ js: '.qwik.mjs', dts: '.d.ts' }),
	},
	lint: {
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
	fmt: {
		useTabs: true,
		tabWidth: 4,
		printWidth: 100,
		endOfLine: 'lf',
		bracketSameLine: true,
		singleQuote: true,
		ignorePatterns: ['dist/**', 'node_modules/**'],
		overrides: [
			{
				files: ['*.yml', '*.yaml', '*.md'],
				options: {
					tabWidth: 2,
					useTabs: false,
				},
			},
		],
	},
});

export default config;
