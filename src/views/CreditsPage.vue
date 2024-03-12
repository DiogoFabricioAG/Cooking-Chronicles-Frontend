<template>
    <NavComponent />
    <div class="h-[80vh] w-full flex flex-col justify-center items-center">
        <section class="text-center mt-3 ">
        <p class="font-opensans text-gray-500">Pagina creada por</p>
        <h2 class="text-5xl font-bold font-opensans opacity-85">Diogo <span class="text-yellow-300">Abregu Gonzales</span></h2>
    </section>
    <div class="flex justify-center mt-4">
        <a class="flex space-x-6">
            <IconGithub href="https://github.com/DiogoFabricioAG"/>
            <IconMail href="mailto:diogofabricio17@gmail.com" />
            <IconX href="https://twitter.com/home" />
        </a>
    </div>
    </div>
    
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconX from '@/components/icons/IconX.vue'


export default {
    components: {
        NavComponent,
        IconGithub,
        IconX,
        IconMail,
    }
}
</script>
