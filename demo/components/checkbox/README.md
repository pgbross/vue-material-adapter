## Usage

```html
<mcw-checkbox v-model="checked" :label="checked ? 'Checked' : 'Unchecked'" />
<mcw-checkbox
  v-model="checked"
  :disabled="disabled"
  v-model:indeterminate="indeterminate"
  :label="checked ? 'Checked' : 'Unchecked'"
/>
```

```javascript
var vm = new Vue({
  data: {
    checked: true,
  },
});
```

### Indeterminate checkbox

```html
<mcw-checkbox
  :label="label"
  v-model="checked"
  v-model:indeterminate="indeterminate"
/>
```

```javascript
var vm = new Vue({
  data: {
    label: 'This is a checkbox',
    checked: false,
    indeterminate: true,
  },
});
```

### Custom label markup

```html
<mcw-checkbox v-model="agreed">
  <span>I agree with </span>
  <a @click.stop href="...">Terms of Serivce</a>
</mcw-checkbox>
```

### props

| props           | Type    | Default | Description                                            |
| --------------- | ------- | ------- | ------------------------------------------------------ |
| `indeterminate` | Boolean |         | checkbox's indeterminate state (v-model:indeterminate) |
| `disabled`      | Boolean |         | whether the checkbox is disabled                       |
| `label`         | String  |         | checkbox label (or use default slot)                   |
| `align-end`     | Boolean |         | whether to align the checkbox after the label          |
| `value`         | String  | `'on'`  | checkbox value                                         |
| `name`          | String  |         | input name                                             |

### events

| event                 | args    | Description             |
| --------------------- | ------- | ----------------------- |
| `mdc-checkbox:change` | event   | native change event     |
| `@change`             | boolean | checked state           |
| `@focus`              | -       | emitted on focus gained |
| `@blur`               | -       | emitted on focus lost   |

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox>
