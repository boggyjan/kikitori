import{x as k,r as h,i as v,c as _,o as i,b as o,w as l,d as r,a as c,F as S,k as N,t as w,j as x,y as b,z as f,A as p}from"./entry.4e15955c.js";import{_ as J}from"./nuxt-link.fa443e75.js";const O=k({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(m,{slots:t,attrs:n}){const a=h(!1);return v(()=>{a.value=!0}),e=>{var y;if(a.value)return(y=t.default)==null?void 0:y.call(t);const s=t.fallback||t.placeholder;if(s)return s();const d=e.fallback||e.placeholder||"",g=e.fallbackTag||e.placeholderTag||"span";return _(g,n,d)}}});const j={class:"site-header"},D={class:"main-menu"},$="saved_tests",G={__name:"Header",setup(m){const t=h([]);function n(){const a=localStorage.getItem($);t.value=a?JSON.parse(a):[]}return v(()=>{n(),window.addEventListener("saved_test_updated",n)}),(a,e)=>{const s=J;return i(),_("div",j,[o(s,{to:"/"},{default:l(()=>[r(" 聞き取りゲーム ")]),_:1}),c("nav",D,[c("ul",null,[c("li",null,[o(s,{to:"/jikan"},{default:l(()=>[r(" 時刻 ")]),_:1})]),c("li",null,[o(s,{to:"/suuji"},{default:l(()=>[r(" 数字 ")]),_:1})]),(i(!0),_(S,null,N(x(t),(d,g)=>(i(),_("li",{key:`nav_test_${g}`},[o(s,{to:"/"+d.title},{default:l(()=>[r(w(d.title),1)]),_:2},1032,["to"])]))),128)),c("li",null,[o(s,{to:"/add"},{default:l(()=>[r(" + ")]),_:1})])])])])}}},L=G;const T={class:"layout"},q={class:"main"},u="saved_tests",V={__name:"default",setup(m){{const t=JSON.parse(localStorage.getItem(u)||"[]");if(!t.length){const e=[{title:"家族",questions:["祖父","そう祖父","祖母","そう祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]},{title:"時間",questions:["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]}];localStorage.setItem(u,JSON.stringify(e))}const n=t.find(e=>e.title==="時刻"&&JSON.stringify(e.questions)==='["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]');t.length&&n&&(n.title="時間",localStorage.setItem(u,JSON.stringify(t)));const a=t.find(e=>e.title==="家族"&&JSON.stringify(e.questions)==='["祖父","曽祖父","祖母","曽祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]');t.length&&a&&(a.questions=["祖父","そう祖父","祖母","そう祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"],localStorage.setItem(u,JSON.stringify(t)))}return(t,n)=>{const a=O,e=L;return i(),_(S,null,[o(a,null,{default:l(()=>[(i(),f(p("script"),{async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209950884395919",crossorigin:"anonymous"})),(i(),f(p("script"),{async:"",src:"https://www.googletagmanager.com/gtag/js?id=G-H1S1GGV8WJ"})),(i(),f(p("script"),null,{default:l(()=>[r(" window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-H1S1GGV8WJ'); ")]),_:1}))]),_:1}),c("div",T,[o(e),c("div",q,[b(t.$slots,"default")])])],64)}}};export{V as default};