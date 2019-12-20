## Usage

### Basic List

```html
<mcw-list @action="onAction">
  <li class="mdc-list-item" tabindex="0">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
</mcw-list>
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

| prop          | Type    | Default | Description                                              |
| ------------- | ------- | ------- | -------------------------------------------------------- |
| `dense`       | Boolean |         | dense style                                              |
| `bordered`    | Boolean |         | bordered style                                           |
| `two-line`    | Boolean |         | two-line style                                           |
| `avatar-list` | Boolean |         | set avatar style list                                    |
| `interactive` | Boolean |         | set interactive style for hover, focus, and press states |

#### mcw-list-item

| prop        | Type    | Default | Description                               |
| ----------- | ------- | ------- | ----------------------------------------- |
| `selected`  | Boolean |         | Styles the row in a selected state (\*)   |
| `activated` | Boolean |         | Styles the row in an activated state (\*) |

> Note: the difference between selected and activated states:

- Selected is ephemeral and likely to change soon. E.g., selecting one or more photos to share in Google Photos. Multiple items in a list can be selected at the same time.
- Activated is more permanent within the page’s lifetime. E.g., the currently highlighted destination in a nav drawer. Only one item in a list can be activated at a time.

> if the list is interactive, `mcw-list-item` will dispatch mouse and keyboard listeners (`@click`, ...)

### Dense List

```html
<mcw-list dense @action="onAction">
  <li class="mdc-list-item" tabindex="0">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
</mcw-list>
```

### Two-line lists

Add attribute `two-line`

```html
<mcw-list two-line @action="onAction">
  <li class="mdc-list-item" tabindex="0">
    <span class="mdc-list-item__text">
      <span class="mdc-list-item__primary-text">Two-line item</span>
      <span class="mdc-list-item__secondary-text">Secondary text</span>
    </span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">
      <span class="mdc-list-item__primary-text">Two-line item</span>
      <span class="mdc-list-item__secondary-text">Secondary text</span>
    </span>
  </li>
  <li class="mdc-list-item">
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
  <mcw-list @action="onAction">
    <li class="mdc-list-item" tabindex="0">
      <span class="mdc-list-item__text">line item</span>
    </li>
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">line item</span>
    </li>
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">line item</span>
    </li>
  </mcw-list>
  <h3 class="mdc-list-group__subheader">List 2</h3>
  <mcw-list @action="onAction">
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">line item</span>
    </li>
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">line item</span>
    </li>
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">line item</span>
    </li>
  </mcw-list>
</div>
```

### List Dividers

```html
<mcw-list @action="onAction">
  <li class="mdc-list-item" tabindex="0">
    <span class="mdc-list-item__text">Item 1 - Division 1</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 2 - Division 1</span>
  </li>
  <li role="separator" class="mdc-list-divider"></li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 1 - Division 2</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 2 - Division 2</span>
  </li>
</mcw-list>
```

or

```html
<mcw-list @action="onAction">
  <li class="mdc-list-item" tabindex="0">
    <span class="mdc-list-item__text">Item 1 - List 1</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 2 - List 1</span>
  </li>
</mcw-list>
<hr class="mdc-list-divider" />

<mcw-list @action="onAction">
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 1 - List 2</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 2 - List 2</span>
  </li>
</mcw-list>
```

### Radio buttons

```html
<mcw-list role="radio" aria-checked="false" @action="onAction">
  <li class="mdc-list-item" role="radio" aria-checked="false">
    <span class="mdc-list-item__graphic">
      <mcw-radio id="demo-list-radio-item-1" name="demo-list-radio"></mcw-radio>
    </span>
    <label class="mdc-list-item__text" for="demo-list-radio-item-1"
      >Option 1</label
    >
  </li>
  <li class="mdc-list-item" role="radio" aria-checked="true" tabindex="0">
    <span class="mdc-list-item__graphic">
      <mcw-radio id="demo-list-radio-item-2" name="demo-list-radio"></mcw-radio>
    </span>
    <label class="mdc-list-item__text" for="demo-list-radio-item-2"
      >Option 2</label
    >
  </li>
  <li class="mdc-list-item" role="radio" aria-checked="false">
    <span class="mdc-list-item__graphic">
      <mcw-radio id="demo-list-radio-item-3" name="demo-list-radio"></mcw-radio>
    </span>
    <label class="mdc-list-item__text" for="demo-list-radio-item-3"
      >Option 3</label
    >
  </li>
</mcw-list>
```

### Checkboxes

```html
<mcw-list role="group" aria-label="List with checkbox items" @action="onAction">
  <li class="mdc-list-item" role="checkbox" aria-checked="false">
    <span class="mdc-list-item__graphic">
      <mcw-checkbox id="demo-list-checkbox-item-1"></mcw-checkbox>
    </span>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-1"
      >Option 1</label
    >
  </li>
  <li class="mdc-list-item" role="checkbox" aria-checked="true" tabindex="0">
    <span class="mdc-list-item__graphic">
      <mcw-checkbox id="demo-list-checkbox-item-2" checked></mcw-checkbox>
    </span>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
      >Option 2</label
    >
  </li>
  <li class="mdc-list-item" role="checkbox" aria-checked="false">
    <span class="mdc-list-item__graphic">
      <mcw-checkbox id="demo-list-checkbox-item-3"></mcw-checkbox>
    </span>
    <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
      >Option 3</label
    >
  </li>
</mcw-list>
```

### Reference

- <https://material.io/components/web/catalog/lists>
