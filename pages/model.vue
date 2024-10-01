<template>
    <NuxtImg provider="iGEM" src="/banner/drylab.webp" class="inline-block w-full mt-[-1rem]" alt="cover"/>
    <div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg">Model</div>
    <TresCanvas render-mode="on-demand" shadows alpha class="h-[500px]">
        <TresPerspectiveCamera :position="[110, 110, 110]" />
        <OrbitControls />
        <Suspense>
            <GLTFModel :path="`${config.app.baseURL}models/m10.1.glb`" />
        </Suspense>
        <TresAmbientLight :position="[0, 0, 0]" :intensity="1.0" />
        <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" />
        <TresDirectionalLight :position="[4, -8, -4]" :intensity="1.0" />
    </TresCanvas>
</template>

<style lang="scss" scoped>
.page-title {
    background: linear-gradient(90deg, rgba(181, 194, 190, 0.8) 0%, rgba(181, 194, 190, 0) 100%);
}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Model',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})

import { TresCanvas } from '@tresjs/core'
import { OrbitControls, GLTFModel } from '@tresjs/cientos'

const config = useRuntimeConfig()
console.log(config.app.baseURL)

</script>