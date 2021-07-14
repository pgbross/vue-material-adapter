import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { computed, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';
import { emitCustomEvent } from '../base/index.js';

const { strings } = MDCSelectIconFoundation;

export default {
  name: 'select-icon',
  props: {
    icon: String,
  },
  setup(props, { emit, attrs }) {
    const uiState = reactive({
      classes: {
        'material-icons': true,
        'mdc-select__icon': true,
      },
      styles: {},
      root: undefined,
      rootAttrs: {},
      rootListeners: {},
      foundation: {},
    });

    const listeners = computed(() => {
      return { ...attrs, ...uiState.rootListeners };
    });

    const adapter = {
      getAttr: attribute => uiState.rootAttrs[attribute],
      setAttr: (attribute, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value }),
      removeAttr: attribute => {
        // eslint-disable-next-line no-unused-vars
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: content => {
        uiState.root.textContent = content;
      },
      registerInteractionHandler: (eventType, handler) =>
        (uiState.rootListeners = {
          ...uiState.rootListeners,
          [eventType.toLowerCase()]: handler,
        }),
      deregisterInteractionHandler: eventType => {
        // eslint-disable-next-line no-unused-vars
        const { [eventType]: removed, ...rest } = uiState.rootListeners;
        uiState.rootListeners = rest;
      },
      notifyIconAction: () => {
        emit('click');

        emitCustomEvent(
          uiState.root,
          strings.ICON_EVENT,
          {},
          true /* shouldBubble  */,
        );
      },
    };

    onMounted(() => {
      uiState.foundation = new MDCSelectIconFoundation(adapter);
      uiState.foundation.init();
    });

    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });

    return { ...toRefs(uiState), listeners };
  },
};
