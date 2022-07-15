<template>
  <div class="mcw-demo mcw-demo--container fab-demo">
    <div>
      <mcw-fab icon="favorite" @click="onClick" aria-label="my favorite" />
      <mcw-fab mini icon="favorite" isTouch aria-label="another favorite" />
      <mcw-fab icon="favorite" label="wiffle" />
      <mcw-fab>
        <template #icon>
          <mcw-material-icon icon="add"></mcw-material-icon>
        </template>
      </mcw-fab>
      <mcw-fab>
        <template #icon> <span class="fa fa-star"></span></template>
      </mcw-fab>
      <mcw-fab icon="home" href="#">Home</mcw-fab>
    </div>
  </div>
</template>

<script src="./fab.js"></script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
