## Usage

```html
<!-- material icons -->
<mdc-chip-set>
  <mdc-chip leading-icon="face" trailing-icon="more_vert">Jane Smith</mdc-chip>
  <mdc-chip leading-icon="face" trailing-icon="more_vert">John Doe</mdc-chip>
</mdc-chip-set>

<!-- font-awesome -->
<mdc-chip-set>
  <mdc-chip :shouldRemoveOnTrailingIconClick="false">
    <div slot="leading-icon" class="fa fa-font-awesome"></div>
    <div slot="trailing-icon" class="fa fa-ellipsis-v"></div>
    Jane Smith
  </mdc-chip>
  <mdc-chip :shouldRemoveOnTrailingIconClick="false">
    <div slot="leading-icon" class="fa fa-smile-o"></div>
    <div slot="trailing-icon" class="fa fa-ellipsis-v"></div>
    John Doe
  </mdc-chip>
</mdc-chip-set>
```

### props

#### mdc-chip-set

`mdc-chip-set` allows a user to enter information or select a choice.

| prop     | Type    | Default  | Description                                                     |
| -------- | ------- | -------- | --------------------------------------------------------------- |
| `choice` | Boolean | optional | Optional. Indicates that the chips in the set are choice chips, |
|          |         |          | which allow a single selection from a set of options.           |
| `filter` | Boolean | optional | Optional. Indicates that the chips in the set are filter chips, |
|          |         |          | which allow a multiple selection from a set of options.         |
| `input`  | Boolean | optional | Optional. Indicates that the chips in the set are input chips,  |
|          |         |          | which enable user input by converting text into chips.          |

#### mdc-chip

`mdc-chip` that allows a user to enter information or select a choice.

| prop                              | Type                                               | Default   | Description                                                                                         |
| --------------------------------- | -------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| `id`                              |                                                    | unique id | A chip id                                                                                           |
| `leadingIcon`                     | String                                             | optional  | optional leading icon                                                                               |
| `trailingIcon`                    | String                                             | optional  | Optional. Indicates a trailing icon which removes the chip from the DOM. Only use with input chips. |
| `shouldRemoveOnTrailingIconClick` | Boolean                                            | true      | indicates if interaction with trailing icon should remove chip                                      |
| event                             | description                                        |
| --------------------------------  | -------------------------------------------------- |
| @MDCChip:interaction              | emitted on chip interaction (will bubble)          |
| @MDCChip:trailingIconInteraction  | emitted on trailing icon interaction (will bubble) |

> Note: Events emitted by `material-components-web` on `mdc-chip` interaction appear as normal `Vue` events (no need for the .native modifier) and also "bubble" so can be listened for on the `mdc-chip-set` element and will receive the `mdc-chip` instance in the `detail` property.

### Chips with icons

```html
<mdc-chip-set>
  <mdc-chip leadingIcon="face" trailingIcon="more_vert">Jane Smith</mdc-chip>
  <mdc-chip leadingIcon="face" trailingIcon="more_vert">John Doe</mdc-chip>
</mdc-chip-set>
```

### reference

- <https://material.io/components/web/catalog/chips>
