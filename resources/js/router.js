import VueRouter from 'vue-router'
import e403 from './views/error/403.vue'
import e404 from './views/error/404.vue'
import Index from './views/Index'
import Hello from './views/Hello'
import Login from './views/Login'

const routes = [
    {
        path: '/403',
        name: 'e403',
        component: e403,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/404',
        name: 'e404',
        component: e404,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/hello',
        name: 'hello',
        component: Hello,
        meta: {
            auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
]

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes
});

export default router