import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-list-item',
  props: {
    classNamesFromList: {
      type: Array,
    },
    attributesFromList: Object,
    shouldFocus: Boolean,
    shouldFollowHref: Boolean,
    shouldToggleCheckbox: Boolean,
    childrenTabIndex: Number | String,
    counter: { type: Number, default: 0 },
    nonInteractive: Boolean,
    tag: {
      type: String,
      default() {
        return 'li';
      },
    },
  },
  data() {
    return { classes: {}, styles: {} };
  },

  mounted() {
    !this.nonInteractive && this.addRipple();
  },
  beforeDestroy() {
    this.removeRipple();
  },
  methods: {
    addRipple() {
      if (!this.ripple) {
        const ripple = new RippleBase(this);
        ripple.init();
        this.ripple = ripple;
      }
    },
    removeRipple() {
      if (this.ripple) {
        const ripple = this.ripple;
        this.ripple = null;
        ripple.destroy();
      }
    },
  },

  render(createElement) {
    const {
      tag,
      $scopedSlots: slots,
      classNamesFromList,
      attributesFromList,
      childrenTabIndex,
    } = this;

    const classes = ['mdc-list-item', this.classes].concat(classNamesFromList);

    const mdt = (slots.default && slots.default()) || [];

    const nodes = mdt.map(vn => {
      if (!vn.tag || !vn.componentOptions) {
        if (!vn.tag && vn.text) {
          return createElement('mdc-list-item-text', {
            props: { primaryText: vn.text },
          });
        }
        return vn;
      }

      const data = vn.data || {};
      return createElement(
        vn.componentOptions.tag,
        {
          props: {
            ...vn.componentOptions.propsData,
            tabIndex: childrenTabIndex,
          },
          attrs: {
            ...data.attrs,
          },
          on: {},
        },
        vn.componentOptions.children,
      );
    });

    return createElement(
      tag,
      {
        class: classes,
        style: this.styles,
        attrs: attributesFromList,
        on: this.$listeners,
      },
      nodes, // slots.default && slots.default(),
    );
  },
};
