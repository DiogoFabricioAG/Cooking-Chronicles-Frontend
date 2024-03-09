<template>
    <router-link
        :to="{ name: name }"
        class="w-2/4 p-2 flex items-center justify-center text-white font-esteban text-sm hover:bg-white border duration-300"
    >
        {{ text }}
    </router-link>
</template>
<script>
export default {
    props: ['name', 'text']
}
</script>
