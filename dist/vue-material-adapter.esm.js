import { resolveDynamicComponent, h, openBlock, createBlock, createVNode, toDisplayString, withModifiers, createCommentVNode, reactive, watch, onMounted, onBeforeUnmount, toRefs, resolveComponent, ref, shallowReactive, computed, withCtx, renderSlot, toRef, createTextVNode, provide, mergeProps, toHandlers, inject, Fragment, renderList, nextTick, watchEffect } from 'vue';
import { MDCBannerFoundation } from '@material/banner';
import { applyPassive } from '@material/dom/events';
import { matches, closest } from '@material/dom/ponyfill';
import { MDCRippleFoundation } from '@material/ripple';
import { supportsCssVariables } from '@material/ripple/util';
import { getCorrectEventName } from '@material/animation';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { announce } from '@material/dom/announce';
import { MDCChipTrailingActionFoundation } from '@material/chips/trailingaction/foundation';
import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation';
import { MDCCheckbox } from '@material/checkbox';
import * as test from '@material/data-table';
import { MDCDataTableFoundation } from '@material/data-table/foundation';
import { MDCDialogFoundation } from '@material/dialog/foundation';
import { createFocusTrapInstance, isScrollable, areTopsMisaligned } from '@material/dialog/util';
import { FocusTrap } from '@material/dom/focus-trap.js';
import { matches as matches$1, closest as closest$1 } from '@material/dom/ponyfill.js';
import { FocusTrap as FocusTrap$1 } from '@material/dom/focus-trap';
import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation';
import { MDCModalDrawerFoundation } from '@material/drawer/modal/foundation';
import { createFocusTrapInstance as createFocusTrapInstance$1 } from '@material/drawer/util';
import { MDCListFoundation } from '@material/list/foundation';
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation';
import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation';
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation';
import { MDCLinearProgressFoundation } from '@material/linear-progress/foundation';
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation';
import { getCorrectPropertyName } from '@material/animation/util';
import { MDCMenuFoundation } from '@material/menu/foundation';
import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation';
import { MDCRadioFoundation } from '@material/radio/foundation';
import { MDCSegmentedButtonFoundation } from '@material/segmented-button';
import { MDCSegmentedButtonSegmentFoundation } from '@material/segmented-button/segment';
import { MDCSelectFoundation } from '@material/select/foundation';
import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';
import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { MDCSliderFoundation, Thumb, cssClasses as cssClasses$7, events } from '@material/slider';
import { MDCSnackbarFoundation } from '@material/snackbar/foundation';
import { MDCSwitchFoundation } from '@material/switch/foundation';
import { MDCTabBarFoundation } from '@material/tab-bar/foundation';
import MDCTabFoundation$1, { MDCTabFoundation } from '@material/tab/foundation';
import { MDCFadingTabIndicatorFoundation } from '@material/tab-indicator/fading-foundation';
import { MDCTabIndicatorFoundation } from '@material/tab-indicator/foundation';
import { MDCSlidingTabIndicatorFoundation } from '@material/tab-indicator/sliding-foundation';
import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation';
import { computeHorizontalScrollbarHeight } from '@material/tab-scroller/util';
import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield/character-counter/foundation';
import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text/foundation';
import { MDCTextFieldIconFoundation } from '@material/textfield/icon/foundation.js';
import { MDCTextFieldFoundation } from '@material/textfield/foundation';
import { MDCTooltipFoundation, events as events$1 } from '@material/tooltip';
import { MDCFixedTopAppBarFoundation } from '@material/top-app-bar/fixed/foundation';
import { MDCShortTopAppBarFoundation } from '@material/top-app-bar/short/foundation';
import { MDCTopAppBarFoundation } from '@material/top-app-bar/standard/foundation';

function BasePlugin(components) {
  return {
    version: '__VERSION__',
    install: vm => {
      Object.entries(components).forEach(([key, component]) => {
        const name = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); // eslint-disable-next-line no-unused-vars

        const [pfx, ...rest] = name.split('-');
        const mdcName = ['mdc', ...rest].join('-');
        const mcwName = ['mcw', ...rest].join('-');
        const haveComponent = vm._context.components[mcwName];

        if (!haveComponent) {
          vm.component(mcwName, component);
          vm.component(mdcName, component);
        }
      });
    },
    components
  };
}

function emitCustomEvent(el, evtType, evtData, shouldBubble = false) {
  if (el) {
    evtType = evtType.toLowerCase();
    const evt = typeof CustomEvent === 'function' ? new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble
    }) : createCustomEvent(evtType, shouldBubble, evtData);
    el.dispatchEvent(evt);
  }
} // ===
// Private functions
// ===

const createCustomEvent = (evtType, shouldBubble, evtData) => {
  const evt = document.createEvent('CustomEvent');
  return evt.initCustomEvent(evtType, shouldBubble, false, evtData);
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

const CustomLink = {
  name: 'custom-link',
  props: {
    tag: String,
    to: [String, Object]
  },

  setup(props, {
    slots,
    attrs
  }) {
    return () => {
      var _props$tag2, _slots$default2;

      // destructure the props in the render function so we use the current value
      // if their value has changed since we were created
      const {
        to,
        href
      } = props;
      const routerLink = resolveDynamicComponent('router-link');

      if (to && routerLink) {
        var _props$tag;

        const rtag = (_props$tag = props.tag) !== null && _props$tag !== void 0 ? _props$tag : 'a';
        return h(routerLink, _objectSpread2(_objectSpread2({
          custom: true
        }, attrs), {}, {
          to
        }), {
          default: props => {
            var _slots$default;

            return h(rtag, _objectSpread2(_objectSpread2({}, attrs), {}, {
              onClick: evt => {
                evt.__itemId = attrs.itemId;
                props.navigate(evt);
              }
            }), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
          }
        });
      }

      const element = href ? 'a' : (_props$tag2 = props.tag) !== null && _props$tag2 !== void 0 ? _props$tag2 : 'a';
      const role = href ? 'button' : element !== 'button' ? 'button' : null;
      const children = (_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots);
      return h(element, _objectSpread2(_objectSpread2({}, attrs), {}, {
        role
      }), {
        default: () => children
      });
    };
  }

};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BasePlugin: BasePlugin,
  emitCustomEvent: emitCustomEvent,
  CustomLink: CustomLink
});

var script = {
  props: {
    text: String,
    primaryAction: String,
    secondaryAction: String,
    icon: String,
  },
  setup(props, { emit }) {
    const onPrimary = () => emit('click', { target: 0 });
    const onSecondary = () => emit('click', { target: 1 });
    return { onPrimary, onSecondary };
  },
};

const _hoisted_1 = {
  class: "mdc-banner__content",
  role: "status",
  "aria-live": "assertive"
};
const _hoisted_2 = { class: "mdc-banner__graphic-text-wrapper" };
const _hoisted_3 = /*#__PURE__*/createVNode("div", {
  class: "mdc-banner__graphic",
  role: "img",
  alt: ""
}, [
  /*#__PURE__*/createVNode("i", { class: "material-icons mdc-banner__icon" }, "error_outline")
], -1 /* HOISTED */);
const _hoisted_4 = { class: "mdc-banner__text" };
const _hoisted_5 = { class: "mdc-banner__actions" };
const _hoisted_6 = /*#__PURE__*/createVNode("div", { class: "mdc-button__ripple" }, null, -1 /* HOISTED */);
const _hoisted_7 = { class: "mdc-button__label" };
const _hoisted_8 = /*#__PURE__*/createVNode("div", { class: "mdc-button__ripple" }, null, -1 /* HOISTED */);
const _hoisted_9 = { class: "mdc-button__label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("div", _hoisted_2, [
      _hoisted_3,
      createVNode("div", _hoisted_4, toDisplayString($props.text), 1 /* TEXT */)
    ]),
    createVNode("div", _hoisted_5, [
      ($props.secondaryAction)
        ? (openBlock(), createBlock("button", {
            key: 0,
            type: "button",
            class: "mdc-button mdc-banner__secondary-action",
            onClick: _cache[1] || (_cache[1] = withModifiers((...args) => ($setup.onSecondary && $setup.onSecondary(...args)), ["stop"]))
          }, [
            _hoisted_6,
            createVNode("div", _hoisted_7, toDisplayString($props.secondaryAction), 1 /* TEXT */)
          ]))
        : createCommentVNode("v-if", true),
      createVNode("button", {
        type: "button",
        class: "mdc-button mdc-banner__primary-action",
        onClick: _cache[2] || (_cache[2] = withModifiers((...args) => ($setup.onPrimary && $setup.onPrimary(...args)), ["stop"]))
      }, [
        _hoisted_8,
        createVNode("div", _hoisted_9, toDisplayString($props.primaryAction), 1 /* TEXT */)
      ])
    ])
  ]))
}

script.render = render;
script.__file = "packages/banner/banner-content.vue";

var script$1 = {
  name: 'mcw-banner',
  props: {
    centered: Boolean,
    modelValue: Boolean,
    text: String,
    primaryAction: String,
    secondaryAction: String,
    mobile: Boolean,
    fixed: Boolean,
    icon: String
  },
  components: {
    bannerContent: script
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-banner--centered': props.centered,
        'mdc-banner--mobile-stacked': props.mobile
      },
      styles: {},
      root: null,
      contentEl: null
    });
    let foundation;

    const onOpen = nv => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close();
      }
    };

    const onContentClick = ({
      target
    }) => {
      if (target == 1) {
        foundation.handleSecondaryActionClick();
      } else {
        foundation.handlePrimaryActionClick();
      }
    };

    const adapter = {
      addClass: className => {
        uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
          [className]: true
        });
        uiState.root.classList.add(className);
      },
      getContentHeight: () => {
        return uiState.contentEl.$el.offsetHeight;
      },
      notifyOpening: () => {
        emit('mdcbanner:opening', {});
      },
      notifyOpened: () => emit('mdcbanner:opened', {}),
      notifyClosing: reason => {
        emit('update:modelValue', false);
        emit('mdcbanner:closing', {
          reason
        });
      },
      notifyClosed: reason => {
        emit('mdcbanner:closed', {
          reason
        });
      },
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      setStyleProperty: (property, value) => uiState.styles = _objectSpread2(_objectSpread2({}, uiState.styles), {}, {
        [property]: value
      })
    };
    watch(() => props.modelValue, nv => {
      onOpen(nv);
    });
    onMounted(() => {
      foundation = new MDCBannerFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      var _foundation;

      (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      onContentClick
    });
  }

};

const _hoisted_1$1 = {
  key: 0,
  class: "mdc-banner__fixed"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_banner_content = resolveComponent("banner-content");

  return (openBlock(), createBlock("div", {
    ref: "root",
    class: ["mdc-banner demo-banner", _ctx.classes],
    role: "banner",
    style: _ctx.styles
  }, [
    (_ctx.fixed)
      ? (openBlock(), createBlock("div", _hoisted_1$1, [
          createVNode(_component_banner_content, {
            ref: "contentEl",
            icon: _ctx.icon,
            "primary-action": _ctx.primaryAction,
            "secondary-action": _ctx.secondaryAction,
            text: _ctx.text,
            onClick: _ctx.onContentClick
          }, null, 8 /* PROPS */, ["icon", "primary-action", "secondary-action", "text", "onClick"])
        ]))
      : (openBlock(), createBlock(_component_banner_content, {
          key: 1,
          ref: "contentEl",
          icon: _ctx.icon,
          "primary-action": _ctx.primaryAction,
          "secondary-action": _ctx.secondaryAction,
          text: _ctx.text,
          onClick: _ctx.onContentClick
        }, null, 8 /* PROPS */, ["icon", "primary-action", "secondary-action", "text", "onClick"]))
  ], 6 /* CLASS, STYLE */))
}

script$1.render = render$1;
script$1.__file = "packages/banner/banner.vue";

var banner = BasePlugin({
  mcwBanner: script$1
});

class RippleElement extends MDCRippleFoundation {
  constructor(element, state, _ref = {}) {
    var _element$$el;

    let {
      unbounded = false
    } = _ref,
        options = _objectWithoutProperties(_ref, ["unbounded"]);

    const $el = (_element$$el = element.$el) !== null && _element$$el !== void 0 ? _element$$el : element;
    super(_objectSpread2({
      addClass: className => {
        if (state) {
          state.classes = _objectSpread2(_objectSpread2({}, state.classes), {}, {
            [className]: true
          });
        } else {
          $el.classList.add(className);
        }
      },
      browserSupportsCssVars: () => supportsCssVariables(window),
      computeBoundingRect: () => $el.getBoundingClientRect(),
      containsEventTarget: target => $el.contains(target),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evt, handler) => $el.removeEventListener(evt, handler, applyPassive()),
      deregisterResizeHandler: handler => window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => matches($el, ':active'),
      isSurfaceDisabled: () => false,
      // todo: consider if this is right
      isUnbounded: () => this.unbounded_,
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
      registerInteractionHandler: (evt, handler) => {
        $el.addEventListener(evt, handler, applyPassive());
      },
      registerResizeHandler: handler => {
        return window.addEventListener('resize', handler);
      },
      removeClass: className => {
        if (state) {
          // eslint-disable-next-line no-unused-vars
          const _state$classes = state.classes,
                rest = _objectWithoutProperties(_state$classes, [className].map(_toPropertyKey));

          state.classes = rest;
        } else {
          $el.classList.remove(className);
        }
      },
      updateCssVariable: (varName, value) => {
        if (state) {
          state.styles = _objectSpread2(_objectSpread2({}, state.styles), {}, {
            [varName]: value
          });
        } else {
          $el.style.setProperty(varName, value);
        }
      }
    }, options));
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
function useRipplePlugin(root, options) {
  const ripple = ref(null);
  const state = shallowReactive({
    classes: {},
    styles: {}
  });

  const activate = () => {
    var _ripple$value;

    return (_ripple$value = ripple.value) === null || _ripple$value === void 0 ? void 0 : _ripple$value.activate();
  };

  const deactivate = () => {
    var _ripple$value2;

    return (_ripple$value2 = ripple.value) === null || _ripple$value2 === void 0 ? void 0 : _ripple$value2.deactivate();
  };

  onMounted(() => {
    ripple.value = new RippleElement(root.value, state, options);
    ripple.value.init();
  });
  onBeforeUnmount(() => {
    ripple.value.destroy();
  });
  return _objectSpread2(_objectSpread2({}, toRefs(state)), {}, {
    activate,
    deactivate
  });
}

var script$2 = {
  name: 'mcw-button',
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String
  },
  components: {
    CustomLink
  },

  setup(props, {
    slots
  }) {
    const root = ref(null);
    const {
      classes: rippleClasses,
      styles
    } = useRipplePlugin(root);
    const classes = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), {}, {
        'mdc-button': true,
        'mdc-button--raised': props.raised,
        'mdc-button--unelevated': props.unelevated && !props.raised,
        'mdc-button--outlined': props.outlined
      });
    });
    const haveIcon = computed(() => {
      var _slots$icon;

      return (_slots$icon = slots.icon) !== null && _slots$icon !== void 0 ? _slots$icon : props.icon;
    });
    const haveTrailingIcon = computed(() => {
      var _slots$trailingIcon;

      return (_slots$trailingIcon = slots.trailingIcon) !== null && _slots$trailingIcon !== void 0 ? _slots$trailingIcon : props.trailingIcon;
    });
    return {
      styles,
      classes,
      root,
      haveIcon,
      haveTrailingIcon
    };
  }

};

const _hoisted_1$2 = /*#__PURE__*/createVNode("div", { class: "mdc-button__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$1 = {
  class: "material-icons mdc-button__icon",
  "aria-hidden": "true"
};
const _hoisted_3$1 = { class: "mdc-button__label" };
const _hoisted_4$1 = {
  class: "material-icons mdc-button__icon",
  "aria-hidden": "true"
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, {
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles,
    tag: "button"
  }, {
    default: withCtx(() => [
      _hoisted_1$2,
      (_ctx.haveIcon)
        ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
            createVNode("i", _hoisted_2$1, toDisplayString(_ctx.icon), 1 /* TEXT */)
          ])
        : createCommentVNode("v-if", true),
      createVNode("span", _hoisted_3$1, [
        renderSlot(_ctx.$slots, "default")
      ]),
      (_ctx.haveTrailingIcon)
        ? renderSlot(_ctx.$slots, "trailingIcon", { key: 1 }, () => [
            createVNode("i", _hoisted_4$1, toDisplayString(_ctx.trailingIcon), 1 /* TEXT */)
          ])
        : createCommentVNode("v-if", true)
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class", "style"]))
}

script$2.render = render$2;
script$2.__file = "packages/button/button.vue";

var button = BasePlugin({
  mcwButton: script$2
});

var mcwCardActionButtons = {
  name: 'mcw-card-action-buttons',

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h('div', {
        class: ['mdc-card__action-buttons']
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }

};

var mcwCardActionIcons = {
  name: 'mcw-card-action-icons',

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h('div', {
        class: ['mdc-card__action-icons']
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }

};

var mcwCardActions = {
  name: 'mcw-card-actions',
  props: {
    fullBleed: Boolean
  },

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h('section', {
        class: [{
          'mdc-card__actions': 1,
          'mdc-card__actions--full-bleed': props.fullBleed
        }]
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

var mcwCardMedia = {
  name: 'mcw-card-media',
  props: {
    src: String,
    square: {
      type: Boolean,

      default() {
        return false;
      }

    },
    wide: {
      type: Boolean,

      default() {
        return false;
      }

    },
    contentClass: String
  },

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      const nodes = [];
      const content = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);

      if (content) {
        nodes.push(h('div', {
          class: ['mdc-card__media-content', props.contentClass]
        }, content));
      }

      return h('section', {
        class: {
          'mdc-card__media': 1,
          'mdc-card__media--square': props.square,
          'mdc-card__media--16-9': props.wide && !props.square
        },
        style: {
          backgroundImage: "url(".concat(props.src, ")")
        }
      }, nodes);
    };
  }

};

var script$3 = {
  name: 'mcw-card-primary-action',
  components: {
    CustomLink
  },

  setup() {
    const root = ref(null);
    const {
      classes: rippleClasses,
      styles
    } = useRipplePlugin(root);
    const classes = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), {}, {
        'mdc-card__primary-action': 1
      });
    });
    return {
      classes,
      styles,
      root
    };
  }

};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, {
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles,
    tabindex: "0"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class", "style"]))
}

script$3.render = render$3;
script$3.__file = "packages/card/card-primary-action.vue";

var mcwCard = {
  name: 'mcw-card',
  props: {
    outlined: Boolean
  },

  setup(props, {
    attrs,
    slots
  }) {
    return () => {
      var _slots$default;

      const {
        outlined
      } = props;
      return h('div', _objectSpread2({
        class: [{
          'mdc-card': 1,
          'mdc-card--outlined': outlined
        }]
      }, attrs), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

var card = BasePlugin({
  mcwCard,
  mcwCardPrimaryAction: script$3,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons
});

function emitCustomEvent$1(el, evtType, evtData, shouldBubble = false) {
  if (el) {
    evtType = evtType.toLowerCase();
    const evt = typeof CustomEvent === 'function' ? new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble
    }) : createCustomEvent$1(evtType, shouldBubble, evtData);
    el.dispatchEvent(evt);
  }
} // ===
// Private functions
// ===

const createCustomEvent$1 = (evtType, shouldBubble, evtData) => {
  const evt = document.createEvent('CustomEvent');
  return evt.initCustomEvent(evtType, shouldBubble, false, evtData);
};

class RippleElement$1 extends MDCRippleFoundation {
  constructor(element, state, _ref = {}) {
    var _element$$el;

    let {
      unbounded = false
    } = _ref,
        options = _objectWithoutProperties(_ref, ["unbounded"]);

    const $el = (_element$$el = element.$el) !== null && _element$$el !== void 0 ? _element$$el : element;
    super(_objectSpread2({
      addClass: className => {
        if (state) {
          state.classes = _objectSpread2(_objectSpread2({}, state.classes), {}, {
            [className]: true
          });
        } else {
          $el.classList.add(className);
        }
      },
      browserSupportsCssVars: () => supportsCssVariables(window),
      computeBoundingRect: () => $el.getBoundingClientRect(),
      containsEventTarget: target => $el.contains(target),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evt, handler) => $el.removeEventListener(evt, handler, applyPassive()),
      deregisterResizeHandler: handler => window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => matches($el, ':active'),
      isSurfaceDisabled: () => false,
      // todo: consider if this is right
      isUnbounded: () => this.unbounded_,
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
      registerInteractionHandler: (evt, handler) => {
        $el.addEventListener(evt, handler, applyPassive());
      },
      registerResizeHandler: handler => {
        return window.addEventListener('resize', handler);
      },
      removeClass: className => {
        if (state) {
          // eslint-disable-next-line no-unused-vars
          const _state$classes = state.classes,
                rest = _objectWithoutProperties(_state$classes, [className].map(_toPropertyKey));

          state.classes = rest;
        } else {
          $el.classList.remove(className);
        }
      },
      updateCssVariable: (varName, value) => {
        if (state) {
          state.styles = _objectSpread2(_objectSpread2({}, state.styles), {}, {
            [varName]: value
          });
        } else {
          $el.style.setProperty(varName, value);
        }
      }
    }, options));
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
function useRipplePlugin$1(root, options) {
  const ripple = ref(null);
  const state = shallowReactive({
    classes: {},
    styles: {}
  });

  const activate = () => {
    var _ripple$value;

    return (_ripple$value = ripple.value) === null || _ripple$value === void 0 ? void 0 : _ripple$value.activate();
  };

  const deactivate = () => {
    var _ripple$value2;

    return (_ripple$value2 = ripple.value) === null || _ripple$value2 === void 0 ? void 0 : _ripple$value2.deactivate();
  };

  onMounted(() => {
    ripple.value = new RippleElement$1(root.value, state, options);
    ripple.value.init();
  });
  onBeforeUnmount(() => {
    ripple.value.destroy();
  });
  return _objectSpread2(_objectSpread2({}, toRefs(state)), {}, {
    activate,
    deactivate
  });
}

const CB_PROTO_PROPS = ['checked', 'indeterminate'];
let checkboxId_ = 0;
var script$4 = {
  name: 'mcw-checkbox',
  props: {
    modelValue: [Boolean, Array],
    indeterminate: Boolean,
    disabled: Boolean,
    label: String,
    alignEnd: Boolean,
    value: {
      type: [String, Number],

      default() {
        return 'on';
      }

    },
    name: String
  },

  setup(props, {
    emit,
    slots
  }) {
    const uiState = reactive({
      classes: {
        'mdc-checkbox': 1
      },
      control: null,
      labelEl: null,
      root: null
    });
    let foundation;
    let formField;
    const checkboxId = "__mcw-checkbox-".concat(checkboxId_++);
    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate
    } = useRipplePlugin$1(toRef(uiState, 'root'), {
      isUnbounded: () => true,
      isSurfaceActive: () => {
        return matches(uiState.control, ':active');
      },
      registerInteractionHandler: (evt, handler) => {
        uiState.control.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        uiState.control.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      }
    });
    const rootClasses = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    const hasLabel = computed(() => {
      var _props$label;

      return (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : slots.default;
    });
    const formFieldClasses = computed(() => {
      return {
        'mdc-form-field': hasLabel.value,
        'mdc-form-field--align-end': hasLabel.value && props.alignEnd
      };
    });

    const onChange = ({
      target: {
        indeterminate,
        checked
      }
    }) => {
      // note indeterminate will not currently work with the array model
      emit('update:indeterminate', indeterminate);

      if (Array.isArray(props.modelValue)) {
        const idx = props.modelValue.indexOf(props.value);

        if (checked) {
          idx < 0 && emit('update:modelValue', props.modelValue.concat(props.value));
        } else {
          idx > -1 && emit('update:modelValue', props.modelValue.slice(0, idx).concat(props.modelValue.slice(idx + 1)));
        }
      } else {
        // emit a native event so that it bubbles to parent elements
        // e.g. data table row
        emitCustomEvent$1(uiState.root, 'mdccheckbox:change', {}, true);
        emit('update:modelValue', checked);
      }
    };

    const isChecked = () => uiState.control.checked;

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      forceLayout: () => uiState.root.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => true,
      isChecked: () => uiState.control.checked,
      isIndeterminate: () => uiState.control.indeterminate,
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      removeNativeControlAttr: attr => {
        uiState.control.removeAttribute(attr);
      },
      setNativeControlAttr: (attr, value) => {
        uiState.control.setAttribute(attr, value);
      },
      setNativeControlDisabled: disabled => uiState.control.disabled = disabled
    };

    const handleAnimationEnd = () => foundation.handleAnimationEnd();

    const setChecked = checked => {
      uiState.control.checked = Array.isArray(checked) ? checked.indexOf(props.value) > -1 : checked;
    };

    const setIndeterminate = indeterminate => {
      uiState.control && (uiState.control.indeterminate = indeterminate);
    };

    const installPropertyChangeHooks_ = () => {
      const nativeCb = uiState.control;
      const cbProto = Object.getPrototypeOf(nativeCb);
      CB_PROTO_PROPS.forEach(controlState => {
        const desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739

        if (validDescriptor(desc)) {
          const nativeCbDesc =
          /** @type {!ObjectPropertyDescriptor} */
          {
            get: desc.get,
            set: state => {
              desc.set.call(nativeCb, state);
              foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          };
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    };

    const uninstallPropertyChangeHooks_ = () => {
      const nativeCb = uiState.control;
      const cbProto = Object.getPrototypeOf(nativeCb);
      CB_PROTO_PROPS.forEach(controlState => {
        const desc =
        /** @type {!ObjectPropertyDescriptor} */
        Object.getOwnPropertyDescriptor(cbProto, controlState);

        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    };

    watch(() => props.disabled, (nv, ov) => {
      var _foundation;

      nv != ov && ((_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.setDisabled(nv));
    });
    watch(() => props.modelValue, (nv, ov) => {
      nv != ov && setChecked(nv);
    });
    watch(() => props.indeterminate, (nv, ov) => {
      nv != ov && setIndeterminate(nv);
    });
    onMounted(() => {
      foundation = new MDCCheckboxFoundation(adapter);
      uiState.root.addEventListener(getCorrectEventName(window, 'animationend'), handleAnimationEnd);
      installPropertyChangeHooks_();

      if (hasLabel.value) {
        formField = new MDCFormFieldFoundation({
          registerInteractionHandler: (type, handler) => {
            uiState.labelEl.addEventListener(type, handler);
          },
          deregisterInteractionHandler: (type, handler) => {
            uiState.labelEl.removeEventListener(type, handler);
          },
          activateInputRipple: () => {
            activate();
          },
          deactivateInputRipple: () => {
            deactivate();
          }
        });
        formField.init();
      }

      foundation.init();
      setChecked(props.modelValue);
      foundation.setDisabled(props.disabled);
      setIndeterminate(props.indeterminate);
    });
    onBeforeUnmount(() => {
      var _formField;

      uiState.root.removeEventListener(getCorrectEventName(window, 'animationend'), handleAnimationEnd);
      (_formField = formField) === null || _formField === void 0 ? void 0 : _formField.destroy();
      uninstallPropertyChangeHooks_();
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses,
      formFieldClasses,
      onChange,
      styles,
      hasLabel,
      setChecked,
      setIndeterminate,
      isChecked,
      checkboxId
    });
  }

}; // ===
// Private functions
// ===

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

const _hoisted_1$3 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__background" }, [
  /*#__PURE__*/createVNode("svg", {
    class: "mdc-checkbox__checkmark",
    viewBox: "0 0 24 24"
  }, [
    /*#__PURE__*/createVNode("path", {
      class: "mdc-checkbox__checkmark-path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__mixedmark" })
], -1 /* HOISTED */);
const _hoisted_2$2 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__ripple" }, null, -1 /* HOISTED */);
const _hoisted_3$2 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__background" }, [
  /*#__PURE__*/createVNode("svg", {
    class: "mdc-checkbox__checkmark",
    viewBox: "0 0 24 24"
  }, [
    /*#__PURE__*/createVNode("path", {
      class: "mdc-checkbox__checkmark-path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__mixedmark" })
], -1 /* HOISTED */);
const _hoisted_4$2 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__ripple" }, null, -1 /* HOISTED */);

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.hasLabel)
    ? (openBlock(), createBlock("div", {
        key: 0,
        class: [_ctx.formFieldClasses, "mdc-checkbox-wrapper"]
      }, [
        createVNode("div", {
          ref: "root",
          class: _ctx.rootClasses,
          style: _ctx.styles
        }, [
          createVNode("input", {
            id: _ctx.checkboxId,
            ref: "control",
            name: _ctx.name,
            value: _ctx.value,
            type: "checkbox",
            class: "mdc-checkbox__native-control",
            onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.onChange && _ctx.onChange(...args)))
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["id", "name", "value"]),
          _hoisted_1$3,
          _hoisted_2$2
        ], 6 /* CLASS, STYLE */),
        createVNode("label", {
          ref: "labelEl",
          for: _ctx.checkboxId
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, ["for"])
      ], 2 /* CLASS */))
    : (openBlock(), createBlock("div", {
        key: 1,
        ref: "root",
        class: _ctx.rootClasses,
        style: _ctx.styles
      }, [
        createVNode("input", {
          id: _ctx.checkboxId,
          ref: "control",
          name: _ctx.name,
          value: _ctx.value,
          type: "checkbox",
          class: "mdc-checkbox__native-control",
          onChange: _cache[2] || (_cache[2] = (...args) => (_ctx.onChange && _ctx.onChange(...args)))
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["id", "name", "value"]),
        _hoisted_3$2,
        _hoisted_4$2
      ], 6 /* CLASS, STYLE */))
}

script$4.render = render$4;
script$4.__file = "packages/checkbox/checkbox.vue";

var checkbox = BasePlugin({
  mcwCheckbox: script$4
});

var script$5 = {
  name: 'mcw-chip-checkmark',

  setup() {
    const width = ref(0);
    const root = ref(null);
    onMounted(() => width.value = root.value.getBoundingClientRect().height);
    return {
      width,
      root
    };
  }

};

const _hoisted_1$4 = {
  ref: "root",
  class: "mdc-chip__checkmark"
};
const _hoisted_2$3 = /*#__PURE__*/createVNode("svg", {
  class: "mdc-chip__checkmark-svg",
  viewBox: "-2 -3 30 30"
}, [
  /*#__PURE__*/createVNode("path", {
    class: "mdc-chip__checkmark-path",
    fill: "none",
    stroke: "black",
    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
  })
], -1 /* HOISTED */);

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", _hoisted_1$4, [
    _hoisted_2$3
  ], 512 /* NEED_PATCH */))
}

script$5.render = render$5;
script$5.__file = "packages/chips/chip-checkmark.vue";

const {
  strings
} = MDCChipFoundation;
var script$6 = {
  name: 'mcw-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean]
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': props.choice,
        'mdc-chip-set--filter': props.filter,
        'mdc-chip-set--input': props.input
      },
      listn: 0,
      myListeners: {},
      root: null
    });
    let foundation;
    let slotObserver;
    const ce = ref([]);

    const addChipElement = item => {
      ce.value.push(item);
    };

    provide('addChipElement', addChipElement);
    const adapter = {
      announceMessage: message => {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: index => {
        const chip = ce.value[index];
        chip && chip.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: index => {
        const chip = ce.value[index];
        chip && chip.focusTrailingAction();
      },
      getChipListCount: () => {
        return ce.value.length;
      },
      getIndexOfChipById: chipId => {
        return ce.value.findIndex(({
          id
        }) => id == chipId);
      },
      hasClass: className => uiState.root.classList.contains(className),
      isRTL: () => window.getComputedStyle(uiState.root).getPropertyValue('direction') === 'rtl',
      removeChipAtIndex: index => {
        if (index >= 0 && index < ce.value.length) {
          // tell chip to remove itself from the DOM
          ce.value[index].remove();
          ce.value.splice(index, 1);
        }
      },
      removeFocusFromChipAtIndex: index => {
        ce.value[index].removeFocus();
      },
      selectChipAtIndex: (index, selected, shouldNotifyClients) => {
        if (index >= 0 && index < ce.value.length) {
          ce.value[index].setSelectedFromChipSet(selected, shouldNotifyClients);
        }
      }
    };
    provide('mcwChipSet', {
      filter: props.filter,
      input: props.input
    });
    onMounted(() => {
      foundation = new MDCChipSetFoundation(adapter);
      foundation.init();
      uiState.myListeners = {
        [strings.INTERACTION_EVENT.toLowerCase()]: ({
          detail
        }) => foundation.handleChipInteraction(detail),
        [strings.SELECTION_EVENT.toLowerCase()]: ({
          detail
        }) => foundation.handleChipSelection(detail),
        [strings.REMOVAL_EVENT.toLowerCase()]: ({
          detail
        }) => foundation.handleChipRemoval(detail),
        [strings.NAVIGATION_EVENT.toLowerCase()]: ({
          detail
        }) => foundation.handleChipNavigation(detail)
      }, // the chips could change outside of this component
      // so use a mutation observer to trigger an update by
      // incrementing the dependency variable "listn" referenced
      // in the computed that selects the chip elements
      slotObserver = new MutationObserver((mutationList, observer) => {
        uiState.listn++;
      });
      slotObserver.observe(uiState.root, {
        childList: true // subtree: true,

      });
    });
    onBeforeUnmount(() => {
      slotObserver.disconnect();
      foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }

};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes,
    role: "grid"
  }, toHandlers(_ctx.myListeners)), [
    renderSlot(_ctx.$slots, "default")
  ], 16 /* FULL_PROPS */))
}

