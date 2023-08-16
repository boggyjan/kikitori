import { useSSRContext, defineComponent, ref, createElementBlock, mergeProps, withCtx, createTextVNode, unref, toDisplayString } from 'vue';
import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const tests = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0 `);
          } else {
            return [
              createTextVNode(" \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="main-menu"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/jikan" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6642\u9593 `);
          } else {
            return [
              createTextVNode(" \u6642\u9593 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/suuji" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6570\u5B57 `);
          } else {
            return [
              createTextVNode(" \u6570\u5B57 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(unref(tests), (test, idx) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/" + test.title
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(test.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(test.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/add" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + `);
          } else {
            return [
              createTextVNode(" + ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_Header = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div class="layout">`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="main">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-b6c7d545.mjs.map
