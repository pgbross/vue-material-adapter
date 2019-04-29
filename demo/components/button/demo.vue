<template>
  <div class="mcw-demo">
    <div class="mcw-demo--container" style="min-height: 40px; padding-bottom: 0">
      <div ref="buttons" class="mcw-demo-button">
        <mcw-button v-bind="buttonProps">Button</mcw-button>
        <mcw-button v-bind="buttonProps">
          <mcw-material-icon slot="icon" icon="add"></mcw-material-icon>Button
        </mcw-button>
        <mcw-button v-bind="buttonProps" trailingIcon="done">Button</mcw-button>
      </div>
    </div>

    <div class="mcw-demo--container">
      <div class="button-type-select">
        <mcw-radio
          label="baseline"
          id="baseline"
          value="baseline"
          v-model="type"
          name="button-type"
          checked
        ></mcw-radio>
        <mcw-radio label="raised" id="raised" value="raised" v-model="type" name="button-type"></mcw-radio>
        <mcw-radio
          label="unelevated"
          id="unelevated"
          value="unelevated"
          v-model="type"
          name="button-type"
        ></mcw-radio>
        <mcw-radio
          label="outlined"
          id="outlined"
          value="outlined"
          v-model="type"
          name="button-type"
        ></mcw-radio>
      </div>

      <div class="button-style-select">
        <mcw-checkbox v-model="disabled" label="disabled"/>
        <mcw-checkbox v-model="dense" label="dense"/>
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
.mcw-demo-button {
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
