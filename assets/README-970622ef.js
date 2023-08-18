import{d as e,o,c,a as i}from"./index-29ad663a.js";const a={class:"markdown-body"},l=i(`<h2>Usage</h2><pre><code class="language-html">&lt;!-- material icons --&gt;
&lt;mcw-chip-set&gt;
  &lt;mcw-chip id=&quot;c1&quot; leading-icon=&quot;favorite&quot; presentational&gt;Chip One &lt;/mcw-chip&gt;
  &lt;mcw-chip id=&quot;c2&quot; trailing-icon=&quot;clear_all&quot;&gt;Chip Two &lt;/mcw-chip&gt;

  &lt;mcw-chip id=&quot;c3&quot; disabled trailing-icon=&quot;clear_all&quot;&gt;Chip Three &lt;/mcw-chip&gt;
&lt;/mcw-chip-set&gt;
&lt;br /&gt;

&lt;mcw-chip-set&gt;
  &lt;mcw-chip-set role=&quot;listbox&quot; ref=&quot;filters&quot;&gt;
    &lt;mcw-chip id=&quot;jane-chip&quot; leading-icon=&quot;face&quot; trailing-icon=&quot;clear&quot;
      &gt;Jane Smith&lt;/mcw-chip
    &gt;
    &lt;mcw-chip id=&quot;john-chip&quot; trailing-icon=&quot;clear&quot;&gt;John Doe&lt;/mcw-chip&gt;
  &lt;/mcw-chip-set&gt;
&lt;/mcw-chip-set&gt;
</code></pre><h3>Props</h3><h4><code class="">mcw-chip-set</code></h4><p><code class="">mcw-chip-set</code> allows a user to enter information or select a choice.</p><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">multi-selectable</code></td><td>Boolean</td><td>false</td><td>If true behaviour is multi-selectable</td></tr><tr><td><code class="">orientation</code></td><td>String</td><td>horizontal</td><td>horizontal or vertical</td></tr><tr><td><code class="">overflow</code></td><td>Boolean</td><td>false</td><td>Causes chips to overflow instead of wrap</td></tr><tr><td><code class="">role</code></td><td>String</td><td>grid</td><td>grid if input or action, listbox if filter chips</td></tr></tbody></table><h4><code class="">mcw-chip</code></h4><p><code class="">mcw-chip</code> allows a user to enter information or select a choice.</p><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">leadingIcon</code></td><td>String</td><td>optional</td><td>optional leading icon</td></tr><tr><td><code class="">trailingIcon</code></td><td>String</td><td>optional</td><td>Optional. Indicates a trailing icon which, removes</td></tr><tr><td></td><td></td><td></td><td>the chip from the DOM. Only use with input chips.</td></tr><tr><td><code class="">shouldRemoveOnTrailingIconClick</code></td><td>Boolean</td><td>true</td><td>If true, trailing icon interaction removes chip</td></tr><tr><td><code class="">avatar</code></td><td>Boolean</td><td>false</td><td>If true space for avatar</td></tr></tbody></table><blockquote><p>Note: Events emitted by <code class="">material-components-web</code> on <code class="">mcw-chip</code> interaction appear as native events.</p></blockquote><h3>Chips</h3><pre><code class="language-html">&lt;mcw-chip-set&gt;
  &lt;mcw-chip id=&quot;c1&quot; leading-icon=&quot;favorite&quot; presentational&gt;Chip One &lt;/mcw-chip&gt;
  &lt;mcw-chip id=&quot;c2&quot; trailing-icon=&quot;clear_all&quot;&gt;Chip Two &lt;/mcw-chip&gt;

  &lt;mcw-chip id=&quot;c3&quot; disabled trailing-icon=&quot;clear_all&quot;&gt;Chip Three &lt;/mcw-chip&gt;
&lt;/mcw-chip-set&gt;
</code></pre><pre><code class="language-html">&lt;section class=&quot;mcw-demo&quot;&gt;
  &lt;div class=&quot;mdc-typography--headline6&quot;&gt;Filter Chips&lt;/div&gt;
  &lt;mcw-chip-set role=&quot;listbox&quot; ref=&quot;filters&quot;&gt;
    &lt;mcw-chip id=&quot;jane-chip&quot; leading-icon=&quot;face&quot; trailing-icon=&quot;clear&quot;
      &gt;Jane Smith&lt;/mcw-chip
    &gt;
    &lt;mcw-chip id=&quot;john-chip&quot; trailing-icon=&quot;clear&quot;&gt;John Doe&lt;/mcw-chip&gt;
  &lt;/mcw-chip-set&gt;
&lt;/section&gt;
</code></pre><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips">https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips</a></li></ul>`,15),d=[l],p={},u="",m=e({__name:"README",setup(n,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,s)=>(o(),c("div",a,d))}});export{m as default,u as excerpt,p as frontmatter};
