## Usage

```html
<mcw-radio
  id="dog"
  v-model="picked"
  radio-classes="my-radio"
  label="Dog"
  name="pets"
  value="dog"
></mcw-radio>
<mcw-radio
  id="cat"
  v-model="picked"
  label="Cat"
  name="pets"
  value="cat"
></mcw-radio>

<p>Answer: {{ picked }}</p>
```

```javascript
var vm = new Vue({
  data: {
    picked: dog,
  },
});
```

> NOTE: If a label property is specified, the `.mcw-radio` element and the associated label are wrapped around an `.mcw-form-field` element for styling.

### mcw-radio props

| Prop Name      | Type    | Description                                                        |
| -------------- | ------- | ------------------------------------------------------------------ |
| `id`           | String  | (required) The html id of the input element                        |
| `name`         | String  | (required) The name of the html input element                      |
| `checked`      | Boolean | Default `false`. When true will switch radio to the checked state. |
| `value`        | String  | The associated value with the radio element.                       |
| `picked`       | String  | Tracks the selected value (v-model)                                |
| `disabled`     | Boolean | Default `false`. When true will disable the radio element.         |
| `radioClasses` | String  | Classes to be applied to the `.mcw-radio` element.                 |
| `label`        | String  | Optional, Label associated with radio input control.               |

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio>
