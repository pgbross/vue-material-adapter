import { MDCFadingTabIndicatorFoundation } from '@material/tab-indicator/fading-foundation';
import { MDCTabIndicatorFoundation } from '@material/tab-indicator/foundation';
import { MDCSlidingTabIndicatorFoundation } from '@material/tab-indicator/sliding-foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
} from '@vue/composition-api';

const { cssClasses } = MDCTabIndicatorFoundation;

export default {
  name: 'mcw-tab-indicator',
  props: { fade: { type: Boolean }, icon: { type: String } },
  setup(props, { root: $root }) {
    const contentEl = ref(null);
    const uiState = reactive({
      classes: { 'mdc-tab-indicator--fade': props.fade },
      contentClasses: {
        'mdc-tab-indicator__content--underline': !props.icon,
        'mdc-tab-indicator__content--icon': !!props.icon,
        'material-icons': !!props.icon,
      },
      contentAttrs: { 'aria-hidden': !!props.icon },
      styles: {},
    });

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      computeContentClientRect: () => contentEl.value.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) =>
        (uiState.styles = { ...uiState.styles, [prop]: value }),
    };

    const deactivate = () => foundation.deactivate();

    const computeContentClientRect = () =>
      foundation.computeContentClientRect();

    const activate = previousIndicatorClientRect => {
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        adapter.addClass(cssClasses.ACTIVE);
        return;
      }

      const currentClientRect = computeContentClientRect();
      const widthDelta =
        previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition =
        previousIndicatorClientRect.left - currentClientRect.left;

      // THE FIX - use request animation frame to ensure framework has rendered DOM
      requestAnimationFrame(() => {
        adapter.addClass(cssClasses.NO_TRANSITION);
        adapter.setContentStyleProperty(
          'transform',
          `translateX(${xPosition}px) scaleX(${widthDelta})`,
        );

        requestAnimationFrame(() => {
          adapter.removeClass(cssClasses.NO_TRANSITION);
          adapter.addClass(cssClasses.ACTIVE);
          adapter.setContentStyleProperty('transform', '');
        });
      });
    };

    onMounted(() => {
      foundation = props.fade
        ? new MDCFadingTabIndicatorFoundation(adapter)
        : new MDCSlidingTabIndicatorFoundation(adapter);

      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      contentEl,
      activate,
      deactivate,
      computeContentClientRect,
    };
  },
};
