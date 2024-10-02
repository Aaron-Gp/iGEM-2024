<template>
    <div class="member-container">
        <div class="flex flex-wrap justify-center lg:flex-nowrap">
            <NuxtImg provider="iGEM" src="/imgs/banner-member.svg" quality="100" width="300" placeholder loading="lazy"
                class="mx-8 w-50 lg:w-80 xl:w-[30rem]" />

            <!-- pi -->
            <div class="grid grid-cols-2 gap-10 md:gap-20 md:grid-cols-3 justify-items-center align-top">
                <PhotoCard v-for="item in PIs" :name="item.name" :pos="item.pos" :src="item.src" :offset="item.offset" :degree="item.degree" :major="item.major" :content="item.content"
                    class="m-2" />
            </div>
        </div>

        <!-- advisor -->
        <div class="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 justify-items-center mx-[2vw]">
            <PhotoCard v-for="item in ADVs" :name="item.name" :pos="item.pos" :src="item.src" :offset="item.offset" :degree="item.degree" :major="item.major" :content="item.content"
                class="m-2" />
        </div>

        <!-- family photo -->
        <div class="m-4 sm:m-16 rounded-xl shadow-lg">
            <NuxtImg provider="iGEM" src="/team1/group.jpg" fit="fill" quality="100" loading="lazy"
                class="rounded-xl" />
        </div>

        <!-- students -->
        <div class="grid grid-cols-2 gap-10 md:grid-cols-3  justify-items-center mx-[2vw]">
            <PhotoCard v-for="item in STUs" :name="item.name" :pos="item.pos" :src="item.src" :offset="item.offset" :degree="item.degree" :major="item.major" :content="item.content"
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
        major: 'Doctoral Supervisor',
        content: 'The research field belongs to biomedical testing.',
    },
    {
        name: 'Deng Yulin',
        pos: 'Secondary PI',
        src: '/team1/pi-dengyulin.jpg',
        degree: 'Professor',
        major: 'Doctoral Supervisor',
        content: 'The research field belongs to the cross field of neurobiology, space biology and biological analysis technology.',
        offset: [-5, -3],
    },
    {
        name: 'Li Xiaoqiong',
        pos: 'Secondary PI',
        src: '/team1/pi-lixiaoqiong.jpg',
        degree: 'Professor',
        major: 'Doctoral Supervisor',
        content: 'The research field belongs to space life science payloads, in vitro diagnostic technology and equipment for clinical medicine',
        offset: [-10, -3],
    },
]

const ADVs = [
    {
        name: 'Jiang Hao',
        pos: 'Advisor',
        src: '/team1/advisor-jianghao.jpg',
        degree: 'Advisor',
        major: 'Postgraduate',
        content: 'Participated in iGEM for five years, who is our team’s eldest brother -- brightest lighthouse on our voyage in 2024.',
    },
    {
        name: 'Li Anyi',
        pos: 'Advisor',
        src: '/team1/advisor-lianyi.jpg',
        degree: 'Advisor',
        major: 'Postgraduate',
        content: '2017 Captain of BIT majoring in biomedical engineering, who is our guardian angel on our expedition to synthetic biology.',
        offset: [20, 0],
    },
    {
        name: 'Qian Cheng',
        pos: 'Advisor',
        src: '/team1/advisor-qiancheng.jpg',
        degree: 'Advisor',
        major: 'Postgraduate',
        content: 'A girl who is passionate about synthetic biology.',
        offset: [-5, 0],
    },
    {
        name: 'Wang Kun',
        pos: 'Advisor',
        src: '/team1/advisor-wangkun.png',
        degree: 'Advisor',
        major: 'Postgraduate',
        content: '(Natural Language Processing, Medical Image Processing, Microfluidic Chip)：hope you will turn what you learn into your own skill.',
    },
    {
        name: 'Yan Zihan',
        pos: 'Advisor',
        src: '/team1/advisor-yanzihan.jpg',
        degree: 'Advisor',
        major: 'Postgraduate',
        content: 'Captain of 2023 BIT, believe fortune favors the bold!',
    },
]

