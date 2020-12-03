import { MDCSegmentedButtonSegmentFoundation } from '@material/segmented-button/segment';
import { emitCustomEvent } from '~/base/index.js';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
} from 'vue';
import { useRipplePlugin } from '~/ripple/index.js';

export default {
  name: 'mcw-segment',
  props: {
    icon: String,
    label: String,
    ripple: { type: Boolean, default: () => true },
  },
  setup(props, { emit, attrs }) {
    const uiState = reactive({
      classes: {},
      attrs: {},
      root: null,
    });
    let foundation;

    const getSegmentIdx = inject('getSegmentIdx');
    const isSingleSelect = inject('isSingleSelect');
    const isTouch = inject('isTouch');

    if (isSingleSelect) {
      uiState.attrs['role'] = 'radio';
      uiState.attrs['aria-checked'] = attrs['aria-checked'] ?? 'false';
    } else {
      uiState.attrs['aria-pressed'] = attrs['aria-pressed'] ?? 'false';
    }

    const getSegmentId = () => foundation.getSegmentId();
    const isSelected = () => foundation.isSelected();
    const setSelected = () => foundation.setSelected();
    const setUnselected = () => foundation.setUnselected();

    const segmentIdx = getSegmentIdx({
      getSegmentId,
      isSelected,
      setSelected,
      setUnselected,
    });

    const { classes: rippleClasses, styles } = useRipplePlugin(
      toRef(uiState, 'root'),
      {
        computeBoundingRect: () => {
          return foundation.getDimensions();
        },
      },
    );

    const myAttrs = computed(() => {
      return {
        ...uiState.attrs,
        class: { ...rippleClasses.value, ...uiState.classes },
        style: styles.value,
      };
    });

    const onClick = () => foundation.handleClick();

    const adapter = {
      isSingleSelect: () => {
        return isSingleSelect;
      },
      getAttr: name => uiState.root.getAttribute(name),
      setAttr: (attributeName, value) => {
        uiState.attrs = { ...uiState.attrs, [attributeName]: value };
      },

      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      hasClass: className => !!uiState.classes[className],
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      notifySelectedChange: selected => {
        emitCustomEvent(
          uiState.root,
          'selected',
          {
            index: segmentIdx,
            selected,
            segmentId: getSegmentId(),
          },
          true,
        );
      },
      getRootBoundingClientRect: () => {
        return uiState.root.getBoundingClientRect();
      },
    };

    onMounted(() => {
      foundation = new MDCSegmentedButtonSegmentFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation?.destroy();
    });

    return { ...toRefs(uiState), myAttrs, onClick, isTouch };
  },
};
