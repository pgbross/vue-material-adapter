import MDCTopAppBarFoundation from '@material/top-app-bar/standard/foundation';
import MDCShortTopAppBarFoundation from '@material/top-app-bar/short/foundation';
import MDCFixedTopAppBarFoundation from '@material/top-app-bar/fixed/foundation';
import { cssClasses } from './constants';

export default {
  name: 'mdc-top-app-bar',
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    fixed: Boolean,
    dense: Boolean,
    tag: { type: String, default: 'header' },
    scrollTarget: HTMLElement,
  },
  data() {
    return {
      rootStyles: { top: '0' },
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.shortCollapsed,
        'mdc-top-app-bar--prominent': this.prominent,
        'mdc-top-app-bar--fixed': this.fixed,
      },
      myScrollTarget: this.scrollTarget,
    };
  },

  watch: {
    scrollTarget(nv, ov) {
      if (nv !== ov) {
        this.foundation_.destroyScrollHandler();
        this.myScrollTarget = nv;
      }
      this.foundation_.initScrollHandler();
    },
  },

  mounted() {
    const adapter = {
      addClass: className => this.$set(this.rootClasses, className, true),
      removeClass: className => this.$delete(this.rootClasses, className),
      hasClass: className => Boolean(this.rootClasses[className]),
      setStyle: (property, value) =>
        this.$set(this.rootStyles, property, value),
      getTopAppBarHeight: () => this.$el.clientHeight,
      registerScrollHandler: handler => {
        if (this.myScrollTarget) {
          this.myScrollTarget.addEventListener('scroll', handler);
        } else {
          window.addEventListener('scroll', handler);
        }
      },
      deregisterScrollHandler: handler => {
        if (this.myScrollTarget) {
          this.myScrollTarget.removeEventListener('scroll', handler);
        } else {
          window.removeEventListener('scroll', handler);
        }
      },

      getViewportScrollY: () => window.pageYOffset,
      getTotalActionItems: () =>
        this.$refs.root.querySelectorAll(`.${cssClasses.ACTION_ITEM}`).length,
    };

    const { short, shortCollapsed, fixed } = this;
    if (short || shortCollapsed) {
      this.foundation_ = new MDCShortTopAppBarFoundation(adapter);
    } else if (fixed) {
      this.foundation_ = new MDCFixedTopAppBarFoundation(adapter);
    } else {
      this.foundation_ = new MDCTopAppBarFoundation(adapter);
    }

    this.foundation_.init();
  },
  beforeDestroy() {
    this.foundation_.destroy();
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      this.tag,
      {
        class: this.rootClasses,
        style: this.rootStyles,
        ref: 'root',
        on: this.$listeners,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
