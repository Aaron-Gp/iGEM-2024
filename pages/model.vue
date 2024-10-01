<template>
    <h1>11</h1>
    <TresCanvas render-mode="on-demand" shadows alpha class="h-[500px]">
        <TresPerspectiveCamera :position="[110, 110, 110]" />
        <OrbitControls />
        <Suspense>
            <GLTFModel path="/models/m10.1.glb" />
        </Suspense>
        <TresAmbientLight :position="[0, 0, 0]" :intensity="1.0" />
        <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" />
        <TresDirectionalLight :position="[4, -8, -4]" :intensity="1.0" />
    </TresCanvas>
</template>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Model',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})

import { TresCanvas } from '@tresjs/core'
import { OrbitControls, GLTFModel } from '@tresjs/cientos'

</script>