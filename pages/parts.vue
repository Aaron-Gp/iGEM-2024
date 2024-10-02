<template>
    <NuxtImg provider="iGEM" src="/banner/wetlab.webp" class="inline-block w-full mt-[-1rem]" alt="cover"/>
    <div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg">Parts</div>
</template>

<style lang="scss" scoped>
.page-title {
    background: linear-gradient(90deg, rgba(81, 150, 156, 0.8) 0%, rgba(81, 150, 156, 0) 100%);
}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Parts',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})


const { scrollToAnchor, scrollToTop } = useAnchorScroll({
    toTop: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: 0,
        }
    },
    toAnchor: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: -120,
        }
    },
})

const scroll = ref('')
const activateIndex = ref('')

function loadScroll() {
    var h2 = document.querySelectorAll(".content h2")
    for (var i = h2.length - 1; i >= 0; i--) {
        if (scroll.value >= h2[i].offsetTop - 130) {
            // console.log(h2[i].id);
            activateIndex.value = h2[i].id
            break
        }
    }
}

function dataScroll() {
    scroll.value = document.documentElement.scrollTop || document.body.scrollTop
}

onMounted(
    () => {
        window.addEventListener('scroll', dataScroll)
    }
)

watch(
    scroll,
    () => loadScroll()
)
</script>