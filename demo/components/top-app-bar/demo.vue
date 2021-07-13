<template>
  <div class="mcw-demo--appbar">
    <section class="mcw-demo">
      <mcw-top-app-bar
        class="main-toolbar"
        :scroll-target="scrollTarget"
        @nav="onNav"
      >
        <div class="mdc-top-app-bar__row">
          <section
            class="
              mdc-top-app-bar__section mdc-top-app-bar__section--align-start
            "
          >
            <button
              class="
                material-icons
                mdc-top-app-bar__navigation-icon
                mdc-icon-button
              "
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
              title="Help"
              class="
                mdc-top-app-bar__action-item
                mdc-icon-button
                material-icons
              "
              aria-label="Help"
            >
              help
            </button>

            <button
              title="About"
              class="
                mdc-top-app-bar__action-item
                mdc-icon-button
                material-icons
              "
              aria-label="About"
            >
              info_outline
            </button>
          </section>
        </div>
      </mcw-top-app-bar>

      <br />
      <div v-if="buttonText">
        Button:
        <span class="demo-button-info">{{ buttonText }}</span>
      </div>
      <div v-if="navigation">
        Navigation count:
        <span class="demo-button-info">{{ navigationCount }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonText: '',
      navigation: false,
      navigationCount: 0,
      scrollTarget: null,
    };
  },
  mounted() {
    const demoEl = this.$el.querySelector('.mcw-demo');
    this.scrollTarget = demoEl;
  },
  methods: {
    onNav(event) {
      this.navigation = true;
      this.navigationCount += 1;
    },
  },
};
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.demo-button-info {
  font-style: italic;
}
.mcw-demo--appbar {
  width: 100%;
}

.mcw-demo .mdc-top-app-bar {
  position: relative;
}
</style>
