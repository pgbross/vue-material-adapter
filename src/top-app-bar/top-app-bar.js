import { MDCFixedTopAppBarFoundation } from '@material/top-app-bar/fixed/foundation.js';
import { MDCShortTopAppBarFoundation } from '@material/top-app-bar/short/foundation.js';
import { MDCTopAppBarFoundation } from '@material/top-app-bar/standard/foundation.js';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { emitCustomEvent } from '../base/index.js';
import { RippleElement } from '../ripple/index.js';

const { cssClasses, strings } = MDCTopAppBarFoundation;

export default {
  name: 'mcw-top-app-bar',
  props: {
    tag: { type: String, default: 'header' },
    scrollTarget: HTMLElement,
  },

  emits: ['nav'],

  setup(props, { emit }) {
    const uiState = reactive({
      rootStyles: {},
      rootClasses: {
        'mdc-top-app-bar': true,
      },
      myScrollTarget: props.scrollTarget || window,
      root: undefined,
    });

    let foundation;
    let navIcon;
    let iconRipples = [];

    const handleNavigationClick = event =>
      foundation.handleNavigationClick(event);

    const handleTargetScroll = event_ => foundation.handleTargetScroll(event_);
    const handleWindowResize = event_ => foundation.handleWindowResize(event_);

    const adapter = {
      addClass: className =>
        (uiState.rootClasses = { ...uiState.rootClasses, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.rootClasses;
        uiState.rootClasses = rest;
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
        return st.pageYOffset !== void 0 ? st.pageYOffset : st.scrollTop;
      },
      getTotalActionItems: () =>
        uiState.root.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length,
    };

    watch(
      () => props.scrollTarget,
      (nv, ov) => {
        if (nv !== ov) {
          uiState.myScrollTarget.removeEventListener(
            'scroll',
            handleTargetScroll,
          );
          uiState.myScrollTarget = nv;
          uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);
        }
      },
    );

    const setScrollTarget = nv => {
      uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);
      uiState.myScrollTarget = nv;
      uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);
    };

    onMounted(() => {
      const isFixed = uiState.root.classList.contains(cssClasses.FIXED_CLASS);
      const isShort = uiState.root.classList.contains(cssClasses.SHORT_CLASS);

      if (isShort) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (isFixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      }

      // todo: hunt down icons for ripples

      navIcon = uiState.root.querySelector(strings.NAVIGATION_ICON_SELECTOR);
      // Get all icons in the toolbar and instantiate the ripples
      const icons = Array.prototype.slice.call(
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

      if (!isShort && !isFixed) {
        window.addEventListener('resize', handleWindowResize);
      }

      foundation.init();
    });

    onBeforeUnmount(() => {
      if (navIcon) {
        navIcon.removeEventListener('click', handleNavigationClick);
      }
      for (const iconRipple of iconRipples) iconRipple.destroy();

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

    return { ...toRefs(uiState), setScrollTarget };
  },
};
