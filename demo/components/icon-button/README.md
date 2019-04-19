## Usage

```html
<mdc-icon-button href="#">
  <mdc-material-icon icon="menu" />
</mdc-icon-button>

<mdc-icon-button v-model="isOn" :disabled="disabled">
  <mdc-icon-toggle isOn>
    <mdc-material-icon icon="favorite" />
  </mdc-icon-toggle>
  <mdc-icon-toggle>
    <mdc-material-icon icon="favorite_border" />
  </mdc-icon-toggle>
</mdc-icon-button>
```

### events

| event                         | args            | Description       |
| ----------------------------- | --------------- | ----------------- |
| `@change`                     |                 | emitted on click  |
| `@MDCIconButtonToggle:change` | {isOn: Boolean} | emitted on change |

### props

| prop       | Type    | Default | Description                                             |
| ---------- | ------- | ------- | ------------------------------------------------------- |
| `isOn`     | Boolean | false   | Model value for icon-toggle variant                     |
| `href`     | String  |         | Changes root element to an anchor tag (default button). |
| `disabled` | Boolean | false   | Disables button if true                                 |

> Note: Icon buttons that use the <a> tag cannot be disabled. Disabled icon buttons cannot be interacted with and have no visual interaction effect.

### Reference

- <https://material.io/components/web/catalog/icon-button>
