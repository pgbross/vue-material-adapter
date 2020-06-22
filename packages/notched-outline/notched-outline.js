import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation';

import { mcwFloatingLabel } from '../floating-label/index.js';

export default {
  name: 'mcw-notched-outline',
  components: { mcwFloatingLabel },

  data() {
    return {
      outlinedClasses: { 'mdc-notched-outline': true },
      notchStyles: {},
    };
  },

  mounted() {
    const {
      OUTLINE_UPGRADED,
      NO_LABEL,
    } = MDCNotchedOutlineFoundation.cssClasses;

    const adapter = {
      addClass: className => {
        this.$set(this.outlinedClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.outlinedClasses, className);
      },

      setNotchWidthProperty: width =>
        this.$set(this.notchStyles, 'width', `${width}px`),
      removeNotchWidthProperty: () => this.$delete(this.notchStyles, 'width'),
    };

    this.foundation = new MDCNotchedOutlineFoundation(adapter);
    this.foundation.init();

    const key = this.$slots.default ? OUTLINE_UPGRADED : NO_LABEL;
    this.$set(this.outlinedClasses, key, true);
  },

  beforeDestroy() {
    this.foundation.destroy();
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
      return this.$refs.labelEl?.getWidth();
    },
  },
};
