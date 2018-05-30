import p__server from 'server'
//
p__server({
		port: 3000,
	},
	p__server.router.get('/', (context) => {
		return context.url
	}),
	[
		p__server.router.get('/route/', (context) => {
			return context.url
		}),
	],
)
//strict no
