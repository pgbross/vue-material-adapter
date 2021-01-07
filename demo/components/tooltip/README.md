## Usage

```html
<div class="tooltip-demo">
  <mcw-tooltip id="tooltip-id">My tooltip 1</mcw-tooltip>
  <mcw-tooltip id="tooltip-id2" position="end,above"
    >Another tooltip 2</mcw-tooltip
  >
  This is <a aria-describedby="tooltip-id" href="www.google.com"> Link </a>.
  <p>
    Here is
    <mcw-button aria-describedby="tooltip-id2" outlined>My Button</mcw-button>
  </p>
</div>
```

```javascript
var vm = new Vue({
  data: {},
  methods: {
    onHidden() {
      console.dir('hidden');
    },
  },
});
```

### events

| event             | args | Description                                |
| ----------------- | ---- | ------------------------------------------ |
| mdctooltip:hidden |      | Emitted when the tooltip stops being shown |

### props

| prop         | Type          | Default | Description                 |
| ------------ | ------------- | ------- | --------------------------- |
| position     | String/Object |         | The position of the tooltop |
| boundaryType | String/Number |         | The anchor boundary type    |

`position`: This is either a comma separated string or an object {xPos: XPosition, yPos: YPosition}
eg. "end,above" or {xPos:"center", yPos:"below"} or {xPos: 0, yPos: 1}

XPosition {
'detected' = 0,
'start' = 1,
'center' = 2,
'end' = 3,
}

YPosition {
'detected' = 0,
'above' = 1,
'below' = 2,
}

`boundaryType`: This is either a string or a number.
eg. "bounded" or 0

AnchorBoundaryType {
'bounded' = 0,
'unbounded' = 1,
}

### Theming and Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-tooltip>
