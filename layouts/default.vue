<template>
    <div class="mx-10">
        <Header class="fixed w-full left-0" />
        <div class="pt-40">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style>
body {
    background: rgba(8, 0, 28, 1);
    color: white;
    overflow-x: hidden;
}
</style>