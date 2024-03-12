<template>
    <nav>
        <div
            class="bg-gray-500 opacity-75 flex items-center justify-center sm:justify-between text-white p-3"
        >
            <div class="font-esteban text-2xl">
                <router-link :to="{ name: 'initial' }" class="flex flex-col items-center">
                    <IconChef />
                    <span class="select-none">Cooking Chronicles</span>
                </router-link>
            </div>
            <div class="flex">
                <router-link
                    :to="{ name: route1 }"
                    class="p-2 hidden sm:block text-white hover:underline"
                    >{{ text1 }}</router-link
                >
                <router-link
                    :to="{ name: route2 }"
                    class="hidden sm:block p-2 text-white hover:underline"
                    >{{ text2 }}</router-link
                >
            </div>
        </div>
    </nav>
</template>
<script>
import IconChef from '@/components/icons/IconChef.vue'
import { useUserStore } from '@/stores/user'
export default {
    components: {
        IconChef
    },
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    data() {
        return {
            text1: '',
            text2: '',
            route1: '',
            route2: ''
        }
    },
    mounted() {
        if (this.userStore.user.isAuthenticated) {
            this.text1 = 'Mi Perfil'
            this.text2 = 'Recetas Favoritas'
            this.route1 = 'profile'
            this.route2 = 'signup'
        } else {
            this.text1 = 'Iniciar Sesion'
            this.text2 = 'Registrarse'
            this.route1 = 'login'
            this.route2 = 'signup'
        }
    }
}
</script>
