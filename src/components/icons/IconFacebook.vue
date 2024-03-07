<template>
    <a :href="href" target="_blank" class="group"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-facebook p-1 text-blue-500 group-hover:fill-white group-hover:bg-blue-500 rounded-full duration-300 size-8"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            /></svg
    ></a>
</template>

<script>
export default {
    props: ['href']
}
</script>
