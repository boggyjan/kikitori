<template>
  <div class="carousel">
    <div
      ref="stage"
      class="carousel__stage"
      @mousedown.prevent="startDrag($event)"
      @touchstart="startDrag($event)"
    >
      <div
        ref="track"
        :style="`
          width: ${ trackWidth };
          height: ${ trackHeight };
          grid-gap: ${ _margin }px;
          grid-template-columns: repeat(${ itemsTotal }, 1fr);
          transform: translateX(${ trackPos });
        `"
        :class="{ dragging }"
        class="carousel__track"
      >
        <slot />
      </div>
    </div>

    <div
      v-if="_dots && !autoWidth"
      class="carousel__pagination"
    >
      <button
        v-for="(i, idx) in pagesTotal"
        :key="`carousel__paginationBtn--${ idx }`"
        :class="{ active: currentPage === idx }"
        class="carousel__paginationBtn"
        type="button"
        @click.prevent="slideToPage(idx)"
      >
        {{ i }}
      </button>
    </div>

    <div
      v-if="_nav"
      class="carousel__nav"
    >
      <a
        v-if="navLeftBtnVisible"
        href="#"
        class="carousel__navLeftBtn"
        @click.prevent="prevPage()"
      >
        Prev
      </a>
      <a
        v-if="navRightBtnVisible"
        href="#"
        class="carousel__navRightBtn"
        @click.prevent="nextPage()"
      >
        Next
      </a>
    </div>
  </div>
</template>

<script>
export default {
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

  data () {
    return {
      currentIndex: 0,
      dragging: false,

      pointerStartX: 0,
      pointerX: 0,
      pointerStartY: 0,
      pointerY: 0,

      trackHeight: 'auto',

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
    }
  },

  computed: {
    // props
    _dots () {
      return this.getCurrentProp.dots
    },
    _nav () {
      return this.getCurrentProp.nav
    },
    _items () {
      return this.getCurrentProp.items
    },
    _margin () {
      return this.getCurrentProp.margin
    },
    _autoHeight () {
      return this.getCurrentProp.autoHeight
    },

    // basic computed vars
    currentPage () {
      return Math.ceil(this.currentIndex / this._items)
    },
    tags () {
      // slotChanged 單純只是讓 這個computed value可以在MutationObserver偵測HTML有變動時，重新動作
      if (!this.slotChanged) {
        return []
      }
      // vue3 要把 default改成default()[0].children
      return this.$slots.default()[0].children || []
    },
    trackWidth () {
      if (this.autoWidth) {
        return 'auto'
      }

      const singleWidth = `calc(${100 / this._items}% - ${((this._items - 1) * this._margin) / this._items}px)`
      return `calc(${singleWidth} * ${this.itemsTotal} + ${this._margin * (this.itemsTotal - 1)}px)`
    },
    itemsTotal () {
      return this.tags.length
    },
    pagesTotal () {
      return Math.ceil(this.itemsTotal / this._items)
    },
    currentTags () {
      return this.tags.slice(this.currentIndex, this.currentIndex + this._items)
    },
    trackPos () {
      // 如果是 autoWidth 的話，因為沒有currentIndex，另外處理
      if (this.autoWidth) {
        this.updateAutoWidthTrackPos()
        return this.autoWidthTrackPos + 'px'
      }

      // 非autoWidth就走正常translateX的方法
      const x = `calc( calc(100% - ${this._margin}px * ${this.itemsTotal - 1}) / ${this.itemsTotal} * ${-this.currentIndex} - ${this.currentIndex * this._margin}px )`

      if (this.dragging) {
        return `calc( ${x} + ${this.pointerX - this.pointerStartX}px )`
      } else {
        return x
      }
    },
    navLeftBtnVisible () {
      if (this.autoWidth) {
        return this.autoWidthLeftBtnVisible
      } else {
        return this.currentPage > 0
      }
    },
    navRightBtnVisible () {
      if (this.autoWidth) {
        return this.autoWidthRightBtnVisible
      } else {
        return this.currentPage < this.pagesTotal - 1
      }
    },

    // responsive
    responsiveGutterNum () {
      return Object.keys(this.responsive).map(item => parseInt(item))
    },
    getCurrentProp () {
      const currentData = {
        dots: typeof this.rwdData.dots !== 'undefined' ? this.rwdData.dots : this.dots,
        nav: typeof this.rwdData.nav !== 'undefined' ? this.rwdData.nav : this.nav,
        items: typeof this.rwdData.items !== 'undefined' ? this.rwdData.items : this.items,
        margin: typeof this.rwdData.margin !== 'undefined' ? this.rwdData.margin : this.margin,
        autoHeight: typeof this.rwdData.autoHeight !== 'undefined' ? this.rwdData.autoHeight : this.autoHeight
      }
      return currentData
    }
  },

  watch: {
    tags () {
      this.currentIndex = 0
    },
    windowWidth (val) {
      if (this.responsive) {
        const idx = this.responsiveGutterNum.filter(item => item <= val).length - 1
        const gutter = this.responsiveGutterNum[idx]
        this.rwdData = this.responsive[gutter] || {}

        // 重整track位置，避免後面出現空白
        this.slideToPage(this.currentPage)
      }
    },

    // 當currentIndex變動時，執行refreshHeight (autoHeight)
    // 如果發現有還沒載入完成的圖片，就聽load事件，讓他在載入完成後去執行refreshHeight
    // 如果圖片都已經是載入完成的狀態，就直接執行refreshHeight
    currentIndex () {
      // autoHeight
      if (this._autoHeight) {
        // 檢查loading=lazy的img標籤是否都載入完成
        let hasNotLoadedPics = false

        this.currentTags.forEach((node) => {
          node.elm.querySelectorAll('img').forEach((img) => {
            // 如果發現有還沒載入完成的圖片，就聽load事件，讓他在載入完成後去執行refreshHeight
            if (!img.complete) {
              hasNotLoadedPics = true
              img.addEventListener('load', () => {
                this.refreshHeight()
              }, { once: true })
            }
          })
        })

        // 如果圖片都已經是載入完成的狀態，就直接執行refreshHeight
        if (!hasNotLoadedPics) {
          this.refreshHeight()
        }
      }

      // trigger change event
      this.$emit('changed', {
        item: {
          index: this.currentIndex
        }
      })
    }
  },

  mounted () {
    // autoplay
    if (this.autoplay) {
      this.autoplayInterval = setInterval(() => {
        this.autoplayNextPage()
      }, this.autoplay)
    }

    // responsive and autoWidth 需要隨resize取得window寬
    if (this.responsive || this.autoWidth || this.autoHeight) {
      window.addEventListener('resize', this.onWindowResize)
      this.onWindowResize()
    }

    // watch slot change
    this.observer = new MutationObserver(() => {
      this.slotChanged += 1
    })

    // Setup the observer
    this.observer.observe(
      this.$refs.track,
      { childList: true }
    )
  },

  beforeDestroy () {
    // autoplay
    clearInterval(this.autoplayInterval)

    // responsive and autoWidth 需要隨resize取得window寬
    if (this.responsive || this.autoWidth || this.autoHeight) {
      window.removeEventListener('resize', this.onWindowResize)
    }

    // remove MutationObserver
    this.observer.disconnect()
  },

  methods: {
    // pointer event handlers
    startDrag ($event) {
      const pointerX = $event.touches ? $event.touches[0].screenX : $event.screenX
      const pointerY = $event.touches ? $event.touches[0].screenY : $event.screenY

      this.pointerStartX = this.pointerX = pointerX
      this.pointerStartY = this.pointerY = pointerY

      document.addEventListener('mousemove', this.drag)
      document.addEventListener('mouseup', this.endDrag)
      document.addEventListener('touchmove', this.drag, { passive: false })
      document.addEventListener('touchforcechange', this.drag, { passive: false })
      // ios 一定要同時綁 touchmove 跟 touchforcechange 這兩個 event 才能 prevent touchmove event 讓視窗不會上下滾動
      document.addEventListener('touchend', this.endDrag)
    },
    drag ($event) {
      const pointerX = $event.touches ? $event.touches[0].screenX : $event.screenX
      const pointerY = $event.touches ? $event.touches[0].screenY : $event.screenY
      const userSwipe = Math.abs(this.pointerStartY - pointerY) <= Math.abs(this.pointerStartX - pointerX)

      if (userSwipe || this.dragging) {
        $event.stopPropagation()
        $event.preventDefault()

        this.dragging = true
        this.pointerX = pointerX
        this.pointerY = pointerY

        // autoWidth update nav btn visible
        if (this.autoWidth) {
          this.updateAutoWidthNavVisible()
        }
      } else {
        document.removeEventListener('mousemove', this.drag)
        document.removeEventListener('mouseup', this.endDrag)
        document.removeEventListener('touchmove', this.drag)
        document.removeEventListener('touchforcechange', this.drag)
        document.removeEventListener('touchend', this.endDrag)
      }
    },
    endDrag () {
      document.removeEventListener('mousemove', this.drag)
      document.removeEventListener('mouseup', this.endDrag)
      document.removeEventListener('touchmove', this.drag)
      document.removeEventListener('touchforcechange', this.drag)
      document.removeEventListener('touchend', this.endDrag)

      if (this.pointerStartX - this.pointerX > 50) {
        this.nextPage()
      } else if (this.pointerStartX - this.pointerX < -50) {
        this.prevPage()
      }

      this.dragging = false
    },

    slideToPage (page) {
      const target = page * this._items
      let res = target + this._items <= this.itemsTotal ? target : this.itemsTotal - this._items
      res = res < 0 ? 0 : res
      this.currentIndex = res
    },

    // autoWidth
    updateAutoWidthTrackPos () {
      const scrollableWidth = this.stageWidth() - this.autoWidthTrackWidth()
      this.autoWidthTrackPos = this.autoWidthTrackPos + (this.pointerX - this.pointerStartX)
      this.pointerStartX = this.pointerX

      if (!this.dragging) {
        if (this.autoWidthTrackPos > 0) {
          this.autoWidthTrackPos = 0
        }
        if (this.autoWidthTrackPos < scrollableWidth) {
          this.autoWidthTrackPos = scrollableWidth
        }
      }
    },
    updateAutoWidthNavVisible () {
      if (this.autoWidthTrackPos < 0) {
        this.autoWidthLeftBtnVisible = true
      } else {
        this.autoWidthLeftBtnVisible = false
      }

      if (this.autoWidthTrackPos > this.stageWidth() - this.autoWidthTrackWidth()) {
        this.autoWidthRightBtnVisible = true
      } else {
        this.autoWidthRightBtnVisible = false
      }
    },
    slideToPos (pos) {
      const scrollableWidth = this.stageWidth() - this.autoWidthTrackWidth()

      this.autoWidthTrackPos += pos

      if (this.autoWidthTrackPos > 0) {
        this.autoWidthTrackPos = 0
      } else if (this.autoWidthTrackPos < scrollableWidth) {
        this.autoWidthTrackPos = scrollableWidth
      }

      this.updateAutoWidthNavVisible()
    },

    prevPage () {
      // autoWidth
      if (this.autoWidth) {
        this.slideToPos(300)
        return
      }

      // 非 autoWidth 走slideToPage method
      if (this.currentPage > 0) {
        this.slideToPage(this.currentPage - 1)
      }
    },
    nextPage () {
      // autoWidth
      if (this.autoWidth) {
        this.slideToPos(-300)
        return
      }

      // 非 autoWidth 走slideToPage method
      if (this.currentPage < this.pagesTotal - 1) {
        this.slideToPage(this.currentPage + 1)
      }
    },

    // autoplay
    autoplayNextPage () {
      // 該功能不支援 autoWidth
      if (this.autoWidth) {
        return
      }

      if (this.currentPage < this.pagesTotal - 1) {
        this.slideToPage(this.currentPage + 1)
      } else {
        this.slideToPage(0)
      }
    },

    // autoHeight
    refreshHeight () {
      const maxHeight = Math.max(...this.currentTags.map(item => item.elm.offsetHeight))
      this.trackHeight = maxHeight + 'px'
    },

    // autoWidth
    stageWidth () {
      if (this.$refs.stage && this.windowWidth) {
        return this.$refs.stage.offsetWidth
      } else {
        return 0
      }
    },
    autoWidthTrackWidth () {
      if (this.$refs.track && this.windowWidth) {
        return this.$refs.track.scrollWidth // 用offsetWidth會得到跟stage一樣的寬度
      } else {
        return 0
      }
    },

    // response
    onWindowResize () {
      this.windowWidth = window.innerWidth

      setTimeout(() => {
        // autoHeight
        if (this._autoHeight) {
          // auto height
          this.refreshHeight()
        }
      }, 1)
    }
  }
}
</script>

<style lang="scss">
.carousel {
  position: relative;

  &__stage {
    overflow: hidden;
  }

  &__track {
    display: grid;
    grid-auto-flow: column;
    align-items: flex-start;
    transition: transform 0.3s, height 0.3s;

    &.dragging {
      transition: none;

      > * {
        pointer-events: none;
      }
    }

    img {
      transition: opacity 0.5s;

      &[src=''],
      &:not([src]) {
        opacity: 0;
      }
    }
  }

  &__pagination {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    text-align: center;
  }

  &__paginationBtn {
    display: inline-block;
    width: 8px;
    height: 8px;
    overflow: hidden;
    margin: 0 5px;
    padding: 0;
    background: rgba(255,255,255,0.6);
    border: 0;
    border-radius: 10px;
    color: rgba(0,0,0,0);
    transition: background 0.6s;

    &.active {
      background: var(--carousel-pagination);
    }

    &:hover {
      color: rgba(0,0,0,0);
    }
  }

  &__nav {
    font-size: 0;
    text-indent: -10000px;
  }

  &__navLeftBtn,
  &__navRightBtn {
    position: absolute;
    top: calc(50% - 50px);
    width: 15px;
    height: 45px;
  }

  &__navLeftBtn {
    left: 20px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWcluWxpF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6bm9uZTtzdHJva2U6I0MwQTg3RTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+Cjxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjE0LjUsMC41IDAuNSwyMi41IDE0LjUsNDQuNSAiLz4KPC9zdmc+Cg==");
  }

  &__navRightBtn {
    right: 20px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWcluWxpF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0MwQTg3RTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+Cjxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjAuNSw0NC41IDE0LjUsMjIuNSAwLjUsMC41ICIvPgo8L3N2Zz4K");
  }
}
</style>
