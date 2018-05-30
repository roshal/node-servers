import p__finalhandler from 'finalhandler'
import p__http from 'http'
import p__trek_router from 'trek-router'
//
const router = new p__trek_router()
router.add(
	'GET',
	'/route/',
	(request, response) => {
		response.end(request.url)
	},
)
const server = p__http.createServer(
	(request, response) => {
		const array = router.find(request.method, request.url)
		if (array) {
			request.params = array[1]
			return array[0](request, response)
		}
		p__finalhandler(request, response)
	},
)
server.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
// does not work
