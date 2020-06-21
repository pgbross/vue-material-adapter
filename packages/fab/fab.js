import { CustomButtonMixin, DispatchEventMixin } from '~/base/index.js';
import { RippleMixin } from '~/ripple/index.js';

export default {
  name: 'mcw-fab',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String,
  },
  data() {
    return {
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': this.mini,
        'mdc-fab--extended': this.label || this.$slots.default,
        'mdc-fab--exited': this.exited,
      },
    };
  },
  watch: {
    icon() {
      this.$set(this.classes, 'material-icons', this.icon);
    },
    mini() {
      this.$set(this.classes, 'mdc-fab--mini', this.mini);
    },
    exited() {
      this.$set(this.classes, 'mdc-fab--exited', this.exited);
    },
  },
};
