import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
  __name: "jikan",
  __ssrInlineRender: true,
  setup(__props) {
    const gameStatus = ref(null);
    const level = ref(1);
    ref(1);
    ref(null);
    const answers = ref([]);
    const answer = ref(null);
    const questionHistory = ref([]);
    const rightPercent = computed(() => Math.floor(questionHistory.value.filter((q) => q.question === q.answer).length / questionHistory.value.length * 100));
    useHead({
      title: "\u6642\u523B - \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
        { name: "description", content: "\u6642\u523B\u306B\u95A2\u3059\u308B\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u3092\u3084\u308A\u307E\u3057\u3087\u3046" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "_jikan" }, _attrs))}>`);
      if (unref(gameStatus) !== "playing") {
        _push(`<div>`);
        if (unref(gameStatus) === "end") {
          _push(`<!--[--><h2> \u6642\u523B \u30EC\u30D9\u30EB${ssrInterpolate(unref(level))}\u306E \u7DF4\u7FD2\u7D50\u679C </h2><table><thead><tr><th>\u554F\u984C</th><th>\u7B54\u3048</th><th>\u7D50\u679C</th></tr></thead><tbody><!--[-->`);
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
            _push(`<!--[--> \u305F\u304F\u3055\u3093\u805E\u3051\u307E\u3059\u306D\uFF01 <!--]-->`);
          } else {
            _push(`<!--[--> \u3082\u3063\u3068\u9811\u5F35\u3063\u3066\u304F\u3060\u3055\u3044\u3002 <!--]-->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<!--[--><h2> \u6CE8\u610F\u3059\u3079\u304D\u3068\u3053\u308D </h2><ul><li>\u300C1\u5206\u300D\u306F\u300C\u3044\u3063\u3077\u3093\u300D</li><li>\u300C3\u5206\u300D\u306F\u300C\u3055\u3093\u3077\u3093\u3001\u3055\u3093\u3075\u3093\u300D</li><li>\u300C4\u5206\u300D\u306F\u300C\u3088\u3093\u3077\u3093\u3001\u3088\u3093\u3075\u3093\u300D</li><li>\u300C4\u6642\u300D\u306F\u300C\u3088\u3058\u300D</li><li>\u300C6\u5206\u300D\u306F\u300C\u308D\u3063\u3077\u3093\u300D</li><li>\u300C7\u5206\u300D\u306F\u300C\u306A\u306A\u3075\u3093\u300D</li><li>\u300C8\u5206\u300D\u306F\u300C\u306F\u3063\u3077\u3093\u3001\u306F\u3061\u3075\u3093\u300D</li><li>\u300C10\u5206\u300D\u306F\u300C\u3058\u3085\u3063\u3077\u3093\u300D</li></ul><!--]-->`);
        }
        _push(`<hr><div class="actions"><div class="action-head">`);
        if (unref(gameStatus) === null) {
          _push(`<!--[--> \u59CB\u3081\u307E\u3057\u3087\u3046\uFF01 <!--]-->`);
        } else {
          _push(`<!--[--> \u3082\u3046\u4E00\u5EA6\u3057\u307E\u3057\u3087\u3046\uFF01 <!--]-->`);
        }
        _push(`</div><button type="button"> \u30EC\u30D9\u30EB\u4E00 </button><button type="button"> \u30EC\u30D9\u30EB\u4E8C </button><button type="button"> \u30EC\u30D9\u30EB\u4E09 </button></div></div>`);
      } else if (unref(gameStatus) === "playing") {
        _push(`<div><div class="answers"><div class="answer-head"> \u6B63\u3057\u3044\u7B54\u3048\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044 </div><!--[-->`);
        ssrRenderList(unref(answers), (ans, idx) => {
          _push(`<button type="button" class="${ssrRenderClass([{ active: unref(answer) === ans }, "ans"])}">${ssrInterpolate(ans)}</button>`);
        });
        _push(`<!--]--></div><hr><div class="actions"><button type="button" class="outline"> \u3082\u3046\u4E00\u5EA6\u805E\u304F </button><button type="button"${ssrIncludeBooleanAttr(!unref(answer)) ? " disabled" : ""}> \u6B21\u3078 </button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jikan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jikan-47a949b9.mjs.map
