import MDCChipSetFoundation from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';

let idCounter = 0;

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

      chips: [],
    };
  },
  mounted() {
    this.foundation = new MDCChipSetFoundation({
      hasClass: className => this.$el.classList.contains(className),
      removeChip: chipId => {
        const index = this.findChipIndex(chipId);

        if (index > 0) {
          this.$nextTick(() => {
            this.chips.splice(index, 1);
          });
        }
      },
      setSelected: (chipId, selected) => {
        const index = this.findChipIndex(chipId);
        if (index >= 0) {
          this.chips[index].selected = selected;
        }
      },
    });

    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    nextId() {
      return `mdc-chip-${++idCounter}`;
    },
    findChipIndex(chipId) {
      for (let i = 0; i < this.chips.length; i++) {
        if (this.chips[i].id === chipId) {
          return i;
        }
      }
      return -1;
    },
    handleChipInteraction(evt) {
      this.foundation.handleChipInteraction(evt.detail.chipId);
    },
    handleChipRemoval(evt) {
      this.foundation.handleChipRemoval(evt.detail.chipId);
    },
    handleChipSelection(evt) {
      this.foundation.handleChipSelection(
        evt.detail.chipId,
        evt.detail.selected,
      );
    },
  },
  render(createElement) {
    return createElement(
      'div',
      {
        class: this.classes,
        on: {
          [MDCChipFoundation.strings.INTERACTION_EVENT]: evt =>
            this.handleChipInteraction(evt),
          [MDCChipFoundation.strings.SELECTION_EVENT]: evt =>
            this.handleChipSelection(evt),
          [MDCChipFoundation.strings.REMOVAL_EVENT]: evt =>
            this.handleChipRemoval(evt),
        },
      },
      this.$slots.default,
    );
  },
};
