<template>
  <div class="tooltip-demo">
    <mcw-tooltip id="tooltip-id">My tooltip 1</mcw-tooltip>
    <mcw-tooltip id="tooltip-id2" position="end,above"
      >Another tooltip 2</mcw-tooltip
    >

    This is <a aria-describedby="tooltip-id" href="www.google.com"> Link </a>.
    <p>
      Here is
      <mcw-button aria-describedby="tooltip-id2" outlined>My Button</mcw-button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},

  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.tooltip-demo {
  width: 100%;
  background-color: #f2f2f2;
}
</style>
