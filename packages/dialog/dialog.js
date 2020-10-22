import { MDCDialogFoundation } from '@material/dialog/foundation';
import * as util from '@material/dialog/util';
import { FocusTrap } from '@material/dom/focus-trap.js';
import { closest, matches } from '@material/dom/ponyfill.js';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { mcwButton } from '~/button/index.js';

const { cssClasses, strings } = MDCDialogFoundation;
const LAYOUT_EVENTS = ['resize', 'orientationchange'];

export default {
  name: 'mcw-dialog',
  components: {
    mcwButton: mcwButton,
  },
  // model: {
  //   prop: 'open',
  //   event: 'change',
  // },
  props: {
    autoStackButtons: Boolean,
    escapeKeyAction: String,
    scrollable: Boolean,
    modelValue: Boolean,
    role: String,
    scrimClickAction: { type: String, default: 'close' },
    tag: { type: String, default: 'div' },
    ariaLabelledby: String,
    ariaDescribedby: String,
  },

  setup(props, { emit }) {
    const uiState = reactive({
      classes: { 'mdc-dialog': 1 },
      styles: {},
      container: null,
      root: null,
    });

    let foundation;
    let content_;
    let buttons_;
    let focusTrap;
    let defaultButton;

    const focusTrapFactory_ = el => new FocusTrap(el);

    const handleLayout = () => {
      foundation.layout();
    };

    const handleDocumentKeyDown = e => {
      foundation.handleDocumentKeydown(e);
    };

    const getInitialFocusEl_ = () => {
      return document.querySelector(
        `[${MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE}]`,
      );
    };

    const onClick = evt => {
      foundation.handleClick(evt);
    };

    const onKeydown = evt => {
      foundation.handleKeydown(evt);
    };

    const onOpen = nv => {
      if (nv) {
        if (uiState.container) {
          focusTrap = util.createFocusTrapInstance(
            uiState.root,
            focusTrapFactory_,
            getInitialFocusEl_() || void 0,
          );
        }
        foundation.open();
      } else {
        foundation.close();
      }
    };

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => uiState.root.classList.contains(className),
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetMatches: (target, selector) => matches(target, selector),
      trapFocus: initialFocusEl => focusTrap?.trapFocus(),
      releaseFocus: () => focusTrap?.releaseFocus(),
      getInitialFocusEl: () => getInitialFocusEl_(),
      isContentScrollable: () => util.isScrollable(content_),
      areButtonsStacked: () => util.areTopsMisaligned(buttons_),

      getActionFromEvent: event => {
        const elem = closest(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
        return elem?.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: () => {
        defaultButton?.click();
      },
      reverseButtons: () => {
        const buttons = buttons_;
        return (
          buttons &&
          buttons
            .reverse()
            .forEach(button => button.parentElement?.appendChild(button))
        );
      },
      notifyOpening: () => {
        emit('mcw-dialog-opening', {});
        LAYOUT_EVENTS.forEach(evt =>
          window.addEventListener(evt, handleLayout),
        );
        document.addEventListener('keydown', handleDocumentKeyDown);
      },
      notifyOpened: () => emit('mcw-dialog-opened', {}),
      notifyClosing: action => {
        emit('update:modelValue', false);
        emit('mcw-dialog-closing', action ? { action } : {});

        LAYOUT_EVENTS.forEach(evt =>
          window.removeEventListener(evt, handleLayout),
        );
        document.removeEventListener('keydown', handleDocumentKeyDown);
      },
      notifyClosed: action => {
        emit('mcw-dialog-closed', action ? { action } : {});
      },
    };

    watch(
      () => props.modelValue,
      nv => {
        onOpen(nv);
      },
    );

    onMounted(() => {
      const {
        modelValue,
        autoStackButtons,
        escapeKeyAction,
        scrimClickAction,
      } = props;

      buttons_ = [].slice.call(
        uiState.root.querySelectorAll(cssClasses.BUTTON),
      );
      defaultButton = uiState.root.querySelector(
        `[${strings.BUTTON_DEFAULT_ATTRIBUTE}]`,
      );

      const container = uiState.root.querySelector(strings.CONTAINER_SELECTOR);
      if (!container) {
        throw new Error(
          `Dialog component requires a ${strings.CONTAINER_SELECTOR} container element`,
        );
      }

      content_ = uiState.root.querySelector(strings.CONTENT_SELECTOR);

      foundation = new MDCDialogFoundation(adapter);

      foundation.init();

      if (!autoStackButtons) {
        foundation.setAutoStackButtons(autoStackButtons);
      }

      if (typeof escapeKeyAction === 'string') {
        // set even if empty string
        foundation.setEscapeKeyAction(escapeKeyAction);
      }

      if (typeof scrimClickAction === 'string') {
        // set even if empty string
        foundation.setScrimClickAction(scrimClickAction);
      }
      onOpen(modelValue);
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      handleLayout,
      handleDocumentKeyDown,
      onKeydown,
      onClick,
    };
  },
};
