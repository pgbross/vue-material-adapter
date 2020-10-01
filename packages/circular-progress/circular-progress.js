import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';

const ProgressPropType = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

const SizePropType = {
  type: [String],
  default: 'large',
  validator(value) {
    return value == 'small' || value == 'medium' || value == 'large';
  },
};

const styleSizes_ = { large: '48px', medium: '36px', small: '24px' };

export default {
  name: 'mcw-circular-progress',
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    size: SizePropType,
    progress: ProgressPropType,
    tag: { type: String, default: 'div' },
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-circular-progress': 1,
      },
      rootAttrs: {},
      rootStyle: {
        width: styleSizes_[props.size],
        height: styleSizes_[props.size],
      },
      circleAttrs: getCircleAttrs(props.size, false),
      trackAttrs: getTrackAttrs(props.size, false),
      indeterminateAttrs: getCircleAttrs(props.size, true),
      indeterminateGapAttrs: getCircleAttrs(props.size, true, true),
      root: null,
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
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      removeAttribute: attributeName => {
        // eslint-disable-next-line no-unused-vars
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

    return { ...toRefs(uiState) };
  },
};

// ===
// Private functions
// ===

const sizes_ = {
  large: {
    c: '24',
    r: '18',
    sda: '113.097',
    sw: '4',
  },
  medium: {
    c: '16',
    r: '12.5',
    sda: '78.54',
    sw: '3',
  },
  small: {
    c: '12',
    r: '8.75',
    sda: '54.978',
    sw: '2.5',
  },
};

function getCircleAttrs(size = 'large', indeterminate = false, gap = false) {
  const sz = sizes_[size];
  if (indeterminate) {
    return {
      cx: sz.c,
      cy: sz.c,
      r: sz.r,
      'stroke-dasharray': sz.sda,
      'stroke-dashoffset': String(sz.sda / 2),
      'stroke-width': gap ? String(sz.sw * 0.8) : sz.sw,
    };
  }

  return {
    cx: sz.c,
    cy: sz.c,
    r: sz.r,
    'stroke-dasharray': sz.sda,
    'stroke-dashoffset': sz.sda,
    'stroke-width': sz.sw,
  };
}

function getTrackAttrs(size, indeterminate, gap) {
  const {
    // eslint-disable-next-line no-unused-vars
    'stroke-dasharray': sda,
    // eslint-disable-next-line no-unused-vars
    'stroke-dashoffset': sdo,
    ...ta
  } = getCircleAttrs(size, indeterminate, gap);
  return ta;
}
