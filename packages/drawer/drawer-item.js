import { CustomLinkMixin, DispatchEventMixin } from '~/base/index.js';
import { RippleBase } from '~/ripple/index.js';

export default {
  name: 'mcw-drawer-item',
  inject: ['mcwDrawer'],
  mixins: [DispatchEventMixin, CustomLinkMixin],
  props: {
    startIcon: String,
    modalClose: {
      type: Boolean,
      default: true,
    },
    activated: Boolean,
    exactActiveClass: {
      type: String,
      default: 'mdc-list-item--activated',
    },
  },
  data() {
    return {
      classes: {
        'mdc-list-item': 1,
        'mdc-drawer-item': 1,
      },
      styles: {},
    };
  },

  computed: {
    mylisteners() {
      return {
        ...this.$listeners,
        click: e => {
          this.mcwDrawer.isModal && this.modalClose && this.mcwDrawer.close();
          this.dispatchEvent(e);
        },
      };
    },
    itemClasses() {
      return {
        'mdc-list-item--activated': this.activated,
      };
    },
    hasStartDetail() {
      return this.startIcon || this.$slots['start-detail'];
    },
  },
  mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy() {
    this.ripple && this.ripple.destroy();
    this.ripple = null;
  },
};
