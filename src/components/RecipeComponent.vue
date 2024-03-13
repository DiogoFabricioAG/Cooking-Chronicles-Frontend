<template>
    <div class="border lg:w-[48%] border-black rounded-lg flex flex-col lg:flex-row shadow-lg">
        <div class="lg:w-1/2 flex items-center">
            <img :src="image" alt="Dish" class="object-cover rounded-lg" />
        </div>
        <div class="lg:w-1/2 p-2 flex-col flex justify-between">
            <div>
                <h2 class="font-bold font-esteban text-3xl">{{ title }}</h2>
                <div class="flex space-x-2 mb-2">
                    <IngredientsTags class="bg-pink-200" tag="Carne" />
                    <IngredientsTags class="bg-blue-200" tag="Occidental" />
                </div>
                <div class="text-xs space-y-1 font-opensans">
                    <h2 class="text-sm font-merriweather">General</h2>
                    <p>
                        {{ description }}
                    </p>
                    <h2 class="text-sm font-merriweather">Apreciacion del Usuario</h2>
                    <p class="text-gray-500">
                        {{ user_impressions }}
                    </p>
                </div>
            </div>

            <div class="flex justify-between items-center mt-2">
                <div class="flex space-x-2 items-center">
                    <img src="../images/Chef.jpg" alt="chef" class="size-12 rounded-full" />
                    <span class="text-left">
                        <h3 class="font-esteban">Cory Mailwait</h3>
                        <p class="text-gray-400 text-sm font-esteban">Principiante</p>
                    </span>
                </div>
                <div>
                    <router-link
                        :to="{ name: 'recipe' , params:{id:idrecipe}}"
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
    props: ['title', 'image', 'description', 'user_impressions',"idrecipe"],
    components: {
        IconArrow,
        IngredientsTags
    }
}
</script>
