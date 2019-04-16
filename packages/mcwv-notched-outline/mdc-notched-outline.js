import MDCnotchedOutlineFoundation from '@material/notched-outline/foundation';

export default {
  name: 'mdc-notched-outline',

  data() {
    return {
      outlinedClasses: { 'mdc-notched-outline': true },
    };
  },
  render(createElement) {
    const labelNode = this.$slots.default
      ? [
          createElement(
            'mdc-floating-label',
            { ref: 'labelEl' },
            this.$slots.default,
          ),
        ]
      : [];

    const notchEl = createElement(
      'div',
      {
        class: { 'mdc-notched-outline__notch': 1 },
        ref: 'notchEl',
      },
      labelNode,
    );

    return createElement('div', { class: this.outlinedClasses }, [
      createElement('div', { class: { 'mdc-notched-outline__leading': 1 } }),
      notchEl,
      createElement('div', { class: { 'mdc-notched-outline__trailing': 1 } }),
    ]);
  },
  mounted() {
    this.foundation = new MDCnotchedOutlineFoundation({
      addClass: className => {
        this.$set(this.outlinedClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.outlinedClasses, className);
      },

      setNotchWidthProperty: width =>
        this.$refs.notchEl.style.setProperty('width', width + 'px'),
      removeNotchWidthProperty: () =>
        this.$refs.notchEl.style.removeProperty('width'),
    });
    this.foundation.init();

    if (this.$slots.default) {
      this.$set(
        this.outlinedClasses,
        MDCnotchedOutlineFoundation.cssClasses.OUTLINE_UPGRADED,
        true,
      );
    } else {
      this.$set(
        this.outlinedClasses,
        MDCnotchedOutlineFoundation.cssClasses.NO_LABEL,
        true,
      );
    }
  },
  beforeDestroy() {
    const foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
  },

  methods: {
    notch(notchWidth) {
      this.foundation.notch(notchWidth);
    },

    closeNotch() {
      this.foundation.closeNotch();
    },
    float(shouldFloat) {
      this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat);
    },

    shake(shouldShake) {
      this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake);
    },

    getWidth() {
      return this.$refs.labelEl.getWidth();
    },
  },
};
