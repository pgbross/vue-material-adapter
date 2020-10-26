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
    <template #secondary-text> <span>Secondary text</span></template>
  </mcw-list-item>

  <mcw-list-item two-line="Other secondary text">Two-line item </mcw-list-item>

  <mcw-list-item
    >Two-line item
    <template #secondary-text> <span>More secondary text</span></template>
  </mcw-list-item>
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
  <mcw-list-item role="radio" name="demo-group">
    <label class="mdc-list-item__text" for="demo-list-radio-item-1"
      >Option 1</label
    ></mcw-list-item
  >

  <mcw-list-item role="radio" aria-checked="true" name="demo-group">
    <label class="mdc-list-item__text" for="demo-list-radio-item-2"
      >Option 2</label
    >
  </mcw-list-item>
  <mcw-list-item role="radio" name="demo-group">
    <label class="mdc-list-item__text" for="demo-list-radio-item-3"
      >Option 3</label
    >
  </mcw-list-item>
</mcw-list>
```

### Checkboxes (trailing example)

```html
<mcw-list
  v-model="listSelected"
  role="group"
  aria-label="List with checkbox items"
  class="demo-list"
>
  <mcw-list-item role="checkbox" aria-checked="true" trailing>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-1"
      >Option 1</label
    >
  </mcw-list-item>
  <mcw-list-item role="checkbox" tabindex="0" trailing>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
      >Option 2</label
    >
  </mcw-list-item>
  <mcw-list-item role="checkbox" trailing>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-3"
      >Option 3</label
    >
  </mcw-list-item>
</mcw-list>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-list>
