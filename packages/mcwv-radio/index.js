/* eslint-disable quote-props */
import MDCFormFieldFoundation from '@material/form-field/foundation';
import MDCRadioFoundation from '@material/radio/foundation';
import {
  applyPassive,
  BasePlugin,
  DispatchFocusMixin,
  VMAUniqueIdMixin,
} from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';
import mdcRadioInput from './mdc-radio-input.js';

const mdcRadio = {
  name: 'mdc-radio',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  props: {
    label: String,
    'align-end': Boolean,
    radioClasses: String,
  },
  data() {
    return {
      classes: { 'mdc-radio': 1 },
      styles: {},
      nativeControlId: '',
    };
  },
  watch: {
    disabled(value) {
      this.foundation.setDisabled(value);
    },
  },

  mounted() {
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      setNativeControlDisabled: disabled =>
        this.$refs.controlEl && this.$refs.controlEl.disabled == disabled,
    };

    // add foundation
    this.foundation = new MDCRadioFoundation(adapter);

    // add ripple
    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,

      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (evt, handler) => {
        this.$refs.controlEl.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$refs.controlEl.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return this.$refs.root.getBoundingClientRect();
      },
    });

    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => {
        this.$refs.labelEl &&
          this.$refs.labelEl.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$refs.labelEl &&
          this.$refs.labelEl.removeEventListener(type, handler);
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

    this.foundation.setDisabled(this.$refs.controlEl.disabled);
  },

  beforeDestroy() {
    this.formField.destroy();
    this.ripple.destroy();
    this.foundation.destroy();
  },

  render(createElement) {
    const { alignEnd, $scopedSlots: slots } = this;

    const backgroundEl = createElement(
      'div',
      {
        class: { 'mdc-radio__background': 1 },
      },
      [
        createElement('div', { class: 'mdc-radio__outer-circle' }),
        createElement('div', { class: 'mdc-radio__inner-circle' }),
      ],
    );

    const slot = slots.default && slots.default();

    if (!slot || slot.length != 1) {
      throw new Error('mdc-radio expects exactly one native control element');
    }

    const [inputEl] = slot;

    inputEl.data.scopedSlots = {
      nativeInput: ({ data }) => {
        this.nativeControlId = data.attrs.id;
        data.ref = 'controlEl';
        return createElement('input', data);
      },
    };

    const radioEl = createElement(
      'div',
      {
        class: [this.classes, this.radioClasses],
        style: this.styles,
        ref: 'root',
      },
      [inputEl, backgroundEl],
    );

    return createElement(
      'div',
      {
        class: {
          'mdc-form-field': 1,
          'mdc-form-field--align-end': alignEnd,
        },
      },
      [
        radioEl,
        createElement(
          'label',
          { ref: 'labelEl', attrs: { for: this.nativeControlId } },
          this.label,
        ),
      ],
    );
  },
};

export { mdcRadio, mdcRadioInput };

export default BasePlugin({
  mdcRadio,
  mdcRadioInput,
});
