import {
  cssClasses,
  events,
  MDCSliderFoundation,
  Thumb,
} from '@material/slider';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { emitCustomEvent } from '../base/index.js';

const getThumbName = (thumb, suffix) => {
  const thumbName = thumb == Thumb.END ? 'endThumb' : 'startThumb';
  return `${thumbName}${suffix}`;
};

let valueToAriaValueTextFunction = () => {};

const setValueToAriaValueTextFunction = mapFunction => {
  valueToAriaValueTextFunction = mapFunction;
};

export default {
  name: 'mcw-slider',
  props: {
    modelValue: [Number, String],
    start: [Number, String],
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String], default: 1 },
    discrete: Boolean,
    tickMarks: Boolean,
    disabled: Boolean,
    range: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const uiState = reactive({
      skipInitialUIUpdate: false,
      dir: undefined,
      marks: [],
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': props.discrete,
        'mdc-slider--tick-marks': props.discrete && props.tickMarks,
        'mdc-slider--range': props.range,
      },
      startValueText: '',
      startThumbClasses: {},
      startThumbAttrs: {
        'aria-valuenow': '0',
      },
      test: 50,
      endValueText: '',
      endThumbClasses: {},
      endThumbAttrs: {
        'aria-valuenow': '0',
      },

      inputs: [],
      thumbs: [],
      root: undefined,
      startThumb: undefined,
      endThumb: undefined,
      trackActive: undefined,
    });

    let foundation;

    const getThumbElement = thumb => {
      return thumb === Thumb.END
        ? uiState.thumbs[uiState.thumbs.length - 1]
        : uiState.thumbs[0];
    };

    const setInputReference = element => uiState.inputs.push(element);

    const setThumbReference = element => uiState.thumbs.push(element);

    const getInput = thumb => {
      return thumb === Thumb.END
        ? uiState.inputs[uiState.inputs.length - 1]
        : uiState.inputs[0];
    };

    const adapter = {
      hasClass: className => uiState.root.classList.contains(className),

      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      addThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, 'Classes');

        uiState[thumbName] = { ...uiState[thumbName], [className]: true };
      },

      removeThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, 'Classes');

        const { [className]: removed, ...rest } = uiState[thumbName];
        uiState[thumbName] = rest;
      },

      getAttribute: name => uiState.root.getAttribute(name),

      getInputValue: thumb => getInput(thumb).value,
      setInputValue: (value, thumb) => {
        getInput(thumb).value = value;
      },
      getInputAttribute: (attribute, thumb) => {
        if (attribute == 'value') {
          return adapter.getInputValue(thumb);
        }

        return getInput(thumb).getAttribute(attribute);
      },
      setInputAttribute: (attribute, value, thumb) => {
        getInput(thumb).setAttribute(attribute, value);
      },
      removeInputAttribute: (attribute, thumb) => {
        getInput(thumb).removeAttribute(attribute);
      },
      focusInput: thumb => {
        getInput(thumb).focus();
      },
      isInputFocused: thumb => getInput(thumb) === document.activeElement,
      shouldHideFocusStylesForPointerEvents: () => false,

      getThumbKnobWidth: thumb =>
        getThumbElement(thumb)
          .querySelector(`.${cssClasses.THUMB_KNOB}`)
          ?.getBoundingClientRect().width,

      getThumbBoundingClientRect: thumb =>
        getThumbElement(thumb).getBoundingClientRect(),

      getBoundingClientRect: () => uiState.root.getBoundingClientRect(),

      getValueIndicatorContainerWidth: thumb => {
        return getThumbElement(thumb)
          .querySelector(`.${cssClasses.VALUE_INDICATOR_CONTAINER}`)
          ?.getBoundingClientRect().width;
      },
      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',

      setThumbStyleProperty: (propertyName, value, thumb) => {
        getThumbElement(thumb).style.setProperty(propertyName, value);
      },

      removeThumbStyleProperty: (propertyName, thumb) =>
        getThumbElement(thumb).style.removeProperty(propertyName),

      setTrackActiveStyleProperty: (propertyName, value) =>
        uiState.trackActive.style.setProperty(propertyName, value),

      removeTrackActiveStyleProperty: propertyName => {
        uiState.trackActive.style.removeProperty(propertyName);
      },

      setValueIndicatorText: (value, thumb) => {
        const thumbName =
          thumb == Thumb.END ? 'endValueText' : 'startValueText';
        uiState[thumbName] = String(value);
      },

      getValueToAriaValueTextFn: () => valueToAriaValueTextFunction,

      updateTickMarks: tickMarks => {
        uiState.marks = tickMarks.map(mark =>
          mark == 0
            ? 'mdc-slider__tick-mark--active'
            : 'mdc-slider__tick-mark--inactive',
        );
      },

      setPointerCapture: pointerId => uiState.root.setPointerCapture(pointerId),

      emitChangeEvent: (value, thumb) => {
        emitCustomEvent(uiState.root, events.CHANGE, { value, thumb });
        const eventName =
          thumb == Thumb.END ? 'update:modelValue' : 'update:start';
        emit(eventName, value);
      },

      emitInputEvent: (value, thumb) => {
        emitCustomEvent(uiState.root, events.INPUT, { value, thumb });
      },

      emitDragStartEvent: () => {
        // Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },

      emitDragEndEvent: () => {
        // Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },

      registerEventHandler: (eventType, handler) =>
        uiState.root.addEventListener(eventType, handler),

      deregisterEventHandler: (eventType, handler) =>
        uiState.root.removeEventListener(eventType, handler),

      registerThumbEventHandler: (thumb, eventType, handler) =>
        getThumbElement(thumb).addEventListener(eventType, handler),

      deregisterThumbEventHandler: (thumb, eventType, handler) =>
        getThumbElement(thumb).removeEventListener(eventType, handler),
      registerInputEventHandler: (thumb, eventType, handler) => {
        getInput(thumb).addEventListener(eventType, handler);
      },
      deregisterInputEventHandler: (thumb, eventType, handler) => {
        getInput(thumb).removeEventListener(eventType, handler);
      },
      registerBodyEventHandler: (eventType, handler) =>
        document.body.addEventListener(eventType, handler),

      deregisterBodyEventHandler: (eventType, handler) =>
        document.body.removeEventListener(eventType, handler),

      registerWindowEventHandler: (eventType, handler) =>
        window.addEventListener(eventType, handler),

      deregisterWindowEventHandler: (eventType, handler) =>
        window.removeEventListener(eventType, handler),
    };

    watch(
      () => props.modelValue,
      nv => {
        if (foundation.getValue() !== Number(nv)) {
          foundation.setValue(nv);
        }
      },
    );

    watch(
      () => props.start,
      nv => {
        if (foundation.getValueStart() !== Number(nv)) {
          foundation.setValueStart(nv);
        }
      },
    );

    watch(
      () => props.disabled,
      nv => {
        foundation.setDisabled(nv);
      },
    );

    onMounted(() => {
      uiState.dir = getComputedStyle(uiState.root).direction;

      if (props.range) {
        uiState.startThumbAttrs['aria-valuemin'] = props.min;
        uiState.startThumbAttrs['aria-valuemax'] = props.max;

        uiState.startThumbAttrs['aria-valuenow'] = props.start;
        uiState.startValueText = String(props.start);
      }

      uiState.endThumbAttrs['aria-valuemin'] = props.min;
      uiState.endThumbAttrs['aria-valuemax'] = props.max;
      uiState.endThumbAttrs['aria-valuenow'] = props.modelValue;
      uiState.endValueText = String(props.modelValue);

      foundation = new MDCSliderFoundation(adapter);
      foundation.init();

      foundation.layout({ skipUpdateUI: uiState.skipInitialUIUpdate });

      foundation.setDisabled(props.disabled);
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      setValueToAriaValueTextFn: setValueToAriaValueTextFunction,
      setInputRef: setInputReference,
      setThumbRef: setThumbReference,
    };
  },
};
