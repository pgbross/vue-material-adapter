import { MDCLinearProgressFoundation } from '@material/linear-progress/foundation';

const ProgressPropType = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

export default {
  name: 'mcw-linear-progress',
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    reversed: Boolean,
    progress: ProgressPropType,
    buffer: ProgressPropType,
    bufferingDots: { type: Boolean, default: true },
    tag: { type: String, default: 'div' },
  },
  data() {
    return {
      classes: {
        'mdc-linear-progress': 1,
      },
      bufferbarStyles: {},
      primaryStyles: {},
      rootAttrs: {},
    };
  },
  watch: {
    open(nv) {
      if (nv) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    progress(nv) {
      this.foundation.setProgress(Number(nv));
    },
    buffer(nv) {
      this.foundation.setBuffer(Number(nv));
    },
    indeterminate(nv) {
      this.foundation.setDeterminate(!nv);
    },
    reversed(nv) {
      this.foundation.setReverse(nv);
    },
  },

  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.classes, className, true);
      },
      forceLayout: () => this.$el.offsetWidth,
      setBufferBarStyle: (styleProperty, value) => {
        this.$set(this.bufferbarStyles, styleProperty, value);
      },
      setPrimaryBarStyle: (styleProperty, value) => {
        this.$set(this.primaryStyles, styleProperty, value);
      },
      hasClass: className => this.$el.classList.contains(className),
      removeClass: className => this.$delete(this.classes, className),
      setAttribute: (attributeName, value) => {
        this.$set(this.rootAttrs, attributeName, value);
      },
      removeAttribute: attributeName => {
        this.$delete(this.rootAttrs, attributeName);
      },
    };

    this.foundation = new MDCLinearProgressFoundation(adapter);
    this.foundation.init();

    this.foundation.setReverse(this.reversed);
    this.foundation.setProgress(Number(this.progress));
    this.foundation.setBuffer(Number(this.buffer));
    this.foundation.setDeterminate(!this.indeterminate);

    if (this.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
};
