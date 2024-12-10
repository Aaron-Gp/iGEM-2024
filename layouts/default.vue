<template>
    <div class="mx-10">
        <Header class="fixed w-full" />
        <div class="pt-[8rem]">
            <slot />
            <div class="fixed right-[-8vw] top-[35vh] opacity-20 z-[-1]">
                <NuxtImg
                    provider="iGEM"
                    src="/icons/logo.png"
                    class="w-[30vw]"
                />
            </div>
        </div>
        <Footer />
    </div>
</template>

<style>
body {
    background-image: url('https://static.igem.wiki/teams/5358/banner/bg.webp');
    background-repeat: repeat-y;
    background-size: cover;
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
</style>
