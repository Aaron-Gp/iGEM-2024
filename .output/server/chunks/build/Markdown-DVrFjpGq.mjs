import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from 'vue';
import _sfc_main$1 from './ContentSlot-CGPfvWh2.mjs';
import './node-04k6j4dz.mjs';

const _sfc_main = defineComponent({
  name: "Markdown",
  extends: _sfc_main$1,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.9.3_@parcel+watcher@2.4.1_@types+nod_dgbnckru3qnf5safyge3rzsoji/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Markdown-DVrFjpGq.mjs.map
