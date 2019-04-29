<template>
  <div class="mcw-demo mcw-demo--container">
    <mcw-grid-list icon-align-start with-support-text width="150" class="mcw-demo" interactive>
      <mcw-grid-tile
        v-for="(item, index) in 4"
        :src="tile"
        :title="'Title ' + (index + 1)"
        :key="index"
        support-text="more..."
        cover
        icon="star_border"
      />
    </mcw-grid-list>
  </div>
</template>

<script>
import tile from 'demo/assets/tile-1-1.jpg';

export default {
  data() {
    return {
      tile,
    };
  },
};
</script>
