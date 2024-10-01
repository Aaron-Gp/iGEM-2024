<template>
    <NuxtImg provider="iGEM" src="/banner/project.webp" class="inline-block w-full mt-[-1rem]" alt="cover"/>
    <div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg">Description</div>
</template>

<style lang="scss">
.page-title {
    background: linear-gradient(90deg, rgba(186, 182, 173, 0.8) 0%, rgba(186, 182, 173, 0) 100%);
}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Description',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})
</script>