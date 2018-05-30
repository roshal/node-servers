import p__uglifyjs_webpack_plugin from 'uglifyjs-webpack-plugin'
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		mode: 'development',
		output: {
			path: p__path__join(__dirname, '..', 'output'),
		},
		devtool: 'source-map',
		plugins: [
			new p__uglifyjs_webpack_plugin({
				uglifyOptions: {
					output: {
						comments: false,
					},
					toplevel: true,
				},
			}),
		],
	}
}
