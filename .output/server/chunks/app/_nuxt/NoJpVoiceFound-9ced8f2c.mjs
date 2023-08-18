import { useSSRContext, unref, mergeProps } from 'vue';
import { d as useState } from '../server.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "FailToSupportSpeechApi",
  __ssrInlineRender: true,
  setup(__props) {
    const failToSupportSpeechApi = useState("failToSupportSpeechApi");
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(failToSupportSpeechApi)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "alert" }, _attrs))}> * \u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306FWeb Synthesis API\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\u3002<br> * This browser does not support the Web Synthesis API.<br> * \u8A72\u700F\u89BD\u5668\u4E0D\u652F\u63F4 Web Synthesis API\u3002 </div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FailToSupportSpeechApi.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "NoJpVoiceFound",
  __ssrInlineRender: true,
  setup(__props) {
    const noJpVoiceFound = useState("noJpVoiceFound");
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(noJpVoiceFound)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "alert" }, _attrs))}><div class="title">If you can&#39;t hear the sound</div><ol><li>iOS users please go to &quot;Settings -&gt; Accessibility -&gt; Spoken content -&gt; Voices -&gt; Japanese&quot; to download the voice data.</li><li>Android users please go to &quot;Settings -&gt; Accessbility -&gt; Text-to-speech output -&gt; Setting Icon next to &quot;Preferred engine&quot; -&gt; Install voice data&quot; to download Japanese voice data and restart your browser.</li></ol><div class="title">\u82E5\u662F\u7121\u6CD5\u807D\u898B\u8072\u97F3</div><ol><li>iOS\u7684\u4F7F\u7528\u8005\u8ACB\u81F3\u300C\u8A2D\u5B9A -&gt; \u8F14\u52A9\u4F7F\u7528 -&gt; \u8A9E\u97F3\u5167\u5BB9 -&gt; \u8072\u97F3 -&gt; \u65E5\u6587\u300D\u4E0B\u8F09\u65E5\u6587\u8A9E\u97F3\u6A94\u3002</li><li>Android\u7684\u4F7F\u7528\u8005\u8ACB\u81F3\u300C\u8A2D\u5B9A -&gt; \u5354\u52A9\u5DE5\u5177 -&gt; \u6587\u5B57\u8F49\u8A9E\u97F3\u8F38\u51FA -&gt; \u9EDE\u9078\u504F\u597D\u7684\u5F15\u64CE\u53F3\u65B9\u7684\u8A2D\u5B9A\u6309\u9215 -&gt; \u5B89\u88DD\u8A9E\u97F3\u8CC7\u6599\u300D\u4E0B\u8F09\u65E5\u6587\u8A9E\u97F3\u6A94\uFF0C\u4E26\u91CD\u65B0\u555F\u52D5\u700F\u89BD\u5668\u3002</li></ol></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NoJpVoiceFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=NoJpVoiceFound-9ced8f2c.mjs.map
