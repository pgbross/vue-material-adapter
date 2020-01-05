import MDCChipSetFoundation from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';

const {
  INTERACTION_EVENT,
  SELECTION_EVENT,
  REMOVAL_EVENT,
  NAVIGATION_EVENT,
} = MDCChipFoundation.strings;

const { CHIP_SELECTOR } = MDCChipSetFoundation.strings;

let idCounter = 0;

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
      listn: 0,
    };
  },

  computed: {
    chipElements() {
      // eslint-disable-next-line no-unused-vars
      const xx = this.listn; // for dependency

      return [].slice.call(this.$el.querySelectorAll(CHIP_SELECTOR));
    },
    chips_() {
      return this.chipElements.map(el => {
        el.id = el.id || `mdc-chip-${++idCounter}`;

        return el.__vue__;
      });
    },
  },

  mounted() {
    // do not delete this reference as it triggers initial chip list instantiation.
    this.chips_;
    this.foundation = new MDCChipSetFoundation({
      focusChipPrimaryActionAtIndex: index => {
        const chip = this.chips_[index];

        chip && chip.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: index => {
        const chip = this.chips_[index];
        chip && chip.focusTrailingAction();
      },
      getChipListCount: () => {
        return this.chips_.length;
      },
      getIndexOfChipById: chipId => {
        return this.chips_.findIndex(({ id }) => id == chipId);
      },
      hasClass: className => this.$el.classList.contains(className),
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',
      removeChipAtIndex: index => {
        if (index >= 0 && index < this.chips_.length) {
          // tell chip to remove itself from the DOM
          this.chips_[index].remove();
          this.chips_.splice(index, 1);
        }
      },

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

    // the chips could change outside of this component
    // so use a mutation observer to trigger an update by
    // incrementing the dependency variable "listn" referenced
    // in the computed that selects the chip elements
    this.slotObserver = new MutationObserver((mutationList, observer) => {
      this.listn++;
    });
    this.slotObserver.observe(this.$refs.listRoot, {
      childList: true,
      // subtree: true,
    });
  },

  beforeDestroy() {
    this.slotObserver.disconnect();
    this.foundation.destroy();
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'div',
      {
        class: this.classes,
        attrs: { role: 'grid' },
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
        ref: 'listRoot',
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
