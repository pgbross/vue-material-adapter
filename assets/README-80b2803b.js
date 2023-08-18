import{d as e,o,c as l,a as d}from"./index-29ad663a.js";const i={class:"markdown-body"},s=d(`<h2>Usage</h2><h3>Basic List</h3><pre><code class="language-html">&lt;div class=&quot;demo-list-example&quot;&gt;
  &lt;h3 class=&quot;mdc-typography--subtitle1&quot;&gt;Single-Line&lt;/h3&gt;
  &lt;mcw-list
    v-model=&quot;selected&quot;
    class=&quot;demo-list&quot;
    @mdclist:action=&quot;onAction&quot;
    role=&quot;listbox&quot;
  &gt;
    &lt;mcw-list-item tabindex=&quot;0&quot; name=&quot;wiffle&quot; id=&quot;id1&quot; start=&quot;icon&quot;&gt;
      &lt;template #start&gt;
        &lt;i class=&quot;material-icons&quot;&gt;home&lt;/i&gt;
      &lt;/template&gt;
      One Single-line item 1
    &lt;/mcw-list-item&gt;

    &lt;li role=&quot;separator&quot; class=&quot;mdc-list-divider&quot;&gt;&lt;/li&gt;

    &lt;mcw-list-item end=&quot;icon&quot;
      &gt;Two Single-line item 2

      &lt;template #tend&gt;
        &lt;i class=&quot;material-icons&quot;&gt;home&lt;/i&gt;
      &lt;/template&gt;
    &lt;/mcw-list-item&gt;
    &lt;mcw-list-item end=&quot;meta&quot;
      &gt;Three Single-line item 3
      &lt;template #end&gt; meta text &lt;/template&gt;&lt;/mcw-list-item
    &gt;

    &lt;mcw-list-item
      &gt;Two-line item
      &lt;template #secondary-text&gt; Other secondary text &lt;/template&gt;
    &lt;/mcw-list-item&gt;
  &lt;/mcw-list&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-javascript">export default {
  methods: {
    onAction({ index }) {
      console.log(index);
    },
  },
};
</code></pre><h3>Props</h3><h4>mcw-list</h4><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">multi-selectable</code></td><td>Boolean</td><td>false</td><td>support multi selection</td></tr><tr><td><code class="">wrap-focus</code></td><td>Boolean</td><td>false</td><td>wrap to top of list on next element</td></tr><tr><td><code class="">textualList</code></td><td>Boolean</td><td>false</td><td>configures lists that start with text</td></tr><tr><td><code class="">modelValue</code></td><td></td><td></td><td>the v-model property</td></tr><tr><td><code class="">vertical</code></td><td>String</td><td>true</td><td>VERTICAL if true, else HORIZONTAL</td></tr><tr><td><code class="">type-ahead</code></td><td>Boolean</td><td>false</td><td>configures the list to use typeahead</td></tr><tr><td><code class="">role</code></td><td>String</td><td></td><td><code class="">listbox</code> or <code class="">menu</code> for interactive, else not-set for non-iteractive</td></tr></tbody></table><h3>List Dividers</h3><pre><code class="language-html">&lt;mcw-list v-model=&quot;selected&quot; class=&quot;demo-list&quot;&gt;
  &lt;mcw-list-item tabindex=&quot;0&quot;&gt;Item 1 - Division 1&lt;/mcw-list-item&gt;
  &lt;mcw-list-item&gt;Item 2 - Division 1&lt;/mcw-list-item&gt;

  &lt;li role=&quot;separator&quot; class=&quot;mdc-list-divider&quot;&gt;&lt;/li&gt;

  &lt;mcw-list-item tabindex=&quot;0&quot;&gt;Item 1 - Division 2&lt;/mcw-list-item&gt;
  &lt;mcw-list-item&gt;Item 2 - Division 2&lt;/mcw-list-item&gt;
&lt;/mcw-list&gt;
</code></pre><h3>mcw-list-item</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">disabled</code></td><td>Boolean</td><td>false</td><td>Set to true to disable item</td></tr><tr><td><code class="">id</code></td><td>String</td><td></td><td>Css id to apply to content element</td></tr><tr><td><code class="">start</code></td><td>String</td><td></td><td>Define start slot type</td></tr><tr><td><code class="">end</code></td><td>String</td><td></td><td>Define end slot type</td></tr></tbody></table><blockquote><p>Start types: ‘avatar | icon | thumbnail | checkbox | radio | switch | image | video’<br> End types: ‘icon | meta | checkbox | radio | switch’</p></blockquote><h3>Radio buttons</h3><pre><code class="language-html">&lt;mcw-list v-model=&quot;selected&quot; class=&quot;demo-list&quot; role=&quot;listbox&quot;&gt;
  &lt;mcw-list-item end=&quot;radio&quot;
    &gt;Dog
    &lt;template #end&gt;
      &lt;mcw-radio
        v-model=&quot;radioSelected&quot;
        id=&quot;dog&quot;
        radio-classes=&quot;my-radio&quot;
        name=&quot;pets&quot;
        value=&quot;dog&quot;
      &gt;&lt;/mcw-radio&gt;
    &lt;/template&gt;
  &lt;/mcw-list-item&gt;

  &lt;mcw-list-item end=&quot;radio&quot;
    &gt;Cat
    &lt;template #end&gt;
      &lt;mcw-radio
        v-model=&quot;radioSelected&quot;
        id=&quot;cat&quot;
        radio-classes=&quot;my-radio&quot;
        name=&quot;pets&quot;
        value=&quot;cat&quot;
      &gt;&lt;/mcw-radio&gt;
    &lt;/template&gt;
  &lt;/mcw-list-item&gt;
&lt;/mcw-list&gt;
</code></pre><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-list">https://github.com/material-components/material-components-web/tree/master/packages/mdc-list</a></li></ul>`,16),n=[s],u={},g="",q=e({__name:"README",setup(a,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,m)=>(o(),l("div",i,n))}});export{q as default,g as excerpt,u as frontmatter};
