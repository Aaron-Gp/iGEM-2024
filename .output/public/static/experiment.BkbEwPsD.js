import{_ as b}from"./NuxtImg.vue.C2bVilGo.js";import w from"./ContentRenderer.C2cAdJHS.js";import T from"./ContentDoc.CaQI6BHV.js";import{_ as y,u as C,r as i,b as g,w as k,c as r,d as l,a as t,e as E,F as p,o as a,f as B,n as I,g as d,t as S}from"./entry.au1yxXCi.js";import{u as A}from"./anchorscroll.DAJ71Dxw.js";import"./ContentRendererMarkdown.vue.CU3a6g2Z.js";import"./index.C-v3KzvZ.js";import"./node.Dnd51l0P.js";import"./preview.BhCaMqqR.js";import"./ContentQuery.Be5oDaWX.js";import"./query.BMBYgcfg.js";const $={class:"flex flex-row flex-wrap md:flex-nowrap justify-center mx-10"},F={class:"md:sticky md:top-[120px] md:w-[200px] md:h-[250px] md:mr-10"},M=["onClick"],N={__name:"experiment",setup(O){C({title:"BIT iGEM 2024 - Experiments",meta:[{name:"description",content:"Welcome to the BIT Wiki"}]});const{scrollToAnchor:u,scrollToTop:D}=A({toTop:{scrollOptions:{behavior:"smooth",offsetTop:0}},toAnchor:{scrollOptions:{behavior:"smooth",offsetTop:-120}}}),s=i(""),c=i("");function f(){for(var e=document.querySelectorAll(".content h2"),o=e.length-1;o>=0;o--)if(s.value>=e[o].offsetTop-130){c.value=e[o].id;break}}function _(){s.value=document.documentElement.scrollTop||document.body.scrollTop}return g(()=>{window.addEventListener("scroll",_)}),k(s,()=>f()),(e,o)=>{const x=b,v=w,h=T;return a(),r(p,null,[l(x,{provider:"iGEM",src:"/banner/wetlab.webp",class:"inline-block w-full mt-[-1rem]",alt:"cover"}),o[1]||(o[1]=t("div",{class:"page-title m-10 mb-16 font-normal text-3xl p-5 rounded-lg"},"Experiments",-1)),t("div",$,[l(h,{path:"/wetlab-experiment"},{default:E(({doc:m})=>[t("aside",F,[o[0]||(o[0]=t("h1",{class:"mt-0"},"TOC",-1)),t("ul",null,[(a(!0),r(p,null,B(m.body.toc.links,n=>(a(),r("li",{key:n.id,class:I(["my-4",{"text-[#C0F748] font-bold":d(c)==n.id}])},[t("a",{onClick:G=>d(u)(n.id),class:"cursor-pointer"},S(n.text),9,M)],2))),128))])]),l(v,{value:m,class:"content"},null,8,["value"])]),_:1})])],64)}}},Q=y(N,[["__scopeId","data-v-0d7224a2"]]);export{Q as default};