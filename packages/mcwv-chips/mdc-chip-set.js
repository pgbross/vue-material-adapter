import MDCChipSetFoundation from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';

const {
  INTERACTION_EVENT,
  SELECTION_EVENT,
  REMOVAL_EVENT,
} = MDCChipFoundation.strings;

export default {
  name: 'mdc-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean],
  },
  provide() {
    return { mdcChipSet: this };
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
  mounted() {
    this.foundation = new MDCChipSetFoundation({
      hasClass: className => this.$el.classList.contains(className),
      removeChip: chipId => {
        const index = findChipIndex(this.$slots.default, chipId);

        if (index >= 0) {
          this.$nextTick(() => {
            this.$slots.default.splice(index, 1);
          });
        }
      },
      setSelected: (chipId, selected) => {
        const index = findChipIndex(this.$slots.default, chipId);
        if (index >= 0) {
          this.$slots.default[index].componentInstance.selected = selected;
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
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

// ===
// Private functions
// ===

function findChipIndex(slot, chipId) {
  const vindex = slot.findIndex(({ componentInstance }) => {
    return (
      componentInstance &&
      (componentInstance.id == chipId || componentInstance._uid == chipId)
    );
  });

  return vindex;
}
