(self.webpackChunkvue_material_adapter=self.webpackChunkvue_material_adapter||[]).push([[4868],{4868:function(w,e,a){"use strict";a.r(e),a.d(e,{default:function(){return S}});var s=a(8770);const l=(0,s.uE)('<p>This Guide assumes you are familiar with <a href="https://vuejs.org/v2/guide/index.html">Vue.js</a> components and plugin system.<br><code>Vue.js</code> 3 or greater is required as peer dependencies.</p><blockquote><p>Note: Applications must install <code>Vue.use(VueCompositionApi)</code> but have no requirement to use the composition style of programming. Material Components Web are not bundled and need to be installed.<br> Material Icons and Fonts are not bundled and need to be fetched.</p></blockquote><h2>Quick Start</h2><h4>Examples</h4><p>There are examples of using <code>vue-material-adapter</code> both as a <code>basic-vue-cli</code> and a <code>basic-webpack</code> project <a href="https://github.com/pgbross/vue-material-adapter/tree/master/examples">examples</a>.</p><h4>Playground</h4><p>See demo in the source distribution for examples of how vue-material-adapter can be used.</p><h2>Getting Serious</h2><p>The distribution comes in a tree-shakeable ES (ESM) as well as the older AMD/CJS variants.</p><h4>Standalone plugin</h4><table><thead><tr><th>distribution</th><th>env</th><th>description</th></tr></thead><tbody><tr><td>dist/vue-material-adapter.amd.min.js</td><td>production</td><td>minified plugin (AMD)</td></tr><tr><td>dist/vue-material-adapter.cjs.min.js</td><td>production</td><td>minified plugin (CommonJS)</td></tr><tr><td>dist/vue-material-adapter.esm.js</td><td>production</td><td>tree shakeable ES(ESM)</td></tr></tbody></table><h2>Webpack/Rollup</h2><h3>ESM Distribution</h3><blockquote><p>The following guide assumes you have a valid Vue.js/Webpack config. refer to <a href="https://github.com/vuejs-templates/webpack">vuejs-templates/webpack</a> for more info.</p></blockquote><table><thead><tr><th>module</th><th>type</th></tr></thead><tbody><tr><td>vue-material-adapter.esm.js</td><td>ESM</td></tr></tbody></table><h4>Install vue, @vue/composition-api, vue-material-adapter (and eventually vue-router).</h4>',16),n=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-bash"},[(0,s.Uk)(`npm install vue
npm install @vue/composition-api
npm install vue-router `),(0,s.Wm)("span",{class:"hljs-comment"},"# optional"),(0,s.Uk)(`
npm install vue-material-adapter
`)])],-1),o=(0,s.Wm)("h4",null,"Add Reset and Material Dependencies to HTML template",-1),m=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-html"},[(0,s.Wm)("span",{class:"hljs-comment"},"<!-- index.html template -->"),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s.Wm)("span",{class:"hljs-name"},"head"),(0,s.Uk)(">")]),(0,s.Uk)(`
  `),(0,s.Wm)("span",{class:"hljs-comment"},"<!-- import reset material icons, fonts and vue-material-adapter stylesheets -->"),(0,s.Uk)(`
  `),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s.Wm)("span",{class:"hljs-name"},"link"),(0,s.Uk)(`
    `),(0,s.Wm)("span",{class:"hljs-attr"},"rel"),(0,s.Uk)("="),(0,s.Wm)("span",{class:"hljs-string"},'"stylesheet"'),(0,s.Uk)(`
    `),(0,s.Wm)("span",{class:"hljs-attr"},"href"),(0,s.Uk)("="),(0,s.Wm)("span",{class:"hljs-string"},'"https://fonts.googleapis.com/icon?family=Material+Icons"'),(0,s.Uk)(`
  />`)]),(0,s.Uk)(`
  `),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s.Wm)("span",{class:"hljs-name"},"link"),(0,s.Uk)(`
    `),(0,s.Wm)("span",{class:"hljs-attr"},"rel"),(0,s.Uk)("="),(0,s.Wm)("span",{class:"hljs-string"},'"stylesheet"'),(0,s.Uk)(`
    `),(0,s.Wm)("span",{class:"hljs-attr"},"href"),(0,s.Uk)("="),(0,s.Wm)("span",{class:"hljs-string"},'"https://fonts.googleapis.com/css?family=Roboto:300,400,500"'),(0,s.Uk)(`
  />`)]),(0,s.Uk)(`
  `),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s.Wm)("span",{class:"hljs-name"},"link"),(0,s.Uk)(`
    `),(0,s.Wm)("span",{class:"hljs-attr"},"rel"),(0,s.Uk)("="),(0,s.Wm)("span",{class:"hljs-string"},'"stylesheet"'),(0,s.Uk)(`
    `),(0,s.Wm)("span",{class:"hljs-attr"},"href"),(0,s.Uk)("="),(0,s.Wm)("span",{class:"hljs-string"},'"https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500"'),(0,s.Uk)(`
  />`)]),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("</"),(0,s.Wm)("span",{class:"hljs-name"},"head"),(0,s.Uk)(">")]),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s.Wm)("span",{class:"hljs-name"},"body"),(0,s.Uk)(">")]),(0,s.Uk)(`
  `),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("<"),(0,s.Wm)("span",{class:"hljs-name"},"div"),(0,s.Uk)(),(0,s.Wm)("span",{class:"hljs-attr"},"id"),(0,s.Uk)("="),(0,s.Wm)("span",{class:"hljs-string"},'"app"'),(0,s.Uk)(">")]),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("</"),(0,s.Wm)("span",{class:"hljs-name"},"div"),(0,s.Uk)(">")]),(0,s.Uk)(`
  `),(0,s.Wm)("span",{class:"hljs-comment"},"<!-- built files will be auto injected -->"),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-tag"},[(0,s.Uk)("</"),(0,s.Wm)("span",{class:"hljs-name"},"body"),(0,s.Uk)(">")]),(0,s.Uk)(`
`)])],-1),r=(0,s.Wm)("h3",null,"Create your own SASS Theme",-1),i=(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,[(0,s.Uk)("Material Components styles come as highly themable SASS framework. In order to be able to theme properly and avoid any duplicate/ordering style issues in the bundle, we recommend managing styles globally. refer to the "),(0,s.Wm)("a",{href:"https://material.io/components/web/docs/theming/"},"MDC Theming Guide"),(0,s.Uk)(" for more.")])],-1),c=(0,s.Wm)("p",null,"Install Material Components SASS as a dependency.",-1),p=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-bash"},`npm install material-components-web --save
`)],-1),d=(0,s.Wm)("p",null,"Configure Webpack with sass-loader and make sure sass modules can be resolved.",-1),h=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-javascript"},[(0,s.Wm)("span",{class:"hljs-comment"},"// sass loader config"),(0,s.Uk)(`
  {
    `),(0,s.Wm)("span",{class:"hljs-attr"},"loader"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-string"},"'sass-loader'"),(0,s.Uk)(`,
    `),(0,s.Wm)("span",{class:"hljs-attr"},"options"),(0,s.Uk)(`: {
      `),(0,s.Wm)("span",{class:"hljs-attr"},"sourceMap"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-literal"},"false"),(0,s.Uk)(`,
      `),(0,s.Wm)("span",{class:"hljs-attr"},"includePaths"),(0,s.Uk)(": [path.resolve(__dirname,"),(0,s.Wm)("span",{class:"hljs-string"},"'node_modules'"),(0,s.Uk)(`)],
    },
  },
`)])],-1),u=(0,s.Wm)("h3",null,"Building from Sources",-1),k=(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,"You may want to optimize your build and leverage the source distribution.")],-1),W=(0,s.Wm)("h4",null,"Make sure @material imports are transpiled",-1),j=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-javascript"},[(0,s.Wm)("span",{class:"hljs-comment"},"// babel loader config"),(0,s.Uk)(`
  {
    `),(0,s.Wm)("span",{class:"hljs-attr"},"test"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-regexp"},"/\\.js$/"),(0,s.Uk)(`,
    `),(0,s.Wm)("span",{class:"hljs-attr"},"loader"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-string"},"'babel-loader'"),(0,s.Uk)(`,
    `),(0,s.Wm)("span",{class:"hljs-attr"},"include"),(0,s.Uk)(`: [
      path.resolve(__dirname, `),(0,s.Wm)("span",{class:"hljs-string"},"'node_modules/@material'"),(0,s.Uk)(`)
    ]
  }
`)])],-1),U=(0,s.Wm)("h4",null,"Make sure sass modules can be imported",-1),g=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-javascript"},[(0,s.Wm)("span",{class:"hljs-comment"},"// sass loader config"),(0,s.Uk)(`
  {
    `),(0,s.Wm)("span",{class:"hljs-attr"},"loader"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-string"},"'sass-loader'"),(0,s.Uk)(`,
    `),(0,s.Wm)("span",{class:"hljs-attr"},"options"),(0,s.Uk)(`: {
      `),(0,s.Wm)("span",{class:"hljs-attr"},"includePaths"),(0,s.Uk)(": [path.resolve(__dirname,"),(0,s.Wm)("span",{class:"hljs-string"},"'node_modules'"),(0,s.Uk)(`)],
    },
  },
