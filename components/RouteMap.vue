<template>
    <div v-for="route in routemap" class="mx-5 mb-10">
        <span class="font-bold text-lg">{{ route.title }}</span>
        <div class="flex flex-col flex-wrap mt-5">
            <NuxtLink v-for="sub in route.subs" class="mt-1 cursor-pointer hover:underline" :to="sub[1]">{{ sub[0] }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    routemap: {
        type: Object,
        required: true
    }
})
</script>