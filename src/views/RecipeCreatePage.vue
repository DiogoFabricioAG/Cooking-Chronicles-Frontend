<template>
    <NavComponent/>
    <div class="flex flex-col md:flex-row">
        <div class="md:w-2/3 flex flex-col items-center p-5 justify-center">
            <h2 class="font-merriweather text-3xl">{{ name }}</h2>
            <img v-if="imagePreview" :src="imagePreview" alt="Recipe" class="w-1/2 m-4">
                
        </div>
        <div class="md:w-1/3">
            <form action="." enctype="multipart/form-data" @submit.prevent="submitForm" method="post" class="p-2">
                <label for="name" class="block text-sm font-esteban text-gray-500">Nombre</label>
                <input type="text" v-model="name" id="name" class="w-full px-4 py-1 rounded-xl border border-black">
                <label for="name" class="block text-sm font-esteban text-gray-500">Imagen de la Receta</label>
                <input class="border border-black p-1 rounded-md" ref="file" @change="previewImage" type="file">
                <label for="descr" class="block text-sm font-esteban text-gray-500">Descripcion General</label>
                <textarea name="descr" v-model="description" class="w-full px-2 py-1 rounded-xl resize-none border border-black" id="descr" cols="30" rows="6"></textarea>
                <label for="selfopi" class="block text-sm font-esteban text-gray-500">Opinion Propia</label>
                <textarea name="selfopi" v-model="user_impressions" class="w-full px-2 py-1 rounded-xl resize-none border border-black" id="selfopi" cols="30" rows="6"></textarea>
                <button class="block bg-blue-500 hover:bg-white hover:text-blue-500 border border-blue-500 duration-150 text-white rounded-xl p-2 mt-2">Crear</button>
            </form>
        </div>
    </div>        
    
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import { useUserStore } from '@/stores/user'
import axios from "axios"

export default {
    components: {
        NavComponent
    },
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    data() {
        return {
            name:"",
            imagePreview:null,
            description:"",
            user_impressions:"",
        }
    },
    methods: {
        async submitForm(){
            const formData = new FormData()
            formData.append("name",this.name)
            formData.append("description",this.description)
            formData.append("user_impressions",this.user_impressions)
            formData.append("image",this.$refs.file.files[0])
            formData.append("id_user",this.userStore.user.id)
            await axios.post("api/recipes/create/",formData,{
                headers: {
                    "Content-Type":"multipart/form-data",
                }
            })
            .then(response => {
                console.log(response.data)
                this.$router.push({name:"profile"})
            })
            .catch(error => {
                console.log(this.userStore.user.id);
                console.log(error);
            })
        },
        previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.imagePreview = reader.result;
                };
                reader.readAsDataURL(file);
            }
        },
    },
}
</script>