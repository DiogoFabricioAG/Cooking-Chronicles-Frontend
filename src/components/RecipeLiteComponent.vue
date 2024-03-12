<template>
    <div class="border m-3 border-black rounded-lg flex flex-col lg:flex-row shadow-lg">
        <div class="p-2 flex-col flex justify-between text-center">
            <h2 class="font-bold font-esteban text-3xl">{{ title }}</h2>
            <img :src="image" alt="Dish" class="" />
            <div class="flex justify-between items-center mt-2">
                <div class="flex space-x-2 mb-2">
                    <IngredientsTags class="bg-pink-200" tag="Carne" />
                    <IngredientsTags class="bg-blue-200" tag="Occidental" />
                </div>
                <div>
                    <router-link
                        :to="{name:'recipe'}"
                        class="p-1 flex items-center space-x-1 text-sm font-esteban bg-green-300 text-white duration-150 hover:scale-105"
                    >
                        <span>Detalles</span>
                        <IconArrow />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconArrow from '@/components/icons/IconArrow.vue'
import IngredientsTags from '@/components/IngredientsTags.vue'
export default {
    props: ['title',"image"],
    components: {
        IconArrow,
        IngredientsTags
    },
    
}
</script>
