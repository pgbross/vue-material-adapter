## Usage

```html
<!-- material icons -->
<mcw-chip-set>
  <mcw-chip>Chip One</mcw-chip>
  <mcw-chip>Chip Two</mcw-chip>
</mcw-chip-set>
<br />

<mcw-chip-set>
  <mcw-chip id="jane-chip" leading-icon="face" trailing-icon="clear"
    >Jane Smith</mcw-chip
  >
  <mcw-chip leading-icon="face" trailing-icon="clear">John Doe</mcw-chip>
</mcw-chip-set>
```

### Props

#### `mcw-chip-set`

`mcw-chip-set` allows a user to enter information or select a choice.

| prop     | Type    | Default  | Description                                                     |
| -------- | ------- | -------- | --------------------------------------------------------------- |
| `choice` | Boolean | optional | Optional. Indicates that the chips in the set are choice chips, |
|          |         |          | which allow a single selection from a set of options.           |
| `filter` | Boolean | optional | Optional. Indicates that the chips in the set are filter chips, |
|          |         |          | which allow a multiple selection from a set of options.         |
| `input`  | Boolean | optional | Optional. Indicates that the chips in the set are input chips,  |
|          |         |          | which enable user input by converting text into chips.          |

#### `mcw-chip`

`mcw-chip` allows a user to enter information or select a choice.

| prop                              | Type    | Default  | Description                                        |
| --------------------------------- | ------- | -------- | -------------------------------------------------- |
| `leadingIcon`                     | String  | optional | optional leading icon                              |
| `trailingIcon`                    | String  | optional | Optional. Indicates a trailing icon which, removes |
|                                   |         |          | the chip from the DOM. Only use with input chips.  |
| `shouldRemoveOnTrailingIconClick` | Boolean | true     | If true, trailing icon interaction removes chip    |

| event                             | description                  |
| --------------------------------- | ---------------------------- |
| `MDCChip:interaction`             | On chip interaction          |
| `MDCChip:navigation`              | On chip navigation           |
| `MDCChip:removal`                 | On chip removal              |
| `MDCChip:selection`               | On chip selection            |
| `MDCChip:trailingIconInteraction` | On trailing icon interaction |

> Note: Events emitted by `material-components-web` on `mcw-chip` interaction appear as native events.

### Chips

```html
<mcw-chip-set input>
  <mcw-chip id="jane-chip" leading-icon="face" trailing-icon="clear"
    >Jane Smith</mcw-chip
  >
  <mcw-chip leading-icon="face" trailing-icon="clear">John Doe</mcw-chip>
</mcw-chip-set>
```

or with template slot

```html
<mcw-chip-set input>
  <mcw-chip>
    <template #leading-icon>
      <mcw-material-icon
        class="mdc-chip__icon mdc-chip__icon--leading"
        icon="add"
      ></mcw-material-icon
    ></template>

    Jane Smith
  </mcw-chip>
  <mcw-chip>
    <template #leading-icon>
      <mcw-material-icon
        class="mdc-chip__icon mdc-chip__icon--leading"
        icon="add"
      ></mcw-material-icon
    ></template>
    John Doe
  </mcw-chip>
</mcw-chip-set>
```

### Input Chips

Input chips are a variant of chips which enable user input by converting text into chips. To define a set of chips as input chips, set the property `input` to the chip set element.

### Choice Chips

Choice chips are a variant of chips which allow single selection from a set of options.

```html
      <mcw-chip-set choice>
        <mcw-chip>Extra small</mcw-chip>
        <mcw-chip>Small</mcw-chip>
        <mcw-chip>Medium</mcw-chip>
        <mcw-chip>Large</mcw-chip>
        <mcw-chip>Extra Large</mcw-chip>
      </mcw-chip-set>
</div>
```

### Filter chips

Filter chips are a variant of chips which allow multiple selection from a set of options. To define a set of chips as filter chips, add the class `mdc-chip-set--filter` to the chip set element. When a filter chip is selected, a checkmark appears as the leading icon. If the chip already has a leading icon, the checkmark replaces it. This requires the HTML structure of a filter chip to differ from other chips:

```html
<mcw-chip-set filter>
  <mcw-chip leading-icon="add">Tops</mcw-chip>
  <mcw-chip>
    <mcw-material-icon slot="leading-icon" icon="add"></mcw-material-icon
    >Bottoms
  </mcw-chip>
  <mcw-chip>Shoes</mcw-chip>
  <mcw-chip>Accessories</mcw-chip>
</mcw-chip-set>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips>
