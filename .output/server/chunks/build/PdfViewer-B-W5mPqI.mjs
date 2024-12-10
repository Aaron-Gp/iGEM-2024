import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "PdfViewer",
  __ssrInlineRender: true,
  props: ["pdfUrl"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))} data-v-b4cca14a><iframe${ssrRenderAttr("src", __props.pdfUrl)} width="100%" class="pdf-viewer h-[50vh]" title="PDF" data-v-b4cca14a></iframe></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PdfViewer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PdfViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4cca14a"]]);

export { PdfViewer as default };
//# sourceMappingURL=PdfViewer-B-W5mPqI.mjs.map
