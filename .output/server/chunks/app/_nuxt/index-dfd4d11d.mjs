import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { u as useHead } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
        { name: "description", content: "\u300C\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u300D\u306B\u3064\u3044\u3066" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2> \u300C\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u300D\u306B\u3064\u3044\u3066 </h2><p> \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u306F\u300CWeb Speech API\u300D\u3068\u3044\u3046\u6280\u8853\u3092\u6D3B\u7528\u3057\u305FWeb\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002\u4E0A\u306E\u300C\u6642\u9593\u300D\u3084\u300C\u6570\u5B57\u300D\u306A\u3069\u304C\u7DF4\u7FD2\u306E\u30C6\u30FC\u30DE\u3067\u3059\u3002\u307E\u305A\u306F\u4E00\u3064\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u7DF4\u7FD2\u3057\u307E\u3057\u3087\u3046\u3002\u4ED6\u306E\u30C6\u30FC\u30DE\u3092\u7DF4\u7FD2\u3057\u305F\u3044\u5834\u5408\u3001\u300C\uFF0B\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u81EA\u5206\u306E\u30C6\u30FC\u30DE\u3092\u4F5C\u3063\u3066\u304F\u3060\u3055\u3044\u3002 </p></div>`);
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
//# sourceMappingURL=index-dfd4d11d.mjs.map
