"use strict";(self.webpackChunkvue_material_adapter=self.webpackChunkvue_material_adapter||[]).push([[7635],{7635:function(p,a,l){l.r(a),l.d(a,{default:function(){return o}});var s=l(8770);const e=[(0,s._)("html",null,[(0,s._)("head"),(0,s._)("body",null,[(0,s._)("p",null,[(0,s.Uk)("This Guide assumes you are familiar with "),(0,s._)("a",{href:"https://vuejs.org/v2/guide/index.html"},"Vue.js"),(0,s.Uk)(" components and plugin system."),(0,s._)("br"),(0,s._)("code",null,"Vue.js"),(0,s.Uk)(" 3 or greater is required as peer dependencies.")]),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("Note: Applications must install "),(0,s._)("code",null,"Vue.use(VueCompositionApi)"),(0,s.Uk)(" but have no requirement to use the composition style of programming. Material Components Web are not bundled and need to be installed."),(0,s._)("br"),(0,s.Uk)(" Material Icons and Fonts are not bundled and need to be fetched.")])]),(0,s._)("h2",null,"Quick Start"),(0,s._)("h4",null,"Examples"),(0,s._)("p",null,[(0,s.Uk)("There are examples of using "),(0,s._)("code",null,"vue-material-adapter"),(0,s.Uk)(" both as a "),(0,s._)("code",null,"basic-vue-cli"),(0,s.Uk)(" and a "),(0,s._)("code",null,"basic-webpack"),(0,s.Uk)(" project "),(0,s._)("a",{href:"https://github.com/pgbross/vue-material-adapter/tree/master/examples"},"examples"),(0,s.Uk)(".")]),(0,s._)("h4",null,"Playground"),(0,s._)("p",null,"See demo in the source distribution for examples of how vue-material-adapter can be used."),(0,s._)("h2",null,"Getting Serious"),(0,s._)("p",null,"The distribution comes in a tree-shakeable ES (ESM) as well as the older AMD/CJS variants."),(0,s._)("h4",null,"Standalone plugin"),(0,s._)("table",null,[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"distribution"),(0,s._)("th",null,"env"),(0,s._)("th",null,"description")])]),(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,"dist/vue-material-adapter.amd.min.js"),(0,s._)("td",null,"production"),(0,s._)("td",null,"minified plugin (AMD)")]),(0,s._)("tr",null,[(0,s._)("td",null,"dist/vue-material-adapter.cjs.min.js"),(0,s._)("td",null,"production"),(0,s._)("td",null,"minified plugin (CommonJS)")]),(0,s._)("tr",null,[(0,s._)("td",null,"dist/vue-material-adapter.esm.js"),(0,s._)("td",null,"production"),(0,s._)("td",null,"tree shakeable ES(ESM)")])])]),(0,s._)("h2",null,"Webpack/Rollup"),(0,s._)("h3",null,"ESM Distribution"),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("The following guide assumes you have a valid Vue.js/Webpack config. refer to "),(0,s._)("a",{href:"https://github.com/vuejs-templates/webpack"},"vuejs-templates/webpack"),(0,s.Uk)(" for more info.")])]),(0,s._)("table",null,[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"module"),(0,s._)("th",null,"type")])]),(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,"vue-material-adapter.esm.js"),(0,s._)("td",null,"ESM")])])]),(0,s._)("h4",null,"Install vue, @vue/composition-api, vue-material-adapter (and eventually vue-router)."),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-bash"},[(0,s.Uk)(`npm install vue
npm install @vue/composition-api
npm install vue-router `),(0,s._)("span",{class:"hljs-comment"},"# optional"),(0,s.Uk)(`
npm install vue-material-adapter
`)])]),(0,s._)("h4",null,"Add Reset and Material Dependencies to HTML template"),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-html"},[(0,s._)("span",{class:"hljs-comment"},"<!-- index.html template -->"),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s._)("span",{class:"hljs-name"},"head"),(0,s.Uk)(">")]),(0,s.Uk)(`
  `),(0,s._)("span",{class:"hljs-comment"},"<!-- import reset material icons, fonts and vue-material-adapter stylesheets -->"),(0,s.Uk)(`
  `),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s._)("span",{class:"hljs-name"},"link"),(0,s.Uk)(`
    `),(0,s._)("span",{class:"hljs-attr"},"rel"),(0,s.Uk)("="),(0,s._)("span",{class:"hljs-string"},'"stylesheet"'),(0,s.Uk)(`
    `),(0,s._)("span",{class:"hljs-attr"},"href"),(0,s.Uk)("="),(0,s._)("span",{class:"hljs-string"},'"https://fonts.googleapis.com/icon?family=Material+Icons"'),(0,s.Uk)(`
  />`)]),(0,s.Uk)(`
  `),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s._)("span",{class:"hljs-name"},"link"),(0,s.Uk)(`
    `),(0,s._)("span",{class:"hljs-attr"},"rel"),(0,s.Uk)("="),(0,s._)("span",{class:"hljs-string"},'"stylesheet"'),(0,s.Uk)(`
    `),(0,s._)("span",{class:"hljs-attr"},"href"),(0,s.Uk)("="),(0,s._)("span",{class:"hljs-string"},'"https://fonts.googleapis.com/css?family=Roboto:300,400,500"'),(0,s.Uk)(`
  />`)]),(0,s.Uk)(`
  `),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s._)("span",{class:"hljs-name"},"link"),(0,s.Uk)(`
    `),(0,s._)("span",{class:"hljs-attr"},"rel"),(0,s.Uk)("="),(0,s._)("span",{class:"hljs-string"},'"stylesheet"'),(0,s.Uk)(`
    `),(0,s._)("span",{class:"hljs-attr"},"href"),(0,s.Uk)("="),(0,s._)("span",{class:"hljs-string"},'"https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500"'),(0,s.Uk)(`
  />`)]),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("</"),(0,s._)("span",{class:"hljs-name"},"head"),(0,s.Uk)(">")]),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s._)("span",{class:"hljs-name"},"body"),(0,s.Uk)(">")]),(0,s.Uk)(`
  `),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s._)("span",{class:"hljs-name"},"div"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-attr"},"id"),(0,s.Uk)("="),(0,s._)("span",{class:"hljs-string"},'"app"'),(0,s.Uk)(">")]),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("</"),(0,s._)("span",{class:"hljs-name"},"div"),(0,s.Uk)(">")]),(0,s.Uk)(`
  `),(0,s._)("span",{class:"hljs-comment"},"<!-- built files will be auto injected -->"),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-tag"},[(0,s.Uk)("</"),(0,s._)("span",{class:"hljs-name"},"body"),(0,s.Uk)(">")]),(0,s.Uk)(`
