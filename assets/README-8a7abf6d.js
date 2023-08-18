import{d as e,o,c as n,a}from"./index-0afa1053.js";const l={class:"markdown-body"},c=a(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-button @click=&quot;onClick&quot; :disabled=&quot;buttonDisabled&quot;&gt;click me&lt;/mcw-button&gt;
&lt;mcw-button raised&gt;
  &lt;mcw-material-icon slot=&quot;icon&quot; icon=&quot;add&quot;&gt;&lt;/mcw-material-icon&gt;Button
&lt;/mcw-button&gt;
&lt;mcw-button outlined trailingIcon=&quot;done&quot;&gt;Button&lt;/mcw-button&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data:{
    buttonDisabled: false
  },
  methods: {
    onClick () {...}
  }
})
</code></pre><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td></td><td></td><td>Button inherits attrs</td></tr></tbody></table><h3>props</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">disabled</code></td><td>Boolean</td><td></td><td>disable the button</td></tr><tr><td><code class="">raised</code></td><td>Boolean</td><td></td><td>Contained button high-emphasis, with elevation and fill</td></tr><tr><td><code class="">unelevated</code></td><td>Boolean</td><td></td><td>Flush with the surface</td></tr><tr><td><code class="">outlined</code></td><td>Boolean</td><td></td><td>Medium emphasis button</td></tr><tr><td><code class="">icon</code></td><td>String</td><td>optional</td><td>leading material icon</td></tr><tr><td><code class="">trailingIcon</code></td><td>String</td><td>optional</td><td>trailing material icon</td></tr></tbody></table><blockquote><p>Supports Vue-Router props</p></blockquote><h3>Text button</h3><pre><code class="language-html">&lt;mcw-button&gt;Baseline&lt;/mcw-button&gt;
</code></pre><h3>Outlined Button</h3><pre><code class="language-html">&lt;mcw-button outlined&gt;Outlined&lt;/mcw-button&gt;
</code></pre><h3>Contained Button</h3><p><strong>Note: <code class="">raised</code> is applied for a contained button with elevation, and <code class="">unelevated</code> is applied for a contained button flush with the surface.</strong></p><pre><code class="language-html">&lt;mcw-button raised&gt;Contained&lt;/mcw-button&gt;
&lt;mcw-button unelevated&gt;Contained&lt;/mcw-button&gt;
</code></pre><h3>Icon buttons</h3><pre><code class="language-html">&lt;mcw-button icon=&quot;favorite&quot;&gt;like&lt;/mcw-button&gt;
&lt;mcw-button&gt;
  &lt;template #icon&gt; &lt;mcw-material-icon icon=&quot;add&quot;&gt;&lt;/mcw-material-icon&gt;&lt;/template&gt;
  like&lt;/mcw-button
&gt;
&lt;mcw-button
  &gt;&lt;mcw-material-icon slot=&quot;trailingIcon&quot; icon=&quot;done&quot;&gt;&lt;/mcw-material-icon
  &gt;like&lt;/mcw-button
&gt;
</code></pre><p>or an SVG button</p><pre><code class="language-html">&lt;mcw-button&gt;
  &lt;svg
    class=&quot;mcw-button__icon&quot;
    xmlns=&quot;http://www.w3.org/2000/svg&quot;
    viewBox=&quot;...&quot;
    slot=&quot;icon&quot;
  &gt;
    &lt;!-- content here --&gt;
  &lt;/svg&gt;
  like
&lt;/mcw-button&gt;
</code></pre><h3>Link buttons</h3><h4>simple Link</h4><p>Using the href attribute will render <code class="">&lt;a role=&quot;button&quot; href=&quot;...&quot;&gt;</code></p><pre><code class="language-html">&lt;mcw-button href=&quot;#&quot;&gt;Home&lt;/mcw-button&gt;
</code></pre><h4>router-link</h4><p>If the <code class="">to</code> property is defined, the item behaves as a <a href="https://router.vuejs.org/en/api/router-link.html">router-link</a></p><pre><code class="language-html">&lt;mcw-button to=&quot;/home&quot;&gt;Home&lt;/mcw-button&gt;
</code></pre><h3>Theming and Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button">https://github.com/material-components/material-components-web/tree/master/packages/mdc-button</a></li></ul>`,28),d=[c],m={},h="",g=e({__name:"README",setup(u,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(i,r)=>(o(),n("div",l,d))}});export{g as default,h as excerpt,m as frontmatter};
