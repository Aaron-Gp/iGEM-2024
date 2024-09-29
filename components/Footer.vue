<template>
    <div class="text-center text-base mt-10 border-t-2 text-gray-300">
        <div class="flex flex-wrap justify-between mt-10 text-left mx-[1rem] lg:mx-[7.5rem]">
            <!-- 这里是网站地图 -->
            <RouteMap :routemap="map"/>
        </div>
        <div>
            <!-- 这里是赞助商图标 -->
        </div>
        <div class="mt-[20vh] hidden">
            <!-- 这里是联系方式 -->
            Contact Us: &nbsp; Instagram: igem_shanghaitech &nbsp; Facebook: iGEM-ShanghaiTech &nbsp; E-mail: igemshanghaitech@163.com <br />
            Bilibili: 上科大iGEM &nbsp; Weibo: iGEM_ShanghaiTech &nbsp; Xiaohongshu: iGEM_ShanghaiTech
        </div>
        <div class="my-[10vh] pb-[8vh]">
            <!-- 这里是权利说明 -->
            <div class="mb-1">
                © 2024 - Content on this site is licensed under a
                <NuxtLink to="https://creativecommons.org/licenses/by/4.0" rel="liscence"
                    class="font-bold hover:underline text-white">
                    Creative Commons Attribution 4.0 International license
                </NuxtLink>
                .
            </div>
            <div>
                The repository used to create this website is available at
                <NuxtLink to="https://gitlab.igem.org/2024/bit" class="font-bold hover:underline text-white">
                    gitlab.igem.org/2024/bit
                </NuxtLink>
                .
            </div>
        </div>
    </div>
</template>

<script setup>
const map = [
    {
        title: 'Project',
        subs: [
            ['Description', '/description'],
            ['Engineering', '/engineering'],
        ]
    },
    {
        title: 'Web Lab',
        subs: [
            ['Experiment', '/experiment'],
            ['Result', '/result'],
            ['Notebook Parts', '/parts'],
        ]
    },
    {
        title: 'Dry Lab',
        subs: [
            ['Hardware', '/hardware'],
            ['Model', '/model'],
        ]
    },
    {
        title: 'Team',
        subs: [
            ['Members', '/member'],
            ['Attributions', '/attributions'],
            ['Contribution', '/contribution'],
        ]
    },
    {
        title: 'Human Practice',
        subs: [
            ['Education', '/education'],
            ['Integrated HP', '/integrated'],
        ]
    }
]
</script>