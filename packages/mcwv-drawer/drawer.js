import * as util from '@material/drawer/util';
import MDCDismissibleDrawerFoundation from '@material/drawer/dismissible/foundation';
import MDCModalDrawerFoundation from '@material/drawer/modal/foundation';
import MDCListFoundation from '@material/list/foundation';

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
  },
  provide() {
    return { mcwDrawer: this };
  },
  data() {
    return {
      classes: {
        'mdc-drawer': 1,
        'mdc-drawer--modal': 1,
      },
    };
  },

  computed: {
    type() {},
    isModal() {
      return this.modal;
    },
  },
  watch: {
    open: 'onOpen_',
  },
  mounted() {
    this.drawer_ = this.$refs.drawer;

    const listEl = this.$el.querySelector(
      `.${MDCListFoundation.cssClasses.ROOT}`,
    );
    if (listEl) {
      this.list_ = listEl;
      this.list_.wrapFocus = true;
    }

    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.drawer_.classList.contains(className),
      elementHasClass: (element, className) =>
        element.classList.contains(className),
      saveFocus: () => {
        this.previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        const previousFocus = this.previousFocus_ && this.previousFocus_.focus;
        if (this.drawer_.contains(document.activeElement) && previousFocus) {
          this.previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = this.drawer_.querySelector(
          `.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`,
        );
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        this.$emit('change', false);
        this.$emit('close');
      },
      notifyOpen: () => {
        this.$emit('change', true);
        this.$emit('open');
      },
      trapFocus: () => this.focusTrap_.activate(),
      releaseFocus: () => this.focusTrap_.deactivate(),
    };

    const { DISMISSIBLE, MODAL } = MDCDismissibleDrawerFoundation.cssClasses;
    if (this.drawer_.classList.contains(DISMISSIBLE)) {
      this.foundation = new MDCDismissibleDrawerFoundation(adapter);
    } else if (this.drawer_.classList.contains(MODAL)) {
      this.foundation = new MDCModalDrawerFoundation(adapter);
    } else {
      throw new Error(
        `mcwDrawer: Failed to instantiate component. Supported variants are ${DISMISSIBLE} and ${MODAL}.`,
      );
    }
    this.foundation && this.foundation.init();
    this.initialSyncWithDOM();

    if (this.toggleOn) {
      this.toggleOnEventSource = this.toggleOnSource || this.$root;
      this.toggleOnEventSource.$on(this.toggleOn, this.toggle);
    }
    if (this.openOn) {
      this.openOnEventSource = this.openOnSource || this.$root;
      this.openOnEventSource.$on(this.openOn, this.show);
    }
    if (this.closeOn) {
      this.closeOnEventSource = this.closeOnSource || this.$root;
      this.closeOnEventSource.$on(this.closeOn, this.close);
    }
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.foundation = null;

    if (this.toggleOnEventSource) {
      this.toggleOnEventSource.$off(this.toggleOn, this.toggle);
    }
    if (this.openOnEventSource) {
      this.openOnEventSource.$off(this.openOn, this.show);
    }
    if (this.closeOnEventSource) {
      this.closeOnEventSource.$off(this.closeOn, this.close);
    }
  },
  methods: {
    initialSyncWithDOM() {
      const { MODAL } = MDCDismissibleDrawerFoundation.cssClasses;

      if (this.drawer_.classList.contains(MODAL)) {
        const { SCRIM_SELECTOR } = MDCDismissibleDrawerFoundation.strings;
        this.scrim_ = this.drawer_.parentElement.querySelector(SCRIM_SELECTOR);
        this.handleScrimClick_ = () => this.foundation.handleScrimClick();
        this.scrim_.addEventListener('click', this.handleScrimClick_);
        this.focusTrap_ = util.createFocusTrapInstance(
          this.drawer_,
          this.focusTrapFactory_,
        );
      }

      this.handleKeydown_ = evt => this.foundation.handleKeydown(evt);
      this.handleTransitionEnd_ = evt =>
        this.foundation.handleTransitionEnd(evt);

      this.$el.addEventListener('keydown', this.handleKeydown_);
      this.$el.addEventListener('transitionend', this.handleTransitionEnd_);
    },
    onOpen_(value) {
      if (this.open) {
        this.foundation && this.foundation.open();
      } else {
        this.foundation && this.foundation.close();
      }
    },
    onChange(event) {
      this.$emit('change', event);
      this.$root.$emit('vma:layout');
    },
    show() {
      this.foundation.open();
    },
    close() {
      this.foundation.close();
    },
    toggle() {
      this.foundation.isOpen()
        ? this.foundation.close()
        : this.foundation.open();
    },
    isOpen() {
      return this.foundation.isOpen();
    },
    refreshMedia() {
      // this.small = media.small.matches
      // this.large = media.large.matches
      // if (this.isResponsive) {
      //   if (this.large) {
      //     this.show()
      //   } else {
      //     this.close()
      //   }
      // }
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const asideNodes = [
      createElement(
        'div',
        { class: { 'mdc-drawer__content': 1 } },
        scopedSlots.default && scopedSlots.default(),
      ),
    ];

    const headerSlot = scopedSlots.header && scopedSlots.header();
    if (headerSlot) {
      asideNodes.unshift(headerSlot);
    }
    const asideElement = createElement(
      'aside',
      {
        class: this.classes,
        ref: 'drawer',
      },
      asideNodes,
    );

    const nodes = [
      asideElement,
      createElement('div', { class: { 'mdc-drawer-scrim': 1 } }),
    ];

    if (this.toolbarSpacer) {
      nodes.push(
        createElement('div', { class: { 'mdc-top-app-bar--fixed-adjust': 1 } }),
      );
    }
    return createElement('div', {}, nodes);
  },
};
