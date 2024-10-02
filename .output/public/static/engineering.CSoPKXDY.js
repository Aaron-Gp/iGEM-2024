import{_ as b}from"./NuxtImg.vue.C2bVilGo.js";import E from"./ContentRenderer.C2cAdJHS.js";import S from"./ContentDoc.CaQI6BHV.js";import{u as k,r as p,b as A,w as B,c as l,d as u,a as e,e as I,F as m,o as s,f as x,n as f,g as c,t as g,q as $}from"./entry.au1yxXCi.js";import{u as N}from"./anchorscroll.DAJ71Dxw.js";import"./ContentRendererMarkdown.vue.CU3a6g2Z.js";import"./index.C-v3KzvZ.js";import"./node.Dnd51l0P.js";import"./preview.BhCaMqqR.js";import"./ContentQuery.Be5oDaWX.js";import"./query.BMBYgcfg.js";const j={class:"flex flex-row flex-wrap md:flex-nowrap justify-center mx-10"},q={class:"md:sticky md:top-[120px] md:w-[200px] md:h-[200px] md:mr-10"},F=["onClick"],M=["onClick"],X={__name:"engineering",setup(O){k({title:"BIT iGEM 2024 - Engineering",meta:[{name:"description",content:"Welcome to the BIT Wiki"}]});const{scrollToAnchor:_,scrollToTop:V}=N({toTop:{scrollOptions:{behavior:"smooth",offsetTop:0}},toAnchor:{scrollOptions:{behavior:"smooth",offsetTop:-120}}}),i=p(""),d=p(""),h=p("");function T(){for(var a=document.querySelectorAll(".content h2"),o=a.length-1;o>=0;o--)if(i.value>=a[o].offsetTop-130){console.log(a[o].id),d.value=a[o].id;break}for(var t=document.querySelectorAll(".content h3"),o=t.length-1;o>=0;o--)if(i.value>=t[o].offsetTop-130){console.log(t[o].id),h.value=t[o].id;break}}function w(){i.value=document.documentElement.scrollTop||document.body.scrollTop}return A(()=>{window.addEventListener("scroll",w)}),B(i,()=>T()),(a,o)=>{const t=b,y=E,C=S;return s(),l(m,null,[u(t,{provider:"iGEM",src:"/banner/project.webp",class:"inline-block w-full mt-[-1rem]",alt:"cover"}),o[1]||(o[1]=e("div",{class:"page-title m-10 mb-16 font-normal text-3xl p-5 pl-8 rounded-lg"},"Engineering",-1)),e("div",j,[u(C,{path:"/project-engineering"},{default:I(({doc:v})=>[e("aside",q,[o[0]||(o[0]=e("h1",{class:"mt-0"},"TOC",-1)),e("ul",null,[(s(!0),l(m,null,x(v.body.toc.links,n=>(s(),l("li",{key:n.id,class:f(["my-5",{"text-[#C0F748] font-bold":c(d)==n.id}])},[e("a",{onClick:r=>c(_)(n.id),class:"cursor-pointer"},g(n.text),9,F),e("ul",{class:f([{hidden:c(d)!=n.id},"pl-5 pt-2"])},[(s(!0),l(m,null,x(n.children,r=>(s(),l(m,{key:r.id},[r.depth==3?(s(),l("li",{key:0,class:f([{"text-[#fff] font-normal":c(h)!=r.id},"mb-2"])},[e("a",{onClick:D=>c(_)(r.id),class:"cursor-pointer"},g(r.text),9,M)],2)):$("",!0)],64))),128))],2)],2))),128))])]),u(y,{value:v,class:"content"},null,8,["value"])]),_:1})])],64)}}};export{X as default};
