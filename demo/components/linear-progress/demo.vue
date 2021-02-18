<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="linear-progress-demo">
      <mcw-linear-progress
        progress="0.5"
        aria-label="Example Progress Bar"
      ></mcw-linear-progress>
      <div class="mdc-typography--caption linear-progress-demo--example">
        Determinate
      </div>

      <br />
      <mcw-linear-progress indeterminate></mcw-linear-progress>
      <div class="mdc-typography--caption" linear-progress-demo--example>
        Indeterminate
      </div>
      <br />
      <mcw-linear-progress progress="0.5" buffer="0.75"></mcw-linear-progress>
      <div class="mdc-typography--caption linear-progress-demo--example">
        Buffer
      </div>
      <br />
      <mcw-linear-progress dir="rtl" progress="0.5"></mcw-linear-progress>
      <div class="mdc-typography--caption linear-progress-demo--example">
        Reversed
      </div>
    </div>
  </div>
</template>

<style>
.linear-progress-demo {
  flex: 1;
  min-width: 150px;
  max-width: 450px;
}
.linear-progress-demo--example {
  margin: 20px 0;
}
</style>
