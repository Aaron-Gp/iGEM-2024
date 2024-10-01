<template>
    <NuxtImg provider="iGEM" src="/banner/wetlab.webp" class="inline-block w-full mt-[-1rem]" alt="cover"/>
    <div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg">Results</div>
</template>

<style lang="scss" scoped>
.page-title {
    background: linear-gradient(90deg, rgba(81, 150, 156, 0.8) 0%, rgba(81, 150, 156, 0) 100%);
}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Measurement',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})
</script>