`)])]),(0,s._)("h3",null,"Create your own SASS Theme"),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("Material Components styles come as highly themable SASS framework. In order to be able to theme properly and avoid any duplicate/ordering style issues in the bundle, we recommend managing styles globally. refer to the "),(0,s._)("a",{href:"https://material.io/components/web/docs/theming/"},"MDC Theming Guide"),(0,s.Uk)(" for more.")])]),(0,s._)("p",null,"Install Material Components SASS as a dependency."),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-bash"},`npm install material-components-web --save
`)]),(0,s._)("p",null,"Configure Webpack with sass-loader and make sure sass modules can be resolved."),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-javascript"},[(0,s._)("span",{class:"hljs-comment"},"// sass loader config"),(0,s.Uk)(`
  {
    `),(0,s._)("span",{class:"hljs-attr"},"loader"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-string"},"'sass-loader'"),(0,s.Uk)(`,
    `),(0,s._)("span",{class:"hljs-attr"},"options"),(0,s.Uk)(`: {
      `),(0,s._)("span",{class:"hljs-attr"},"sourceMap"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-literal"},"false"),(0,s.Uk)(`,
      `),(0,s._)("span",{class:"hljs-attr"},"includePaths"),(0,s.Uk)(": [path."),(0,s._)("span",{class:"hljs-title function_"},"resolve"),(0,s.Uk)("(__dirname,"),(0,s._)("span",{class:"hljs-string"},"'node_modules'"),(0,s.Uk)(`)],
    },
  },
