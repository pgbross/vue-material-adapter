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
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const nodes = [
      createElement(
        'span',
        { class: { 'mdc-list-item__text': 1 } },
        scopedSlots.default && scopedSlots.default(),
      ),
    ];

    if (this.hasStartDetail) {
      nodes.unshift(
        createElement('span', { class: { 'mdc-list-item__graphic': 1 } }, [
          this.$slots['start-detail'] ||
            createElement(
              'i',
              {
                class: { 'material-icons': 1 },
                attrs: { 'aria-hidden': 'true' },
              },
              this.startIcon,
            ),
        ]),
      );
    }

    return createElement(
      'custom-link',
      {
        class: { ...this.classes, ...this.itemClasses },
        styles: this.styles,
        attrs: { link: this.link },
        on: this.mylisteners,
      },
      nodes,
    );
  },
};
