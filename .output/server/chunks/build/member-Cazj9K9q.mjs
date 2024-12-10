import { _ as _sfc_main$4 } from './NuxtImg-BACfLaxG.mjs';
import { b as buildProps, d as definePropType, a as addUnit, w as withInstall, _ as _export_sfc, E as ElPopover } from './index-CFvY9vBd.mjs';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeStyle, toDisplayString, vShow, createTextVNode, createCommentVNode, mergeProps, useSSRContext } from 'vue';
import { j as useNamespace, k as isNumber, u as useHead } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import 'lodash-unified';
import '@vue/shared';
import '@popperjs/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: true
  },
  color: String,
  badgeStyle: {
    type: definePropType([String, Object, Array])
  },
  offset: {
    type: definePropType(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
});
const __default__$1 = defineComponent({
  name: "ElBadge"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        if (props.max < props.value) {
          return `${props.max}+`;
        }
        return props.value === 0 && !props.showZero ? "" : `${props.value}`;
      }
      return `${props.value}`;
    });
    const style = computed(() => {
      var _a, _b, _c, _d, _e;
      return [
        {
          backgroundColor: props.color,
          marginRight: addUnit(-((_b = (_a = props.offset) == null ? void 0 : _a[0]) != null ? _b : 0)),
          marginTop: addUnit((_d = (_c = props.offset) == null ? void 0 : _c[1]) != null ? _d : 0)
        },
        (_e = props.badgeStyle) != null ? _e : {}
      ];
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`,
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot),
                _ctx.badgeClass
              ]),
              style: normalizeStyle(unref(style)),
              textContent: toDisplayString(unref(content))
            }, null, 14, ["textContent"]), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "badge.vue"]]);
const ElBadge = withInstall(Badge);
const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  footer: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  bodyClass: String,
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});
const __default__ = defineComponent({
  name: "ElCard"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: cardProps,
  setup(__props) {
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString(_ctx.footer), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "card.vue"]]);
const ElCard = withInstall(Card);
const _sfc_main$1 = {
  __name: "PhotoCard",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    pos: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    offset: {
      type: Array,
      default: [2, -3]
    },
    degree: {
      type: String,
      required: true
    },
    major: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_el_card = ElCard;
      const _component_el_badge = ElBadge;
      const _component_NuxtImg = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-2 inline-block" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_popover, {
        placement: "right-start",
        width: 200,
        effect: "dark",
        trigger: "hover"
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_card, {
              shadow: "hover",
              class: ""
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_badge, {
                    value: __props.pos,
                    class: "item",
                    offset: __props.offset
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_badge, {
                      value: __props.pos,
                      class: "item",
                      offset: __props.offset
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.name), 1)
                      ]),
                      _: 1
                    }, 8, ["value", "offset"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    provider: "iGEM",
                    src: __props.src,
                    fit: "fill",
                    placeholder: [50, 50],
                    loading: "lazy",
                    class: "aspect-[3/4] w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      provider: "iGEM",
                      src: __props.src,
                      fit: "fill",
                      placeholder: [50, 50],
                      loading: "lazy",
                      class: "aspect-[3/4] w-full"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_card, {
                shadow: "hover",
                class: ""
              }, {
                footer: withCtx(() => [
                  createVNode(_component_el_badge, {
                    value: __props.pos,
                    class: "item",
                    offset: __props.offset
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.name), 1)
                    ]),
                    _: 1
                  }, 8, ["value", "offset"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_NuxtImg, {
                    provider: "iGEM",
                    src: __props.src,
                    fit: "fill",
                    placeholder: [50, 50],
                    loading: "lazy",
                    class: "aspect-[3/4] w-full"
                  }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.degree)} <br${_scopeId}> ${ssrInterpolate(__props.major)}</div><div class="mt-2"${_scopeId}>${ssrInterpolate(__props.content)}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-lg font-bold" }, [
                createTextVNode(toDisplayString(__props.degree) + " ", 1),
                createVNode("br"),
                createTextVNode(" " + toDisplayString(__props.major), 1)
              ]),
              createVNode("div", { class: "mt-2" }, toDisplayString(__props.content), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhotoCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "member",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "BIT iGEM 2024 - Team Member",
      meta: [
        { name: "description", content: "Welcome to the BIT Wiki" }
      ]
    });
    const PIs = [
      {
        name: "Lv Xuefei",
        pos: "Primary PI",
        src: "/team1/pi-lvxuefei.jpg",
        degree: "Professor",
        major: "Doctoral Supervisor",
        content: "The research field belongs to biomedical testing."
      },
      {
        name: "Deng Yulin",
        pos: "Secondary PI",
        src: "/team1/pi-dengyulin.jpg",
        degree: "Professor",
        major: "Doctoral Supervisor",
        content: "The research field belongs to the cross field of neurobiology, space biology and biological analysis technology.",
        offset: [-5, -3]
      },
      {
        name: "Li Xiaoqiong",
        pos: "Secondary PI",
        src: "/team1/pi-lixiaoqiong.jpg",
        degree: "Professor",
        major: "Doctoral Supervisor",
        content: "The research field belongs to space life science payloads, in vitro diagnostic technology and equipment for clinical medicine",
        offset: [-10, -3]
      }
    ];
    const ADVs = [
      {
        name: "Jiang Hao",
        pos: "Advisor",
        src: "/team1/advisor-jianghao.jpg",
        degree: "Advisor",
        major: "Postgraduate",
        content: "Participated in iGEM for five years, who is our team\u2019s eldest brother -- brightest lighthouse on our voyage in 2024."
      },
      {
        name: "Li Anyi",
        pos: "Advisor",
        src: "/team1/advisor-lianyi.jpg",
        degree: "Advisor",
        major: "Postgraduate",
        content: "2017 Captain of BIT majoring in biomedical engineering, who is our guardian angel on our expedition to synthetic biology.",
        offset: [20, 0]
      },
      {
        name: "Qian Cheng",
        pos: "Advisor",
        src: "/team1/advisor-qiancheng.jpg",
        degree: "Advisor",
        major: "Postgraduate",
        content: "A girl who is passionate about synthetic biology.",
        offset: [-5, 0]
      },
      {
        name: "Wang Kun",
        pos: "Advisor",
        src: "/team1/advisor-wangkun.png",
        degree: "Advisor",
        major: "Postgraduate",
        content: "(Natural Language Processing, Medical Image Processing, Microfluidic Chip)\uFF1Ahope you will turn what you learn into your own skill."
      },
      {
        name: "Yan Zihan",
        pos: "Advisor",
        src: "/team1/advisor-yanzihan.jpg",
        degree: "Advisor",
        major: "Postgraduate",
        content: "Captain of 2023 BIT, believe fortune favors the bold!"
      }
    ];
    const STUs = [
      {
        name: "Fang Baoqi",
        pos: "Leader",
        src: "/team1/leader-fangbaoqi.jpg",
        degree: "Senior",
        major: "Biomedical Engineering",
        content: "Eat better, live better."
      },
      {
        name: "Fan Shuai",
        pos: "Leader",
        src: "/team1/leader-fanshuai.jpg",
        degree: "Junior",
        major: "Biotechnology - Biological Sciences",
        content: "This year, I led the strain construction, verification, and characterization of biological circuits in wet lab experiments. Our project aims to advance biotoxicology detection methods.",
        offset: [10, -3]
      },
      {
        name: "Li Guanlong",
        pos: "Leader",
        src: "/team1/leader-liguanlong.jpg",
        degree: "Senior",
        major: "Biomedical Engineering",
        content: "A doer with full of enthusiasm. A dreamer with full of passion.",
        offset: [-5, -3]
      },
      {
        name: "Wang Jianing",
        pos: "Leader",
        src: "/team1/leader-wangjianing.jpg",
        degree: "Senior",
        major: "Biomedical Engineering",
        content: "Always appreciate the past, cherish the present and be enthusiastic to the future.",
        offset: [-10, 0]
      },
      {
        name: "Cai Tong",
        pos: "Student",
        src: "/team1/students-caitong.jpg",
        degree: "Junior",
        major: "Biotechnology - AI",
        content: "A spirited young girl, driven by perfection, infuses everyday life with idealism, turning reality\u2019s challenges into a realm of possibilities. Her pursuit of purpose is a continuous journey of discovery.",
        offset: [10, -2]
      },
      {
        name: "Cui Yuan",
        pos: "Student",
        src: "/team1/students-cuiyuan.jpg",
        degree: "Junior",
        major: "Biomedical Engineering",
        content: "As a member of the biology group, I have learned a lot of skills and further explored the field of synthetic biology that I am very interested in. I hope we can have a good result."
      },
      {
        name: "Gao Peng",
        pos: "Student",
        src: "/team1/students-gaopeng.jpg",
        degree: "Senior",
        major: "Software Engineering",
        content: "Dive deep into the neuroscience and healthcare. TECH FOR GOOD!"
      },
      {
        name: "Huo Yongyu",
        pos: "Student",
        src: "/team1/students-huoyongyu.jpg",
        degree: "Senior",
        major: "Software Engineering",
        content: "A student who likes code, likes to explore and likes the unknown world.",
        offset: [-10, 0]
      },
      {
        name: "Jin Chuan",
        pos: "Student",
        src: "/team1/students-jinchuan.jpg",
        degree: "Sophomore",
        major: "Optoelectronic Information and Intelligent Sensing",
        content: "An idealistic girl who wants to become a promoter of the intersection of medicine and engineering."
      },
      {
        name: "Li Sixuan",
        pos: "Student",
        src: "/team1/students-lisixuan.jpg",
        degree: "Sophomore",
        major: "Product Design",
        content: "A life enthusiast, a sports aficionado, and a visionary who seeks to elevate the world through the transformative power of art and design."
      },
      {
        name: "Li Tian",
        pos: "Student",
        src: "/team1/students-litian.jpg",
        degree: "Junior",
        major: "Biomedical Engineering",
        content: "Hello everyone, my name is Li Tian. Nice to meet you.",
        offset: [20, -3]
      },
      {
        name: "Li Xichang",
        pos: "Student",
        src: "/team1/students-lixichang.jpg",
        degree: "Junior",
        major: "Biology",
        content: "He\u2019s driven to use advanced life science tech for global benefits, believing it can solve key issues like disease and environmental damage, creating a healthier, sustainable world."
      },
      {
        name: "Li Zhuohan",
        pos: "Student",
        src: "/team1/students-leezhuohai.jpg",
        degree: "Twelfth Grade",
        major: "Beijing 101 High School",
        content: "Biology is one of the few subjects I am passionate about and willing to devote into a great deal of thought and time.  I chose to participate as team member to deepen my understanding of biology."
      },
      {
        name: "Peng Xingyu",
        pos: "Student",
        src: "/team1/students-pengxingyu.jpg",
        degree: "Junior",
        major: "Biomedical Engineering",
        content: "A junior undergraduate student who loves biology and computers.",
        offset: [-10, 0]
      },
      {
        name: "Sun Jingbang",
        pos: "Student",
        src: "/team1/students-sunjingbang.jpg",
        degree: "Junior",
        major: "Biomedical Engineering",
        content: "A boy with an enthusiasm for life, wanna play a role in improving public health.",
        offset: [-10, 0]
      },
      {
        name: "Wang Qiheng",
        pos: "Student",
        src: "/team1/students-wangqiheng.jpg",
        degree: "Junior",
        major: "Automation",
        content: "I am a very enthusiastic online person who is relatively distant offline. If you want to know me, please don't give up because of offline indifference",
        offset: [-10, 0]
      },
      {
        name: "Wen Junjie",
        pos: "Student",
        src: "/team1/students-wenjunjie.jpg",
        degree: "Junior",
        major: "Biomedical Engineering",
        content: "Gains Dont Stop!"
      },
      {
        name: "Yao Yixuan",
        pos: "Student",
        src: "/team1/students-yaoyixuan.jpg",
        degree: "Twelfth Grade",
        major: "Affiliated High School of Renmin University",
        content: "I have an upbeat personality with a love for literature, music, and sports. In my free time, I compose music and excel in various ball games. Robotics, however, is my true passion, and I\u2019ve won awards in several competitions."
      },
      {
        name: "Zhang Lingyue",
        pos: "Student",
        src: "/team1/students-zhanglingyue.jpg",
        degree: "Junior",
        major: "Mechanical Engineering",
        content: "As a creative hardware designer, I aim to bring our innovative biological ideas to life through practical hardware solutions. I\u2019m thrilled to work with my team to turn our visions into reality.",
        offset: [-10, 0]
      },
      {
        name: "Zhou Xinbo",
        pos: "Student",
        src: "/team1/students-zhouxinbo.jpg",
        degree: "Sophomore",
        major: "Biotechnology - Biological Sciences",
        content: "A striver and lover of beautiful things and the future, hoping to create their own value!",
        offset: [-10, 0]
      },
      {
        name: "Zhu Xiaohang",
        pos: "Student",
        src: "/team1/students-zhuxiaohang.jpg",
        degree: "Junior",
        major: "Biomedical Engineering",
        content: "A sunny and cheerful boy, adept at discovering new ideas and bringing them to life, believes that learning never ends, and looks forward to progressing together with everyone.",
        offset: [-10, 0]
      },
      {
        name: "Zulpkar Wupur",
        pos: "Student",
        src: "/team1/students-zulpikarwupur.jpg",
        degree: "Junior",
        major: "Statistics",
        content: "A boy with a passionate for creativity, relishing in-depth exploration and innovative insights. My academic journey has honed my critical thinking and problem-solving skills, readying me for real-world challenges.",
        offset: [-10, 0]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      const _component_PhotoCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "member-container" }, _attrs))}><div class="flex flex-wrap justify-center lg:flex-nowrap">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        provider: "iGEM",
        src: "/imgs/banner-member.svg",
        quality: "100",
        width: "300",
        placeholder: "",
        loading: "lazy",
        class: "mx-8 w-50 lg:w-80 xl:w-[30rem]"
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-10 md:gap-20 md:grid-cols-3 justify-items-center align-top"><!--[-->`);
      ssrRenderList(PIs, (item) => {
        _push(ssrRenderComponent(_component_PhotoCard, {
          name: item.name,
          pos: item.pos,
          src: item.src,
          offset: item.offset,
          degree: item.degree,
          major: item.major,
          content: item.content,
          class: "m-2"
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 justify-items-center mx-[2vw]"><!--[-->`);
      ssrRenderList(ADVs, (item) => {
        _push(ssrRenderComponent(_component_PhotoCard, {
          name: item.name,
          pos: item.pos,
          src: item.src,
          offset: item.offset,
          degree: item.degree,
          major: item.major,
          content: item.content,
          class: "m-2"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="m-4 sm:m-16 rounded-xl shadow-lg">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        provider: "iGEM",
        src: "/team1/group.jpg",
        fit: "fill",
        quality: "100",
        loading: "lazy",
        class: "rounded-xl"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-2 gap-10 md:grid-cols-3 justify-items-center mx-[2vw]"><!--[-->`);
      ssrRenderList(STUs, (item) => {
        _push(ssrRenderComponent(_component_PhotoCard, {
          name: item.name,
          pos: item.pos,
          src: item.src,
          offset: item.offset,
          degree: item.degree,
          major: item.major,
          content: item.content,
          class: "m-2"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=member-Cazj9K9q.mjs.map
