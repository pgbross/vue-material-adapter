import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';

const ProgressPropType = {
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
    progress: ProgressPropType,
    tag: { type: String, default: 'div' },
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-circular-progress': 1,
        'mdc-circular-progress--medium': props.medium,
        'mdc-circular-progress--large': !props.medium,
      },
      rootAttrs: {},
      circleAttrs: getCircleAttrs(props.medium, false),
      indeterminateAttrs: getCircleAttrs(props.medium, true),
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

function getCircleAttrs(medium = false, indeterminate = true) {
  return medium
    ? {
        cx: '16',
        cy: '16',
        r: '12.5',
        'stroke-dasharray': '78.54',
        'stroke-dashoffset': indeterminate ? '39.27' : '78.54',
      }
    : {
        cx: '24',
        cy: '24',
        r: '18',
        'stroke-dasharray': '113.097',
        'stroke-dashoffset': indeterminate ? '56.549' : '113.097',
      };
}
