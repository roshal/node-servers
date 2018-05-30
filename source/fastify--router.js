import p__fastify from 'fastify'
//
const fastify = p__fastify()
fastify.route({
	method: 'GET',
	path: '/',
	handler: async (request, response) => {
		response.send('qwe')
	},
})
fastify.route({
	method: 'GET',
	path: '/route/',
	handler: async (request, response) => {
		response.send('qwe')
	},
})
fastify.listen(process.env.PORT || 80, function () {
	console.log('port', this.address().port)
})
//strict ok
