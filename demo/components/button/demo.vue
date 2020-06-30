<template>
  <div class="mcw-demo">
    <div
      class="mcw-demo--container"
      style="min-height: 40px; padding-bottom: 0;"
    >
      <div ref="buttons" class="mcw-demo-button">
        <mcw-button v-bind="buttonProps" @click="onClick">Button</mcw-button>
        <mcw-button v-bind="buttonProps">
          <mcw-material-icon slot="icon" icon="add"></mcw-material-icon>Button
        </mcw-button>
        <mcw-button v-bind="buttonProps" trailing-icon="done"
          >Button</mcw-button
        >
      </div>
    </div>

    <div class="mcw-demo--container">
      <div class="button-type-select">
        <mcw-radio
          id="baseline"
          v-model="type"
          label="baseline"
          value="baseline"
          name="button-type"
          checked
        ></mcw-radio>
        <mcw-radio
          id="raised"
          v-model="type"
          label="raised"
          value="raised"
          name="button-type"
        ></mcw-radio>
        <mcw-radio
          id="unelevated"
          v-model="type"
          label="unelevated"
          value="unelevated"
          name="button-type"
        ></mcw-radio>
        <mcw-radio
          id="outlined"
          v-model="type"
          label="outlined"
          value="outlined"
          name="button-type"
        ></mcw-radio>
      </div>

      <div class="button-style-select">
        <mcw-checkbox v-model="disabled" label="disabled" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
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
        disabled: this.disabled,
        raised: this.raised,
        outlined: this.outlined,
        unelevated: this.unelevated,
      };
    },
  },
  methods: {
    onClick() {
      console.log('onClick');
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
