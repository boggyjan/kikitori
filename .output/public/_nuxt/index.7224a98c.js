import{_ as y,o as a,c as r,a as n,y as x,q as k,z as L,n as g,F as W,l as P,t as T,m,r as D,j as B,i as X,u as E,b as p,w as l,k as S,d as _,A as H}from"./entry.8b060c9b.js";import{_ as N}from"./nuxt-link.d4682547.js";const V={props:{dots:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},items:{type:Number,default:1},margin:{type:Number,default:0},autoHeight:{type:Boolean,default:!1},autoWidth:{type:Boolean,default:!1},responsive:{type:Object,default:null},autoplay:{type:Number,default:0}},data(){return{currentIndex:0,dragging:!1,pointerStartX:0,pointerX:0,pointerStartY:0,pointerY:0,trackHeight:"auto",autoWidthTrackPos:0,autoWidthLeftBtnVisible:!1,autoWidthRightBtnVisible:!0,windowWidth:0,rwdData:{},observer:null,slotChanged:1,autoplayInterval:null}},computed:{_dots(){return this.getCurrentProp.dots},_nav(){return this.getCurrentProp.nav},_items(){return this.getCurrentProp.items},_margin(){return this.getCurrentProp.margin},_autoHeight(){return this.getCurrentProp.autoHeight},currentPage(){return Math.ceil(this.currentIndex/this._items)},tags(){return this.slotChanged?this.$slots.default()[0].children||[]:[]},trackWidth(){return this.autoWidth?"auto":`calc(${`calc(${100/this._items}% - ${(this._items-1)*this._margin/this._items}px)`} * ${this.itemsTotal} + ${this._margin*(this.itemsTotal-1)}px)`},itemsTotal(){return this.tags.length},pagesTotal(){return Math.ceil(this.itemsTotal/this._items)},currentTags(){return this.tags.slice(this.currentIndex,this.currentIndex+this._items)},trackPos(){if(this.autoWidth)return this.updateAutoWidthTrackPos(),this.autoWidthTrackPos+"px";const t=`calc( calc(100% - ${this._margin}px * ${this.itemsTotal-1}) / ${this.itemsTotal} * ${-this.currentIndex} - ${this.currentIndex*this._margin}px )`;return this.dragging?`calc( ${t} + ${this.pointerX-this.pointerStartX}px )`:t},navLeftBtnVisible(){return this.autoWidth?this.autoWidthLeftBtnVisible:this.currentPage>0},navRightBtnVisible(){return this.autoWidth?this.autoWidthRightBtnVisible:this.currentPage<this.pagesTotal-1},responsiveGutterNum(){return Object.keys(this.responsive).map(t=>parseInt(t))},getCurrentProp(){return{dots:typeof this.rwdData.dots<"u"?this.rwdData.dots:this.dots,nav:typeof this.rwdData.nav<"u"?this.rwdData.nav:this.nav,items:typeof this.rwdData.items<"u"?this.rwdData.items:this.items,margin:typeof this.rwdData.margin<"u"?this.rwdData.margin:this.margin,autoHeight:typeof this.rwdData.autoHeight<"u"?this.rwdData.autoHeight:this.autoHeight}}},watch:{tags(){this.currentIndex=0},windowWidth(t){if(this.responsive){const e=this.responsiveGutterNum.filter(c=>c<=t).length-1,i=this.responsiveGutterNum[e];this.rwdData=this.responsive[i]||{},this.slideToPage(this.currentPage)}},currentIndex(){if(this._autoHeight){let t=!1;this.currentTags.forEach(e=>{e.elm.querySelectorAll("img").forEach(i=>{i.complete||(t=!0,i.addEventListener("load",()=>{this.refreshHeight()},{once:!0}))})}),t||this.refreshHeight()}this.$emit("changed",{item:{index:this.currentIndex}})}},mounted(){this.autoplay&&(this.autoplayInterval=setInterval(()=>{this.autoplayNextPage()},this.autoplay)),(this.responsive||this.autoWidth||this.autoHeight)&&(window.addEventListener("resize",this.onWindowResize),this.onWindowResize()),this.observer=new MutationObserver(()=>{this.slotChanged+=1}),this.observer.observe(this.$refs.track,{childList:!0})},beforeDestroy(){clearInterval(this.autoplayInterval),(this.responsive||this.autoWidth||this.autoHeight)&&window.removeEventListener("resize",this.onWindowResize),this.observer.disconnect()},methods:{startDrag(t){const e=t.touches?t.touches[0].screenX:t.screenX,i=t.touches?t.touches[0].screenY:t.screenY;this.pointerStartX=this.pointerX=e,this.pointerStartY=this.pointerY=i,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.endDrag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("touchforcechange",this.drag,{passive:!1}),document.addEventListener("touchend",this.endDrag)},drag(t){const e=t.touches?t.touches[0].screenX:t.screenX,i=t.touches?t.touches[0].screenY:t.screenY;Math.abs(this.pointerStartY-i)<=Math.abs(this.pointerStartX-e)||this.dragging?(t.stopPropagation(),t.preventDefault(),this.dragging=!0,this.pointerX=e,this.pointerY=i,this.autoWidth&&this.updateAutoWidthNavVisible()):(document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.endDrag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("touchforcechange",this.drag),document.removeEventListener("touchend",this.endDrag))},endDrag(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.endDrag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("touchforcechange",this.drag),document.removeEventListener("touchend",this.endDrag),this.pointerStartX-this.pointerX>50?this.nextPage():this.pointerStartX-this.pointerX<-50&&this.prevPage(),this.dragging=!1},slideToPage(t){const e=t*this._items;let i=e+this._items<=this.itemsTotal?e:this.itemsTotal-this._items;i=i<0?0:i,this.currentIndex=i},updateAutoWidthTrackPos(){const t=this.stageWidth()-this.autoWidthTrackWidth();this.autoWidthTrackPos=this.autoWidthTrackPos+(this.pointerX-this.pointerStartX),this.pointerStartX=this.pointerX,this.dragging||(this.autoWidthTrackPos>0&&(this.autoWidthTrackPos=0),this.autoWidthTrackPos<t&&(this.autoWidthTrackPos=t))},updateAutoWidthNavVisible(){this.autoWidthTrackPos<0?this.autoWidthLeftBtnVisible=!0:this.autoWidthLeftBtnVisible=!1,this.autoWidthTrackPos>this.stageWidth()-this.autoWidthTrackWidth()?this.autoWidthRightBtnVisible=!0:this.autoWidthRightBtnVisible=!1},slideToPos(t){const e=this.stageWidth()-this.autoWidthTrackWidth();this.autoWidthTrackPos+=t,this.autoWidthTrackPos>0?this.autoWidthTrackPos=0:this.autoWidthTrackPos<e&&(this.autoWidthTrackPos=e),this.updateAutoWidthNavVisible()},prevPage(){if(this.autoWidth){this.slideToPos(300);return}this.currentPage>0&&this.slideToPage(this.currentPage-1)},nextPage(){if(this.autoWidth){this.slideToPos(-300);return}this.currentPage<this.pagesTotal-1&&this.slideToPage(this.currentPage+1)},autoplayNextPage(){this.autoWidth||(this.currentPage<this.pagesTotal-1?this.slideToPage(this.currentPage+1):this.slideToPage(0))},refreshHeight(){const t=Math.max(...this.currentTags.map(e=>e.elm.offsetHeight));this.trackHeight=t+"px"},stageWidth(){return this.$refs.stage&&this.windowWidth?this.$refs.stage.offsetWidth:0},autoWidthTrackWidth(){return this.$refs.track&&this.windowWidth?this.$refs.track.scrollWidth:0},onWindowResize(){this.windowWidth=window.innerWidth,setTimeout(()=>{this._autoHeight&&this.refreshHeight()},1)}}},C={class:"carousel"},I={key:0,class:"carousel__pagination"},Y=["onClick"],$={key:1,class:"carousel__nav"};function R(t,e,i,c,u,s){return a(),r("div",C,[n("div",{ref:"stage",class:"carousel__stage",onMousedown:e[0]||(e[0]=g(o=>s.startDrag(o),["prevent"])),onTouchstart:e[1]||(e[1]=o=>s.startDrag(o))},[n("div",{ref:"track",style:x(`
          width: ${s.trackWidth};
          height: ${u.trackHeight};
          grid-gap: ${s._margin}px;
          grid-template-columns: repeat(${s.itemsTotal}, 1fr);
          transform: translateX(${s.trackPos});
        `),class:k([{dragging:u.dragging},"carousel__track"])},[L(t.$slots,"default")],6)],544),s._dots&&!i.autoWidth?(a(),r("div",I,[(a(!0),r(W,null,P(s.pagesTotal,(o,h)=>(a(),r("button",{key:`carousel__paginationBtn--${h}`,class:k([{active:s.currentPage===h},"carousel__paginationBtn"]),type:"button",onClick:g(d=>s.slideToPage(h),["prevent"])},T(o),11,Y))),128))])):m("",!0),s._nav?(a(),r("div",$,[s.navLeftBtnVisible?(a(),r("a",{key:0,href:"#",class:"carousel__navLeftBtn",onClick:e[2]||(e[2]=g(o=>s.prevPage(),["prevent"]))}," Prev ")):m("",!0),s.navRightBtnVisible?(a(),r("a",{key:1,href:"#",class:"carousel__navRightBtn",onClick:e[3]||(e[3]=g(o=>s.nextPage(),["prevent"]))}," Next ")):m("",!0)])):m("",!0)])}const z=y(V,[["render",R]]);const M={class:"_index"},A={class:"banners"},j=["src"],O={class:"main"},G=n("h2",null," 練習テーマ ",-1),q={class:"main-menu"},F=n("hr",null,null,-1),J=n("h2",null," 「聞き取りゲーム」について ",-1),K=n("p",null," 聞き取りゲームは「Web Speech API」という技術を活用したWebアプリケーションです。上の「時間」や「数字」などが練習のテーマです。まずは一つリンクをクリックして、練習しましょう。他のテーマを練習したい場合、「+ テーマ」をクリックして、自分のテーマを作ってください。 ",-1),Q="saved_tests",f="聞き取りゲーム",v="「聞き取りゲーム」について",U="https://kikitori.boggy.tw",w="https://kikitori.boggy.tw/images/share.jpg",et={__name:"index",setup(t){const e=D([]);function i(){const u=localStorage.getItem(Q);e.value=u?JSON.parse(u):[]}B(()=>{i(),window.addEventListener("saved_test_updated",i)});const c=X("pTitle");return c.value="",E({title:f,meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{name:"description",content:v},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:f},{name:"twitter:description",desc:v},{name:"twitter:image",content:w},{name:"og:type",content:"website"},{name:"og:title",content:f},{name:"og:description",content:v},{name:"og:image",content:w},{name:"og:url",content:U},{name:"og:site_name",content:"iDrip"}]}),(u,s)=>{const o=z,h=N;return a(),r("div",M,[n("div",A,[p(o,{items:1,dots:!0,nav:!1,autoplay:4e3,responsive:{991:{items:2}}},{default:l(()=>[(a(),r(W,null,P(4,d=>n("img",{key:`index_banner_${d}`,alt:"Kikitori",class:"banner",src:`/images/index_banner_${d}.jpg`},null,8,j)),64))]),_:1})]),n("div",O,[G,n("nav",q,[p(h,{to:"/jikoku",class:"btn"},{default:l(()=>[_(" 時刻 ")]),_:1}),p(h,{to:"/suuji",class:"btn"},{default:l(()=>[_(" 数字 ")]),_:1}),(a(!0),r(W,null,P(S(e),(d,b)=>(a(),H(h,{key:`nav_test_${b}`,class:"btn",to:"/"+d.title},{default:l(()=>[_(T(d.title),1)]),_:2},1032,["to"]))),128)),p(h,{to:"/add",class:"btn add-btn"},{default:l(()=>[_(" + テーマ ")]),_:1})]),F,J,K])])}}};export{et as default};