export default {
  name: 'mdc-radio-input',
  props: { value: String, picked: String, disabled: Boolean },
  model: {
    prop: 'picked',
    event: 'change',
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots, $attrs: attrs, value, disabled } = this;

    if (scopedSlots.nativeInput) {
      const data = {
        class: 'mdc-radio__native-control',
        attrs: {
          ...attrs,
          type: 'radio',
          value,
          checked: this.picked == this.value,
          disabled,
        },
        on: {
          ...this.$listeners,
          change: evt => {
            this.$emit('change', evt.target.value);
          },
        },
      };

      return scopedSlots.nativeInput({ data });
    }
    throw new Error('mdc-radio-input expects scoped slot "nativeInput"');
  },
};
