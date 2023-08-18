import{d as e,o as d,c as o,a as n}from"./index-0afa1053.js";const l={class:"markdown-body"},s=n(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-select
  :value=&quot;selectedType&quot;
  label=&quot;Food&quot;
  helptext=&quot;Pick a food group&quot;
  leading-icon=&quot;restaurant_menu&quot;
  @update:modelValue=&quot;onTypeChanged&quot;
&gt;
  &lt;mcw-list-item
    v-for=&quot;type in types&quot;
    :key=&quot;type&quot;
    :data-value=&quot;type&quot;
    role=&quot;option&quot;
    icon
    &gt;{{ type }}&lt;/mcw-list-item
  &gt;
&lt;/mcw-select&gt;

&lt;br /&gt;
&lt;mcw-select
  v-if=&quot;selectedType&quot;
  :key=&quot;selectedType&quot;
  v-model=&quot;selectedValue&quot;
  outlined
  label=&quot;Kind&quot;
&gt;
  &lt;mcw-list-item
    v-for=&quot;option of options&quot;
    :key=&quot;option&quot;
    :data-value=&quot;option.toLowerCase()&quot;
    role=&quot;option&quot;
    &gt;{{ option }}&lt;/mcw-list-item
  &gt;
&lt;/mcw-select&gt;
&lt;span&gt;Selected: {{ selected }}&lt;/span&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data() {
    return {
      selectedType: &#39;Meat&#39;,
      selectedValue: undefined,
      food: {
        Vegetables: [&#39;Spinach&#39;, &#39;Carrots&#39;, &#39;Onions&#39;, &#39;Broccoli&#39;],
        Meat: [&#39;Eggs&#39;, &#39;Chicken&#39;, &#39;Fish&#39;, &#39;Turkey&#39;, &#39;Pork&#39;, &#39;Beef&#39;],
        Fruits: [&#39;Apples&#39;, &#39;Oranges&#39;, &#39;Bananas&#39;, &#39;Berries&#39;, &#39;Lemons&#39;],
      },
    };
  },
  computed: {
    types() {
      return Object.keys(this.food);
    },
    options() {
      return this.selectedType ? this.food[this.selectedType] : [];
    },
  },
  methods: {
    onTypeChanged(nv) {
      console.log(nv);
      this.selectedType = nv;
      this.selectedValue = null;
    },
    onKindChanged(nv) {
      this.selectedValue = nv;
    },
  },
};
</code></pre><h3><code class="">mcw-select</code></h3><h4>Props</h4><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">label</code></td><td>String</td><td></td><td>the selection label</td></tr><tr><td><code class="">value</code></td><td>String</td><td></td><td>the v-model</td></tr><tr><td><code class="">disabled</code></td><td>Boolean</td><td>false</td><td>whether this select is disabled</td></tr><tr><td><code class="">outlined</code></td><td>Boolean</td><td>false</td><td>outlined style</td></tr><tr><td><code class="">helptext</code></td><td>String</td><td></td><td>Helptext</td></tr><tr><td><code class="">helptextPersistent</code></td><td>Boolean</td><td></td><td>Always show helptext</td></tr><tr><td><code class="">leadingIcon</code></td><td>String</td><td></td><td>Optional leading icon</td></tr><tr><td><code class="">disabled</code></td><td>Boolean</td><td>false</td><td>Disables control</td></tr><tr><td><code class="">label</code></td><td>String</td><td></td><td>Optional field label</td></tr><tr><td><code class="">outlined</code></td><td>Boolean</td><td>false</td><td>Use outline variant</td></tr><tr><td><code class="">menu-fullwidth</code></td><td>Boolean</td><td>true</td><td>Menu is full width</td></tr></tbody></table><table><thead><tr><th>event</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@update:modelValue</code></td><td>emitted on change (supressed if value is unchanged)</td></tr><tr><td><code class="">mdc-select:change</code></td><td>Native event emitted on change</td></tr></tbody></table><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-select">https://github.com/material-components/material-components-web/tree/master/packages/mdc-select</a></li></ul>`,9),a=[s],p={},h="",m=e({__name:"README",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,i)=>(d(),o("div",l,a))}});export{m as default,h as excerpt,p as frontmatter};
