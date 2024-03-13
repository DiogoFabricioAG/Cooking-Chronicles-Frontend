<template>
    <NavComponen />
    <section class="mt-2">
        <div class="text-center">
            <h1 class="text-5xl font-merriweather opacity-80 font-bold">Nuestras recetas</h1>
            <p class="text-gray-400 font-esteban">Con todo el cariño de nuestros usuarios</p>
        </div>

        <div class="flex flex-col md:flex-row flex-wrap space-y-2 m-2 justify-between p-2">
            <RecipeComponent
                v-for="(recipe, index) in recipes"
                :key="index"
                :title="recipe.name"
                :image="recipe.image"
                :description="recipe.description"
                :user_impressions="recipe.user_impressions"
                :idrecipe="recipe.id"
            />
        </div>
    </section>
</template>
<script>
import NavComponen from '@/components/NavComponent.vue'
import RecipeComponent from '@/components/RecipeComponent.vue'
import axios from 'axios'
export default {
    name: 'recipes',
    components: {
        NavComponen,
        RecipeComponent
    },
    data() {
        return {
            recipes: []
        }
    },
    mounted() {
        this.getRecipes()
    },
    methods: {
        async getRecipes() {
            await axios
                .get('api/recipes')
                .then((response) => {
                    this.recipes = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>
