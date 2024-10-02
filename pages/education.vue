<template>
  <NuxtImg provider="iGEM" src="/banner/hp.webp" class="inline-block w-full mt-[-1rem]" alt="cover" />
  <div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg">Education - More accessible knowledge
  </div>
  <div class="flex flex-row flex-wrap md:flex-nowrap justify-center mx-10">
    <aside class="md:sticky md:top-[18vh] md:w-[200px] md:h-[500px] md:mr-10">
      <h1>TOC</h1>
      <ul>
        <li v-for="link in tocLinks" :key="link.id" class="my-5"
          :class="{ 'text-[#C0F748] font-bold': activateIndex == link.id }">
          <a @click="scrollToAnchor(link.id)" class="cursor-pointer">{{ link.text }}</a>
        </li>
      </ul>
    </aside>

    <div class="content">
      <div class="markdown-content">
        <p>
          The core of education is to flexibly adjust the form and content of spreading knowledge for different groups
          of people,
          making the core of iGEM and synthetic biology accessible to different audiences. After clarifying the
          practical significance
          of the project, we hope to spread the necessity and effect of our project to audiences with different
          knowledge levels,
          so that more people can feel the charm of synthetic biology, and provide feedback from multiple angles and
          aspects.
          We conducted a series of face-to-face propaganda activities, and adjusted the publicity methods to achieve the
          best
          publicity effect in four different groups: students in poor areas, middle school students in urban areas,
          college students
          and social groups.
        </p>

        <h2 id="poor-area">Students in poor area - Textbook guided, easily acquired</h2>
        <p>
          In Fangshan County, Shanxi Province, which is the counterpart of BIT, students can only acquire biological
          knowledge through
          textbooks. Starting from textbook knowledge such as genetic central dogma and genetic engineering, we connect
          synthetic biology
          with high school textbook knowledge to help students grasp the basic content and connotation of synthetic
          biology more easily.
        </p>

        <!-- Image Carousel -->
        <div v-if="groupedImages[0]?.length" class="mb-10">
          <swiper :slides-per-view="1"  :autoplay="{ delay: 2000, disableOnInteraction: false }"
            loop class="my-swiper">
            <swiper-slide v-for="(image, idx) in groupedImages[0]" :key="idx">
              <img :src="`${baseURL}/education/${image}`" alt="Image" class="carousel-image" />
            </swiper-slide>
          </swiper>
          <div class="global-caption">
            slide the picture
        </div>
        </div>

        <h2 id="urban-students">Urban students - From appearance to essence</h2>
        <p>
          Many middle schools in Beijing have a deep understanding of synthetic biology, and many schools have formed
          iGEM teams.
          We go to the High School Attached to Renmin University of China, Beijing No.5 High School and other schools to
          introduce
          relevant knowledge and show our projects to students who are passionate about synthetic biology, hoping to
          stimulate
          their enthusiasm and inspire them to apply synthetic biology principles to solve real-world problems.
        </p>

        <div v-if="groupedImages[1]?.length" class="mb-10">
          <swiper :slides-per-view="1"  autoplay :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }" class="my-swiper">
            <swiper-slide v-for="(image, idx) in groupedImages[1]" :key="idx">
              <img :src="`${baseURL}/education/${image}`" alt="Image" class="carousel-image" />
            </swiper-slide>
          </swiper>
          <div class="global-caption">
            slide the picture
        </div>
        </div>
        <p>
          At the same time, we also communicated with many iGEM teams in high schools to discuss how to improve the 
          biosecurity of the line by means of cell suicide, how to optimize the questionnaire, and how to improve the
           efficiency and reliability of the investigation.Finally, we review this year's work, hoping to reach cooperation 
           in the future
        </P>
        <div v-if="groupedImages[2]?.length" class="mb-10">
          <swiper :slides-per-view="1" autoplay :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }" class="my-swiper">
            <swiper-slide v-for="(image, idx) in groupedImages[2]" :key="idx">
              <img :src="`${baseURL}/education/${image}`" alt="Image" class="carousel-image" />
            </swiper-slide>
          </swiper>
          <div class="global-caption">
            slide the picture
        </div>
      </div>

        <h2 id="college-students">College students - collision of ideas</h2>
        <p>
          Together with iGEM teams from Peking University, Shandong University and University of Electronic Science and
          Technology of China,
          we jointly launched the "University Linkage: Unlocking the Mysteries of Synthetic Biology" popular science
          Twitter campaign.
          At the same time, the offline sharing session discussed the feasibility, safety and ethics of synthetic
          biology in human health,
          environmental protection and sustainable development with students from different professional backgrounds,
          and got a lot of
          valuable and meaningful feedback. These processes inspired us to think about the value of iGEM and its future
          applications.
        </p>       
        <div v-if="groupedImages[3]?.length" class="mb-10">
          <swiper :slides-per-view="1"  autoplay :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }" class="my-swiper">
            <swiper-slide v-for="(image, idx) in groupedImages[3]" :key="idx">
              <img :src="`${baseURL}/education/${image}`" alt="Image" class="carousel-image" />
            </swiper-slide>
          </swiper>
          <div class="global-caption">
            slide the picture
        </div>
        </div>




        <h2 id="social-groups">Social groups - Design a board game, make language interesting</h2>
        <p>
          In order to make the charm of synthetic biology accessible to all social groups of different ages and
          cognitive levels,
          we collaborated with Beijing Dingshi Middle School to design a board game - POKEY-MON. In the game, players
          will win by
          collecting cards and in the process can boost themselves or interfere with others. During the design process,
          we repeatedly
          listened to the opinions of various parties, and once launched, it was widely praised.
        </p>

        <div v-if="groupedImages[4]?.length" class="mb-10">
          <swiper :slides-per-view="1"  autoplay :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }" class="my-swiper">
            <swiper-slide v-for="(image, idx) in groupedImages[4]" :key="idx">
              <img :src="`${baseURL}/education/${image}`" alt="Image" class="carousel-image" />
            </swiper-slide>
          </swiper>
          <div class="global-caption">
            slide the picture
        </div>
        </div>

          <!-- PDF viewer next to the carousel -->
          <div class="flex justify-center">
            <iframe src="https://static.igem.wiki/teams/5358/education/pokey.pdf" width="100%" height="300px"
              class="pdf-viewer" title="POKEY-MON Board Game PDF"></iframe>
          </div>

        <p>
          Together with iGEM teams from Lanzhou University, Jilin University, Nanjing University of Technology, Sichuan
          University,
          Hainan University, Zhejiang University of Technology and other well-known Chinese universities, we launched a
          sign language
          video to introduce our project in order to expand our audience. It is hoped that through this video, more
          groups,
          including the hearing impaired, can learn about synthetic biology and iGEM, and remove the barriers between
          them and knowledge.
        </p>

        <div v-if="groupedImages[5]?.length" class="mb-10">
          <swiper :slides-per-view="1" autoplay :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }" class="my-swiper">
            <swiper-slide v-for="(image, idx) in groupedImages[5]" :key="idx">
              <img :src="`${baseURL}/education/${image}`" alt="Image" class="carousel-image" />
            </swiper-slide>
          </swiper>

        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.page-title {
  background: linear-gradient(90deg, rgba(195, 129, 49, 0.8) 0%, rgba(195, 129, 49, 0) 100%);
}

