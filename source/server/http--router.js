import p__finalhandler from 'finalhandler'
import p__http from 'http'
import p__router from 'router'
//
const server = p__http.createServer()
const router = p__router({
	caseSensitive: true,
	strict: true,
})
// ok
router.all('/route/', function (request, response) {
	response.end(request.url)
})
// no
router.use('/use/', function (request, response) {
	response.end(request.url)
})
// ok
router.use('/use/$', function (request, response) {
	response.end(request.url)
})
server.on(
	'request',
	(request, response) => {
		router(request, response, p__finalhandler(request, response))
	},
)
server.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
