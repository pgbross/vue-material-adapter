## Usage

```html
<mcw-button @click="onClick" :disabled="buttonDisabled">click me</mcw-button>
<mcw-button raised>
  <mcw-material-icon slot="icon" icon="add"></mcw-material-icon>Button
</mcw-button>
<mcw-button outlined trailingIcon="done">Button</mcw-button>
```

```javascript
var vm = new Vue({
  data:{
    buttonDisabled: false
  },
  methods: {
    onClick () {...}
  }
})
```

### events

| event    | args | Description      |
| -------- | ---- | ---------------- |
| `@click` |      | emitted on click |

### props

| prop                 | Type           | Default                  | Description                                                                    |
| -------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------ |
| `disabled`           | String         |                          | disable the button                                                             |
| `raised`             | Boolean        |                          | a contained button that is elevated upon the surface                           |
| `unelevated`         | Boolean        |                          | a contained button that is flush with the surface                              |
| `outlined`           | Boolean        |                          | a contained button that is flush with the surface and has a visible border(\*) |
| `dense`              | String         |                          | compresses the button text to make it slightly smaller                         |
| `icon`               | String         | optional                 | leading material icon                                                          |
| `trailingIcon`       | String         | optional                 | trailing material icon                                                         |
| `event`              | String         | optional                 | optional event to emit on click                                                |
| `event-target`       | Object         | vm.\$root                | optional event target, defaults to root bus                                    |
| `event-args`         | Array          | []                       | optional event args                                                            |
| `href`               | String         |                          | link's href, renders anchor (see notes below)                                  |
| `to`                 | String, Object | undefined                | router-link property _(\*)_                                                    |
| `replace`            | Boolean        | false                    | router-link property _(\*)_                                                    |
| `append`             | Boolean        | false                    | router-link property _(\*)_                                                    |
| `exact`              | Boolean        | false                    | router-link property _(\*)_                                                    |
| `active-class`       | String         | router-link-active       | router-link property _(\*)_                                                    |
| `exact-active-class` | String         | router-link-exact-active | router-link property _(\*)_                                                    |

> _(\*)_ Requires [vue-router](https://router.vuejs.org)

### text buttons

```html
<mcw-button>Baseline</mcw-button> <mcw-button dense>Dense</mcw-button>
```

### Raised Button

```html
<mcw-button raised>Baseline</mcw-button>
<mcw-button raised dense>Dense</mcw-button>
```

### Unelevated buttons

```html
<mcw-button unelevated>Baseline</mcw-button>
<mcw-button unelevated dense>Dense</mcw-button>
```

### Icon buttons

```html
<mcw-button icon="favorite">like</mcw-button>
<mcw-button
  ><mcw-material-icon slot="icon" icon="add"></mcw-material-icon
  >like</mcw-button
>
<mcw-button
  ><mcw-material-icon slot="trailingIcon" icon="done"></mcw-material-icon
  >like</mcw-button
>
```

or an SVG button

```html
<mcw-button>
  <svg
    class="mcw-button__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="..."
    slot="icon"
  >
    ...
  </svg>
  like
</mcw-button>
```

### Link buttons

#### simple Link

Using the href attribute will render `<a role="button" href="...">`

```html
<mcw-button href="#">Home</mcw-button>
```

#### router-link

If the `to` property is defined, the item behaves as a
[router-link](https://router.vuejs.org/en/api/router-link.html)

```html
<mcw-button to="/home">Home</mcw-button>
```

#### Accessibility Warning:

> Buttons are expected to be triggered using the Space or Enter key,
> while links are expected to be triggered using the Enter key.
> Additionally, button and links have different behaviors on right click.
> see this [MDN note](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)

You might want to keep button behaviour and do the navigation programatically:

```html
<mcw-button @click="location.href='#'">Home</mcw-button>
<mcw-button @click="$router.push(...)">Home</mcw-button>
```

### Triggering events

```html
<mcw-button event="my-event">Do Something</mcw-button>
```

```javascript
// register event from some component context
this.$root.$on('my-event', () => doSomething());
```

### Reference

- <https://material.io/guidelines/components/buttons.html>
