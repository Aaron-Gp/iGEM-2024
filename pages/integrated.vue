<template>
    <div class="flex flex-row flex-wrap md:flex-nowrap justify-center mx-10">
        <ContentDoc path="/ihp" v-slot="{ doc }">
            <!-- TOC -->
            <aside class="md:sticky md:top-[18vh] md:w-[200px] md:h-[300px] md:mr-10 ">
                <h1 class="">TOC</h1>
                <ul>
                    <li v-for="link in doc.body.toc.links" :key="link.id" class="my-5" :class="{ 'text-[#C0F748] font-bold': activateIndex == link.id }">
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
.content {
    max-width: 60vw;

    h2 {
        @apply my-5 font-bold text-center text-2xl;

        position: relative; /* 相对定位 */
        width: 100%;
        height: 2em;
        padding-top: 0.5em;
        padding-bottom: 1em;
        opacity: 1;
        border-radius: 0.5em;
        background: linear-gradient(90deg, rgba(192, 247, 72, 0.8) 0%, rgba(192, 247, 72, 0) 100%);
    }

}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Human Practices',
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

const scroll = ref('');
const activateIndex = ref('');

function loadScroll() {
    var h2 = document.querySelectorAll(".content h2");
    for (var i = h2.length - 1; i >= 0; i--) {
        if(scroll.value >= h2[i].offsetTop - 120) {
            // console.log(h2[i].id);
            activateIndex.value = h2[i].id;
            break;
        }
    }
}

function dataScroll() {
    scroll.value = document.documentElement.scrollTop || document.body.scrollTop;
}

onMounted(
    () => {
        window.addEventListener('scroll', dataScroll);
    }
)

watch(
    scroll,
    () => loadScroll()
)

</script>