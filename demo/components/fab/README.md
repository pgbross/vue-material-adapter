## Usage

```html
<mcw-fab icon="favorite"></mcw-fab>
<mcw-fab mini icon="favorite"></mcw-fab>
<mcw-fab icon="favorite" label="wiffle" />
<mcw-fab icon="home" @click="scrollToTop"></mcw-fab>
<mcw-fab>
  <mcw-material-icon icon="add" slot="icon"></mcw-material-icon>
</mcw-fab>
```

> refer to [Material Design Icon Font](https://material.io/icons/) for the list of icons

> add an `href` attribute for link

### events

| event    | args | Description      |
| -------- | ---- | ---------------- |
| `@click` |      | emitted on click |

### props

| prop     | Type    | Default | Description                           |
| -------- | ------- | ------- | ------------------------------------- |
| `icon`   | String  |         | material-icon content (\*)            |
| `mini`   | Boolean |         | mini style (40x40 pixels) (\*)        |
| `label`  | String  |         | If label, is extended FAB             |
| `exited` | Boolean |         | If true animates the FAB out of view. |

> Supports Vue-Router props

### Custom Icons

**Font Awsome**

```html
<mcw-fab>
  <span class="fa fa-star" slot="icon"></span>
</mcw-fab>
```

**SVG Icons**

```html
<mcw-fab>
  <svg slot="icon"><!-- content here --></svg>
</mcw-fab>
```

### Link FAB

#### Simple Link

Using the href attribute will render `<a role="button" href="...">`

```html
<mcw-fab icon="home" href="#">Home</mcw-fab>
```

#### Router-link

If the `to` property is defined, the item behaves as a
[router-link](https://router.vuejs.org/en/api/router-link.html)

```html
<mcw-fab icon="home" to="/home">Home</mcw-fab>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab>
