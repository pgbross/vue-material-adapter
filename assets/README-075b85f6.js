import{d,o as e,c as o,a}from"./index-29ad663a.js";const c={class:"markdown-body"},s=a(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-button raised @click=&quot;open=!open&quot;&gt;Show dialog&lt;/mcw-button&gt;
&lt;mcw-dialog
  id=&quot;demo-dialog&quot;
  v-model=&quot;openBasic&quot;
  escape-key-action=&quot;close&quot;
  scrim-click-action=&quot;close&quot;
  aria-labelledby=&quot;my-basic-title&quot;
  aria-describedby=&quot;my-basic-content&quot;
  :auto-stack-buttons=&quot;true&quot;
  @mdcdialog:closing=&quot;onClosed&quot;
&gt;
  &lt;mcw-dialog-title&gt;Lorem ipsum dolor&lt;/mcw-dialog-title&gt;
  &lt;mcw-dialog-content&gt;
    &lt;div&gt;
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    &lt;/div&gt;
  &lt;/mcw-dialog-content&gt;

  &lt;mcw-dialog-footer&gt;
    &lt;mcw-dialog-button action=&quot;dismiss&quot;&gt;Dismiss&lt;/mcw-dialog-button&gt;
    &lt;mcw-dialog-button action=&quot;accept&quot; isDefault&gt;Accept&lt;/mcw-dialog-button&gt;
  &lt;/mcw-dialog-footer&gt;
&lt;/mcw-dialog&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    open: false,
  },
});
</code></pre><h3>mcw-dialog</h3><h3>Props</h3><table><thead><tr><th>Prop Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">autoStackButtons</code></td><td>Boolean</td><td><code class="">true</code></td><td>reverses the buttons when applying the stacked layout.</td></tr><tr><td><code class="">escapeKeyAction</code></td><td>String</td><td><code class="">close</code></td><td>the action reflected when the Escape key is pressed.</td></tr><tr><td></td><td></td><td></td><td>Setting to <code class="">&#39;&#39;</code> disables closing via the escape key</td></tr><tr><td><code class="">scrollable</code></td><td>Boolean</td><td>false</td><td>Scrollable content</td></tr><tr><td>v-model</td><td>Boolean</td><td><code class="">false</code></td><td>If true opens the dialog. If false closes the dialog</td></tr><tr><td><code class="">role</code></td><td>String</td><td><code class="">alertdialog</code></td><td>ARIA attribute <em>*</em> that specifies the role of dialog.</td></tr><tr><td></td><td></td><td></td><td>Must be <code class="">alertdialog</code> or <code class="">dialog</code></td></tr><tr><td><code class="">scrimClickAction</code></td><td>String</td><td><code class="">close</code></td><td>the action reflected when the scrim is clicked.</td></tr><tr><td></td><td></td><td></td><td>Setting to <code class="">&#39;&#39;</code> disables closing via scrim click</td></tr><tr><td><code class="">tag</code></td><td>String</td><td><code class="">div</code></td><td>Customizes the <code class="">Dialog</code> tag type.</td></tr></tbody></table><p><em>*</em><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">ARIA attribute roles</a></p><h3>Events</h3><table><thead><tr><th>Event Name</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@change</code></td><td>Boolean</td><td>notify v-model/listeners that drawer state has changed.</td></tr><tr><td><code class="">mdc-dialog-opening</code></td><td>none</td><td>On dialog starts its opening animation</td></tr><tr><td><code class="">mdc-dialog-opened</code></td><td>none</td><td>On dialog finishes its opening animation</td></tr><tr><td><code class="">mdc-dialog-closing</code></td><td>none</td><td>On starts its closing animation</td></tr><tr><td><code class="">mdc-dialog-closed</code></td><td>none</td><td>On finishes its closing animation</td></tr></tbody></table><h3><code class="">mcw-dialog-title</code></h3><h3>Props</h3><table><thead><tr><th>Prop Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>String</td><td>Custom tag type. (defaults: <code class="">h2</code>)</td></tr></tbody></table><h3><code class="">mcw-dialog-content</code></h3><h3>Props</h3><table><thead><tr><th>Prop Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>String</td><td>Custom tag type. (defaults: <code class="">div</code>)</td></tr></tbody></table><h3><code class="">mcw-dialog-footer</code></h3><h3>Props</h3><table><thead><tr><th>Prop Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>String</td><td>Custom tag type. (defaults: <code class="">div</code>)</td></tr></tbody></table><h3><code class="">mcw-dialog-button</code></h3><h3>Props</h3><table><thead><tr><th>Prop Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>action</td><td>String</td><td>Marks as an action button</td></tr><tr><td>isDefault</td><td>Boolean</td><td>Marks as default action</td></tr><tr><td>isInitialFocus</td><td>Boolean</td><td>Sets initial focus</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@click</code></td><td></td><td>On click.</td></tr></tbody></table><h3>Reference</h3><p><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog">https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog</a></p>`,25),i=[s],g={},m="",p=d({__name:"README",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,r)=>(e(),o("div",c,i))}});export{p as default,m as excerpt,g as frontmatter};
