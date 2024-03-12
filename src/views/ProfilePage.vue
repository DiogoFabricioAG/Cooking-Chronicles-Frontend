<template>
    <NavComponent />
    <div class="p-3 w-full flex">
        <ProfileComponent :image="user.image" :username="user.username" :description="user.description" :tiktok="user.linktik" :insta="user.linkinsta" :face="user.linkface" :education="user.education" :speciality="user.speciality"/>
        <div class="flex w-2/3 flex-col">
            <div class="h-1/4 p-5">
                <section class="font-opensans text-center text-sm mt-3">
                    <p>Edad: {{user.age}}</p>
                    <p>Nacionalidad: {{user.nationality}}</p>
                    <p>Rango: {{user.rank}}</p>
                    <p>Recetas creadas: {{user.count_recipes}}</p>
                </section>
            </div>

            <div class="h-3/4 flex">
                <RecipeLiteComponent v-for="(recipe, index) in recipes" :key="index" :title="recipe.name" :image="recipe.image" />

            </div>
        </div>
    </div>
</template>
<script>
import ProfileComponent from '@/components/ProfileComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import IngredientsTags from '@/components/IngredientsTags.vue'
import RecipeLiteComponent from '@/components/RecipeLiteComponent.vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

export default {
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    components: {
        ProfileComponent,
        NavComponent,
        IngredientsTags,
        RecipeLiteComponent
    },
    data() {
        return {
            user:{},
            recipes: [],
        }
    },
    mounted() {
        this.getUser()
        this.mybestrecipes()
    },
    methods: {
        async getUser(){
           await axios.get(`api/user/${this.userStore.user.id}`) 
           .then(response => {
                this.user = response.data
                console.log(response.data);
           })
           .catch(error => {
            console.log(error);
           })
        },
        async mybestrecipes(){
            await axios.get(`api/recipes/best/${this.userStore.user.id}`)
            .then(response => {
                this.recipes = response.data
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })

        }
    },
}
</script>
