<template>
  <div class="my-demo">
    <div class="mcw-demo--container">
      <mcw-checkbox
        v-model="checked"
        v-model:indeterminate="indeterminate"
        :disabled="disabled"
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

    <div class="mcw-demo--container">
      <div>Array selection</div>
      <mcw-checkbox
        value="abc"
        label="one"
        :model-value="ids"
        @update:modelValue="onIds"
      />
      <mcw-checkbox
        value="xyz"
        label="two"
        :model-value="ids"
        @update:modelValue="onIds"
      />
    </div>
    <div>Selected IDs: {{ ids }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      indeterminate_: false,
      disabled: false,

      ids: [],
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
    onIndeterminate() {
      this.indeterminate = true;
    },
    onIds(nv) {
      console.dir(nv);
      this.ids = nv;
    },
  },
};
</script>

<style>
.my-demo {
  width: 100%;
}
.my-demo .mcw-demo--container {
  margin-bottom: 1em;
  background-color: #f2f2f2;
}
</style>
