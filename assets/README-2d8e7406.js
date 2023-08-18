import{d as o,o as e,c as n,a as d}from"./index-0afa1053.js";const i={class:"markdown-body"},a=d(`<h2>Usage</h2><pre><code class="language-html">&lt;div class=&quot;tooltip-demo&quot;&gt;
  &lt;mcw-tooltip id=&quot;tooltip-id&quot;&gt;My tooltip 1&lt;/mcw-tooltip&gt;
  &lt;mcw-tooltip id=&quot;tooltip-id2&quot; position=&quot;end,above&quot;
    &gt;Another tooltip 2&lt;/mcw-tooltip
  &gt;
  This is &lt;a aria-describedby=&quot;tooltip-id&quot; href=&quot;www.google.com&quot;&gt; Link &lt;/a&gt;.
  &lt;p&gt;
    Here is
    &lt;mcw-button aria-describedby=&quot;tooltip-id2&quot; outlined&gt;My Button&lt;/mcw-button&gt;
  &lt;/p&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {},
  methods: {
    onHidden() {
      console.dir(&#39;hidden&#39;);
    },
  },
});
</code></pre><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td>mdctooltip:hidden</td><td></td><td>Emitted when the tooltip stops being shown</td></tr></tbody></table><h3>props</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>position</td><td>String/Object</td><td></td><td>The position of the tooltop</td></tr><tr><td>boundaryType</td><td>String/Number</td><td></td><td>The anchor boundary type</td></tr></tbody></table><p><code class="">position</code>: This is either a comma separated string or an object {xPos: XPosition, yPos: YPosition} eg. “end,above” or {xPos:“center”, yPos:“below”} or {xPos: 0, yPos: 1}</p><p>XPosition { ‘detected’ = 0, ‘start’ = 1, ‘center’ = 2, ‘end’ = 3, }</p><p>YPosition { ‘detected’ = 0, ‘above’ = 1, ‘below’ = 2, }</p><p><code class="">boundaryType</code>: This is either a string or a number. eg. “bounded” or 0</p><p>AnchorBoundaryType { ‘bounded’ = 0, ‘unbounded’ = 1, }</p><h3>Theming and Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-tooltip">https://github.com/material-components/material-components-web/tree/master/packages/mdc-tooltip</a></li></ul>`,14),r=[a],h={},m="",u=o({__name:"README",setup(s,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,c)=>(e(),n("div",i,r))}});export{u as default,m as excerpt,h as frontmatter};
