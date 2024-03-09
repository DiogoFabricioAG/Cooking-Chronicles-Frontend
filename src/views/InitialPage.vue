<template>
    <NavComponen />
    <section>
        <div class="w-full flex justify-center flex-col sm:flex-row items-center mt-4">
            <div class="sm:w-1/2 flex justify-center mb-3 sm:mb-0">
                <img src="../images/Presentacion.jpg" alt="Inicio" class="object-cover w-[70%]" />
            </div>
            <div class="sm:w-1/2 flex flex-col items-center text-center justify-center">
                <h1 class="font-esteban text-3xl">Cooking Chronicles</h1>
                <h2 class="font-bold font-merriweather text-3xl mt-2 sm:text-5xl px-2 text-pretty">
                    Encuentra tus recetas favoritas en un solo lugar
                </h2>
                <ul class="flex space-x-1 mt-2">
                    <li>
                        <IconFacebook href="https://www.facebook.com" />
                    </li>
                    <li>
                        <IconX href="https://twitter.com/home" />
                    </li>
                    <li>
                        <IconInstagram href="https://www.instagram.com" />
                    </li>

                    <li>
                        <IconGithub href="https://github.com/DiogoFabricioAG" />
                    </li>
                    <li>
                        <IconMail href="mailto:diogofabricio17@gmail.com" />
                    </li>
                </ul>
                <div class="w-3/4 mt-3 flex flex-col items-center">
                    <router-link
                        :to="{ name: 'recipes' }"
                        class="p-2 block w-full bg-black text-white font-esteban text-sm hover:bg-white hover:text-black border border-black duration-300"
                        >Recetas</router-link
                    >
                    <router-link
                        :to="{ name: 'credits' }"
                        class="p-2 mt-1 w-full bg-pink-500 hidden sm:block text-white font-esteban text-sm hover:bg-white hover:text-pink-500 border border-pink-500 duration-300"
                        >Creditos</router-link
                    >
                    <div class="flex justify-between w-full py-3">
                        <ButtonComponent
                            :name="!userStore.user.isAuthenticated ? 'login' : 'profile'"
                            class="bg-blue-500 border-blue-500 hover:text-blue-500 sm:hidden"
                            :text="!userStore.user.isAuthenticated ? 'Iniciar Sesion' : 'Mi Perfil'"
                        />
                        <ButtonComponent
                            name="credits"
                            class="bg-pink-500 border-pink-500 hover:text-pink-500 sm:hidden"
                            text="Creditos"
                        />
                        <ButtonComponent
                            name="signup"
                            class="bg-yellow-500 border-yellow-500 hover:text-yellow-500 sm:hidden"
                            :text="
                                !userStore.user.isAuthenticated
                                    ? 'Registrarse'
                                    : 'Recetas Favoritas'
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NavComponen from '@/components/NavComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconX from '@/components/icons/IconX.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import { useUserStore } from '@/stores/user'

export default {
    name: 'Initial',
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    components: {
        NavComponen,
        ButtonComponent,
        IconFacebook,
        IconX,
        IconInstagram,
        IconMail,
        IconGithub
    }
}
</script>
