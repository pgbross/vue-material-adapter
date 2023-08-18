import{d as e,o as a,c as l,a as o}from"./index-0afa1053.js";const n={class:"markdown-body"},d=o(`<h2>Usage</h2><h3>Basic</h3><pre><code class="language-html">&lt;mcw-data-table&gt;
  &lt;table class=&quot;mdc-data-table__table&quot; aria-label=&quot;Dessert calories&quot;&gt;
    &lt;thead&gt;
      &lt;tr class=&quot;mdc-data-table__header-row&quot;&gt;
        &lt;th class=&quot;mdc-data-table__header-cell&quot; role=&quot;columnheader&quot; scope=&quot;col&quot;&gt;
          Dessert
        &lt;/th&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell mdc-data-table__header-cell--numeric&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
        &gt;
          Carbs (g)
        &lt;/th&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell mdc-data-table__header-cell--numeric&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
        &gt;
          Protein (g)
        &lt;/th&gt;
        &lt;th class=&quot;mdc-data-table__header-cell&quot; role=&quot;columnheader&quot; scope=&quot;col&quot;&gt;
          Comments
        &lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody class=&quot;mdc-data-table__content&quot;&gt;
      &lt;tr class=&quot;mdc-data-table__row&quot;&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Frozen yogurt&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;24&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;4.0&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Super tasty&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class=&quot;mdc-data-table__row&quot;&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Ice cream sandwich&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;37&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;4.3&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;I like ice cream more&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class=&quot;mdc-data-table__row&quot;&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Eclair&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;24&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;6.0&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;New filing flavor&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/mcw-data-table&gt;
</code></pre><p>with component</p><pre><code class="language-javascript">var vm = new Vue({
  data: {},
});
</code></pre><h3>Selection</h3><pre><code class="language-html">&lt;mcw-data-table&gt;
  &lt;table class=&quot;mdc-data-table__table&quot; aria-label=&quot;Dessert calories&quot;&gt;
    &lt;thead&gt;
      &lt;tr class=&quot;mdc-data-table__header-row&quot;&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell mdc-data-table__header-cell--checkbox&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
        &gt;
          &lt;mcw-checkbox
            ref=&quot;rowCheckbox&quot;
            class=&quot;mdc-data-table__header-row-checkbox&quot;
          &gt;&lt;/mcw-checkbox&gt;
        &lt;/th&gt;
        &lt;th class=&quot;mdc-data-table__header-cell&quot; role=&quot;columnheader&quot; scope=&quot;col&quot;&gt;
          Signal name
        &lt;/th&gt;
        &lt;th class=&quot;mdc-data-table__header-cell&quot; role=&quot;columnheader&quot; scope=&quot;col&quot;&gt;
          Status
        &lt;/th&gt;
        &lt;th class=&quot;mdc-data-table__header-cell&quot; role=&quot;columnheader&quot; scope=&quot;col&quot;&gt;
          Severity
        &lt;/th&gt;
        &lt;th class=&quot;mdc-data-table__header-cell&quot; role=&quot;columnheader&quot; scope=&quot;col&quot;&gt;
          Stage
        &lt;/th&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell mdc-data-table__header-cell--numeric&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
        &gt;
          Time
        &lt;/th&gt;
        &lt;th class=&quot;mdc-data-table__header-cell&quot; role=&quot;columnheader&quot; scope=&quot;col&quot;&gt;
          Roles
        &lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody class=&quot;mdc-data-table__content&quot;&gt;
      &lt;tr
        class=&quot;mdc-data-table__row mdc-data-table__row--selected&quot;
        data-row-id=&quot;u0&quot;
      &gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--checkbox&quot;&gt;
          &lt;mcw-checkbox
            ref=&quot;rowCheckbox&quot;
            class=&quot;mdc-data-table__row-checkbox&quot;
            :checked=&quot;true&quot;
          &gt;&lt;/mcw-checkbox&gt;
        &lt;/td&gt;
        &lt;th id=&quot;u0&quot; class=&quot;mdc-data-table__cell&quot; scope=&quot;row&quot;&gt;
          Arcus watch slowdown
        &lt;/th&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Online&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Medium&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Triaged&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;0:33&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Allison Brie&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class=&quot;mdc-data-table__row&quot; aria-selected=&quot;true&quot; data-row-id=&quot;u1&quot;&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--checkbox&quot;&gt;
          &lt;mcw-checkbox
            ref=&quot;rowCheckbox&quot;
            class=&quot;mdc-data-table__row-checkbox&quot;
          &gt;&lt;/mcw-checkbox&gt;
        &lt;/td&gt;
        &lt;th id=&quot;u1&quot; class=&quot;mdc-data-table__cell&quot; scope=&quot;row&quot;&gt;
          monarch: prod shared
        &lt;/th&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Offline&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Huge&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Triaged&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;0:33&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;Brie Larson&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/mcw-data-table&gt;
</code></pre><p>with component</p><pre><code class="language-javascript">var vm = new Vue({
  data: {},
});
</code></pre><h3>Sorting</h3><pre><code class="language-html">&lt;mcw-data-table @MDCDataTable:sorted=&quot;onSorted&quot;&gt;
  &lt;table class=&quot;mdc-data-table__table&quot; aria-label=&quot;Dessert calories&quot;&gt;
    &lt;thead&gt;
      &lt;tr class=&quot;mdc-data-table__header-row&quot;&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell mdc-data-table__header-cell--with-sort&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
          aria-sort=&quot;none&quot;
          data-column-id=&quot;dessert&quot;
        &gt;
          &lt;div class=&quot;mdc-data-table__header-cell-wrapper&quot;&gt;
            &lt;div class=&quot;mdc-data-table__header-cell-label&quot;&gt;Dessert&lt;/div&gt;
            &lt;button
              class=&quot;mdc-icon-button material-icons mdc-data-table__sort-icon-button&quot;
              aria-label=&quot;Sort by dessert&quot;
              aria-describedby=&quot;dessert-status-label&quot;
            &gt;
              arrow_upward
            &lt;/button&gt;
            &lt;div
              id=&quot;dessert-status-label&quot;
              class=&quot;mdc-data-table__sort-status-label&quot;
              aria-hidden=&quot;true&quot;
            &gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/th&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
          aria-sort=&quot;ascending&quot;
          data-column-id=&quot;carbs&quot;
        &gt;
          &lt;div class=&quot;mdc-data-table__header-cell-wrapper&quot;&gt;
            &lt;button
              class=&quot;mdc-icon-button material-icons mdc-data-table__sort-icon-button&quot;
              aria-label=&quot;Sort by carbs&quot;
              aria-describedby=&quot;carbs-status-label&quot;
            &gt;
              arrow_upward
            &lt;/button&gt;
            &lt;div class=&quot;mdc-data-table__header-cell-label&quot;&gt;Carbs (g)&lt;/div&gt;
            &lt;div
              id=&quot;carbs-status-label&quot;
              class=&quot;mdc-data-table__sort-status-label&quot;
              aria-hidden=&quot;true&quot;
            &gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/th&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
          aria-sort=&quot;none&quot;
          data-column-id=&quot;protein&quot;
        &gt;
          &lt;div class=&quot;mdc-data-table__header-cell-wrapper&quot;&gt;
            &lt;button
              class=&quot;mdc-icon-button material-icons mdc-data-table__sort-icon-button&quot;
              aria-label=&quot;Sort by protein&quot;
              aria-describedby=&quot;protein-status-label&quot;
            &gt;
              arrow_upward
            &lt;/button&gt;
            &lt;div class=&quot;mdc-data-table__header-cell-label&quot;&gt;Protein (g)&lt;/div&gt;
            &lt;div
              id=&quot;protein-status-label&quot;
              class=&quot;mdc-data-table__sort-status-label&quot;
              aria-hidden=&quot;true&quot;
            &gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/th&gt;
        &lt;th
          class=&quot;mdc-data-table__header-cell&quot;
          role=&quot;columnheader&quot;
          scope=&quot;col&quot;
          data-column-id=&quot;comments&quot;
        &gt;
          Comments
        &lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody class=&quot;mdc-data-table__content&quot;&gt;
      &lt;tr
        v-for=&quot;item in filteredData&quot;
        :key=&quot;item.dessert&quot;
        class=&quot;mdc-data-table__row&quot;
      &gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;{{ item.dessert }}&lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;
          {{ item.carbs }}
        &lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell mdc-data-table__cell--numeric&quot;&gt;
          {{ item.protein }}
        &lt;/td&gt;
        &lt;td class=&quot;mdc-data-table__cell&quot;&gt;{{ item.comments }}&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/mcw-data-table&gt;
</code></pre><p>with component</p><pre><code class="language-javascript">const desserts_ = [
  {
    dessert: &#39;Frozen yogurt&#39;,
    carbs: &#39;24&#39;,
    protein: &#39;4.0&#39;,
    comments: &#39;Super tasty&#39;,
  },
  {
    dessert: &#39;Baked alaska&#39;,
    carbs: &#39;34&#39;,
    protein: &#39;1.0&#39;,
    comments: &#39;Hot and cold&#39;,
  },
  {
    dessert: &#39;Ice cream&#39;,
    carbs: &#39;10&#39;,
    protein: &#39;5&#39;,
    comments: &#39;Cold&#39;,
  },
];
export default {
  data() {
    return { desserts: [], sortBy: &#39;&#39;, sortValue: &#39;&#39; };
  },
  computed: {
    filteredData() {
      const { sortBy, sortValue, desserts: data } = this;
      return this.sorter({ sortBy, sortValue, data });
    },
  },
  mounted() {
    this.desserts = desserts_.slice();
  },

  methods: {
    onSorted({ data }) {
      this.sortBy = data.columnId;
      this.sortValue = data.sortValue;
    },

    sorter({ sortBy, sortValue, data }) {
      if (!sortBy) {
        return data.slice();
      }
      const order = sortValue === &#39;ascending&#39; ? 1 : -1;

      data = data.slice().sort(function (a, b) {
        a = getProperty(a, sortBy);
        b = getProperty(b, sortBy);
        if (sortBy.indexOf(&#39;created&#39;) !== -1) {
          a = new Date(a);
          b = new Date(b);
        }
        return (a === b ? 0 : a &gt; b ? 1 : -1) * order;
      });
      return data;
    },
  },
};

function getProperty(o, s) {
  // copied from http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
  s = s.replace(/\\[(\\w+)]/g, &#39;.$1&#39;); // convert indexes to properties
  s = s.replace(/^\\./, &#39;&#39;); // strip a leading dot
  const a = s.split(&#39;.&#39;);
  while (a.length) {
    const n = a.shift();
    if (n in o) {
      o = o[n];
    } else {
      return;
    }
  }
  return o;
}
</code></pre><h3>props</h3><table><thead><tr><th>props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">sticky</code></td><td>Boolean</td><td>false</td><td>(optional) make header row sticky (fixed)</td></tr></tbody></table><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td>@mdc-data-table:sorted</td><td>SortActionEventDetail</td><td>Event emitted when clicked on sortable header cell.</td></tr><tr><td>@mdc-data-table:rowselectionchanged</td><td>MDCDataTableRowSelectionChangedEventDetail</td><td>emitted on focus gained</td></tr><tr><td>@mdc-data-table:selectedall</td><td>void</td><td>Event emitted when header row checkbox is checked.</td></tr><tr><td>@mdc-data-table:unselectedall</td><td>void</td><td>Event emitted when header row checkbox is unchecked.</td></tr></tbody></table><pre><code class="language-javascript">export interface SortActionEventDetail {
  columnId: string | null;
  columnIndex: number;
  headerCell: HTMLElement;
  sortValue: SortValue;
}

export interface MDCDataTableRowSelectionChangedEventDetail {
  rowIndex: number;
  rowId: string | null;
  selected: boolean;
}
</code></pre><h3>model</h3><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table">https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table</a></li></ul>`,21),c=[d],m={},b="",_=e({__name:"README",setup(s,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(u,r)=>(a(),l("div",n,c))}});export{_ as default,b as excerpt,m as frontmatter};
