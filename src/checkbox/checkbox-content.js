import { MDCFormFieldFoundation } from '@material/form-field/foundation.js';
import { computed, h, onBeforeUnmount, onMounted, ref } from 'vue';

export default {
  props: {
    activate: Function,
    deactivate: Function,
    alignEnd: Boolean,
    checkboxId: String,
  },
  inheritAttrs: false,
  setup(props, { slots }) {
    const labelElement = ref();

    let formField;

    const hasLabel = !!slots.label;

    const formFieldClasses = computed(() => {
      return {
        'mdc-form-field': hasLabel,
        'mdc-form-field--align-end': hasLabel && props.alignEnd,
      };
    });

    onMounted(() => {
      if (props.hasLabel) {
        formField = new MDCFormFieldFoundation({
          registerInteractionHandler: (type, handler) => {
            labelElement.value.addEventListener(type, handler);
          },
          deregisterInteractionHandler: (type, handler) => {
            labelElement.value.removeEventListener(type, handler);
          },
          activateInputRipple: () => {
            props?.activate();
          },
          deactivateInputRipple: () => {
            props?.deactivate();
          },
        });
        formField.init();
      }
    });

    onBeforeUnmount(() => {
      formField?.destroy();
    });

    return () => {
      if (hasLabel) {
        return h(
          'div',
          { class: { 'mdc-checkbox-wrapper': 1, ...formFieldClasses.value } },
          [
            slots.default?.(),
            h(
              'label',
              {
                for: props.checkboxId,
                ref: labelElement,
              },
              [slots.label?.()],
            ),
          ],
        );
      }

      return slots.default();
    };
  },
};
