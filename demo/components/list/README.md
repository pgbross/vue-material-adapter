## Usage

### Basic List

```html
<div class="demo-list-example">
  <h3 class="mdc-typography--subtitle1">Single-Line</h3>
  <mcw-list @change="onAction" class="demo-list">
    <mcw-list-item tabindex="0">Single-line item 1</mcw-list-item>
    <mcw-list-item>Single-line item 2</mcw-list-item>
    <mcw-list-item>Single-line item 3</mcw-list-item>
  </mcw-list>
</div>
```

```javascript
export default {
  methods: {
    onAction({ index }) {
      console.log(index);
    },
  },
};
```

### Props

#### mcw-list

| prop               | Type    | Default  | Description                                                       |
| ------------------ | ------- | -------- | ----------------------------------------------------------------- |
| `dense`            | Boolean | false    | dense style                                                       |
| `two-line`         | Boolean | false    | two-line style                                                    |
| `avatar-list`      | Boolean | false    | set avatar style list                                             |
| `non-interactive`  | Boolean | false    | set non-interactive style for hover, focus, and press states      |
| `single-selection` | Boolean | false    | set single-selection list                                         |
| `wrap-focus`       | Boolean | false    | wrap to top of list on next element                               |
| `textualList`      | Boolean | false    | configures lists that start with text                             |
| `selected-index`   |         |          | the v-model property                                              |
| `tag`              | String  | ul       | The tag the list is rendered with                                 |
| `aria-orientation` | String  | VERTICAL | Orientation VERTICAL or HORIZONTAL                                |
| `thumbnail-list`   | Boolean | false    | configures the leading tile of each row to display smaller images |
| `icon-list`        | Boolean | false    | configures the leading tile of each row to display icons          |
| `video-list`       | Boolean | false    | configures the leading tile of each row to display videos         |
| `type-ahead`       | Boolean | false    | configures the list to use typeahead                              |

### Two-line lists

Add attribute `two-line`

```html
<mcw-list v-model="selected" two-line class="demo-list">
  <mcw-list-item
    >Two-line item
    <span slot="secondary-text">Secondary text</span>
  </mcw-list-item>

  <mcw-list-item two-line="Other secondary text">Two-line item </mcw-list-item>

  <li class="mdc-list-item">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">
      <span class="mdc-list-item__primary-text">Two-line item</span>
      <span class="mdc-list-item__secondary-text">Secondary text</span>
    </span>
  </li>
</mcw-list>
```

### List group

```html
<div class="mdc-list-group">
  <h3 class="mdc-list-group__subheader">List 1</h3>
  <mcw-list v-model="selected" class="demo-list">
    <mcw-list-item tabindex="0">line item</mcw-list-item>
    <mcw-list-item>line item</mcw-list-item>
    <mcw-list-item>line item</mcw-list-item>
  </mcw-list>
  <h3 class="mdc-list-group__subheader">List 2</h3>
  <mcw-list v-model="selected" class="demo-list">
    <mcw-list-item tabindex="0">line item</mcw-list-item>
    <mcw-list-item>line item</mcw-list-item>
    <mcw-list-item>line item</mcw-list-item>
  </mcw-list>
</div>
```

### List Dividers

```html
<mcw-list v-model="selected" class="demo-list">
  <mcw-list-item tabindex="0">Item 1 - Division 1</mcw-list-item>
  <mcw-list-item>Item 2 - Division 1</mcw-list-item>

  <li role="separator" class="mdc-list-divider"></li>

  <mcw-list-item tabindex="0">Item 1 - Division 2</mcw-list-item>
  <mcw-list-item>Item 2 - Division 2</mcw-list-item>
</mcw-list>
```

or

### Radio buttons

```html
<mcw-list v-model="radioSelected" role="radiogroup" class="demo-list">
  <li class="mdc-list-item" role="radio" aria-checked="false">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__graphic">
      <mcw-radio
        id="demo-list-radio-item-1"
        v-model="picked"
        value="1"
        name="demo-list-radio"
      ></mcw-radio>
    </span>
    <label class="mdc-list-item__text" for="demo-list-radio-item-1"
      >Option 1</label
    >
  </li>
  <li class="mdc-list-item" role="radio" aria-checked="false">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__graphic">
      <mcw-radio
        id="demo-list-radio-item-2"
        v-model="picked"
        value="2"
        name="demo-list-radio"
      ></mcw-radio>
    </span>
    <label class="mdc-list-item__text" for="demo-list-radio-item-2"
      >Option 2</label
    >
  </li>
  <li class="mdc-list-item" role="radio" aria-checked="false">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__graphic">
      <mcw-radio
        id="demo-list-radio-item-3"
        v-model="picked"
        value="3"
        name="demo-list-radio"
      ></mcw-radio>
    </span>
    <label class="mdc-list-item__text" for="demo-list-radio-item-3"
      >Option 3</label
    >
  </li>
</mcw-list>
```

### Checkboxes

```html
<mcw-list
  v-model="listSelected"
  role="group"
  aria-label="List with checkbox items"
  class="demo-list"
>
  <li class="mdc-list-item" role="checkbox" aria-checked="false">
    <span class="mdc-list-item__graphic">
      <span class="mdc-list-item__ripple"></span>
      <mcw-checkbox id="demo-list-checkbox-item-1"></mcw-checkbox>
    </span>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-1"
      >Option 1</label
    >
  </li>
  <li class="mdc-list-item" role="checkbox" aria-checked="true" tabindex="0">
    <span class="mdc-list-item__graphic">
      <span class="mdc-list-item__ripple"></span>
      <mcw-checkbox id="demo-list-checkbox-item-2" checked></mcw-checkbox>
    </span>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
      >Option 2</label
    >
  </li>
  <li class="mdc-list-item" role="checkbox" aria-checked="false">
    <span class="mdc-list-item__graphic">
      <span class="mdc-list-item__ripple"></span>
      <mcw-checkbox id="demo-list-checkbox-item-3"></mcw-checkbox>
    </span>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
      >Option 3</label
    >
  </li>
</mcw-list>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-list>
