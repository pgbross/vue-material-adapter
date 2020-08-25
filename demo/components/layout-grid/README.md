## Usage

### Grid

Material design’s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.

```html
<mcw-layout-grid class="my-grid">
  <mcw-layout-cell class="cell cell1" desktop="3" tablet="3" />
  <mcw-layout-cell class="cell cell2" desktop="3" tablet="5" align="top">
    <div class="mdc-typeography--body1">align="top"</div>
  </mcw-layout-cell>
  <mcw-layout-cell class="cell cell3" desktop="3" tablet="5" align="middle">
    <div class="mdc-typeography--body1">align="middle"</div>
  </mcw-layout-cell>
  <mcw-layout-cell class="cell cell4" desktop="3" tablet="3" align="bottom">
    <div class="mdc-typeography--body1">align="bottom"</div>
  </mcw-layout-cell>
</mcw-layout-grid>
```

Grid can define its own max-width or designate its columns to be a certain width.

| prop                 | Type    | Default | Description                             |
| -------------------- | ------- | ------- | --------------------------------------- |
| `fixed-column-width` | Boolean |         | The grid should have fixed column width |
| `align-left`         | Boolean |         | Left aligned                            |
| `align-right`        | Boolean |         | Right aligned                           |

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
<https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid>
