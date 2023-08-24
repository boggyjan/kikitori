import { b as useState, e as __nuxt_component_0 } from '../server.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, toDisplayString, withModifiers, withDirectives, isRef, vModelText, useSSRContext } from 'vue';
import { u as useSeoMeta } from './index-10289ccc.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const wTitle = "\u7DE8\u96C6 - \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0";
const description = "\u81EA\u5206\u306E\u30C6\u30FC\u30DE\u3092\u7DE8\u96C6";
const lsName = "saved_tests";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const pTitle = useState("pTitle");
    pTitle.value = "\u65B0\u3057\u3044\u7DF4\u7FD2\u3092\u4F5C\u308D\u3046\uFF01";
    useSeoMeta({
      title: wTitle,
      description,
      ogTitle: wTitle,
      ogDescription: description,
      twitterTitle: wTitle,
      twitterDescription: description
    });
    const tests = ref([]);
    const selectedIdx = ref(null);
    const title = ref(null);
    const questions = ref(null);
    const content = ref(null);
    function setSavedData() {
      localStorage.setItem(lsName, JSON.stringify(tests.value));
      window.dispatchEvent(new Event("saved_test_updated"));
    }
    function setSelected(i) {
      selectedIdx.value = i;
      title.value = tests.value[i].title;
      questions.value = tests.value[i].questions.join("\r");
      const scroll = window.scrollY + content.value.getBoundingClientRect().y - 100;
      window.scrollTo(0, scroll);
    }
    function addNew() {
      selectedIdx.value = null;
      title.value = null;
      questions.value = null;
    }
    function save() {
      const saveTitle = title.value.replace(/^\s+|\s+$/g, "");
      console.log(selectedIdx.value);
      if (selectedIdx.value === null && tests.value.find((item) => item.title === saveTitle)) {
        alert("\u4FDD\u5B58\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u3059\u3067\u306B\u540C\u3058\u30C6\u30FC\u30DE\u304C\u3042\u308A\u307E\u3059\u3002");
        return;
      }
      const saveQuestions = [...new Set(questions.value.split(/\r|\n/g).filter((item) => !!item))];
      if (saveQuestions.length < 4) {
        alert("\u4FDD\u5B58\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u5C11\u306A\u304F\u3068\u30824\u3064\u7570\u306A\u308B\u5358\u8A9E\u304C\u5FC5\u8981\u3067\u3059\u3002");
        return;
      }
      saveQuestions.forEach((item, idx) => {
        saveQuestions[idx] = saveQuestions[idx].replace(/^\s+|\s+$/g, "");
      });
      if (!isNaN(selectedIdx.value) && selectedIdx.value !== null) {
        tests.value[selectedIdx.value] = {
          title: saveTitle,
          questions: saveQuestions
        };
      } else {
        tests.value.push({
          title: saveTitle,
          questions: saveQuestions
        });
        selectedIdx.value = tests.value.length - 1;
      }
      setSavedData();
      alert("\u4FDD\u5B58\u3057\u307E\u3057\u305F");
    }
    function remove(idx) {
      if (confirm("Are you sure")) {
        tests.value.splice(idx, 1);
        setSavedData();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main _add"${_scopeId}><h2${_scopeId}> \u65B0\u3057\u3044\u7DF4\u7FD2\u3092\u4F5C\u308D\u3046\uFF01 </h2><div${_scopeId}> \u4F5C\u6210\u3057\u305F\u30C7\u30FC\u30BF\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306B\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u3001\u81EA\u5206\u3057\u304B\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002 </div><hr${_scopeId}><div class="grid"${_scopeId}><div class="list"${_scopeId}><h3${_scopeId}> \u4FDD\u5B58\u3057\u305F\u30C6\u30FC\u30DE </h3>`);
            if (!unref(tests).length) {
              _push2(`<div class="alert"${_scopeId}> \u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093 </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(tests), (test, idx) => {
              _push2(`<div class="${ssrRenderClass([{ active: idx === unref(selectedIdx) }, "item"])}"${_scopeId}>${ssrInterpolate(test.title)} <button type="button" class="small outline secondary"${_scopeId}> \u524A\u9664 </button></div>`);
            });
            _push2(`<!--]--><hr${_scopeId}></div><div class="content"${_scopeId}><form${_scopeId}>`);
            if (unref(selectedIdx) !== null) {
              _push2(`<h3${_scopeId}> \u30C6\u30FC\u30DE\u300C${ssrInterpolate(unref(title))}\u300D\u3092\u7DE8\u96C6 </h3>`);
            } else {
              _push2(`<h3${_scopeId}> \u65B0\u3057\u3044\u30C6\u30FC\u30DE\u3092\u7DE8\u96C6 </h3>`);
            }
            _push2(`<div class="item"${_scopeId}><label${_scopeId}>\u30C6\u30FC\u30DE</label><input${ssrRenderAttr("value", unref(title))} required${_scopeId}></div><div class="item"${_scopeId}><label${_scopeId}>\u5358\u8A9E\uFF08\u6539\u884C\u3067\u5358\u8A9E\u3092\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\uFF09</label><textarea required${_scopeId}>${ssrInterpolate(unref(questions))}</textarea></div><div class="actions"${_scopeId}>`);
            if (unref(selectedIdx) !== null) {
              _push2(`<button type="button" class="outline secondary"${_scopeId}> \u65B0\u3057\u3044\u306E\u3092\u4F5C\u308B </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button${_scopeId}> \u4FDD\u5B58 </button></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "main _add" }, [
                createVNode("h2", null, " \u65B0\u3057\u3044\u7DF4\u7FD2\u3092\u4F5C\u308D\u3046\uFF01 "),
                createVNode("div", null, " \u4F5C\u6210\u3057\u305F\u30C7\u30FC\u30BF\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306B\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u3001\u81EA\u5206\u3057\u304B\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002 "),
                createVNode("hr"),
                createVNode("div", { class: "grid" }, [
                  createVNode("div", { class: "list" }, [
                    createVNode("h3", null, " \u4FDD\u5B58\u3057\u305F\u30C6\u30FC\u30DE "),
                    !unref(tests).length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "alert"
                    }, " \u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093 ")) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tests), (test, idx) => {
                      return openBlock(), createBlock("div", {
                        key: `test_${idx}`,
                        class: ["item", { active: idx === unref(selectedIdx) }],
                        onClick: ($event) => setSelected(idx)
                      }, [
                        createTextVNode(toDisplayString(test.title) + " ", 1),
                        createVNode("button", {
                          type: "button",
                          class: "small outline secondary",
                          onClick: withModifiers(($event) => remove(idx), ["stop"])
                        }, " \u524A\u9664 ", 8, ["onClick"])
                      ], 10, ["onClick"]);
                    }), 128)),
                    createVNode("hr")
                  ]),
                  createVNode("div", {
                    ref_key: "content",
                    ref: content,
                    class: "content"
                  }, [
                    createVNode("form", {
                      onSubmit: withModifiers(($event) => save(), ["prevent"])
                    }, [
                      unref(selectedIdx) !== null ? (openBlock(), createBlock("h3", { key: 0 }, " \u30C6\u30FC\u30DE\u300C" + toDisplayString(unref(title)) + "\u300D\u3092\u7DE8\u96C6 ", 1)) : (openBlock(), createBlock("h3", { key: 1 }, " \u65B0\u3057\u3044\u30C6\u30FC\u30DE\u3092\u7DE8\u96C6 ")),
                      createVNode("div", { class: "item" }, [
                        createVNode("label", null, "\u30C6\u30FC\u30DE"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(title)]
                        ])
                      ]),
                      createVNode("div", { class: "item" }, [
                        createVNode("label", null, "\u5358\u8A9E\uFF08\u6539\u884C\u3067\u5358\u8A9E\u3092\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\uFF09"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => isRef(questions) ? questions.value = $event : null,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(questions)]
                        ])
                      ]),
                      createVNode("div", { class: "actions" }, [
                        unref(selectedIdx) !== null ? (openBlock(), createBlock("button", {
                          key: 0,
                          type: "button",
                          class: "outline secondary",
                          onClick: ($event) => addNew()
                        }, " \u65B0\u3057\u3044\u306E\u3092\u4F5C\u308B ", 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode("button", null, " \u4FDD\u5B58 ")
                      ])
                    ], 40, ["onSubmit"])
                  ], 512)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-50383dca.mjs.map
