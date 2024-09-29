<template>
    <div class="member-container">
        <div class="flex flex-wrap justify-center lg:flex-nowrap">
            <NuxtImg provider="iGEM" src="/imgs/banner-member.svg" quality="100" width="300" placeholder loading="lazy"
                class="mx-8 w-50 lg:w-80 xl:w-[30rem]" />

            <!-- pi -->
            <div class="grid grid-cols-2 gap-2 md:grid-cols-3 justify-items-center align-top">
                <PhotoCard v-for="item in PIs" :name="item.name" :pos="item.pos" :src="item.src" :offset="item.offset" :degree="item.degree" :major="item.major" :content="item.content"
                    class="m-2" />
            </div>
        </div>

        <!-- advisor -->
        <div class="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 justify-items-center">
            <PhotoCard v-for="item in ADVs" :name="item.name" :pos="item.pos" :src="item.src" :offset="item.offset"
                class="m-2" />
        </div>

        <!-- family photo -->
        <div class="m-4 sm:m-16 rounded-xl shadow-lg">
            <NuxtImg provider="iGEM" src="/team1/group.jpg" fit="fill" quality="100" loading="lazy"
                class="rounded-xl" />
        </div>

        <!-- students -->
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3  justify-items-center">
            <PhotoCard v-for="item in STUs" :name="item.name" :pos="item.pos" :src="item.src" :offset="item.offset"
                class="m-2" />
        </div>
    </div>
</template>

<style lang="scss">
.member-container .shadow-lg {
    --tw-shadow: 0px 0px 12px 1px rgba(255, 255, 255, 1) !important;
}
</style>

<script setup>
useHead({
    title: 'BIT iGEM 2024 - Team Member',
    meta: [
        { name: 'description', content: 'Welcome to the BIT Wiki' },
    ],
})

const PIs = [
    {
        name: 'Lv Xuefei',
        pos: 'Primary PI',
        src: '/team1/pi-lvxuefei.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Deng Yulin',
        pos: 'Secondary PI',
        src: '/team1/pi-dengyulin.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Li Xiaoqiong',
        pos: 'Secondary PI',
        src: '/team1/pi-lixiaoqiong.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
        offset: [-2, -3],
    },
]

const ADVs = [
    {
        name: 'Jiang Hao',
        pos: 'Advisor',
        src: '/team1/advisor-jianghao.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Lian Yi',
        pos: 'Advisor',
        src: '/team1/advisor-lianyi.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
        offset: [20, -5],
    },
    {
        name: 'Qian Cheng',
        pos: 'Advisor',
        src: '/team1/advisor-qiancheng.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Wang Kun',
        pos: 'Advisor',
        src: '/team1/advisor-wangkun.png',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Yan Zihan',
        pos: 'Advisor',
        src: '/team1/advisor-yanzihan.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
]

const STUs = [
    {
        name: 'Fang Baoqi',
        pos: 'Leader',
        src: '/team1/leader-fangbaoqi.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Fan Shuai',
        pos: 'Leader',
        src: '/team1/leader-fanshuai.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
        offset: [20, -5],
    },
    {
        name: 'Li Guanlong',
        pos: 'Leader',
        src: '/team1/leader-liguanlong.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Wang Jianing',
        pos: 'Leader',
        src: '/team1/leader-wangjianing.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Cai Tong',
        pos: 'Student',
        src: '/team1/students-caitong.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Cui Yuan',
        pos: 'Student',
        src: '/team1/students-cuiyuan.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Gao Peng',
        pos: 'Student',
        src: '/team1/students-gaopeng.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Huo Yongyu',
        pos: 'Student',
        src: '/team1/students-huoyongyu.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Jin Chuan',
        pos: 'Student',
        src: '/team1/students-jinchuan.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Li Sixuan',
        pos: 'Student',
        src: '/team1/students-lisixuan.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Li Tian',
        pos: 'Student',
        src: '/team1/students-litian.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Li Xichang',
        pos: 'Student',
        src: '/team1/students-lixichang.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Peng Xingyu',
        pos: 'Student',
        src: '/team1/students-pengxingyu.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Sun Jingbang',
        pos: 'Student',
        src: '/team1/students-sunjingbang.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Wang Qiheng',
        pos: 'Student',
        src: '/team1/students-wangqiheng.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Wen Junjie',
        pos: 'Student',
        src: '/team1/students-wenjunjie.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Zhang Lingyue',
        pos: 'Student',
        src: '/team1/students-zhanglingyue.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Zhou Xinbo',
        pos: 'Student',
        src: '/team1/students-zhouxinbo.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Zhu Xiaohang',
        pos: 'Student',
        src: '/team1/students-zhuxiaohang.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
    {
        name: 'Zulpkar Wupur',
        pos: 'Student',
        src: '/team1/students-zulpikarwupur.jpg',
        degree: 'Professor',
        major: 'Biological Engineering',
        content: 'doctoral supervisor',
    },
]


</script>