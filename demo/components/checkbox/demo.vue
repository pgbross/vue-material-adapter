<template>
  <div class="mcw-demo mcw-demo--container">
    <div @change="onChange">
      <mcw-checkbox
        v-model="checked"
        :disabled="disabled"
        :indeterminate.sync="indeterminate"
        :label="checked ? 'Checked' : 'Unchecked'"
      />

      <div>
        <mcw-button outlined @click="indeterminate = true"
          >make indeterminate</mcw-button
        >
        <mcw-button outlined @click="disabled = !disabled"
          >toggle disabled</mcw-button
        >
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
  methods: {
    onChange(evt) {
      console.dir(evt);
    },
  },
};
</script>
