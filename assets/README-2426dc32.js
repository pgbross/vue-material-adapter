import{d as e,o as d,c as o,a}from"./index-0afa1053.js";const c={class:"markdown-body"},s=a(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-radio
  id=&quot;dog&quot;
  v-model=&quot;picked&quot;
  radio-classes=&quot;my-radio&quot;
  label=&quot;Dog&quot;
  name=&quot;pets&quot;
  value=&quot;dog&quot;
&gt;&lt;/mcw-radio&gt;
&lt;mcw-radio
  id=&quot;cat&quot;
  v-model=&quot;picked&quot;
  label=&quot;Cat&quot;
  name=&quot;pets&quot;
  value=&quot;cat&quot;
&gt;&lt;/mcw-radio&gt;

&lt;p&gt;Answer: {{ picked }}&lt;/p&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    picked: dog,
  },
});
</code></pre><blockquote><p>NOTE: If a label property is specified, the <code class="">.mcw-radio</code> element and the associated label are wrapped around an <code class="">.mcw-form-field</code> element for styling.</p></blockquote><h3>mcw-radio props</h3><table><thead><tr><th>Prop Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code class="">id</code></td><td>String</td><td>(required) The html id of the input element</td></tr><tr><td><code class="">name</code></td><td>String</td><td>(required) The name of the html input element</td></tr><tr><td><code class="">checked</code></td><td>Boolean</td><td>Default <code class="">false</code>. When true will switch radio to the checked state.</td></tr><tr><td><code class="">value</code></td><td>String</td><td>The associated value with the radio element.</td></tr><tr><td><code class="">picked</code></td><td>String</td><td>Tracks the selected value (v-model)</td></tr><tr><td><code class="">disabled</code></td><td>Boolean</td><td>Default <code class="">false</code>. When true will disable the radio element.</td></tr><tr><td><code class="">radioClasses</code></td><td>String</td><td>Classes to be applied to the <code class="">.mcw-radio</code> element.</td></tr><tr><td><code class="">label</code></td><td>String</td><td>Optional, Label associated with radio input control.</td></tr></tbody></table><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio">https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio</a></li></ul>`,8),r=[s],p={},u="",h=e({__name:"README",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,i)=>(d(),o("div",c,r))}});export{h as default,u as excerpt,p as frontmatter};
