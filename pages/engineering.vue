<template>
    <NuxtImg
        provider="iGEM"
        src="/banner/project.webp"
        class="inline-block w-full mt-[-1rem]"
        alt="cover"
    />
    <div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg">
        Engineering
    </div>
    <div class="flex flex-row flex-wrap md:flex-nowrap justify-center mx-10">
        <ContentDoc path="/project-engineering" v-slot="{ doc }">
            <!-- TOC -->
            <aside
                class="md:sticky md:top-[120px] md:w-[200px] md:h-[200px] md:mr-10"
            >
                <h1 class="mt-0">TOC</h1>
                <!-- h2 目录 -->
                <ul>
                    <li
                        v-for="link in doc.body.toc.links"
                        :key="link.id"
                        class="my-5"
                        :class="{
                            'text-[#C0F748] font-bold':
                                activateIndex == link.id,
                        }"
                    >
                        <a
                            @click="scrollToAnchor(link.id)"
                            class="cursor-pointer"
                            >{{ link.text }}</a
                        >
                        <!-- h3 目录 -->
                        <ul
                            :class="{ hidden: activateIndex != link.id }"
                            class="pl-5 pt-2"
                        >
                            <template
                                v-for="sublink in link.children"
                                :key="sublink.id"
                            >
                                <li
                                    v-if="sublink.depth == 3"
                                    :class="{
                                        'text-[#fff] font-normal':
                                            activateSubIndex != sublink.id,
                                    }"
                                    class="mb-2"
                                >
                                    <a
                                        @click="scrollToAnchor(sublink.id)"
                                        class="cursor-pointer"
                                        >{{ sublink.text }}</a
                                    >
                                </li>
                            </template>
                        </ul>
                    </li>
                </ul>
            </aside>

            <!-- Main Content -->
            <ContentRenderer :value="doc" class="content" />
        </ContentDoc>
    </div>
</template>

<style lang="scss">
.page-title {
    background: linear-gradient(
        90deg,
        rgba(186, 182, 173, 0.8) 0%,
        rgba(186, 182, 173, 0) 100%
    );
}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Engineering',
    meta: [{ name: 'description', content: 'Welcome to the BIT Wiki' }],
})

const { scrollToAnchor } = useAnchorScroll({
    toTop: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: 0,
        },
    },
    toAnchor: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: -120,
        },
    },
})

const scroll = ref('')
const activateIndex = ref('')
const activateSubIndex = ref('')

function loadScroll() {
    var h2 = document.querySelectorAll('.content h2')
    for (let i = h2.length - 1; i >= 0; i--) {
        if (scroll.value >= h2[i].offsetTop - 130) {
            console.log(h2[i].id)
            activateIndex.value = h2[i].id
            break
        }
    }

    var h3 = document.querySelectorAll('.content h3')
    for (let i = h3.length - 1; i >= 0; i--) {
        if (scroll.value >= h3[i].offsetTop - 130) {
            console.log(h3[i].id)
            activateSubIndex.value = h3[i].id
            break
        }
    }
}

function dataScroll() {
    scroll.value = document.documentElement.scrollTop || document.body.scrollTop
}

onMounted(() => {
    window.addEventListener('scroll', dataScroll)
})

watch(scroll, () => loadScroll())
</script>
