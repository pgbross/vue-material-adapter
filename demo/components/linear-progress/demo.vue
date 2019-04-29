<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="linear-progress-demo">
      <mcw-linear-progress progress="0.5"/>
      <p>
        <mcw-caption>Determinate</mcw-caption>
      </p>
      <br>
      <mcw-linear-progress indeterminate/>
      <p>
        <mcw-caption>Indeterminate</mcw-caption>
      </p>
      <br>
      <mcw-linear-progress progress="0.5" buffer="0.75"/>
      <p>
        <mcw-caption>Buffer</mcw-caption>
      </p>
      <br>
      <mcw-linear-progress reversed progress="0.5"/>
      <p>
        <mcw-caption>Reversed</mcw-caption>
      </p>
    </div>
  </div>
</template>

<style>
.linear-progress-demo {
  flex: 1;
  min-width: 150px;
  max-width: 450px;
}
</style>
