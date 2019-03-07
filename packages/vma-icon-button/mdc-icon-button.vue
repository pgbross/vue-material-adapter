<template>
  <a
    :class="classes"
    :style="styles"
    class="mdc-icon-button material-icons"
    @click="onClick"
    v-if="isLink"
    v-bind="$attrs"
    aria-pressed="false"
  >
    <slot />
  </a>
  <button
    :class="classes"
    :style="styles"
    class="mdc-icon-button material-icons"
    @click="onClick"
    v-bind="$attrs"
    aria-pressed="false"
    v-else
  >
    <slot />
  </button>
</template>

<script>
import MDCIconButtonToggleFoundation from '@material/icon-button/foundation';
import { RippleBase } from '@vma/ripple';

export default {
  name: 'mdc-icon-button',
  model: {
    prop: 'isOn',
    event: 'change',
  },
  props: {
    isOn: Boolean,
  },
  data() {
    return {
      classes: {},
      styles: {},
    };
  },

  watch: {
    isOn: 'onOn_',
  },
  mounted() {
    this.foundation = new MDCIconButtonToggleFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => Boolean(this.classes[className]),
      setAttr: (attrName, attrValue) =>
        this.$el.setAttribute(attrName, attrValue),
      notifyChange: evtData => {
        this.$emit(MDCIconButtonToggleFoundation.strings.CHANGE_EVENT, evtData);

        this.$emit('change', evtData.isOn);
      },
    });
    this.foundation.init();

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
    });
    this.ripple.init();

    this.foundation.toggle(this.isOn);
  },

  beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
  methods: {
    onOn_(isOn) {
      if (this.isOn !== isOn) {
        this.foundation.toggle(isOn);
      }
    },

    onClick(evt) {
      this.foundation.handleClick(evt);
    },
  },

  computed: {
    isLink() {
      return this.$el && Boolean(this.$el.getAttribute('href'));
    },
  },
};
</script>
