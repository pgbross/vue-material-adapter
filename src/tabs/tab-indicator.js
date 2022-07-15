import { MDCFadingTabIndicatorFoundation } from '@material/tab-indicator/fading-foundation.js';
import { MDCTabIndicatorFoundation } from '@material/tab-indicator/foundation.js';
import { MDCSlidingTabIndicatorFoundation } from '@material/tab-indicator/sliding-foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const { cssClasses } = MDCTabIndicatorFoundation;

export default {
  name: 'mcw-tab-indicator',
  props: { fade: { type: Boolean }, icon: { type: String } },
  setup(props, { expose }) {
    const uiState = reactive({
      classes: { 'mdc-tab-indicator--fade': props.fade },
      styles: {},
    });

    let foundation;
    const contentElement = ref();

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      computeContentClientRect: () =>
        contentElement.value.getBoundingClientRect(),

      setContentStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),
    };

    const deactivate = () => foundation.deactivate();

    const computeContentClientRect = () =>
      foundation.computeContentClientRect();

    const activate = previousIndicatorClientRect => {
      if (props.fade) {
        foundation.activate(previousIndicatorClientRect);
        return;
      }

      // duplicate the sliding foundation logic so vue can use renderanimation frame

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

    expose({ activate, deactivate, computeContentClientRect });

    return () => {
      return h(
        'span',
        { class: { 'mdc-tab-indicator': true, ...uiState.classes } },
        [
          h(
            'span',
            {
              ref: contentElement,
              class: {
                'mdc-tab-indicator__content': true,
                'mdc-tab-indicator__content--underline': !props.icon,
                'mdc-tab-indicator__content--icon': !!props.icon,
                'material-icons': !!props.icon,
              },
              style: uiState.styles,
              'aria-hidden': !!props.icon,
            },
            [props.icon],
          ),
        ],
      );
    };
  },
};
