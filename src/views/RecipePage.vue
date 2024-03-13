<template>
    <NavComponent />
    <div class="flex flex-col md:flex-row">
        <div class="md:w-1/3 p-2 flex flex-col justify-between items-center">
            <img :src="recipe.image" alt="Recipe" class="size-[400px]" />
            <h1 class="text-3xl mt-2 font-opensans font-bold">{{ recipe.name }}</h1>
            <span class="flex space-x-4 mt-1">
                <IconStar size="24" />
                <IconStar size="24" />
                <IconStar size="24" />
                <IconStar size="24" />
            </span>
            <button
                @click="openModal"
                class="block bg-green-500 hover:bg-white hover:text-green-500 border border-green-500 duration-150 text-white rounded-xl p-2 mt-4"
            >
                Realizar un comentario
            </button>
            <button
                @click="share"
                class="block bg-blue-500 hover:bg-white hover:text-blue-500 border border-blue-500 duration-150 text-white rounded-xl p-2 mt-2"
            >
                Compartir
            </button>
        </div>
        <div class="md:w-2/3 p-2 flex flex-col">
            <section v-if="recipe.description">
                <h3 class="text-xl font-merriweather font-bold">Descripción General</h3>
                <p class="text-gray-500">
                    {{ recipe.description }}
                </p>
            </section>
            <section v-if="recipe.user_impressions">
                <h3 class="text-xl font-merriweather font-bold">Apreciacion del Usuario</h3>
                <p class="text-gray-500">
                    {{ recipe.user_impressions }}
                </p>
            </section>
            
            <h3 class="text-xl font-merriweather font-bold">Apreciacion de la Comunidad</h3>
            <section class="w-full overflow-y-scroll h-96">
                <CommentaryComponent v-for="(comment, index) in comments" :key="index" :comment="comment.comment" :rate="comment.rate"/>
            </section>
        </div>
    </div>

    <!-- Modal -->
    <div id="myModal" class="hidden fixed z-10 inset-0 overflow-y-auto">
        <div
            class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
                >&#8203;</span
            >
            
            <div
                class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="w-full">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                                Deja tu valoración y comentario
                            </h3>
                            <div class="mt-2">
                                <label for="rating" class="block text-sm font-medium text-gray-700"
                                    >Rating</label
                                >
                                <input
                                    v-model="rate"
                                    type="range"
                                    id="rating"
                                    name="rating"
                                    min="1"
                                    max="5"
                                    class="w-full"
                                />
                            </div>
                            <div class="mt-4">
                                <label for="comment" class="block text-sm font-medium text-gray-700"
                                    >Comentario</label
                                >
                                <textarea
                                    v-model="comment"
                                    id="comment"
                                    name="comment"
                                    rows="3"
                                    class="shadow-sm border border-black p-1 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm rounded-md"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        @click="closeModal"
                        class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Cerrar
                    </button>
                    <button
                        @click="submitform"
                        class="w-full bg-green-500 rounded-md shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-green-700 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CommentaryComponent from '@/components/CommentaryComponent.vue'
import IconStar from '@/components/icons/IconStar.vue'
import NavComponent from '@/components/NavComponent.vue'
import { useUserStore } from '@/stores/user'
import axios from "axios"

export default {
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    components: {
        NavComponent,
        IconStar,
        CommentaryComponent
    },
    data() {
        return {
            recipe:{},
            comment: "",
            rate:"3",
            comments:[]
        }
    },
    mounted() {
        this.getRecipe()
        this.getComments()
    },
    methods: {
        share() {
            navigator.clipboard.writeText(window.location.href).then(function () {
                alert('Enlace copiado correctamente')
            })
        },
        openModal() {
            const modal = document.getElementById('myModal')
            modal.classList.remove('hidden')
        },
        closeModal() {
            const modal = document.getElementById('myModal')
            modal.classList.add('hidden')
        },
        async getRecipe(){
            await axios.get(`api/recipes/${this.$route.params.id}`)
            .then(response => {
                this.recipe = response.data
            })
            .catch(error => {
                console.log(error);
            })
        },
        async submitform(){
            await axios.post(`api/comment/create/${this.$route.params.id}/`,{
                rate:this.rate,
                comment : this.comment,
                usermodel_id: this.userStore.user.id
            }).then(response => {
                console.log(response.data);
                this.comments.push(response.data)
            })
            .catch(error => {
                console.log(error);
            })
        },
        async getComments(){
            await axios.get(`api/comment/${this.$route.params.id}`)
            .then(response => {
                this.comments = response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
