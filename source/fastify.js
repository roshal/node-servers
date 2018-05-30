import p__fastify from 'fastify'
//
const fastify = p__fastify()
fastify.get('/',
	(request, response) => {
		response.send(request.url)
	}
)
// strict ok
fastify.get('/route/',
	(request, response) => {
		response.send(request.url)
	}
)
try {
	fastify.listen(process.env.PORT || 80)
	fastify.log.info('port ' + fastify.server.address().port)
} catch (error) {
	fastify.log.error(error)
}
