## Usage

### Grid

A grid is a container that consists of a group of cells.
Cells get positioned in a sequence according to a predefined number of columns.
The grid and cells are not styled in any way, serving only for alignment and
positioning of elements.

```html
<mcw-layout-grid>
  <mcw-layout-cell>
    <p>Cell 1</p>
  </mcw-layout-cell>
  <mcw-layout-cell>
    <p>Cell 2</p>
  </mcw-layout-cell>
  <mcw-layout-cell>
    <p>Cell 3</p>
  </mcw-layout-cell>
</mcw-layout-grid>
```

Grid can define its own max-width or designate its columns to be a certain width.

| prop                 | Type    | Default | Description                      |
| -------------------- | ------- | ------- | -------------------------------- |
| `fixed-column-width` | Boolean |         | whether columns have fixed width |

The grid has 12 columns in desktop mode (>= 840px), 8 columns in tablet mode
(>= 480px), and 4 columns in phone mode (< 480px).

In accordance with the Material Design spec, layout grids set default margins and gutters to 24px on desktop and 16px on tablet
and phone.

### Cells

Cells specify how many columns to span (the default is 4).
Cells are placed side by side until there is no more room,
at which point the next cell is placed at the beginning of the next row.

```html
<mcw-layout-grid>
  <mcw-layout-cell desktop="3" tablet="3">
    Cell
  </mcw-layout-cell>
  <mcw-layout-cell desktop="3" tablet="5" align="top">
    Top
  </mcw-layout-cell>
  <mcw-layout-cell desktop="3" tablet="5" align="middle">
    Middle
  </mcw-layout-cell>
  <mcw-layout-cell desktop="3" tablet="3" align="bottom">
    Bottom
  </mcw-layout-cell>
</mcw-layout-grid>
```

| prop      | Type   | Default | Description                                                        |
| --------- | ------ | ------- | ------------------------------------------------------------------ |
| `span`    | Number | 4       | how many columns to span from 1 to 12                              |
| `phone`   | Number | 4       | how many columns to span in phone mode                             |
| `tablet`  | Number | 4       | how many columns to span in tablet mode                            |
| `desktop` | Number | 4       | how many columns to span in desktop mode                           |
| `align`   | String |         | whether cell content is aligned to the `top`, `bottom` or `middle` |
| `order`   | Number |         | cell order from 1 to 12                                            |

### Nesting

When your contents need extra structure that cannot be supported by single
layout grid, you can nest layout grid within each other with `mcw-layout-inner-grid`

```html
<mcw-layout-grid>
  <mcw-layout-cell>
    <mcw-layout-inner-grid>
      <mcw-layout-cell>
        <p>Second Level</p>
      </mcw-layout-cell>
      <mcw-layout-cell>
        <p>Second Level</p>
      </mcw-layout-cell>
    </mcw-layout-inner-grid>
  </mcw-layout-cell>
  <mcw-layout-cell>
    <p>First Level</p>
  </mcw-layout-cell>
  <mcw-layout-cell>
    <p>First Level</p>
  </mcw-layout-cell>
</mcw-layout-grid>
```

> However, the Material Design guidelines do not recommend a deeply nested grid since
> it could indicate an overly complicated UX.

### Customizing the Grid

The max width, fixed column width, margins, gutters and spans can be customized
with CSS custom properties:

```css
:root {
  --mcw-layout-grid-column-width-desktop: 84px;
  --mcw-layout-grid-margin-desktop: 40px;
  --mcw-layout-grid-gutter-tablet: 16px;
  --mcw-layout-grid-gutter-phone: 8px;
}
```

or SASS mixins:

```scss
.my-grid {
  @include mcw-layout-grid-inner(desktop, 16px, 16px);
}

.my-cell {
  @include mcw-layout-grid-cell(desktop, 4, 16px);
}
```

see MDC reference documentation for more:
<https://material.io/components/web/catalog/layout-grids>
