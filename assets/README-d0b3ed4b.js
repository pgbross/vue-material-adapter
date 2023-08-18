import{d as e,o as d,c,a}from"./index-29ad663a.js";const o={class:"markdown-body"},s=a(`<h2>Usage</h2><p>The switch component is rendered as an input with checkbox type</p><pre><code class="language-html">&lt;mcw-switch v-model=&quot;checked&quot; :label=&quot;label&quot; /&gt;
&lt;mcw-switch v-model=&quot;checked&quot;&gt;{{label}}&lt;/mcw-switch&gt;
&lt;mcw-switch disabled label=&quot;Disabled&quot; /&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    label: &#39;This is a switch&#39;,
    checked: true,
  },
});
</code></pre><h3>Props</h3><table><thead><tr><th>props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>v-model</td><td>Boolean</td><td></td><td>whether the checkbox is checked, bind with <code class="">v-model</code></td></tr><tr><td><code class="">disabled</code></td><td>Boolean</td><td>false</td><td>whether the checkbox is disabled</td></tr><tr><td><code class="">label</code></td><td>String</td><td></td><td>checkbox label</td></tr><tr><td><code class="">align-end</code></td><td>Boolean</td><td>false</td><td>align the checkbox after the label</td></tr><tr><td><code class="">value</code></td><td>String</td><td></td><td>input control value</td></tr><tr><td><code class="">name</code></td><td>String</td><td></td><td>input name</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@update:modelValue</code></td><td>-</td><td>On checked status change</td></tr></tbody></table><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch">https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch</a></li></ul>`,10),l=[s],m={},p="",b=e({__name:"README",setup(h,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,n)=>(d(),c("div",o,l))}});export{b as default,p as excerpt,m as frontmatter};
