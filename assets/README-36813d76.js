import{d as e,o as d,c,a as o}from"./index-0afa1053.js";const a={class:"markdown-body"},n=o(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-checkbox v-model=&quot;checked&quot; :label=&quot;checked ? &#39;Checked&#39; : &#39;Unchecked&#39;&quot; /&gt;
&lt;mcw-checkbox
  v-model=&quot;checked&quot;
  :disabled=&quot;disabled&quot;
  v-model:indeterminate=&quot;indeterminate&quot;
  :label=&quot;checked ? &#39;Checked&#39; : &#39;Unchecked&#39;&quot;
/&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    checked: true,
  },
});
</code></pre><h3>Indeterminate checkbox</h3><pre><code class="language-html">&lt;mcw-checkbox
  :label=&quot;label&quot;
  v-model=&quot;checked&quot;
  v-model:indeterminate=&quot;indeterminate&quot;
/&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    label: &#39;This is a checkbox&#39;,
    checked: false,
    indeterminate: true,
  },
});
</code></pre><h3>Custom label markup</h3><pre><code class="language-html">&lt;mcw-checkbox v-model=&quot;agreed&quot;&gt;
  &lt;span&gt;I agree with &lt;/span&gt;
  &lt;a @click.stop href=&quot;...&quot;&gt;Terms of Serivce&lt;/a&gt;
&lt;/mcw-checkbox&gt;
</code></pre><h3>props</h3><table><thead><tr><th>props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">indeterminate</code></td><td>Boolean</td><td></td><td>checkbox’s indeterminate state (v-model:indeterminate)</td></tr><tr><td><code class="">disabled</code></td><td>Boolean</td><td></td><td>whether the checkbox is disabled</td></tr><tr><td><code class="">label</code></td><td>String</td><td></td><td>checkbox label (or use default slot)</td></tr><tr><td><code class="">align-end</code></td><td>Boolean</td><td></td><td>whether to align the checkbox after the label</td></tr><tr><td><code class="">value</code></td><td>String</td><td><code class="">&#39;on&#39;</code></td><td>checkbox value</td></tr><tr><td><code class="">name</code></td><td>String</td><td></td><td>input name</td></tr></tbody></table><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">mdc-checkbox:change</code></td><td>event</td><td>native change event</td></tr><tr><td><code class="">@change</code></td><td>boolean</td><td>checked state</td></tr><tr><td><code class="">@focus</code></td><td>-</td><td>emitted on focus gained</td></tr><tr><td><code class="">@blur</code></td><td>-</td><td>emitted on focus lost</td></tr></tbody></table><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox">https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox</a></li></ul>`,14),r=[n],m={},u="",b=e({__name:"README",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(s,h)=>(d(),c("div",a,r))}});export{b as default,u as excerpt,m as frontmatter};
