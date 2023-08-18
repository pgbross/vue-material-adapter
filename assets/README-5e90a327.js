import{d as e,o,c as n,a as c}from"./index-29ad663a.js";const a={class:"markdown-body"},d=c(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-icon-button href=&quot;#&quot;&gt;
  &lt;mcw-material-icon icon=&quot;menu&quot; /&gt;
&lt;/mcw-icon-button&gt;

&lt;mcw-icon-button v-model=&quot;isOn&quot; :disabled=&quot;disabled&quot;&gt;
  &lt;mcw-icon-toggle isOn&gt;
    &lt;mcw-material-icon icon=&quot;favorite&quot; /&gt;
  &lt;/mcw-icon-toggle&gt;
  &lt;mcw-icon-toggle&gt;
    &lt;mcw-material-icon icon=&quot;favorite_border&quot; /&gt;
  &lt;/mcw-icon-toggle&gt;
&lt;/mcw-icon-button&gt;
</code></pre><h3>Props</h3><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">isOn</code></td><td>Boolean</td><td>false</td><td>Model value for icon-toggle variant</td></tr><tr><td><code class="">disabled</code></td><td>Boolean</td><td>false</td><td>Disables button if true</td></tr></tbody></table><blockquote><p>If there is an <code class="">href</code> attribute, element is rendered as anchor, else button.</p></blockquote><h3>Events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@change</code></td><td></td><td>On click</td></tr><tr><td><code class="">@MDCIconButtonToggle:change</code></td><td>{isOn: Boolean}</td><td>On change</td></tr></tbody></table><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button">https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button</a></li></ul>`,9),l=[d],m={},u="",g=e({__name:"README",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(s,i)=>(o(),n("div",a,l))}});export{g as default,u as excerpt,m as frontmatter};
