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
        },
        {
            path: '/recipes/:id',
            name: 'recipe',
            component: () => import('@/views/RecipePage.vue')
        },
        {
            path: '/recipe/create',
            name: 'crecipe',
            component: () => import('@/views/RecipeCreatePage.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/ProfilePage.vue')
        },
        {
            path: '/profile/edit',
            name: 'editprofile',
            component: () => import('@/views/EditProfilePage.vue')
        },
        {
            path: '/credits',
            name: 'credits',
            component: () => import('@/views/CreditsPage.vue')
        }
    ]
})

export default router
