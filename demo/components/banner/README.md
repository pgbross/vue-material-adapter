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
| mdcbanner:actionclicked | action | Reason indicating why it was closed |

Reason and action indicate why the banner was closed:
0 - primary action selected
1 - secondary action selected
false - v-model was used to close the banner

### props

| prop             | Type    | Default                                          | Description                            |
| ---------------- | ------- | ------------------------------------------------ | -------------------------------------- |
| centered         | boolean | false                                            | Optionally displayed centred           |
| v-model          | boolean | false                                            | Show/Hide banner                       |
| text             | string  |                                                  | Banner text                            |
| primaryAction    | string  | Text on primary action button                    |
| secondaryAction  | string  | Text on secondary action button (optional)       |
| mobile           | boolean | false                                            | Actions positioned below the text      |
| fixed: boolean   | false   | Fixed at the top of the screen below top app bar |
| disableAutoClose | boolean | false                                            | If true actions do not hide the banner |
| icon             | string  |                                                  | Material icon to display (optional)    |

### Theming and Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-banner>
