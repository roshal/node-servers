import p__toa from 'koa'
//
const toa = new p__toa()
toa.use(function () {
	this.body = 'toa'
})
toa.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