const STUs = [
    {
        name: 'Fang Baoqi',
        pos: 'Leader',
        src: '/team1/leader-fangbaoqi.jpg',
        degree: 'Senior',
        major: 'Biomedical Engineering',
        content: 'Eat better, live better.',
    },
    {
        name: 'Fan Shuai',
        pos: 'Leader',
        src: '/team1/leader-fanshuai.jpg',
        degree: 'Junior',
        major: 'Biotechnology - Biological Sciences',
        content: 'This year, I led the strain construction, verification, and characterization of biological circuits in wet lab experiments. Our project aims to advance biotoxicology detection methods.',
        offset: [10, -3],
    },
    {
        name: 'Li Guanlong',
        pos: 'Leader',
        src: '/team1/leader-liguanlong.jpg',
        degree: 'Senior',
        major: 'Biomedical Engineering',
        content: 'A doer with full of enthusiasm. A dreamer with full of passion.',
        offset: [-5, -3],
    },
    {
        name: 'Wang Jianing',
        pos: 'Leader',
        src: '/team1/leader-wangjianing.jpg',
        degree: 'Senior',
        major: 'Biomedical Engineering',
        content: 'Always appreciate the past, cherish the present and be enthusiastic to the future.',
        offset: [-10, 0],
    },
    {
        name: 'Cai Tong',
        pos: 'Student',
        src: '/team1/students-caitong.jpg',
        degree: 'Junior',
        major: 'Biotechnology - AI',
        content: 'A spirited young girl, driven by perfection, infuses everyday life with idealism, turning reality’s challenges into a realm of possibilities. Her pursuit of purpose is a continuous journey of discovery.',
        offset: [10, -2],
    },
    {
        name: 'Cui Yuan',
        pos: 'Student',
        src: '/team1/students-cuiyuan.jpg',
        degree: 'Junior',
        major: 'Biomedical Engineering',
        content: 'As a member of the biology group, I have learned a lot of skills and further explored the field of synthetic biology that I am very interested in. I hope we can have a good result.',
    },
    {
        name: 'Gao Peng',
        pos: 'Student',
        src: '/team1/students-gaopeng.jpg',
        degree: 'Senior',
        major: 'Software Engineering',
        content: 'Dive deep into the neuroscience and healthcare. TECH FOR GOOD!',
    },
    {
        name: 'Huo Yongyu',
        pos: 'Student',
        src: '/team1/students-huoyongyu.jpg',
        degree: 'Senior',
        major: 'Software Engineering',
        content: 'A student who likes code, likes to explore and likes the unknown world.',
        offset: [-10, 0],
    },
    {
        name: 'Jin Chuan',
        pos: 'Student',
        src: '/team1/students-jinchuan.jpg',
        degree: 'Sophomore',
        major: 'Optoelectronic Information and Intelligent Sensing',
        content: 'An idealistic girl who wants to become a promoter of the intersection of medicine and engineering.',
    },
    {
        name: 'Li Sixuan',
        pos: 'Student',
        src: '/team1/students-lisixuan.jpg',
        degree: 'Sophomore',
        major: 'Product Design',
        content: 'A life enthusiast, a sports aficionado, and a visionary who seeks to elevate the world through the transformative power of art and design.',
    },
    {
        name: 'Li Tian',
        pos: 'Student',
        src: '/team1/students-litian.jpg',
        degree: 'Junior',
        major: 'Biomedical Engineering',
        content: 'Hello everyone, my name is Li Tian. Nice to meet you.',
        offset: [20, -3],
    },
    {
        name: 'Li Xichang',
        pos: 'Student',
        src: '/team1/students-lixichang.jpg',
        degree: 'Junior',
        major: 'Biology',
        content: 'He’s driven to use advanced life science tech for global benefits, believing it can solve key issues like disease and environmental damage, creating a healthier, sustainable world.',
    },
    {
        name: 'Li Zhuohan',
        pos: 'Student',
        src: '/team1/students-leezhuohai.jpg',
        degree: 'Twelfth Grade',
        major: 'Beijing 101 High School',
        content: 'Biology is one of the few subjects I am passionate about and willing to devote into a great deal of thought and time.  I chose to participate as team member to deepen my understanding of biology.',
    },
    {
        name: 'Peng Xingyu',
        pos: 'Student',
        src: '/team1/students-pengxingyu.jpg',
        degree: 'Junior',
        major: 'Biomedical Engineering',
        content: 'A junior undergraduate student who loves biology and computers.',
        offset: [-10, 0],
    },
    {
        name: 'Sun Jingbang',
        pos: 'Student',
        src: '/team1/students-sunjingbang.jpg',
        degree: 'Junior',
        major: 'Biomedical Engineering',
        content: 'A boy with an enthusiasm for life, wanna play a role in improving public health.',
        offset: [-10, 0],
    },
    {
        name: 'Wang Qiheng',
        pos: 'Student',
        src: '/team1/students-wangqiheng.jpg',
        degree: 'Junior',
        major: 'Automation',
        content: 'I am a very enthusiastic online person who is relatively distant offline. If you want to know me, please don\'t give up because of offline indifference',
        offset: [-10, 0],
    },
    {
        name: 'Wen Junjie',
        pos: 'Student',
        src: '/team1/students-wenjunjie.jpg',
        degree: 'Junior',
        major: 'Biomedical Engineering',
        content: 'Gains Dont Stop!',
    },
    {
        name: 'Yao Yixuan',
        pos: 'Student',
        src: '/team1/students-yaoyixuan.jpg',
        degree: 'Twelfth Grade',
        major: 'Affiliated High School of Renmin University',
        content: 'I have an upbeat personality with a love for literature, music, and sports. In my free time, I compose music and excel in various ball games. Robotics, however, is my true passion, and I’ve won awards in several competitions.',
    },
    {
        name: 'Zhang Lingyue',
        pos: 'Student',
        src: '/team1/students-zhanglingyue.jpg',
        degree: 'Junior',
        major: 'Mechanical Engineering',
        content: 'As a creative hardware designer, I aim to bring our innovative biological ideas to life through practical hardware solutions. I’m thrilled to work with my team to turn our visions into reality.',
        offset: [-10, 0],
    },
    {
        name: 'Zhou Xinbo',
        pos: 'Student',
        src: '/team1/students-zhouxinbo.jpg',
        degree: 'Sophomore',
        major: 'Biotechnology - Biological Sciences',
        content: 'A striver and lover of beautiful things and the future, hoping to create their own value!',
        offset: [-10, 0],
    },
    {
        name: 'Zhu Xiaohang',
        pos: 'Student',
        src: '/team1/students-zhuxiaohang.jpg',
        degree: 'Junior',
        major: 'Biomedical Engineering',
        content: 'A sunny and cheerful boy, adept at discovering new ideas and bringing them to life, believes that learning never ends, and looks forward to progressing together with everyone.',
        offset: [-10, 0],
    },
    {
        name: 'Zulpkar Wupur',
        pos: 'Student',
        src: '/team1/students-zulpikarwupur.jpg',
        degree: 'Junior',
        major: 'Statistics',
        content: 'A boy with a passionate for creativity, relishing in-depth exploration and innovative insights. My academic journey has honed my critical thinking and problem-solving skills, readying me for real-world challenges.',
        offset: [-10, 0],
    },
]


</script>