import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text/foundation';

export default {
  name: 'textfield-helper-text',
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String,
  },
  data() {
    return {
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.persistent,
        'mdc-text-field-helper-text--validation-msg': this.validation,
      },
    };
  },

  watch: {
    persistent() {
      this.foundation.setPersistent(this.persistent);
    },
    validation() {
      this.foundation.setValidation(this.validation);
    },
  },
  mounted() {
    this.foundation = new MDCTextFieldHelperTextFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      hasClass: className => Boolean(this.classes[className]),

      setAttr: (attr, value) => {
        this.$el.setAttribute(attr, value);
      },
      removeAttr: attr => {
        this.$el.removeAttribute(attr);
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
    const defaultSlot = scopedSlots.default && scopedSlots.default();

    const classes = classNames(this.classes);
    if (defaultSlot) {
      return defaultSlot[0];
    }
    return createElement('div', { class: 'mdc-text-field-helper-line' }, [
      createElement(
        'div',
        { class: classes, attrs: this.$attrs },
        this.helptext,
      ),
    ]);
  },
};

// ===
// Private functions
// ===

const hasOwn = {}.hasOwnProperty;

function classNames() {
  const classes = [];

  for (let i = 0; i < arguments.length; i++) {
    // eslint-disable-next-line prefer-rest-params
    const arg = arguments[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      // eslint-disable-next-line prefer-spread
      const inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
