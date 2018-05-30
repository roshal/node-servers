import p__webpack_merge from 'webpack-merge'
//
const webpack = (name) => {
	const path = './webpack/webpack-' + name
	return require(path).default()
}
//
export default (env) => {
	return p__webpack_merge(
		webpack('common'),
		...env.develop ? [webpack('mode-develop')] : [],
		...env.produce ? [webpack('mode-produce')] : [],
		webpack('source-scripts'),
	)
}
