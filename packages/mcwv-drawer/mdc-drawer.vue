<template>
  <div>
    <aside ref="drawer" :class="classes" class="mdc-drawer mdc-drawer--modal">
      <slot v-if="$slots['header']" name="header"></slot>
      <!-- <div v-if="$slots['header']" class="mdc-drawer__header"><</div> -->
      <div class="mdc-drawer__content"><slot></slot></div>
    </aside>
    <div class="mdc-drawer-scrim"></div>

    <div v-if="toolbarSpacer" class="mdc-top-app-bar--fixed-adjust" />
  </div>
</template>

<script>
import MDCDismissibleDrawerFoundation from '@material/drawer/dismissible/foundation';
import MDCModalDrawerFoundation from '@material/drawer/modal/foundation';
import { MDCList } from '@material/list/index';
import MDCListFoundation from '@material/list/foundation';
import createFocusTrap from 'focus-trap';

const media = new class {
  get small() {
    return (
      this._small || (this._small = window.matchMedia('(max-width: 839px)'))
    );
  }

  get large() {
    return (
      this._large || (this._large = window.matchMedia('(min-width: 1200px)'))
    );
  }
}();

export default {
  name: 'mdc-drawer',
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
    return { mdcDrawer: this };
  },
  data() {
    return {
      // open_: false,
      classes: {},
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
        `MDCDrawer: Failed to instantiate component. Supported variants are ${DISMISSIBLE} and ${MODAL}.`,
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
    // media.small.addListener(this.refreshMedia)
    // media.large.addListener(this.refreshMedia)
    // this.$nextTick(() => this.refreshMedia())
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.foundation = null;
    // media.small.removeListener(this.refreshMedia)
    // media.large.removeListener(this.refreshMedia)

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
        this.focusTrap_ = createFocusTrapInstance(
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
};

function createFocusTrapInstance(
  surfaceEl,
  focusTrapFactory = createFocusTrap,
) {
  return focusTrapFactory(surfaceEl, {
    clickOutsideDeactivates: true,
    initialFocus: false, // Navigation drawer handles focusing on active nav item.
    escapeDeactivates: false, // Navigation drawer handles ESC.
    returnFocusOnDeactivate: false, // Navigation drawer handles restore focus.
  });
}
</script>
