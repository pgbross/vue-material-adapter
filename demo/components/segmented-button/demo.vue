<template>
  <div class="mcw-demo">
    <div>Single select</div>
    <mcw-segmented-button
      v-model="singleIndex"
      single-select
      @change="onChange"
    >
      <mcw-segment icon="favorite" label="Some text"></mcw-segment>
      <mcw-segment label="Some text"></mcw-segment>
      <mcw-segment icon="delete" :ripple="false"></mcw-segment>
    </mcw-segmented-button>

    <div>Value: {{ singleIndex }}</div>

    <div style="margin-top: 2em">Multi select</div>
    <mcw-segmented-button v-model="multiIndex">
      <mcw-segment icon="favorite" label="Some text"></mcw-segment>
      <mcw-segment label="Some text"></mcw-segment>
      <mcw-segment icon="delete" :ripple="false"></mcw-segment>
    </mcw-segmented-button>

    <div>Value: {{ multiIndex }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return { singleIndex: null, multiIndex: [] };
  },
  computed: {},

  mounted() {
    let sc = 0;
    const singleTimer = setInterval(() => {
      if (this.singleIndex < 2) {
        this.singleIndex += 1;
      } else {
        this.singleIndex = 0;
      }

      if (sc++ > 3) {
        clearInterval(singleTimer);
      }
    }, 1000);

    let mc = 0;
    let mi = 0;
    const multiTimer = setInterval(() => {
      const idx = this.multiIndex.indexOf(mi);
      if (idx < 0) {
        this.multiIndex = this.multiIndex.concat(mi);
      } else {
        this.multiIndex = this.multiIndex
          .slice(0, idx)
          .concat(this.multiIndex.slice(idx + 1));
      }
      if (++mi > 2) {
        mi = 0;
      }

      if (mc++ > 20) {
        clearInterval(multiTimer);
      }
    }, 1000);
  },
  methods: {
    onChange(detail) {
      // console.dir(detail);
    },
    onFavourite() {
      console.log('onFavourite');
    },
  },
};
</script>

<style lang="scss">
.demo-controls {
  margin-top: 2em;
}
</style>
