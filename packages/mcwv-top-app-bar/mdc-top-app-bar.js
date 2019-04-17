import MDCTopAppBarFoundation from '@material/top-app-bar/standard/foundation';
import MDCShortTopAppBarFoundation from '@material/top-app-bar/short/foundation';
import MDCFixedTopAppBarFoundation from '@material/top-app-bar/fixed/foundation';
import { DispatchEventMixin } from '@mcwv/base';

export default {
  name: 'mdc-top-app-bar',
  mixins: [DispatchEventMixin],
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    fixed: Boolean,
    title: String,
    icon: {
      type: [String, Boolean],
      default: 'menu',
    },
    iconClasses: Object,
    dense: Boolean,
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
      foundation: null,
    };
  },
  render(createElement) {
    const startNodes = [];
    if (this.haveNavigationIcon) {
      startNodes.push(
        createElement(
          'button',
          {
            class: this.naviconClasses,
            ref: 'navigationIcon',
            on: this.listeners,
          },
          this.icon,
        ),
      );
    }

    if (this.title) {
      startNodes.push(
        createElement(
          'span',
          {
            class: { 'mdc-top-app-bar__title': 1 },
          },
          this.title,
        ),
      );
    }

    const rowNodes = [
      // start section
      createElement(
        'section',
        {
          class: {
            'mdc-top-app-bar__section': 1,
            'mdc-top-app-bar__section--align-start': 1,
          },
        },
        startNodes,
      ),
    ];

    if (this.$slots.default) {
      // end section
      rowNodes.push(
        createElement(
          'section',
          {
            'mdc-top-app-bar__section': 1,
            'mdc-top-app-bar__section--align-end': 1,
          },
          this.$slots.default,
        ),
      );
    }

    const rowEl = createElement(
      'div',
      {
        class: { 'mdc-top-app-bar__row': 1 },
      },
      rowNodes,
    );

    return createElement(
      'header',
      {
        class: this.rootClasses,
        style: this.rootStyles,
        ref: 'root',
        on: this.$listeners,
      },
      [rowEl, this.$slots.tabs],
    );
  },
  computed: {
    haveNavigationIcon() {
      return !!this.icon || this.iconClasses;
    },
    naviconClasses() {
      return {
        'mdc-top-app-bar__navigation-icon': true,
        'material-icons': !!this.icon,
        ...this.iconClasses,
      };
    },
  },
  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.rootClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.rootClasses, className);
      },
      hasClass: className => {
        return Boolean(this.rootClasses[className]);
      },
      setStyle: (property, value) => {
        this.$set(this.rootStyles, property, value);
      },
      getTopAppBarHeight: () => this.$el.clientHeight,
      registerNavigationIconInteractionHandler: (type, handler) => {
        if (this.$refs.navigationIcon) {
          this.$refs.navigationIcon.addEventListener(type, handler);
        }
      },
      deregisterNavigationIconInteractionHandler: (type, handler) => {
        if (this.$refs.navigationIcon) {
          this.$refs.navigationIcon.removeEventListener(type, handler);
        }
      },
      notifyNavigationIconClicked: () => {
        this.$emit('nav');
      },
      registerScrollHandler: handler => {
        window.addEventListener('scroll', handler);
      },
      deregisterScrollHandler: handler => {
        window.removeEventListener('scroll', handler);
      },
      registerResizeHandler: handler =>
        window.addEventListener('resize', handler),
      deregisterResizeHandler: handler =>
        window.removeEventListener('resize', handler),

      getViewportScrollY: () => {
        return window.pageYOffset;
      },
      getTotalActionItems: () =>
        this.$refs.root.querySelectorAll(
          MDCTopAppBarFoundation.strings.ACTION_ITEM_SELECTOR,
        ).length,
    };

    this.foundation = this.short
      ? new MDCShortTopAppBarFoundation(adapter)
      : this.fixed
      ? new MDCFixedTopAppBarFoundation(adapter)
      : new MDCTopAppBarFoundation(adapter);

    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
};
