import { defineComponent, computed, openBlock, createElementBlock, mergeProps, unref, renderSlot, ref, watch, normalizeClass, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, Transition, toHandlers, getCurrentInstance, inject, reactive, provide, h, Fragment, withDirectives, vShow, watchEffect, toRef, isVNode, useSSRContext, nextTick, resolveComponent, createElementVNode, createTextVNode, toDisplayString, createVNode } from 'vue';
import { b as buildProps, a as addUnit, w as withInstall, c as arrow_down_default, e as arrow_right_default, f as ElTooltip, u as useResizeObserver, g as withNoopInstall, d as definePropType, i as iconPropType, h as addClass, r as removeClass, j as hasClass, _ as _export_sfc$1, k as useTimeoutFn, m as more_default, l as menu_default, E as ElPopover } from './index-CFvY9vBd.mjs';
import { isNil } from 'lodash-unified';
import { j as useNamespace, I as isUndefined, k as isNumber, K as throwError, _ as _export_sfc, J as isElement, a as useRoute } from './server.mjs';
import { TinyColor } from '@ctrl/tinycolor';
import { isString, isArray, isObject } from '@vue/shared';
import { _ as _sfc_main$a } from './NuxtImg-BACfLaxG.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './nuxt-link-1AZyIxRl.mjs';
import '@popperjs/core';
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

