import babel from 'rollup-plugin-babel';

export default {
	entry: './src/index.js',
	output: '',
	plugins: [
		babel({
			presets: [
				[
					'es2015', {
						modules: false
					}
				],
				'es2017'
			]
		})
	]
}