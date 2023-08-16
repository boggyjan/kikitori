import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from '../server.mjs';
import 'ufo';
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

const title = "\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0";
const desc = "\u300C\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u300D\u306B\u3064\u3044\u3066";
const url = "https://kikitori.boggy.tw";
const image = "https://kikitori.boggy.tw/images/share.jpg";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tests = ref([]);
    useHead({
      title,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
        { name: "description", content: desc },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", desc },
        { name: "twitter:image", content: image },
        { name: "og:type", content: "website" },
        { name: "og:title", content: title },
        { name: "og:description", content: desc },
        { name: "og:image", content: image },
        { name: "og:url", content: url },
        { name: "og:site_name", content: "iDrip" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "_index" }, _attrs))}><h2> \u7DF4\u7FD2\u30C6\u30FC\u30DE </h2><nav class="main-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/jikan",
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6642\u523B `);
          } else {
            return [
              createTextVNode(" \u6642\u523B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/suuji",
        class: "btn"
      }, {
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
      _push(`<!--[-->`);
      ssrRenderList(unref(tests), (test, idx) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: `nav_test_${idx}`,
          class: "btn",
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
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/add",
        class: "btn"
      }, {
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
      _push(`</nav><h2> \u300C\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u300D\u306B\u3064\u3044\u3066 </h2><p> \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u306F\u300CWeb Speech API\u300D\u3068\u3044\u3046\u6280\u8853\u3092\u6D3B\u7528\u3057\u305FWeb\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002\u4E0A\u306E\u300C\u6642\u9593\u300D\u3084\u300C\u6570\u5B57\u300D\u306A\u3069\u304C\u7DF4\u7FD2\u306E\u30C6\u30FC\u30DE\u3067\u3059\u3002\u307E\u305A\u306F\u4E00\u3064\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u7DF4\u7FD2\u3057\u307E\u3057\u3087\u3046\u3002\u4ED6\u306E\u30C6\u30FC\u30DE\u3092\u7DF4\u7FD2\u3057\u305F\u3044\u5834\u5408\u3001\u300C\uFF0B\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u81EA\u5206\u306E\u30C6\u30FC\u30DE\u3092\u4F5C\u3063\u3066\u304F\u3060\u3055\u3044\u3002 </p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bbb446d2.mjs.map
