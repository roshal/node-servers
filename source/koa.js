import p__koa from 'koa'
import p__koa_router from 'koa-router'
//
const koa = new p__koa()
//strict no
koa.all(
	'/route/',
	async (context) => {
		context.response.body = context.request.url
	},
)
koa.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
