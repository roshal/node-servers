import p__http from 'http'
//
const server = p__http.createServer()
server.on(
	'request',
	async (request, response) => {
		request.on('error', (error) => {
			console.error(error)
		})
		request.on('data', (data) => {
			console.log(data)
		})
		request.on('end', () => {
			console.log(request.method)
			console.log(request.url)
			console.log(request.headers)
			console.log(request.body)
			response.statusCode = 200
			response.setHeader(
				'content-type',
				'application/json',
			)
			response.write(
				JSON.stringify(request.headers),
			)
			response.end()
		})
	},
)
server.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
