## Usage

```html
<mcw-menu-anchor class="myAnchor">
  <mcw-button raised @click="open = true">Open Menu</mcw-button>
  <mcw-menu v-model="open" @select="onSelect">
    <mcw-list-item>A Menu Item</mcw-list-item>
    <mcw-list-item>Another Menu Item</mcw-list-item>
    <li role="separator" class="mdc-list-divider"></li>
    <mcw-list-item>A Menu Item</mcw-list-item>
    <mcw-list-item>Parted Menu Item</mcw-list-item>
  </mcw-menu>
</mcw-menu-anchor>
```

```javascript
var vm = new Vue({
  data: {
    open: false,
  },
  methods: {
    onSelect(selected) {
      console.log('selected index: ' + selected.index);
    },
    onCancel() {
      console.log('menu cancelled');
    },
  },
});
```

### `mcw-menu`

#### Props

| props                 | Type              | Default     | Description                                              |
| --------------------- | ----------------- | ----------- | -------------------------------------------------------- |
| v-model               | Boolean or Object | false       | optional v-model when true opens menu                    |
| `quick-open`          | Boolean           | false       | Whether the menu should open and close without animation |
| `anchor-corner`       | Number            |             | set anchor corner alignment of menu corner               |
| `anchor-margin`       | Object            |             | set anchor margin of menu (top, right, bottom, left)     |
| `fixed`               | Boolean           | false       | use fixed positioning                                    |
| `absolute-position`   | Array             |             | use absolutely positioning , [x,y]                       |
| `type-ahead`          | Boolean           | false       | use type ahead functionality                             |
| `single-selection`    | Boolean           | false       | Turn on underlying list single selection mode            |
| `default-focus-state` | String            | 'LIST_ROOT' | where the menu should focus when opened                  |

> if open is an object it should set {focusIndex: number} as per [MDC menu docs](https://github.com/material-components/material-components-web/tree/master/packages/mcw-menu)

> for anchor corner and margin see the [MDC docs](https://github.com/material-components/material-components-web/tree/master/packages/mcw-menu#MDCMenu)

### Selection Group Menu

Menus can contain a group of list items that can represent the selection state of elements within the group.

```html
<mcw-menu-anchor class="myAnchor">
  <mcw-button raised @click="openGroup = true">Group Menu</mcw-button>
  <mcw-menu v-model="openGroup" @select="onSelect">
    <li>
      <ul class="mdc-menu__selection-group">
        <mcw-list-item group-icon="check">Single</mcw-list-item>
        <mcw-list-item group-icon="check">1.15</mcw-list-item>
      </ul>
    </li>
    <li class="mdc-list-divider" role="separator"></li>
    <mcw-list-item>Add space before paragraph</mcw-list-item>
  </mcw-menu>
</mcw-menu-anchor>
```

### Events

| props                | arg               | Description                              |
| -------------------- | ----------------- | ---------------------------------------- |
| `@update:modelValue` | Boolean           | notify that menu open state has changed. |
| `@select`            | `{ index, item }` | emitted when a menu item is selected     |

### Methods

- `show({focusIndex: number} = {}) => void`  
  Shows the menu. Takes an options object containing a `focusIndex` property that
  specifies the index of the menu item to be focused.
  If the options object or `focusIndex` is omitted, no menu item will be focused.

- `hide() => void`  
  Closes the menu.

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu>
