import { applyPassive } from '@material/dom/events.js';
import { matches } from '@material/dom/ponyfill.js';
import { MDCRippleFoundation } from '@material/ripple/index.js';
import { supportsCssVariables } from '@material/ripple/util.js';
import { onBeforeUnmount, onMounted, ref, shallowReactive, toRefs } from 'vue';

export class RippleElement extends MDCRippleFoundation {
  constructor(element, state, { unbounded = false, ...options } = {}) {
    const $element = element.$el ?? element;

    super({
      addClass: className => {
        if (state) {
          state.classes = { ...state.classes, [className]: true };
        } else {
          $element.classList.add(className);
        }
      },
      browserSupportsCssVars: () => supportsCssVariables(window),
      computeBoundingRect: () => $element.getBoundingClientRect(),
      containsEventTarget: target => $element.contains(target),
      deregisterDocumentInteractionHandler: (eventType, handler) =>
        document.documentElement.removeEventListener(
          eventType,
          handler,
          applyPassive(),
        ),
      deregisterInteractionHandler: (event_, handler) =>
        $element.removeEventListener(event_, handler, applyPassive()),
      deregisterResizeHandler: handler =>
        window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset,
      }),
      isSurfaceActive: () => matches($element, ':active'),
      isSurfaceDisabled: () => false, // todo: consider if this is right
      isUnbounded: () => this.unbounded_,
      registerDocumentInteractionHandler: (eventType, handler) =>
        document.documentElement.addEventListener(
          eventType,
          handler,
          applyPassive(),
        ),
      registerInteractionHandler: (event_, handler) => {
        $element.addEventListener(event_, handler, applyPassive());
      },
      registerResizeHandler: handler => {
        return window.addEventListener('resize', handler);
      },
      removeClass: className => {
        if (state) {
          // eslint-disable-next-line no-unused-vars
          const { [className]: removed, ...rest } = state.classes;
          state.classes = rest;
        } else {
          $element.classList.remove(className);
        }
      },
      updateCssVariable: (variableName, value) => {
        if (state) {
          state.styles = { ...state.styles, [variableName]: value };
        } else {
          $element.style.setProperty(variableName, value);
        }
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
  const ripple = ref();
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
