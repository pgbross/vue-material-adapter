<template>
  <div
    :id="id"
    :class="classes"
    :style="styles"
    tabindex="0"
    @click="handleInteraction"
    @keydown="handleInteraction"
    @transitionend="handleTransitionEnd"
  >
    <i
      v-if="haveleadingIcon"
      ref="leadingIcon"
      :class="leadingClasses"
      class="mdc-chip__icon mdc-chip__icon--leading"
      >{{ leadingIcon }}</i
    >
    <div v-if="isFilter" ref="checkmarkEl" class="mdc-chip__checkmark">
      <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path
          class="mdc-chip__checkmark-path"
          fill="none"
          stroke="black"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    </div>
    <div class="mdc-chip__text"><slot /></div>
    <i
      v-if="havetrailingIcon"
      ref="trailingIcon"
      :class="trailingClasses"
      class="mdc-chip__icon mdc-chip__icon--trailing"
      tabindex="0"
      role="button"
      @click="handleTrailingIconInteraction"
      @keydown="handleTrailingIconInteraction"
      >{{ trailingIcon }}</i
    >
  </div>
</template>
applyPassive
<script>
import { MDCChipFoundation } from '@material/chips/chip/foundation'
import { CustomLinkMixin, emitCustomEvent } from '../base'
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-chip',
  mixins: [CustomLinkMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    leadingIconClasses: [Object],
    trailingIconClasses: [Object]
  },
  inject: ['mdcChipSet'],
  data() {
    return {
      classes: {
        'mdc-chip': true
      },
      styles: {},
      id: ''
    }
  },
  computed: {
    selected: {
      get() {
        return this.foundation.isSelected()
      },
      set(nv) {
        this.foundation.setSelected(nv)
      }
    },
    isFilter() {
      return this.mdcChipSet && this.mdcChipSet.filter
    },
    haveleadingIcon() {
      return !!this.leadingIcon || this.leadingIconClasses
    },
    havetrailingIcon() {
      return !!this.trailingIcon || this.trailingIconClasses
    },
    leadingClasses() {
      return Object.assign(
        {},
        {
          'material-icons': !!this.leadingIcon
        },
        this.leadingIconClasses
      )
    },
    trailingClasses() {
      return Object.assign(
        {},
        {
          'material-icons': !!this.trailingIcon
        },
        this.trailingIconClasses
      )
    }
  },

  created() {
    this.id = this.mdcChipSet.nextId()
  },
  mounted() {
    this.foundation = new MDCChipFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addClassToLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.add(className)
        }
      },
      removeClassFromLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.remove(className)
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      notifyInteraction: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.INTERACTION_EVENT,
          {
            chipId: this.id
          },
          true
        )
        this.mdcChipSet && this.mdcChipSet.handleInteraction
      },

      notifySelection: selected =>
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.SELECTION_EVENT,
          { chipId: this.id, selected: selected },
          true /* shouldBubble */
        ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT,
          {
            chipId: this.id
          },
          true
        )
      },
      notifyRemoval: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.REMOVAL_EVENT,
          { chipId: this.id, root: this.$el },
          true
        )
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
          : null
    })

    this.foundation.init()

    this.mdcChipSet.chips.push(this)

    this.ripple = new RippleBase(this, {
      computeBoundingRect: () => this.foundation.getDimensions()
    })
    this.ripple.init()
  },
  beforeDestroy() {
    this.ripple.destroy()
    this.foundation.destroy()
  },
  methods: {
    handleInteraction(evt) {
      this.foundation.handleInteraction(evt)
    },
    handleTransitionEnd(evt) {
      this.foundation.handleTransitionEnd(evt)
    },
    handleTrailingIconInteraction(evt) {
      this.foundation.handleTrailingIconInteraction(evt)
    },
    toggleSelected() {
      this.foundation.toggleSelected()
    },
    isSelected() {
      return this.foundation.isSelected()
    }
  }
}
</script>
