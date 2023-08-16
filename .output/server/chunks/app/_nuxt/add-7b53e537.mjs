import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const tests = ref([]);
    const selectedIdx = ref(null);
    const title = ref(null);
    const questions = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "_add" }, _attrs))}><h2> \u65B0\u3057\u3044\u7DF4\u7FD2\u3092\u4F5C\u308D\u3046\uFF01 </h2><hr><div class="grid"><div class="list"><h3> \u4FDD\u5B58\u3057\u305F\u30C6\u30FC\u30DE </h3>`);
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
        _push(`<button type="button"> \u30AD\u30E3\u30F3\u30BB\u30EB </button>`);
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
//# sourceMappingURL=add-7b53e537.mjs.map
