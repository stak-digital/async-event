import babel from 'rollup-plugin-babel';

export default {
	entry: './src/index.js',
	output: {
		file: './index.js',
		format: 'cjs'
	},
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
}