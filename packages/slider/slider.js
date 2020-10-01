// import { applyPassive } from '@material/dom/events';
import { MDCSliderFoundation } from '@material/slider/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';

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
    tickMarks: Boolean,
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
        'mdc-slider--tick-marks': props.discrete && props.tickMarks,
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
      addThumbClass: (className, thumb) => {
        // this.getThumbEl(thumb).classList.add(className);
      },
      removeThumbClass: (className, thumb) => {
        // this.getThumbEl(thumb).classList.remove(className);
      },

      getAttribute: name => uiState.root.getAttribute(name),

      getThumbAttribute: (attribute, thumb) => null, // this.getThumbEl(thumb).getAttribute(attribute),
      setThumbAttribute: (attribute, value, thumb) => {
        // this.getThumbEl(thumb).setAttribute(attribute, value);
      },
      isThumbFocused: thumb => '', // this.getThumbEl(thumb) === document.activeElement,
      focusThumb: thumb => {
        // this.getThumbEl(thumb).focus();
      },
      getThumbKnobWidth: thumb => {
        // return this.getThumbEl(thumb)
        //   .querySelector(`.${cssClasses.THUMB_KNOB}`)
        //   ?.getBoundingClientRect().width;
      },
      getThumbBoundingClientRect: thumb => '', // this.getThumbEl(thumb).getBoundingClientRect(),

      getBoundingClientRect: () => this.root.getBoundingClientRect(),

      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',

      setThumbStyleProperty: (propertyName, value, thumb) => {
        // this.getThumbEl(thumb).style.setProperty(propertyName, value);
      },
      removeThumbStyleProperty: (propertyName, thumb) => {
        // this.getThumbEl(thumb).style.removeProperty(propertyName);
      },
      setTrackActiveStyleProperty: (propertyName, value) => {
        // this.trackActive.style.setProperty(propertyName, value);
      },
      removeTrackActiveStyleProperty: propertyName => {
        // this.trackActive.style.removeProperty(propertyName);
      },

      setValueIndicatorText: (value, thumb) => {
        // const valueIndicatorEl =
        //     this.getThumbEl(thumb).querySelector(
        //         `.${cssClasses.VALUE_INDICATOR_TEXT}`);
        // valueIndicatorEl?.textContent = String(value);
      },
      getValueToAriaValueTextFn: () => '', //  this.valueToAriaValueTextFn,

      updateTickMarks: tickMarks => {
        // let tickMarksContainer = this.root.querySelector(
        //     `.${cssClasses.TICK_MARKS_CONTAINER}`);
        // if (!tickMarksContainer) {
        //   tickMarksContainer = document.createElement('div');
        //   tickMarksContainer.classList.add(cssClasses.TICK_MARKS_CONTAINER);
        //   const track =
        //       this.root.querySelector(`.${cssClasses.TRACK}`);
        //   track?.appendChild(tickMarksContainer);
        // }
        // if (tickMarks.length !== tickMarksContainer.children.length) {
        //   tickMarksContainer.innerHTML = '';
        //   this.addTickMarks(tickMarksContainer, tickMarks);
        // } else {
        //   this.updateTickMarks(tickMarksContainer, tickMarks);
        // }
      },
      setPointerCapture: pointerId => {
        // this.root.setPointerCapture(pointerId);
      },

      emitChangeEvent: (value, thumb) => {
        // this.emit<MDCSliderChangeEventDetail>(events.CHANGE, {value, thumb});
      },
      emitInputEvent: (value, thumb) => {
        // this.emit<MDCSliderChangeEventDetail>(events.INPUT, {value, thumb});
      },
      emitDragStartEvent: () => {
        // Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },
      emitDragEndEvent: () => {
        // Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },

      registerEventHandler: (evtType, handler) => {
        // this.listen(evtType, handler);
      },
      deregisterEventHandler: (evtType, handler) => {
        // this.unlisten(evtType, handler);
      },
      registerThumbEventHandler: (thumb, evtType, handler) => {
        // this.getThumbEl(thumb).addEventListener(evtType, handler);
      },
      deregisterThumbEventHandler: (thumb, evtType, handler) => {
        // this.getThumbEl(thumb).removeEventListener(evtType, handler);
      },
      registerBodyEventHandler: (evtType, handler) => {
        // document.body.addEventListener(evtType, handler);
      },
      deregisterBodyEventHandler: (evtType, handler) => {
        // document.body.removeEventListener(evtType, handler);
      },
      registerWindowEventHandler: (evtType, handler) => {
        // window.addEventListener(evtType, handler);
      },
      deregisterWindowEventHandler: (evtType, handler) => {
        // window.removeEventListener(evtType, handler);
      },

      /**  old slider code
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

      */
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
