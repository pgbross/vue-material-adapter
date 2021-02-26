## Usage

```html
<div class="mcw-demo">
  <div>Single select</div>
  <mcw-segmented-button v-model="singleIndex" single-select @change="onChange">
    <mcw-segment icon="favorite" label="Some text"></mcw-segment>
    <mcw-segment label="Some text"></mcw-segment>
    <mcw-segment icon="delete" :ripple="false"></mcw-segment>
  </mcw-segmented-button>

  <div>Value: {{ singleIndex }}</div>

  <div style="margin-top: 2em">Multi select</div>
  <mcw-segmented-button v-model="multiIndex">
    <mcw-segment icon="favorite" label="Some text"></mcw-segment>
    <mcw-segment label="Some text"></mcw-segment>
    <mcw-segment icon="delete" :ripple="false"></mcw-segment>
  </mcw-segmented-button>

  <div>Value: {{ multiIndex }}</div>
</div>
```

```javascript
var vm = new Vue({
  data:{
    return { singleIndex: null, multiIndex: [] };
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

| prop            | Type            | Default | Description                                          |
| --------------- | --------------- | ------- | ---------------------------------------------------- |
| `modelValue`    | Number or Array |         | The selected indexes or segmentids                   |
| `single-select` | Boolean         | false   | Limits selection to one segment at a time.           |
| `touch`         | Boolean         | false   | Set to ensure touch targets are at least 48 x 48 px. |

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
