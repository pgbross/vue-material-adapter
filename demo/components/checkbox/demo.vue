<template>
  <div class="mcw-demo mcw-demo--container">
    <div>
      <mcw-checkbox
        v-model="checked"
        :disabled="disabled"
        :indeterminate.sync="indeterminate"
        :label="checked ? 'checked' : 'unchecked'"
      />
      <div>
        <mcw-button dense @click="indeterminate = true" outlined>make indeterminate</mcw-button>
        <mcw-button dense @click="disabled = !disabled" outlined>toggle disabled</mcw-button>
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
