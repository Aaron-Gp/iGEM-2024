import { t as useRafFn, _ as _export_sfc, v as createEventHook, b as useRuntimeConfig, w as useFps, x as useMemory, y as toValue, z as unrefElement, A as useDevicePixelRatio, B as useWindowSize, C as useElementSize, D as refDebounced, E as usePointer, F as useElementBounding, G as tryOnScopeDispose } from './server.mjs';
import { ref, reactive, defineComponent, shallowRef, toRefs, watch, openBlock, createElementBlock, unref, renderSlot, onUnmounted, watchEffect, createBlock, createElementVNode, useSlots, useAttrs, computed, isRef, createVNode, render, createCommentVNode, inject, mergeProps, withCtx, Suspense, useSSRContext, getCurrentInstance, onMounted, normalizeClass, normalizeStyle, withAsyncContext, readonly, provide, createRenderer, h, getCurrentScope, onScopeDispose, Fragment } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSuspense } from 'vue/server-renderer';
import * as et from 'three';
import { Clock, REVISION, Color, Vector3, ShaderMaterial, UniformsUtils, BackSide, Triangle, Euler, Ray, Plane, AudioListener, Audio, AudioLoader, BufferGeometry, InterleavedBuffer, InterleavedBufferAttribute, MathUtils, Quaternion, Matrix4, Box3, UniformsLib, Vector2, ShaderLib, Vector4, Line3, Sphere, DoubleSide, PlaneGeometry, PropertyBinding, InterpolateLinear, Mesh, MeshBasicMaterial, FramebufferTexture, RawShaderMaterial, AdditiveBlending, Box2, UnsignedByteType, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderTarget, HalfFloatType, NoToneMapping, BoxGeometry, TOUCH, Raycaster, CompressedTexture, Texture, RGBAFormat, BufferAttribute, InterpolateDiscrete, EventDispatcher, MOUSE, Spherical, ShapePath, WebGLRenderer, ACESFilmicToneMapping, Uniform, NearestFilter, NearestMipmapNearestFilter, NearestMipmapLinearFilter, LinearFilter, LinearMipmapNearestFilter, LinearMipmapLinearFilter, ClampToEdgeWrapping, RepeatWrapping, MirroredRepeatWrapping, Camera, SRGBColorSpace, PCFSoftShadowMap, Object3D, Loader, LoaderUtils, FileLoader, LinearSRGBColorSpace, SpotLight, PointLight, DirectionalLight, MeshPhysicalMaterial, InstancedMesh, InstancedBufferAttribute, TextureLoader, ImageBitmapLoader, PointsMaterial, Material, LineBasicMaterial, MeshStandardMaterial, SkinnedMesh, LineSegments, Line, LineLoop, Points, Group, Skeleton, AnimationClip, Bone, ColorManagement, TrianglesDrawMode, TriangleFanDrawMode, TriangleStripDrawMode, FrontSide, VectorKeyframeTrack, NumberKeyframeTrack, QuaternionKeyframeTrack, Interpolant } from 'three';
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

