import{d as t,o as a,c as o,a as s}from"./index-0afa1053.js";const n={class:"markdown-body"},r=s(`<p>This Guide assumes you are familiar with <a href="https://vuejs.org/v2/guide/index.html">Vue.js</a> components and plugin system.<br><code class="">Vue.js</code> 3 or greater is required as peer dependencies.</p><blockquote><p>Note: Applications must install <code class="">Vue.use(VueCompositionApi)</code> but have no requirement to use the composition style of programming. Material Components Web are not bundled and need to be installed.<br> Material Icons and Fonts are not bundled and need to be fetched.</p></blockquote><h2>Quick Start</h2><h4>Examples</h4><p>There are examples of using <code class="">vue-material-adapter</code> both as a <code class="">basic-vue-cli</code> and a <code class="">basic-webpack</code> project <a href="https://github.com/pgbross/vue-material-adapter/tree/master/examples">examples</a>.</p><h4>Playground</h4><p>See demo in the source distribution for examples of how vue-material-adapter can be used.</p><h2>Getting Serious</h2><p>The distribution comes in a tree-shakeable ES (ESM) as well as the older AMD/CJS variants.</p><h4>Standalone plugin</h4><table><thead><tr><th>distribution</th><th>env</th><th>description</th></tr></thead><tbody><tr><td>dist/vue-material-adapter.amd.min.js</td><td>production</td><td>minified plugin (AMD)</td></tr><tr><td>dist/vue-material-adapter.cjs.min.js</td><td>production</td><td>minified plugin (CommonJS)</td></tr><tr><td>dist/vue-material-adapter.esm.js</td><td>production</td><td>tree shakeable ES(ESM)</td></tr></tbody></table><h2>Webpack/Rollup</h2><h3>ESM Distribution</h3><blockquote><p>The following guide assumes you have a valid Vue.js/Webpack config. refer to <a href="https://github.com/vuejs-templates/webpack">vuejs-templates/webpack</a> for more info.</p></blockquote><table><thead><tr><th>module</th><th>type</th></tr></thead><tbody><tr><td>vue-material-adapter.esm.js</td><td>ESM</td></tr></tbody></table><h4>Install vue, @vue/composition-api, vue-material-adapter (and eventually vue-router).</h4><pre><code class="language-bash">npm install vue
npm install @vue/composition-api
npm install vue-router # optional
npm install vue-material-adapter
</code></pre><h4>Add Reset and Material Dependencies to HTML template</h4><pre><code class="language-html">&lt;!-- index.html template --&gt;
&lt;head&gt;
  &lt;!-- import reset material icons, fonts and vue-material-adapter stylesheets --&gt;
  &lt;link
    rel=&quot;stylesheet&quot;
    href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons&quot;
  /&gt;
  &lt;link
    rel=&quot;stylesheet&quot;
    href=&quot;https://fonts.googleapis.com/css?family=Roboto:300,400,500&quot;
  /&gt;
  &lt;link
    rel=&quot;stylesheet&quot;
    href=&quot;https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500&quot;
  /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
  &lt;!-- built files will be auto injected --&gt;
&lt;/body&gt;
</code></pre><h3>Create your own SASS Theme</h3><blockquote><p>Material Components styles come as highly themable SASS framework. In order to be able to theme properly and avoid any duplicate/ordering style issues in the bundle, we recommend managing styles globally. refer to the <a href="https://material.io/components/web/docs/theming/">MDC Theming Guide</a> for more.</p></blockquote><p>Install Material Components SASS as a dependency.</p><pre><code class="language-bash">npm install material-components-web --save
</code></pre><p>Configure Webpack with sass-loader and make sure sass modules can be resolved.</p><pre><code class="language-javascript">// sass loader config
  {
    loader: &#39;sass-loader&#39;,
    options: {
      sourceMap: false,
      includePaths: [path.resolve(__dirname,&#39;node_modules&#39;)],
    },
  },
</code></pre><h3>Building from Sources</h3><blockquote><p>You may want to optimize your build and leverage the source distribution.</p></blockquote><h4>Make sure @material imports are transpiled</h4><pre><code class="language-javascript">// babel loader config
  {
    test: /\\.js$/,
    loader: &#39;babel-loader&#39;,
    include: [
      path.resolve(__dirname, &#39;node_modules/@material&#39;)
    ]
  }
</code></pre><h4>Make sure sass modules can be imported</h4><pre><code class="language-javascript">// sass loader config
  {
    loader: &#39;sass-loader&#39;,
    options: {
      includePaths: [path.resolve(__dirname,&#39;node_modules&#39;)],
    },
  },
</code></pre><h4>Full build</h4><p>See <code class="">basic-webpack</code> project <a href="https://github.com/pgbross/vue-material-adapter/tree/master/examples">examples</a>.</p><pre><code class="language-scss">/* theme.scss */
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41b883;
$mdc-theme-background: #fff;

@import &#39;vue-material-adapter/index.scss&#39;;
</code></pre><pre><code class="language-javascript">// main.js
import \`./theme.scss\`
import Vue from &#39;vue&#39;
import VueMaterialAdapter from &#39;vue-material-adapter&#39;
Vue.use(VueMaterialAdapter)
</code></pre>`,35),l=[r],u={},m="",h=t({__name:"getting-started",setup(d,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(i,p)=>(a(),o("div",n,l))}});export{h as default,m as excerpt,u as frontmatter};
