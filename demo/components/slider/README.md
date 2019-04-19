## Usage

```html
<mdc-slider v-model="sliderValue1" max="10" />
<mdc-slider v-model="sliderValue1" max="10" dir="rtl" />
<mdc-slider v-model="sliderValue1" discrete max="10" />
<mdc-slider v-model="sliderValue2" discrete step="1" max="10" display-markers />
```

```javascript
var vm = new Vue({
  data: {
    sliderValue1: 5,
    sliderValue2: 5,
  },
});
```

- Continuous Slider

```html
<mdc-slider max="10" v-model="sliderValue" />
```

- Discrete Slider

```html
<mdc-slider min="0" max="10" discrete v-model="sliderValue" />
```

- Discrete Slider with Markers

```html
<mdc-slider
  min="0"
  max="10"
  step="1"
  discrete
  display-markers
  v-model="sliderValue"
/>
```

### props

| props              | Type    | Default   | Description                                                                                                                      |
| ------------------ | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `value`            | Number  |           | The current value of the slider.                                                                                                 |
| `min`              | Number  | 0         | The minimum value a slider can have. Changing this property will update the slider’s value if it is lower than the new minimum   |
| `max`              | Number  | 100       | The maximum value a slider can have. Changing this property will update the slider’s value if it is greater than the new maximum |
| `step`             | Number  | 0         | the slider will quantize all values to match that step value                                                                     |
| `disabled`         | Boolean | false     | Disables slider if true                                                                                                          |
| `display-markers`  | Boolean | false     | Display discrete markers if true                                                                                                 |
| `layout-on`        | String  | undefined | optional event to trigger a re-layout _(\*)_                                                                                     |
| `layout-on-source` | Object  | vm.\$root | optional layout event source, defaults to root bus                                                                               |

> NOTE: If a slider contains a step value it does not mean that the slider is a "discrete" slider. "Discrete slider" is a UX treatment, while having a step value is behavioral.

> The step value can be any positive floating-point number, or 0. When the step value is 0, the slider is considered to not have any step. A error will be thrown if you are trying to set step value to be a negative number.

> Discrete sliders are required to have a positive step value other than 0. If a step value of 0 is provided, or no value is provided, the step value will default to 1.

> _(\*)_ By default, the slider component tracks window resize and drawer open/close events in order to reset it's layout,
> but it in case off css resize or positioning change, the layout may be off. in this case you can use the `layout-on` event
> to force a layout, or call the layout() method programatically.

### events

| event     | args | Description                                                                        |
| --------- | ---- | ---------------------------------------------------------------------------------- |
| `@input`  | -    | emitted whenever the slider value is changed by way of a user event.               |
| `@change` | -    | emitted whenever the slider value is changed and committed by way of a user event. |
| `@focus`  | -    | emitted on focus gained                                                            |
| `@blur`   | -    | emitted on focus lost                                                              |

### model

The v-model directive is `lazy`, update happens on the `change` event.

> In order to get update on input, fallback to explicit binding:

```html
<mdc-slider :value="sliderValue" @input="value => { sliderValue = value }" />
```

### Reference

- <https://material.io/components/web/catalog/input-controls/sliders>
