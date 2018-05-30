import p__restify from 'restify'
//
const server = p__restify.createServer()
server.get('/',
	(request, response) => {
		response.send(request.url)
	}
)
// strict ok
server.get('/route/',
	(request, response) => {
		response.send(request.url)
	}
)
server.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
