<script>
export default {
  name: 'mdc-fixed-adjust',
  props: {
    tag: { type: String, default: 'main' },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean
  },

  computed: {
    classnames() {}
  },

  render(h) {
    const base = 'mdc-top-app-bar'
    const suffix = '-fixed-adjust'
    return h(
      this.tag,
      {
        class: {
          [base + '--short' + suffix]: this.short,
          [base + '--dense' + suffix]: this.dense && !this.prominent,
          [base + '--dense-prominent' + suffix]: this.dense && this.prominent,
          [base + '--prominent' + suffix]: !this.dense && this.prominent,
          [base + '-' + suffix]: !this.short && !this.dense && !this.prominent
        },
        attrs: this.$attrs
      },
      this.$slots.default
    )
  }
}
</script>
