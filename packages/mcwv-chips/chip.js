import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { CustomLinkMixin, emitCustomEvent } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';
import mcwChipCheckmark from './chip-checkmark.js';

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
      PRIMARY_ACTION_SELECTOR,
      TRAILING_ACTION_SELECTOR,
      NAVIGATION_EVENT,
    } = MDCChipFoundation.strings;

    this.primaryAction_ = this.$el.querySelector(PRIMARY_ACTION_SELECTOR);
    this.trailingAction_ = this.$el.querySelector(TRAILING_ACTION_SELECTOR);

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

      focusPrimaryAction: () => {
        if (this.primaryAction_) {
          this.primaryAction_.focus();
        }
      },
      focusTrailingAction: () => {
        if (this.trailingAction_) {
          this.trailingAction_.focus();
        }
      },
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
      notifyNavigation: (key, source) =>
        emitCustomEvent(
          this.$el,
          NAVIGATION_EVENT,
          {
            chipId: this.myId,
            key,
            source,
          },
          true,
        ),

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
      setAttr: (attr, value) => this.$el.setAttribute(attr, value),
      setStyleProperty: (property, value) =>
        this.$set(this.styles, property, value),

      hasLeadingIcon: () => !!this.haveleadingIcon,
      hasTrailingIcon: () => !!this.havetrailingIcon,
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',
      getRootBoundingClientRect: () => this.$el.getBoundingClientRect(),
      getCheckmarkBoundingClientRect: () => {
        return this.$refs.checkmarkEl ? this.$refs.checkmarkEl.width : null;
      },
      setPrimaryActionAttr: (attr, value) => {
        if (this.primaryAction_) {
          this.primaryAction_.setAttribute(attr, value);
        }
      },
      setTrailingActionAttr: (attr, value) => {
        if (this.trailingAction_) {
          this.trailingAction_.setAttribute(attr, value);
        }
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
    setSelectedFromChipSet(selected, shouldNotifyClients) {
      this.foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    },

    focusPrimaryAction() {
      this.foundation.focusPrimaryAction();
    },

    focusTrailingAction() {
      this.foundation.focusTrailingAction();
    },
    removeFocus() {
      this.foundation.removeFocus();
    },
    toggleSelected() {
      this.foundation.toggleSelected();
    },
    isSelected() {
      return this.foundation.isSelected();
    },

    remove() {
      const parent = this.$el.parentNode;
      if (parent != null) {
        parent.removeChild(this.$el);
      }
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
        createElement('div', { class: { 'mdc-chip__ripple': 1 } }),
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