script$6.render = render$6;
script$6.__file = "packages/chips/chip-set.vue";

const {
  strings: strings$1
} = MDCChipFoundation;
const {
  strings: trailingActionStrings
} = MDCChipTrailingActionFoundation;
let chipItemId_ = 0;
var script$7 = {
  name: 'mcw-chip',
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,

      default() {
        return true;
      }

    }
  },

  setup(props, {
    slots
  }) {
    const uiState = reactive({
      classes: {
        'mdc-chip': true
      },
      leadingClasses: {
        'mdc-chip__icon': 1,
        'mdc-chip__icon--leading': 1,
        'material-icons': 1
      },
      styles: {},
      primaryAttrs: {},
      trailingAttrs: {},
      myListeners: {},
      root: null,
      checkmarkEl: null,
      trailingAction: null
    });
    const mcwChipSet = inject('mcwChipSet');
    const addChipElement = inject('addChipElement');
    const {
      classes: rippleClasses,
      styles: rippleStyles
    } = useRipplePlugin$1(toRef(uiState, 'root'));
    const id = chipItemId_++;
    let foundation;
    const classes = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    const styles = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleStyles.value), uiState.styles);
    });
    let trailingAction_;
    let leadingIcon_;
    const selected = computed({
      get() {
        return foundation.isSelected();
      },

      set(nv) {
        foundation.setSelected(nv);
      }

    });
    const isFilter = computed(() => mcwChipSet === null || mcwChipSet === void 0 ? void 0 : mcwChipSet.filter);
    const isInput = computed(() => mcwChipSet === null || mcwChipSet === void 0 ? void 0 : mcwChipSet.input);
    const haveleadingIcon = computed(() => {
      const slot = slots['leading-icon'];
      return slot && slot[0] || !!props.leadingIcon;
    });
    const havetrailingIcon = computed(() => {
      const slot = slots['trailing-icon'];
      return isInput.value && (slot && slot[0] || !!props.trailingIcon);
    });
    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      addClassToLeadingIcon: className => {
        if (leadingIcon_) {
          leadingIcon_.classList.add(className);
        }
      },
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      focusPrimaryAction: () => {
        var _uiState$root$querySe;

        (_uiState$root$querySe = uiState.root.querySelector(strings$1.PRIMARY_ACTION_SELECTOR)) === null || _uiState$root$querySe === void 0 ? void 0 : _uiState$root$querySe.focus();
      },
      focusTrailingAction: () => {
        var _trailingAction_;

        (_trailingAction_ = trailingAction_) === null || _trailingAction_ === void 0 ? void 0 : _trailingAction_.focus();
      },
      getAttribute: attr => uiState.root.getAttribute(attr),
      getCheckmarkBoundingClientRect: () => {
        var _uiState$checkmarkEl;

        return (_uiState$checkmarkEl = uiState.checkmarkEl) === null || _uiState$checkmarkEl === void 0 ? void 0 : _uiState$checkmarkEl.getBoundingClientRect();
      },
      getComputedStyleValue: propertyName => window.getComputedStyle(uiState.root).getPropertyValue(propertyName),
      getRootBoundingClientRect: () => uiState.root.getBoundingClientRect(),
      hasClass: className => uiState.root.classList.contains(className),
      hasLeadingIcon: () => !!haveleadingIcon.value,
      isRTL: () => window.getComputedStyle(uiState.root).getPropertyValue('direction') === 'rtl',
      isTrailingActionNavigable: () => {
        if (trailingAction_) {
          var _uiState$trailingActi;

          return (_uiState$trailingActi = uiState.trailingAction) === null || _uiState$trailingActi === void 0 ? void 0 : _uiState$trailingActi.isNavigable();
        }

        return false;
      },
      notifyInteraction: () => {
        emitCustomEvent(uiState.root, strings$1.INTERACTION_EVENT, {
          chipId: id
        }, true);
      },
      notifyNavigation: (key, source) => emitCustomEvent(uiState.root, strings$1.NAVIGATION_EVENT, {
        chipId: id,
        key,
        source
      }, true),
      notifyRemoval: removedAnnouncement => {
        emitCustomEvent(uiState.root, 'mdc-chip:removal', {
          chipId: id,
          removedAnnouncement
        }, true);
      },
      notifySelection: (selected, shouldIgnore) => emitCustomEvent(uiState.root, strings$1.SELECTION_EVENT, {
        chipId: id,
        selected: selected,
        shouldIgnore
      }, true
      /* shouldBubble */
      ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(uiState.root, strings$1.TRAILING_ICON_INTERACTION_EVENT, {
          chipId: id
        }, true);
      },
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      removeClassFromLeadingIcon: className => {
        if (leadingIcon_) {
          leadingIcon_.classList.remove(className);
        }
      },
      removeTrailingActionFocus: () => {
        var _uiState$trailingActi2;

        (_uiState$trailingActi2 = uiState.trailingAction) === null || _uiState$trailingActi2 === void 0 ? void 0 : _uiState$trailingActi2.removeFocus();
      },
      setPrimaryActionAttr: (attr, value) => uiState.primaryAttrs = _objectSpread2(_objectSpread2({}, uiState.primaryAttrs), {}, {
        [attr]: value
      }),
      setStyleProperty: (property, value) => uiState.styles = _objectSpread2(_objectSpread2({}, uiState.styles), {}, {
        [property]: value
      })
    };

    const setSelectedFromChipSet = (selected, shouldNotifyClients) => {
      foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    };

    const focusPrimaryAction = () => foundation.focusPrimaryAction();

    const focusTrailingAction = () => foundation.focusTrailingAction();

    const removeFocus = () => foundation.removeFocus();

    const toggleSelected = () => foundation.toggleSelected();

    const isSelected = () => foundation.isSelected();

    const remove = () => {
      const parent = uiState.root.parentNode;

      if (parent != null) {
        parent.removeChild(uiState.root);
      }
    };

    watch(() => props.shouldRemoveOnTrailingIconClick, nv => {
      foundation.setShouldRemoveOnTrailingIconClick(nv);
    });
    addChipElement({
      id,
      removeFocus,
      focusPrimaryAction,
      focusTrailingAction,
      setSelectedFromChipSet,
      remove
    });
    onMounted(() => {
      leadingIcon_ = uiState.root.querySelector(strings$1.LEADING_ICON_SELECTOR);
      trailingAction_ = uiState.root.querySelector(strings$1.TRAILING_ACTION_SELECTOR);
      foundation = new MDCChipFoundation(adapter);
      uiState.myListeners = {
        click: evt => {
          foundation.handleClick(evt);
        },
        keydown: evt => foundation.handleKeydown(evt),
        transitionend: evt => foundation.handleTransitionEnd(evt),
        focusin: evt => foundation.handleFocusIn(evt),
        focusout: evt => foundation.handleFocusOut(evt)
      };

      if (trailingAction_) {
        uiState.myListeners[trailingActionStrings.INTERACTION_EVENT.toLowerCase()] = evt => foundation.handleTrailingActionInteraction(evt);

        uiState.myListeners[trailingActionStrings.NAVIGATION_EVENT.toLowerCase()] = evt => foundation.handleTrailingActionNavigation(evt);
      }

      foundation.init();
      uiState.primaryAttrs.tabindex = isFilter.value ? 0 : -1;

      if (props.shouldRemoveOnTrailingIconClick !== foundation.getShouldRemoveOnTrailingIconClick()) {
        foundation.setShouldRemoveOnTrailingIconClick(props.shouldRemoveOnTrailingIconClick);
      }
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes,
      styles,
      id,
      isInput,
      isFilter,
      selected,
      haveleadingIcon,
      havetrailingIcon,
      remove,
      isSelected,
      toggleSelected,
      removeFocus,
      focusPrimaryAction,
      focusTrailingAction,
      setSelectedFromChipSet
    });
  }

};

const _hoisted_1$5 = /*#__PURE__*/createVNode("div", { class: "mdc-chip__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$4 = { role: "gridcell" };
const _hoisted_3$3 = { class: "mdc-chip__text" };
const _hoisted_4$3 = {
  key: 0,
  role: "gridcell"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_chip_checkmark = resolveComponent("mcw-chip-checkmark");
  const _component_mcw_chip_trailing_action = resolveComponent("mcw-chip-trailing-action");

  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: ["mdc-chip", _ctx.classes],
    role: "row",
    style: _ctx.styles
  }, toHandlers(_ctx.myListeners)), [
    _hoisted_1$5,
    renderSlot(_ctx.$slots, "leading-icon", {}, () => [
      (_ctx.haveleadingIcon)
        ? (openBlock(), createBlock("i", {
            key: 0,
            ref: "leading-icon",
            class: "material-icons mdc-chip__icon mdc-chip__icon--leading"
          }, toDisplayString(_ctx.leadingIcon), 513 /* TEXT, NEED_PATCH */))
        : createCommentVNode("v-if", true)
    ]),
    (_ctx.isFilter)
      ? (openBlock(), createBlock(_component_mcw_chip_checkmark, {
          key: 0,
          ref: "checkmarkEl"
        }, null, 512 /* NEED_PATCH */))
      : createCommentVNode("v-if", true),
    createVNode("span", _hoisted_2$4, [
      createVNode("span", {
        role: _ctx.isFilter ? 'checkbox' : 'button',
        tabindex: "0",
        class: "mdc-chip__primary-action"
      }, [
        createVNode("span", _hoisted_3$3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 8 /* PROPS */, ["role"])
    ]),
    renderSlot(_ctx.$slots, "trailing-icon", {}, () => [
      (_ctx.havetrailingIcon)
        ? (openBlock(), createBlock("span", _hoisted_4$3, [
            createVNode(_component_mcw_chip_trailing_action, { ref: "trailingAction" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.trailingIcon), 1 /* TEXT */)
              ]),
              _: 1 /* STABLE */
            }, 512 /* NEED_PATCH */)
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 16 /* FULL_PROPS */))
}

script$7.render = render$7;
script$7.__file = "packages/chips/chip.vue";

const {
  strings: strings$2
} = MDCChipTrailingActionFoundation;
var script$8 = {
  name: 'mcw-chip-trailing-action',

  setup() {
    const root = ref(null);
    let foundation;
    const {
      classes,
      styles
    } = useRipplePlugin$1(root);
    const adapter = {
      focus: () => {
        root.value.focus();
      },
      getAttribute: attr => root.value.getAttribute(attr),
      notifyInteraction: trigger => emitCustomEvent(root.value, strings$2.INTERACTION_EVENT, {
        trigger
      }, true),
      notifyNavigation: key => emitCustomEvent(root.value, strings$2.NAVIGATION_EVENT, {
        key
      }, true),
      setAttribute: (attr, value) => {
        root.value.setAttribute(attr, value);
      }
    };

    const onClick = evt => foundation.handleClick(evt);

    const onKeydown = evt => foundation.handleKeydown(evt);

    const isNavigable = () => foundation.isNavigable();

    const focus = () => foundation.focus();

    const removeFocus = () => foundation.removeFocus();

    onMounted(() => {
      foundation = new MDCChipTrailingActionFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      root,
      styles,
      classes,
      onClick,
      onKeydown,
      isNavigable,
      focus,
      removeFocus
    };
  }

};

const _hoisted_1$6 = /*#__PURE__*/createVNode("span", { class: "mdc-chip-trailing-action__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$5 = { class: "mdc-chip-trailing-action__icon material-icons" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    ref: "root",
    class: [_ctx.classes, "mdc-chip-trailing-action"],
    style: _ctx.styles,
    "aria-label": "Remove chip",
    tabindex: "-1",
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick && _ctx.onClick(...args))),
    onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.onKeydown && _ctx.onKeydown(...args)))
  }, [
    _hoisted_1$6,
    createVNode("span", _hoisted_2$5, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
}

script$8.render = render$8;
script$8.__file = "packages/chips/trailing-action.vue";

var chips = BasePlugin({
  mcwChip: script$7,
  mcwChipSet: script$6,
  mcwChipCheckmark: script$5,
  mcwChipTrailingAction: script$8
});

const ProgressPropType = {
  type: [Number, String],

  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }

};
var script$9 = {
  name: 'mcw-circular-progress',
  props: {
    open: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean,
    medium: Boolean,
    progress: ProgressPropType,
    tag: {
      type: String,
      default: 'div'
    }
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-circular-progress': 1,
        'mdc-circular-progress--medium': props.medium,
        'mdc-circular-progress--large': !props.medium
      },
      rootAttrs: !props.medium ? {
        style: {
          width: '48px',
          height: '48px'
        }
      } : {
        style: {
          width: '36px',
          height: '36px'
        }
      },
      circleAttrs: getCircleAttrs(props.medium, false),
      trackAttrs: getTrackAttrs(props.medium),
      indeterminateAttrs: getCircleAttrs(props.medium, true),
      viewbox: props.medium ? '0 0 36 36' : '0 0 48 48',
      root: null
    });
    let foundation;
    const adapter = {
      addClass: className => {
        uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
          [className]: true
        });
      },
      getDeterminateCircleAttribute: attributeName => {
        return uiState.circleAttrs[attributeName];
      },
      hasClass: className => uiState.root.classList.contains(className),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      removeAttribute: attributeName => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$rootAttrs = uiState.rootAttrs,
              rest = _objectWithoutProperties(_uiState$rootAttrs, [attributeName].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setAttribute: (attributeName, value) => {
        uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, {
          [attributeName]: value
        });
      },
      setDeterminateCircleAttribute: (attributeName, value) => uiState.circleAttrs = _objectSpread2(_objectSpread2({}, uiState.circleAttrs), {}, {
        [attributeName]: value
      })
    };
    watch(() => props.open, nv => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    watch(() => props.progress, nv => {
      foundation.setProgress(Number(nv));
    });
    watch(() => props.indeterminate, nv => {
      foundation.setDeterminate(!nv);
    });
    onMounted(() => {
      foundation = new MDCCircularProgressFoundation(adapter);
      foundation.init();
      foundation.setProgress(Number(props.progress));
      foundation.setDeterminate(!props.indeterminate);

      if (props.open) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    onBeforeUnmount(() => foundation.destroy());
    return _objectSpread2({}, toRefs(uiState));
  }

}; // ===
// Private functions
// ===

function getCircleAttrs(medium = false, indeterminate = true) {
  return medium ? {
    cx: '16',
    cy: '16',
    r: '12.5',
    'stroke-dasharray': '78.54',
    'stroke-dashoffset': indeterminate ? '39.27' : '78.54',
    'stroke-width': '3'
  } : {
    cx: '24',
    cy: '24',
    r: '18',
    'stroke-dasharray': '113.097',
    'stroke-dashoffset': indeterminate ? '56.549' : '113.097',
    'stroke-width': '4'
  };
}

function getTrackAttrs(medium = false) {
  const _getCircleAttrs = getCircleAttrs(medium),
        rest = _objectWithoutProperties(_getCircleAttrs, ["stroke-dasharray", "stroke-dashoffset"]);

  return rest;
}

const _hoisted_1$7 = { class: "mdc-circular-progress__determinate-container" };
const _hoisted_2$6 = { class: "mdc-circular-progress__indeterminate-container" };
const _hoisted_3$4 = { class: "mdc-circular-progress__spinner-layer" };
const _hoisted_4$4 = { class: "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left" };
const _hoisted_5$1 = { class: "mdc-circular-progress__gap-patch" };
const _hoisted_6$1 = { class: "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Fragment, null, [
    createCommentVNode("must be no space between divs"),
    createCommentVNode(" prettier-ignore "),
    createVNode("div", mergeProps({
      ref: "root",
      class: _ctx.classes,
      role: "progressbar"
    }, _ctx.rootAttrs), [
      createVNode("div", _hoisted_1$7, [
        (openBlock(), createBlock("svg", {
          class: "mdc-circular-progress__determinate-circle-graphic",
          viewBox: _ctx.viewbox,
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          createVNode("circle", mergeProps({ class: "mdc-circular-progress__determinate-track" }, _ctx.trackAttrs), null, 16 /* FULL_PROPS */),
          createVNode("circle", mergeProps({ class: "mdc-circular-progress__determinate-circle" }, _ctx.circleAttrs), null, 16 /* FULL_PROPS */)
        ], 8 /* PROPS */, ["viewBox"]))
      ]),
      createVNode("div", _hoisted_2$6, [
        createVNode("div", _hoisted_3$4, [
          createVNode("div", _hoisted_4$4, [
            (openBlock(), createBlock("svg", {
              class: "mdc-circular-progress__indeterminate-circle-graphic",
              viewBox: _ctx.viewbox,
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("circle", _ctx.indeterminateAttrs, null, 16 /* FULL_PROPS */)
            ], 8 /* PROPS */, ["viewBox"])),
            createCommentVNode("must be no space between divs")
          ]),
          createVNode("div", _hoisted_5$1, [
            (openBlock(), createBlock("svg", {
              class: "mdc-circular-progress__indeterminate-circle-graphic",
              viewBox: _ctx.viewbox,
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("circle", _ctx.indeterminateAttrs, null, 16 /* FULL_PROPS */)
            ], 8 /* PROPS */, ["viewBox"]))
          ]),
          createVNode("div", _hoisted_6$1, [
            (openBlock(), createBlock("svg", {
              class: "mdc-circular-progress__indeterminate-circle-graphic",
              viewBox: _ctx.viewbox,
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("circle", _ctx.indeterminateAttrs, null, 16 /* FULL_PROPS */)
            ], 8 /* PROPS */, ["viewBox"]))
          ])
        ])
      ])
    ], 16 /* FULL_PROPS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$9.render = render$9;
script$9.__file = "packages/circular-progress/circular-progress.vue";

var circularProgress = BasePlugin({
  mcwCircularProgress: script$9
});

class CheckboxAdapter {
  constructor(mcwCheckbox) {
    this.checkbox = mcwCheckbox;
  }

  get checked() {
    return this.checkbox.isChecked();
  }

  set checked(checked) {
    this.checkbox.setChecked(checked);
  }

  get indeterminate() {
    return this.checkbox.isIndeterminate();
  }

  set indeterminate(indeterminate) {
    this.checkbox.setIndeterminate(indeterminate);
  }

  destroy() {// noop
  }

}

var _templateObject;
var script$a = {
  name: 'mcw-data-table',
  props: {
    sticky: {
      type: Boolean
    }
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-data-table--sticky-header': props.sticky
      },
      root: null
    });

    const checkboxFactory = el => {
      return el.__vue__ ? new CheckboxAdapter(el.__vue__) : new MDCCheckbox(el);
    };

    const {
      cssClasses,
      selectors,
      dataAttributes,
      SortValue,
      messages
    } = test;
    let foundation;
    let headerRow;
    let rowCheckboxList;
    let content;
    let headerRowCheckbox;
    let handleHeaderRowCheckboxChange;
    let handleRowCheckboxChange;
    let headerRowClickListener;

    const getRows = () => {
      return foundation.getRows();
    };

    const layout = () => {
      foundation.layout();
    };

    const getHeaderCells = () => {
      return [].slice.call(uiState.root.querySelectorAll(selectors.HEADER_CELL));
    };

    const getRowByIndex_ = index => {
      return getRows()[index];
    };

    const getRowIdByIndex_ = index => {
      return getRowByIndex_(index).getAttribute(dataAttributes.ROW_ID);
    };

    const getSelectedRowIds = () => {
      return foundation.getSelectedRowIds();
    };

    const getSortStatusMessageBySortValue = sortValue => {
      switch (sortValue) {
        case SortValue.ASCENDING:
          return messages.SORTED_IN_ASCENDING;

        case SortValue.DESCENDING:
          return messages.SORTED_IN_DESCENDING;

        default:
          return '';
      }
    };

    const handleHeaderRowClick = event => {
      const headerCell = closest(event.target, selectors.HEADER_CELL_WITH_SORT);

      if (!headerCell) {
        return;
      }

      const columnId = headerCell.getAttribute(dataAttributes.COLUMN_ID);
      const columnIndex = getHeaderCells().indexOf(headerCell);

      if (columnIndex === -1) {
        return;
      }

      foundation.handleSortAction({
        columnId,
        columnIndex,
        headerCell
      });
    };

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      getHeaderCellElements: () => getHeaderCells(),
      getHeaderCellCount: () => getHeaderCells().length,
      getAttributeByHeaderCellIndex: (index, attribute) => {
        return getHeaderCells()[index].getAttribute(attribute);
      },
      setAttributeByHeaderCellIndex: (index, attribute, value) => {
        getHeaderCells()[index].setAttribute(attribute, value);
      },
      setClassNameByHeaderCellIndex: (index, className) => {
        getHeaderCells()[index].classList.add(className);
      },
      removeClassNameByHeaderCellIndex: (index, className) => {
        getHeaderCells()[index].classList.remove(className);
      },
      notifySortAction: data => {
        emit('mdc-data-table:sorted', {
          data
        }, true);
      },
      getTableContainerHeight: () => {
        const tableContainer = uiState.root.querySelector(_templateObject || (_templateObject = _taggedTemplateLiteral([".", ""])), cssClasses.CONTAINER);

        if (!tableContainer) {
          throw new Error('MDCDataTable: Table container element not found.');
        }

        return tableContainer.getBoundingClientRect().height;
      },
      getTableHeaderHeight: () => {
        const tableHeader = uiState.root.querySelector(selectors.HEADER_ROW);

        if (!tableHeader) {
          throw new Error('MDCDataTable: Table header element not found.');
        }

        return tableHeader.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: styles => {
        const progressIndicator = uiState.root.querySelector(selectors.PROGRESS_INDICATOR);

        if (!progressIndicator) {
          throw new Error('MDCDataTable: Progress indicator element not found.');
        }

        Object.assign(progressIndicator.style, styles);
      },
      addClassAtRowIndex: (rowIndex, className) => getRows()[rowIndex].classList.add(className),
      getRowCount: () => getRows().length,
      getRowElements: () => [].slice.call(uiState.root.querySelectorAll(selectors.ROW)),
      getRowIdAtIndex: rowIndex => getRows()[rowIndex].getAttribute(dataAttributes.ROW_ID),
      getRowIndexByChildElement: el => {
        return getRows().indexOf(closest(el, selectors.ROW));
      },
      getSelectedRowCount: () => uiState.root.querySelectorAll(selectors.ROW_SELECTED).length,
      isCheckboxAtRowIndexChecked: rowIndex => rowCheckboxList[rowIndex].checked,
      isHeaderRowCheckboxChecked: () => headerRowCheckbox.checked,
      isRowsSelectable: () => !!uiState.root.querySelector(selectors.ROW_CHECKBOX),
      notifyRowSelectionChanged: data => {
        emit('mdcdatatable:rowselectionchanged', {
          row: getRowByIndex_(data.rowIndex),
          rowId: getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected
        });
      },
      notifySelectedAll: () => emit('mdcdatatable:selectedall', {}),
      notifyUnselectedAll: () => emit('mdcdatatable:unselectedall', {}),
      registerHeaderRowCheckbox: () => {
        var _headerRowCheckbox;

        (_headerRowCheckbox = headerRowCheckbox) === null || _headerRowCheckbox === void 0 ? void 0 : _headerRowCheckbox.destroy();
        const checkboxEl = uiState.root.querySelector(selectors.HEADER_ROW_CHECKBOX);
        headerRowCheckbox = checkboxFactory(checkboxEl);
      },
      registerRowCheckboxes: () => {
        if (rowCheckboxList) {
          rowCheckboxList.forEach(checkbox => checkbox.destroy());
        }

        rowCheckboxList = [];
        getRows().forEach(rowEl => {
          const el = rowEl.querySelector(selectors.ROW_CHECKBOX);
          const checkbox = checkboxFactory(el);
          rowCheckboxList.push(checkbox);
        });
      },
      removeClassAtRowIndex: (rowIndex, className) => {
        getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: (rowIndex, attr, value) => {
        getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: checked => headerRowCheckbox.checked = checked,
      setHeaderRowCheckboxIndeterminate: indeterminate => headerRowCheckbox.indeterminate = indeterminate,
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) => rowCheckboxList[rowIndex].checked = checked,
      setSortStatusLabelByHeaderCellIndex: (columnIndex, sortValue) => {
        const headerCell = getHeaderCells()[columnIndex];
        const sortStatusLabel = headerCell.querySelector(selectors.SORT_STATUS_LABEL);

        if (!sortStatusLabel) {
          return;
        }

        sortStatusLabel.textContent = getSortStatusMessageBySortValue(sortValue);
      }
    };
    onMounted(() => {
      headerRow = uiState.root.querySelector(".".concat(cssClasses.HEADER_ROW));

      handleHeaderRowCheckboxChange = () => foundation.handleHeaderRowCheckboxChange();

      headerRow.addEventListener('mdccheckbox:change', handleHeaderRowCheckboxChange);

      headerRowClickListener = event => {
        handleHeaderRowClick(event);
      };

      headerRow.addEventListener('click', headerRowClickListener);
      content = uiState.root.querySelector(".".concat(cssClasses.CONTENT));

      handleRowCheckboxChange = event => foundation.handleRowCheckboxChange(event);

      content.addEventListener('mdccheckbox:change', handleRowCheckboxChange);
      foundation = new MDCDataTableFoundation(adapter);
      foundation.init();
      layout();
    });
    onBeforeUnmount(() => {
      var _headerRowCheckbox2, _headerRowCheckbox2$d, _rowCheckboxList;

      headerRow.removeEventListener('mdccheckbox:change', handleHeaderRowCheckboxChange);
      headerRow.removeEventListener('click', headerRowClickListener);
      content.removeEventListener('mdccheckbox:change', handleRowCheckboxChange);
      (_headerRowCheckbox2 = headerRowCheckbox) === null || _headerRowCheckbox2 === void 0 ? void 0 : (_headerRowCheckbox2$d = _headerRowCheckbox2.destroy) === null || _headerRowCheckbox2$d === void 0 ? void 0 : _headerRowCheckbox2$d.call(_headerRowCheckbox2);
      (_rowCheckboxList = rowCheckboxList) === null || _rowCheckboxList === void 0 ? void 0 : _rowCheckboxList.forEach(checkbox => {
        var _checkbox$destroy;

        (_checkbox$destroy = checkbox.destroy) === null || _checkbox$destroy === void 0 ? void 0 : _checkbox$destroy.call(checkbox);
      });
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      getSelectedRowIds,
      layout
    });
  }

};

const _hoisted_1$8 = { class: "mdc-data-table__table-container" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    ref: "root",
    class: [_ctx.classes, "mdc-data-table"]
  }, [
    createVNode("div", _hoisted_1$8, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$a.render = render$a;
script$a.__file = "packages/data-table/data-table.vue";

var dataTable = BasePlugin({
  mcwDataTable: script$a
});

var mcwDialogButton = {
  name: 'mcw-dialog-button',
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean
  },

  setup(props, {
    attrs,
    slots
  }) {
    return () => {
      return h(resolveComponent('mcw-button'), _objectSpread2(_objectSpread2({}, attrs), {}, {
        class: ['mdc-button', 'mdc-dialog__button'],
        'data-mdc-dialog-action': props.action,
        'data-mdc-dialog-button-default': props.isDefault,
        'data-mdc-dialog-initial-focus': props.isInitialFocus
      }), {
        default: () => {
          var _slots$default;

          return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
        }
      });
    };
  }

};

var mcwDialogContent = {
  name: 'mcw-dialog-content',
  props: {
    tag: {
      type: String,

      default() {
        return 'div';
      }

    }
  },

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h(props.tag, {
        class: ['mdc-dialog__content']
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

var mcwDialogFooter = {
  name: 'mcw-dialog-footer',
  props: {
    tag: {
      type: String,

      default() {
        return 'div';
      }

    }
  },

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h(props.tag, {
        class: ['mdc-dialog__actions']
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

var mcwDialogTitle = {
  name: 'mcw-dialog-title',
  props: {
    tag: {
      type: String,

      default() {
        return 'h2';
      }

    }
  },

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h(props.tag, {
        class: ['mdc-dialog__title']
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

const {
  cssClasses,
  strings: strings$3
} = MDCDialogFoundation;
const LAYOUT_EVENTS = ['resize', 'orientationchange'];
var script$b = {
  name: 'mcw-dialog',
  components: {
    mcwButton: script$2
  },
  props: {
    autoStackButtons: Boolean,
    escapeKeyAction: String,
    scrollable: Boolean,
    modelValue: Boolean,
    role: String,
    scrimClickAction: {
      type: String,
      default: 'close'
    },
    tag: {
      type: String,
      default: 'div'
    },
    ariaLabelledby: String,
    ariaDescribedby: String
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-dialog': 1
      },
      styles: {},
      container: null,
      root: null
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
      return document.querySelector("[".concat(MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE, "]"));
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
          focusTrap = createFocusTrapInstance(uiState.root, focusTrapFactory_, getInitialFocusEl_() || void 0);
        }

        foundation.open();
      } else {
        foundation.close();
      }
    };

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => uiState.root.classList.contains(className),
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetMatches: (target, selector) => matches$1(target, selector),
      trapFocus: initialFocusEl => {
        var _focusTrap;

        return (_focusTrap = focusTrap) === null || _focusTrap === void 0 ? void 0 : _focusTrap.trapFocus();
      },
      releaseFocus: () => {
        var _focusTrap2;

        return (_focusTrap2 = focusTrap) === null || _focusTrap2 === void 0 ? void 0 : _focusTrap2.releaseFocus();
      },
      getInitialFocusEl: () => getInitialFocusEl_(),
      isContentScrollable: () => isScrollable(content_),
      areButtonsStacked: () => areTopsMisaligned(buttons_),
      getActionFromEvent: event => {
        const elem = closest$1(event.target, "[".concat(strings$3.ACTION_ATTRIBUTE, "]"));
        return elem === null || elem === void 0 ? void 0 : elem.getAttribute(strings$3.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: () => {
        var _defaultButton;

        (_defaultButton = defaultButton) === null || _defaultButton === void 0 ? void 0 : _defaultButton.click();
      },
      reverseButtons: () => {
        const buttons = buttons_;
        return buttons && buttons.reverse().forEach(button => {
          var _button$parentElement;

          return (_button$parentElement = button.parentElement) === null || _button$parentElement === void 0 ? void 0 : _button$parentElement.appendChild(button);
        });
      },
      notifyOpening: () => {
        emit('mdcdialog:opening', {});
        LAYOUT_EVENTS.forEach(evt => window.addEventListener(evt, handleLayout));
        document.addEventListener('keydown', handleDocumentKeyDown);
      },
      notifyOpened: () => emit('mdcdialog:opened', {}),
      notifyClosing: action => {
        emit('update:modelValue', false);
        emit('mdcdialog:closing', action ? {
          action
        } : {});
        LAYOUT_EVENTS.forEach(evt => window.removeEventListener(evt, handleLayout));
        document.removeEventListener('keydown', handleDocumentKeyDown);
      },
      notifyClosed: action => {
        emit('mdcdialog:closed', action ? {
          action
        } : {});
      }
    };
    watch(() => props.modelValue, nv => {
      onOpen(nv);
    });
    onMounted(() => {
      const {
        modelValue,
        autoStackButtons,
        escapeKeyAction,
        scrimClickAction
      } = props;
      buttons_ = [].slice.call(uiState.root.querySelectorAll(cssClasses.BUTTON));
      defaultButton = uiState.root.querySelector("[".concat(strings$3.BUTTON_DEFAULT_ATTRIBUTE, "]"));
      const container = uiState.root.querySelector(strings$3.CONTAINER_SELECTOR);

      if (!container) {
        throw new Error("Dialog component requires a ".concat(strings$3.CONTAINER_SELECTOR, " container element"));
      }

      content_ = uiState.root.querySelector(strings$3.CONTENT_SELECTOR);
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
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      handleLayout,
      handleDocumentKeyDown,
      onKeydown,
      onClick
    });
  }

};

const _hoisted_1$9 = {
  ref: "container",
  class: "mdc-dialog__container"
};
const _hoisted_2$7 = /*#__PURE__*/createVNode("div", { class: "mdc-dialog__scrim" }, null, -1 /* HOISTED */);

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles,
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick && _ctx.onClick(...args))),
    onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.onKeydown && _ctx.onKeydown(...args)))
  }, [
    createVNode("div", _hoisted_1$9, [
      createVNode("div", {
        ref: "surface",
        class: "mdc-dialog__surface",
        role: "alertdialog",
        "aria-modal": "true",
        "aria-labelledby": _ctx.ariaLabelledby,
        "aria-describedby": _ctx.ariaDescribedby
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8 /* PROPS */, ["aria-labelledby", "aria-describedby"])
    ], 512 /* NEED_PATCH */),
    _hoisted_2$7
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
}

script$b.render = render$b;
script$b.__file = "packages/dialog/dialog.vue";

var dialog = BasePlugin({
  mcwDialog: script$b,
  mcwDialogTitle,
  mcwDialogFooter,
  mcwDialogButton,
  mcwDialogContent
});

const {
  strings: strings$4
} = MDCDismissibleDrawerFoundation;
var script$c = {
  name: 'mcw-drawer',
  props: {
    modelValue: Boolean,
    modal: Boolean,
    dismissible: Boolean,
    toolbarSpacer: Boolean
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-drawer': 1,
        'mdc-drawer--modal': props.modal,
        'mdc-drawer--dismissible': props.dismissible && !props.modal
      },
      drawer: null
    });

    const focusTrapFactory_ = el => new FocusTrap$1(el);

    const show = () => foundation.open();

    const close = () => foundation.close();

    const toggle = () => foundation.isOpen() ? foundation.close() : foundation.open();

    const isOpen = () => foundation.isOpen();

    let foundation;
    let focusTrap_;
    let previousFocus_;

    const handleScrimClick = () => foundation.handleScrimClick();

    const handleKeydown = evt => foundation.handleKeydown(evt);

    const handleTransitionEnd = evt => foundation.handleTransitionEnd(evt);

    const onChange = event => {
      emit('update:modelValue', event);
    };

    const onListAction = () => props.modal && close();

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => !!uiState.classes[className],
      elementHasClass: (element, className) => element.classList.contains(className),
      saveFocus: () => {
        previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        var _previousFocus_;

        const previousFocus = (_previousFocus_ = previousFocus_) === null || _previousFocus_ === void 0 ? void 0 : _previousFocus_.focus;

        if (previousFocus && uiState.drawer.contains(document.activeElement)) {
          previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = uiState.drawer.querySelector(".".concat(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS));

        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        emitCustomEvent(uiState.drawer, strings$4.CLOSE_EVENT, {}, true
        /* shouldBubble */
        );
        emit('update:modelValue', false);
        emit('close');
      },
      notifyOpen: () => {
        emitCustomEvent(uiState.drawer, strings$4.OPEN_EVENT, {}, true
        /* shouldBubble */
        );
        emit('update:modelValue', true);
        emit('open');
      },
      trapFocus: () => focusTrap_.trapFocus(),
      releaseFocus: () => focusTrap_.releaseFocus()
    };
    watch(() => props.modelValue, nv => {
      if (nv) {
        var _foundation;

        (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.open();
      } else {
        var _foundation2;

        (_foundation2 = foundation) === null || _foundation2 === void 0 ? void 0 : _foundation2.close();
      }
    });
    onMounted(() => {
      const {
        DISMISSIBLE,
        MODAL
      } = MDCDismissibleDrawerFoundation.cssClasses;

      if (props.dismissible) {
        foundation = new MDCDismissibleDrawerFoundation(adapter);
      } else if (props.modal) {
        foundation = new MDCModalDrawerFoundation(adapter);
      } else {
        throw new Error("mcwDrawer: Failed to instantiate component. Supported variants are ".concat(DISMISSIBLE, " and ").concat(MODAL, "."));
      }

      foundation.init();

      if (props.modal) {
        focusTrap_ = createFocusTrapInstance$1(uiState.drawer, focusTrapFactory_);
      }
    });
    onBeforeUnmount(() => {
      foundation.close();
      foundation.destroy();
      foundation = null;
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      onChange,
      show,
      close,
      toggle,
      isOpen,
      onListAction,
      handleScrimClick,
      handleKeydown,
      handleTransitionEnd
    });
  }

};

