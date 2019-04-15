/* eslint-disable quote-props */
import MDCRadioFoundation from '@material/radio/foundation';
import MDCFormFieldFoundation from '@material/form-field/foundation';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';
import { applyPassive } from '@mcwv/base';

const template = `  <div :class="formFieldClasses" class="mdc-radio-wrapper">
    <div ref="root" :class="classes" :style="styles" class="mdc-radio">
      <input
        ref="control"
        :id="vma_uid_"
        :name="name"
        type="radio"
        class="mdc-radio__native-control"
        @change="sync"
      >

      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"/>
        <div class="mdc-radio__inner-circle"/>
      </div>
    </div>
    <label ref="label" :for="vma_uid_">
      <slot>{{ label }}</slot>
    </label>
  </div>`;

export default {
  name: 'mdc-radio',
  template,
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'picked',
    event: 'change',
  },
  props: {
    name: { type: String, required: true },
    value: String,
    picked: String,
    checked: Boolean,
    label: String,
    'align-end': Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      classes: {},
      styles: {},
      formFieldClasses: {
        'mdc-form-field': this.label,
        'mdc-form-field--align-end': this.label && this.alignEnd,
      },
    };
  },
  watch: {
    checked: 'setChecked',
    picked: 'onPicked',
    disabled(value) {
      this.foundation.setDisabled(value);
    },
  },
  mounted() {
    // add foundation
    this.foundation = new MDCRadioFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      setNativeControlDisabled: disabled =>
        (this.$refs.control.disabled = disabled),
    });

    // add ripple
    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,

      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
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

    this.foundation.setDisabled(this.disabled);
    this.$refs.control.value = this.value || this.label;

    this.setChecked(this.checked || this.picked == this.$refs.control.value);

    // refresh model
    this.checked && this.sync();
  },
  beforeDestroy() {
    this.formField.destroy();
    this.ripple.destroy();
    this.foundation.destroy();
  },
  methods: {
    onPicked(nv) {
      this.setChecked(this.picked == this.$refs.control.value);
    },
    setChecked(checked) {
      this.$refs.control.checked = checked;
    },
    isChecked() {
      return this.$refs.control.checked;
    },
    sync(evt) {
      this.$emit('change', this.$refs.control.value);
    },
  },
};
