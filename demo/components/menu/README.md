## Usage

```html
<mcw-menu-anchor class="myAnchor">
  <mcw-button raised @click="open = true">Open Menu</mcw-button>
  <mcw-menu v-model="open" @select="onSelect">
    <li class="mdc-list-item" role="menuitem">
      <span class="mdc-list-item__text">A Menu Item</span>
    </li>
    <li class="mdc-list-item" role="menuitem">
      <span class="mdc-list-item__text">Another Menu Item</span>
    </li>
    <mcw-list-divider></mcw-list-divider>
    <li class="mdc-list-item" role="menuitem">
      <span class="mdc-list-item__text">A Menu Item</span>
    </li>
    <li class="mdc-list-item" role="menuitem">
      <span class="mdc-list-item__text">Parted Menu Item</span>
    </li>
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

### Props

#### mcw-menu

| props           | Type              | Default   | Description                                                   |
| --------------- | ----------------- | --------- | ------------------------------------------------------------- |
| `open`          | Boolean or Object | false     | optional v-model when true opens menu                         |
| `quick-open`    | Boolean           | false     | sets whether the menu should open and close without animation |
| `anchor-corner` | Number            | undefined | set anchor corner alignment of menu corner                    |
| `anchor-margin` | Object            | undefined | set anchor margin of menu (top, right, bottom, left)          |

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
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__graphic mdc-menu__selection-group-icon">
            <i class="material-icons">check</i>
          </span>
          <span class="mdc-list-item__text">Single</span>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__graphic mdc-menu__selection-group-icon">
            <i class="material-icons">check</i>
          </span>
          <span class="mdc-list-item__text">1.15</span>
        </li>
      </ul>
    </li>
    <li class="mdc-list-divider" role="separator"></li>
    <li class="mdc-list-item" role="menuitem">
      <span class="mdc-list-item__text">Add space before paragraph</span>
    </li>
  </mcw-menu>
</mcw-menu-anchor>
```

### Events

| props     | arg                                    | Description                                                |
| --------- | -------------------------------------- | ---------------------------------------------------------- |
| `@change` | Boolean                                | notify v-model/listeners that menu open state has changed. |
| `@select` | `{ index: Number, item: HTMLElement }` | emitted when a menu item is selected                       |
| `@cancel` |                                        | emitted when menu is cancelled                             |

> `select` event data specifies index and item :

### Methods

- `show({focusIndex: number} = {}) => void`  
  Shows the menu. Takes an options object containing a `focusIndex` property that
  specifies the index of the menu item to be focused.
  If the options object or `focusIndex` is omitted, no menu item will be focused.

- `hide() => void`  
  Closes the menu.

### Reference

- <https://material.io/components/web/catalog/menus>
