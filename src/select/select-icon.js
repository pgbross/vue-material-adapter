import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { emitCustomEvent } from '../base/index.js';

const { strings } = MDCSelectIconFoundation;

export default {
  name: 'select-icon',
  props: {
    icon: String,
  },
  setup(props, { emit, expose }) {
    const uiState = reactive({
      classes: {
        'material-icons': true,
        'mdc-select__icon': true,
      },
      styles: {},
      rootAttrs: {},
      rootListeners: {},
    });

    const root = ref();
    const foundation = ref();

    const adapter = {
      getAttr: attribute => uiState.rootAttrs[attribute],
      setAttr: (attribute, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value }),
      removeAttr: attribute => {
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: content => {
        uiState.root.textContent = content;
      },
      registerInteractionHandler: (eventType, handler) => {
        const lower = eventType.toLowerCase();

        uiState.rootListeners = {
          ...uiState.rootListeners,
          [`on${lower[0].toUpperCase()}${lower.slice(1)}`]: handler,
        };
      },
      deregisterInteractionHandler: eventType => {
        const lower = eventType.toLowerCase();

        const {
          [`on${lower[0].toUpperCase()}${lower.slice(1)}`]: removed,
          ...rest
        } = uiState.rootListeners;
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
      foundation.value = new MDCSelectIconFoundation(adapter);
      foundation.value.init();
    });

    onBeforeUnmount(() => {
      foundation.value.destroy();
    });

    expose({ foundation });

    return () => {
      return h(
        'i',
        {
          ref: root,
          class: uiState.classes,
          style: uiState.styles,
          ...uiState.rootAttrs,
          ...uiState.rootListeners,
        },
        [props.icon],
      );
    };
  },
};
