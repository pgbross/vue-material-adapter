import { MDCFixedTopAppBarFoundation } from '@material/top-app-bar/fixed/foundation';
import { MDCShortTopAppBarFoundation } from '@material/top-app-bar/short/foundation';
import { MDCTopAppBarFoundation } from '@material/top-app-bar/standard/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';
import { emitCustomEvent } from '~/base/index.js';
import { RippleElement } from '~/ripple/index.js';

const { cssClasses, strings } = MDCTopAppBarFoundation;

export default {
  name: 'mcw-top-app-bar',
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    fixed: Boolean,
    dense: Boolean,
    tag: { type: String, default: 'header' },
    scrollTarget: HTMLElement,
  },
  setup(props, { emit, listeners }) {
    const uiState = reactive({
      rootStyles: { top: '0' },
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': props.dense,
        'mdc-top-app-bar--short': props.short,
        'mdc-top-app-bar--short-collapsed': props.shortCollapsed,
        'mdc-top-app-bar--prominent': props.prominent,
        'mdc-top-app-bar--fixed': props.fixed,
      },
      myScrollTarget: props.scrollTarget || window,
      root: null,
    });

    let foundation;
    let navIcon;
    let iconRipples = [];

    const handleNavigationClick = event =>
      foundation.handleNavigationClick(event);

    let handleWindowResize;
    let handleTargetScroll;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.rootClasses[className]),
      setStyle: (property, value) =>
        (uiState.rootStyles = { ...uiState.rootStyles, [property]: value }),

      getTopAppBarHeight: () => uiState.root.clientHeight,
      notifyNavigationIconClicked: () => {
        emit('nav', {});
        emitCustomEvent(
          uiState.root,
          strings.NAVIGATION_EVENT,
          {},
          /** shouldBubble */ true,
        );
      },

      getViewportScrollY: () => {
        const st = uiState.myScrollTarget;
        return st.pageYOffset ? st.pageYOffset : st.scrollTop;
      },
      getTotalActionItems: () =>
        uiState.root.querySelectorAll(`.${cssClasses.ACTION_ITEM}`).length,
    };

    watch(
      () => props.scrollTarget,
      (nv, ov) => {
        if (nv !== ov) {
          uiState.myScrollTarget.removeEventListener(
            'scroll',
            foundation.handleTargetScroll,
          );
          uiState.myScrollTarget = nv;
          uiState.myScrollTarget.addEventListener(
            'scroll',
            foundation.handleTargetScroll,
          );
        }
      },
    );

    onMounted(() => {
      const { short, shortCollapsed, fixed } = props;
      if (short || shortCollapsed) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (fixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      }

      handleWindowResize = foundation.handleWindowResize.bind(foundation);
      handleTargetScroll = foundation.handleWindowResize.bind(foundation);

      // todo: hunt down icons for ripples

      navIcon = uiState.root.querySelector(strings.NAVIGATION_ICON_SELECTOR);
      // Get all icons in the toolbar and instantiate the ripples
      const icons = [].slice.call(
        uiState.root.querySelectorAll(strings.ACTION_ITEM_SELECTOR),
      );

      if (navIcon) {
        navIcon.addEventListener('click', handleNavigationClick);
        icons.push(navIcon);
      }

      iconRipples = icons.map(icon => {
        const ripple = new RippleElement(icon);
        ripple.init();
        ripple.unbounded = true;

        return ripple;
      });

      uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);

      const isFixed = uiState.root.classList.contains(cssClasses.FIXED_CLASS);
      const isShort = uiState.root.classList.contains(cssClasses.SHORT_CLASS);
      if (!isShort && !isFixed) {
        window.addEventListener('resize', handleWindowResize);
      }

      foundation.init();
    });

    onBeforeUnmount(() => {
      if (navIcon) {
        navIcon.removeEventListener('click', handleNavigationClick);
      }
      iconRipples.forEach(iconRipple => iconRipple.destroy());

      uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);

      uiState.myScrollTarget?.removeEventListener(
        'scroll',
        foundation.handleTargetScroll,
      );

      const isFixed = uiState.root.classList.contains(cssClasses.FIXED_CLASS);
      const isShort = uiState.root.classList.contains(cssClasses.SHORT_CLASS);
      if (!isShort && !isFixed) {
        window.removeEventListener('resize', handleWindowResize);
      }

      foundation.destroy();
    });

    return { ...toRefs(uiState), listeners };
  },
};