const _hoisted_1$a = { class: "mdc-drawer__content" };
const _hoisted_2$8 = {
  key: 1,
  class: "drawer-wrapper"
};
const _hoisted_3$5 = { class: "mdc-drawer__content" };

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_list = resolveComponent("mcw-list");

  return (openBlock(), createBlock(Fragment, null, [
    createCommentVNode(" <div ref=\"root\"> "),
    (!_ctx.modal)
      ? (openBlock(), createBlock("aside", {
          key: 0,
          ref: "drawer",
          class: _ctx.classes,
          onKeydown: _cache[1] || (_cache[1] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args))),
          onTransitionend: _cache[2] || (_cache[2] = (...args) => (_ctx.handleTransitionEnd && _ctx.handleTransitionEnd(...args)))
        }, [
          renderSlot(_ctx.$slots, "header"),
          createVNode("div", _hoisted_1$a, [
            createVNode(_component_mcw_list, {
              "wrap-focus": true,
              tag: "nav",
              "onMdclist:action": _ctx.onListAction,
              "single-selection": "",
              "selected-index": 0
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3 /* FORWARDED */
            }, 8 /* PROPS */, ["onMdclist:action"])
          ])
        ], 34 /* CLASS, HYDRATE_EVENTS */))
      : (openBlock(), createBlock("div", _hoisted_2$8, [
          createVNode("aside", {
            ref: "drawer",
            class: _ctx.classes,
            onKeydown: _cache[3] || (_cache[3] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args))),
            onTransitionend: _cache[4] || (_cache[4] = (...args) => (_ctx.handleTransitionEnd && _ctx.handleTransitionEnd(...args)))
          }, [
            renderSlot(_ctx.$slots, "header"),
            createVNode("div", _hoisted_3$5, [
              createVNode(_component_mcw_list, {
                "wrap-focus": true,
                tag: "nav",
                "single-selection": "",
                "selected-index": 0,
                "onMdclist:action": _ctx.onListAction
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3 /* FORWARDED */
              }, 8 /* PROPS */, ["onMdclist:action"])
            ])
          ], 34 /* CLASS, HYDRATE_EVENTS */),
          (_ctx.modal)
            ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mdc-drawer-scrim",
                onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.handleScrimClick && _ctx.handleScrimClick(...args)))
              }))
            : createCommentVNode("v-if", true)
        ]))
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$c.render = render$c;
script$c.__file = "packages/drawer/drawer.vue";

var drawer = BasePlugin({
  mcwDrawer: script$c
});

var script$d = {
  name: 'mcw-fab',
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String
  },
  components: {
    CustomLink
  },

  setup(props, {
    slots
  }) {
    const root = ref(null);
    const uiState = reactive({
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': props.mini,
        'mdc-fab--extended': props.label || slots.default,
        'mdc-fab--exited': props.exited
      }
    });
    const {
      classes: rippleClasses,
      styles
    } = useRipplePlugin$1(root);
    const classes = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    watch(() => props.icon, nv => {
      uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        'material-icons': nv
      });
    });
    watch(() => props.mini, nv => {
      uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        'mdc-fab--mini': nv
      });
    });
    watch(() => props.exited, nv => {
      uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        'mdc-fab--exited': nv
      });
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes,
      root,
      styles
    });
  }

};

const _hoisted_1$b = /*#__PURE__*/createVNode("div", { class: "mdc-fab__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$9 = { class: "mdc-fab__icon material-icons" };
const _hoisted_3$6 = { class: "mdc-fab__label" };

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, {
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles,
    tag: "button"
  }, {
    default: withCtx(() => [
      _hoisted_1$b,
      renderSlot(_ctx.$slots, "icon", {}, () => [
        createVNode("span", _hoisted_2$9, toDisplayString(_ctx.icon), 1 /* TEXT */)
      ]),
      createVNode("span", _hoisted_3$6, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
        ])
      ])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class", "style"]))
}

script$d.render = render$d;
script$d.__file = "packages/fab/fab.vue";

var fab = BasePlugin({
  mcwFAB: script$d
});

var script$e = {
  name: 'mcw-floating-label',
  props: {
    required: {
      type: Boolean
    }
  },

  setup(props) {
    const uiState = reactive({
      labelClasses: {
        'mdc-floating-label': true,
        'mdc-floating-label--required': props.required
      },
      root: null
    });
    let foundation;
    const adapter = {
      addClass: className => uiState.labelClasses = _objectSpread2(_objectSpread2({}, uiState.labelClasses), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$labelClasses = uiState.labelClasses,
              rest = _objectWithoutProperties(_uiState$labelClasses, [className].map(_toPropertyKey));

        uiState.labelClasses = rest;
      },
      getWidth: () => uiState.root.scrollWidth,
      registerInteractionHandler: (evtType, handler) => {
        uiState.root.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: (evtType, handler) => {
        uiState.root.removeEventListener(evtType, handler);
      }
    };

    const getWidth = () => {
      return foundation.getWidth();
    };

    const setRequired = isRequired => {
      return foundation.setRequired(isRequired);
    };

    const float = shouldFloat => {
      foundation.float(shouldFloat);
    };

    const shake = shouldShake => {
      foundation.shake(shouldShake);
    };

    onMounted(() => {
      foundation = new MDCFloatingLabelFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      getWidth,
      float,
      shake,
      setRequired
    });
  }

};

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", {
    ref: "root",
    class: _ctx.labelClasses
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$e.render = render$e;
script$e.__file = "packages/floating-label/floating-label.vue";

var floatingLabel = BasePlugin({
  mcwFloatingLabel: script$e
});

var script$f = {
  name: 'mcw-icon-button',
  // model: {
  //   prop: 'isOn',
  //   event: 'change',
  // },
  props: {
    modelValue: Boolean,
    disabled: Boolean
  },

  setup(props, {
    emit,
    attrs
  }) {
    const uiState = reactive({
      classes: {
        'mdc-icon-button': 1,
        'material-icons': 1
      }
    });
    const root = ref(null);
    const {
      CHANGE_EVENT
    } = MDCIconButtonToggleFoundation.strings;
    const {
      classes: rippleClasses,
      styles
    } = useRipplePlugin$1(root, {
      isUnbounded: () => true
    });
    let foundation;
    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.classes[className]),
      setAttr: (attrName, attrValue) => root.value.setAttribute(attrName, attrValue),
      getAttr: attrName => root.value.getAttribute(attrName),
      notifyChange: evtData => {
        emit(CHANGE_EVENT, evtData);
        emit('update:modelValue', evtData.isOn);
      }
    };
    const classes = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    watch(() => props.modelValue, nv => {
      foundation.toggle(nv);
    });
    const tag = computed(() => {
      const isLink = Boolean(attrs.href);
      return isLink ? 'a' : 'button';
    });

    const onClick = evt => foundation.handleClick(evt);

    onMounted(() => {
      foundation = new MDCIconButtonToggleFoundation(adapter);
      foundation.init();
      foundation.toggle(props.modelValue);
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes,
      styles,
      root,
      tag,
      onClick
    });
  }

};

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: _ctx.classes,
    style: _ctx.styles,
    ref: "root",
    onClick: _ctx.onClick,
    "aria-pressed": "false",
    disabled: _ctx.disabled
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class", "style", "onClick", "disabled"]))
}

script$f.render = render$f;
script$f.__file = "packages/icon-button/icon-button.vue";

var mcwIconToggle = {
  name: 'mcw-icon-toggle',
  props: {
    isOn: Boolean
  },

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h('i', {
        class: {
          'material-icons': 1,
          'mdc-icon-button__icon': true,
          'mdc-icon-button__icon--on': props.isOn
        }
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

var iconButton = BasePlugin({
  mcwIconButton: script$f,
  mcwIconToggle
});

const spanOptions_ = {
  type: [String, Number],
  default: null,
  validator: value => {
    const num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  }
};
var script$g = {
  name: 'mcw-layout-cell',
  props: {
    span: spanOptions_,
    order: spanOptions_,
    phone: spanOptions_,
    tablet: spanOptions_,
    desktop: spanOptions_,
    align: {
      type: String,
      validator: value => ['top', 'bottom', 'middle'].indexOf(value) !== -1
    }
  },

  setup(props) {
    const classes = computed(() => {
      const cssClasses = [];

      if (props.span) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(props.span));
      }

      if (props.order) {
        cssClasses.push("mdc-layout-grid__cell--order-".concat(props.order));
      }

      if (props.phone) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(props.phone, "-phone"));
      }

      if (props.tablet) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(props.tablet, "-tablet"));
      }

      if (props.desktop) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(props.desktop, "-desktop"));
      }

      if (props.align) {
        cssClasses.push("mdc-layout-grid__cell--align-".concat(props.align));
      }

      return cssClasses;
    });
    return {
      classes
    };
  }

};

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: [_ctx.classes, "mdc-layout-cell mdc-layout-grid__cell"]
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$g.render = render$g;
script$g.__file = "packages/layout-grid/layout-cell.vue";

var script$h = {
  name: 'mcw-layout-grid',
  props: {
    fixedColumWidth: Boolean,
    alignLeft: Boolean,
    alignRight: Boolean
  },

  setup(props) {
    const classes = computed(() => {
      return {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': props.fixedColumnWidth,
        'mdc-layout-grid--align-left': props.alignLeft,
        'mdc-layout-grid--align-right': props.alignRight
      };
    });
    return {
      classes
    };
  }

};

const _hoisted_1$c = { class: "mdc-layout-grid__inner" };

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", { class: _ctx.classes }, [
    createVNode("div", _hoisted_1$c, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$h.render = render$h;
script$h.__file = "packages/layout-grid/layout-grid.vue";

var script$i = {
  name: 'mcw-layout-inner-grid'
};

const _hoisted_1$d = { class: "mdc-layout-inner-grid mdc-layout-grid__inner" };

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$d, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$i.render = render$i;
script$i.__file = "packages/layout-grid/layout-inner-grid.vue";

var layoutGrid = BasePlugin({
  mcwLayoutGrid: script$h,
  mcwLayoutCell: script$g,
  mcwLayoutInnerGrid: script$i
});

var script$j = {
  name: 'mcw-line-ripple',

  setup() {
    const uiState = reactive({
      lineClasses: {
        'mdc-line-ripple': 1
      },
      lineStyles: {}
    }); // note: do not call the property 'foundation' as the tests will then
    // expect all methods to be implemented, and we handle transitionend locally.

    let foundation_;
    const adapter = {
      addClass: className => uiState.lineClasses = _objectSpread2(_objectSpread2({}, uiState.lineClasses), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$lineClasses = uiState.lineClasses,
              rest = _objectWithoutProperties(_uiState$lineClasses, [className].map(_toPropertyKey));

        uiState.lineClasses = rest;
      },
      hasClass: className => {
        return Boolean(uiState.lineClasses[className]);
      },
      setStyle: (name, value) => uiState.lineStyles = _objectSpread2(_objectSpread2({}, uiState.lineStyles), {}, {
        [name]: value
      })
    };

    const setRippleCenter = xCoordinate => {
      foundation_.setRippleCenter(xCoordinate);
    };

    const activate = () => {
      foundation_.activate();
    };

    const deactivate = () => {
      foundation_.deactivate();
    };

    const onTransitionEnd = evt => foundation_.handleTransitionEnd(evt);

    onMounted(() => {
      foundation_ = new MDCLineRippleFoundation(adapter);
      foundation_.init();
    });
    onBeforeUnmount(() => {
      foundation_.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      setRippleCenter,
      activate,
      deactivate,
      onTransitionEnd
    });
  }

};

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", {
    class: _ctx.lineClasses,
    style: _ctx.lineStyles,
    onTransitionend: _cache[1] || (_cache[1] = (...args) => (_ctx.onTransitionEnd && _ctx.onTransitionEnd(...args)))
  }, null, 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
}

script$j.render = render$j;
script$j.__file = "packages/line-ripple/line-ripple.vue";

var lineRipple = BasePlugin({
  mcwLineRipple: script$j
});

const progressPropType_ = {
  type: [Number, String],

  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }

};
var script$k = {
  name: 'mcw-linear-progress',
  props: {
    open: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean,
    progress: progressPropType_,
    buffer: progressPropType_,
    bufferingDots: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-linear-progress': 1
      },
      bufferbarStyles: {},
      primaryStyles: {},
      rootAttrs: {
        'aria-valuemin': 0,
        'aria-valuemax': 1
      },
      rootStyles: {},
      root: null
    });
    let foundation;
    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      forceLayout: () => uiState.root.offsetWidth,
      setBufferBarStyle: (styleProperty, value) => uiState.bufferbarStyles = _objectSpread2(_objectSpread2({}, uiState.bufferbarStyles), {}, {
        [styleProperty]: value
      }),
      setPrimaryBarStyle: (styleProperty, value) => uiState.primaryStyles = _objectSpread2(_objectSpread2({}, uiState.primaryStyles), {}, {
        [styleProperty]: value
      }),
      hasClass: className => uiState.root.classList.contains(className),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      setAttribute: (attributeName, value) => uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, {
        [attributeName]: value
      }),
      removeAttribute: attributeName => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$rootAttrs = uiState.rootAttrs,
              rest = _objectWithoutProperties(_uiState$rootAttrs, [attributeName].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setStyle: (name, value) => {
        uiState.rootStyles = _objectSpread2(_objectSpread2({}, uiState.rootStyles), {}, {
          [name]: value
        });
      },
      attachResizeObserver: callback => {
        if (window.ResizeObserver) {
          const ro = new ResizeObserver(callback);
          ro.observe(uiState.root);
          return ro;
        }

        return null;
      },
      getWidth: () => uiState.root.offsetWidth
    };
    watch(() => props.open, nv => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    watch(() => props.progress, nv => {
      foundation.setProgress(Number(nv));
    });
    watch(() => props.buffer, nv => {
      foundation.setBuffer(Number(nv));
    });
    watch(() => props.indeterminate, nv => {
      foundation.setDeterminate(!nv);
    });
    onMounted(() => {
      foundation = new MDCLinearProgressFoundation(adapter);
      foundation.init();
      foundation.setProgress(Number(props.progress));
      foundation.setBuffer(Number(props.buffer));
      foundation.setDeterminate(!props.indeterminate);

      if (props.open) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    onBeforeUnmount(() => foundation.destroy());
    return _objectSpread2({}, toRefs(uiState));
  }

};

const _hoisted_1$e = {
  ref: "buffer",
  class: "mdc-linear-progress__buffer"
};
const _hoisted_2$a = /*#__PURE__*/createVNode("div", { class: "mdc-linear-progress__buffer-dots" }, null, -1 /* HOISTED */);
const _hoisted_3$7 = /*#__PURE__*/createVNode("span", { class: "mdc-linear-progress__bar-inner" }, null, -1 /* HOISTED */);
const _hoisted_4$5 = {
  ref: "secondary",
  class: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
};
const _hoisted_5$2 = /*#__PURE__*/createVNode("span", { class: "mdc-linear-progress__bar-inner" }, null, -1 /* HOISTED */);

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes,
    style: _ctx.rootStyles,
    role: "progressbar"
  }, _ctx.rootAttrs), [
    createVNode("div", _hoisted_1$e, [
      createVNode("div", {
        class: "mdc-linear-progress__buffer-bar",
        style: _ctx.bufferbarStyles
      }, null, 4 /* STYLE */),
      _hoisted_2$a
    ], 512 /* NEED_PATCH */),
    createVNode("div", {
      ref: "primary",
      class: "mdc-linear-progress__bar mdc-linear-progress__primary-bar",
      style: _ctx.primaryStyles
    }, [
      _hoisted_3$7
    ], 4 /* STYLE */),
    createVNode("div", _hoisted_4$5, [
      _hoisted_5$2
    ], 512 /* NEED_PATCH */)
  ], 16 /* FULL_PROPS */))
}

script$k.render = render$k;
script$k.__file = "packages/linear-progress/linear-progress.vue";

var linearProgress = BasePlugin({
  mcwLinearProgress: script$k
});

