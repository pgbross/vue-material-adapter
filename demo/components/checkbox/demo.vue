<template>
  <div class="my-demo">
    <div class="mcw-demo--wrapper">
      <div class="mcw-demo--container">
        <mcw-checkbox
          v-model="checked"
          v-model:indeterminate="indeterminate"
          :disabled="disabled"
          :label="checked ? 'Checked' : 'Unchecked'"
        />
      </div>
      <div class="mcw-demo--wrapper-actions">
        <mcw-button outlined @click="onIndeterminate"
          >make indeterminate</mcw-button
        >
        <mcw-button outlined @click="disabled = !disabled"
          >toggle disabled</mcw-button
        >
      </div>
    </div>

    <div class="mcw-demo--wrapper">
      <div>Array selection</div>
      <div class="mcw-demo--container">
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
      <div class="mcw-demo--wrapper-label">Selected IDs: {{ ids }}</div>
    </div>
    <div class="mcw-demo--wrapper">
      <div>Without label</div>
      <div class="mcw-demo--container">
        <mcw-checkbox v-model="checkedSolo" />
      </div>

      <div class="mcw-demo--wrapper-label">checked: {{ checkedSolo }}</div>
    </div>
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

.mcw-demo--wrapper {
  margin-bottom: 1em;
  background-color: #f2f2f2;
}

.mcw-demo--wrapper-actions {
  display: flex;
  justify-content: center;
  margin-top: -2em;
}

.mcw-demo--wrapper .mcw-demo--wrapper-label {
  margin-top: -1em;
}
</style>
