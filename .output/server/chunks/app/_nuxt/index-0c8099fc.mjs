import { ref, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, unref, toDisplayString, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { d as useState, u as useHead, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1 } from './NoJpVoiceFound-9ced8f2c.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-563b35af.mjs';
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

const _sfc_main$1 = {
  props: {
    dots: {
      type: Boolean,
      default: true
    },
    nav: {
      type: Boolean,
      default: true
    },
    items: {
      type: Number,
      default: 1
    },
    margin: {
      type: Number,
      default: 0
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: Object,
      default: null
    },
    autoplay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: 0,
      dragging: false,
      pointerStartX: 0,
      pointerX: 0,
      pointerStartY: 0,
      pointerY: 0,
      trackHeight: "auto",
      // autoWidth
      autoWidthTrackPos: 0,
      autoWidthLeftBtnVisible: false,
      autoWidthRightBtnVisible: true,
      // responsive
      windowWidth: 0,
      rwdData: {},
      // watch slots change
      observer: null,
      slotChanged: 1,
      // autoplay
      autoplayInterval: null
    };
  },
  computed: {
    // props
    _dots() {
      return this.getCurrentProp.dots;
    },
    _nav() {
      return this.getCurrentProp.nav;
    },
    _items() {
      return this.getCurrentProp.items;
    },
    _margin() {
      return this.getCurrentProp.margin;
    },
    _autoHeight() {
      return this.getCurrentProp.autoHeight;
    },
    // basic computed vars
    currentPage() {
      return Math.ceil(this.currentIndex / this._items);
    },
    tags() {
      if (!this.slotChanged) {
        return [];
      }
      return this.$slots.default()[0].children || [];
    },
    trackWidth() {
      if (this.autoWidth) {
        return "auto";
      }
      const singleWidth = `calc(${100 / this._items}% - ${(this._items - 1) * this._margin / this._items}px)`;
      return `calc(${singleWidth} * ${this.itemsTotal} + ${this._margin * (this.itemsTotal - 1)}px)`;
    },
    itemsTotal() {
      return this.tags.length;
    },
    pagesTotal() {
      return Math.ceil(this.itemsTotal / this._items);
    },
    currentTags() {
      return this.tags.slice(this.currentIndex, this.currentIndex + this._items);
    },
    trackPos() {
      if (this.autoWidth) {
        this.updateAutoWidthTrackPos();
        return this.autoWidthTrackPos + "px";
      }
      const x = `calc( calc(100% - ${this._margin}px * ${this.itemsTotal - 1}) / ${this.itemsTotal} * ${-this.currentIndex} - ${this.currentIndex * this._margin}px )`;
      if (this.dragging) {
        return `calc( ${x} + ${this.pointerX - this.pointerStartX}px )`;
      } else {
        return x;
      }
    },
    navLeftBtnVisible() {
      if (this.autoWidth) {
        return this.autoWidthLeftBtnVisible;
      } else {
        return this.currentPage > 0;
      }
    },
    navRightBtnVisible() {
      if (this.autoWidth) {
        return this.autoWidthRightBtnVisible;
      } else {
        return this.currentPage < this.pagesTotal - 1;
      }
    },
    // responsive
    responsiveGutterNum() {
      return Object.keys(this.responsive).map((item) => parseInt(item));
    },
    getCurrentProp() {
      const currentData = {
        dots: typeof this.rwdData.dots !== "undefined" ? this.rwdData.dots : this.dots,
        nav: typeof this.rwdData.nav !== "undefined" ? this.rwdData.nav : this.nav,
        items: typeof this.rwdData.items !== "undefined" ? this.rwdData.items : this.items,
        margin: typeof this.rwdData.margin !== "undefined" ? this.rwdData.margin : this.margin,
        autoHeight: typeof this.rwdData.autoHeight !== "undefined" ? this.rwdData.autoHeight : this.autoHeight
      };
      return currentData;
    }
  },
  watch: {
    tags() {
      this.currentIndex = 0;
    },
    windowWidth(val) {
      if (this.responsive) {
        const idx = this.responsiveGutterNum.filter((item) => item <= val).length - 1;
        const gutter = this.responsiveGutterNum[idx];
        this.rwdData = this.responsive[gutter] || {};
        this.slideToPage(this.currentPage);
      }
    },
    // 當currentIndex變動時，執行refreshHeight (autoHeight)
    // 如果發現有還沒載入完成的圖片，就聽load事件，讓他在載入完成後去執行refreshHeight
    // 如果圖片都已經是載入完成的狀態，就直接執行refreshHeight
    currentIndex() {
      if (this._autoHeight) {
        let hasNotLoadedPics = false;
        this.currentTags.forEach((node) => {
          node.elm.querySelectorAll("img").forEach((img) => {
            if (!img.complete) {
              hasNotLoadedPics = true;
              img.addEventListener("load", () => {
                this.refreshHeight();
              }, { once: true });
            }
          });
        });
        if (!hasNotLoadedPics) {
          this.refreshHeight();
        }
      }
      this.$emit("changed", {
        item: {
          index: this.currentIndex
        }
      });
    }
  },
  mounted() {
    if (this.autoplay) {
      this.autoplayInterval = setInterval(() => {
        this.autoplayNextPage();
      }, this.autoplay);
    }
    if (this.responsive || this.autoWidth || this.autoHeight) {
      window.addEventListener("resize", this.onWindowResize);
      this.onWindowResize();
    }
    this.observer = new MutationObserver(() => {
      this.slotChanged += 1;
    });
    this.observer.observe(
      this.$refs.track,
      { childList: true }
    );
  },
  beforeDestroy() {
    clearInterval(this.autoplayInterval);
    if (this.responsive || this.autoWidth || this.autoHeight) {
      window.removeEventListener("resize", this.onWindowResize);
    }
    this.observer.disconnect();
  },
  methods: {
    // pointer event handlers
    startDrag($event) {
      const pointerX = $event.touches ? $event.touches[0].screenX : $event.screenX;
      const pointerY = $event.touches ? $event.touches[0].screenY : $event.screenY;
      this.pointerStartX = this.pointerX = pointerX;
      this.pointerStartY = this.pointerY = pointerY;
      document.addEventListener("mousemove", this.drag);
      document.addEventListener("mouseup", this.endDrag);
      document.addEventListener("touchmove", this.drag, { passive: false });
      document.addEventListener("touchforcechange", this.drag, { passive: false });
      document.addEventListener("touchend", this.endDrag);
    },
    drag($event) {
      const pointerX = $event.touches ? $event.touches[0].screenX : $event.screenX;
      const pointerY = $event.touches ? $event.touches[0].screenY : $event.screenY;
      const userSwipe = Math.abs(this.pointerStartY - pointerY) <= Math.abs(this.pointerStartX - pointerX);
      if (userSwipe || this.dragging) {
        $event.stopPropagation();
        $event.preventDefault();
        this.dragging = true;
        this.pointerX = pointerX;
        this.pointerY = pointerY;
        if (this.autoWidth) {
          this.updateAutoWidthNavVisible();
        }
      } else {
        document.removeEventListener("mousemove", this.drag);
        document.removeEventListener("mouseup", this.endDrag);
        document.removeEventListener("touchmove", this.drag);
        document.removeEventListener("touchforcechange", this.drag);
        document.removeEventListener("touchend", this.endDrag);
      }
    },
    endDrag() {
      document.removeEventListener("mousemove", this.drag);
      document.removeEventListener("mouseup", this.endDrag);
      document.removeEventListener("touchmove", this.drag);
      document.removeEventListener("touchforcechange", this.drag);
      document.removeEventListener("touchend", this.endDrag);
      if (this.pointerStartX - this.pointerX > 50) {
        this.nextPage();
      } else if (this.pointerStartX - this.pointerX < -50) {
        this.prevPage();
      }
      this.dragging = false;
    },
    slideToPage(page) {
      const target = page * this._items;
      let res = target + this._items <= this.itemsTotal ? target : this.itemsTotal - this._items;
      res = res < 0 ? 0 : res;
      this.currentIndex = res;
    },
    // autoWidth
    updateAutoWidthTrackPos() {
      const scrollableWidth = this.stageWidth() - this.autoWidthTrackWidth();
      this.autoWidthTrackPos = this.autoWidthTrackPos + (this.pointerX - this.pointerStartX);
      this.pointerStartX = this.pointerX;
      if (!this.dragging) {
        if (this.autoWidthTrackPos > 0) {
          this.autoWidthTrackPos = 0;
        }
        if (this.autoWidthTrackPos < scrollableWidth) {
          this.autoWidthTrackPos = scrollableWidth;
        }
      }
    },
    updateAutoWidthNavVisible() {
      if (this.autoWidthTrackPos < 0) {
        this.autoWidthLeftBtnVisible = true;
      } else {
        this.autoWidthLeftBtnVisible = false;
      }
      if (this.autoWidthTrackPos > this.stageWidth() - this.autoWidthTrackWidth()) {
        this.autoWidthRightBtnVisible = true;
      } else {
        this.autoWidthRightBtnVisible = false;
      }
    },
    slideToPos(pos) {
      const scrollableWidth = this.stageWidth() - this.autoWidthTrackWidth();
      this.autoWidthTrackPos += pos;
      if (this.autoWidthTrackPos > 0) {
        this.autoWidthTrackPos = 0;
      } else if (this.autoWidthTrackPos < scrollableWidth) {
        this.autoWidthTrackPos = scrollableWidth;
      }
      this.updateAutoWidthNavVisible();
    },
    prevPage() {
      if (this.autoWidth) {
        this.slideToPos(300);
        return;
      }
      if (this.currentPage > 0) {
        this.slideToPage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.autoWidth) {
        this.slideToPos(-300);
        return;
      }
      if (this.currentPage < this.pagesTotal - 1) {
        this.slideToPage(this.currentPage + 1);
      }
    },
    // autoplay
    autoplayNextPage() {
      if (this.autoWidth) {
        return;
      }
      if (this.currentPage < this.pagesTotal - 1) {
        this.slideToPage(this.currentPage + 1);
      } else {
        this.slideToPage(0);
      }
    },
    // autoHeight
    refreshHeight() {
      const maxHeight = Math.max(...this.currentTags.map((item) => item.elm.offsetHeight));
      this.trackHeight = maxHeight + "px";
    },
    // autoWidth
    stageWidth() {
      if (this.$refs.stage && this.windowWidth) {
        return this.$refs.stage.offsetWidth;
      } else {
        return 0;
      }
    },
    autoWidthTrackWidth() {
      if (this.$refs.track && this.windowWidth) {
        return this.$refs.track.scrollWidth;
      } else {
        return 0;
      }
    },
    // response
    onWindowResize() {
      this.windowWidth = window.innerWidth;
      setTimeout(() => {
        if (this._autoHeight) {
          this.refreshHeight();
        }
      }, 1);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel" }, _attrs))}><div class="carousel__stage"><div style="${ssrRenderStyle(`
          width: ${$options.trackWidth};
          height: ${$data.trackHeight};
          grid-gap: ${$options._margin}px;
          grid-template-columns: repeat(${$options.itemsTotal}, 1fr);
          transform: translateX(${$options.trackPos});
        `)}" class="${ssrRenderClass([{ dragging: $data.dragging }, "carousel__track"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  if ($options._dots && !$props.autoWidth) {
    _push(`<div class="carousel__pagination"><!--[-->`);
    ssrRenderList($options.pagesTotal, (i, idx) => {
      _push(`<button class="${ssrRenderClass([{ active: $options.currentPage === idx }, "carousel__paginationBtn"])}" type="button">${ssrInterpolate(i)}</button>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options._nav) {
    _push(`<div class="carousel__nav">`);
    if ($options.navLeftBtnVisible) {
      _push(`<a href="#" class="carousel__navLeftBtn"> Prev </a>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.navRightBtnVisible) {
      _push(`<a href="#" class="carousel__navRightBtn"> Next </a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const title = "\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0";
const desc = "\u300C\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u300D\u306B\u3064\u3044\u3066";
const url = "https://kikitori.boggy.tw";
const image = "https://kikitori.boggy.tw/images/share.jpg";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tests = ref([]);
    const pTitle = useState("pTitle");
    pTitle.value = "";
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
      const _component_Carousel = __nuxt_component_0;
      const _component_FailToSupportSpeechApi = __nuxt_component_0$1;
      const _component_NoJpVoiceFound = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "_index" }, _attrs))}><div class="banners">`);
      _push(ssrRenderComponent(_component_Carousel, {
        items: 1,
        dots: true,
        nav: false,
        autoplay: 4e3,
        responsive: { 991: { items: 2 } }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(4, (i) => {
              _push2(`<img alt="Kikitori" class="banner"${ssrRenderAttr("src", `/images/index_banner_${i}.jpg`)}${_scopeId}>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                return createVNode("img", {
                  key: `index_banner_${i}`,
                  alt: "Kikitori",
                  class: "banner",
                  src: `/images/index_banner_${i}.jpg`
                }, null, 8, ["src"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="main">`);
      _push(ssrRenderComponent(_component_FailToSupportSpeechApi, null, null, _parent));
      _push(ssrRenderComponent(_component_NoJpVoiceFound, null, null, _parent));
      _push(`<h2> \u7DF4\u7FD2\u30C6\u30FC\u30DE </h2><nav class="main-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/hiduke",
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u65E5\u4ED8 `);
          } else {
            return [
              createTextVNode(" \u65E5\u4ED8 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/youbi",
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u66DC\u65E5 `);
          } else {
            return [
              createTextVNode(" \u66DC\u65E5 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/jikoku",
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
        class: "btn add-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + \u30C6\u30FC\u30DE `);
          } else {
            return [
              createTextVNode(" + \u30C6\u30FC\u30DE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="google-ad">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209950884395919",
        crossorigin: "anonymous"
      }, null), _parent);
      _push(`<ins class="adsbygoogle" style="${ssrRenderStyle({ "display": "block" })}" data-ad-client="ca-pub-8209950884395919" data-ad-slot="4250291761" data-ad-format="auto" data-full-width-responsive="true"></ins>`);
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
      _push(`</div><hr><h2> \u300C\u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u300D\u306B\u3064\u3044\u3066 </h2><p> \u805E\u304D\u53D6\u308A\u30B2\u30FC\u30E0\u306F\u300CWeb Synthesis API\u300D\u3068\u3044\u3046\u6280\u8853\u3092\u6D3B\u7528\u3057\u305FWeb\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3059\u3002\u4E0B\u8A18\u306E\u300C\u6642\u9593\u300D\u3084\u300C\u6570\u5B57\u300D\u306A\u3069\u304C\u7DF4\u7FD2\u306E\u30C6\u30FC\u30DE\u3067\u3059\u3002\u307E\u305A\u306F\u4E00\u3064\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u7DF4\u7FD2\u3057\u307E\u3057\u3087\u3046\u3002\u4ED6\u306E\u30C6\u30FC\u30DE\u3092\u7DF4\u7FD2\u3057\u305F\u3044\u5834\u5408\u3001\u300C+ \u30C6\u30FC\u30DE\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u81EA\u5206\u306E\u30C6\u30FC\u30DE\u3092\u4F5C\u3063\u3066\u304F\u3060\u3055\u3044\u3002 </p><hr><h2>FAQ</h2><h3>If you can&#39;t hear the sound</h3><ol><li>iOS users please go to &quot;Settings -&gt; Accessibility -&gt; Spoken content -&gt; Voices -&gt; Japanese&quot; to download the voice data.</li><li>Android users please go to &quot;Settings -&gt; Accessbility -&gt; Text-to-speech output -&gt; Setting Icon next to &quot;Preferred engine&quot; -&gt; Install voice data&quot; to download Japanese voice data and restart your browser.</li></ol><h3>\u82E5\u662F\u7121\u6CD5\u807D\u898B\u8072\u97F3</h3><ol><li>iOS\u7684\u4F7F\u7528\u8005\u8ACB\u81F3\u300C\u8A2D\u5B9A -&gt; \u8F14\u52A9\u4F7F\u7528 -&gt; \u8A9E\u97F3\u5167\u5BB9 -&gt; \u8072\u97F3 -&gt; \u65E5\u6587\u300D\u4E0B\u8F09\u65E5\u6587\u8A9E\u97F3\u6A94\u3002</li><li>Android\u7684\u4F7F\u7528\u8005\u8ACB\u81F3\u300C\u8A2D\u5B9A -&gt; \u5354\u52A9\u5DE5\u5177 -&gt; \u6587\u5B57\u8F49\u8A9E\u97F3\u8F38\u51FA -&gt; \u9EDE\u9078\u504F\u597D\u7684\u5F15\u64CE\u53F3\u65B9\u7684\u8A2D\u5B9A\u6309\u9215 -&gt; \u5B89\u88DD\u8A9E\u97F3\u8CC7\u6599\u300D\u4E0B\u8F09\u65E5\u6587\u8A9E\u97F3\u6A94\uFF0C\u4E26\u91CD\u65B0\u555F\u52D5\u700F\u89BD\u5668\u3002</li></ol></div></div>`);
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
//# sourceMappingURL=index-0c8099fc.mjs.map
