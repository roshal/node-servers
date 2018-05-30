import p__connect from 'connect'
import p__stacked from 'stacked'
//
const connect = p__connect()
connect.use(p__stacked().mount('/route/', (request, response) => {
	response.end('route')
}))
connect.listen(process.env.PORT || 80)
