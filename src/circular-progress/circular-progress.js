import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from 'vue';

const ProgressPropertyType = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

export default {
  name: 'mcw-circular-progress',
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    medium: Boolean,
    progress: ProgressPropertyType,
    tag: { type: String, default: 'div' },
    label: { type: String },
    fourColor: Boolean,
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-circular-progress': 1,
        'mdc-circular-progress--medium': props.medium,
        'mdc-circular-progress--large': !props.medium,
      },
      rootAttrs: !props.medium
        ? { style: { width: '48px', height: '48px' } }
        : { style: { width: '36px', height: '36px' } },
      circleAttrs: getCircleAttributes(props.medium, false),
      trackAttrs: getTrackAttributes(props.medium, false),
      indeterminateAttrs: getCircleAttributes(props.medium, true),
      viewbox: props.medium ? '0 0 36 36' : '0 0 48 48',
      root: undefined,
    });

    let foundation;

    const adapter = {
      addClass: className => {
        uiState.classes = { ...uiState.classes, [className]: true };
      },

      getDeterminateCircleAttribute: attributeName => {
        return uiState.circleAttrs[attributeName];
      },

      hasClass: className => uiState.root.classList.contains(className),
      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      removeAttribute: attributeName => {
        const { [attributeName]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },

      setAttribute: (attributeName, value) => {
        uiState.rootAttrs = { ...uiState.rootAttrs, [attributeName]: value };
      },

      setDeterminateCircleAttribute: (attributeName, value) =>
        (uiState.circleAttrs = {
          ...uiState.circleAttrs,
          [attributeName]: value,
        }),
    };

    const rootAttributes = computed(() => {
      return {
        role: 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '1',
        'aria-label': props.label,
        ...uiState.rootAttrs,
      };
    });
    watch(
      () => props.open,
      nv => {
        if (nv) {
          foundation.open();
        } else {
          foundation.close();
        }
      },
    );

    watch(
      () => props.progress,
      nv => {
        foundation.setProgress(Number(nv));
      },
    );

    watch(
      () => props.indeterminate,
      nv => {
        foundation.setDeterminate(!nv);
      },
    );

    const colorClass = index => {
      return props.fourColor
        ? `mdc-circular-progress__color-${index}`
        : undefined;
    };
    const colors = Array.from(
      { length: props.fourColor ? 4 : 1 },
      (_, index) => index + 1,
    );

    onMounted(() => {
      foundation = new MDCCircularProgressFoundation(adapter);
      foundation.init();

      foundation.setProgress(Number(props.progress));
      foundation.setDeterminate(!props.indeterminate);

      if (props.open) {
        foundation.open();
      } else {
        foundation.close();
      }
    });

    onBeforeUnmount(() => foundation.destroy());

    return { ...toRefs(uiState), rootAttributes, colors, colorClass };
  },
};

// ===
// Private functions
// ===

function getCircleAttributes(medium = false, indeterminate = true) {
  return medium
    ? {
        cx: '16',
        cy: '16',
        r: '12.5',
        'stroke-dasharray': '78.54',
        'stroke-dashoffset': indeterminate ? '39.27' : '78.54',
        'stroke-width': '3',
      }
    : {
        cx: '24',
        cy: '24',
        r: '18',
        'stroke-dasharray': '113.097',
        'stroke-dashoffset': indeterminate ? '56.549' : '113.097',
        'stroke-width': '4',
      };
}

function getTrackAttributes(medium = false) {
  const {
    ['stroke-dasharray']: sda,
    ['stroke-dashoffset']: sdo,
    ...rest
  } = getCircleAttributes(medium);

  return rest;
}
