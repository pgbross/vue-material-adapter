import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-list-item',
  inject: ['mdcList'],
  props: {
    selected: Boolean,
    activated: Boolean,
  },
  data() {
    return {
      classes: { 'mdc-list-item': 1 },
      styles: {},
    };
  },
  render(createElement) {
    const textNodes = [];
    if (this.hasSecondary) {
      textNodes.push(
        createElement(
          'span',
          { class: { 'mdc-list-item__primary-text': 1 } },
          this.$slots.default,
        ),
      );

      textNodes.push(
        createElement(
          'span',
          { class: { 'mdc-list-item__secondary-text': 1 } },
          this.$slots.secondary,
        ),
      );
    } else {
      textNodes.push(this.$slots.default);
    }
    const itemTextElement = createElement(
      'span',
      {
        class: { 'mdc-list-item__text': 1 },
      },
      textNodes,
    );

    const nodes = [
      this.$slots['start-detail'],
      itemTextElement,
      this.$slots['end-detail'],
    ];
    return createElement(
      'li',
      {
        class: { ...this.classes, ...this.itemClasses },
        style: this.styles,
        attrs: { tabindex: this.isInteractive ? '0' : void 0 },
        on: this.isInteractive ? this.$listeners : {},
      },
      nodes,
    );
  },
  computed: {
    itemClasses() {
      return {
        'mdc-list-item--selected': this.selected,
        'mdc-list-item--activated': this.activated,
      };
    },
    isInteractive() {
      return this.mdcList && this.mdcList.interactive;
    },
    hasSecondary() {
      return this.$slots['secondary'] && (this.mdcList && this.mdcList.twoLine);
    },
    hasEndDetail() {
      return !!this.$slots['end-detail'];
    },
    hasStartDetail() {
      return !!this.$slots['start-detail'];
    },
  },
  watch: {
    isInteractive(value) {
      if (value) {
        this.addRipple();
      } else {
        this.removeRipple();
      }
    },
  },
  mounted() {
    this.isInteractive && this.addRipple();
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
};
