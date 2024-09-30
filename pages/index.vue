<template>
    <div class="w-full flex flex-wrap flex-col items-end p-10">
        <NuxtImg provider="iGEM" src="/imgs/title.png" class="w-[40vw] block" />
        <div class="text-right mt-8">
            ddddndsf dndbsnbfn ndsj aksd hksdjfh ksjhf <br />
            sahf jshkf kasjdf lakjsdf aljk sjdh al skdjfhalksjdhf <br />
            klajsdhf kajs hflkahd afaklshjdfk askjdhfakjshdfkajs<br />
            ksjhdfk ajh kasjdhfa askdj skjdfal aksjdhfl<br />
            akjsdhf alksjdh akljsd
        </div>
        <div class="w-[20vw] flex mt-8 items-center">
            <span>BIT</span>
            <span class="grow bg-white h-[1px] mx-5"></span>
            <span>2024</span>
        </div>
    </div>
    <div class="indicator-icon-group flex flex-col items-center justify-center">
        <span class="text-[#AEDE44]">
            Scroll to Backgrounds
        </span>
        <NuxtImg provider="iGEM" src="/imgs/arrow-index.svg" width="25" class="mt-2" />
    </div>
    <div>
        <ContentDoc path="/description" />
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
