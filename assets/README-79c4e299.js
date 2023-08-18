import{d as o,o as e,c as l,a as d}from"./index-29ad663a.js";const c={class:"markdown-body"},a=d(`<h2>Usage</h2><h3>Grid</h3><p>Material design’s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.</p><pre><code class="language-html">&lt;mcw-layout-grid class=&quot;my-grid&quot;&gt;
  &lt;mcw-layout-cell class=&quot;cell cell1&quot; desktop=&quot;3&quot; tablet=&quot;3&quot; /&gt;
  &lt;mcw-layout-cell class=&quot;cell cell2&quot; desktop=&quot;3&quot; tablet=&quot;5&quot; align=&quot;top&quot;&gt;
    &lt;div class=&quot;mdc-typeography--body1&quot;&gt;align=&quot;top&quot;&lt;/div&gt;
  &lt;/mcw-layout-cell&gt;
  &lt;mcw-layout-cell class=&quot;cell cell3&quot; desktop=&quot;3&quot; tablet=&quot;5&quot; align=&quot;middle&quot;&gt;
    &lt;div class=&quot;mdc-typeography--body1&quot;&gt;align=&quot;middle&quot;&lt;/div&gt;
  &lt;/mcw-layout-cell&gt;
  &lt;mcw-layout-cell class=&quot;cell cell4&quot; desktop=&quot;3&quot; tablet=&quot;3&quot; align=&quot;bottom&quot;&gt;
    &lt;div class=&quot;mdc-typeography--body1&quot;&gt;align=&quot;bottom&quot;&lt;/div&gt;
  &lt;/mcw-layout-cell&gt;
&lt;/mcw-layout-grid&gt;
</code></pre><p>Grid can define its own max-width or designate its columns to be a certain width.</p><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">fixed-column-width</code></td><td>Boolean</td><td></td><td>The grid should have fixed column width</td></tr><tr><td><code class="">align-left</code></td><td>Boolean</td><td></td><td>Left aligned</td></tr><tr><td><code class="">align-right</code></td><td>Boolean</td><td></td><td>Right aligned</td></tr></tbody></table><h3>Cells</h3><p>Cells specify how many columns to span (the default is 4). Cells are placed side by side until there is no more room, at which point the next cell is placed at the beginning of the next row.</p><pre><code class="language-html">&lt;mcw-layout-grid&gt;
  &lt;mcw-layout-cell desktop=&quot;3&quot; tablet=&quot;3&quot;&gt;
    Cell
  &lt;/mcw-layout-cell&gt;
  &lt;mcw-layout-cell desktop=&quot;3&quot; tablet=&quot;5&quot; align=&quot;top&quot;&gt;
    Top
  &lt;/mcw-layout-cell&gt;
  &lt;mcw-layout-cell desktop=&quot;3&quot; tablet=&quot;5&quot; align=&quot;middle&quot;&gt;
    Middle
  &lt;/mcw-layout-cell&gt;
  &lt;mcw-layout-cell desktop=&quot;3&quot; tablet=&quot;3&quot; align=&quot;bottom&quot;&gt;
    Bottom
  &lt;/mcw-layout-cell&gt;
&lt;/mcw-layout-grid&gt;
</code></pre><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">span</code></td><td>Number</td><td>4</td><td>how many columns to span from 1 to 12</td></tr><tr><td><code class="">phone</code></td><td>Number</td><td>4</td><td>how many columns to span in phone mode</td></tr><tr><td><code class="">tablet</code></td><td>Number</td><td>4</td><td>how many columns to span in tablet mode</td></tr><tr><td><code class="">desktop</code></td><td>Number</td><td>4</td><td>how many columns to span in desktop mode</td></tr><tr><td><code class="">align</code></td><td>String</td><td></td><td>whether cell content is aligned to the <code class="">top</code>, <code class="">bottom</code> or <code class="">middle</code></td></tr><tr><td><code class="">order</code></td><td>Number</td><td></td><td>cell order from 1 to 12</td></tr></tbody></table><h3>Nesting</h3><p>When your contents need extra structure that cannot be supported by single layout grid, you can nest layout grid within each other with <code class="">mcw-layout-inner-grid</code></p><pre><code class="language-html">&lt;mcw-layout-grid&gt;
  &lt;mcw-layout-cell&gt;
    &lt;mcw-layout-inner-grid&gt;
      &lt;mcw-layout-cell&gt;
        &lt;p&gt;Second Level&lt;/p&gt;
      &lt;/mcw-layout-cell&gt;
      &lt;mcw-layout-cell&gt;
        &lt;p&gt;Second Level&lt;/p&gt;
      &lt;/mcw-layout-cell&gt;
    &lt;/mcw-layout-inner-grid&gt;
  &lt;/mcw-layout-cell&gt;
  &lt;mcw-layout-cell&gt;
    &lt;p&gt;First Level&lt;/p&gt;
  &lt;/mcw-layout-cell&gt;
  &lt;mcw-layout-cell&gt;
    &lt;p&gt;First Level&lt;/p&gt;
  &lt;/mcw-layout-cell&gt;
&lt;/mcw-layout-grid&gt;
</code></pre><h3>Customizing the Grid</h3><p>The max width, fixed column width, margins, gutters and spans can be customized with CSS custom properties:</p><pre><code class="language-css">:root {
  --mcw-layout-grid-column-width-desktop: 84px;
  --mcw-layout-grid-margin-desktop: 40px;
  --mcw-layout-grid-gutter-tablet: 16px;
  --mcw-layout-grid-gutter-phone: 8px;
}
</code></pre><p>or SASS mixins:</p><pre><code class="language-scss">.my-grid {
  @include mcw-layout-grid-inner(desktop, 16px, 16px);
}

.my-cell {
  @include mcw-layout-grid-cell(desktop, 4, 16px);
}
</code></pre><p>see MDC reference documentation for more: <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid">https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid</a></p>`,19),n=[a],m={},g="",p=o({__name:"README",setup(u,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(s,r)=>(e(),l("div",c,n))}});export{p as default,g as excerpt,m as frontmatter};
