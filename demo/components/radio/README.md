## Usage

```html
<mcw-radio
  label="Dog"
  radioClasses="my-radio"
  v-model="picked"
  id="dog"
  name="pets"
  value="dog"
>
</mcw-radio>
<mcw-radio label="Cat" v-model="picked" id="cat" name="pets" value="cat">
</mcw-radio>

<p>Answer: {{ picked }}</p>
```

```javascript
var vm = new Vue({
  data: {
    picked: null,
  },
});
```

> NOTE: If a label property is specified, the `.mcw-radio` element and the associated label are wrapped around an `.mcw-form-field` element for styling.

### mcw-radio props

| Prop Name    | Type    | Description                                                        |
| ------------ | ------- | ------------------------------------------------------------------ |
| id           | String  | (required) The html id of the input element                        |
| name         | String  | (required) The name of the html input element                      |
| checked      | Boolean | Default `false`. When true will switch radio to the checked state. |
| value        | String  | The associated value with the radio element.                       |
| v-model      | String  | Tracks the selected value                                          |
| disabled     | Boolean | Default `false`. When true will disable the radio element.         |
| radioClasses | String  | Classes to be applied to the `.mcw-radio` element.                 |
| label        | String  | Label associated with radio input control.                         |

### Reference

- <https://material.io/components/web/catalog/input-controls/radio-buttons>
