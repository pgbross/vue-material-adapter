/* eslint-disable quote-props */
import MDCCheckboxFoundation from '@material/checkbox/foundation';
import MDCFormFieldFoundation from '@material/form-field/foundation';
import { getCorrectEventName } from '@material/animation/index';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';
import { applyPassive } from '@mcwv/base';

const CB_PROTO_PROPS = ['checked', 'indeterminate'];

export default {
  name: 'mdc-checkbox',
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
    'align-end': Boolean,
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
        'mdc-checkbox-wrapper': 1,
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
    indeterminate(value) {
      this.setIndeterminate(value);
    },
  },
  render(createElement) {
    const inputElement = createElement('input', {
      attrs: {
        name: this.name,
        value: this.value,
        type: 'checkbox',
        id: this.vma_uid_,
      },
      class: { 'mdc-checkbox__native-control': 1 },
      on: { change: evt => this.onChange(evt) },
      ref: 'control',
    });

    const background = createElement(
      'div',
      { class: { 'mdc-checkbox__background': 1 } },
      [
        createElement(
          'svg',
          {
            class: { 'mdc-checkbox__checkmark': 1 },
            attrs: { viewBox: '0 0 24 24' },
          },
          [
            createElement('path', {
              class: { 'mdc-checkbox__checkmark-path': 1 },
              attrs: {
                fill: 'none',
                stroke: 'white',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
              },
            }),
          ],
        ),
        createElement('div', { class: { 'mdc-checkbox__mixedmark': 1 } }),
      ],
    );

    const checkboxElement = createElement(
      'div',
      { class: this.classes, style: this.styles, ref: 'root' },
      [inputElement, background],
    );
    const labelElement = createElement(
      'label',
      { attrs: { for: this.vma_uid_ }, ref: 'label' },
      this.$slots.default || this.label,
    );

    return createElement('div', { class: this.formFieldClasses }, [
      checkboxElement,
      labelElement,
    ]);
  },
  mounted() {
    this.foundation = new MDCCheckboxFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      setNativeControlAttr: (attr, value) => {
        this.$refs.control.setAttribute(attr, value);
      },
      removeNativeControlAttr: attr => {
        this.$refs.control.removeAttribute(attr);
      },
      isIndeterminate: () => this.$refs.control.indeterminate,
      isChecked: () => this.checked,
      hasNativeControl: () => !!this.$refs.control,
      setNativeControlDisabled: disabled =>
        (this.$refs.control.disabled = disabled),
      forceLayout: () => this.$refs.root.offsetWidth,
      isAttachedToDOM: () => Boolean(this.$el.parentNode),
    });

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

    onChange() {
      this.$emit('update:indeterminate', this.indeterminate);
      const isChecked = this.$refs.control.checked;

      if (Array.isArray(this.checked)) {
        const idx = this.checked.indexOf(this.value);
        if (isChecked) {
          idx < 0 && this.$emit('change', this.checked.concat(this.value));
        } else {
          idx > -1 &&
            this.$emit(
              'change',
              this.checked.slice(0, idx).concat(this.checked.slice(idx + 1)),
            );
        }
      } else {
        this.$emit('change', isChecked);
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
