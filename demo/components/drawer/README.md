## Usage

The `mcw-drawer` component implements permanent, persistent, and temporary drawers.
By default the drawer component is responsive and will switch from temporary to persistent design according to viewport width.

```html
<mcw-drawer
  ref="drawer"
  v-model="open"
  modal
  class="primary-drawer"
  toolbar-spacer
>
  <template #header>
    <div class="mdc-drawer__header"></div>
  </template>

  <mcw-list-item to="/" tabindex="0">Home</mcw-list-item>
  <mcw-list-item to="/docs/getting-started">Getting Started</mcw-list-item>

  <hr class="mdc-list-divider" />

  <mcw-list-item v-for="link in links" :key="link.id" :to="link.to"
    >{{ link.name }}</mcw-list-item
  >
</mcw-drawer>
```

### Drawer

| prop             | Type    | Default   | Description                             |
| ---------------- | ------- | --------- | --------------------------------------- |
| `modal`          | Boolean |           | Make drawer modal                       |
| `open`           | Boolean | false     | optional v-model when true opens drawer |
| `toolbar-spacer` | Boolean | undefined | add a toolbar spacer                    |

| event                | args    | Description                                             |
| -------------------- | ------- | ------------------------------------------------------- |
| `@update:modelValue` | Boolean | notify v-model/listeners that drawer state has changed. |
| `@mdc-drawer:opened` |         | on drawer opened                                        |
| `@mdc-drawer:closed` |         | on drawer closed                                        |
| `@open`              |         | on drawer open                                          |
| `@close`             |         | on drawer close                                         |

> _(\*)_ Requires [vue-router](https://router.vuejs.org)
> If the `to` property is defined, the item behaves as a
> [router-link](https://router.vuejs.org/en/api/router-link.html)

### Item usage

- A simple link

```html
<mcw-list-item href="#">Inbox</mcw-list-item>
```

or with vue-router

```html
<mcw-list-item to="/path">Inbox</mcw-list-item>
<mcw-list-item :to="folder" append>Inbox</mcw-list-item>
```

> Customize the active links style with vue-router active or exact-active classes:

```css
.mcw-list-item.router-link-exact-active {
  color: red;
}
```

- Trigger an event

```html
<mcw-list-item event="my-event">Inbox</mcw-list-item>
```

- Click handler

```html
<mcw-list-item @click="handler">Inbox</mcw-list-item>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer>
