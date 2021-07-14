<template>
  <div class="mcw-demo">
    <mcw-card>
      <mcw-card-primary-action @click="onPrimaryAction">
        <mcw-card-media :src="card" wide>Media</mcw-card-media>
      </mcw-card-primary-action>
      <section>
        <h2>Title goes here</h2>
        <h4>subtitle here</h4>
      </section>
      <mcw-card-actions>
        <mcw-card-action-buttons>
          <mcw-button class="mdc-card__action mdc-card__action--button" outlined
            >ACTION</mcw-button
          >
        </mcw-card-action-buttons>
        <mcw-card-action-icons>
          <mcw-material-icon
            class="mdc-card__action mdc-card__action--icon"
            icon="star"
          ></mcw-material-icon>
        </mcw-card-action-icons>
      </mcw-card-actions>
    </mcw-card>
  </div>
</template>

<script src="./card.js"></script>

<style>
.mcw-demo .mdc-card {
  background-color: white;
  width: 320px;
  margin: 32px auto;
}
</style>
