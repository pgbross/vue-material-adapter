import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { CustomLinkMixin, emitCustomEvent } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';
import mcwChipCheckmark from './mdc-chip-checkmark.js';

export default {
  name: 'mcw-chip',
  mixins: [CustomLinkMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default() {
        return true;
      },
    },
    id: {},
  },
  inject: ['mcwChipSet'],
  data() {
    return {
      classes: {
        'mdc-chip': true,
      },
      styles: {},
    };
  },
  computed: {
    myId() {
      return this.id || this._uid;
    },
    selected: {
      get() {
        return this.foundation.isSelected();
      },
      set(nv) {
        this.foundation.setSelected(nv);
      },
    },
    isFilter() {
      return this.mcwChipSet && this.mcwChipSet.filter;
    },
    haveleadingIcon() {
      const slot = this.$slots['leading-icon'];
      return (slot && slot[0]) || !!this.leadingIcon;
    },
    havetrailingIcon() {
      const slot = this.$slots['trailing-icon'];
      return (slot && slot[0]) || !!this.trailingIcon;
    },
  },

  mounted() {
    const {
      INTERACTION_EVENT,
      SELECTION_EVENT,
      REMOVAL_EVENT,
      TRAILING_ICON_INTERACTION_EVENT,
    } = MDCChipFoundation.strings;

    this.foundation = new MDCChipFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addClassToLeadingIcon: className => {
        if (this.haveleadingIcon) {
          const item =
            this.$refs['leading-icon'] || this.$slots['leading-icon'][0];
          (item.elm || item).classList.add(className);
        }
      },
      removeClassFromLeadingIcon: className => {
        if (this.haveleadingIcon) {
          const item =
            this.$refs['leading-icon'] || this.$slots['leading-icon'][0];
          (item.elm || item).classList.remove(className);
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      notifyInteraction: () => {
        emitCustomEvent(
          this.$el,
          INTERACTION_EVENT,
          {
            chipId: this.myId,
          },
          true,
        );
      },

      notifySelection: selected =>
        emitCustomEvent(
          this.$el,
          SELECTION_EVENT,
          { chipId: this.myId, selected: selected },
          true /* shouldBubble */,
        ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          this.$el,
          TRAILING_ICON_INTERACTION_EVENT,
          {
            chipId: this.myId,
          },
          true,
        );
      },
      notifyRemoval: () => {
        emitCustomEvent(
          this.$el,
          REMOVAL_EVENT,
          { chipId: this.myId, root: this.$el },
          true,
        );
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(this.$el).getPropertyValue(propertyName),
      setStyleProperty: (property, value) =>
        this.$set(this.styles, property, value),

      hasLeadingIcon: () => !!this.haveleadingIcon,
      getRootBoundingClientRect: () => this.$el.getBoundingClientRect(),
      getCheckmarkBoundingClientRect: () => {
        return this.$refs.checkmarkEl ? this.$refs.checkmarkEl.width : null;
      },
    });

    this.foundation.init();

    if (
      this.shouldRemoveOnTrailingIconClick !==
      this.foundation.getShouldRemoveOnTrailingIconClick()
    ) {
      this.foundation.setShouldRemoveOnTrailingIconClick(
        this.shouldRemoveOnTrailingIconClick,
      );
    }

    this.ripple = new RippleBase(this, {
      computeBoundingRect: () => this.foundation.getDimensions(),
    });
    this.ripple.init();
  },
  beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
  methods: {
    toggleSelected() {
      this.foundation.toggleSelected();
    },
    isSelected() {
      return this.foundation.isSelected();
    },

    renderLeadingIcon(createElement) {
      const {
        $slots: { ['leading-icon']: slot },
      } = this;
      const v0 = slot && slot[0];
      if (v0) {
        const { staticClass = '' } = v0.data;
        const haveClasses =
          staticClass && staticClass.indexOf('mdc-chip__icon') > -1;
        if (!haveClasses) {
          v0.data.staticClass = `mdc-chip__icon mdc-chip__icon--leading ${staticClass}`;
        }
        return slot;
      }
      return createElement(
        'i',
        {
          class: {
            'mdc-chip__icon': 1,
            'mdc-chip__icon--leading': 1,
            'material-icons': 1,
          },
          ref: 'leading-icon',
        },
        this.leadingIcon,
      );
    },

    renderTrailingIcon(createElement) {
      const {
        $slots: { ['trailing-icon']: slot },
      } = this;
      const v0 = slot && slot[0];
      if (v0) {
        const { staticClass = '' } = v0.data;
        const haveClasses =
          staticClass && staticClass.indexOf('mdc-chip__icon') > -1;
        if (!haveClasses) {
          v0.data.staticClass = `mdc-chip__icon mdc-chip__icon--trailing ${staticClass}`;
          v0.data.on = {
            ...v0.data.on,
            click: evt => {
              this.foundation.handleTrailingIconInteraction(evt);
            },
            keydown: evt => this.foundation.handleTrailingIconInteraction(evt),
          };
        }
        return slot;
      }
      return createElement(
        'i',
        {
          class: {
            'mdc-chip__icon': 1,
            'mdc-chip__icon--trailing': 1,
            'material-icons': 1,
          },
          ref: 'trailing-icon',
          on: {
            click: evt => this.foundation.handleTrailingIconInteraction(evt),
            keydown: evt => this.foundation.handleTrailingIconInteraction(evt),
          },
        },
        this.trailingIcon,
      );
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        attrs: { tabindex: '0' },
        on: {
          click: evt => this.foundation.handleInteraction(evt),
          keydown: evt => this.foundation.handleInteraction(evt),
          transitionend: evt => this.foundation.handleTransitionEnd(evt),
        },
      },
      [
        this.haveleadingIcon && this.renderLeadingIcon(createElement),
        this.isFilter &&
          createElement(mcwChipCheckmark, { ref: 'checkmarkEl' }),
        createElement(
          'div',
          { class: { 'mdc-chip__text': 1 } },
          scopedSlots.default && scopedSlots.default(),
        ),
        this.havetrailingIcon && this.renderTrailingIcon(createElement),
      ],
    );
  },
};
