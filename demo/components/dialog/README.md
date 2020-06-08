## Usage

```html
<mcw-button raised @click="open=!open">Show dialog</mcw-button>
<mcw-dialog
  v-model="open"
  id="demo-dialog"
  escapeKeyAction="close"
  scrimClickAction="close"
  :autoStackButtons="true"
  @MDCDialog:closing="onClosed"
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

| Prop Name        | Type    | Default       | Description                                                                                                                                                              |
| ---------------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| autoStackButtons | Boolean | `true`        | reverses the buttons when applying the stacked layout.                                                                                                                   |
| escapeKeyAction  | String  | `close`       | the action reflected when the Escape key is pressed. Setting to `''` disables closing via the escape key                                                                 |
| id               | String  | `mcw-dialog`  | the id attribute placed on the root element                                                                                                                              |
| open             | Boolean | `false`       | If true opens the dialog. If false closes the dialog                                                                                                                     |
| role             | String  | `alertdialog` | [ARIA attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) that specifies the role of dialog. Must be `alertdialog` or `dialog` |
| scrimClickAction | String  | `close`       | the action reflected when the scrim is clicked. Setting to `''` disables closing via scrim click                                                                         |
| tag              | String  | `div`         | Customizes the `Dialog` tag type.                                                                                                                                        |

### Events

| Event Name           | args    | Description                                             |
| -------------------- | ------- | ------------------------------------------------------- |
| `@change`            | Boolean | notify v-model/listeners that drawer state has changed. |
| `@MDCDialog:opening` | none    | emitted when dialog starts its opening animation        |
| `@MDCDialog:opened`  | none    | emitted when dialog finishes its opening animation      |
| `@MDCDialog:closing` | none    | emitted when dialog starts its closing animation        |
| `@MDCDialog:closed`  | none    | emitted when dialog finishes its closing animation      |

### mcw-dialog-title

### Props

| Prop Name | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| id        | String | the id attribute placed on the root element.                 |
| tag       | String | customizes the `mcw-dialog-title` tag type. (defaults: `h2`) |

> NOTE: that `id` is also set to `aria-labelledby` on the `<mcw-dialog/>` element .
> Additionally, if unset will default to the `id` of `<mcw-dialog/>` with the suffix
> `-title`.

### mcw-dialog-content

### Props

| Prop Name | Type   | Description                                                     |
| --------- | ------ | --------------------------------------------------------------- |
| id        | String | the id attribute placed on the root element.                    |
| tag       | String | customizes the `mcw-dialog-content` tag type. (defaults: `div`) |

> NOTE: that `id` value is also set to `aria-describedby` on the `<mcw-dialog/>`
> element. Additionally, if unset will default the to `id` of `<mcw-dialog/>` with the
> suffix `-content`.

### mcw-dialog-footer

### Props

| Prop Name | Type   | Description                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| tag       | String | customizes the `mcw-dialog-footer` tag type. (defaults: `footer`) |

### mcw-dialog-button

### Props

| Prop Name | Type    | Description                                                                                                       |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| action    | String  | required action of the button. Emitted as payload of `MDCDialog:closing` && `MDCDialog:closed` in `<mcw-dialog/>` |
| isDefault | Boolean | represents the default action, triggered by pressing the Enter key (defaults: `false`)                            |

### Events

| Event Name | args       | Description                     |
| ---------- | ---------- | ------------------------------- |
| `@click`   | MouseEvent | emitted when button is pressed. |

### Reference

<https://material.io/components/web/catalog/dialogs>
