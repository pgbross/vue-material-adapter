import { DispatchEventMixin, CustomLinkMixin } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-drawer-item',
  inject: ['mdcDrawer'],
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
  render(createElement) {
    const nodes = [
      createElement(
        'span',
        { class: { 'mdc-list-item__text': 1 } },
        this.$slots.default,
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
  computed: {
    mylisteners() {
      return {
        ...this.$listeners,
        click: e => {
          this.mdcDrawer.isModal && this.modalClose && this.mdcDrawer.close();
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
