## Usage

### Basic List

```html
<mcw-list @action="onAction">
  <mcw-list-item>Photos</mcw-list-item>
  <mcw-list-item>Recipes</mcw-list-item>
  <mcw-list-item>Work</mcw-list-item>
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
<mcw-list dense>
  <mcw-list-item>Dense item</mcw-list-item>
  <mcw-list-item>Dense item</mcw-list-item>
  <mcw-list-item>Dense item</mcw-list-item>
</mcw-list>
```

### Bordered List

```html
<mcw-list bordered>
  <mcw-list-item>Bordered item</mcw-list-item>
  <mcw-list-item>Bordered item</mcw-list-item>
  <mcw-list-item>Bordered item</mcw-list-item>
</mcw-list>
```

### Two-line lists

To insert a second line, set the slot attribute to `secondary`

```html
<mcw-list two-line>
  <mcw-list-item>
    <span>First Line</span>
    <span slot="secondary">Second Line</span>
  </mcw-list-item>
  <mcw-list-item>
    <span>First Line</span>
    <span slot="secondary">Second Line</span>
  </mcw-list-item>
</mcw-list>
```

### List “Detail” Elements

To insert a detail, set the slot attribute to `start-detail` or `end-detail`

```html
<mcw-list>
  <mcw-list-item>
    <i slot="start-detail" class="material-icons">favorite_border</i>
    With start details
  </mcw-list-item>
  <mcw-list-item>
    With end details
    <i slot="end-detail" class="material-icons">star_border</i>
  </mcw-list-item>
</mcw-list>
```

### Avatar start detail

```html
<mcw-list avatar-list>
  <mcw-list-item>
    <img
      slot="start-detail"
      src="/users/1/profile_pic.png"
      width="56"
      height="56"
      alt="Picture of Janet Perkins"
    />
    Janet Perkins
  </mcw-list-item>
  <mcw-list-item>
    <img
      slot="start-detail"
      src="/users/2/profile_pic.png"
      width="56"
      height="56"
      alt="Picture of Peter Carlsson"
    />
    Peter Carlsson
  </mcw-list-item>
</mcw-list>
```

### List Dividers

```html
<mcw-list>
  <mcw-list-item>Single-line item</mcw-list-item>
  <mcw-list-item>Single-line item</mcw-list-item>
  <mcw-list-divider />
  <mcw-list-item>Single-line item</mcw-list-item>
</mcw-list>
```

> Separators span the entire list width by default, use the `padded` property to add padding

```html
<mcw-list>
  <mcw-list-item>Single-line item</mcw-list-item>
  <mcw-list-divider padded />
  <mcw-list-item>Single-line item</mcw-list-item>
</mcw-list>
```

> for avatar list, add the `inset` attribute to `mcw-list-divider`

```html
<mcw-list avatar-list>
  <mcw-list-item>
    <img
      slot="start-detail"
      src="/users/1/profile_pic.png"
      width="56"
      height="56"
      alt="Picture of Janet Perkins"
    />
    Janet Perkins
  </mcw-list-item>
  <mcw-list-divider inset />
  <mcw-list-item>
    <img
      slot="start-detail"
      src="/users/2/profile_pic.png"
      width="56"
      height="56"
      alt="Picture of Peter Carlsson"
    />
    Peter Carlsson
  </mcw-list-item>
</mcw-list>
```

### List Groups

```html
<mcw-list-group>
  <mcw-list-group-header>Group 1</mcw-list-group-header>
  <mcw-list>
    <mcw-list-item>Single-line item</mcw-list-item>
    <mcw-list-item>Single-line item</mcw-list-item>
    <mcw-list-item>Single-line item</mcw-list-item>
  </mcw-list>
  <mcw-list-group-divider />
  <mcw-list-group-header>Group 2</mcw-list-group-header>
  <mcw-list>
    <mcw-list-item>Single-line item</mcw-list-item>
    <mcw-list-item>Single-line item</mcw-list-item>
    <mcw-list-item>Single-line item</mcw-list-item>
  </mcw-list>
</mcw-list-group>
```

### Reference

- <https://material.io/components/web/catalog/lists>
