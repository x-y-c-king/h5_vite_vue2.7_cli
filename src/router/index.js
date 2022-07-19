import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: {
            title: '关于'
        }
    }
]

const router = new Router(
	{
		mode: 'hash',
		routes,
		scrollBehavior (to, from, savedPosition) { // eslint-disable-line切换页面后自动滚动到顶部
			if (savedPosition) {
				return savedPosition
			}
			return { x: 0, y: 0 }
		}
	}
)

// 设置页面title
router.beforeEach((to, form, next) => {//eslint-disable-line
	document.title = to.meta.title
	next()
})

export default router
