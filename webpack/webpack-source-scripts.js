import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		module: {
			rules: [
				{
					resource: {
						exclude: [
							p__path__join(__dirname, '..', 'node_modules'),
						],
						include: [
							p__path__join(__dirname, '..', 'source'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel',
							options: {
								babelrc: false,
								plugins: [
									'transform-runtime',
								],
								presets: [
									'env',
									'flow',
									'stage-2',
								],
							},
						},
					],
				},
			],
		},
	}
}
