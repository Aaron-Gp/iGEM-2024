import { _ as _sfc_main$1 } from './NuxtImg-BACfLaxG.mjs';
import { u as useAnchorScroll } from './anchorscroll-B9ToQXdr.mjs';
import { ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useHead } from '@vueuse/head';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vue/shared';

const baseURL = "https://static.igem.wiki/teams/5358";
const _sfc_main = {
  __name: "education",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "BIT iGEM 2024 - Education",
      meta: [
        { name: "description", content: "Welcome to the BIT Wiki" }
      ]
    });
    const groupedImages = ref([]);
    useAnchorScroll({
      toTop: {
        scrollOptions: {
          behavior: "smooth",
          offsetTop: 0
        }
      },
      toAnchor: {
        scrollOptions: {
          behavior: "smooth",
          offsetTop: -120
        }
      }
    });
    const scroll = ref("");
    const activateIndex = ref("");
    const tocLinks = ref([]);
    function loadScroll() {
      const h2 = (void 0).querySelectorAll(".content h2");
      for (let i = h2.length - 1; i >= 0; i--) {
        if (scroll.value >= h2[i].offsetTop - 130) {
          activateIndex.value = h2[i].id;
          break;
        }
      }
    }
    watch(
      scroll,
      () => loadScroll()
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        provider: "iGEM",
        src: "/banner/hp.webp",
        class: "inline-block w-full mt-[-1rem]",
        alt: "cover"
      }, null, _parent));
      _push(`<div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg" data-v-ea72ee37>Education - More accessible knowledge </div><div class="flex flex-row flex-wrap md:flex-nowrap justify-center mx-10" data-v-ea72ee37><aside class="md:sticky md:top-[120px] md:w-[200px] md:h-[500px] md:mr-10" data-v-ea72ee37><h1 data-v-ea72ee37>TOC</h1><ul data-v-ea72ee37><!--[-->`);
      ssrRenderList(tocLinks.value, (link) => {
        _push(`<li class="${ssrRenderClass([{ "text-[#C0F748] font-bold": activateIndex.value == link.id }, "my-5"])}" data-v-ea72ee37><a class="cursor-pointer" data-v-ea72ee37>${ssrInterpolate(link.text)}</a></li>`);
      });
      _push(`<!--]--></ul></aside><div class="content" data-v-ea72ee37><div class="markdown-content" data-v-ea72ee37><p data-v-ea72ee37> The core of education is to flexibly adjust the form and content of spreading knowledge for different groups of people, making the core of iGEM and synthetic biology accessible to different audiences. After clarifying the practical significance of the project, we hope to spread the necessity and effect of our project to audiences with different knowledge levels, so that more people can feel the charm of synthetic biology, and provide feedback from multiple angles and aspects. We conducted a series of face-to-face propaganda activities, and adjusted the publicity methods to achieve the best publicity effect in four different groups: students in rural areas, middle school students in urban areas, college students and social groups. </p><h2 id="rural-area" data-v-ea72ee37>Students in rural area - Textbook guided, easily acquired</h2><p data-v-ea72ee37> In Fangshan County, Shanxi Province, which is the counterpart of BIT, students can only acquire biological knowledge through textbooks. Starting from textbook knowledge such as genetic central dogma and genetic engineering, we connect synthetic biology with high school textbook knowledge to help students grasp the basic content and connotation of synthetic biology more easily. </p>`);
      if ((_a = groupedImages.value[0]) == null ? void 0 : _a.length) {
        _push(`<div class="mb-10" data-v-ea72ee37>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          autoplay: { delay: 2e3, disableOnInteraction: false },
          loop: "",
          class: "my-swiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(groupedImages.value[0], (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", `${baseURL}/education/${image}`)} alt="Image" class="carousel-image" data-v-ea72ee37${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: `${baseURL}/education/${image}`,
                          alt: "Image",
                          class: "carousel-image"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(groupedImages.value[0], (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `${baseURL}/education/${image}`,
                        alt: "Image",
                        class: "carousel-image"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="global-caption" data-v-ea72ee37> slide the picture </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 id="urban-students" data-v-ea72ee37>Urban students - From appearance to essence</h2><p data-v-ea72ee37> Many middle schools in Beijing have a deep understanding of synthetic biology, and many schools have formed iGEM teams. We go to the High School Attached to Renmin University of China, Beijing No.5 High School and other schools to introduce relevant knowledge and show our projects to students who are passionate about synthetic biology, hoping to stimulate their enthusiasm and inspire them to apply synthetic biology principles to solve real-world problems. </p>`);
      if ((_b = groupedImages.value[1]) == null ? void 0 : _b.length) {
        _push(`<div class="mb-10" data-v-ea72ee37>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          autoplay: "",
          loop: true,
          class: "my-swiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(groupedImages.value[1], (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", `${baseURL}/education/${image}`)} alt="Image" class="carousel-image" data-v-ea72ee37${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: `${baseURL}/education/${image}`,
                          alt: "Image",
                          class: "carousel-image"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(groupedImages.value[1], (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `${baseURL}/education/${image}`,
                        alt: "Image",
                        class: "carousel-image"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="global-caption" data-v-ea72ee37> slide the picture </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-ea72ee37> At the same time, we also communicated with many iGEM teams in high schools to discuss how to improve the biosecurity of the line by means of cell suicide, how to optimize the questionnaire, and how to improve the efficiency and reliability of the investigation.Finally, we review this year&#39;s work, hoping to reach cooperation in the future </p>`);
      if ((_c = groupedImages.value[2]) == null ? void 0 : _c.length) {
        _push(`<div class="mb-10" data-v-ea72ee37>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          autoplay: "",
          loop: true,
          class: "my-swiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(groupedImages.value[2], (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", `${baseURL}/education/${image}`)} alt="Image" class="carousel-image" data-v-ea72ee37${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: `${baseURL}/education/${image}`,
                          alt: "Image",
                          class: "carousel-image"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(groupedImages.value[2], (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `${baseURL}/education/${image}`,
                        alt: "Image",
                        class: "carousel-image"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="global-caption" data-v-ea72ee37> slide the picture </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 id="college-students" data-v-ea72ee37>College students - collision of ideas</h2><p data-v-ea72ee37> Together with iGEM teams from Peking University, Shandong University and University of Electronic Science and Technology of China, we jointly launched the &quot;University Linkage: Unlocking the Mysteries of Synthetic Biology&quot; popular science Twitter campaign. At the same time, the offline sharing session discussed the feasibility, safety and ethics of synthetic biology in human health, environmental protection and sustainable development with students from different professional backgrounds, and got a lot of valuable and meaningful feedback. These processes inspired us to think about the value of iGEM and its future applications. </p>`);
      if ((_d = groupedImages.value[3]) == null ? void 0 : _d.length) {
        _push(`<div class="mb-10" data-v-ea72ee37>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          autoplay: "",
          loop: true,
          class: "my-swiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(groupedImages.value[3], (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", `${baseURL}/education/${image}`)} alt="Image" class="carousel-image" data-v-ea72ee37${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: `${baseURL}/education/${image}`,
                          alt: "Image",
                          class: "carousel-image"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(groupedImages.value[3], (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `${baseURL}/education/${image}`,
                        alt: "Image",
                        class: "carousel-image"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="global-caption" data-v-ea72ee37> slide the picture </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 id="social-groups" data-v-ea72ee37>Social groups - Design a board game, make language interesting</h2><p data-v-ea72ee37> In order to make the charm of synthetic biology accessible to all social groups of different ages and cognitive levels, we collaborated with Beijing Dingshi Middle School to design a board game - POKEY-MON. In the game, players will win by collecting cards and in the process can boost themselves or interfere with others. During the design process, we repeatedly listened to the opinions of various parties, and once launched, it was widely praised. </p>`);
      if ((_e = groupedImages.value[4]) == null ? void 0 : _e.length) {
        _push(`<div class="mb-10" data-v-ea72ee37>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          autoplay: "",
          loop: true,
          class: "my-swiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(groupedImages.value[4], (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", `${baseURL}/education/${image}`)} alt="Image" class="carousel-image" data-v-ea72ee37${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: `${baseURL}/education/${image}`,
                          alt: "Image",
                          class: "carousel-image"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(groupedImages.value[4], (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `${baseURL}/education/${image}`,
                        alt: "Image",
                        class: "carousel-image"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="global-caption" data-v-ea72ee37> slide the picture </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-center" data-v-ea72ee37><iframe src="https://static.igem.wiki/teams/5358/education/pokey.pdf" width="100%" class="pdf-viewer h-[50vh]" title="POKEY-MON Board Game PDF" data-v-ea72ee37></iframe></div><p data-v-ea72ee37> Together with iGEM teams from Lanzhou University, Jilin University, Nanjing University of Technology, Sichuan University, Hainan University, Zhejiang University of Technology and other well-known Chinese universities, we launched a sign language video to introduce our project in order to expand our audience. It is hoped that through this video, more groups, including the hearing impaired, can learn about synthetic biology and iGEM, and remove the barriers between them and knowledge. </p>`);
      if ((_f = groupedImages.value[5]) == null ? void 0 : _f.length) {
        _push(`<div class="mb-10" data-v-ea72ee37>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          autoplay: "",
          loop: true,
          class: "my-swiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(groupedImages.value[5], (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", `${baseURL}/education/${image}`)} alt="Image" class="carousel-image" data-v-ea72ee37${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: `${baseURL}/education/${image}`,
                          alt: "Image",
                          class: "carousel-image"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(groupedImages.value[5], (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `${baseURL}/education/${image}`,
                        alt: "Image",
                        class: "carousel-image"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/education.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const education = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea72ee37"]]);

export { education as default };
//# sourceMappingURL=education-DA8zi1H6.mjs.map
