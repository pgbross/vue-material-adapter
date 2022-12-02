import { MDCDialogFoundation } from '@material/dialog/foundation.js';
import * as util from '@material/dialog/util.js';
import { FocusTrap } from '@material/dom/focus-trap.js';
import { closest, matches } from '@material/dom/ponyfill.js';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { mcwButton } from '../button/index.js';

const { cssClasses, strings } = MDCDialogFoundation;
const LAYOUT_EVENTS = ['resize', 'orientationchange'];

const getInitialFocusElement_ = element => {
  if (!element) {
    return;
  }
  const focusTrue = element.querySelector(
    `[${strings.INITIAL_FOCUS_ATTRIBUTE}="true"]`,
  );

  if (focusTrue) {
    return focusTrue;
  }
  return element.querySelector(`[${strings.INITIAL_FOCUS_ATTRIBUTE}]`);
};

const focusTrapFactory_ = (element, options) => new FocusTrap(element, options);

export default {
  name: 'mcw-dialog',
  components: {
    mcwButton: mcwButton,
  },

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
      container: undefined,
      root: undefined,
    });

    let foundation;
    let content_;
    let buttons_;
    let focusTrap;
    let defaultButton;

    const handleLayout = () => {
      foundation.layout();
    };

    const handleDocumentKeyDown = event_ => {
      foundation.handleDocumentKeydown(event_);
    };

    const onClick = event_ => {
      foundation.handleClick(event_);
    };

    const onKeydown = event_ => {
      foundation.handleKeydown(event_);
    };

    const onOpen = nv => {
      if (nv) {
        if (uiState.container) {
          focusTrap = util.createFocusTrapInstance(
            uiState.root,
            focusTrapFactory_,
            getInitialFocusElement_(uiState.root) || void 0,
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
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => uiState.root.classList.contains(className),

      addBodyClass: className => document.body.classList.add(className),

      removeBodyClass: className => document.body.classList.remove(className),

      eventTargetMatches: (target, selector) => matches(target, selector),

      trapFocus: () => focusTrap?.trapFocus(),

      releaseFocus: () => focusTrap?.releaseFocus(),

      getInitialFocusEl: () => getInitialFocusElement_(uiState.root),

      isContentScrollable: () => util.isScrollable(content_),

      areButtonsStacked: () => util.areTopsMisaligned(buttons_),

      getActionFromEvent: event => {
        const element = closest(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
        return element?.getAttribute(strings.ACTION_ATTRIBUTE);
      },

      clickDefaultButton: () => {
        if (defaultButton && !defaultButton.disabled) {
          defaultButton.click();
        }
      },

      reverseButtons: () => {
        const buttons = buttons_;
        return (
          buttons &&
          buttons
            .reverse()
            // eslint-disable-next-line unicorn/no-array-for-each
            .forEach(button => button.parentElement?.appendChild(button))
        );
      },
      notifyOpening: () => {
        emit('mdcdialog:opening', {});
        for (const event_ of LAYOUT_EVENTS)
          window.addEventListener(event_, handleLayout);
        document.addEventListener('keydown', handleDocumentKeyDown);
      },

      notifyOpened: () => emit('mdcdialog:opened', {}),

      notifyClosing: action => {
        emit('update:modelValue', false);
        emit('mdcdialog:closing', action ? { action } : {});

        for (const event_ of LAYOUT_EVENTS)
          window.removeEventListener(event_, handleLayout);
        document.removeEventListener('keydown', handleDocumentKeyDown);
      },

      notifyClosed: action => {
        emit('mdcdialog:closed', action ? { action } : {});
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

      buttons_ = Array.prototype.slice.call(
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