let itemId = 0;
var script$l = {
  name: 'mcw-list-item',
  inheritAttrs: false,
  props: {
    twoLine: String,
    disabled: Boolean,
    icon: [String, Boolean],
    groupIcon: String,
    name: String,
    trailing: Boolean
  },
  components: {
    CustomLink
  },

  setup(props, {
    slots,
    attrs
  }) {
    const root = ref(null);
    const myItemId = itemId++;
    const uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled
      },
      attrs: {}
    });

    if (attrs.class) {
      uiState.classes[attrs.class] = 1;
    }

    const registerListItem = inject('registerListItem');
    const radioChecked = computed(() => {
      return attrs['aria-checked'] == 'true';
    });
    const checkbox = computed(() => !props.trailing && attrs.role == 'checkbox');
    const radio = computed(() => !props.trailing && attrs.role == 'radio');
    const trailingRadio = computed(() => props.trailing && attrs.role == 'radio');
    const trailingCheckbox = computed(() => props.trailing && attrs.role == 'checkbox');
    const {
      classes: rippleClasses,
      styles
    } = useRipplePlugin(root);
    const isTwoLine = computed(() => {
      return props.twoLine || slots['secondary-text'];
    });
    const groupClasses = computed(() => ({
      'mdc-menu__selection-group-icon': props.groupIcon
    }));
    const needGraphic = computed(() => typeof props.icon == 'string' || !!props.groupIcon);
    const listIcon = computed(() => typeof props.icon === 'string' && props.icon || props.groupIcon);

    const focus = () => {
      var _root$value$$el;

      ((_root$value$$el = root.value.$el) !== null && _root$value$$el !== void 0 ? _root$value$$el : root.value).focus();
    };

    const myAttrs = computed(() => {
      return _objectSpread2(_objectSpread2({}, attrs), {}, {
        class: _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes),
        style: styles.value
      }, uiState.attrs);
    });

    const addClass = className => {
      uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      });
    };

    const removeClass = className => {
      // eslint-disable-next-line no-unused-vars
      const _uiState$classes = uiState.classes,
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

      uiState.classes = rest;
    };

    const removeAttribute = attr => {
      // eslint-disable-next-line no-unused-vars
      const _uiState$attrs = uiState.attrs,
            rest = _objectWithoutProperties(_uiState$attrs, [attr].map(_toPropertyKey));

      uiState.attrs = rest;
    };

    const setAttribute = (attr, value) => {
      uiState.attrs = _objectSpread2(_objectSpread2({}, uiState.attrs), {}, {
        [attr]: value
      });
    };

    const getAttribute = attr => {
      return myAttrs.value[attr];
    };

    const classList = {
      add: addClass,
      remove: removeClass,
      contains: className => !!uiState.classes[className]
    };
    registerListItem({
      itemId: myItemId,
      removeAttribute,
      setAttribute,
      getAttribute,
      classList
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      focus,
      root,
      isTwoLine,
      needGraphic,
      listIcon,
      groupClasses,
      checkbox,
      radio,
      radioChecked,
      myAttrs,
      trailingRadio,
      trailingCheckbox,
      myItemId
    });
  }

};

const _hoisted_1$f = /*#__PURE__*/createVNode("span", { class: "mdc-list-item__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$b = {
  key: 0,
  class: "material-icons"
};
const _hoisted_3$8 = {
  key: 1,
  class: "mdc-list-item__graphic"
};
const _hoisted_4$6 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox" }, [
  /*#__PURE__*/createVNode("input", {
    type: "checkbox",
    class: "mdc-checkbox__native-control"
  }),
  /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__background" }, [
    /*#__PURE__*/createVNode("svg", {
      class: "mdc-checkbox__checkmark",
      viewBox: "0 0 24 24"
    }, [
      /*#__PURE__*/createVNode("path", {
        class: "mdc-checkbox__checkmark-path",
        fill: "none",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
      })
    ]),
    /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__mixedmark" })
  ])
], -1 /* HOISTED */);
const _hoisted_5$3 = {
  key: 2,
  class: "mdc-list-item__graphic"
};
const _hoisted_6$2 = { class: "mdc-radio" };
const _hoisted_7$1 = /*#__PURE__*/createVNode("div", { class: "mdc-radio__background" }, [
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__outer-circle" }),
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__inner-circle" })
], -1 /* HOISTED */);
const _hoisted_8$1 = {
  key: 3,
  class: "mdc-list-item__text"
};
const _hoisted_9$1 = { class: "mdc-list-item__primary-text" };
const _hoisted_10 = { class: "mdc-list-item__secondary-text" };
const _hoisted_11 = {
  key: 4,
  class: "mdc-list-item__text"
};
const _hoisted_12 = {
  key: 5,
  class: "mdc-list-item__meta"
};
const _hoisted_13 = { class: "mdc-radio" };
const _hoisted_14 = /*#__PURE__*/createVNode("div", { class: "mdc-radio__background" }, [
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__outer-circle" }),
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__inner-circle" })
], -1 /* HOISTED */);
const _hoisted_15 = {
  key: 6,
  class: "mdc-list-item__meta"
};
const _hoisted_16 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox" }, [
  /*#__PURE__*/createVNode("input", {
    type: "checkbox",
    class: "mdc-checkbox__native-control"
  }),
  /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__background" }, [
    /*#__PURE__*/createVNode("svg", {
      class: "mdc-checkbox__checkmark",
      viewBox: "0 0 24 24"
    }, [
      /*#__PURE__*/createVNode("path", {
        class: "mdc-checkbox__checkmark-path",
        fill: "none",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
      })
    ]),
    /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__mixedmark" })
  ])
], -1 /* HOISTED */);
const _hoisted_17 = {
  key: 7,
  class: "mdc-list-item__meta"
};

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, mergeProps({ ref: "root" }, _ctx.myAttrs, {
    tag: "a",
    "data-myItemId": _ctx.myItemId
  }), {
    default: withCtx(() => [
      _hoisted_1$f,
      (_ctx.needGraphic)
        ? (openBlock(), createBlock("span", {
            key: 0,
            class: ["mdc-list-item__graphic", _ctx.groupClasses]
          }, [
            renderSlot(_ctx.$slots, "graphic", {}, () => [
              (_ctx.listIcon)
                ? (openBlock(), createBlock("i", _hoisted_2$b, toDisplayString(_ctx.listIcon), 1 /* TEXT */))
                : createCommentVNode("v-if", true)
            ])
          ], 2 /* CLASS */))
        : (_ctx.checkbox)
          ? (openBlock(), createBlock("span", _hoisted_3$8, [
              renderSlot(_ctx.$slots, "graphic", {}, () => [
                _hoisted_4$6
              ])
            ]))
          : (_ctx.radio)
            ? (openBlock(), createBlock("span", _hoisted_5$3, [
                renderSlot(_ctx.$slots, "graphic", {}, () => [
                  createVNode("div", _hoisted_6$2, [
                    createVNode("input", {
                      class: "mdc-radio__native-control",
                      type: "radio",
                      value: "1",
                      name: _ctx.name,
                      checked: _ctx.radioChecked
                    }, null, 8 /* PROPS */, ["name", "checked"]),
                    _hoisted_7$1
                  ])
                ])
              ]))
            : createCommentVNode("v-if", true),
      (_ctx.isTwoLine)
        ? (openBlock(), createBlock("span", _hoisted_8$1, [
            createVNode("span", _hoisted_9$1, [
              renderSlot(_ctx.$slots, "default")
            ]),
            createVNode("span", _hoisted_10, [
              renderSlot(_ctx.$slots, "secondary-text", {}, () => [
                createTextVNode(toDisplayString(_ctx.twoLine), 1 /* TEXT */)
              ])
            ])
          ]))
        : (openBlock(), createBlock("span", _hoisted_11, [
            renderSlot(_ctx.$slots, "default")
          ])),
      (_ctx.trailingRadio)
        ? (openBlock(), createBlock("span", _hoisted_12, [
            renderSlot(_ctx.$slots, "meta", {}, () => [
              createVNode("div", _hoisted_13, [
                createVNode("input", {
                  class: "mdc-radio__native-control",
                  type: "radio",
                  value: "1",
                  name: _ctx.name,
                  checked: _ctx.radioChecked
                }, null, 8 /* PROPS */, ["name", "checked"]),
                _hoisted_14
              ])
            ])
          ]))
        : (_ctx.trailingCheckbox)
          ? (openBlock(), createBlock("span", _hoisted_15, [
              renderSlot(_ctx.$slots, "meta", {}, () => [
                _hoisted_16
              ])
            ]))
          : (_ctx.$slots.meta)
            ? (openBlock(), createBlock("span", _hoisted_17, [
                renderSlot(_ctx.$slots, "meta")
              ]))
            : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */, ["data-myItemId"]))
}

script$l.render = render$l;
script$l.__file = "packages/list/list-item.vue";

const {
  strings: strings$5,
  cssClasses: cssClasses$1
} = MDCListFoundation;
var script$m = {
  name: 'mcw-list',
  props: {
    nonInteractive: {
      type: Boolean,
      default: false
    },
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    singleSelection: Boolean,
    wrapFocus: Boolean,
    textualList: Boolean,
    modelValue: {
      type: [String, Number, Array]
    },
    tag: {
      type: String,
      default: 'ul'
    },
    ariaOrientation: {
      type: String,
      default: 'vertical'
    },
    thumbnailList: Boolean,
    iconList: Boolean,
    videoList: Boolean,
    typeAhead: Boolean
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-list': 1,
        'mdc-list--dense': props.dense,
        'mdc-list--avatar-list': props.avatarList,
        'mdc-list--two-line': props.twoLine,
        'mdc-list--non-interactive': props.nonInteractive,
        'mdc-list--textual-list': props.textualList,
        'mdc-list--icon-list': props.iconList,
        'mdc-list--thumbnail-list': props.thumbnailList,
        'mdc-list--video-list': props.videoList
      },
      rootAttrs: {
        'aria-orientation': props.ariaOrientation
      },
      listn: 0,
      listRoot: null
    });
    const singleSelection = ref(props.singleSelection); // const selectedIndex = ref(props.modelValue);

    let foundation;
    let slotObserver;

    if (singleSelection.value) {
      uiState.rootAttrs.role = 'listbox';
    }

    const listItems = ref({}); // keep a hash of child list items
    // so we can set classes and attributes

    const registerListItem = item => {
      listItems.value[item.itemId] = item;
    };

    provide('registerListItem', registerListItem); // const selIndex = computed({
    //   get() {
    //     return selectedIndex.value;
    //   },
    //   set(nv) {
    //     selectedIndex.value = nv;
    //     emit('update:modelValue', nv);
    //   },
    // });

    const setSingleSelection = isSingleSelectionList => {
      singleSelection.value = isSingleSelectionList;
      foundation.setSingleSelection(isSingleSelectionList);
    };

    const setSelectedIndex = index => {
      foundation.setSelectedIndex(index);
    };

    const getSelectedIndex = () => foundation.getSelectedIndex(); // keep list of child elements that will have their item id in a data attribute
    // so we can find the listItem from events or by index.


    const listElements = ref([]); // all the child list elements
    // may be refreshed if the list items are rerendered for example

    const updateListElements = () => {
      const elements = [].slice.call(uiState.listRoot.querySelectorAll(".".concat(cssClasses$1.LIST_ITEM_CLASS)));
      listElements.value = elements;
    }; // find the list item by index.
    // The list elements are in DOM order, so find it by index,
    // then use its item id to lookup in the list item hash


    const getListItemByIndex = index => {
      const element = listElements.value[index];

      if (element) {
        const myItemId = element.dataset.myitemid;
        return listItems.value[myItemId];
      }
    }; // find the index of a list item from the event target


    const getListItemIndex = evt => {
      const myItemId = evt.target.dataset.myitemid; // if clicked on a list item then just search

      if (myItemId !== void 0) {
        const lei = listElements.value.findIndex(({
          dataset: {
            myitemid
          }
        }) => myitemid === myItemId);
        return lei;
      } // if the click wasnt on a list item
      // search up the DOM


      const eventTarget = evt.target;
      const nearestParent = closest(eventTarget, ".".concat(cssClasses$1.LIST_ITEM_CLASS, ", .").concat(cssClasses$1.ROOT)); // Get the index of the element if it is a list item.

      if (nearestParent && matches(nearestParent, ".".concat(cssClasses$1.LIST_ITEM_CLASS))) {
        return listElements.value.indexOf(nearestParent);
      }

      return -1;
    };

    const layout = () => {
      foundation.setVerticalOrientation(props.ariaOrientation == 'vertical'); // List items need to have at least tabindex=-1 to be focusable.

      [].slice.call(uiState.listRoot.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(ele => {
        ele.setAttribute('tabindex', -1);
      }); // Child button/a elements are not tabbable until the list item is focused.

      [].slice.call(uiState.listRoot.querySelectorAll(strings$5.FOCUSABLE_CHILD_ELEMENTS)).forEach(ele => ele.setAttribute('tabindex', -1));
      foundation.layout();
    };

    const initializeListType = () => {
      const checkboxListItems = uiState.listRoot.querySelectorAll(strings$5.ARIA_ROLE_CHECKBOX_SELECTOR);
      const radioSelectedListItem = uiState.listRoot.querySelector(strings$5.ARIA_CHECKED_RADIO_SELECTOR);

      if (checkboxListItems.length) {
        const preselectedItems = uiState.listRoot.querySelectorAll(strings$5.ARIA_CHECKED_CHECKBOX_SELECTOR);
        setSelectedIndex([].map.call(preselectedItems, listItem => listElements.value.indexOf(listItem)));
      } else if (radioSelectedListItem) {
        setSelectedIndex(listElements.value.indexOf(radioSelectedListItem));
      }
    };

    const getPrimaryText = item => {
      const primaryText = item.querySelector(".".concat(cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS));

      if (primaryText) {
        return primaryText.textContent || '';
      }

      const singleLineText = item.querySelector(".".concat(cssClasses$1.LIST_ITEM_TEXT_CLASS));
      return singleLineText && singleLineText.textContent || '';
    };

    const setEnabled = (itemIndex, isEnabled) => {
      foundation.setEnabled(itemIndex, isEnabled);
    };

    const typeaheadMatchItem = (nextChar, startingIndex) => {
      return foundation.typeaheadMatchItem(nextChar, startingIndex,
      /** skipFocus */
      true);
    };

    const handleFocusInEvent = evt => {
      const index = getListItemIndex(evt);
      foundation.handleFocusIn(evt, index);
    };

    const handleFocusOutEvent = evt => {
      const index = getListItemIndex(evt);
      foundation.handleFocusOut(evt, index);
    };

    const handleKeydownEvent = evt => {
      const index = getListItemIndex(evt);
      const target = evt.target;
      foundation.handleKeydown(evt, target.classList.contains(cssClasses$1.LIST_ITEM_CLASS), index);
    };

    const handleClickEvent = evt => {
      const index = getListItemIndex(evt);
      const target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

      const toggleCheckbox = !matches(target, strings$5.CHECKBOX_RADIO_SELECTOR);
      foundation.handleClick(index, toggleCheckbox);
    }; // set up the listeners and bind in the template with v-on


    const rootListeners = {
      click: event => handleClickEvent(event),
      focusin: event => {
        handleFocusInEvent(event);
      },
      focusout: event => {
        handleFocusOutEvent(event);
      },
      keydown: event => handleKeydownEvent(event)
    };

    const typeaheadInProgress = () => foundation.isTypeaheadInProgress();

    const adapter = {
      addClassForElementIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem === null || listItem === void 0 ? void 0 : listItem.classList.add(className);
      },
      focusItemAtIndex: index => {
        const element = listElements.value[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: (index, attr) => {
        const listItem = getListItemByIndex(index);
        return listItem === null || listItem === void 0 ? void 0 : listItem.getAttribute(attr);
      },
      getFocusedElementIndex: () => listElements.value.indexOf(document.activeElement),
      getListItemCount: () => listElements.value.length,
      getPrimaryTextAtIndex: index => getPrimaryText(listElements.value[index]),
      hasCheckboxAtIndex: index => {
        const listItem = listElements.value[index];
        return listItem && !!listItem.querySelector(strings$5.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: index => {
        const listItem = listElements.value[index];
        return listItem && !!listItem.querySelector(strings$5.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: index => {
        const listItem = listElements.value[index];
        const toggleEl = listItem.querySelector(strings$5.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: () => {
        const root = uiState.listRoot;
        return root && root !== document.activeElement && root.contains(document.activeElement);
      },
      isRootFocused: () => document.activeElement === uiState.listRoot,
      listItemAtIndexHasClass: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem === null || listItem === void 0 ? void 0 : listItem.classList.contains(className);
      },
      notifyAction: index => {
        emitCustomEvent(uiState.listRoot, strings$5.ACTION_EVENT, {
          index
        },
        /** shouldBubble */
        true);

        if (Array.isArray(props.modelValue)) {
          emit('update:modelValue', foundation.getSelectedIndex());
        } else {
          emit('update:modelValue', index);
        }
      },
      removeClassForElementIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem === null || listItem === void 0 ? void 0 : listItem.classList.remove(className);
      },
      setAttributeForElementIndex: (index, attr, value) => {
        const listItem = getListItemByIndex(index);
        listItem === null || listItem === void 0 ? void 0 : listItem.setAttribute(attr, value);
      },
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = listElements.value[index];
        const toggleEl = listItem.querySelector(strings$5.CHECKBOX_RADIO_SELECTOR);
        toggleEl && (toggleEl.checked = isChecked);
        const event = document.createEvent('Event');
        event.initEvent('update:modelValue', true, true);
        toggleEl === null || toggleEl === void 0 ? void 0 : toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = listElements.value[listItemIndex];
        const listItemChildren = [].slice.call(element.querySelectorAll(strings$5.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(el => {
          var _listItems$value$el$d;

          const listItem = (_listItems$value$el$d = listItems.value[el.dataset.myitemid]) !== null && _listItems$value$el$d !== void 0 ? _listItems$value$el$d : el;
          listItem.setAttribute('tabindex', tabIndexValue);
        });
      }
    }; // watch(
    //   () => props.singleSelection,
    //   nv => foundation.setSingleSelection(nv),
    // );

    watch(() => props.modelValue, nv => {
      if (Array.isArray(nv)) {
        foundation.setSelectedIndex(nv);
      } else if (props.modelValue != nv) {
        foundation.setSelectedIndex(nv);
      }
    });
    watch(() => props.wrapFocus, nv => foundation.setWrapFocus(nv));
    watch(() => props.ariaOrientation, nv => foundation.setVerticalOrientation(nv === 'vertical'));
    watch(() => props.typeAhead, nv => foundation.setHasTypeahead(nv));
    onMounted(() => {
      updateListElements();
      foundation = new MDCListFoundation(adapter);
      foundation.init(); // if a single selection list need to ensure the selected item has the selected or activated class

      if (singleSelection.value && typeof props.modelValue === 'number' && !isNaN(props.modelValue)) {
        const i = props.modelValue;
        const hasSelectedClass = adapter.listItemAtIndexHasClass(i, cssClasses$1.LIST_ITEM_SELECTED_CLASS);
        const hasActivatedClass = adapter.listItemAtIndexHasClass(i, cssClasses$1.LIST_ITEM_ACTIVATED_CLASS);

        if (!(hasSelectedClass || hasActivatedClass)) {
          adapter.addClassForElementIndex(props.modelValue, 'mdc-list-item--selected');
        }

        adapter.setAttributeForElementIndex(i, 'tabindex', 0);
        foundation.setSingleSelection(true);
        foundation.setSelectedIndex(i);
      }

      layout();
      initializeListType();
      foundation.setWrapFocus(props.wrapFocus);
      foundation.setVerticalOrientation(props.ariaOrientation === 'vertical');

      if (props.typeAhead) {
        foundation.setHasTypeahead(props.typeAhead);
      } // the list content could change outside of this component
      // so use a mutation observer to trigger an update


      slotObserver = new MutationObserver((mutationList, observer) => {
        updateListElements();
      });
      slotObserver.observe(uiState.listRoot, {
        childList: true // subtree: true,

      });
    });
    onBeforeUnmount(() => {
      slotObserver.disconnect();
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      listItems,
      listElements,
      rootListeners,
      layout,
      setEnabled,
      typeaheadMatchItem,
      typeaheadInProgress,
      // selIndex,
      getSelectedIndex,
      setSelectedIndex,
      getPrimaryText,
      setSingleSelection
    });
  }

};

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
    ref: "listRoot",
    class: _ctx.classes
  }, toHandlers(_ctx.rootListeners), _ctx.rootAttrs), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["class"]))
}

script$m.render = render$m;
script$m.__file = "packages/list/list.vue";

var list = BasePlugin({
  mcwList: script$m,
  mcwListItem: script$l
});

var mcwMaterialIcon = {
  name: 'mcw-material-icon',
  props: {
    icon: String,
    tag: {
      type: String,
      default: 'i'
    }
  },

  setup(props, {
    attrs
  }) {
    return () => {
      return h(props.tag, _objectSpread2(_objectSpread2({}, attrs), {}, {
        class: 'material-icons'
      }), props.icon);
    };
  }

};

var materialIcon = BasePlugin({
  mcwMaterialIcon
});

var mcwMenuAnchor = {
  name: 'mcw-menu-anchor',

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h('div', {
        class: {
          'mdc-menu-surface--anchor': 1
        }
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

var mcwMenuItem = {
  name: 'mcw-menu-item',
  props: {
    disabled: Boolean
  },

  setup(props, {
    slots
  }) {
    return () => {
      var _slots$default;

      return h('li', {
        class: {
          'mdc-menu-divider': 1,
          'mdc-list-divider': 1
        },
        tabindex: props.disabled ? '-1' : '0',
        'aria-disabled': props.disabled,
        role: 'menuitem'
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }

};

const {
  cssClasses: cssClasses$2,
  strings: strings$6
} = MDCMenuSurfaceFoundation;
var script$n = {
  name: 'mcw-menu-surface',
  props: {
    modelValue: [Boolean, Object],
    'quick-open': Boolean,
    'anchor-corner': [String, Number],
    'anchor-margin': Object
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-menu-surface': 1
      },
      root: null
    });
    let foundation;
    let anchorElement;
    let previousFocus_;

    const handleBodyClick = evt => {
      foundation.handleBodyClick(evt);
    };

    const registerBodyClickListener = () => {
      document.body.addEventListener('click', handleBodyClick);
    };

    const deregisterBodyClickListener = () => {
      document.body.removeEventListener('click', handleBodyClick);
    };

    const handleKeydown = evt => {
      foundation.handleKeydown(evt);
    };

    const getFocusAdapterMethods = () => {
      return {
        isFocused: () => document.activeElement === uiState.root,
        saveFocus: () => {
          previousFocus_ = document.activeElement;
        },
        restoreFocus: () => {
          if (uiState.root.contains(document.activeElement)) {
            if (previousFocus_ && previousFocus_.focus) {
              previousFocus_.focus();
            }
          }
        }
      };
    };

    const getDimensionAdapterMethods = () => {
      return {
        getInnerDimensions: () => {
          return {
            width: uiState.root.offsetWidth,
            height: uiState.root.offsetHeight
          };
        },
        getAnchorDimensions: () => anchorElement ? anchorElement.getBoundingClientRect() : null,
        getWindowDimensions: () => {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        getBodyDimensions: () => {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
          };
        },
        getWindowScroll: () => {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        },
        setPosition: position => {
          uiState.root.style.left = 'left' in position ? "".concat(position.left, "px") : null;
          uiState.root.style.right = 'right' in position ? "".concat(position.right, "px") : null;
          uiState.root.style.top = 'top' in position ? "".concat(position.top, "px") : null;
          uiState.root.style.bottom = 'bottom' in position ? "".concat(position.bottom, "px") : null;
        },
        setMaxHeight: height => {
          uiState.root.style.maxHeight = height;
        }
      };
    };

    const rootListeners = {
      keydown: evt => handleKeydown(evt) // 'MDCMenuSurface:opened': evt => registerBodyClickListener(evt),
      // 'MDCMenuSurface:closed': evt => deregisterBodyClickListener(evt),

    };

    const onOpen_ = value => {
      const method = value ? 'open' : 'close';
      foundation[method]();
    };

    const setIsHoisted = isHoisted => {
      foundation.setIsHoisted(isHoisted);
    };

    const hoistMenuToBody = () => {
      document.body.appendChild(uiState.root.parentElement.removeChild(uiState.root));
      setIsHoisted(true);
    };

    const setFixedPosition = isFixed => {
      if (isFixed) {
        uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
          [cssClasses$2.FIXED]: true
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              _cssClasses$FIXED = cssClasses$2.FIXED,
              rest = _objectWithoutProperties(_uiState$classes, [_cssClasses$FIXED].map(_toPropertyKey));

        uiState.classes = rest;
      }

      foundation.setFixedPosition(isFixed);
    };

    const setAbsolutePosition = (x, y) => {
      foundation.setAbsolutePosition(x, y);
      setIsHoisted(true);
    };

    const setAnchorCorner = corner => {
      foundation.setAnchorCorner(corner);
    };

    const setAnchorMargin = margin => {
      foundation.setAnchorMargin(margin);
    };

    const setMenuSurfaceAnchorElement = element => {
      anchorElement = element;
    };

    const show = options => {
      foundation.open(options);
    };

    const close = (skipRestoreFocus = false) => {
      foundation.close(skipRestoreFocus);
    };

    const hide = () => {
      close();
    };

    const isOpen = () => {
      return foundation ? foundation.isOpen() : false;
    };

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes2 = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes2, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => uiState.root.classList.contains(className),
      hasAnchor: () => !!anchorElement,
      notifyClose: () => {
        uiState.root && emitCustomEvent(uiState.root, strings$6.CLOSED_EVENT, {});
        deregisterBodyClickListener();
        emit('mdcmenusurface:closed');
        emit('update:modelValue', false);
      },
      notifyOpen: () => {
        emitCustomEvent(uiState.root, strings$6.OPENED_EVENT, {});
        registerBodyClickListener();
        emit('mdcmenusurface:opened');
        emit('update:modelValue', true);
      },
      isElementInContainer: el => {
        var _uiState$root;

        return (_uiState$root = uiState.root) === null || _uiState$root === void 0 ? void 0 : _uiState$root.contains(el);
      },
      isRtl: () => getComputedStyle(uiState.root).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: origin => {
        uiState.root.style.setProperty("".concat(getCorrectPropertyName(window, 'transform'), "-origin"), origin);
      }
    };
    watch(() => props.modelValue, nv => onOpen_(nv));
    watch(() => props.quickOpen, nv => foundation.setQuickOpen(nv));
    onMounted(() => {
      foundation = new MDCMenuSurfaceFoundation(_objectSpread2(_objectSpread2(_objectSpread2({}, adapter), getFocusAdapterMethods()), getDimensionAdapterMethods()));
      foundation.init();

      if (uiState.root.parentElement && uiState.root.parentElement.classList.contains(cssClasses$2.ANCHOR)) {
        anchorElement = uiState.root.parentElement;
      }
    });
    onBeforeUnmount(() => {
      previousFocus_ = null;
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootListeners,
      hoistMenuToBody,
      setFixedPosition,
      setAbsolutePosition,
      setAnchorCorner,
      setAnchorMargin,
      setMenuSurfaceAnchorElement,
      show,
      hide,
      isOpen,
      close
    });
  }

};

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes
  }, toHandlers(_ctx.rootListeners)), [
    renderSlot(_ctx.$slots, "default")
  ], 16 /* FULL_PROPS */))
}

script$n.render = render$n;
script$n.__file = "packages/menu/menu-surface.vue";

