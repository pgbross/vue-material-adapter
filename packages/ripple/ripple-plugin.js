import { applyPassive } from '@material/dom/events';
import { matches } from '@material/dom/ponyfill';
import { MDCRippleFoundation } from '@material/ripple';
import { supportsCssVariables } from '@material/ripple/util';
import {
  onBeforeUnmount,
  onMounted,
  ref,
  shallowReactive,
  toRefs,
} from '@vue/composition-api';

export class RippleElement extends MDCRippleFoundation {
  constructor(element, state, { unbounded = false, ...options } = {}) {
    const $el = element.$el ?? element;

    super({
      addClass: className => {
        state.classes = { ...state.classes, [className]: true };
      },
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
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = state.classes;
        state.classes = rest;
      },
      updateCssVariable: (varName, value) => {
        state.styles = { ...state.styles, [varName]: value };
      },
      ...options,
    });

    this.unbounded_ = unbounded;
  }

  get unbounded() {
    return this.unbounded_;
  }
  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded(this.unbounded_);
  }
}

export function useRipplePlugin(root, options) {
  const ripple = ref(null);
  const state = shallowReactive({ classes: {}, styles: {} });

  const activate = () => ripple.value?.activate();
  const deactivate = () => ripple.value?.deactivate();

  onMounted(() => {
    ripple.value = new RippleElement(root.value, state, options);
    ripple.value.init();
  });
  onBeforeUnmount(() => {
    ripple.value.destroy();
  });

  return { ...toRefs(state), activate, deactivate };
}
