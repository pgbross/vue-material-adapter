import { MDCSegmentedButtonFoundation } from '@material/segmented-button';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  toRefs,
} from 'vue';

export default {
  name: 'mcw-segmented-button',
  props: { singleSelect: Boolean, touch: Boolean },
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
      },
    };

    const role = computed(() => (props.singleSelect ? 'radiogroup' : 'group'));

    onMounted(() => {
      foundation = new MDCSegmentedButtonFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation?.destroy();
    });

    return { ...toRefs(uiState), role, onSelected };
  },
};
