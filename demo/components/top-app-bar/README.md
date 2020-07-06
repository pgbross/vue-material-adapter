## Usage

```html
<mcw-top-app-bar
  class="main-toolbar"
  :scroll-target="scrollTarget"
  @nav="onNav"
>
  <mcw-top-app-bar-row>
    <mcw-top-app-bar-section align="start">
      <mcw-top-app-bar-icon nav-icon>
        <mcw-material-icon icon="menu"></mcw-material-icon>
      </mcw-top-app-bar-icon>
      <mcw-top-app-bar-title>vue material adapter</mcw-top-app-bar-title>
    </mcw-top-app-bar-section>

    <mcw-top-app-bar-section align="end">
      <mcw-top-app-bar-icon action-item aria-label="Help">
        <mcw-material-icon
          icon="help"
          @click="buttonText = 'show help'"
        ></mcw-material-icon>
      </mcw-top-app-bar-icon>
      <mcw-top-app-bar-icon action-item aria-label="Help">
        <mcw-material-icon
          icon="info_outline"
          @click="buttonText = 'show information'"
        ></mcw-material-icon>
      </mcw-top-app-bar-icon>
    </mcw-top-app-bar-section>
  </mcw-top-app-bar-row>
</mcw-top-app-bar>
```

```javascript
var vm = new Vue({
  methods: {
    showHelp() {
      console.log('show help');
    },
    showInfo() {
      console.log('show info');
    },
  },
});
```

### Props

| Prop Name      | Type        | Description                                                    |
| -------------- | ----------- | -------------------------------------------------------------- |
| short          | Boolean     | Enables short variant.                                         |
| shortCollapsed | Boolean     | Enables short collapsed variant.                               |
| prominent      | Boolean     | Enables prominent variant.                                     |
| fixed          | Boolean     | Enables fixed variant.                                         |
| dense          | Boolean     | Enables dense variant.                                         |
| scrollTarget   | HTMLElement | Sets scroll target to different DOM node (default is `window`) |
| tag            | String      | Customizes the `mcwTopAppBar` HTML tag. (default: `<header>`)  |

### `mcw-top-app-bar-row`

| Prop Name | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| tag       | String | Custom element (default: `<div>` |

### `mcw-top-app-bar-section`

| Prop Name | Type                     | Description                                           |
| --------- | ------------------------ | ----------------------------------------------------- |
| align     | Sring ('start' or 'end') | optional align section content to either start or end |
| tag       | String                   | Custom element (default: `<div>`                      |

> Note: if section contains action items it is recommended to add property role='toolbar' for a11y purposes

### `mcw-top-app-bar-title`

| Prop Name | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| tag       | String | Custom element (default: `<span>` |

### `mcw-top-app-bar-icon`

| Prop Name  | Type    | Description                       |
| ---------- | ------- | --------------------------------- |
| actionItem | Boolean | applies action-item class to icon |

> Notes: (1) consider adding `aria-label` to actionItem's. (2) you may need to manually add ripple or tabindex to icon. (3) Short top-app-bars should be used with no more than 1 action item.

### `mcw-fixed-adjust`

| Prop Name | Type    | Description                                                    |
| --------- | ------- | -------------------------------------------------------------- |
| dense     | Boolean | Enables dense variant.                                         |
| prominent | Boolean | Enables prominent variant.                                     |
| short     | Boolean | Enables short variant.                                         |
| tag       | String  | Customizes the TopAppBarFixedAdjust tag (defaults to `<main>`) |

> NOTE: if not dense, prominent, or short will apply `mcw-top-app-bar--fixed-adjust`

## Icons

Use of [Material Icon's](../material-icon/README.md) for Action Items and Navigation Icons are recommended, since the Ripple is included with the Component.

### Navigation Icon

The navigation icon can be a `<a>`, `<i>`, `<svg>`, `<image>`, `<span>`, etc.

```html
<mcw-top-app-bar-icon navIcon>
  <i class="material-icons">menu</i>
</mcw-top-app-bar-icon>
```

### Action Items

Similar to the [navigation icon](#navigation-icon), it can be `<a>`, `<i>`, `<svg>`, `<image>`, `<span>`, etc.

```html
<mcw-top-app-bar-icon actionItem>
  <i class="material-icons">bookmark</i>
</mcw-top-app-bar-icon>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar>
