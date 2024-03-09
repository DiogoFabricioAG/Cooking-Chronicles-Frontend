<template>
    <NavComponent />
    <div class="p-3 w-full flex">
        <ProfileComponent />
        <div class="flex w-2/3 flex-col">
            <div class="h-1/4 p-5">
                <div class="flex space-x-2 justify-center">
                    <IngredientsTags tag="Entusiasta" class="bg-red-200" />
                    <IngredientsTags tag="Marina" class="bg-blue-300" />
                    <IngredientsTags tag="Criollo" class="bg-yellow-600" />
                </div>
                <section class="font-opensans text-center text-sm mt-3">
                    <p>Edad: 28</p>
                    <p>Nacionalidad: Peruana</p>
                    <p>Rango: Principiante</p>
                    <p>Recetas creadas: 4</p>
                </section>
            </div>

            <div class="h-3/4 flex">
                <RecipeLiteComponent title="Mar y Tierra Tropical" />
                <RecipeLiteComponent title="Salmon a la leña" />
                <RecipeLiteComponent title="Kaiyupac" />
            </div>
        </div>
    </div>
</template>
<script>
import ProfileComponent from '@/components/ProfileComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import IngredientsTags from '@/components/IngredientsTags.vue'
import RecipeLiteComponent from '@/components/RecipeLiteComponent.vue'

export default {
    components: {
        ProfileComponent,
        NavComponent,
        IngredientsTags,
        RecipeLiteComponent
    }
}
</script>
