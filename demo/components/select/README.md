## Usage

```html
<mcw-select v-model="selectedType" label="Food" helptext="Pick a food group">
  <ul class="mdc-list">
    <li
      class="mdc-list-item mdc-list-item--selected"
      data-value
      aria-selected="true"
    ></li>
    <li class="mdc-list-item" data-value="grains">
      Bread, Cereal, Rice, and Pasta
    </li>
    <li class="mdc-list-item" data-value="vegetables">Vegetables</li>
    <li class="mdc-list-item" data-value="fruit">Fruit</li>
  </ul>
</mcw-select>
<span>Selected: {{ selected }}</span>
```

```javascript
var vm = new Vue({
  data() {
    return {
      selected: '',
    };
  },
});
```

### mcw-select

| props      | Type    | Default | Description                                  |
| ---------- | ------- | ------- | -------------------------------------------- |
| `label`    | String  |         | the selection label (placeholder)            |
| `value`    | String  |         | bind with v-model (update on `change` event) |
| `disabled` | Boolean | false   | whether this select is disabled              |
| `outlined` | Boolean | false   | outlined style                               |

| event    | Description             |
| -------- | ----------------------- |
| `@focus` | emitted on focus gained |
| `@blur`  | emitted on focus lost   |

### Reference

- <https://material.io/components/web/catalog/input-controls/select-menus>
