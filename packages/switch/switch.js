import { MDCSwitchFoundation } from '@material/switch/foundation';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '~/base/index.js';
import { RippleBase } from '~/ripple/index.js';

export default {
  name: 'mcw-switch',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String,
  },
  data() {
    return {
      classes: { 'mdc-switch': 1 },
      styles: {},
      nativeControlChecked: this.checked,
      nativeControlDisabled: this.disabled,
      nativeAttrs: {},
    };
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
  },
  watch: {
    checked(value) {
      this.foundation && this.foundation.setChecked(value);
    },
    disabled(value) {
      this.foundation && this.foundation.setDisabled(value);
    },
  },

  mounted() {
    this.foundation = new MDCSwitchFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      setNativeControlChecked: checked => (this.nativeControlChecked = checked),
      setNativeControlDisabled: disabled =>
        (this.nativeControlDisabled = disabled),

      setNativeControlAttr: (attr, value) => {
        this.nativeAttrs[attr] = value;
      },
    });
    this.foundation.init();
    this.foundation.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    onChanged(event) {
      this.foundation && this.foundation.handleChange(event);
      this.$emit('change', event.target.checked);
    },
  },
};
