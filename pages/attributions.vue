<template>
    <div class="attr m-5 p-8 rounded-lg">
        <iframe style="width: 100%; height: 90vh;" id="igem-attribution-form"
            src="https://attributions.igem.org?team=bit&year=2024" @load="iframeLoaded">
        </iframe>
    </div>

</template>

<style lang="scss">
.attr {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.3);
}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Attributions',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})

function iframeLoaded()  {
    console.log('iframe loaded')
}
</script>