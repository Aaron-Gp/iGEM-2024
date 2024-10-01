import C from"./ContentRenderer.DRRO1v2i.js";import E from"./ContentDoc.CKlm5gtY.js";import{e as u,t as c,f as d,u as k,r as A,g as $,w as I,c as _,b,h as L,o as v,a as h,F as j,i as W,n as F,j as g,k as H}from"./entry.C7avPQ-s.js";import"./ContentRendererMarkdown.vue.serPPdfC.js";import"./index.C-v3KzvZ.js";import"./node.Dnd51l0P.js";import"./preview.BWGO6hra.js";import"./ContentQuery.Dl1Q-9wZ.js";import"./query.1CYA-DqH.js";const M=(l={})=>{const T=u(()=>{var t,e;const o=c(l);return(o==null?void 0:o.surfaces)??((t=o==null?void 0:o.toAnchor)==null?void 0:t.surfaces)??c((e=d().$anchorScroll)==null?void 0:e.defaults.surfaces)??[]}),S=u(()=>{var t,e,r;const o=c(l);return(o==null?void 0:o.scrollOptions)??((t=o==null?void 0:o.toAnchor)==null?void 0:t.scrollOptions)??c((r=(e=d().$anchorScroll)==null?void 0:e.defaults)==null?void 0:r.toAnchor)}),n=u(()=>{var t,e;const o=c(l);return(o==null?void 0:o.surfaces)??((t=o==null?void 0:o.toTop)==null?void 0:t.surfaces)??c((e=d().$anchorScroll)==null?void 0:e.defaults.surfaces)??[]}),i=u(()=>{var t,e,r;const o=c(l);return(o==null?void 0:o.scrollOptions)??((t=o==null?void 0:o.toTop)==null?void 0:t.scrollOptions)??c((r=(e=d().$anchorScroll)==null?void 0:e.defaults)==null?void 0:r.toTop)});return{scrollToAnchor(o){const t=c(o);let e=null;if(typeof t=="string")e=document.getElementById(t.replace(/^#/,""));else if(t instanceof HTMLElement)e=t;else{const m=c(t.id),y=c(t.sr);if(m)e=document.getElementById(m.replace(/^#/,""));else if(y)try{e=document.querySelector(y)}catch(B){console.error("[useAnchorScroll]: While select element from document, next error occurred:",B)}else console.error("[useAnchorScroll]: Wrong object provided to scrollToAnchor composable:","either 'id' and 'sr' (selector) are not provided in object",t)}if(!e)return!1;const{top:r,left:a}=e.getBoundingClientRect(),{behavior:p,offsetLeft:f,offsetTop:s}=c(S)??{},x={behavior:p,...f!==void 0&&{left:a+f},...s!==void 0&&{top:r+s}};for(const m of c(T))m.scrollBy(x);return!0},scrollToTop(){const{behavior:o,offsetLeft:t,offsetTop:e}=c(i)??{},r={behavior:o,left:t,top:e};for(const a of c(n))a.scrollTo(r)}}},N={class:"flex flex-row flex-wrap md:flex-nowrap justify-center mx-10"},V={class:"md:sticky md:top-[18vh] md:w-[200px] md:h-[300px] md:mr-10"},q=["onClick"],X={__name:"integrated",setup(l){k({title:"BIT iGEM 2024 - Human Practices",meta:[{name:"description",content:"Welcome to the BIT Wiki"}]});const{scrollToAnchor:T,scrollToTop:S}=M({toTop:{scrollOptions:{behavior:"smooth",offsetTop:0}},toAnchor:{scrollOptions:{behavior:"smooth",offsetTop:-120}}}),n=A(""),i=A("");function o(){for(var e=document.querySelectorAll(".content h2"),r=e.length-1;r>=0;r--)if(n.value>=e[r].offsetTop-130){i.value=e[r].id;break}}function t(){n.value=document.documentElement.scrollTop||document.body.scrollTop}return $(()=>{window.addEventListener("scroll",t)}),I(n,()=>o()),(e,r)=>{const a=C,p=E;return v(),_("div",N,[b(p,{path:"/ihp"},{default:L(({doc:f})=>[h("aside",V,[r[0]||(r[0]=h("h1",{class:""},"TOC",-1)),h("ul",null,[(v(!0),_(j,null,W(f.body.toc.links,s=>(v(),_("li",{key:s.id,class:F(["my-5",{"text-[#C0F748] font-bold":g(i)==s.id}])},[h("a",{onClick:x=>g(T)(s.id),class:"cursor-pointer"},H(s.text),9,q)],2))),128))])]),b(a,{value:f,class:"content"},null,8,["value"])]),_:1})])}}};export{X as default};