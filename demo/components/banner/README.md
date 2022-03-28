## Usage

```html
<mcw-banner
  v-model="showBanner"
  text="This is a banner component"
  primary-action="Fix me"
  secondary-action="Learn more"
  icon="help"
  @mdcbanner:closing="onClosing"
></mcw-banner>
```

```javascript
var vm = new Vue({
  data:{
  },
  methods: {
    onClick () {...}
  }
})
```

### events

| event                   | args   | Description                         |
| ----------------------- | ------ | ----------------------------------- |
| mdcbanner:closing       | reason | Reason indicating why it was closed |
| mdcbanner:closed        | reason | Reason indicating why it was closed |
| mdcbanner:opening       |        |                                     |
| mdcbanner:opened        |        |                                     |
| mdcbanner:actionclicked | action |                                     |

### props

| prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### Theming and Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-banner>
