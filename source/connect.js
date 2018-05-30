import p__connect from 'connect'
import p__router from 'router'
//
const connect = p__connect()
//connect.use((request, response) => {
//	response.end('a')
//})
//connect.use('/', (request, response) => {
//	response.end('b')
//})
connect.use('/route/', (request, response) => {
	response.end('c')
})
connect.listen(process.env.PORT || 80)
