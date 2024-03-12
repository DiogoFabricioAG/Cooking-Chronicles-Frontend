<template>
    <div class="w-1/3 space-y-2">
        <img :src="image" alt="ProfileImage" class="rounded-full w-1/2 mx-auto" />
        <div class="flex justify-between w-full">
            <h2 class="text-center text-2xl font-merriweather font-bold">{{ username }}</h2>
            <span class="flex space-x-2">
                <ButtonComponent
                    class="bg-gray-500 w-auto border-gray-500 hover:text-gray-500"
                    text="Editar"
                    name="editprofile"
                />
                <button
                    @click="outsesion"
                    class="p-2 flex items-center justify-center text-white font-esteban text-sm bg-red-500 border-red-500 hover:text-red-500 hover:bg-white border duration-300"
                >
                    Cerrar Sesion
                </button>
            </span>
        </div>
        <div class="flex space-x-2 justify-center">
            <IconFacebook :href="face"/>
            <IconInstagram :href="insta"/>
            <IconTiktok  :href="tiktok"/>
        </div>
        <section class="text-sm font-esteban space-y-1 text-center text-gray-500">
            <p>
                {{ description }}
            </p>
            <p>
                Aprendizaje: {{ education }}
            </p>
            <p>
                Mi Especialidad: {{ speciality }}
            </p>
        </section>
        <router-link :to="{name:'crecipe'}" class="block text-center bg-blue-500 text-white m-3 p-1 hover:bg-white hover:text-blue-500 border border-blue-500 duration-150">Crear Receta</router-link>
    </div>
</template>
<script>
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconTiktok from '@/components/icons/IconTiktok.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useUserStore } from '@/stores/user'

export default {
    props: ["image","username","description","education","speciality","face","insta","tiktok"],
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    components: {
        IconFacebook,
        IconInstagram,
        IconTiktok,
        ButtonComponent
    },
    methods: {
        outsesion() {
            this.userStore.clearUserInfo()
            this.$router.push({ name: 'login' })
        }
    }
}
</script>
