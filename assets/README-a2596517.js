import{d as e,o as d,c as a,a as o}from"./index-29ad663a.js";const s={class:"markdown-body"},n=o(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-snackbar
  v-model=&quot;open&quot;
  message=&quot;Simple message&quot;
  :dismissAction=&quot;false&quot;
&gt;&lt;/mcw-snackbar&gt;
</code></pre><p>Simple <code class="">mcw-snackbar</code> does not queue messages.</p><pre><code class="language-javascript">export default {
  data() {
    return {
      open: false,
    };
  },
</code></pre><p>or <code class="">mcw-snackbar-queue</code> maintains an internal queue of messages displayed in sequence.</p><pre><code class="language-html">&lt;mcw-button @click=&quot;showLeading&quot;&gt;Leading&lt;/mcw-button&gt;
&lt;mcw-snackbar-queue ref=&quot;bar&quot; /&gt;
</code></pre><pre><code class="language-javascript">export default {
  methods: {
    showLeading() {
      this.$refs.bar.handleSnack({
        message: \`Your photo has been archived.\`,
        timeoutMs: 5000,
        actionText: &#39;Undo&#39;,
        leading: true,
      });
    },
  },
</code></pre><h3>Props</h3><h3><code class="">mcw-snackbar</code></h3><table><thead><tr><th>Prop Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code class="">open</code></td><td>Boolean</td><td>v-model</td></tr><tr><td>message</td><td>String</td><td>Message to show in the snackbar</td></tr><tr><td>reason</td><td>String</td><td>Passed as argument when snackbar closes programatically</td></tr><tr><td>timeoutMs</td><td>Number</td><td>Timeout in milliseconds when to close snackbar.</td></tr><tr><td>closeOnEscape</td><td>Boolean</td><td>Closes popup on “Esc” button if true.</td></tr><tr><td>actionText</td><td>String</td><td>Text for action button</td></tr><tr><td>leading</td><td>Boolean</td><td>Shows snackbar on the left if true</td></tr><tr><td></td><td></td><td>(or right for rtl languages)</td></tr><tr><td>stacked</td><td>Boolean</td><td>Shows buttons under text if true</td></tr><tr><td><code class="">dismiss-action</code></td><td>String/Boolean</td><td>Show dismiss action</td></tr></tbody></table><h3><code class="">mcw-snackbar-queue</code></h3><h4>Methods</h4><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code class="">handleSnack( { timeoutMs, closeOnEscape, message, actionText, dismissAction, stacked, leading, actionHandler })</code></td><td>queues the next snack</td></tr></tbody></table><table><thead><tr><th>Parameters</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>message</td><td>String</td><td>Message to show in the snackbar</td></tr><tr><td>reason</td><td>String</td><td>Passed as argument when snackbar closes programatically</td></tr><tr><td>timeoutMs</td><td>Number</td><td>Timeout in milliseconds when to close snackbar.</td></tr><tr><td>closeOnEscape</td><td>Boolean</td><td>Closes popup on “Esc” button if true.</td></tr><tr><td>actionText</td><td>String</td><td>Text for action button</td></tr><tr><td>leading</td><td>Boolean</td><td>Shows snackbar on the left if true (or right for rtl languages)</td></tr><tr><td>stacked</td><td>Boolean</td><td>Shows buttons under text if true</td></tr><tr><td>actionHandler</td><td>function</td><td>Callback on action</td></tr></tbody></table><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar">https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar</a></li></ul>`,16),r=[n],u={},m="",p=e({__name:"README",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(i,l)=>(d(),a("div",s,r))}});export{p as default,m as excerpt,u as frontmatter};
