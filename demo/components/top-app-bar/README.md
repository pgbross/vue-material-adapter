## Usage

```html
<mcw-top-app-bar class="main-toolbar">
  <mcw-top-app-bar-row>
    <mcw-top-app-bar-section align="start">
      <mcw-top-app-bar-icon navIcon>
        <mcw-material-icon icon="menu"></mcw-material-icon>
      </mcw-top-app-bar-icon>
      <mcw-top-app-bar-title>vue material adapter</mcw-top-app-bar-title>
    </mcw-top-app-bar-section>

    <mcw-top-app-bar-section align="end">
      <mcw-top-app-bar-icon actionItem aria-label="Help">
        <mcw-material-icon @click="showHelp" icon="help"></mcw-material-icon>
      </mcw-top-app-bar-icon>
      <mcw-top-app-bar-icon actionItem aria-label="Info">
        <mcw-material-icon
          @click="showInfo"
          icon="info_outline"
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

### McwTopAppBar

| Prop Name      | Type        | Description                                                    |
| -------------- | ----------- | -------------------------------------------------------------- |
| short          | Boolean     | Enables short variant.                                         |
| shortCollapsed | Boolean     | Enables short collapsed variant.                               |
| prominent      | Boolean     | Enables prominent variant.                                     |
| fixed          | Boolean     | Enables fixed variant.                                         |
| dense          | Boolean     | Enables dense variant.                                         |
| scrollTarget   | HTMLElement | Sets scroll target to different DOM node (default is `window`) |
| tag            | String      | Customizes the `mcwTopAppBar` HTML tag. (default: `<header>`)  |

> NOTES: As per design guidelines, prominent and dense variants should not be used with short or short collapsed. Additionally, dense variants should only be used on desktop. Additionally short top-app-bars should be used with no more than 1 action item.

### McwTopAppBarRow

| Prop Name | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| tag       | String | Customizes the `TopAppBarRow` tag. (default: `<div>`) |

### McwTopAppBarSection

| Prop Name | Type                     | Description                                                                     |
| --------- | ------------------------ | ------------------------------------------------------------------------------- |
| align     | Sring ('start' or 'end') | optional property that aligns section content to either start or end of section |
| tag       | String                   | Customizes the `TopAppBarSection` tag. (default: `<section>`)                   |

> Note: if section contains action items it is recommended to add property role='toolbar' for a11y purposes

### McwTopAppBarTitle

| Prop Name | Type   | Description                                              |
| --------- | ------ | -------------------------------------------------------- |
| tag       | String | Customizes the `TopAppBarTitle` tag. (default: `<span>`) |

### McwTopAppBarIcon

| Prop Name  | Type    | Description                                     |
| ---------- | ------- | ----------------------------------------------- |
| actionItem | Boolean | applies action-item class to icon               |
| navIcon    | Boolean | applies nav-icon class to icon                  |
| children   |         | can be any icon. Material Icons are recommended |

> Notes: (1) consider adding `aria-label` to actionItem's. (2) you may need to manually add ripple or tabindex to icon. (3) Short top-app-bars should be used with no more than 1 action item.

### McwFixedAdjust

| Prop Name | Type    | Description                                                    |
| --------- | ------- | -------------------------------------------------------------- |
| dense     | Boolean | Enables dense variant.                                         |
| prominent | Boolean | Enables prominent variant.                                     |
| short     | Boolean | Enables short variant.                                         |
| tag       | String  | Customizes the TopAppBarFixedAdjust tag (defaults to `<main>`) |

> NOTE: if not dense, prominent, or short will apply `mcw-top-app-bar--fixed-adjust`

## Icons

Use of [Material Icon's](../material-icon/README.md) for Action Items and Navigation Icons are recommended, since the Ripple is included with the Component. Using custom Components will require you to wrap the Component with your own ripple handling.

### Navigation Icon

The navigation icon can be a `<a>`, `<i>`, `<svg>`, `<image>`, `<span>`, etc., but again must be wrapped with ripple handling.

```html
<mcw-top-app-bar-icon navIcon>
  <i class="material-icons">menu</i>
</mcw-top-app-bar-icon>
```

### Action Items

Similar to the [navigation icon](#navigation-icon), it can be `<a>`, `<i>`, `<svg>`, `<image>`, `<span>`, etc., and must be wrapped with the `withRipple HOC`.

```html
<mcw-top-app-bar-icon actionItem>
  <i class="material-icons">bookmark</i>
</mcw-top-app-bar-icon>
```

### Reference

- <https://material.io/components/web/catalog/top-app-bar>
