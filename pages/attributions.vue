<template>
    <div class="m-5">
        <iframe style="width: 100%; height: 90vh;;" id="igem-attribution-form" src="https://attributions.igem.org?team=bit&year=2024">
        </iframe>
    </div>

</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const iframe = document.getElementById('igem-attribution-form')    
})
</script>