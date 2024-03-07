<template>
    <NavComponent/>
    <form method="post" @submit.prevent="console.log(`Creando Usuario`)" class="md:w-1/2 mt-8 p-2 space-y-4  mx-auto flex flex-col items-center">
        <img src="../images/ChefImage.png" class="md:size-1/4 size-1/2 mb-2" alt="logo">
        <label class="font-esteban text-xl " for="username">Nombre de Usuario</label>
        <input type="text" id="username" class="border-black shadow-md p-2 text-sm w-3/4 md:w-1/2 border-2" placeholder="Ingrese su nombre de Usuario">
        <label class="font-esteban text-xl " for="password">Contraseña</label>
        <input type="password" id="password" class="border-black shadow-md p-2 w-3/4 text-sm border-2 md:w-1/2"  placeholder="Ingrese su contraseña">
        <button class="bg-blue-400 p-2 rounded-lg hover:bg-gradient-to-r from-blue-300 to-blue-500 transition text-white font-opensans w-3/4 md:w-1/2">Iniciar Sesion</button>
    </form>
    
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
export default{
    name: 'Login',
    components:{
        NavComponent,
    }
}

</script>