import{r as v,i as _,t as T,_ as k,e as f,o,c as s,b as u,f as w,w as l,F as V,p as g,u as c,g as h,h as d,l as r}from"./index-0afa1053.js";const B={setup(){const e=v({selectedType:"Meat",selectedValue:void 0,food:{Vegetables:["Spinach","Carrots","Onions","Broccoli"],Meat:["Eggs","Chicken","Fish","Turkey","Pork","Beef"],Fruits:["Apples","Oranges","Bananas","Berries","Lemons"]}}),a=_(()=>Object.keys(e.food)),i=_(()=>e.selectedType?e.food[e.selectedType]:[]),p=n=>{console.log(n),e.selectedType=n,e.selectedValue=void 0};return{...T(e),types:a,options:i,onTypeChanged:p}}};const C={class:"mcw-demo"},b={class:"mcw-demo mcw-demo--container"},F=u("br",null,null,-1),S={key:0,class:"mdc-typography--caption"},N={key:1,class:"mdc-typography--caption"};function $(e,a,i,p,n,L){const m=f("mcw-list-item"),y=f("mcw-select");return o(),s("div",C,[u("div",b,[u("div",null,[w(y,{id:"food-group","model-value":e.selectedType,label:"Food",helptext:"Pick a food group","leading-icon":"restaurant_menu","onUpdate:modelValue":e.onTypeChanged},{default:l(()=>[(o(!0),s(V,null,g(e.types,t=>(o(),c(m,{key:t,"data-value":t,role:"option",icon:""},{default:l(()=>[h(d(t),1)]),_:2},1032,["data-value"]))),128))]),_:1},8,["model-value","onUpdate:modelValue"]),F,e.selectedType?(o(),c(y,{key:e.selectedType,modelValue:e.selectedValue,"onUpdate:modelValue":a[0]||(a[0]=t=>e.selectedValue=t),outlined:"",label:"Kind"},{default:l(()=>[(o(!0),s(V,null,g(e.options,t=>(o(),c(m,{key:t,"data-value":t.toLowerCase(),role:"option"},{default:l(()=>[h(d(t),1)]),_:2},1032,["data-value"]))),128))]),_:1},8,["modelValue"])):r("",!0)])]),e.selectedType?(o(),s("div",S," Selected Type: "+d(e.selectedType),1)):r("",!0),e.selectedValue?(o(),s("div",N," Selected Value: "+d(e.selectedValue),1)):r("",!0)])}const U=k(B,[["render",$]]);export{U as default};