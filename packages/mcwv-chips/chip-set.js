import MDCChipSetFoundation from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';

const {
  INTERACTION_EVENT,
  SELECTION_EVENT,
  REMOVAL_EVENT,
  NAVIGATION_EVENT,
} = MDCChipFoundation.strings;

export default {
  name: 'mcw-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean],
  },
  provide() {
    return { mcwChipSet: this };
  },
  data() {
    return {
      classes: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input,
      },
    };
  },
  methods: {
    instantiateChips() {
      const chips = this.$slots.default
        .filter(
          ({ componentInstance }) =>
            !!componentInstance &&
            componentInstance.shouldRemoveOnTrailingIconClick,
        )
        .map(({ componentInstance }) => componentInstance);

      return chips;
    },
  },
  mounted() {
    this.chips_ = this.instantiateChips();
    this.foundation = new MDCChipSetFoundation({
      hasClass: className => this.$el.classList.contains(className),
      removeChipAtIndex: index => {
        if (index >= 0 && index < this.chips_.length) {
          this.chips_[index].remove();
          this.chips_.splice(index, 1);
        }
      },

      focusChipPrimaryActionAtIndex: index => {
        this.chips_[index].focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: index => {
        this.chips_[index].focusTrailingAction();
      },
      getChipListCount: () => this.chips_.length,
      getIndexOfChipById: chipId => {
        return findChipIndex(this.chips_, chipId);
      },
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',

      removeFocusFromChipAtIndex: index => {
        this.chips_[index].removeFocus();
      },
      selectChipAtIndex: (index, selected, shouldNotifyClients) => {
        if (index >= 0 && index < this.chips_.length) {
          this.chips_[index].setSelectedFromChipSet(
            selected,
            shouldNotifyClients,
          );
        }
      },
    });

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'div',
      {
        class: this.classes,
        on: {
          [INTERACTION_EVENT]: ({ detail: { chipId } }) =>
            this.foundation.handleChipInteraction(chipId),
          [SELECTION_EVENT]: ({ detail: { chipId, selected } }) =>
            this.foundation.handleChipSelection(chipId, selected),
          [REMOVAL_EVENT]: ({ detail: { chipId } }) =>
            this.foundation.handleChipRemoval(chipId),
          [NAVIGATION_EVENT]: ({ detail: { chipId, key, source } }) =>
            this.foundation.handleChipNavigation(chipId, key, source),
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

// ===
// Private functions
// ===

function findChipIndex(chips, chipId) {
  const index = chips.findIndex(({ _uid }) => _uid == chipId);

  return index;
}
