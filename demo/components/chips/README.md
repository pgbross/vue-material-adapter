## Usage

```html
<!-- material icons -->
<mcw-chip-set>
  <mcw-chip id="c1" leading-icon="favorite" presentational>Chip One </mcw-chip>
  <mcw-chip id="c2" trailing-icon="clear_all">Chip Two </mcw-chip>

  <mcw-chip id="c3" disabled trailing-icon="clear_all">Chip Three </mcw-chip>
</mcw-chip-set>
<br />

<mcw-chip-set>
  <mcw-chip-set role="listbox" ref="filters">
    <mcw-chip id="jane-chip" leading-icon="face" trailing-icon="clear"
      >Jane Smith</mcw-chip
    >
    <mcw-chip id="john-chip" trailing-icon="clear">John Doe</mcw-chip>
  </mcw-chip-set>
</mcw-chip-set>
```

### Props

#### `mcw-chip-set`

`mcw-chip-set` allows a user to enter information or select a choice.

| prop               | Type    | Default    | Description                                      |
| ------------------ | ------- | ---------- | ------------------------------------------------ |
| `multi-selectable` | Boolean | false      | If true behaviour is multi-selectable            |
| `orientation`      | String  | horizontal | horizontal or vertical                           |
| `overflow`         | Boolean | false      | Causes chips to overflow instead of wrap         |
| `role`             | String  | grid       | grid if input or action, listbox if filter chips |

#### `mcw-chip`

`mcw-chip` allows a user to enter information or select a choice.

| prop                              | Type    | Default  | Description                                        |
| --------------------------------- | ------- | -------- | -------------------------------------------------- |
| `leadingIcon`                     | String  | optional | optional leading icon                              |
| `trailingIcon`                    | String  | optional | Optional. Indicates a trailing icon which, removes |
|                                   |         |          | the chip from the DOM. Only use with input chips.  |
| `shouldRemoveOnTrailingIconClick` | Boolean | true     | If true, trailing icon interaction removes chip    |
| `avatar`                          | Boolean | false    | If true space for avatar                           |

> Note: Events emitted by `material-components-web` on `mcw-chip` interaction appear as native events.

### Chips

```html
<mcw-chip-set>
  <mcw-chip id="c1" leading-icon="favorite" presentational>Chip One </mcw-chip>
  <mcw-chip id="c2" trailing-icon="clear_all">Chip Two </mcw-chip>

  <mcw-chip id="c3" disabled trailing-icon="clear_all">Chip Three </mcw-chip>
</mcw-chip-set>
```

```html
<section class="mcw-demo">
  <div class="mdc-typography--headline6">Filter Chips</div>
  <mcw-chip-set role="listbox" ref="filters">
    <mcw-chip id="jane-chip" leading-icon="face" trailing-icon="clear"
      >Jane Smith</mcw-chip
    >
    <mcw-chip id="john-chip" trailing-icon="clear">John Doe</mcw-chip>
  </mcw-chip-set>
</section>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips>
