## Usage

```html
<mdc-button raised @click="open=!open">Show dialog</mdc-button>
<mdc-dialog
  v-model="open"
  id="demo-dialog"
  escapeKeyAction="close"
  scrimClickAction="close"
  :autoStackButtons="true"
  @MDCDialog:closing="onClosed"
>
  <mdc-dialog-title>Lorem ipsum dolor</mdc-dialog-title>
  <mdc-dialog-content>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </mdc-dialog-content>

  <mdc-dialog-footer>
    <mdc-dialog-button action="dismiss">Dismiss</mdc-dialog-button>
    <mdc-dialog-button action="accept" isDefault>Accept</mdc-dialog-button>
  </mdc-dialog-footer>
</mdc-dialog>
```

```javascript
var vm = new Vue({
  data: {
    open: false,
  },
});
```

### props

### mdc-dialog

| Prop Name        | Type    | Default       | Description                                                                                                                                                              |
| ---------------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| autoStackButtons | Boolean | `true`        | reverses the buttons when applying the stacked layout.                                                                                                                   |
| escapeKeyAction  | String  | `close`       | the action reflected when the Escape key is pressed. Setting to `''` disables closing via the escape key                                                                 |
| id               | String  | `mdc-dialog`  | the id attribute placed on the root element                                                                                                                              |
| open             | Boolean | `false`       | If true opens the dialog. If false closes the dialog                                                                                                                     |
| role             | String  | `alertdialog` | [ARIA attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) that specifies the role of dialog. Must be `alertdialog` or `dialog` |
| scrimClickAction | String  | `close`       | the action reflected when the scrim is clicked. Setting to `''` disables closing via scrim click                                                                         |
| tag              | String  | `div`         | Customizes the `Dialog` tag type.                                                                                                                                        |

### events

| props             | args    | Description                                             |
| ----------------- | ------- | ------------------------------------------------------- |
| `@change`         | Boolean | notify v-model/listeners that drawer state has changed. |
| `@accept`         | none    | emitted when dialog is accepted                         |
| `@cancel`         | none    | emitted when dialog is cancelled                        |
| `@validate`       | accept  | emitted before the dialog is accepted _(\*)_            |
| `@validateCancel` | cancel  | emitted before the dialog is cancelled _(\*)_           |

> Note that if you listen to the @validate or @validateCancel events, then You must call
> the accept or cancel argument to finally close the box. Use `accept(false)` to
> prevent emitting the `accept` event and just close, and `cancel(false)` to prevent emitting
> the `cancel` event.

### mdc-dialog-title

| Prop Name | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| id        | String | the id attribute placed on the root element.                 |
| tag       | String | customizes the `mdc-dialog-title` tag type. (defaults: `h2`) |

> NOTE: that `id` is also set to `aria-labelledby` on the `<mdc-dialog/>` element .
> Additionally, if unset will default to the `id` of `<mdc-dialog/>` with the suffix
> `-title`.

### mdc-dialog-content

| Prop Name | Type   | Description                                                     |
| --------- | ------ | --------------------------------------------------------------- |
| id        | String | the id attribute placed on the root element.                    |
| tag       | String | customizes the `mdc-dialog-content` tag type. (defaults: `div`) |

> NOTE: that `id` value is also set to `aria-describedby` on the `<mdc-dialog/>`
> element. Additionally, if unset will default the to `id` of `<mdc-dialog/>` with the
> suffix `-content`.

### mdc-dialog-footer

| Prop Name | Type   | Description                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| tag       | String | customizes the `mdc-dialog-footer` tag type. (defaults: `footer`) |

### mdc-dialog-button

| Prop Name | Type    | Description                                                                            |
| --------- | ------- | -------------------------------------------------------------------------------------- |
| action    | String  | required action of the button. Returned `onClose` && `onClosing` in `<mdc-dialog/>`    |
| isDefault | Boolean | represents the default action, triggered by pressing the Enter key (defaults: `false`) |

### Reference

<https://material.io/components/web/catalog/dialogs>
