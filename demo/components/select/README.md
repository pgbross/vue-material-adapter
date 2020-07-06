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

<br />
<mcw-select v-if="selectedType" v-model="selectedValue" outlined label="Kind">
  <mcw-menu class="mdc-select__menu">
    <li
      v-for="option of options"
      :key="option"
      :data-value="option.toLowerCase()"
      class="mdc-list-item"
      role="menuitem"
    >
      <span class="mdc-list-item__text">{{ option }}</span>
    </li>
  </mcw-menu>
</mcw-select>
<span>Selected: {{ selected }}</span>
```

```javascript
var vm = new Vue({
  data() {
    return {
      selectedType: 'Meat',
      selectedValue: undefined,
      food: {
        Vegetables: ['Spinach', 'Carrots', 'Onions', 'Broccoli'],
        Meat: ['Eggs', 'Chicken', 'Fish', 'Turkey', 'Pork', 'Beef'],
        Fruits: ['Apples', 'Oranges', 'Bananas', 'Berries', 'Lemons'],
      },
    };
  },
  computed: {
    types() {
      return Object.keys(this.food);
    },
    options() {
      return this.selectedType ? this.food[this.selectedType] : [];
    },
  },
  methods: {
    onTypeChanged(nv) {
      console.log(nv);
      this.selectedType = nv;
      this.selectedValue = null;
    },
    onKindChanged(nv) {
      this.selectedValue = nv;
    },
  },
};
```

### mcw-select

| props                | Type    | Default | Description                     |
| -------------------- | ------- | ------- | ------------------------------- |
| `label`              | String  |         | the selection label             |
| `value`              | String  |         | the v-model                     |
| `disabled`           | Boolean | false   | whether this select is disabled |
| `outlined`           | Boolean | false   | outlined style                  |
| `helptext`           | String  |         | Helptext                        |
| `helptextPersistent` | Boolean |         | Always show helptext            |
| `leadingIcon`        | String  |         | Optional leading icon           |
| `disabled`           | Boolean | false   | Disables control                |
| `label`              | String  |         | Optional field label            |
| `outlined`           | Boolean | false   | Use outline variant             |

| event              | Description                                         |
| ------------------ | --------------------------------------------------- |
| `@change`          | emitted on change (supressed if value is unchanged) |
| `MDCSelect:change` | Native event emitted on change                      |

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-select>
