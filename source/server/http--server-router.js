import p__http from 'http'
import p__server_router from 'server-router'
//
const router = p__server_router()
// falls
router.route(
	'GET',
	'/route/',
	(request, response) => {
		response.end(request.url)
	},
)
const server = p__http.createServer(
	router.start(),
)
server.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
