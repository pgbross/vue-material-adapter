import { MDCSegmentedButtonSegmentFoundation } from '@material/segmented-button/segment/index.js';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
} from 'vue';
import { emitCustomEvent, touchWrapper } from '../base/index.js';
import { useRipplePlugin } from '../ripple/index.js';

export default {
  name: 'mcw-segment',
  props: {
    icon: String,
    label: String,
    ripple: { type: Boolean, default: () => true },
  },
  setup(props, { attrs }) {
    const uiState = reactive({
      classes: {},
      attrs: {},
      root: undefined,
    });
    let foundation;

    const { getNextSegmentIndex, isSingleSelect, isTouch } =
      inject('segmented-button');

    if (isTouch) {
      uiState.classes['mdc-segmented-button--touch'] = true;
    }

    uiState.attrs = isSingleSelect
      ? { role: 'radio', 'aria-checked': attrs['aria-checked'] ?? 'false' }
      : { 'aria-pressed': attrs['aria-pressed'] ?? 'false' };

    const getSegmentId = () => foundation.getSegmentId();
    const isSelected = () => foundation.isSelected();
    const setSelected = () => foundation.setSelected();
    const setUnselected = () => foundation.setUnselected();

    const segmentIndex = getNextSegmentIndex({
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

    const myAttributes = computed(() => {
      return {
        ...uiState.attrs,
        class: { ...rippleClasses.value, ...uiState.classes },
        styles: styles.value,
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
            index: segmentIndex,
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

    return { ...toRefs(uiState), myAttrs: myAttributes, onClick, isTouch };
  },

  components: { touchWrapper },
};
