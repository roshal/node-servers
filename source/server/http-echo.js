import p__http from 'http'
//
const server = p__http.createServer()
server.on(
	'request',
	(request, response) => {
		request.pipe(response)
	},
)
server.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
