import{r as u,t as _,_ as p,e as l,o as b,c as w,f as c,b as e,g as r,w as h,h as i}from"./index-29ad663a.js";const f={setup(){const n=u({showBanner:!1,reason:"",action:""}),o=({reason:s})=>n.reason=s,t=({action:s})=>n.action=s;return{..._(n),onClosing:o,onAction:t}}};const B={class:"mcw-demo"},v=e("br",null,null,-1),g={class:"demo-controls"},C=e("label",null,"Demo controls",-1),V=e("br",null,null,-1);function k(n,o,t,s,y,$){const d=l("mcw-banner"),m=l("mcw-button");return b(),w("div",B,[c(d,{modelValue:n.showBanner,"onUpdate:modelValue":o[0]||(o[0]=a=>n.showBanner=a),text:"This is a banner component","primary-action":"Fix me","secondary-action":"Learn more",icon:"help","onMdcbanner:closing":n.onClosing,"onMdcbanner:actionclicked":n.onAction},null,8,["modelValue","onMdcbanner:closing","onMdcbanner:actionclicked"]),v,e("fieldset",g,[C,r(),V,c(m,{outlined:"",onClick:o[1]||(o[1]=a=>n.showBanner=!n.showBanner)},{default:h(()=>[r("Show Banner")]),_:1}),e("div",null,"Close reason: "+i(n.reason),1),e("div",null,"Action: "+i(n.action),1)])])}const A=p(f,[["render",k]]);export{A as default};
