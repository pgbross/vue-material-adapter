import { applyPassive } from '@material/dom/events';
import { matches } from '@material/dom/ponyfill';
import { MDCRippleFoundation } from '@material/ripple';
import { supportsCssVariables } from '@material/ripple/util';

export class RippleBase extends MDCRippleFoundation {
  constructor(vm, options) {
    super({
      addClass(className) {
        vm.$set(vm.classes, className, true);
      },
      browserSupportsCssVars: () => {
        return supportsCssVariables(window);
      },
      computeBoundingRect: () => {
        return vm.$el.getBoundingClientRect();
      },
      containsEventTarget: target => vm.$el.contains(target),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(
          evtType,
          handler,
          applyPassive(),
        ),
      deregisterInteractionHandler: (evt, handler) => {
        vm.$el.removeEventListener(evt, handler, applyPassive());
      },
      deregisterResizeHandler: handler => {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: () => {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      isSurfaceActive: () => {
        return matches(vm.$el, ':active');
      },
      isSurfaceDisabled: () => {
        return vm.disabled;
      },
      isUnbounded: () => {
        return false;
      },
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(
          evtType,
          handler,
          applyPassive(),
        ),
      registerInteractionHandler: (evt, handler) => {
        vm.$el.addEventListener(evt, handler, applyPassive());
      },
      registerResizeHandler: handler => {
        return window.addEventListener('resize', handler);
      },
      removeClass(className) {
        vm.$delete(vm.classes, className);
      },
      updateCssVariable: (varName, value) => {
        vm.$set(vm.styles, varName, value);
      },
      ...options,
    });
  }
}

// todo: can this be combined with the ripplebase implementation depending on whether a vm or element is passed?
export class RippleElement extends MDCRippleFoundation {
  constructor(element, options) {
    const $el = element;

    super({
      addClass: className => $el.classList.add(className),
      browserSupportsCssVars: () => supportsCssVariables(window),
      computeBoundingRect: () => $el.getBoundingClientRect(),
      containsEventTarget: target => $el.contains(target),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(
          evtType,
          handler,
          applyPassive(),
        ),
      deregisterInteractionHandler: (evt, handler) =>
        $el.removeEventListener(evt, handler, applyPassive()),
      deregisterResizeHandler: handler =>
        window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset,
      }),
      isSurfaceActive: () => matches($el, ':active'),
      isSurfaceDisabled: () => false, // todo: consider if this is right
      isUnbounded: () => this.unbounded_,
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(
          evtType,
          handler,
          applyPassive(),
        ),
      registerInteractionHandler: (evt, handler) => {
        $el.addEventListener(evt, handler, applyPassive());
      },
      registerResizeHandler: handler => {
        return window.addEventListener('resize', handler);
      },
      removeClass: className => $el.classList.remove(className),
      updateCssVariable: (varName, value) =>
        $el.style.setProperty(varName, value),

      ...options,
    });

    this.unbounded_ = false;
  }

  get unbounded() {
    return this.unbounded_;
  }
  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded(this.unbounded_);
  }
}

export const RippleMixin = {
  data() {
    return {
      classes: {},
      styles: {},
    };
  },
  mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy() {
    this.ripple.destroy();
  },
};
