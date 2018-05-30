import p__koa from 'koa'
import p__koa_trie_router from 'koa-trie-router'
//
const router = new p__koa_trie_router({
	//prefix: '/route/',
})
// ok
router.get(
	'/route/',
	async (context, next) => {
		context.response.body = context.request.url
		await next()
	},
)
const koa = new p__koa()
koa.use(
	router.middleware(),
)
koa.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
console.log(router)
// ok strict mode
