<template>
  <div class>
    <section class="mdc-demo">
      <div class="mdc-demo mdc-demo--container">
        <mdc-icon-button href="#">
          <mdc-material-icon icon="menu"/>
        </mdc-icon-button>

        <mdc-icon-button v-model="isOn" :disabled="disabled">
          <mdc-icon-toggle isOn>
            <mdc-material-icon icon="favorite"/>
          </mdc-icon-toggle>
          <mdc-icon-toggle>
            <mdc-material-icon icon="favorite_border"/>
          </mdc-icon-toggle>
        </mdc-icon-button>
      </div>
      <div class="button-style-select">
        <mdc-checkbox v-model="disabled" label="disabled"/>
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
    return { isOn: false, disabled: false };
  },
};
</script>
