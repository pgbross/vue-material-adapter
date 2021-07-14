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

<script src="./checkbox.js"></script>

<style>
.my-demo {
  width: 100%;
}
.my-demo .mcw-demo--container {
  margin-bottom: 1em;
  background-color: #f2f2f2;
}
</style>
