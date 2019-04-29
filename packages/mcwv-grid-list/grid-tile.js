/* eslint-disable quote-props */

import { DispatchEventMixin } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mcw-grid-tile',
  inject: ['mcwGrid'],
  mixins: [DispatchEventMixin],
  props: {
    src: String,
    cover: Boolean,
    icon: String,
    title: String,
    'support-text': String,
    selected: Boolean,
    activated: Boolean,
  },
  data() {
    return {
      classes: { 'mdc-grid-tile': 1 },
      styles: {},
    };
  },

  computed: {
    clickListener() {
      return { click: e => this.dispatchEvent(e) };
    },
    itemClasses() {
      return {
        'mdc-grid-tile--selected': this.selected,
        'mdc-grid-tile--activated': this.activated,
      };
    },
    isInteractive() {
      return this.mcwGrid && this.mcwGrid.interactive;
    },
    hasStartDetail() {
      return this.startIcon || this.$slots['start-detail'];
    },
    hasEndDetail() {
      return this.endIcon || this.$slots['end-detail'];
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
  render(createElement) {
    const nodes = [];

    const tileChild = this.cover
      ? createElement('div', {
          class: { 'mdc-grid-tile__primary-content': 1 },
          style: { backgroundImage: `url(${this.src})` },
        })
      : createElement('img', {
          class: { 'mdc-grid-tile__primary-content': 1 },
          attrs: { src: this.src },
        });

    nodes.push(
      createElement('div', { class: { 'mdc-grid-tile__primary': 1 } }, [
        tileChild,
      ]),
    );

    if (this.title || this.supportText) {
      const children = [];

      if (this.icon) {
        children.push(
          createElement(
            'i',
            {
              class: {
                'mdc-grid-tile__icon': 1,
                'material-icons': 1,
              },
            },
            this.icon,
          ),
        );
      }
      if (this.title) {
        children.push(
          createElement(
            'span',
            {
              class: {
                'mdc-grid-tile__title': 1,
              },
            },
            this.title,
          ),
        );
      }
      if (this.supportText) {
        children.push(
          createElement(
            'span',
            {
              class: {
                'mdc-grid-tile__support-text': 1,
              },
            },
            this.supportText,
          ),
        );
      }

      nodes.push(
        createElement(
          'span',
          { class: { 'mdc-grid-tile__secondary': 1 } },
          children,
        ),
      );
    }

    return createElement(
      'li',
      {
        class: { ...this.classes, ...this.itemClasses },
        style: this.styles,
        attrs: { tabindex: this.isInteractive ? '0' : void 0 },
        on: this.isInteractive ? this.listeners : this.clickListener,
      },
      nodes,
    );
  },
};
