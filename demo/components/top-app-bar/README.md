## Usage

```html
<mcw-top-app-bar class="main-toolbar">
  <div class="mdc-top-app-bar__row">
    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
    >
      <button
        class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
        aria-label="Open navigation menu"
      >
        menu
      </button>
      <span class="mdc-top-app-bar__title">vue material adapter</span>
    </section>

    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
    >
      <button
        target="_blank"
        title="vue-material-adapter"
        class="mdc-top-app-bar__action-item mdc-icon-button material-icons"
        aria-label="Help"
        @click="showHelp"
      >
        help
      </button>

      <button
        target="_blank"
        title="vue-material-adapter"
        class="mdc-top-app-bar__action-item mdc-icon-button"
        aria-label="Open github project"
        @click="goto('https://github.com/pgbross/vue-material-adapter')"
      >
        <img :src="githubLogo" />
      </button>
    </section>
  </div>
</mcw-top-app-bar>
```

```javascript
var vm = new Vue({
  methods: {
    showHelp() {
      console.log('show help');
    },

    goto(href) {
      window.open(href, '_blank');
    },
  },
});
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar>