const {
  cssClasses: cssClasses$3,
  strings: strings$7
} = MDCMenuFoundation;
const DefaultFocusState_ = {
  NONE: 0,
  LIST_ROOT: 1,
  FIRST_ITEM: 2,
  LAST_ITEM: 3
};
var script$o = {
  name: 'mcw-menu',
  props: {
    modelValue: [Boolean, Object],
    quickOpen: Boolean,
    anchorCorner: [String, Number],
    anchorMargin: Object,
    fixed: Boolean,
    absolutePosition: Array,
    typeAhead: Boolean,
    singleSelection: Boolean,
    defaultFocusState: {
      type: String,
      default: () => 'LIST_ROOT'
    }
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true,
      menuSurface: null,
      list: null
    });
    let foundation;
    let rootEl;
    const items = computed(() => {
      var _uiState$list$listEle, _uiState$list;

      return (_uiState$list$listEle = (_uiState$list = uiState.list) === null || _uiState$list === void 0 ? void 0 : _uiState$list.listElements) !== null && _uiState$list$listEle !== void 0 ? _uiState$list$listEle : [];
    });
    const listItems = computed(() => {
      var _uiState$list$listIte;

      return (_uiState$list$listIte = uiState.list.listItems) !== null && _uiState$list$listIte !== void 0 ? _uiState$list$listIte : [];
    });

    const getListItemByIndex = index => {
      const element = items.value[index];
      const myItemId = element.dataset.myitemid;
      return listItems.value[myItemId];
    };

    const surfaceOpen = computed({
      get() {
        return uiState.menuOpen;
      },

      set(value) {
        uiState.menuOpen = value;
      }

    });
    const wrapFocus = computed({
      get() {
        return uiState.myWrapFocus;
      },

      set(nv) {
        uiState.myWrapFocus = nv;
      }

    });

    const layout = () => {
      var _uiState$list2;

      return (_uiState$list2 = uiState.list) === null || _uiState$list2 === void 0 ? void 0 : _uiState$list2.layout();
    };

    const handleAction = index => {
      foundation.handleItemAction(items.value[index]);
    };

    const handleKeydown = evt => foundation.handleKeydown(evt);

    const handleMenuSurfaceOpened = () => {
      foundation.handleMenuSurfaceOpened();
      emit('mdcmenusurface:opened');
    };

    const handleMenuSurfaceClosed = () => {
      emit('mdcmenusurface:closed');
    };

    const onChange = item => {
      uiState.menuOpen = item;
      emit('update:modelValue', item);
    };

    const setDefaultFocusState = focusState => {
      if (typeof focusState == 'string') {
        focusState = DefaultFocusState_[focusState];
      }

      foundation.setDefaultFocusState(focusState);
    };

    const setAnchorCorner = corner => {
      uiState.menuSurface.setAnchorCorner(corner);
    };

    const setAnchorElement = element => {
      uiState.menuSurface.setMenuSurfaceAnchorElement(element);
    };

    const setSelectedIndex = index => {
      var _uiState$list3;

      return (_uiState$list3 = uiState.list) === null || _uiState$list3 === void 0 ? void 0 : _uiState$list3.setSelectedIndex(index);
    };

    const getSelectedIndex = () => {
      var _uiState$list$getSele, _uiState$list4;

      return (_uiState$list$getSele = (_uiState$list4 = uiState.list) === null || _uiState$list4 === void 0 ? void 0 : _uiState$list4.getSelectedIndex()) !== null && _uiState$list$getSele !== void 0 ? _uiState$list$getSele : -1;
    };

    const setAnchorMargin = margin => {
      uiState.menuSurface.setAnchorMargin(margin);
    };

    const getOptionByIndex = index => {
      const itms = items.value;

      if (index < itms.length) {
        return itms[index];
      }

      return null;
    };

    const getPrimaryTextAtIndex = index => {
      const item = getOptionByIndex(index);

      if (item && uiState.list) {
        return uiState.list.getPrimaryText(item) || '';
      }

      return '';
    };

    const setFixedPosition = isFixed => {
      uiState.menuSurface.setFixedPosition(isFixed);
    };

    const hoistMenuToBody = () => {
      uiState.menuSurface.hoistMenuToBody();
    };

    const setIsHoisted = isHoisted => {
      uiState.menuSurface.setIsHoisted(isHoisted);
    };

    const setAbsolutePosition = (x, y) => {
      uiState.menuSurface.setAbsolutePosition(x, y);
    };

    const typeaheadInProgress = () => {
      var _uiState$list$typeAhe;

      return (_uiState$list$typeAhe = uiState.list.typeAheadInProgress) !== null && _uiState$list$typeAhe !== void 0 ? _uiState$list$typeAhe : false;
    };

    const typeaheadMatchItem = (nextChar, startingIndex) => {
      if (uiState.list) {
        return uiState.list.typeaheadMatchItem(nextChar, startingIndex);
      }

      return -1;
    };

    const setSingleSelection = singleSelection => {
      var _uiState$list5;

      return (_uiState$list5 = uiState.list) === null || _uiState$list5 === void 0 ? void 0 : _uiState$list5.setSingleSelection(singleSelection);
    };

    const adapter = {
      addClassToElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const listItem = getListItemByIndex(index);
        listItem.setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const listItem = getListItemByIndex(index);
        listItem.removeAttribute(attr);
      },
      elementContainsClass: (element, className) => element.classList.contains(className),
      closeSurface: skipRestoreFocus => {
        uiState.menuSurface.close(skipRestoreFocus);
        emit('update:modelValue', false);
      },
      getElementIndex: element => {
        return items.value.findIndex(el => el == element);
      },
      notifySelected: evtData => {
        emitCustomEvent(rootEl, strings$7.SELECTED_EVENT, {
          index: evtData.index,
          item: items.value[evtData.index]
        });
        emit('select', {
          index: evtData.index,
          item: items.value[evtData.index]
        });
      },
      getMenuItemCount: () => items.value.length,
      focusItemAtIndex: index => items.value[index].focus(),
      focusListRoot: () => {
        uiState.menuSurface.$el.querySelector(strings$7.LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: index => !!closest(items.value[index], ".".concat(cssClasses$3.MENU_SELECTION_GROUP)),
      getSelectedSiblingOfItemAtIndex: index => {
        const selectionGroupEl = closest(items.value[index], ".".concat(cssClasses$3.MENU_SELECTION_GROUP));
        const selectedItemEl = selectionGroupEl.querySelector(".".concat(cssClasses$3.MENU_SELECTED_LIST_ITEM));
        return selectedItemEl ? items.value.findIndex(el => el == selectedItemEl) : -1;
      }
    };
    watch(() => props.modelValue, nv => {
      uiState.menuOpen = nv;
    });
    onMounted(() => {
      rootEl = uiState.menuSurface.$el;
      uiState.menuOpen = props.modelValue;
      foundation = new MDCMenuFoundation(adapter);
      foundation.init();

      if (props.fixed) {
        uiState.menuSurface.setFixedPosition(props.fixed);
      }

      if (props.absolutePosition) {
        const [x, y] = props.absolutePosition;
        uiState.menuSurface.setAbsolutePosition(x, y);
      }
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      handleAction,
      handleKeydown,
      onChange,
      handleMenuSurfaceOpened,
      handleMenuSurfaceClosed,
      setAbsolutePosition,
      setIsHoisted,
      hoistMenuToBody,
      setFixedPosition,
      getOptionByIndex,
      setAnchorMargin,
      setAnchorElement,
      setAnchorCorner,
      getSelectedIndex,
      setSelectedIndex,
      setDefaultFocusState,
      wrapFocus,
      surfaceOpen,
      layout,
      getPrimaryTextAtIndex,
      items,
      // listItems,
      typeaheadInProgress,
      typeaheadMatchItem,
      setSingleSelection
    });
  }

};

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_list = resolveComponent("mcw-list");
  const _component_mcw_menu_surface = resolveComponent("mcw-menu-surface");

  return (openBlock(), createBlock(_component_mcw_menu_surface, {
    ref: "menuSurface",
    class: "mdc-menu",
    "quick-open": _ctx.quickOpen,
    modelValue: _ctx.menuOpen,
    onKeydown: _ctx.handleKeydown,
    "onUpdate:modelValue": _ctx.onChange,
    "onMdcmenusurface:opened": _ctx.handleMenuSurfaceOpened,
    "onMdcmenusurface:closed": _ctx.handleMenuSurfaceClosed
  }, {
    default: withCtx(() => [
      createVNode(_component_mcw_list, {
        ref: "list",
        role: "menu",
        "aria-hidden": "true",
        "wrap-focus": _ctx.myWrapFocus,
        "onUpdate:modelValue": _ctx.handleAction,
        tabindex: "-1",
        "type-ahead": _ctx.typeAhead,
        "single-selection": _ctx.singleSelection
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["wrap-focus", "onUpdate:modelValue", "type-ahead", "single-selection"])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["quick-open", "modelValue", "onKeydown", "onUpdate:modelValue", "onMdcmenusurface:opened", "onMdcmenusurface:closed"]))
}

script$o.render = render$o;
script$o.__file = "packages/menu/menu.vue";

var menu = BasePlugin({
  mcwMenu: script$o,
  mcwMenuSurface: script$n,
  mcwMenuItem,
  mcwMenuAnchor,
  mcwList: script$m
});

const {
  cssClasses: cssClasses$4
} = MDCNotchedOutlineFoundation;
var script$p = {
  name: 'mcw-notched-outline',
  components: {
    mcwFloatingLabel: script$e
  },

  setup(props, {
    slots
  }) {
    const uiState = reactive({
      outlinedClasses: {
        'mdc-notched-outline': true
      },
      notchStyles: {},
      labelEl: null
    });
    let foundation;
    const adapter = {
      addClass: className => uiState.outlinedClasses = _objectSpread2(_objectSpread2({}, uiState.outlinedClasses), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$outlinedClas = uiState.outlinedClasses,
              rest = _objectWithoutProperties(_uiState$outlinedClas, [className].map(_toPropertyKey));

        uiState.outlinedClasses = rest;
      },
      setNotchWidthProperty: width => uiState.notchStyles = _objectSpread2(_objectSpread2({}, uiState.notchStyles), {}, {
        width: "".concat(width, "px")
      }),
      removeNotchWidthProperty: () => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$notchStyles = uiState.notchStyles,
              rest = _objectWithoutProperties(_uiState$notchStyles, ["width"]);

        uiState.notchStyles = rest;
      }
    };

    const notch = notchWidth => {
      foundation.notch(notchWidth);
    };

    const closeNotch = () => {
      foundation.closeNotch();
    };

    const float = shouldFloat => {
      var _uiState$labelEl;

      (_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.float(shouldFloat);
    };

    const shake = shouldShake => {
      var _uiState$labelEl2;

      (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.shake(shouldShake);
    };

    const getWidth = () => {
      var _uiState$labelEl3;

      return (_uiState$labelEl3 = uiState.labelEl) === null || _uiState$labelEl3 === void 0 ? void 0 : _uiState$labelEl3.getWidth();
    };

    onMounted(() => {
      foundation = new MDCNotchedOutlineFoundation(adapter);
      foundation.init();
      const key = slots.default ? cssClasses$4.OUTLINE_UPGRADED : cssClasses$4.NO_LABEL;
      uiState.outlinedClasses = _objectSpread2(_objectSpread2({}, uiState.outlinedClasses), {}, {
        [key]: true
      });
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      getWidth,
      shake,
      float,
      closeNotch,
      notch
    });
  }

};

const _hoisted_1$g = /*#__PURE__*/createVNode("span", { class: "mdc-notched-outline__leading" }, null, -1 /* HOISTED */);
const _hoisted_2$c = /*#__PURE__*/createVNode("span", { class: "mdc-notched-outline__trailing" }, null, -1 /* HOISTED */);

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");

  return (openBlock(), createBlock("span", {
    ref: "outlined",
    class: _ctx.outlinedClasses
  }, [
    _hoisted_1$g,
    createVNode("span", {
      class: "mdc-notched-outline__notch",
      style: _ctx.notchStyles
    }, [
      (_ctx.$slots.default)
        ? (openBlock(), createBlock(_component_mcw_floating_label, {
            key: 0,
            ref: "labelEl"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3 /* FORWARDED */
          }, 512 /* NEED_PATCH */))
        : createCommentVNode("v-if", true)
    ], 4 /* STYLE */),
    _hoisted_2$c
  ], 2 /* CLASS */))
}

script$p.render = render$p;
script$p.__file = "packages/notched-outline/notched-outline.vue";

var notchedOutline = BasePlugin({
  mcwNotchedOutline: script$p
});

let radioId_ = 0;
var script$q = {
  name: 'mcw-radio',
  // model: {
  //   prop: 'picked',
  //   event: 'change',
  // },
  props: {
    label: String,
    alignEnd: Boolean,
    radioClasses: String,
    name: {
      type: String,
      required: true
    },
    id: {
      type: String
    },
    value: String,
    modelValue: String,
    disabled: Boolean,
    checked: Boolean
  },

  setup(props, {
    emit,
    attrs
  }) {
    var _props$id;

    const uiState = reactive({
      classes: {
        'mdc-radio': 1
      },
      controlEl: null,
      labelEl: null,
      root: null
    });
    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate
    } = useRipplePlugin$1(toRef(uiState, 'root'), {
      isUnbounded: () => true,
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (evt, handler) => {
        uiState.controlEl.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        uiState.controlEl.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      }
    });
    let foundation;
    let formField;
    const radioId = (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : "__mcw-radio-".concat(radioId_++);
    const rootClasses = computed(() => {
      return _objectSpread2(_objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes), props.radioClasses);
    });
    const formFieldClasses = computed(() => {
      return {
        'mdc-form-field': 1,
        'mdc-form-field--align-end': props.alignEnd
      };
    });

    const onChange = () => {
      const nativeValue = uiState.controlEl.value;
      nativeValue != props.modelValue && emit('update:modelValue', uiState.controlEl.value);
    };

    const setChecked = checked => {
      uiState.controlEl.checked = checked;
    };

    const onPicked = nv => {
      setChecked(nv == uiState.controlEl.value);
    };

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      setNativeControlDisabled: disabled => uiState.controlEl && uiState.controlEl.disabled == disabled
    };
    watch(() => props.checked, nv => {
      setChecked(nv);
    });
    watch(() => props.disabled, nv => {
      foundation.setDisabled(nv);
    });
    watch(() => props.modelValue, nv => {
      onPicked(nv);
    });
    onMounted(() => {
      foundation = new MDCRadioFoundation(adapter);
      formField = new MDCFormFieldFoundation({
        registerInteractionHandler: (type, handler) => {
          var _uiState$labelEl;

          return (_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.addEventListener(type, handler);
        },
        deregisterInteractionHandler: (type, handler) => {
          var _uiState$labelEl2;

          return (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.removeEventListener(type, handler);
        },
        activateInputRipple: () => {
          activate();
        },
        deactivateInputRipple: () => {
          deactivate();
        }
      });
      foundation.init();
      formField.init();
      const {
        checked,
        disabled,
        modelValue,
        value
      } = props;
      foundation.setDisabled(disabled);
      setChecked(checked || modelValue == value); // if checked, need to sync any change of value

      checked && onChange();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
      formField.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses,
      formFieldClasses,
      styles,
      onChange,
      onPicked,
      setChecked,
      radioId
    });
  }

};

const _hoisted_1$h = /*#__PURE__*/createVNode("div", { class: "mdc-radio__background" }, [
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__outer-circle" }),
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__inner-circle" })
], -1 /* HOISTED */);
const _hoisted_2$d = /*#__PURE__*/createVNode("div", { class: "mdc-radio__ripple" }, null, -1 /* HOISTED */);
const _hoisted_3$9 = /*#__PURE__*/createVNode("div", { class: "mdc-radio__background" }, [
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__outer-circle" }),
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__inner-circle" })
], -1 /* HOISTED */);
const _hoisted_4$7 = /*#__PURE__*/createVNode("div", { class: "mdc-radio__ripple" }, null, -1 /* HOISTED */);

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.label)
    ? (openBlock(), createBlock("div", {
        key: 0,
        class: [_ctx.formFieldClasses, "mdc-radio-wrapper"]
      }, [
        createVNode("div", {
          ref: "root",
          class: _ctx.rootClasses,
          style: _ctx.styles
        }, [
          createVNode("input", mergeProps({
            ref: "controlEl",
            id: _ctx.radioId,
            name: _ctx.name,
            type: "radio",
            class: "mdc-radio__native-control",
            onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.onChange && _ctx.onChange(...args)))
          }, _ctx.$attrs, {
            value: _ctx.value,
            checked: _ctx.modelValue==_ctx.value,
            disabled: _ctx.disabled
          }), null, 16 /* FULL_PROPS */, ["id", "name", "value", "checked", "disabled"]),
          _hoisted_1$h,
          _hoisted_2$d
        ], 6 /* CLASS, STYLE */),
        createVNode("label", {
          ref: "labelEl",
          for: _ctx.radioId
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, ["for"])
      ], 2 /* CLASS */))
    : (openBlock(), createBlock("div", {
        key: 1,
        ref: "root",
        class: _ctx.rootClasses,
        style: _ctx.styles
      }, [
        createVNode("input", mergeProps({
          ref: "controlEl",
          id: _ctx.radioId,
          name: _ctx.name,
          type: "radio",
          class: "mdc-radio__native-control",
          onChange: _cache[2] || (_cache[2] = (...args) => (_ctx.onChange && _ctx.onChange(...args)))
        }, _ctx.$attrs, {
          value: _ctx.value,
          checked: _ctx.modelValue==_ctx.value,
          disabled: _ctx.disabled
        }), null, 16 /* FULL_PROPS */, ["id", "name", "value", "checked", "disabled"]),
        _hoisted_3$9,
        _hoisted_4$7
      ], 6 /* CLASS, STYLE */))
}

script$q.render = render$q;
script$q.__file = "packages/radio/radio.vue";

var radio = BasePlugin({
  mcwRadio: script$q
});

var script$r = {
  name: 'mcw-segmented-button',
  props: {
    singleSelect: Boolean,
    touch: Boolean,
    modelValue: {
      type: Number
    }
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-segmented-button--single-select': props.singleSelect
      },
      styles: {},
      root: null,
      contentEl: null
    });
    let foundation;
    let segmentIdx = 0;
    const segments_ = [];

    const getSegmentIdx = segment => {
      const sg = _objectSpread2(_objectSpread2({}, segment), {}, {
        index: segmentIdx++
      });

      segments_.push(sg);
      return sg.index;
    };

    provide('getSegmentIdx', getSegmentIdx);
    provide('isSingleSelect', props.singleSelect);
    provide('isTouch', props.touch);
    const mappedSegments = computed(() => segments_.map(({
      index,
      isSelected,
      getSegmentId
    }) => ({
      index,
      selected: isSelected(),
      segmentId: getSegmentId()
    })));

    const onSelected = ({
      detail
    }) => {
      foundation.handleSelected(detail);
    };

    const adapter = {
      hasClass: className => uiState.root.classList.contains(className),
      getSegments: () => {
        return mappedSegments.value;
      },
      selectSegment: indexOrSegmentId => {
        const segmentDetail = mappedSegments.value.find(_segmentDetail => _segmentDetail.index === indexOrSegmentId || _segmentDetail.segmentId === indexOrSegmentId);

        if (segmentDetail) {
          segments_[segmentDetail.index].setSelected();
        }
      },
      unselectSegment: indexOrSegmentId => {
        const segmentDetail = mappedSegments.value.find(_segmentDetail => _segmentDetail.index === indexOrSegmentId || _segmentDetail.segmentId === indexOrSegmentId);

        if (segmentDetail) {
          segments_[segmentDetail.index].setUnselected();
        }
      },
      notifySelectedChange: detail => {
        emit('change', detail);
        emit('update:modelValue', detail.index);
      }
    };
    const role = computed(() => props.singleSelect ? 'radiogroup' : 'group');
    onMounted(() => {
      foundation = new MDCSegmentedButtonFoundation(adapter);
      foundation.init();

      if (props.singleSelect && props.modelValue !== void 0) {
        foundation.selectSegment(props.modelValue);
        watch(() => props.modelValue, nv => {
          foundation.selectSegment(nv);
          foundation.handleSelected({
            index: nv
          });
        });
      }
    });
    onBeforeUnmount(() => {
      var _foundation;

      (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      role,
      onSelected
    });
  }

};

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    ref: "root",
    class: ["mdc-segmented-button", _ctx.classes],
    role: _ctx.role,
    onSelected: _cache[1] || (_cache[1] = (...args) => (_ctx.onSelected && _ctx.onSelected(...args)))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["role"]))
}

script$r.render = render$r;
script$r.__file = "packages/segmented-button/segmented-button.vue";

var script$s = {
  name: 'mcw-segment',
  props: {
    icon: String,
    label: String,
    ripple: {
      type: Boolean,
      default: () => true
    }
  },

  setup(props, {
    emit,
    attrs
  }) {
    const uiState = reactive({
      classes: {},
      attrs: {},
      root: null
    });
    let foundation;
    const getSegmentIdx = inject('getSegmentIdx');
    const isSingleSelect = inject('isSingleSelect');
    const isTouch = inject('isTouch');

    if (isSingleSelect) {
      var _attrs$ariaChecked;

      uiState.attrs['role'] = 'radio';
      uiState.attrs['aria-checked'] = (_attrs$ariaChecked = attrs['aria-checked']) !== null && _attrs$ariaChecked !== void 0 ? _attrs$ariaChecked : 'false';
    } else {
      var _attrs$ariaPressed;

      uiState.attrs['aria-pressed'] = (_attrs$ariaPressed = attrs['aria-pressed']) !== null && _attrs$ariaPressed !== void 0 ? _attrs$ariaPressed : 'false';
    }

    const getSegmentId = () => foundation.getSegmentId();

    const isSelected = () => foundation.isSelected();

    const setSelected = () => foundation.setSelected();

    const setUnselected = () => foundation.setUnselected();

    const segmentIdx = getSegmentIdx({
      getSegmentId,
      isSelected,
      setSelected,
      setUnselected
    });
    const {
      classes: rippleClasses,
      styles
    } = useRipplePlugin(toRef(uiState, 'root'), {
      computeBoundingRect: () => {
        return foundation.getDimensions();
      }
    });
    const myAttrs = computed(() => {
      return _objectSpread2(_objectSpread2({}, uiState.attrs), {}, {
        class: _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes),
        style: styles.value
      });
    });

    const onClick = () => foundation.handleClick();

    const adapter = {
      isSingleSelect: () => {
        return isSingleSelect;
      },
      getAttr: name => uiState.root.getAttribute(name),
      setAttr: (attributeName, value) => {
        uiState.attrs = _objectSpread2(_objectSpread2({}, uiState.attrs), {}, {
          [attributeName]: value
        });
      },
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      hasClass: className => !!uiState.classes[className],
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      notifySelectedChange: selected => {
        emitCustomEvent(uiState.root, 'selected', {
          index: segmentIdx,
          selected,
          segmentId: getSegmentId()
        }, true);
      },
      getRootBoundingClientRect: () => {
        return uiState.root.getBoundingClientRect();
      }
    };
    onMounted(() => {
      foundation = new MDCSegmentedButtonSegmentFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      var _foundation;

      (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      myAttrs,
      onClick,
      isTouch
    });
  }

};

const _hoisted_1$i = {
  key: 0,
  class: "mdc-touch-target-wrapper"
};
const _hoisted_2$e = {
  key: 0,
  class: "mdc-segmented-button__ripple"
};
const _hoisted_3$a = {
  key: 1,
  class: "material-icons mdc-segmented-button__icon"
};
const _hoisted_4$8 = {
  key: 2,
  class: "mdc-segmented-button__label"
};
const _hoisted_5$4 = /*#__PURE__*/createVNode("div", { class: "mdc-segmented-button__touch" }, null, -1 /* HOISTED */);
const _hoisted_6$3 = {
  key: 0,
  class: "mdc-segmented-button__ripple"
};
const _hoisted_7$2 = {
  key: 1,
  class: "material-icons mdc-segmented-button__icon"
};
const _hoisted_8$2 = {
  key: 2,
  class: "mdc-segmented-button__label"
};

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.isTouch)
    ? (openBlock(), createBlock("div", _hoisted_1$i, [
        createVNode("button", mergeProps({
          ref: "root",
          class: "mdc-segmented-button__segment mdc-segmented-button--touch"
        }, _ctx.myAttrs, {
          onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
        }), [
          (_ctx.ripple)
            ? (openBlock(), createBlock("div", _hoisted_2$e))
            : createCommentVNode("v-if", true),
          (_ctx.icon)
            ? (openBlock(), createBlock("i", _hoisted_3$a, toDisplayString(_ctx.icon), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          (_ctx.label)
            ? (openBlock(), createBlock("div", _hoisted_4$8, toDisplayString(_ctx.label), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          _hoisted_5$4
        ], 16 /* FULL_PROPS */)
      ]))
    : (openBlock(), createBlock("button", mergeProps({
        key: 1,
        ref: "root",
        class: "mdc-segmented-button__segment"
      }, _ctx.myAttrs, {
        onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
      }), [
        (_ctx.ripple)
          ? (openBlock(), createBlock("div", _hoisted_6$3))
          : createCommentVNode("v-if", true),
        (_ctx.icon)
          ? (openBlock(), createBlock("i", _hoisted_7$2, toDisplayString(_ctx.icon), 1 /* TEXT */))
          : createCommentVNode("v-if", true),
        (_ctx.label)
          ? (openBlock(), createBlock("div", _hoisted_8$2, toDisplayString(_ctx.label), 1 /* TEXT */))
          : createCommentVNode("v-if", true)
      ], 16 /* FULL_PROPS */))
}

script$s.render = render$s;
script$s.__file = "packages/segmented-button/segment.vue";

var segmentedButton = BasePlugin({
  mcwSegmentedButton: script$r,
  mcwSegment: script$s
});

var script$t = {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    helptext: String
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': props.helptextPersistent,
        'mdc-select-helper-text--validation-msg': props.helptextValidation
      },
      attrs: {
        'aria-hidden': 'true'
      },
      myHelptext: props.helptext,
      foundation: {}
    });
    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.classes[className]),
      setAttr: (attr, value) => uiState.attrs = _objectSpread2(_objectSpread2({}, uiState.attrs), {}, {
        [attr]: value
      }),
      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$attrs = uiState.attrs,
              rest = _objectWithoutProperties(_uiState$attrs, [attr].map(_toPropertyKey));

        uiState.attrs = rest;
      },
      setContent: content => {
        uiState.myHelptext = content;
      }
    };
    watch(() => props.helptextPersistent, nv => uiState.foundation.setPersistent(nv));
    watch(() => props.helptextValidation, nv => uiState.foundation.setValidation(nv));
    watch(() => props.helptext, nv => uiState.myHelptext = nv);
    onMounted(() => {
      uiState.foundation = new MDCSelectHelperTextFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }

};

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("p", { class: _ctx.classes }, toDisplayString(_ctx.myHelptext), 3 /* TEXT, CLASS */))
}

script$t.render = render$t;
script$t.__file = "packages/select/select-helper-text.vue";

const {
  strings: strings$8
} = MDCSelectIconFoundation;
var script$u = {
  name: 'select-icon',
  props: {
    icon: String
  },

  setup(props, {
    emit,
    attrs
  }) {
    const uiState = reactive({
      classes: {
        'material-icons': true,
        'mdc-select__icon': true
      },
      styles: {},
      root: null,
      rootAttrs: {},
      rootListeners: {},
      foundation: {}
    });
    const listeners = computed(() => {
      return _objectSpread2(_objectSpread2({}, attrs), uiState.rootListeners);
    });
    const adapter = {
      getAttr: attr => uiState.rootAttrs[attr],
      setAttr: (attr, value) => uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, {
        [attr]: value
      }),
      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$rootAttrs = uiState.rootAttrs,
              rest = _objectWithoutProperties(_uiState$rootAttrs, [attr].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setContent: content => {
        uiState.root.textContent = content;
      },
      registerInteractionHandler: (evtType, handler) => uiState.rootListeners = _objectSpread2(_objectSpread2({}, uiState.rootListeners), {}, {
        [evtType.toLowerCase()]: handler
      }),
      deregisterInteractionHandler: (evtType, handler) => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$rootListener = uiState.rootListeners,
              rest = _objectWithoutProperties(_uiState$rootListener, [evtType].map(_toPropertyKey));

        uiState.rootListeners = rest;
      },
      notifyIconAction: () => {
        emit('click');
        emitCustomEvent(uiState.root, strings$8.ICON_EVENT, {}, true
        /* shouldBubble  */
        );
      }
    };
    onMounted(() => {
      uiState.foundation = new MDCSelectIconFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      listeners
    });
  }

};

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", mergeProps({
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles
  }, toHandlers(_ctx.rootListeners), _ctx.rootAttrs), toDisplayString(_ctx.icon), 17 /* TEXT, FULL_PROPS */))
}

script$u.render = render$u;
script$u.__file = "packages/select/select-icon.vue";

