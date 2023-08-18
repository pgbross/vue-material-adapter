import{d as e,o,c as n,a as c}from"./index-0afa1053.js";const d={class:"markdown-body"},s=c(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-menu-anchor class=&quot;myAnchor&quot;&gt;
  &lt;mcw-button raised @click=&quot;open = true&quot;&gt;Open Menu&lt;/mcw-button&gt;
  &lt;mcw-menu v-model=&quot;open&quot; @select=&quot;onSelect&quot;&gt;
    &lt;mcw-list-item&gt;A Menu Item&lt;/mcw-list-item&gt;
    &lt;mcw-list-item&gt;Another Menu Item&lt;/mcw-list-item&gt;
    &lt;li role=&quot;separator&quot; class=&quot;mdc-list-divider&quot;&gt;&lt;/li&gt;
    &lt;mcw-list-item&gt;A Menu Item&lt;/mcw-list-item&gt;
    &lt;mcw-list-item&gt;Parted Menu Item&lt;/mcw-list-item&gt;
  &lt;/mcw-menu&gt;
&lt;/mcw-menu-anchor&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    open: false,
  },
  methods: {
    onSelect(selected) {
      console.log(&#39;selected index: &#39; + selected.index);
    },
    onCancel() {
      console.log(&#39;menu cancelled&#39;);
    },
  },
});
</code></pre><h3><code class="">mcw-menu</code></h3><h4>Props</h4><table><thead><tr><th>props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>v-model</td><td>Boolean or Object</td><td>false</td><td>optional v-model when true opens menu</td></tr><tr><td><code class="">quick-open</code></td><td>Boolean</td><td>false</td><td>Whether the menu should open and close without animation</td></tr><tr><td><code class="">anchor-corner</code></td><td>Number</td><td></td><td>set anchor corner alignment of menu corner</td></tr><tr><td><code class="">anchor-margin</code></td><td>Object</td><td></td><td>set anchor margin of menu (top, right, bottom, left)</td></tr><tr><td><code class="">fixed</code></td><td>Boolean</td><td>false</td><td>use fixed positioning</td></tr><tr><td><code class="">absolute-position</code></td><td>Array</td><td></td><td>use absolutely positioning , [x,y]</td></tr><tr><td><code class="">type-ahead</code></td><td>Boolean</td><td>false</td><td>use type ahead functionality</td></tr><tr><td><code class="">single-selection</code></td><td>Boolean</td><td>false</td><td>Turn on underlying list single selection mode</td></tr><tr><td><code class="">default-focus-state</code></td><td>String</td><td>‘LIST_ROOT’</td><td>where the menu should focus when opened</td></tr></tbody></table><blockquote><p>if open is an object it should set {focusIndex: number} as per <a href="https://github.com/material-components/material-components-web/tree/master/packages/mcw-menu">MDC menu docs</a></p></blockquote><blockquote><p>for anchor corner and margin see the <a href="https://github.com/material-components/material-components-web/tree/master/packages/mcw-menu#MDCMenu">MDC docs</a></p></blockquote><h3>Selection Group Menu</h3><p>Menus can contain a group of list items that can represent the selection state of elements within the group.</p><pre><code class="language-html">&lt;mcw-menu-anchor class=&quot;myAnchor&quot;&gt;
  &lt;mcw-button raised @click=&quot;openGroup = true&quot;&gt;Group Menu&lt;/mcw-button&gt;
  &lt;mcw-menu v-model=&quot;openGroup&quot; @select=&quot;onSelect&quot;&gt;
    &lt;li&gt;
      &lt;ul class=&quot;mdc-menu__selection-group&quot;&gt;
        &lt;mcw-list-item group-icon=&quot;check&quot;&gt;Single&lt;/mcw-list-item&gt;
        &lt;mcw-list-item group-icon=&quot;check&quot;&gt;1.15&lt;/mcw-list-item&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li class=&quot;mdc-list-divider&quot; role=&quot;separator&quot;&gt;&lt;/li&gt;
    &lt;mcw-list-item&gt;Add space before paragraph&lt;/mcw-list-item&gt;
  &lt;/mcw-menu&gt;
&lt;/mcw-menu-anchor&gt;
</code></pre><h3>Events</h3><table><thead><tr><th>props</th><th>arg</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@update:modelValue</code></td><td>Boolean</td><td>notify that menu open state has changed.</td></tr><tr><td><code class="">@select</code></td><td><code class="">{ index, item }</code></td><td>emitted when a menu item is selected</td></tr></tbody></table><h3>Methods</h3><ul><li><p><code class="">show({focusIndex: number} = {}) =&gt; void</code><br> Shows the menu. Takes an options object containing a <code class="">focusIndex</code> property that specifies the index of the menu item to be focused. If the options object or <code class="">focusIndex</code> is omitted, no menu item will be focused.</p></li><li><p><code class="">hide() =&gt; void</code><br> Closes the menu.</p></li></ul><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu">https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu</a></li></ul>`,17),l=[s],u={},h="",p=e({__name:"README",setup(a,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,i)=>(o(),n("div",d,l))}});export{p as default,h as excerpt,u as frontmatter};
