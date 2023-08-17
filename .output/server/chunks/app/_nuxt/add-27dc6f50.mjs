import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { d as useState, u as useHead } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const metaTitle = "\u7DE8\u96C6 - \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0";
const desc = "\u81EA\u5206\u306E\u30C6\u30FC\u30DE\u3092\u7DE8\u96C6";
const url = "https://kikitori.boggy.tw";
const image = "https://kikitori.boggy.tw/images/share.jpg";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const tests = ref([]);
    const selectedIdx = ref(null);
    const title = ref(null);
    const questions = ref(null);
    ref(null);
    const pTitle = useState("pTitle");
    pTitle.value = "\u65B0\u3057\u3044\u7DF4\u7FD2\u3092\u4F5C\u308D\u3046\uFF01";
    useHead({
      title: metaTitle,
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main _add" }, _attrs))}><h2> \u65B0\u3057\u3044\u7DF4\u7FD2\u3092\u4F5C\u308D\u3046\uFF01 </h2><hr><div class="grid"><div class="list"><h3> \u4FDD\u5B58\u3057\u305F\u30C6\u30FC\u30DE </h3>`);
      if (!unref(tests).length) {
        _push(`<div class="alert"> \u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(tests), (test, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: idx === unref(selectedIdx) }, "item"])}">${ssrInterpolate(test.title)} <button type="button" class="small outline secondary"> \u524A\u9664 </button></div>`);
      });
      _push(`<!--]--><hr></div><div class="content"><form>`);
      if (unref(selectedIdx) !== null) {
        _push(`<h3> \u30C6\u30FC\u30DE\u300C${ssrInterpolate(unref(title))}\u300D\u3092\u7DE8\u96C6 </h3>`);
      } else {
        _push(`<h3> \u65B0\u3057\u3044\u30C6\u30FC\u30DE\u3092\u7DE8\u96C6 </h3>`);
      }
      _push(`<div class="item"><label>\u30C6\u30FC\u30DE</label><input${ssrRenderAttr("value", unref(title))} required></div><div class="item"><label>\u5358\u8A9E\uFF08\u6539\u884C\u3067\u5358\u8A9E\u3092\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\uFF09</label><textarea required>${ssrInterpolate(unref(questions))}</textarea></div><div class="actions">`);
      if (unref(selectedIdx) !== null) {
        _push(`<button type="button" class="outline secondary"> \u65B0\u3057\u3044\u306E\u3092\u4F5C\u308B </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button> \u4FDD\u5B58 </button></div></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-27dc6f50.mjs.map
