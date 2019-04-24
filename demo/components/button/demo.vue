<template>
  <div class="mdc-demo">
    <div class="mdc-demo--container" style="min-height: 40px; padding-bottom: 0">
      <div ref="buttons" class="mdc-demo-button">
        <mdc-button v-bind="buttonProps">Button</mdc-button>
        <mdc-button v-bind="buttonProps">
          <mdc-material-icon slot="icon" icon="alarm"></mdc-material-icon>Button
        </mdc-button>
        <mdc-button v-bind="buttonProps" icon="add">Button</mdc-button>
        <mdc-button v-bind="buttonProps" trailingIcon="done">Button</mdc-button>
      </div>
    </div>

    <div class="mdc-demo--container">
      <div class="button-type-select">
        <mdc-radio label="baseline">
          <mdc-radio-input id="baseline" value="baseline" v-model="type" name="button-type" checked></mdc-radio-input>
        </mdc-radio>
        <mdc-radio label="raised">
          <mdc-radio-input id="raised" value="raised" v-model="type" name="button-type"></mdc-radio-input>
        </mdc-radio>
        <mdc-radio label="unelevated">
          <mdc-radio-input id="unelevated" value="unelevated" v-model="type" name="button-type"></mdc-radio-input>
        </mdc-radio>
        <mdc-radio label="outlined">
          <mdc-radio-input id="outlined" value="outlined" v-model="type" name="button-type"></mdc-radio-input>
        </mdc-radio>
      </div>

      <div class="button-style-select">
        <mdc-checkbox v-model="disabled" label="disabled"/>
        <mdc-checkbox v-model="dense" label="dense"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      dense: false,
      disabled: false,
    };
  },
  computed: {
    raised() {
      return this.type == 'raised';
    },
    unelevated() {
      return this.type == 'unelevated';
    },
    outlined() {
      return this.type == 'outlined';
    },
    buttonProps() {
      return {
        dense: this.dense,
        disabled: this.disabled,
        raised: this.raised,
        outlined: this.outlined,
        unelevated: this.unelevated,
      };
    },
  },
};
</script>

<style>
.mdc-demo-button {
  margin: 0 auto;
  text-align: center;
}

.button-type-select,
.button-style-select {
  margin: 0 32px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
</style>
