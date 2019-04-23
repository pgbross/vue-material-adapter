## Usage

```html
<mdc-radio label="Dog" radioClasses="my-radio">
  <mdc-radio-input
    v-model="picked"
    id="dog"
    name="pets"
    value="dog"
  ></mdc-radio-input>
</mdc-radio>
<mdc-radio label="Cat">
  <mdc-radio-input
    v-model="picked"
    id="cat"
    name="pets"
    value="cat"
  ></mdc-radio-input>
</mdc-radio>

<p>Answer: {{ picked }}</p>
```

```javascript
var vm = new Vue({
  data: {
    picked: null,
  },
});
```

> NOTE: The `.mdc-radio` element and the associated label are wrapped around an `.mdc-form-field` element for styling.

### mdc-radio props

| Prop Name    | Type   | Description                                        |
| ------------ | ------ | -------------------------------------------------- |
| radioClasses | String | Classes to be applied to the `.mdc-radio` element. |
| label        | String | Label associated with radio input control.         |

### mdc-radio-input props

| Prop Name | Type    | Description                                                        |
| --------- | ------- | ------------------------------------------------------------------ |
| checked   | Boolean | Default `false`. When true will switch radio to the checked state. |
| value     | String  | The associated value with the radio element.                       |
| v-model   | String  | Tracks the selected value                                          |
| disabled  | Boolean | Default `false`. When true will disable the radio element.         |

### Reference

- <https://material.io/components/web/catalog/input-controls/radio-buttons>
