<template>
  <div class="mcw-demo--appbar">
    <section class="mcw-demo">
      <mcw-top-app-bar class="main-toolbar" :scrollTarget="scrollTarget" @nav="onNav">
        <mcw-top-app-bar-row>
          <mcw-top-app-bar-section align="start">
            <mcw-top-app-bar-icon navIcon>
              <mcw-material-icon icon="menu"></mcw-material-icon>
            </mcw-top-app-bar-icon>
            <mcw-top-app-bar-title>vue material adapter</mcw-top-app-bar-title>
          </mcw-top-app-bar-section>

          <mcw-top-app-bar-section align="end">
            <mcw-top-app-bar-icon actionItem aria-label="Help">
              <mcw-material-icon @click="buttonText = 'show help'" icon="help"></mcw-material-icon>
            </mcw-top-app-bar-icon>
            <mcw-top-app-bar-icon actionItem aria-label="Help">
              <mcw-material-icon @click="buttonText = 'show information'" icon="info_outline"></mcw-material-icon>
            </mcw-top-app-bar-icon>
          </mcw-top-app-bar-section>
        </mcw-top-app-bar-row>
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
  methods: {
    onNav(event) {
      this.navigation = true;
      this.navigationCount += 1;
    },
  },
  mounted() {
    const demoEl = this.$el.querySelector('.mcw-demo');
    this.scrollTarget = demoEl;
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
