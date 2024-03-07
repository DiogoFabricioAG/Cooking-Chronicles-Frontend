import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'initial',
            component: () => import('@/views/InitialPage.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginPage.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/views/RegisterPage.vue')
        },
        {
            path: '/recipes',
            name: 'recipes',
            component: () => import('@/views/RecipesPage.vue')
        }
    ]
})

export default router
