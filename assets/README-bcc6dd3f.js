import{d as t,o,c as a,a as d}from"./index-29ad663a.js";const s={class:"markdown-body"},l=d(`<h2>Usage</h2><pre><code class="language-html">&lt;mcw-slider v-model=&quot;sliderValue1&quot; max=&quot;10&quot; /&gt;
&lt;mcw-slider v-model=&quot;sliderValue1&quot; max=&quot;10&quot; dir=&quot;rtl&quot; /&gt;
&lt;mcw-slider v-model=&quot;sliderValue1&quot; discrete max=&quot;10&quot; data-step=&quot;1&quot; /&gt;
&lt;mcw-slider v-model=&quot;sliderValue2&quot; discrete max=&quot;10&quot; data-step=&quot;2&quot; tick-marks /&gt;
</code></pre><pre><code class="language-javascript">var vm = new Vue({
  data: {
    sliderValue1: 5,
    sliderValue2: 5,
  },
});
</code></pre><h3>Continuous Slider</h3><pre><code class="language-html">&lt;mcw-slider max=&quot;10&quot; v-model=&quot;sliderValue&quot; /&gt;
</code></pre><h3>Discrete Slider</h3><pre><code class="language-html">&lt;mcw-slider min=&quot;0&quot; max=&quot;10&quot; discrete data-step=&quot;1&quot; v-model=&quot;sliderValue&quot; /&gt;
</code></pre><h3>Discrete Slider with Markers</h3><pre><code class="language-html">&lt;mcw-slider
  min=&quot;0&quot;
  max=&quot;10&quot;
  data-step=&quot;2&quot;
  discrete
  tick-marks
  v-model=&quot;sliderValue&quot;
/&gt;
</code></pre><h3>Props</h3><table><thead><tr><th>props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">value</code></td><td>Number</td><td></td><td>The current value of the slider.</td></tr><tr><td><code class="">min</code></td><td>Number</td><td>0</td><td>The minimum value a slider can have.</td></tr><tr><td><code class="">max</code></td><td>Number</td><td>100</td><td>The maximum value a slider can have.</td></tr><tr><td><code class="">disabled</code></td><td>Boolean</td><td>false</td><td>Disables slider if true</td></tr><tr><td><code class="">tick-marks</code></td><td>Boolean</td><td>false</td><td>Display discrete markers if true</td></tr></tbody></table><blockquote><p>NOTE: If a slider contains a step value it does not mean that the slider is a “discrete” slider. “Discrete slider” is a UX treatment, while having a step value is behavioral.</p></blockquote><blockquote><p>Discrete sliders are required to have a positive step value other than 0. If a step value of 0 is provided, or no value is provided, the step value will default to 1.</p></blockquote><blockquote><p><em>(*)</em> By default, the slider component tracks window resize and drawer open/close events in order to reset it’s layout, but it in case off css resize or positioning change, the layout may be off. in this case you can use the <code class="">layout-on</code> event to force a layout, or call the layout() method programatically.</p></blockquote><h3>Events</h3><table><thead><tr><th>event</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code class="">@input</code></td><td>-</td><td>On slider value is changed by way of a user event.</td></tr><tr><td><code class="">@change</code></td><td>-</td><td>On slider value is changed and committed by way of a user event.</td></tr></tbody></table><h3>model</h3><p>The v-model directive is <code class="">lazy</code>, update happens on the <code class="">change</code> event.</p><blockquote><p>In order to get update on input, fallback to explicit binding:</p></blockquote><pre><code class="language-html">&lt;mcw-slider :value=&quot;sliderValue&quot; @input=&quot;value =&gt; { sliderValue = value }&quot; /&gt;
</code></pre><h3>Reference</h3><ul><li><a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider">https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider</a></li></ul>`,22),r=[l],m={},h="",p=t({__name:"README",setup(c,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(i,u)=>(o(),a("div",s,r))}});export{p as default,h as excerpt,m as frontmatter};
