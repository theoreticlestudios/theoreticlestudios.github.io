import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
})

export default router