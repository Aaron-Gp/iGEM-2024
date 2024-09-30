<template>
    <div class="mx-10">
        <Header class="fixed w-full" />
        <div class="pt-[8rem]">
            <slot />
            <div class="fixed right-[-8vw] top-[35vh] opacity-20 z-[-1]">
                <NuxtImg provider="iGEM" src="/icons/logo.png" class="w-[30vw]" />
            </div>
            <div class="fixed bg-circle-1"></div>
            <div class="fixed bg-circle-2"></div>
        </div>
        <Footer />
    </div>
</template>

<style>
body {
    background: rgba(8, 0, 28, 1);
    color: white;
    overflow-x: hidden;
    max-width: 1920px;
    margin: 0 auto;
}

header {
    max-width: 1920px;
    z-index: 10;

    @media (min-width: 1920px) {
        justify-self: center;
        left: 0;
        right: 0;
    }

    @media (max-width: 1920px) {
        left: 0;
    }
}

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

</style>