import { applyPassive } from '@material/dom/events';
import { MDCSliderFoundation } from '@material/slider/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from 'vue';

export default {
  name: 'mcw-slider',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: [Number, String],
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String], default: 0 },
    discrete: Boolean,
    displayMarkers: Boolean,
    disabled: Boolean,
    layoutOn: String,
    layoutOnSource: { type: Object, required: false },
  },
  setup(props, { emit, root: $root }) {
    let stepSize = props.step;
    if (props.discrete && !stepSize) {
      stepSize = 1;
    }

    const uiState = reactive({
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': props.discrete,
        'mdc-slider--display-markers': props.discrete && props.displayMarkers,
      },
      sliderAttrs: {},
      trackStyles: {},
      lastTrackMarkersStyles: {},
      markerBkgdShorthand: {},
      thumbStyles: {},
      markerValue: '',
      numMarkers: 0,
      stepSize,
      root: null,
      thumbContainer: null,
    });

    let foundation;
    let layoutOnEventSource;

    const hasMarkers = computed(() => {
      return props.discrete && props.displayMarkers;
    });

    const adapter = {
      hasClass: className => uiState.root.classList.contains(className),
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      getAttribute: name => uiState.root.getAttribute(name),
      setAttribute: (name, value) =>
        (uiState.sliderAttrs = { ...uiState.sliderAttrs, [name]: value }),

      removeAttribute: name => {
        // eslint-disable-next-line no-unused-vars
        const { [name]: removed, ...rest } = uiState.sliderAttrs;
        uiState.sliderAttrs = rest;
      },

      computeBoundingRect: () => uiState.root.getBoundingClientRect(),
      getTabIndex: () => uiState.root.tabIndex,
      registerInteractionHandler: (type, handler) => {
        uiState.root.addEventListener(type, handler, applyPassive());
      },
      deregisterInteractionHandler: (type, handler) => {
        uiState.root.removeEventListener(type, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        uiState.thumbContainer.addEventListener(type, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        uiState.thumbContainer.removeEventListener(
          type,
          handler,
          applyPassive(),
        );
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        emit('input', foundation.getValue());
      },
      notifyChange: () => {
        emit('change', foundation.getValue());
      },
      setThumbContainerStyleProperty: (propertyName, value) =>
        (uiState.thumbStyles = {
          ...uiState.thumbStyles,
          [propertyName]: value,
        }),

      setTrackStyleProperty: (propertyName, value) =>
        (uiState.trackStyles = {
          ...uiState.trackStyles,
          [propertyName]: value,
        }),
      setMarkerValue: value => {
        uiState.markerValue = value;
      },

      setTrackMarkers: (step, max, min) => {
        const stepStr = step.toLocaleString();
        const maxStr = max.toLocaleString();
        const minStr = min.toLocaleString();
        // keep calculation in css for better rounding/subpixel behavior
        const markerAmount = `((${maxStr} - ${minStr}) / ${stepStr})`;
        const markerWidth = `2px`;
        const markerBkgdImage = `linear-gradient(to right, currentColor ${markerWidth}, transparent 0)`;
        const markerBkgdLayout = `0 center / calc((100% - ${markerWidth}) / ${markerAmount}) 100% repeat-x`;
        const markerBkgdShorthand = `${markerBkgdImage} ${markerBkgdLayout}`;
        uiState.markerBkgdShorthand = {
          ...uiState.markerBkgdShorthand,
          ['background']: markerBkgdShorthand,
        };
      },

      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',
    };

    const layout = () => {
      $root.$nextTick(() => {
        foundation?.layout();
      });
    };

    watch(
      () => props.value,
      nv => {
        if (foundation.getValue() !== Number(nv)) {
          foundation.setValue(nv);
        }
      },
    );

    watch(
      () => props.min,
      nv => {
        foundation.setMin(Number(nv));
      },
    );

    watch(
      () => props.max,
      nv => {
        foundation.setMax(Number(nv));
      },
    );

    watch(
      () => props.step,
      nv => {
        foundation.setStep(Number(nv));
      },
    );

    watch(
      () => props.disabled,
      nv => {
        foundation.setDisabled(nv);
      },
    );

    onMounted(() => {
      foundation = new MDCSliderFoundation(adapter);
      foundation.init();

      foundation.setDisabled(props.disabled);

      if (Number(props.min) <= foundation.getMax()) {
        foundation.setMin(Number(props.min));
        foundation.setMax(Number(props.max));
      } else {
        foundation.setMax(Number(props.max));
        foundation.setMin(Number(props.min));
      }
      foundation.setStep(Number(uiState.stepSize));
      foundation.setValue(Number(props.value));

      if (hasMarkers.value) {
        foundation.setupTrackMarker();
      }

      $root.$on('vma:layout', layout);

      if (props.layoutOn) {
        layoutOnEventSource = props.layoutOnSource ?? $root;
        layoutOnEventSource.$on(props.layoutOn, layout);
      }
    });

    onBeforeUnmount(() => {
      $root.$off('vma:layout', layout);
      if (layoutOnEventSource) {
        layoutOnEventSource.$off(props.layoutOn, layout);
      }
      foundation.destroy();
    });

    return { ...toRefs(uiState), hasMarkers };
  },
};
