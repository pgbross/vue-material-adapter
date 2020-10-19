import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { computed, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';
import { emitCustomEvent } from '~/base/index.js';

export default {
  name: 'select-icon',
  props: {
    icon: String,
  },
  setup(props, { emit, listeners: $listeners }) {
    const uiState = reactive({
      classes: {
        'material-icons': true,
        'mdc-select__icon': true,
      },
      styles: {},
      root: null,
      rootAttrs: {},
      rootListeners: {},
    });

    let foundation;
    const listeners = computed(() => {
      return { ...$listeners, ...uiState.rootListeners };
    });

    const adapter = {
      getAttr: attr => uiState.rootAttrs[attr],
      setAttr: (attr, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attr]: value }),
      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const { [attr]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: content => {
        uiState.root.textContent = content;
      },
      registerInteractionHandler: (evtType, handler) =>
        (uiState.rootListeners = {
          ...uiState.rootListeners,
          [evtType]: handler,
        }),
      deregisterInteractionHandler: (evtType, handler) => {
        // eslint-disable-next-line no-unused-vars
        const { [evtType]: removed, ...rest } = uiState.rootListeners;
        uiState.rootListeners = rest;
      },
      notifyIconAction: () => {
        emit('click');

        emitCustomEvent(
          uiState.root,
          MDCSelectIconFoundation.strings.ICON_EVENT,
          {},
          true /* shouldBubble  */,
        );
      },
    };

    onMounted(() => {
      foundation = new MDCSelectIconFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return { ...toRefs(uiState), listeners };
  },
};
