import p__micro from 'micro'
//
const micro = p__micro(async () => {
	return 'hello world'
})
micro.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
//strict no