const {
  strings: strings$9
} = MDCSelectFoundation;
let uid_ = 0;
var script$v = {
  name: 'mcw-select',
  inheritAttrs: false,
  props: {
    modelValue: String,
    helptext: String,
    leadingIcon: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    disabled: Boolean,
    label: String,
    outlined: Boolean,
    required: Boolean,
    menuFullwidth: {
      type: Boolean,
      default: () => true
    }
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      styles: {},
      classes: {},
      selectedTextContent: '',
      selTextAttrs: {},
      selectAnchorAttrs: {},
      helpId: "help-mcw-select-".concat(uid_++),
      menuClasses: {
        'mdc-menu-surface--fullwidth': props.menuFullwidth
      },
      root: null,
      helperTextEl: null,
      leadingIconEl: null,
      lineRippleEl: null,
      outlineEl: null,
      labelEl: null,
      menu: null,
      anchorEl: null
    });
    let rippleClasses;
    let rippleStyles;

    if (props.outlined) {
      const {
        classes,
        styles
      } = useRipplePlugin$1(toRef(uiState, 'anchorEl'), {
        registerInteractionHandler: (evtType, handler) => {
          uiState.anchorEl.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
          uiState.anchorEl.removeEventListener(evtType, handler);
        }
      });
      rippleClasses = classes;
      rippleStyles = styles;
    }

    const rootClasses = computed(() => {
      return _objectSpread2({
        'mdc-select': 1,
        'mdc-select--required': props.required,
        'mdc-select--filled': !props.outlined,
        'mdc-select--outlined': props.outlined,
        'mdc-select--with-leading-icon': props.leadingIcon,
        'mdc-select--disabled': props.disabled,
        'mdc-select--no-label': !props.label
      }, uiState.classes);
    });
    const menuItems = computed(() => {
      var _uiState$menu;

      return (_uiState$menu = uiState.menu) === null || _uiState$menu === void 0 ? void 0 : _uiState$menu.items;
    });
    let foundation;

    const handleFocus = () => foundation.handleFocus();

    const handleBlur = () => foundation.handleBlur();

    const handleClick = evt => {
      uiState.anchorEl.focus();
      handleFocus();
      foundation.handleClick(getNormalizedXCoordinate(evt));
    };

    const handleKeydown = evt => foundation.handleKeydown(evt);

    const handleChange = isOpen => foundation["handleMenu".concat(isOpen ? 'Opened' : 'Closed')]();

    const layout = () => foundation.layout();

    const handleMenuOpened = () => foundation.handleMenuOpened();

    const handleMenuClosed = () => foundation.handleMenuClosed();

    const handleMenuItemAction = ({
      index
    }) => foundation.handleMenuItemAction(index);

    const layoutOptions = () => {
      foundation.layoutOptions();
      uiState.menu.layout();
    };

    const selectedTextAttrs = computed(() => {
      const attrs = _objectSpread2({}, uiState.selTextAttrs);

      if (props.helptext) {
        attrs['aria-controls'] = uiState.helpId;
        attrs['aria-describedBy'] = uiState.helpId;
      }

      return attrs;
    });
    const adapter = {
      // select methods
      // getSelectedMenuItem: () => {
      //   const x = menuItems.value.find(item => {
      //     const myItemId = item.dataset.myitemid;
      //     return menuListItems.value[myItemId].classList.contains(
      //       cssClasses.SELECTED_ITEM_CLASS,
      //     );
      //   });
      //   return x;
      // },
      getMenuItemAttr: (menuItem, attr) => menuItem.getAttribute(attr),
      setSelectedText: text => {
        uiState.selectedTextContent = text;
      },
      isSelectAnchorFocused: () => document.activeElement === uiState.anchorEl,
      getSelectAnchorAttr: attr => uiState.selectAnchorAttrs[attr],
      setSelectAnchorAttr: (attr, value) => uiState.selectAnchorAttrs = _objectSpread2(_objectSpread2({}, uiState.selectAnchorAttrs), {}, {
        [attr]: value
      }),
      removeSelectAnchorAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$selectAnchor = uiState.selectAnchorAttrs,
              rest = _objectWithoutProperties(_uiState$selectAnchor, [attr].map(_toPropertyKey));

        uiState.selectAnchorAttrs = rest;
      },
      addMenuClass: className => uiState.menuClasses = _objectSpread2(_objectSpread2({}, uiState.menuClasses), {}, {
        [className]: true
      }),
      removeMenuClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$menuClasses = uiState.menuClasses,
              rest = _objectWithoutProperties(_uiState$menuClasses, [className].map(_toPropertyKey));

        uiState.menuClasses = rest;
      },
      openMenu: () => uiState.menu.surfaceOpen = true,
      closeMenu: () => uiState.menu.surfaceOpen = false,
      getAnchorElement: () => uiState.anchorEl,
      setMenuAnchorElement: anchorEl => uiState.menu.setAnchorElement(anchorEl),
      setMenuAnchorCorner: anchorCorner => uiState.menu.setAnchorCorner(anchorCorner),
      setMenuWrapFocus: wrapFocus => uiState.menu.wrapFocus = wrapFocus,
      getSelectedIndex: () => {
        var _uiState$menu$getSele, _uiState$menu2;

        const index = (_uiState$menu$getSele = (_uiState$menu2 = uiState.menu) === null || _uiState$menu2 === void 0 ? void 0 : _uiState$menu2.getSelectedIndex()) !== null && _uiState$menu$getSele !== void 0 ? _uiState$menu$getSele : -1;
        return index instanceof Array ? index[0] : index;
      },
      setSelectedIndex: index => {
        uiState.menu.setSelectedIndex(index);
      },
      focusMenuItemAtIndex: index => menuItems.value[index].focus(),
      getMenuItemCount: () => menuItems.value.length,
      getMenuItemValues: () => menuItems.value.map(el => el.getAttribute(strings$9.VALUE_ATTR) || ''),
      getMenuItemTextAtIndex: index => {
        return menuItems.value[index].textContent;
      },
      isTypeaheadInProgress: () => uiState.menu.typeaheadInProgress(),
      typeaheadMatchItem: (nextChar, startingIndex) => {
        var _uiState$menu3;

        return (_uiState$menu3 = uiState.menu) === null || _uiState$menu3 === void 0 ? void 0 : _uiState$menu3.typeaheadMatchItem(nextChar, startingIndex);
      },
      // common methods
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => Boolean(rootClasses.value[className]),
      setRippleCenter: normalizedX => {
        var _uiState$lineRippleEl;

        return (_uiState$lineRippleEl = uiState.lineRippleEl) === null || _uiState$lineRippleEl === void 0 ? void 0 : _uiState$lineRippleEl.setRippleCenter(normalizedX);
      },
      activateBottomLine: () => {
        var _uiState$lineRippleEl2;

        return (_uiState$lineRippleEl2 = uiState.lineRippleEl) === null || _uiState$lineRippleEl2 === void 0 ? void 0 : _uiState$lineRippleEl2.activate();
      },
      deactivateBottomLine: () => {
        var _uiState$lineRippleEl3;

        return (_uiState$lineRippleEl3 = uiState.lineRippleEl) === null || _uiState$lineRippleEl3 === void 0 ? void 0 : _uiState$lineRippleEl3.deactivate();
      },
      notifyChange: value => {
        const index = foundation.getSelectedIndex();
        emitCustomEvent(uiState.root, strings$9.CHANGE_EVENT, {
          value,
          index
        }, true
        /* shouldBubble  */
        );
        value != props.modelValue && emit('update:modelValue', value);
      },
      // outline methods
      hasOutline: () => props.outlined,
      notchOutline: labelWidth => {
        var _uiState$outlineEl;

        return (_uiState$outlineEl = uiState.outlineEl) === null || _uiState$outlineEl === void 0 ? void 0 : _uiState$outlineEl.notch(labelWidth);
      },
      closeOutline: () => {
        var _uiState$outlineEl2;

        return (_uiState$outlineEl2 = uiState.outlineEl) === null || _uiState$outlineEl2 === void 0 ? void 0 : _uiState$outlineEl2.closeNotch();
      },
      // label methods
      hasLabel: () => !!props.label,
      floatLabel: shouldFloat => {
        var _ref;

        return (_ref = uiState.labelEl || uiState.outlineEl) === null || _ref === void 0 ? void 0 : _ref.float(shouldFloat);
      },
      getLabelWidth: () => {
        var _uiState$labelEl;

        return ((_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.getWidth()) || 0;
      },
      setLabelRequired: isRequired => {
        var _uiState$labelEl2;

        return (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.setRequired(isRequired);
      }
    };

    const setFixedPosition = isFixed => uiState.menu.setFixedPosition(isFixed);

    const refreshIndex = () => {
      const items = menuItems.value.map(el => el.getAttribute(strings$9.VALUE_ATTR) || '');
      const idx = items.findIndex(value => {
        return props.modelValue === value;
      });
      uiState.menu.setSelectedIndex(idx);
      return idx;
    };

    watch(() => props.disabled, nv => {
      var _foundation;

      return (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.updateDisabledStyle(nv);
    });
    watch(() => props.modelValue, () => {
      const idx = refreshIndex();
      foundation.setSelectedIndex(idx);
    });
    onMounted(() => {
      var _uiState$helperTextEl, _uiState$leadingIconE;

      // menu setup
      uiState.menu.hasTypeahead = true;
      uiState.menu.setSingleSelection = true;
      foundation = new MDCSelectFoundation(adapter, {
        helperText: (_uiState$helperTextEl = uiState.helperTextEl) === null || _uiState$helperTextEl === void 0 ? void 0 : _uiState$helperTextEl.foundation,
        leadingIcon: (_uiState$leadingIconE = uiState.leadingIconEl) === null || _uiState$leadingIconE === void 0 ? void 0 : _uiState$leadingIconE.foundation
      }); // initial sync with DOM

      refreshIndex();
      foundation = new MDCSelectFoundation(adapter);
      foundation.init(); // do we need a slotObserver here?
      // this.slotObserver = new MutationObserver(() => this.refreshIndex());
      // this.slotObserver.observe(this.$refs.native_control, {
      //   childList: true,
      //   subtree: true,
      // });
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses,
      handleBlur,
      handleFocus,
      handleClick,
      handleChange,
      handleKeydown,
      layout,
      layoutOptions,
      rippleClasses,
      rippleStyles,
      selectedTextAttrs,
      handleMenuItemAction,
      refreshIndex,
      setFixedPosition,
      handleMenuOpened,
      handleMenuClosed
    });
  },

  components: {
    SelectHelperText: script$t,
    SelectIcon: script$u
  }
}; // ===
// Private functions
// ===

function getNormalizedXCoordinate(evt) {
  const targetClientRect = evt.target.getBoundingClientRect();
  const xCoordinate = evt.clientX;
  return xCoordinate - targetClientRect.left;
}

const _hoisted_1$j = { class: "select-wrapper" };
const _hoisted_2$f = {
  key: 1,
  class: "mdc-select__ripple"
};
const _hoisted_3$b = { class: "mdc-select__selected-text-container" };
const _hoisted_4$9 = { class: "mdc-select__selected-text" };
const _hoisted_5$5 = /*#__PURE__*/createVNode("span", { class: "mdc-select__dropdown-icon" }, [
  /*#__PURE__*/createVNode("svg", {
    class: "mdc-select__dropdown-icon-graphic",
    viewBox: "7 10 10 5"
  }, [
    /*#__PURE__*/createVNode("polygon", {
      class: "mdc-select__dropdown-icon-inactive",
      stroke: "none",
      "fill-rule": "evenodd",
      points: "7 10 12 15 17 10"
    }),
    /*#__PURE__*/createVNode("polygon", {
      class: "mdc-select__dropdown-icon-active",
      stroke: "none",
      "fill-rule": "evenodd",
      points: "7 15 12 10 17 15"
    })
  ])
], -1 /* HOISTED */);

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_select_icon = resolveComponent("select-icon");
  const _component_mcw_notched_outline = resolveComponent("mcw-notched-outline");
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");
  const _component_mcw_line_ripple = resolveComponent("mcw-line-ripple");
  const _component_mcw_menu = resolveComponent("mcw-menu");
  const _component_select_helper_text = resolveComponent("select-helper-text");

  return (openBlock(), createBlock("div", _hoisted_1$j, [
    createVNode("div", mergeProps({ ref: "root" }, _ctx.$attrs, { class: _ctx.rootClasses }), [
      createVNode("div", mergeProps({
        ref: "anchorEl",
        class: ["mdc-select__anchor", _ctx.rippleClasses],
        style: _ctx.rippleStyles,
        onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args))),
        onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args))),
        onFocus: _cache[3] || (_cache[3] = (...args) => (_ctx.handleFocus && _ctx.handleFocus(...args))),
        onBlur: _cache[4] || (_cache[4] = (...args) => (_ctx.handleBlur && _ctx.handleBlur(...args)))
      }, _ctx.selectAnchorAttrs, {
        role: "button",
        "aria-haspopup": "listbox",
        "aria-required": _ctx.required
      }), [
        (_ctx.leadingIcon)
          ? (openBlock(), createBlock(_component_select_icon, {
              key: 0,
              ref: "leadingIconEl",
              icon: _ctx.leadingIcon,
              tabindex: "0",
              role: "button"
            }, null, 8 /* PROPS */, ["icon"]))
          : createCommentVNode("v-if", true),
        (!_ctx.outlined)
          ? (openBlock(), createBlock("span", _hoisted_2$f))
          : createCommentVNode("v-if", true),
        createVNode("span", _hoisted_3$b, [
          createVNode("span", _hoisted_4$9, toDisplayString(_ctx.selectedTextContent), 1 /* TEXT */)
        ]),
        _hoisted_5$5,
        (_ctx.outlined)
          ? (openBlock(), createBlock(_component_mcw_notched_outline, {
              key: 2,
              ref: "outlineEl"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
              ]),
              _: 1 /* STABLE */
            }, 512 /* NEED_PATCH */))
          : (openBlock(), createBlock(Fragment, { key: 3 }, [
              createVNode(_component_mcw_floating_label, { ref: "labelEl" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1 /* STABLE */
              }, 512 /* NEED_PATCH */),
              createVNode(_component_mcw_line_ripple, { ref: "lineRippleEl" }, null, 512 /* NEED_PATCH */)
            ], 64 /* STABLE_FRAGMENT */))
      ], 16 /* FULL_PROPS */, ["aria-required"]),
      createVNode(_component_mcw_menu, {
        ref: "menu",
        class: ["mdc-select__menu", _ctx.menuClasses],
        "onUpdate:modelValue": _ctx.handleChange,
        onSelect: _ctx.handleMenuItemAction,
        "onMdcMenuSurface:opened": _ctx.handleMenuOpened,
        "onMdcMenuSurface:closed": _ctx.handleMenuClosed,
        role: "listbox"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["class", "onUpdate:modelValue", "onSelect", "onMdcMenuSurface:opened", "onMdcMenuSurface:closed"])
    ], 16 /* FULL_PROPS */),
    (_ctx.helptext)
      ? (openBlock(), createBlock(_component_select_helper_text, {
          key: 0,
          ref: "helperTextEl",
          id: _ctx.helpId,
          helptextPersistent: _ctx.helptextPersistent,
          helptextValidation: _ctx.helptextValidation,
          helptext: _ctx.helptext
        }, null, 8 /* PROPS */, ["id", "helptextPersistent", "helptextValidation", "helptext"]))
      : createCommentVNode("v-if", true)
  ]))
}

script$v.render = render$v;
script$v.__file = "packages/select/select.vue";

var select = BasePlugin({
  mcwSelect: script$v,
  mcwNotchedOutline: script$p,
  mcwLineRipple: script$j,
  mcwFloatingLabel: script$e
});

var script$w = {
  name: 'mcw-slider',
  props: {
    modelValue: [Number, String],
    start: [Number, String],
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    discrete: Boolean,
    tickMarks: Boolean,
    disabled: Boolean,
    range: {
      type: Boolean,
      default: false
    }
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      skipInitialUIUpdate: false,
      dir: null,
      marks: [],
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': props.discrete,
        'mdc-slider--tick-marks': props.discrete && props.tickMarks,
        'mdc-slider--range': props.range
      },
      startValueText: '',
      startThumbClasses: {},
      startThumbAttrs: {
        'aria-valuenow': '0'
      },
      test: 50,
      endValueText: '',
      endThumbClasses: {},
      endThumbAttrs: {
        'aria-valuenow': '0'
      },
      inputs: [],
      thumbs: [],
      root: null,
      startThumb: null,
      endThumb: null,
      trackActive: null
    });
    let foundation;

    let valueToAriaValueTextFn = () => null;

    const setValueToAriaValueTextFn = mapFn => {
      valueToAriaValueTextFn = mapFn;
    };

    const getThumbEl = thumb => {
      return thumb === Thumb.END ? uiState.thumbs[uiState.thumbs.length - 1] : uiState.thumbs[0];
    };

    const getThumbName = (thumb, suffix) => {
      const thumbName = thumb == Thumb.END ? 'endThumb' : 'startThumb';
      return "".concat(thumbName).concat(suffix);
    };

    const setInputRef = el => uiState.inputs.push(el);

    const setThumbRef = el => uiState.thumbs.push(el);

    const getInput = thumb => {
      return thumb === Thumb.END ? uiState.inputs[uiState.inputs.length - 1] : uiState.inputs[0];
    };

    const adapter = {
      hasClass: className => uiState.root.classList.contains(className),
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      addThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, 'Classes');
        uiState[thumbName] = _objectSpread2(_objectSpread2({}, uiState[thumbName]), {}, {
          [className]: true
        });
      },
      removeThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, 'Classes'); // eslint-disable-next-line no-unused-vars

        const _uiState$thumbName = uiState[thumbName],
              rest = _objectWithoutProperties(_uiState$thumbName, [className].map(_toPropertyKey));

        uiState[thumbName] = rest;
      },
      getAttribute: name => uiState.root.getAttribute(name),
      getInputValue: thumb => getInput(thumb).value,
      setInputValue: (value, thumb) => {
        getInput(thumb).value = value;
      },
      getInputAttribute: (attribute, thumb) => {
        if (attribute == 'value') {
          return adapter.getInputValue(thumb);
        }

        return getInput(thumb).getAttribute(attribute);
      },
      setInputAttribute: (attribute, value, thumb) => {
        getInput(thumb).setAttribute(attribute, value);
      },
      removeInputAttribute: (attribute, thumb) => {
        getInput(thumb).removeAttribute(attribute);
      },
      focusInput: thumb => {
        getInput(thumb).focus();
      },
      isInputFocused: thumb => getInput(thumb) === document.activeElement,
      getThumbAttribute: (attribute, thumb) => {
        const thumbName = getThumbName(thumb, 'Attrs');
        return uiState[thumbName][attribute];
      },
      setThumbAttribute: (attribute, value, thumb) => {
        const thumbName = getThumbName(thumb, 'Attrs');
        uiState[thumbName] = _objectSpread2(_objectSpread2({}, uiState[thumbName]), {}, {
          [attribute]: value
        });
      },
      isThumbFocused: thumb => {
        return getThumbEl(thumb) === document.activeElement;
      },
      focusThumb: thumb => getThumbEl(thumb).focus(),
      getThumbKnobWidth: thumb => {
        var _getThumbEl$querySele;

        return (_getThumbEl$querySele = getThumbEl(thumb).querySelector(".".concat(cssClasses$7.THUMB_KNOB))) === null || _getThumbEl$querySele === void 0 ? void 0 : _getThumbEl$querySele.getBoundingClientRect().width;
      },
      getThumbBoundingClientRect: thumb => getThumbEl(thumb).getBoundingClientRect(),
      getBoundingClientRect: () => uiState.root.getBoundingClientRect(),
      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',
      setThumbStyleProperty: (propertyName, value, thumb) => {
        getThumbEl(thumb).style.setProperty(propertyName, value);
      },
      removeThumbStyleProperty: (propertyName, thumb) => getThumbEl(thumb).style.removeProperty(propertyName),
      setTrackActiveStyleProperty: (propertyName, value) => uiState.trackActive.style.setProperty(propertyName, value),
      removeTrackActiveStyleProperty: propertyName => {
        uiState.trackActive.style.removeProperty(propertyName);
      },
      setValueIndicatorText: (value, thumb) => {
        const thumbName = thumb == Thumb.END ? 'endValueText' : 'startValueText';
        uiState[thumbName] = String(value);
      },
      getValueToAriaValueTextFn: () => valueToAriaValueTextFn,
      updateTickMarks: tickMarks => {
        uiState.marks = tickMarks.map(mark => mark == 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive');
      },
      setPointerCapture: pointerId => uiState.root.setPointerCapture(pointerId),
      emitChangeEvent: (value, thumb) => {
        emitCustomEvent(uiState.root, events.CHANGE, {
          value,
          thumb
        });
        const eventName = thumb == Thumb.END ? 'update:modelValue' : 'update:start';
        emit(eventName, value);
      },
      emitInputEvent: (value, thumb) => {
        emitCustomEvent(uiState.root, events.INPUT, {
          value,
          thumb
        });
      },
      emitDragStartEvent: () => {// Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },
      emitDragEndEvent: () => {// Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },
      registerEventHandler: (evtType, handler) => uiState.root.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => uiState.root.removeEventListener(evtType, handler),
      registerThumbEventHandler: (thumb, evtType, handler) => getThumbEl(thumb).addEventListener(evtType, handler),
      deregisterThumbEventHandler: (thumb, evtType, handler) => getThumbEl(thumb).removeEventListener(evtType, handler),
      registerInputEventHandler: (thumb, evtType, handler) => {
        getInput(thumb).addEventListener(evtType, handler);
      },
      deregisterInputEventHandler: (thumb, evtType, handler) => {
        getInput(thumb).removeEventListener(evtType, handler);
      },
      registerBodyEventHandler: (evtType, handler) => document.body.addEventListener(evtType, handler),
      deregisterBodyEventHandler: (evtType, handler) => document.body.removeEventListener(evtType, handler),
      registerWindowEventHandler: (evtType, handler) => window.addEventListener(evtType, handler),
      deregisterWindowEventHandler: (evtType, handler) => window.removeEventListener(evtType, handler)
    };
    watch(() => props.modelValue, nv => {
      if (foundation.getValue() !== Number(nv)) {
        foundation.setValue(nv);
      }
    });
    watch(() => props.start, nv => {
      if (foundation.getValueStart() !== Number(nv)) {
        foundation.setValueStart(nv);
      }
    });
    watch(() => props.disabled, nv => {
      foundation.setDisabled(nv);
    });
    onMounted(() => {
      uiState.dir = getComputedStyle(uiState.root).direction;

      if (props.range) {
        uiState.startThumbAttrs['aria-valuemin'] = props.min;
        uiState.startThumbAttrs['aria-valuemax'] = props.max;
        uiState.startThumbAttrs['aria-valuenow'] = props.start;
        uiState.startValueText = String(props.start);
      }

      uiState.endThumbAttrs['aria-valuemin'] = props.min;
      uiState.endThumbAttrs['aria-valuemax'] = props.max;
      uiState.endThumbAttrs['aria-valuenow'] = props.modelValue;
      uiState.endValueText = String(props.modelValue);
      foundation = new MDCSliderFoundation(adapter);
      foundation.init();
      foundation.layout({
        skipUpdateUI: uiState.skipInitialUIUpdate
      });
      foundation.setDisabled(props.disabled);
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      setValueToAriaValueTextFn,
      setInputRef,
      setThumbRef
    });
  }

};

const _hoisted_1$k = { class: "mdc-slider__track" };
const _hoisted_2$g = /*#__PURE__*/createVNode("div", { class: "mdc-slider__track--inactive" }, null, -1 /* HOISTED */);
const _hoisted_3$c = { class: "mdc-slider__track--active" };
const _hoisted_4$a = {
  key: 0,
  class: "mdc-slider__tick-marks"
};
const _hoisted_5$6 = {
  key: 0,
  class: "mdc-slider__value-indicator-container",
  "aria-hidden": "true"
};
const _hoisted_6$4 = { class: "mdc-slider__value-indicator" };
const _hoisted_7$3 = { class: "mdc-slider__value-indicator-text" };
const _hoisted_8$3 = /*#__PURE__*/createVNode("div", { class: "mdc-slider__thumb-knob" }, null, -1 /* HOISTED */);
const _hoisted_9$2 = {
  key: 0,
  class: "mdc-slider__value-indicator-container",
  "aria-hidden": "true"
};
const _hoisted_10$1 = { class: "mdc-slider__value-indicator" };
const _hoisted_11$1 = { class: "mdc-slider__value-indicator-text" };
const _hoisted_12$1 = /*#__PURE__*/createVNode("div", { class: "mdc-slider__thumb-knob" }, null, -1 /* HOISTED */);

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    ref: "root",
    class: _ctx.classes
  }, [
    (_ctx.range)
      ? (openBlock(), createBlock("input", {
          key: 0,
          ref: _ctx.setInputRef,
          class: "mdc-slider__input",
          type: "range",
          min: _ctx.min,
          max: _ctx.max,
          step: _ctx.step,
          value: _ctx.start,
          name: "volume",
          "aria-label": "slider"
        }, null, 8 /* PROPS */, ["min", "max", "step", "value"]))
      : createCommentVNode("v-if", true),
    createVNode("input", {
      ref: _ctx.setInputRef,
      class: "mdc-slider__input",
      type: "range",
      min: _ctx.min,
      max: _ctx.max,
      step: _ctx.step,
      value: _ctx.modelValue,
      name: "volume",
      "aria-label": "slider"
    }, null, 8 /* PROPS */, ["min", "max", "step", "value"]),
    createVNode("div", _hoisted_1$k, [
      _hoisted_2$g,
      createVNode("div", _hoisted_3$c, [
        createVNode("div", {
          ref: "trackActive",
          dir: _ctx.dir,
          class: "mdc-slider__track--active_fill"
        }, null, 8 /* PROPS */, ["dir"])
      ]),
      (_ctx.tickMarks)
        ? (openBlock(), createBlock("div", _hoisted_4$a, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.marks, (mark) => {
              return (openBlock(), createBlock("div", { class: mark }, null, 2 /* CLASS */))
            }), 256 /* UNKEYED_FRAGMENT */))
          ]))
        : createCommentVNode("v-if", true)
    ]),
    (_ctx.range)
      ? (openBlock(), createBlock("div", mergeProps({
          key: 1,
          ref: _ctx.setThumbRef,
          class: [_ctx.startThumbClasses, "mdc-slider__thumb"],
          tabindex: "0",
          role: "slider",
          "aria-label": "slider"
        }, _ctx.startThumbAttrs), [
          (_ctx.discrete)
            ? (openBlock(), createBlock("div", _hoisted_5$6, [
                createVNode("div", _hoisted_6$4, [
                  createVNode("span", _hoisted_7$3, toDisplayString(_ctx.startValueText), 1 /* TEXT */)
                ])
              ]))
            : createCommentVNode("v-if", true),
          _hoisted_8$3
        ], 16 /* FULL_PROPS */))
      : createCommentVNode("v-if", true),
    createVNode("div", mergeProps({
      ref: _ctx.setThumbRef,
      class: [_ctx.endThumbClasses, "mdc-slider__thumb"],
      tabindex: "0",
      role: "slider",
      "aria-label": "slider"
    }, _ctx.endThumbAttrs), [
      (_ctx.discrete)
        ? (openBlock(), createBlock("div", _hoisted_9$2, [
            createVNode("div", _hoisted_10$1, [
              createVNode("span", _hoisted_11$1, toDisplayString(_ctx.endValueText), 1 /* TEXT */)
            ])
          ]))
        : createCommentVNode("v-if", true),
      _hoisted_12$1
    ], 16 /* FULL_PROPS */)
  ], 2 /* CLASS */))
}

script$w.render = render$w;
script$w.__file = "packages/slider/slider.vue";

var slider = BasePlugin({
  mcwSlider: script$w
});

const noop = () => {};

var script$x = {
  name: 'mcw-snackbar-queue',
  props: {
    snack: Object
  },

  setup(props, {
    emit,
    attrs
  }) {
    const uiState = reactive({
      open: false,
      queue: [],
      snack: {
        timeoutMs: 5000,
        closeOnEscape: false,
        message: '',
        actionText: '',
        dismissAction: true,
        leading: false,
        stacked: false
      }
    });
    let actionHandler_;

    const handleSnack = ({
      timeoutMs = 5000,
      closeOnEscape,
      message = '',
      actionText = '',
      dismissAction = true,
      stacked,
      leading,
      actionHandler = noop
    }) => {
      uiState.queue.push(() => {
        uiState.snack = {
          timeoutMs,
          closeOnEscape,
          message,
          actionText,
          actionHandler,
          dismissAction,
          stacked,
          leading
        };
        actionHandler_ = actionHandler;
        uiState.open = true;
      });

      if (uiState.queue.length === 1) {
        uiState.queue[0]();
      }
    };

    const handleClosed = () => {
      uiState.open = false;
      uiState.queue.shift();

      if (uiState.queue.length > 0) {
        nextTick(() => uiState.queue[0]());
      }
    };

    const listeners = computed(() => {
      return {
        'update:reason': attrs['update:reason'],
        'mdcsnackbar:closed': ({
          reason
        }) => {
          if (actionHandler_ && reason === 'action') {
            actionHandler_({
              reason
            });
          }

          handleClosed();
          emit('closed', {
            reason
          });
        }
      };
    });
    watch(() => props.snack, (nv, ov) => {
      if (nv) {
        handleSnack(nv);
        emit('update:snack', null);
      }
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      handleSnack,
      listeners
    });
  }

};

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_snackbar = resolveComponent("mcw-snackbar");

  return (openBlock(), createBlock(_component_mcw_snackbar, mergeProps({ modelValue: _ctx.open }, _ctx.snack, toHandlers(_ctx.listeners)), null, 16 /* FULL_PROPS */, ["modelValue"]))
}

script$x.render = render$x;
script$x.__file = "packages/snackbar/snackbar-queue.vue";

