<template>
    <TresCanvas render-mode="on-demand" shadows alpha class="h-[500px] glb">
        <TresPerspectiveCamera :position="[100, -100, -100]" />
        <OrbitControls />
        <Suspense>
            <GLTFModel :path="`${config.app.baseURL}${model}`" />
        </Suspense>
        <TresAmbientLight :position="[0, 0, 0]" :intensity="1.0" />
        <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" />
        <TresDirectionalLight :position="[4, -8, -4]" :intensity="1.0" />
    </TresCanvas>
</template>

<style lang="scss" scoped>
.glb {
    border: 2px solid #fff;
    margin-top: 2rem;
}
</style>

<script setup>
defineProps({
    model: {
        type: String,
        default: 'models/m125.glb'
    }
})

import { TresCanvas } from '@tresjs/core'
import { OrbitControls, GLTFModel } from '@tresjs/cientos'

const config = useRuntimeConfig()
console.log(config.app.baseURL)
</script>