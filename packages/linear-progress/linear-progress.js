import { MDCLinearProgressFoundation } from '@material/linear-progress/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';

const progressPropType_ = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

export default {
  name: 'mcw-linear-progress',
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    reversed: Boolean,
    progress: progressPropType_,
    buffer: progressPropType_,
    bufferingDots: { type: Boolean, default: true },
    tag: { type: String, default: 'div' },
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-linear-progress': 1,
      },
      bufferbarStyles: {},
      primaryStyles: {},
      rootAttrs: {},
      root: null,
    });

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      forceLayout: () => uiState.root.offsetWidth,
      setBufferBarStyle: (styleProperty, value) =>
        (uiState.bufferbarStyles = {
          ...uiState.bufferbarStyles,
          [styleProperty]: value,
        }),
      setPrimaryBarStyle: (styleProperty, value) =>
        (uiState.primaryStyles = {
          ...uiState.primaryStyles,
          [styleProperty]: value,
        }),

      hasClass: className => uiState.root.classList.contains(className),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setAttribute: (attributeName, value) =>
        (uiState.rootAttrs = {
          ...uiState.rootAttrs,
          [attributeName]: value,
        }),

      removeAttribute: attributeName => {
        // eslint-disable-next-line no-unused-vars
        const { [attributeName]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
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
      () => props.buffer,
      nv => {
        foundation.setBuffer(Number(nv));
      },
    );
    watch(
      () => props.indeterminate,
      nv => {
        foundation.setDeterminate(!nv);
      },
    );
    watch(
      () => props.reversed,
      nv => {
        foundation.setReverse(nv);
      },
    );

    onMounted(() => {
      foundation = new MDCLinearProgressFoundation(adapter);
      foundation.init();
      foundation.setReverse(props.reversed);
      foundation.setProgress(Number(props.progress));
      foundation.setBuffer(Number(props.buffer));
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
