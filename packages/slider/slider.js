import {
  MDCSliderFoundation,
  cssClasses,
  events,
  Thumb,
} from '@material/slider';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { emitCustomEvent } from '~/base/index.js';

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
      dir: null,
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
      root: null,
      startThumb: null,
      endThumb: null,
      trackActive: null,
    });

    let foundation;
    let valueToAriaValueTextFn = () => null;

    const setValueToAriaValueTextFn = mapFn => {
      valueToAriaValueTextFn = mapFn;
    };

    const getThumbEl = thumb => {
      return thumb === Thumb.END
        ? uiState.thumbs[uiState.thumbs.length - 1]
        : uiState.thumbs[0];
    };

    const getThumbName = (thumb, suffix) => {
      const thumbName = thumb == Thumb.END ? 'endThumb' : 'startThumb';
      return `${thumbName}${suffix}`;
    };

    const setInputRef = el => uiState.inputs.push(el);

    const setThumbRef = el => uiState.thumbs.push(el);

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
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      addThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, 'Classes');

        uiState[thumbName] = { ...uiState[thumbName], [className]: true };
      },

      removeThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, 'Classes');

        // eslint-disable-next-line no-unused-vars
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

      getThumbAttribute: (attribute, thumb) => {
        const thumbName = getThumbName(thumb, 'Attrs');
        return uiState[thumbName][attribute];
      },
      setThumbAttribute: (attribute, value, thumb) => {
        const thumbName = getThumbName(thumb, 'Attrs');
        uiState[thumbName] = { ...uiState[thumbName], [attribute]: value };
      },

      isThumbFocused: thumb => {
        return getThumbEl(thumb) === document.activeElement;
      },
      focusThumb: thumb => getThumbEl(thumb).focus(),

      getThumbKnobWidth: thumb =>
        getThumbEl(thumb)
          .querySelector(`.${cssClasses.THUMB_KNOB}`)
          ?.getBoundingClientRect().width,

      getThumbBoundingClientRect: thumb =>
        getThumbEl(thumb).getBoundingClientRect(),

      getBoundingClientRect: () => uiState.root.getBoundingClientRect(),

      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',

      setThumbStyleProperty: (propertyName, value, thumb) => {
        getThumbEl(thumb).style.setProperty(propertyName, value);
      },

      removeThumbStyleProperty: (propertyName, thumb) =>
        getThumbEl(thumb).style.removeProperty(propertyName),

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

      getValueToAriaValueTextFn: () => valueToAriaValueTextFn,

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

      registerEventHandler: (evtType, handler) =>
        uiState.root.addEventListener(evtType, handler),

      deregisterEventHandler: (evtType, handler) =>
        uiState.root.removeEventListener(evtType, handler),

      registerThumbEventHandler: (thumb, evtType, handler) =>
        getThumbEl(thumb).addEventListener(evtType, handler),

      deregisterThumbEventHandler: (thumb, evtType, handler) =>
        getThumbEl(thumb).removeEventListener(evtType, handler),
      registerInputEventHandler: (thumb, evtType, handler) => {
        getInput(thumb).addEventListener(evtType, handler);
      },
      deregisterInputEventHandler: (thumb, evtType, handler) => {
        getInput(thumb).removeEventListener(evtType, handler);
      },
      registerBodyEventHandler: (evtType, handler) =>
        document.body.addEventListener(evtType, handler),

      deregisterBodyEventHandler: (evtType, handler) =>
        document.body.removeEventListener(evtType, handler),

      registerWindowEventHandler: (evtType, handler) =>
        window.addEventListener(evtType, handler),

      deregisterWindowEventHandler: (evtType, handler) =>
        window.removeEventListener(evtType, handler),
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
      setValueToAriaValueTextFn,
      setInputRef,
      setThumbRef,
    };
  },
};