const componentSizes = ["", "default", "small", "large"];
const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
      if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
        result.push(...flattedChildren(child.component.subTree));
      }
    }
  });
  return result;
};
const mutable = (val) => val;
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$2 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const __default__$1 = defineComponent({
  name: "ElAvatar"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError
        }, null, 44, ["src", "alt", "srcset"])) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const nodeList = /* @__PURE__ */ new Map();
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const __default__ = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__file", "collapse-transition.vue"]]);
const ElCollapseTransition = withInstall(CollapseTransition);
const _sfc_main$6 = defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          el.dataset = {};
        }
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$2], ["__file", "menu-collapse-transition.vue"]]);
function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}
function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}
const useMenuCssVar = (props, level) => {
  const ns = useNamespace("menu");
  return computed(() => {
    return ns.cssVarBlock({
      "text-color": props.textColor || "",
      "hover-text-color": props.textColor || "",
      "bg-color": props.backgroundColor || "",
      "hover-bg-color": useMenuColor(props).value || "",
      "active-color": props.activeTextColor || "",
      level: `${level}`
    });
  });
};
const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$2 = "ElSubMenu";
var SubMenu = defineComponent({
  name: COMPONENT_NAME$2,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject("rootMenu");
    if (!rootMenu)
      throwError(COMPONENT_NAME$2, "can not inject root menu");
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$2, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref(null);
    const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
    });
    const isFirstLevel = computed(() => {
      return subMenu.level === 0;
    });
    const appendToBody = computed(() => {
      const value = props.teleported;
      return value === void 0 ? isFirstLevel.value : value;
    });
    const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const mode = computed(() => rootMenu.props.mode);
    reactive({
      index: props.index,
      indexPath,
      active
    });
    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
    const subMenuPopperOffset = computed(() => {
      var _a;
      return (_a = props.popperOffset) != null ? _a : rootMenu.props.popperOffset;
    });
    const subMenuPopperClass = computed(() => {
      var _a;
      return (_a = props.popperClass) != null ? _a : rootMenu.props.popperClass;
    });
    const subMenuShowTimeout = computed(() => {
      var _a;
      return (_a = props.showTimeout) != null ? _a : rootMenu.props.showTimeout;
    });
    const subMenuHideTimeout = computed(() => {
      var _a;
      return (_a = props.hideTimeout) != null ? _a : rootMenu.props.hideTimeout;
    });
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
      var _a;
      if (event.type === "focus") {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        subMenu.mouseInChild.value = true;
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        subMenu.mouseInChild.value = false;
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), subMenuHideTimeout.value));
      if (appendToBody.value && deepDispatch) {
        (_a = subMenu.handleMouseleave) == null ? void 0 : _a.call(subMenu, true);
      }
    };
    watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        h(ElIcon, {
          class: nsSubMenu.e("icon-arrow"),
          style: {
            transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value)
        })
      ];
      const child = rootMenu.isMenuPopup ? h(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: subMenuPopperOffset.value,
        showArrow: false,
        persistent: true,
        popperClass: subMenuPopperClass.value,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return h("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              subMenuPopperClass.value
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            h("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => h("div", {
          class: nsSubMenu.e("title"),
          onClick: handleClick
        }, titleTag)
      }) : h(Fragment, {}, [
        h("div", {
          class: nsSubMenu.e("title"),
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        h(ElCollapseTransition, {}, {
          default: () => {
            var _a2;
            return withDirectives(h("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vShow, opened.value]]);
          }
        })
      ]);
      return h("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});
const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  ellipsisIcon: {
    type: iconPropType,
    default: () => more_default
  },
  popperEffect: {
    type: definePropType(String),
    default: "dark"
  },
  popperClass: String,
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => isString(path));
const menuEmits = {
  close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const sliceIndex = ref(-1);
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const close = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeMenu = (index, indexPath) => {
      close(index);
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (isNil(index) || isNil(indexPath))
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
      } else {
        activeIndex.value = val;
      }
    };
    const calcMenuItemWidth = (menuItem) => {
      const computedStyle = getComputedStyle(menuItem);
      const marginLeft = Number.parseInt(computedStyle.marginLeft, 10);
      const marginRight = Number.parseInt(computedStyle.marginRight, 10);
      return menuItem.offsetWidth + marginLeft + marginRight || 0;
    };
    const calcSliceIndex = () => {
      var _a, _b;
      if (!menu.value)
        return -1;
      const items2 = Array.from((_b = (_a = menu.value) == null ? void 0 : _a.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#comment" && (item.nodeName !== "#text" || item.nodeValue));
      const moreItemWidth = 64;
      const computedMenuStyle = getComputedStyle(menu.value);
      const paddingLeft = Number.parseInt(computedMenuStyle.paddingLeft, 10);
      const paddingRight = Number.parseInt(computedMenuStyle.paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        calcWidth += calcMenuItemWidth(item);
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const getIndexPath = (index) => subMenus.value[index].indexPath;
    const debounce = (fn, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      if (sliceIndex.value === calcSliceIndex())
        return;
      const callback = () => {
        sliceIndex.value = -1;
        nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce(callback)();
      isFirstTimeRender = false;
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    watch(items.value, initMenu);
    let resizeStopper;
    watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    const mouseInChild = ref(false);
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide("rootMenu", reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild,
        level: 0
      });
    }
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close,
        handleResize
      });
    }
    const ulStyle = useMenuCssVar(props, 0);
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow"),
            popperOffset: props.popperOffset
          }, {
            title: () => h(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, {
              default: () => h(props.ellipsisIcon)
            }),
            default: () => slotMore
          }));
        }
      }
      const directives = props.closeOnClickOutside ? [
        [
          ClickOutside,
          () => {
            if (!openedMenus.value.length)
              return;
            if (!mouseInChild.value) {
              openedMenus.value.forEach((openedMenu) => emit("close", openedMenu, getIndexPath(openedMenu)));
              openedMenus.value = [];
            }
          }
        ]
      ] : [];
      const vMenu = withDirectives(h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]), directives);
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});
const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && Array.isArray(item.indexPath)
};
const COMPONENT_NAME$1 = "ElMenuItem";
const _sfc_main$5 = defineComponent({
  name: COMPONENT_NAME$1,
  components: {
    ElTooltip
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError(COMPONENT_NAME$1, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$1, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    return {
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: _ctx.handleClick
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 10, ["onClick"]);
}
var MenuItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$1], ["__file", "menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const COMPONENT_NAME = "ElMenuItemGroup";
const _sfc_main$4 = defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroupProps,
  setup() {
    const ns = useNamespace("menu-item-group");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("title"))
    }, [
      !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 2),
    createElementVNode("ul", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render], ["__file", "menu-item-group.vue"]]);
