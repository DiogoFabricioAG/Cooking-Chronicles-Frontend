<template>
    <NavComponent />
    <form
        method="post"
        @submit.prevent="submitform"
        class="md:w-1/2 mt-8 p-2 space-y-4 mx-auto flex flex-col items-center"
    >
        <img src="../images/ChefImage.png" class="md:size-1/4 size-1/2 mb-2" alt="logo" />
        <label class="font-esteban text-xl" for="username">Nombre de Usuario</label>
        <input
            type="text"
            id="username"
            v-model="username"
            class="border-black shadow-md p-2 text-sm w-3/4 md:w-1/2 border-2"
            placeholder="Ingrese su nombre de Usuario"
        />
        <label class="font-esteban text-xl" for="password">Contraseña</label>
        <input
            type="password"
            id="password"
            v-model="password"
            class="border-black shadow-md p-2 w-3/4 text-sm border-2 md:w-1/2"
            placeholder="Ingrese su contraseña"
        />
        <button
            class="bg-blue-400 p-2 rounded-lg hover:bg-gradient-to-r from-blue-300 to-blue-500 transition text-white font-opensans w-3/4 md:w-1/2"
        >
            Iniciar Sesion
        </button>
    </form>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
export default {
    name: 'Login',
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    components: {
        NavComponent
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    mounted() {
        this.getusers()
        console.log(this.userStore.user)
    },
    methods: {
        async getusers() {
            await axios
                .get('api/user/')
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async submitform() {
            await axios
                .post('api/user/login/', {
                    username: this.username,
                    password: this.password
                })
                .then((response) => {
                    console.log(response.data)
                    this.userStore.setUserInfo(response.data)
                    this.$router.push({ name: 'initial' })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>
