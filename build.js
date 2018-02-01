const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const typescript = require('rollup-plugin-typescript');

const inputOptions = {
	entry: './src/index.ts',
	plugins: [
		babel({
			presets: [
				'flow',
				[
					'es2015', {
					modules: false
				}
				],
				'es2017',
				'stage-3'
			]
		})
	]
};

(async () => {
	// create a bundle
	try {
		const sourceBundle = await rollup.rollup({
			input: './src/index.ts',
			plugins: [
				typescript({
					typescript: require('typescript')
				})
			]
		});

		await sourceBundle.write({
			file: './src/index.js',
			format: 'cjs'
		});

		const distBundle = await rollup.rollup({
			input: './src/index.js',
			plugins: [
				babel({
					presets: [
						'flow',
						[
							'es2015', {
							modules: false
						}
						],
						'es2017',
						'stage-3'
					]
				})
			]
		});

		await distBundle.write({
			file: './index.js',
			format: 'cjs'
		});
	} catch (e) {
		console.error(e);
	}
})();