import { MDCSegmentedButtonFoundation } from '@material/segmented-button';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  toRefs,
  watch,
} from 'vue';

export default {
  name: 'mcw-segmented-button',
  props: {
    singleSelect: Boolean,
    touch: Boolean,
    modelValue: { type: [Number, Array] },
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-segmented-button--single-select': props.singleSelect,
      },
      styles: {},
      root: null,
      contentEl: null,
    });
    let foundation;
    let segmentIdx = 0;

    const segments_ = [];

    const getSegmentIdx = segment => {
      const sg = { ...segment, index: segmentIdx++ };
      segments_.push(sg);
      return sg.index;
    };

    provide('getSegmentIdx', getSegmentIdx);
    provide('isSingleSelect', props.singleSelect);

    provide('isTouch', props.touch);

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
      hasClass: className => uiState.root.classList.contains(className),

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
          const idx = props.modelValue.indexOf(detail.index);
          if (selected) {
            idx < 1 &&
              emit('update:modelValue', props.modelValue.concat(index));
          } else {
            idx > -1 &&
              emit(
                'update:modelValue',
                props.modelValue
                  .slice(0, idx)
                  .concat(props.modelValue.slice(idx + 1)),
              );
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

      if (props.singleSelect && props.modelValue !== void 0) {
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
            nv.forEach(v => {
              if (selectedSegments.indexOf(v) < 0) {
                foundation.selectSegment(v);
              }
            });

            // unselect the ones that not there anymore
            selectedSegments.forEach(v => {
              if (nv.indexOf(v) < 0) {
                foundation.unselectSegment(v);
              }
            });
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

    return { ...toRefs(uiState), role, onSelected };
  },
};
