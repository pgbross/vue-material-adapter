<template>
  <div class="mdc-demo mdc-demo--container">
    <div>
      <mdc-checkbox
        v-model="checked"
        :disabled="disabled"
        :indeterminate.sync="indeterminate"
        :label="checked ? 'checked' : 'unchecked'"
      />
      <div>
        <mdc-button dense @click="indeterminate = true" outlined>make indeterminate</mdc-button>
        <mdc-button dense @click="disabled = !disabled" outlined>toggle disabled</mdc-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      indeterminate: false,
      disabled: false,
    };
  },
};
</script>
