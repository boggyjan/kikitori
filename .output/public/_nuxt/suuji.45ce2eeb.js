import{_ as A,a as D}from"./NoJpVoiceFound.35dcbf5e.js";import{g as J,r as h,i as L,k as z,w as E,l as H,o,a as t,b as N,m as a,c as s,F as u,t as y,n as T,q as j,d,s as Q,x as U}from"./entry.11ebbf07.js";import{u as G}from"./index.66c1c13c.js";const I={class:"main _test _suuji"},K={key:0},O=t("thead",null,[t("tr",null,[t("th",null,"問題"),t("th",null,"答え"),t("th",null,"結果")])],-1),R=["onClick"],W=["onClick"],X={class:"result"},Y=t("h2",null," 注意すべきところ ",-1),Z=t("ul",{class:"notice-list"},[t("li",null,"「300」は「さんびゃく」"),t("li",null,"「600」は「ろっぴゃく」"),t("li",null,"「800」は「はっぴゃく」"),t("li",null,"「1000」は「せん」"),t("li",null,"「3000」は「さんぜん」"),t("li",null,"「8000」は「はっせん」")],-1),tt=t("hr",null,null,-1),et={class:"actions"},nt={key:1},ot={class:"answers"},st=t("h3",{class:"answer-head"}," 正しい答えを選んでください ",-1),lt=["onClick"],at=t("hr",null,null,-1),ut={class:"actions"},it=["disabled"],M="数字 - 聞き取りゲーム",S="数字に関する聞き取りゲームをやりましょう",ct=6,pt={__name:"suuji",setup(rt){const F=J("pTitle");F.value="数字",G({title:M,description:S,ogTitle:M,ogDescription:S,twitterTitle:M,twitterDescription:S});const p=h(null),v=h(1),w=h(1),k=h(null),x=h([]),_=h(null),m=h([]),f=L(()=>Math.floor(m.value.filter(l=>l.question===l.answer).length/m.value.length*100));function b(l){w.value=0,v.value=l,m.value=[],_.value=null,p.value="playing",$()}function B(l){_.value=l}function $(){if(_.value&&m.value.push({question:k.value,answer:_.value}),w.value>=ct+(v.value-1)*2)p.value="end";else{w.value++;const l=q();k.value=l.toString();const e=[];e.push(l.toString());for(let r=0;r<3;r++){const i=Math.floor(l/10*(Math.random()-.5));e.push(l+i)}e.sort(()=>Math.random()-.5),x.value=e,_.value=null,g(k.value,v.value)}}function P(){g(k.value,v.value)}function q(){return Math.floor(Math.random()*1e3*Math.pow(10,v.value))}function g(l,e){const r=speechSynthesis.getVoices().filter(c=>c.lang==="ja_JP"||c.lang==="ja-JP"||c.lang==="ja");if(!r.length){alert("Japanese voice data not found.");const c=J("noJpVoiceFound");c.value=!0,window.scrollTo(0,0)}const i=new SpeechSynthesisUtterance(l),C=e===1?.7:e===2?Math.random()*.25+.8:e===3?Math.random()*.5+1:.1,n=Math.random()*1+.5;i.lang="ja-JP",i.rate=C,i.pitch=n,i.voice=r[Math.floor(Math.random()*r.length)],speechSynthesis.cancel(),speechSynthesis.speak(i)}return(l,e)=>{const r=A,i=D,C=H;return o(),z(C,{name:"default"},{default:E(()=>[t("div",I,[N(r),N(i),a(p)!=="playing"?(o(),s("div",K,[a(p)==="end"?(o(),s(u,{key:0},[t("h2",null," 数字 レベル"+y(a(v))+"の 練習結果 ",1),t("table",null,[O,t("tbody",null,[(o(!0),s(u,null,T(a(m),(n,c)=>(o(),s("tr",{key:`question_history_${c}`},[t("td",null,[t("a",{href:"#",onClick:j(V=>g(n.question,1),["prevent"])},y(n.question),9,R)]),t("td",null,[t("a",{href:"#",onClick:j(V=>g(n.answer,1),["prevent"])},y(n.answer),9,W)]),t("td",null,y(n.question===n.answer?"⭕️":"❌"),1)]))),128))])]),t("div",X,[d(" 正解率 "+y(a(f))+" % ",1),a(f)>98?(o(),s(u,{key:0},[d(" 素晴らしい！👍 ")],64)):a(f)>80?(o(),s(u,{key:1},[d(" 上手になったね！ ")],64)):a(f)>70?(o(),s(u,{key:2},[d(" よくできたね！ ")],64)):a(f)>60?(o(),s(u,{key:3},[d(" だんだんできたね！ ")],64)):(o(),s(u,{key:4},[d(" もっと頑張ってね。 ")],64))])],64)):(o(),s(u,{key:1},[Y,Z],64)),tt,t("div",et,[t("h2",null,[a(p)===null?(o(),s(u,{key:0},[d(" 始めましょう！ ")],64)):(o(),s(u,{key:1},[d(" もう一度しましょう！ ")],64))]),t("button",{type:"button",onClick:e[0]||(e[0]=n=>b(1))}," レベル一 "),t("button",{type:"button",onClick:e[1]||(e[1]=n=>b(2))}," レベル二 "),t("button",{type:"button",onClick:e[2]||(e[2]=n=>b(3))}," レベル三 ")])])):a(p)==="playing"?(o(),s("div",nt,[t("div",ot,[st,(o(!0),s(u,null,T(a(x),(n,c)=>(o(),s("button",{key:`ans_${c}`,type:"button",class:Q(["tertiary ans",{outline:a(_)!==n}]),onClick:V=>B(n)},y(n),11,lt))),128))]),at,t("div",ut,[t("button",{type:"button",class:"secondary outline",onClick:e[3]||(e[3]=n=>P())}," もう一度聞く "),t("button",{type:"button",disabled:!a(_),onClick:e[4]||(e[4]=n=>$())}," 次へ ",8,it)])])):U("",!0)])]),_:1})}}};export{pt as default};