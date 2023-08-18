import{d as e,o as d,c as o,a as n}from"./index-29ad663a.js";const s={class:"markdown-body"},l=n(`<h2>Usage</h2><pre><code class="language-html">&lt;div class=&quot;mcw-demo&quot;&gt;
  &lt;div&gt;Single select&lt;/div&gt;
  &lt;mcw-segmented-button v-model=&quot;singleIndex&quot; single-select @change=&quot;onChange&quot;&gt;
    &lt;mcw-segment icon=&quot;favorite&quot; label=&quot;Some text&quot;&gt;&lt;/mcw-segment&gt;
    &lt;mcw-segment label=&quot;Some text&quot;&gt;&lt;/mcw-segment&gt;
    &lt;mcw-segment icon=&quot;delete&quot; :ripple=&quot;false&quot;&gt;&lt;/mcw-segment&gt;
  &lt;/mcw-segmented-button&gt;

  &lt;div&gt;Value: {{ singleIndex }}&lt;/div&gt;

  &lt;div style=&quot;margin-top: 2em&quot;&gt;Multi select&lt;/div&gt;
  &lt;mcw-segmented-button v-model=&quot;multiIndex&quot;&gt;
    &lt;mcw-segment icon=&quot;favorite&quot; label=&quot;Some text&quot;&gt;&lt;/mcw-segment&gt;
    &lt;mcw-segment label=&quot;Some text&quot;&gt;&lt;/mcw-segment&gt;
    &lt;mcw-segment icon=&quot;delete&quot; :ripple=&quot;false&quot;&gt;&lt;/mcw-segment&gt;
  &lt;/mcw-segmented-button&gt;

  &lt;div&gt;Value: {{ multiIndex }}&lt;/div&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data:{
    return { singleIndex: null, multiIndex: [] };
  },
  methods: {
    onChange (detail) {...}
  }
})
</code></pre><h3><code class="">mcw-segmented-button</code></h3><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">change</code></td><td>detail</td><td>Emitted when there is a selection change</td></tr></tbody></table><h3>props</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">modelValue</code></td><td>Number or Array</td><td></td><td>The selected indexes or segmentids</td></tr><tr><td><code class="">single-select</code></td><td>Boolean</td><td>false</td><td>Limits selection to one segment at a time.</td></tr><tr><td><code class="">touch</code></td><td>Boolean</td><td>false</td><td>Set to ensure touch targets are at least 48 x 48 px.</td></tr></tbody></table><h3><code class="">mcw-segment</code></h3><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">select</code></td><td>detail</td><td>Emitted when there is a selection change</td></tr></tbody></table><h3>props</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">icon</code></td><td>String</td><td></td><td>Inserts an icon in the segment.</td></tr><tr><td><code class="">label</code></td><td>String</td><td></td><td>Sets segment text.</td></tr><tr><td><code class="">ripple</code></td><td>Boolean</td><td>true</td><td>Adds ripple effect when a segment is clicked.</td></tr></tbody></table><h3>Theming and Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-segmentedbutton">https://github.com/material-components/material-components-web/tree/master/packages/mdc-segmentedbutton</a></li></ul>`,15),a=[l],g={},h="",u=e({__name:"README",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,m)=>(d(),o("div",s,a))}});export{u as default,h as excerpt,g as frontmatter};
