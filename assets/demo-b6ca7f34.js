import{r as _,t as r,_ as u,e as l,o as b,c as p,b as o,f as t,w as a,g as d,h as f}from"./index-0afa1053.js";const V={setup(){const e=_({isOn:!1,disabled:!1});return{...r(e)}}},w={class:""},h={class:"mcw-demo"},v={class:"mcw-demo mcw-demo--container"},g=o("i",{class:"material-icons mdc-icon-button__icon mdc-icon-button__icon--on"},"link_off",-1),O=o("i",{class:"material-icons mdc-icon-button__icon"},"link",-1),k={class:"button-style-select"},y={class:"mdc-typography--caption"},$={class:""};function B(e,s,N,U,C,S){const i=l("mcw-icon-button"),c=l("mcw-icon-toggle"),m=l("mcw-checkbox");return b(),p("div",w,[o("section",h,[o("div",v,[t(i,{href:"","aria-describedby":"bar-id"},{default:a(()=>[d(" menu ")]),_:1}),t(i,{modelValue:e.isOn,"onUpdate:modelValue":s[0]||(s[0]=n=>e.isOn=n),disabled:e.disabled},{default:a(()=>[t(c,{"is-on":""},{default:a(()=>[d(" favorite ")]),_:1}),t(c,null,{default:a(()=>[d(" favorite_border ")]),_:1})]),_:1},8,["modelValue","disabled"]),t(i,{modelValue:e.isOn,"onUpdate:modelValue":s[1]||(s[1]=n=>e.isOn=n),disabled:e.disabled},{default:a(()=>[g,O]),_:1},8,["modelValue","disabled"])]),o("div",k,[t(m,{modelValue:e.disabled,"onUpdate:modelValue":s[2]||(s[2]=n=>e.disabled=n),label:"disabled"},null,8,["modelValue"])]),o("div",y,[d(" isOn: "),o("span",$,f(e.isOn),1)])])])}const E=u(V,[["render",B]]);export{E as default};