const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu);
const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log(route.fullPath);
    const activeIndex = ref(route.fullPath);
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const visible = ref(false);
    watch(
      () => route.fullPath,
      (newVal) => {
        activeIndex.value = newVal;
        visible.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = ElMenu;
      const _component_NuxtImg = _sfc_main$a;
      const _component_el_menu_item = ElMenuItem;
      const _component_el_sub_menu = ElSubMenu;
      const _component_el_popover = ElPopover;
      const _component_el_avatar = ElAvatar;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_menu, {
        "default-active": unref(activeIndex),
        mode: "horizontal",
        ellipsis: false,
        onSelect: handleSelect,
        router: true,
        class: "menu-desktop px-10 hidden lg:flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              provider: "iGEM",
              src: "/icons/logo.png",
              quality: "100",
              onClick: ($event) => _ctx.$router.push("/"),
              class: "cursor-pointer py-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grow"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_el_menu_item, { index: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`HOME`);
                } else {
                  return [
                    createTextVNode("HOME")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_sub_menu, { index: "project" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Project`);
                } else {
                  return [
                    createTextVNode("Project")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/description" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Description`);
                      } else {
                        return [
                          createTextVNode("Description")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/engineering" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Engineering`);
                      } else {
                        return [
                          createTextVNode("Engineering")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/safety" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Safety`);
                      } else {
                        return [
                          createTextVNode("Safety")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu_item, { index: "/description" }, {
                      default: withCtx(() => [
                        createTextVNode("Description")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/engineering" }, {
                      default: withCtx(() => [
                        createTextVNode("Engineering")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/safety" }, {
                      default: withCtx(() => [
                        createTextVNode("Safety")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_sub_menu, { index: "wet-lab" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Wet Lab`);
                } else {
                  return [
                    createTextVNode("Wet Lab")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/experiment" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Experiments`);
                      } else {
                        return [
                          createTextVNode("Experiments")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/result" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Results`);
                      } else {
                        return [
                          createTextVNode("Results")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/notebook" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Notebook`);
                      } else {
                        return [
                          createTextVNode("Notebook")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/parts" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Parts`);
                      } else {
                        return [
                          createTextVNode("Parts")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu_item, { index: "/experiment" }, {
                      default: withCtx(() => [
                        createTextVNode("Experiments")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/result" }, {
                      default: withCtx(() => [
                        createTextVNode("Results")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/notebook" }, {
                      default: withCtx(() => [
                        createTextVNode("Notebook")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/parts" }, {
                      default: withCtx(() => [
                        createTextVNode("Parts")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_sub_menu, { index: "dry-lab" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Dry Lab`);
                } else {
                  return [
                    createTextVNode("Dry Lab")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/hardware" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Hardware`);
                      } else {
                        return [
                          createTextVNode("Hardware")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/model" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Model`);
                      } else {
                        return [
                          createTextVNode("Model")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu_item, { index: "/hardware" }, {
                      default: withCtx(() => [
                        createTextVNode("Hardware")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/model" }, {
                      default: withCtx(() => [
                        createTextVNode("Model")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_sub_menu, { index: "team" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Team`);
                } else {
                  return [
                    createTextVNode("Team")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/member" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Members`);
                      } else {
                        return [
                          createTextVNode("Members")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/attributions" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Attributions`);
                      } else {
                        return [
                          createTextVNode("Attributions")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/contribution" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Contribution`);
                      } else {
                        return [
                          createTextVNode("Contribution")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu_item, { index: "/member" }, {
                      default: withCtx(() => [
                        createTextVNode("Members")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/attributions" }, {
                      default: withCtx(() => [
                        createTextVNode("Attributions")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/contribution" }, {
                      default: withCtx(() => [
                        createTextVNode("Contribution")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_sub_menu, { index: "hp" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Human Practices`);
                } else {
                  return [
                    createTextVNode("Human Practices")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/education" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Education`);
                      } else {
                        return [
                          createTextVNode("Education")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/human-practices" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Integrated HP`);
                      } else {
                        return [
                          createTextVNode("Integrated HP")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu_item, { index: "/education" }, {
                      default: withCtx(() => [
                        createTextVNode("Education")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/human-practices" }, {
                      default: withCtx(() => [
                        createTextVNode("Integrated HP")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                provider: "iGEM",
                src: "/icons/logo.png",
                quality: "100",
                onClick: ($event) => _ctx.$router.push("/"),
                class: "cursor-pointer py-2"
              }, null, 8, ["onClick"]),
              createVNode("div", { class: "grow" }),
              createVNode(_component_el_menu_item, { index: "/" }, {
                default: withCtx(() => [
                  createTextVNode("HOME")
                ]),
                _: 1
              }),
              createVNode(_component_el_sub_menu, { index: "project" }, {
                title: withCtx(() => [
                  createTextVNode("Project")
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_menu_item, { index: "/description" }, {
                    default: withCtx(() => [
                      createTextVNode("Description")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/engineering" }, {
                    default: withCtx(() => [
                      createTextVNode("Engineering")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/safety" }, {
                    default: withCtx(() => [
                      createTextVNode("Safety")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_sub_menu, { index: "wet-lab" }, {
                title: withCtx(() => [
                  createTextVNode("Wet Lab")
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_menu_item, { index: "/experiment" }, {
                    default: withCtx(() => [
                      createTextVNode("Experiments")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/result" }, {
                    default: withCtx(() => [
                      createTextVNode("Results")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/notebook" }, {
                    default: withCtx(() => [
                      createTextVNode("Notebook")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/parts" }, {
                    default: withCtx(() => [
                      createTextVNode("Parts")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_sub_menu, { index: "dry-lab" }, {
                title: withCtx(() => [
                  createTextVNode("Dry Lab")
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_menu_item, { index: "/hardware" }, {
                    default: withCtx(() => [
                      createTextVNode("Hardware")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/model" }, {
                    default: withCtx(() => [
                      createTextVNode("Model")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_sub_menu, { index: "team" }, {
                title: withCtx(() => [
                  createTextVNode("Team")
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_menu_item, { index: "/member" }, {
                    default: withCtx(() => [
                      createTextVNode("Members")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/attributions" }, {
                    default: withCtx(() => [
                      createTextVNode("Attributions")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/contribution" }, {
                    default: withCtx(() => [
                      createTextVNode("Contribution")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_sub_menu, { index: "hp" }, {
                title: withCtx(() => [
                  createTextVNode("Human Practices")
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_menu_item, { index: "/education" }, {
                    default: withCtx(() => [
                      createTextVNode("Education")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/human-practices" }, {
                    default: withCtx(() => [
                      createTextVNode("Integrated HP")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_menu, {
        "default-active": unref(activeIndex),
        mode: "horizontal",
        ellipsis: false,
        onSelect: handleSelect,
        router: true,
        class: "menu-mobile px-10 flex lg:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              provider: "iGEM",
              src: "/icons/logo.png",
              quality: "100",
              onClick: ($event) => _ctx.$router.push("/"),
              class: "cursor-pointer py-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grow"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_el_popover, {
              visible: unref(visible),
              placement: "bottom-start",
              trigger: "click",
              class: ""
            }, {
              reference: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_avatar, {
                    class: "self-center cursor-pointer",
                    onClick: ($event) => visible.value = !unref(visible),
                    icon: "ElIconMenu" in _ctx ? _ctx.ElIconMenu : unref(menu_default)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_avatar, {
                      class: "self-center cursor-pointer",
                      onClick: ($event) => visible.value = !unref(visible),
                      icon: "ElIconMenu" in _ctx ? _ctx.ElIconMenu : unref(menu_default)
                    }, null, 8, ["onClick", "icon"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu, {
                    "default-active": unref(activeIndex),
                    class: "",
                    collapse: true,
                    router: true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_menu_item, { index: "/" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`HOME`);
                            } else {
                              return [
                                createTextVNode("HOME")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_sub_menu, { index: "project" }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Project`);
                            } else {
                              return [
                                createTextVNode("Project")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/description" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Description`);
                                  } else {
                                    return [
                                      createTextVNode("Description")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/engineering" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Engineering`);
                                  } else {
                                    return [
                                      createTextVNode("Engineering")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/safety" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Safety`);
                                  } else {
                                    return [
                                      createTextVNode("Safety")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu_item, { index: "/description" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Description")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/engineering" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Engineering")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/safety" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Safety")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_sub_menu, { index: "wet-lab" }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Wet Lab`);
                            } else {
                              return [
                                createTextVNode("Wet Lab")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/experiment" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Experiments`);
                                  } else {
                                    return [
                                      createTextVNode("Experiments")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/result" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Results`);
                                  } else {
                                    return [
                                      createTextVNode("Results")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/notebook" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Notebook`);
                                  } else {
                                    return [
                                      createTextVNode("Notebook")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/parts" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Parts`);
                                  } else {
                                    return [
                                      createTextVNode("Parts")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu_item, { index: "/experiment" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Experiments")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/result" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Results")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/notebook" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Notebook")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/parts" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Parts")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_sub_menu, { index: "dry-lab" }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dry Lab`);
                            } else {
                              return [
                                createTextVNode("Dry Lab")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/hardware" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Hardware`);
                                  } else {
                                    return [
                                      createTextVNode("Hardware")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/model" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Model`);
                                  } else {
                                    return [
                                      createTextVNode("Model")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu_item, { index: "/hardware" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Hardware")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/model" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Model")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_sub_menu, { index: "team" }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Team`);
                            } else {
                              return [
                                createTextVNode("Team")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/member" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Members`);
                                  } else {
                                    return [
                                      createTextVNode("Members")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/attributions" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Attributions`);
                                  } else {
                                    return [
                                      createTextVNode("Attributions")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/contribution" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Contribution`);
                                  } else {
                                    return [
                                      createTextVNode("Contribution")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu_item, { index: "/member" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Members")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/attributions" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Attributions")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/contribution" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Contribution")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_sub_menu, { index: "hp" }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Human Practices`);
                            } else {
                              return [
                                createTextVNode("Human Practices")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/education" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Education`);
                                  } else {
                                    return [
                                      createTextVNode("Education")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/human-practices" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Integrated HP`);
                                  } else {
                                    return [
                                      createTextVNode("Integrated HP")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu_item, { index: "/education" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Education")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/human-practices" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Integrated HP")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_menu_item, { index: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("HOME")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "project" }, {
                            title: withCtx(() => [
                              createTextVNode("Project")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "/description" }, {
                                default: withCtx(() => [
                                  createTextVNode("Description")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/engineering" }, {
                                default: withCtx(() => [
                                  createTextVNode("Engineering")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/safety" }, {
                                default: withCtx(() => [
                                  createTextVNode("Safety")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "wet-lab" }, {
                            title: withCtx(() => [
                              createTextVNode("Wet Lab")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "/experiment" }, {
                                default: withCtx(() => [
                                  createTextVNode("Experiments")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/result" }, {
                                default: withCtx(() => [
                                  createTextVNode("Results")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/notebook" }, {
                                default: withCtx(() => [
                                  createTextVNode("Notebook")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/parts" }, {
                                default: withCtx(() => [
                                  createTextVNode("Parts")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "dry-lab" }, {
                            title: withCtx(() => [
                              createTextVNode("Dry Lab")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "/hardware" }, {
                                default: withCtx(() => [
                                  createTextVNode("Hardware")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/model" }, {
                                default: withCtx(() => [
                                  createTextVNode("Model")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "team" }, {
                            title: withCtx(() => [
                              createTextVNode("Team")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "/member" }, {
                                default: withCtx(() => [
                                  createTextVNode("Members")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/attributions" }, {
                                default: withCtx(() => [
                                  createTextVNode("Attributions")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/contribution" }, {
                                default: withCtx(() => [
                                  createTextVNode("Contribution")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "hp" }, {
                            title: withCtx(() => [
                              createTextVNode("Human Practices")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "/education" }, {
                                default: withCtx(() => [
                                  createTextVNode("Education")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/human-practices" }, {
                                default: withCtx(() => [
                                  createTextVNode("Integrated HP")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu, {
                      "default-active": unref(activeIndex),
                      class: "",
                      collapse: true,
                      router: true
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_menu_item, { index: "/" }, {
                          default: withCtx(() => [
                            createTextVNode("HOME")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_sub_menu, { index: "project" }, {
                          title: withCtx(() => [
                            createTextVNode("Project")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "/description" }, {
                              default: withCtx(() => [
                                createTextVNode("Description")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/engineering" }, {
                              default: withCtx(() => [
                                createTextVNode("Engineering")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/safety" }, {
                              default: withCtx(() => [
                                createTextVNode("Safety")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_sub_menu, { index: "wet-lab" }, {
                          title: withCtx(() => [
                            createTextVNode("Wet Lab")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "/experiment" }, {
                              default: withCtx(() => [
                                createTextVNode("Experiments")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/result" }, {
                              default: withCtx(() => [
                                createTextVNode("Results")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/notebook" }, {
                              default: withCtx(() => [
                                createTextVNode("Notebook")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/parts" }, {
                              default: withCtx(() => [
                                createTextVNode("Parts")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_sub_menu, { index: "dry-lab" }, {
                          title: withCtx(() => [
                            createTextVNode("Dry Lab")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "/hardware" }, {
                              default: withCtx(() => [
                                createTextVNode("Hardware")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/model" }, {
                              default: withCtx(() => [
                                createTextVNode("Model")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_sub_menu, { index: "team" }, {
                          title: withCtx(() => [
                            createTextVNode("Team")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "/member" }, {
                              default: withCtx(() => [
                                createTextVNode("Members")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/attributions" }, {
                              default: withCtx(() => [
                                createTextVNode("Attributions")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/contribution" }, {
                              default: withCtx(() => [
                                createTextVNode("Contribution")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_sub_menu, { index: "hp" }, {
                          title: withCtx(() => [
                            createTextVNode("Human Practices")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "/education" }, {
                              default: withCtx(() => [
                                createTextVNode("Education")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/human-practices" }, {
                              default: withCtx(() => [
                                createTextVNode("Integrated HP")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["default-active"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                provider: "iGEM",
                src: "/icons/logo.png",
                quality: "100",
                onClick: ($event) => _ctx.$router.push("/"),
                class: "cursor-pointer py-2"
              }, null, 8, ["onClick"]),
              createVNode("div", { class: "grow" }),
              createVNode(_component_el_popover, {
                visible: unref(visible),
                placement: "bottom-start",
                trigger: "click",
                class: ""
              }, {
                reference: withCtx(() => [
                  createVNode(_component_el_avatar, {
                    class: "self-center cursor-pointer",
                    onClick: ($event) => visible.value = !unref(visible),
                    icon: "ElIconMenu" in _ctx ? _ctx.ElIconMenu : unref(menu_default)
                  }, null, 8, ["onClick", "icon"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_el_menu, {
                    "default-active": unref(activeIndex),
                    class: "",
                    collapse: true,
                    router: true
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_menu_item, { index: "/" }, {
                        default: withCtx(() => [
                          createTextVNode("HOME")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_sub_menu, { index: "project" }, {
                        title: withCtx(() => [
                          createTextVNode("Project")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "/description" }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/engineering" }, {
                            default: withCtx(() => [
                              createTextVNode("Engineering")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/safety" }, {
                            default: withCtx(() => [
                              createTextVNode("Safety")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_sub_menu, { index: "wet-lab" }, {
                        title: withCtx(() => [
                          createTextVNode("Wet Lab")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "/experiment" }, {
                            default: withCtx(() => [
                              createTextVNode("Experiments")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/result" }, {
                            default: withCtx(() => [
                              createTextVNode("Results")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/notebook" }, {
                            default: withCtx(() => [
                              createTextVNode("Notebook")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/parts" }, {
                            default: withCtx(() => [
                              createTextVNode("Parts")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_sub_menu, { index: "dry-lab" }, {
                        title: withCtx(() => [
                          createTextVNode("Dry Lab")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "/hardware" }, {
                            default: withCtx(() => [
                              createTextVNode("Hardware")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/model" }, {
                            default: withCtx(() => [
                              createTextVNode("Model")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_sub_menu, { index: "team" }, {
                        title: withCtx(() => [
                          createTextVNode("Team")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "/member" }, {
                            default: withCtx(() => [
                              createTextVNode("Members")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/attributions" }, {
                            default: withCtx(() => [
                              createTextVNode("Attributions")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/contribution" }, {
                            default: withCtx(() => [
                              createTextVNode("Contribution")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_sub_menu, { index: "hp" }, {
                        title: withCtx(() => [
                          createTextVNode("Human Practices")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "/education" }, {
                            default: withCtx(() => [
                              createTextVNode("Education")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/human-practices" }, {
                            default: withCtx(() => [
                              createTextVNode("Integrated HP")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["default-active"])
                ]),
                _: 1
              }, 8, ["visible"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "RouteMap",
  __ssrInlineRender: true,
  props: {
    routemap: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<!--[-->`);
      ssrRenderList(__props.routemap, (route) => {
        _push(`<div class="mx-5 mb-10"><span class="font-bold text-lg">${ssrInterpolate(route.title)}</span><div class="flex flex-col flex-wrap mt-5"><!--[-->`);
        ssrRenderList(route.subs, (sub) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "mt-1 cursor-pointer hover:underline",
            to: sub[1]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub[0])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub[0]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RouteMap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const map = [
      {
        title: "Project",
        subs: [
          ["Description", "/description"],
          ["Engineering", "/engineering"],
          ["Safety", "/safety"]
        ]
      },
      {
        title: "Web Lab",
        subs: [
          ["Experiments", "/experiment"],
          ["Results", "/result"],
          ["Notebook", "/parts"]
        ]
      },
      {
        title: "Dry Lab",
        subs: [
          ["Hardware", "/hardware"],
          ["Model", "/model"]
        ]
      },
      {
        title: "Team",
        subs: [
          ["Members", "/member"],
          ["Attributions", "/attributions"],
          ["Contribution", "/contribution"]
        ]
      },
      {
        title: "Human Practices",
        subs: [
          ["Education", "/education"],
          ["Integrated HP", "/human-practices"]
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouteMap = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center text-base mt-10 border-t-2 text-gray-300" }, _attrs))}><div class="flex flex-wrap justify-between mt-10 text-left mx-[1rem] lg:mx-[7.5rem]">`);
      _push(ssrRenderComponent(_component_RouteMap, { routemap: map }, null, _parent));
      _push(`</div><div></div><div class="mt-[20vh] hidden"> Contact Us: \xA0 Instagram: igem_shanghaitech \xA0 Facebook: iGEM-ShanghaiTech \xA0 E-mail: igemshanghaitech@163.com <br> Bilibili: \u4E0A\u79D1\u5927iGEM \xA0 Weibo: iGEM_ShanghaiTech \xA0 Xiaohongshu: iGEM_ShanghaiTech </div><div class="my-[10vh] pb-[8vh]"><div class="mb-1"> \xA9 2024 - Content on this site is licensed under a `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://creativecommons.org/licenses/by/4.0",
        rel: "liscence",
        class: "font-bold hover:underline text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Creative Commons Attribution 4.0 International license `);
          } else {
            return [
              createTextVNode(" Creative Commons Attribution 4.0 International license ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` . </div><div> The repository used to create this website is available at `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://gitlab.igem.org/2024/bit",
        class: "font-bold hover:underline text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` gitlab.igem.org/2024/bit `);
          } else {
            return [
              createTextVNode(" gitlab.igem.org/2024/bit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` . </div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$3;
  const _component_NuxtImg = _sfc_main$a;
  const _component_Footer = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-10" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, { class: "fixed w-full" }, null, _parent));
  _push(`<div class="pt-[8rem]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="fixed right-[-8vw] top-[35vh] opacity-20 z-[-1]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    provider: "iGEM",
    src: "/icons/logo.png",
    class: "w-[30vw]"
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BO9wymsw.mjs.map
