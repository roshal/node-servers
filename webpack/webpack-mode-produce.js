import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		mode: 'production',
		output: {
			path: p__path__join(__dirname, '..', 'public'),
		},
	}
}