const {
  strings: strings$a,
  numbers
} = MDCSnackbarFoundation;
var script$y = {
  name: 'mcw-snackbar',
  props: {
    modelValue: Boolean,
    stacked: Boolean,
    leading: Boolean,
    message: String,
    actionText: String,
    timeoutMs: [String, Number],
    closeOnEscape: {
      type: Boolean,
      default: true
    },
    dismissAction: {
      type: [String, Boolean],
      default: true
    },
    reason: String
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {},
      hidden: false,
      actionHidden: false,
      showMessage: true,
      labelEl: null
    });
    let foundation;
    const rootClasses = computed(() => {
      return _objectSpread2({
        'mdc-snackbar': 1,
        'mdc-snackbar--leading': props.leading,
        'mdc-snackbar--stacked': props.stacked
      }, uiState.classes);
    });
    const showDismissAction = computed(() => {
      return typeof props.dismissAction === 'string' ? props.dismissAction != 'false' : props.dismissAction;
    });

    const handleKeydownEvent = evt => foundation.handleKeyDown(evt);

    const announce = (ariaEl, labelEl = ariaEl) => {
      const priority = ariaEl.getAttribute('aria-live');
      const text = props.message;

      if (!text) {
        return;
      } // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.


      ariaEl.setAttribute('aria-live', 'off'); // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
      // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
      // sent to the browser in the initial HTML response won't be read unless we clear the element's
      // `textContent` first.
      // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
      // so screen readers won't announce the second message unless we first clear `textContent`.
      //
      // We have to clear the label text two different ways to make it work in all browsers and screen readers:
      //
      //   1. `textContent = ''` is required for IE11 + JAWS
      //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
      //
      // All other browser/screen reader combinations support both methods.
      //
      // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
      // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
      //
      // This technique has been tested in:
      //
      //   * JAWS 2019:
      //       - Chrome 70
      //       - Firefox 60 (ESR)
      //       - IE 11
      //   * NVDA 2018:
      //       - Chrome 70
      //       - Firefox 60 (ESR)
      //       - IE 11
      //   * ChromeVox 53

      uiState.showMessage = false; // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
      // CSS generated content is normally announced by screen readers
      // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
      // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.

      labelEl.setAttribute(strings$a.ARIA_LIVE_LABEL_TEXT_ATTR, props.message);
      setTimeout(() => {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

        labelEl.removeAttribute(strings$a.ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

        uiState.showMessage = true;
      }, numbers.ARIA_LIVE_DELAY_MS);
    };

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      announce: () => announce(uiState.labelEl),
      notifyClosed: reason => {
        emit(strings$a.CLOSED_EVENT.toLowerCase(), reason ? {
          reason
        } : {});
        emit('update:modelValue', false);
        emit('hide');
      },
      notifyClosing: reason => {
        emit(strings$a.CLOSING_EVENT, reason ? {
          reason
        } : {});
        emit('update:reason', reason);
      },
      notifyOpened: () => {
        emit(strings$a.OPENED_EVENT.toLowerCase(), {});
        emit('update:modelValue', true);
        emit('show', {});
      },
      notifyOpening: () => emit(strings$a.OPENING_EVENT, {}),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      }
    };

    const surfaceClickHandler = evt => {
      if (isActionButton_(evt.target)) {
        foundation.handleActionButtonClick(evt);
      } else if (isActionIcon_(evt.target)) {
        foundation.handleActionIconClick(evt);
      }
    };

    watch(() => props.modelValue, nv => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close(props.reason ? props.reason : '');
      }
    });
    watch(() => props.timeoutMs, nv => {
      if (nv !== void 0) {
        foundation.setTimeoutMs(nv);
      }
    });
    watch(() => props.closeOnEscape, nv => foundation.setCloseOnEscape(nv));
    onMounted(() => {
      window.addEventListener('keydown', handleKeydownEvent);
      foundation = new MDCSnackbarFoundation(adapter);
      foundation.init();

      if (props.timeoutMs !== void 0) {
        foundation.setTimeoutMs(props.timeoutMs);
      }

      foundation.setCloseOnEscape(props.closeOnEscape);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeydownEvent);
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses,
      showDismissAction,
      surfaceClickHandler
    });
  }

}; // ===
// Private functions
// ===

function isActionButton_(target) {
  return Boolean(closest(target, strings$a.ACTION_SELECTOR));
}

function isActionIcon_(target) {
  return Boolean(closest(target, strings$a.DISMISS_SELECTOR));
}

const _hoisted_1$l = {
  ref: "labelEl",
  class: "mdc-snackbar__label",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_2$h = {
  key: 1,
  style: {"display":"inline-block","width":"0","height":"'1px'"}
};
const _hoisted_3$d = { class: "mdc-snackbar__actions" };
const _hoisted_4$b = {
  key: 0,
  ref: "actionEl",
  type: "button",
  class: "mdc-button mdc-snackbar__action"
};
const _hoisted_5$7 = /*#__PURE__*/createVNode("div", { class: "mdc-button__ripple" }, null, -1 /* HOISTED */);
const _hoisted_6$5 = { class: "mdc-button__label" };
const _hoisted_7$4 = {
  key: 1,
  type: "button",
  class: "mdc-icon-button mdc-snackbar__dismiss material-icons",
  title: "Dismiss"
};

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", { class: _ctx.rootClasses }, [
    createVNode("div", {
      class: "mdc-snackbar__surface",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.surfaceClickHandler && _ctx.surfaceClickHandler(...args)))
    }, [
      createVNode("div", _hoisted_1$l, [
        (_ctx.showMessage)
          ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.message), 1 /* TEXT */)
            ], 64 /* STABLE_FRAGMENT */))
          : (openBlock(), createBlock("span", _hoisted_2$h, " "))
      ], 512 /* NEED_PATCH */),
      createVNode("div", _hoisted_3$d, [
        (_ctx.actionText)
          ? (openBlock(), createBlock("button", _hoisted_4$b, [
              _hoisted_5$7,
              createVNode("span", _hoisted_6$5, toDisplayString(_ctx.actionText), 1 /* TEXT */)
            ], 512 /* NEED_PATCH */))
          : createCommentVNode("v-if", true),
        (_ctx.showDismissAction)
          ? (openBlock(), createBlock("button", _hoisted_7$4, " close "))
          : createCommentVNode("v-if", true)
      ])
    ])
  ], 2 /* CLASS */))
}

script$y.render = render$y;
script$y.__file = "packages/snackbar/snackbar.vue";

var snackbar = BasePlugin({
  mcwSnackbar: script$y,
  mcwSnackbarQueue: script$x
});

let switchId_ = 0;
var script$z = {
  name: 'mcw-switch',
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String,
    id: String
  },

  setup(props, {
    slots,
    emit
  }) {
    var _props$id;

    const uiState = reactive({
      classes: {
        'mdc-switch': 1
      },
      nativeControlChecked: props.modelValue,
      nativeControlDisabled: props.disabled,
      nativeAttrs: {},
      root: null
    });
    const {
      classes: rippleClasses,
      styles
    } = useRipplePlugin$1(toRef(uiState, 'root'));
    let foundation;
    const switchId = (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : "__mcw-switch-".concat(switchId_++);
    const classes = computed(() => {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    const hasLabel = computed(() => {
      return props.label || slots.default;
    });

    const onChanged = event => {
      var _foundation;

      (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.handleChange(event);
      emit('update:modelValue', event.target.checked);
    };

    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      setNativeControlChecked: checked => uiState.nativeControlChecked = checked,
      setNativeControlDisabled: disabled => uiState.nativeControlDisabled = disabled,
      setNativeControlAttr: (attr, value) => {
        uiState.nativeAttrs[attr] = value;
      }
    };
    watch(() => props.modelValue, (nv, ov) => {
      var _foundation2;

      nv != ov && ((_foundation2 = foundation) === null || _foundation2 === void 0 ? void 0 : _foundation2.setChecked(nv));
    });
    watch(() => props.disabled, (nv, ov) => {
      var _foundation3;

      nv != ov && ((_foundation3 = foundation) === null || _foundation3 === void 0 ? void 0 : _foundation3.setDisabled(nv));
    });
    onMounted(() => {
      foundation = new MDCSwitchFoundation(adapter);
      foundation.init();
      foundation.setChecked(props.modelValue);
      foundation.setDisabled(props.disabled);
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes,
      hasLabel,
      onChanged,
      styles,
      switchId
    });
  }

};

const _hoisted_1$m = /*#__PURE__*/createVNode("div", { class: "mdc-switch__track" }, null, -1 /* HOISTED */);
const _hoisted_2$i = { class: "mdc-switch__thumb-underlay" };
const _hoisted_3$e = /*#__PURE__*/createVNode("div", { class: "mdc-switch__thumb" }, null, -1 /* HOISTED */);

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: [{
  'mdc-form-field': _ctx.hasLabel,
  'mdc-form-field--align-end': _ctx.hasLabel && _ctx.alignEnd,
}, "mdc-switch-wrapper"]
  }, [
    createVNode("div", {
      ref: "root",
      class: [_ctx.classes, "mdc-switch"],
      style: _ctx.styles
    }, [
      _hoisted_1$m,
      createVNode("div", _hoisted_2$i, [
        _hoisted_3$e,
        createVNode("input", mergeProps({
          name: _ctx.name,
          id: _ctx.switchId,
          value: _ctx.value,
          type: "checkbox",
          role: "switch",
          class: "mdc-switch__native-control",
          checked: _ctx.nativeControlChecked,
          disabled: _ctx.nativeControlDisabled
        }, _ctx.nativeAttrs, {
          onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.onChanged && _ctx.onChanged(...args)))
        }), null, 16 /* FULL_PROPS */, ["name", "id", "value", "checked", "disabled"])
      ])
    ], 6 /* CLASS, STYLE */),
    (_ctx.hasLabel)
      ? (openBlock(), createBlock("label", {
          key: 0,
          for: _ctx.switchId,
          class: "mdc-switch-label"
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, ["for"]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$z.render = render$z;
script$z.__file = "packages/switch/switch.vue";

var switchControl = BasePlugin({
  mcwSwitch: script$z
});

const {
  strings: strings$b
} = MDCTabBarFoundation;
var script$A = {
  name: 'mcw-tab-bar',
  props: {
    fade: Boolean,
    stacked: Boolean,
    spanContent: Boolean,
    modelValue: Number
  },

  setup(props, {
    emit,
    attrs
  }) {
    const scroller = ref(null);
    const root = ref(null);
    const tabList = ref([]);
    provide('mcwTabList', {
      fade: props.fade,
      stacked: props.stacked,
      spanContent: props.spanContent,
      tabList
    });
    const listeners = computed(() => {
      return {
        change: attrs.onChange,
        [MDCTabFoundation.strings.INTERACTED_EVENT]: evt => {
          foundation.handleTabInteraction(evt);
        },
        'mdc-tab:interacted': evt => {
          foundation.handleTabInteraction(evt);
        },
        keydown: evt => foundation.handleKeyDown(evt)
      };
    });
    let foundation;

    const getTabElements_ = () => {
      return [].slice.call(root.value.querySelectorAll(strings$b.TAB_SELECTOR));
    };

    const activateTab = index => foundation.activateTab(index);

    const adapter = {
      scrollTo: scrollX => scroller.value.scrollTo(scrollX),
      incrementScroll: scrollXIncrement => scroller.value.incrementScroll(scrollXIncrement),
      getScrollPosition: () => scroller.value.getScrollPosition(),
      getScrollContentWidth: () => scroller.value.getScrollContentWidth(),
      getOffsetWidth: () => root.value.offsetWidth,
      isRTL: () => window.getComputedStyle(root.value).getPropertyValue('direction') === 'rtl',
      setActiveTab: index => {
        foundation.activateTab(index);
      },
      activateTabAtIndex: (index, clientRect) => {
        tabList.value[index].activate(clientRect);
      },
      deactivateTabAtIndex: index => {
        var _tabList$value$index;

        return (_tabList$value$index = tabList.value[index]) === null || _tabList$value$index === void 0 ? void 0 : _tabList$value$index.deactivate();
      },
      focusTabAtIndex: index => tabList.value[index].focus(),
      getTabIndicatorClientRectAtIndex: index => {
        var _tabList$value$index2;

        return (_tabList$value$index2 = tabList.value[index]) === null || _tabList$value$index2 === void 0 ? void 0 : _tabList$value$index2.computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: index => tabList.value[index].computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < tabList.value.length; i++) {
          if (tabList.value[i].isActive()) {
            return i;
          }
        }

        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = getTabElements_();
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: id => {
        for (let i = 0; i < tabList.value.length; i++) {
          if (tabList.value[i].id === id) {
            return i;
          }
        }

        return -1;
      },
      getTabListLength: () => tabList.value.length,
      notifyTabActivated: index => {
        emitCustomEvent(root.value, strings$b.TAB_ACTIVATED_EVENT, {
          index
        }, true);
        emit('update:modelValue', Number(index));
      }
    };
    onMounted(() => {
      foundation = foundation = new MDCTabBarFoundation(adapter);
      foundation.init(); // ensure active tab

      props.modelValue !== void 0;
      foundation.activateTab(Number(props.modelValue) || 0);

      for (let i = 0; i < tabList.value.length; i++) {
        if (tabList.value[i].active) {
          foundation.scrollIntoView(i);
          break;
        }
      } // watch for changes in the modelValue
      // note watchEffect does not give the correct behaviour


      watch(() => props.modelValue, nv => {
        foundation.activateTab(Number(nv));
      });
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      root,
      scroller,
      listeners,
      activateTab
    };
  }

};

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_tab_scroller = resolveComponent("mcw-tab-scroller");

  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    role: "tablist"
  }, toHandlers(_ctx.listeners), { class: "mdc-tab-bar" }), [
    createVNode(_component_mcw_tab_scroller, { ref: "scroller" }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3 /* FORWARDED */
    }, 512 /* NEED_PATCH */)
  ], 16 /* FULL_PROPS */))
}

script$A.render = render$A;
script$A.__file = "packages/tabs/tab-bar.vue";

const {
  cssClasses: cssClasses$5
} = MDCTabIndicatorFoundation;
var script$B = {
  name: 'mcw-tab-indicator',
  props: {
    fade: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-tab-indicator--fade': props.fade
      },
      contentClasses: {
        'mdc-tab-indicator__content--underline': !props.icon,
        'mdc-tab-indicator__content--icon': !!props.icon,
        'material-icons': !!props.icon
      },
      contentAttrs: {
        'aria-hidden': !!props.icon
      },
      styles: {},
      contentEl: null
    });
    let foundation;
    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      computeContentClientRect: () => uiState.contentEl.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) => uiState.styles = _objectSpread2(_objectSpread2({}, uiState.styles), {}, {
        [prop]: value
      })
    };

    const deactivate = () => foundation.deactivate();

    const computeContentClientRect = () => foundation.computeContentClientRect();

    const activate = previousIndicatorClientRect => {
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        adapter.addClass(cssClasses$5.ACTIVE);
        return;
      }

      const currentClientRect = computeContentClientRect();
      const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition = previousIndicatorClientRect.left - currentClientRect.left; // THE FIX - use request animation frame to ensure framework has rendered DOM

      requestAnimationFrame(() => {
        adapter.addClass(cssClasses$5.NO_TRANSITION);
        adapter.setContentStyleProperty('transform', "translateX(".concat(xPosition, "px) scaleX(").concat(widthDelta, ")"));
        requestAnimationFrame(() => {
          adapter.removeClass(cssClasses$5.NO_TRANSITION);
          adapter.addClass(cssClasses$5.ACTIVE);
          adapter.setContentStyleProperty('transform', '');
        });
      });
    };

    onMounted(() => {
      foundation = props.fade ? new MDCFadingTabIndicatorFoundation(adapter) : new MDCSlidingTabIndicatorFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      activate,
      deactivate,
      computeContentClientRect
    });
  }

};

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", {
    class: ["mdc-tab-indicator", _ctx.classes]
  }, [
    createVNode("span", mergeProps({
      ref: "contentEl",
      class: ["mdc-tab-indicator__content", _ctx.contentClasses],
      style: _ctx.styles
    }, _ctx.contentAttrs), toDisplayString(_ctx.icon), 17 /* TEXT, FULL_PROPS */)
  ], 2 /* CLASS */))
}

script$B.render = render$B;
script$B.__file = "packages/tabs/tab-indicator.vue";

var script$C = {
  name: 'mcw-tab-scroller',

  setup() {
    const uiState = reactive({
      classes: {
        'mdc-tab-scroller': 1
      },
      areaClasses: {
        'mdc-tab-scroller__scroll-area': 1
      },
      areaStyles: {},
      contentStyles: {},
      content: null,
      area: null
    });
    let foundation;

    const getScrollPosition = () => foundation.getScrollPosition();

    const getScrollContentWidth = () => uiState.content.offsetWidth;

    const incrementScroll = scrollXIncrement => foundation.incrementScroll(scrollXIncrement);

    const scrollTo = scrollX => foundation.scrollTo(scrollX);

    const onTransitionEnd = evt => foundation.handleTransitionEnd(evt);

    const areaListeners = {
      mousedown: evt => foundation.handleInteraction(evt),
      wheel: evt => foundation.handleInteraction(evt),
      pointerdown: evt => foundation.handleInteraction(evt),
      touchstart: evt => foundation.handleInteraction(evt),
      keydown: evt => foundation.handleInteraction(evt)
    };
    const adapter = {
      eventTargetMatchesSelector: (evtTarget, selector) => {
        return matches(evtTarget, selector);
      },
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      addScrollAreaClass: className => uiState.areaClasses = _objectSpread2(_objectSpread2({}, uiState.areaClasses), {}, {
        [className]: true
      }),
      setScrollAreaStyleProperty: (prop, value) => uiState.areaStyles = _objectSpread2(_objectSpread2({}, uiState.areaStyles), {}, {
        [prop]: value
      }),
      setScrollContentStyleProperty: (prop, value) => uiState.contentStyles = _objectSpread2(_objectSpread2({}, uiState.contentStyles), {}, {
        [prop]: value
      }),
      getScrollContentStyleValue: propName => window.getComputedStyle(uiState.content).getPropertyValue(propName),
      setScrollAreaScrollLeft: scrollX => uiState.area.scrollLeft = scrollX,
      getScrollAreaScrollLeft: () => uiState.area.scrollLeft,
      getScrollContentOffsetWidth: () => uiState.content.offsetWidth,
      getScrollAreaOffsetWidth: () => uiState.area.offsetWidth,
      computeScrollAreaClientRect: () => uiState.area.getBoundingClientRect(),
      computeScrollContentClientRect: () => uiState.content.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => computeHorizontalScrollbarHeight(document)
    };
    onMounted(() => {
      foundation = new MDCTabScrollerFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      scrollTo,
      incrementScroll,
      getScrollPosition,
      getScrollContentWidth,
      areaListeners,
      onTransitionEnd
    });
  }

};

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", { class: _ctx.classes }, [
    createVNode("div", mergeProps({
      ref: "area",
      class: _ctx.areaClasses,
      style: _ctx.areaStyles
    }, toHandlers(_ctx.areaListeners)), [
      createVNode("div", {
        ref: "content",
        class: "mdc-tab-scroller__scroll-content",
        style: _ctx.contentStyles,
        onTransitionend: _cache[1] || (_cache[1] = (...args) => (_ctx.onTransitionEnd && _ctx.onTransitionEnd(...args)))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 36 /* STYLE, HYDRATE_EVENTS */)
    ], 16 /* FULL_PROPS */)
  ], 2 /* CLASS */))
}

script$C.render = render$C;
script$C.__file = "packages/tabs/tab-scroller.vue";

const {
  strings: strings$c
} = MDCTabFoundation$1;
let tabId_ = 0;
var script$D = {
  name: 'mcw-tab',
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    minWidth: Boolean
  },
  components: {
    CustomLink
  },

  setup(props, {
    slots
  }) {
    const uiState = reactive({
      classes: {
        'mdc-tab': 1,
        'mdc-tab--min-width': props.minWidth
      },
      rootAttrs: {
        role: 'tab',
        'aria-selected': 'false',
        tabindex: '-1',
        tag: 'button'
      },
      styles: {},
      content: null,
      iconEl: null,
      tabIndicator: null,
      root: null,
      rippleSurface: null
    });
    const {
      classes: rippleClasses,
      styles: rippleStyles
    } = useRipplePlugin$1(toRef(uiState, 'root'));
    const {
      fade,
      stacked,
      spanContent,
      tabList
    } = inject('mcwTabList');
    uiState.classes['mdc-tab--stacked'] = stacked;
    const hasIcon = computed(() => {
      if (props.icon || slots.icon) {
        return props.icon ? extractIconProp(props.icon) : {};
      }

      return false;
    });
    const hasText = computed(() => {
      return !!slots.default;
    });
    let foundation;
    const tabId = "__mcw-tab-".concat(tabId_++);
    let rootEl;

    const activate = computeIndicatorClientRect => foundation.activate(computeIndicatorClientRect);

    const deactivate = () => foundation.deactivate();

    const isActive = () => foundation.isActive();

    const setActive = isActive => {
      if (isActive) {
        uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
          'mdc-tab--active': true
        }), uiState.tabIndicator.activate();
      }
    };

    const computeIndicatorClientRect = () => uiState.tabIndicator.computeContentClientRect();

    const computeDimensions = () => foundation.computeDimensions();

    const focus = () => rootEl.focus();

    const onClick = evt => {
      foundation.handleClick(evt);
    };

    const adapter = {
      setAttr: (attr, value) => uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, {
        [attr]: value
      }),
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => !!uiState.classes[className],
      activateIndicator: previousIndicatorClientRect => uiState.tabIndicator.activate(previousIndicatorClientRect),
      deactivateIndicator: () => uiState.tabIndicator.deactivate(),
      notifyInteracted: () => {
        emitCustomEvent(rootEl, strings$c.INTERACTED_EVENT, {
          tabId
        }, true
        /* bubble */
        );
      },
      getOffsetLeft: () => rootEl.offsetLeft,
      getOffsetWidth: () => rootEl.offsetWidth,
      getContentOffsetLeft: () => uiState.content.offsetLeft,
      getContentOffsetWidth: () => uiState.content.offsetWidth,
      focus: () => rootEl.focus()
    };
    onMounted(() => {
      rootEl = uiState.root.$el;
      foundation = new MDCTabFoundation$1(adapter);
      foundation.init();
      tabList.value.push({
        id: tabId,
        activate,
        deactivate,
        focus,
        computeIndicatorClientRect,
        computeDimensions,
        isActive
      });
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      hasIcon,
      hasText,
      onClick,
      setActive,
      tabId,
      fade,
      spanContent,
      rippleClasses,
      rippleStyles
    });
  }

}; // ===
// Private functions
// ===

function extractIconProp(iconProp) {
  if (typeof iconProp === 'string') {
    return {
      classes: {
        'material-icons': true
      },
      content: iconProp
    };
  } else if (iconProp instanceof Array) {
    return {
      classes: iconProp.reduce((result, value) => Object.assign(result, {
        [value]: true
      }), {})
    };
  } else if (typeof iconProp === 'object') {
    return {
      classes: iconProp.className.split(' ').reduce((result, value) => Object.assign(result, {
        [value]: true
      }), {}),
      content: iconProp.textContent
    };
  }
}

const _hoisted_1$n = {
  ref: "content",
  class: "mdc-tab__content"
};
const _hoisted_2$j = {
  key: 1,
  class: "mdc-tab__text-label"
};

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_tab_indicator = resolveComponent("mcw-tab-indicator");
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, mergeProps({
    id: _ctx.tabId,
    ref: "root"
  }, _ctx.rootAttrs, {
    class: _ctx.classes,
    style: _ctx.styles,
    onClick: _ctx.onClick
  }), {
    default: withCtx(() => [
      createVNode("span", _hoisted_1$n, [
        (_ctx.hasIcon)
          ? (openBlock(), createBlock("i", {
              key: 0,
              ref: "iconEl",
              class: ["mdc-tab__icon", _ctx.hasIcon.classes],
              tabindex: "0",
              "aria-hidden": "true",
              slot: "icon"
            }, toDisplayString(_ctx.hasIcon.content), 3 /* TEXT, CLASS */))
          : createCommentVNode("v-if", true),
        (_ctx.hasText)
          ? (openBlock(), createBlock("span", _hoisted_2$j, [
              renderSlot(_ctx.$slots, "default")
            ]))
          : createCommentVNode("v-if", true),
        (_ctx.spanContent)
          ? (openBlock(), createBlock(_component_mcw_tab_indicator, {
              key: 2,
              ref: "tabIndicator",
              fade: _ctx.fade
            }, null, 8 /* PROPS */, ["fade"]))
          : createCommentVNode("v-if", true),
        createVNode("span", {
          ref: "rippleSurface",
          class: ["mdc-tab__ripple", _ctx.rippleClasses],
          style: _ctx.styles
        }, null, 6 /* CLASS, STYLE */)
      ], 512 /* NEED_PATCH */),
      (!_ctx.spanContent)
        ? (openBlock(), createBlock(_component_mcw_tab_indicator, {
            key: 0,
            ref: "tabIndicator",
            fade: _ctx.fade
          }, null, 8 /* PROPS */, ["fade"]))
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */, ["id", "class", "style", "onClick"]))
}

script$D.render = render$D;
script$D.__file = "packages/tabs/tab.vue";

var tabs = BasePlugin({
  mcwTab: script$D,
  mcwTabBar: script$A,
  mcwTabScroller: script$C,
  mcwTabIndicator: script$B
});

var script$E = {
  name: 'mcw-character-counter',

  setup() {
    const uiState = reactive({
      textContent: '',
      foundation: {}
    });
    const adapter = {
      setContent: content => {
        uiState.textContent = content;
      }
    };
    onMounted(() => {
      uiState.foundation = new MDCTextFieldCharacterCounterFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }

};

const _hoisted_1$o = { class: "mdc-text-field-character-counter" };

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$o, toDisplayString(_ctx.textContent), 1 /* TEXT */))
}

script$E.render = render$E;
script$E.__file = "packages/textfield/character-counter.vue";

var script$F = {
  name: 'mcw-textfield-helper-text',
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': props.persistent,
        'mdc-text-field-helper-text--validation-msg': props.validation
      },
      rootAttrs: {
        'aria-hidden': true
      },
      helpertext: props.helptext,
      foundation: {}
    });
    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.classes[className]),
      getAttr: attr => uiState.rootAttrs[attr],
      setAttr: (attr, value) => uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, {
        [attr]: value
      }),
      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$rootAttrs = uiState.rootAttrs,
              rest = _objectWithoutProperties(_uiState$rootAttrs, [attr].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setContent: content => uiState.helpertext = content
    };
    watch(() => props.persistent, nv => uiState.foundation.setPersistent(nv));
    watch(() => props.validation, nv => uiState.foundation.setValidation(nv));
    onMounted(() => {
      uiState.foundation = new MDCTextFieldHelperTextFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }

};

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({ class: _ctx.classes }, _ctx.rootAttrs), toDisplayString(_ctx.helpertext), 17 /* TEXT, FULL_PROPS */))
}

script$F.render = render$F;
script$F.__file = "packages/textfield/textfield-helper-text.vue";

const {
  strings: strings$d
} = MDCTextFieldIconFoundation;
var script$G = {
  name: 'textfield-icon',
  props: {
    disabled: Boolean,
    trailing: Boolean,
    trailingIcon: Boolean
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {
        'mdc-text-field__icon': 1,
        ["mdc-text-field__icon--".concat(props.trailing || props.trailingIcon ? 'trailing' : 'leading')]: 1
      },
      rootAttrs: {
        tabindex: props.disabled ? '-1' : '0',
        role: props.disabled ? void 0 : 'button'
      },
      root: null,
      foundation: {}
    });
    const addIconFoundation = inject('addIconFoundation');
    const adapter = {
      getAttr: attr => uiState.rootAttrs[attr],
      setAttr: (attr, value) => uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, {
        [attr]: value
      }),
      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$rootAttrs = uiState.rootAttrs,
              rest = _objectWithoutProperties(_uiState$rootAttrs, [attr].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setContent: () =>
      /* content */
      {// set content is done through vue in templates
        // so we dont expose a method to set content
        // thus this is a no-op
      },
      registerInteractionHandler: (evtType, handler) => uiState.root.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => uiState.root.removeEventListener(evtType, handler),
      notifyIconAction: () => {
        emitCustomEvent(uiState.root, strings$d.ICON_EVENT, {}, true
        /* shouldBubble  */
        );
        emit('click');
      }
    };
    onMounted(() => {
      uiState.foundation = new MDCTextFieldIconFoundation(adapter);
      uiState.foundation.init();
      addIconFoundation({
        foundation: uiState.foundation,
        trailing: props.trailing || props.trailingIcon
      });
    });
    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }

};

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", mergeProps({
    ref: "root",
    class: ["material-icons", _ctx.classes]
  }, _ctx.rootAttrs), [
    renderSlot(_ctx.$slots, "default")
  ], 16 /* FULL_PROPS */))
}

script$G.render = render$G;
script$G.__file = "packages/textfield/textfield-icon.vue";

