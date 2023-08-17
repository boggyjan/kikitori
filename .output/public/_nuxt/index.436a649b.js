import{_ as D,o as a,c as n,a as r,A as L,v as w,B,s as m,F as k,l as P,t as T,q as p,r as X,j as E,i as S,u as H,b as _,w as c,k as N,m as f,n as b,d as g}from"./entry.bc1587d5.js";import{_ as C}from"./nuxt-link.757909d1.js";const V={props:{dots:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},items:{type:Number,default:1},margin:{type:Number,default:0},autoHeight:{type:Boolean,default:!1},autoWidth:{type:Boolean,default:!1},responsive:{type:Object,default:null},autoplay:{type:Number,default:0}},data(){return{currentIndex:0,dragging:!1,pointerStartX:0,pointerX:0,pointerStartY:0,pointerY:0,trackHeight:"auto",autoWidthTrackPos:0,autoWidthLeftBtnVisible:!1,autoWidthRightBtnVisible:!0,windowWidth:0,rwdData:{},observer:null,slotChanged:1,autoplayInterval:null}},computed:{_dots(){return this.getCurrentProp.dots},_nav(){return this.getCurrentProp.nav},_items(){return this.getCurrentProp.items},_margin(){return this.getCurrentProp.margin},_autoHeight(){return this.getCurrentProp.autoHeight},currentPage(){return Math.ceil(this.currentIndex/this._items)},tags(){return this.slotChanged?this.$slots.default()[0].children||[]:[]},trackWidth(){return this.autoWidth?"auto":`calc(${`calc(${100/this._items}% - ${(this._items-1)*this._margin/this._items}px)`} * ${this.itemsTotal} + ${this._margin*(this.itemsTotal-1)}px)`},itemsTotal(){return this.tags.length},pagesTotal(){return Math.ceil(this.itemsTotal/this._items)},currentTags(){return this.tags.slice(this.currentIndex,this.currentIndex+this._items)},trackPos(){if(this.autoWidth)return this.updateAutoWidthTrackPos(),this.autoWidthTrackPos+"px";const t=`calc( calc(100% - ${this._margin}px * ${this.itemsTotal-1}) / ${this.itemsTotal} * ${-this.currentIndex} - ${this.currentIndex*this._margin}px )`;return this.dragging?`calc( ${t} + ${this.pointerX-this.pointerStartX}px )`:t},navLeftBtnVisible(){return this.autoWidth?this.autoWidthLeftBtnVisible:this.currentPage>0},navRightBtnVisible(){return this.autoWidth?this.autoWidthRightBtnVisible:this.currentPage<this.pagesTotal-1},responsiveGutterNum(){return Object.keys(this.responsive).map(t=>parseInt(t))},getCurrentProp(){return{dots:typeof this.rwdData.dots<"u"?this.rwdData.dots:this.dots,nav:typeof this.rwdData.nav<"u"?this.rwdData.nav:this.nav,items:typeof this.rwdData.items<"u"?this.rwdData.items:this.items,margin:typeof this.rwdData.margin<"u"?this.rwdData.margin:this.margin,autoHeight:typeof this.rwdData.autoHeight<"u"?this.rwdData.autoHeight:this.autoHeight}}},watch:{tags(){this.currentIndex=0},windowWidth(t){if(this.responsive){const e=this.responsiveGutterNum.filter(l=>l<=t).length-1,s=this.responsiveGutterNum[e];this.rwdData=this.responsive[s]||{},this.slideToPage(this.currentPage)}},currentIndex(){if(this._autoHeight){let t=!1;this.currentTags.forEach(e=>{e.elm.querySelectorAll("img").forEach(s=>{s.complete||(t=!0,s.addEventListener("load",()=>{this.refreshHeight()},{once:!0}))})}),t||this.refreshHeight()}this.$emit("changed",{item:{index:this.currentIndex}})}},mounted(){this.autoplay&&(this.autoplayInterval=setInterval(()=>{this.autoplayNextPage()},this.autoplay)),(this.responsive||this.autoWidth||this.autoHeight)&&(window.addEventListener("resize",this.onWindowResize),this.onWindowResize()),this.observer=new MutationObserver(()=>{this.slotChanged+=1}),this.observer.observe(this.$refs.track,{childList:!0})},beforeDestroy(){clearInterval(this.autoplayInterval),(this.responsive||this.autoWidth||this.autoHeight)&&window.removeEventListener("resize",this.onWindowResize),this.observer.disconnect()},methods:{startDrag(t){const e=t.touches?t.touches[0].screenX:t.screenX,s=t.touches?t.touches[0].screenY:t.screenY;this.pointerStartX=this.pointerX=e,this.pointerStartY=this.pointerY=s,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.endDrag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("touchforcechange",this.drag,{passive:!1}),document.addEventListener("touchend",this.endDrag)},drag(t){const e=t.touches?t.touches[0].screenX:t.screenX,s=t.touches?t.touches[0].screenY:t.screenY;Math.abs(this.pointerStartY-s)<=Math.abs(this.pointerStartX-e)||this.dragging?(t.stopPropagation(),t.preventDefault(),this.dragging=!0,this.pointerX=e,this.pointerY=s,this.autoWidth&&this.updateAutoWidthNavVisible()):(document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.endDrag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("touchforcechange",this.drag),document.removeEventListener("touchend",this.endDrag))},endDrag(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.endDrag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("touchforcechange",this.drag),document.removeEventListener("touchend",this.endDrag),this.pointerStartX-this.pointerX>50?this.nextPage():this.pointerStartX-this.pointerX<-50&&this.prevPage(),this.dragging=!1},slideToPage(t){const e=t*this._items;let s=e+this._items<=this.itemsTotal?e:this.itemsTotal-this._items;s=s<0?0:s,this.currentIndex=s},updateAutoWidthTrackPos(){const t=this.stageWidth()-this.autoWidthTrackWidth();this.autoWidthTrackPos=this.autoWidthTrackPos+(this.pointerX-this.pointerStartX),this.pointerStartX=this.pointerX,this.dragging||(this.autoWidthTrackPos>0&&(this.autoWidthTrackPos=0),this.autoWidthTrackPos<t&&(this.autoWidthTrackPos=t))},updateAutoWidthNavVisible(){this.autoWidthTrackPos<0?this.autoWidthLeftBtnVisible=!0:this.autoWidthLeftBtnVisible=!1,this.autoWidthTrackPos>this.stageWidth()-this.autoWidthTrackWidth()?this.autoWidthRightBtnVisible=!0:this.autoWidthRightBtnVisible=!1},slideToPos(t){const e=this.stageWidth()-this.autoWidthTrackWidth();this.autoWidthTrackPos+=t,this.autoWidthTrackPos>0?this.autoWidthTrackPos=0:this.autoWidthTrackPos<e&&(this.autoWidthTrackPos=e),this.updateAutoWidthNavVisible()},prevPage(){if(this.autoWidth){this.slideToPos(300);return}this.currentPage>0&&this.slideToPage(this.currentPage-1)},nextPage(){if(this.autoWidth){this.slideToPos(-300);return}this.currentPage<this.pagesTotal-1&&this.slideToPage(this.currentPage+1)},autoplayNextPage(){this.autoWidth||(this.currentPage<this.pagesTotal-1?this.slideToPage(this.currentPage+1):this.slideToPage(0))},refreshHeight(){const t=Math.max(...this.currentTags.map(e=>e.elm.offsetHeight));this.trackHeight=t+"px"},stageWidth(){return this.$refs.stage&&this.windowWidth?this.$refs.stage.offsetWidth:0},autoWidthTrackWidth(){return this.$refs.track&&this.windowWidth?this.$refs.track.scrollWidth:0},onWindowResize(){this.windowWidth=window.innerWidth,setTimeout(()=>{this._autoHeight&&this.refreshHeight()},1)}}},I={class:"carousel"},Y={key:0,class:"carousel__pagination"},$=["onClick"],R={key:1,class:"carousel__nav"};function j(t,e,s,l,d,i){return a(),n("div",I,[r("div",{ref:"stage",class:"carousel__stage",onMousedown:e[0]||(e[0]=m(o=>i.startDrag(o),["prevent"])),onTouchstart:e[1]||(e[1]=o=>i.startDrag(o))},[r("div",{ref:"track",style:L(`
          width: ${i.trackWidth};
          height: ${d.trackHeight};
          grid-gap: ${i._margin}px;
          grid-template-columns: repeat(${i.itemsTotal}, 1fr);
          transform: translateX(${i.trackPos});
        `),class:w([{dragging:d.dragging},"carousel__track"])},[B(t.$slots,"default")],6)],544),i._dots&&!s.autoWidth?(a(),n("div",Y,[(a(!0),n(k,null,P(i.pagesTotal,(o,h)=>(a(),n("button",{key:`carousel__paginationBtn--${h}`,class:w([{active:i.currentPage===h},"carousel__paginationBtn"]),type:"button",onClick:m(u=>i.slideToPage(h),["prevent"])},T(o),11,$))),128))])):p("",!0),i._nav?(a(),n("div",R,[i.navLeftBtnVisible?(a(),n("a",{key:0,href:"#",class:"carousel__navLeftBtn",onClick:e[2]||(e[2]=m(o=>i.prevPage(),["prevent"]))}," Prev ")):p("",!0),i.navRightBtnVisible?(a(),n("a",{key:1,href:"#",class:"carousel__navRightBtn",onClick:e[3]||(e[3]=m(o=>i.nextPage(),["prevent"]))}," Next ")):p("",!0)])):p("",!0)])}const M=D(V,[["render",j]]);const z={class:"_index"},A={class:"banners"},O=["src"],G={class:"main"},q=r("h2",null," 練習テーマ ",-1),F={class:"main-menu"},J={class:"google-ad"},K=r("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-8209950884395919","data-ad-slot":"4250291761","data-ad-format":"auto","data-full-width-responsive":"true"},null,-1),Q=r("hr",null,null,-1),U=r("h2",null," 「聞き取りゲーム」について ",-1),Z=r("p",null," 聞き取りゲームは「Web Speech API」という技術を活用したWebアプリケーションです。上の「時間」や「数字」などが練習のテーマです。まずは一つリンクをクリックして、練習しましょう。他のテーマを練習したい場合、「+ テーマ」をクリックして、自分のテーマを作ってください。 ",-1),tt="saved_tests",v="聞き取りゲーム",W="「聞き取りゲーム」について",et="https://kikitori.boggy.tw",y="https://kikitori.boggy.tw/images/share.jpg",at={__name:"index",setup(t){const e=X([]);function s(){const d=localStorage.getItem(tt);e.value=d?JSON.parse(d):[]}E(()=>{s(),window.addEventListener("saved_test_updated",s)});const l=S("pTitle");return l.value="",H({title:v,meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{name:"description",content:W},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:v},{name:"twitter:description",desc:W},{name:"twitter:image",content:y},{name:"og:type",content:"website"},{name:"og:title",content:v},{name:"og:description",content:W},{name:"og:image",content:y},{name:"og:url",content:et},{name:"og:site_name",content:"iDrip"}]}),(d,i)=>{const o=M,h=C;return a(),n("div",z,[r("div",A,[_(o,{items:1,dots:!0,nav:!1,autoplay:4e3,responsive:{991:{items:2}}},{default:c(()=>[(a(),n(k,null,P(4,u=>r("img",{key:`index_banner_${u}`,alt:"Kikitori",class:"banner",src:`/images/index_banner_${u}.jpg`},null,8,O)),64))]),_:1})]),r("div",G,[q,r("nav",F,[_(h,{to:"/jikoku",class:"btn"},{default:c(()=>[g(" 時刻 ")]),_:1}),_(h,{to:"/suuji",class:"btn"},{default:c(()=>[g(" 数字 ")]),_:1}),(a(!0),n(k,null,P(N(e),(u,x)=>(a(),f(h,{key:`nav_test_${x}`,class:"btn",to:"/"+u.title},{default:c(()=>[g(T(u.title),1)]),_:2},1032,["to"]))),128)),_(h,{to:"/add",class:"btn add-btn"},{default:c(()=>[g(" + テーマ ")]),_:1})]),r("div",J,[(a(),f(b("script"),{async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209950884395919",crossorigin:"anonymous"})),K,(a(),f(b("script"),null,{default:c(()=>[g(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))]),Q,U,Z])])}}};export{at as default};
