<template>
  <div class="mcw-demo">
    <div>Single select</div>
    <mcw-segmented-button single-select @change="onChange">
      <mcw-segment icon="favorite" label="Some text"></mcw-segment>
      <mcw-segment label="Some text"></mcw-segment>
      <mcw-segment icon="delete" :ripple="false"></mcw-segment>
    </mcw-segmented-button>

    <div style="margin-top: 2em">Multi select</div>
    <mcw-segmented-button>
      <mcw-segment icon="favorite" label="Some text"></mcw-segment>
      <mcw-segment label="Some text"></mcw-segment>
      <mcw-segment icon="delete" :ripple="false"></mcw-segment>
    </mcw-segmented-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},

  mounted() {},
  methods: {
    onChange(detail) {
      console.dir(detail);
    },
  },
};
</script>

<style lang="scss">
.demo-controls {
  margin-top: 2em;
}
</style>
