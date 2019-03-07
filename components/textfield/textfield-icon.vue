<script>
import MDCTextfieldIconFoundation from '@material/textfield/icon/foundation.js'
import { emitCustomEvent } from '../base'

export default {
  name: 'textfield-icon',
  functional: true,
  props: {
    disabled: Boolean
  },

  mounted() {
    this.foundation = new MDCTextfieldIconFoundation(
      Object.assign({
        getAttr: attr => this.$el.getAttribute(attr),
        setAttr: (attr, value) => this.$el.setAttribute(attr, value),
        removeAttr: attr => this.$el.removeAttribute(attr),
        setContent: content => {
          this.$el.textContent = content
        },
        registerInteractionHandler: (evtType, handler) =>
          this.$el.addEventListener(evtType, handler),
        deregisterInteractionHandler: (evtType, handler) =>
          this.$el.removeEventListener(evtType, handler),
        notifyIconAction: () => {
          this.$emit('click')
          emitCustomEvent(
            this.$el,
            MDCTextfieldIconFoundation.strings.ICON_EVENT,
            {},
            true /* shouldBubble  */
          )
        }
      })
    )

    this.foundation.init()
  },

  render(h, context) {
    const node = context.children[0]
    node.data.class = 'mdc-text-field__icon'
    return node
  },

  beforeDestroy() {
    this.foundation.destroy()
  }
}
</script>
