## Usage

```html
<mcw-select
  :value="selectedType"
  label="Food"
  helptext="Pick a food group"
  @change="onTypeChanged"
>
  <mcw-menu class="mdc-select__menu">
    <li
      v-for="type in types"
      :key="type"
      class="mdc-list-item"
      role="menuitem"
      :data-value="type"
    >
      <span class="mdc-list-item__text">{{ type }}</span>
    </li>
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

| props                | Type    | Default | Description                                  |
| -------------------- | ------- | ------- | -------------------------------------------- |
| `label`              | String  |         | the selection label (placeholder)            |
| `value`              | String  |         | bind with v-model (update on `change` event) |
| `disabled`           | Boolean | false   | whether this select is disabled              |
| `outlined`           | Boolean | false   | outlined style                               |
| `helptext`           | String  |         | Helptext                                     |
| `helptextPersistent` | Boolean |         | Always show helptext                         |
| `leadingIcon`        | String  |         | Optional leading icon                        |
| `disabled`           | Boolean | false   | Disables control                             |
| `label`              | String  |         | Optional field label                         |
| `outlined`           | Boolean | false   | Use outline variant                          |

| event               | Description                                         |
| ------------------- | --------------------------------------------------- |
| `@change`           | emitted on change (supressed if value is unchanged) |
| `@MDCSelect:change` | Native event emitted on change                      |

### Reference

- <https://material.io/components/web/catalog/input-controls/select-menus>
