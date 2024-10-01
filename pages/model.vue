<template>
    <h1>11</h1>
    <TresCanvas render-mode="on-demand" shadows alpha class="h-[500px]">
        <TresPerspectiveCamera :position="[110, 110, 110]" />
        <OrbitControls />
        <Suspense>
            <primitive :object="scene" />
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

import { useLoader, TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module'

function setExtensions() {
    return (loader) => {
        loader.setMeshoptDecoder(MeshoptDecoder)
    }
}

const { scene } = await useLoader(GLTFLoader, '/models/m1cc0.1.glb', setExtensions())

</script>