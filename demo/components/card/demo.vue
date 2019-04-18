<template>
  <div class="mdc-demo">
    <mdc-card>
      <mdc-card-primary-action>
        <mdc-card-media :src="card" wide>Media</mdc-card-media>
      </mdc-card-primary-action>
      <section>
        <h2>Title goes here</h2>
        <h4>subtitle here</h4>
      </section>
      <mdc-card-actions>
        <mdc-card-action-buttons>
          <mdc-button outlined>ACTION</mdc-button>
        </mdc-card-action-buttons>
        <mdc-card-action-icons>
          <mdc-material-icon icon="star"></mdc-material-icon>
        </mdc-card-action-icons>
      </mdc-card-actions>
    </mdc-card>
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
.mdc-demo .mdc-card {
  background-color: white;
  width: 320px;
  margin: 32px auto;
}
</style>
