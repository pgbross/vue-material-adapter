<template>
  <p ref="helptextEl" :class="classes" aria-hidden="true"><slot /></p>
</template>

<script>
import MDCSelectHelperTextFoundation from '@material/select/helper-text/foundation.js'

export default {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean
  },
  data() {
    return {
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': this.helptextPersistent,
        'mdc-select-helper-text--validation-msg': this.helptextValidation
      }
    }
  },
  watch: {
    helptextPersistent() {
      this.foundation.setPersistent(this.helptextPersistent)
    },
    helptextValidation() {
      this.foundation.setValidation(this.helptextValidation)
    }
  },
  mounted() {
    this.foundation = new MDCSelectHelperTextFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      hasClass: className => Boolean(this.classes[className]),

      setAttr: (attr, value) => {
        this.$el.setAttribute(attr, value)
      },
      removeAttr: attr => {
        this.$el.removeAttribute(attr)
      },

      setContent: (/*content*/) => {
        // help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      }
    })

    this.foundation.init()
  },

  beforeDestroy() {
    this.foundation.destroy()
  }
}
</script>
