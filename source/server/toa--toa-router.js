import p__toa from 'toa'
import p__toa_router from 'toa-router'
//
const router = new p__toa_router({
	ignoreCase: false,
	fixedPathRedirect: false,
	trailingSlashRedirect: false,
})
const route = router.define('/route/')
route.get(function () {
	this.body = this.path
})
const toa = new p__toa()
toa.use(
	router.toThunk(),
)
toa.listen(process.env.PORT || 80)
