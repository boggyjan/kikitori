import { b as useState, e as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './NoJpVoiceFound-e5256aa7.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, toDisplayString, renderList, withModifiers, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { u as useSeoMeta } from './index-10289ccc.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const title = "\u6570\u5B57 - \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0";
const description = "\u6570\u5B57\u306B\u95A2\u3059\u308B\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u3092\u3084\u308A\u307E\u3057\u3087\u3046";
const maxQuestionCount = 6;
const _sfc_main = {
  __name: "suuji",
  __ssrInlineRender: true,
  setup(__props) {
    const pTitle = useState("pTitle");
    pTitle.value = "\u6570\u5B57";
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      twitterTitle: title,
      twitterDescription: description
    });
    const gameStatus = ref(null);
    const level = ref(1);
    const count = ref(1);
    const question = ref(null);
    const answers = ref([]);
    const answer = ref(null);
    const questionHistory = ref([]);
    const rightPercent = computed(() => Math.floor(questionHistory.value.filter((q) => q.question === q.answer).length / questionHistory.value.length * 100));
    function start(lv) {
      count.value = 0;
      level.value = lv;
      questionHistory.value = [];
      answer.value = null;
      gameStatus.value = "playing";
      next();
    }
    function setAns(ans) {
      answer.value = ans;
    }
    function next() {
      if (answer.value) {
        questionHistory.value.push({
          question: question.value,
          answer: answer.value
        });
      }
      if (count.value >= maxQuestionCount + (level.value - 1) * 2) {
        gameStatus.value = "end";
      } else {
        count.value++;
        const num = genNumber();
        question.value = num.toString();
        const newAnswers = [];
        newAnswers.push(num.toString());
        for (let i = 0; i < 3; i++) {
          const diff = Math.floor(num / 10 * (Math.random() - 0.5));
          newAnswers.push(num + diff);
        }
        newAnswers.sort(() => Math.random() - 0.5);
        answers.value = newAnswers;
        answer.value = null;
        speak(question.value, level.value);
      }
    }
    function replay() {
      speak(question.value, level.value);
    }
    function genNumber() {
      return Math.floor(Math.random() * 1e3 * Math.pow(10, level.value));
    }
    function speak(text, lv) {
      const voices = speechSynthesis.getVoices().filter((item) => item.lang === "ja_JP" || item.lang === "ja-JP" || item.lang === "ja");
      if (!voices.length) {
        alert("Japanese voice data not found.");
        const noJpVoiceFound = useState("noJpVoiceFound");
        noJpVoiceFound.value = true;
        window.scrollTo(0, 0);
      }
      const utterance = new SpeechSynthesisUtterance(text);
      const rate = lv === 1 ? 0.7 : lv === 2 ? Math.random() * 0.25 + 0.8 : lv === 3 ? Math.random() * 0.5 + 1 : 0.1;
      const pitch = Math.random() * 1 + 0.5;
      utterance.lang = "ja-JP";
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.voice = voices[Math.floor(Math.random() * voices.length)];
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_FailToSupportSpeechApi = __nuxt_component_1;
      const _component_NoJpVoiceFound = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main _test _suuji"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FailToSupportSpeechApi, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NoJpVoiceFound, null, null, _parent2, _scopeId));
            if (unref(gameStatus) !== "playing") {
              _push2(`<div${_scopeId}>`);
              if (unref(gameStatus) === "end") {
                _push2(`<!--[--><h2${_scopeId}> \u6570\u5B57 \u30EC\u30D9\u30EB${ssrInterpolate(unref(level))}\u306E \u7DF4\u7FD2\u7D50\u679C </h2><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u554F\u984C</th><th${_scopeId}>\u7B54\u3048</th><th${_scopeId}>\u7D50\u679C</th></tr></thead><tbody${_scopeId}><!--[-->`);
                ssrRenderList(unref(questionHistory), (q, idx) => {
                  _push2(`<tr${_scopeId}><td${_scopeId}><a href="#"${_scopeId}>${ssrInterpolate(q.question)}</a></td><td${_scopeId}><a href="#"${_scopeId}>${ssrInterpolate(q.answer)}</a></td><td${_scopeId}>${ssrInterpolate(q.question === q.answer ? "\u2B55\uFE0F" : "\u274C")}</td></tr>`);
                });
                _push2(`<!--]--></tbody></table><div class="result"${_scopeId}> \u6B63\u89E3\u7387 ${ssrInterpolate(unref(rightPercent))} % `);
                if (unref(rightPercent) > 98) {
                  _push2(`<!--[--> \u7D20\u6674\u3089\u3057\u3044\uFF01\u{1F44D} <!--]-->`);
                } else if (unref(rightPercent) > 80) {
                  _push2(`<!--[--> \u4E0A\u624B\u306B\u306A\u3063\u305F\u306D\uFF01 <!--]-->`);
                } else if (unref(rightPercent) > 70) {
                  _push2(`<!--[--> \u3088\u304F\u3067\u304D\u305F\u306D\uFF01 <!--]-->`);
                } else if (unref(rightPercent) > 60) {
                  _push2(`<!--[--> \u3060\u3093\u3060\u3093\u3067\u304D\u305F\u306D\uFF01 <!--]-->`);
                } else {
                  _push2(`<!--[--> \u3082\u3063\u3068\u9811\u5F35\u3063\u3066\u306D\u3002 <!--]-->`);
                }
                _push2(`</div><!--]-->`);
              } else {
                _push2(`<!--[--><h2${_scopeId}> \u6CE8\u610F\u3059\u3079\u304D\u3068\u3053\u308D </h2><ul class="notice-list"${_scopeId}><li${_scopeId}>\u300C300\u300D\u306F\u300C\u3055\u3093\u3073\u3083\u304F\u300D</li><li${_scopeId}>\u300C600\u300D\u306F\u300C\u308D\u3063\u3074\u3083\u304F\u300D</li><li${_scopeId}>\u300C800\u300D\u306F\u300C\u306F\u3063\u3074\u3083\u304F\u300D</li><li${_scopeId}>\u300C1000\u300D\u306F\u300C\u305B\u3093\u300D</li><li${_scopeId}>\u300C3000\u300D\u306F\u300C\u3055\u3093\u305C\u3093\u300D</li><li${_scopeId}>\u300C8000\u300D\u306F\u300C\u306F\u3063\u305B\u3093\u300D</li></ul><!--]-->`);
              }
              _push2(`<hr${_scopeId}><div class="actions"${_scopeId}><h2${_scopeId}>`);
              if (unref(gameStatus) === null) {
                _push2(`<!--[--> \u59CB\u3081\u307E\u3057\u3087\u3046\uFF01 <!--]-->`);
              } else {
                _push2(`<!--[--> \u3082\u3046\u4E00\u5EA6\u3057\u307E\u3057\u3087\u3046\uFF01 <!--]-->`);
              }
              _push2(`</h2><button type="button"${_scopeId}> \u30EC\u30D9\u30EB\u4E00 </button><button type="button"${_scopeId}> \u30EC\u30D9\u30EB\u4E8C </button><button type="button"${_scopeId}> \u30EC\u30D9\u30EB\u4E09 </button></div></div>`);
            } else if (unref(gameStatus) === "playing") {
              _push2(`<div${_scopeId}><div class="answers"${_scopeId}><h3 class="answer-head"${_scopeId}> \u6B63\u3057\u3044\u7B54\u3048\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044 </h3><!--[-->`);
              ssrRenderList(unref(answers), (ans, idx) => {
                _push2(`<button type="button" class="${ssrRenderClass([{ outline: unref(answer) !== ans }, "tertiary ans"])}"${_scopeId}>${ssrInterpolate(ans)}</button>`);
              });
              _push2(`<!--]--></div><hr${_scopeId}><div class="actions"${_scopeId}><button type="button" class="secondary outline"${_scopeId}> \u3082\u3046\u4E00\u5EA6\u805E\u304F </button><button type="button"${ssrIncludeBooleanAttr(!unref(answer)) ? " disabled" : ""}${_scopeId}> \u6B21\u3078 </button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "main _test _suuji" }, [
                createVNode(_component_FailToSupportSpeechApi),
                createVNode(_component_NoJpVoiceFound),
                unref(gameStatus) !== "playing" ? (openBlock(), createBlock("div", { key: 0 }, [
                  unref(gameStatus) === "end" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("h2", null, " \u6570\u5B57 \u30EC\u30D9\u30EB" + toDisplayString(unref(level)) + "\u306E \u7DF4\u7FD2\u7D50\u679C ", 1),
                    createVNode("table", null, [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", null, "\u554F\u984C"),
                          createVNode("th", null, "\u7B54\u3048"),
                          createVNode("th", null, "\u7D50\u679C")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(questionHistory), (q, idx) => {
                          return openBlock(), createBlock("tr", {
                            key: `question_history_${idx}`
                          }, [
                            createVNode("td", null, [
                              createVNode("a", {
                                href: "#",
                                onClick: withModifiers(($event) => speak(q.question, 1), ["prevent"])
                              }, toDisplayString(q.question), 9, ["onClick"])
                            ]),
                            createVNode("td", null, [
                              createVNode("a", {
                                href: "#",
                                onClick: withModifiers(($event) => speak(q.answer, 1), ["prevent"])
                              }, toDisplayString(q.answer), 9, ["onClick"])
                            ]),
                            createVNode("td", null, toDisplayString(q.question === q.answer ? "\u2B55\uFE0F" : "\u274C"), 1)
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "result" }, [
                      createTextVNode(" \u6B63\u89E3\u7387 " + toDisplayString(unref(rightPercent)) + " % ", 1),
                      unref(rightPercent) > 98 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(" \u7D20\u6674\u3089\u3057\u3044\uFF01\u{1F44D} ")
                      ], 64)) : unref(rightPercent) > 80 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" \u4E0A\u624B\u306B\u306A\u3063\u305F\u306D\uFF01 ")
                      ], 64)) : unref(rightPercent) > 70 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(" \u3088\u304F\u3067\u304D\u305F\u306D\uFF01 ")
                      ], 64)) : unref(rightPercent) > 60 ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                        createTextVNode(" \u3060\u3093\u3060\u3093\u3067\u304D\u305F\u306D\uFF01 ")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 4 }, [
                        createTextVNode(" \u3082\u3063\u3068\u9811\u5F35\u3063\u3066\u306D\u3002 ")
                      ], 64))
                    ])
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("h2", null, " \u6CE8\u610F\u3059\u3079\u304D\u3068\u3053\u308D "),
                    createVNode("ul", { class: "notice-list" }, [
                      createVNode("li", null, "\u300C300\u300D\u306F\u300C\u3055\u3093\u3073\u3083\u304F\u300D"),
                      createVNode("li", null, "\u300C600\u300D\u306F\u300C\u308D\u3063\u3074\u3083\u304F\u300D"),
                      createVNode("li", null, "\u300C800\u300D\u306F\u300C\u306F\u3063\u3074\u3083\u304F\u300D"),
                      createVNode("li", null, "\u300C1000\u300D\u306F\u300C\u305B\u3093\u300D"),
                      createVNode("li", null, "\u300C3000\u300D\u306F\u300C\u3055\u3093\u305C\u3093\u300D"),
                      createVNode("li", null, "\u300C8000\u300D\u306F\u300C\u306F\u3063\u305B\u3093\u300D")
                    ])
                  ], 64)),
                  createVNode("hr"),
                  createVNode("div", { class: "actions" }, [
                    createVNode("h2", null, [
                      unref(gameStatus) === null ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(" \u59CB\u3081\u307E\u3057\u3087\u3046\uFF01 ")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" \u3082\u3046\u4E00\u5EA6\u3057\u307E\u3057\u3087\u3046\uFF01 ")
                      ], 64))
                    ]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => start(1)
                    }, " \u30EC\u30D9\u30EB\u4E00 ", 8, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => start(2)
                    }, " \u30EC\u30D9\u30EB\u4E8C ", 8, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => start(3)
                    }, " \u30EC\u30D9\u30EB\u4E09 ", 8, ["onClick"])
                  ])
                ])) : unref(gameStatus) === "playing" ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "answers" }, [
                    createVNode("h3", { class: "answer-head" }, " \u6B63\u3057\u3044\u7B54\u3048\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044 "),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (ans, idx) => {
                      return openBlock(), createBlock("button", {
                        key: `ans_${idx}`,
                        type: "button",
                        class: ["tertiary ans", { outline: unref(answer) !== ans }],
                        onClick: ($event) => setAns(ans)
                      }, toDisplayString(ans), 11, ["onClick"]);
                    }), 128))
                  ]),
                  createVNode("hr"),
                  createVNode("div", { class: "actions" }, [
                    createVNode("button", {
                      type: "button",
                      class: "secondary outline",
                      onClick: ($event) => replay()
                    }, " \u3082\u3046\u4E00\u5EA6\u805E\u304F ", 8, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      disabled: !unref(answer),
                      onClick: ($event) => next()
                    }, " \u6B21\u3078 ", 8, ["disabled", "onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/suuji.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=suuji-bf69dc91.mjs.map
