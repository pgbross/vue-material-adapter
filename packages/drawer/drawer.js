import { FocusTrap } from '@material/dom/focus-trap';
import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation';
import { MDCModalDrawerFoundation } from '@material/drawer/modal/foundation';
import * as util from '@material/drawer/util';
import { MDCListFoundation } from '@material/list/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';
import { emitCustomEvent } from '~/base/index.js';

const { strings } = MDCDismissibleDrawerFoundation;

export default {
  name: 'mcw-drawer',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    modal: Boolean,
    dismissable: Boolean,
    open: Boolean,
    toolbarSpacer: Boolean,
    toggleOn: String,
    toggleOnSource: {
      type: Object,
      required: false,
    },
    openOn: String,
    openOnSource: {
      type: Object,
      required: false,
    },
    closeOn: String,
    closeOnSource: {
      type: Object,
      required: false,
    },
  },

  setup(props, { emit, root: $root }) {
    const uiState = reactive({
      classes: {
        'mdc-drawer': 1,
        'mdc-drawer--modal': props.modal,
        'mdc-drawer--dismissible': props.dismissable && !props.modal,
      },
      root: null,
      drawer: null,
      scrim: null,
    });

    const focusTrapFactory_ = el => new FocusTrap(el);

    const show = () => foundation.open();
    const close = () => foundation.close();
    const toggle = () =>
      foundation.isOpen() ? foundation.close() : foundation.open();

    const isOpen = () => foundation.isOpen();

    let foundation;
    let focusTrap_;
    let previousFocus_;

    const handleScrimClick = () => foundation.handleScrimClick();
    const handleKeydown = evt => foundation.handleKeydown(evt);
    const handleTransitionEnd = evt => foundation.handleTransitionEnd(evt);

    const onChange = event => {
      emit('change', event);
      $root.$emit('vma:layout');
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
        const activeNavItemEl = uiState.drawer.querySelector(
          `.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`,
        );
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        emitCustomEvent(
          uiState.drawer,
          strings.CLOSE_EVENT,
          {},
          true /* shouldBubble */,
        );
        emit('change', false);
        emit('close');
      },
      notifyOpen: () => {
        emitCustomEvent(
          uiState.drawer,
          strings.OPEN_EVENT,
          {},
          true /* shouldBubble */,
        );
        emit('change', true);
        emit('open');
      },
      trapFocus: () => focusTrap_.trapFocus(),
      releaseFocus: () => focusTrap_.releaseFocus(),
    };

    watch(
      () => props.open,
      nv => {
        if (nv) {
          foundation?.open();
        } else {
          foundation?.close();
        }
      },
    );

    onMounted(() => {
      const { DISMISSIBLE, MODAL } = MDCDismissibleDrawerFoundation.cssClasses;
      if (props.dismissable) {
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

      if (props.toggleOn) {
        props.toggleOnEventSource = props.toggleOnSource || $root;
        props.toggleOnEventSource.$on(props.toggleOn, props.toggle);
      }
      if (props.openOn) {
        props.openOnEventSource = props.openOnSource || $root;
        props.openOnEventSource.$on(props.openOn, props.show);
      }
      if (props.closeOn) {
        props.closeOnEventSource = props.closeOnSource || $root;
        props.closeOnEventSource.$on(props.closeOn, props.close);
      }
    });

    onBeforeUnmount(() => {
      foundation.close();
      foundation.destroy();

      foundation = null;

      if (props.toggleOnEventSource) {
        props.toggleOnEventSource.$off(props.toggleOn, props.toggle);
      }
      if (props.openOnEventSource) {
        props.openOnEventSource.$off(props.openOn, props.show);
      }
      if (props.closeOnEventSource) {
        props.closeOnEventSource.$off(props.closeOn, props.close);
      }
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