let uid_$1 = 0;
var script$H = {
  name: 'mcw-textfield',
  inheritAttrs: false,
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'email', 'search', 'password', 'tel', 'url', 'number'].indexOf(value) !== -1;
      }
    },
    label: String,
    outline: Boolean,
    disabled: Boolean,
    required: Boolean,
    valid: {
      type: Boolean,
      default: undefined
    },
    multiline: Boolean,
    size: {
      type: [Number, String],
      default: 20
    },
    minlength: {
      type: [Number, String],
      default: undefined
    },
    maxlength: {
      type: [Number, String],
      default: undefined
    },
    rows: {
      type: [Number, String],
      default: 8
    },
    cols: {
      type: [Number, String],
      default: 40
    },
    id: {
      type: String
    },
    helptext: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    resizer: {
      type: Boolean,
      default: () => true
    },
    prefix: String,
    suffix: String,
    characterCounter: Boolean,
    characterCounterInternal: Boolean
  },

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const uiState = reactive({
      text: props.modelValue,
      classes: {
        'mdc-textfield': true,
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': props.disabled,
        'mdc-text-field--textarea': props.multiline,
        'mdc-text-field--outlined': !props.fullwidth && props.outline,
        'mdc-text-field--with-leading-icon': Boolean(slots.leadingIcon || slots.leading),
        'mdc-text-field--with-trailing-icon': Boolean(slots.trailingIcon || slots.trailing),
        'mdc-text-field--filled': Boolean(!props.outline),
        'mdc-text-field--no-label': !props.label
      },
      inputClasses: {
        'mdc-text-field__input': true
      },
      inputAttrs: {},
      labelClasses: {
        'mdc-floating-label': true
      },
      lineRippleClasses: {
        'mdc-line-ripple': true
      },
      lineRippleStyles: {},
      outlineClasses: {},
      notchStyles: {},
      helpTextId: "mcw-help-".concat(uid_$1++),
      labelId: "mcw-label-".concat(uid_$1),
      root: null,
      wrapper: null,
      helpertext: null,
      input: null,
      labelEl: null,
      lineRippleEl: null,
      characterCounterEl: null,
      helpertextEl: null
    });
    let foundation;
    let rippleClasses;
    let rippleStyles;
    const icons = ref({});

    const addIconFoundation = ({
      foundation,
      trailing
    }) => {
      icons.value[trailing ? 'trailing' : 'leading'] = foundation;
    };

    provide('addIconFoundation', addIconFoundation);

    if (!props.multiline && !props.outline) {
      const {
        classes,
        styles
      } = useRipplePlugin$1(toRef(uiState, 'root'));
      rippleClasses = classes;
      rippleStyles = styles;
    }

    const inputAriaControls = computed(() => {
      return props.helptext ? uiState.helpTextId : undefined;
    });
    const hasLabel = computed(() => {
      return !props.outline && props.label;
    });
    const hasOutlineLabel = computed(() => {
      return props.outline && props.label;
    });
    const hasLineRipple = computed(() => {
      return !(props.outline || props.multiline);
    });
    const hasHelptext = computed(() => {
      return slots.helpText || props.helptext;
    });
    const internalCharacterCounter = computed(() => props.characterCounter && props.characterCounterInternal);
    const helperCharacterCounter = computed(() => props.characterCounter && !(props.multiline && props.characterCounterInternal));
    const hasHelpline = computed(() => {
      return props.helptext || helperCharacterCounter.value;
    });
    const rootClasses = computed(() => _objectSpread2(_objectSpread2({}, rippleClasses), uiState.classes));
    const inputListeners = {
      // ...listeners,
      input: ({
        target: {
          value
        }
      }) => emit('update:modelValue', value)
    };

    const focus = () => {
      var _uiState$input;

      return (_uiState$input = uiState.input) === null || _uiState$input === void 0 ? void 0 : _uiState$input.focus();
    };

    const isValid = () => foundation.isValid();

    const inputAttrs = computed(() => {
      // eslint-disable-next-line no-unused-vars
      const rest = _objectWithoutProperties(attrs, ["class"]);

      return _objectSpread2(_objectSpread2({}, rest), uiState.inputAttrs);
    });
    const adapter = {
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.classes[className]),
      registerTextFieldInteractionHandler: (evtType, handler) => {
        uiState.root.addEventListener(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: (evtType, handler) => {
        uiState.root.removeEventListener(evtType, handler);
      },
      isFocused: () => {
        return document.activeElement === uiState.input;
      },
      registerValidationAttributeChangeHandler: handler => {
        const getAttributesList = mutationsList => mutationsList.map(mutation => mutation.attributeName);

        const observer = new MutationObserver(mutationsList => handler(getAttributesList(mutationsList)));
        const targetNode = uiState.input;
        const config = {
          attributes: true
        };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: observer => {
        observer.disconnect();
      },
      // input adapter methods
      registerInputInteractionHandler: (evtType, handler) => {
        uiState.input.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: (evtType, handler) => {
        uiState.input.removeEventListener(evtType, handler, applyPassive());
      },
      getNativeInput: () => {
        return uiState.input;
      },
      setInputAttr: (attr, value) => {
        uiState.inputAttrs = _objectSpread2(_objectSpread2({}, uiState.inputAttrs), {}, {
          [attr]: value
        });
      },
      removeInputAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$inputAttrs = uiState.inputAttrs,
              rest = _objectWithoutProperties(_uiState$inputAttrs, [attr].map(_toPropertyKey));

        uiState.inputAttrs = rest;
      },
      // label adapter methods
      shakeLabel: shouldShake => {
        var _uiState$labelEl;

        (_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.shake(shouldShake);
      },
      floatLabel: shouldFloat => {
        var _uiState$labelEl2;

        (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.float(shouldFloat);
      },
      hasLabel: () => {
        return !!uiState.labelEl || !!uiState.notchedEl;
      },
      getLabelWidth: () => {
        return uiState.labelEl.getWidth();
      },
      // line ripple adapter methods
      deactivateLineRipple: () => {
        var _uiState$lineRippleEl;

        return (_uiState$lineRippleEl = uiState.lineRippleEl) === null || _uiState$lineRippleEl === void 0 ? void 0 : _uiState$lineRippleEl.deactivate();
      },
      activateLineRipple: () => {
        var _uiState$lineRippleEl2;

        return (_uiState$lineRippleEl2 = uiState.lineRippleEl) === null || _uiState$lineRippleEl2 === void 0 ? void 0 : _uiState$lineRippleEl2.activate();
      },
      setLineRippleTransformOrigin: normalizedX => {
        var _uiState$lineRippleEl3;

        return (_uiState$lineRippleEl3 = uiState.lineRippleEl) === null || _uiState$lineRippleEl3 === void 0 ? void 0 : _uiState$lineRippleEl3.setRippleCenter(normalizedX);
      },
      // outline adapter methods
      hasOutline: () => !!props.outline,
      notchOutline: (notchWidth, isRtl) => uiState.labelEl.notch(notchWidth, isRtl),
      closeOutline: () => uiState.labelEl.closeNotch()
    };
    watch(() => props.disabled, nv => {
      var _foundation;

      return (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.setDisabled(nv);
    });
    watch(() => props.required, nv => {
      uiState.input && (uiState.input.required = nv);
    });
    watch(() => props.valid, nv => {
      if (typeof nv !== 'undefined') {
        var _foundation2;

        (_foundation2 = foundation) === null || _foundation2 === void 0 ? void 0 : _foundation2.setValid(nv);
      }
    });
    watch(() => props.modelValue, nv => {
      if (foundation) {
        if (nv !== foundation.getValue()) {
          foundation.setValue(nv);
        }
      }
    });
    onMounted(() => {
      var _uiState$characterCou, _uiState$helpertext, _icons$leading, _icons$trailing;

      foundation = new MDCTextFieldFoundation(_objectSpread2({}, adapter), {
        characterCounter: (_uiState$characterCou = uiState.characterCounterEl) === null || _uiState$characterCou === void 0 ? void 0 : _uiState$characterCou.foundation,
        helperText: (_uiState$helpertext = uiState.helpertext) === null || _uiState$helpertext === void 0 ? void 0 : _uiState$helpertext.foundation,
        leadingIcon: (_icons$leading = icons.leading) === null || _icons$leading === void 0 ? void 0 : _icons$leading.foundation,
        trailingIcon: (_icons$trailing = icons.trailing) === null || _icons$trailing === void 0 ? void 0 : _icons$trailing.foundation
      });
      foundation.init();
      foundation.setValue(props.modelValue);
      props.disabled && foundation.setDisabled(props.disabled);
      uiState.input && (uiState.input.required = props.required);

      if (typeof props.valid !== 'undefined') {
        foundation.setValid(props.valid);
      }
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      inputAriaControls,
      hasLabel,
      hasOutlineLabel,
      inputListeners,
      hasLineRipple,
      hasHelptext,
      hasHelpline,
      focus,
      helperCharacterCounter,
      internalCharacterCounter,
      rootClasses,
      rippleStyles,
      isValid,
      inputAttrs
    });
  },

  components: {
    mcwLineRipple: script$j,
    mcwNotchedOutline: script$p
  }
};

const _hoisted_1$p = {
  key: 0,
  class: "mdc-text-field__ripple"
};
const _hoisted_2$k = {
  key: 3,
  class: "mdc-text-field__affix mdc-text-field__affix--prefix"
};
const _hoisted_3$f = {
  key: 4,
  class: "mdc-text-field__affix mdc-text-field__affix--suffix"
};
const _hoisted_4$c = {
  key: 1,
  class: "mdc-text-field__resizer"
};
const _hoisted_5$8 = {
  key: 2,
  class: "mdc-text-field-helper-line"
};

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");
  const _component_mcw_notched_outline = resolveComponent("mcw-notched-outline");
  const _component_mcw_line_ripple = resolveComponent("mcw-line-ripple");
  const _component_mcw_character_counter = resolveComponent("mcw-character-counter");
  const _component_mcw_textfield_helper_text = resolveComponent("mcw-textfield-helper-text");

  return (openBlock(), createBlock("div", {
    ref: "wrapper",
    class: ["textfield-container", _ctx.$attrs.class]
  }, [
    (!_ctx.multiline)
      ? (openBlock(), createBlock("label", {
          key: 0,
          ref: "root",
          class: _ctx.rootClasses,
          style: _ctx.rippleStyles
        }, [
          (!_ctx.outline)
            ? (openBlock(), createBlock("span", _hoisted_1$p))
            : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "leading"),
          renderSlot(_ctx.$slots, "leadingIcon"),
          (_ctx.hasLabel)
            ? (openBlock(), createBlock(_component_mcw_floating_label, {
                key: 1,
                ref: "labelEl",
                id: _ctx.labelId,
                required: _ctx.required
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["id", "required"]))
            : createCommentVNode("v-if", true),
          (_ctx.outline)
            ? (openBlock(), createBlock(_component_mcw_notched_outline, {
                key: 2,
                ref: "labelEl"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1 /* STABLE */
              }, 512 /* NEED_PATCH */))
            : createCommentVNode("v-if", true),
          (_ctx.prefix)
            ? (openBlock(), createBlock("span", _hoisted_2$k, toDisplayString(_ctx.prefix), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          createVNode("input", mergeProps({
            ref: "input",
            class: _ctx.inputClasses
          }, _ctx.inputAttrs, {
            type: _ctx.type,
            minlength: _ctx.minlength,
            maxlength: _ctx.maxlength,
            "aria-label": _ctx.label,
            "aria-controls": _ctx.inputAriaControls,
            "aria-labelledby": _ctx.labelId,
            "aria-describedby": _ctx.inputAriaControls
          }, toHandlers(_ctx.inputListeners)), null, 16 /* FULL_PROPS */, ["type", "minlength", "maxlength", "aria-label", "aria-controls", "aria-labelledby", "aria-describedby"]),
          (_ctx.suffix)
            ? (openBlock(), createBlock("span", _hoisted_3$f, toDisplayString(_ctx.suffix), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "trailingIcon"),
          renderSlot(_ctx.$slots, "trailing"),
          (_ctx.hasLineRipple)
            ? (openBlock(), createBlock(_component_mcw_line_ripple, {
                key: 5,
                ref: "lineRippleEl"
              }, null, 512 /* NEED_PATCH */))
            : createCommentVNode("v-if", true)
        ], 6 /* CLASS, STYLE */))
      : (openBlock(), createBlock("label", {
          key: 1,
          ref: "root",
          class: _ctx.classes
        }, [
          (_ctx.outline)
            ? (openBlock(), createBlock(_component_mcw_notched_outline, {
                key: 0,
                ref: "labelEl"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1 /* STABLE */
              }, 512 /* NEED_PATCH */))
            : createCommentVNode("v-if", true),
          (_ctx.resizer)
            ? (openBlock(), createBlock("span", _hoisted_4$c, [
                createVNode("textarea", mergeProps({
                  ref: "input",
                  class: _ctx.inputClasses
                }, _ctx.inputAttrs, {
                  minlength: _ctx.minlength,
                  maxlength: _ctx.maxlength,
                  "aria-label": _ctx.label,
                  "aria-controls": _ctx.inputAriaControls,
                  cols: _ctx.cols,
                  rows: _ctx.rows
                }, toHandlers(_ctx.inputListeners)), null, 16 /* FULL_PROPS */, ["minlength", "maxlength", "aria-label", "aria-controls", "cols", "rows"])
              ]))
            : (openBlock(), createBlock("textarea", mergeProps({
                key: 2,
                ref: "input",
                class: _ctx.inputClasses
              }, _ctx.inputAttrs, {
                minlength: _ctx.minlength,
                maxlength: _ctx.maxlength,
                "aria-label": _ctx.label,
                "aria-controls": _ctx.inputAriaControls,
                cols: _ctx.cols,
                rows: _ctx.rows
              }, toHandlers(_ctx.inputListeners)), null, 16 /* FULL_PROPS */, ["minlength", "maxlength", "aria-label", "aria-controls", "cols", "rows"])),
          (_ctx.internalCharacterCounter)
            ? (openBlock(), createBlock(_component_mcw_character_counter, {
                key: 3,
                ref: "characterCounterEl"
              }, null, 512 /* NEED_PATCH */))
            : createCommentVNode("v-if", true)
        ], 2 /* CLASS */)),
    (_ctx.hasHelpline)
      ? (openBlock(), createBlock("div", _hoisted_5$8, [
          (_ctx.helptext)
            ? (openBlock(), createBlock(_component_mcw_textfield_helper_text, {
                key: 0,
                ref: "helpertext",
                id: _ctx.helpTextId,
                helptext: _ctx.helptext,
                persistent: _ctx.helptextPersistent,
                validation: _ctx.helptextValidation
              }, null, 8 /* PROPS */, ["id", "helptext", "persistent", "validation"]))
            : createCommentVNode("v-if", true),
          (_ctx.helperCharacterCounter)
            ? (openBlock(), createBlock(_component_mcw_character_counter, {
                key: 1,
                ref: "characterCounterEl"
              }, null, 512 /* NEED_PATCH */))
            : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$H.render = render$H;
script$H.__file = "packages/textfield/textfield.vue";

var textfield = BasePlugin({
  mcwTextfield: script$H,
  mcwTextfieldIcon: script$G,
  mcwCharacterCounter: script$E,
  mcwTextfieldHelperText: script$F,
  mcwLineRipple: script$j,
  mcwNotchedOutline: script$p,
  mcwFloatingLabel: script$e
});

var script$I = {
  name: 'mcw-tooltip',
  props: {
    position: {
      type: [Object, String]
    },
    boundaryType: {
      type: [String, Number]
    }
  },

  setup(props, {
    emit
  }) {
    const uiState = reactive({
      classes: {},
      styles: {},
      surfaceStyle: {},
      rootAttrs: {
        'aria-hidden': true
      },
      root: null,
      isTooltipPersistent: false,
      isTooltipRich: false
    });
    let foundation;
    let anchorElem;
    const adapter = {
      getAttribute: name => {
        return uiState.root.getAttribute(name);
      },
      setAttribute: (attributeName, value) => {
        uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, {
          [attributeName]: value
        });
      },
      addClass: className => uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        [className]: true
      }),
      hasClass: className => uiState.root.classList.contains(className),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$classes = uiState.classes,
              rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      getComputedStyleProperty: propertyName => {
        return window.getComputedStyle(uiState.root).getPropertyValue(propertyName);
      },
      setStyleProperty: (property, value) => uiState.styles = _objectSpread2(_objectSpread2({}, uiState.styles), {}, {
        [property]: value
      }),
      setSurfaceStyleProperty: (propertyName, value) => {
        uiState.surfaceStyle = _objectSpread2(_objectSpread2({}, uiState.surfaceStyle), {}, {
          [propertyName]: value
        });
      },
      getViewportWidth: () => window.innerWidth,
      getViewportHeight: () => window.innerHeight,
      getTooltipSize: () => {
        return {
          width: uiState.root.offsetWidth,
          height: uiState.root.offsetHeight
        };
      },
      getAnchorBoundingRect: () => {
        return anchorElem ? anchorElem.getBoundingClientRect() : null;
      },
      getParentBoundingRect: () => {
        var _uiState$root$parentE, _uiState$root$parentE2;

        return (_uiState$root$parentE = (_uiState$root$parentE2 = uiState.root.parentElement) === null || _uiState$root$parentE2 === void 0 ? void 0 : _uiState$root$parentE2.getBoundingClientRect()) !== null && _uiState$root$parentE !== void 0 ? _uiState$root$parentE : null;
      },
      getAnchorAttribute: attr => {
        return anchorElem ? anchorElem.getAttribute(attr) : null;
      },
      setAnchorAttribute: (attr, value) => {
        var _anchorElem;

        (_anchorElem = anchorElem) === null || _anchorElem === void 0 ? void 0 : _anchorElem.setAttribute(attr, value);
      },
      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',
      anchorContainsElement: element => {
        var _anchorElem2;

        return !!((_anchorElem2 = anchorElem) !== null && _anchorElem2 !== void 0 && _anchorElem2.contains(element));
      },
      tooltipContainsElement: element => {
        return uiState.root.contains(element);
      },
      registerEventHandler: (evt, handler) => {
        uiState.root.addEventListener(evt, handler);
      },
      deregisterEventHandler: (evt, handler) => {
        uiState.root.removeEventListener(evt, handler);
      },
      registerDocumentEventHandler: (evt, handler) => {
        document.body.addEventListener(evt, handler);
      },
      deregisterDocumentEventHandler: (evt, handler) => {
        document.body.removeEventListener(evt, handler);
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(evt, handler);
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(evt, handler);
      },
      notifyHidden: () => {
        emit(events$1.HIDDEN.toLowerCase(), {});
      }
    };

    const handleMouseEnter = () => {
      foundation.handleAnchorMouseEnter();
    };

    const handleFocus = evt => {
      foundation.handleAnchorFocus(evt);
    };

    const handleMouseLeave = () => {
      foundation.handleAnchorMouseLeave();
    };

    const handleBlur = evt => {
      foundation.handleAnchorBlur(evt);
    };

    const handleTransitionEnd = () => {
      foundation.handleTransitionEnd();
    };

    const handleClick = () => {
      foundation.handleAnchorClick();
    };

    const onPosition = position => {
      if (position) {
        let xPos;
        let yPos;

        if (typeof position == 'string') {
          [xPos, yPos = xPos] = position.split(',');
        } else {
          ({
            xPos,
            yPos
          } = position);
        }

        foundation.setTooltipPosition({
          xPos: toXposition(xPos),
          yPos: toYposition(yPos)
        });
      }
    };

    const onBoundaryType = type => {
      if (type != void 0) {
        foundation.setAnchorBoundaryType(toAnchorBoundaryType(type));
      }
    };

    onMounted(() => {
      const tooltipId = uiState.root.getAttribute('id');

      if (!tooltipId) {
        throw new Error('MDCTooltip: Tooltip component must have an id.');
      }

      anchorElem = document.querySelector("[aria-describedby=\"".concat(tooltipId, "\"]")) || document.querySelector("[data-tooltip-id=\"".concat(tooltipId, "\"]"));

      if (!anchorElem) {
        throw new Error( // eslint-disable-next-line max-len
        'MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id] anchor element.');
      }

      foundation = new MDCTooltipFoundation(adapter);
      foundation.init();
      uiState.isTooltipRich = foundation.isRich();
      uiState.isTooltipPersistent = foundation.isPersistent();

      if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
        anchorElem.addEventListener('click', handleClick);
      } else {
        anchorElem.addEventListener('mouseenter', handleMouseEnter); // TODO(b/157075286): Listening for a 'focus' event is too broad.

        anchorElem.addEventListener('focus', handleFocus);
        anchorElem.addEventListener('mouseleave', handleMouseLeave);
      }

      anchorElem.addEventListener('blur', handleBlur);
      watchEffect(() => onPosition(props.position));
      watchEffect(() => onBoundaryType(props.boundaryType));
    });
    onBeforeUnmount(() => {
      var _foundation;

      if (anchorElem) {
        if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
          anchorElem.removeEventListener('click', handleClick);
        } else {
          anchorElem.removeEventListener('mouseenter', handleMouseEnter); // TODO(b/157075286): Listening for a 'focus' event is too broad.

          anchorElem.removeEventListener('focus', handleFocus);
          anchorElem.removeEventListener('mouseleave', handleMouseLeave);
          anchorElem.removeEventListener('blur', handleBlur);
        }
      }

      (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      handleTransitionEnd
    });
  }

}; // ===
// Private functions
// ===

const XPosition_ = {
  detected: 0,
  start: 1,
  center: 2,
  end: 3
};

function toXposition(x) {
  var _XPosition_$x;

  return typeof x == 'string' ? (_XPosition_$x = XPosition_[x]) !== null && _XPosition_$x !== void 0 ? _XPosition_$x : 0 : x;
}

const YPosition_ = {
  detected: 0,
  above: 1,
  below: 2
};

function toYposition(y) {
  var _YPosition_$y;

  return typeof y == 'string' ? (_YPosition_$y = YPosition_[y]) !== null && _YPosition_$y !== void 0 ? _YPosition_$y : 0 : y;
}

const AnchorBoundaryType_ = {
  bounded: 0,
  unbounded: 1
};

function toAnchorBoundaryType(type) {
  var _AnchorBoundaryType_$;

  return typeof type == 'string' ? (_AnchorBoundaryType_$ = AnchorBoundaryType_[type]) !== null && _AnchorBoundaryType_$ !== void 0 ? _AnchorBoundaryType_$ : '0' : type;
}

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: ["mdc-tooltip", _ctx.classes]
  }, _ctx.rootAttrs, {
    style: _ctx.styles,
    role: "tooltip",
    onTransitionend: _cache[1] || (_cache[1] = (...args) => (_ctx.handleTransitionEnd && _ctx.handleTransitionEnd(...args)))
  }), [
    createVNode("div", {
      style: _ctx.surfaceStyle,
      class: "mdc-tooltip__surface"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4 /* STYLE */)
  ], 16 /* FULL_PROPS */))
}

script$I.render = render$I;
script$I.__file = "packages/tooltip/tooltip.vue";

var tooltip = BasePlugin({
  mcwTooltip: script$I
});

const {
  cssClasses: cssClasses$6,
  strings: strings$e
} = MDCTopAppBarFoundation;
var script$J = {
  name: 'mcw-top-app-bar',
  props: {
    tag: {
      type: String,
      default: 'header'
    },
    scrollTarget: HTMLElement
  },
  emits: ['nav'],

  setup(props, {
    emit,
    attrs
  }) {
    const uiState = reactive({
      rootStyles: {},
      rootClasses: {
        'mdc-top-app-bar': true
      },
      myScrollTarget: props.scrollTarget || window,
      root: null
    });
    let foundation;
    let navIcon;
    let iconRipples = [];

    const handleNavigationClick = event => foundation.handleNavigationClick(event);

    const handleTargetScroll = evt => foundation.handleTargetScroll(evt);

    const handleWindowResize = evt => foundation.handleWindowResize(evt);

    const adapter = {
      addClass: className => uiState.rootClasses = _objectSpread2(_objectSpread2({}, uiState.rootClasses), {}, {
        [className]: true
      }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const _uiState$rootClasses = uiState.rootClasses,
              rest = _objectWithoutProperties(_uiState$rootClasses, [className].map(_toPropertyKey));

        uiState.rootClasses = rest;
      },
      hasClass: className => Boolean(uiState.rootClasses[className]),
      setStyle: (property, value) => uiState.rootStyles = _objectSpread2(_objectSpread2({}, uiState.rootStyles), {}, {
        [property]: value
      }),
      getTopAppBarHeight: () => uiState.root.clientHeight,
      notifyNavigationIconClicked: () => {
        emit('nav', {});
        emitCustomEvent(uiState.root, strings$e.NAVIGATION_EVENT, {},
        /** shouldBubble */
        true);
      },
      getViewportScrollY: () => {
        const st = uiState.myScrollTarget;
        return st.pageYOffset !== void 0 ? st.pageYOffset : st.scrollTop;
      },
      getTotalActionItems: () => uiState.root.querySelectorAll(strings$e.ACTION_ITEM_SELECTOR).length
    };
    watch(() => props.scrollTarget, (nv, ov) => {
      if (nv !== ov) {
        uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);
        uiState.myScrollTarget = nv;
        uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);
      }
    });

    const setScrollTarget = nv => {
      uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);
      uiState.myScrollTarget = nv;
      uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);
    };

    onMounted(() => {
      const isFixed = uiState.root.classList.contains(cssClasses$6.FIXED_CLASS);
      const isShort = uiState.root.classList.contains(cssClasses$6.SHORT_CLASS);

      if (isShort) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (isFixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      } // todo: hunt down icons for ripples


      navIcon = uiState.root.querySelector(strings$e.NAVIGATION_ICON_SELECTOR); // Get all icons in the toolbar and instantiate the ripples

      const icons = [].slice.call(uiState.root.querySelectorAll(strings$e.ACTION_ITEM_SELECTOR));

      if (navIcon) {
        navIcon.addEventListener('click', handleNavigationClick);
        icons.push(navIcon);
      }

      iconRipples = icons.map(icon => {
        const ripple = new RippleElement(icon);
        ripple.init();
        ripple.unbounded = true;
        return ripple;
      });
      uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);

      if (!isShort && !isFixed) {
        window.addEventListener('resize', handleWindowResize);
      }

      foundation.init();
    });
    onBeforeUnmount(() => {
      var _uiState$myScrollTarg;

      if (navIcon) {
        navIcon.removeEventListener('click', handleNavigationClick);
      }

      iconRipples.forEach(iconRipple => iconRipple.destroy());
      uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);
      (_uiState$myScrollTarg = uiState.myScrollTarget) === null || _uiState$myScrollTarg === void 0 ? void 0 : _uiState$myScrollTarg.removeEventListener('scroll', foundation.handleTargetScroll);
      const isFixed = uiState.root.classList.contains(cssClasses$6.FIXED_CLASS);
      const isShort = uiState.root.classList.contains(cssClasses$6.SHORT_CLASS);

      if (!isShort && !isFixed) {
        window.removeEventListener('resize', handleWindowResize);
      }

      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      setScrollTarget
    });
  }

};

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    ref: "root",
    class: _ctx.rootClasses,
    style: _ctx.rootStyles
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class", "style"]))
}

script$J.render = render$J;
script$J.__file = "packages/top-app-bar/top-app-bar.vue";

var topAppBar = BasePlugin({
  mcwTopAppBar: script$J // mcwFixedAdjust,
  // mcwTopAppBarIcon,
  // mcwTopAppBarRow,
  // mcwTopAppBarSection,
  // mcwTopAppBarTitle,

});

var index$1 = {
  install(vm) {
    vm.use(banner);
    vm.use(button);
    vm.use(card);
    vm.use(circularProgress);
    vm.use(checkbox);
    vm.use(chips);
    vm.use(dataTable);
    vm.use(dialog);
    vm.use(drawer);
    vm.use(fab);
    vm.use(floatingLabel);
    vm.use(iconButton);
    vm.use(layoutGrid);
    vm.use(lineRipple);
    vm.use(linearProgress);
    vm.use(list);
    vm.use(materialIcon);
    vm.use(menu);
    vm.use(notchedOutline);
    vm.use(radio);
    vm.use(segmentedButton);
    vm.use(select);
    vm.use(slider);
    vm.use(snackbar);
    vm.use(switchControl);
    vm.use(tabs);
    vm.use(textfield);
    vm.use(tooltip);
    vm.use(topAppBar);
  }

};

export default index$1;
export { banner, index as base, button, card, checkbox, chips, circularProgress, dataTable, dialog, drawer, fab, floatingLabel, iconButton, layoutGrid, lineRipple, linearProgress, list, materialIcon, menu, notchedOutline, radio, segmentedButton, select, slider, snackbar, switchControl, tabs, textfield, tooltip, topAppBar };
