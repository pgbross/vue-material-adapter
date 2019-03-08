<template>
  <custom-link
    :class="classes"
    :style="styles"
    :link="link"
    class="mdc-tab"
    @click="handleClick"
    role="tab"
    aria-selected="false"
    tabindex="-1"
  >
    <span ref="content" class="mdc-tab__content">
      <i
        v-if="!!hasIcon"
        ref="icon"
        :class="hasIcon.classes"
        tabindex="0"
        class="mdc-tab__icon"
        aria-hidden="true"
      >
        <slot name="icon">{{ hasIcon.content }}</slot>
      </i>

      <span v-if="hasText" class="mdc-tab__text-label"> <slot /> </span>
    </span>

    <mdc-tab-indicator ref="tabIndicator"></mdc-tab-indicator>
    <mdc-tab-ripple></mdc-tab-ripple>
  </custom-link>
</template>

<script>
import MDCTabFoundation from '@material/tab/foundation';
import {
  CustomLinkMixin,
  DispatchEventMixin,
  emitCustomEvent,
  extractIconProp,
  VMAUniqueIdMixin,
} from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-tab',
  mixins: [CustomLinkMixin, DispatchEventMixin, VMAUniqueIdMixin],
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    stacked: Boolean,
    minWidth: Boolean,
  },
  data() {
    return {
      classes: {
        'mdc-tab--stacked': this.stacked,
        'mdc-tab--min-width': this.minWidth,
      },
      styles: {},
    };
  },

  inject: ['mdcTabBar'],
  computed: {
    hasIcon() {
      if (this.icon || this.$slots.icon) {
        return this.icon ? extractIconProp(this.icon) : {};
      }
      return false;
    },
    hasText() {
      return !!this.$slots.default;
    },
  },
  watch: {
    active(value) {},
  },
  mounted() {
    this.id = this.vma_uid_;
    this.foundation = new MDCTabFoundation({
      setAttr: (attr, value) => this.$el.setAttribute(attr, value),
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      activateIndicator: previousIndicatorClientRect => {
        this.$refs.tabIndicator.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: () => {
        this.$refs.tabIndicator.deactivate();
      },
      notifyInteracted: () =>
        emitCustomEvent(
          this.$el,
          MDCTabFoundation.strings.INTERACTED_EVENT,
          { tabId: this.id },
          true /* bubble */,
        ),
      getOffsetLeft: () => this.$el.offsetLeft,
      getOffsetWidth: () => this.$el.offsetWidth,
      getContentOffsetLeft: () => this.$refs.content.offsetLeft,
      getContentOffsetWidth: () => this.$refs.content.offsetWidth,
      focus: () => this.$el.focus(),
    });
    this.foundation.init();

    // console.log('tab mounted')

    this.mdcTabBar.tabList.push(this);

    // this.setActive(this.active)
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    activate(computeIndicatorClientRect) {
      this.foundation.activate(computeIndicatorClientRect);
    },

    deactivate() {
      this.foundation.deactivate();
    },
    handleClick(evt) {
      this.foundation.handleClick(evt);
    },
    isActive() {
      return this.foundation.isActive();
    },
    setActive(isActive) {
      if (isActive) {
        this.$set(this.classes, 'mdc-tab--active', true),
          this.$refs.tabIndicator.activate();
      }
    },
    computeIndicatorClientRect() {
      return this.$refs.tabIndicator.computeContentClientRect();
    },

    computeDimensions() {
      return this.foundation.computeDimensions();
    },

    focus() {
      this.$el.focus();
    },
  },
};
</script>
