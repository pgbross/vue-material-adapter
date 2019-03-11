export function mdcTypoMixin(
  defaultTag,
  defaultClassModifier,
  name = `mdc-${defaultTag}`,
) {
  return {
    props: {
      tag: {
        type: String,
        default: defaultTag,
      },
      classModifier: {
        type: String,
        default: defaultClassModifier,
      },
    },
    render(createElement) {
      return createElement(
        this.tag,
        {
          class: {
            [name]: true,
            'mdc-typography': true,
            [`mdc-typography--${this.classModifier}`]: true,
          },
          attrs: this.$attrs,
          on: this.$listeners,
        },
        this.$slots.default,
      );
    },
  };
}
