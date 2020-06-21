/* eslint-disable quote-props */
import { getCorrectEventName } from '@material/animation';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation';
import { applyPassive } from '@material/dom/events';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '~/base/index.js';
import { RippleBase } from '~/ripple/index.js';

const CB_PROTO_PROPS = ['checked', 'indeterminate'];

export default {
  name: 'mcw-checkbox',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: [Boolean, Array],
    indeterminate: Boolean,
    disabled: Boolean,
    label: String,
    alignEnd: Boolean,
    value: {
      type: [String, Number],
      default() {
        return 'on';
      },
    },
    name: String,
  },
  data() {
    return {
      styles: {},
      classes: { 'mdc-checkbox': 1 },
    };
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
    formFieldClasses() {
      return {
        'mdc-form-field': this.hasLabel,
        'mdc-form-field--align-end': this.hasLabel && this.alignEnd,
      };
    },
  },
  watch: {
    checked: 'setChecked',
    disabled(value) {
      this.foundation.setDisabled(value);
    },
    indeterminate: 'setIndeterminate',
  },

  mounted() {
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      forceLayout: () => this.$refs.root.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => true,
      isChecked: () => this.$refs.control.checked,
      isIndeterminate: () => this.$refs.control.indeterminate,
      removeClass: className => this.$delete(this.classes, className),
      removeNativeControlAttr: attr => {
        this.$refs.control.removeAttribute(attr);
      },
      setNativeControlAttr: (attr, value) => {
        this.$refs.control.setAttribute(attr, value);
      },

      setNativeControlDisabled: disabled =>
        (this.$refs.control.disabled = disabled),
    };

    this.foundation = new MDCCheckboxFoundation(adapter);

    this.handleAnimationEnd_ = () => this.foundation.handleAnimationEnd();

    this.$el.addEventListener(
      getCorrectEventName(window, 'animationend'),
      this.handleAnimationEnd_,
    );

    this.installPropertyChangeHooks_();

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => RippleBase.isSurfaceActive(this.$refs.control),
      registerInteractionHandler: (evt, handler) => {
        this.$refs.control.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$refs.control.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return this.$refs.root.getBoundingClientRect();
      },
    });

    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => {
        this.$refs.label.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$refs.label.removeEventListener(type, handler);
      },
      activateInputRipple: () => {
        this.ripple && this.ripple.activate();
      },
      deactivateInputRipple: () => {
        this.ripple && this.ripple.deactivate();
      },
    });

    this.foundation.init();
    this.ripple.init();
    this.formField.init();
    this.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);
    this.setIndeterminate(this.indeterminate);
  },
  beforeDestroy() {
    this.$el.removeEventListener(
      getCorrectEventName(window, 'animationend'),
      this.handleAnimationEnd_,
    );

    this.formField.destroy();
    this.ripple.destroy();

    this.uninstallPropertyChangeHooks_();
    this.foundation.destroy();
  },
  methods: {
    setChecked(checked) {
      this.$refs.control.checked = Array.isArray(checked)
        ? checked.indexOf(this.value) > -1
        : checked;
    },
    setIndeterminate(indeterminate) {
      this.$refs.control.indeterminate = indeterminate;
    },

    onChange({ target: { indeterminate, checked } }) {
      // note indeterminate will not currently work with the array model
      this.$emit('update:indeterminate', indeterminate);

      if (Array.isArray(this.checked)) {
        const idx = this.checked.indexOf(this.value);
        if (checked) {
          idx < 0 && this.$emit('change', this.checked.concat(this.value));
        } else {
          idx > -1 &&
            this.$emit(
              'change',
              this.checked.slice(0, idx).concat(this.checked.slice(idx + 1)),
            );
        }
      } else {
        this.$emit('change', checked);
      }
    },

    installPropertyChangeHooks_() {
      const nativeCb = this.$refs.control;
      const cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(controlState => {
        const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          const nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */ ({
            get: desc.get,
            set: state => {
              desc.set.call(nativeCb, state);
              this.foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable,
          });
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    },

    uninstallPropertyChangeHooks_() {
      const nativeCb = this.$refs.control;
      const cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(controlState => {
        const desc = /** @type {!ObjectPropertyDescriptor} */ (Object.getOwnPropertyDescriptor(
          cbProto,
          controlState,
        ));
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    },
  },
};

// ===
// Private functions
// ===

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
