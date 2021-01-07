## Usage

```html
<mcw-button @click="onClick" :disabled="buttonDisabled">click me</mcw-button>
<mcw-button raised>
  <mcw-material-icon slot="icon" icon="add"></mcw-material-icon>Button
</mcw-button>
<mcw-button outlined trailingIcon="done">Button</mcw-button>
```

```javascript
var vm = new Vue({
  data:{
    buttonDisabled: false
  },
  methods: {
    onClick () {...}
  }
})
```

### events

| event | args | Description           |
| ----- | ---- | --------------------- |
|       |      | Button inherits attrs |

### props

| prop           | Type    | Default  | Description                                             |
| -------------- | ------- | -------- | ------------------------------------------------------- |
| `disabled`     | Boolean |          | disable the button                                      |
| `raised`       | Boolean |          | Contained button high-emphasis, with elevation and fill |
| `unelevated`   | Boolean |          | Flush with the surface                                  |
| `outlined`     | Boolean |          | Medium emphasis button                                  |
| `icon`         | String  | optional | leading material icon                                   |
| `trailingIcon` | String  | optional | trailing material icon                                  |

> Supports Vue-Router props

### Text button

```html
<mcw-button>Baseline</mcw-button>
```

### Outlined Button

```html
<mcw-button outlined>Outlined</mcw-button>
```

### Contained Button

**Note: `raised` is applied for a contained button with elevation,
and `unelevated` is applied for a contained button flush with the surface.**

```html
<mcw-button raised>Contained</mcw-button>
<mcw-button unelevated>Contained</mcw-button>
```

### Icon buttons

```html
<mcw-button icon="favorite">like</mcw-button>
<mcw-button>
  <template #icon> <mcw-material-icon icon="add"></mcw-material-icon></template>
  like</mcw-button
>
<mcw-button
  ><mcw-material-icon slot="trailingIcon" icon="done"></mcw-material-icon
  >like</mcw-button
>
```

or an SVG button

```html
<mcw-button>
  <svg
    class="mcw-button__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="..."
    slot="icon"
  >
    <!-- content here -->
  </svg>
  like
</mcw-button>
```

### Link buttons

#### simple Link

Using the href attribute will render `<a role="button" href="...">`

```html
<mcw-button href="#">Home</mcw-button>
```

#### router-link

If the `to` property is defined, the item behaves as a
[router-link](https://router.vuejs.org/en/api/router-link.html)

```html
<mcw-button to="/home">Home</mcw-button>
```

### Theming and Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-button>