`)])]),(0,s._)("h3",null,"Building from Sources"),(0,s._)("blockquote",null,[(0,s._)("p",null,"You may want to optimize your build and leverage the source distribution.")]),(0,s._)("h4",null,"Make sure @material imports are transpiled"),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-javascript"},[(0,s._)("span",{class:"hljs-comment"},"// babel loader config"),(0,s.Uk)(`
  {
    `),(0,s._)("span",{class:"hljs-attr"},"test"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-regexp"},"/\\.js$/"),(0,s.Uk)(`,
    `),(0,s._)("span",{class:"hljs-attr"},"loader"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-string"},"'babel-loader'"),(0,s.Uk)(`,
    `),(0,s._)("span",{class:"hljs-attr"},"include"),(0,s.Uk)(`: [
      path.`),(0,s._)("span",{class:"hljs-title function_"},"resolve"),(0,s.Uk)("(__dirname, "),(0,s._)("span",{class:"hljs-string"},"'node_modules/@material'"),(0,s.Uk)(`)
    ]
  }
`)])]),(0,s._)("h4",null,"Make sure sass modules can be imported"),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-javascript"},[(0,s._)("span",{class:"hljs-comment"},"// sass loader config"),(0,s.Uk)(`
  {
    `),(0,s._)("span",{class:"hljs-attr"},"loader"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-string"},"'sass-loader'"),(0,s.Uk)(`,
    `),(0,s._)("span",{class:"hljs-attr"},"options"),(0,s.Uk)(`: {
      `),(0,s._)("span",{class:"hljs-attr"},"includePaths"),(0,s.Uk)(": [path."),(0,s._)("span",{class:"hljs-title function_"},"resolve"),(0,s.Uk)("(__dirname,"),(0,s._)("span",{class:"hljs-string"},"'node_modules'"),(0,s.Uk)(`)],
    },
  },
`)])]),(0,s._)("h4",null,"Full build"),(0,s._)("p",null,[(0,s.Uk)("See "),(0,s._)("code",null,"basic-webpack"),(0,s.Uk)(" project "),(0,s._)("a",{href:"https://github.com/pgbross/vue-material-adapter/tree/master/examples"},"examples"),(0,s.Uk)(".")]),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-scss"},[(0,s._)("span",{class:"hljs-comment"},"/* theme.scss */"),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-variable"},"$mdc-theme-primary"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-number"},"#212121"),(0,s.Uk)(`;
`),(0,s._)("span",{class:"hljs-variable"},"$mdc-theme-accent"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-number"},"#41b883"),(0,s.Uk)(`;
`),(0,s._)("span",{class:"hljs-variable"},"$mdc-theme-background"),(0,s.Uk)(": "),(0,s._)("span",{class:"hljs-number"},"#fff"),(0,s.Uk)(`;

@import 'vue-material-adapter/index`),(0,s._)("span",{class:"hljs-selector-class"},".scss"),(0,s.Uk)(`';
`)])]),(0,s._)("pre",null,[(0,s._)("code",{"v-pre":"",class:"language-javascript"},[(0,s._)("span",{class:"hljs-comment"},"// main.js"),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-keyword"},"import"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-string"},"`./theme.scss`"),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-keyword"},"import"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-title class_"},"Vue"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-keyword"},"from"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-string"},"'vue'"),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-keyword"},"import"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-title class_"},"VueMaterialAdapter"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-keyword"},"from"),(0,s.Uk)(),(0,s._)("span",{class:"hljs-string"},"'vue-material-adapter'"),(0,s.Uk)(`
`),(0,s._)("span",{class:"hljs-title class_"},"Vue"),(0,s.Uk)("."),(0,s._)("span",{class:"hljs-title function_"},"use"),(0,s.Uk)("("),(0,s._)("span",{class:"hljs-title class_"},"VueMaterialAdapter"),(0,s.Uk)(`)
`)])])])],-1)];function n(u,_){return(0,s.wg)(),(0,s.iD)("article",null,e)}var t=l(3340);const r={};var o=(0,t.Z)(r,[["render",n]])}}]);

//# sourceMappingURL=7635.72f1af2518cac3187dfa.js.map