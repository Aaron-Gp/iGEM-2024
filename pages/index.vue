<template>
    <div class="w-full flex flex-wrap flex-col items-end p-10">
        <NuxtImg provider="iGEM" src="/imgs/title.png" class="w-[40vw] block" />
        <div class="w-[25vw] flex mt-16 items-center font-semibold text-2xl">
            <span>BIT</span>
            <span class="grow bg-white h-[1px] mx-5"></span>
            <span>2024</span>
        </div>
    </div>
    <div class="indicator-icon-group flex flex-col items-center justify-center mt-12">
        <span class="text-[#AEDE44] font-bold text-lg">
            Scroll to Backgrounds
        </span>
        <NuxtImg provider="iGEM" src="/imgs/arrow-index.svg" width="25" class="mt-2" />
    </div>
    <div>
        <AnimateOnScroll />
    </div>
</template>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Home',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})
</script>
