import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot as ssrRenderSlot$1 } from 'vue/server-renderer';
import { f as flatUnwrap } from './node-04k6j4dz.mjs';
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

const ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
  if (slots[name]) {
    return ssrRenderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
  }
  return ssrRenderSlot$1(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/MdcWrap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MdcWrap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { MdcWrap as default };
//# sourceMappingURL=MdcWrap-C92iylZO.mjs.map
