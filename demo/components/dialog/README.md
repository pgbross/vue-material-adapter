## Usage

```html
<mcw-button raised @click="open=!open">Show dialog</mcw-button>
<mcw-dialog
  id="demo-dialog"
  v-model="openBasic"
  escape-key-action="close"
  scrim-click-action="close"
  aria-labelledby="my-basic-title"
  aria-describedby="my-basic-content"
  :auto-stack-buttons="true"
  @mdc-dialog-closing="onClosed"
>
  <mcw-dialog-title>Lorem ipsum dolor</mcw-dialog-title>
  <mcw-dialog-content>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </mcw-dialog-content>

  <mcw-dialog-footer>
    <mcw-dialog-button action="dismiss">Dismiss</mcw-dialog-button>
    <mcw-dialog-button action="accept" isDefault>Accept</mcw-dialog-button>
  </mcw-dialog-footer>
</mcw-dialog>
```

```javascript
var vm = new Vue({
  data: {
    open: false,
  },
});
```

### mcw-dialog

### Props

| Prop Name          | Type    | Default       | Description                                            |
| ------------------ | ------- | ------------- | ------------------------------------------------------ |
| `autoStackButtons` | Boolean | `true`        | reverses the buttons when applying the stacked layout. |
| `escapeKeyAction`  | String  | `close`       | the action reflected when the Escape key is pressed.   |
|                    |         |               | Setting to `''` disables closing via the escape key    |
| `scrollable`       | Boolean | false         | Scrollable content                                     |
| v-model            | Boolean | `false`       | If true opens the dialog. If false closes the dialog   |
| `role`             | String  | `alertdialog` | ARIA attribute _\*_ that specifies the role of dialog. |
|                    |         |               | Must be `alertdialog` or `dialog`                      |
| `scrimClickAction` | String  | `close`       | the action reflected when the scrim is clicked.        |
|                    |         |               | Setting to `''` disables closing via scrim click       |
| `tag`              | String  | `div`         | Customizes the `Dialog` tag type.                      |

_\*_[ARIA attribute roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### Events

| Event Name           | args    | Description                                             |
| -------------------- | ------- | ------------------------------------------------------- |
| `@change`            | Boolean | notify v-model/listeners that drawer state has changed. |
| `mdc-dialog-opening` | none    | On dialog starts its opening animation                  |
| `mdc-dialog-opened`  | none    | On dialog finishes its opening animation                |
| `mdc-dialog-closing` | none    | On starts its closing animation                         |
| `mdc-dialog-closed`  | none    | On finishes its closing animation                       |

### `mcw-dialog-title`

### Props

| Prop Name | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| tag       | String | Custom tag type. (defaults: `h2`) |

### `mcw-dialog-content`

### Props

| Prop Name | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| tag       | String | Custom tag type. (defaults: `div`) |

### `mcw-dialog-footer`

### Props

| Prop Name | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| tag       | String | Custom tag type. (defaults: `div`) |

### `mcw-dialog-button`

### Props

| Prop Name      | Type    | Description               |
| -------------- | ------- | ------------------------- |
| action         | String  | Marks as an action button |
| isDefault      | Boolean | Marks as default action   |
| isInitialFocus | Boolean | Sets initial focus        |

### Events

| Event Name | args | Description |
| ---------- | ---- | ----------- |
| `@click`   |      | On click.   |

### Reference

<https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog>
