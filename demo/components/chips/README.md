## Usage

```html
<!-- material icons -->
<mcw-chip-set>
  <mcw-chip>Chip One</mcw-chip>
  <mcw-chip>Chip Two</mcw-chip>
</mcw-chip-set>
```

### props

#### mcw-chip-set

`mcw-chip-set` allows a user to enter information or select a choice.

| prop     | Type    | Default  | Description                                                     |
| -------- | ------- | -------- | --------------------------------------------------------------- |
| `choice` | Boolean | optional | Optional. Indicates that the chips in the set are choice chips, |
|          |         |          | which allow a single selection from a set of options.           |
| `filter` | Boolean | optional | Optional. Indicates that the chips in the set are filter chips, |
|          |         |          | which allow a multiple selection from a set of options.         |
| `input`  | Boolean | optional | Optional. Indicates that the chips in the set are input chips,  |
|          |         |          | which enable user input by converting text into chips.          |

#### mcw-chip

`mcw-chip` that allows a user to enter information or select a choice.

| prop                              | Type    | Default  | Description                                                                                         |
| --------------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------- |
| `leadingIcon`                     | String  | optional | optional leading icon                                                                               |
| `trailingIcon`                    | String  | optional | Optional. Indicates a trailing icon which removes the chip from the DOM. Only use with input chips. |
| `shouldRemoveOnTrailingIconClick` | Boolean | true     | indicates if interaction with trailing icon should remove chip                                      |

| event                            | description                                        |
| -------------------------------- | -------------------------------------------------- |
| @MDCChip:interaction             | emitted on chip interaction (will bubble)          |
| @MDCChip:trailingIconInteraction | emitted on trailing icon interaction (will bubble) |

> Note: Events emitted by `material-components-web` on `mcw-chip` interaction appear as normal `Vue` events (no need for the .native modifier) and also "bubble" so can be listened for on the `mcw-chip-set` element and will receive the `mcw-chip` instance in the `detail` property.

### Input chips

```html
<mcw-chip-set input>
  <mcw-chip id="wiffle" leading-icon="face" trailing-icon="clear"
    >Jane Smith</mcw-chip
  >
  <mcw-chip leading-icon="face" trailing-icon="clear">John Doe</mcw-chip>
</mcw-chip-set>
```

or with font-awesome

```html
<mcw-chip-set input>
  <mcw-chip>
    <div slot="leading-icon" class="fa fa-font-awesome"></div>
    <div slot="trailing-icon">
      <span role="gridcell" class="fa fa-times"></span>
    </div>
    Jane Smith
  </mcw-chip>
  <mcw-chip>
    <div slot="leading-icon" class="fa fa-smile-o"></div>
    <div slot="trailing-icon">
      <span role="gridcell" class="fa fa-times"></span>
    </div>
    John Doe
  </mcw-chip>
</mcw-chip-set>
```

### Filter chips

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

### reference

- <https://material.io/components/web/catalog/chips>
