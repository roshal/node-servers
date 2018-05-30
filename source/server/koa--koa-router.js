import p__koa from 'koa'
import p__koa_router from 'koa-router'
//
const router = new p__koa_router({
	//prefix: '/route/',
})
router.use((context) => {
	context.response.body = context.request.url
})
// no
router.all(
	'/route/',
	async (context, next) => {
		await next()
		context.response.body += context.request.url
	},
)
const koa = new p__koa()
koa.use(
	router.routes(),
)
koa.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
console.log(router)
// no strict mode
