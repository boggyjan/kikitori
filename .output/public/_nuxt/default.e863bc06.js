import{C as v,r as S,j as x,c as o,i as b,o as a,a as l,b as r,w as i,d as u,k as f,t as N,q as m,m as g,_ as w,B as J,F as T,n as h}from"./entry.bc1587d5.js";import{_ as C}from"./nuxt-link.757909d1.js";const O=v({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(d,{slots:e,attrs:s}){const n=S(!1);return x(()=>{n.value=!0}),t=>{var p;if(n.value)return(p=e.default)==null?void 0:p.call(e);const c=e.fallback||e.placeholder;if(c)return c();const y=t.fallback||t.placeholder||"",k=t.fallbackTag||t.placeholderTag||"span";return o(k,s,y)}}});const $={class:"site-header"},q={class:"header-bar"},B=l("em",null,"ゲーム",-1),D={key:0,class:"sub-title"},G={__name:"Header",setup(d){const e=b("pTitle");return(s,n)=>{const t=C;return a(),o("div",$,[l("div",q,[l("div",null,[r(t,{to:"/",class:"home-link"},{default:i(()=>[u(" 聞き取り"),B]),_:1}),f(e)?(a(),o("span",D,N(f(e)),1)):m("",!0)]),f(e)?(a(),g(t,{key:0,to:"/",class:"back-btn"},{default:i(()=>[u(" 戻る ")]),_:1})):m("",!0)])])}}},V=G;const H={},F={class:"site-footer"},I=l("hr",null,null,-1);function L(d,e){return a(),o("div",F,[I,u(" Copyright © Boggy Jang. All rights reserved. ")])}const W=w(H,[["render",L]]);const j={class:"layout"},_="saved_tests",M={__name:"default",setup(d){{const e=JSON.parse(localStorage.getItem(_)||"[]");if(!e.length){const t=[{title:"家族",questions:["祖父","そう祖父","祖母","そう祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]},{title:"時間",questions:["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]}];localStorage.setItem(_,JSON.stringify(t))}const s=e.find(t=>t.title==="時刻"&&JSON.stringify(t.questions)==='["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]');e.length&&s&&(s.title="時間",localStorage.setItem(_,JSON.stringify(e)));const n=e.find(t=>t.title==="家族"&&JSON.stringify(t.questions)==='["祖父","曽祖父","祖母","曽祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]');e.length&&n&&(n.questions=["祖父","そう祖父","祖母","そう祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"],localStorage.setItem(_,JSON.stringify(e)))}return(e,s)=>{const n=O,t=V,c=W;return a(),o(T,null,[r(n,null,{default:i(()=>[(a(),g(h("script"),{async:"",src:"https://www.googletagmanager.com/gtag/js?id=G-H1S1GGV8WJ"})),(a(),g(h("script"),null,{default:i(()=>[u(" window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-H1S1GGV8WJ'); ")]),_:1}))]),_:1}),l("div",j,[r(t),J(e.$slots,"default"),r(c)])],64)}}};export{M as default};
