<template>
    <NuxtImg provider="iGEM" src="/banner/hp.webp" class="inline-block w-full mt-[-1rem]" alt="cover"/>
    <div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg">Integrated HP</div>
    <div class="flex flex-row flex-wrap md:flex-nowrap justify-center mx-10">
        <ContentDoc path="/hp-ihp" v-slot="{ doc }">
            <!-- TOC -->
            <aside class="md:sticky md:top-[120px] md:w-[200px] md:h-[400px] md:mr-10 ">
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

<style lang="scss" scoped>
.page-title {
    background: linear-gradient(90deg, rgba(195, 129, 49, 0.8) 0%, rgba(195, 129, 49, 0) 100%);
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
        if(scroll.value >= h2[i].offsetTop - 130) {
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