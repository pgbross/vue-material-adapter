<template>
  <div :class="classes"><slot /></div>
</template>

<script>
export default {
  name: 'mdc-icon-toggle',
  props: {
    isOn: Boolean
  },
  data() {
    return {
      classes: {
        'mdc-icon-button__icon': true,
        'mdc-icon-button__icon--on': this.isOn
      }
    }
  },
  mounted() {},

  beforeDestroy() {},
  methods: {},

  computed: {}
}
</script>
