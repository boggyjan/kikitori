import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './NoJpVoiceFound-9ced8f2c.mjs';
import { ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { a as useRoute, b as useRouter, d as useState, u as useHead } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderVNode, ssrRenderStyle } from 'vue/server-renderer';
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

const url = "https://kikitori.boggy.tw";
const image = "https://kikitori.boggy.tw/images/share.jpg";
const _sfc_main = {
  __name: "[name]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const gameStatus = ref(null);
    const level = ref(1);
    ref(1);
    const title = ref(null);
    const questions = ref([]);
    ref(null);
    const answers = ref([]);
    const answer = ref(null);
    const questionHistory = ref([]);
    const rightPercent = computed(() => Math.floor(questionHistory.value.filter((q) => q.question === q.answer).length / questionHistory.value.length * 100));
    const pTitle = useState("pTitle");
    pTitle.value = route.params.name;
    const metaTitle = route.params.name + " - \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0";
    const desc = route.params.name + "\u306B\u95A2\u3059\u308B\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u3092\u3084\u308A\u307E\u3057\u3087\u3046";
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
      const _component_FailToSupportSpeechApi = __nuxt_component_0;
      const _component_NoJpVoiceFound = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main _test _custom" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FailToSupportSpeechApi, null, null, _parent));
      _push(ssrRenderComponent(_component_NoJpVoiceFound, null, null, _parent));
      if (unref(gameStatus) !== "playing") {
        _push(`<div>`);
        if (unref(gameStatus) === "end") {
          _push(`<!--[--><h2>${ssrInterpolate(unref(title))} \u30EC\u30D9\u30EB${ssrInterpolate(unref(level))}\u306E \u7DF4\u7FD2\u7D50\u679C </h2><table><thead><tr><th>\u554F\u984C</th><th>\u7B54\u3048</th><th>\u7D50\u679C</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(unref(questionHistory), (q, idx) => {
            _push(`<tr><td><a href="#">${ssrInterpolate(q.question)}</a></td><td><a href="#">${ssrInterpolate(q.answer)}</a></td><td>${ssrInterpolate(q.question === q.answer ? "\u2B55\uFE0F" : "\u274C")}</td></tr>`);
          });
          _push(`<!--]--></tbody></table><div class="result"> \u6B63\u89E3\u7387 ${ssrInterpolate(unref(rightPercent))} % `);
          if (unref(rightPercent) > 98) {
            _push(`<!--[--> \u7D20\u6674\u3089\u3057\u3044\uFF01\u{1F44D} <!--]-->`);
          } else if (unref(rightPercent) > 80) {
            _push(`<!--[--> \u4E0A\u624B\u306B\u306A\u3063\u305F\u306D\uFF01 <!--]-->`);
          } else if (unref(rightPercent) > 70) {
            _push(`<!--[--> \u3088\u304F\u3067\u304D\u305F\u306D\uFF01 <!--]-->`);
          } else if (unref(rightPercent) > 60) {
            _push(`<!--[--> \u3060\u3093\u3060\u3093\u3067\u304D\u305F\u306D\uFF01 <!--]-->`);
          } else {
            _push(`<!--[--> \u3082\u3063\u3068\u9811\u5F35\u3063\u3066\u306D\u3002 <!--]-->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<!--[--><h2> \u4E0B\u8A18\u306F\u3053\u306E\u30C6\u30FC\u30DE\u300C${ssrInterpolate(unref(title))}\u300D\u306B\u5165\u308C\u305F\u5358\u8A9E </h2><div class="voc-list"><!--[-->`);
          ssrRenderList(unref(questions), (item, idx) => {
            _push(`<a href="#">${ssrInterpolate(item)}</a>`);
          });
          _push(`<!--]--></div><!--]-->`);
        }
        _push(`<hr><div class="actions"><h2>`);
        if (unref(gameStatus) === null) {
          _push(`<!--[--> \u59CB\u3081\u307E\u3057\u3087\u3046\uFF01 <!--]-->`);
        } else {
          _push(`<!--[--> \u3082\u3046\u4E00\u5EA6\u3057\u307E\u3057\u3087\u3046\uFF01 <!--]-->`);
        }
        _push(`</h2><button type="button"> \u30EC\u30D9\u30EB\u4E00 </button><button type="button"> \u30EC\u30D9\u30EB\u4E8C </button><button type="button"> \u30EC\u30D9\u30EB\u4E09 </button></div></div>`);
      } else if (unref(gameStatus) === "playing") {
        _push(`<div><div class="answers"><h3 class="answer-head"> \u6B63\u3057\u3044\u7B54\u3048\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044 </h3><!--[-->`);
        ssrRenderList(unref(answers), (ans, idx) => {
          _push(`<button type="button" class="${ssrRenderClass([{ outline: unref(answer) !== ans }, "tertiary ans"])}">${ssrInterpolate(ans)}</button>`);
        });
        _push(`<!--]--></div><hr><div class="actions"><button type="button" class="secondary outline"> \u3082\u3046\u4E00\u5EA6\u805E\u304F </button><button type="button"${ssrIncludeBooleanAttr(!unref(answer)) ? " disabled" : ""}> \u6B21\u3078 </button></div><div class="google-ad">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
          async: "",
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209950884395919",
          crossorigin: "anonymous"
        }, null), _parent);
        _push(`<ins class="adsbygoogle" style="${ssrRenderStyle({ "display": "block" })}" data-ad-client="ca-pub-8209950884395919" data-ad-slot="8597565030" data-ad-format="auto" data-full-width-responsive="true"></ins>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` (adsbygoogle = window.adsbygoogle || []).push({}); `);
            } else {
              return [
                createTextVNode(" (adsbygoogle = window.adsbygoogle || []).push({}); ")
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-3c652e99.mjs.map
