<template>
    <span class="block rounded-2xl text-sm font-merriweather text-black bg-slate-300 px-2">
        <p>
            {{ tag }}
        </p>
    </span>
</template>
<script>
export default {
    props: ['tag']
}
</script>
