import { FocusTrap } from '@material/dom/focus-trap.js';
import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation.js';
import { MDCModalDrawerFoundation } from '@material/drawer/modal/foundation.js';
import * as util from '@material/drawer/util.js';
import { MDCListFoundation } from '@material/list/foundation.js';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { emitCustomEvent } from '../base/index.js';
const { strings, cssClasses } = MDCDismissibleDrawerFoundation;

const focusTrapFactory_ = (element, options) => new FocusTrap(element, options);

export default {
  name: 'mcw-drawer',

  props: {
    modelValue: Boolean,
    modal: Boolean,
    dismissible: Boolean,
    toolbarSpacer: Boolean,
  },

  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-drawer': 1,
        'mdc-drawer--modal': props.modal,
        'mdc-drawer--dismissible': props.dismissible && !props.modal,
      },
      drawer: undefined,
    });

    const show = () => foundation.open();
    const close = () => foundation.close();
    const toggle = () =>
      foundation.isOpen() ? foundation.close() : foundation.open();

    const isOpen = () => foundation.isOpen();

    let foundation;
    let focusTrap_;
    let previousFocus_;

    const handleScrimClick = () => foundation.handleScrimClick();
    const handleKeydown = event_ => foundation.handleKeydown(event_);
    const handleTransitionEnd = event_ =>
      foundation.handleTransitionEnd(event_);

    const onChange = event => {
      emit('update:modelValue', event);
    };

    const onListAction = () => props.modal && close();

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => !!uiState.classes[className],
      elementHasClass: (element, className) =>
        element.classList.contains(className),
      saveFocus: () => {
        previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        const previousFocus = previousFocus_?.focus;
        if (previousFocus && uiState.drawer.contains(document.activeElement)) {
          previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemElement = uiState.drawer.querySelector(
          `.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`,
        );
        if (activeNavItemElement) {
          activeNavItemElement.focus();
        }
      },
      notifyClose: () => {
        emitCustomEvent(
          uiState.drawer,
          strings.CLOSE_EVENT,
          {},
          true /* shouldBubble */,
        );
        emit('update:modelValue', false);
        emit('close');
      },
      notifyOpen: () => {
        emitCustomEvent(
          uiState.drawer,
          strings.OPEN_EVENT,
          {},
          true /* shouldBubble */,
        );
        emit('update:modelValue', true);
        emit('open');
      },
      trapFocus: () => focusTrap_.trapFocus(),
      releaseFocus: () => focusTrap_.releaseFocus(),
    };

    watch(
      () => props.modelValue,
      nv => {
        if (nv) {
          foundation?.open();
        } else {
          foundation?.close();
        }
      },
    );

    onMounted(() => {
      const { DISMISSIBLE, MODAL } = cssClasses;
      if (props.dismissible) {
        foundation = new MDCDismissibleDrawerFoundation(adapter);
      } else if (props.modal) {
        foundation = new MDCModalDrawerFoundation(adapter);
      } else {
        throw new Error(
          `mcwDrawer: Failed to instantiate component. Supported variants are ${DISMISSIBLE} and ${MODAL}.`,
        );
      }
      foundation.init();

      if (props.modal) {
        focusTrap_ = util.createFocusTrapInstance(
          uiState.drawer,
          focusTrapFactory_,
        );
      }
    });

    onBeforeUnmount(() => {
      foundation.close();
      foundation.destroy();

      foundation = undefined;
    });

    return {
      ...toRefs(uiState),
      onChange,
      show,
      close,
      toggle,
      isOpen,
      onListAction,
      handleScrimClick,
      handleKeydown,
      handleTransitionEnd,
    };
  },
};
