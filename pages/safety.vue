<template>
    <div class="m-10 mb-16 font-extrabold text-8xl">Safety</div>
    <div class="flex flex-row flex-wrap md:flex-nowrap justify-center mx-10">
        <ContentDoc path="/safety" v-slot="{ doc }">
            <!-- TOC -->
            <aside class="md:sticky md:top-[18vh] md:w-[200px] md:h-[300px] md:mr-10 ">
                <h1 class="mt-0">TOC</h1>
                <ul>
                    <li v-for="link in doc.body.toc.links" :key="link.id" class="my-5"
                        :class="{ 'text-[#C0F748] font-bold': activateIndex == link.id }">
                        <a @click="scrollToAnchor(link.id)" class="cursor-pointer">{{ link.text }}</a>
                    </li>
                </ul>
            </aside>

            <!-- Main Content -->
            <ContentRenderer :value="doc" class="content" />
        </ContentDoc>
    </div>
</template>

<style lang="scss">

</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Safety',
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