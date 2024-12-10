import { computed, toValue } from 'vue';
import { d as useNuxtApp } from './server.mjs';

const useAnchorScroll = (options = {}) => {
  const toAnchorSurfaces = computed(() => {
    var _a2, _b2, _c;
    var _a, _b;
    const unwrappedOptions = toValue(options);
    return (_c = (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.surfaces) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toAnchor) == null ? void 0 : _a.surfaces) != null ? _b2 : toValue((_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults.surfaces)) != null ? _c : [];
  });
  const toAnchorScrollOptions = computed(() => {
    var _a2, _b2;
    var _a, _b, _c;
    const unwrappedOptions = toValue(options);
    return (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.scrollOptions) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toAnchor) == null ? void 0 : _a.scrollOptions) != null ? _b2 : toValue((_c = (_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults) == null ? void 0 : _c.toAnchor);
  });
  const toTopSurfaces = computed(() => {
    var _a2, _b2, _c;
    var _a, _b;
    const unwrappedOptions = toValue(options);
    return (_c = (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.surfaces) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toTop) == null ? void 0 : _a.surfaces) != null ? _b2 : toValue((_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults.surfaces)) != null ? _c : [];
  });
  const toTopScrollOptions = computed(() => {
    var _a2, _b2;
    var _a, _b, _c;
    const unwrappedOptions = toValue(options);
    return (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.scrollOptions) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toTop) == null ? void 0 : _a.scrollOptions) != null ? _b2 : toValue((_c = (_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults) == null ? void 0 : _c.toTop);
  });
  return {
    scrollToAnchor(target) {
      var _a;
      const maybeElement = toValue(target);
      let anchorElement = null;
      if (typeof maybeElement === "string") {
        anchorElement = (void 0).getElementById(maybeElement.replace(/^#/, ""));
      } else if (maybeElement instanceof HTMLElement) {
        anchorElement = maybeElement;
      } else {
        const elementId = toValue(maybeElement.id);
        const elementSelector = toValue(maybeElement.sr);
        if (elementId) {
          anchorElement = (void 0).getElementById(elementId.replace(/^#/, ""));
        } else if (elementSelector) {
          try {
            anchorElement = (void 0).querySelector(elementSelector);
          } catch (error) {
            console.error("[useAnchorScroll]: While select element from document, next error occurred:", error);
          }
        } else {
          console.error(
            "[useAnchorScroll]: Wrong object provided to scrollToAnchor composable:",
            "either 'id' and 'sr' (selector) are not provided in object",
            maybeElement
          );
        }
      }
      if (!anchorElement)
        return false;
      const { top, left } = anchorElement.getBoundingClientRect();
      const { behavior, offsetLeft, offsetTop } = (_a = toValue(toAnchorScrollOptions)) != null ? _a : {};
      const scrollToAnchorOptions = {
        behavior,
        ...offsetLeft !== void 0 && { left: left + offsetLeft },
        ...offsetTop !== void 0 && { top: top + offsetTop }
      };
      for (const surface of toValue(toAnchorSurfaces))
        surface.scrollBy(scrollToAnchorOptions);
      return true;
    },
    scrollToTop() {
      var _a;
      const { behavior, offsetLeft, offsetTop } = (_a = toValue(toTopScrollOptions)) != null ? _a : {};
      const scrollToTopOptions = {
        behavior,
        left: offsetLeft,
        top: offsetTop
      };
      for (const surface of toValue(toTopSurfaces))
        surface.scrollTo(scrollToTopOptions);
    }
  };
};

export { useAnchorScroll as u };
//# sourceMappingURL=anchorscroll-B9ToQXdr.mjs.map
