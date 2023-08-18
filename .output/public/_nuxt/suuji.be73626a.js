import{_ as B,a as D}from"./NoJpVoiceFound.841f9d0b.js";import{r as p,h as H,i as V,u as z,c as o,b as j,k as a,F as i,a as t,t as v,l as J,d,q as E,o as s,s as F,v as L}from"./entry.151631f4.js";const Q={class:"main _test _suuji"},U={key:0},G=t("thead",null,[t("tr",null,[t("th",null,"問題"),t("th",null,"答え"),t("th",null,"結果")])],-1),I=["onClick"],K=["onClick"],O={class:"result"},R=t("h2",null," 注意すべきところ ",-1),W=t("ul",{class:"notice-list"},[t("li",null,"「300」は「さんびゃく」"),t("li",null,"「600」は「ろっぴゃく」"),t("li",null,"「800」は「はっぴゃく」"),t("li",null,"「1000」は「せん」"),t("li",null,"「3000」は「さんぜん」"),t("li",null,"「8000」は「はっせん」")],-1),X=t("hr",null,null,-1),Y={class:"actions"},Z={key:1},tt={class:"answers"},et=t("h3",{class:"answer-head"}," 正しい答えを選んでください ",-1),nt=["onClick"],ot=t("hr",null,null,-1),st={class:"actions"},lt=["disabled"],at=6,M="数字 - 聞き取りゲーム",S="数字に関する聞き取りゲームをやりましょう",it="https://kikitori.boggy.tw",N="https://kikitori.boggy.tw/images/share.jpg",dt={__name:"suuji",setup(ut){const _=p(null),m=p(1),b=p(1),f=p(null),$=p([]),h=p(null),y=p([]),g=H(()=>Math.floor(y.value.filter(l=>l.question===l.answer).length/y.value.length*100));function C(l){b.value=0,m.value=l,y.value=[],h.value=null,_.value="playing",x()}function T(l){h.value=l}function x(){if(h.value&&y.value.push({question:f.value,answer:h.value}),b.value>=at+(m.value-1)*2)_.value="end";else{b.value++;const l=q();f.value=l.toString();const e=[];e.push(l.toString());for(let c=0;c<3;c++){const u=Math.floor(l/10*(Math.random()-.5));e.push(l+u)}e.sort(()=>Math.random()-.5),$.value=e,h.value=null,w(f.value,m.value)}}function P(){w(f.value,m.value)}function q(){return Math.floor(Math.random()*1e3*Math.pow(10,m.value))}function w(l,e){const c=speechSynthesis.getVoices().filter(r=>r.lang==="ja_JP"||r.lang==="ja-JP"||r.lang==="ja");if(!c.length){alert("Japanese voice data not found.");const r=V("noJpVoiceFound");r.value=!0,window.scrollTo(0,0)}const u=new SpeechSynthesisUtterance(l),n=e===1?.7:e===2?Math.random()*.25+.8:e===3?Math.random()*.5+1:.1,k=Math.random()*1+.5;u.lang="ja-JP",u.rate=n,u.pitch=k,u.voice=c[Math.floor(Math.random()*c.length)],speechSynthesis.cancel(),speechSynthesis.speak(u)}const A=V("pTitle");return A.value="数字",z({title:M,meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{name:"description",content:S},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:M},{name:"twitter:description",desc:S},{name:"twitter:image",content:N},{name:"og:type",content:"website"},{name:"og:title",content:M},{name:"og:description",content:S},{name:"og:image",content:N},{name:"og:url",content:it},{name:"og:site_name",content:"iDrip"}]}),(l,e)=>{const c=B,u=D;return s(),o("div",Q,[j(c),j(u),a(_)!=="playing"?(s(),o("div",U,[a(_)==="end"?(s(),o(i,{key:0},[t("h2",null," 数字 レベル"+v(a(m))+"の 練習結果 ",1),t("table",null,[G,t("tbody",null,[(s(!0),o(i,null,J(a(y),(n,k)=>(s(),o("tr",{key:`question_history_${k}`},[t("td",null,[t("a",{href:"#",onClick:F(r=>w(n.question,1),["prevent"])},v(n.question),9,I)]),t("td",null,[t("a",{href:"#",onClick:F(r=>w(n.answer,1),["prevent"])},v(n.answer),9,K)]),t("td",null,v(n.question===n.answer?"⭕️":"❌"),1)]))),128))])]),t("div",O,[d(" 正解率 "+v(a(g))+" % ",1),a(g)>98?(s(),o(i,{key:0},[d(" 素晴らしい！👍 ")],64)):a(g)>80?(s(),o(i,{key:1},[d(" 上手になったね！ ")],64)):a(g)>70?(s(),o(i,{key:2},[d(" よくできたね！ ")],64)):a(g)>60?(s(),o(i,{key:3},[d(" だんだんできたね！ ")],64)):(s(),o(i,{key:4},[d(" もっと頑張ってね。 ")],64))])],64)):(s(),o(i,{key:1},[R,W],64)),X,t("div",Y,[t("h2",null,[a(_)===null?(s(),o(i,{key:0},[d(" 始めましょう！ ")],64)):(s(),o(i,{key:1},[d(" もう一度しましょう！ ")],64))]),t("button",{type:"button",onClick:e[0]||(e[0]=n=>C(1))}," レベル一 "),t("button",{type:"button",onClick:e[1]||(e[1]=n=>C(2))}," レベル二 "),t("button",{type:"button",onClick:e[2]||(e[2]=n=>C(3))}," レベル三 ")])])):a(_)==="playing"?(s(),o("div",Z,[t("div",tt,[et,(s(!0),o(i,null,J(a($),(n,k)=>(s(),o("button",{key:`ans_${k}`,type:"button",class:L(["tertiary ans",{outline:a(h)!==n}]),onClick:r=>T(n)},v(n),11,nt))),128))]),ot,t("div",st,[t("button",{type:"button",class:"secondary outline",onClick:e[3]||(e[3]=n=>P())}," もう一度聞く "),t("button",{type:"button",disabled:!a(h),onClick:e[4]||(e[4]=n=>x())}," 次へ ",8,lt)])])):E("",!0)])}}};export{dt as default};
