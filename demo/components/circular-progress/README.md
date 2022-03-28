## Usage

The [MDC Circular Progress](https://github.com/material-components/material-components-web/tree/master/packages/mcw-circular-progress) component.

```html
<mcw-circular-progress progress="0.3" />
<mcw-circular-progress indeterminate />
<mcw-circular-progress medium :progress="progressValue" />
```

```javascript
var vm = new Vue({
  data(){
    return {progressValue: 0.8}
  }
}
```

### props

| prop            | Type    | Default   | Description                                                |
| --------------- | ------- | --------- | ---------------------------------------------------------- |
| `open`          | Boolean | true      | When changed to `false`, closes the component              |
| `indeterminate` | Boolean | false     | When set to `true`, renders the indeterminate variant      |
| `medium`        | Boolean | false     | When set to `true`, renders the medium variant             |
| `progress`      | Number  | undefined | Decimal value between 0 and 1, sets the progress bar width |
| `tag`           | String  | div       | The html root element type                                 |
| `label`         | String  |           | Optional aria-label                                        |
| `fourColor`     | Boolean | false     | Use four color rendering                                   |

- Determinate

```html
<mcw-circular-progress progress="0.3" />
```

- Indeterminate

```html
<mcw-circular-progress indeterminate></mcw-circular-progress>
```

- Medium

```html
<mcw-circular-progress medium progress="0.5"></mcw-circular-progress>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-circular-progress>
