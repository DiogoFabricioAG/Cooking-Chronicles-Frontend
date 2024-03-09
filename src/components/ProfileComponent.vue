<template>
    <div class="w-1/3 space-y-2">
        <img src="../images/Chef.jpg" alt="ProfileImage" class="rounded-full w-1/2 mx-auto" />
        <div class="flex justify-between w-full">
            <h2 class="text-center text-2xl font-merriweather font-bold">Cory Mailwait</h2>
            <span class="flex space-x-2">
                <ButtonComponent
                    class="bg-gray-500 w-auto border-gray-500 hover:text-gray-500"
                    text="Editar"
                    name="credits"
                />
                <button
                    @click="outsesion"
                    class="p-2 flex items-center justify-center text-white font-esteban text-sm bg-red-500 border-red-500 hover:text-red-500 hover:bg-white border duration-300"
                >
                    Cerrar Sesion
                </button>
            </span>
        </div>
        <div class="flex space-x-2 justify-center">
            <IconFacebook href="https://www.facebook.com" />
            <IconInstagram href="https://www.instagram.com" />
            <IconTiktok href="https://www.tiktok.com/es/" />
        </div>
        <section class="text-sm font-esteban space-y-1 text-center text-gray-500">
            <p>
                ¡Hola! Soy Santiago, el nuevo chef en la ciudad y estoy aquí para traer un sabor
                fresco a tu mesa. Mi cocina es una fusión de tradición y modernidad, donde cada
                ingrediente cuenta su propia historia.
            </p>
            <p>
                Me gradué recientemente de “La Mesa del Chef”, y aunque soy nuevo en la escena, mi
                pasión por la cocina me ha llevado a crear platos que hablan por sí mismos.
            </p>
            <p>Innovación: Creo que la cocina es un lienzo en blanco para la creatividad.</p>
            <p>
                Sabor: Busco la perfección en cada sabor, equilibrando lo clásico con lo inesperado.
            </p>
            <p>
                Aprendizaje: Cada día es una oportunidad para aprender algo nuevo y mejorar mis
                habilidades.
            </p>
            <p>
                Mi Especialidad: “Mar y Tierra Tropical”: Un plato que captura la esencia del océano
                y la riqueza de la tierra, con un toque tropical que te sorprenderá.
            </p>
        </section>
    </div>
</template>
<script>
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconTiktok from '@/components/icons/IconTiktok.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useUserStore } from '@/stores/user'

export default {
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
    },
    components: {
        IconFacebook,
        IconInstagram,
        IconTiktok,
        ButtonComponent
    },
    methods: {
        outsesion() {
            this.userStore.clearUserInfo()
            this.$router.push({ name: 'login' })
        }
    }
}
</script>
