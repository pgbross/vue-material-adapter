import MDCFloatingLabelFoundation from '@material/floating-label/foundation';
import { BasePlugin } from '@mcwv/base';

const mdcFloatingLabel = {
  name: 'mdc-floating-label',
  data() {
    return {
      labelClasses: { 'mdc-floating-label': true },
    };
  },

  mounted() {
    this.foundation = new MDCFloatingLabelFoundation({
      addClass: className => {
        this.$set(this.labelClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.labelClasses, className);
      },
      getWidth: () => this.$el.scrollWidth,
      registerInteractionHandler: (evtType, handler) => {
        this.$el.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: (evtType, handler) => {
        this.$el.removeEventListener(evtType, handler);
      },
    });
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },

  methods: {
    getWidth() {
      return this.foundation.getWidth();
    },

    float(shouldFloat) {
      this.foundation.float(shouldFloat);
    },

    shake(shouldShake) {
      this.foundation.shake(shouldShake);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    return createElement(
      'label',
      { class: this.labelClasses },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

export { mdcFloatingLabel };

export default BasePlugin({
  mdcFloatingLabel,
});
