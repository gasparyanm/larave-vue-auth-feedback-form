import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";

Vue.use(Router)

const router = new Router({
    history: true,
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                auth: false,
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false,
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth: true,
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    const authRequired = to.matched.some(route => route.meta.auth)
    const loggedIn = localStorage.getItem('token');
    console.log(to.name)
    if (authRequired && !loggedIn && to.name !== 'login') {
        console.log(111111)
            next('/login')
    } else if (loggedIn && to.name !== 'dashboard') {
        console.log(222222)
        next('/dashboard')
    } else {
        console.log(333333)
        next();
    }
})

export default router
