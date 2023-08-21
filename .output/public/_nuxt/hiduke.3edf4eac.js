import{_ as z,a as E}from"./NoJpVoiceFound.3af289a5.js";import{r as m,h as I,i as V,u as L,c as s,b as x,k as a,F as r,a as t,t as v,l as J,d as h,q as Q,A as U,o as l,s as N,v as G}from"./entry.0413a1a8.js";const K={class:"main _test _jikan"},O={key:0},R=t("thead",null,[t("tr",null,[t("th",null,"問題"),t("th",null,"答え"),t("th",null,"結果")])],-1),W=["onClick"],X=["onClick"],Y={class:"result"},Z=U('<h2> 注意すべきところ </h2><ul class="notice-list"><li>「1日」は「ついたち」</li><li>「2日」は「ふつか」</li><li>「3日」は「みっか」</li><li>「4日」は「よっか」</li><li>「5日」は「いつか」</li><li>「6日」は「むいか」</li><li>「7日」は「なのか」</li><li>「8日」は「ようか」</li><li>「9日」は「ここのか」</li><li>「10日」は「とおか」</li><li>「11日」は「じゅういちにち」</li><li>「12日」は「じゅうににち」</li><li>「13日」は「じゅうさんにち」</li><li>「14日」は「じゅうよんにち」</li><li>「15日」は「じゅうごにち」</li><li>「16日」は「じゅうろくにち」</li><li>「17日」は「じゅうしちにち／じゅうななにち」</li><li>「18日」は「じゅうはちにち」</li><li>「19日」は「じゅうくにち」</li><li>「20日」は「はつか」</li><li>「21日」は「にじゅういちにち」</li></ul>',2),tt=t("hr",null,null,-1),et={class:"actions"},nt={key:1},ot={class:"answers"},st=t("h3",{class:"answer-head"}," 正しい答えを選んでください ",-1),lt=["onClick"],it=t("hr",null,null,-1),at={class:"actions"},ct=["disabled"],ut=6,D="日付 - 聞き取りゲーム",M="日付に関する聞き取りゲームをやりましょう",rt="https://kikitori.boggy.tw",T="https://kikitori.boggy.tw/images/share.jpg",mt={__name:"hiduke",setup(dt){const _=m(null),g=m(1),b=m(1),y=m(null),S=m([]),p=m(null),k=m([]),w=I(()=>Math.floor(k.value.filter(o=>o.question===o.answer).length/k.value.length*100));function C(o){b.value=0,g.value=o,k.value=[],p.value=null,_.value="playing",$()}function j(o){p.value=o}function $(){if(p.value&&k.value.push({question:y.value,answer:p.value}),b.value>=ut+(g.value-1)*2)_.value="end";else{b.value++;const o=B();y.value=o;const e=[];e.push(y.value);for(let c=0;c<3;c++){const i=o.split(/月|日/g).map(d=>parseInt(d)),n=F(i[0]-1,i[1],e);e.push(n)}e.sort(()=>Math.random()-.5),S.value=e,p.value=null,f(y.value,g.value)}}function F(o,e,c){const i=new Date;i.setMonth(o),i.setDate(e);let n=o+1+"月"+e+"日";for(;c.includes(n);){const d=(Math.random()-.5)*1728e6,u=new Date(i.getTime()-d),q=u.getMonth()+1,H=u.getDate();n=q+"月"+H+"日"}return n}function A(){f(y.value,g.value)}function B(){const o=new Date().getTime()-Math.random()*31536e6,e=new Date(o).getMonth()+1,c=new Date(o).getDate();return e+"月"+c+"日"}function f(o,e){const c=speechSynthesis.getVoices().filter(u=>u.lang==="ja_JP"||u.lang==="ja-JP"||u.lang==="ja");if(!c.length){alert("Japanese voice data not found.");const u=V("noJpVoiceFound");u.value=!0,window.scrollTo(0,0)}const i=new SpeechSynthesisUtterance(o),n=e===1?.7:e===2?Math.random()*.25+.8:e===3?Math.random()*.5+1:.1,d=Math.random()*1+.5;i.lang="ja-JP",i.rate=n,i.pitch=d,i.voice=c[Math.floor(Math.random()*c.length)],speechSynthesis.cancel(),speechSynthesis.speak(i)}const P=V("pTitle");return P.value="日付",L({title:D,meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{name:"description",content:M},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:D},{name:"twitter:description",desc:M},{name:"twitter:image",content:T},{name:"og:type",content:"website"},{name:"og:title",content:D},{name:"og:description",content:M},{name:"og:image",content:T},{name:"og:url",content:rt},{name:"og:site_name",content:"iDrip"}]}),(o,e)=>{const c=z,i=E;return l(),s("div",K,[x(c),x(i),a(_)!=="playing"?(l(),s("div",O,[a(_)==="end"?(l(),s(r,{key:0},[t("h2",null," 日付 レベル"+v(a(g))+"の 練習結果 ",1),t("table",null,[R,t("tbody",null,[(l(!0),s(r,null,J(a(k),(n,d)=>(l(),s("tr",{key:`question_history_${d}`},[t("td",null,[t("a",{href:"#",onClick:N(u=>f(n.question,1),["prevent"])},v(n.question),9,W)]),t("td",null,[t("a",{href:"#",onClick:N(u=>f(n.answer,1),["prevent"])},v(n.answer),9,X)]),t("td",null,v(n.question===n.answer?"⭕️":"❌"),1)]))),128))])]),t("div",Y,[h(" 正解率 "+v(a(w))+" % ",1),a(w)>98?(l(),s(r,{key:0},[h(" 素晴らしい！👍 ")],64)):a(w)>80?(l(),s(r,{key:1},[h(" 上手になったね！ ")],64)):a(w)>70?(l(),s(r,{key:2},[h(" よくできたね！ ")],64)):a(w)>60?(l(),s(r,{key:3},[h(" だんだんできたね！ ")],64)):(l(),s(r,{key:4},[h(" もっと頑張ってね。 ")],64))])],64)):(l(),s(r,{key:1},[Z],64)),tt,t("div",et,[t("h2",null,[a(_)===null?(l(),s(r,{key:0},[h(" 始めましょう！ ")],64)):(l(),s(r,{key:1},[h(" もう一度しましょう！ ")],64))]),t("button",{type:"button",onClick:e[0]||(e[0]=n=>C(1))}," レベル一 "),t("button",{type:"button",onClick:e[1]||(e[1]=n=>C(2))}," レベル二 "),t("button",{type:"button",onClick:e[2]||(e[2]=n=>C(3))}," レベル三 ")])])):a(_)==="playing"?(l(),s("div",nt,[t("div",ot,[st,(l(!0),s(r,null,J(a(S),(n,d)=>(l(),s("button",{key:`ans_${d}`,type:"button",class:G(["tertiary ans",{outline:a(p)!==n}]),onClick:u=>j(n)},v(n),11,lt))),128))]),it,t("div",at,[t("button",{type:"button",class:"secondary outline",onClick:e[3]||(e[3]=n=>A())}," もう一度聞く "),t("button",{type:"button",disabled:!a(p),onClick:e[4]||(e[4]=n=>$())}," 次へ ",8,ct)])])):Q("",!0)])}}};export{mt as default};