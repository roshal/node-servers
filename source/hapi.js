import {
	Server as p__hapi__server,
} from 'hapi'
//
const server = new p__hapi__server({
	port: process.env.PORT || 80,
})
server.route({
	method: 'GET',
	path: '/',
	handler: async (request, hapi) => {
		hapi = hapi.response({
			name: 'efim',
		})
		return hapi
	},
})
server.start()
