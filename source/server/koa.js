import p__koa from 'koa'
//
const koa = new p__koa()
koa.use(
	(context) => {
		context.response.body = context.request.url
	},
)
koa.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
