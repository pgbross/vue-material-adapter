## Usage

```html
<mdc-snackbar
  v-model="open"
  message="Simple message"
  :dismissAction="false"
></mdc-snackbar>
```

Simple `mdc-snackbar` is does not queue messages.

```javascript
export default {
  data() {
    return {
      open: false,
    };
  },
```

or `mdc-snackbar-queue` maintains an internal queue of messages displayed in sequence.

```html
<mdc-button @click="showLeading">Leading</mdc-button>
<mdc-snackbar-queue ref="bar" />
```

```javascript
export default {
  methods: {
    showLeading() {
      this.$refs.bar.handleSnack({
        message: `Your photo has been archived.`,
        timeoutMs: 5000,
        actionText: 'Undo',
        leading: true,
      });
    },
  },
```

### props

### `mdc-snackbar`

| Prop Name     | Type    | Description                                                     |
| ------------- | ------- | --------------------------------------------------------------- |
| message       | String  | Message to show in the snackbar                                 |
| reason        | String  | Passed as argument when snackbar closes programatically         |
| timeoutMs     | Number  | Timeout in milliseconds when to close snackbar.                 |
| closeOnEscape | Boolean | Closes popup on "Esc" button if true.                           |
| actionText    | String  | Text for action button                                          |
| leading       | Boolean | Shows snackbar on the left if true (or right for rtl languages) |
| stacked       | Boolean | Shows buttons under text if true                                |

### `mdc-snackbar-queue`

#### methods

| Method                                                                                                            | Description           |
| ----------------------------------------------------------------------------------------------------------------- | --------------------- |
| `handleSnack( { timeoutMs, closeOnEscape, message, actionText, dismissAction, stacked, leading, actionHandler })` | queues the next snack |

| Parameters    | Type     | Description                                                     |
| ------------- | -------- | --------------------------------------------------------------- |
| message       | String   | Message to show in the snackbar                                 |
| reason        | String   | Passed as argument when snackbar closes programatically         |
| timeoutMs     | Number   | Timeout in milliseconds when to close snackbar.                 |
| closeOnEscape | Boolean  | Closes popup on "Esc" button if true.                           |
| actionText    | String   | Text for action button                                          |
| leading       | Boolean  | Shows snackbar on the left if true (or right for rtl languages) |
| stacked       | Boolean  | Shows buttons under text if true                                |
| actionHandler | function | Callback on action                                              |

### Reference

- <https://material.io/components/web/catalog/snackbars>
