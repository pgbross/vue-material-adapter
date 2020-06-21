import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation';

const ProgressPropType = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

function getCircleAttrs(medium = false, indeterminate = true) {
  return medium
    ? {
        cx: '16',
        cy: '16',
        r: '12.5',
        'stroke-dasharray': '78.54',
        'stroke-dashoffset': indeterminate ? '39.27' : '78.54',
      }
    : {
        cx: '24',
        cy: '24',
        r: '18',
        'stroke-dasharray': '113.097',
        'stroke-dashoffset': indeterminate ? '56.549' : '113.097',
      };
}

export default {
  name: 'mcw-circular-progress',
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    medium: Boolean,
    progress: ProgressPropType,
    tag: { type: String, default: 'div' },
  },
  data() {
    return {
      classes: {
        'mdc-circular-progress': 1,
        'mdc-circular-progress--medium': this.medium,
        'mdc-circular-progress--large': !this.medium,
      },
      rootAttrs: {},
      circleAttrs: getCircleAttrs(this.medium, false),
      indeterminateAttrs: getCircleAttrs(this.medium, true),
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

    indeterminate(nv) {
      this.foundation.setDeterminate(!nv);
    },
  },

  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.classes, className, true);
      },

      getDeterminateCircleAttribute: attributeName => {
        return this.circleAttrs[attributeName];
      },

      hasClass: className => this.$el.classList.contains(className),
      removeClass: className => this.$delete(this.classes, className),

      removeAttribute: attributeName => {
        this.$delete(this.rootAttrs, attributeName);
      },

      setAttribute: (attributeName, value) => {
        this.$set(this.rootAttrs, attributeName, value);
      },

      setDeterminateCircleAttribute: (attributeName, value) =>
        this.$set(this.circleAttrs, attributeName, value),
    };

    this.foundation = new MDCCircularProgressFoundation(adapter);
    this.foundation.init();

    this.foundation.setProgress(Number(this.progress));
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
