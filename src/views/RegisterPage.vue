<template>
    <NavComponent />
    <form
        method="POST"
        @submit.prevent="submitForm"
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
        <label class="font-esteban text-xl" for="password1">Contraseña</label>
        <input
            type="password"
            id="password1"
            v-model="password1"
            class="border-black shadow-md p-2 w-3/4 text-sm border-2 md:w-1/2"
            placeholder="Ingrese su contraseña"
        />
        <label class="font-esteban text-xl" for="password2">Repite la Contraseña</label>
        <input
            type="password"
            id="password2"
            v-model="password2"
            class="border-black shadow-md p-2 w-3/4 text-sm border-2 md:w-1/2"
            placeholder="Repetir su contraseña"
        />
        <button
            class="bg-blue-400 p-2 rounded-lg hover:bg-gradient-to-r from-blue-300 to-blue-500 transition text-white font-opensans w-3/4 md:w-1/2"
        >
            Registrarse
        </button>
    </form>
    <div
        v-if="errors.length"
        class="font-merriweather md:w-1/2 mx-auto p-4 mb-3 bg-red-500 text-white"
    >
        <p v-for="(error, index) in errors" :key="index">* {{ error }}</p>
    </div>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import axios from 'axios'

export default {
    name: 'Login',
    components: {
        NavComponent
    },
    data() {
        return {
            username: '',
            password1: '',
            password2: '',
            errors: []
        }
    },
    methods: {
        async submitForm() {
            this.errors = []
            if (this.password1 === '') {
                this.errors.push('La contraseña es obligatoria')
            }
            if (this.username === '') {
                this.errors.push('El nombre de usuario es obligatorio')
            }
            if (this.password1.length < 4) {
                this.errors.push('La contraseña debe tener al menos 4 caracteres')
            }
            if (this.password1 !== this.password2) {
                this.errors.push('Las contraseñas no coinciden')
            }
            if (!this.errors.length) {
                await axios
                    .post('/api/user/create/', {
                        user: this.username,
                        password: this.password1
                    })
                    .then((response) => {
                        this.$router.push({ name: 'login' })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
}
</script>
