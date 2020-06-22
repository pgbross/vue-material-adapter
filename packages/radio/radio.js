/* eslint-disable quote-props */
import { applyPassive } from '@material/dom/events';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { MDCRadioFoundation } from '@material/radio/foundation';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '~/base/index.js';
import { RippleBase } from '~/ripple/index.js';

export default {
  name: 'mcw-radio',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'picked',
    event: 'change',
  },
  props: {
    label: String,
    alignEnd: Boolean,
    radioClasses: String,
    name: { type: String, required: true },
    id: { type: String, required: true },
    value: String,
    picked: String,
    disabled: Boolean,
    checked: Boolean,
  },
  data() {
    return {
      classes: { 'mdc-radio': 1 },

      styles: {},
    };
  },
  watch: {
    checked: 'setChecked',
    picked: 'onPicked',
    disabled(value) {
      this.foundation.setDisabled(value);
    },
  },

  computed: {
    rootClasses() {
      return { ...this.classes, ...this.radioClasses };
    },
    formFieldClasses() {
      return {
        'mdc-form-field': 1,
        'mdc-form-field--align-end': this.alignEnd,
      };
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

    const { checked, disabled, picked, value } = this;

    this.foundation.setDisabled(disabled);
    this.setChecked(checked || picked == value);

    // if checked, need to sync any change of value
    checked && this.onChange();
  },

  methods: {
    onChange() {
      const nativeValue = this.$refs.controlEl.value;
      nativeValue != this.picked &&
        this.$emit('change', this.$refs.controlEl.value);
    },
    onPicked(nv) {
      this.setChecked(nv == this.$refs.controlEl.value);
    },
    setChecked(checked) {
      this.$refs.controlEl.checked = checked;
    },
  },

  beforeDestroy() {
    this.formField.destroy();
    this.ripple.destroy();
    this.foundation.destroy();
  },

  renderX(createElement) {
    const {
      alignEnd,
      value,
      disabled,
      picked,
      $attrs: attrs,
      $listeners: listeners,
      id,
      label,
      name,
    } = this;

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

    const inputEl = createElement('input', {
      class: ['mdc-radio__native-control'],
      attrs: {
        ...attrs,
        name,
        id,
        type: 'radio',
        value,
        checked: picked == value,
        disabled,
      },
      ref: 'controlEl',
      on: {
        ...listeners,
        change: evt => this.onChange(evt),
      },
    });

    const radioEl = createElement(
      'div',
      {
        class: [this.classes, this.radioClasses],
        style: this.styles,
        ref: 'root',
      },
      [
        inputEl,
        backgroundEl,
        createElement('div', { class: { 'mdc-radio__ripple': 1 } }),
      ],
    );

    if (!label) {
      return radioEl;
    }

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
        createElement('label', { ref: 'labelEl', attrs: { for: id } }, label),
      ],
    );
  },
};
