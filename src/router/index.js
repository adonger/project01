import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Home from '@/views/Home/Home.vue'
import Category from '@/views/Category/Category.vue'
import Cart from '@/views/Cart/Cart.vue'
import Me from '@/views/Me/Me.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/me', component: Me },
]

const router = new VueRouter({
    routes
})

export default router