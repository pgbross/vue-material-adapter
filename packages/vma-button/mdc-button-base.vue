<template>
  <custom-button
    ref="root"
    :class="classes"
    :style="styles"
    :href="href"
    :link="link"
    :disabled="disabled"
    v-on="listeners"
  >
    <span class="mdc-button__label"> <slot /> </span>
  </custom-button>
</template>

<script>
import { DispatchEventMixin, CustomButtonMixin } from '@vma/base'
import { RippleMixin } from '@vma/ripple'

export default {
  name: 'mdc-button-base',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  data() {
    return {
      classes: {},
      styles: {}
    }
  }
}
</script>
