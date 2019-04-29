<template>
  <div class="mcw-demo">
    <mcw-card>
      <mcw-card-primary-action>
        <mcw-card-media :src="card" wide>Media</mcw-card-media>
      </mcw-card-primary-action>
      <section>
        <h2>Title goes here</h2>
        <h4>subtitle here</h4>
      </section>
      <mcw-card-actions>
        <mcw-card-action-buttons>
          <mcw-button outlined>ACTION</mcw-button>
        </mcw-card-action-buttons>
        <mcw-card-action-icons>
          <mcw-material-icon icon="star"></mcw-material-icon>
        </mcw-card-action-icons>
      </mcw-card-actions>
    </mcw-card>
  </div>
</template>

<script>
import card from 'demo/assets/card-16-9.jpg';

export default {
  data() {
    return {
      card,
    };
  },
};
</script>

<style>
.mcw-demo .mdc-card {
  background-color: white;
  width: 320px;
  margin: 32px auto;
}
</style>
