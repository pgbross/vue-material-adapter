## Usage

```html
<div class="mcw-demo">
  <div>Single select</div>
  <mcw-segmented-button single-select @change="onChange">
    <mcw-segment icon="favorite" label="Some text"></mcw-segment>
    <mcw-segment label="Some text"></mcw-segment>
    <mcw-segment icon="delete" :ripple="false"></mcw-segment>
  </mcw-segmented-button>

  <div style="margin-top: 2em">Multi select</div>
  <mcw-segmented-button>
    <mcw-segment icon="favorite" label="Some text"></mcw-segment>
    <mcw-segment label="Some text"></mcw-segment>
    <mcw-segment icon="delete" :ripple="false"></mcw-segment>
  </mcw-segmented-button>
</div>
```

```javascript
var vm = new Vue({
  data:{
  },
  methods: {
    onChange (detail) {...}
  }
})
```

### `mcw-segmented-button`

### events

| event    | args   | Description                              |
| -------- | ------ | ---------------------------------------- |
| `change` | detail | Emitted when there is a selection change |

### props

| prop            | Type    | Default | Description                                          |
| --------------- | ------- | ------- | ---------------------------------------------------- |
| `single-select` | Boolean | false   | Limits selection to one segment at a time.           |
| `touch`         | Boolean | false   | Set to ensure touch targets are at least 48 x 48 px. |

### `mcw-segment`

### events

| event    | args   | Description                              |
| -------- | ------ | ---------------------------------------- |
| `select` | detail | Emitted when there is a selection change |

### props

| prop     | Type    | Default | Description                                   |
| -------- | ------- | ------- | --------------------------------------------- |
| `icon`   | String  |         | Inserts an icon in the segment.               |
| `label`  | String  |         | Sets segment text.                            |
| `ripple` | Boolean | true    | Adds ripple effect when a segment is clicked. |

### Theming and Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-segmentedbutton>
