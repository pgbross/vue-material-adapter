import{d as e,o as d,c as o,a as l}from"./index-29ad663a.js";const n={class:"markdown-body"},c=l(`<h2>Usage</h2><h3>Single-line</h3><pre><code class="language-html">&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text&quot; /&gt;
&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text dense&quot; /&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    text: &#39;&#39;,
  },
});
</code></pre><h3>Help text</h3><pre><code class="language-html">&lt;mcw-textfield
  v-model=&quot;text&quot;
  label=&quot;Hint text&quot;
  helptext=&quot;Help text...&quot;
&gt;&lt;/mcw-textfield&gt;
</code></pre><h3>Multiline</h3><pre><code class="language-html">&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text&quot; multiline rows=&quot;8&quot; cols=&quot;40&quot; /&gt;
</code></pre><h3>Full width</h3><pre><code class="language-html">&lt;mcw-textfield v-model=&quot;text&quot; fullwidth label=&quot;Hint text&quot; /&gt;
&lt;mcw-textfield v-model=&quot;text&quot; fullwidth multiline rows=&quot;10&quot; label=&quot;Hint text&quot; /&gt;
</code></pre><h3>box and outline style</h3><pre><code class="language-html">&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text&quot; box /&gt;
&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text&quot; outline /&gt;
</code></pre><blockquote><p>use props to set trailing or leading icon</p></blockquote><pre><code class="language-html">&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text&quot; box leading-icon=&quot;event&quot; /&gt;
&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text&quot; outline trailing-icon=&quot;event&quot; /&gt;
</code></pre><blockquote><p>custom icon</p></blockquote><pre><code class="language-html">&lt;mcw-textfield
  v-model=&quot;text&quot;
  label=&quot;Hint text&quot;
  box
  :leading-icon=&quot;{className: &#39;fa fa-font-awesome&#39;}&quot;
/&gt;
</code></pre><pre><code class="language-html">&lt;mcw-textfield v-model=&quot;text&quot; label=&quot;Hint text&quot; outline&gt;
  &lt;svg slot=&quot;traling-icon&quot;&gt;...&lt;/svg&gt;
&lt;/mcw-textfield&gt;
</code></pre><h3>Validation</h3><ul><li>Native validation: use <code class="">type</code>, <code class="">required</code>, <code class="">minlength</code> and <code class="">maxlength</code> properties</li></ul><pre><code class="language-html">&lt;mcw-textfield
  type=&quot;password&quot;
  label=&quot;Password&quot;
  required
  minlength=&quot;8&quot;
  maxlength=&quot;10&quot;
  helptext=&quot;passord must be 8 to 10 characters&quot;
  helptext-persistent
  helptext-validation
  v-model=&quot;password&quot;
/&gt;
</code></pre><ul><li>Custom Validation: use <code class="">:valid</code> property:</li></ul><pre><code class="language-html">&lt;mcw-textfield
  :valid=&quot;isValid&quot;
  helptext=&quot;custom check&quot;
  helptext-persistent
  helptext-validation
  v-model=&quot;value&quot;
/&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    text: &quot;&quot;
  }
  computed: {
    isValid () {
      return myCustomCheck(this.text)
    }
  }
})
</code></pre><blockquote><p>Once set, native validition is ignored.</p></blockquote><h3>props</h3><table><thead><tr><th>props</th><th>Type</th><th>default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">v-model</code></td><td>String</td><td></td><td>binds textfield value</td></tr><tr><td><code class="">disabled</code></td><td>[Number, String]</td><td></td><td>binds to disabled state</td></tr><tr><td><code class="">type</code></td><td>String</td><td>text</td><td>input type attribute</td></tr><tr><td><code class="">label</code></td><td>String</td><td></td><td>hint text</td></tr><tr><td><code class="">dense</code></td><td>Boolean</td><td></td><td>compresses the textfield to make it slightly smaller</td></tr><tr><td><code class="">outline</code></td><td>Boolean</td><td></td><td>whether the textfield is outlined</td></tr><tr><td><code class="">box</code></td><td>Boolean</td><td></td><td>whether the textfield is a box</td></tr><tr><td><code class="">helptext</code></td><td>String</td><td></td><td>help text</td></tr><tr><td><code class="">helptext-persistent</code></td><td>Boolean</td><td></td><td>whether help text is persistent</td></tr><tr><td><code class="">helptext-validation</code></td><td>Boolean</td><td></td><td>whether help text is a validation</td></tr><tr><td><code class="">required</code></td><td>Boolean</td><td></td><td>validation: whether this field is required</td></tr><tr><td><code class="">minlength</code></td><td>[Number, String]</td><td></td><td>validation: minimal length</td></tr><tr><td><code class="">maxlength</code></td><td>[Number, String]</td><td></td><td>validation: max length</td></tr><tr><td><code class="">valid</code></td><td>[Number, String]</td><td></td><td>validation: custom validation property</td></tr><tr><td><code class="">size</code></td><td>[Number, String]</td><td>20</td><td>textfield size (chars)</td></tr><tr><td><code class="">fullwidth</code></td><td>Boolean</td><td></td><td>whether the textfield is full width</td></tr><tr><td><code class="">multiline</code></td><td>Boolean</td><td></td><td>whether the textfield is multiline</td></tr><tr><td><code class="">rows</code></td><td>[Number, String]</td><td>8</td><td>multiline: number of rows</td></tr><tr><td><code class="">cols</code></td><td>[Number, String]</td><td>40</td><td>multiline: number of columns</td></tr><tr><td><code class="">trailing-icon</code></td><td>[String, Array, Object ]</td><td></td><td>trailing icon <em>*</em></td></tr><tr><td><code class="">leading-icon</code></td><td>[String, Array, Object ]</td><td></td><td>leading icon <em>*</em></td></tr></tbody></table><blockquote><p>other input attributes (<code class="">name</code>, <code class="">readonly</code>, … ) are being passed down to the rendered input element.</p></blockquote><blockquote><p>(*) icon prop usage: use <code class="">String</code> for material icons, <code class="">Array</code> to specify icon classList, <code class="">{className: String, textContent: String}</code> for custom class and/or content, or use <code class="">trailing-icon</code> or <code class="">leading-icon</code> slots for custom icon markup (svg, …).</p></blockquote><h3>events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@focus</code></td><td>-</td><td>emitted on focus gained</td></tr><tr><td><code class="">@blur</code></td><td>-</td><td>emitted on focus lost</td></tr><tr><td><code class="">@icon-action</code></td><td>-</td><td>emitted on icon action</td></tr><tr><td><code class="">@[listener]</code></td><td>-</td><td>emitted on icon action</td></tr></tbody></table><blockquote><p>Other bound listeners are being passsed down to the rendered input element</p></blockquote><pre><code class="language-html">&lt;mcw-textfield
  v-model=&quot;text&quot;
  label=&quot;Hint text&quot;
  @keypress.enter=&quot;handleEnterKey&quot;
/&gt;
</code></pre><h3>methods</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">focus()</code></td><td>-</td><td>focus the input element</td></tr><tr><td><code class="">blur()</code></td><td>-</td><td>blur the input element</td></tr></tbody></table><h3>Reference</h3><ul><li><a href="https://material.io/components/web/catalog/input-controls/text-fields">https://material.io/components/web/catalog/input-controls/text-fields</a></li></ul>`,36),a=[c],h={},m="",p=e({__name:"README",setup(s,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(i,r)=>(d(),o("div",n,a))}});export{p as default,m as excerpt,h as frontmatter};