const cn = "@tresjs/core", un = "module", fn$1 = "4.2.10", dn$1 = "pnpm@9.1.4", pn = "Declarative ThreeJS using Vue Components", mn = "Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)", hn = "MIT", gn = {
  type: "git",
  url: "git+https://github.com/Tresjs/tres.git"
}, vn = [
  "vue",
  "3d",
  "threejs",
  "three",
  "threejs-vue"
], yn = false, _n = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/tres.js",
    require: "./dist/tres.umd.cjs"
  },
  "./components": {
    types: "./dist/src/components/index.d.ts"
  },
  "./composables": {
    types: "./dist/src/composables/index.d.ts"
  },
  "./types": {
    types: "./dist/src/types/index.d.ts"
  },
  "./utils": {
    types: "./dist/src/utils/index.d.ts"
  },
  "./*": "./*"
}, wn = "./dist/tres.js", bn$1 = "./dist/tres.js", Cn = "./dist/index.d.ts", Mn$1 = [
  "*.d.ts",
  "dist"
], Pn = {
  access: "public"
}, En$1 = {
  dev: "cd playground/vue && npm run dev",
  "dev:nuxt": "cd playground/nuxt && npm run dev",
  build: "vite build",
  test: "vitest",
  "test:ci": "vitest run",
  "test:ui": "vitest --ui --coverage.enabled=true",
  release: "release-it",
  coverage: "vitest run --coverage",
  lint: "eslint .",
  "lint:fix": "eslint . --fix",
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:serve": "vitepress serve docs",
  "docs:preview": "vitepress preview docs",
  "docs:contributors": "esno scripts/update-contributors.ts",
  prepare: "node .husky/install.mjs"
}, Tn = {
  three: ">=0.133",
  vue: ">=3.4"
}, Sn = {
  "@alvarosabu/utils": "^3.2.0",
  "@vue/devtools-api": "^6.6.3",
  "@vueuse/core": "^10.11.0"
}, An$1 = {
  "@release-it/conventional-changelog": "^8.0.1",
  "@stackblitz/sdk": "^1.11.0",
  "@tresjs/cientos": "4.0.2",
  "@tresjs/eslint-config": "^1.1.0",
  "@types/three": "^0.168.0",
  "@typescript-eslint/eslint-plugin": "^8.4.0",
  "@typescript-eslint/parser": "^8.4.0",
  "@vitejs/plugin-vue": "^5.0.5",
  "@vitest/coverage-c8": "^0.33.0",
  "@vitest/coverage-v8": "^2.0.2",
  "@vitest/ui": "^2.0.2",
  "@vue/test-utils": "^2.4.6",
  eslint: "^9.6.0",
  "eslint-plugin-vue": "^9.28.0",
  esno: "^4.7.0",
  gsap: "^3.12.5",
  husky: "^9.0.11",
  jsdom: "^25.0.0",
  kolorist: "^1.8.0",
  ohmyfetch: "^0.4.21",
  pathe: "^1.1.2",
  "release-it": "^17.5.0",
  "rollup-plugin-analyzer": "^4.0.0",
  "rollup-plugin-copy": "^3.5.0",
  "rollup-plugin-visualizer": "^5.12.0",
  sponsorkit: "^0.15.4",
  three: "^0.168.0",
  unocss: "^0.62.3",
  unplugin: "^1.13.1",
  "unplugin-vue-components": "^0.27.2",
  vite: "^5.4.3",
  "vite-plugin-banner": "^0.8.0",
  "vite-plugin-dts": "4.1.0",
  "vite-plugin-inspect": "^0.8.4",
  "vite-plugin-require-transform": "^1.0.21",
  "vite-svg-loader": "^5.1.0",
  vitepress: "1.3.4",
  vitest: "^2.0.2",
  vue: "3.5.0",
  "vue-demi": "^0.14.8"
}, xn = {
  name: cn,
  type: un,
  version: fn$1,
  packageManager: dn$1,
  description: pn,
  author: mn,
  license: hn,
  repository: gn,
  keywords: vn,
  sideEffects: yn,
  exports: _n,
  main: wn,
  module: bn$1,
  types: Cn,
  files: Mn$1,
  publishConfig: Pn,
  scripts: En$1,
  peerDependencies: Tn,
  dependencies: Sn,
  devDependencies: An$1
};
function be(e) {
  return typeof e > "u";
}
function de(e) {
  return Array.isArray(e);
}
function kn(e) {
  return typeof e == "number";
}
function at(e) {
  return typeof e == "string";
}
function G(e) {
  return typeof e == "function";
}
function U(e) {
  return e === Object(e) && !de(e) && !G(e);
}
function N(e) {
  return U(e) && "isObject3D" in e && !!e.isObject3D;
}
function We(e) {
  return U(e) && "isCamera" in e && !!e.isCamera;
}
function Ln(e) {
  return U(e) && "isBufferGeometry" in e && !!e.isBufferGeometry;
}
function Rn(e) {
  return U(e) && "isMaterial" in e && !!e.isMaterial;
}
function Dn(e) {
  return U(e) && "isFog" in e && !!e.isFog;
}
function jn(e) {
  return U(e) && "isScene" in e && !!e.isScene;
}
function oe(e) {
  return N(e) || Ln(e) || Rn(e) || Dn(e);
}
function Bn(e) {
  return U(e) && !!e.isPrimitive;
}
const In$1 = ({ sizes: e }) => {
  const t = ref([]), n = computed(
    () => t.value[0]
  ), r = (i) => {
    const a = i instanceof Camera ? i : t.value.find((o) => o.uuid === i);
    if (!a)
      return;
    const c = t.value.filter(({ uuid: o }) => o !== a.uuid);
    t.value = [a, ...c];
  }, s = (i, a = false) => {
    if (We(i)) {
      const c = i;
      if (t.value.some(({ uuid: o }) => o === c.uuid))
        return;
      a ? r(c) : t.value.push(c);
    }
  }, l = (i) => {
    if (We(i)) {
      const a = i;
      t.value = t.value.filter(({ uuid: c }) => c !== a.uuid);
    }
  };
  return watchEffect(() => {
    e.aspectRatio.value && t.value.forEach((i) => {
      !i.manual && (i instanceof PerspectiveCamera || Hn(i)) && (i instanceof PerspectiveCamera ? i.aspect = e.aspectRatio.value : (i.left = e.width.value * -0.5, i.right = e.width.value * 0.5, i.top = e.height.value * 0.5, i.bottom = e.height.value * -0.5), i.updateProjectionMatrix());
    });
  }), onUnmounted(() => {
    t.value = [];
  }), {
    camera: n,
    cameras: t,
    registerCamera: s,
    deregisterCamera: l,
    setCameraActive: r
  };
};
function Hn(e) {
  return e.hasOwnProperty("isOrthographicCamera") && e.isOrthographicCamera;
}
const lt$1 = createEventHook(), ct = createEventHook(), Ae = createEventHook(), ee = new Clock();
let ue = 0, fe = 0;
useRafFn(
  () => {
    lt$1.trigger({ delta: ue, elapsed: fe, clock: ee }), ct.trigger({ delta: ue, elapsed: fe, clock: ee }), Ae.trigger({ delta: ue, elapsed: fe, clock: ee });
  },
  { immediate: false }
);
Ae.on(() => {
  ue = ee.getDelta(), fe = ee.getElapsedTime();
});
const se = "[TresJS \u25B2 \u25A0 \u25CF] ";
function Y() {
  function e(...r) {
    typeof r[0] == "string" ? r[0] = se + r[0] : r.unshift(se), console.error(...r);
  }
  function t(...r) {
    typeof r[0] == "string" ? r[0] = se + r[0] : r.unshift(se), console.warn(...r);
  }
  function n(r, s) {
  }
  return {
    logError: e,
    logWarning: t,
    logMessage: n
  };
}
function Fn(e) {
  return e instanceof Color ? e : Array.isArray(e) ? new Color(...e) : new Color(e);
}
const ut$1 = (e, t) => {
  for (const n of Object.keys(t))
    t[n] instanceof Object && Object.assign(t[n], ut$1(e[n], t[n]));
  return Object.assign(e || {}, t), e;
}, Nn = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", zn$1 = /* @__PURE__ */ Yn(Nn);
function Ge(e) {
  return e && e.nodeType === 1;
}
function ie(e) {
  return e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
const Gn = /\B([A-Z])/g;
function Vn(e) {
  return e.replace(Gn, "-$1").toLowerCase();
}
function Yn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = true;
  return (s) => !!n[s];
}
const Ve = (e, t) => {
  if (!t)
    return;
  const n = Array.isArray(t) ? t : t.match(/([^[.\]])+/g);
  return n == null ? void 0 : n.reduce((r, s) => r && r[s], e);
}, qn = (e, t, n) => {
  const r = Array.isArray(t) ? t : t.match(/([^[.\]])+/g);
  r && r.reduce((s, l, i) => (s[l] === void 0 && (s[l] = {}), i === r.length - 1 && (s[l] = n), s[l]), e);
};
function ft(e, t) {
  if (Ge(e) && Ge(t)) {
    const s = e.attributes, l = t.attributes;
    return s.length !== l.length ? false : Array.from(s).every(({ name: i, value: a }) => t.getAttribute(i) === a);
  }
  if (e === t)
    return true;
  if (e === null || typeof e != "object" || t === null || typeof t != "object")
    return false;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return false;
  for (const s of n)
    if (!r.includes(s) || !ft(e[s], t[s]))
      return false;
  return true;
}
function Jn$1(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)
    return false;
  for (let n = 0; n < e.length; n++)
    if (!ft(e[n], t[n]))
      return false;
  return true;
}
function er(e) {
  return "map" in e;
}
function Ye$1(e) {
  er(e) && e.map && e.map.dispose(), e.dispose();
}
function dt(e) {
  var n, r;
  if (e.parent && ((n = e.removeFromParent) == null || n.call(e)), delete e.__tres, [...e.children].forEach((s) => dt(s)), !(e instanceof Scene)) {
    const s = e;
    e && ((r = e.dispose) == null || r.call(e)), s.geometry && (s.geometry.dispose(), delete s.geometry), Array.isArray(s.material) ? (s.material.forEach((l) => Ye$1(l)), delete s.material) : s.material && (Ye$1(s.material), delete s.material);
  }
}
function tr(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    t(e[r], r) && (e[n] = e[r], n++);
  return e.length = n, e;
}
function Ce(e, t) {
  let n = e;
  if (t.includes("-")) {
    const r = t.split("-");
    let s = r.shift();
    for (; n && r.length; )
      s in n ? (n = n[s], s = r.shift()) : s = qe(s, r.shift());
    return { target: n, key: qe(s, ...r) };
  } else
    return { target: n, key: t };
}
function qe(...e) {
  return e.map((t, n) => n === 0 ? t : t.charAt(0).toUpperCase() + t.slice(1)).join("");
}
const Je = /-\d+$/;
function nr(e, t, n) {
  if (at(n)) {
    if (Je.test(n)) {
      const l = n.replace(Je, ""), { target: i, key: a } = Ce(e, l);
      if (!Array.isArray(i[a])) {
        const c = i[a], o = [];
        o.__tresDetach = () => {
          o.every((u) => be(u)) && (i[a] = c);
        }, i[a] = o;
      }
    }
    const { target: r, key: s } = Ce(e, n);
    t.__tres.previousAttach = r[s], r[s] = Q(t);
  } else
    t.__tres.previousAttach = n(e, t);
}
function rr(e, t, n) {
  var r, s, l;
  if (at(n)) {
    const { target: i, key: a } = Ce(e, n), c = t.__tres.previousAttach;
    c === void 0 ? delete i[a] : i[a] = c, "__tresDetach" in i && i.__tresDetach();
  } else
    (s = (r = t.__tres) == null ? void 0 : r.previousAttach) == null || s.call(r, e, t);
  (l = t.__tres) == null || delete l.previousAttach;
}
function z(e, t, n) {
  const r = e;
  return r.__tres = {
    type: "unknown",
    eventCount: 0,
    root: n,
    handlers: {},
    memoizedProps: {},
    objects: [],
    parent: null,
    previousAttach: null,
    ...t
  }, r.__tres.attach || (r.isMaterial ? r.__tres.attach = "material" : r.isBufferGeometry ? r.__tres.attach = "geometry" : r.isFog && (r.__tres.attach = "fog")), r;
}
function pt(e) {
  var n;
  const t = (n = e == null ? void 0 : e.__tres) == null ? void 0 : n.root;
  t && t.render && t.render.canBeInvalidated.value && t.invalidate();
}
function or(e, t, n) {
  var s;
  if (!G(e.setPixelRatio))
    return;
  let r = 0;
  if (de(n) && n.length >= 2) {
    const [l, i] = n;
    r = MathUtils.clamp(t, l, i);
  } else
    kn(n) ? r = n : r = t;
  r !== ((s = e.getPixelRatio) == null ? void 0 : s.call(e)) && e.setPixelRatio(r);
}
function sr(e, t, n, r, s) {
  var _a, _b, _c;
  const l = [...t.__tres.objects], i = Q(t);
  if (e = Q(e), i === e)
    return true;
  const a = z(e, (_a = t.__tres) != null ? _a : {}, s), c = (_c = (_b = t.parent) != null ? _b : t.__tres.parent) != null ? _c : null, o = { ...t.__tres.memoizedProps };
  delete o.object;
  for (const u of l)
    mt(u, s), ht$1(u, s);
  i.__tres.objects = [], r.remove(t);
  for (const [u, v] of Object.entries(o))
    r.patchProp(a, u, a[u], v);
  n(e), r.insert(t, c);
  for (const u of l)
    r.insert(u, t);
  return true;
}
function Q(e) {
  return Bn(e) ? (e.object.__tres = e.__tres, e.object) : e;
}
function mt(e, t) {
  var r, s, l, i;
  const n = ((r = e.__tres) == null ? void 0 : r.parent) || t.scene.value;
  e.__tres && (e.__tres.parent = null), n && n.__tres && "objects" in n.__tres && tr(n.__tres.objects, (a) => a !== e), (s = e.__tres) != null && s.attach ? rr(n, e, e.__tres.attach) : ((i = (l = e.parent) == null ? void 0 : l.remove) == null || i.call(l, Q(e)), e.parent = null);
}
function ht$1(e, t) {
  var n;
  (n = e.traverse) == null || n.call(e, (r) => {
    var s;
    t.deregisterCamera(r), (s = t.eventManager) == null || s.deregisterPointerMissedObject(r);
  }), t.deregisterCamera(e), pt(e);
}
const ir = Number.parseInt(REVISION.replace("dev", "")), ae = {
  realistic: {
    shadows: true,
    physicallyCorrectLights: true,
    outputColorSpace: SRGBColorSpace,
    toneMapping: ACESFilmicToneMapping,
    toneMappingExposure: 3,
    shadowMap: {
      enabled: true,
      type: PCFSoftShadowMap
    }
  },
  flat: {
    toneMapping: NoToneMapping,
    toneMappingExposure: 1
  }
};
function ar({
  canvas: e,
  options: t,
  contextParts: { sizes: n, render: r, invalidate: s, advance: l }
}) {
  const i = computed(() => {
    var _a, _b;
    return {
      alpha: (_a = toValue(t.alpha)) != null ? _a : true,
      depth: toValue(t.depth),
      canvas: unrefElement(e),
      context: toValue(t.context),
      stencil: toValue(t.stencil),
      antialias: (_b = toValue(t.antialias)) != null ? _b : true,
      precision: toValue(t.precision),
      powerPreference: toValue(t.powerPreference),
      premultipliedAlpha: toValue(t.premultipliedAlpha),
      preserveDrawingBuffer: toValue(t.preserveDrawingBuffer),
      logarithmicDepthBuffer: toValue(t.logarithmicDepthBuffer),
      failIfMajorPerformanceCaveat: toValue(t.failIfMajorPerformanceCaveat)
    };
  }), a = shallowRef(new WebGLRenderer(i.value));
  function c() {
    t.renderMode === "on-demand" && s();
  }
  watch(i, () => {
    a.value.dispose(), a.value = new WebGLRenderer(i.value), c();
  }), watch([n.width, n.height], () => {
    a.value.setSize(n.width.value, n.height.value), c();
  }, {
    immediate: true
  }), watch(() => t.clearColor, c);
  const { pixelRatio: o } = useDevicePixelRatio(), { logError: u } = Y(), d = (() => {
    const h2 = new WebGLRenderer(), b = {
      shadowMap: {
        enabled: h2.shadowMap.enabled,
        type: h2.shadowMap.type
      },
      toneMapping: h2.toneMapping,
      toneMappingExposure: h2.toneMappingExposure,
      outputColorSpace: h2.outputColorSpace
    };
    return h2.dispose(), b;
  })(), g = toValue(t.renderMode);
  return g === "on-demand" && s(), g === "manual" && setTimeout(() => {
    l();
  }, 100), watchEffect(() => {
    var _a;
    const h2 = toValue(t.preset);
    h2 && (h2 in ae || u(`Renderer Preset must be one of these: ${Object.keys(ae).join(", ")}`), ut$1(a.value, ae[h2])), or(a.value, o.value, toValue(t.dpr)), g === "always" && (r.frames.value = Math.max(1, r.frames.value));
    const b = (M, P) => {
      const C = toValue(M), E = () => {
        if (h2)
          return Ve(ae[h2], P);
      };
      if (C !== void 0)
        return C;
      const S = E();
      return S !== void 0 ? S : Ve(d, P);
    }, y = (M, P) => qn(a.value, P, b(M, P));
    y(t.shadows, "shadowMap.enabled"), y((_a = t.toneMapping) != null ? _a : ACESFilmicToneMapping, "toneMapping"), y(t.shadowMapType, "shadowMap.type"), ir < 150 && y(!t.useLegacyLights, "physicallyCorrectLights"), y(t.outputColorSpace, "outputColorSpace"), y(t.toneMappingExposure, "toneMappingExposure");
    const f = b(t.clearColor, "clearColor");
    f && a.value.setClearColor(
      f ? Fn(f) : new Color(0)
      // default clear color is not easily/efficiently retrievable from three
    );
  }), onUnmounted(() => {
    a.value.dispose(), a.value.forceContextLoss();
  }), {
    renderer: a
  };
}
function lr(e) {
  const t = { nodes: {}, materials: {} };
  return e && e.traverse((n) => {
    n.name && (t.nodes[n.name] = n), n.material && !t.materials[n.material.name] && (t.materials[n.material.name] = n.material);
  }), t;
}
async function Nr(e, t, n, r, s) {
  const { logError: l } = Y(), i = new e();
  return n && n(i), await new Promise((a, c) => {
    i.load(
      t,
      (o) => {
        const u = o;
        u.scene && Object.assign(u, lr(u.scene)), a(u);
      },
      r,
      (o) => {
        l("[useLoader] - Failed to load resource", o), c(o);
      }
    );
  });
}
const cr = (e, t) => {
  const n = computed(() => t.renderer.value.domElement), r = shallowRef([]), { x: s, y: l } = usePointer({ target: n });
  let i = 0;
  const { width: a, height: c, top: o, left: u } = useElementBounding(n), v = ({ x: m, y: T }) => {
    if (n.value)
      return {
        x: (m - u.value) / a.value * 2 - 1,
        y: -((T - o.value) / c.value) * 2 + 1
      };
  }, d = ({ x: m, y: T }) => {
    if (t.camera.value)
      return t.raycaster.value.setFromCamera(new Vector2(m, T), t.camera.value), r.value = t.raycaster.value.intersectObjects(e.value, true), r.value;
  }, g = (m) => {
    var _a, _b;
    const T = v({
      x: (_a = m == null ? void 0 : m.clientX) != null ? _a : s.value,
      y: (_b = m == null ? void 0 : m.clientY) != null ? _b : l.value
    });
    return T ? d(T) || [] : [];
  }, h2 = createEventHook(), b = createEventHook(), y = createEventHook(), f = createEventHook(), M = createEventHook(), P = createEventHook(), C = createEventHook(), E = createEventHook();
  function S(m) {
    const T = {};
    for (const F in m)
      typeof F != "function" && (T[F] = m[F]);
    return T;
  }
  const _ = (m, T) => {
    var Oe2, De, je;
    const F = S(T), re = new Vector3(T == null ? void 0 : T.clientX, T == null ? void 0 : T.clientY, 0).unproject((Oe2 = t.camera) == null ? void 0 : Oe2.value);
    m.trigger({
      ...F,
      intersections: r.value,
      // The unprojectedPoint is wrong, math needs to be fixed
      unprojectedPoint: re,
      ray: (De = t.raycaster) == null ? void 0 : De.value.ray,
      camera: (je = t.camera) == null ? void 0 : je.value,
      sourceEvent: T,
      delta: i,
      stopPropagating: false
    });
  };
  let A;
  const L = (m) => {
    g(m), _(y, m), A = m;
  }, p = () => {
    A && L(A);
  };
  let w, x, D;
  const O = (m) => {
    var _a, _b;
    var T;
    w = (T = r.value[0]) == null ? void 0 : T.object, i = 0, x = new Vector2(
      (_a = m == null ? void 0 : m.clientX) != null ? _a : s.value,
      (_b = m == null ? void 0 : m.clientY) != null ? _b : l.value
    ), _(M, m);
  };
  let B, R = false;
  const ne = (m) => {
    var _a, _b;
    var T, F, re;
    m instanceof PointerEvent && (r.value.length === 0 && _(P, m), w === ((T = r.value[0]) == null ? void 0 : T.object) && (D = new Vector2(
      (_a = m == null ? void 0 : m.clientX) != null ? _a : s.value,
      (_b = m == null ? void 0 : m.clientY) != null ? _b : l.value
    ), i = x == null ? void 0 : x.distanceTo(D), m.button === 0 ? (_(h2, m), B === ((F = r.value[0]) == null ? void 0 : F.object) ? R = true : (B = (re = r.value[0]) == null ? void 0 : re.object, R = false)) : m.button === 2 && _(C, m)), _(f, m));
  }, ke = (m) => {
    R && (_(b, m), B = void 0, R = false);
  }, Le = (m) => _(y, m), Re = (m) => _(E, m);
  return n.value.addEventListener("pointerup", ne), n.value.addEventListener("pointerdown", O), n.value.addEventListener("pointermove", L), n.value.addEventListener("pointerleave", Le), n.value.addEventListener("dblclick", ke), n.value.addEventListener("wheel", Re), onUnmounted(() => {
    n != null && n.value && (n.value.removeEventListener("pointerup", ne), n.value.removeEventListener("pointerdown", O), n.value.removeEventListener("pointermove", L), n.value.removeEventListener("pointerleave", Le), n.value.removeEventListener("dblclick", ke), n.value.removeEventListener("wheel", Re));
  }), {
    intersects: r,
    onClick: (m) => h2.on(m).off,
    onDblClick: (m) => b.on(m).off,
    onContextMenu: (m) => C.on(m).off,
    onPointerMove: (m) => y.on(m).off,
    onPointerUp: (m) => f.on(m).off,
    onPointerDown: (m) => M.on(m).off,
    onPointerMissed: (m) => P.on(m).off,
    onWheel: (m) => E.on(m).off,
    forceUpdate: p
  };
};
function xe$1(e) {
  let t = 0;
  return e.traverse((n) => {
    if (n.isMesh && n.geometry && n.type !== "HightlightMesh") {
      const r = n.geometry, s = r.attributes.position.count * 3 * Float32Array.BYTES_PER_ELEMENT, l = r.index ? r.index.count * Uint32Array.BYTES_PER_ELEMENT : 0, i = r.attributes.normal ? r.attributes.normal.count * 3 * Float32Array.BYTES_PER_ELEMENT : 0, a = r.attributes.uv ? r.attributes.uv.count * 2 * Float32Array.BYTES_PER_ELEMENT : 0, c = s + l + i + a;
      t += c;
    }
  }), t;
}
const Me = ref({}), Pe = (e) => Object.assign(Me.value, e);
function fr$1(e, t, n) {
  var L;
  const r = shallowRef(), s = shallowRef();
  e && (r.value = e), t && (s.value = t);
  const l = (p) => {
    var w;
    return ((w = p.__tres) == null ? void 0 : w.eventCount) > 0;
  }, i = (p) => {
    var w;
    return ((w = p.children) == null ? void 0 : w.some((x) => i(x))) || l(p);
  }, a = shallowRef(((L = r.value) == null ? void 0 : L.children).filter(i) || []);
  function c(p, w) {
    if (Array.isArray(p))
      for (const x of p)
        x(w);
    typeof p == "function" && p(w);
  }
  function o(p, w) {
    const x = [], D = () => w.stopPropagating = true;
    w.stopPropagation = D;
    for (const O of w == null ? void 0 : w.intersections) {
      if (w.stopPropagating)
        return;
      w = { ...w, ...O };
      const { object: B } = O;
      w.eventObject = B, c(B[p], w), x.push(B);
      let R = B.parent;
      for (; R !== null && !w.stopPropagating && !x.includes(R); )
        w.eventObject = R, c(R[p], w), x.push(R), R = R.parent;
      const ne = Vn(p.slice(2));
      n(ne, { intersection: O, event: w });
    }
  }
  const {
    onClick: u,
    onDblClick: v,
    onContextMenu: d,
    onPointerMove: g,
    onPointerDown: h2,
    onPointerUp: b,
    onPointerMissed: y,
    onWheel: f,
    forceUpdate: M
  } = cr(a, t);
  b((p) => o("onPointerUp", p)), h2((p) => o("onPointerDown", p)), u((p) => o("onClick", p)), v((p) => o("onDoubleClick", p)), d((p) => o("onContextMenu", p)), f((p) => o("onWheel", p));
  let P = [];
  g((p) => {
    const w = p.intersections.map(({ object: D }) => D), x = p.intersections;
    P.forEach(({ object: D }) => {
      w.includes(D) || (p.intersections = P, o("onPointerLeave", p), o("onPointerOut", p));
    }), p.intersections = x, p.intersections.forEach(({ object: D }) => {
      P.includes(D) || (o("onPointerEnter", p), o("onPointerOver", p));
    }), o("onPointerMove", p), P = p.intersections;
  });
  const C = [];
  y((p) => {
    const w = () => p.stopPropagating = true;
    p.stopPropagation = w, C.forEach((x) => {
      p.stopPropagating || (p.eventObject = x, c(x.onPointerMissed, p));
    }), n("pointer-missed", { event: p });
  });
  function E(p) {
    oe(p) && N(p) && a.value.push(p);
  }
  function S(p) {
    if (oe(p) && N(p)) {
      const w = a.value.indexOf(p);
      w > -1 && a.value.splice(w, 1);
    }
  }
  function _(p) {
    oe(p) && N(p) && p.onPointerMissed && C.push(p);
  }
  function A(p) {
    if (oe(p) && N(p)) {
      const w = C.indexOf(p);
      w > -1 && C.splice(w, 1);
    }
  }
  return t.eventManager = {
    forceUpdate: M,
    registerObject: E,
    deregisterObject: S,
    registerPointerMissedObject: _,
    deregisterPointerMissedObject: A
  }, {
    forceUpdate: M,
    registerObject: E,
    deregisterObject: S,
    registerPointerMissedObject: _,
    deregisterPointerMissedObject: A
  };
}
function dr$1(e, t, n = 10) {
  const r = toValue(e) ? useWindowSize() : useElementSize(computed(() => toValue(t).parentElement)), s = readonly(refDebounced(r.width, n)), l = readonly(refDebounced(r.height, n)), i = computed(() => s.value / l.value);
  return {
    height: l,
    width: s,
    aspectRatio: i
  };
}
function ve() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  let n = 0, r = false;
  const s = () => {
    const o = Array.from(e.entries()).sort((u, v) => {
      const d = u[1].priority - v[1].priority;
      return d === 0 ? u[1].addI - v[1].addI : d;
    });
    t.clear(), o.forEach((u) => t.add(u[0]));
  }, l = (o) => {
    e.delete(o), t.delete(o);
  };
  return { on: (o, u = 0) => {
    e.set(o, { priority: u, addI: n++ });
    const v = () => l(o);
    return tryOnScopeDispose(v), r = true, {
      off: v
    };
  }, off: l, trigger: (...o) => {
    r && (s(), r = false), t.forEach((u) => u(...o));
  }, dispose: () => {
    e.clear(), t.clear();
  }, get count() {
    return e.size;
  } };
}
function pr() {
  let e = true, t = true, n = false;
  const r = new Clock(false), s = ref(r.running), l = ref(false);
  let i;
  const a = MathUtils.generateUUID();
  let c = null;
  const o = ve(), u = ve(), v = ve();
  S();
  let d = {};
  function g(_) {
    d = _;
  }
  function h2(_, A, L = 0) {
    switch (A) {
      case "before":
        return o.on(_, L);
      case "render":
        return c || (c = _), u.dispose(), u.on(_);
      case "after":
        return v.on(_, L);
    }
  }
  function b() {
    t && (t = false, S(), E());
  }
  function y() {
    t = true, S(), cancelAnimationFrame(i);
  }
  function f() {
    n = false, S();
  }
  function M() {
    n = true, S();
  }
  function P() {
    l.value = true;
  }
  function C() {
    l.value = false;
  }
  function E() {
    if (!e) {
      i = requestAnimationFrame(E);
      return;
    }
    const _ = r.getDelta(), A = r.getElapsedTime(), L = {
      camera: unref(d.camera),
      scene: unref(d.scene),
      renderer: unref(d.renderer),
      raycaster: unref(d.raycaster),
      controls: unref(d.controls),
      invalidate: d.invalidate,
      advance: d.advance
    }, p = { delta: _, elapsed: A, clock: r, ...L };
    s.value && o.trigger(p), l.value || (u.count ? u.trigger(p) : c && c(p)), s.value && v.trigger(p), i = requestAnimationFrame(E);
  }
  function S() {
    const _ = !t && !n;
    r.running !== _ && (r.running ? r.stop() : r.start()), s.value = r.running;
  }
  return {
    loopId: a,
    register: (_, A, L) => h2(_, A, L),
    start: b,
    stop: y,
    pause: M,
    resume: f,
    pauseRender: P,
    resumeRender: C,
    isRenderPaused: l,
    isActive: s,
    setContext: g,
    setReady: (_) => e = _
  };
}
function mr$1(e, t, n = 100) {
  n = n <= 0 ? 100 : n;
  const r = createEventHook(), s = /* @__PURE__ */ new Set();
  let l = false, i = false, a = null;
  function c() {
    a && clearTimeout(a), !i && !l && e() ? (r.trigger(t), s.forEach((d) => d()), s.clear(), l = true) : !i && !l && (a = setTimeout(c, n));
  }
  function o() {
    i = true, a && clearTimeout(a);
  }
  c();
  const u = (d, ...g) => {
    d(...g);
  };
  return {
    on: (d) => {
      if (l)
        return u(d, t), { off: () => {
        } };
      {
        const g = r.on(d);
        return s.add(g.off), r.on(d);
      }
    },
    off: r.off,
    trigger: r.trigger,
    cancel: o
  };
}
const te = /* @__PURE__ */ new WeakMap();
function gt(e) {
  if (e = e || pe(), te.has(e))
    return te.get(e);
  const t = 100, n = Date.now(), l = mr$1(() => {
    if (Date.now() - n >= t)
      return true;
    {
      const i = e.renderer.value, a = (i == null ? void 0 : i.domElement) || { width: 0, height: 0 };
      return !!(i && a.width > 0 && a.height > 0);
    }
  }, e);
  return te.set(e, l), l;
}
function hr$1({
  scene: e,
  canvas: t,
  windowSize: n,
  disableRender: r,
  rendererOptions: s,
  emit: l
}) {
  const i = shallowRef(e), a = dr$1(n, t), {
    camera: c,
    cameras: o,
    registerCamera: u,
    deregisterCamera: v,
    setCameraActive: d
  } = In$1({ sizes: a, scene: e }), g = {
    mode: ref(s.renderMode || "always"),
    priority: ref(0),
    frames: ref(0),
    maxFrames: 60,
    canBeInvalidated: computed(() => g.mode.value === "on-demand" && g.frames.value === 0)
  };
  function h2(O = 1) {
    s.renderMode === "on-demand" && (g.frames.value = Math.min(g.maxFrames, g.frames.value + O));
  }
  function b() {
    s.renderMode === "manual" && (g.frames.value = 1);
  }
  const { renderer: y } = ar(
    {
      scene: e,
      canvas: t,
      options: s,
      emit: l,
      // TODO: replace contextParts with full ctx at https://github.com/Tresjs/tres/issues/516
      contextParts: { sizes: a, camera: c, render: g, invalidate: h2, advance: b },
      disableRender: r
    }
  ), f = {
    sizes: a,
    scene: i,
    camera: c,
    cameras: readonly(o),
    renderer: y,
    raycaster: shallowRef(new Raycaster()),
    controls: ref(null),
    perf: {
      maxFrames: 160,
      fps: {
        value: 0,
        accumulator: []
      },
      memory: {
        currentMem: 0,
        allocatedMem: 0,
        accumulator: []
      }
    },
    render: g,
    advance: b,
    extend: Pe,
    invalidate: h2,
    registerCamera: u,
    setCameraActive: d,
    deregisterCamera: v,
    loop: pr()
  };
  provide("useTres", f), f.scene.value.__tres = {
    root: f
  }, f.loop.register(() => {
    c.value && g.frames.value > 0 && (y.value.render(e, c.value), l("render", f.renderer.value)), g.priority.value = 0, g.mode.value === "always" ? g.frames.value = 1 : g.frames.value = Math.max(0, g.frames.value - 1);
  }, "render");
  const { on: M, cancel: P } = gt(f);
  f.loop.setReady(false), f.loop.start(), M(() => {
    l("ready", f), f.loop.setReady(true), fr$1(e, f, l);
  }), onUnmounted(() => {
    P(), f.loop.stop();
  });
  const C = 100, E = useFps({ every: C }), { isSupported: S, memory: _ } = useMemory({ interval: C }), A = 160;
  let L = performance.now();
  const p = ({ timestamp: O }) => {
    f.scene.value && (f.perf.memory.allocatedMem = xe$1(f.scene.value)), O - L >= C && (L = O, f.perf.fps.accumulator.push(E.value), f.perf.fps.accumulator.length > A && f.perf.fps.accumulator.shift(), f.perf.fps.value = E.value, S.value && _.value && (f.perf.memory.accumulator.push(_.value.usedJSHeapSize / 1024 / 1024), f.perf.memory.accumulator.length > A && f.perf.memory.accumulator.shift(), f.perf.memory.currentMem = f.perf.memory.accumulator.reduce((B, R) => B + R, 0) / f.perf.memory.accumulator.length));
  };
  let w = 0;
  const x = 1, { pause: D } = useRafFn(({ delta: O }) => {
    (void 0).__TRES__DEVTOOLS__ && (p({ timestamp: performance.now() }), w += O, w >= x && ((void 0).__TRES__DEVTOOLS__.cb(f), w = 0));
  }, { immediate: true });
  return onUnmounted(() => {
    D();
  }), f;
}
function pe() {
  const e = inject("useTres");
  if (!e)
    throw new Error("useTresContext must be used together with useTresContextProvider");
  return e;
}
function qr$1() {
  const {
    camera: e,
    scene: t,
    renderer: n,
    loop: r,
    raycaster: s,
    controls: l,
    invalidate: i,
    advance: a
  } = pe();
  r.setContext({
    camera: e,
    scene: t,
    renderer: n,
    raycaster: s,
    controls: l,
    invalidate: i,
    advance: a
  });
  function c(v, d = 0) {
    return r.register(v, "before", d);
  }
  function o(v) {
    return r.register(v, "render");
  }
  function u(v, d = 0) {
    return r.register(v, "after", d);
  }
  return {
    pause: r.pause,
    resume: r.resume,
    pauseRender: r.pauseRender,
    resumeRender: r.resumeRender,
    isActive: r.isActive,
    onBeforeRender: c,
    render: o,
    onAfterRender: u
  };
}
function gr$1(e, t = {}, n = {}) {
  let r = e;
  const s = (a) => {
    r = a;
  };
  let l = new Proxy({}, {});
  const i = {
    has(a, c) {
      return c in t || c in r;
    },
    get(a, c, o) {
      return c in t ? t[c](r) : r[c];
    },
    set(a, c, o) {
      return n[c] ? n[c](o, r, l, s) : r[c] = o, true;
    }
  };
  return l = new Proxy({}, i), l;
}
const { logError: Ke } = Y(), Qe = [
  "onClick",
  "onContextMenu",
  "onPointerMove",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onDoubleClick",
  "onPointerDown",
  "onPointerUp",
  "onPointerCancel",
  "onPointerMissed",
  "onLostPointerCapture",
  "onWheel"
], vr$1 = (e) => {
  const t = e.scene.value;
  function n(o, u, v, d) {
    if (d || (d = {}), d.args || (d.args = []), o === "template" || zn$1(o))
      return null;
    let g = o.replace("Tres", ""), h2;
    if (o === "primitive") {
      (!U(d.object) || isRef(d.object)) && Ke(
        "Tres primitives need an 'object' prop, whose value is an object or shallowRef<object>"
      ), g = d.object.type;
      const b = {};
      h2 = gr$1(
        d.object,
        {
          object: (f) => f,
          isPrimitive: () => true,
          __tres: () => b
        },
        {
          object: (f, M, P, C) => {
            sr(f, P, C, { patchProp: l, remove: s, insert: r }, e);
          },
          __tres: (f) => {
            Object.assign(b, f);
          }
        }
      );
    } else {
      const b = Me.value[g];
      b || Ke(
        `${g} is not defined on the THREE namespace. Use extend to add it to the catalog.`
      ), h2 = new b(...d.args);
    }
    return h2 ? (h2.isCamera && (d != null && d.position || h2.position.set(3, 3, 3), d != null && d.lookAt || h2.lookAt(0, 0, 0)), h2 = z(h2, {
      ...h2.__tres,
      type: g,
      memoizedProps: d,
      eventCount: 0,
      primitive: o === "primitive",
      attach: d.attach
    }, e), h2) : null;
  }
  function r(o, u) {
    var g, h2, b;
    if (!o)
      return;
    u = u || t;
    const v = o.__tres ? o : z(o, {}, e), d = u.__tres ? u : z(u, {}, e);
    o = Q(v), u = Q(d), o.__tres && ((g = o.__tres) == null ? void 0 : g.eventCount) > 0 && ((h2 = e.eventManager) == null || h2.registerObject(o)), e.registerCamera(o), (b = e.eventManager) == null || b.registerPointerMissedObject(o), v.__tres.attach ? nr(d, v, v.__tres.attach) : N(o) && N(d) && (d.add(o), o.dispatchEvent({ type: "added" })), v.__tres.parent = d, d.__tres.objects && !d.__tres.objects.includes(v) && d.__tres.objects.push(v);
  }
  function s(o, u) {
    var h2, b, y, f;
    if (!o)
      return;
    o != null && o.__tres && ((h2 = o.__tres) == null ? void 0 : h2.eventCount) > 0 && ((b = e.eventManager) == null || b.deregisterObject(o)), u = be(u) ? "default" : u;
    const v = (y = o.__tres) == null ? void 0 : y.dispose;
    be(v) || (v === null ? u = false : u = v);
    const d = (f = o.__tres) == null ? void 0 : f.primitive, g = u === "default" ? !d : !!u;
    if (o.__tres && "objects" in o.__tres && [...o.__tres.objects].forEach((M) => s(M, u)), g && o.children && [...o.children].forEach((M) => s(M, u)), mt(o, e), ht$1(o, e), g && !jn(o)) {
      if (G(u))
        u(o);
      else if (G(o.dispose))
        try {
          o.dispose();
        } catch {
        }
    }
    "__tres" in o && delete o.__tres;
  }
  function l(o, u, v, d) {
    var M, P;
    if (!o)
      return;
    let g = o, h2 = u;
    if (o.__tres && (o.__tres.memoizedProps[u] = d), u === "attach") {
      const C = ((M = o.__tres) == null ? void 0 : M.parent) || o.parent;
      s(o), z(o, { attach: d }, e), C && r(o, C);
      return;
    }
    if (u === "dispose") {
      o.__tres || (o = z(o, {}, e)), o.__tres.dispose = d;
      return;
    }
    if (N(o) && h2 === "blocks-pointer-events") {
      d || d === "" ? o[h2] = d : delete o[h2];
      return;
    }
    Qe.includes(u) && o.__tres && (o.__tres.eventCount += 1);
    let b = ie(h2), y = g == null ? void 0 : g[b];
    if (h2 === "args") {
      const C = o, E = v != null ? v : [], S = d != null ? d : [], _ = ((P = o.__tres) == null ? void 0 : P.type) || o.type;
      _ && E.length && !Jn$1(E, S) && (g = Object.assign(
        C,
        new Me.value[_](...d)
      ));
      return;
    }
    if (g.type === "BufferGeometry") {
      if (h2 === "args")
        return;
      g.setAttribute(
        ie(h2),
        new BufferAttribute(...d)
      );
      return;
    }
    if (h2.includes("-") && y === void 0) {
      const C = h2.split("-");
      y = C.reduce((E, S) => E[ie(S)], g), h2 = C.pop(), b = h2, y != null && y.set || (g = C.reduce((E, S) => E[ie(S)], g));
    }
    let f = d;
    if (f === "" && (f = true), G(y)) {
      Qe.includes(u) || (de(f) ? o[b](...f) : o[b](f)), b.startsWith("on") && G(f) && (g[b] = f);
      return;
    }
    !(y != null && y.set) && !G(y) ? g[b] = f : y.constructor === f.constructor && (y != null && y.copy) ? y == null || y.copy(f) : de(f) ? y.set(...f) : !y.isColor && y.setScalar ? y.setScalar(f) : y.set(f), pt(o);
  }
  function i(o) {
    var u;
    return ((u = o == null ? void 0 : o.__tres) == null ? void 0 : u.parent) || null;
  }
  function a(o) {
    const u = z(new Object3D(), { type: "Comment" }, e);
    return u.name = o, u;
  }
  function c(o) {
    var g;
    const u = i(o), v = ((g = u == null ? void 0 : u.__tres) == null ? void 0 : g.objects) || [], d = v.indexOf(o);
    return d < 0 || d >= v.length - 1 ? null : v[d + 1];
  }
  return {
    insert: r,
    remove: s,
    createElement: n,
    patchProp: l,
    parentNode: i,
    createText: () => void 0,
    createComment: a,
    setText: () => void 0,
    setElementText: () => void 0,
    nextSibling: c,
    querySelector: () => void 0,
    setScopeId: () => void 0,
    cloneNode: () => void 0,
    insertStaticContent: () => void 0
  };
};
reactive({
  sceneGraph: null
});
const kr = ["data-scene", "data-tres"], Lr = /* @__PURE__ */ defineComponent({
  __name: "TresCanvas",
  props: {
    shadows: { type: Boolean, default: void 0 },
    clearColor: {},
    toneMapping: {},
    shadowMapType: {},
    useLegacyLights: { type: Boolean, default: void 0 },
    outputColorSpace: {},
    toneMappingExposure: {},
    renderMode: { default: "always" },
    dpr: {},
    camera: {},
    preset: {},
    windowSize: { type: Boolean, default: void 0 },
    disableRender: { type: Boolean, default: void 0 },
    context: {},
    precision: {},
    alpha: { type: Boolean, default: void 0 },
    premultipliedAlpha: { type: Boolean },
    antialias: { type: Boolean, default: void 0 },
    stencil: { type: Boolean, default: void 0 },
    preserveDrawingBuffer: { type: Boolean, default: void 0 },
    powerPreference: {},
    depth: { type: Boolean, default: void 0 },
    logarithmicDepthBuffer: { type: Boolean, default: void 0 },
    failIfMajorPerformanceCaveat: { type: Boolean, default: void 0 }
  },
  emits: [
    "render",
    "click",
    "double-click",
    "context-menu",
    "pointer-move",
    "pointer-up",
    "pointer-down",
    "pointer-enter",
    "pointer-leave",
    "pointer-over",
    "pointer-out",
    "pointer-missed",
    "wheel",
    "ready"
  ],
  setup(e, { expose: t, emit: n }) {
    var y;
    const r = e, s = n, l = useSlots(), { logWarning: i } = Y(), a = ref(), c = shallowRef(new Scene()), o = (y = getCurrentInstance()) == null ? void 0 : y.appContext.app;
    Pe(et);
    const u = (f, M = false) => defineComponent({
      setup() {
        var C;
        const P = (C = getCurrentInstance()) == null ? void 0 : C.appContext;
        return P && (P.app = o), provide("useTres", f), provide("extend", Pe), () => h(Fragment, null, M ? [] : l.default());
      }
    }), v = (f, M = false) => {
      const P = u(f, M), { render: C } = createRenderer(vr$1(f));
      C(h(P), c.value);
    }, d = (f, M = false) => {
      dt(f.scene.value), M && (f.renderer.value.dispose(), f.renderer.value.renderLists.dispose(), f.renderer.value.forceContextLoss()), c.value.__tres = {
        root: f
      };
    }, g = computed(() => r.disableRender), h$1 = shallowRef(null);
    t({ context: h$1, dispose: () => d(h$1.value, true) });
    const b = () => {
      d(h$1.value), v(h$1.value, true);
    };
    return onMounted(() => {
      var _a, _b;
      const f = a;
      h$1.value = hr$1({
        scene: c.value,
        canvas: f,
        windowSize: (_a = r.windowSize) != null ? _a : false,
        disableRender: (_b = g.value) != null ? _b : false,
        rendererOptions: r,
        emit: s
      });
      const { registerCamera: M, camera: P, cameras: C, deregisterCamera: E } = h$1.value;
      v(h$1.value);
      const S = () => {
        const _ = new PerspectiveCamera(
          45,
          (void 0).innerWidth / (void 0).innerHeight,
          0.1,
          1e3
        );
        _.position.set(3, 3, 3), _.lookAt(0, 0, 0), M(_);
        const A = watchEffect(() => {
          C.value.length >= 2 && (_.removeFromParent(), E(_), A == null || A());
        });
      };
      watch(
        () => r.camera,
        (_, A) => {
          _ && M(_), A && (A.removeFromParent(), E(A));
        },
        {
          immediate: true
        }
      ), P.value || (i(
        "No camera found. Creating a default perspective camera. To have full control over a camera, please add one to the scene."
      ), S());
    }), onUnmounted(b), (f, M) => (openBlock(), createElementBlock("canvas", {
      ref_key: "canvas",
      ref: a,
      "data-scene": c.value.uuid,
      class: normalizeClass(f.$attrs.class),
      "data-tres": `tresjs ${unref(xn).version}`,
      style: normalizeStyle({
        display: "block",
        width: "100%",
        height: "100%",
        position: f.windowSize ? "fixed" : "relative",
        top: 0,
        left: 0,
        pointerEvents: "auto",
        touchAction: "none",
        ...f.$attrs.style
      })
    }, null, 14, kr));
  }
});
const gi = parseInt(REVISION.replace(/\D+/g, ""));
var xc = Object.defineProperty, wc = (o, e, t) => e in o ? xc(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, Tc = (o, e, t) => (wc(o, e + "", t), t);
async function Zr(o) {
  const e = await o.arrayBuffer(), t = btoa(String.fromCharCode(...new Uint8Array(e)));
  return `data:${o.type || ""};base64,${t}`;
}
let Hs, Ei, zn, Gs;
function Mi(o, e = 1 / 0, t = null) {
  Ei || (Ei = new PlaneGeometry(2, 2, 1, 1)), zn || (zn = new ShaderMaterial({
    uniforms: { blitTexture: new Uniform(o) },
    vertexShader: (
      /* glsl */
      `
        varying vec2 vUv;
        void main(){
            vUv = uv;
            gl_Position = vec4(position.xy * 1.0,0.,.999999);
        }
      `
    ),
    fragmentShader: (
      /* glsl */
      `
          uniform sampler2D blitTexture; 
          varying vec2 vUv;

          void main(){ 
              gl_FragColor = vec4(vUv.xy, 0, 1);
              
              #ifdef IS_SRGB
              gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
              #else
              gl_FragColor = texture2D( blitTexture, vUv);
              #endif
          }
      `
    )
  })), zn.uniforms.blitTexture.value = o, zn.defines.IS_SRGB = "colorSpace" in o ? o.colorSpace === "srgb" : o.encoding === 3001, zn.needsUpdate = true, Gs || (Gs = new Mesh(Ei, zn), Gs.frustrumCulled = false);
  const n = new PerspectiveCamera(), s = new Scene();
  s.add(Gs), t || (t = Hs = new WebGLRenderer({ antialias: false })), t.setSize(Math.min(o.image.width, e), Math.min(o.image.height, e)), t.clear(), t.render(s, n);
  const i = new Texture(t.domElement);
  return i.minFilter = o.minFilter, i.magFilter = o.magFilter, i.wrapS = o.wrapS, i.wrapT = o.wrapT, i.name = o.name, Hs && (Hs.dispose(), Hs = null), i;
}
const Kr = {
  POSITION: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "unsigned byte normalized",
    "short",
    "short normalized",
    "unsigned short",
    "unsigned short normalized"
  ],
  NORMAL: ["byte normalized", "short normalized"],
  TANGENT: ["byte normalized", "short normalized"],
  TEXCOORD: ["byte", "byte normalized", "unsigned byte", "short", "short normalized", "unsigned short"]
};
class Cr {
  constructor() {
    this.pluginCallbacks = [], this.register(function(e) {
      return new Oc(e);
    }), this.register(function(e) {
      return new Dc(e);
    }), this.register(function(e) {
      return new kc(e);
    }), this.register(function(e) {
      return new Bc(e);
    }), this.register(function(e) {
      return new Nc(e);
    }), this.register(function(e) {
      return new Uc(e);
    }), this.register(function(e) {
      return new Lc(e);
    }), this.register(function(e) {
      return new Fc(e);
    }), this.register(function(e) {
      return new zc(e);
    }), this.register(function(e) {
      return new Hc(e);
    }), this.register(function(e) {
      return new Gc(e);
    });
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Function} onError  Callback on errors
   * @param  {Object} options options
   */
  parse(e, t, n, s) {
    const i = new Ic(), r = [];
    for (let a = 0, l = this.pluginCallbacks.length; a < l; a++)
      r.push(this.pluginCallbacks[a](i));
    i.setPlugins(r), i.write(e, t, s).catch(n);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, s, i, t);
    });
  }
}
Tc(Cr, "Utils", {
  insertKeyframe: function(o, e) {
    const n = o.getValueSize(), s = new o.TimeBufferType(o.times.length + 1), i = new o.ValueBufferType(o.values.length + n), r = o.createInterpolant(new o.ValueBufferType(n));
    let a;
    if (o.times.length === 0) {
      s[0] = e;
      for (let l = 0; l < n; l++)
        i[l] = 0;
      a = 0;
    } else if (e < o.times[0]) {
      if (Math.abs(o.times[0] - e) < 1e-3)
        return 0;
      s[0] = e, s.set(o.times, 1), i.set(r.evaluate(e), 0), i.set(o.values, n), a = 0;
    } else if (e > o.times[o.times.length - 1]) {
      if (Math.abs(o.times[o.times.length - 1] - e) < 1e-3)
        return o.times.length - 1;
      s[s.length - 1] = e, s.set(o.times, 0), i.set(o.values, 0), i.set(r.evaluate(e), o.values.length), a = s.length - 1;
    } else
      for (let l = 0; l < o.times.length; l++) {
        if (Math.abs(o.times[l] - e) < 1e-3)
          return l;
        if (o.times[l] < e && o.times[l + 1] > e) {
          s.set(o.times.slice(0, l + 1), 0), s[l + 1] = e, s.set(o.times.slice(l + 1), l + 2), i.set(o.values.slice(0, (l + 1) * n), 0), i.set(r.evaluate(e), (l + 1) * n), i.set(o.values.slice((l + 1) * n), (l + 2) * n), a = l + 1;
          break;
        }
      }
    return o.times = s, o.values = i, a;
  },
  mergeMorphTargetTracks: function(o, e) {
    const t = [], n = {}, s = o.tracks;
    for (let i = 0; i < s.length; ++i) {
      let r = s[i];
      const a = PropertyBinding.parseTrackName(r.name), l = PropertyBinding.findNode(e, a.nodeName);
      if (a.propertyName !== "morphTargetInfluences" || a.propertyIndex === void 0) {
        t.push(r);
        continue;
      }
      if (r.createInterpolant !== r.InterpolantFactoryMethodDiscrete && r.createInterpolant !== r.InterpolantFactoryMethodLinear) {
        if (r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
        console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), r = r.clone(), r.setInterpolation(InterpolateLinear);
      }
      const c = l.morphTargetInfluences.length, h2 = l.morphTargetDictionary[a.propertyIndex];
      if (h2 === void 0)
        throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
      let u;
      if (n[l.uuid] === void 0) {
        u = r.clone();
        const f = new u.ValueBufferType(c * u.times.length);
        for (let g = 0; g < u.times.length; g++)
          f[g * c + h2] = u.values[g];
        u.name = (a.nodeName || "") + ".morphTargetInfluences", u.values = f, n[l.uuid] = u, t.push(u);
        continue;
      }
      const p = r.createInterpolant(new r.ValueBufferType(1));
      u = n[l.uuid];
      for (let f = 0; f < u.times.length; f++)
        u.values[f * c + h2] = p.evaluate(u.times[f]);
      for (let f = 0; f < r.times.length; f++) {
        const g = this.insertKeyframe(u, r.times[f]);
        u.values[g * c + h2] = r.values[f];
      }
    }
    return o.tracks = t, o;
  }
});
const Oe = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  BYTE: 5120,
  UNSIGNED_BYTE: 5121,
  SHORT: 5122,
  UNSIGNED_SHORT: 5123,
  INT: 5124,
  UNSIGNED_INT: 5125,
  FLOAT: 5126,
  ARRAY_BUFFER: 34962,
  ELEMENT_ARRAY_BUFFER: 34963,
  NEAREST: 9728,
  LINEAR: 9729,
  NEAREST_MIPMAP_NEAREST: 9984,
  LINEAR_MIPMAP_NEAREST: 9985,
  NEAREST_MIPMAP_LINEAR: 9986,
  LINEAR_MIPMAP_LINEAR: 9987,
  CLAMP_TO_EDGE: 33071,
  MIRRORED_REPEAT: 33648,
  REPEAT: 10497
}, Si = "KHR_mesh_quantization", _t = {};
_t[NearestFilter] = Oe.NEAREST;
_t[NearestMipmapNearestFilter] = Oe.NEAREST_MIPMAP_NEAREST;
_t[NearestMipmapLinearFilter] = Oe.NEAREST_MIPMAP_LINEAR;
_t[LinearFilter] = Oe.LINEAR;
_t[LinearMipmapNearestFilter] = Oe.LINEAR_MIPMAP_NEAREST;
_t[LinearMipmapLinearFilter] = Oe.LINEAR_MIPMAP_LINEAR;
_t[ClampToEdgeWrapping] = Oe.CLAMP_TO_EDGE;
_t[RepeatWrapping] = Oe.REPEAT;
_t[MirroredRepeatWrapping] = Oe.MIRRORED_REPEAT;
const qr = {
  scale: "scale",
  position: "translation",
  quaternion: "rotation",
  morphTargetInfluences: "weights"
}, bc = new Color(), Qr = 12, Ec = 1179937895, Mc = 2, Jr = 8, Sc = 1313821514, Ac = 5130562;
function ys(o, e) {
  return o.length === e.length && o.every(function(t, n) {
    return t === e[n];
  });
}
function Pc(o) {
  return new TextEncoder().encode(o).buffer;
}
function Cc(o) {
  return ys(o.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function Rc(o, e, t) {
  const n = {
    min: new Array(o.itemSize).fill(Number.POSITIVE_INFINITY),
    max: new Array(o.itemSize).fill(Number.NEGATIVE_INFINITY)
  };
  for (let s = e; s < e + t; s++)
    for (let i = 0; i < o.itemSize; i++) {
      let r;
      o.itemSize > 4 ? r = o.array[s * o.itemSize + i] : (i === 0 ? r = o.getX(s) : i === 1 ? r = o.getY(s) : i === 2 ? r = o.getZ(s) : i === 3 && (r = o.getW(s)), o.normalized === true && (r = MathUtils.normalize(r, o.array))), n.min[i] = Math.min(n.min[i], r), n.max[i] = Math.max(n.max[i], r);
    }
  return n;
}
function Ca(o) {
  return Math.ceil(o / 4) * 4;
}
function Ai(o, e = 0) {
  const t = Ca(o.byteLength);
  if (t !== o.byteLength) {
    const n = new Uint8Array(t);
    if (n.set(new Uint8Array(o)), e !== 0)
      for (let s = o.byteLength; s < t; s++)
        n[s] = e;
    return n.buffer;
  }
  return o;
}
function eo() {
  return typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : (void 0).createElement("canvas");
}
function to(o, e) {
  if (o.toBlob !== void 0)
    return new Promise((n) => o.toBlob(n, e));
  let t;
  return e === "image/jpeg" ? t = 0.92 : e === "image/webp" && (t = 0.8), o.convertToBlob({
    type: e,
    quality: t
  });
}
class Ic {
  constructor() {
    this.plugins = [], this.options = {}, this.pending = [], this.buffers = [], this.byteOffset = 0, this.buffers = [], this.nodeMap = /* @__PURE__ */ new Map(), this.skins = [], this.extensionsUsed = {}, this.extensionsRequired = {}, this.uids = /* @__PURE__ */ new Map(), this.uid = 0, this.json = {
      asset: {
        version: "2.0",
        generator: "THREE.GLTFExporter"
      }
    }, this.cache = {
      meshes: /* @__PURE__ */ new Map(),
      attributes: /* @__PURE__ */ new Map(),
      attributesNormalized: /* @__PURE__ */ new Map(),
      materials: /* @__PURE__ */ new Map(),
      textures: /* @__PURE__ */ new Map(),
      images: /* @__PURE__ */ new Map()
    };
  }
  setPlugins(e) {
    this.plugins = e;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Object} options options
   */
  async write(e, t, n = {}) {
    this.options = Object.assign(
      {
        // default options
        binary: false,
        trs: false,
        onlyVisible: true,
        maxTextureSize: 1 / 0,
        animations: [],
        includeCustomExtensions: false
      },
      n
    ), this.options.animations.length > 0 && (this.options.trs = true), this.processInput(e), await Promise.all(this.pending);
    const s = this, i = s.buffers, r = s.json;
    n = s.options;
    const a = s.extensionsUsed, l = s.extensionsRequired, c = new Blob(i, { type: "application/octet-stream" }), h2 = Object.keys(a), u = Object.keys(l);
    h2.length > 0 && (r.extensionsUsed = h2), u.length > 0 && (r.extensionsRequired = u), r.buffers && r.buffers.length > 0 && (r.buffers[0].byteLength = c.size), n.binary === true ? c.arrayBuffer().then((p) => {
      const f = Ai(p), g = new DataView(new ArrayBuffer(Jr));
      g.setUint32(0, f.byteLength, true), g.setUint32(4, Ac, true);
      const m = Ai(Pc(JSON.stringify(r)), 32), y = new DataView(new ArrayBuffer(Jr));
      y.setUint32(0, m.byteLength, true), y.setUint32(4, Sc, true);
      const d = new ArrayBuffer(Qr), w = new DataView(d);
      w.setUint32(0, Ec, true), w.setUint32(4, Mc, true);
      const v = Qr + y.byteLength + m.byteLength + g.byteLength + f.byteLength;
      w.setUint32(8, v, true), new Blob([d, y, m, g, f], {
        type: "application/octet-stream"
      }).arrayBuffer().then(t);
    }) : r.buffers && r.buffers.length > 0 ? Zr(c).then((p) => {
      r.buffers[0].uri = p, t(r);
    }) : t(r);
  }
  /**
   * Serializes a userData.
   *
   * @param {THREE.Object3D|THREE.Material} object
   * @param {Object} objectDef
   */
  serializeUserData(e, t) {
    if (Object.keys(e.userData).length === 0)
      return;
    const n = this.options, s = this.extensionsUsed;
    try {
      const i = JSON.parse(JSON.stringify(e.userData));
      if (n.includeCustomExtensions && i.gltfExtensions) {
        t.extensions === void 0 && (t.extensions = {});
        for (const r in i.gltfExtensions)
          t.extensions[r] = i.gltfExtensions[r], s[r] = true;
        delete i.gltfExtensions;
      }
      Object.keys(i).length > 0 && (t.extras = i);
    } catch (i) {
      console.warn(
        "THREE.GLTFExporter: userData of '" + e.name + "' won't be serialized because of JSON.stringify error - " + i.message
      );
    }
  }
  /**
   * Returns ids for buffer attributes.
   * @param  {Object} object
   * @return {Integer}
   */
  getUID(e, t = false) {
    if (this.uids.has(e) === false) {
      const s = /* @__PURE__ */ new Map();
      s.set(true, this.uid++), s.set(false, this.uid++), this.uids.set(e, s);
    }
    return this.uids.get(e).get(t);
  }
  /**
   * Checks if normal attribute values are normalized.
   *
   * @param {BufferAttribute} normal
   * @returns {Boolean}
   */
  isNormalizedNormalAttribute(e) {
    if (this.cache.attributesNormalized.has(e))
      return false;
    const n = new Vector3();
    for (let s = 0, i = e.count; s < i; s++)
      if (Math.abs(n.fromBufferAttribute(e, s).length() - 1) > 5e-4)
        return false;
    return true;
  }
  /**
   * Creates normalized normal buffer attribute.
   *
   * @param {BufferAttribute} normal
   * @returns {BufferAttribute}
   *
   */
  createNormalizedNormalAttribute(e) {
    const t = this.cache;
    if (t.attributesNormalized.has(e))
      return t.attributesNormalized.get(e);
    const n = e.clone(), s = new Vector3();
    for (let i = 0, r = n.count; i < r; i++)
      s.fromBufferAttribute(n, i), s.x === 0 && s.y === 0 && s.z === 0 ? s.setX(1) : s.normalize(), n.setXYZ(i, s.x, s.y, s.z);
    return t.attributesNormalized.set(e, n), n;
  }
  /**
   * Applies a texture transform, if present, to the map definition. Requires
   * the KHR_texture_transform extension.
   *
   * @param {Object} mapDef
   * @param {THREE.Texture} texture
   */
  applyTextureTransform(e, t) {
    let n = false;
    const s = {};
    (t.offset.x !== 0 || t.offset.y !== 0) && (s.offset = t.offset.toArray(), n = true), t.rotation !== 0 && (s.rotation = t.rotation, n = true), (t.repeat.x !== 1 || t.repeat.y !== 1) && (s.scale = t.repeat.toArray(), n = true), n && (e.extensions = e.extensions || {}, e.extensions.KHR_texture_transform = s, this.extensionsUsed.KHR_texture_transform = true);
  }
  buildMetalRoughTexture(e, t) {
    if (e === t)
      return e;
    function n(f) {
      return ("colorSpace" in f ? f.colorSpace === "srgb" : f.encoding === 3001) ? function(m) {
        return m < 0.04045 ? m * 0.0773993808 : Math.pow(m * 0.9478672986 + 0.0521327014, 2.4);
      } : function(m) {
        return m;
      };
    }
    console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), e instanceof CompressedTexture && (e = Mi(e)), t instanceof CompressedTexture && (t = Mi(t));
    const s = e ? e.image : null, i = t ? t.image : null, r = Math.max(s ? s.width : 0, i ? i.width : 0), a = Math.max(s ? s.height : 0, i ? i.height : 0), l = eo();
    l.width = r, l.height = a;
    const c = l.getContext("2d");
    c.fillStyle = "#00ffff", c.fillRect(0, 0, r, a);
    const h2 = c.getImageData(0, 0, r, a);
    if (s) {
      c.drawImage(s, 0, 0, r, a);
      const f = n(e), g = c.getImageData(0, 0, r, a).data;
      for (let m = 2; m < g.length; m += 4)
        h2.data[m] = f(g[m] / 256) * 256;
    }
    if (i) {
      c.drawImage(i, 0, 0, r, a);
      const f = n(t), g = c.getImageData(0, 0, r, a).data;
      for (let m = 1; m < g.length; m += 4)
        h2.data[m] = f(g[m] / 256) * 256;
    }
    c.putImageData(h2, 0, 0);
    const p = (e || t).clone();
    return p.source = new Texture(l).source, "colorSpace" in p ? p.colorSpace = "" : p.encoding = 3e3, p.channel = (e || t).channel, e && t && e.channel !== t.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), p;
  }
  /**
   * Process a buffer to append to the default one.
   * @param  {ArrayBuffer} buffer
   * @return {Integer}
   */
  processBuffer(e) {
    const t = this.json, n = this.buffers;
    return t.buffers || (t.buffers = [{ byteLength: 0 }]), n.push(e), 0;
  }
  /**
   * Process and generate a BufferView
   * @param  {BufferAttribute} attribute
   * @param  {number} componentType
   * @param  {number} start
   * @param  {number} count
   * @param  {number} target (Optional) Target usage of the BufferView
   * @return {Object}
   */
  processBufferView(e, t, n, s, i) {
    const r = this.json;
    r.bufferViews || (r.bufferViews = []);
    let a;
    switch (t) {
      case Oe.BYTE:
      case Oe.UNSIGNED_BYTE:
        a = 1;
        break;
      case Oe.SHORT:
      case Oe.UNSIGNED_SHORT:
        a = 2;
        break;
      default:
        a = 4;
    }
    const l = Ca(s * e.itemSize * a), c = new DataView(new ArrayBuffer(l));
    let h2 = 0;
    for (let f = n; f < n + s; f++)
      for (let g = 0; g < e.itemSize; g++) {
        let m;
        e.itemSize > 4 ? m = e.array[f * e.itemSize + g] : (g === 0 ? m = e.getX(f) : g === 1 ? m = e.getY(f) : g === 2 ? m = e.getZ(f) : g === 3 && (m = e.getW(f)), e.normalized === true && (m = MathUtils.normalize(m, e.array))), t === Oe.FLOAT ? c.setFloat32(h2, m, true) : t === Oe.INT ? c.setInt32(h2, m, true) : t === Oe.UNSIGNED_INT ? c.setUint32(h2, m, true) : t === Oe.SHORT ? c.setInt16(h2, m, true) : t === Oe.UNSIGNED_SHORT ? c.setUint16(h2, m, true) : t === Oe.BYTE ? c.setInt8(h2, m) : t === Oe.UNSIGNED_BYTE && c.setUint8(h2, m), h2 += a;
      }
    const u = {
      buffer: this.processBuffer(c.buffer),
      byteOffset: this.byteOffset,
      byteLength: l
    };
    return i !== void 0 && (u.target = i), i === Oe.ARRAY_BUFFER && (u.byteStride = e.itemSize * a), this.byteOffset += l, r.bufferViews.push(u), {
      id: r.bufferViews.length - 1,
      byteLength: 0
    };
  }
  /**
   * Process and generate a BufferView from an image Blob.
   * @param {Blob} blob
   * @return {Promise<Integer>}
   */
  processBufferViewImage(e) {
    const t = this, n = t.json;
    return n.bufferViews || (n.bufferViews = []), e.arrayBuffer().then((s) => {
      const i = Ai(s), r = {
        buffer: t.processBuffer(i),
        byteOffset: t.byteOffset,
        byteLength: i.byteLength
      };
      return t.byteOffset += i.byteLength, n.bufferViews.push(r) - 1;
    });
  }
  /**
   * Process attribute to generate an accessor
   * @param  {BufferAttribute} attribute Attribute to process
   * @param  {THREE.BufferGeometry} geometry (Optional) Geometry used for truncated draw range
   * @param  {Integer} start (Optional)
   * @param  {Integer} count (Optional)
   * @return {Integer|null} Index of the processed accessor on the "accessors" array
   */
  processAccessor(e, t, n, s) {
    const i = this.json, r = {
      1: "SCALAR",
      2: "VEC2",
      3: "VEC3",
      4: "VEC4",
      9: "MAT3",
      16: "MAT4"
    };
    let a;
    if (e.array.constructor === Float32Array)
      a = Oe.FLOAT;
    else if (e.array.constructor === Int32Array)
      a = Oe.INT;
    else if (e.array.constructor === Uint32Array)
      a = Oe.UNSIGNED_INT;
    else if (e.array.constructor === Int16Array)
      a = Oe.SHORT;
    else if (e.array.constructor === Uint16Array)
      a = Oe.UNSIGNED_SHORT;
    else if (e.array.constructor === Int8Array)
      a = Oe.BYTE;
    else if (e.array.constructor === Uint8Array)
      a = Oe.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.GLTFExporter: Unsupported bufferAttribute component type: " + e.array.constructor.name
      );
    if (n === void 0 && (n = 0), s === void 0 && (s = e.count), s === 0)
      return null;
    const l = Rc(e, n, s);
    let c;
    t !== void 0 && (c = e === t.index ? Oe.ELEMENT_ARRAY_BUFFER : Oe.ARRAY_BUFFER);
    const h2 = this.processBufferView(e, a, n, s, c), u = {
      bufferView: h2.id,
      byteOffset: h2.byteOffset,
      componentType: a,
      count: s,
      max: l.max,
      min: l.min,
      type: r[e.itemSize]
    };
    return e.normalized === true && (u.normalized = true), i.accessors || (i.accessors = []), i.accessors.push(u) - 1;
  }
  /**
   * Process image
   * @param  {Image} image to process
   * @param  {Integer} format of the image (RGBAFormat)
   * @param  {Boolean} flipY before writing out the image
   * @param  {String} mimeType export format
   * @return {Integer}     Index of the processed texture in the "images" array
   */
  processImage(e, t, n, s = "image/png") {
    if (e !== null) {
      const i = this, r = i.cache, a = i.json, l = i.options, c = i.pending;
      r.images.has(e) || r.images.set(e, {});
      const h2 = r.images.get(e), u = s + ":flipY/" + n.toString();
      if (h2[u] !== void 0)
        return h2[u];
      a.images || (a.images = []);
      const p = { mimeType: s }, f = eo();
      f.width = Math.min(e.width, l.maxTextureSize), f.height = Math.min(e.height, l.maxTextureSize);
      const g = f.getContext("2d");
      if (n === true && (g.translate(0, f.height), g.scale(1, -1)), e.data !== void 0) {
        t !== RGBAFormat && console.error("GLTFExporter: Only RGBAFormat is supported.", t), (e.width > l.maxTextureSize || e.height > l.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
        const y = new Uint8ClampedArray(e.height * e.width * 4);
        for (let d = 0; d < y.length; d += 4)
          y[d + 0] = e.data[d + 0], y[d + 1] = e.data[d + 1], y[d + 2] = e.data[d + 2], y[d + 3] = e.data[d + 3];
        g.putImageData(new ImageData(y, e.width, e.height), 0, 0);
      } else
        g.drawImage(e, 0, 0, f.width, f.height);
      l.binary === true ? c.push(
        to(f, s).then((y) => i.processBufferViewImage(y)).then((y) => {
          p.bufferView = y;
        })
      ) : f.toDataURL !== void 0 ? p.uri = f.toDataURL(s) : c.push(
        to(f, s).then(Zr).then((y) => {
          p.uri = y;
        })
      );
      const m = a.images.push(p) - 1;
      return h2[u] = m, m;
    } else
      throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.");
  }
  /**
   * Process sampler
   * @param  {Texture} map Texture to process
   * @return {Integer}     Index of the processed texture in the "samplers" array
   */
  processSampler(e) {
    const t = this.json;
    t.samplers || (t.samplers = []);
    const n = {
      magFilter: _t[e.magFilter],
      minFilter: _t[e.minFilter],
      wrapS: _t[e.wrapS],
      wrapT: _t[e.wrapT]
    };
    return t.samplers.push(n) - 1;
  }
  /**
   * Process texture
   * @param  {Texture} map Map to process
   * @return {Integer} Index of the processed texture in the "textures" array
   */
  processTexture(e) {
    const n = this.options, s = this.cache, i = this.json;
    if (s.textures.has(e))
      return s.textures.get(e);
    i.textures || (i.textures = []), e instanceof CompressedTexture && (e = Mi(e, n.maxTextureSize));
    let r = e.userData.mimeType;
    r === "image/webp" && (r = "image/png");
    const a = {
      sampler: this.processSampler(e),
      source: this.processImage(e.image, e.format, e.flipY, r)
    };
    e.name && (a.name = e.name), this._invokeAll(function(c) {
      c.writeTexture && c.writeTexture(e, a);
    });
    const l = i.textures.push(a) - 1;
    return s.textures.set(e, l), l;
  }
  /**
   * Process material
   * @param  {THREE.Material} material Material to process
   * @return {Integer|null} Index of the processed material in the "materials" array
   */
  processMaterial(e) {
    const t = this.cache, n = this.json;
    if (t.materials.has(e))
      return t.materials.get(e);
    if (e.isShaderMaterial)
      return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
    n.materials || (n.materials = []);
    const s = { pbrMetallicRoughness: {} };
    e.isMeshStandardMaterial !== true && e.isMeshBasicMaterial !== true && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
    const i = e.color.toArray().concat([e.opacity]);
    if (ys(i, [1, 1, 1, 1]) || (s.pbrMetallicRoughness.baseColorFactor = i), e.isMeshStandardMaterial ? (s.pbrMetallicRoughness.metallicFactor = e.metalness, s.pbrMetallicRoughness.roughnessFactor = e.roughness) : (s.pbrMetallicRoughness.metallicFactor = 0.5, s.pbrMetallicRoughness.roughnessFactor = 0.5), e.metalnessMap || e.roughnessMap) {
      const a = this.buildMetalRoughTexture(e.metalnessMap, e.roughnessMap), l = {
        index: this.processTexture(a),
        channel: a.channel
      };
      this.applyTextureTransform(l, a), s.pbrMetallicRoughness.metallicRoughnessTexture = l;
    }
    if (e.map) {
      const a = {
        index: this.processTexture(e.map),
        texCoord: e.map.channel
      };
      this.applyTextureTransform(a, e.map), s.pbrMetallicRoughness.baseColorTexture = a;
    }
    if (e.emissive) {
      const a = e.emissive;
      if (Math.max(a.r, a.g, a.b) > 0 && (s.emissiveFactor = e.emissive.toArray()), e.emissiveMap) {
        const c = {
          index: this.processTexture(e.emissiveMap),
          texCoord: e.emissiveMap.channel
        };
        this.applyTextureTransform(c, e.emissiveMap), s.emissiveTexture = c;
      }
    }
    if (e.normalMap) {
      const a = {
        index: this.processTexture(e.normalMap),
        texCoord: e.normalMap.channel
      };
      e.normalScale && e.normalScale.x !== 1 && (a.scale = e.normalScale.x), this.applyTextureTransform(a, e.normalMap), s.normalTexture = a;
    }
    if (e.aoMap) {
      const a = {
        index: this.processTexture(e.aoMap),
        texCoord: e.aoMap.channel
      };
      e.aoMapIntensity !== 1 && (a.strength = e.aoMapIntensity), this.applyTextureTransform(a, e.aoMap), s.occlusionTexture = a;
    }
    e.transparent ? s.alphaMode = "BLEND" : e.alphaTest > 0 && (s.alphaMode = "MASK", s.alphaCutoff = e.alphaTest), e.side === DoubleSide && (s.doubleSided = true), e.name !== "" && (s.name = e.name), this.serializeUserData(e, s), this._invokeAll(function(a) {
      a.writeMaterial && a.writeMaterial(e, s);
    });
    const r = n.materials.push(s) - 1;
    return t.materials.set(e, r), r;
  }
  /**
   * Process mesh
   * @param  {THREE.Mesh} mesh Mesh to process
   * @return {Integer|null} Index of the processed mesh in the "meshes" array
   */
  processMesh(e) {
    const t = this.cache, n = this.json, s = [e.geometry.uuid];
    if (Array.isArray(e.material))
      for (let v = 0, E = e.material.length; v < E; v++)
        s.push(e.material[v].uuid);
    else
      s.push(e.material.uuid);
    const i = s.join(":");
    if (t.meshes.has(i))
      return t.meshes.get(i);
    const r = e.geometry;
    let a;
    e.isLineSegments ? a = Oe.LINES : e.isLineLoop ? a = Oe.LINE_LOOP : e.isLine ? a = Oe.LINE_STRIP : e.isPoints ? a = Oe.POINTS : a = e.material.wireframe ? Oe.LINES : Oe.TRIANGLES;
    const l = {}, c = {}, h2 = [], u = [], p = {
      ...gi >= 152 ? {
        uv: "TEXCOORD_0",
        uv1: "TEXCOORD_1",
        uv2: "TEXCOORD_2",
        uv3: "TEXCOORD_3"
      } : {
        uv: "TEXCOORD_0",
        uv2: "TEXCOORD_1"
      },
      color: "COLOR_0",
      skinWeight: "WEIGHTS_0",
      skinIndex: "JOINTS_0"
    }, f = r.getAttribute("normal");
    f !== void 0 && !this.isNormalizedNormalAttribute(f) && (console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."), r.setAttribute("normal", this.createNormalizedNormalAttribute(f)));
    let g = null;
    for (let v in r.attributes) {
      if (v.slice(0, 5) === "morph")
        continue;
      const E = r.attributes[v];
      if (v = p[v] || v.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v) || (v = "_" + v), t.attributes.has(this.getUID(E))) {
        c[v] = t.attributes.get(this.getUID(E));
        continue;
      }
      g = null;
      const T = E.array;
      v === "JOINTS_0" && !(T instanceof Uint16Array) && !(T instanceof Uint8Array) && (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), g = new BufferAttribute(new Uint16Array(T), E.itemSize, E.normalized));
      const b = this.processAccessor(g || E, r);
      b !== null && (v.startsWith("_") || this.detectMeshQuantization(v, E), c[v] = b, t.attributes.set(this.getUID(E), b));
    }
    if (f !== void 0 && r.setAttribute("normal", f), Object.keys(c).length === 0)
      return null;
    if (e.morphTargetInfluences !== void 0 && e.morphTargetInfluences.length > 0) {
      const v = [], E = [], P = {};
      if (e.morphTargetDictionary !== void 0)
        for (const T in e.morphTargetDictionary)
          P[e.morphTargetDictionary[T]] = T;
      for (let T = 0; T < e.morphTargetInfluences.length; ++T) {
        const b = {};
        let x = false;
        for (const M in r.morphAttributes) {
          if (M !== "position" && M !== "normal") {
            x || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), x = true);
            continue;
          }
          const _ = r.morphAttributes[M][T], C = M.toUpperCase(), R = r.attributes[M];
          if (t.attributes.has(this.getUID(_, true))) {
            b[C] = t.attributes.get(this.getUID(_, true));
            continue;
          }
          const B = _.clone();
          if (!r.morphTargetsRelative)
            for (let N2 = 0, j = _.count; N2 < j; N2++)
              for (let V = 0; V < _.itemSize; V++)
                V === 0 && B.setX(N2, _.getX(N2) - R.getX(N2)), V === 1 && B.setY(N2, _.getY(N2) - R.getY(N2)), V === 2 && B.setZ(N2, _.getZ(N2) - R.getZ(N2)), V === 3 && B.setW(N2, _.getW(N2) - R.getW(N2));
          b[C] = this.processAccessor(B, r), t.attributes.set(this.getUID(R, true), b[C]);
        }
        u.push(b), v.push(e.morphTargetInfluences[T]), e.morphTargetDictionary !== void 0 && E.push(P[T]);
      }
      l.weights = v, E.length > 0 && (l.extras = {}, l.extras.targetNames = E);
    }
    const m = Array.isArray(e.material);
    if (m && r.groups.length === 0)
      return null;
    const y = m ? e.material : [e.material], d = m ? r.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let v = 0, E = d.length; v < E; v++) {
      const P = {
        mode: a,
        attributes: c
      };
      if (this.serializeUserData(r, P), u.length > 0 && (P.targets = u), r.index !== null) {
        let b = this.getUID(r.index);
        (d[v].start !== void 0 || d[v].count !== void 0) && (b += ":" + d[v].start + ":" + d[v].count), t.attributes.has(b) ? P.indices = t.attributes.get(b) : (P.indices = this.processAccessor(r.index, r, d[v].start, d[v].count), t.attributes.set(b, P.indices)), P.indices === null && delete P.indices;
      }
      const T = this.processMaterial(y[d[v].materialIndex]);
      T !== null && (P.material = T), h2.push(P);
    }
    l.primitives = h2, n.meshes || (n.meshes = []), this._invokeAll(function(v) {
      v.writeMesh && v.writeMesh(e, l);
    });
    const w = n.meshes.push(l) - 1;
    return t.meshes.set(i, w), w;
  }
  /**
   * If a vertex attribute with a
   * [non-standard data type](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#meshes-overview)
   * is used, it is checked whether it is a valid data type according to the
   * [KHR_mesh_quantization](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md)
   * extension.
   * In this case the extension is automatically added to the list of used extensions.
   *
   * @param {string} attributeName
   * @param {THREE.BufferAttribute} attribute
   */
  detectMeshQuantization(e, t) {
    if (this.extensionsUsed[Si])
      return;
    let n;
    switch (t.array.constructor) {
      case Int8Array:
        n = "byte";
        break;
      case Uint8Array:
        n = "unsigned byte";
        break;
      case Int16Array:
        n = "short";
        break;
      case Uint16Array:
        n = "unsigned short";
        break;
      default:
        return;
    }
    t.normalized && (n += " normalized");
    const s = e.split("_", 1)[0];
    Kr[s] && Kr[s].includes(n) && (this.extensionsUsed[Si] = true, this.extensionsRequired[Si] = true);
  }
  /**
   * Process camera
   * @param  {THREE.Camera} camera Camera to process
   * @return {Integer}      Index of the processed mesh in the "camera" array
   */
  processCamera(e) {
    const t = this.json;
    t.cameras || (t.cameras = []);
    const n = e.isOrthographicCamera, s = {
      type: n ? "orthographic" : "perspective"
    };
    return n ? s.orthographic = {
      xmag: e.right * 2,
      ymag: e.top * 2,
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    } : s.perspective = {
      aspectRatio: e.aspect,
      yfov: MathUtils.degToRad(e.fov),
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    }, e.name !== "" && (s.name = e.type), t.cameras.push(s) - 1;
  }
  /**
   * Creates glTF animation entry from AnimationClip object.
   *
   * Status:
   * - Only properties listed in PATH_PROPERTIES may be animated.
   *
   * @param {THREE.AnimationClip} clip
   * @param {THREE.Object3D} root
   * @return {number|null}
   */
  processAnimation(e, t) {
    const n = this.json, s = this.nodeMap;
    n.animations || (n.animations = []), e = Cr.Utils.mergeMorphTargetTracks(e.clone(), t);
    const i = e.tracks, r = [], a = [];
    for (let l = 0; l < i.length; ++l) {
      const c = i[l], h2 = PropertyBinding.parseTrackName(c.name);
      let u = PropertyBinding.findNode(t, h2.nodeName);
      const p = qr[h2.propertyName];
      if (h2.objectName === "bones" && (u.isSkinnedMesh === true ? u = u.skeleton.getBoneByName(h2.objectIndex) : u = void 0), !u || !p)
        return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', c.name), null;
      const f = 1;
      let g = c.values.length / c.times.length;
      p === qr.morphTargetInfluences && (g /= u.morphTargetInfluences.length);
      let m;
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === true ? (m = "CUBICSPLINE", g /= 3) : c.getInterpolation() === InterpolateDiscrete ? m = "STEP" : m = "LINEAR", a.push({
        input: this.processAccessor(new BufferAttribute(c.times, f)),
        output: this.processAccessor(new BufferAttribute(c.values, g)),
        interpolation: m
      }), r.push({
        sampler: a.length - 1,
        target: {
          node: s.get(u),
          path: p
        }
      });
    }
    return n.animations.push({
      name: e.name || "clip_" + n.animations.length,
      samplers: a,
      channels: r
    }), n.animations.length - 1;
  }
  /**
   * @param {THREE.Object3D} object
   * @return {number|null}
   */
  processSkin(e) {
    const t = this.json, n = this.nodeMap, s = t.nodes[n.get(e)], i = e.skeleton;
    if (i === void 0)
      return null;
    const r = e.skeleton.bones[0];
    if (r === void 0)
      return null;
    const a = [], l = new Float32Array(i.bones.length * 16), c = new Matrix4();
    for (let u = 0; u < i.bones.length; ++u)
      a.push(n.get(i.bones[u])), c.copy(i.boneInverses[u]), c.multiply(e.bindMatrix).toArray(l, u * 16);
    return t.skins === void 0 && (t.skins = []), t.skins.push({
      inverseBindMatrices: this.processAccessor(new BufferAttribute(l, 16)),
      joints: a,
      skeleton: n.get(r)
    }), s.skin = t.skins.length - 1;
  }
  /**
   * Process Object3D node
   * @param  {THREE.Object3D} node Object3D to processNode
   * @return {Integer} Index of the node in the nodes list
   */
  processNode(e) {
    const t = this.json, n = this.options, s = this.nodeMap;
    t.nodes || (t.nodes = []);
    const i = {};
    if (n.trs) {
      const a = e.quaternion.toArray(), l = e.position.toArray(), c = e.scale.toArray();
      ys(a, [0, 0, 0, 1]) || (i.rotation = a), ys(l, [0, 0, 0]) || (i.translation = l), ys(c, [1, 1, 1]) || (i.scale = c);
    } else
      e.matrixAutoUpdate && e.updateMatrix(), Cc(e.matrix) === false && (i.matrix = e.matrix.elements);
    if (e.name !== "" && (i.name = String(e.name)), this.serializeUserData(e, i), e.isMesh || e.isLine || e.isPoints) {
      const a = this.processMesh(e);
      a !== null && (i.mesh = a);
    } else
      e.isCamera && (i.camera = this.processCamera(e));
    if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
      const a = [];
      for (let l = 0, c = e.children.length; l < c; l++) {
        const h2 = e.children[l];
        if (h2.visible || n.onlyVisible === false) {
          const u = this.processNode(h2);
          u !== null && a.push(u);
        }
      }
      a.length > 0 && (i.children = a);
    }
    this._invokeAll(function(a) {
      a.writeNode && a.writeNode(e, i);
    });
    const r = t.nodes.push(i) - 1;
    return s.set(e, r), r;
  }
  /**
   * Process Scene
   * @param  {Scene} node Scene to process
   */
  processScene(e) {
    const t = this.json, n = this.options;
    t.scenes || (t.scenes = [], t.scene = 0);
    const s = {};
    e.name !== "" && (s.name = e.name), t.scenes.push(s);
    const i = [];
    for (let r = 0, a = e.children.length; r < a; r++) {
      const l = e.children[r];
      if (l.visible || n.onlyVisible === false) {
        const c = this.processNode(l);
        c !== null && i.push(c);
      }
    }
    i.length > 0 && (s.nodes = i), this.serializeUserData(e, s);
  }
  /**
   * Creates a Scene to hold a list of objects and parse it
   * @param  {Array} objects List of objects to process
   */
  processObjects(e) {
    const t = new Scene();
    t.name = "AuxScene";
    for (let n = 0; n < e.length; n++)
      t.children.push(e[n]);
    this.processScene(t);
  }
  /**
   * @param {THREE.Object3D|Array<THREE.Object3D>} input
   */
  processInput(e) {
    const t = this.options;
    e = e instanceof Array ? e : [e], this._invokeAll(function(s) {
      s.beforeParse && s.beforeParse(e);
    });
    const n = [];
    for (let s = 0; s < e.length; s++)
      e[s] instanceof Scene ? this.processScene(e[s]) : n.push(e[s]);
    n.length > 0 && this.processObjects(n);
    for (let s = 0; s < this.skins.length; ++s)
      this.processSkin(this.skins[s]);
    for (let s = 0; s < t.animations.length; ++s)
      this.processAnimation(t.animations[s], e[0]);
    this._invokeAll(function(s) {
      s.afterParse && s.afterParse(e);
    });
  }
  _invokeAll(e) {
    for (let t = 0, n = this.plugins.length; t < n; t++)
      e(this.plugins[t]);
  }
}
class Oc {
  constructor(e) {
    this.writer = e, this.name = "KHR_lights_punctual";
  }
  writeNode(e, t) {
    if (!e.isLight)
      return;
    if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight) {
      console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.", e);
      return;
    }
    const n = this.writer, s = n.json, i = n.extensionsUsed, r = {};
    e.name && (r.name = e.name), r.color = e.color.toArray(), r.intensity = e.intensity, e.isDirectionalLight ? r.type = "directional" : e.isPointLight ? (r.type = "point", e.distance > 0 && (r.range = e.distance)) : e.isSpotLight && (r.type = "spot", e.distance > 0 && (r.range = e.distance), r.spot = {}, r.spot.innerConeAngle = (e.penumbra - 1) * e.angle * -1, r.spot.outerConeAngle = e.angle), e.decay !== void 0 && e.decay !== 2 && console.warn(
      "THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."
    ), e.target && (e.target.parent !== e || e.target.position.x !== 0 || e.target.position.y !== 0 || e.target.position.z !== -1) && console.warn(
      "THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."
    ), i[this.name] || (s.extensions = s.extensions || {}, s.extensions[this.name] = { lights: [] }, i[this.name] = true);
    const a = s.extensions[this.name].lights;
    a.push(r), t.extensions = t.extensions || {}, t.extensions[this.name] = { light: a.length - 1 };
  }
}
let Dc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_unlit";
  }
  writeMaterial(e, t) {
    if (!e.isMeshBasicMaterial)
      return;
    const s = this.writer.extensionsUsed;
    t.extensions = t.extensions || {}, t.extensions[this.name] = {}, s[this.name] = true, t.pbrMetallicRoughness.metallicFactor = 0, t.pbrMetallicRoughness.roughnessFactor = 0.9;
  }
}, Lc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_clearcoat";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.clearcoat === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.clearcoatFactor = e.clearcoat, e.clearcoatMap) {
      const r = {
        index: n.processTexture(e.clearcoatMap),
        texCoord: e.clearcoatMap.channel
      };
      n.applyTextureTransform(r, e.clearcoatMap), i.clearcoatTexture = r;
    }
    if (i.clearcoatRoughnessFactor = e.clearcoatRoughness, e.clearcoatRoughnessMap) {
      const r = {
        index: n.processTexture(e.clearcoatRoughnessMap),
        texCoord: e.clearcoatRoughnessMap.channel
      };
      n.applyTextureTransform(r, e.clearcoatRoughnessMap), i.clearcoatRoughnessTexture = r;
    }
    if (e.clearcoatNormalMap) {
      const r = {
        index: n.processTexture(e.clearcoatNormalMap),
        texCoord: e.clearcoatNormalMap.channel
      };
      n.applyTextureTransform(r, e.clearcoatNormalMap), i.clearcoatNormalTexture = r;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Fc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_iridescence";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.iridescence === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.iridescenceFactor = e.iridescence, e.iridescenceMap) {
      const r = {
        index: n.processTexture(e.iridescenceMap),
        texCoord: e.iridescenceMap.channel
      };
      n.applyTextureTransform(r, e.iridescenceMap), i.iridescenceTexture = r;
    }
    if (i.iridescenceIor = e.iridescenceIOR, i.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], i.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1], e.iridescenceThicknessMap) {
      const r = {
        index: n.processTexture(e.iridescenceThicknessMap),
        texCoord: e.iridescenceThicknessMap.channel
      };
      n.applyTextureTransform(r, e.iridescenceThicknessMap), i.iridescenceThicknessTexture = r;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, kc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_transmission";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.transmissionFactor = e.transmission, e.transmissionMap) {
      const r = {
        index: n.processTexture(e.transmissionMap),
        texCoord: e.transmissionMap.channel
      };
      n.applyTextureTransform(r, e.transmissionMap), i.transmissionTexture = r;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Bc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_volume";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.thicknessFactor = e.thickness, e.thicknessMap) {
      const r = {
        index: n.processTexture(e.thicknessMap),
        texCoord: e.thicknessMap.channel
      };
      n.applyTextureTransform(r, e.thicknessMap), i.thicknessTexture = r;
    }
    i.attenuationDistance = e.attenuationDistance, i.attenuationColor = e.attenuationColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Nc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_ior";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.ior === 1.5)
      return;
    const s = this.writer.extensionsUsed, i = {};
    i.ior = e.ior, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Uc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_specular";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.specularIntensity === 1 && e.specularColor.equals(bc) && !e.specularIntensityMap && !e.specularColorTexture)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.specularIntensityMap) {
      const r = {
        index: n.processTexture(e.specularIntensityMap),
        texCoord: e.specularIntensityMap.channel
      };
      n.applyTextureTransform(r, e.specularIntensityMap), i.specularTexture = r;
    }
    if (e.specularColorMap) {
      const r = {
        index: n.processTexture(e.specularColorMap),
        texCoord: e.specularColorMap.channel
      };
      n.applyTextureTransform(r, e.specularColorMap), i.specularColorTexture = r;
    }
    i.specularFactor = e.specularIntensity, i.specularColorFactor = e.specularColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, zc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_sheen";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.sheen == 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.sheenRoughnessMap) {
      const r = {
        index: n.processTexture(e.sheenRoughnessMap),
        texCoord: e.sheenRoughnessMap.channel
      };
      n.applyTextureTransform(r, e.sheenRoughnessMap), i.sheenRoughnessTexture = r;
    }
    if (e.sheenColorMap) {
      const r = {
        index: n.processTexture(e.sheenColorMap),
        texCoord: e.sheenColorMap.channel
      };
      n.applyTextureTransform(r, e.sheenColorMap), i.sheenColorTexture = r;
    }
    i.sheenRoughnessFactor = e.sheenRoughness, i.sheenColorFactor = e.sheenColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Hc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_anisotropy";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.anisotropy == 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.anisotropyMap) {
      const r = { index: n.processTexture(e.anisotropyMap) };
      n.applyTextureTransform(r, e.anisotropyMap), i.anisotropyTexture = r;
    }
    i.anisotropyStrength = e.anisotropy, i.anisotropyRotation = e.anisotropyRotation, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Gc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_emissive_strength";
  }
  writeMaterial(e, t) {
    if (!e.isMeshStandardMaterial || e.emissiveIntensity === 1)
      return;
    const s = this.writer.extensionsUsed, i = {};
    i.emissiveStrength = e.emissiveIntensity, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var St = Uint8Array, bn = Uint16Array, hr = Uint32Array, Ra = new St([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Ia = new St([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Oa = function(o, e) {
  for (var t = new bn(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << o[n - 1];
  for (var s = new hr(t[30]), n = 1; n < 30; ++n)
    for (var i = t[n]; i < t[n + 1]; ++i)
      s[i] = i - t[n] << 5 | n;
  return [t, s];
}, Da = Oa(Ra, 2), La = Da[0], Vc = Da[1];
La[28] = 258, Vc[258] = 28;
Oa(Ia, 0);
var fr = new bn(32768);
for (var Ye = 0; Ye < 32768; ++Ye) {
  var fn = (Ye & 43690) >>> 1 | (Ye & 21845) << 1;
  fn = (fn & 52428) >>> 2 | (fn & 13107) << 2, fn = (fn & 61680) >>> 4 | (fn & 3855) << 4, fr[Ye] = ((fn & 65280) >>> 8 | (fn & 255) << 8) >>> 1;
}
var Cs = new St(288);
for (var Ye = 0; Ye < 144; ++Ye)
  Cs[Ye] = 8;
for (var Ye = 144; Ye < 256; ++Ye)
  Cs[Ye] = 9;
for (var Ye = 256; Ye < 280; ++Ye)
  Cs[Ye] = 7;
for (var Ye = 280; Ye < 288; ++Ye)
  Cs[Ye] = 8;
var Fa = new St(32);
for (var Ye = 0; Ye < 32; ++Ye)
  Fa[Ye] = 5;
var Qc = /* @__PURE__ */ new St(0);
var tu = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), nu = 0;
try {
  tu.decode(Qc, { stream: true }), nu = 1;
} catch {
}
var su = Object.defineProperty, iu = (o, e, t) => e in o ? su(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, ru = (o, e, t) => (iu(o, e + "", t), t);
const ka = class extends Mesh {
  constructor(o, e = {}) {
    super(o), this.isReflector = true, this.type = "Reflector", this.camera = new PerspectiveCamera();
    const t = this, n = e.color !== void 0 ? new Color(e.color) : new Color(8355711), s = e.textureWidth || 512, i = e.textureHeight || 512, r = e.clipBias || 0, a = e.shader || ka.ReflectorShader, l = e.multisample !== void 0 ? e.multisample : 4, c = new Plane(), h2 = new Vector3(), u = new Vector3(), p = new Vector3(), f = new Matrix4(), g = new Vector3(0, 0, -1), m = new Vector4(), y = new Vector3(), d = new Vector3(), w = new Vector4(), v = new Matrix4(), E = this.camera, P = new WebGLRenderTarget(s, i, {
      samples: l,
      type: HalfFloatType
    }), T = new ShaderMaterial({
      uniforms: UniformsUtils.clone(a.uniforms),
      fragmentShader: a.fragmentShader,
      vertexShader: a.vertexShader
    });
    T.uniforms.tDiffuse.value = P.texture, T.uniforms.color.value = n, T.uniforms.textureMatrix.value = v, this.material = T, this.onBeforeRender = function(b, x, M) {
      if (u.setFromMatrixPosition(t.matrixWorld), p.setFromMatrixPosition(M.matrixWorld), f.extractRotation(t.matrixWorld), h2.set(0, 0, 1), h2.applyMatrix4(f), y.subVectors(u, p), y.dot(h2) > 0)
        return;
      y.reflect(h2).negate(), y.add(u), f.extractRotation(M.matrixWorld), g.set(0, 0, -1), g.applyMatrix4(f), g.add(p), d.subVectors(u, g), d.reflect(h2).negate(), d.add(u), E.position.copy(y), E.up.set(0, 1, 0), E.up.applyMatrix4(f), E.up.reflect(h2), E.lookAt(d), E.far = M.far, E.updateMatrixWorld(), E.projectionMatrix.copy(M.projectionMatrix), v.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), v.multiply(E.projectionMatrix), v.multiply(E.matrixWorldInverse), v.multiply(t.matrixWorld), c.setFromNormalAndCoplanarPoint(h2, u), c.applyMatrix4(E.matrixWorldInverse), m.set(c.normal.x, c.normal.y, c.normal.z, c.constant);
      const _ = E.projectionMatrix;
      w.x = (Math.sign(m.x) + _.elements[8]) / _.elements[0], w.y = (Math.sign(m.y) + _.elements[9]) / _.elements[5], w.z = -1, w.w = (1 + _.elements[10]) / _.elements[14], m.multiplyScalar(2 / m.dot(w)), _.elements[2] = m.x, _.elements[6] = m.y, _.elements[10] = m.z + 1 - r, _.elements[14] = m.w, t.visible = false;
      const C = b.getRenderTarget(), R = b.xr.enabled, B = b.shadowMap.autoUpdate, N2 = b.toneMapping;
      let j = false;
      "outputColorSpace" in b ? j = b.outputColorSpace === "srgb" : j = b.outputEncoding === 3001, b.xr.enabled = false, b.shadowMap.autoUpdate = false, "outputColorSpace" in b ? b.outputColorSpace = "srgb-linear" : b.outputEncoding = 3e3, b.toneMapping = NoToneMapping, b.setRenderTarget(P), b.state.buffers.depth.setMask(true), b.autoClear === false && b.clear(), b.render(x, E), b.xr.enabled = R, b.shadowMap.autoUpdate = B, b.toneMapping = N2, "outputColorSpace" in b ? b.outputColorSpace = j ? "srgb" : "srgb-linear" : b.outputEncoding = j ? 3001 : 3e3, b.setRenderTarget(C);
      const V = M.viewport;
      V !== void 0 && b.state.viewport(V), t.visible = true;
    }, this.getRenderTarget = function() {
      return P;
    }, this.dispose = function() {
      P.dispose(), t.material.dispose();
    };
  }
};
let dr = ka;
ru(dr, "ReflectorShader", {
  uniforms: {
    color: {
      value: null
    },
    tDiffuse: {
      value: null
    },
    textureMatrix: {
      value: null
    }
  },
  vertexShader: (
    /* glsl */
    `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <${gi >= 154 ? "colorspace_fragment" : "encodings_fragment"}>

		}`
  )
});
var au = Object.defineProperty, lu = (o, e, t) => e in o ? au(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, Ba = (o, e, t) => (lu(o, typeof e != "symbol" ? e + "" : e, t), t);
const ri = {
  uniforms: {
    turbidity: { value: 2 },
    rayleigh: { value: 1 },
    mieCoefficient: { value: 5e-3 },
    mieDirectionalG: { value: 0.8 },
    sunPosition: { value: new Vector3() },
    up: { value: new Vector3(0, 1, 0) }
  },
  vertexShader: (
    /* glsl */
    `
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `
  ),
  fragmentShader: (
    /* glsl */
    `
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${gi >= 154 ? "colorspace_fragment" : "encodings_fragment"}>

      }
    `
  )
}, Na = new ShaderMaterial({
  name: "SkyShader",
  fragmentShader: ri.fragmentShader,
  vertexShader: ri.vertexShader,
  uniforms: UniformsUtils.clone(ri.uniforms),
  side: BackSide,
  depthWrite: false
});
class Rr extends Mesh {
  constructor() {
    super(new BoxGeometry(1, 1, 1), Na);
  }
}
Ba(Rr, "SkyShader", ri);
Ba(Rr, "material", Na);
new Triangle();
new Vector3();
new Euler(0, 0, 0, "YXZ");
new Vector3();
var xu = Object.defineProperty, wu = (o, e, t) => e in o ? xu(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, xe = (o, e, t) => (wu(o, typeof e != "symbol" ? e + "" : e, t), t);
const Vs = new Ray(), so = new Plane(), Tu = Math.cos(70 * (Math.PI / 180)), io = (o, e) => (o % e + e) % e;
class za extends EventDispatcher {
  constructor(e, t) {
    super(), xe(this, "object"), xe(this, "domElement"), xe(this, "enabled", true), xe(this, "target", new Vector3()), xe(this, "minDistance", 0), xe(this, "maxDistance", 1 / 0), xe(this, "minZoom", 0), xe(this, "maxZoom", 1 / 0), xe(this, "minPolarAngle", 0), xe(this, "maxPolarAngle", Math.PI), xe(this, "minAzimuthAngle", -1 / 0), xe(this, "maxAzimuthAngle", 1 / 0), xe(this, "enableDamping", false), xe(this, "dampingFactor", 0.05), xe(this, "enableZoom", true), xe(this, "zoomSpeed", 1), xe(this, "enableRotate", true), xe(this, "rotateSpeed", 1), xe(this, "enablePan", true), xe(this, "panSpeed", 1), xe(this, "screenSpacePanning", true), xe(this, "keyPanSpeed", 7), xe(this, "zoomToCursor", false), xe(this, "autoRotate", false), xe(this, "autoRotateSpeed", 2), xe(this, "reverseOrbit", false), xe(this, "reverseHorizontalOrbit", false), xe(this, "reverseVerticalOrbit", false), xe(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), xe(this, "mouseButtons", {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    }), xe(this, "touches", { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }), xe(this, "target0"), xe(this, "position0"), xe(this, "zoom0"), xe(this, "_domElementKeyEvents", null), xe(this, "getPolarAngle"), xe(this, "getAzimuthalAngle"), xe(this, "setPolarAngle"), xe(this, "setAzimuthalAngle"), xe(this, "getDistance"), xe(this, "listenToKeyEvents"), xe(this, "stopListenToKeyEvents"), xe(this, "saveState"), xe(this, "reset"), xe(this, "update"), xe(this, "connect"), xe(this, "dispose"), this.object = e, this.domElement = t, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => h2.phi, this.getAzimuthalAngle = () => h2.theta, this.setPolarAngle = (W) => {
      let re = io(W, 2 * Math.PI), be2 = h2.phi;
      be2 < 0 && (be2 += 2 * Math.PI), re < 0 && (re += 2 * Math.PI);
      let Be = Math.abs(re - be2);
      2 * Math.PI - Be < Be && (re < be2 ? re += 2 * Math.PI : be2 += 2 * Math.PI), u.phi = re - be2, n.update();
    }, this.setAzimuthalAngle = (W) => {
      let re = io(W, 2 * Math.PI), be2 = h2.theta;
      be2 < 0 && (be2 += 2 * Math.PI), re < 0 && (re += 2 * Math.PI);
      let Be = Math.abs(re - be2);
      2 * Math.PI - Be < Be && (re < be2 ? re += 2 * Math.PI : be2 += 2 * Math.PI), u.theta = re - be2, n.update();
    }, this.getDistance = () => n.object.position.distanceTo(n.target), this.listenToKeyEvents = (W) => {
      W.addEventListener("keydown", ln), this._domElementKeyEvents = W;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", ln), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = () => {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(s), n.update(), l = a.NONE;
    }, this.update = (() => {
      const W = new Vector3(), re = new Vector3(0, 1, 0), be2 = new Quaternion().setFromUnitVectors(e.up, re), Be = be2.clone().invert(), Je2 = new Vector3(), Wt = new Quaternion(), un2 = 2 * Math.PI;
      return function() {
        const Vr = n.object.position;
        be2.setFromUnitVectors(e.up, re), Be.copy(be2).invert(), W.copy(Vr).sub(n.target), W.applyQuaternion(be2), h2.setFromVector3(W), n.autoRotate && l === a.NONE && N2(R()), n.enableDamping ? (h2.theta += u.theta * n.dampingFactor, h2.phi += u.phi * n.dampingFactor) : (h2.theta += u.theta, h2.phi += u.phi);
        let $t = n.minAzimuthAngle, Zt = n.maxAzimuthAngle;
        isFinite($t) && isFinite(Zt) && ($t < -Math.PI ? $t += un2 : $t > Math.PI && ($t -= un2), Zt < -Math.PI ? Zt += un2 : Zt > Math.PI && (Zt -= un2), $t <= Zt ? h2.theta = Math.max($t, Math.min(Zt, h2.theta)) : h2.theta = h2.theta > ($t + Zt) / 2 ? Math.max($t, h2.theta) : Math.min(Zt, h2.theta)), h2.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, h2.phi)), h2.makeSafe(), n.enableDamping === true ? n.target.addScaledVector(f, n.dampingFactor) : n.target.add(f), n.zoomToCursor && M || n.object.isOrthographicCamera ? h2.radius = ae2(h2.radius) : h2.radius = ae2(h2.radius * p), W.setFromSpherical(h2), W.applyQuaternion(Be), Vr.copy(n.target).add(W), n.object.matrixAutoUpdate || n.object.updateMatrix(), n.object.lookAt(n.target), n.enableDamping === true ? (u.theta *= 1 - n.dampingFactor, u.phi *= 1 - n.dampingFactor, f.multiplyScalar(1 - n.dampingFactor)) : (u.set(0, 0, 0), f.set(0, 0, 0));
        let is = false;
        if (n.zoomToCursor && M) {
          let rs = null;
          if (n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera) {
            const os = W.length();
            rs = ae2(os * p);
            const ks = os - rs;
            n.object.position.addScaledVector(b, ks), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const os = new Vector3(x.x, x.y, 0);
            os.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / p)), n.object.updateProjectionMatrix(), is = true;
            const ks = new Vector3(x.x, x.y, 0);
            ks.unproject(n.object), n.object.position.sub(ks).add(os), n.object.updateMatrixWorld(), rs = W.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = false;
          rs !== null && (n.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(rs).add(n.object.position) : (Vs.origin.copy(n.object.position), Vs.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Vs.direction)) < Tu ? e.lookAt(n.target) : (so.setFromNormalAndCoplanarPoint(n.object.up, n.target), Vs.intersectPlane(so, n.target))));
        } else
          n.object instanceof OrthographicCamera && n.object.isOrthographicCamera && (is = p !== 1, is && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / p)), n.object.updateProjectionMatrix()));
        return p = 1, M = false, is || Je2.distanceToSquared(n.object.position) > c || 8 * (1 - Wt.dot(n.object.quaternion)) > c ? (n.dispatchEvent(s), Je2.copy(n.object.position), Wt.copy(n.object.quaternion), is = false, true) : false;
      };
    })(), this.connect = (W) => {
      n.domElement = W, n.domElement.style.touchAction = "none", n.domElement.addEventListener("contextmenu", wt), n.domElement.addEventListener("pointerdown", pe2), n.domElement.addEventListener("pointercancel", Ve2), n.domElement.addEventListener("wheel", Xt);
    }, this.dispose = () => {
      var W, re, be2, Be, Je2, Wt;
      n.domElement && (n.domElement.style.touchAction = "auto"), (W = n.domElement) == null || W.removeEventListener("contextmenu", wt), (re = n.domElement) == null || re.removeEventListener("pointerdown", pe2), (be2 = n.domElement) == null || be2.removeEventListener("pointercancel", Ve2), (Be = n.domElement) == null || Be.removeEventListener("wheel", Xt), (Je2 = n.domElement) == null || Je2.ownerDocument.removeEventListener("pointermove", Ae2), (Wt = n.domElement) == null || Wt.ownerDocument.removeEventListener("pointerup", Ve2), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", ln);
    };
    const n = this, s = { type: "change" }, i = { type: "start" }, r = { type: "end" }, a = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let l = a.NONE;
    const c = 1e-6, h2 = new Spherical(), u = new Spherical();
    let p = 1;
    const f = new Vector3(), g = new Vector2(), m = new Vector2(), y = new Vector2(), d = new Vector2(), w = new Vector2(), v = new Vector2(), E = new Vector2(), P = new Vector2(), T = new Vector2(), b = new Vector3(), x = new Vector2();
    let M = false;
    const _ = [], C = {};
    function R() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function B() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function N2(W) {
      n.reverseOrbit || n.reverseHorizontalOrbit ? u.theta += W : u.theta -= W;
    }
    function j(W) {
      n.reverseOrbit || n.reverseVerticalOrbit ? u.phi += W : u.phi -= W;
    }
    const V = (() => {
      const W = new Vector3();
      return function(be2, Be) {
        W.setFromMatrixColumn(Be, 0), W.multiplyScalar(-be2), f.add(W);
      };
    })(), Q2 = (() => {
      const W = new Vector3();
      return function(be2, Be) {
        n.screenSpacePanning === true ? W.setFromMatrixColumn(Be, 1) : (W.setFromMatrixColumn(Be, 0), W.crossVectors(n.object.up, W)), W.multiplyScalar(be2), f.add(W);
      };
    })(), Z = (() => {
      const W = new Vector3();
      return function(be2, Be) {
        const Je2 = n.domElement;
        if (Je2 && n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera) {
          const Wt = n.object.position;
          W.copy(Wt).sub(n.target);
          let un2 = W.length();
          un2 *= Math.tan(n.object.fov / 2 * Math.PI / 180), V(2 * be2 * un2 / Je2.clientHeight, n.object.matrix), Q2(2 * Be * un2 / Je2.clientHeight, n.object.matrix);
        } else
          Je2 && n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? (V(
            be2 * (n.object.right - n.object.left) / n.object.zoom / Je2.clientWidth,
            n.object.matrix
          ), Q2(
            Be * (n.object.top - n.object.bottom) / n.object.zoom / Je2.clientHeight,
            n.object.matrix
          )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = false);
      };
    })();
    function ne(W) {
      n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera || n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? p /= W : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function te2(W) {
      n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera || n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? p *= W : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function le(W) {
      if (!n.zoomToCursor || !n.domElement)
        return;
      M = true;
      const re = n.domElement.getBoundingClientRect(), be2 = W.clientX - re.left, Be = W.clientY - re.top, Je2 = re.width, Wt = re.height;
      x.x = be2 / Je2 * 2 - 1, x.y = -(Be / Wt) * 2 + 1, b.set(x.x, x.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function ae2(W) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, W));
    }
    function Te(W) {
      g.set(W.clientX, W.clientY);
    }
    function I(W) {
      le(W), E.set(W.clientX, W.clientY);
    }
    function k(W) {
      d.set(W.clientX, W.clientY);
    }
    function D(W) {
      m.set(W.clientX, W.clientY), y.subVectors(m, g).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      re && (N2(2 * Math.PI * y.x / re.clientHeight), j(2 * Math.PI * y.y / re.clientHeight)), g.copy(m), n.update();
    }
    function O(W) {
      P.set(W.clientX, W.clientY), T.subVectors(P, E), T.y > 0 ? ne(B()) : T.y < 0 && te2(B()), E.copy(P), n.update();
    }
    function z2(W) {
      w.set(W.clientX, W.clientY), v.subVectors(w, d).multiplyScalar(n.panSpeed), Z(v.x, v.y), d.copy(w), n.update();
    }
    function S(W) {
      le(W), W.deltaY < 0 ? te2(B()) : W.deltaY > 0 && ne(B()), n.update();
    }
    function A(W) {
      let re = false;
      switch (W.code) {
        case n.keys.UP:
          Z(0, n.keyPanSpeed), re = true;
          break;
        case n.keys.BOTTOM:
          Z(0, -n.keyPanSpeed), re = true;
          break;
        case n.keys.LEFT:
          Z(n.keyPanSpeed, 0), re = true;
          break;
        case n.keys.RIGHT:
          Z(-n.keyPanSpeed, 0), re = true;
          break;
      }
      re && (W.preventDefault(), n.update());
    }
    function L() {
      if (_.length == 1)
        g.set(_[0].pageX, _[0].pageY);
      else {
        const W = 0.5 * (_[0].pageX + _[1].pageX), re = 0.5 * (_[0].pageY + _[1].pageY);
        g.set(W, re);
      }
    }
    function X() {
      if (_.length == 1)
        d.set(_[0].pageX, _[0].pageY);
      else {
        const W = 0.5 * (_[0].pageX + _[1].pageX), re = 0.5 * (_[0].pageY + _[1].pageY);
        d.set(W, re);
      }
    }
    function H() {
      const W = _[0].pageX - _[1].pageX, re = _[0].pageY - _[1].pageY, be2 = Math.sqrt(W * W + re * re);
      E.set(0, be2);
    }
    function G2() {
      n.enableZoom && H(), n.enablePan && X();
    }
    function q() {
      n.enableZoom && H(), n.enableRotate && L();
    }
    function se2(W) {
      if (_.length == 1)
        m.set(W.pageX, W.pageY);
      else {
        const be2 = ss(W), Be = 0.5 * (W.pageX + be2.x), Je2 = 0.5 * (W.pageY + be2.y);
        m.set(Be, Je2);
      }
      y.subVectors(m, g).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      re && (N2(2 * Math.PI * y.x / re.clientHeight), j(2 * Math.PI * y.y / re.clientHeight)), g.copy(m);
    }
    function ie2(W) {
      if (_.length == 1)
        w.set(W.pageX, W.pageY);
      else {
        const re = ss(W), be2 = 0.5 * (W.pageX + re.x), Be = 0.5 * (W.pageY + re.y);
        w.set(be2, Be);
      }
      v.subVectors(w, d).multiplyScalar(n.panSpeed), Z(v.x, v.y), d.copy(w);
    }
    function Y2(W) {
      const re = ss(W), be2 = W.pageX - re.x, Be = W.pageY - re.y, Je2 = Math.sqrt(be2 * be2 + Be * Be);
      P.set(0, Je2), T.set(0, Math.pow(P.y / E.y, n.zoomSpeed)), ne(T.y), E.copy(P);
    }
    function F(W) {
      n.enableZoom && Y2(W), n.enablePan && ie2(W);
    }
    function oe2(W) {
      n.enableZoom && Y2(W), n.enableRotate && se2(W);
    }
    function pe2(W) {
      var re, be2;
      n.enabled !== false && (_.length === 0 && ((re = n.domElement) == null || re.ownerDocument.addEventListener("pointermove", Ae2), (be2 = n.domElement) == null || be2.ownerDocument.addEventListener("pointerup", Ve2)), Ds(W), W.pointerType === "touch" ? cn2(W) : We2(W));
    }
    function Ae2(W) {
      n.enabled !== false && (W.pointerType === "touch" ? gt2(W) : xt(W));
    }
    function Ve2(W) {
      var re, be2, Be;
      Ls(W), _.length === 0 && ((re = n.domElement) == null || re.releasePointerCapture(W.pointerId), (be2 = n.domElement) == null || be2.ownerDocument.removeEventListener("pointermove", Ae2), (Be = n.domElement) == null || Be.ownerDocument.removeEventListener("pointerup", Ve2)), n.dispatchEvent(r), l = a.NONE;
    }
    function We2(W) {
      let re;
      switch (W.button) {
        case 0:
          re = n.mouseButtons.LEFT;
          break;
        case 1:
          re = n.mouseButtons.MIDDLE;
          break;
        case 2:
          re = n.mouseButtons.RIGHT;
          break;
        default:
          re = -1;
      }
      switch (re) {
        case MOUSE.DOLLY:
          if (n.enableZoom === false)
            return;
          I(W), l = a.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (W.ctrlKey || W.metaKey || W.shiftKey) {
            if (n.enablePan === false)
              return;
            k(W), l = a.PAN;
          } else {
            if (n.enableRotate === false)
              return;
            Te(W), l = a.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (W.ctrlKey || W.metaKey || W.shiftKey) {
            if (n.enableRotate === false)
              return;
            Te(W), l = a.ROTATE;
          } else {
            if (n.enablePan === false)
              return;
            k(W), l = a.PAN;
          }
          break;
        default:
          l = a.NONE;
      }
      l !== a.NONE && n.dispatchEvent(i);
    }
    function xt(W) {
      if (n.enabled !== false)
        switch (l) {
          case a.ROTATE:
            if (n.enableRotate === false)
              return;
            D(W);
            break;
          case a.DOLLY:
            if (n.enableZoom === false)
              return;
            O(W);
            break;
          case a.PAN:
            if (n.enablePan === false)
              return;
            z2(W);
            break;
        }
    }
    function Xt(W) {
      n.enabled === false || n.enableZoom === false || l !== a.NONE && l !== a.ROTATE || (W.preventDefault(), n.dispatchEvent(i), S(W), n.dispatchEvent(r));
    }
    function ln(W) {
      n.enabled === false || n.enablePan === false || A(W);
    }
    function cn2(W) {
      switch (Fs(W), _.length) {
        case 1:
          switch (n.touches.ONE) {
            case TOUCH.ROTATE:
              if (n.enableRotate === false)
                return;
              L(), l = a.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (n.enablePan === false)
                return;
              X(), l = a.TOUCH_PAN;
              break;
            default:
              l = a.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (n.enableZoom === false && n.enablePan === false)
                return;
              G2(), l = a.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (n.enableZoom === false && n.enableRotate === false)
                return;
              q(), l = a.TOUCH_DOLLY_ROTATE;
              break;
            default:
              l = a.NONE;
          }
          break;
        default:
          l = a.NONE;
      }
      l !== a.NONE && n.dispatchEvent(i);
    }
    function gt2(W) {
      switch (Fs(W), l) {
        case a.TOUCH_ROTATE:
          if (n.enableRotate === false)
            return;
          se2(W), n.update();
          break;
        case a.TOUCH_PAN:
          if (n.enablePan === false)
            return;
          ie2(W), n.update();
          break;
        case a.TOUCH_DOLLY_PAN:
          if (n.enableZoom === false && n.enablePan === false)
            return;
          F(W), n.update();
          break;
        case a.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === false && n.enableRotate === false)
            return;
          oe2(W), n.update();
          break;
        default:
          l = a.NONE;
      }
    }
    function wt(W) {
      n.enabled !== false && W.preventDefault();
    }
    function Ds(W) {
      _.push(W);
    }
    function Ls(W) {
      delete C[W.pointerId];
      for (let re = 0; re < _.length; re++)
        if (_[re].pointerId == W.pointerId) {
          _.splice(re, 1);
          return;
        }
    }
    function Fs(W) {
      let re = C[W.pointerId];
      re === void 0 && (re = new Vector2(), C[W.pointerId] = re), re.set(W.pageX, W.pageY);
    }
    function ss(W) {
      const re = W.pointerId === _[0].pointerId ? _[1] : _[0];
      return C[re.pointerId];
    }
    t !== void 0 && this.connect(t), this.update();
  }
}
new Vector3();
new Euler();
new Vector3();
var Xu = Object.defineProperty, Wu = (o, e, t) => e in o ? Xu(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, Ir = (o, e, t) => (Wu(o, typeof e != "symbol" ? e + "" : e, t), t);
class Or {
  constructor(e) {
    Ir(this, "data"), this.data = e;
  }
  generateShapes(e, t = 100, n) {
    const s = [], i = { letterSpacing: 0, lineHeight: 1, ...n }, r = Zu(e, t, this.data, i);
    for (let a = 0, l = r.length; a < l; a++)
      Array.prototype.push.apply(s, r[a].toShapes(false));
    return s;
  }
}
Ir(Or, "isFont");
Ir(Or, "type");
function Zu(o, e, t, n) {
  const s = Array.from(o), i = e / t.resolution, r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, a = [];
  let l = 0, c = 0;
  for (let h2 = 0; h2 < s.length; h2++) {
    const u = s[h2];
    if (u === `
`)
      l = 0, c -= r * n.lineHeight;
    else {
      const p = Ku(u, i, l, c, t);
      p && (l += p.offsetX + n.letterSpacing, a.push(p.path));
    }
  }
  return a;
}
function Ku(o, e, t, n, s) {
  const i = s.glyphs[o] || s.glyphs["?"];
  if (!i) {
    console.error('THREE.Font: character "' + o + '" does not exists in font family ' + s.familyName + ".");
    return;
  }
  const r = new ShapePath();
  let a, l, c, h2, u, p, f, g;
  if (i.o) {
    const m = i._cachedOutline || (i._cachedOutline = i.o.split(" "));
    for (let y = 0, d = m.length; y < d; )
      switch (m[y++]) {
        case "m":
          a = parseInt(m[y++]) * e + t, l = parseInt(m[y++]) * e + n, r.moveTo(a, l);
          break;
        case "l":
          a = parseInt(m[y++]) * e + t, l = parseInt(m[y++]) * e + n, r.lineTo(a, l);
          break;
        case "q":
          c = parseInt(m[y++]) * e + t, h2 = parseInt(m[y++]) * e + n, u = parseInt(m[y++]) * e + t, p = parseInt(m[y++]) * e + n, r.quadraticCurveTo(u, p, c, h2);
          break;
        case "b":
          c = parseInt(m[y++]) * e + t, h2 = parseInt(m[y++]) * e + n, u = parseInt(m[y++]) * e + t, p = parseInt(m[y++]) * e + n, f = parseInt(m[y++]) * e + t, g = parseInt(m[y++]) * e + n, r.bezierCurveTo(u, p, f, g, c, h2);
          break;
      }
  }
  return { offsetX: i.ha * e, path: r };
}
const Oi = /* @__PURE__ */ new WeakMap();
class Qu extends Loader {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, s) {
    const i = new FileLoader(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      (r) => {
        const a = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: false
        };
        this.decodeGeometry(r, a).then(t).catch(s);
      },
      n,
      s
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(e, t, n, s) {
    const i = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: s || this.defaultAttributeTypes,
      useUniqueIDs: !!n
    };
    this.decodeGeometry(e, i).then(t);
  }
  decodeGeometry(e, t) {
    for (const l in t.attributeTypes) {
      const c = t.attributeTypes[l];
      c.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[l] = c.name);
    }
    const n = JSON.stringify(t);
    if (Oi.has(e)) {
      const l = Oi.get(e);
      if (l.key === n)
        return l.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let s;
    const i = this.workerNextTaskID++, r = e.byteLength, a = this._getWorker(i, r).then((l) => (s = l, new Promise((c, h2) => {
      s._callbacks[i] = { resolve: c, reject: h2 }, s.postMessage({ type: "decode", id: i, taskConfig: t, buffer: e }, [e]);
    }))).then((l) => this._createGeometry(l.geometry));
    return a.catch(() => true).then(() => {
      s && i && this._releaseTask(s, i);
    }), Oi.set(e, {
      key: n,
      promise: a
    }), a;
  }
  _createGeometry(e) {
    const t = new BufferGeometry();
    e.index && t.setIndex(new BufferAttribute(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const s = e.attributes[n], i = s.name, r = s.array, a = s.itemSize;
      t.setAttribute(i, new BufferAttribute(r, a));
    }
    return t;
  }
  _loadLibrary(e, t) {
    const n = new FileLoader(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((s, i) => {
      n.load(e, s, void 0, i);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const s = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const i = Ju.toString(), r = [
        "/* draco decoder */",
        s,
        "",
        "/* worker */",
        i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const s = new Worker(this.workerSourceURL);
        s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({ type: "init", decoderConfig: this.decoderConfig }), s.onmessage = function(i) {
          const r = i.data;
          switch (r.type) {
            case "decode":
              s._callbacks[r.id].resolve(r);
              break;
            case "error":
              s._callbacks[r.id].reject(r);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"');
          }
        }, this.workerPool.push(s);
      } else
        this.workerPool.sort(function(s, i) {
          return s._taskLoad > i._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this;
  }
}
function Ju() {
  let o, e;
  onmessage = function(r) {
    const a = r.data;
    switch (a.type) {
      case "init":
        o = a.decoderConfig, e = new Promise(function(h2) {
          o.onModuleLoaded = function(u) {
            h2({ draco: u });
          }, DracoDecoderModule(o);
        });
        break;
      case "decode":
        const l = a.buffer, c = a.taskConfig;
        e.then((h2) => {
          const u = h2.draco, p = new u.Decoder(), f = new u.DecoderBuffer();
          f.Init(new Int8Array(l), l.byteLength);
          try {
            const g = t(u, p, f, c), m = g.attributes.map((y) => y.array.buffer);
            g.index && m.push(g.index.array.buffer), self.postMessage({ type: "decode", id: a.id, geometry: g }, m);
          } catch (g) {
            console.error(g), self.postMessage({ type: "error", id: a.id, error: g.message });
          } finally {
            u.destroy(f), u.destroy(p);
          }
        });
        break;
    }
  };
  function t(r, a, l, c) {
    const h2 = c.attributeIDs, u = c.attributeTypes;
    let p, f;
    const g = a.GetEncodedGeometryType(l);
    if (g === r.TRIANGULAR_MESH)
      p = new r.Mesh(), f = a.DecodeBufferToMesh(l, p);
    else if (g === r.POINT_CLOUD)
      p = new r.PointCloud(), f = a.DecodeBufferToPointCloud(l, p);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!f.ok() || p.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + f.error_msg());
    const m = { index: null, attributes: [] };
    for (const y in h2) {
      const d = self[u[y]];
      let w, v;
      if (c.useUniqueIDs)
        v = h2[y], w = a.GetAttributeByUniqueId(p, v);
      else {
        if (v = a.GetAttributeId(p, r[h2[y]]), v === -1)
          continue;
        w = a.GetAttribute(p, v);
      }
      m.attributes.push(s(r, a, p, y, d, w));
    }
    return g === r.TRIANGULAR_MESH && (m.index = n(r, a, p)), r.destroy(p), m;
  }
  function n(r, a, l) {
    const h2 = l.num_faces() * 3, u = h2 * 4, p = r._malloc(u);
    a.GetTrianglesUInt32Array(l, u, p);
    const f = new Uint32Array(r.HEAPF32.buffer, p, h2).slice();
    return r._free(p), { array: f, itemSize: 1 };
  }
  function s(r, a, l, c, h2, u) {
    const p = u.num_components(), g = l.num_points() * p, m = g * h2.BYTES_PER_ELEMENT, y = i(r, h2), d = r._malloc(m);
    a.GetAttributeDataArrayForAllPoints(l, u, y, m, d);
    const w = new h2(r.HEAPF32.buffer, d, g).slice();
    return r._free(d), {
      name: c,
      array: w,
      itemSize: p
    };
  }
  function i(r, a) {
    switch (a) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
const th = ["args", "material-uniforms-color-value"], nh = /* @__PURE__ */ createElementVNode("TresPlaneGeometry", { args: [5, 5] }, null, -1);
/* @__PURE__ */ defineComponent({
  __name: "Reflector",
  props: {
    color: { default: "#333" },
    textureWidth: { default: 512 },
    textureHeight: { default: 512 },
    clipBias: { default: 0 },
    multisample: { default: 4 },
    shader: { default: dr.ReflectorShader }
  },
  setup(o, { expose: e }) {
    const t = o, { extend: n, invalidate: s } = pe(), i = shallowRef();
    n({ Reflector: dr });
    const { color: r, textureWidth: a, textureHeight: l, clipBias: c, multisample: h2, shader: u } = toRefs(t);
    return watch(t, () => s()), e({
      instance: i
    }), (p, f) => (openBlock(), createElementBlock("TresReflector", {
      ref_key: "reflectorRef",
      ref: i,
      args: [void 0, { textureWidth: unref(a), textureHeight: unref(l), clipBias: unref(c), multisample: unref(h2), shader: unref(u) }],
      "material-uniforms-color-value": unref(r)
    }, [
      renderSlot(p.$slots, "default", {}, () => [
        nh
      ])
    ], 8, th));
  }
});
function Dr(o) {
  return getCurrentScope() ? (onScopeDispose(o), true) : false;
}
function lt(o) {
  return typeof o == "function" ? o() : unref(o);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ih = Object.prototype.toString, rh = (o) => ih.call(o) === "[object Object]", An = () => {
};
function En(o) {
  var e;
  const t = lt(o);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const on = void 0;
function He(...o) {
  let e, t, n, s;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([t, n, s] = o, e = on) : [e, t, n, s] = o, !e)
    return An;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const i = [], r = () => {
    i.forEach((h2) => h2()), i.length = 0;
  }, a = (h2, u, p, f) => (h2.addEventListener(u, p, f), () => h2.removeEventListener(u, p, f)), l = watch(
    () => [En(e), lt(s)],
    ([h2, u]) => {
      if (r(), !h2)
        return;
      const p = rh(u) ? { ...u } : u;
      i.push(
        ...t.flatMap((f) => n.map((g) => a(h2, f, g, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), c = () => {
    l(), r();
  };
  return Dr(c), c;
}
defineComponent({
  name: "GlobalAudio",
  props: [
    "src",
    "loop",
    "volume",
    "playbackRate",
    "playTrigger",
    "stopTrigger"
  ],
  async setup(o, { expose: e, emit: t }) {
    var _a, _b;
    var u;
    const { camera: n, renderer: s } = pe(), i = new AudioListener();
    (u = n.value) == null || u.add(i);
    const r = new Audio(i), a = new AudioLoader();
    e({ instance: r }), onUnmounted(() => {
      r && r.disconnect();
    }), watch(() => [o.playbackRate], () => {
      var _a2;
      return r.setPlaybackRate((_a2 = o.playbackRate) != null ? _a2 : 1);
    }, { immediate: true }), watch(() => [o.volume], () => {
      var _a2;
      return r.setVolume((_a2 = o.volume) != null ? _a2 : 0.5);
    }, { immediate: true }), watch(() => [o.loop], () => {
      var _a2;
      return r.setLoop((_a2 = o.loop) != null ? _a2 : false);
    }, { immediate: true }), watch(() => [o.src], async () => {
      const p = await a.loadAsync(o.src);
      r.setBuffer(p);
    }, { immediate: true });
    const c = (void 0).getElementById((_a = o.playTrigger) != null ? _a : "") || s.value.domElement;
    He(c, "click", () => {
      r.isPlaying ? r.pause() : r.play(), t("isPlaying", r.isPlaying);
    });
    const h2 = (void 0).getElementById((_b = o.stopTrigger) != null ? _b : "");
    return h2 && He(h2, "click", () => {
      r.stop(), t("isPlaying", r.isPlaying);
    }), null;
  }
});
class Ms extends Mesh {
  constructor() {
    super(Ms.Geometry, new MeshBasicMaterial({ opacity: 0, transparent: true })), this.isLensflare = true, this.type = "Lensflare", this.frustumCulled = false, this.renderOrder = 1 / 0;
    const e = new Vector3(), t = new Vector3(), n = new FramebufferTexture(16, 16), s = new FramebufferTexture(16, 16);
    let i = UnsignedByteType;
    const r = Ms.Geometry, a = new RawShaderMaterial({
      uniforms: {
        scale: { value: null },
        screenPosition: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`
      ),
      fragmentShader: (
        /* glsl */
        `

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`
      ),
      depthTest: true,
      depthWrite: false,
      transparent: false
    }), l = new RawShaderMaterial({
      uniforms: {
        map: { value: n },
        scale: { value: null },
        screenPosition: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`
      ),
      fragmentShader: (
        /* glsl */
        `

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`
      ),
      depthTest: false,
      depthWrite: false,
      transparent: false
    }), c = new Mesh(r, a), h2 = [], u = Ka.Shader, p = new RawShaderMaterial({
      name: u.name,
      uniforms: {
        map: { value: null },
        occlusionMap: { value: s },
        color: { value: new Color(16777215) },
        scale: { value: new Vector2() },
        screenPosition: { value: new Vector3() }
      },
      vertexShader: u.vertexShader,
      fragmentShader: u.fragmentShader,
      blending: AdditiveBlending,
      transparent: true,
      depthWrite: false
    }), f = new Mesh(r, p);
    this.addElement = function(w) {
      h2.push(w);
    };
    const g = new Vector2(), m = new Vector2(), y = new Box2(), d = new Vector4();
    this.onBeforeRender = function(w, v, E) {
      w.getCurrentViewport(d);
      const P = w.getRenderTarget(), T = P !== null ? P.texture.type : UnsignedByteType;
      i !== T && (n.dispose(), s.dispose(), n.type = s.type = T, i = T);
      const b = d.w / d.z, x = d.z / 2, M = d.w / 2;
      let _ = 16 / d.w;
      if (g.set(_ * b, _), y.min.set(d.x, d.y), y.max.set(d.x + (d.z - 16), d.y + (d.w - 16)), t.setFromMatrixPosition(this.matrixWorld), t.applyMatrix4(E.matrixWorldInverse), !(t.z > 0) && (e.copy(t).applyMatrix4(E.projectionMatrix), m.x = d.x + e.x * x + x - 8, m.y = d.y + e.y * M + M - 8, y.containsPoint(m))) {
        w.copyFramebufferToTexture(n, m);
        let C = a.uniforms;
        C.scale.value = g, C.screenPosition.value = e, w.renderBufferDirect(E, null, r, a, c, null), w.copyFramebufferToTexture(s, m), C = l.uniforms, C.scale.value = g, C.screenPosition.value = e, w.renderBufferDirect(E, null, r, l, c, null);
        const R = -e.x * 2, B = -e.y * 2;
        for (let N2 = 0, j = h2.length; N2 < j; N2++) {
          const V = h2[N2], Q2 = p.uniforms;
          Q2.color.value.copy(V.color), Q2.map.value = V.texture, Q2.screenPosition.value.x = e.x + R * V.distance, Q2.screenPosition.value.y = e.y + B * V.distance, _ = V.size / d.w;
          const Z = d.w / d.z;
          Q2.scale.value.set(_ * Z, _), p.uniformsNeedUpdate = true, w.renderBufferDirect(E, null, r, p, f, null);
        }
      }
    }, this.dispose = function() {
      a.dispose(), l.dispose(), p.dispose(), n.dispose(), s.dispose();
      for (let w = 0, v = h2.length; w < v; w++)
        h2[w].texture.dispose();
    };
  }
}
class Ka {
  constructor(e, t = 1, n = 0, s = new Color(16777215)) {
    this.texture = e, this.size = t, this.distance = n, this.color = s;
  }
}
Ka.Shader = {
  name: "LensflareElementShader",
  uniforms: {
    map: { value: null },
    occlusionMap: { value: null },
    color: { value: null },
    scale: { value: null },
    screenPosition: { value: null }
  },
  vertexShader: (
    /* glsl */
    `

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`
  )
};
Ms.Geometry = function() {
  const o = new BufferGeometry(), e = new Float32Array([
    -1,
    -1,
    0,
    0,
    0,
    1,
    -1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    -1,
    1,
    0,
    0,
    1
  ]), t = new InterleavedBuffer(e, 5);
  return o.setIndex([0, 1, 2, 0, 2, 3]), o.setAttribute("position", new InterleavedBufferAttribute(t, 3, 0, false)), o.setAttribute("uv", new InterleavedBufferAttribute(t, 2, 3, false)), o;
}();
MathUtils.clamp;
MathUtils.lerp;
function _o(o, e) {
  if (e === TrianglesDrawMode)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), o;
  if (e === TriangleFanDrawMode || e === TriangleStripDrawMode) {
    let t = o.getIndex();
    if (t === null) {
      const r = [], a = o.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++)
          r.push(l);
        o.setIndex(r), t = o.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), o;
    }
    const n = t.count - 2, s = [];
    if (e === TriangleFanDrawMode)
      for (let r = 1; r <= n; r++)
        s.push(t.getX(0)), s.push(t.getX(r)), s.push(t.getX(r + 1));
    else
      for (let r = 0; r < n; r++)
        r % 2 === 0 ? (s.push(t.getX(r)), s.push(t.getX(r + 1)), s.push(t.getX(r + 2))) : (s.push(t.getX(r + 2)), s.push(t.getX(r + 1)), s.push(t.getX(r)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = o.clone();
    return i.setIndex(s), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), o;
}
class mf extends Loader {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new xf(t);
    }), this.register(function(t) {
      return new wf(t);
    }), this.register(function(t) {
      return new Rf(t);
    }), this.register(function(t) {
      return new If(t);
    }), this.register(function(t) {
      return new Of(t);
    }), this.register(function(t) {
      return new bf(t);
    }), this.register(function(t) {
      return new Ef(t);
    }), this.register(function(t) {
      return new Mf(t);
    }), this.register(function(t) {
      return new Sf(t);
    }), this.register(function(t) {
      return new _f(t);
    }), this.register(function(t) {
      return new Af(t);
    }), this.register(function(t) {
      return new Tf(t);
    }), this.register(function(t) {
      return new Cf(t);
    }), this.register(function(t) {
      return new Pf(t);
    }), this.register(function(t) {
      return new yf(t);
    }), this.register(function(t) {
      return new Df(t);
    }), this.register(function(t) {
      return new Lf(t);
    });
  }
  load(e, t, n, s) {
    const i = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const c = LoaderUtils.extractUrlBase(e);
      r = LoaderUtils.resolveURL(c, this.path);
    } else
      r = LoaderUtils.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }, l = new FileLoader(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        i.parse(c, r, function(h2) {
          t(h2), i.manager.itemEnd(e);
        }, a);
      } catch (h2) {
        a(h2);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, s) {
    let i;
    const r = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === nl) {
        try {
          r[Ie.KHR_BINARY_GLTF] = new Ff(e);
        } catch (u) {
          s && s(u);
          return;
        }
        i = JSON.parse(r[Ie.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(l.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new $f(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h2 = 0; h2 < this.pluginCallbacks.length; h2++) {
      const u = this.pluginCallbacks[h2](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, r[u.name] = true;
    }
    if (i.extensionsUsed)
      for (let h2 = 0; h2 < i.extensionsUsed.length; ++h2) {
        const u = i.extensionsUsed[h2], p = i.extensionsRequired || [];
        switch (u) {
          case Ie.KHR_MATERIALS_UNLIT:
            r[u] = new vf();
            break;
          case Ie.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new kf(i, this.dracoLoader);
            break;
          case Ie.KHR_TEXTURE_TRANSFORM:
            r[u] = new Bf();
            break;
          case Ie.KHR_MESH_QUANTIZATION:
            r[u] = new Nf();
            break;
          default:
            p.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(r), c.setPlugins(a), c.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, t, s, i);
    });
  }
}
function gf() {
  let o = {};
  return {
    get: function(e) {
      return o[e];
    },
    add: function(e, t) {
      o[e] = t;
    },
    remove: function(e) {
      delete o[e];
    },
    removeAll: function() {
      o = {};
    }
  };
}
const Ie = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class yf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s)
      return s;
    const i = t.json, l = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h2 = new Color(16777215);
    l.color !== void 0 && h2.setRGB(l.color[0], l.color[1], l.color[2], LinearSRGBColorSpace);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new DirectionalLight(h2), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new PointLight(h2), c.distance = u;
        break;
      case "spot":
        c = new SpotLight(h2), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, qt(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class vf {
  constructor() {
    this.name = Ie.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return MeshBasicMaterial;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new Color(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], LinearSRGBColorSpace), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, SRGBColorSpace));
    }
    return Promise.all(s);
  }
}
class _f {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class xf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const a = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Vector2(a, a);
    }
    return Promise.all(i);
  }
}
class wf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class Tf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class bf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = s.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const a = r.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], LinearSRGBColorSpace);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, SRGBColorSpace)), r.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Ef {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
}
class Mf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const a = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Color().setRGB(a[0], a[1], a[2], LinearSRGBColorSpace), Promise.all(i);
  }
}
class Sf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class Af {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const a = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Color().setRGB(a[0], a[1], a[2], LinearSRGBColorSpace), r.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, SRGBColorSpace)), Promise.all(i);
  }
}
class Pf {
  constructor(e) {
    this.parser = e, this.name = Ie.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(i);
  }
}
class Cf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
}
class Rf {
  constructor(e) {
    this.parser = e, this.name = Ie.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
}
class If {
  constructor(e) {
    this.parser = e, this.name = Ie.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], a = s.images[r.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Of {
  constructor(e) {
    this.parser = e, this.name = Ie.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], a = s.images[r.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Df {
  constructor(e) {
    this.name = Ie.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(a) {
        const l = s.byteOffset || 0, c = s.byteLength || 0, h2 = s.count, u = s.byteStride, p = new Uint8Array(a, l, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(h2, u, p, s.mode, s.filter).then(function(f) {
          return f.buffer;
        }) : r.ready.then(function() {
          const f = new ArrayBuffer(h2 * u);
          return r.decodeGltfBuffer(new Uint8Array(f), h2, u, p, s.mode, s.filter), f;
        });
      });
    } else
      return null;
  }
}
class Lf {
  constructor(e) {
    this.name = Ie.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives)
      if (c.mode !== Et.TRIANGLES && c.mode !== Et.TRIANGLE_STRIP && c.mode !== Et.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in r)
      a.push(this.parser.getDependency("accessor", r[c]).then((h2) => (l[c] = h2, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const h2 = c.pop(), u = h2.isGroup ? h2.children : [h2], p = c[0].count, f = [];
      for (const g of u) {
        const m = new Matrix4(), y = new Vector3(), d = new Quaternion(), w = new Vector3(1, 1, 1), v = new InstancedMesh(g.geometry, g.material, p);
        for (let E = 0; E < p; E++)
          l.TRANSLATION && y.fromBufferAttribute(l.TRANSLATION, E), l.ROTATION && d.fromBufferAttribute(l.ROTATION, E), l.SCALE && w.fromBufferAttribute(l.SCALE, E), v.setMatrixAt(E, m.compose(y, d, w));
        for (const E in l)
          if (E === "_COLOR_0") {
            const P = l[E];
            v.instanceColor = new InstancedBufferAttribute(P.array, P.itemSize, P.normalized);
          } else
            E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && g.geometry.setAttribute(E, l[E]);
        Object3D.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), f.push(v);
      }
      return h2.isGroup ? (h2.clear(), h2.add(...f), h2) : f[0];
    }));
  }
}
const nl = "glTF", ls = 12, xo = { JSON: 1313821514, BIN: 5130562 };
class Ff {
  constructor(e) {
    this.name = Ie.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ls), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, true),
      length: t.getUint32(8, true)
    }, this.header.magic !== nl)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - ls, i = new DataView(e, ls);
    let r = 0;
    for (; r < s; ) {
      const a = i.getUint32(r, true);
      r += 4;
      const l = i.getUint32(r, true);
      if (r += 4, l === xo.JSON) {
        const c = new Uint8Array(e, ls + r, a);
        this.content = n.decode(c);
      } else if (l === xo.BIN) {
        const c = ls + r;
        this.body = e.slice(c, c + a);
      }
      r += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class kf {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ie.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const h2 in r) {
      const u = mr[h2] || h2.toLowerCase();
      a[u] = r[h2];
    }
    for (const h2 in e.attributes) {
      const u = mr[h2] || h2.toLowerCase();
      if (r[h2] !== void 0) {
        const p = n.accessors[e.attributes[h2]], f = Jn[p.componentType];
        c[u] = f.name, l[u] = p.normalized === true;
      }
    }
    return t.getDependency("bufferView", i).then(function(h2) {
      return new Promise(function(u, p) {
        s.decodeDracoFile(h2, function(f) {
          for (const g in f.attributes) {
            const m = f.attributes[g], y = l[g];
            y !== void 0 && (m.normalized = y);
          }
          u(f);
        }, a, c, LinearSRGBColorSpace, p);
      });
    });
  }
}
class Bf {
  constructor() {
    this.name = Ie.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class Nf {
  constructor() {
    this.name = Ie.KHR_MESH_QUANTIZATION;
  }
}
class sl extends Interpolant {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
    for (let r = 0; r !== s; r++)
      t[r] = n[i + r];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer, r = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h2 = s - t, u = (n - t) / h2, p = u * u, f = p * u, g = e * c, m = g - c, y = -2 * f + 3 * p, d = f - p, w = 1 - y, v = d - p + u;
    for (let E = 0; E !== a; E++) {
      const P = r[m + E + a], T = r[m + E + l] * h2, b = r[g + E + a], x = r[g + E] * h2;
      i[E] = w * P + v * T + y * b + d * x;
    }
    return i;
  }
}
const Uf = new Quaternion();
class zf extends sl {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return Uf.fromArray(i).normalize().toArray(i), i;
  }
}
const Et = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, Jn = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, wo = {
  9728: NearestFilter,
  9729: LinearFilter,
  9984: NearestMipmapNearestFilter,
  9985: LinearMipmapNearestFilter,
  9986: NearestMipmapLinearFilter,
  9987: LinearMipmapLinearFilter
}, To = {
  33071: ClampToEdgeWrapping,
  33648: MirroredRepeatWrapping,
  10497: RepeatWrapping
}, Di = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, mr = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, dn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Hf = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: InterpolateLinear,
  STEP: InterpolateDiscrete
}, Li = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Gf(o) {
  return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new MeshStandardMaterial({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: false,
    depthTest: true,
    side: FrontSide
  })), o.DefaultMaterial;
}
function In(o, e, t) {
  for (const n in t.extensions)
    o[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function qt(o, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function jf(o, e, t) {
  let n = false, s = false, i = false;
  for (let c = 0, h2 = e.length; c < h2; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (s = true), u.COLOR_0 !== void 0 && (i = true), n && s && i)
      break;
  }
  if (!n && !s && !i)
    return Promise.resolve(o);
  const r = [], a = [], l = [];
  for (let c = 0, h2 = e.length; c < h2; c++) {
    const u = e[c];
    if (n) {
      const p = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : o.attributes.position;
      r.push(p);
    }
    if (s) {
      const p = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : o.attributes.normal;
      a.push(p);
    }
    if (i) {
      const p = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : o.attributes.color;
      l.push(p);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const h2 = c[0], u = c[1], p = c[2];
    return n && (o.morphAttributes.position = h2), s && (o.morphAttributes.normal = u), i && (o.morphAttributes.color = p), o.morphTargetsRelative = true, o;
  });
}
function Vf(o, e) {
  if (o.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      o.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (o.morphTargetInfluences.length === t.length) {
      o.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        o.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Yf(o) {
  let e;
  const t = o.extensions && o.extensions[Ie.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Fi(t.attributes) : e = o.indices + ":" + Fi(o.attributes) + ":" + o.mode, o.targets !== void 0)
    for (let n = 0, s = o.targets.length; n < s; n++)
      e += ":" + Fi(o.targets[n]);
  return e;
}
function Fi(o) {
  let e = "";
  const t = Object.keys(o).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + o[t[n]] + ";";
  return e;
}
function gr(o) {
  switch (o) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Xf(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Wf = new Matrix4();
class $f {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new gf(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = false;
    typeof createImageBitmap > "u" || n || i ? this.textureLoader = new TextureLoader(this.options.manager) : this.textureLoader = new ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const a = {
        scene: r[0][s.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      return In(i, a, s), qt(a, s), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        for (const l of a.scenes)
          l.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s].joints;
      for (let a = 0, l = r.length; a < l; a++)
        e[r[a]].isBone = true;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const r = e[s];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = true)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const s = n.clone(), i = (r, a) => {
      const l = this.associations.get(r);
      l != null && this.associations.set(a, l);
      for (const [c, h2] of r.children.entries())
        i(h2, a.children[c]);
    };
    return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s)
        return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(i, r) {
        return n.getDependency(e, r);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ie.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, r) {
      n.load(LoaderUtils.resolveURL(t.uri, s.path), i, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const r = Di[s.type], a = Jn[s.componentType], l = s.normalized === true, c = new a(s.count * r);
      return Promise.resolve(new BufferAttribute(c, r, l));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const a = r[0], l = Di[s.type], c = Jn[s.componentType], h2 = c.BYTES_PER_ELEMENT, u = h2 * l, p = s.byteOffset || 0, f = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, g = s.normalized === true;
      let m, y;
      if (f && f !== u) {
        const d = Math.floor(p / f), w = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + d + ":" + s.count;
        let v = t.cache.get(w);
        v || (m = new c(a, d * f, s.count * f / h2), v = new InterleavedBuffer(m, f / h2), t.cache.add(w, v)), y = new InterleavedBufferAttribute(v, l, p % f / h2, g);
      } else
        a === null ? m = new c(s.count * l) : m = new c(a, p, s.count * l), y = new BufferAttribute(m, l, g);
      if (s.sparse !== void 0) {
        const d = Di.SCALAR, w = Jn[s.sparse.indices.componentType], v = s.sparse.indices.byteOffset || 0, E = s.sparse.values.byteOffset || 0, P = new w(r[1], v, s.sparse.count * d), T = new c(r[2], E, s.sparse.count * l);
        a !== null && (y = new BufferAttribute(y.array.slice(), y.itemSize, y.normalized));
        for (let b = 0, x = P.length; b < x; b++) {
          const M = P[b];
          if (y.setX(M, T[b * l]), l >= 2 && y.setY(M, T[b * l + 1]), l >= 3 && y.setZ(M, T[b * l + 2]), l >= 4 && y.setW(M, T[b * l + 3]), l >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return y;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, r = t.images[i];
    let a = this.textureLoader;
    if (r.uri) {
      const l = n.manager.getHandler(r.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, i, a);
  }
  loadTextureImage(e, t, n) {
    const s = this, i = this.json, r = i.textures[e], a = i.images[t], l = (a.uri || a.bufferView) + ":" + r.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h2) {
      h2.flipY = false, h2.name = r.name || a.name || "", h2.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (h2.name = a.uri);
      const p = (i.samplers || {})[r.sampler] || {};
      return h2.magFilter = wo[p.magFilter] || LinearFilter, h2.minFilter = wo[p.minFilter] || LinearMipmapLinearFilter, h2.wrapS = To[p.wrapS] || RepeatWrapping, h2.wrapT = To[p.wrapT] || RepeatWrapping, s.associations.set(h2, { textures: e }), h2;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const r = s.images[e], a = self.URL || self.webkitURL;
    let l = r.uri || "", c = false;
    if (r.bufferView !== void 0)
      l = n.getDependency("bufferView", r.bufferView).then(function(u) {
        c = true;
        const p = new Blob([u], { type: r.mimeType });
        return l = a.createObjectURL(p), l;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h2 = Promise.resolve(l).then(function(u) {
      return new Promise(function(p, f) {
        let g = p;
        t.isImageBitmapLoader === true && (g = function(m) {
          const y = new Texture(m);
          y.needsUpdate = true, p(y);
        }), t.load(LoaderUtils.resolveURL(u, i.path), g, void 0, f);
      });
    }).then(function(u) {
      return c === true && a.revokeObjectURL(l), qt(u, r), u.userData.mimeType = r.mimeType || Xf(r.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h2, h2;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (!r)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (r = r.clone(), r.channel = n.texCoord), i.extensions[Ie.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Ie.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = i.associations.get(r);
          r = i.extensions[Ie.KHR_TEXTURE_TRANSFORM].extendTexture(r, a), i.associations.set(r, l);
        }
      }
      return s !== void 0 && (r.colorSpace = s), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new PointsMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new LineBasicMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (s || i || r) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), r && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), i && (l.vertexColors = true), r && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return MeshStandardMaterial;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, i = n.materials[e];
    let r;
    const a = {}, l = i.extensions || {}, c = [];
    if (l[Ie.KHR_MATERIALS_UNLIT]) {
      const u = s[Ie.KHR_MATERIALS_UNLIT];
      r = u.getMaterialType(), c.push(u.extendParams(a, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (a.color = new Color(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const p = u.baseColorFactor;
        a.color.setRGB(p[0], p[1], p[2], LinearSRGBColorSpace), a.opacity = p[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, SRGBColorSpace)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), r = this._invokeOne(function(p) {
        return p.getMaterialType && p.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(p) {
        return p.extendMaterialParams && p.extendMaterialParams(e, a);
      })));
    }
    i.doubleSided === true && (a.side = DoubleSide);
    const h2 = i.alphaMode || Li.OPAQUE;
    if (h2 === Li.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, h2 === Li.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== MeshBasicMaterial && (c.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new Vector2(1, 1), i.normalTexture.scale !== void 0)) {
      const u = i.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (i.occlusionTexture !== void 0 && r !== MeshBasicMaterial && (c.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== MeshBasicMaterial) {
      const u = i.emissiveFactor;
      a.emissive = new Color().setRGB(u[0], u[1], u[2], LinearSRGBColorSpace);
    }
    return i.emissiveTexture !== void 0 && r !== MeshBasicMaterial && c.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, SRGBColorSpace)), Promise.all(c).then(function() {
      const u = new r(a);
      return i.name && (u.name = i.name), qt(u, i), t.associations.set(u, { materials: e }), i.extensions && In(s, u, i), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = PropertyBinding.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function i(a) {
      return n[Ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return bo(l, a, t);
      });
    }
    const r = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h2 = Yf(c), u = s[h2];
      if (u)
        r.push(u.promise);
      else {
        let p;
        c.extensions && c.extensions[Ie.KHR_DRACO_MESH_COMPRESSION] ? p = i(c) : p = bo(new BufferGeometry(), c, t), s[h2] = { primitive: c, promise: p }, r.push(p);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, i = n.meshes[e], r = i.primitives, a = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const h2 = r[l].material === void 0 ? Gf(this.cache) : this.getDependency("material", r[l].material);
      a.push(h2);
    }
    return a.push(t.loadGeometries(r)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), h2 = l[l.length - 1], u = [];
      for (let f = 0, g = h2.length; f < g; f++) {
        const m = h2[f], y = r[f];
        let d;
        const w = c[f];
        if (y.mode === Et.TRIANGLES || y.mode === Et.TRIANGLE_STRIP || y.mode === Et.TRIANGLE_FAN || y.mode === void 0)
          d = i.isSkinnedMesh === true ? new SkinnedMesh(m, w) : new Mesh(m, w), d.isSkinnedMesh === true && d.normalizeSkinWeights(), y.mode === Et.TRIANGLE_STRIP ? d.geometry = _o(d.geometry, TriangleStripDrawMode) : y.mode === Et.TRIANGLE_FAN && (d.geometry = _o(d.geometry, TriangleFanDrawMode));
        else if (y.mode === Et.LINES)
          d = new LineSegments(m, w);
        else if (y.mode === Et.LINE_STRIP)
          d = new Line(m, w);
        else if (y.mode === Et.LINE_LOOP)
          d = new LineLoop(m, w);
        else if (y.mode === Et.POINTS)
          d = new Points(m, w);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + y.mode);
        Object.keys(d.geometry.morphAttributes).length > 0 && Vf(d, i), d.name = t.createUniqueName(i.name || "mesh_" + e), qt(d, i), y.extensions && In(s, d, y), t.assignFinalMaterial(d), u.push(d);
      }
      for (let f = 0, g = u.length; f < g; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return i.extensions && In(s, u[0], i), u[0];
      const p = new Group();
      i.extensions && In(s, p, i), t.associations.set(p, { meshes: e });
      for (let f = 0, g = u.length; f < g; f++)
        p.add(u[f]);
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new PerspectiveCamera(MathUtils.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new OrthographicCamera(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), qt(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const i = s.pop(), r = s, a = [], l = [];
      for (let c = 0, h2 = r.length; c < h2; c++) {
        const u = r[c];
        if (u) {
          a.push(u);
          const p = new Matrix4();
          i !== null && p.fromArray(i.array, c * 16), l.push(p);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Skeleton(a, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, s = t.animations[e], i = s.name ? s.name : "animation_" + e, r = [], a = [], l = [], c = [], h2 = [];
    for (let u = 0, p = s.channels.length; u < p; u++) {
      const f = s.channels[u], g = s.samplers[f.sampler], m = f.target, y = m.node, d = s.parameters !== void 0 ? s.parameters[g.input] : g.input, w = s.parameters !== void 0 ? s.parameters[g.output] : g.output;
      m.node !== void 0 && (r.push(this.getDependency("node", y)), a.push(this.getDependency("accessor", d)), l.push(this.getDependency("accessor", w)), c.push(g), h2.push(m));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h2)
    ]).then(function(u) {
      const p = u[0], f = u[1], g = u[2], m = u[3], y = u[4], d = [];
      for (let w = 0, v = p.length; w < v; w++) {
        const E = p[w], P = f[w], T = g[w], b = m[w], x = y[w];
        if (E === void 0)
          continue;
        E.updateMatrix && E.updateMatrix();
        const M = n._createAnimationTracks(E, P, T, b, x);
        if (M)
          for (let _ = 0; _ < M.length; _++)
            d.push(M[_]);
      }
      return new AnimationClip(i, void 0, d);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
      const r = n._getNodeRef(n.meshCache, s.mesh, i);
      return s.weights !== void 0 && r.traverse(function(a) {
        if (a.isMesh)
          for (let l = 0, c = s.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = s.weights[l];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), r = [], a = s.children || [];
    for (let c = 0, h2 = a.length; c < h2; c++)
      r.push(n.getDependency("node", a[c]));
    const l = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([
      i,
      Promise.all(r),
      l
    ]).then(function(c) {
      const h2 = c[0], u = c[1], p = c[2];
      p !== null && h2.traverse(function(f) {
        f.isSkinnedMesh && f.bind(p, Wf);
      });
      for (let f = 0, g = u.length; f < g; f++)
        h2.add(u[f]);
      return h2;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], r = i.name ? s.createUniqueName(i.name) : "", a = [], l = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), i.camera !== void 0 && a.push(s.getDependency("camera", i.camera).then(function(c) {
      return s._getNodeRef(s.cameraCache, i.camera, c);
    })), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let h2;
      if (i.isBone === true ? h2 = new Bone() : c.length > 1 ? h2 = new Group() : c.length === 1 ? h2 = c[0] : h2 = new Object3D(), h2 !== c[0])
        for (let u = 0, p = c.length; u < p; u++)
          h2.add(c[u]);
      if (i.name && (h2.userData.name = i.name, h2.name = r), qt(h2, i), i.extensions && In(n, h2, i), i.matrix !== void 0) {
        const u = new Matrix4();
        u.fromArray(i.matrix), h2.applyMatrix4(u);
      } else
        i.translation !== void 0 && h2.position.fromArray(i.translation), i.rotation !== void 0 && h2.quaternion.fromArray(i.rotation), i.scale !== void 0 && h2.scale.fromArray(i.scale);
      return s.associations.has(h2) || s.associations.set(h2, {}), s.associations.get(h2).nodes = e, h2;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, i = new Group();
    n.name && (i.name = s.createUniqueName(n.name)), qt(i, n), n.extensions && In(t, i, n);
    const r = n.nodes || [], a = [];
    for (let l = 0, c = r.length; l < c; l++)
      a.push(s.getDependency("node", r[l]));
    return Promise.all(a).then(function(l) {
      for (let h2 = 0, u = l.length; h2 < u; h2++)
        i.add(l[h2]);
      const c = (h2) => {
        const u = /* @__PURE__ */ new Map();
        for (const [p, f] of s.associations)
          (p instanceof Material || p instanceof Texture) && u.set(p, f);
        return h2.traverse((p) => {
          const f = s.associations.get(p);
          f != null && u.set(p, f);
        }), u;
      };
      return s.associations = c(i), i;
    });
  }
  _createAnimationTracks(e, t, n, s, i) {
    const r = [], a = e.name ? e.name : e.uuid, l = [];
    dn[i.path] === dn.weights ? e.traverse(function(p) {
      p.morphTargetInfluences && l.push(p.name ? p.name : p.uuid);
    }) : l.push(a);
    let c;
    switch (dn[i.path]) {
      case dn.weights:
        c = NumberKeyframeTrack;
        break;
      case dn.rotation:
        c = QuaternionKeyframeTrack;
        break;
      case dn.position:
      case dn.scale:
        c = VectorKeyframeTrack;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = NumberKeyframeTrack;
            break;
          case 2:
          case 3:
          default:
            c = VectorKeyframeTrack;
            break;
        }
        break;
    }
    const h2 = s.interpolation !== void 0 ? Hf[s.interpolation] : InterpolateLinear, u = this._getArrayFromAccessor(n);
    for (let p = 0, f = l.length; p < f; p++) {
      const g = new c(
        l[p] + "." + dn[i.path],
        t.array,
        u,
        h2
      );
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), r.push(g);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = gr(t.constructor), s = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        s[i] = t[i] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof QuaternionKeyframeTrack ? zf : sl;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function Zf(o, e, t) {
  const n = e.attributes, s = new Box3();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(
        new Vector3(l[0], l[1], l[2]),
        new Vector3(c[0], c[1], c[2])
      ), a.normalized) {
        const h2 = gr(Jn[a.componentType]);
        s.min.multiplyScalar(h2), s.max.multiplyScalar(h2);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const a = new Vector3(), l = new Vector3();
    for (let c = 0, h2 = i.length; c < h2; c++) {
      const u = i[c];
      if (u.POSITION !== void 0) {
        const p = t.json.accessors[u.POSITION], f = p.min, g = p.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), p.normalized) {
            const m = gr(Jn[p.componentType]);
            l.multiplyScalar(m);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  o.boundingBox = s;
  const r = new Sphere();
  s.getCenter(r.center), r.radius = s.min.distanceTo(s.max) / 2, o.boundingSphere = r;
}
function bo(o, e, t) {
  const n = e.attributes, s = [];
  function i(r, a) {
    return t.getDependency("accessor", r).then(function(l) {
      o.setAttribute(a, l);
    });
  }
  for (const r in n) {
    const a = mr[r] || r.toLowerCase();
    a in o.attributes || s.push(i(n[r], a));
  }
  if (e.indices !== void 0 && !o.index) {
    const r = t.getDependency("accessor", e.indices).then(function(a) {
      o.setIndex(a);
    });
    s.push(r);
  }
  return ColorManagement.workingColorSpace !== LinearSRGBColorSpace && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ColorManagement.workingColorSpace}" not supported.`), qt(o, e), Zf(o, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? jf(o, e.targets, t) : o;
  });
}
let Mn = null;
function Kf(o, e) {
  return (t) => {
    o.draco && (Mn || (Mn = new Qu()), Mn.setDecoderPath(o.decoderPath || "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"), t.setDRACOLoader && t.setDRACOLoader(Mn));
  };
}
async function qf(o, e = {
  draco: false
}, t) {
  const n = await Nr(mf, o, Kf(e));
  return Mn == null || Mn.dispose(), Mn = null, n;
}
const Qf = ["object"], zg = /* @__PURE__ */ defineComponent({
  __name: "component",
  props: {
    path: {},
    draco: { type: Boolean, default: false },
    decoderPath: { default: "https://www.gstatic.com/draco/versioned/decoders/1.4.1/" },
    castShadow: { type: Boolean, default: false },
    receiveShadow: { type: Boolean, default: false }
  },
  async setup(o, { expose: e }) {
    let t, n;
    const s = o, i = ref();
    e({
      instance: i
    });
    const { scene: r } = ([t, n] = withAsyncContext(() => qf(s.path, {
      draco: s.draco,
      decoderPath: s.decoderPath
    })), t = await t, n(), t);
    return (s.castShadow || s.receiveShadow) && r.traverse((a) => {
      a.isMesh && (a.castShadow = s.castShadow, a.receiveShadow = s.receiveShadow);
    }), (a, l) => (openBlock(), createElementBlock("primitive", mergeProps({
      ref_key: "modelRef",
      ref: i,
      object: unref(r)
    }, a.$attrs), null, 16, Qf));
  }
});
const rd = ["target", "auto-rotate", "auto-rotate-speed", "enable-damping", "damping-factor", "enable-pan", "key-pan-speed", "keys", "max-azimuth-angle", "min-azimuth-angle", "max-polar-angle", "min-polar-angle", "min-distance", "max-distance", "min-zoom", "max-zoom", "touches", "enable-zoom", "zoom-speed", "enable-rotate", "rotate-speed", "args"], Yg = /* @__PURE__ */ defineComponent({
  __name: "OrbitControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: {},
    domElement: {},
    target: { default: () => [0, 0, 0] },
    enableDamping: { type: Boolean, default: true },
    dampingFactor: { default: 0.05 },
    autoRotate: { type: Boolean, default: false },
    autoRotateSpeed: { default: 2 },
    enablePan: { type: Boolean, default: true },
    keyPanSpeed: { default: 7 },
    keys: {},
    maxAzimuthAngle: { default: Number.POSITIVE_INFINITY },
    minAzimuthAngle: { default: Number.NEGATIVE_INFINITY },
    maxPolarAngle: { default: Math.PI },
    minPolarAngle: { default: 0 },
    minDistance: { default: 0 },
    maxDistance: { default: Number.POSITIVE_INFINITY },
    minZoom: { default: 0 },
    maxZoom: { default: Number.POSITIVE_INFINITY },
    touches: { default: () => ({ ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }) },
    enableZoom: { type: Boolean, default: true },
    zoomSpeed: { default: 1 },
    enableRotate: { type: Boolean, default: true },
    rotateSpeed: { default: 1 }
  },
  emits: ["change", "start", "end"],
  setup(o, { expose: e, emit: t }) {
    const n = o, s = t, {
      makeDefault: i,
      autoRotate: r,
      autoRotateSpeed: a,
      enableDamping: l,
      dampingFactor: c,
      enablePan: h2,
      keyPanSpeed: u,
      maxAzimuthAngle: p,
      minAzimuthAngle: f,
      maxPolarAngle: g,
      minPolarAngle: m,
      minDistance: y,
      maxDistance: d,
      minZoom: w,
      maxZoom: v,
      enableZoom: E,
      zoomSpeed: P,
      enableRotate: T,
      touches: b,
      rotateSpeed: x,
      target: M
    } = toRefs(n), { camera: _, renderer: C, extend: R, controls: B, invalidate: N2 } = pe(), j = ref(null);
    R({ OrbitControls: za }), watch(j, (Z) => {
      V(), Z && i.value ? B.value = Z : B.value = null;
    });
    function V() {
      He(j.value, "change", () => {
        s("change", j.value), N2();
      }), He(j.value, "start", () => s("start", j.value)), He(j.value, "end", () => s("end", j.value));
    }
    const { onBeforeRender: Q2 } = qr$1();
    return Q2(({ invalidate: Z }) => {
      j.value && (l.value || r.value) && (j.value.update(), r.value && Z());
    }), onUnmounted(() => {
      j.value && j.value.dispose();
    }), e({ instance: j }), (Z, ne) => (Z.camera || unref(_)) && (Z.domElement || unref(C)) ? (openBlock(), createElementBlock("TresOrbitControls", {
      key: 0,
      ref_key: "controlsRef",
      ref: j,
      target: unref(M),
      "auto-rotate": unref(r),
      "auto-rotate-speed": unref(a),
      "enable-damping": unref(l),
      "damping-factor": unref(c),
      "enable-pan": unref(h2),
      "key-pan-speed": unref(u),
      keys: Z.keys,
      "max-azimuth-angle": unref(p),
      "min-azimuth-angle": unref(f),
      "max-polar-angle": unref(g),
      "min-polar-angle": unref(m),
      "min-distance": unref(y),
      "max-distance": unref(d),
      "min-zoom": unref(w),
      "max-zoom": unref(v),
      touches: unref(b),
      "enable-zoom": unref(E),
      "zoom-speed": unref(P),
      "enable-rotate": unref(T),
      "rotate-speed": unref(x),
      args: [Z.camera || unref(_), Z.domElement || unref(C).domElement]
    }, null, 8, rd)) : createCommentVNode("", true);
  }
});
var Ui;
/Mac/.test((Ui = globalThis == null ? void 0 : globalThis.navigator) === null || Ui === void 0 ? void 0 : Ui.platform);
var Td = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Is(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Js(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var hl = { exports: {} };
(function(o, e) {
  (function(t) {
    o.exports = t();
  })(function() {
    return function t(n, s, i) {
      function r(c, h2) {
        if (!s[c]) {
          if (!n[c]) {
            var u = typeof Js == "function" && Js;
            if (!h2 && u)
              return u(c, true);
            if (a)
              return a(c, true);
            throw new Error("Cannot find module '" + c + "'");
          }
          h2 = s[c] = { exports: {} }, n[c][0].call(h2.exports, function(p) {
            var f = n[c][1][p];
            return r(f || p);
          }, h2, h2.exports, t, n, s, i);
        }
        return s[c].exports;
      }
      for (var a = typeof Js == "function" && Js, l = 0; l < i.length; l++)
        r(i[l]);
      return r;
    }({ 1: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        var g = t("crypto");
        function m(T, b) {
          b = w(T, b);
          var x;
          return (x = b.algorithm !== "passthrough" ? g.createHash(b.algorithm) : new P()).write === void 0 && (x.write = x.update, x.end = x.update), E(b, x).dispatch(T), x.update || x.end(""), x.digest ? x.digest(b.encoding === "buffer" ? void 0 : b.encoding) : (T = x.read(), b.encoding !== "buffer" ? T.toString(b.encoding) : T);
        }
        (s = n.exports = m).sha1 = function(T) {
          return m(T);
        }, s.keys = function(T) {
          return m(T, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
        }, s.MD5 = function(T) {
          return m(T, { algorithm: "md5", encoding: "hex" });
        }, s.keysMD5 = function(T) {
          return m(T, { algorithm: "md5", encoding: "hex", excludeValues: true });
        };
        var y = g.getHashes ? g.getHashes().slice() : ["sha1", "md5"], d = (y.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
        function w(T, b) {
          var x = {};
          if (x.algorithm = (b = b || {}).algorithm || "sha1", x.encoding = b.encoding || "hex", x.excludeValues = !!b.excludeValues, x.algorithm = x.algorithm.toLowerCase(), x.encoding = x.encoding.toLowerCase(), x.ignoreUnknown = b.ignoreUnknown === true, x.respectType = b.respectType !== false, x.respectFunctionNames = b.respectFunctionNames !== false, x.respectFunctionProperties = b.respectFunctionProperties !== false, x.unorderedArrays = b.unorderedArrays === true, x.unorderedSets = b.unorderedSets !== false, x.unorderedObjects = b.unorderedObjects !== false, x.replacer = b.replacer || void 0, x.excludeKeys = b.excludeKeys || void 0, T === void 0)
            throw new Error("Object argument required.");
          for (var M = 0; M < y.length; ++M)
            y[M].toLowerCase() === x.algorithm.toLowerCase() && (x.algorithm = y[M]);
          if (y.indexOf(x.algorithm) === -1)
            throw new Error('Algorithm "' + x.algorithm + '"  not supported. supported values: ' + y.join(", "));
          if (d.indexOf(x.encoding) === -1 && x.algorithm !== "passthrough")
            throw new Error('Encoding "' + x.encoding + '"  not supported. supported values: ' + d.join(", "));
          return x;
        }
        function v(T) {
          if (typeof T == "function")
            return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(T)) != null;
        }
        function E(T, b, x) {
          x = x || [];
          function M(_) {
            return b.update ? b.update(_, "utf8") : b.write(_, "utf8");
          }
          return { dispatch: function(_) {
            return this["_" + ((_ = T.replacer ? T.replacer(_) : _) === null ? "null" : typeof _)](_);
          }, _object: function(_) {
            var C, R = Object.prototype.toString.call(_), B = /\[object (.*)\]/i.exec(R);
            if (B = (B = B ? B[1] : "unknown:[" + R + "]").toLowerCase(), 0 <= (R = x.indexOf(_)))
              return this.dispatch("[CIRCULAR:" + R + "]");
            if (x.push(_), a !== void 0 && a.isBuffer && a.isBuffer(_))
              return M("buffer:"), M(_);
            if (B === "object" || B === "function" || B === "asyncfunction")
              return R = Object.keys(_), T.unorderedObjects && (R = R.sort()), T.respectType === false || v(_) || R.splice(0, 0, "prototype", "__proto__", "constructor"), T.excludeKeys && (R = R.filter(function(N2) {
                return !T.excludeKeys(N2);
              })), M("object:" + R.length + ":"), C = this, R.forEach(function(N2) {
                C.dispatch(N2), M(":"), T.excludeValues || C.dispatch(_[N2]), M(",");
              });
            if (!this["_" + B]) {
              if (T.ignoreUnknown)
                return M("[" + B + "]");
              throw new Error('Unknown object type "' + B + '"');
            }
            this["_" + B](_);
          }, _array: function(_, N2) {
            N2 = N2 !== void 0 ? N2 : T.unorderedArrays !== false;
            var R = this;
            if (M("array:" + _.length + ":"), !N2 || _.length <= 1)
              return _.forEach(function(j) {
                return R.dispatch(j);
              });
            var B = [], N2 = _.map(function(j) {
              var V = new P(), Q2 = x.slice();
              return E(T, V, Q2).dispatch(j), B = B.concat(Q2.slice(x.length)), V.read().toString();
            });
            return x = x.concat(B), N2.sort(), this._array(N2, false);
          }, _date: function(_) {
            return M("date:" + _.toJSON());
          }, _symbol: function(_) {
            return M("symbol:" + _.toString());
          }, _error: function(_) {
            return M("error:" + _.toString());
          }, _boolean: function(_) {
            return M("bool:" + _.toString());
          }, _string: function(_) {
            M("string:" + _.length + ":"), M(_.toString());
          }, _function: function(_) {
            M("fn:"), v(_) ? this.dispatch("[native]") : this.dispatch(_.toString()), T.respectFunctionNames !== false && this.dispatch("function-name:" + String(_.name)), T.respectFunctionProperties && this._object(_);
          }, _number: function(_) {
            return M("number:" + _.toString());
          }, _xml: function(_) {
            return M("xml:" + _.toString());
          }, _null: function() {
            return M("Null");
          }, _undefined: function() {
            return M("Undefined");
          }, _regexp: function(_) {
            return M("regex:" + _.toString());
          }, _uint8array: function(_) {
            return M("uint8array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _uint8clampedarray: function(_) {
            return M("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(_));
          }, _int8array: function(_) {
            return M("int8array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _uint16array: function(_) {
            return M("uint16array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _int16array: function(_) {
            return M("int16array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _uint32array: function(_) {
            return M("uint32array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _int32array: function(_) {
            return M("int32array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _float32array: function(_) {
            return M("float32array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _float64array: function(_) {
            return M("float64array:"), this.dispatch(Array.prototype.slice.call(_));
          }, _arraybuffer: function(_) {
            return M("arraybuffer:"), this.dispatch(new Uint8Array(_));
          }, _url: function(_) {
            return M("url:" + _.toString());
          }, _map: function(_) {
            return M("map:"), _ = Array.from(_), this._array(_, T.unorderedSets !== false);
          }, _set: function(_) {
            return M("set:"), _ = Array.from(_), this._array(_, T.unorderedSets !== false);
          }, _file: function(_) {
            return M("file:"), this.dispatch([_.name, _.size, _.type, _.lastModfied]);
          }, _blob: function() {
            if (T.ignoreUnknown)
              return M("[blob]");
            throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
          }, _domwindow: function() {
            return M("domwindow");
          }, _bigint: function(_) {
            return M("bigint:" + _.toString());
          }, _process: function() {
            return M("process");
          }, _timer: function() {
            return M("timer");
          }, _pipe: function() {
            return M("pipe");
          }, _tcp: function() {
            return M("tcp");
          }, _udp: function() {
            return M("udp");
          }, _tty: function() {
            return M("tty");
          }, _statwatcher: function() {
            return M("statwatcher");
          }, _securecontext: function() {
            return M("securecontext");
          }, _connection: function() {
            return M("connection");
          }, _zlib: function() {
            return M("zlib");
          }, _context: function() {
            return M("context");
          }, _nodescript: function() {
            return M("nodescript");
          }, _httpparser: function() {
            return M("httpparser");
          }, _dataview: function() {
            return M("dataview");
          }, _signal: function() {
            return M("signal");
          }, _fsevent: function() {
            return M("fsevent");
          }, _tlswrap: function() {
            return M("tlswrap");
          } };
        }
        function P() {
          return { buf: "", write: function(T) {
            this.buf += T;
          }, end: function(T) {
            this.buf += T;
          }, read: function() {
            return this.buf;
          } };
        }
        s.writeToStream = function(T, b, x) {
          return x === void 0 && (x = b, b = {}), E(b = w(T, b), x).dispatch(T);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
    }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        (function(g) {
          var m = typeof Uint8Array < "u" ? Uint8Array : Array, y = 43, d = 47, w = 48, v = 97, E = 65, P = 45, T = 95;
          function b(x) {
            return x = x.charCodeAt(0), x === y || x === P ? 62 : x === d || x === T ? 63 : x < w ? -1 : x < w + 10 ? x - w + 26 + 26 : x < E + 26 ? x - E : x < v + 26 ? x - v + 26 : void 0;
          }
          g.toByteArray = function(x) {
            var M, _;
            if (0 < x.length % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var C = x.length, C = x.charAt(C - 2) === "=" ? 2 : x.charAt(C - 1) === "=" ? 1 : 0, R = new m(3 * x.length / 4 - C), B = 0 < C ? x.length - 4 : x.length, N2 = 0;
            function j(V) {
              R[N2++] = V;
            }
            for (M = 0; M < B; M += 4, 0)
              j((16711680 & (_ = b(x.charAt(M)) << 18 | b(x.charAt(M + 1)) << 12 | b(x.charAt(M + 2)) << 6 | b(x.charAt(M + 3)))) >> 16), j((65280 & _) >> 8), j(255 & _);
            return C == 2 ? j(255 & (_ = b(x.charAt(M)) << 2 | b(x.charAt(M + 1)) >> 4)) : C == 1 && (j((_ = b(x.charAt(M)) << 10 | b(x.charAt(M + 1)) << 4 | b(x.charAt(M + 2)) >> 2) >> 8 & 255), j(255 & _)), R;
          }, g.fromByteArray = function(x) {
            var M, _, C, R, B = x.length % 3, N2 = "";
            function j(V) {
              return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(V);
            }
            for (M = 0, C = x.length - B; M < C; M += 3)
              _ = (x[M] << 16) + (x[M + 1] << 8) + x[M + 2], N2 += j((R = _) >> 18 & 63) + j(R >> 12 & 63) + j(R >> 6 & 63) + j(63 & R);
            switch (B) {
              case 1:
                N2 = (N2 += j((_ = x[x.length - 1]) >> 2)) + j(_ << 4 & 63) + "==";
                break;
              case 2:
                N2 = (N2 = (N2 += j((_ = (x[x.length - 2] << 8) + x[x.length - 1]) >> 10)) + j(_ >> 4 & 63)) + j(_ << 2 & 63) + "=";
            }
            return N2;
          };
        })(s === void 0 ? this.base64js = {} : s);
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
    }, { buffer: 3, lYpoI2: 11 }], 3: [function(t, n, s) {
      (function(i, r, y, l, c, h2, u, p, f) {
        var g = t("base64-js"), m = t("ieee754");
        function y(S, A, L) {
          if (!(this instanceof y))
            return new y(S, A, L);
          var X, H, G2, q, se2 = typeof S;
          if (A === "base64" && se2 == "string")
            for (S = (q = S).trim ? q.trim() : q.replace(/^\s+|\s+$/g, ""); S.length % 4 != 0; )
              S += "=";
          if (se2 == "number")
            X = Z(S);
          else if (se2 == "string")
            X = y.byteLength(S, A);
          else {
            if (se2 != "object")
              throw new Error("First argument needs to be a number, array or string.");
            X = Z(S.length);
          }
          if (y._useTypedArrays ? H = y._augment(new Uint8Array(X)) : ((H = this).length = X, H._isBuffer = true), y._useTypedArrays && typeof S.byteLength == "number")
            H._set(S);
          else if (ne(q = S) || y.isBuffer(q) || q && typeof q == "object" && typeof q.length == "number")
            for (G2 = 0; G2 < X; G2++)
              y.isBuffer(S) ? H[G2] = S.readUInt8(G2) : H[G2] = S[G2];
          else if (se2 == "string")
            H.write(S, 0, A);
          else if (se2 == "number" && !y._useTypedArrays && !L)
            for (G2 = 0; G2 < X; G2++)
              H[G2] = 0;
          return H;
        }
        function d(S, A, L, X) {
          return y._charsWritten = Te(function(H) {
            for (var G2 = [], q = 0; q < H.length; q++)
              G2.push(255 & H.charCodeAt(q));
            return G2;
          }(A), S, L, X);
        }
        function w(S, A, L, X) {
          return y._charsWritten = Te(function(H) {
            for (var G2, q, se2 = [], ie2 = 0; ie2 < H.length; ie2++)
              q = H.charCodeAt(ie2), G2 = q >> 8, q = q % 256, se2.push(q), se2.push(G2);
            return se2;
          }(A), S, L, X);
        }
        function v(S, A, L) {
          var X = "";
          L = Math.min(S.length, L);
          for (var H = A; H < L; H++)
            X += String.fromCharCode(S[H]);
          return X;
        }
        function E(S, A, L, G2) {
          G2 || (z2(typeof L == "boolean", "missing or invalid endian"), z2(A != null, "missing offset"), z2(A + 1 < S.length, "Trying to read beyond buffer length"));
          var H, G2 = S.length;
          if (!(G2 <= A))
            return L ? (H = S[A], A + 1 < G2 && (H |= S[A + 1] << 8)) : (H = S[A] << 8, A + 1 < G2 && (H |= S[A + 1])), H;
        }
        function P(S, A, L, G2) {
          G2 || (z2(typeof L == "boolean", "missing or invalid endian"), z2(A != null, "missing offset"), z2(A + 3 < S.length, "Trying to read beyond buffer length"));
          var H, G2 = S.length;
          if (!(G2 <= A))
            return L ? (A + 2 < G2 && (H = S[A + 2] << 16), A + 1 < G2 && (H |= S[A + 1] << 8), H |= S[A], A + 3 < G2 && (H += S[A + 3] << 24 >>> 0)) : (A + 1 < G2 && (H = S[A + 1] << 16), A + 2 < G2 && (H |= S[A + 2] << 8), A + 3 < G2 && (H |= S[A + 3]), H += S[A] << 24 >>> 0), H;
        }
        function T(S, A, L, X) {
          if (X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(A != null, "missing offset"), z2(A + 1 < S.length, "Trying to read beyond buffer length")), !(S.length <= A))
            return X = E(S, A, L, true), 32768 & X ? -1 * (65535 - X + 1) : X;
        }
        function b(S, A, L, X) {
          if (X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(A != null, "missing offset"), z2(A + 3 < S.length, "Trying to read beyond buffer length")), !(S.length <= A))
            return X = P(S, A, L, true), 2147483648 & X ? -1 * (4294967295 - X + 1) : X;
        }
        function x(S, A, L, X) {
          return X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(A + 3 < S.length, "Trying to read beyond buffer length")), m.read(S, A, L, 23, 4);
        }
        function M(S, A, L, X) {
          return X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(A + 7 < S.length, "Trying to read beyond buffer length")), m.read(S, A, L, 52, 8);
        }
        function _(S, A, L, X, H) {
          if (H || (z2(A != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 1 < S.length, "trying to write beyond buffer length"), k(A, 65535)), H = S.length, !(H <= L))
            for (var G2 = 0, q = Math.min(H - L, 2); G2 < q; G2++)
              S[L + G2] = (A & 255 << 8 * (X ? G2 : 1 - G2)) >>> 8 * (X ? G2 : 1 - G2);
        }
        function C(S, A, L, X, H) {
          if (H || (z2(A != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 3 < S.length, "trying to write beyond buffer length"), k(A, 4294967295)), H = S.length, !(H <= L))
            for (var G2 = 0, q = Math.min(H - L, 4); G2 < q; G2++)
              S[L + G2] = A >>> 8 * (X ? G2 : 3 - G2) & 255;
        }
        function R(S, A, L, X, H) {
          H || (z2(A != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 1 < S.length, "Trying to write beyond buffer length"), D(A, 32767, -32768)), S.length <= L || _(S, 0 <= A ? A : 65535 + A + 1, L, X, H);
        }
        function B(S, A, L, X, H) {
          H || (z2(A != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 3 < S.length, "Trying to write beyond buffer length"), D(A, 2147483647, -2147483648)), S.length <= L || C(S, 0 <= A ? A : 4294967295 + A + 1, L, X, H);
        }
        function N2(S, A, L, X, H) {
          H || (z2(A != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 3 < S.length, "Trying to write beyond buffer length"), O(A, 34028234663852886e22, -34028234663852886e22)), S.length <= L || m.write(S, A, L, X, 23, 4);
        }
        function j(S, A, L, X, H) {
          H || (z2(A != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 7 < S.length, "Trying to write beyond buffer length"), O(A, 17976931348623157e292, -17976931348623157e292)), S.length <= L || m.write(S, A, L, X, 52, 8);
        }
        s.Buffer = y, s.SlowBuffer = y, s.INSPECT_MAX_BYTES = 50, y.poolSize = 8192, y._useTypedArrays = function() {
          try {
            var S = new ArrayBuffer(0), A = new Uint8Array(S);
            return A.foo = function() {
              return 42;
            }, A.foo() === 42 && typeof A.subarray == "function";
          } catch {
            return false;
          }
        }(), y.isEncoding = function(S) {
          switch (String(S).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "raw":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, y.isBuffer = function(S) {
          return !(S == null || !S._isBuffer);
        }, y.byteLength = function(S, A) {
          var L;
          switch (S += "", A || "utf8") {
            case "hex":
              L = S.length / 2;
              break;
            case "utf8":
            case "utf-8":
              L = le(S).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              L = S.length;
              break;
            case "base64":
              L = ae2(S).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              L = 2 * S.length;
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return L;
        }, y.concat = function(S, A) {
          if (z2(ne(S), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), S.length === 0)
            return new y(0);
          if (S.length === 1)
            return S[0];
          if (typeof A != "number")
            for (H = A = 0; H < S.length; H++)
              A += S[H].length;
          for (var L = new y(A), X = 0, H = 0; H < S.length; H++) {
            var G2 = S[H];
            G2.copy(L, X), X += G2.length;
          }
          return L;
        }, y.prototype.write = function(S, A, L, X) {
          isFinite(A) ? isFinite(L) || (X = L, L = void 0) : (ie2 = X, X = A, A = L, L = ie2), A = Number(A) || 0;
          var H, G2, q, se2, ie2 = this.length - A;
          switch ((!L || ie2 < (L = Number(L))) && (L = ie2), X = String(X || "utf8").toLowerCase()) {
            case "hex":
              H = function(Y2, F, oe2, pe2) {
                oe2 = Number(oe2) || 0;
                var Ae2 = Y2.length - oe2;
                (!pe2 || Ae2 < (pe2 = Number(pe2))) && (pe2 = Ae2), z2((Ae2 = F.length) % 2 == 0, "Invalid hex string"), Ae2 / 2 < pe2 && (pe2 = Ae2 / 2);
                for (var Ve2 = 0; Ve2 < pe2; Ve2++) {
                  var We2 = parseInt(F.substr(2 * Ve2, 2), 16);
                  z2(!isNaN(We2), "Invalid hex string"), Y2[oe2 + Ve2] = We2;
                }
                return y._charsWritten = 2 * Ve2, Ve2;
              }(this, S, A, L);
              break;
            case "utf8":
            case "utf-8":
              G2 = this, q = A, se2 = L, H = y._charsWritten = Te(le(S), G2, q, se2);
              break;
            case "ascii":
            case "binary":
              H = d(this, S, A, L);
              break;
            case "base64":
              G2 = this, q = A, se2 = L, H = y._charsWritten = Te(ae2(S), G2, q, se2);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              H = w(this, S, A, L);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return H;
        }, y.prototype.toString = function(S, A, L) {
          var X, H, G2, q, se2 = this;
          if (S = String(S || "utf8").toLowerCase(), A = Number(A) || 0, (L = L !== void 0 ? Number(L) : se2.length) === A)
            return "";
          switch (S) {
            case "hex":
              X = function(ie2, Y2, F) {
                var oe2 = ie2.length;
                (!Y2 || Y2 < 0) && (Y2 = 0), (!F || F < 0 || oe2 < F) && (F = oe2);
                for (var pe2 = "", Ae2 = Y2; Ae2 < F; Ae2++)
                  pe2 += te2(ie2[Ae2]);
                return pe2;
              }(se2, A, L);
              break;
            case "utf8":
            case "utf-8":
              X = function(ie2, Y2, F) {
                var oe2 = "", pe2 = "";
                F = Math.min(ie2.length, F);
                for (var Ae2 = Y2; Ae2 < F; Ae2++)
                  ie2[Ae2] <= 127 ? (oe2 += I(pe2) + String.fromCharCode(ie2[Ae2]), pe2 = "") : pe2 += "%" + ie2[Ae2].toString(16);
                return oe2 + I(pe2);
              }(se2, A, L);
              break;
            case "ascii":
            case "binary":
              X = v(se2, A, L);
              break;
            case "base64":
              H = se2, q = L, X = (G2 = A) === 0 && q === H.length ? g.fromByteArray(H) : g.fromByteArray(H.slice(G2, q));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              X = function(ie2, Y2, F) {
                for (var oe2 = ie2.slice(Y2, F), pe2 = "", Ae2 = 0; Ae2 < oe2.length; Ae2 += 2)
                  pe2 += String.fromCharCode(oe2[Ae2] + 256 * oe2[Ae2 + 1]);
                return pe2;
              }(se2, A, L);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return X;
        }, y.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        }, y.prototype.copy = function(S, A, L, X) {
          if (A = A || 0, (X = X || X === 0 ? X : this.length) !== (L = L || 0) && S.length !== 0 && this.length !== 0) {
            z2(L <= X, "sourceEnd < sourceStart"), z2(0 <= A && A < S.length, "targetStart out of bounds"), z2(0 <= L && L < this.length, "sourceStart out of bounds"), z2(0 <= X && X <= this.length, "sourceEnd out of bounds"), X > this.length && (X = this.length);
            var H = (X = S.length - A < X - L ? S.length - A + L : X) - L;
            if (H < 100 || !y._useTypedArrays)
              for (var G2 = 0; G2 < H; G2++)
                S[G2 + A] = this[G2 + L];
            else
              S._set(this.subarray(L, L + H), A);
          }
        }, y.prototype.slice = function(S, A) {
          var L = this.length;
          if (S = Q2(S, L, 0), A = Q2(A, L, L), y._useTypedArrays)
            return y._augment(this.subarray(S, A));
          for (var X = A - S, H = new y(X, void 0, true), G2 = 0; G2 < X; G2++)
            H[G2] = this[G2 + S];
          return H;
        }, y.prototype.get = function(S) {
          return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(S);
        }, y.prototype.set = function(S, A) {
          return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(S, A);
        }, y.prototype.readUInt8 = function(S, A) {
          if (A || (z2(S != null, "missing offset"), z2(S < this.length, "Trying to read beyond buffer length")), !(S >= this.length))
            return this[S];
        }, y.prototype.readUInt16LE = function(S, A) {
          return E(this, S, true, A);
        }, y.prototype.readUInt16BE = function(S, A) {
          return E(this, S, false, A);
        }, y.prototype.readUInt32LE = function(S, A) {
          return P(this, S, true, A);
        }, y.prototype.readUInt32BE = function(S, A) {
          return P(this, S, false, A);
        }, y.prototype.readInt8 = function(S, A) {
          if (A || (z2(S != null, "missing offset"), z2(S < this.length, "Trying to read beyond buffer length")), !(S >= this.length))
            return 128 & this[S] ? -1 * (255 - this[S] + 1) : this[S];
        }, y.prototype.readInt16LE = function(S, A) {
          return T(this, S, true, A);
        }, y.prototype.readInt16BE = function(S, A) {
          return T(this, S, false, A);
        }, y.prototype.readInt32LE = function(S, A) {
          return b(this, S, true, A);
        }, y.prototype.readInt32BE = function(S, A) {
          return b(this, S, false, A);
        }, y.prototype.readFloatLE = function(S, A) {
          return x(this, S, true, A);
        }, y.prototype.readFloatBE = function(S, A) {
          return x(this, S, false, A);
        }, y.prototype.readDoubleLE = function(S, A) {
          return M(this, S, true, A);
        }, y.prototype.readDoubleBE = function(S, A) {
          return M(this, S, false, A);
        }, y.prototype.writeUInt8 = function(S, A, L) {
          L || (z2(S != null, "missing value"), z2(A != null, "missing offset"), z2(A < this.length, "trying to write beyond buffer length"), k(S, 255)), A >= this.length || (this[A] = S);
        }, y.prototype.writeUInt16LE = function(S, A, L) {
          _(this, S, A, true, L);
        }, y.prototype.writeUInt16BE = function(S, A, L) {
          _(this, S, A, false, L);
        }, y.prototype.writeUInt32LE = function(S, A, L) {
          C(this, S, A, true, L);
        }, y.prototype.writeUInt32BE = function(S, A, L) {
          C(this, S, A, false, L);
        }, y.prototype.writeInt8 = function(S, A, L) {
          L || (z2(S != null, "missing value"), z2(A != null, "missing offset"), z2(A < this.length, "Trying to write beyond buffer length"), D(S, 127, -128)), A >= this.length || (0 <= S ? this.writeUInt8(S, A, L) : this.writeUInt8(255 + S + 1, A, L));
        }, y.prototype.writeInt16LE = function(S, A, L) {
          R(this, S, A, true, L);
        }, y.prototype.writeInt16BE = function(S, A, L) {
          R(this, S, A, false, L);
        }, y.prototype.writeInt32LE = function(S, A, L) {
          B(this, S, A, true, L);
        }, y.prototype.writeInt32BE = function(S, A, L) {
          B(this, S, A, false, L);
        }, y.prototype.writeFloatLE = function(S, A, L) {
          N2(this, S, A, true, L);
        }, y.prototype.writeFloatBE = function(S, A, L) {
          N2(this, S, A, false, L);
        }, y.prototype.writeDoubleLE = function(S, A, L) {
          j(this, S, A, true, L);
        }, y.prototype.writeDoubleBE = function(S, A, L) {
          j(this, S, A, false, L);
        }, y.prototype.fill = function(S, A, L) {
          if (A = A || 0, L = L || this.length, z2(typeof (S = typeof (S = S || 0) == "string" ? S.charCodeAt(0) : S) == "number" && !isNaN(S), "value is not a number"), z2(A <= L, "end < start"), L !== A && this.length !== 0) {
            z2(0 <= A && A < this.length, "start out of bounds"), z2(0 <= L && L <= this.length, "end out of bounds");
            for (var X = A; X < L; X++)
              this[X] = S;
          }
        }, y.prototype.inspect = function() {
          for (var S = [], A = this.length, L = 0; L < A; L++)
            if (S[L] = te2(this[L]), L === s.INSPECT_MAX_BYTES) {
              S[L + 1] = "...";
              break;
            }
          return "<Buffer " + S.join(" ") + ">";
        }, y.prototype.toArrayBuffer = function() {
          if (typeof Uint8Array > "u")
            throw new Error("Buffer.toArrayBuffer not supported in this browser");
          if (y._useTypedArrays)
            return new y(this).buffer;
          for (var S = new Uint8Array(this.length), A = 0, L = S.length; A < L; A += 1)
            S[A] = this[A];
          return S.buffer;
        };
        var V = y.prototype;
        function Q2(S, A, L) {
          return typeof S != "number" ? L : A <= (S = ~~S) ? A : 0 <= S || 0 <= (S += A) ? S : 0;
        }
        function Z(S) {
          return (S = ~~Math.ceil(+S)) < 0 ? 0 : S;
        }
        function ne(S) {
          return (Array.isArray || function(A) {
            return Object.prototype.toString.call(A) === "[object Array]";
          })(S);
        }
        function te2(S) {
          return S < 16 ? "0" + S.toString(16) : S.toString(16);
        }
        function le(S) {
          for (var A = [], L = 0; L < S.length; L++) {
            var X = S.charCodeAt(L);
            if (X <= 127)
              A.push(S.charCodeAt(L));
            else
              for (var H = L, G2 = (55296 <= X && X <= 57343 && L++, encodeURIComponent(S.slice(H, L + 1)).substr(1).split("%")), q = 0; q < G2.length; q++)
                A.push(parseInt(G2[q], 16));
          }
          return A;
        }
        function ae2(S) {
          return g.toByteArray(S);
        }
        function Te(S, A, L, X) {
          for (var H = 0; H < X && !(H + L >= A.length || H >= S.length); H++)
            A[H + L] = S[H];
          return H;
        }
        function I(S) {
          try {
            return decodeURIComponent(S);
          } catch {
            return "\uFFFD";
          }
        }
        function k(S, A) {
          z2(typeof S == "number", "cannot write a non-number as a number"), z2(0 <= S, "specified a negative value for writing an unsigned value"), z2(S <= A, "value is larger than maximum value for type"), z2(Math.floor(S) === S, "value has a fractional component");
        }
        function D(S, A, L) {
          z2(typeof S == "number", "cannot write a non-number as a number"), z2(S <= A, "value larger than maximum allowed value"), z2(L <= S, "value smaller than minimum allowed value"), z2(Math.floor(S) === S, "value has a fractional component");
        }
        function O(S, A, L) {
          z2(typeof S == "number", "cannot write a non-number as a number"), z2(S <= A, "value larger than maximum allowed value"), z2(L <= S, "value smaller than minimum allowed value");
        }
        function z2(S, A) {
          if (!S)
            throw new Error(A || "Failed assertion");
        }
        y._augment = function(S) {
          return S._isBuffer = true, S._get = S.get, S._set = S.set, S.get = V.get, S.set = V.set, S.write = V.write, S.toString = V.toString, S.toLocaleString = V.toString, S.toJSON = V.toJSON, S.copy = V.copy, S.slice = V.slice, S.readUInt8 = V.readUInt8, S.readUInt16LE = V.readUInt16LE, S.readUInt16BE = V.readUInt16BE, S.readUInt32LE = V.readUInt32LE, S.readUInt32BE = V.readUInt32BE, S.readInt8 = V.readInt8, S.readInt16LE = V.readInt16LE, S.readInt16BE = V.readInt16BE, S.readInt32LE = V.readInt32LE, S.readInt32BE = V.readInt32BE, S.readFloatLE = V.readFloatLE, S.readFloatBE = V.readFloatBE, S.readDoubleLE = V.readDoubleLE, S.readDoubleBE = V.readDoubleBE, S.writeUInt8 = V.writeUInt8, S.writeUInt16LE = V.writeUInt16LE, S.writeUInt16BE = V.writeUInt16BE, S.writeUInt32LE = V.writeUInt32LE, S.writeUInt32BE = V.writeUInt32BE, S.writeInt8 = V.writeInt8, S.writeInt16LE = V.writeInt16LE, S.writeInt16BE = V.writeInt16BE, S.writeInt32LE = V.writeInt32LE, S.writeInt32BE = V.writeInt32BE, S.writeFloatLE = V.writeFloatLE, S.writeFloatBE = V.writeFloatBE, S.writeDoubleLE = V.writeDoubleLE, S.writeDoubleBE = V.writeDoubleBE, S.fill = V.fill, S.inspect = V.inspect, S.toArrayBuffer = V.toArrayBuffer, S;
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
    }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(t, n, s) {
      (function(i, r, g, l, c, h2, u, p, f) {
        var g = t("buffer").Buffer, m = 4, y = new g(m);
        y.fill(0), n.exports = { hash: function(d, w, v, E) {
          for (var P = w(function(_, C) {
            _.length % m != 0 && (R = _.length + (m - _.length % m), _ = g.concat([_, y], R));
            for (var R, B = [], N2 = C ? _.readInt32BE : _.readInt32LE, j = 0; j < _.length; j += m)
              B.push(N2.call(_, j));
            return B;
          }(d = g.isBuffer(d) ? d : new g(d), E), 8 * d.length), w = E, T = new g(v), b = w ? T.writeInt32BE : T.writeInt32LE, x = 0; x < P.length; x++)
            b.call(T, P[x], 4 * x, true);
          return T;
        } };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 5: [function(t, n, s) {
      (function(i, r, g, l, c, h2, u, p, f) {
        var g = t("buffer").Buffer, m = t("./sha"), y = t("./sha256"), d = t("./rng"), w = { sha1: m, sha256: y, md5: t("./md5") }, v = 64, E = new g(v);
        function P(_, C) {
          var R = w[_ = _ || "sha1"], B = [];
          return R || T("algorithm:", _, "is not yet supported"), { update: function(N2) {
            return g.isBuffer(N2) || (N2 = new g(N2)), B.push(N2), N2.length, this;
          }, digest: function(N2) {
            var j = g.concat(B), j = C ? function(V, Q2, Z) {
              g.isBuffer(Q2) || (Q2 = new g(Q2)), g.isBuffer(Z) || (Z = new g(Z)), Q2.length > v ? Q2 = V(Q2) : Q2.length < v && (Q2 = g.concat([Q2, E], v));
              for (var ne = new g(v), te2 = new g(v), le = 0; le < v; le++)
                ne[le] = 54 ^ Q2[le], te2[le] = 92 ^ Q2[le];
              return Z = V(g.concat([ne, Z])), V(g.concat([te2, Z]));
            }(R, C, j) : R(j);
            return B = null, N2 ? j.toString(N2) : j;
          } };
        }
        function T() {
          var _ = [].slice.call(arguments).join(" ");
          throw new Error([_, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
        }
        E.fill(0), s.createHash = function(_) {
          return P(_);
        }, s.createHmac = P, s.randomBytes = function(_, C) {
          if (!C || !C.call)
            return new g(d(_));
          try {
            C.call(this, void 0, new g(d(_)));
          } catch (R) {
            C(R);
          }
        };
        var b, x = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], M = function(_) {
          s[_] = function() {
            T("sorry,", _, "is not implemented yet");
          };
        };
        for (b in x)
          M(x[b]);
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        var g = t("./helpers");
        function m(T, b) {
          T[b >> 5] |= 128 << b % 32, T[14 + (b + 64 >>> 9 << 4)] = b;
          for (var x = 1732584193, M = -271733879, _ = -1732584194, C = 271733878, R = 0; R < T.length; R += 16) {
            var B = x, N2 = M, j = _, V = C, x = d(x, M, _, C, T[R + 0], 7, -680876936), C = d(C, x, M, _, T[R + 1], 12, -389564586), _ = d(_, C, x, M, T[R + 2], 17, 606105819), M = d(M, _, C, x, T[R + 3], 22, -1044525330);
            x = d(x, M, _, C, T[R + 4], 7, -176418897), C = d(C, x, M, _, T[R + 5], 12, 1200080426), _ = d(_, C, x, M, T[R + 6], 17, -1473231341), M = d(M, _, C, x, T[R + 7], 22, -45705983), x = d(x, M, _, C, T[R + 8], 7, 1770035416), C = d(C, x, M, _, T[R + 9], 12, -1958414417), _ = d(_, C, x, M, T[R + 10], 17, -42063), M = d(M, _, C, x, T[R + 11], 22, -1990404162), x = d(x, M, _, C, T[R + 12], 7, 1804603682), C = d(C, x, M, _, T[R + 13], 12, -40341101), _ = d(_, C, x, M, T[R + 14], 17, -1502002290), x = w(x, M = d(M, _, C, x, T[R + 15], 22, 1236535329), _, C, T[R + 1], 5, -165796510), C = w(C, x, M, _, T[R + 6], 9, -1069501632), _ = w(_, C, x, M, T[R + 11], 14, 643717713), M = w(M, _, C, x, T[R + 0], 20, -373897302), x = w(x, M, _, C, T[R + 5], 5, -701558691), C = w(C, x, M, _, T[R + 10], 9, 38016083), _ = w(_, C, x, M, T[R + 15], 14, -660478335), M = w(M, _, C, x, T[R + 4], 20, -405537848), x = w(x, M, _, C, T[R + 9], 5, 568446438), C = w(C, x, M, _, T[R + 14], 9, -1019803690), _ = w(_, C, x, M, T[R + 3], 14, -187363961), M = w(M, _, C, x, T[R + 8], 20, 1163531501), x = w(x, M, _, C, T[R + 13], 5, -1444681467), C = w(C, x, M, _, T[R + 2], 9, -51403784), _ = w(_, C, x, M, T[R + 7], 14, 1735328473), x = v(x, M = w(M, _, C, x, T[R + 12], 20, -1926607734), _, C, T[R + 5], 4, -378558), C = v(C, x, M, _, T[R + 8], 11, -2022574463), _ = v(_, C, x, M, T[R + 11], 16, 1839030562), M = v(M, _, C, x, T[R + 14], 23, -35309556), x = v(x, M, _, C, T[R + 1], 4, -1530992060), C = v(C, x, M, _, T[R + 4], 11, 1272893353), _ = v(_, C, x, M, T[R + 7], 16, -155497632), M = v(M, _, C, x, T[R + 10], 23, -1094730640), x = v(x, M, _, C, T[R + 13], 4, 681279174), C = v(C, x, M, _, T[R + 0], 11, -358537222), _ = v(_, C, x, M, T[R + 3], 16, -722521979), M = v(M, _, C, x, T[R + 6], 23, 76029189), x = v(x, M, _, C, T[R + 9], 4, -640364487), C = v(C, x, M, _, T[R + 12], 11, -421815835), _ = v(_, C, x, M, T[R + 15], 16, 530742520), x = E(x, M = v(M, _, C, x, T[R + 2], 23, -995338651), _, C, T[R + 0], 6, -198630844), C = E(C, x, M, _, T[R + 7], 10, 1126891415), _ = E(_, C, x, M, T[R + 14], 15, -1416354905), M = E(M, _, C, x, T[R + 5], 21, -57434055), x = E(x, M, _, C, T[R + 12], 6, 1700485571), C = E(C, x, M, _, T[R + 3], 10, -1894986606), _ = E(_, C, x, M, T[R + 10], 15, -1051523), M = E(M, _, C, x, T[R + 1], 21, -2054922799), x = E(x, M, _, C, T[R + 8], 6, 1873313359), C = E(C, x, M, _, T[R + 15], 10, -30611744), _ = E(_, C, x, M, T[R + 6], 15, -1560198380), M = E(M, _, C, x, T[R + 13], 21, 1309151649), x = E(x, M, _, C, T[R + 4], 6, -145523070), C = E(C, x, M, _, T[R + 11], 10, -1120210379), _ = E(_, C, x, M, T[R + 2], 15, 718787259), M = E(M, _, C, x, T[R + 9], 21, -343485551), x = P(x, B), M = P(M, N2), _ = P(_, j), C = P(C, V);
          }
          return Array(x, M, _, C);
        }
        function y(T, b, x, M, _, C) {
          return P((b = P(P(b, T), P(M, C))) << _ | b >>> 32 - _, x);
        }
        function d(T, b, x, M, _, C, R) {
          return y(b & x | ~b & M, T, b, _, C, R);
        }
        function w(T, b, x, M, _, C, R) {
          return y(b & M | x & ~M, T, b, _, C, R);
        }
        function v(T, b, x, M, _, C, R) {
          return y(b ^ x ^ M, T, b, _, C, R);
        }
        function E(T, b, x, M, _, C, R) {
          return y(x ^ (b | ~M), T, b, _, C, R);
        }
        function P(T, b) {
          var x = (65535 & T) + (65535 & b);
          return (T >> 16) + (b >> 16) + (x >> 16) << 16 | 65535 & x;
        }
        n.exports = function(T) {
          return g.hash(T, m, 16);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        n.exports = function(g) {
          for (var m, y = new Array(g), d = 0; d < g; d++)
            !(3 & d) && (m = 4294967296 * Math.random()), y[d] = m >>> ((3 & d) << 3) & 255;
          return y;
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 8: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        var g = t("./helpers");
        function m(w, v) {
          w[v >> 5] |= 128 << 24 - v % 32, w[15 + (v + 64 >> 9 << 4)] = v;
          for (var E, P, T, b = Array(80), x = 1732584193, M = -271733879, _ = -1732584194, C = 271733878, R = -1009589776, B = 0; B < w.length; B += 16) {
            for (var N2 = x, j = M, V = _, Q2 = C, Z = R, ne = 0; ne < 80; ne++) {
              b[ne] = ne < 16 ? w[B + ne] : d(b[ne - 3] ^ b[ne - 8] ^ b[ne - 14] ^ b[ne - 16], 1);
              var te2 = y(y(d(x, 5), (te2 = M, P = _, T = C, (E = ne) < 20 ? te2 & P | ~te2 & T : !(E < 40) && E < 60 ? te2 & P | te2 & T | P & T : te2 ^ P ^ T)), y(y(R, b[ne]), (E = ne) < 20 ? 1518500249 : E < 40 ? 1859775393 : E < 60 ? -1894007588 : -899497514)), R = C, C = _, _ = d(M, 30), M = x, x = te2;
            }
            x = y(x, N2), M = y(M, j), _ = y(_, V), C = y(C, Q2), R = y(R, Z);
          }
          return Array(x, M, _, C, R);
        }
        function y(w, v) {
          var E = (65535 & w) + (65535 & v);
          return (w >> 16) + (v >> 16) + (E >> 16) << 16 | 65535 & E;
        }
        function d(w, v) {
          return w << v | w >>> 32 - v;
        }
        n.exports = function(w) {
          return g.hash(w, m, 20, true);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        function g(v, E) {
          var P = (65535 & v) + (65535 & E);
          return (v >> 16) + (E >> 16) + (P >> 16) << 16 | 65535 & P;
        }
        function m(v, E) {
          var P, T = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), b = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), x = new Array(64);
          v[E >> 5] |= 128 << 24 - E % 32, v[15 + (E + 64 >> 9 << 4)] = E;
          for (var M, _, C = 0; C < v.length; C += 16) {
            for (var R = b[0], B = b[1], N2 = b[2], j = b[3], V = b[4], Q2 = b[5], Z = b[6], ne = b[7], te2 = 0; te2 < 64; te2++)
              x[te2] = te2 < 16 ? v[te2 + C] : g(g(g((_ = x[te2 - 2], d(_, 17) ^ d(_, 19) ^ w(_, 10)), x[te2 - 7]), (_ = x[te2 - 15], d(_, 7) ^ d(_, 18) ^ w(_, 3))), x[te2 - 16]), P = g(g(g(g(ne, d(_ = V, 6) ^ d(_, 11) ^ d(_, 25)), V & Q2 ^ ~V & Z), T[te2]), x[te2]), M = g(d(M = R, 2) ^ d(M, 13) ^ d(M, 22), R & B ^ R & N2 ^ B & N2), ne = Z, Z = Q2, Q2 = V, V = g(j, P), j = N2, N2 = B, B = R, R = g(P, M);
            b[0] = g(R, b[0]), b[1] = g(B, b[1]), b[2] = g(N2, b[2]), b[3] = g(j, b[3]), b[4] = g(V, b[4]), b[5] = g(Q2, b[5]), b[6] = g(Z, b[6]), b[7] = g(ne, b[7]);
          }
          return b;
        }
        var y = t("./helpers"), d = function(v, E) {
          return v >>> E | v << 32 - E;
        }, w = function(v, E) {
          return v >>> E;
        };
        n.exports = function(v) {
          return y.hash(v, m, 32, true);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        s.read = function(g, m, y, d, C) {
          var v, E, P = 8 * C - d - 1, T = (1 << P) - 1, b = T >> 1, x = -7, M = y ? C - 1 : 0, _ = y ? -1 : 1, C = g[m + M];
          for (M += _, v = C & (1 << -x) - 1, C >>= -x, x += P; 0 < x; v = 256 * v + g[m + M], M += _, x -= 8)
            ;
          for (E = v & (1 << -x) - 1, v >>= -x, x += d; 0 < x; E = 256 * E + g[m + M], M += _, x -= 8)
            ;
          if (v === 0)
            v = 1 - b;
          else {
            if (v === T)
              return E ? NaN : 1 / 0 * (C ? -1 : 1);
            E += Math.pow(2, d), v -= b;
          }
          return (C ? -1 : 1) * E * Math.pow(2, v - d);
        }, s.write = function(g, m, y, d, w, R) {
          var E, P, T = 8 * R - w - 1, b = (1 << T) - 1, x = b >> 1, M = w === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, _ = d ? 0 : R - 1, C = d ? 1 : -1, R = m < 0 || m === 0 && 1 / m < 0 ? 1 : 0;
          for (m = Math.abs(m), isNaN(m) || m === 1 / 0 ? (P = isNaN(m) ? 1 : 0, E = b) : (E = Math.floor(Math.log(m) / Math.LN2), m * (d = Math.pow(2, -E)) < 1 && (E--, d *= 2), 2 <= (m += 1 <= E + x ? M / d : M * Math.pow(2, 1 - x)) * d && (E++, d /= 2), b <= E + x ? (P = 0, E = b) : 1 <= E + x ? (P = (m * d - 1) * Math.pow(2, w), E += x) : (P = m * Math.pow(2, x - 1) * Math.pow(2, w), E = 0)); 8 <= w; g[y + _] = 255 & P, _ += C, P /= 256, w -= 8)
            ;
          for (E = E << w | P, T += w; 0 < T; g[y + _] = 255 & E, _ += C, E /= 256, T -= 8)
            ;
          g[y + _ - C] |= 128 * R;
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
    }, { buffer: 3, lYpoI2: 11 }], 11: [function(t, n, s) {
      (function(i, r, a, l, c, h2, u, p, f) {
        var g, m, y;
        function d() {
        }
        (i = n.exports = {}).nextTick = (m = "undefined" < "u", y = "undefined" < "u", m ? function(w) {
          return (void 0).setImmediate(w);
        } : y ? (g = [], (void 0).addEventListener("message", function(w) {
          var v = w.source;
          v !== void 0 && v !== null || w.data !== "process-tick" || (w.stopPropagation(), 0 < g.length && g.shift()());
        }, true), function(w) {
          g.push(w), (void 0).postMessage("process-tick", "*");
        }) : function(w) {
          setTimeout(w, 0);
        }), i.title = "browser", i.browser = true, i.env = {}, i.argv = [], i.on = d, i.addListener = d, i.once = d, i.off = d, i.removeListener = d, i.removeAllListeners = d, i.emit = d, i.binding = function(w) {
          throw new Error("process.binding is not supported");
        }, i.cwd = function() {
          return "/";
        }, i.chdir = function(w) {
          throw new Error("process.chdir is not supported");
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
    }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
  });
})(hl);
var dl = [
  // Keep this list sorted
  "abs",
  "acos",
  "all",
  "any",
  "asin",
  "atan",
  "ceil",
  "clamp",
  "cos",
  "cross",
  "dFdx",
  "dFdy",
  "degrees",
  "distance",
  "dot",
  "equal",
  "exp",
  "exp2",
  "faceforward",
  "floor",
  "fract",
  "gl_BackColor",
  "gl_BackLightModelProduct",
  "gl_BackLightProduct",
  "gl_BackMaterial",
  "gl_BackSecondaryColor",
  "gl_ClipPlane",
  "gl_ClipVertex",
  "gl_Color",
  "gl_DepthRange",
  "gl_DepthRangeParameters",
  "gl_EyePlaneQ",
  "gl_EyePlaneR",
  "gl_EyePlaneS",
  "gl_EyePlaneT",
  "gl_Fog",
  "gl_FogCoord",
  "gl_FogFragCoord",
  "gl_FogParameters",
  "gl_FragColor",
  "gl_FragCoord",
  "gl_FragData",
  "gl_FragDepth",
  "gl_FragDepthEXT",
  "gl_FrontColor",
  "gl_FrontFacing",
  "gl_FrontLightModelProduct",
  "gl_FrontLightProduct",
  "gl_FrontMaterial",
  "gl_FrontSecondaryColor",
  "gl_LightModel",
  "gl_LightModelParameters",
  "gl_LightModelProducts",
  "gl_LightProducts",
  "gl_LightSource",
  "gl_LightSourceParameters",
  "gl_MaterialParameters",
  "gl_MaxClipPlanes",
  "gl_MaxCombinedTextureImageUnits",
  "gl_MaxDrawBuffers",
  "gl_MaxFragmentUniformComponents",
  "gl_MaxLights",
  "gl_MaxTextureCoords",
  "gl_MaxTextureImageUnits",
  "gl_MaxTextureUnits",
  "gl_MaxVaryingFloats",
  "gl_MaxVertexAttribs",
  "gl_MaxVertexTextureImageUnits",
  "gl_MaxVertexUniformComponents",
  "gl_ModelViewMatrix",
  "gl_ModelViewMatrixInverse",
  "gl_ModelViewMatrixInverseTranspose",
  "gl_ModelViewMatrixTranspose",
  "gl_ModelViewProjectionMatrix",
  "gl_ModelViewProjectionMatrixInverse",
  "gl_ModelViewProjectionMatrixInverseTranspose",
  "gl_ModelViewProjectionMatrixTranspose",
  "gl_MultiTexCoord0",
  "gl_MultiTexCoord1",
  "gl_MultiTexCoord2",
  "gl_MultiTexCoord3",
  "gl_MultiTexCoord4",
  "gl_MultiTexCoord5",
  "gl_MultiTexCoord6",
  "gl_MultiTexCoord7",
  "gl_Normal",
  "gl_NormalMatrix",
  "gl_NormalScale",
  "gl_ObjectPlaneQ",
  "gl_ObjectPlaneR",
  "gl_ObjectPlaneS",
  "gl_ObjectPlaneT",
  "gl_Point",
  "gl_PointCoord",
  "gl_PointParameters",
  "gl_PointSize",
  "gl_Position",
  "gl_ProjectionMatrix",
  "gl_ProjectionMatrixInverse",
  "gl_ProjectionMatrixInverseTranspose",
  "gl_ProjectionMatrixTranspose",
  "gl_SecondaryColor",
  "gl_TexCoord",
  "gl_TextureEnvColor",
  "gl_TextureMatrix",
  "gl_TextureMatrixInverse",
  "gl_TextureMatrixInverseTranspose",
  "gl_TextureMatrixTranspose",
  "gl_Vertex",
  "greaterThan",
  "greaterThanEqual",
  "inversesqrt",
  "length",
  "lessThan",
  "lessThanEqual",
  "log",
  "log2",
  "matrixCompMult",
  "max",
  "min",
  "mix",
  "mod",
  "normalize",
  "not",
  "notEqual",
  "pow",
  "radians",
  "reflect",
  "refract",
  "sign",
  "sin",
  "smoothstep",
  "sqrt",
  "step",
  "tan",
  "texture2D",
  "texture2DLod",
  "texture2DProj",
  "texture2DProjLod",
  "textureCube",
  "textureCubeLod",
  "texture2DLodEXT",
  "texture2DProjLodEXT",
  "textureCubeLodEXT",
  "texture2DGradEXT",
  "texture2DProjGradEXT",
  "textureCubeGradEXT"
], vr = dl;
vr = vr.slice().filter(function(o) {
  return !/^(gl\_|texture)/.test(o);
});
vr.concat([
  // the updated gl_ constants
  "gl_VertexID",
  "gl_InstanceID",
  "gl_Position",
  "gl_PointSize",
  "gl_FragCoord",
  "gl_FrontFacing",
  "gl_FragDepth",
  "gl_PointCoord",
  "gl_MaxVertexAttribs",
  "gl_MaxVertexUniformVectors",
  "gl_MaxVertexOutputVectors",
  "gl_MaxFragmentInputVectors",
  "gl_MaxVertexTextureImageUnits",
  "gl_MaxCombinedTextureImageUnits",
  "gl_MaxTextureImageUnits",
  "gl_MaxFragmentUniformVectors",
  "gl_MaxDrawBuffers",
  "gl_MinProgramTexelOffset",
  "gl_MaxProgramTexelOffset",
  "gl_DepthRangeParameters",
  "gl_DepthRange",
  "trunc",
  "round",
  "roundEven",
  "isnan",
  "isinf",
  "floatBitsToInt",
  "floatBitsToUint",
  "intBitsToFloat",
  "uintBitsToFloat",
  "packSnorm2x16",
  "unpackSnorm2x16",
  "packUnorm2x16",
  "unpackUnorm2x16",
  "packHalf2x16",
  "unpackHalf2x16",
  "outerProduct",
  "transpose",
  "determinant",
  "inverse",
  "texture",
  "textureSize",
  "textureProj",
  "textureLod",
  "textureOffset",
  "texelFetch",
  "texelFetchOffset",
  "textureProjOffset",
  "textureLodOffset",
  "textureProjLod",
  "textureProjLodOffset",
  "textureGrad",
  "textureGradOffset",
  "textureProjGrad",
  "textureProjGradOffset"
]);
function Zd(o, e) {
  if (typeof o != "object" || o === null)
    return o;
  var t = o[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(o, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function pl(o) {
  var e = Zd(o, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Ue(o, e, t) {
  return e = pl(e), e in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : o[e] = t, o;
}
var Ee = {
  position: "csm_Position",
  positionRaw: "csm_PositionRaw",
  pointSize: "csm_PointSize",
  fragColor: "csm_FragColor",
  // PBR
  diffuseColor: "csm_DiffuseColor",
  // Color + alpha
  normal: "csm_Normal",
  // Normal
  roughness: "csm_Roughness",
  // Roughness
  metalness: "csm_Metalness",
  // Metalness
  emissive: "csm_Emissive",
  // Emissive
  ao: "csm_AO",
  // AO
  bump: "csm_Bump",
  // Bump
  depthAlpha: "csm_DepthAlpha"
  // Depth
}, ut, Zn;
ut = {}, Ue(ut, "".concat(Ee.normal), {
  "#include <beginnormal_vertex>": `
    vec3 objectNormal = `.concat(Ee.normal, `;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)
}), Ue(ut, "".concat(Ee.position), {
  "#include <begin_vertex>": `
    vec3 transformed = `.concat(Ee.position, `;
  `)
}), Ue(ut, "".concat(Ee.positionRaw), {
  "#include <begin_vertex>": `
    vec4 csm_internal_positionUnprojected = `.concat(Ee.positionRaw, `;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)
}), Ue(ut, "".concat(Ee.pointSize), {
  "gl_PointSize = size;": `
    gl_PointSize = `.concat(Ee.pointSize, `;
    `)
}), Ue(ut, "".concat(Ee.diffuseColor), {
  "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = `.concat(Ee.diffuseColor, `;
  `)
}), Ue(ut, "".concat(Ee.fragColor), {
  "#include <dithering_fragment>": `
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Ee.fragColor, `;
  `)
}), Ue(ut, "".concat(Ee.emissive), {
  "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = `.concat(Ee.emissive, `;
    `)
}), Ue(ut, "".concat(Ee.roughness), {
  "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Ee.roughness, `;
    `)
}), Ue(ut, "".concat(Ee.metalness), {
  "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Ee.metalness, `;
    `)
}), Ue(ut, "".concat(Ee.ao), {
  "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Ee.ao, `;
    `)
}), Ue(ut, "".concat(Ee.bump), {
  "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Ee.bump, " - (dot(").concat(Ee.bump, `, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)
}), Ue(ut, "".concat(Ee.depthAlpha), {
  "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );": `
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Ee.depthAlpha, ` );
    `),
  "gl_FragColor = packDepthToRGBA( fragCoordZ );": `
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Ee.depthAlpha, `;
    `)
});
Zn = {}, Ue(Zn, "".concat(Ee.position), {
  "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Ee.position, `, 1.0 );
  `)
}), Ue(Zn, "".concat(Ee.positionRaw), {
  "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = `.concat(Ee.position, `;
  `)
}), Ue(Zn, "".concat(Ee.diffuseColor), {
  "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(Ee.diffuseColor, `;
  `)
}), Ue(Zn, "".concat(Ee.fragColor), {
  "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(Ee.fragColor, `;
  `)
});
var ht;
ht = {}, Ue(ht, "".concat(Ee.position), "*"), Ue(ht, "".concat(Ee.positionRaw), "*"), Ue(ht, "".concat(Ee.normal), "*"), Ue(ht, "".concat(Ee.pointSize), ["PointsMaterial"]), Ue(ht, "".concat(Ee.diffuseColor), "*"), Ue(ht, "".concat(Ee.fragColor), "*"), Ue(ht, "".concat(Ee.emissive), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ue(ht, "".concat(Ee.roughness), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ue(ht, "".concat(Ee.metalness), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ue(ht, "".concat(Ee.ao), ["MeshStandardMaterial", "MeshPhysicalMaterial", "MeshBasicMaterial", "MeshLambertMaterial", "MeshPhongMaterial", "MeshToonMaterial"]), Ue(ht, "".concat(Ee.bump), ["MeshLambertMaterial", "MeshMatcapMaterial", "MeshNormalMaterial", "MeshPhongMaterial", "MeshPhysicalMaterial", "MeshStandardMaterial", "MeshToonMaterial", "ShadowMaterial"]), Ue(ht, "".concat(Ee.depthAlpha), "*");
new Box3();
new Vector3();
UniformsLib.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new Vector2(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
ShaderLib.line = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.fog,
    UniformsLib.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
new Vector4();
new Vector3();
new Vector3();
new Vector4();
new Vector4();
new Vector4();
new Vector3();
new Matrix4();
new Line3();
new Vector3();
new Box3();
new Sphere();
new Vector4();
const ym = {
  key: 0,
  args: [0, 1, 64]
}, vm = {
  key: 1,
  args: [0.5, 1, 64]
}, _m = { key: 2 }, xm = ["tone-mapped", "map", "side", "color"];
/* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    args: { default: null },
    from: { default: "rect" },
    toneMapped: { type: Boolean, default: false },
    map: { default: null },
    intensity: { default: 1 },
    color: { default: new Color(16777215) }
  },
  setup(o) {
    const e = o, t = ref();
    return watchEffect(() => {
      t.value && (t.value.color.multiplyScalar(e.intensity), t.value.needsUpdate = true);
    }), (n, s) => (openBlock(), createElementBlock("TresMesh", null, [
      n.from === "circle" ? (openBlock(), createElementBlock("TresRingGeometry", ym)) : n.from === "ring" ? (openBlock(), createElementBlock("TresRingGeometry", vm)) : n.from === "rect" ? (openBlock(), createElementBlock("TresPlaneGeometry", _m)) : (openBlock(), createBlock(e.from, {
        key: 3,
        args: e
      })),
      createElementVNode("TresMeshBasicMaterial", {
        ref_key: "material",
        ref: t,
        "tone-mapped": n.toneMapped,
        map: n.map,
        side: unref(DoubleSide),
        color: n.color
      }, null, 8, xm)
    ]));
  }
});
var _l = { exports: {} };
(function(o, e) {
  (function(t, n) {
    o.exports = n();
  })(Td, function() {
    var t = function() {
      function n(f) {
        return r.appendChild(f.dom), f;
      }
      function s(f) {
        for (var g = 0; g < r.children.length; g++)
          r.children[g].style.display = g === f ? "block" : "none";
        i = f;
      }
      var i = 0, r = (void 0).createElement("div");
      r.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", r.addEventListener("click", function(f) {
        f.preventDefault(), s(++i % r.children.length);
      }, false);
      var a = (performance || Date).now(), l = a, c = 0, h2 = n(new t.Panel("FPS", "#0ff", "#002")), u = n(new t.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory)
        var p = n(new t.Panel("MB", "#f08", "#201"));
      return s(0), { REVISION: 16, dom: r, addPanel: n, showPanel: s, begin: function() {
        a = (performance || Date).now();
      }, end: function() {
        c++;
        var f = (performance || Date).now();
        if (u.update(f - a, 200), f > l + 1e3 && (h2.update(1e3 * c / (f - l), 100), l = f, c = 0, p)) {
          var g = performance.memory;
          p.update(g.usedJSHeapSize / 1048576, g.jsHeapSizeLimit / 1048576);
        }
        return f;
      }, update: function() {
        a = this.end();
      }, domElement: r, setMode: s };
    };
    return t.Panel = function(n, s, i) {
      var r = 1 / 0, a = 0, l = Math.round, c = l((void 0).devicePixelRatio || 1), h2 = 80 * c, u = 48 * c, p = 3 * c, f = 2 * c, g = 3 * c, m = 15 * c, y = 74 * c, d = 30 * c, w = (void 0).createElement("canvas");
      w.width = h2, w.height = u, w.style.cssText = "width:80px;height:48px";
      var v = w.getContext("2d");
      return v.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif", v.textBaseline = "top", v.fillStyle = i, v.fillRect(0, 0, h2, u), v.fillStyle = s, v.fillText(n, p, f), v.fillRect(g, m, y, d), v.fillStyle = i, v.globalAlpha = 0.9, v.fillRect(g, m, y, d), { dom: w, update: function(E, P) {
        r = Math.min(r, E), a = Math.max(a, E), v.fillStyle = i, v.globalAlpha = 1, v.fillRect(0, 0, h2, m), v.fillStyle = s, v.fillText(l(E) + " " + n + " (" + l(r) + "-" + l(a) + ")", p, f), v.drawImage(w, g + c, m, y - c, d, g, m, y - c, d), v.fillRect(g + y - c, m, c, d), v.fillStyle = i, v.globalAlpha = 0.9, v.fillRect(g + y - c, m, c, l((1 - E / P) * d));
      } };
    }, t;
  });
})(_l);
var qm = _l.exports;
const Qm = /* @__PURE__ */ Is(qm);
defineComponent({
  name: "Stats",
  props: {
    showPanel: {
      type: Number,
      default: 0
    }
  },
  setup(o, { expose: e }) {
    const t = new Qm();
    e({ instance: t });
    const n = (void 0).body;
    t.showPanel(o.showPanel || 0), n == null || n.appendChild(t.dom);
    const { onBeforeRender: s, onAfterRender: i } = qr$1();
    s(() => t.begin(), Number.NEGATIVE_INFINITY), i(() => t.end(), Number.POSITIVE_INFINITY), onUnmounted(() => {
      n == null || n.removeChild(t.dom);
    });
  }
});
class Jm {
  constructor(e, t, n) {
    this.name = e, this.fg = t, this.bg = n, this.PR = Math.round((void 0).devicePixelRatio || 1), this.WIDTH = 90 * this.PR, this.HEIGHT = 48 * this.PR, this.TEXT_X = 3 * this.PR, this.TEXT_Y = 2 * this.PR, this.GRAPH_X = 3 * this.PR, this.GRAPH_Y = 15 * this.PR, this.GRAPH_WIDTH = 84 * this.PR, this.GRAPH_HEIGHT = 30 * this.PR, this.canvas = (void 0).createElement("canvas"), this.canvas.width = 90 * this.PR, this.canvas.height = 48 * this.PR, this.canvas.style.width = "90px", this.canvas.style.position = "absolute", this.canvas.style.height = "48px", this.canvas.style.cssText = "width:90px;height:48px", this.context = this.canvas.getContext("2d"), this.context && (this.context.font = "bold " + 9 * this.PR + "px Helvetica,Arial,sans-serif", this.context.textBaseline = "top", this.context.fillStyle = this.bg, this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT), this.context.fillStyle = this.fg, this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y), this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT), this.context.fillStyle = this.bg, this.context.globalAlpha = 0.9, this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT));
  }
  update(e, t, n, s, i = 0) {
    let r = 1 / 0, a = 0;
    this.context && (r = Math.min(r, e), a = Math.max(n, e), s = Math.max(s, t), this.context.fillStyle = this.bg, this.context.globalAlpha = 1, this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y), this.context.fillStyle = this.fg, this.context.fillText(e.toFixed(i) + " " + this.name + " (" + r.toFixed(i) + "-" + parseFloat(a.toFixed(i)) + ")", this.TEXT_X, this.TEXT_Y), this.context.drawImage(this.canvas, this.GRAPH_X + this.PR, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT, this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT), this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT), this.context.fillStyle = this.bg, this.context.globalAlpha = 0.9, this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, (1 - t / s) * this.GRAPH_HEIGHT));
  }
}
const xl = class Kn {
  constructor({ logsPerSecond: e = 20, samplesLog: t = 100, samplesGraph: n = 10, precision: s = 2, minimal: i = false, horizontal: r = true, mode: a = 0 } = {}) {
    this.totalCpuDuration = 0, this.totalGpuDuration = 0, this.totalGpuDurationCompute = 0, this.totalFps = 0, this.activeQuery = null, this.gpuQueries = [], this.renderCount = 0, this.mode = a, this.horizontal = r, this.dom = (void 0).createElement("div"), this.dom.style.cssText = "position:fixed;top:0;left:0;opacity:0.9;z-index:10000;", i && (this.dom.style.cssText += "cursor:pointer"), this.gl = null, this.query = null, this.isRunningCPUProfiling = false, this.minimal = i, this.beginTime = (performance || Date).now(), this.prevTime = this.beginTime, this.prevCpuTime = this.beginTime, this.frames = 0, this.renderCount = 0, this.threeRendererPatched = false, this.averageCpu = {
      logs: [],
      graph: []
    }, this.averageGpu = {
      logs: [],
      graph: []
    }, this.averageGpuCompute = {
      logs: [],
      graph: []
    }, this.queryCreated = false, this.fpsPanel = this.addPanel(new Kn.Panel("FPS", "#0ff", "#002"), 0), this.msPanel = this.addPanel(new Kn.Panel("CPU", "#0f0", "#020"), 1), this.gpuPanel = null, this.gpuPanelCompute = null, this.samplesLog = t, this.samplesGraph = n, this.precision = s, this.logsPerSecond = e, this.minimal ? (this.dom.addEventListener("click", (l) => {
      l.preventDefault(), this.showPanel(++this.mode % this.dom.children.length);
    }, false), this.mode = a, this.showPanel(this.mode)) : (void 0).addEventListener("resize", () => {
      this.resizePanel(this.fpsPanel, 0), this.resizePanel(this.msPanel, 1), this.gpuPanel && this.resizePanel(this.gpuPanel, 2), this.gpuPanelCompute && this.resizePanel(this.gpuPanelCompute, 3);
    });
  }
  patchThreeRenderer(e) {
    const t = e.render, n = this;
    e.render = function(s, i) {
      n.begin(), t.call(this, s, i), n.end();
    }, this.threeRendererPatched = true;
  }
  resizePanel(e, t) {
    e.canvas.style.position = "absolute", this.minimal ? e.canvas.style.display = "none" : (e.canvas.style.display = "block", this.horizontal ? (e.canvas.style.top = "0px", e.canvas.style.left = t * e.WIDTH / e.PR + "px") : (e.canvas.style.left = "0px", e.canvas.style.top = t * e.HEIGHT / e.PR + "px"));
  }
  addPanel(e, t) {
    return e.canvas && (this.dom.appendChild(e.canvas), this.resizePanel(e, t)), e;
  }
  showPanel(e) {
    for (let t = 0; t < this.dom.children.length; t++) {
      const n = this.dom.children[t];
      n.style.display = t === e ? "block" : "none";
    }
    this.mode = e;
  }
  async init(e) {
    if (!e) {
      console.error('Stats: The "canvas" parameter is undefined.');
      return;
    }
    if (e.isWebGLRenderer && !this.threeRendererPatched) {
      const t = e;
      this.patchThreeRenderer(t), this.gl = t.getContext();
    } else
      !this.gl && e instanceof WebGL2RenderingContext && (this.gl = e);
    if (e.isWebGPURenderer) {
      e.backend.trackTimestamp = true, await e.hasFeatureAsync("timestamp-query") && (this.gpuPanel = this.addPanel(new Kn.Panel("GPU", "#ff0", "#220"), 2), this.gpuPanelCompute = this.addPanel(new Kn.Panel("CPT", "#e1e1e1", "#212121"), 3), this.info = e.info);
      return;
    } else if (!this.gl && e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas) {
      if (this.gl = e.getContext("webgl2"), !this.gl) {
        console.error("Stats: Unable to obtain WebGL2 context.");
        return;
      }
    } else if (!this.gl) {
      console.error("Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas.");
      return;
    }
    this.ext = this.gl.getExtension("EXT_disjoint_timer_query_webgl2"), this.ext && (this.gpuPanel = this.addPanel(new Kn.Panel("GPU", "#ff0", "#220"), 2));
  }
  begin() {
    this.isRunningCPUProfiling || this.beginProfiling("cpu-started"), !(!this.gl || !this.ext) && this.gl && this.ext && (this.activeQuery && this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.activeQuery = this.gl.createQuery(), this.activeQuery !== null && this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.activeQuery));
  }
  end() {
    this.renderCount++, this.gl && this.ext && this.activeQuery && (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.gpuQueries.push({ query: this.activeQuery }), this.activeQuery = null);
  }
  processGpuQueries() {
    !this.gl || !this.ext || (this.totalGpuDuration = 0, this.gpuQueries.forEach((e, t) => {
      if (this.gl) {
        const n = this.gl.getQueryParameter(e.query, this.gl.QUERY_RESULT_AVAILABLE), s = this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);
        if (n && !s) {
          const r = this.gl.getQueryParameter(e.query, this.gl.QUERY_RESULT) * 1e-6;
          this.totalGpuDuration += r, this.gl.deleteQuery(e.query), this.gpuQueries.splice(t, 1);
        }
      }
    }));
  }
  update() {
    this.info === void 0 ? this.processGpuQueries() : (this.totalGpuDuration = this.info.render.timestamp, this.totalGpuDurationCompute = this.info.compute.timestamp, this.addToAverage(this.totalGpuDurationCompute, this.averageGpuCompute)), this.endProfiling("cpu-started", "cpu-finished", "cpu-duration"), this.addToAverage(this.totalCpuDuration, this.averageCpu), this.addToAverage(this.totalGpuDuration, this.averageGpu), this.renderCount = 0, this.totalCpuDuration === 0 && this.beginProfiling("cpu-started"), this.totalCpuDuration = 0, this.totalFps = 0, this.beginTime = this.endInternal();
  }
  endInternal() {
    this.frames++;
    const e = (performance || Date).now();
    if (e >= this.prevCpuTime + 1e3 / this.logsPerSecond && (this.updatePanel(this.msPanel, this.averageCpu), this.updatePanel(this.gpuPanel, this.averageGpu), this.gpuPanelCompute && this.updatePanel(this.gpuPanelCompute, this.averageGpuCompute), this.prevCpuTime = e), e >= this.prevTime + 1e3) {
      const t = this.frames * 1e3 / (e - this.prevTime);
      this.fpsPanel.update(t, t, 100, 100, 0), this.prevTime = e, this.frames = 0;
    }
    return e;
  }
  addToAverage(e, t) {
    t.logs.push(e), t.logs.length > this.samplesLog && t.logs.shift(), t.graph.push(e), t.graph.length > this.samplesGraph && t.graph.shift();
  }
  beginProfiling(e) {
    (void 0).performance && ((void 0).performance.mark(e), this.isRunningCPUProfiling = true);
  }
  endProfiling(e, t, n) {
    if ((void 0).performance && t && this.isRunningCPUProfiling) {
      (void 0).performance.mark(t);
      const s = performance.measure(n, e, t);
      this.totalCpuDuration += s.duration, this.isRunningCPUProfiling = false;
    }
  }
  updatePanel(e, t) {
    if (t.logs.length > 0) {
      let n = 0, s = 0.01;
      for (let a = 0; a < t.logs.length; a++)
        n += t.logs[a], t.logs[a] > s && (s = t.logs[a]);
      let i = 0, r = 0.01;
      for (let a = 0; a < t.graph.length; a++)
        i += t.graph[a], t.graph[a] > r && (r = t.graph[a]);
      e && e.update(n / Math.min(t.logs.length, this.samplesLog), i / Math.min(t.graph.length, this.samplesGraph), s, r, this.precision);
    }
  }
  get domElement() {
    return this.dom;
  }
  get container() {
    return console.warn("Stats: Deprecated! this.container as been replaced to this.dom "), this.dom;
  }
};
xl.Panel = Jm;
let eg = xl;
defineComponent({
  name: "StatsGl",
  props: [
    "logsPerSecond",
    "samplesLog",
    "samplesGraph",
    "precision",
    "horizontal",
    "minimal",
    "mode"
  ],
  setup(o, { expose: e }) {
    const t = new eg({
      logsPerSecond: o.logsPerSecond,
      samplesLog: o.samplesLog,
      samplesGraph: o.samplesGraph,
      precision: o.precision,
      horizontal: o.horizontal,
      minimal: o.minimal,
      mode: o.mode
    });
    e({ instance: t });
    const n = (void 0).body, s = t.dom || t.container;
    n == null || n.appendChild(s);
    const { renderer: i } = pe(), { onAfterRender: r } = qr$1();
    t.init(i.value), r(() => t.update(), Number.POSITIVE_INFINITY), onUnmounted(() => {
      n == null || n.removeChild(s);
    });
  }
});
defineComponent({
  name: "BakeShadows",
  setup() {
    const { renderer: o } = pe();
    watchEffect(() => {
      o.value.shadowMap.autoUpdate = false, o.value.shadowMap.needsUpdate = true;
    });
  }
});
var tg = `#include <common>

void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;

  
  
  float size = 0.03;

  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;

  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;

  gl_Position = projectionMatrix * mvPosition;
}`, ng = `void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}`;
const Os = new Vector3(0, 0, 0), jr = new Vector3(0, 0, 0), sg = new Vector3(0, 0, 0);
function na(o, e, t) {
  const n = Os.setFromMatrixPosition(o.matrixWorld);
  n.project(e);
  const s = t.width / 2, i = t.height / 2;
  return [
    (Number.isNaN(n.x) ? 0 : n.x) * s + s,
    -(n.y * i) + i
  ];
}
function ig(o, e) {
  const t = Os.setFromMatrixPosition(o.matrixWorld), n = jr.setFromMatrixPosition(e.matrixWorld), s = t.sub(n), i = e.getWorldDirection(sg);
  return s.angleTo(i) > Math.PI / 2;
}
function rg(o, e, t, n) {
  const s = Os.setFromMatrixPosition(o.matrixWorld), i = s.clone();
  i.project(e), t.setFromCamera(new Vector2(i.x, i.y), e);
  const r = t.intersectObjects(n, true);
  if (r.length > 0) {
    const a = r[0].distance;
    return s.distanceTo(t.ray.origin) < a;
  }
  return true;
}
function og(o, e) {
  if (e instanceof OrthographicCamera)
    return e.zoom;
  if (e instanceof PerspectiveCamera) {
    const t = Os.setFromMatrixPosition(o.matrixWorld), n = jr.setFromMatrixPosition(e.matrixWorld), s = e.fov * Math.PI / 180, i = t.distanceTo(n);
    return 1 / (2 * Math.tan(s / 2) * i);
  } else
    return 1;
}
function ag(o, e, t) {
  if (e instanceof PerspectiveCamera || e instanceof OrthographicCamera) {
    const n = Os.setFromMatrixPosition(o.matrixWorld), s = jr.setFromMatrixPosition(e.matrixWorld), i = n.distanceTo(s), r = (t[1] - t[0]) / (e.far - e.near), a = t[1] - r * e.far;
    return Math.round(r * i + a);
  }
}
const xr = (o) => Math.abs(o) < 1e-10 ? 0 : o;
function wl(o, e, t = "") {
  let n = "matrix3d(";
  for (let s = 0; s !== 16; s++)
    n += xr(e[s] * o.elements[s]) + (s !== 15 ? "," : ")");
  return t + n;
}
const lg = /* @__PURE__ */ ((o) => (e) => wl(e, o))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]), cg = /* @__PURE__ */ ((o) => (e, t) => wl(e, o(t), "translate(-50%,-50%)"))((o) => [1 / o, 1 / o, 1 / o, 1, -1 / o, -1 / o, -1 / o, -1, 1 / o, 1 / o, 1 / o, 1, 1, 1, 1, 1]), ug = ["geometry", "material"];
/* @__PURE__ */ defineComponent({
  __name: "HTML",
  props: {
    geometry: { default: new PlaneGeometry() },
    material: {},
    as: { default: "div" },
    transform: { type: Boolean, default: false },
    portal: {},
    wrapperClass: {},
    eps: { default: 1e-4 },
    distanceFactor: {},
    fullscreen: { type: Boolean },
    center: { type: Boolean },
    pointerEvents: { default: "auto" },
    sprite: { type: Boolean, default: false },
    zIndexRange: { default: () => [16777271, 0] },
    occlude: { type: [Object, null, Array, Boolean, String] }
  },
  emits: ["onOcclude"],
  setup(o, { expose: e, emit: t }) {
    const n = o, s = t, i = useSlots(), r = useAttrs(), a = ref(), l = ref(), {
      geometry: c,
      material: h2,
      as: u,
      transform: p,
      portal: f,
      wrapperClass: g,
      eps: m,
      distanceFactor: y,
      fullscreen: d,
      center: w,
      pointerEvents: v,
      sprite: E,
      occlude: P,
      zIndexRange: T
    } = toRefs(n), { renderer: b, scene: x, camera: M, raycaster: _, sizes: C } = pe(), R = computed(() => (void 0).createElement(u.value)), B = ref([0, 0]), N2 = ref(0), j = ref(), V = computed(() => p.value ? {
      position: "absolute",
      top: 0,
      left: 0,
      width: `${C.width.value}px`,
      height: `${C.height.value}px`,
      transformStyle: "preserve-3d",
      pointerEvents: "none",
      zIndex: 2,
      willChange: "transform"
    } : {
      position: "absolute",
      transform: w.value ? "translate3d(-50%,-50%,0)" : "none",
      ...d.value && {
        top: -C.height.value / 2,
        left: -C.width.value / 2,
        width: `${C.width.value}px`,
        height: `${C.height.value}px`
      },
      zIndex: 2,
      ...Object.assign({}, r.style),
      willChange: "transform"
    }), Q2 = computed(() => ({
      position: "absolute",
      pointerEvents: v.value
    })), Z = ref(null), ne = ref(false), te2 = computed(
      () => (P == null ? void 0 : P.value) && (P == null ? void 0 : P.value) !== "blending" || Array.isArray(P == null ? void 0 : P.value) && (P == null ? void 0 : P.value.length) && isRef(P.value[0])
    );
    watch(
      () => P,
      ({ value: k }) => {
        k === "blending" ? (R.value.style.zIndex = `${Math.floor(T.value[0] / 2)}`, R.value.style.position = "absolute", R.value.style.pointerEvents = "none") : (R.value.style.zIndex = null, R.value.style.position = null, R.value.style.pointerEvents = null);
      }
    ), watch(
      () => {
        var k;
        return [a.value, b.value, C.width.value, C.height.value, (k = i.default) == null ? void 0 : k.call(i)];
      },
      ([k, D]) => {
        var O, z2, S, A, L, X;
        if (k && D) {
          const H = (f == null ? void 0 : f.value) || D.domElement;
          if ((O = x.value) == null || O.updateMatrixWorld(), p.value)
            R.value.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
          else {
            const G2 = na(k, M.value, {
              width: C.width.value,
              height: C.height.value
            });
            R.value.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${G2[0]}px,${G2[1]}px,0);transform-origin:0 0;`;
          }
          H && !R.value.parentNode && ((z2 = H.parentNode) == null || z2.appendChild(R.value)), p.value ? j.value = createVNode("div", { id: "outer", style: V.value }, [
            createVNode("div", { id: "inner", style: Q2.value }, [
              createVNode("div", {
                key: (S = l.value) == null ? void 0 : S.uuid,
                id: x == null ? void 0 : x.value.uuid,
                class: r.class,
                style: r.style
              }, (A = i.default) == null ? void 0 : A.call(i))
            ])
          ]) : j.value = createVNode("div", {
            key: (L = l.value) == null ? void 0 : L.uuid,
            id: x == null ? void 0 : x.value.uuid,
            style: V.value
          }, (X = i.default) == null ? void 0 : X.call(i)), render(j.value, R.value);
        }
      }
    ), watchEffect(() => {
      g != null && g.value && (R.value.className = g.value);
    });
    const le = ref(true), { onBeforeRender: ae2 } = qr$1();
    ae2(({ invalidate: k }) => {
      var D, O, z2, S, A, L, X;
      if (k(), a.value && M.value && b.value) {
        (D = M.value) == null || D.updateMatrixWorld(), a.value.updateWorldMatrix(true, false);
        const H = p.value ? B.value : na(a.value, M.value, {
          width: C.width.value || 0,
          height: C.height.value || 0
        });
        if (p.value || Math.abs(N2.value - M.value.zoom) > m.value || Math.abs(B.value[0] - H[0]) > m.value || Math.abs(B.value[1] - H[1]) > m.value) {
          const G2 = ig(a.value, M.value);
          let q = false;
          te2.value && (Array.isArray(P == null ? void 0 : P.value) ? q = P == null ? void 0 : P.value : (P == null ? void 0 : P.value) !== "blending" && (q = [x.value]));
          const se2 = le.value;
          if (q) {
            const F = rg(
              a.value,
              M.value,
              _.value,
              q
            );
            le.value = F && !G2;
          } else
            le.value = !G2;
          se2 !== le.value && (s("onOcclude", !le.value), R.value.style.display = le.value ? "block" : "none");
          const ie2 = Math.floor(T.value[0] / 2), Y2 = P != null && P.value ? te2.value ? [T.value[0], ie2] : [ie2 - 1, 0] : T.value;
          if (R.value.style.zIndex = `${ag(a.value, M.value, Y2)}`, R.value.style.willChange = "transform", p.value) {
            const [F, oe2] = [
              C.width.value / 2,
              C.height.value / 2
            ], pe2 = M.value.projectionMatrix.elements[5] * oe2, { isOrthographicCamera: Ae2, top: Ve2, left: We2, bottom: xt, right: Xt } = M.value, ln = lg(M.value.matrixWorldInverse), cn2 = Ae2 ? `scale(${pe2})translate(${xr(-(Xt + We2) / 2)}px,${xr((Ve2 + xt) / 2)}px)` : `translateZ(${pe2}px)`;
            let gt2 = a.value.matrixWorld;
            if (E.value && (gt2 = M.value.matrixWorldInverse.clone().transpose().copyPosition(gt2).scale(a.value.scale), gt2.elements[3] = gt2.elements[7] = gt2.elements[11] = 0, gt2.elements[15] = 1), R.value.style.width = `${C.width.value}px`, R.value.style.height = `${C.height.value}px`, R.value.style.perspective = Ae2 ? "" : `${pe2}px`, (O = j.value) != null && O.el && ((z2 = j.value) != null && z2.children) && Array.isArray(j.value.children)) {
              j.value.el.style.willChange = "transform", j.value.el.style.transform = `${cn2}${ln}translate(${F}px,${oe2}px)`;
              const wt = j.value.children[0];
              wt && wt.el && (wt.el.style.willChange = "transform", wt.el.style.transform = cg(
                gt2,
                1 / (((y == null ? void 0 : y.value) || 10) / 400)
              ));
            }
          } else {
            const F = (y == null ? void 0 : y.value) === void 0 ? 1 : og(a.value, M.value) * (y == null ? void 0 : y.value);
            R.value.style.transform = `translate3d(${H[0]}px,${H[1]}px,0) scale(${F})`;
          }
        }
        B.value = H, N2.value = M.value.zoom;
      }
      if (!te2.value && l.value && !ne.value)
        if (p.value) {
          if ((S = j.value) != null && S.el && ((A = j.value) != null && A.children)) {
            const H = ((L = j.value) == null ? void 0 : L.children)[0];
            if (H != null && H.clientWidth && (H != null && H.clientHeight)) {
              const { isOrthographicCamera: G2 } = M.value;
              if (G2 || c)
                r.scale && (Array.isArray(r.scale) ? r.scale instanceof Vector3 ? l.value.scale.copy(r.scale.clone().divideScalar(1)) : l.value.scale.set(1 / r.scale[0], 1 / r.scale[1], 1 / r.scale[2]) : l.value.scale.setScalar(1 / r.scale));
              else {
                const q = ((y == null ? void 0 : y.value) || 10) / 400, se2 = H.clientWidth * q, ie2 = H.clientHeight * q;
                l.value.scale.set(se2, ie2, 1);
              }
              ne.value = true;
            }
          }
        } else {
          const H = R.value.children[0];
          if (H != null && H.clientWidth && (H != null && H.clientHeight)) {
            const q = H.clientWidth * 1, se2 = H.clientHeight * 1;
            l.value.scale.set(q, se2, 1), ne.value = true;
          }
          Z.value.lookAt((X = M.value) == null ? void 0 : X.position);
        }
    });
    const Te = computed(() => ({
      vertexShader: p.value ? void 0 : tg,
      fragmentShader: ng
    })), I = computed(() => {
      const k = Te.value;
      return h2.value || new ShaderMaterial({
        vertexShader: k.vertexShader,
        fragmentShader: k.fragmentShader,
        side: DoubleSide
      });
    });
    return onUnmounted(() => {
      I.value && I.value.dispose(), R.value.remove();
    }), e({ instance: a }), (k, D) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "groupRef",
      ref: a
    }, [
      unref(P) && !te2.value ? (openBlock(), createElementBlock("TresMesh", {
        key: 0,
        ref_key: "meshRef",
        ref: l,
        geometry: unref(c),
        material: I.value
      }, null, 8, ug)) : createCommentVNode("", true)
    ], 512));
  }
});
const _sfc_main = {
  __name: "GlbViewer",
  __ssrInlineRender: true,
  props: {
    model: {
      type: String,
      default: "models/m125.glb"
    }
  },
  setup(__props) {
    const config = useRuntimeConfig();
    console.log(config.app.baseURL);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[500px] glb overflow-y-hidden" }, _attrs))} data-v-5a60de35>`);
      _push(ssrRenderComponent(unref(Lr), {
        "render-mode": "on-demand",
        shadows: "",
        alpha: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<TresPerspectiveCamera${ssrRenderAttr("position", [100, -100, -100])} data-v-5a60de35${_scopeId}></TresPerspectiveCamera>`);
            _push2(ssrRenderComponent(unref(Yg), null, null, _parent2, _scopeId));
            ssrRenderSuspense(_push2, {
              default: () => {
                _push2(ssrRenderComponent(unref(zg), {
                  path: `${unref(config).app.baseURL}${__props.model}`
                }, null, _parent2, _scopeId));
              },
              _: 1
            });
            _push2(`<TresAmbientLight${ssrRenderAttr("position", [0, 0, 0])}${ssrRenderAttr("intensity", 1)} data-v-5a60de35${_scopeId}></TresAmbientLight><TresDirectionalLight${ssrRenderAttr("position", [-4, 8, 4])}${ssrRenderAttr("intensity", 1.5)} data-v-5a60de35${_scopeId}></TresDirectionalLight><TresDirectionalLight${ssrRenderAttr("position", [4, -8, -4])}${ssrRenderAttr("intensity", 1)} data-v-5a60de35${_scopeId}></TresDirectionalLight>`);
          } else {
            return [
              createVNode("TresPerspectiveCamera", { position: [100, -100, -100] }),
              createVNode(unref(Yg)),
              (openBlock(), createBlock(Suspense, null, {
                default: withCtx(() => [
                  createVNode(unref(zg), {
                    path: `${unref(config).app.baseURL}${__props.model}`
                  }, null, 8, ["path"])
                ]),
                _: 1
              })),
              createVNode("TresAmbientLight", {
                position: [0, 0, 0],
                intensity: 1
              }),
              createVNode("TresDirectionalLight", {
                position: [-4, 8, 4],
                intensity: 1.5
              }),
              createVNode("TresDirectionalLight", {
                position: [4, -8, -4],
                intensity: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/GlbViewer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GlbViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a60de35"]]);

export { GlbViewer as default };
//# sourceMappingURL=GlbViewer-CuY8_iYN.mjs.map
