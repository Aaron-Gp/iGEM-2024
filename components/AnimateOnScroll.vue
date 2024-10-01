<template>
    <div class="scrolling-animation m-20">
        <h2 data-aos="fade-up" data-aos-duration="1000">
            <p>“这是一个没有声音的春天，人们困扰地谈论着鸟儿的消失，院子后面给鸟儿喂食的地方荒废了，偶尔见到几只鸟也是奄奄一息，它们剧烈的颤动着翅膀也不能飞了……”</p>
            <p class="text-right">——蕾切尔·卡逊著《寂静的春天》</p>
        </h2>

        <NuxtImg provider="iGEM" src="/home/p1-all.webp" class="block my-[20vh] px-10" data-aos="fade-up" data-aos-duration="1000" />

        <h2 data-aos="fade-up" data-aos-duration="1000">
            <p class="text-right">《寂静的春天》描写因过度使用化学药品和肥料而导致环境污染、生态破坏，最终给人类带来不堪重负的灾难。</p>
            <p class="text-right mt-10">你担忧书中的现象成为现实吗？</p>
        </h2>

        <h2 data-aos="fade-up" data-aos-duration="1000" class="my-20">
            <p class="text-left">
                《在本书发表后的时间里，人们惊奇地发现书中的文字正在向现实转变，一系列离奇古怪、令人费解的现象在世界各地开始出现。许多有关动物及人的报告令人忧心忡忡：行为异常、生殖能力下降、幼体死亡等。 </p>
        </h2>

        <h2 data-aos="fade-up" data-aos-duration="1000" class="my-20">
            <p class="text-left">一类危险的化学物质正在侵害着环境健康——环境内分泌干扰物：（是指由于人类的生产、生活而释放到环境中的，影响人体和动物体内正常激素水平的外源性化学物质。）</p>
        </h2>

        <h2 data-aos="fade-up" data-aos-duration="1000" class="my-20">
            <p class="text-left">许多我们熟知的农药、材料添加剂都属于环境内分泌干扰物，事实上还有更多的内分泌干扰物潜伏在我们周围...</p>
        </h2>

        <NuxtImg provider="iGEM" src="/home/p2-all.webp" class="block my-[20vh] px-10" data-aos="fade-up" data-aos-duration="1000" />


        <h2 data-aos="fade-up" data-aos-duration="1000" class="my-20">
            <p class="text-left">而我们就是要把这种物质找出来。</p>
        </h2>


        <h2 data-aos="fade-up" data-aos-duration="1000" class="my-20">
            <p class="text-left">环境内分泌干扰物的重要作用途径是与生物体内的激素受体结合，从而扰乱生物的激素调控。我们将从这种结合效应着手，寻找内分泌干扰效应的检测方式。</p>
        </h2>


        <h2 data-aos="fade-up" data-aos-duration="1000" class="my-20">
            <p class="text-left">但仅仅这样是不够的，</p>
        </h2>

        <h2 data-aos="fade-up" data-aos-duration="1000" class="my-20">
            <p class="text-left">
                环境内分泌干扰物在生物体内的作用是复杂，且涉及到多种效应。因此，我们将利用HRP与luxR/I系统构建与门检测线路，联合其他毒性效应，以完成对环境内分泌物更加全面细致的检测与评估。</p>
        </h2>

        <div class="text-center">
            <NuxtImg provider="iGEM" src="/home/p3-all.webp" class="inline-block my-[10vh] w-[60vw]" data-aos="fade-up"
                data-aos-duration="1000" />
        </div>

        <div class="text-right">
            <div class="mt-20 text-right font-bold text-2xl hover:border-emerald-200 border-2 inline-block rounded-xl p-2 hover:text-emerald-300">
                <NuxtLink to="/description">
                    See more in Description...
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.scrolling-animation {
    p {
        @apply font-bold text-2xl;
    }
}
</style>