`)])],-1),b=(0,s.Wm)("h4",null,"Full build",-1),v=(0,s.Wm)("p",null,[(0,s.Uk)("See "),(0,s.Wm)("code",null,"basic-webpack"),(0,s.Uk)(" project "),(0,s.Wm)("a",{href:"https://github.com/pgbross/vue-material-adapter/tree/master/examples"},"examples"),(0,s.Uk)(".")],-1),f=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-scss"},[(0,s.Wm)("span",{class:"hljs-comment"},"/* theme.scss */"),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-variable"},"$mdc-theme-primary"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-number"},"#212121"),(0,s.Uk)(`;
`),(0,s.Wm)("span",{class:"hljs-variable"},"$mdc-theme-accent"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-number"},"#41b883"),(0,s.Uk)(`;
`),(0,s.Wm)("span",{class:"hljs-variable"},"$mdc-theme-background"),(0,s.Uk)(": "),(0,s.Wm)("span",{class:"hljs-number"},"#fff"),(0,s.Uk)(`;

@import 'vue-material-adapter/index`),(0,s.Wm)("span",{class:"hljs-selector-class"},".scss"),(0,s.Uk)(`';
`)])],-1),_=(0,s.Wm)("pre",null,[(0,s.Wm)("code",{"v-pre":"",class:"language-javascript"},[(0,s.Wm)("span",{class:"hljs-comment"},"// main.js"),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-keyword"},"import"),(0,s.Uk)(),(0,s.Wm)("span",{class:"hljs-string"},"`./theme.scss`"),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-keyword"},"import"),(0,s.Uk)(" Vue "),(0,s.Wm)("span",{class:"hljs-keyword"},"from"),(0,s.Uk)(),(0,s.Wm)("span",{class:"hljs-string"},"'vue'"),(0,s.Uk)(`
`),(0,s.Wm)("span",{class:"hljs-keyword"},"import"),(0,s.Uk)(" VueMaterialAdapter "),(0,s.Wm)("span",{class:"hljs-keyword"},"from"),(0,s.Uk)(),(0,s.Wm)("span",{class:"hljs-string"},"'vue-material-adapter'"),(0,s.Uk)(`
Vue.use(VueMaterialAdapter)
`)])],-1);function y(M,x){return(0,s.wg)(),(0,s.j4)("article",null,[l,n,o,m,r,i,c,p,d,h,u,k,W,j,U,g,b,v,f,_])}const t={};t.render=y;var S=t}}]);

//# sourceMappingURL=4868.283bacc89d8489b42d70.js.map