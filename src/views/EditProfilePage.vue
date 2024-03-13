<template>
    <NavComponent />
    <section class="m-2">
        <h2 class="text-3xl font-bold text-center font-opensans">Edita tu Perfil</h2>
        <form
            action="."
            method="post"
            @submit.prevent="submitForm"
            enctype="multipart/form-data"
            class="p-4 md:w-1/4 mx-auto flex flex-col justify-between items-center space-y-1"
        >
            <label for="username">Nombre del Usuario</label>
            <input
                id="username"
                v-model="username"
                class="border rounded-md border-black py-0.5 px-1 w-60 text-sm ml-2"
                type="text"
                placeholder="Nombre del Usuario"
            />
            <label for="image">Ingresar la imagen del Usuario</label>
            <input type="file" ref="file" class="bg-white p-1 border border-black rounded-lg" />
            <label for="age">Edad del usuario</label>
            <input
                id="age"
                type="number"
                v-model="age"
                class="border rounded-md border-black py-0.5 px-1 w-12 text-xs ml-2"
                placeholder="Edad"
            />
            <label for="nationality">Nacionalidad del usuario</label>
            <input
                id="nationality"
                v-model="nationality"
                class="border border-black rounded-md py-0.5 px-1 w-60 text-sm ml-2"
                placeholder="Nacionalidad del Usuario"
                type="text"
            />
            <label for="description">Descripción del Usuario</label>
            <textarea
                placeholder="Descripción del Usuario"
                v-model="description"
                name="description"
                id="description"
                cols="40"
                rows="5"
                class="border rounded-md border-black shadow-sm p-1 resize-none"
            ></textarea>
            <label for="education">Educación del Usuario</label>
            <textarea
                name="education"
                v-model="education"
                placeholder="Pequeña descripción de los estudios del Usuario"
                id="education"
                cols="40"
                rows="3"
                class="border rounded-md p-1 border-black shadow-sm resize-none"
            ></textarea>
            <label for="especiality">Especialidad Culinaria del Usuario</label>
            <textarea
                placeholder="Especialidad del Usuario"
                v-model="speciality"
                name="especiality"
                id="especiality"
                cols="40"
                rows="5"
                class="border border-black rounded-md p-1 shadow-sm resize-none"
            ></textarea>
            <input
                v-model="linkface"
                class="border border-black rounded-md py-0.5 px-1 w-60 text-sm ml-2"
                placeholder="Cuenta de Facebook"
                type="text"
            />
            <input
                v-model="linkinsta"
                class="border border-black rounded-md py-0.5 px-1 w-60 text-sm ml-2"
                placeholder="Cuenta de Instagram"
                type="text"
            />
            <input
                v-model="linktik"
                class="border border-black rounded-md py-0.5 px-1 w-60 text-sm ml-2"
                placeholder="Cuenta de Tiktok"
                type="text"
            />

            <div class="w-full flex justify-center items-center flex-col md:flex-row">
                <button
                    class="bg-blue-500 w-1/2 border-blue-500 hover:text-blue-500 p-2 flex items-center justify-center text-white font-esteban text-sm hover:bg-white border duration-300"
                >
                    Editar
                </button>
                <ButtonComponent
                    name="profile"
                    class="bg-gray-400 border-gray-400 hover:text-gray-400"
                    text="Cancelar"
                />
            </div>
        </form>
    </section>
</template>
<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

export default {
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    components: {
        NavComponent,
        ButtonComponent
    },
    data() {
        return {
            username: '',
            age: 0,
            nationality: '',
            description: '',
            education: '',
            speciality: '',
            linkface: '',
            linkinsta: '',
            linktik: ''
        }
    },
    methods: {
        async submitForm() {
            let formdata = new FormData()
            formdata.append('username', this.username)
            formdata.append('age', this.age)
            formdata.append('nationality', this.nationality)
            formdata.append('description', this.description)
            formdata.append('education', this.education)
            formdata.append('linkface', this.linkface)
            formdata.append('linkinsta', this.linkinsta)
            formdata.append('linktik', this.linktik)
            formdata.append('image', this.$refs.file.files[0])
            await axios
                .put(`api/user/edit/${this.userStore.user.id}/`, formdata, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response.data)
                    this.$router.push({ name: 'profile' })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>
