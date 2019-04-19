## Usage

The [MDC Linear Progress](https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress) component.

```html
<mdc-linear-progress :progress="progressValue" />
<mdc-linear-progress indeterminate />
<mdc-linear-progress progress="0.5" buffer="0.75" />
```

```javascript
var vm = new Vue({
  data: {
    progressValue: 0.5,
  },
});
```

### props

| prop            | Type    | Default   | Description                                                  |
| --------------- | ------- | --------- | ------------------------------------------------------------ |
| `open`          | Boolean | true      | When changed to `false`, closes the component                |
| `indeterminate` | Boolean | false     | When set to `true`, renders the indeterminate variant        |
| `reversed`      | Boolean | false     | When set to `true`, renders the reversed variant             |
| `progress`      | Number  | undefined | Decimal value between 0 and 1, sets the progress bar width   |
| `buffer`        | Number  | undefined | Decimal value between 0 and 1, sets the buffer bar width     |
| `bufferingDots` | Boolean | true      | Whether to show the buffer dots in the un-progressed section |
| `tag`           | String  | 'div'     | The tag type to render                                       |

- Determinate

```html
<mdc-linear-progress progress="0.5"></mdc-linear-progress>
```

- Buffer

```html
<mdc-linear-progress progress="0.5" buffer="0.75"></mdc-linear-progress>
```

- Indeterminate

```html
<mdc-linear-progress indeterminate></mdc-linear-progress>
```

- Reversed

```html
<mdc-linear-progress reversed progress="0.5"></mdc-linear-progress>
```

### Reference

- <https://material.io/components/web/catalog/linear-progress>
