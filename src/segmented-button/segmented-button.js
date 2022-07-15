import { MDCSegmentedButtonFoundation } from '@material/segmented-button/index.js';
import {
  computed,
  h,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue';

export default {
  name: 'mcw-segmented-button',
  props: {
    singleSelect: Boolean,
    touch: Boolean,
    modelValue: { type: [Number, Array] },
  },
  setup(props, { emit, slots }) {
    const uiState = reactive({
      classes: {
        'mdc-segmented-button--single-select': props.singleSelect,
      },
      styles: {},
      contentEl: undefined,
    });

    const rootElement = ref();
    let foundation;
    let segmentIndex = 0;

    const segments_ = [];

    const getNextSegmentIndex = segment => {
      const sg = { ...segment, index: segmentIndex++ };
      segments_.push(sg);
      return sg.index;
    };

    provide('segmented-button', {
      getNextSegmentIndex,
      isSingleSelect: props.singleSelect,
      isTouch: props.touch,
    });

    const mappedSegments = computed(() =>
      segments_.map(({ index, isSelected, getSegmentId }) => ({
        index,
        selected: isSelected(),
        segmentId: getSegmentId(),
      })),
    );

    const onSelected = ({ detail }) => {
      foundation.handleSelected(detail);
    };
    const adapter = {
      hasClass: className => rootElement.value.classList.contains(className),

      getSegments: () => {
        return mappedSegments.value;
      },

      selectSegment: indexOrSegmentId => {
        const segmentDetail = mappedSegments.value.find(
          _segmentDetail =>
            _segmentDetail.index === indexOrSegmentId ||
            _segmentDetail.segmentId === indexOrSegmentId,
        );
        if (segmentDetail) {
          segments_[segmentDetail.index].setSelected();
        }
      },

      unselectSegment: indexOrSegmentId => {
        const segmentDetail = mappedSegments.value.find(
          _segmentDetail =>
            _segmentDetail.index === indexOrSegmentId ||
            _segmentDetail.segmentId === indexOrSegmentId,
        );
        if (segmentDetail) {
          segments_[segmentDetail.index].setUnselected();
        }
      },

      notifySelectedChange: detail => {
        emit('change', detail);
        if (Array.isArray(props.modelValue)) {
          const { selected, index } = detail;
          const index_ = props.modelValue.indexOf(index);
          if (selected) {
            index_ < 1 &&
              emit('update:modelValue', [...props.modelValue, index]);
          } else {
            index_ > -1 &&
              emit('update:modelValue', [
                ...props.modelValue.slice(0, index_),
                ...props.modelValue.slice(index_ + 1),
              ]);
          }
        } else {
          emit('update:modelValue', detail.index);
        }
      },
    };

    const role = computed(() => (props.singleSelect ? 'radiogroup' : 'group'));

    onMounted(() => {
      foundation = new MDCSegmentedButtonFoundation(adapter);
      foundation.init();

      if (props.singleSelect && props.modelValue !== undefined) {
        foundation.selectSegment(props.modelValue);
      }

      watch(
        () => props.modelValue,
        nv => {
          if (Array.isArray(nv)) {
            const selectedSegments = mappedSegments.value
              .filter(({ selected }) => selected)
              .map(({ index }) => index);

            // select the new ones
            for (const v of nv) {
              if (!selectedSegments.includes(v)) {
                foundation.selectSegment(v);
              }
            }

            // unselect the ones that not there anymore
            for (const v of selectedSegments) {
              if (!nv.includes(v)) {
                foundation.unselectSegment(v);
              }
            }
          } else {
            foundation.selectSegment(nv);
            foundation.handleSelected({ index: nv });
          }
        },
      );
    });

    onBeforeUnmount(() => {
      foundation?.destroy();
    });

    return () => {
      return h(
        'div',
        {
          ref: rootElement,
          class: {
            'mdc-segmented-button': 1,
            ...uiState.classes,
          },
          role: role.value,
          onSelected,
        },
        [slots.default()],
      );
    };
  },
};
