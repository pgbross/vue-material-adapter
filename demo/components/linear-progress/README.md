## Usage

The [MDC Linear Progress](https://github.com/material-components/material-components-web/tree/master/packages/mcw-linear-progress) component.

```html
<mcw-linear-progress :progress="progressValue" />
<mcw-linear-progress indeterminate />
<mcw-linear-progress progress="0.5" buffer="0.75" />
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
| `indeterminate` | Boolean | false     | If `true`, renders the indeterminate variant                 |
| `reversed`      | Boolean | false     | If `true`, renders the reversed variant                      |
| `progress`      | Number  | undefined | Decimal value between 0 and 1, sets the progress bar width   |
| `buffer`        | Number  | undefined | Decimal value between 0 and 1, sets the buffer bar width     |
| `bufferingDots` | Boolean | true      | Whether to show the buffer dots in the un-progressed section |
| `tag`           | String  | 'div'     | The root element                                             |

- Determinate

```html
<mcw-linear-progress progress="0.5"></mcw-linear-progress>
```

- Buffer

```html
<mcw-linear-progress progress="0.5" buffer="0.75"></mcw-linear-progress>
```

- Indeterminate

```html
<mcw-linear-progress indeterminate></mcw-linear-progress>
```

- Reversed

```html
<mcw-linear-progress reversed progress="0.5"></mcw-linear-progress>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress>
