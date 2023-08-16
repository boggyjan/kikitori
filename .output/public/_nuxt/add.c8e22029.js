import{r as v,i as V,c,a as t,j as a,l as h,F as B,k as D,m,t as p,q as g,v as y,s as k,o as d,n as E,d as T}from"./entry.744c3e6e.js";const x={class:"_add"},I=t("h2",null," 新しい練習を作ろう！ ",-1),M=t("hr",null,null,-1),j={class:"grid"},F={class:"list"},J=t("h3",null," 保存したテーマ ",-1),O={key:0,class:"alert"},R=["onClick"],U=["onClick"],z=t("hr",null,null,-1),A={key:0},L={key:1},Q={class:"item"},Y=t("label",null,"テーマ",-1),G={class:"item"},H=t("label",null,"単語（改行で単語を区切ってください）",-1),K={class:"actions"},P=t("button",null," 保存 ",-1),w="saved_tests",Z={__name:"add",setup(W){const n=v([]),o=v(null),u=v(null),r=v(null),_=v(null);function S(){const l=localStorage.getItem(w);n.value=l?JSON.parse(l):[]}function f(){localStorage.setItem(w,JSON.stringify(n.value)),window.dispatchEvent(new Event("saved_test_updated"))}function N(l){o.value=l,u.value=n.value[l].title,r.value=n.value[l].questions.join("\r");const e=window.scrollY+_.value.getBoundingClientRect().y-100;window.scrollTo(0,e)}function b(){o.value=null,u.value=null,r.value=null}function C(){const l=u.value.replace(/^\s+|\s+$/g,"");if(console.log(o.value),o.value===null&&n.value.find(s=>s.title===l)){alert("保存に失敗しました。すでに同じテーマがあります。");return}const e=[...new Set(r.value.split(/\r|\n/g).filter(s=>!!s))];if(e.length<4){alert("保存に失敗しました。少なくとも4つ異なる単語が必要です。");return}e.forEach((s,i)=>{e[i]=e[i].replace(/^\s+|\s+$/g,"")}),!isNaN(o.value)&&o.value!==null?n.value[o.value]={title:l,questions:e}:(n.value.push({title:l,questions:e}),o.value=n.value.length-1),f(),alert("保存しました")}function q(l){confirm("Are you sure")&&(n.value.splice(l,1),f())}return V(()=>{S()}),(l,e)=>(d(),c("div",x,[I,M,t("div",j,[t("div",F,[J,a(n).length?h("",!0):(d(),c("div",O," データがありません ")),(d(!0),c(B,null,D(a(n),(s,i)=>(d(),c("div",{key:`test_${i}`,class:E(["item",{active:i===a(o)}]),onClick:$=>N(i)},[T(p(s.title)+" ",1),t("button",{type:"button",class:"small outline secondary",onClick:m($=>q(i),["stop"])}," 削除 ",8,U)],10,R))),128)),z]),t("div",{ref_key:"content",ref:_,class:"content"},[t("form",{onSubmit:e[3]||(e[3]=m(s=>C(),["prevent"]))},[a(o)!==null?(d(),c("h3",A," テーマ「"+p(a(u))+"」を編集 ",1)):(d(),c("h3",L," 新しいテーマを編集 ")),t("div",Q,[Y,g(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>k(u)?u.value=s:null),required:""},null,512),[[y,a(u)]])]),t("div",G,[H,g(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=s=>k(r)?r.value=s:null),required:""},null,512),[[y,a(r)]])]),t("div",K,[a(o)!==null?(d(),c("button",{key:0,type:"button",class:"outline",onClick:e[2]||(e[2]=s=>b())}," 新しいのを作る ")):h("",!0),P])],32)],512)])]))}};export{Z as default};
