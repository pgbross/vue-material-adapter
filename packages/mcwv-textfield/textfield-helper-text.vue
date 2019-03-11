<!-- <template>
  <p ref="helptextEl" :class="classes" aria-hidden="true"><slot /></p>
</template> -->

<script>
import MDCTextFieldHelperTextFoundation from '@material/textfield/helper-text/foundation';

export default {
  name: 'textfield-helper-text',

  // functional: true,
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String,
  },
  data() {
    const context = this.$slots.default
      ? this.$slots.default[0].data.attrs
      : this;
    return {
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': context.persistent,
        'mdc-text-field-helper-text--validation-msg': context.validation,
      },
    };
  },

  render(h) {
    const classes = classNames(this.classes);
    if (this.$slots.default) {
      const node = this.$slots.default[0];
      node.data.class = classes;
      return node;
    } else {
      return h('p', { class: classes, attrs: this.$attrs }, this.helptext);
    }
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
      setContent: (/*content*/) => {
        // help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      },
    });

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },
};

// ===
// Private functions
// ===

var hasOwn = {}.hasOwnProperty;

function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
</script>
