## Usage

```html
<mcw-icon-button href="#">
  <mcw-material-icon icon="menu" />
</mcw-icon-button>

<mcw-icon-button v-model="isOn" :disabled="disabled">
  <mcw-icon-toggle isOn>
    <mcw-material-icon icon="favorite" />
  </mcw-icon-toggle>
  <mcw-icon-toggle>
    <mcw-material-icon icon="favorite_border" />
  </mcw-icon-toggle>
</mcw-icon-button>
```

### Props

| prop       | Type    | Default | Description                         |
| ---------- | ------- | ------- | ----------------------------------- |
| `isOn`     | Boolean | false   | Model value for icon-toggle variant |
| `disabled` | Boolean | false   | Disables button if true             |

> If there is an `href` attribute, element is rendered as anchor, else button.

### Events

| event                         | args            | Description |
| ----------------------------- | --------------- | ----------- |
| `@change`                     |                 | On click    |
| `@MDCIconButtonToggle:change` | {isOn: Boolean} | On change   |

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button>
