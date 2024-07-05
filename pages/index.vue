<template>
    <div>
        <h1>Welcome to the homepage</h1>
    </div>
    <div>
        <ContentDoc path="/description" />
    </div>
</template>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Home',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})
</script>
