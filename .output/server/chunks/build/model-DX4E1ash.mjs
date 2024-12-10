import { _ as _sfc_main$1 } from './NuxtImg-BACfLaxG.mjs';
import _sfc_main$2 from './ContentDoc-Shjs9vyD.mjs';
import _sfc_main$3 from './ContentRenderer-DzIPVf2e.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import { u as useAnchorScroll } from './anchorscroll-B9ToQXdr.mjs';
import { ref, watch, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
import './ContentQuery-At-t4Cuj.mjs';
import './query-h8iuD9O3.mjs';
import './preview-DrOl4KFC.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vue/shared';
import './ContentRendererMarkdown-BlvIKjHZ.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';

const _sfc_main = {
  __name: "model",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "BIT iGEM 2024 - Model",
      meta: [
        { name: "description", content: "Welcome to the BIT Wiki" }
      ]
    });
    const { scrollToAnchor, scrollToTop } = useAnchorScroll({
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
    function loadScroll() {
      var h2 = (void 0).querySelectorAll(".content h2");
      for (var i = h2.length - 1; i >= 0; i--) {
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
      const _component_NuxtImg = _sfc_main$1;
      const _component_ContentDoc = _sfc_main$2;
      const _component_ContentRenderer = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        provider: "iGEM",
        src: "/banner/drylab.webp",
        class: "inline-block w-full mt-[-1rem]",
        alt: "cover"
      }, null, _parent));
      _push(`<div class="page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg" data-v-1df43853>Model</div><div class="flex flex-row flex-wrap md:flex-nowrap justify-center mx-10" data-v-1df43853>`);
      _push(ssrRenderComponent(_component_ContentDoc, { path: "/drylab-model" }, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<aside class="md:sticky md:top-[120px] md:w-[200px] md:h-[500px] md:mr-10" data-v-1df43853${_scopeId}><h1 class="mt-0" data-v-1df43853${_scopeId}>TOC</h1><ul data-v-1df43853${_scopeId}><!--[-->`);
            ssrRenderList(doc.body.toc.links, (link) => {
              _push2(`<li class="${ssrRenderClass([{ "text-[#C0F748] font-bold": unref(activateIndex) == link.id }, "my-4"])}" data-v-1df43853${_scopeId}><a class="cursor-pointer" data-v-1df43853${_scopeId}>${ssrInterpolate(link.text)}</a></li>`);
            });
            _push2(`<!--]--></ul></aside>`);
            _push2(ssrRenderComponent(_component_ContentRenderer, {
              value: doc,
              class: "content"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("aside", { class: "md:sticky md:top-[120px] md:w-[200px] md:h-[500px] md:mr-10" }, [
                createVNode("h1", { class: "mt-0" }, "TOC"),
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(doc.body.toc.links, (link) => {
                    return openBlock(), createBlock("li", {
                      key: link.id,
                      class: ["my-4", { "text-[#C0F748] font-bold": unref(activateIndex) == link.id }]
                    }, [
                      createVNode("a", {
                        onClick: ($event) => unref(scrollToAnchor)(link.id),
                        class: "cursor-pointer"
                      }, toDisplayString(link.text), 9, ["onClick"])
                    ], 2);
                  }), 128))
                ])
              ]),
              createVNode(_component_ContentRenderer, {
                value: doc,
                class: "content"
              }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const model = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1df43853"]]);

export { model as default };
//# sourceMappingURL=model-DX4E1ash.mjs.map
