## Usage

The switch component is rendered as an input with checkbox type

```html
<mcw-switch v-model="checked" :label="label" />
<mcw-switch v-model="checked">{{label}}</mcw-switch>
<mcw-switch disabled label="Disabled" />
```

```javascript
var vm = new Vue({
  data: {
    label: 'This is a switch',
    checked: true,
  },
});
```

### Props

| props       | Type    | Default | Description                                          |
| ----------- | ------- | ------- | ---------------------------------------------------- |
| `checked`   | Boolean |         | whether the checkbox is checked, bind with `v-model` |
| `disabled`  | Boolean | false   | whether the checkbox is disabled                     |
| `label`     | String  |         | checkbox label                                       |
| `align-end` | Boolean | false   | align the checkbox after the label                   |
| `value`     | String  |         | input control value                                  |
| `name`      | String  |         | input name                                           |

### Events

| event     | args | Description              |
| --------- | ---- | ------------------------ |
| `@change` | -    | On checked status change |

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch>
