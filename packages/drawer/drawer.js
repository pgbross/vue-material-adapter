import { FocusTrap } from '@material/dom/focus-trap';
import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation';
import { MDCModalDrawerFoundation } from '@material/drawer/modal/foundation';
import * as util from '@material/drawer/util';
import { MDCListFoundation } from '@material/list/foundation';
import {
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';

export default {
  name: 'mcw-drawer',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    modal: Boolean,
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
    modalClose: { type: Boolean, default: () => true },
  },

  setup(props, { emit, root: $root }) {
    const uiState = reactive({
      classes: {
        'mdc-drawer': 1,
        'mdc-drawer--modal': 1,
      },
      root: null,
      drawer: null,
    });

    const focusTrapFactory_ = el => new FocusTrap(el);

    const show = () => foundation.open();
    const close = () => foundation.close();
    const toggle = () =>
      foundation.isOpen() ? foundation.close() : foundation.open();
    const isOpen = () => foundation.isOpen();

    provide('mcwDrawer', { isModal: props.modal, close });

    let foundation;
    let focusTrap_;
    let list_;
    let previousFocus_;

    const initialSyncWithDOM = () => {
      const { MODAL } = MDCDismissibleDrawerFoundation.cssClasses;

      if (uiState.drawer.classList.contains(MODAL)) {
        const { SCRIM_SELECTOR } = MDCDismissibleDrawerFoundation.strings;
        const scrim_ = uiState.drawer.parentElement.querySelector(
          SCRIM_SELECTOR,
        );
        const handleScrimClick_ = () => foundation.handleScrimClick();
        scrim_.addEventListener('click', handleScrimClick_);
        focusTrap_ = util.createFocusTrapInstance(
          uiState.drawer,
          focusTrapFactory_,
        );
      }

      const handleKeydown_ = evt => foundation.handleKeydown(evt);
      const handleTransitionEnd_ = evt => foundation.handleTransitionEnd(evt);

      uiState.root.addEventListener('keydown', handleKeydown_);
      uiState.root.addEventListener('transitionend', handleTransitionEnd_);
    };

    const onOpen_ = value => {
      if (props.open) {
        foundation?.open();
      } else {
        foundation?.close();
      }
    };

    const onChange = event => {
      emit('change', event);
      $root.$emit('vma:layout');
    };

    const onListAction = () => {
      props.modal && props.modalClose && close();
    };

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => uiState.drawer.classList.contains(className),
      elementHasClass: (element, className) =>
        element.classList.contains(className),
      saveFocus: () => {
        previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        const previousFocus = previousFocus_?.focus;
        if (uiState.drawer.contains(document.activeElement) && previousFocus) {
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
        emit('change', false);
        emit('close');
      },
      notifyOpen: () => {
        emit('change', true);
        emit('open');
      },
      trapFocus: () => focusTrap_.trapFocus(),
      releaseFocus: () => focusTrap_.releaseFocus(),
    };

    watch(
      () => props.open,
      nv => onOpen_(nv),
    );

    onMounted(() => {
      const listEl = uiState.root.querySelector(
        `.${MDCListFoundation.cssClasses.ROOT}`,
      );
      if (listEl) {
        list_ = listEl;
        list_.wrapFocus = true;
      }

      const { DISMISSIBLE, MODAL } = MDCDismissibleDrawerFoundation.cssClasses;
      if (uiState.drawer.classList.contains(DISMISSIBLE)) {
        foundation = new MDCDismissibleDrawerFoundation(adapter);
      } else if (uiState.drawer.classList.contains(MODAL)) {
        foundation = new MDCModalDrawerFoundation(adapter);
      } else {
        throw new Error(
          `mcwDrawer: Failed to instantiate component. Supported variants are ${DISMISSIBLE} and ${MODAL}.`,
        );
      }
      foundation?.init();
      initialSyncWithDOM();

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
    };
  },
};
