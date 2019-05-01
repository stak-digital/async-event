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
			input: './index.ts',
			plugins: [
				typescript({
					typescript: require('typescript')
				})
			]
		});

		await sourceBundle.write({
			file: './index.js',
			format: 'cjs'
		});
	} catch (e) {
		console.error(e);
	}
})();