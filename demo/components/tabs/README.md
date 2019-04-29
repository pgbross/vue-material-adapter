## Usage

```html
<mcw-tab-bar @change="onSelected">
  <mcw-tab>item one</mcw-tab>
  <mcw-tab>item two</mcw-tab>
  <mcw-tab>item three</mcw-tab>
</mcw-tab-bar>
```

```javascript
var vm = new Vue({
  methods: {
    onSelected(idx) {
      console.log(`selected index: ${idx}`);
    },
  },
});
```

### props

#### mcw-tab

mcw-tab behaves as a navigational link. Add an `href` for simple link behavior
or the `to` property for router-link behavior. mcw-tab dispatches `@click` event.

| prop                 | Type           | Default                  | Description                                 |
| -------------------- | -------------- | ------------------------ | ------------------------------------------- |
| `active`             | Boolean        | false                    | set the tab active                          |
| `event`              | String         | optional                 | optional event to emit on click             |
| `event-target`       | Object         | vm.\$root                | optional event target, defaults to root bus |
| `event-args`         | Array          | []                       | optional event args                         |
| `to`                 | String, Object | undefined                | router-link property _(\*)_                 |
| `replace`            | Boolean        | false                    | router-link property _(\*)_                 |
| `append`             | Boolean        | false                    | router-link property _(\*)_                 |
| `exact`              | Boolean        | false                    | router-link property _(\*)_                 |
| `active-class`       | String         | router-link-active       | router-link property _(\*)_                 |
| `exact-active-class` | String         | router-link-exact-active | router-link property _(\*)_                 |

> _(\*)_ Requires [vue-router](https://router.vuejs.org)
> If the `to` property is defined, the item behaves as a
> [router-link](https://router.vuejs.org/en/api/router-link.html)

#### mcw-tab-bar

### events

| props     | args   | Description                                          |
| --------- | ------ | ---------------------------------------------------- |
| `@change` | number | notify listeners with the active index as parameter. |

### Tabs with icons

```html
<mcw-tab-bar>
  <mcw-tab icon="phone"></mcw-tab>
  <mcw-tab icon="{className: 'fa fa-favorite'}"></mcw-tab>
  <mcw-tab><svg slot="icon">...</svg></mcw-tab>
</mcw-tab-bar>
```

> use `icon` slot for custom icon markup

### Tabs with icons and text

```html
<mcw-tab-bar>
  <mcw-tab icon="phone">Recents</mcw-tab>
  <mcw-tab icon="favorite">Favorites</mcw-tab>
  <mcw-tab icon="personal_pin">Nearby</mcw-tab>
</mcw-tab-bar>
```

### reference

- <https://material.io/components/web/catalog/tabs>
