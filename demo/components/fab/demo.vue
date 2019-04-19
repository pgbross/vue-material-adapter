<template>
  <div class="mdc-demo mdc-demo--container fab-demo">
    <div>
      <mdc-fab icon="favorite"/>
      <mdc-fab mini icon="favorite"/>
      <mdc-fab icon="favorite" label="wiffle"/>
      <mdc-fab>
        <mdc-material-icon icon="add" slot="icon"></mdc-material-icon>
      </mdc-fab>
      <mdc-fab>
        <span class="fa fa-star" slot="icon"></span>
      </mdc-fab>
      <mdc-fab icon="home" href="#">Home</mdc-fab>
    </div>
  </div>
</template>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
