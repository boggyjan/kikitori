import{_ as L,a as z}from"./NoJpVoiceFound.35dcbf5e.js";import{g as T,r as p,i as E,k as H,w as I,l as Q,o,a as t,b as V,m as i,c as s,F as r,t as m,n as J,q as N,d as h,s as U,x as G}from"./entry.11ebbf07.js";import{u as K}from"./index.66c1c13c.js";const O={class:"main _test _jikan"},R={key:0},W=t("thead",null,[t("tr",null,[t("th",null,"問題"),t("th",null,"答え"),t("th",null,"結果")])],-1),X=["onClick"],Y=["onClick"],Z={class:"result"},tt=t("h2",null," 注意すべきところ ",-1),et=t("ul",{class:"notice-list"},[t("li",null,"「1日」は「ついたち」"),t("li",null,"「2日」は「ふつか」"),t("li",null,"「3日」は「みっか」"),t("li",null,"「4日」は「よっか」"),t("li",null,"「5日」は「いつか」"),t("li",null,"「6日」は「むいか」"),t("li",null,"「7日」は「なのか」"),t("li",null,"「8日」は「ようか」"),t("li",null,"「9日」は「ここのか」"),t("li",null,"「10日」は「とおか」"),t("li",null,"「11日」は「じゅういちにち」"),t("li",null,"「12日」は「じゅうににち」"),t("li",null,"「13日」は「じゅうさんにち」"),t("li",null,"「14日」は「じゅうよんにち」"),t("li",null,"「15日」は「じゅうごにち」"),t("li",null,"「16日」は「じゅうろくにち」"),t("li",null,"「17日」は「じゅうしちにち／じゅうななにち」"),t("li",null,"「18日」は「じゅうはちにち」"),t("li",null,"「19日」は「じゅうくにち」"),t("li",null,"「20日」は「はつか」"),t("li",null,"「21日」は「にじゅういちにち」")],-1),nt=t("hr",null,null,-1),lt={class:"actions"},ot={key:1},st={class:"answers"},at=t("h3",{class:"answer-head"}," 正しい答えを選んでください ",-1),it=["onClick"],ut=t("hr",null,null,-1),ct={class:"actions"},rt=["disabled"],M="日付 - 聞き取りゲーム",x="日付に関する聞き取りゲームをやりましょう",dt=6,mt={__name:"hiduke",setup(ht){const F=T("pTitle");F.value="日付",K({title:M,description:x,ogTitle:M,ogDescription:x,twitterTitle:M,twitterDescription:x});const v=p(null),y=p(1),C=p(1),k=p(null),S=p([]),_=p(null),f=p([]),g=E(()=>Math.floor(f.value.filter(l=>l.question===l.answer).length/f.value.length*100));function D(l){C.value=0,y.value=l,f.value=[],_.value=null,v.value="playing",$()}function j(l){_.value=l}function $(){if(_.value&&f.value.push({question:k.value,answer:_.value}),C.value>=dt+(y.value-1)*2)v.value="end";else{C.value++;const l=q();k.value=l;const e=[];e.push(k.value);for(let u=0;u<3;u++){const a=l.split(/月|日/g).map(n=>parseInt(n)),d=B(a[0]-1,a[1],e);e.push(d)}e.sort(()=>Math.random()-.5),S.value=e,_.value=null,w(k.value,y.value)}}function B(l,e,u){const a=new Date;a.setMonth(l),a.setDate(e);let d=l+1+"月"+e+"日";for(;u.includes(d);){const n=(Math.random()-.5)*1728e6,c=new Date(a.getTime()-n),b=c.getMonth()+1,A=c.getDate();d=b+"月"+A+"日"}return d}function P(){w(k.value,y.value)}function q(){const l=new Date().getTime()-Math.random()*31536e6,e=new Date(l).getMonth()+1,u=new Date(l).getDate();return e+"月"+u+"日"}function w(l,e){const u=speechSynthesis.getVoices().filter(c=>c.lang==="ja_JP"||c.lang==="ja-JP"||c.lang==="ja");if(!u.length){alert("Japanese voice data not found.");const c=T("noJpVoiceFound");c.value=!0,window.scrollTo(0,0)}const a=new SpeechSynthesisUtterance(l),d=e===1?.7:e===2?Math.random()*.25+.8:e===3?Math.random()*.5+1:.1,n=Math.random()*1+.5;a.lang="ja-JP",a.rate=d,a.pitch=n,a.voice=u[Math.floor(Math.random()*u.length)],speechSynthesis.cancel(),speechSynthesis.speak(a)}return(l,e)=>{const u=L,a=z,d=Q;return o(),H(d,{name:"default"},{default:I(()=>[t("div",O,[V(u),V(a),i(v)!=="playing"?(o(),s("div",R,[i(v)==="end"?(o(),s(r,{key:0},[t("h2",null," 日付 レベル"+m(i(y))+"の 練習結果 ",1),t("table",null,[W,t("tbody",null,[(o(!0),s(r,null,J(i(f),(n,c)=>(o(),s("tr",{key:`question_history_${c}`},[t("td",null,[t("a",{href:"#",onClick:N(b=>w(n.question,1),["prevent"])},m(n.question),9,X)]),t("td",null,[t("a",{href:"#",onClick:N(b=>w(n.answer,1),["prevent"])},m(n.answer),9,Y)]),t("td",null,m(n.question===n.answer?"⭕️":"❌"),1)]))),128))])]),t("div",Z,[h(" 正解率 "+m(i(g))+" % ",1),i(g)>98?(o(),s(r,{key:0},[h(" 素晴らしい！👍 ")],64)):i(g)>80?(o(),s(r,{key:1},[h(" 上手になったね！ ")],64)):i(g)>70?(o(),s(r,{key:2},[h(" よくできたね！ ")],64)):i(g)>60?(o(),s(r,{key:3},[h(" だんだんできたね！ ")],64)):(o(),s(r,{key:4},[h(" もっと頑張ってね。 ")],64))])],64)):(o(),s(r,{key:1},[tt,et],64)),nt,t("div",lt,[t("h2",null,[i(v)===null?(o(),s(r,{key:0},[h(" 始めましょう！ ")],64)):(o(),s(r,{key:1},[h(" もう一度しましょう！ ")],64))]),t("button",{type:"button",onClick:e[0]||(e[0]=n=>D(1))}," レベル一 "),t("button",{type:"button",onClick:e[1]||(e[1]=n=>D(2))}," レベル二 "),t("button",{type:"button",onClick:e[2]||(e[2]=n=>D(3))}," レベル三 ")])])):i(v)==="playing"?(o(),s("div",ot,[t("div",st,[at,(o(!0),s(r,null,J(i(S),(n,c)=>(o(),s("button",{key:`ans_${c}`,type:"button",class:U(["tertiary ans",{outline:i(_)!==n}]),onClick:b=>j(n)},m(n),11,it))),128))]),ut,t("div",ct,[t("button",{type:"button",class:"secondary outline",onClick:e[3]||(e[3]=n=>P())}," もう一度聞く "),t("button",{type:"button",disabled:!i(_),onClick:e[4]||(e[4]=n=>$())}," 次へ ",8,rt)])])):G("",!0)])]),_:1})}}};export{mt as default};