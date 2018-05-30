import {
	Server as p__hapi__server,
} from 'hapi'
//
const server = new p__hapi__server({
	host:'localhost',
	port: process.env.PORT || 80,
})
server.route({
	method: 'get',
	path: '/',
	handler: async (request, hapi) => {
		hapi = hapi.response(request.url.path)
		return hapi
	},
})
// strict ok
server.route({
	method: 'get',
	path: '/route/',
	handler: async (request, hapi) => {
		hapi = hapi.response(request.url.path)
		return hapi
	},
})
try {
	server.start()
	console.log('port ' + server.server.address().port)
} catch (error) {
	console.log(error)
}
