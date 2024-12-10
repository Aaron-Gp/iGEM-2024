import{_ as b}from"./NuxtImg.vue.Db0gi3P1.js";import E from"./ContentRenderer.BmJ8qC1e.js";import S from"./ContentDoc.B8PwOYRc.js";import{u as k,r as p,b as A,w as B,c as l,d as u,a as t,e as I,F as m,o as s,f as x,n as f,g as a,t as g,q as $}from"./entry.Clu7wkvK.js";import{u as N}from"./anchorscroll.Exg9IN-r.js";import"./ContentRendererMarkdown.vue.D9Dk_xPi.js";import"./index.C-v3KzvZ.js";import"./node.Dnd51l0P.js";import"./preview.gbylbwmh.js";import"./ContentQuery.BXTxaNAl.js";import"./query.BnOLLtCc.js";const j={class:"flex flex-row flex-wrap md:flex-nowrap justify-center mx-10"},q={class:"md:sticky md:top-[120px] md:w-[200px] md:h-[200px] md:mr-10"},F=["onClick"],M=["onClick"],U={__name:"engineering",setup(O){k({title:"BIT iGEM 2024 - Engineering",meta:[{name:"description",content:"Welcome to the BIT Wiki"}]});const{scrollToAnchor:_}=N({toTop:{scrollOptions:{behavior:"smooth",offsetTop:0}},toAnchor:{scrollOptions:{behavior:"smooth",offsetTop:-120}}}),i=p(""),d=p(""),h=p("");function w(){var c=document.querySelectorAll(".content h2");for(let e=c.length-1;e>=0;e--)if(i.value>=c[e].offsetTop-130){console.log(c[e].id),d.value=c[e].id;break}var o=document.querySelectorAll(".content h3");for(let e=o.length-1;e>=0;e--)if(i.value>=o[e].offsetTop-130){console.log(o[e].id),h.value=o[e].id;break}}function y(){i.value=document.documentElement.scrollTop||document.body.scrollTop}return A(()=>{window.addEventListener("scroll",y)}),B(i,()=>w()),(c,o)=>{const e=b,C=E,T=S;return s(),l(m,null,[u(e,{provider:"iGEM",src:"/banner/project.webp",class:"inline-block w-full mt-[-1rem]",alt:"cover"}),o[1]||(o[1]=t("div",{class:"page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg"}," Engineering ",-1)),t("div",j,[u(T,{path:"/project-engineering"},{default:I(({doc:v})=>[t("aside",q,[o[0]||(o[0]=t("h1",{class:"mt-0"},"TOC",-1)),t("ul",null,[(s(!0),l(m,null,x(v.body.toc.links,n=>(s(),l("li",{key:n.id,class:f(["my-5",{"text-[#C0F748] font-bold":a(d)==n.id}])},[t("a",{onClick:r=>a(_)(n.id),class:"cursor-pointer"},g(n.text),9,F),t("ul",{class:f([{hidden:a(d)!=n.id},"pl-5 pt-2"])},[(s(!0),l(m,null,x(n.children,r=>(s(),l(m,{key:r.id},[r.depth==3?(s(),l("li",{key:0,class:f([{"text-[#fff] font-normal":a(h)!=r.id},"mb-2"])},[t("a",{onClick:V=>a(_)(r.id),class:"cursor-pointer"},g(r.text),9,M)],2)):$("",!0)],64))),128))],2)],2))),128))])]),u(C,{value:v,class:"content"},null,8,["value"])]),_:1})])],64)}}};export{U as default};