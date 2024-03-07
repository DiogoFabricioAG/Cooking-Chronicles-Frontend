<template>
    <nav>
        <div class="bg-gray-500 opacity-75 flex items-center justify-center sm:justify-between text-white p-3">
            <div class="font-esteban text-2xl">
                <router-link :to="{ name: 'initial' }" class="flex flex-col items-center">
                    <IconChef/>
                    <span>Cooking Chronicles</span>
                </router-link>
            </div>
            <div class="flex">
                <router-link :to="{name:'login'}" class="p-2 hidden sm:block text-white hover:underline">Iniciar Sesion</router-link>
                <router-link :to="{name:'signup'}" class="hidden sm:block p-2 text-white hover:underline">Registrarse</router-link>
            </div>
        </div>
    </nav>
</template>
<script>
import IconChef from "@/components/icons/IconChef.vue"
export default {
    components: {
        IconChef
    }
}
</script>
