import{r as d,h as N,u as B,c as s,j as u,F as a,a as t,t as _,k as M,d as i,l as V,o as l,m as $,n as q}from"./entry.b59cf824.js";const A={class:"_suuji"},F={key:0},H=t("thead",null,[t("tr",null,[t("th",null,"問題"),t("th",null,"答え"),t("th",null,"結果")])],-1),P=["onClick"],z=["onClick"],D={class:"result"},E=t("h2",null," 注意すべきところ ",-1),J=t("ul",null,[t("li",null,"「300」は「さんびゃく」"),t("li",null,"「600」は「ろっぴゃく」"),t("li",null,"「800」は「はっぴゃく」"),t("li",null,"「1000」は「せん」"),t("li",null,"「3000」は「さんぜん」"),t("li",null,"「8000」は「はっせん」")],-1),L=t("hr",null,null,-1),Q={class:"actions"},T={class:"action-head"},U={key:1},G={class:"answers"},I=t("div",{class:"answer-head"}," 正しい答えを選んでください ",-1),K=["onClick"],O=t("hr",null,null,-1),R={class:"actions"},W=["disabled"],X=6,tt={__name:"suuji",setup(Y){const h=d(null),v=d(1),b=d(1),k=d(null),g=d([]),r=d(null),p=d([]),y=N(()=>Math.floor(p.value.filter(o=>o.question===o.answer).length/p.value.length*100));function w(o){b.value=0,v.value=o,p.value=[],r.value=null,h.value="playing",C()}function x(o){r.value=o}function C(){if(r.value&&p.value.push({question:k.value,answer:r.value}),b.value>=X+(v.value-1)*2)h.value="end";else{b.value++;const o=j();k.value=o.toString();const n=[];n.push(o.toString());for(let e=0;e<3;e++){const c=Math.floor(o/10*(Math.random()-.5));n.push(o+c)}n.sort(()=>Math.random()-.5),g.value=n,r.value=null,m(k.value,v.value)}}function S(){m(k.value,v.value)}function j(){return Math.floor(Math.random()*1e3*Math.pow(10,v.value))}function m(o,n){const e=new SpeechSynthesisUtterance(o),c=n===1?.7:n===2?Math.random()*.25+.8:n===3?Math.random()*.5+1:.1,f=Math.random()*1.5;e.lang="ja-JP",e.rate=c,e.pitch=f,e.volume=1,speechSynthesis.speak(e)}return B({title:"数字 - 聞き取りゲーム",meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{name:"description",content:"数字に関する聞き取りゲームをやりましょう"}]}),(o,n)=>(l(),s("div",A,[u(h)!=="playing"?(l(),s("div",F,[u(h)==="end"?(l(),s(a,{key:0},[t("h2",null," 数字 レベル"+_(u(v))+"の 練習結果 ",1),t("table",null,[H,t("tbody",null,[(l(!0),s(a,null,M(u(p),(e,c)=>(l(),s("tr",{key:`question_history_${c}`},[t("td",null,[t("a",{href:"#",onClick:$(f=>m(e.question,1),["prevent"])},_(e.question),9,P)]),t("td",null,[t("a",{href:"#",onClick:$(f=>m(e.answer,1),["prevent"])},_(e.answer),9,z)]),t("td",null,_(e.question===e.answer?"⭕️":"❌"),1)]))),128))])]),t("div",D,[i(" 正解率 "+_(u(y))+" % ",1),u(y)>98?(l(),s(a,{key:0},[i(" 素晴らしい！👍 ")],64)):u(y)>80?(l(),s(a,{key:1},[i(" 上手になったね！ ")],64)):u(y)>70?(l(),s(a,{key:2},[i(" よくできたね！ ")],64)):u(y)>60?(l(),s(a,{key:3},[i(" たくさん聞けますね！ ")],64)):(l(),s(a,{key:4},[i(" もっと頑張ってください。 ")],64))])],64)):(l(),s(a,{key:1},[E,J],64)),L,t("div",Q,[t("div",T,[u(h)===null?(l(),s(a,{key:0},[i(" 始めましょう！ ")],64)):(l(),s(a,{key:1},[i(" もう一度しましょう！ ")],64))]),t("button",{type:"button",onClick:n[0]||(n[0]=e=>w(1))}," レベル一 "),t("button",{type:"button",onClick:n[1]||(n[1]=e=>w(2))}," レベル二 "),t("button",{type:"button",onClick:n[2]||(n[2]=e=>w(3))}," レベル三 ")])])):u(h)==="playing"?(l(),s("div",U,[t("div",G,[I,(l(!0),s(a,null,M(u(g),(e,c)=>(l(),s("button",{key:`ans_${c}`,type:"button",class:q(["ans",{active:u(r)===e}]),onClick:f=>x(e)},_(e),11,K))),128))]),O,t("div",R,[t("button",{type:"button",class:"outline",onClick:n[3]||(n[3]=e=>S())}," もう一度聞く "),t("button",{type:"button",disabled:!u(r),onClick:n[4]||(n[4]=e=>C())}," 次へ ",8,W)])])):V("",!0)]))}};export{tt as default};