<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError,
})

const errorsMap: {
    [key: string]: string
} = {
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '403': 'Forbidden',
    '404': 'Not Found',
}

const err = computed(() => {
    const code = props.error?.statusCode || -1
    return {
        code,
        message: errorsMap[code.toString()] || 'Unknown Error',
    }
})

useHead(() => ({
    title: err.value.code + '-' + err.value.message,
}))
</script>

<template>
    <div class="flex-1 relative py-8 flex flex-col items-center justify-center">
        <h1 class="text-center mb-6 leading-3">
            <span class="font-bold text-8xl block">{{ err.code }}</span>
            <span class="block italic">{{ err.message }}</span>
        </h1>
        <Button text="Home" to="/" size="sm" />
    </div>
</template>
