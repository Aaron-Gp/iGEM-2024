import{at as r,aa as o}from"./entry.Bn7ncJmC.js";const a=()=>({isEnabled:()=>{const e=o().query;return Object.prototype.hasOwnProperty.call(e,"preview")&&!e.preview?!1:!!(e.preview||r("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>r("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:e=>{r("previewToken").value=e,o().query.preview=e||"",e?sessionStorage.setItem("previewToken",e):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{a as u};
