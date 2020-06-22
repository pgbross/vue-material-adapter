/* eslint-disable quote-props */
import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation';
import { RippleBase } from '~/ripple/index.js';

export default {
  name: 'mcw-icon-button',
  model: {
    prop: 'isOn',
    event: 'change',
  },
  props: {
    isOn: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      classes: {
        'mdc-icon-button': 1,
        'material-icons': 1,
      },
      styles: {},
    };
  },

  watch: {
    isOn: 'onOn_',
  },

  mounted() {
    const { CHANGE_EVENT } = MDCIconButtonToggleFoundation.strings;
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => Boolean(this.classes[className]),
      setAttr: (attrName, attrValue) =>
        this.$el.setAttribute(attrName, attrValue),
      getAttr: attrName => this.$el.getAttribute(attrName),
      notifyChange: evtData => {
        this.$emit(CHANGE_EVENT, evtData);
        this.$emit('change', evtData.isOn);
      },
    };

    this.foundation = new MDCIconButtonToggleFoundation(adapter);
    this.foundation.init();

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
    });
    this.ripple.init();
    this.foundation.toggle(this.isOn);
  },

  beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
  methods: {
    onOn_(isOn) {
      if (this.isOn !== isOn) {
        this.foundation.toggle(isOn);
      }
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const isLink = Boolean(this.$attrs.href);
    const tag = isLink ? 'a' : 'button';
    return createElement(
      tag,
      {
        class: this.classes,
        style: this.styles,
        on: { click: evt => this.foundation.handleClick(evt) },
        attrs: {
          ...this.$attrs,
          'aria-pressed': 'false',
          disabled: this.disabled,
        },
      },
      scopedSlots.default?.(),
    );
  },
};
