<template>
  <div class="mcw-demo mcw-demo--container">
    <div @change="onChange">
      <mcw-checkbox
        v-model="checked"
        :disabled="disabled"
        v-model:indeterminate="indeterminate"
        :label="checked ? 'Checked' : 'Unchecked'"
      />

      <div>
        <mcw-button outlined @click="onIndeterminate"
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
      indeterminate_: false,
      disabled: false,
    };
  },
  computed: {
    indeterminate: {
      get() {
        return this.indeterminate_;
      },
      set(nv) {
        this.indeterminate_ = nv;
      },
    },
  },
  methods: {
    onChange(evt) {
      console.dir(evt);
    },
    onIndeterminate() {
      this.indeterminate = true;
    },
  },
};
</script>
