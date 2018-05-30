import p__find_my_way from 'find-my-way'
import p__http from 'http'
//
const server = p__http.createServer()
const router = p__find_my_way({
	defaultRoute: (request, response) => {
		response.statusCode = 404
		response.end()
	},
})
router.get(
	'/route/',
	(request, response, params, store) => {
		console.log(params)
		response.write('way')
	},
)
console.log(router.prettyPrint())
server.on(
	'request',
	(request, response) => {
		request.on('error', (error) => {
			console.error(error)
		})
		request.on('data', (data) => {
			console.log(data)
		})
		request.on('end', () => {
			router.lookup(request, response)
			response.end()
		})
	},
)
server.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
