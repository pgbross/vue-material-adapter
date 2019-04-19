<template>
  <div class="mdc-demo--appbar">
    <section class="mdc-demo">
      <mdc-top-app-bar class="main-toolbar" :scrollTarget="scrollTarget">
        <mdc-top-app-bar-row>
          <mdc-top-app-bar-section align="start">
            <mdc-top-app-bar-icon navIcon>
              <mdc-material-icon icon="menu"></mdc-material-icon>
            </mdc-top-app-bar-icon>
            <mdc-top-app-bar-title>vue mdc adapter</mdc-top-app-bar-title>
          </mdc-top-app-bar-section>

          <mdc-top-app-bar-section align="end">
            <mdc-top-app-bar-icon actionItem aria-label="Help">
              <mdc-material-icon @click="buttonText = 'show help'" icon="help"></mdc-material-icon>
            </mdc-top-app-bar-icon>
            <mdc-top-app-bar-icon actionItem aria-label="Help">
              <mdc-material-icon @click="buttonText = 'show information'" icon="info_outline"></mdc-material-icon>
            </mdc-top-app-bar-icon>
          </mdc-top-app-bar-section>
        </mdc-top-app-bar-row>
      </mdc-top-app-bar>

      <br>
      <div v-if="buttonText">
        Button:
        <span class="demo-button-info">{{ buttonText }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return { buttonText: '', scrollTarget: null };
  },
  mounted() {
    const demoEl = this.$el.querySelector('.mdc-demo');
    this.scrollTarget = demoEl;
  },
};
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.demo-button-info {
  font-style: italic;
}
.mdc-demo--appbar {
  width: 100%;
}

.mdc-demo .mdc-top-app-bar {
  position: relative;
}
</style>
