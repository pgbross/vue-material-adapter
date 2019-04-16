<template>
  <div class>
    <section class="mdc-demo">
      <mdc-headline4>Icon Button</mdc-headline4>
      <div class="mdc-demo mdc-demo--container">
        <mdc-icon-button href="#">
          <mdc-material-icon icon="menu"/>
        </mdc-icon-button>
      </div>
    </section>

    <section class="mdc-demo">
      <mdc-headline4>Icon Toggle Button</mdc-headline4>
      <div class="mdc-demo mdc-demo--container">
        <mdc-icon-button v-model="isOn">
          <mdc-icon-toggle isOn>
            <mdc-material-icon icon="favorite"/>
          </mdc-icon-toggle>
          <mdc-icon-toggle>
            <mdc-material-icon icon="favorite_border"/>
          </mdc-icon-toggle>
        </mdc-icon-button>
      </div>

      <mdc-caption>
        isOn:
        <span class>{{ isOn }}</span>
      </mdc-caption>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return { isOn: false };
  },
};
</script>
