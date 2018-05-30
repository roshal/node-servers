import p__koa from 'koa'
import p__koa_router from 'koa-router'
//
const router = new p__koa_router({
	prefix: '/route',
})
router.all(
	///^\/route\/$/,
	'/route/',
	async (context, next) => {
		context.response.body = context.request.url
		await next()
	},
)
const koa = new p__koa()
koa.use(
	router.routes(),
)
//koa.all(
//	'/',
//	async (context) => {
//		context.response.body = context.request.url
//	},
//)
//koa.all(
//	'/route/',
//	async (context) => {
//		context.response.body = context.request.url
//	},
//)
koa.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
console.log(router)
//strict no
