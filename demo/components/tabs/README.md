## Usage

```html
<mcw-tab-bar active-tab-index="1" @update:modelValue="onSelected">
  <mcw-tab v-for="item in filteredItems" :key="item.label">{{ item }}</mcw-tab>
</mcw-tab-bar>
```

```javascript
var vm = new Vue({
  data() {
    const items = [
      'item one',
      'item two',
      'item three',
      'item four',
      'item five',
      'item six',
      'item seven',
    ];
    return {
      selectedItem: items[0],
      items,
    };
  },
  computed: {
    filteredItems() {
      return this.items.slice(0, 3);
    },
  },
  methods: {
    onSelected(idx) {
      this.selectedItem = this.items[idx];
    },
  },
  },
});
```

### `mcw-tab-bar`

#### Props

`mcw-tab` behaves as a navigational link. Add an `href` for simple link behavior
or the `to` property for router-link behavior. `mcw-tab` dispatches `@click` event.

| prop             | Type    | Default | Description                                                        |
| ---------------- | ------- | ------- | ------------------------------------------------------------------ |
| `activeTabIndex` | Number  |         | set the tab active                                                 |
| `fade`           | Boolean | false   | Use fade transition, else slide                                    |
| `stacked`        | Boolean | false   | Tab icon and label should flow vertically instead of horizontally. |
| `spanContent`    | Boolean | false   | Tab indicator will span only the content of the tab                |

#### Events

| props                   | args   | Description                   |
| ----------------------- | ------ | ----------------------------- |
| `mdc-tab-bar:activated` | number | Native event on index update. |
| `@update:modelValue`    | number | On active index update.       |

#### Tabs with icons

```html
<mcw-tab-bar>
  <mcw-tab icon="phone"></mcw-tab>
  <mcw-tab icon="{className: 'fa fa-favorite'}"></mcw-tab>
  <mcw-tab><svg slot="icon">...</svg></mcw-tab>
</mcw-tab-bar>
```

> use `icon` slot for custom icon markup

#### Tabs with icons and text

```html
<mcw-tab-bar>
  <mcw-tab icon="phone">Recents</mcw-tab>
  <mcw-tab icon="favorite">Favorites</mcw-tab>
  <mcw-tab icon="personal_pin">Nearby</mcw-tab>
</mcw-tab-bar>
```

### `mcw-tab`

#### Props

`mcw-tab` behaves as a navigational link. Add an `href` for simple link behavior
or the `to` property for router-link behavior. `mcw-tab` dispatches `@click` event.

| prop     | Type    | Default | Description        |
| -------- | ------- | ------- | ------------------ |
| `active` | Boolean | false   | set the tab active |

> Supports Vue-Router props

### reference

- <https://material.io/components/web/catalog/tabs>
