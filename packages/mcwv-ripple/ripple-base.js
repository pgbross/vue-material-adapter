import { applyPassive } from '@material/dom/events';
import { matches } from '@material/dom/ponyfill';
import { MDCRippleFoundation } from '@material/ripple/index';
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
