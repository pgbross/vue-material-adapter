import{d as e,o,c as a,a as c}from"./index-29ad663a.js";const d={class:"markdown-body"},s=c(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-tab-bar active-tab-index=&quot;1&quot; @update:modelValue=&quot;onSelected&quot;&gt;
  &lt;mcw-tab v-for=&quot;item in filteredItems&quot; :key=&quot;item.label&quot;&gt;{{ item }}&lt;/mcw-tab&gt;
&lt;/mcw-tab-bar&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data() {
    const items = [
      &#39;item one&#39;,
      &#39;item two&#39;,
      &#39;item three&#39;,
      &#39;item four&#39;,
      &#39;item five&#39;,
      &#39;item six&#39;,
      &#39;item seven&#39;,
    ];
    return {
      selectedItem: items[0],
      items,
    };
  },
  computed: {
    filteredItems() {
      return this.items.slice(0, 3);
    },
  },
  methods: {
    onSelected(idx) {
      this.selectedItem = this.items[idx];
    },
  },
  },
});
</code></pre><h3><code class="">mcw-tab-bar</code></h3><h4>Props</h4><p><code class="">mcw-tab</code> behaves as a navigational link. Add an <code class="">href</code> for simple link behavior or the <code class="">to</code> property for router-link behavior. <code class="">mcw-tab</code> dispatches <code class="">@click</code> event.</p><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">activeTabIndex</code></td><td>Number</td><td></td><td>set the tab active</td></tr><tr><td><code class="">fade</code></td><td>Boolean</td><td>false</td><td>Use fade transition, else slide</td></tr><tr><td><code class="">stacked</code></td><td>Boolean</td><td>false</td><td>Tab icon and label should flow vertically instead of horizontally.</td></tr><tr><td><code class="">spanContent</code></td><td>Boolean</td><td>false</td><td>Tab indicator will span only the content of the tab</td></tr></tbody></table><h4>Events</h4><table><thead><tr><th>props</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">mdc-tab-bar:activated</code></td><td>number</td><td>Native event on index update.</td></tr><tr><td><code class="">@update:modelValue</code></td><td>number</td><td>On active index update.</td></tr></tbody></table><h4>Tabs with icons</h4><pre><code class="language-html">&lt;mcw-tab-bar&gt;
  &lt;mcw-tab icon=&quot;phone&quot;&gt;&lt;/mcw-tab&gt;
  &lt;mcw-tab icon=&quot;{className: &#39;fa fa-favorite&#39;}&quot;&gt;&lt;/mcw-tab&gt;
  &lt;mcw-tab&gt;&lt;svg slot=&quot;icon&quot;&gt;...&lt;/svg&gt;&lt;/mcw-tab&gt;
&lt;/mcw-tab-bar&gt;
</code></pre><blockquote><p>use <code class="">icon</code> slot for custom icon markup</p></blockquote><h4>Tabs with icons and text</h4><pre><code class="language-html">&lt;mcw-tab-bar&gt;
  &lt;mcw-tab icon=&quot;phone&quot;&gt;Recents&lt;/mcw-tab&gt;
  &lt;mcw-tab icon=&quot;favorite&quot;&gt;Favorites&lt;/mcw-tab&gt;
  &lt;mcw-tab icon=&quot;personal_pin&quot;&gt;Nearby&lt;/mcw-tab&gt;
&lt;/mcw-tab-bar&gt;
</code></pre><h3><code class="">mcw-tab</code></h3><h4>Props</h4><p><code class="">mcw-tab</code> behaves as a navigational link. Add an <code class="">href</code> for simple link behavior or the <code class="">to</code> property for router-link behavior. <code class="">mcw-tab</code> dispatches <code class="">@click</code> event.</p><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">active</code></td><td>Boolean</td><td>false</td><td>set the tab active</td></tr></tbody></table><blockquote><p>Supports Vue-Router props</p></blockquote><h3>reference</h3><ul><li><a href="https://material.io/components/web/catalog/tabs">https://material.io/components/web/catalog/tabs</a></li></ul>`,21),n=[s],b={},m="",p=e({__name:"README",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,i)=>(o(),a("div",d,n))}});export{p as default,m as excerpt,b as frontmatter};
