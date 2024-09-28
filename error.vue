<script setup lang="ts">
import type { NuxtError } from '#app'

const errorsMap: {
  [key: string]: string
} = {
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'Not Found',
}
const error = computed(() => {
  const code = NuxtError().statusCode
  return {
    code,
    message: errorsMap[code.toString()] || 'Unknown Error',
  }
})

useHead(() => ({
  title: error.code + '-' + error.message,
}))
</script>


<template>
  <div class="flex-1 relative py-8 flex flex-col items-center justify-center">
    <h1 class="text-center mb-6 leading-3">
      <span class="font-bold text-8xl block">{{ error.code }}</span>
      <span class="block italic">{{ error.message }}</span>
    </h1>
    <Button text="Home" to="/" size="sm" />
  </div>
</template>