import{k as n,a6 as r,a7 as f}from"./entry.BV81p025.js";const v=(l={})=>{const T=n(()=>{var e,c;const o=r(l);return(o==null?void 0:o.surfaces)??((e=o==null?void 0:o.toAnchor)==null?void 0:e.surfaces)??r((c=f().$anchorScroll)==null?void 0:c.defaults.surfaces)??[]}),i=n(()=>{var e,c,t;const o=r(l);return(o==null?void 0:o.scrollOptions)??((e=o==null?void 0:o.toAnchor)==null?void 0:e.scrollOptions)??r((t=(c=f().$anchorScroll)==null?void 0:c.defaults)==null?void 0:t.toAnchor)}),S=n(()=>{var e,c;const o=r(l);return(o==null?void 0:o.surfaces)??((e=o==null?void 0:o.toTop)==null?void 0:e.surfaces)??r((c=f().$anchorScroll)==null?void 0:c.defaults.surfaces)??[]}),A=n(()=>{var e,c,t;const o=r(l);return(o==null?void 0:o.scrollOptions)??((e=o==null?void 0:o.toTop)==null?void 0:e.scrollOptions)??r((t=(c=f().$anchorScroll)==null?void 0:c.defaults)==null?void 0:t.toTop)});return{scrollToAnchor(o){const e=r(o);let c=null;if(typeof e=="string")c=document.getElementById(e.replace(/^#/,""));else if(e instanceof HTMLElement)c=e;else{const s=r(e.id),m=r(e.sr);if(s)c=document.getElementById(s.replace(/^#/,""));else if(m)try{c=document.querySelector(m)}catch(b){console.error("[useAnchorScroll]: While select element from document, next error occurred:",b)}else console.error("[useAnchorScroll]: Wrong object provided to scrollToAnchor composable:","either 'id' and 'sr' (selector) are not provided in object",e)}if(!c)return!1;const{top:t,left:u}=c.getBoundingClientRect(),{behavior:d,offsetLeft:a,offsetTop:h}=r(i)??{},y={behavior:d,...a!==void 0&&{left:u+a},...h!==void 0&&{top:t+h}};for(const s of r(T))s.scrollBy(y);return!0},scrollToTop(){const{behavior:o,offsetLeft:e,offsetTop:c}=r(A)??{},t={behavior:o,left:e,top:c};for(const u of r(S))u.scrollTo(t)}}};export{v as u};
