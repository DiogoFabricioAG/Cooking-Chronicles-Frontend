<template>
    <NavComponen />
    <section class="mt-2">
        <div class="text-center">
            <h1 class="text-5xl font-merriweather opacity-80 font-bold">Nuestras recetas</h1>
            <p class="text-gray-400 font-esteban">Con todo el cariño de nuestros usuarios</p>
        </div>

        <div class="flex flex-col md:flex-row flex-wrap space-y-2 m-2 justify-between p-2">
            <RecipeComponent title="Estofado de Pollo" />
            <RecipeComponent title="Guiso de Pollo" />
            <RecipeComponent title="Saltado de Gallina" />
            <RecipeComponent title="Pescado Marinaro" />
            <RecipeComponent title="Pizza Mozzarella" />
            <RecipeComponent title="Salchipapa de Chorizo" />
        </div>
    </section>
</template>
<script>
import NavComponen from '@/components/NavComponent.vue'
import RecipeComponent from '@/components/RecipeComponent.vue'
export default {
    name: 'recipes',
    components: {
        NavComponen,
        RecipeComponent
    }
}
</script>
