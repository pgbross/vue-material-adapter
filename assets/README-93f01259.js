import{d as e,o as d,c as n,a as o}from"./index-29ad663a.js";const a={class:"markdown-body"},r=o(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-banner
  v-model=&quot;showBanner&quot;
  text=&quot;This is a banner component&quot;
  primary-action=&quot;Fix me&quot;
  secondary-action=&quot;Learn more&quot;
  icon=&quot;help&quot;
  @mdcbanner:closing=&quot;onClosing&quot;
&gt;&lt;/mcw-banner&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data:{
  },
  methods: {
    onClick () {...}
  }
})
</code></pre><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td>mdcbanner:closing</td><td>reason</td><td>Reason indicating why it was closed</td></tr><tr><td>mdcbanner:closed</td><td>reason</td><td>Reason indicating why it was closed</td></tr><tr><td>mdcbanner:opening</td><td></td><td></td></tr><tr><td>mdcbanner:opened</td><td></td><td></td></tr><tr><td>mdcbanner:actionclicked</td><td>action</td><td>Reason indicating why it was closed</td></tr></tbody></table><p>Reason and action indicate why the banner was closed: 0 - primary action selected 1 - secondary action selected false - v-model was used to close the banner</p><h3>props</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>centered</td><td>boolean</td><td>false</td><td>Optionally displayed centred</td></tr><tr><td>v-model</td><td>boolean</td><td>false</td><td>Show/Hide banner</td></tr><tr><td>text</td><td>string</td><td></td><td>Banner text</td></tr><tr><td>primaryAction</td><td>string</td><td>Text on primary action button</td><td></td></tr><tr><td>secondaryAction</td><td>string</td><td>Text on secondary action button (optional)</td><td></td></tr><tr><td>mobile</td><td>boolean</td><td>false</td><td>Actions positioned below the text</td></tr><tr><td>fixed: boolean</td><td>false</td><td>Fixed at the top of the screen below top app bar</td><td></td></tr><tr><td>disableAutoClose</td><td>boolean</td><td>false</td><td>If true actions do not hide the banner</td></tr><tr><td>icon</td><td>string</td><td></td><td>Material icon to display (optional)</td></tr></tbody></table><h3>Theming and Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-banner">https://github.com/material-components/material-components-web/tree/master/packages/mdc-banner</a></li></ul>`,10),s=[r],p={},m="",b=e({__name:"README",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(i,l)=>(d(),n("div",a,s))}});export{b as default,m as excerpt,p as frontmatter};
