import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';

export default {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
  },
  data() {
    return {
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': this.helptextPersistent,
        'mdc-select-helper-text--validation-msg': this.helptextValidation,
      },
      attrs: { 'aria-hidden': 'true' },
    };
  },
  watch: {
    helptextPersistent() {
      this.foundation.setPersistent(this.helptextPersistent);
    },
    helptextValidation() {
      this.foundation.setValidation(this.helptextValidation);
    },
  },

  mounted() {
    this.foundation = new MDCSelectHelperTextFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      hasClass: className => Boolean(this.classes[className]),

      setAttr: (attr, value) => {
        this.$set(this.attrs, attr, value);
        // this.$el.setAttribute(attr, value);
      },
      removeAttr: attr => {
        this.$delete(this.attrs, attr);
        // this.$el.removeAttribute(attr);
      },

      setContent: (/* content */) => {
        // help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      },
    });

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'p',
      {
        class: this.classes,
        attrs: this.attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
