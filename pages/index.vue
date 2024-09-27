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
        <div class="indicator-icon-1 mt-2"></div>
        <div class="indicator-icon-2 mt-[7px]"></div>
    </div>
    <div>
        <ContentDoc path="/description" />
    </div>

    <div class="fixed right-[-8vw] top-[35vh] opacity-20">
        <NuxtImg provider="iGEM" src="/icons/logo.png" class="w-[30vw]" />
    </div>
    <div class="fixed bg-circle-1"></div>
    <div class="fixed bg-circle-2"></div>
</template>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Home',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})
</script>

<style>
.bg-circle-1 {
    right: 29px;
    top: -474.06px;
    width: 788.66px;
    height: 1285.25px;
    opacity: 0.6;
    transform: rotate(38.39deg);
    background: radial-gradient(174.6% 46.76% at 49.95818122671177% 50.029158628736816%, rgba(62, 34, 242, 0.8) 0%, rgba(49, 19, 242, 0.01) 100%);
    filter: blur(200px);
    z-index: -1;
}

.bg-circle-2 {
    left: -118px;
    bottom: -126px;
    width: 842.33px;
    height: 467.79px;
    opacity: 0.9;
    transform: rotate(-7.21deg);
    background: radial-gradient(81.41% 46.79% at 49.985575316522294% 50.01216625873434%, rgba(207, 45, 201, 0.4) 0%, rgba(49, 19, 242, 0) 100%);
    filter: blur(150px);
    z-index: -1;
}

.indicator-icon-1 {
    width: 16.3px;
    height: 16.3px;
    opacity: 1;
    border-radius: 2px;
    transform: rotate(-45deg);
    background: linear-gradient(270deg, rgba(255, 242, 0, 1) 0%, rgba(192, 247, 72, 1) 100%);
}

.indicator-icon-2 {
    width: 25.8px;
    height: 25.8px;
    opacity: 1;
    border-radius: 2px;
    transform: rotate(-45deg);
    background: linear-gradient(270deg, rgba(255, 242, 0, 1) 0%, rgba(192, 247, 72, 1) 100%);
}
</style>