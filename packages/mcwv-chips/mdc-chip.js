import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { CustomLinkMixin, emitCustomEvent } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-chip',
  mixins: [CustomLinkMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    leadingIconClasses: [Object],
    trailingIconClasses: [Object],
  },
  inject: ['mdcChipSet'],
  data() {
    return {
      classes: {
        'mdc-chip': true,
      },
      styles: {},
      id: '',
    };
  },
  computed: {
    selected: {
      get() {
        return this.foundation.isSelected();
      },
      set(nv) {
        this.foundation.setSelected(nv);
      },
    },
    isFilter() {
      return this.mdcChipSet && this.mdcChipSet.filter;
    },
    haveleadingIcon() {
      return !!this.leadingIcon || this.leadingIconClasses;
    },
    havetrailingIcon() {
      return !!this.trailingIcon || this.trailingIconClasses;
    },
    leadingClasses() {
      return Object.assign(
        {},
        {
          'mdc-chip__icon': 1,
          'mdc-chip__icon--leading': 1,
          'material-icons': !!this.leadingIcon,
        },
        this.leadingIconClasses,
      );
    },
    trailingClasses() {
      return Object.assign(
        {},
        {
          'mdc-chip__icon': 1,
          'mdc-chip__icon--trailing': 1,
          'material-icons': !!this.trailingIcon,
        },
        this.trailingIconClasses,
      );
    },
  },

  render(createElement) {
    const nodes = [];
    if (this.haveleadingIcon) {
      nodes.push(
        createElement(
          'i',
          { class: this.leadingClasses, ref: 'leadingIcon' },
          this.leadingIcon,
        ),
      );
    }

    if (this.isFilter) {
      nodes.push(
        createElement(
          'div',
          { class: { 'mdc-chip__checkmark': 1 }, ref: 'checkmarkEl' },
          [
            createElement(
              'svg',
              {
                class: { 'mdc-chip__checkmark-svg': 1 },
                attrs: { viewBox: '-2 -3 30 30' },
              },
              [
                createElement('path', {
                  class: { 'mdc-chip__checkmark-path': 1 },
                  attrs: {
                    fill: 'none',
                    stroke: 'black',
                    d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
                  },
                }),
              ],
            ),
          ],
        ),
      );
    }

    nodes.push(
      createElement(
        'div',
        { class: { 'mdc-chip__text': 1 } },
        this.$slots.default,
      ),
    );

    if (this.havetrailingIcon) {
      nodes.push(
        createElement(
          'i',
          {
            class: this.trailingClasses,
            ref: 'trailingIcon',
            attrs: { tabindex: '0', role: 'button' },
            on: {
              click: evt => this.handleTrailingIconInteraction(evt),
              keydown: evt => this.handleTrailingIconInteraction(evt),
            },
          },
          this.trailingIcon,
        ),
      );
    }

    return createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        attrs: { tabindex: '0' },
        on: {
          click: evt => this.handleInteraction,
          keydown: evt => this.handleInteraction(evt),
          transitionend: evt => this.handleTransitionEnd,
        },
      },
      nodes,
    );
  },
  created() {
    this.id = this.mdcChipSet.nextId();
  },
  mounted() {
    this.foundation = new MDCChipFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addClassToLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.add(className);
        }
      },
      removeClassFromLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.remove(className);
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      notifyInteraction: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.INTERACTION_EVENT,
          {
            chipId: this.id,
          },
          true,
        );
        this.mdcChipSet && this.mdcChipSet.handleInteraction;
      },

      notifySelection: selected =>
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.SELECTION_EVENT,
          { chipId: this.id, selected: selected },
          true /* shouldBubble */,
        ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT,
          {
            chipId: this.id,
          },
          true,
        );
      },
      notifyRemoval: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.REMOVAL_EVENT,
          { chipId: this.id, root: this.$el },
          true,
        );
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(this.$el).getPropertyValue(propertyName),
      setStyleProperty: (property, value) =>
        this.$set(this.styles, property, value),

      hasLeadingIcon: () => !!this.haveleadingIcon,
      getRootBoundingClientRect: () => this.$el.getBoundingClientRect(),
      getCheckmarkBoundingClientRect: () =>
        this.$refs.checkmarkEl
          ? this.$refs.checkmarkEl.getBoundingClientRect()
          : null,
    });

    this.foundation.init();

    this.mdcChipSet.chips.push(this);

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
    handleInteraction(evt) {
      this.foundation.handleInteraction(evt);
    },
    handleTransitionEnd(evt) {
      this.foundation.handleTransitionEnd(evt);
    },
    handleTrailingIconInteraction(evt) {
      this.foundation.handleTrailingIconInteraction(evt);
    },
    toggleSelected() {
      this.foundation.toggleSelected();
    },
    isSelected() {
      return this.foundation.isSelected();
    },
  },
};
