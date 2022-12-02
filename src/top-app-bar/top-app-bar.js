import { MDCFixedTopAppBarFoundation } from '@material/top-app-bar/fixed/foundation.js';
import { MDCShortTopAppBarFoundation } from '@material/top-app-bar/short/foundation.js';
import { MDCTopAppBarFoundation } from '@material/top-app-bar/standard/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
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

  setup(props, { emit, slots, expose }) {
    const uiState = reactive({
      rootStyles: {},
      rootClasses: {
        'mdc-top-app-bar': true,
      },
    });

    const root = ref();
    let foundation;
    let navIcon;
    let iconRipples = [];

    let myScrollTarget = props.scrollTarget || window;

    const handleNavigationClick = event =>
      foundation.handleNavigationClick(event);

    const handleTargetScroll = event_ => foundation.handleTargetScroll(event_);
    const handleWindowResize = event_ => foundation.handleWindowResize(event_);

    const adapter = {
      addClass: className =>
        (uiState.rootClasses = { ...uiState.rootClasses, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.rootClasses;
        uiState.rootClasses = rest;
      },

      hasClass: className => Boolean(uiState.rootClasses[className]),

      setStyle: (property, value) =>
        (uiState.rootStyles = { ...uiState.rootStyles, [property]: value }),

      getTopAppBarHeight: () => root.value.clientHeight,

      notifyNavigationIconClicked: () => {
        emit('nav', {});
        emitCustomEvent(
          root.value,
          strings.NAVIGATION_EVENT,
          {},
          /** shouldBubble */ true,
        );
      },

      getViewportScrollY: () => {
        const st = myScrollTarget;
        return st.scrollY === undefined ? st.scrollTop : st.scrollY;
      },

      getTotalActionItems: () =>
        root.value.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length,
    };

    watch(
      () => props.scrollTarget,
      (nv, ov) => {
        if (nv !== ov) {
          myScrollTarget.removeEventListener('scroll', handleTargetScroll);
          myScrollTarget = nv;
          myScrollTarget.addEventListener('scroll', handleTargetScroll);
        }
      },
    );

    const setScrollTarget = nv => {
      myScrollTarget.removeEventListener('scroll', handleTargetScroll);
      myScrollTarget = nv;
      myScrollTarget.addEventListener('scroll', handleTargetScroll);
    };

    onMounted(() => {
      const isFixed = root.value.classList.contains(cssClasses.FIXED_CLASS);
      const isShort = root.value.classList.contains(cssClasses.SHORT_CLASS);

      if (isShort) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (isFixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      }

      navIcon = root.value.querySelector(strings.NAVIGATION_ICON_SELECTOR);

      // Get all icons in the toolbar and instantiate the ripples
      const icons = Array.prototype.slice.call(
        root.value.querySelectorAll(strings.ACTION_ITEM_SELECTOR),
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

      myScrollTarget.addEventListener('scroll', handleTargetScroll);

      if (!isShort && !isFixed) {
        window.addEventListener('resize', handleWindowResize);
      }

      foundation.init();
    });

    onBeforeUnmount(() => {
      if (navIcon) {
        navIcon.removeEventListener('click', handleNavigationClick);
      }
      for (const iconRipple of iconRipples) {
        iconRipple.destroy();
      }

      myScrollTarget.removeEventListener('scroll', handleTargetScroll);

      const isFixed = root.value.classList.contains(cssClasses.FIXED_CLASS);
      const isShort = root.value.classList.contains(cssClasses.SHORT_CLASS);
      if (!isShort && !isFixed) {
        window.removeEventListener('resize', handleWindowResize);
      }

      foundation.destroy();
    });

    expose({ setScrollTarget });
    return () => {
      return h(
        props.tag,
        { ref: root, class: uiState.rootClasses, style: uiState.rootStyles },
        [slots.default()],
      );
    };
  },
};
