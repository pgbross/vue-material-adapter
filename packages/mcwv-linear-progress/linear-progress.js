import MDCLinearProgressFoundation from '@material/linear-progress/foundation';

const ProgressPropType = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

export const mcwLinearProgress = {
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
      getPrimaryBar: () => this.$refs.primary,
      getBuffer: () => this.$refs.buffer,
      hasClass: className => this.$el.classList.contains(className),
      removeClass: className => this.$delete(this.classes, className),
      setStyle: (el, styleProperty, value) => (el.style[styleProperty] = value),
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
  render(createElement) {
    const nodes = [
      this.bufferingDots &&
        createElement('div', {
          class: 'mdc-linear-progress__buffering-dots',
        }),
      createElement('div', {
        ref: 'buffer',
        class: 'mdc-linear-progress__buffer',
      }),
      createElement(
        'div',
        {
          ref: 'primary',
          class: 'mdc-linear-progress__bar mdc-linear-progress__primary-bar',
        },
        [
          createElement('span', {
            class: 'mdc-linear-progress__bar-inner',
          }),
        ],
      ),
      createElement(
        'div',
        {
          ref: 'secondary',
          class: 'mdc-linear-progress__bar  mdc-linear-progress__secondary-bar',
        },
        [
          createElement('span', {
            class: 'mdc-linear-progress__bar-inner',
          }),
        ],
      ),
    ];

    return createElement(
      this.tag,
      {
        class: this.classes,
        attrs: { role: 'progressbar' },
      },
      nodes,
    );
  },
};
