<template>
    
    <div class="m-3">
        <div class="flex items-center justify-between">
            <span class="flex space-x-2 items-center">
                <img src="../images/Chef.jpg" alt="" class="size-6 rounded-full">
                <h3 class="font">Cory Mailwait</h3>
            </span>
            <span class="flex space-x-1">
                <IconStar size="12"/>
                <IconStar size="12"/>
                <IconStar size="12"/>
                <IconStar size="12"/>
                <IconStar size="12"/>
            </span>
        </div>
        <p class="text-sm">Buena receta, pero tiene muy poco pescadoBuena receta, pero tiene muy poco pescadoBuena receta, pero tiene muy poco pescadoBuena receta, pero tiene muy poco pescadoBuena receta, pero tiene muy poco pescadoBuena receta, pero tiene muy poco pescadoBuena receta, pero tiene muy poco pescadoBuena receta, pero tiene muy poco pescado</p>
    </div>

</template>
<script>
import IconStar from '@/components/icons/IconStar.vue';

export default {
    components:{
        IconStar,
    }    
}
</script>