.content {
  max-width: 60vw;

  .images-output {
    margin-top: 20px;

    h2 {
      @apply text-xl font-bold;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 5px 0;
      }
    }
  }
}
.global-caption{
  display: flex;
  /* Flexbox用于居中 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  color: #ebe2e2d8;
  font-size: 12px;
}

.my-swiper {
  height: 200px;
  /* 设置Swiper的高度 */
  display: flex;
  /* Flexbox用于居中 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.swiper-slide {
  display: flex;
  /* 使每个slide也是flex布局 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.carousel-image {
  margin-top: 40px;
  width: auto;
  /* 使图片宽度自适应 */
  height: 200px;
  /* 固定图片高度 */
  object-fit: contain;
  /* 让图片等比例缩放并保持完整 */
}

.swiper-button-next,
.swiper-button-prev {
  color: #ffffff;
  /* 修改箭头的颜色，确保它们可见 */
  z-index: 10;
  /* 提高z-index，避免被其他元素遮挡 */
}

.pdf-viewer {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;  /* 使其占满容器的宽度 */
}

</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const baseURL = "https://static.igem.wiki/teams/5358" // Base URL for image resources

useHead({
  title: 'BIT iGEM 2024 - Education',
  meta: [
    { name: 'description', content: 'Welcome to the BIT Wiki' },
  ],
})

// 用于存储分组的图片链接
const groupedImages = ref([])

// 提取图片链接并将它们分组
onMounted(() => {
  const imagePaths = [
    '1.jpg', '2.jpg', '3.jpg', // Group 1
    '4.jpg', '5.jpg', '6.jpg', '7.jpg', // Group 2
    '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.png', // Group 3
    '13.jpg', '14.jpg', // Group 4
    '15.jpg', '16.jpg', '17.jpg', '18.jpg', // Group 5
    '19.jpg' // Group 6
  ]

  // 将图片按段落分组
  groupedImages.value = [
    imagePaths.slice(0, 3), // Group 1
    imagePaths.slice(3, 7), // Group 2
    imagePaths.slice(7, 12), // Group 3
    imagePaths.slice(12, 14), // Group 4
    imagePaths.slice(14, 18), // Group 5
    imagePaths.slice(18, 19) // Group 6
  ]

  // 处理 TOC
  const headings = document.querySelectorAll('.markdown-content h2')
  tocLinks.value = Array.from(headings).map((heading, index) => ({
    id: heading.id || `heading-${index}`,
    text: heading.textContent
  }))
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

// 处理滚动
const scroll = ref('')
const activateIndex = ref('')
const tocLinks = ref([]) // 用于存储 TOC 链接

function loadScroll() {
  const h2 = document.querySelectorAll(".content h2")
  for (let i = h2.length - 1; i >= 0; i--) {
    if (scroll.value >= h2[i].offsetTop - 130) {
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