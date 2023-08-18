import{d as e,o,c as d,a as r}from"./index-29ad663a.js";const a={class:"markdown-body"},l=r(`<h2>Usage</h2><p>The <code class="">mcw-drawer</code> component implements permanent, persistent, and temporary drawers. By default the drawer component is responsive and will switch from temporary to persistent design according to viewport width.</p><pre><code class="language-html">&lt;mcw-drawer
  ref=&quot;drawer&quot;
  v-model=&quot;open&quot;
  modal
  class=&quot;primary-drawer&quot;
  toolbar-spacer
&gt;
  &lt;template #header&gt;
    &lt;div class=&quot;mdc-drawer__header&quot;&gt;&lt;/div&gt;
  &lt;/template&gt;

  &lt;mcw-list-item to=&quot;/&quot; tabindex=&quot;0&quot;&gt;Home&lt;/mcw-list-item&gt;
  &lt;mcw-list-item to=&quot;/docs/getting-started&quot;&gt;Getting Started&lt;/mcw-list-item&gt;

  &lt;hr class=&quot;mdc-list-divider&quot; /&gt;

  &lt;mcw-list-item v-for=&quot;link in links&quot; :key=&quot;link.id&quot; :to=&quot;link.to&quot;
    &gt;{{ link.name }}&lt;/mcw-list-item
  &gt;
&lt;/mcw-drawer&gt;
</code></pre><h3>Drawer</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">modal</code></td><td>Boolean</td><td></td><td>Make drawer modal</td></tr><tr><td><code class="">open</code></td><td>Boolean</td><td>false</td><td>optional v-model when true opens drawer</td></tr><tr><td><code class="">toolbar-spacer</code></td><td>Boolean</td><td>undefined</td><td>add a toolbar spacer</td></tr></tbody></table><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@update:modelValue</code></td><td>Boolean</td><td>notify v-model/listeners that drawer state has changed.</td></tr><tr><td><code class="">@mdc-drawer:opened</code></td><td></td><td>on drawer opened</td></tr><tr><td><code class="">@mdc-drawer:closed</code></td><td></td><td>on drawer closed</td></tr><tr><td><code class="">@open</code></td><td></td><td>on drawer open</td></tr><tr><td><code class="">@close</code></td><td></td><td>on drawer close</td></tr></tbody></table><blockquote><p><em>(*)</em> Requires <a href="https://router.vuejs.org">vue-router</a> If the <code class="">to</code> property is defined, the item behaves as a <a href="https://router.vuejs.org/en/api/router-link.html">router-link</a></p></blockquote><h3>Item usage</h3><ul><li>A simple link</li></ul><pre><code class="language-html">&lt;mcw-list-item href=&quot;#&quot;&gt;Inbox&lt;/mcw-list-item&gt;
</code></pre><p>or with vue-router</p><pre><code class="language-html">&lt;mcw-list-item to=&quot;/path&quot;&gt;Inbox&lt;/mcw-list-item&gt;
&lt;mcw-list-item :to=&quot;folder&quot; append&gt;Inbox&lt;/mcw-list-item&gt;
</code></pre><blockquote><p>Customize the active links style with vue-router active or exact-active classes:</p></blockquote><pre><code class="language-css">.mcw-list-item.router-link-exact-active {
  color: red;
}
</code></pre><ul><li>Trigger an event</li></ul><pre><code class="language-html">&lt;mcw-list-item event=&quot;my-event&quot;&gt;Inbox&lt;/mcw-list-item&gt;
</code></pre><ul><li>Click handler</li></ul><pre><code class="language-html">&lt;mcw-list-item @click=&quot;handler&quot;&gt;Inbox&lt;/mcw-list-item&gt;
</code></pre><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer">https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer</a></li></ul>`,20),c=[l],u={},p="",h=e({__name:"README",setup(s,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,i)=>(o(),d("div",a,c))}});export{h as default,p as excerpt,u as frontmatter};
