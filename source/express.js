import p__express from 'express'
//
const router = new p__express.Router({
	prefix: '/api',
})
router.all(
	/^\/api\/$/,
	async (context, next) => {
		context.response.body = context.request.url
		await next()
	},
)
const express = new p__express()
express.use(
	router.routes(),
)
express.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
console.log(router)
