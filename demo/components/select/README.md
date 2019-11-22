## Usage

```html
<mcw-select v-model="selectedType" label="Food" helptext="Pick a food group">
  <mcw-menu class="mdc-select__menu">
    <mcw-list-item v-for="type in types" :data-value="type" :key="type"
      >{{ type }}</mcw-list-item
    >
  </mcw-menu>
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
