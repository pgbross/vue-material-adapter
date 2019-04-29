<template>
  <div class="mcw-demo mcw-demo--container fab-demo">
    <div>
      <mcw-fab icon="favorite"/>
      <mcw-fab mini icon="favorite"/>
      <mcw-fab icon="favorite" label="wiffle"/>
      <mcw-fab>
        <mcw-material-icon icon="add" slot="icon"></mcw-material-icon>
      </mcw-fab>
      <mcw-fab>
        <span class="fa fa-star" slot="icon"></span>
      </mcw-fab>
      <mcw-fab icon="home" href="#">Home</mcw-fab>
    </div>
  </div>
</template>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
