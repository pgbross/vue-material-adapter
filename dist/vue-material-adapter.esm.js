import { h, toRefs, ref, shallowReactive, onMounted, onBeforeUnmount, computed, reactive, toRef, watch, provide, inject, watchEffect } from '@vue/composition-api';
import { applyPassive } from '@material/dom/events';
import { matches, closest } from '@material/dom/ponyfill';
import { MDCRippleFoundation } from '@material/ripple';
import { supportsCssVariables } from '@material/ripple/util';
import { resolveComponent, openBlock, createBlock, mergeProps, toHandlers, withCtx, renderSlot, createVNode, toDisplayString, createCommentVNode, createTextVNode, Fragment, resolveDynamicComponent } from 'vue';
import { getCorrectEventName } from '@material/animation';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { announce } from '@material/dom/announce';
import { MDCChipTrailingActionFoundation } from '@material/chips/trailingaction/foundation';
import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation';
import { MDCCheckbox } from '@material/checkbox';
import { cssClasses as cssClasses$8, events, selectors, dataAttributes, SortValue, messages } from '@material/data-table';
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
import { getTransformPropertyName } from '@material/menu-surface/util';
import { MDCMenuFoundation } from '@material/menu/foundation';
import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation';
import { MDCRadioFoundation } from '@material/radio/foundation';
import { MDCSelectFoundation } from '@material/select/foundation';
import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';
import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { MDCSliderFoundation } from '@material/slider/foundation';
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
import { MDCFixedTopAppBarFoundation } from '@material/top-app-bar/fixed/foundation';
import { MDCShortTopAppBarFoundation } from '@material/top-app-bar/short/foundation';
import { MDCTopAppBarFoundation } from '@material/top-app-bar/standard/foundation';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

function BasePlugin(components) {
  return {
    version: '__VERSION__',
    install: function install(vm) {
      Object.entries(components).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            component = _ref2[1];

        var name = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); // eslint-disable-next-line no-unused-vars

        var _name$split = name.split('-'),
            _name$split2 = _toArray(_name$split),
            pfx = _name$split2[0],
            rest = _name$split2.slice(1);

        var mdcName = ['mdc'].concat(_toConsumableArray(rest)).join('-');
        var mcwName = ['mcw'].concat(_toConsumableArray(rest)).join('-');
        var haveComponent = vm.options.components[mcwName];

        if (!haveComponent) {
          var definition = vm.extend(component);
          vm.component(mcwName, definition);
          vm.component(mdcName, definition);
        }
      });
    },
    components: components
  };
}

function emitCustomEvent(el, evtType, evtData) {
  var shouldBubble = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var createCustomEvent = function createCustomEvent() {
    var evt = document.createEvent('CustomEvent');
    return evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  };

  var evt = typeof CustomEvent === 'function' ? new CustomEvent(evtType, {
    detail: evtData,
    bubbles: shouldBubble
  }) : createCustomEvent();
  el.dispatchEvent(evt);
}

var CustomLink = {
  name: 'custom-link',
  props: {
    link: Object,
    tag: String
  },
  setup: function setup(props, _ref) {
    var listeners = _ref.listeners,
        $router = _ref.root.$router,
        slots = _ref.slots;
    return function () {
      var _slots$default;

      var element; // destructure the props in the render function so we use the current value
      // if their value has changed since we were created

      var _props$link = props.link,
          link = _props$link === void 0 ? {} : _props$link;

      var tag = link.tag,
          to = link.to,
          exact = link.exact,
          append = link.append,
          replace = link.replace,
          activeClass = link.activeClass,
          exactActiveClass = link.exactActiveClass,
          rest = _objectWithoutProperties(link, ["tag", "to", "exact", "append", "replace", "activeClass", "exactActiveClass"]);

      var data = {
        attrs: rest,
        on: listeners
      };

      if (link.to && $router) {
        element = 'router-link';
        data.props = {
          to: to,
          tag: tag !== null && tag !== void 0 ? tag : props.tag,
          replace: replace,
          append: append,
          activeClass: activeClass,
          exactActiveClass: exactActiveClass,
          exact: exact
        }; // we add the native click so it can bubble and be detected in a menu/drawer

        if (listeners.click) {
          data.nativeOn = {
            click: listeners.click
          };
        }
      } else if (link.href) {
        element = 'a';
        data.attrs.role = 'button';
      } else {
        var _ref2;

        element = (_ref2 = tag !== null && tag !== void 0 ? tag : props.tag) !== null && _ref2 !== void 0 ? _ref2 : 'a';

        if (element !== 'button') {
          data.attrs.role = 'button';
        }
      }

      return h(element, data, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BasePlugin: BasePlugin,
  emitCustomEvent: emitCustomEvent,
  CustomLink: CustomLink
});

var RippleElement = /*#__PURE__*/function (_MDCRippleFoundation) {
  _inherits(RippleElement, _MDCRippleFoundation);

  var _super = _createSuper(RippleElement);

  function RippleElement(element, state) {
    var _element$$el;

    var _this;

    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$unbounded = _ref.unbounded,
        unbounded = _ref$unbounded === void 0 ? false : _ref$unbounded,
        options = _objectWithoutProperties(_ref, ["unbounded"]);

    _classCallCheck(this, RippleElement);

    var $el = (_element$$el = element.$el) !== null && _element$$el !== void 0 ? _element$$el : element;
    _this = _super.call(this, _objectSpread2({
      addClass: function addClass(className) {
        if (state) {
          state.classes = _objectSpread2(_objectSpread2({}, state.classes), {}, _defineProperty({}, className, true));
        } else {
          $el.classList.add(className);
        }
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return $el.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return $el.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        return $el.removeEventListener(evt, handler, applyPassive());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches($el, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return false;
      },
      // todo: consider if this is right
      isUnbounded: function isUnbounded() {
        return _this.unbounded_;
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        $el.addEventListener(evt, handler, applyPassive());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        if (state) {
          // eslint-disable-next-line no-unused-vars
          var _state$classes = state.classes,
              removed = _state$classes[className],
              rest = _objectWithoutProperties(_state$classes, [className].map(_toPropertyKey));

          state.classes = rest;
        } else {
          $el.classList.remove(className);
        }
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        if (state) {
          state.styles = _objectSpread2(_objectSpread2({}, state.styles), {}, _defineProperty({}, varName, value));
        } else {
          $el.style.setProperty(varName, value);
        }
      }
    }, options));
    _this.unbounded_ = unbounded;
    return _this;
  }

  _createClass(RippleElement, [{
    key: "unbounded",
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded(this.unbounded_);
    }
  }]);

  return RippleElement;
}(MDCRippleFoundation);
function useRipplePlugin(root, options) {
  var ripple = ref(null);
  var state = shallowReactive({
    classes: {},
    styles: {}
  });

  var activate = function activate() {
    var _ripple$value;

    return (_ripple$value = ripple.value) === null || _ripple$value === void 0 ? void 0 : _ripple$value.activate();
  };

  var deactivate = function deactivate() {
    var _ripple$value2;

    return (_ripple$value2 = ripple.value) === null || _ripple$value2 === void 0 ? void 0 : _ripple$value2.deactivate();
  };

  onMounted(function () {
    ripple.value = new RippleElement(root.value, state, options);
    ripple.value.init();
  });
  onBeforeUnmount(function () {
    ripple.value.destroy();
  });
  return _objectSpread2(_objectSpread2({}, toRefs(state)), {}, {
    activate: activate,
    deactivate: deactivate
  });
}

var script = {
  name: 'mcw-button',
  inheritAttrs: false,
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String
  },
  components: {
    CustomLink: CustomLink
  },
  setup: function setup(props, _ref) {
    var listeners = _ref.listeners,
        slots = _ref.slots;
    var root = ref(null);

    var _useRipplePlugin = useRipplePlugin(root),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), {}, {
        'mdc-button': true,
        'mdc-button--raised': props.raised,
        'mdc-button--unelevated': props.unelevated && !props.raised,
        'mdc-button--outlined': props.outlined
      });
    });
    var haveIcon = computed(function () {
      var _slots$icon;

      return (_slots$icon = slots.icon) !== null && _slots$icon !== void 0 ? _slots$icon : props.icon;
    });
    var haveTrailingIcon = computed(function () {
      var _slots$trailingIcon;

      return (_slots$trailingIcon = slots.trailingIcon) !== null && _slots$trailingIcon !== void 0 ? _slots$trailingIcon : props.trailingIcon;
    });
    return {
      styles: styles,
      classes: classes,
      listeners: listeners,
      root: root,
      haveIcon: haveIcon,
      haveTrailingIcon: haveTrailingIcon
    };
  }
};

const _hoisted_1 = /*#__PURE__*/createVNode("div", { class: "mdc-button__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2 = {
  class: "material-icons mdc-button__icon",
  "aria-hidden": "true"
};
const _hoisted_3 = { class: "mdc-button__label" };
const _hoisted_4 = {
  class: "material-icons mdc-button__icon",
  "aria-hidden": "true"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, mergeProps({
    ref: "root",
    class: _ctx.classes,
    link: _ctx.$attrs,
    style: _ctx.styles,
    tag: "button"
  }, toHandlers(_ctx.listeners)), {
    default: withCtx(() => [
      _hoisted_1,
      (_ctx.haveIcon)
        ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
            createVNode("i", _hoisted_2, toDisplayString(_ctx.icon), 1 /* TEXT */)
          ])
        : createCommentVNode("v-if", true),
      createVNode("span", _hoisted_3, [
        renderSlot(_ctx.$slots, "default")
      ]),
      (_ctx.haveTrailingIcon)
        ? renderSlot(_ctx.$slots, "trailingIcon", { key: 1 }, () => [
            createVNode("i", _hoisted_4, toDisplayString(_ctx.trailingIcon), 1 /* TEXT */)
          ])
        : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16 /* FULL_PROPS */, ["class", "link", "style"]))
}

script.render = render;
script.__file = "packages/button/button.vue";

var button = BasePlugin({
  mcwButton: script
});

var mcwCardActionButtons = {
  name: 'mcw-card-action-buttons',
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return h('div', {
        class: ['mdc-card__action-buttons']
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
};

var mcwCardActionIcons = {
  name: 'mcw-card-action-icons',
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
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
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
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
      default: function _default() {
        return false;
      }
    },
    wide: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    contentClass: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      var nodes = [];
      var content = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);

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

var script$1 = {
  name: 'mcw-card-primary-action',
  inheritAttrs: false,
  components: {
    CustomLink: CustomLink
  },
  setup: function setup(props, _ref) {
    var listeners = _ref.listeners;
    var root = ref(null);

    var _useRipplePlugin = useRipplePlugin(root),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), {}, {
        'mdc-card__primary-action': 1
      });
    });
    return {
      classes: classes,
      styles: styles,
      root: root,
      listeners: listeners
    };
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, mergeProps({
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles,
    tabIndex: "0",
    link: _ctx.$attrs
  }, toHandlers(_ctx.listeners)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16 /* FULL_PROPS */, ["class", "style", "link"]))
}

script$1.render = render$1;
script$1.__file = "packages/card/card-primary-action.vue";

var mcwCard = {
  name: 'mcw-card',
  props: {
    outlined: Boolean
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;
    return function () {
      var _slots$default;

      var outlined = props.outlined;
      return h('div', {
        class: [{
          'mdc-card': 1,
          'mdc-card--outlined': outlined
        }],
        attrs: attrs
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var card = BasePlugin({
  mcwCard: mcwCard,
  mcwCardPrimaryAction: script$1,
  mcwCardMedia: mcwCardMedia,
  mcwCardActions: mcwCardActions,
  mcwCardActionButtons: mcwCardActionButtons,
  mcwCardActionIcons: mcwCardActionIcons
});

var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var checkboxId_ = 0;
var script$2 = {
  name: 'mcw-checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: [Boolean, Array],
    indeterminate: Boolean,
    disabled: Boolean,
    label: String,
    alignEnd: Boolean,
    value: {
      type: [String, Number],
      default: function _default() {
        return 'on';
      }
    },
    name: String
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var uiState = reactive({
      classes: {
        'mdc-checkbox': 1
      },
      control: null,
      labelEl: null,
      root: null
    });
    var foundation;
    var formField;
    var checkboxId = "__mcw-checkbox-".concat(checkboxId_++);

    var _useRipplePlugin = useRipplePlugin(toRef(uiState, 'root'), {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(uiState.control, ':active');
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        uiState.control.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        uiState.control.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: function computeBoundingRect() {
        return uiState.root.getBoundingClientRect();
      }
    }),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles,
        activate = _useRipplePlugin.activate,
        deactivate = _useRipplePlugin.deactivate;

    var rootClasses = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    var hasLabel = computed(function () {
      var _props$label;

      return (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : slots.default;
    });
    var formFieldClasses = computed(function () {
      return {
        'mdc-form-field': hasLabel.value,
        'mdc-form-field--align-end': hasLabel.value && props.alignEnd
      };
    });

    var onChange = function onChange(_ref2) {
      var _ref2$target = _ref2.target,
          indeterminate = _ref2$target.indeterminate,
          checked = _ref2$target.checked;
      // note indeterminate will not currently work with the array model
      emit('update:indeterminate', indeterminate);

      if (Array.isArray(props.checked)) {
        var idx = props.checked.indexOf(props.value);

        if (checked) {
          idx < 0 && emit('change', props.checked.concat(props.value));
        } else {
          idx > -1 && emit('change', props.checked.slice(0, idx).concat(props.checked.slice(idx + 1)));
        }
      } else {
        // emit a native event so that it bubbles to parent elements
        // e.g. data table row
        emitCustomEvent(uiState.root, 'change', true);
        emit('change', checked);
      }
    };

    var isChecked = function isChecked() {
      return uiState.control.checked;
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      forceLayout: function forceLayout() {
        return uiState.root.offsetWidth;
      },
      hasNativeControl: function hasNativeControl() {
        return true;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return true;
      },
      isChecked: function isChecked() {
        return uiState.control.checked;
      },
      isIndeterminate: function isIndeterminate() {
        return uiState.control.indeterminate;
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      removeNativeControlAttr: function removeNativeControlAttr(attr) {
        uiState.control.removeAttribute(attr);
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        uiState.control.setAttribute(attr, value);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return uiState.control.disabled = disabled;
      }
    };

    var handleAnimationEnd = function handleAnimationEnd() {
      return foundation.handleAnimationEnd();
    };

    var setChecked = function setChecked(checked) {
      uiState.control.checked = Array.isArray(checked) ? checked.indexOf(props.value) > -1 : checked;
    };

    var setIndeterminate = function setIndeterminate(indeterminate) {
      uiState.control && (uiState.control.indeterminate = indeterminate);
    };

    var installPropertyChangeHooks_ = function installPropertyChangeHooks_() {
      var nativeCb = uiState.control;
      var cbProto = Object.getPrototypeOf(nativeCb);
      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739

        if (validDescriptor(desc)) {
          var nativeCbDesc =
          /** @type {!ObjectPropertyDescriptor} */
          {
            get: desc.get,
            set: function set(state) {
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

    var uninstallPropertyChangeHooks_ = function uninstallPropertyChangeHooks_() {
      var nativeCb = uiState.control;
      var cbProto = Object.getPrototypeOf(nativeCb);
      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc =
        /** @type {!ObjectPropertyDescriptor} */
        Object.getOwnPropertyDescriptor(cbProto, controlState);

        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    };

    watch(function () {
      return props.disabled;
    }, function (nv, ov) {
      var _foundation;

      nv != ov && ((_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.setDisabled(nv));
    });
    watch(function () {
      return props.checked;
    }, function (nv, ov) {
      nv != ov && setChecked(nv);
    });
    watch(function () {
      return props.indeterminate;
    }, function (nv, ov) {
      nv != ov && setIndeterminate(nv);
    });
    onMounted(function () {
      foundation = new MDCCheckboxFoundation(adapter);
      uiState.root.addEventListener(getCorrectEventName(window, 'animationend'), handleAnimationEnd);
      installPropertyChangeHooks_();

      if (hasLabel.value) {
        formField = new MDCFormFieldFoundation({
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            uiState.labelEl.addEventListener(type, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            uiState.labelEl.removeEventListener(type, handler);
          },
          activateInputRipple: function activateInputRipple() {
            activate();
          },
          deactivateInputRipple: function deactivateInputRipple() {
            deactivate();
          }
        });
        formField.init();
      }

      foundation.init();
      setChecked(props.checked);
      foundation.setDisabled(props.disabled);
      setIndeterminate(props.indeterminate);
    });
    onBeforeUnmount(function () {
      var _formField;

      uiState.root.removeEventListener(getCorrectEventName(window, 'animationend'), handleAnimationEnd);
      (_formField = formField) === null || _formField === void 0 ? void 0 : _formField.destroy();
      uninstallPropertyChangeHooks_();
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses: rootClasses,
      formFieldClasses: formFieldClasses,
      onChange: onChange,
      styles: styles,
      hasLabel: hasLabel,
      setChecked: setChecked,
      setIndeterminate: setIndeterminate,
      isChecked: isChecked,
      checkboxId: checkboxId
    });
  }
}; // ===
// Private functions
// ===

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

const _hoisted_1$1 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__background" }, [
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
const _hoisted_2$1 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__ripple" }, null, -1 /* HOISTED */);
const _hoisted_3$1 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__background" }, [
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
const _hoisted_4$1 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox__ripple" }, null, -1 /* HOISTED */);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
            onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.onChange(...args)))
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["id", "name", "value"]),
          _hoisted_1$1,
          _hoisted_2$1
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
          onChange: _cache[2] || (_cache[2] = (...args) => (_ctx.onChange(...args)))
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["id", "name", "value"]),
        _hoisted_3$1,
        _hoisted_4$1
      ], 6 /* CLASS, STYLE */))
}

script$2.render = render$2;
script$2.__file = "packages/checkbox/checkbox.vue";

var checkbox = BasePlugin({
  mcwCheckbox: script$2
});

var script$3 = {
  name: 'mcw-chip-checkmark',
  setup: function setup() {
    var width = ref(0);
    var root = ref(null);
    onMounted(function () {
      return width.value = root.value.getBoundingClientRect().height;
    });
    return {
      width: width,
      root: root
    };
  }
};

const _hoisted_1$2 = {
  ref: "root",
  class: "mdc-chip__checkmark"
};
const _hoisted_2$2 = /*#__PURE__*/createVNode("svg", {
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

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", _hoisted_1$2, [
    _hoisted_2$2
  ], 512 /* NEED_PATCH */))
}

script$3.render = render$3;
script$3.__file = "packages/chips/chip-checkmark.vue";

var strings = MDCChipFoundation.strings;
var CHIP_SELECTOR = MDCChipSetFoundation.strings.CHIP_SELECTOR;
var idCounter = 0;
var script$4 = {
  name: 'mcw-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean]
  },
  setup: function setup(props) {
    var uiState = reactive({
      classes: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': props.choice,
        'mdc-chip-set--filter': props.filter,
        'mdc-chip-set--input': props.input
      },
      listn: 0,
      myListeners: null,
      root: null
    });
    var foundation;
    var slotObserver;
    var chipElements = computed(function () {
      // eslint-disable-next-line no-unused-vars
      var xx = uiState.listn; // for dependency

      return [].slice.call(uiState.root.querySelectorAll(CHIP_SELECTOR));
    });
    var chips_ = computed(function () {
      return chipElements.value.map(function (el) {
        el.id = el.id || "mdc-chip-".concat(++idCounter);
        return el.__vue__;
      });
    });
    var adapter = {
      announceMessage: function announceMessage(message) {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: function focusChipPrimaryActionAtIndex(index) {
        var chip = chips_.value[index];
        chip && chip.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: function focusChipTrailingActionAtIndex(index) {
        var chip = chips_.value[index];
        chip && chip.focusTrailingAction();
      },
      getChipListCount: function getChipListCount() {
        return chips_.value.length;
      },
      getIndexOfChipById: function getIndexOfChipById(chipId) {
        return chips_.value.findIndex(function (_ref) {
          var id = _ref.id;
          return id == chipId;
        });
      },
      hasClass: function hasClass(className) {
        return uiState.root.classList.contains(className);
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(uiState.root).getPropertyValue('direction') === 'rtl';
      },
      removeChipAtIndex: function removeChipAtIndex(index) {
        if (index >= 0 && index < chips_.value.length) {
          // tell chip to remove itself from the DOM
          chips_.value[index].remove();
          chips_.value.splice(index, 1);
        }
      },
      removeFocusFromChipAtIndex: function removeFocusFromChipAtIndex(index) {
        chips_.value[index].removeFocus();
      },
      selectChipAtIndex: function selectChipAtIndex(index, selected, shouldNotifyClients) {
        if (index >= 0 && index < chips_.value.length) {
          chips_.value[index].setSelectedFromChipSet(selected, shouldNotifyClients);
        }
      }
    };
    provide('mcwChipSet', {
      filter: props.filter,
      input: props.input
    });
    onMounted(function () {
      var _uiState$myListeners;

      // trigger computed
      chips_.value;
      foundation = new MDCChipSetFoundation(adapter);
      foundation.init();
      uiState.myListeners = (_uiState$myListeners = {}, _defineProperty(_uiState$myListeners, strings.INTERACTION_EVENT, function (_ref2) {
        var detail = _ref2.detail;
        return foundation.handleChipInteraction(detail);
      }), _defineProperty(_uiState$myListeners, strings.SELECTION_EVENT, function (_ref3) {
        var detail = _ref3.detail;
        return foundation.handleChipSelection(detail);
      }), _defineProperty(_uiState$myListeners, strings.REMOVAL_EVENT, function (_ref4) {
        var detail = _ref4.detail;
        return foundation.handleChipRemoval(detail);
      }), _defineProperty(_uiState$myListeners, strings.NAVIGATION_EVENT, function (_ref5) {
        var detail = _ref5.detail;
        return foundation.handleChipNavigation(detail);
      }), _uiState$myListeners), // the chips could change outside of this component
      // so use a mutation observer to trigger an update by
      // incrementing the dependency variable "listn" referenced
      // in the computed that selects the chip elements
      slotObserver = new MutationObserver(function (mutationList, observer) {
        uiState.listn++;
      });
      slotObserver.observe(uiState.root, {
        childList: true // subtree: true,

      });
    });
    onBeforeUnmount(function () {
      slotObserver.disconnect();
      foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes,
    role: "grid"
  }, toHandlers(_ctx.myListeners)), [
    renderSlot(_ctx.$slots, "default")
  ], 16 /* FULL_PROPS */))
}

script$4.render = render$4;
script$4.__file = "packages/chips/chip-set.vue";

var RippleElement$1 = /*#__PURE__*/function (_MDCRippleFoundation) {
  _inherits(RippleElement, _MDCRippleFoundation);

  var _super = _createSuper(RippleElement);

  function RippleElement(element, state) {
    var _element$$el;

    var _this;

    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$unbounded = _ref.unbounded,
        unbounded = _ref$unbounded === void 0 ? false : _ref$unbounded,
        options = _objectWithoutProperties(_ref, ["unbounded"]);

    _classCallCheck(this, RippleElement);

    var $el = (_element$$el = element.$el) !== null && _element$$el !== void 0 ? _element$$el : element;
    _this = _super.call(this, _objectSpread2({
      addClass: function addClass(className) {
        if (state) {
          state.classes = _objectSpread2(_objectSpread2({}, state.classes), {}, _defineProperty({}, className, true));
        } else {
          $el.classList.add(className);
        }
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return $el.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return $el.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        return $el.removeEventListener(evt, handler, applyPassive());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches($el, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return false;
      },
      // todo: consider if this is right
      isUnbounded: function isUnbounded() {
        return _this.unbounded_;
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        $el.addEventListener(evt, handler, applyPassive());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        if (state) {
          // eslint-disable-next-line no-unused-vars
          var _state$classes = state.classes,
              removed = _state$classes[className],
              rest = _objectWithoutProperties(_state$classes, [className].map(_toPropertyKey));

          state.classes = rest;
        } else {
          $el.classList.remove(className);
        }
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        if (state) {
          state.styles = _objectSpread2(_objectSpread2({}, state.styles), {}, _defineProperty({}, varName, value));
        } else {
          $el.style.setProperty(varName, value);
        }
      }
    }, options));
    _this.unbounded_ = unbounded;
    return _this;
  }

  _createClass(RippleElement, [{
    key: "unbounded",
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded(this.unbounded_);
    }
  }]);

  return RippleElement;
}(MDCRippleFoundation);
function useRipplePlugin$1(root, options) {
  var ripple = ref(null);
  var state = shallowReactive({
    classes: {},
    styles: {}
  });

  var activate = function activate() {
    var _ripple$value;

    return (_ripple$value = ripple.value) === null || _ripple$value === void 0 ? void 0 : _ripple$value.activate();
  };

  var deactivate = function deactivate() {
    var _ripple$value2;

    return (_ripple$value2 = ripple.value) === null || _ripple$value2 === void 0 ? void 0 : _ripple$value2.deactivate();
  };

  onMounted(function () {
    ripple.value = new RippleElement$1(root.value, state, options);
    ripple.value.init();
  });
  onBeforeUnmount(function () {
    ripple.value.destroy();
  });
  return _objectSpread2(_objectSpread2({}, toRefs(state)), {}, {
    activate: activate,
    deactivate: deactivate
  });
}

var strings$1 = MDCChipFoundation.strings;
var script$5 = {
  name: 'mcw-chip',
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var uiState = reactive({
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
      myListeners: null,
      root: null,
      checkmarkEl: null,
      trailingAction: null
    });
    var mcwChipSet = inject('mcwChipSet');

    var _useRipplePlugin = useRipplePlugin$1(toRef(uiState, 'root')),
        rippleClasses = _useRipplePlugin.classes,
        rippleStyles = _useRipplePlugin.styles;

    var foundation;
    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    var styles = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleStyles.value), uiState.styles);
    });
    var trailingAction_;
    var leadingIcon_;
    var id = computed(function () {
      return uiState.root.id;
    });
    var selected = computed({
      get: function get() {
        return foundation.isSelected();
      },
      set: function set(nv) {
        foundation.setSelected(nv);
      }
    });
    var isFilter = computed(function () {
      return mcwChipSet === null || mcwChipSet === void 0 ? void 0 : mcwChipSet.filter;
    });
    var isInput = computed(function () {
      return mcwChipSet === null || mcwChipSet === void 0 ? void 0 : mcwChipSet.input;
    });
    var haveleadingIcon = computed(function () {
      var slot = slots['leading-icon'];
      return slot && slot[0] || !!props.leadingIcon;
    });
    var havetrailingIcon = computed(function () {
      var slot = slots['trailing-icon'];
      return isInput.value && (slot && slot[0] || !!props.trailingIcon);
    });
    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      addClassToLeadingIcon: function addClassToLeadingIcon(className) {
        if (leadingIcon_) {
          leadingIcon_.classList.add(className);
        }
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target.classList.contains(className);
      },
      focusPrimaryAction: function focusPrimaryAction() {
        var _uiState$root$querySe;

        (_uiState$root$querySe = uiState.root.querySelector(strings$1.PRIMARY_ACTION_SELECTOR)) === null || _uiState$root$querySe === void 0 ? void 0 : _uiState$root$querySe.focus();
      },
      focusTrailingAction: function focusTrailingAction() {
        var _trailingAction_;

        (_trailingAction_ = trailingAction_) === null || _trailingAction_ === void 0 ? void 0 : _trailingAction_.focus();
      },
      getAttribute: function getAttribute(attr) {
        return uiState.root.getAttribute(attr);
      },
      getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
        var _uiState$checkmarkEl;

        return (_uiState$checkmarkEl = uiState.checkmarkEl) === null || _uiState$checkmarkEl === void 0 ? void 0 : _uiState$checkmarkEl.getBoundingClientRect();
      },
      getComputedStyleValue: function getComputedStyleValue(propertyName) {
        return window.getComputedStyle(uiState.root).getPropertyValue(propertyName);
      },
      getRootBoundingClientRect: function getRootBoundingClientRect() {
        return uiState.root.getBoundingClientRect();
      },
      hasClass: function hasClass(className) {
        return uiState.root.classList.contains(className);
      },
      hasLeadingIcon: function hasLeadingIcon() {
        return !!haveleadingIcon.value;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(uiState.root).getPropertyValue('direction') === 'rtl';
      },
      isTrailingActionNavigable: function isTrailingActionNavigable() {
        if (trailingAction_) {
          var _uiState$trailingActi;

          return (_uiState$trailingActi = uiState.trailingAction) === null || _uiState$trailingActi === void 0 ? void 0 : _uiState$trailingActi.isNavigable();
        }

        return false;
      },
      notifyInteraction: function notifyInteraction() {
        emitCustomEvent(uiState.root, strings$1.INTERACTION_EVENT, {
          chipId: id.value
        }, true);
      },
      notifyNavigation: function notifyNavigation(key, source) {
        return emitCustomEvent(uiState.root, strings$1.NAVIGATION_EVENT, {
          chipId: id.value,
          key: key,
          source: source
        }, true);
      },
      notifyRemoval: function notifyRemoval(removedAnnouncement) {
        emitCustomEvent(uiState.root, strings$1.REMOVAL_EVENT, {
          chipId: id.value,
          removedAnnouncement: removedAnnouncement
        }, true);
      },
      notifySelection: function notifySelection(selected, shouldIgnore) {
        return emitCustomEvent(uiState.root, strings$1.SELECTION_EVENT, {
          chipId: id.value,
          selected: selected,
          shouldIgnore: shouldIgnore
        }, true
        /* shouldBubble */
        );
      },
      notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
        emitCustomEvent(uiState.root, strings$1.TRAILING_ICON_INTERACTION_EVENT, {
          chipId: id.value
        }, true);
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
        if (leadingIcon_) {
          leadingIcon_.classList.remove(className);
        }
      },
      removeTrailingActionFocus: function removeTrailingActionFocus() {
        var _uiState$trailingActi2;

        (_uiState$trailingActi2 = uiState.trailingAction) === null || _uiState$trailingActi2 === void 0 ? void 0 : _uiState$trailingActi2.removeFocus();
      },
      setPrimaryActionAttr: function setPrimaryActionAttr(attr, value) {
        return uiState.primaryAttrs = _objectSpread2(_objectSpread2({}, uiState.primaryAttrs), {}, _defineProperty({}, attr, value));
      },
      setStyleProperty: function setStyleProperty(property, value) {
        return uiState.styles = _objectSpread2(_objectSpread2({}, uiState.styles), {}, _defineProperty({}, property, value));
      }
    };

    var setSelectedFromChipSet = function setSelectedFromChipSet(selected, shouldNotifyClients) {
      foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    };

    var focusPrimaryAction = function focusPrimaryAction() {
      return foundation.focusPrimaryAction();
    };

    var focusTrailingAction = function focusTrailingAction() {
      return foundation.focusTrailingAction();
    };

    var removeFocus = function removeFocus() {
      return foundation.removeFocus();
    };

    var toggleSelected = function toggleSelected() {
      return foundation.toggleSelected();
    };

    var isSelected = function isSelected() {
      return foundation.isSelected();
    };

    var remove = function remove() {
      var parent = uiState.root.parentNode;

      if (parent != null) {
        parent.removeChild(uiState.root);
      }
    };

    watch(function () {
      return props.shouldRemoveOnTrailingIconClick;
    }, function (nv) {
      foundation.setShouldRemoveOnTrailingIconClick(nv);
    });
    onMounted(function () {
      leadingIcon_ = uiState.root.querySelector(strings$1.LEADING_ICON_SELECTOR);
      trailingAction_ = uiState.root.querySelector(strings$1.TRAILING_ACTION_SELECTOR);
      foundation = new MDCChipFoundation(adapter);
      uiState.myListeners = {
        click: function click(evt) {
          return foundation.handleClick(evt);
        },
        keydown: function keydown(evt) {
          return foundation.handleKeydown(evt);
        },
        transitionend: function transitionend(evt) {
          return foundation.handleTransitionEnd(evt);
        },
        focusin: function focusin(evt) {
          return foundation.handleFocusIn(evt);
        },
        focusout: function focusout(evt) {
          return foundation.handleFocusOut(evt);
        }
      };

      if (trailingAction_) {
        uiState.myListeners[strings$1.INTERACTION_EVENT] = function (evt) {
          return foundation.handleTrailingActionInteraction(evt);
        };

        uiState.myListeners[strings$1.NAVIGATION_EVENT] = function (evt) {
          return foundation.handleTrailingActionNavigation(evt);
        };
      }

      foundation.init();
      uiState.primaryAttrs.tabindex = isFilter.value ? 0 : -1;

      if (props.shouldRemoveOnTrailingIconClick !== foundation.getShouldRemoveOnTrailingIconClick()) {
        foundation.setShouldRemoveOnTrailingIconClick(props.shouldRemoveOnTrailingIconClick);
      }
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes: classes,
      styles: styles,
      id: id,
      isInput: isInput,
      isFilter: isFilter,
      selected: selected,
      haveleadingIcon: haveleadingIcon,
      havetrailingIcon: havetrailingIcon,
      remove: remove,
      isSelected: isSelected,
      toggleSelected: toggleSelected,
      removeFocus: removeFocus,
      focusPrimaryAction: focusPrimaryAction,
      focusTrailingAction: focusTrailingAction,
      setSelectedFromChipSet: setSelectedFromChipSet
    });
  }
};

const _hoisted_1$3 = /*#__PURE__*/createVNode("div", { class: "mdc-chip__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$3 = { role: "gridcell" };
const _hoisted_3$2 = { class: "mdc-chip__text" };
const _hoisted_4$2 = {
  key: 0,
  role: "gridcell"
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_chip_checkmark = resolveComponent("mcw-chip-checkmark");
  const _component_mcw_chip_trailing_action = resolveComponent("mcw-chip-trailing-action");

  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: ["mdc-chip", _ctx.classes],
    role: "row",
    style: _ctx.styles
  }, toHandlers(_ctx.myListeners)), [
    _hoisted_1$3,
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
      ? createVNode(_component_mcw_chip_checkmark, {
          key: 0,
          ref: "checkmarkEl"
        }, null, 512 /* NEED_PATCH */)
      : createCommentVNode("v-if", true),
    createVNode("span", _hoisted_2$3, [
      createVNode("span", {
        role: _ctx.isFilter ? 'checkbox' : 'button',
        tabindex: "0",
        class: "mdc-chip__primary-action"
      }, [
        createVNode("span", _hoisted_3$2, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 8 /* PROPS */, ["role"])
    ]),
    renderSlot(_ctx.$slots, "trailing-icon", {}, () => [
      (_ctx.havetrailingIcon)
        ? (openBlock(), createBlock("span", _hoisted_4$2, [
            createVNode(_component_mcw_chip_trailing_action, { ref: "trailingAction" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.trailingIcon), 1 /* TEXT */)
              ]),
              _: 1
            }, 512 /* NEED_PATCH */)
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 16 /* FULL_PROPS */))
}

script$5.render = render$5;
script$5.__file = "packages/chips/chip.vue";

var strings$2 = MDCChipTrailingActionFoundation.strings;
var script$6 = {
  name: 'mcw-chip-trailing-action',
  setup: function setup() {
    var root = ref(null);
    var foundation;

    var _useRipplePlugin = useRipplePlugin$1(root),
        classes = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var adapter = {
      focus: function focus() {
        root.value.focus();
      },
      getAttribute: function getAttribute(attr) {
        return root.value.getAttribute(attr);
      },
      notifyInteraction: function notifyInteraction(trigger) {
        return emitCustomEvent(root.value, strings$2.INTERACTION_EVENT, {
          trigger: trigger
        }, true);
      },
      notifyNavigation: function notifyNavigation(key) {
        return emitCustomEvent(root.value, strings$2.INTERACTION_EVENT, {
          key: key
        }, true);
      },
      setAttribute: function setAttribute(attr, value) {
        root.value.setAttribute(attr, value);
      }
    };

    var onClick = function onClick(evt) {
      return foundation.handleClick(evt);
    };

    var onKeydown = function onKeydown(evt) {
      return foundation.handleKeydown(evt);
    };

    var isNavigable = function isNavigable() {
      return foundation.isNavigable();
    };

    var focus = function focus() {
      return foundation.focus();
    };

    var removeFocus = function removeFocus() {
      return foundation.removeFocus();
    };

    onMounted(function () {
      foundation = new MDCChipTrailingActionFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return {
      root: root,
      styles: styles,
      classes: classes,
      onClick: onClick,
      onKeydown: onKeydown,
      isNavigable: isNavigable,
      focus: focus,
      removeFocus: removeFocus
    };
  }
};

const _hoisted_1$4 = /*#__PURE__*/createVNode("span", { class: "mdc-chip-trailing-action__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$4 = { class: "mdc-chip-trailing-action__icon material-icons" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    ref: "root",
    class: [_ctx.classes, "mdc-chip-trailing-action"],
    style: _ctx.styles,
    "aria-label": "Remove chip",
    tabindex: "-1",
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick(...args))),
    onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.onKeydown(...args)))
  }, [
    _hoisted_1$4,
    createVNode("span", _hoisted_2$4, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
}

script$6.render = render$6;
script$6.__file = "packages/chips/trailing-action.vue";

var chips = BasePlugin({
  mcwChip: script$5,
  mcwChipSet: script$4,
  mcwChipCheckmark: script$3,
  mcwChipTrailingAction: script$6
});

var ProgressPropType = {
  type: [Number, String],
  validator: function validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};
var script$7 = {
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
  setup: function setup(props) {
    var uiState = reactive({
      classes: {
        'mdc-circular-progress': 1,
        'mdc-circular-progress--medium': props.medium,
        'mdc-circular-progress--large': !props.medium
      },
      rootAttrs: {},
      circleAttrs: getCircleAttrs(props.medium, false),
      indeterminateAttrs: getCircleAttrs(props.medium, true),
      root: null
    });
    var foundation;
    var adapter = {
      addClass: function addClass(className) {
        uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      getDeterminateCircleAttribute: function getDeterminateCircleAttribute(attributeName) {
        return uiState.circleAttrs[attributeName];
      },
      hasClass: function hasClass(className) {
        return uiState.root.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      removeAttribute: function removeAttribute(attributeName) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$rootAttrs = uiState.rootAttrs,
            removed = _uiState$rootAttrs[attributeName],
            rest = _objectWithoutProperties(_uiState$rootAttrs, [attributeName].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setAttribute: function setAttribute(attributeName, value) {
        uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, _defineProperty({}, attributeName, value));
      },
      setDeterminateCircleAttribute: function setDeterminateCircleAttribute(attributeName, value) {
        return uiState.circleAttrs = _objectSpread2(_objectSpread2({}, uiState.circleAttrs), {}, _defineProperty({}, attributeName, value));
      }
    };
    watch(function () {
      return props.open;
    }, function (nv) {
      if (nv) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    watch(function () {
      return props.progress;
    }, function (nv) {
      foundation.setProgress(Number(nv));
    });
    watch(function () {
      return props.indeterminate;
    }, function (nv) {
      foundation.setDeterminate(!nv);
    });
    onMounted(function () {
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
    onBeforeUnmount(function () {
      return foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }
}; // ===
// Private functions
// ===

function getCircleAttrs() {
  var medium = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var indeterminate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return medium ? {
    cx: '16',
    cy: '16',
    r: '12.5',
    'stroke-dasharray': '78.54',
    'stroke-dashoffset': indeterminate ? '39.27' : '78.54'
  } : {
    cx: '24',
    cy: '24',
    r: '18',
    'stroke-dasharray': '113.097',
    'stroke-dashoffset': indeterminate ? '56.549' : '113.097'
  };
}

const _hoisted_1$5 = { class: "mdc-circular-progress__determinate-container" };
const _hoisted_2$5 = {
  class: "mdc-circular-progress__determinate-circle-graphic",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_3$3 = { class: "mdc-circular-progress__indeterminate-container" };
const _hoisted_4$3 = { class: "mdc-circular-progress__spinner-layer" };
const _hoisted_5 = { class: "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left" };
const _hoisted_6 = {
  class: "mdc-circular-progress__indeterminate-circle-graphic",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_7 = { class: "mdc-circular-progress__gap-patch" };
const _hoisted_8 = {
  class: "mdc-circular-progress__indeterminate-circle-graphic",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_9 = { class: "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right" };
const _hoisted_10 = {
  class: "mdc-circular-progress__indeterminate-circle-graphic",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Fragment, null, [
    createCommentVNode("must be no space between divs"),
    createCommentVNode(" prettier-ignore "),
    createVNode("div", mergeProps({
      ref: "root",
      class: _ctx.classes,
      role: "progressbar"
    }, _ctx.rootAttrs), [
      createVNode("div", _hoisted_1$5, [
        (openBlock(), createBlock("svg", _hoisted_2$5, [
          createVNode("circle", mergeProps({ class: "mdc-circular-progress__determinate-circle" }, _ctx.circleAttrs), null, 16 /* FULL_PROPS */)
        ]))
      ]),
      createVNode("div", _hoisted_3$3, [
        createVNode("div", _hoisted_4$3, [
          createVNode("div", _hoisted_5, [
            (openBlock(), createBlock("svg", _hoisted_6, [
              createVNode("circle", _ctx.indeterminateAttrs, null, 16 /* FULL_PROPS */)
            ])),
            createCommentVNode("must be no space between divs")
          ]),
          createVNode("div", _hoisted_7, [
            (openBlock(), createBlock("svg", _hoisted_8, [
              createVNode("circle", _ctx.indeterminateAttrs, null, 16 /* FULL_PROPS */)
            ]))
          ]),
          createVNode("div", _hoisted_9, [
            (openBlock(), createBlock("svg", _hoisted_10, [
              createVNode("circle", _ctx.indeterminateAttrs, null, 16 /* FULL_PROPS */)
            ]))
          ])
        ])
      ])
    ], 16 /* FULL_PROPS */)
  ], 64 /* STABLE_FRAGMENT */))
}

script$7.render = render$7;
script$7.__file = "packages/circular-progress/circular-progress.vue";

var circularProgress = BasePlugin({
  mcwCircularProgress: script$7
});

var CheckboxAdapter = /*#__PURE__*/function () {
  function CheckboxAdapter(mcwCheckbox) {
    _classCallCheck(this, CheckboxAdapter);

    this.checkbox = mcwCheckbox;
  }

  _createClass(CheckboxAdapter, [{
    key: "destroy",
    value: function destroy() {// noop
    }
  }, {
    key: "checked",
    get: function get() {
      return this.checkbox.isChecked();
    },
    set: function set(checked) {
      this.checkbox.setChecked(checked);
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.checkbox.isIndeterminate();
    },
    set: function set(indeterminate) {
      this.checkbox.setIndeterminate(indeterminate);
    }
  }]);

  return CheckboxAdapter;
}();

function _templateObject() {
  var data = _taggedTemplateLiteral([".", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var script$8 = {
  name: 'mcw-data-table',
  props: {
    sticky: {
      type: Boolean
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var uiState = reactive({
      classes: {
        'mdc-data-table--sticky-header': props.sticky
      },
      root: null
    });

    var checkboxFactory = function checkboxFactory(el) {
      return el.__vue__ ? new CheckboxAdapter(el.__vue__) : new MDCCheckbox(el);
    };

    var cssClasses = cssClasses$8,
        events$1 = events,
        selectors$1 = selectors,
        dataAttributes$1 = dataAttributes,
        SortValue$1 = SortValue,
        messages$1 = messages;
    var foundation;
    var headerRow;
    var rowCheckboxList;
    var content;
    var headerRowCheckbox;
    var handleHeaderRowCheckboxChange;
    var handleRowCheckboxChange;
    var headerRowClickListener;

    var getRows = function getRows() {
      return foundation.getRows();
    };

    var layout = function layout() {
      foundation.layout();
    };

    var getHeaderCells = function getHeaderCells() {
      return [].slice.call(uiState.root.querySelectorAll(selectors$1.HEADER_CELL));
    };

    var getRowByIndex_ = function getRowByIndex_(index) {
      return getRows()[index];
    };

    var getRowIdByIndex_ = function getRowIdByIndex_(index) {
      return getRowByIndex_(index).getAttribute(dataAttributes$1.ROW_ID);
    };

    var getSelectedRowIds = function getSelectedRowIds() {
      return foundation.getSelectedRowIds();
    };

    var getSortStatusMessageBySortValue = function getSortStatusMessageBySortValue(sortValue) {
      switch (sortValue) {
        case SortValue$1.ASCENDING:
          return messages$1.SORTED_IN_ASCENDING;

        case SortValue$1.DESCENDING:
          return messages$1.SORTED_IN_DESCENDING;

        default:
          return '';
      }
    };

    var handleHeaderRowClick = function handleHeaderRowClick(event) {
      var headerCell = closest(event.target, selectors$1.HEADER_CELL_WITH_SORT);

      if (!headerCell) {
        return;
      }

      var columnId = headerCell.getAttribute(dataAttributes$1.COLUMN_ID);
      var columnIndex = getHeaderCells().indexOf(headerCell);

      if (columnIndex === -1) {
        return;
      }

      foundation.handleSortAction({
        columnId: columnId,
        columnIndex: columnIndex,
        headerCell: headerCell
      });
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      getHeaderCellElements: function getHeaderCellElements() {
        return getHeaderCells();
      },
      getHeaderCellCount: function getHeaderCellCount() {
        return getHeaderCells().length;
      },
      getAttributeByHeaderCellIndex: function getAttributeByHeaderCellIndex(index, attribute) {
        return getHeaderCells()[index].getAttribute(attribute);
      },
      setAttributeByHeaderCellIndex: function setAttributeByHeaderCellIndex(index, attribute, value) {
        getHeaderCells()[index].setAttribute(attribute, value);
      },
      setClassNameByHeaderCellIndex: function setClassNameByHeaderCellIndex(index, className) {
        getHeaderCells()[index].classList.add(className);
      },
      removeClassNameByHeaderCellIndex: function removeClassNameByHeaderCellIndex(index, className) {
        getHeaderCells()[index].classList.remove(className);
      },
      notifySortAction: function notifySortAction(data) {
        emit(events$1.SORTED, {
          data: data
        }, true);
      },
      getTableContainerHeight: function getTableContainerHeight() {
        var tableContainer = uiState.root.querySelector(_templateObject(), cssClasses.CONTAINER);

        if (!tableContainer) {
          throw new Error('MDCDataTable: Table container element not found.');
        }

        return tableContainer.getBoundingClientRect().height;
      },
      getTableHeaderHeight: function getTableHeaderHeight() {
        var tableHeader = uiState.root.querySelector(selectors$1.HEADER_ROW);

        if (!tableHeader) {
          throw new Error('MDCDataTable: Table header element not found.');
        }

        return tableHeader.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: function setProgressIndicatorStyles(styles) {
        var progressIndicator = uiState.root.querySelector(selectors$1.PROGRESS_INDICATOR);

        if (!progressIndicator) {
          throw new Error('MDCDataTable: Progress indicator element not found.');
        }

        Object.assign(progressIndicator.style, styles);
      },
      addClassAtRowIndex: function addClassAtRowIndex(rowIndex, className) {
        return getRows()[rowIndex].classList.add(className);
      },
      getRowCount: function getRowCount() {
        return getRows().length;
      },
      getRowElements: function getRowElements() {
        return [].slice.call(uiState.root.querySelectorAll(selectors$1.ROW));
      },
      getRowIdAtIndex: function getRowIdAtIndex(rowIndex) {
        return getRows()[rowIndex].getAttribute(dataAttributes$1.ROW_ID);
      },
      getRowIndexByChildElement: function getRowIndexByChildElement(el) {
        return getRows().indexOf(closest(el, selectors$1.ROW));
      },
      getSelectedRowCount: function getSelectedRowCount() {
        return uiState.root.querySelectorAll(selectors$1.ROW_SELECTED).length;
      },
      isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked(rowIndex) {
        return rowCheckboxList[rowIndex].checked;
      },
      isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
        return headerRowCheckbox.checked;
      },
      isRowsSelectable: function isRowsSelectable() {
        return !!uiState.root.querySelector(selectors$1.ROW_CHECKBOX);
      },
      notifyRowSelectionChanged: function notifyRowSelectionChanged(data) {
        emit(events$1.ROW_SELECTION_CHANGED, {
          row: getRowByIndex_(data.rowIndex),
          rowId: getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected
        },
        /** shouldBubble */
        true);
      },
      notifySelectedAll: function notifySelectedAll() {
        return emit(events$1.SELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      notifyUnselectedAll: function notifyUnselectedAll() {
        return emit(events$1.UNSELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
        var _headerRowCheckbox;

        (_headerRowCheckbox = headerRowCheckbox) === null || _headerRowCheckbox === void 0 ? void 0 : _headerRowCheckbox.destroy();
        var checkboxEl = uiState.root.querySelector(selectors$1.HEADER_ROW_CHECKBOX);
        headerRowCheckbox = checkboxFactory(checkboxEl);
      },
      registerRowCheckboxes: function registerRowCheckboxes() {
        if (rowCheckboxList) {
          rowCheckboxList.forEach(function (checkbox) {
            return checkbox.destroy();
          });
        }

        rowCheckboxList = [];
        getRows().forEach(function (rowEl) {
          var el = rowEl.querySelector(selectors$1.ROW_CHECKBOX);
          var checkbox = checkboxFactory(el);
          rowCheckboxList.push(checkbox);
        });
      },
      removeClassAtRowIndex: function removeClassAtRowIndex(rowIndex, className) {
        getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: function setAttributeAtRowIndex(rowIndex, attr, value) {
        getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked(checked) {
        return headerRowCheckbox.checked = checked;
      },
      setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate(indeterminate) {
        return headerRowCheckbox.indeterminate = indeterminate;
      },
      setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex(rowIndex, checked) {
        return rowCheckboxList[rowIndex].checked = checked;
      },
      setSortStatusLabelByHeaderCellIndex: function setSortStatusLabelByHeaderCellIndex(columnIndex, sortValue) {
        var headerCell = getHeaderCells()[columnIndex];
        var sortStatusLabel = headerCell.querySelector(selectors$1.SORT_STATUS_LABEL);

        if (!sortStatusLabel) {
          return;
        }

        sortStatusLabel.textContent = getSortStatusMessageBySortValue(sortValue);
      }
    };
    onMounted(function () {
      headerRow = uiState.root.querySelector(".".concat(cssClasses.HEADER_ROW));

      handleHeaderRowCheckboxChange = function handleHeaderRowCheckboxChange() {
        return foundation.handleHeaderRowCheckboxChange();
      };

      headerRow.addEventListener('change', handleHeaderRowCheckboxChange);

      headerRowClickListener = function headerRowClickListener(event) {
        handleHeaderRowClick(event);
      };

      headerRow.addEventListener('click', headerRowClickListener);
      content = uiState.root.querySelector(".".concat(cssClasses.CONTENT));

      handleRowCheckboxChange = function handleRowCheckboxChange(event) {
        return foundation.handleRowCheckboxChange(event);
      };

      content.addEventListener('change', handleRowCheckboxChange);
      foundation = new MDCDataTableFoundation(adapter);
      foundation.init();
      layout();
    });
    onBeforeUnmount(function () {
      var _headerRowCheckbox2, _headerRowCheckbox2$d, _rowCheckboxList;

      headerRow.removeEventListener('change', handleHeaderRowCheckboxChange);
      headerRow.removeEventListener('click', headerRowClickListener);
      content.removeEventListener('change', handleRowCheckboxChange);
      (_headerRowCheckbox2 = headerRowCheckbox) === null || _headerRowCheckbox2 === void 0 ? void 0 : (_headerRowCheckbox2$d = _headerRowCheckbox2.destroy) === null || _headerRowCheckbox2$d === void 0 ? void 0 : _headerRowCheckbox2$d.call(_headerRowCheckbox2);
      (_rowCheckboxList = rowCheckboxList) === null || _rowCheckboxList === void 0 ? void 0 : _rowCheckboxList.forEach(function (checkbox) {
        var _checkbox$destroy;

        (_checkbox$destroy = checkbox.destroy) === null || _checkbox$destroy === void 0 ? void 0 : _checkbox$destroy.call(checkbox);
      });
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      getSelectedRowIds: getSelectedRowIds,
      layout: layout
    });
  }
};

const _hoisted_1$6 = { class: "mdc-data-table__table-container" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    ref: "root",
    class: [_ctx.classes, "mdc-data-table"]
  }, [
    createVNode("div", _hoisted_1$6, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$8.render = render$8;
script$8.__file = "packages/data-table/data-table.vue";

var dataTable = BasePlugin({
  mcwDataTable: script$8
});

var mcwDialogButton = {
  name: 'mcw-dialog-button',
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean
  },
  setup: function setup(props, _ref) {
    var listeners = _ref.listeners,
        slots = _ref.slots;

    var onClick = listeners['click'] || function () {};

    return function () {
      var _slots$default;

      return h('mcw-button', {
        class: ['mdc-dialog__button'],
        attrs: {
          'data-mdc-dialog-action': props.action,
          'data-mdc-dialog-button-default': props.isDefault,
          'data-mdc-dialog-initial-focus': props.isInitialFocus
        },
        on: {
          click: onClick
        }
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var mcwDialogContent = {
  name: 'mcw-dialog-content',
  props: {
    tag: {
      type: String,
      default: function _default() {
        return 'div';
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
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
      default: function _default() {
        return 'div';
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
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
      default: function _default() {
        return 'h2';
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return h(props.tag, {
        class: ['mdc-dialog__title']
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var cssClasses = MDCDialogFoundation.cssClasses,
    strings$3 = MDCDialogFoundation.strings;
var LAYOUT_EVENTS = ['resize', 'orientationchange'];
var script$9 = {
  name: 'mcw-dialog',
  components: {
    mcwButton: script
  },
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    autoStackButtons: Boolean,
    escapeKeyAction: String,
    scrollable: Boolean,
    open: Boolean,
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
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs;
    var uiState = reactive({
      classes: {
        'mdc-dialog': 1
      },
      styles: {},
      container: null,
      root: null
    });
    var foundation;
    var content_;
    var buttons_;
    var focusTrap;
    var defaultButton;

    var focusTrapFactory_ = function focusTrapFactory_(el) {
      return new FocusTrap(el);
    };

    var handleLayout = function handleLayout() {
      foundation.layout();
    };

    var handleDocumentKeyDown = function handleDocumentKeyDown(e) {
      foundation.handleDocumentKeydown(e);
    };

    var getInitialFocusEl_ = function getInitialFocusEl_() {
      return document.querySelector("[".concat(MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE, "]"));
    };

    var onClick = function onClick(evt) {
      foundation.handleClick(evt);
    };

    var onKeydown = function onKeydown(evt) {
      foundation.handleKeydown(evt);
    };

    var onOpen = function onOpen(nv) {
      if (nv) {
        if (uiState.container) {
          focusTrap = createFocusTrapInstance(uiState.root, focusTrapFactory_, getInitialFocusEl_() || void 0);
        }

        foundation.open();
      } else {
        foundation.close();
      }
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return uiState.root.classList.contains(className);
      },
      addBodyClass: function addBodyClass(className) {
        return document.body.classList.add(className);
      },
      removeBodyClass: function removeBodyClass(className) {
        return document.body.classList.remove(className);
      },
      eventTargetMatches: function eventTargetMatches(target, selector) {
        return matches$1(target, selector);
      },
      trapFocus: function trapFocus(initialFocusEl) {
        var _focusTrap;

        return (_focusTrap = focusTrap) === null || _focusTrap === void 0 ? void 0 : _focusTrap.trapFocus();
      },
      releaseFocus: function releaseFocus() {
        var _focusTrap2;

        return (_focusTrap2 = focusTrap) === null || _focusTrap2 === void 0 ? void 0 : _focusTrap2.releaseFocus();
      },
      getInitialFocusEl: function getInitialFocusEl() {
        return getInitialFocusEl_();
      },
      isContentScrollable: function isContentScrollable() {
        return isScrollable(content_);
      },
      areButtonsStacked: function areButtonsStacked() {
        return areTopsMisaligned(buttons_);
      },
      getActionFromEvent: function getActionFromEvent(event) {
        var elem = closest$1(event.target, "[".concat(strings$3.ACTION_ATTRIBUTE, "]"));
        return elem === null || elem === void 0 ? void 0 : elem.getAttribute(strings$3.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: function clickDefaultButton() {
        var _defaultButton;

        (_defaultButton = defaultButton) === null || _defaultButton === void 0 ? void 0 : _defaultButton.click();
      },
      reverseButtons: function reverseButtons() {
        var buttons = buttons_;
        return buttons && buttons.reverse().forEach(function (button) {
          var _button$parentElement;

          return (_button$parentElement = button.parentElement) === null || _button$parentElement === void 0 ? void 0 : _button$parentElement.appendChild(button);
        });
      },
      notifyOpening: function notifyOpening() {
        emit(strings$3.OPENING_EVENT, {});
        LAYOUT_EVENTS.forEach(function (evt) {
          return window.addEventListener(evt, handleLayout);
        });
        document.addEventListener('keydown', handleDocumentKeyDown);
      },
      notifyOpened: function notifyOpened() {
        return emit(strings$3.OPENED_EVENT, {});
      },
      notifyClosing: function notifyClosing(action) {
        emit('change', false);
        emit(strings$3.CLOSING_EVENT, action ? {
          action: action
        } : {});
        LAYOUT_EVENTS.forEach(function (evt) {
          return window.removeEventListener(evt, handleLayout);
        });
        document.removeEventListener('keydown', handleDocumentKeyDown);
      },
      notifyClosed: function notifyClosed(action) {
        emit(strings$3.CLOSED_EVENT, action ? {
          action: action
        } : {});
      }
    };
    watch(function () {
      return props.open;
    }, function (nv) {
      onOpen(nv);
    });
    onMounted(function () {
      var open = props.open,
          autoStackButtons = props.autoStackButtons,
          escapeKeyAction = props.escapeKeyAction,
          scrimClickAction = props.scrimClickAction;
      buttons_ = [].slice.call(uiState.root.querySelectorAll(cssClasses.BUTTON));
      defaultButton = uiState.root.querySelector("[".concat(strings$3.BUTTON_DEFAULT_ATTRIBUTE, "]"));
      var container = uiState.root.querySelector(strings$3.CONTAINER_SELECTOR);

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

      onOpen(open);
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      handleLayout: handleLayout,
      handleDocumentKeyDown: handleDocumentKeyDown,
      onKeydown: onKeydown,
      onClick: onClick
    });
  }
};

const _hoisted_1$7 = {
  ref: "container",
  class: "mdc-dialog__container"
};
const _hoisted_2$6 = /*#__PURE__*/createVNode("div", { class: "mdc-dialog__scrim" }, null, -1 /* HOISTED */);

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles,
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick(...args))),
    onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.onKeydown(...args)))
  }, [
    createVNode("div", _hoisted_1$7, [
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
    _hoisted_2$6
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
}

script$9.render = render$9;
script$9.__file = "packages/dialog/dialog.vue";

var dialog = BasePlugin({
  mcwDialog: script$9,
  mcwDialogTitle: mcwDialogTitle,
  mcwDialogFooter: mcwDialogFooter,
  mcwDialogButton: mcwDialogButton,
  mcwDialogContent: mcwDialogContent
});

var strings$4 = MDCDismissibleDrawerFoundation.strings;
var script$a = {
  name: 'mcw-drawer',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    modal: Boolean,
    dismissible: Boolean,
    open: Boolean,
    toolbarSpacer: Boolean,
    toggleOn: String,
    toggleOnSource: {
      type: Object,
      required: false
    },
    openOn: String,
    openOnSource: {
      type: Object,
      required: false
    },
    closeOn: String,
    closeOnSource: {
      type: Object,
      required: false
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        $root = _ref.root;
    var uiState = reactive({
      classes: {
        'mdc-drawer': 1,
        'mdc-drawer--modal': props.modal,
        'mdc-drawer--dismissible': props.dismissible && !props.modal
      },
      drawer: null
    });

    var focusTrapFactory_ = function focusTrapFactory_(el) {
      return new FocusTrap$1(el);
    };

    var show = function show() {
      return foundation.open();
    };

    var close = function close() {
      return foundation.close();
    };

    var toggle = function toggle() {
      return foundation.isOpen() ? foundation.close() : foundation.open();
    };

    var isOpen = function isOpen() {
      return foundation.isOpen();
    };

    var foundation;
    var focusTrap_;
    var previousFocus_;

    var handleScrimClick = function handleScrimClick() {
      return foundation.handleScrimClick();
    };

    var handleKeydown = function handleKeydown(evt) {
      return foundation.handleKeydown(evt);
    };

    var handleTransitionEnd = function handleTransitionEnd(evt) {
      return foundation.handleTransitionEnd(evt);
    };

    var onChange = function onChange(event) {
      emit('change', event);
      $root.$emit('vma:layout');
    };

    var onListAction = function onListAction() {
      return props.modal && close();
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return !!uiState.classes[className];
      },
      elementHasClass: function elementHasClass(element, className) {
        return element.classList.contains(className);
      },
      saveFocus: function saveFocus() {
        previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        var _previousFocus_;

        var previousFocus = (_previousFocus_ = previousFocus_) === null || _previousFocus_ === void 0 ? void 0 : _previousFocus_.focus;

        if (previousFocus && uiState.drawer.contains(document.activeElement)) {
          previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: function focusActiveNavigationItem() {
        var activeNavItemEl = uiState.drawer.querySelector(".".concat(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS));

        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function notifyClose() {
        emitCustomEvent(uiState.drawer, strings$4.CLOSE_EVENT, {}, true
        /* shouldBubble */
        );
        emit('change', false);
        emit('close');
      },
      notifyOpen: function notifyOpen() {
        emitCustomEvent(uiState.drawer, strings$4.OPEN_EVENT, {}, true
        /* shouldBubble */
        );
        emit('change', true);
        emit('open');
      },
      trapFocus: function trapFocus() {
        return focusTrap_.trapFocus();
      },
      releaseFocus: function releaseFocus() {
        return focusTrap_.releaseFocus();
      }
    };
    watch(function () {
      return props.open;
    }, function (nv) {
      if (nv) {
        var _foundation;

        (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.open();
      } else {
        var _foundation2;

        (_foundation2 = foundation) === null || _foundation2 === void 0 ? void 0 : _foundation2.close();
      }
    });
    onMounted(function () {
      var _MDCDismissibleDrawer = MDCDismissibleDrawerFoundation.cssClasses,
          DISMISSIBLE = _MDCDismissibleDrawer.DISMISSIBLE,
          MODAL = _MDCDismissibleDrawer.MODAL;

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
    onBeforeUnmount(function () {
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
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      onChange: onChange,
      show: show,
      close: close,
      toggle: toggle,
      isOpen: isOpen,
      onListAction: onListAction,
      handleScrimClick: handleScrimClick,
      handleKeydown: handleKeydown,
      handleTransitionEnd: handleTransitionEnd
    });
  }
};

const _hoisted_1$8 = { class: "mdc-drawer__content" };
const _hoisted_2$7 = {
  key: 1,
  class: "drawer-wrapper"
};
const _hoisted_3$4 = { class: "mdc-drawer__content" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_list = resolveComponent("mcw-list");

  return (openBlock(), createBlock(Fragment, null, [
    createCommentVNode(" <div ref=\"root\"> "),
    (!_ctx.modal)
      ? (openBlock(), createBlock("aside", {
          key: 0,
          ref: "drawer",
          class: _ctx.classes,
          "onMDCList:action": _cache[1] || (_cache[1] = (...args) => (_ctx.onListAction(...args))),
          onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.handleKeydown(...args))),
          onTransitionend: _cache[3] || (_cache[3] = (...args) => (_ctx.handleTransitionEnd(...args)))
        }, [
          renderSlot(_ctx.$slots, "header"),
          createVNode("div", _hoisted_1$8, [
            createVNode(_component_mcw_list, {
              "wrap-focus": true,
              tag: "nav",
              "single-selection": "",
              "selected-index": 0
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            })
          ])
        ], 34 /* CLASS, HYDRATE_EVENTS */))
      : (openBlock(), createBlock("div", _hoisted_2$7, [
          createVNode("aside", {
            ref: "drawer",
            class: _ctx.classes,
            "onMDCList:action": _cache[4] || (_cache[4] = (...args) => (_ctx.onListAction(...args))),
            onKeydown: _cache[5] || (_cache[5] = (...args) => (_ctx.handleKeydown(...args))),
            onTransitionend: _cache[6] || (_cache[6] = (...args) => (_ctx.handleTransitionEnd(...args)))
          }, [
            renderSlot(_ctx.$slots, "header"),
            createVNode("div", _hoisted_3$4, [
              createVNode(_component_mcw_list, {
                "wrap-focus": true,
                tag: "nav",
                "single-selection": "",
                "selected-index": 0
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ])
          ], 34 /* CLASS, HYDRATE_EVENTS */),
          (_ctx.modal)
            ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mdc-drawer-scrim",
                onClick: _cache[7] || (_cache[7] = (...args) => (_ctx.handleScrimClick(...args)))
              }))
            : createCommentVNode("v-if", true)
        ]))
  ], 64 /* STABLE_FRAGMENT */))
}

script$a.render = render$a;
script$a.__file = "packages/drawer/drawer.vue";

var drawer = BasePlugin({
  mcwDrawer: script$a
});

var script$b = {
  name: 'mcw-fab',
  inheritAttrs: false,
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String
  },
  components: {
    CustomLink: CustomLink
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        listeners = _ref.listeners;
    var root = ref(null);
    var uiState = reactive({
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': props.mini,
        'mdc-fab--extended': props.label || slots.default,
        'mdc-fab--exited': props.exited
      }
    });

    var _useRipplePlugin = useRipplePlugin$1(root),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    watch(function () {
      return props.icon;
    }, function (nv) {
      uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        'material-icons': nv
      });
    });
    watch(function () {
      return props.mini;
    }, function (nv) {
      uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        'mdc-fab--mini': nv
      });
    });
    watch(function () {
      return props.exited;
    }, function (nv) {
      uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
        'mdc-fab--exited': nv
      });
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes: classes,
      root: root,
      styles: styles,
      listeners: listeners
    });
  }
};

const _hoisted_1$9 = /*#__PURE__*/createVNode("div", { class: "mdc-fab__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$8 = { class: "mdc-fab__icon material-icons" };
const _hoisted_3$5 = { class: "mdc-fab__label" };

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, mergeProps({
    ref: "root",
    role: "button",
    class: _ctx.classes,
    style: _ctx.styles,
    link: _ctx.$attrs,
    tag: "button"
  }, toHandlers(_ctx.listeners)), {
    default: withCtx(() => [
      _hoisted_1$9,
      renderSlot(_ctx.$slots, "icon", {}, () => [
        createVNode("span", _hoisted_2$8, toDisplayString(_ctx.icon), 1 /* TEXT */)
      ]),
      createVNode("span", _hoisted_3$5, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
        ])
      ])
    ]),
    _: 3
  }, 16 /* FULL_PROPS */, ["class", "style", "link"]))
}

script$b.render = render$b;
script$b.__file = "packages/fab/fab.vue";

var fab = BasePlugin({
  mcwFAB: script$b
});

var script$c = {
  name: 'mcw-floating-label',
  props: {
    required: {
      type: Boolean
    }
  },
  setup: function setup(props) {
    var uiState = reactive({
      labelClasses: {
        'mdc-floating-label': true,
        'mdc-floating-label--required': props.required
      },
      root: null
    });
    var foundation;
    var adapter = {
      addClass: function addClass(className) {
        return uiState.labelClasses = _objectSpread2(_objectSpread2({}, uiState.labelClasses), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$labelClasses = uiState.labelClasses,
            removed = _uiState$labelClasses[className],
            rest = _objectWithoutProperties(_uiState$labelClasses, [className].map(_toPropertyKey));

        uiState.labelClasses = rest;
      },
      getWidth: function getWidth() {
        return uiState.root.scrollWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        uiState.root.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        uiState.root.removeEventListener(evtType, handler);
      }
    };

    var getWidth = function getWidth() {
      return foundation.getWidth();
    };

    var setRequired = function setRequired(isRequired) {
      return foundation.setRequired(isRequired);
    };

    var float = function float(shouldFloat) {
      foundation.float(shouldFloat);
    };

    var shake = function shake(shouldShake) {
      foundation.shake(shouldShake);
    };

    onMounted(function () {
      foundation = new MDCFloatingLabelFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      getWidth: getWidth,
      float: float,
      shake: shake,
      setRequired: setRequired
    });
  }
};

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", {
    ref: "root",
    class: _ctx.labelClasses
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$c.render = render$c;
script$c.__file = "packages/floating-label/floating-label.vue";

var floatingLabel = BasePlugin({
  mcwFloatingLabel: script$c
});

var script$d = {
  name: 'mcw-icon-button',
  model: {
    prop: 'isOn',
    event: 'change'
  },
  props: {
    isOn: Boolean,
    disabled: Boolean
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs,
        refs = _ref.refs,
        slots = _ref.slots;
    var uiState = reactive({
      classes: {
        'mdc-icon-button': 1,
        'material-icons': 1
      }
    });
    var root = ref(null);
    var CHANGE_EVENT = MDCIconButtonToggleFoundation.strings.CHANGE_EVENT;

    var _useRipplePlugin = useRipplePlugin$1(root, {
      isUnbounded: function isUnbounded() {
        return true;
      }
    }),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var foundation;
    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return Boolean(uiState.classes[className]);
      },
      setAttr: function setAttr(attrName, attrValue) {
        return refs.root.setAttribute(attrName, attrValue);
      },
      getAttr: function getAttr(attrName) {
        return refs.root.getAttribute(attrName);
      },
      notifyChange: function notifyChange(evtData) {
        emit(CHANGE_EVENT, evtData);
        emit('change', evtData.isOn);
      }
    };
    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    watch(function () {
      return props.isOn;
    }, function (nv) {
      foundation.toggle(nv);
    });
    var tag = computed(function () {
      var isLink = Boolean(attrs.href);
      return isLink ? 'a' : 'button';
    });

    var onClick = function onClick(evt) {
      return foundation.handleClick(evt);
    };

    onMounted(function () {
      foundation = new MDCIconButtonToggleFoundation(adapter);
      foundation.init();
      foundation.toggle(props.isOn);
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes: classes,
      styles: styles,
      root: root,
      tag: tag,
      onClick: onClick
    });
  }
};

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
    _: 3
  }, 8 /* PROPS */, ["class", "style", "onClick", "disabled"]))
}

script$d.render = render$d;
script$d.__file = "packages/icon-button/icon-button.vue";

var mcwIconToggle = {
  name: 'mcw-icon-toggle',
  props: {
    isOn: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
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
  mcwIconButton: script$d,
  mcwIconToggle: mcwIconToggle
});

var spanOptions_ = {
  type: [String, Number],
  default: null,
  validator: function validator(value) {
    var num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  }
};
var script$e = {
  name: 'mcw-layout-cell',
  props: {
    span: spanOptions_,
    order: spanOptions_,
    phone: spanOptions_,
    tablet: spanOptions_,
    desktop: spanOptions_,
    align: {
      type: String,
      validator: function validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1;
      }
    }
  },
  setup: function setup(props) {
    var classes = computed(function () {
      var cssClasses = [];

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
      classes: classes
    };
  }
};

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: [_ctx.classes, "mdc-layout-cell mdc-layout-grid__cell"]
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$e.render = render$e;
script$e.__file = "packages/layout-grid/layout-cell.vue";

var script$f = {
  name: 'mcw-layout-grid',
  props: {
    fixedColumWidth: Boolean,
    alignLeft: Boolean,
    alignRight: Boolean
  },
  setup: function setup(props) {
    var classes = computed(function () {
      return {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': props.fixedColumnWidth,
        'mdc-layout-grid--align-left': props.alignLeft,
        'mdc-layout-grid--align-right': props.alignRight
      };
    });
    return {
      classes: classes
    };
  }
};

const _hoisted_1$a = { class: "mdc-layout-grid__inner" };

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", { class: _ctx.classes }, [
    createVNode("div", _hoisted_1$a, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$f.render = render$f;
script$f.__file = "packages/layout-grid/layout-grid.vue";

var script$g = {
  name: 'mcw-layout-inner-grid'
};

const _hoisted_1$b = { class: "mdc-layout-inner-grid mdc-layout-grid__inner" };

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$b, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$g.render = render$g;
script$g.__file = "packages/layout-grid/layout-inner-grid.vue";

var layoutGrid = BasePlugin({
  mcwLayoutGrid: script$f,
  mcwLayoutCell: script$e,
  mcwLayoutInnerGrid: script$g
});

var script$h = {
  name: 'mcw-line-ripple',
  setup: function setup() {
    var uiState = reactive({
      lineClasses: {
        'mdc-line-ripple': 1
      },
      lineStyles: {}
    }); // note: do not call the property 'foundation' as the tests will then
    // expect all methods to be implemented, and we handle transitionend locally.

    var foundation_;
    var adapter = {
      addClass: function addClass(className) {
        return uiState.lineClasses = _objectSpread2(_objectSpread2({}, uiState.lineClasses), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$lineClasses = uiState.lineClasses,
            removed = _uiState$lineClasses[className],
            rest = _objectWithoutProperties(_uiState$lineClasses, [className].map(_toPropertyKey));

        uiState.lineClasses = rest;
      },
      hasClass: function hasClass(className) {
        return Boolean(uiState.lineClasses[className]);
      },
      setStyle: function setStyle(name, value) {
        return uiState.lineStyles = _objectSpread2(_objectSpread2({}, uiState.lineStyles), {}, _defineProperty({}, name, value));
      }
    };

    var setRippleCenter = function setRippleCenter(xCoordinate) {
      foundation_.setRippleCenter(xCoordinate);
    };

    var activate = function activate() {
      foundation_.activate();
    };

    var deactivate = function deactivate() {
      foundation_.deactivate();
    };

    var onTransitionEnd = function onTransitionEnd(evt) {
      return foundation_.handleTransitionEnd(evt);
    };

    onMounted(function () {
      foundation_ = new MDCLineRippleFoundation(adapter);
      foundation_.init();
    });
    onBeforeUnmount(function () {
      foundation_.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      setRippleCenter: setRippleCenter,
      activate: activate,
      deactivate: deactivate,
      onTransitionEnd: onTransitionEnd
    });
  }
};

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", {
    class: _ctx.lineClasses,
    style: _ctx.lineStyles,
    onTransitionend: _cache[1] || (_cache[1] = (...args) => (_ctx.onTransitionEnd(...args)))
  }, null, 38 /* CLASS, STYLE, HYDRATE_EVENTS */))
}

script$h.render = render$h;
script$h.__file = "packages/line-ripple/line-ripple.vue";

var lineRipple = BasePlugin({
  mcwLineRipple: script$h
});

var progressPropType_ = {
  type: [Number, String],
  validator: function validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};
var script$i = {
  name: 'mcw-linear-progress',
  props: {
    open: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean,
    reversed: Boolean,
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
  setup: function setup(props) {
    var uiState = reactive({
      classes: {
        'mdc-linear-progress': 1
      },
      bufferbarStyles: {},
      primaryStyles: {},
      rootAttrs: {},
      root: null
    });
    var foundation;
    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      forceLayout: function forceLayout() {
        return uiState.root.offsetWidth;
      },
      setBufferBarStyle: function setBufferBarStyle(styleProperty, value) {
        return uiState.bufferbarStyles = _objectSpread2(_objectSpread2({}, uiState.bufferbarStyles), {}, _defineProperty({}, styleProperty, value));
      },
      setPrimaryBarStyle: function setPrimaryBarStyle(styleProperty, value) {
        return uiState.primaryStyles = _objectSpread2(_objectSpread2({}, uiState.primaryStyles), {}, _defineProperty({}, styleProperty, value));
      },
      hasClass: function hasClass(className) {
        return uiState.root.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      setAttribute: function setAttribute(attributeName, value) {
        return uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, _defineProperty({}, attributeName, value));
      },
      removeAttribute: function removeAttribute(attributeName) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$rootAttrs = uiState.rootAttrs,
            removed = _uiState$rootAttrs[attributeName],
            rest = _objectWithoutProperties(_uiState$rootAttrs, [attributeName].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      }
    };
    watch(function () {
      return props.open;
    }, function (nv) {
      if (nv) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    watch(function () {
      return props.progress;
    }, function (nv) {
      foundation.setProgress(Number(nv));
    });
    watch(function () {
      return props.buffer;
    }, function (nv) {
      foundation.setBuffer(Number(nv));
    });
    watch(function () {
      return props.indeterminate;
    }, function (nv) {
      foundation.setDeterminate(!nv);
    });
    watch(function () {
      return props.reversed;
    }, function (nv) {
      foundation.setReverse(nv);
    });
    onMounted(function () {
      foundation = new MDCLinearProgressFoundation(adapter);
      foundation.init();
      foundation.setReverse(props.reversed);
      foundation.setProgress(Number(props.progress));
      foundation.setBuffer(Number(props.buffer));
      foundation.setDeterminate(!props.indeterminate);

      if (props.open) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    onBeforeUnmount(function () {
      return foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }
};

const _hoisted_1$c = {
  ref: "buffer",
  class: "mdc-linear-progress__buffer"
};
const _hoisted_2$9 = /*#__PURE__*/createVNode("div", { class: "mdc-linear-progress__buffer-dots" }, null, -1 /* HOISTED */);
const _hoisted_3$6 = /*#__PURE__*/createVNode("span", { class: "mdc-linear-progress__bar-inner" }, null, -1 /* HOISTED */);
const _hoisted_4$4 = {
  ref: "secondary",
  class: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
};
const _hoisted_5$1 = /*#__PURE__*/createVNode("span", { class: "mdc-linear-progress__bar-inner" }, null, -1 /* HOISTED */);

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes,
    role: "progressbar"
  }, _ctx.rootAttrs), [
    createVNode("div", _hoisted_1$c, [
      createVNode("div", {
        class: "mdc-linear-progress__buffer-bar",
        style: _ctx.bufferbarStyles
      }, null, 4 /* STYLE */),
      _hoisted_2$9
    ], 512 /* NEED_PATCH */),
    createVNode("div", {
      ref: "primary",
      class: "mdc-linear-progress__bar mdc-linear-progress__primary-bar",
      style: _ctx.primaryStyles
    }, [
      _hoisted_3$6
    ], 4 /* STYLE */),
    createVNode("div", _hoisted_4$4, [
      _hoisted_5$1
    ], 512 /* NEED_PATCH */)
  ], 16 /* FULL_PROPS */))
}

script$i.render = render$i;
script$i.__file = "packages/linear-progress/linear-progress.vue";

var linearProgress = BasePlugin({
  mcwLinearProgress: script$i
});

var listItemId_ = 0;
var script$j = {
  name: 'mcw-list-item',
  props: {
    twoLine: String,
    disabled: Boolean,
    icon: [String, Boolean],
    groupIcon: String,
    selected: Boolean,
    checked: Boolean,
    name: String,
    to: [String, Object],
    noAutoRole: Boolean,
    trailing: Boolean
  },
  components: {
    CustomLink: CustomLink
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        listeners = _ref.listeners,
        attrs = _ref.attrs;
    var root = ref(null);
    var uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled
      },
      attrs: {},
      styles: {}
    });
    var myAttrs = computed(function () {
      return _objectSpread2(_objectSpread2(_objectSpread2({}, attrs), uiState.attrs), {}, {
        to: props.to
      });
    });
    var radioChecked = computed(function () {
      return (attrs === null || attrs === void 0 ? void 0 : attrs['aria-checked']) == 'true';
    });
    var checkbox = computed(function () {
      return !props.trailing && (attrs === null || attrs === void 0 ? void 0 : attrs.role) == 'checkbox';
    });
    var radio = computed(function () {
      return !props.trailing && (attrs === null || attrs === void 0 ? void 0 : attrs.role) == 'radio';
    });
    var trailingRadio = computed(function () {
      return props.trailing && (attrs === null || attrs === void 0 ? void 0 : attrs.role) == 'radio';
    });
    var trailingCheckbox = computed(function () {
      return props.trailing && (attrs === null || attrs === void 0 ? void 0 : attrs.role) == 'checkbox';
    });
    var itemId = listItemId_++;

    var _useRipplePlugin = useRipplePlugin(root),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    var isTwoLine = computed(function () {
      return props.twoLine || slots['secondary-text'];
    });
    var groupClasses = computed(function () {
      return {
        'mdc-menu__selection-group-icon': props.groupIcon
      };
    });
    var needGraphic = computed(function () {
      return typeof props.icon == 'string' || !!props.groupIcon;
    });
    var listIcon = computed(function () {
      return typeof props.icon === 'string' && props.icon || props.groupIcon;
    });

    var addClass = function addClass(className) {
      return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
    };

    var removeClass = function removeClass(className) {
      // eslint-disable-next-line no-unused-vars
      var _uiState$classes = uiState.classes,
          removed = _uiState$classes[className],
          rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

      uiState.classes = rest;
    };

    var removeAttribute = function removeAttribute(attr) {
      // eslint-disable-next-line no-unused-vars
      var _uiState$attrs = uiState.attrs,
          removed = _uiState$attrs[attr],
          rest = _objectWithoutProperties(_uiState$attrs, [attr].map(_toPropertyKey));

      uiState.attrs = rest;
    };

    var setAttribute = function setAttribute(attr, value) {
      return uiState.attrs = _objectSpread2(_objectSpread2({}, uiState.attrs), {}, _defineProperty({}, attr, value));
    };

    var getAttribute = function getAttribute(attr) {
      return myAttrs.value[attr];
    };

    var addItemId = function addItemId(evt) {
      return evt.__itemId = itemId;
    };

    var classList = {
      add: addClass,
      remove: removeClass,
      contains: function contains(className) {
        return !!uiState.classes[className];
      }
    };

    var focus = function focus() {
      var _root$value$$el;

      ((_root$value$$el = root.value.$el) !== null && _root$value$$el !== void 0 ? _root$value$$el : root.value).focus();
    };

    var myListeners = _objectSpread2(_objectSpread2({}, listeners), {}, {
      click: addItemId,
      focusin: addItemId
    });

    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      myListeners: myListeners,
      styles: styles,
      focus: focus,
      root: root,
      classes: classes,
      isTwoLine: isTwoLine,
      needGraphic: needGraphic,
      listIcon: listIcon,
      groupClasses: groupClasses,
      addClass: addClass,
      removeClass: removeClass,
      setAttribute: setAttribute,
      getAttribute: getAttribute,
      removeAttribute: removeAttribute,
      itemId: itemId,
      checkbox: checkbox,
      radio: radio,
      radioChecked: radioChecked,
      classList: classList,
      myAttrs: myAttrs,
      trailingRadio: trailingRadio,
      trailingCheckbox: trailingCheckbox
    });
  }
};

const _hoisted_1$d = /*#__PURE__*/createVNode("span", { class: "mdc-list-item__ripple" }, null, -1 /* HOISTED */);
const _hoisted_2$a = {
  key: 0,
  class: "material-icons"
};
const _hoisted_3$7 = {
  key: 1,
  class: "mdc-list-item__graphic"
};
const _hoisted_4$5 = /*#__PURE__*/createVNode("div", { class: "mdc-checkbox" }, [
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
const _hoisted_5$2 = {
  key: 2,
  class: "mdc-list-item__graphic"
};
const _hoisted_6$1 = { class: "mdc-radio" };
const _hoisted_7$1 = /*#__PURE__*/createVNode("div", { class: "mdc-radio__background" }, [
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__outer-circle" }),
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__inner-circle" })
], -1 /* HOISTED */);
const _hoisted_8$1 = {
  key: 3,
  class: "mdc-list-item__text"
};
const _hoisted_9$1 = { class: "mdc-list-item__primary-text" };
const _hoisted_10$1 = { class: "mdc-list-item__secondary-text" };
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

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, mergeProps({
    ref: "root",
    link: _ctx.myAttrs,
    class: _ctx.classes,
    style: _ctx.styles
  }, toHandlers(_ctx.myListeners), { tag: "a" }), {
    default: withCtx(() => [
      _hoisted_1$d,
      (_ctx.needGraphic)
        ? (openBlock(), createBlock("span", {
            key: 0,
            class: ["mdc-list-item__graphic", _ctx.groupClasses]
          }, [
            renderSlot(_ctx.$slots, "graphic", {}, () => [
              (_ctx.listIcon)
                ? (openBlock(), createBlock("i", _hoisted_2$a, toDisplayString(_ctx.listIcon), 1 /* TEXT */))
                : createCommentVNode("v-if", true)
            ])
          ], 2 /* CLASS */))
        : (_ctx.checkbox)
          ? (openBlock(), createBlock("span", _hoisted_3$7, [
              renderSlot(_ctx.$slots, "graphic", {}, () => [
                _hoisted_4$5
              ])
            ]))
          : (_ctx.radio)
            ? (openBlock(), createBlock("span", _hoisted_5$2, [
                renderSlot(_ctx.$slots, "graphic", {}, () => [
                  createVNode("div", _hoisted_6$1, [
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
            createVNode("span", _hoisted_10$1, [
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
    _: 1
  }, 16 /* FULL_PROPS */, ["link", "class", "style"]))
}

script$j.render = render$j;
script$j.__file = "packages/list/list-item.vue";

var strings$5 = MDCListFoundation.strings,
    cssClasses$1 = MDCListFoundation.cssClasses;
var script$k = {
  name: 'mcw-list',
  model: {
    prop: 'selectedIndex',
    event: 'change'
  },
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
    selectedIndex: {
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
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var uiState = reactive({
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
    var selectedIndex = ref(props.selectedIndex);
    var foundation;
    var slotObserver;

    if (props.singleSelection) {
      uiState.rootAttrs.role = 'listbox';
    }

    var selIndex = computed({
      get: function get() {
        return selectedIndex.value;
      },
      set: function set(nv) {
        selectedIndex.value = nv;
        emit('change', nv);
      }
    });
    var listElements = computed(function () {
      var _slots$default;

      // eslint-disable-next-line no-unused-vars
      var xx = uiState.listn; // for dependency

      var processItem = function processItem(item) {
        var _item$componentInstan;

        var items = [];

        if ((_item$componentInstan = item.componentInstance) === null || _item$componentInstan === void 0 ? void 0 : _item$componentInstan.setAttribute) {
          items.push(item.componentInstance);
        }

        if (item.children) {
          return item.children.reduce(function (p, v) {
            return p.concat(processItem(v));
          }, items);
        }

        return items;
      }; // search depth first down the tree for vue components that match the signature of a mcw-list-item


      var topList = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots).reduce(function (p, v) {
        return p.concat(processItem(v));
      }, []);
      return topList;
    });

    var getListItemIndex = function getListItemIndex(evt) {
      if (evt.__itemId) {
        return listElements.value.findIndex(function (_ref2) {
          var itemId = _ref2.itemId;
          return itemId === evt.__itemId;
        });
      }

      var eventTarget = evt.target;
      var nearestParent = closest(eventTarget, ".".concat(cssClasses$1.LIST_ITEM_CLASS, ", .").concat(cssClasses$1.ROOT)); // Get the index of the element if it is a list item.

      if (nearestParent && matches(nearestParent, ".".concat(cssClasses$1.LIST_ITEM_CLASS))) {
        return listElements.value.indexOf(nearestParent.__vue__);
      }

      return -1;
    };

    var layout = function layout() {
      foundation.setVerticalOrientation(props.ariaOrientation == 'vertical'); // List items need to have at least tabindex=-1 to be focusable.

      [].slice.call(uiState.listRoot.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      }); // Child button/a elements are not tabbable until the list item is focused.

      [].slice.call(uiState.listRoot.querySelectorAll(strings$5.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
      foundation.layout();
    };

    var initializeListType = function initializeListType() {
      var checkboxListItems = uiState.listRoot.querySelectorAll(strings$5.ARIA_ROLE_CHECKBOX_SELECTOR);
      var radioSelectedListItem = uiState.listRoot.querySelector(strings$5.ARIA_CHECKED_RADIO_SELECTOR);

      if (checkboxListItems.length) {
        var preselectedItems = uiState.listRoot.querySelectorAll(strings$5.ARIA_CHECKED_CHECKBOX_SELECTOR);
        selIndex.value = [].map.call(preselectedItems, function (listItem) {
          return listElements.value.indexOf(listItem.__vue__);
        });
      } else if (radioSelectedListItem) {
        selIndex.value = listElements.value.indexOf(radioSelectedListItem.__vue__);
      }
    };

    var getPrimaryText = function getPrimaryText(item) {
      var primaryText = item.querySelector(".".concat(cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS));

      if (primaryText) {
        return primaryText.textContent || '';
      }

      var singleLineText = item.querySelector(".".concat(cssClasses$1.LIST_ITEM_TEXT_CLASS));
      return singleLineText && singleLineText.textContent || '';
    };

    var setEnabled = function setEnabled(itemIndex, isEnabled) {
      foundation.setEnabled(itemIndex, isEnabled);
    };

    var typeaheadMatchItem = function typeaheadMatchItem(nextChar, startingIndex) {
      return foundation.typeaheadMatchItem(nextChar, startingIndex,
      /** skipFocus */
      true);
    };

    var handleFocusInEvent = function handleFocusInEvent(evt) {
      var index = getListItemIndex(evt);
      foundation.handleFocusIn(evt, index);
    };

    var handleFocusOutEvent = function handleFocusOutEvent(evt) {
      var index = getListItemIndex(evt);
      foundation.handleFocusOut(evt, index);
    };

    var handleKeydownEvent = function handleKeydownEvent(evt) {
      var index = getListItemIndex(evt);
      var target = evt.target;
      foundation.handleKeydown(evt, target.classList.contains(cssClasses$1.LIST_ITEM_CLASS), index);
    };

    var handleClickEvent = function handleClickEvent(evt) {
      var index = getListItemIndex(evt);
      var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

      var toggleCheckbox = !matches(target, strings$5.CHECKBOX_RADIO_SELECTOR);
      foundation.handleClick(index, toggleCheckbox);
    };

    var rootListeners = {
      click: function click(event) {
        return handleClickEvent(event);
      },
      focusin: function focusin(event) {
        handleFocusInEvent(event);
      },
      focusout: function focusout(event) {
        handleFocusOutEvent(event);
      },
      keydown: function keydown(event) {
        return handleKeydownEvent(event);
      }
    };

    var typeaheadInProgress = function typeaheadInProgress() {
      return foundation.isTypeaheadInProgress();
    };

    var adapter = {
      addClassForElementIndex: function addClassForElementIndex(index, className) {
        var element = listElements.value[index];
        element.classList.add(className);
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = listElements.value[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
        var listItem = listElements.value[index];
        return listItem.getAttribute(attr);
      },
      getFocusedElementIndex: function getFocusedElementIndex() {
        return listElements.value.indexOf(document.activeElement);
      },
      getListItemCount: function getListItemCount() {
        return listElements.value.length;
      },
      getPrimaryTextAtIndex: function getPrimaryTextAtIndex(index) {
        return getPrimaryText(listElements.value[index]);
      },
      hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
        var _listItem$$el;

        var listItem = listElements.value[index];
        return !!((_listItem$$el = listItem.$el) !== null && _listItem$$el !== void 0 ? _listItem$$el : listItem).querySelector(strings$5.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function hasRadioAtIndex(index) {
        var _listItem$$el2;

        var listItem = listElements.value[index];
        return !!((_listItem$$el2 = listItem.$el) !== null && _listItem$$el2 !== void 0 ? _listItem$$el2 : listItem).querySelector(strings$5.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
        var _listItem$$el3;

        var listItem = listElements.value[index];
        var toggleEl = ((_listItem$$el3 = listItem.$el) !== null && _listItem$$el3 !== void 0 ? _listItem$$el3 : listItem).querySelector(strings$5.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function isFocusInsideList() {
        return uiState.listRoot.contains(document.activeElement);
      },
      isRootFocused: function isRootFocused() {
        return document.activeElement === uiState.listRoot;
      },
      listItemAtIndexHasClass: function listItemAtIndexHasClass(index, className) {
        var listItem = listElements.value[index];
        listItem.classList.contains(className);
      },
      notifyAction: function notifyAction(index) {
        emitCustomEvent(uiState.listRoot, strings$5.ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);

        if (Array.isArray(props.selectedIndex)) {
          emit('change', foundation.getSelectedIndex());
        } else {
          emit('change', index);
        }
      },
      removeClassForElementIndex: function removeClassForElementIndex(index, className) {
        var listItem = listElements.value[index];
        listItem.classList.remove(className);
      },
      setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
        var listItem = listElements.value[index];
        listItem.setAttribute(attr, value);
      },
      setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
        var listItem = listElements.value[index];
        var toggleEl = listItem.$el.querySelector(strings$5.CHECKBOX_RADIO_SELECTOR);
        toggleEl && (toggleEl.checked = isChecked);
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl === null || toggleEl === void 0 ? void 0 : toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = listElements.value[listItemIndex].$el;
        var listItemChildren = [].slice.call(element.querySelectorAll(strings$5.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    watch(function () {
      return props.singleSelection;
    }, function (nv) {
      return foundation.setSingleSelection(nv);
    });
    watch(function () {
      return props.selectedIndex;
    }, function (nv) {
      if (Array.isArray(nv)) {
        foundation.setSelectedIndex(nv);
      } else if (props.selectedIndex != nv) {
        selectedIndex.value = nv;
        foundation.setSelectedIndex(nv);
      }
    });
    watch(function () {
      return props.wrapFocus;
    }, function (nv) {
      return foundation.setWrapFocus(nv);
    });
    watch(function () {
      return props.ariaOrientation;
    }, function (nv) {
      return foundation.setVerticalOrientation(nv === 'vertical');
    });
    watch(function () {
      return props.typeAhead;
    }, function (nv) {
      return foundation.setHasTypeahead(nv);
    });
    onMounted(function () {
      foundation = new MDCListFoundation(adapter);
      foundation.init(); // if a single selection list need to ensure the selected item has the selected or activated class

      if (props.singleSelection && typeof props.selectedIndex === 'number' && !isNaN(props.selectedIndex)) {
        var i = props.selectedIndex;
        var hasSelectedClass = adapter.listItemAtIndexHasClass(i, cssClasses$1.LIST_ITEM_SELECTED_CLASS);
        var hasActivatedClass = adapter.listItemAtIndexHasClass(i, cssClasses$1.LIST_ITEM_ACTIVATED_CLASS);

        if (!(hasSelectedClass || hasActivatedClass)) {
          adapter.addClassForElementIndex(props.selectedIndex, 'mdc-list-item--selected');
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
      // so use a mutation observer to trigger an update by
      // incrementing the dependency variable "listn" referenced
      // in the computed that selects the list elements


      slotObserver = new MutationObserver(function (mutationList, observer) {
        uiState.listn++;
      });
      slotObserver.observe(uiState.listRoot, {
        childList: true // subtree: true,

      });
    });
    onBeforeUnmount(function () {
      slotObserver.disconnect();
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      listElements: listElements,
      rootListeners: rootListeners,
      layout: layout,
      setEnabled: setEnabled,
      typeaheadMatchItem: typeaheadMatchItem,
      typeaheadInProgress: typeaheadInProgress,
      selIndex: selIndex,
      getPrimaryText: getPrimaryText
    });
  }
};

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
    ref: "listRoot",
    class: _ctx.classes
  }, toHandlers(_ctx.rootListeners), _ctx.rootAttrs), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16 /* FULL_PROPS */, ["class"]))
}

script$k.render = render$k;
script$k.__file = "packages/list/list.vue";

var list = BasePlugin({
  mcwList: script$k,
  mcwListItem: script$j
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
  setup: function setup(props, _ref) {
    var listeners = _ref.listeners;
    return function () {
      return h(props.tag, {
        class: 'material-icons',
        on: listeners
      }, props.icon);
    };
  }
};

var materialIcon = BasePlugin({
  mcwMaterialIcon: mcwMaterialIcon
});

var mcwMenuAnchor = {
  name: 'mcw-menu-anchor',
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
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
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return h('li', {
        class: {
          'mdc-menu-divider': 1,
          'mdc-list-divider': 1
        },
        attrs: {
          tabindex: props.disabled ? '-1' : '0',
          'aria-disabled': props.disabled,
          role: 'menuitem'
        }
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var strings$6 = MDCMenuSurfaceFoundation.strings,
    cssClasses$2 = MDCMenuSurfaceFoundation.cssClasses;
var script$l = {
  name: 'mcw-menu-surface',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: [Boolean, Object],
    'quick-open': Boolean,
    'anchor-corner': [String, Number],
    'anchor-margin': Object
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var uiState = reactive({
      classes: {
        'mdc-menu-surface': 1
      },
      root: null
    });
    var foundation;
    var anchorElement;
    var previousFocus_;

    var handleBodyClick = function handleBodyClick(evt) {
      foundation.handleBodyClick(evt);
    };

    var registerBodyClickListener = function registerBodyClickListener() {
      document.body.addEventListener('click', handleBodyClick);
    };

    var deregisterBodyClickListener = function deregisterBodyClickListener() {
      document.body.removeEventListener('click', handleBodyClick);
    };

    var handleKeydown = function handleKeydown(evt) {
      foundation.handleKeydown(evt);
    };

    var getFocusAdapterMethods = function getFocusAdapterMethods() {
      return {
        isFocused: function isFocused() {
          return document.activeElement === uiState.root;
        },
        saveFocus: function saveFocus() {
          previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (uiState.root.contains(document.activeElement)) {
            if (previousFocus_ && previousFocus_.focus) {
              previousFocus_.focus();
            }
          }
        }
      };
    };

    var getDimensionAdapterMethods = function getDimensionAdapterMethods() {
      return {
        getInnerDimensions: function getInnerDimensions() {
          return {
            width: uiState.root.offsetWidth,
            height: uiState.root.offsetHeight
          };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return anchorElement ? anchorElement.getBoundingClientRect() : null;
        },
        getWindowDimensions: function getWindowDimensions() {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        getBodyDimensions: function getBodyDimensions() {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
          };
        },
        getWindowScroll: function getWindowScroll() {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        },
        setPosition: function setPosition(position) {
          uiState.root.style.left = 'left' in position ? "".concat(position.left, "px") : null;
          uiState.root.style.right = 'right' in position ? "".concat(position.right, "px") : null;
          uiState.root.style.top = 'top' in position ? "".concat(position.top, "px") : null;
          uiState.root.style.bottom = 'bottom' in position ? "".concat(position.bottom, "px") : null;
        },
        setMaxHeight: function setMaxHeight(height) {
          uiState.root.style.maxHeight = height;
        }
      };
    };

    var rootListeners = {
      keydown: function keydown(evt) {
        return handleKeydown(evt);
      },
      'MDCMenuSurface:opened': function MDCMenuSurfaceOpened(evt) {
        return registerBodyClickListener();
      },
      'MDCMenuSurface:closed': function MDCMenuSurfaceClosed(evt) {
        return deregisterBodyClickListener();
      }
    };

    var onOpen_ = function onOpen_(value) {
      var method = value ? 'open' : 'close';
      foundation[method]();
    };

    var setIsHoisted = function setIsHoisted(isHoisted) {
      foundation.setIsHoisted(isHoisted);
    };

    var hoistMenuToBody = function hoistMenuToBody() {
      document.body.appendChild(uiState.root.parentElement.removeChild(uiState.root));
      setIsHoisted(true);
    };

    var setFixedPosition = function setFixedPosition(isFixed) {
      if (isFixed) {
        uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, cssClasses$2.FIXED, true));
      } else {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            _cssClasses$FIXED = cssClasses$2.FIXED,
            removed = _uiState$classes[_cssClasses$FIXED],
            rest = _objectWithoutProperties(_uiState$classes, [_cssClasses$FIXED].map(_toPropertyKey));

        uiState.classes = rest;
      }

      foundation.setFixedPosition(isFixed);
    };

    var setAbsolutePosition = function setAbsolutePosition(x, y) {
      foundation.setAbsolutePosition(x, y);
      setIsHoisted(true);
    };

    var setAnchorCorner = function setAnchorCorner(corner) {
      foundation.setAnchorCorner(corner);
    };

    var setAnchorMargin = function setAnchorMargin(margin) {
      foundation.setAnchorMargin(margin);
    };

    var setMenuSurfaceAnchorElement = function setMenuSurfaceAnchorElement(element) {
      anchorElement = element;
    };

    var show = function show(options) {
      foundation.open(options);
    };

    var close = function close() {
      var skipRestoreFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      foundation.close(skipRestoreFocus);
    };

    var hide = function hide() {
      close();
    };

    var isOpen = function isOpen() {
      return foundation ? foundation.isOpen() : false;
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes2 = uiState.classes,
            removed = _uiState$classes2[className],
            rest = _objectWithoutProperties(_uiState$classes2, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return uiState.root.classList.contains(className);
      },
      hasAnchor: function hasAnchor() {
        return !!anchorElement;
      },
      notifyClose: function notifyClose() {
        emitCustomEvent(uiState.root, strings$6.CLOSED_EVENT, {});
        emit('change', false);
      },
      notifyOpen: function notifyOpen() {
        emitCustomEvent(uiState.root, strings$6.OPENED_EVENT, {});
        emit('change', true);
      },
      isElementInContainer: function isElementInContainer(el) {
        return uiState.root.contains(el);
      },
      isRtl: function isRtl() {
        return getComputedStyle(uiState.root).getPropertyValue('direction') === 'rtl';
      },
      setTransformOrigin: function setTransformOrigin(origin) {
        uiState.root.style.setProperty("".concat(getTransformPropertyName(window), "-origin"), origin);
      }
    };
    watch(function () {
      return props.open;
    }, function (nv) {
      return onOpen_(nv);
    });
    watch(function () {
      return props.quickOpen;
    }, function (nv) {
      return foundation.setQuickOpen(nv);
    });
    onMounted(function () {
      foundation = new MDCMenuSurfaceFoundation(_objectSpread2(_objectSpread2(_objectSpread2({}, adapter), getFocusAdapterMethods()), getDimensionAdapterMethods()));
      foundation.init();

      if (uiState.root.parentElement && uiState.root.parentElement.classList.contains(cssClasses$2.ANCHOR)) {
        anchorElement = uiState.root.parentElement;
      }
    });
    onBeforeUnmount(function () {
      previousFocus_ = null;
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootListeners: rootListeners,
      hoistMenuToBody: hoistMenuToBody,
      setFixedPosition: setFixedPosition,
      setAbsolutePosition: setAbsolutePosition,
      setAnchorCorner: setAnchorCorner,
      setAnchorMargin: setAnchorMargin,
      setMenuSurfaceAnchorElement: setMenuSurfaceAnchorElement,
      show: show,
      hide: hide,
      isOpen: isOpen,
      close: close
    });
  }
};

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes
  }, toHandlers(_ctx.rootListeners)), [
    renderSlot(_ctx.$slots, "default")
  ], 16 /* FULL_PROPS */))
}

script$l.render = render$l;
script$l.__file = "packages/menu/menu-surface.vue";

var cssClasses$3 = MDCMenuFoundation.cssClasses,
    strings$7 = MDCMenuFoundation.strings;
var DefaultFocusState_ = {
  NONE: 0,
  LIST_ROOT: 1,
  FIRST_ITEM: 2,
  LAST_ITEM: 3
};
var script$m = {
  name: 'mcw-menu',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: [Boolean, Object],
    quickOpen: Boolean,
    anchorCorner: [String, Number],
    anchorMargin: Object,
    fixed: Boolean,
    absolutePosition: Array,
    typeAhead: Boolean,
    singleSelection: Boolean,
    defaultFocusState: {
      type: String,
      default: function _default() {
        return 'LIST_ROOT';
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var uiState = reactive({
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true,
      menuSurface: null,
      list: null
    });
    var foundation;
    var rootEl;
    var items = computed(function () {
      var _uiState$list$listEle;

      return (_uiState$list$listEle = uiState.list.listElements) !== null && _uiState$list$listEle !== void 0 ? _uiState$list$listEle : [];
    });
    var surfaceOpen = computed({
      get: function get() {
        return uiState.menuOpen;
      },
      set: function set(value) {
        uiState.menuOpen = value;
      }
    });
    var wrapFocus = computed({
      get: function get() {
        return uiState.myWrapFocus;
      },
      set: function set(nv) {
        uiState.myWrapFocus = nv;
      }
    });
    var selectedIndex = computed(function () {
      var _uiState$list;

      return (_uiState$list = uiState.list) === null || _uiState$list === void 0 ? void 0 : _uiState$list.selIndex.value;
    });

    var layout = function layout() {
      var _uiState$list2;

      return (_uiState$list2 = uiState.list) === null || _uiState$list2 === void 0 ? void 0 : _uiState$list2.layout();
    };

    var handleAction = function handleAction(index) {
      foundation.handleItemAction(items.value[index].$el);
    };

    var handleKeydown = function handleKeydown(evt) {
      return foundation.handleKeydown(evt);
    };

    var handleMenuSurfaceOpened = function handleMenuSurfaceOpened() {
      return foundation.handleMenuSurfaceOpened();
    };

    var onChange = function onChange(item) {
      uiState.menuOpen = item;
      emit('change', item);
    };

    var listen = function listen(evtType, handler, options) {
      uiState.menuSurface.addEventListener(evtType, handler, options);
    };

    var unlisten = function unlisten(evtType, handler, options) {
      uiState.menuSurface.removeEventListener(evtType, handler, options);
    };

    var setDefaultFocusState = function setDefaultFocusState(focusState) {
      if (typeof focusState == 'string') {
        focusState = DefaultFocusState_[focusState];
      }

      foundation.setDefaultFocusState(focusState);
    };

    var setAnchorCorner = function setAnchorCorner(corner) {
      uiState.menuSurface.setAnchorCorner(corner);
    };

    var setAnchorElement = function setAnchorElement(element) {
      uiState.menuSurface.setMenuSurfaceAnchorElement(element);
    };

    var setSelectedIndex = function setSelectedIndex(index) {
      return uiState.list && (uiState.list.selIndex.value = index);
    };

    var setAnchorMargin = function setAnchorMargin(margin) {
      uiState.menuSurface.setAnchorMargin(margin);
    };

    var getOptionByIndex = function getOptionByIndex(index) {
      var itms = items.value;

      if (index < itms.length) {
        return itms[index];
      }

      return null;
    };

    var getPrimaryTextAtIndex = function getPrimaryTextAtIndex(index) {
      var item = getOptionByIndex(index);

      if (item && uiState.list) {
        return uiState.list.getPrimaryText(item) || '';
      }

      return '';
    };

    var setFixedPosition = function setFixedPosition(isFixed) {
      uiState.menuSurface.setFixedPosition(isFixed);
    };

    var hoistMenuToBody = function hoistMenuToBody() {
      uiState.menuSurface.hoistMenuToBody();
    };

    var setIsHoisted = function setIsHoisted(isHoisted) {
      uiState.menuSurface.setIsHoisted(isHoisted);
    };

    var setAbsolutePosition = function setAbsolutePosition(x, y) {
      uiState.menuSurface.setAbsolutePosition(x, y);
    };

    var typeaheadInProgress = function typeaheadInProgress() {
      var _uiState$list$typeAhe;

      return (_uiState$list$typeAhe = uiState.list.typeAheadInProgress) !== null && _uiState$list$typeAhe !== void 0 ? _uiState$list$typeAhe : false;
    };

    var typeaheadMatchItem = function typeaheadMatchItem(nextChar, startingIndex) {
      if (uiState.list) {
        return uiState.list.typeaheadMatchItem(nextChar, startingIndex);
      }

      return -1;
    };

    var adapter = {
      addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
        var item = items.value[index];
        item.classList.add(className);
      },
      removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
        var item = items.value[index];
        item.classList.remove(className);
      },
      addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
        var item = items.value[index];
        item.setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
        var item = items.value[index];
        item.removeAttribute(attr);
      },
      elementContainsClass: function elementContainsClass(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function closeSurface(skipRestoreFocus) {
        uiState.menuSurface.close(skipRestoreFocus);
        emit('change', false);
      },
      getElementIndex: function getElementIndex(element) {
        return items.value.findIndex(function (_ref2) {
          var $el = _ref2.$el;
          return $el == element;
        });
      },
      notifySelected: function notifySelected(evtData) {
        emitCustomEvent(rootEl, strings$7.SELECTED_EVENT, {
          index: evtData.index,
          item: items.value[evtData.index]
        });
        emit('select', {
          index: evtData.index,
          item: items.value[evtData.index]
        });
      },
      getMenuItemCount: function getMenuItemCount() {
        return items.value.length;
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        return items.value[index].$el.focus();
      },
      focusListRoot: function focusListRoot() {
        return uiState.menuSurface.querySelector(strings$7.LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
        return !!closest(items.value[index].$el, ".".concat(cssClasses$3.MENU_SELECTION_GROUP));
      },
      getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
        var selectionGroupEl = closest(items.value[index].$el, ".".concat(cssClasses$3.MENU_SELECTION_GROUP));
        var selectedItemEl = selectionGroupEl.querySelector(".".concat(cssClasses$3.MENU_SELECTED_LIST_ITEM));
        return selectedItemEl ? items.value.findIndex(function (_ref3) {
          var $el = _ref3.$el;
          return $el == selectedItemEl;
        }) : -1;
      }
    };
    watch(function () {
      return props.open;
    }, function (nv) {
      uiState.menuOpen = nv;
    });
    onMounted(function () {
      rootEl = uiState.menuSurface.$el;
      uiState.menuOpen = props.open;
      foundation = new MDCMenuFoundation(adapter);
      foundation.init();

      if (props.fixed) {
        uiState.menuSurface.setFixedPosition(props.fixed);
      }

      if (props.absolutePosition) {
        var _props$absolutePositi = _slicedToArray(props.absolutePosition, 2),
            x = _props$absolutePositi[0],
            y = _props$absolutePositi[1];

        uiState.menuSurface.setAbsolutePosition(x, y);
      }
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      handleAction: handleAction,
      handleKeydown: handleKeydown,
      onChange: onChange,
      handleMenuSurfaceOpened: handleMenuSurfaceOpened,
      setAbsolutePosition: setAbsolutePosition,
      setIsHoisted: setIsHoisted,
      hoistMenuToBody: hoistMenuToBody,
      setFixedPosition: setFixedPosition,
      getOptionByIndex: getOptionByIndex,
      setAnchorMargin: setAnchorMargin,
      setAnchorElement: setAnchorElement,
      setAnchorCorner: setAnchorCorner,
      setSelectedIndex: setSelectedIndex,
      listen: listen,
      unlisten: unlisten,
      setDefaultFocusState: setDefaultFocusState,
      wrapFocus: wrapFocus,
      surfaceOpen: surfaceOpen,
      layout: layout,
      selectedIndex: selectedIndex,
      getPrimaryTextAtIndex: getPrimaryTextAtIndex,
      items: items,
      typeaheadInProgress: typeaheadInProgress,
      typeaheadMatchItem: typeaheadMatchItem
    });
  }
};

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_list = resolveComponent("mcw-list");
  const _component_mcw_menu_surface = resolveComponent("mcw-menu-surface");

  return (openBlock(), createBlock(_component_mcw_menu_surface, {
    ref: "menuSurface",
    class: "mdc-menu",
    "quick-open": _ctx.quickOpen,
    open: _ctx.menuOpen,
    onKeydown: _ctx.handleKeydown,
    onChange: _ctx.onChange,
    "onMDCMenuSurface:opened": _ctx.handleMenuSurfaceOpened
  }, {
    default: withCtx(() => [
      createVNode(_component_mcw_list, {
        ref: "list",
        role: "menu",
        "aria-hidden": "true",
        "wrap-focus": _ctx.myWrapFocus,
        onChange: _ctx.handleAction,
        tabindex: "-1",
        "type-ahead": _ctx.typeAhead,
        "single-selection": _ctx.singleSelection
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8 /* PROPS */, ["wrap-focus", "onChange", "type-ahead", "single-selection"])
    ]),
    _: 1
  }, 8 /* PROPS */, ["quick-open", "open", "onKeydown", "onChange", "onMDCMenuSurface:opened"]))
}

script$m.render = render$m;
script$m.__file = "packages/menu/menu.vue";

var menu = BasePlugin({
  mcwMenu: script$m,
  mcwMenuSurface: script$l,
  mcwMenuItem: mcwMenuItem,
  mcwMenuAnchor: mcwMenuAnchor,
  mcwList: script$k
});

var cssClasses$4 = MDCNotchedOutlineFoundation.cssClasses;
var script$n = {
  name: 'mcw-notched-outline',
  components: {
    mcwFloatingLabel: script$c
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var uiState = reactive({
      outlinedClasses: {
        'mdc-notched-outline': true
      },
      notchStyles: {},
      labelEl: null
    });
    var foundation;
    var adapter = {
      addClass: function addClass(className) {
        return uiState.outlinedClasses = _objectSpread2(_objectSpread2({}, uiState.outlinedClasses), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$outlinedClas = uiState.outlinedClasses,
            removed = _uiState$outlinedClas[className],
            rest = _objectWithoutProperties(_uiState$outlinedClas, [className].map(_toPropertyKey));

        uiState.outlinedClasses = rest;
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return uiState.notchStyles = _objectSpread2(_objectSpread2({}, uiState.notchStyles), {}, {
          width: "".concat(width, "px")
        });
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        // eslint-disable-next-line no-unused-vars
        var _uiState$notchStyles = uiState.notchStyles,
            removed = _uiState$notchStyles.width,
            rest = _objectWithoutProperties(_uiState$notchStyles, ["width"]);

        uiState.notchStyles = rest;
      }
    };

    var notch = function notch(notchWidth) {
      foundation.notch(notchWidth);
    };

    var closeNotch = function closeNotch() {
      foundation.closeNotch();
    };

    var float = function float(shouldFloat) {
      var _uiState$labelEl;

      (_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.float(shouldFloat);
    };

    var shake = function shake(shouldShake) {
      var _uiState$labelEl2;

      (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.shake(shouldShake);
    };

    var getWidth = function getWidth() {
      var _uiState$labelEl3;

      return (_uiState$labelEl3 = uiState.labelEl) === null || _uiState$labelEl3 === void 0 ? void 0 : _uiState$labelEl3.getWidth();
    };

    onMounted(function () {
      foundation = new MDCNotchedOutlineFoundation(adapter);
      foundation.init();
      var key = slots.default ? cssClasses$4.OUTLINE_UPGRADED : cssClasses$4.NO_LABEL;
      uiState.outlinedClasses = _objectSpread2(_objectSpread2({}, uiState.outlinedClasses), {}, _defineProperty({}, key, true));
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      getWidth: getWidth,
      shake: shake,
      float: float,
      closeNotch: closeNotch,
      notch: notch
    });
  }
};

const _hoisted_1$e = /*#__PURE__*/createVNode("span", { class: "mdc-notched-outline__leading" }, null, -1 /* HOISTED */);
const _hoisted_2$b = /*#__PURE__*/createVNode("span", { class: "mdc-notched-outline__trailing" }, null, -1 /* HOISTED */);

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");

  return (openBlock(), createBlock("span", {
    ref: "outlined",
    class: _ctx.outlinedClasses
  }, [
    _hoisted_1$e,
    createVNode("span", {
      class: "mdc-notched-outline__notch",
      style: _ctx.notchStyles
    }, [
      (_ctx.$slots.default)
        ? createVNode(_component_mcw_floating_label, {
            key: 0,
            ref: "labelEl"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 512 /* NEED_PATCH */)
        : createCommentVNode("v-if", true)
    ], 4 /* STYLE */),
    _hoisted_2$b
  ], 2 /* CLASS */))
}

script$n.render = render$n;
script$n.__file = "packages/notched-outline/notched-outline.vue";

var notchedOutline = BasePlugin({
  mcwNotchedOutline: script$n
});

var radioId_ = 0;
var script$o = {
  name: 'mcw-radio',
  model: {
    prop: 'picked',
    event: 'change'
  },
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
    picked: String,
    disabled: Boolean,
    checked: Boolean
  },
  setup: function setup(props, _ref) {
    var _props$id;

    var emit = _ref.emit,
        attrs = _ref.attrs;
    var uiState = reactive({
      classes: {
        'mdc-radio': 1
      },
      controlEl: null,
      labelEl: null,
      root: null
    });

    var _useRipplePlugin = useRipplePlugin$1(toRef(uiState, 'root'), {
      isUnbounded: function isUnbounded() {
        return true;
      },
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: function isSurfaceActive() {
        return false;
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        uiState.controlEl.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        uiState.controlEl.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: function computeBoundingRect() {
        return uiState.root.getBoundingClientRect();
      }
    }),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles,
        activate = _useRipplePlugin.activate,
        deactivate = _useRipplePlugin.deactivate;

    var foundation;
    var formField;
    var radioId = (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : "__mcw-radio-".concat(radioId_++);
    var rootClasses = computed(function () {
      return _objectSpread2(_objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes), props.radioClasses);
    });
    var formFieldClasses = computed(function () {
      return {
        'mdc-form-field': 1,
        'mdc-form-field--align-end': props.alignEnd
      };
    });

    var onChange = function onChange() {
      var nativeValue = uiState.controlEl.value;
      nativeValue != props.picked && emit('change', uiState.controlEl.value);
    };

    var setChecked = function setChecked(checked) {
      uiState.controlEl.checked = checked;
    };

    var onPicked = function onPicked(nv) {
      setChecked(nv == uiState.controlEl.value);
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return uiState.controlEl && uiState.controlEl.disabled == disabled;
      }
    };
    watch(function () {
      return props.checked;
    }, function (nv) {
      setChecked(nv);
    });
    watch(function () {
      return props.disabled;
    }, function (nv) {
      foundation.setDisabled(nv);
    });
    watch(function () {
      return props.picked;
    }, function (nv) {
      onPicked(nv);
    });
    onMounted(function () {
      foundation = new MDCRadioFoundation(adapter);
      formField = new MDCFormFieldFoundation({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          var _uiState$labelEl;

          return (_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          var _uiState$labelEl2;

          return (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          activate();
        },
        deactivateInputRipple: function deactivateInputRipple() {
          deactivate();
        }
      });
      foundation.init();
      formField.init();
      var checked = props.checked,
          disabled = props.disabled,
          picked = props.picked,
          value = props.value;
      foundation.setDisabled(disabled);
      setChecked(checked || picked == value); // if checked, need to sync any change of value

      checked && onChange();
    });
    onBeforeUnmount(function () {
      foundation.destroy();
      formField.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses: rootClasses,
      formFieldClasses: formFieldClasses,
      styles: styles,
      onChange: onChange,
      onPicked: onPicked,
      setChecked: setChecked,
      radioId: radioId
    });
  }
};

const _hoisted_1$f = /*#__PURE__*/createVNode("div", { class: "mdc-radio__background" }, [
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__outer-circle" }),
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__inner-circle" })
], -1 /* HOISTED */);
const _hoisted_2$c = /*#__PURE__*/createVNode("div", { class: "mdc-radio__ripple" }, null, -1 /* HOISTED */);
const _hoisted_3$8 = /*#__PURE__*/createVNode("div", { class: "mdc-radio__background" }, [
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__outer-circle" }),
  /*#__PURE__*/createVNode("div", { class: "mdc-radio__inner-circle" })
], -1 /* HOISTED */);
const _hoisted_4$6 = /*#__PURE__*/createVNode("div", { class: "mdc-radio__ripple" }, null, -1 /* HOISTED */);

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
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
            onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.onChange(...args)))
          }, _ctx.$attrs, {
            value: _ctx.value,
            checked: _ctx.picked==_ctx.value,
            disabled: _ctx.disabled
          }), null, 16 /* FULL_PROPS */, ["id", "name", "value", "checked", "disabled"]),
          _hoisted_1$f,
          _hoisted_2$c
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
          onChange: _cache[2] || (_cache[2] = (...args) => (_ctx.onChange(...args)))
        }, _ctx.$attrs, {
          value: _ctx.value,
          checked: _ctx.picked==_ctx.value,
          disabled: _ctx.disabled
        }), null, 16 /* FULL_PROPS */, ["id", "name", "value", "checked", "disabled"]),
        _hoisted_3$8,
        _hoisted_4$6
      ], 6 /* CLASS, STYLE */))
}

script$o.render = render$o;
script$o.__file = "packages/radio/radio.vue";

var radio = BasePlugin({
  mcwRadio: script$o
});

var SelectHelperText = {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    helptext: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var uiState = reactive({
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': props.helptextPersistent,
        'mdc-select-helper-text--validation-msg': props.helptextValidation
      },
      attrs: {
        'aria-hidden': 'true'
      },
      myHelptext: props.helptext
    });
    var foundation;
    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return Boolean(uiState.classes[className]);
      },
      setAttr: function setAttr(attr, value) {
        return uiState.attrs = _objectSpread2(_objectSpread2({}, uiState.attrs), {}, _defineProperty({}, attr, value));
      },
      removeAttr: function removeAttr(attr) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$attrs = uiState.attrs,
            removed = _uiState$attrs[attr],
            rest = _objectWithoutProperties(_uiState$attrs, [attr].map(_toPropertyKey));

        uiState.attrs = rest;
      },
      setContent: function setContent(content) {
        uiState.myHelptext = content;
      }
    };
    watch(function () {
      return props.helptextPersistent;
    }, function (nv) {
      return foundation.setPersistent(nv);
    });
    watch(function () {
      return props.helptextValidation;
    }, function (nv) {
      return foundation.setValidation(nv);
    });
    watch(function () {
      return props.helptext;
    }, function (nv) {
      return uiState.myHelptext = nv;
    });
    onMounted(function () {
      foundation = new MDCSelectHelperTextFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return function () {
      return h('p', {
        class: uiState.classes,
        attrs: uiState.attrs
      }, [uiState.myHelptext]);
    };
  }
};

var script$p = {
  name: 'select-icon',
  props: {
    icon: String
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        $listeners = _ref.listeners;
    var uiState = reactive({
      classes: {
        'material-icons': true,
        'mdc-select__icon': true
      },
      styles: {},
      root: null,
      rootAttrs: {},
      rootListeners: {}
    });
    var foundation;
    var listeners = computed(function () {
      return _objectSpread2(_objectSpread2({}, $listeners), uiState.rootListeners);
    });
    var adapter = {
      getAttr: function getAttr(attr) {
        return uiState.rootAttrs[attr];
      },
      setAttr: function setAttr(attr, value) {
        return uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, _defineProperty({}, attr, value));
      },
      removeAttr: function removeAttr(attr) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$rootAttrs = uiState.rootAttrs,
            removed = _uiState$rootAttrs[attr],
            rest = _objectWithoutProperties(_uiState$rootAttrs, [attr].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setContent: function setContent(content) {
        uiState.root.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return uiState.rootListeners = _objectSpread2(_objectSpread2({}, uiState.rootListeners), {}, _defineProperty({}, evtType, handler));
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$rootListener = uiState.rootListeners,
            removed = _uiState$rootListener[evtType],
            rest = _objectWithoutProperties(_uiState$rootListener, [evtType].map(_toPropertyKey));

        uiState.rootListeners = rest;
      },
      notifyIconAction: function notifyIconAction() {
        emit('click');
        emitCustomEvent(uiState.root, MDCSelectIconFoundation.strings.ICON_EVENT, {}, true
        /* shouldBubble  */
        );
      }
    };
    onMounted(function () {
      foundation = new MDCSelectIconFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      listeners: listeners
    });
  }
};

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", mergeProps({
    ref: "root",
    class: _ctx.classes,
    style: _ctx.styles
  }, toHandlers(_ctx.rootListeners), _ctx.rootAttrs), toDisplayString(_ctx.icon), 17 /* TEXT, FULL_PROPS */))
}

script$p.render = render$p;
script$p.__file = "packages/select/select-icon.vue";

var strings$8 = MDCSelectFoundation.strings,
    cssClasses$5 = MDCSelectFoundation.cssClasses;
var uid_ = 0;
var script$q = {
  name: 'mcw-select',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
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
      default: function _default() {
        return true;
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var uiState = reactive({
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
    var rippleClasses;
    var rippleStyles;

    if (props.outlined) {
      var _useRipplePlugin = useRipplePlugin$1(toRef(uiState, 'anchorEl'), {
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          uiState.anchorEl.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          uiState.anchorEl.removeEventListener(evtType, handler);
        }
      }),
          classes = _useRipplePlugin.classes,
          styles = _useRipplePlugin.styles;

      rippleClasses = classes;
      rippleStyles = styles;
    }

    var rootClasses = computed(function () {
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
    var menuItems = computed(function () {
      var _uiState$menu;

      return (_uiState$menu = uiState.menu) === null || _uiState$menu === void 0 ? void 0 : _uiState$menu.items;
    });
    var foundation;

    var handleFocus = function handleFocus() {
      return foundation.handleFocus();
    };

    var handleBlur = function handleBlur() {
      return foundation.handleBlur();
    };

    var handleClick = function handleClick(evt) {
      uiState.anchorEl.focus();
      handleFocus();
      foundation.handleClick(getNormalizedXCoordinate(evt));
    };

    var handleKeydown = function handleKeydown(evt) {
      return foundation.handleKeydown(evt);
    };

    var handleChange = function handleChange(isOpen) {
      return foundation["handleMenu".concat(isOpen ? 'Opened' : 'Closed')]();
    };

    var layout = function layout() {
      return foundation.layout();
    };

    var selectedIndex = function selectedIndex() {
      return foundation.getSelectedIndex();
    };

    var handleMenuOpened = function handleMenuOpened() {
      return foundation.handleMenuOpened();
    };

    var handleMenuClosed = function handleMenuClosed() {
      return foundation.handleMenuClosed();
    };

    var handleMenuItemAction = function handleMenuItemAction(_ref2) {
      var index = _ref2.index;
      return foundation.handleMenuItemAction(index);
    };

    var layoutOptions = function layoutOptions() {
      foundation.layoutOptions();
      uiState.menu.layout();
    };

    var selectedTextAttrs = computed(function () {
      var attrs = _objectSpread2({}, uiState.selTextAttrs);

      if (props.helptext) {
        attrs['aria-controls'] = uiState.helpId;
        attrs['aria-describedBy'] = uiState.helpId;
      }

      return attrs;
    });
    var adapter = {
      // select methods
      getSelectedMenuItem: function getSelectedMenuItem() {
        var x = menuItems.value.find(function (item) {
          return item.classList.contains(cssClasses$5.SELECTED_ITEM_CLASS);
        });
        return x === null || x === void 0 ? void 0 : x.$el;
      },
      getMenuItemAttr: function getMenuItemAttr(menuItem, attr) {
        return menuItem.getAttribute(attr);
      },
      setSelectedText: function setSelectedText(text) {
        uiState.selectedTextContent = text;
      },
      isSelectAnchorFocused: function isSelectAnchorFocused() {
        return document.activeElement === uiState.anchorEl;
      },
      getSelectAnchorAttr: function getSelectAnchorAttr(attr) {
        return uiState.selectAnchorAttrs[attr];
      },
      setSelectAnchorAttr: function setSelectAnchorAttr(attr, value) {
        return uiState.selectAnchorAttrs = _objectSpread2(_objectSpread2({}, uiState.selectAnchorAttrs), {}, _defineProperty({}, attr, value));
      },
      removeSelectAnchorAttr: function removeSelectAnchorAttr(attr) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$selectAnchor = uiState.selectAnchorAttrs,
            removed = _uiState$selectAnchor[attr],
            rest = _objectWithoutProperties(_uiState$selectAnchor, [attr].map(_toPropertyKey));

        uiState.selectAnchorAttrs = rest;
      },
      addMenuClass: function addMenuClass(className) {
        return uiState.menuClasses = _objectSpread2(_objectSpread2({}, uiState.menuClasses), {}, _defineProperty({}, className, true));
      },
      removeMenuClass: function removeMenuClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$menuClasses = uiState.menuClasses,
            removed = _uiState$menuClasses[className],
            rest = _objectWithoutProperties(_uiState$menuClasses, [className].map(_toPropertyKey));

        uiState.menuClasses = rest;
      },
      openMenu: function openMenu() {
        return uiState.menu.surfaceOpen = true;
      },
      closeMenu: function closeMenu() {
        return uiState.menu.surfaceOpen = false;
      },
      getAnchorElement: function getAnchorElement() {
        return uiState.anchorEl;
      },
      setMenuAnchorElement: function setMenuAnchorElement(anchorEl) {
        return uiState.menu.setAnchorElement(anchorEl);
      },
      setMenuAnchorCorner: function setMenuAnchorCorner(anchorCorner) {
        return uiState.menu.setAnchorCorner(anchorCorner);
      },
      setMenuWrapFocus: function setMenuWrapFocus(wrapFocus) {
        return uiState.menu.wrapFocus = wrapFocus;
      },
      getSelectedIndex: function getSelectedIndex() {
        var index = uiState.menu.selectedIndex;
        return index instanceof Array ? index[0] : index;
      },
      setSelectedIndex: function setSelectedIndex(index) {
        uiState.menu.selectedIndex = index;
      },
      setAttributeAtIndex: function setAttributeAtIndex(index, attributeName, attributeValue) {
        return menuItems.value[index].setAttribute(attributeName, attributeValue);
      },
      removeAttributeAtIndex: function removeAttributeAtIndex(index, attributeName) {
        return menuItems.value[index].removeAttribute(attributeName);
      },
      focusMenuItemAtIndex: function focusMenuItemAtIndex(index) {
        return menuItems.value[index].$el.focus();
      },
      getMenuItemCount: function getMenuItemCount() {
        return menuItems.value.length;
      },
      getMenuItemValues: function getMenuItemValues() {
        return menuItems.value.map(function (el) {
          return el.getAttribute(strings$8.VALUE_ATTR) || '';
        });
      },
      getMenuItemTextAtIndex: function getMenuItemTextAtIndex(index) {
        return menuItems.value[index].$el.textContent;
      },
      addClassAtIndex: function addClassAtIndex(index, className) {
        menuItems.value[index].classList.add(className);
      },
      removeClassAtIndex: function removeClassAtIndex(index, className) {
        return menuItems.value[index].classList.remove(className);
      },
      isTypeaheadInProgress: function isTypeaheadInProgress() {
        return uiState.menu.typeaheadInProgress();
      },
      typeaheadMatchItem: function typeaheadMatchItem(nextChar, startingIndex) {
        var _uiState$menu2;

        return (_uiState$menu2 = uiState.menu) === null || _uiState$menu2 === void 0 ? void 0 : _uiState$menu2.typeaheadMatchItem(nextChar, startingIndex);
      },
      // common methods
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return Boolean(rootClasses.value[className]);
      },
      setRippleCenter: function setRippleCenter(normalizedX) {
        var _uiState$lineRippleEl;

        return (_uiState$lineRippleEl = uiState.lineRippleEl) === null || _uiState$lineRippleEl === void 0 ? void 0 : _uiState$lineRippleEl.setRippleCenter(normalizedX);
      },
      activateBottomLine: function activateBottomLine() {
        var _uiState$lineRippleEl2;

        return (_uiState$lineRippleEl2 = uiState.lineRippleEl) === null || _uiState$lineRippleEl2 === void 0 ? void 0 : _uiState$lineRippleEl2.activate();
      },
      deactivateBottomLine: function deactivateBottomLine() {
        var _uiState$lineRippleEl3;

        return (_uiState$lineRippleEl3 = uiState.lineRippleEl) === null || _uiState$lineRippleEl3 === void 0 ? void 0 : _uiState$lineRippleEl3.deactivate();
      },
      notifyChange: function notifyChange(value) {
        var index = selectedIndex();
        emitCustomEvent(uiState.root, strings$8.CHANGE_EVENT, {
          value: value,
          index: index
        }, true
        /* shouldBubble  */
        );
        value != props.value && emit('change', value);
      },
      // outline methods
      hasOutline: function hasOutline() {
        return props.outlined;
      },
      notchOutline: function notchOutline(labelWidth) {
        var _uiState$outlineEl;

        return (_uiState$outlineEl = uiState.outlineEl) === null || _uiState$outlineEl === void 0 ? void 0 : _uiState$outlineEl.notch(labelWidth);
      },
      closeOutline: function closeOutline() {
        var _uiState$outlineEl2;

        return (_uiState$outlineEl2 = uiState.outlineEl) === null || _uiState$outlineEl2 === void 0 ? void 0 : _uiState$outlineEl2.closeNotch();
      },
      // label methods
      hasLabel: function hasLabel() {
        return !!props.label;
      },
      floatLabel: function floatLabel(shouldFloat) {
        return (uiState.labelEl || uiState.outlineEl).float(shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        var _uiState$labelEl;

        return (_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.getWidth();
      },
      setLabelRequired: function setLabelRequired(isRequired) {
        var _uiState$labelEl2;

        return (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.setRequired(isRequired);
      }
    };

    var setFixedPosition = function setFixedPosition(isFixed) {
      return uiState.menu.setFixedPosition(isFixed);
    };

    var refreshIndex = function refreshIndex() {
      var items = menuItems.value.map(function (el) {
        return el.getAttribute(strings$8.VALUE_ATTR) || '';
      });
      var idx = items.findIndex(function (value) {
        return props.value === value;
      });
      foundation.setSelectedIndex(idx);
    };

    watch(function () {
      return props.disabled;
    }, function (nv) {
      var _foundation;

      return (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.updateDisabledStyle(nv);
    });
    watch(function () {
      return props.value;
    }, function () {
      refreshIndex();
    });
    onMounted(function () {
      var _uiState$helperTextEl, _uiState$leadingIconE;

      foundation = new MDCSelectFoundation(adapter, {
        helperText: (_uiState$helperTextEl = uiState.helperTextEl) === null || _uiState$helperTextEl === void 0 ? void 0 : _uiState$helperTextEl.foundation,
        leadingIcon: (_uiState$leadingIconE = uiState.leadingIconEl) === null || _uiState$leadingIconE === void 0 ? void 0 : _uiState$leadingIconE.foundation
      });
      foundation = new MDCSelectFoundation(adapter);
      foundation.init(); // initial sync with DOM

      refreshIndex(); // do we need a slotObserver here?
      // this.slotObserver = new MutationObserver(() => this.refreshIndex());
      // this.slotObserver.observe(this.$refs.native_control, {
      //   childList: true,
      //   subtree: true,
      // });
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses: rootClasses,
      handleBlur: handleBlur,
      handleFocus: handleFocus,
      handleClick: handleClick,
      handleChange: handleChange,
      handleKeydown: handleKeydown,
      layout: layout,
      layoutOptions: layoutOptions,
      rippleClasses: rippleClasses,
      rippleStyles: rippleStyles,
      selectedTextAttrs: selectedTextAttrs,
      handleMenuItemAction: handleMenuItemAction,
      refreshIndex: refreshIndex,
      setFixedPosition: setFixedPosition,
      handleMenuOpened: handleMenuOpened,
      handleMenuClosed: handleMenuClosed
    });
  },
  components: {
    SelectHelperText: SelectHelperText,
    SelectIcon: script$p
  }
}; // ===
// Private functions
// ===

function getNormalizedXCoordinate(evt) {
  var targetClientRect = evt.target.getBoundingClientRect();
  var xCoordinate = evt.clientX;
  return xCoordinate - targetClientRect.left;
}

const _hoisted_1$g = { class: "select-wrapper" };
const _hoisted_2$d = {
  key: 1,
  class: "mdc-select__ripple"
};
const _hoisted_3$9 = { class: "mdc-select__selected-text" };
const _hoisted_4$7 = /*#__PURE__*/createVNode("span", { class: "mdc-select__dropdown-icon" }, [
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

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_select_icon = resolveComponent("select-icon");
  const _component_mcw_notched_outline = resolveComponent("mcw-notched-outline");
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");
  const _component_mcw_line_ripple = resolveComponent("mcw-line-ripple");
  const _component_mcw_menu = resolveComponent("mcw-menu");
  const _component_select_helper_text = resolveComponent("select-helper-text");

  return (openBlock(), createBlock("div", _hoisted_1$g, [
    createVNode("div", {
      ref: "root",
      class: _ctx.rootClasses
    }, [
      createVNode("div", mergeProps({
        ref: "anchorEl",
        class: ["mdc-select__anchor", _ctx.rippleClasses],
        style: _ctx.rippleStyles,
        onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick(...args))),
        onKeydown: _cache[2] || (_cache[2] = (...args) => (_ctx.handleKeydown(...args))),
        onFocus: _cache[3] || (_cache[3] = (...args) => (_ctx.handleFocus(...args))),
        onBlur: _cache[4] || (_cache[4] = (...args) => (_ctx.handleBlur(...args)))
      }, _ctx.selectAnchorAttrs, {
        role: "button",
        "aria-haspopup": "listbox",
        "aria-required": _ctx.required
      }), [
        (_ctx.leadingIcon)
          ? createVNode(_component_select_icon, {
              key: 0,
              ref: "leadingIconEl",
              icon: _ctx.leadingIcon,
              tabindex: "0",
              role: "button"
            }, null, 8 /* PROPS */, ["icon"])
          : createCommentVNode("v-if", true),
        (!_ctx.outlined)
          ? (openBlock(), createBlock("span", _hoisted_2$d))
          : createCommentVNode("v-if", true),
        createVNode("span", _hoisted_3$9, toDisplayString(_ctx.selectedTextContent), 1 /* TEXT */),
        _hoisted_4$7,
        (_ctx.outlined)
          ? createVNode(_component_mcw_notched_outline, {
              key: 2,
              ref: "outlineEl"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
              ]),
              _: 1
            }, 512 /* NEED_PATCH */)
          : (openBlock(), createBlock(Fragment, { key: 3 }, [
              createVNode(_component_mcw_floating_label, { ref: "labelEl" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1
              }, 512 /* NEED_PATCH */),
              createVNode(_component_mcw_line_ripple, { ref: "lineRippleEl" }, null, 512 /* NEED_PATCH */)
            ], 64 /* STABLE_FRAGMENT */))
      ], 16 /* FULL_PROPS */, ["aria-required"]),
      createVNode(_component_mcw_menu, {
        ref: "menu",
        class: ["mdc-select__menu", _ctx.menuClasses],
        onChange: _ctx.handleChange,
        onSelect: _ctx.handleMenuItemAction,
        "onMDCMenuSurface:opened": _ctx.handleMenuOpened,
        "onMDCMenuSurface:closed": _ctx.handleMenuClosed,
        role: "listbox"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8 /* PROPS */, ["class", "onChange", "onSelect", "onMDCMenuSurface:opened", "onMDCMenuSurface:closed"])
    ], 2 /* CLASS */),
    (_ctx.helptext)
      ? createVNode(_component_select_helper_text, {
          key: 0,
          ref: "helperTextEl",
          id: _ctx.helpId,
          helptextPersistent: _ctx.helptextPersistent,
          helptextValidation: _ctx.helptextValidation,
          helptext: _ctx.helptext
        }, null, 8 /* PROPS */, ["id", "helptextPersistent", "helptextValidation", "helptext"])
      : createCommentVNode("v-if", true)
  ]))
}

script$q.render = render$q;
script$q.__file = "packages/select/select.vue";

var select = BasePlugin({
  mcwSelect: script$q,
  mcwNotchedOutline: script$n,
  mcwLineRipple: script$h,
  mcwFloatingLabel: script$c
});

var script$r = {
  name: 'mcw-slider',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [Number, String],
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
      default: 0
    },
    discrete: Boolean,
    displayMarkers: Boolean,
    disabled: Boolean,
    layoutOn: String,
    layoutOnSource: {
      type: Object,
      required: false
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        $root = _ref.root;
    var stepSize = props.step;

    if (props.discrete && !stepSize) {
      stepSize = 1;
    }

    var uiState = reactive({
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': props.discrete,
        'mdc-slider--display-markers': props.discrete && props.displayMarkers
      },
      sliderAttrs: {},
      trackStyles: {},
      lastTrackMarkersStyles: {},
      markerBkgdShorthand: {},
      thumbStyles: {},
      markerValue: '',
      numMarkers: 0,
      stepSize: stepSize,
      root: null,
      thumbContainer: null
    });
    var foundation;
    var layoutOnEventSource;
    var hasMarkers = computed(function () {
      return props.discrete && props.displayMarkers;
    });
    var adapter = {
      hasClass: function hasClass(className) {
        return uiState.root.classList.contains(className);
      },
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      getAttribute: function getAttribute(name) {
        return uiState.root.getAttribute(name);
      },
      setAttribute: function setAttribute(name, value) {
        return uiState.sliderAttrs = _objectSpread2(_objectSpread2({}, uiState.sliderAttrs), {}, _defineProperty({}, name, value));
      },
      removeAttribute: function removeAttribute(name) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$sliderAttrs = uiState.sliderAttrs,
            removed = _uiState$sliderAttrs[name],
            rest = _objectWithoutProperties(_uiState$sliderAttrs, [name].map(_toPropertyKey));

        uiState.sliderAttrs = rest;
      },
      computeBoundingRect: function computeBoundingRect() {
        return uiState.root.getBoundingClientRect();
      },
      getTabIndex: function getTabIndex() {
        return uiState.root.tabIndex;
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        uiState.root.addEventListener(type, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        uiState.root.removeEventListener(type, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
        uiState.thumbContainer.addEventListener(type, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
        uiState.thumbContainer.removeEventListener(type, handler, applyPassive());
      },
      registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        window.removeEventListener('resize', handler);
      },
      notifyInput: function notifyInput() {
        emit('input', foundation.getValue());
      },
      notifyChange: function notifyChange() {
        emit('change', foundation.getValue());
      },
      setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
        return uiState.thumbStyles = _objectSpread2(_objectSpread2({}, uiState.thumbStyles), {}, _defineProperty({}, propertyName, value));
      },
      setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
        return uiState.trackStyles = _objectSpread2(_objectSpread2({}, uiState.trackStyles), {}, _defineProperty({}, propertyName, value));
      },
      setMarkerValue: function setMarkerValue(value) {
        uiState.markerValue = value;
      },
      setTrackMarkers: function setTrackMarkers(step, max, min) {
        var stepStr = step.toLocaleString();
        var maxStr = max.toLocaleString();
        var minStr = min.toLocaleString(); // keep calculation in css for better rounding/subpixel behavior

        var markerAmount = "((".concat(maxStr, " - ").concat(minStr, ") / ").concat(stepStr, ")");
        var markerWidth = "2px";
        var markerBkgdImage = "linear-gradient(to right, currentColor ".concat(markerWidth, ", transparent 0)");
        var markerBkgdLayout = "0 center / calc((100% - ".concat(markerWidth, ") / ").concat(markerAmount, ") 100% repeat-x");
        var markerBkgdShorthand = "".concat(markerBkgdImage, " ").concat(markerBkgdLayout);
        uiState.markerBkgdShorthand = _objectSpread2(_objectSpread2({}, uiState.markerBkgdShorthand), {}, _defineProperty({}, 'background', markerBkgdShorthand));
      },
      isRTL: function isRTL() {
        return getComputedStyle(uiState.root).direction === 'rtl';
      }
    };

    var layout = function layout() {
      $root.$nextTick(function () {
        var _foundation;

        (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.layout();
      });
    };

    watch(function () {
      return props.value;
    }, function (nv) {
      if (foundation.getValue() !== Number(nv)) {
        foundation.setValue(nv);
      }
    });
    watch(function () {
      return props.min;
    }, function (nv) {
      foundation.setMin(Number(nv));
    });
    watch(function () {
      return props.max;
    }, function (nv) {
      foundation.setMax(Number(nv));
    });
    watch(function () {
      return props.step;
    }, function (nv) {
      foundation.setStep(Number(nv));
    });
    watch(function () {
      return props.disabled;
    }, function (nv) {
      foundation.setDisabled(nv);
    });
    onMounted(function () {
      foundation = new MDCSliderFoundation(adapter);
      foundation.init();
      foundation.setDisabled(props.disabled);

      if (Number(props.min) <= foundation.getMax()) {
        foundation.setMin(Number(props.min));
        foundation.setMax(Number(props.max));
      } else {
        foundation.setMax(Number(props.max));
        foundation.setMin(Number(props.min));
      }

      foundation.setStep(Number(uiState.stepSize));
      foundation.setValue(Number(props.value));

      if (hasMarkers.value) {
        foundation.setupTrackMarker();
      }

      $root.$on('vma:layout', layout);

      if (props.layoutOn) {
        var _props$layoutOnSource;

        layoutOnEventSource = (_props$layoutOnSource = props.layoutOnSource) !== null && _props$layoutOnSource !== void 0 ? _props$layoutOnSource : $root;
        layoutOnEventSource.$on(props.layoutOn, layout);
      }
    });
    onBeforeUnmount(function () {
      $root.$off('vma:layout', layout);

      if (layoutOnEventSource) {
        layoutOnEventSource.$off(props.layoutOn, layout);
      }

      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      hasMarkers: hasMarkers
    });
  }
};

const _hoisted_1$h = { class: "mdc-slider__track-container" };
const _hoisted_2$e = {
  key: 0,
  class: "mdc-slider__pin"
};
const _hoisted_3$a = { class: "mdc-slider__pin-value-marker" };
const _hoisted_4$8 = /*#__PURE__*/createVNode("svg", {
  class: "mdc-slider__thumb",
  width: "21",
  height: "21"
}, [
  /*#__PURE__*/createVNode("circle", {
    cx: "10.5",
    cy: "10.5",
    r: "7.875"
  })
], -1 /* HOISTED */);
const _hoisted_5$3 = /*#__PURE__*/createVNode("div", { class: "mdc-slider__focus-ring" }, null, -1 /* HOISTED */);

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes
  }, _ctx.sliderAttrs, {
    tabindex: "0",
    role: "slider",
    "aria-label": "Select value"
  }), [
    createVNode("div", _hoisted_1$h, [
      createVNode("div", {
        style: _ctx.trackStyles,
        class: "mdc-slider__track"
      }, null, 4 /* STYLE */),
      (_ctx.hasMarkers)
        ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mdc-slider__track-marker-container",
            style: _ctx.markerBkgdShorthand,
            ref: "trackMarkerContainer"
          }, null, 4 /* STYLE */))
        : createCommentVNode("v-if", true)
    ]),
    createVNode("div", {
      ref: "thumbContainer",
      style: _ctx.thumbStyles,
      class: "mdc-slider__thumb-container"
    }, [
      (_ctx.discrete)
        ? (openBlock(), createBlock("div", _hoisted_2$e, [
            createVNode("span", _hoisted_3$a, toDisplayString(_ctx.markerValue), 1 /* TEXT */)
          ]))
        : createCommentVNode("v-if", true),
      _hoisted_4$8,
      _hoisted_5$3
    ], 4 /* STYLE */)
  ], 16 /* FULL_PROPS */))
}

script$r.render = render$r;
script$r.__file = "packages/slider/slider.vue";

var slider = BasePlugin({
  mcwSlider: script$r
});

var noop = function noop() {};

var script$s = {
  name: 'mcw-snackbar-queue',
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        $listeners = _ref.$listeners,
        $root = _ref.root;
    var uiState = reactive({
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
    var actionHandler_;

    var handleSnack = function handleSnack(_ref2) {
      var _ref2$timeoutMs = _ref2.timeoutMs,
          timeoutMs = _ref2$timeoutMs === void 0 ? 5000 : _ref2$timeoutMs,
          closeOnEscape = _ref2.closeOnEscape,
          _ref2$message = _ref2.message,
          message = _ref2$message === void 0 ? '' : _ref2$message,
          _ref2$actionText = _ref2.actionText,
          actionText = _ref2$actionText === void 0 ? '' : _ref2$actionText,
          _ref2$dismissAction = _ref2.dismissAction,
          dismissAction = _ref2$dismissAction === void 0 ? true : _ref2$dismissAction,
          stacked = _ref2.stacked,
          leading = _ref2.leading,
          _ref2$actionHandler = _ref2.actionHandler,
          actionHandler = _ref2$actionHandler === void 0 ? noop : _ref2$actionHandler;
      uiState.queue.push(function () {
        uiState.snack = {
          timeoutMs: timeoutMs,
          closeOnEscape: closeOnEscape,
          message: message,
          actionText: actionText,
          actionHandler: actionHandler,
          dismissAction: dismissAction,
          stacked: stacked,
          leading: leading
        };
        actionHandler_ = actionHandler;
        uiState.open = true;
      });

      if (uiState.queue.length === 1) {
        uiState.queue[0]();
      }
    };

    var handleClosed = function handleClosed() {
      uiState.open = false;
      uiState.queue.shift();

      if (uiState.queue.length > 0) {
        $root.$nextTick(function () {
          return uiState.queue[0]();
        });
      }
    };

    var listeners = computed(function () {
      return _objectSpread2(_objectSpread2({}, $listeners), {}, {
        'MDCSnackbar:closed': function MDCSnackbarClosed(_ref3) {
          var reason = _ref3.reason;

          if (actionHandler_ && reason === 'action') {
            actionHandler_({
              reason: reason
            });
          }

          handleClosed();
          emit('closed', {
            reason: reason
          });
        }
      });
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      handleSnack: handleSnack,
      listeners: listeners
    });
  }
};

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_snackbar = resolveComponent("mcw-snackbar");

  return (openBlock(), createBlock(_component_mcw_snackbar, mergeProps({ open: _ctx.open }, _ctx.snack, toHandlers(_ctx.listeners)), null, 16 /* FULL_PROPS */, ["open"]))
}

script$s.render = render$s;
script$s.__file = "packages/snackbar/snackbar-queue.vue";

var strings$9 = MDCSnackbarFoundation.strings,
    numbers = MDCSnackbarFoundation.numbers;
var script$t = {
  name: 'mcw-snackbar',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: Boolean,
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
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var uiState = reactive({
      classes: {},
      hidden: false,
      actionHidden: false,
      showMessage: true,
      labelEl: null
    });
    var foundation;
    var rootClasses = computed(function () {
      return _objectSpread2({
        'mdc-snackbar': 1,
        'mdc-snackbar--leading': props.leading,
        'mdc-snackbar--stacked': props.stacked
      }, uiState.classes);
    });
    var showDismissAction = computed(function () {
      return typeof props.dismissAction === 'string' ? props.dismissAction != 'false' : props.dismissAction;
    });

    var handleKeydownEvent = function handleKeydownEvent(evt) {
      return foundation.handleKeyDown(evt);
    };

    var _announce = function announce(ariaEl) {
      var labelEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ariaEl;
      var priority = ariaEl.getAttribute('aria-live');
      var text = props.message;

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

      labelEl.setAttribute(strings$9.ARIA_LIVE_LABEL_TEXT_ATTR, props.message);
      setTimeout(function () {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

        labelEl.removeAttribute(strings$9.ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

        uiState.showMessage = true;
      }, numbers.ARIA_LIVE_DELAY_MS);
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      announce: function announce() {
        return _announce(uiState.labelEl);
      },
      notifyClosed: function notifyClosed(reason) {
        emit(strings$9.CLOSED_EVENT, reason ? {
          reason: reason
        } : {});
        emit('change', false);
        emit('hide');
      },
      notifyClosing: function notifyClosing(reason) {
        emit(strings$9.CLOSING_EVENT, reason ? {
          reason: reason
        } : {});
        emit('update:reason', reason);
      },
      notifyOpened: function notifyOpened() {
        emit(strings$9.OPENED_EVENT, {});
        emit('change', true);
        emit('show', {});
      },
      notifyOpening: function notifyOpening() {
        return emit(strings$9.OPENING_EVENT, {});
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      }
    };

    var surfaceClickHandler = function surfaceClickHandler(evt) {
      if (isActionButton_(evt.target)) {
        foundation.handleActionButtonClick(evt);
      } else if (isActionIcon_(evt.target)) {
        foundation.handleActionIconClick(evt);
      }
    };

    watch(function () {
      return props.open;
    }, function (nv) {
      if (nv) {
        foundation.open();
      } else {
        foundation.close(props.reason ? props.reason : '');
      }
    });
    watch(function () {
      return props.timeoutMs;
    }, function (nv) {
      if (nv !== void 0) {
        foundation.setTimeoutMs(nv);
      }
    });
    watch(function () {
      return props.closeOnEscape;
    }, function (nv) {
      return foundation.setCloseOnEscape(nv);
    });
    onMounted(function () {
      window.addEventListener('keydown', handleKeydownEvent);
      foundation = new MDCSnackbarFoundation(adapter);
      foundation.init();

      if (props.timeoutMs !== void 0) {
        foundation.setTimeoutMs(props.timeoutMs);
      }

      foundation.setCloseOnEscape(props.closeOnEscape);
    });
    onBeforeUnmount(function () {
      window.removeEventListener('keydown', handleKeydownEvent);
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      rootClasses: rootClasses,
      showDismissAction: showDismissAction,
      surfaceClickHandler: surfaceClickHandler
    });
  }
}; // ===
// Private functions
// ===

function isActionButton_(target) {
  return Boolean(closest(target, strings$9.ACTION_SELECTOR));
}

function isActionIcon_(target) {
  return Boolean(closest(target, strings$9.DISMISS_SELECTOR));
}

const _hoisted_1$i = {
  ref: "labelEl",
  class: "mdc-snackbar__label",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_2$f = {
  key: 1,
  style: {"display":"inline-block","width":"0","height":"'1px'"}
};
const _hoisted_3$b = { class: "mdc-snackbar__actions" };
const _hoisted_4$9 = /*#__PURE__*/createVNode("div", { class: "mdc-button__ripple" }, null, -1 /* HOISTED */);
const _hoisted_5$4 = { class: "mdc-button__label" };
const _hoisted_6$2 = {
  key: 1,
  type: "button",
  class: "mdc-icon-button mdc-snackbar__dismiss material-icons",
  title: "Dismiss"
};

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", { class: _ctx.rootClasses }, [
    createVNode("div", {
      class: "mdc-snackbar__surface",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.surfaceClickHandler(...args)))
    }, [
      createVNode("div", _hoisted_1$i, [
        (_ctx.showMessage)
          ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.message), 1 /* TEXT */)
            ], 64 /* STABLE_FRAGMENT */))
          : (openBlock(), createBlock("span", _hoisted_2$f, " "))
      ], 512 /* NEED_PATCH */),
      createVNode("div", _hoisted_3$b, [
        (_ctx.actionText)
          ? (openBlock(), createBlock("button", mergeProps({
              key: 0,
              ref: "actionEl",
              type: "button"
            }, toHandlers(_ctx.$listeners), { class: "mdc-button mdc-snackbar__action" }), [
              _hoisted_4$9,
              createVNode("span", _hoisted_5$4, toDisplayString(_ctx.actionText), 1 /* TEXT */)
            ], 16 /* FULL_PROPS */))
          : createCommentVNode("v-if", true),
        (_ctx.showDismissAction)
          ? (openBlock(), createBlock("button", _hoisted_6$2, " close "))
          : createCommentVNode("v-if", true)
      ])
    ])
  ], 2 /* CLASS */))
}

script$t.render = render$t;
script$t.__file = "packages/snackbar/snackbar.vue";

var snackbar = BasePlugin({
  mcwSnackbar: script$t,
  mcwSnackbarQueue: script$s
});

var switchId_ = 0;
var script$u = {
  name: 'mcw-switch',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String,
    id: String
  },
  setup: function setup(props, _ref) {
    var _props$id;

    var slots = _ref.slots,
        emit = _ref.emit;
    var uiState = reactive({
      classes: {
        'mdc-switch': 1
      },
      nativeControlChecked: props.checked,
      nativeControlDisabled: props.disabled,
      nativeAttrs: {},
      root: null
    });

    var _useRipplePlugin = useRipplePlugin$1(toRef(uiState, 'root')),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var foundation;
    var switchId = (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : "__mcw-switch-".concat(switchId_++);
    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    var hasLabel = computed(function () {
      return props.label || slots.default;
    });

    var onChanged = function onChanged(event) {
      var _foundation;

      (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.handleChange(event);
      emit('change', event.target.checked);
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      setNativeControlChecked: function setNativeControlChecked(checked) {
        return uiState.nativeControlChecked = checked;
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return uiState.nativeControlDisabled = disabled;
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        uiState.nativeAttrs[attr] = value;
      }
    };
    watch(function () {
      return props.checked;
    }, function (nv, ov) {
      var _foundation2;

      nv != ov && ((_foundation2 = foundation) === null || _foundation2 === void 0 ? void 0 : _foundation2.setChecked(nv));
    });
    watch(function () {
      return props.disabled;
    }, function (nv, ov) {
      var _foundation3;

      nv != ov && ((_foundation3 = foundation) === null || _foundation3 === void 0 ? void 0 : _foundation3.setDisabled(nv));
    });
    onMounted(function () {
      foundation = new MDCSwitchFoundation(adapter);
      foundation.init();
      foundation.setChecked(props.checked);
      foundation.setDisabled(props.disabled);
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes: classes,
      hasLabel: hasLabel,
      onChanged: onChanged,
      styles: styles,
      switchId: switchId
    });
  }
};

const _hoisted_1$j = /*#__PURE__*/createVNode("div", { class: "mdc-switch__track" }, null, -1 /* HOISTED */);
const _hoisted_2$g = { class: "mdc-switch__thumb-underlay" };
const _hoisted_3$c = /*#__PURE__*/createVNode("div", { class: "mdc-switch__thumb" }, null, -1 /* HOISTED */);

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
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
      _hoisted_1$j,
      createVNode("div", _hoisted_2$g, [
        _hoisted_3$c,
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
          onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.onChanged(...args)))
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

script$u.render = render$u;
script$u.__file = "packages/switch/switch.vue";

var switchControl = BasePlugin({
  mcwSwitch: script$u
});

var strings$a = MDCTabBarFoundation.strings;
var script$v = {
  name: 'mcw-tab-bar',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    fade: Boolean,
    stacked: Boolean,
    spanContent: Boolean,
    value: Number
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        $listeners = _ref.listeners;
    var scroller = ref(null);
    var root = ref(null);
    var tabList = ref([]);
    provide('mcwTabList', {
      fade: props.fade,
      stacked: props.stacked,
      spanContent: props.spanContent,
      tabList: tabList
    });
    var listeners = computed(function () {
      var _objectSpread2$1;

      return _objectSpread2(_objectSpread2({}, $listeners), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, MDCTabFoundation.strings.INTERACTED_EVENT, function (evt) {
        return foundation.handleTabInteraction(evt);
      }), _defineProperty(_objectSpread2$1, "keydown", function keydown(evt) {
        return foundation.handleKeyDown(evt);
      }), _objectSpread2$1));
    });
    var foundation;

    var getTabElements_ = function getTabElements_() {
      return [].slice.call(root.value.querySelectorAll(strings$a.TAB_SELECTOR));
    };

    var activateTab = function activateTab(index) {
      return foundation.activateTab(index);
    };

    var adapter = {
      scrollTo: function scrollTo(scrollX) {
        return scroller.value.scrollTo(scrollX);
      },
      incrementScroll: function incrementScroll(scrollXIncrement) {
        return scroller.value.incrementScroll(scrollXIncrement);
      },
      getScrollPosition: function getScrollPosition() {
        return scroller.value.getScrollPosition();
      },
      getScrollContentWidth: function getScrollContentWidth() {
        return scroller.value.getScrollContentWidth();
      },
      getOffsetWidth: function getOffsetWidth() {
        return root.value.offsetWidth;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(root.value).getPropertyValue('direction') === 'rtl';
      },
      setActiveTab: function setActiveTab(index) {
        foundation.activateTab(index);
      },
      activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
        tabList.value[index].activate(clientRect);
      },
      deactivateTabAtIndex: function deactivateTabAtIndex(index) {
        var _tabList$value$index;

        return (_tabList$value$index = tabList.value[index]) === null || _tabList$value$index === void 0 ? void 0 : _tabList$value$index.deactivate();
      },
      focusTabAtIndex: function focusTabAtIndex(index) {
        return tabList.value[index].focus();
      },
      getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
        var _tabList$value$index2;

        return (_tabList$value$index2 = tabList.value[index]) === null || _tabList$value$index2 === void 0 ? void 0 : _tabList$value$index2.computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
        return tabList.value[index].computeDimensions();
      },
      getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
        for (var i = 0; i < tabList.value.length; i++) {
          if (tabList.value[i].isActive()) {
            return i;
          }
        }

        return -1;
      },
      getFocusedTabIndex: function getFocusedTabIndex() {
        var tabElements = getTabElements_();
        var activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: function getIndexOfTabById(id) {
        for (var i = 0; i < tabList.value.length; i++) {
          if (tabList.value[i].id === id) {
            return i;
          }
        }

        return -1;
      },
      getTabListLength: function getTabListLength() {
        return tabList.value.length;
      },
      notifyTabActivated: function notifyTabActivated(index) {
        emitCustomEvent(root.value, strings$a.TAB_ACTIVATED_EVENT, {
          index: index
        }, true);
        emit('change', Number(index));
      }
    };
    onMounted(function () {
      foundation = foundation = new MDCTabBarFoundation(adapter);
      foundation.init(); // ensure active tab

      props.value !== void 0;
      foundation.activateTab(Number(props.value) || 0);

      for (var i = 0; i < tabList.value.length; i++) {
        if (tabList.value[i].active) {
          foundation.scrollIntoView(i);
          break;
        }
      }

      watchEffect(function () {
        foundation.activateTab(Number(props.value));
      });
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return {
      root: root,
      scroller: scroller,
      listeners: listeners,
      activateTab: activateTab
    };
  }
};

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_tab_scroller = resolveComponent("mcw-tab-scroller");

  return (openBlock(), createBlock("div", mergeProps({
    ref: "root",
    role: "tablist"
  }, toHandlers(_ctx.listeners), { class: "mdc-tab-bar" }), [
    createVNode(_component_mcw_tab_scroller, { ref: "scroller" }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 512 /* NEED_PATCH */)
  ], 16 /* FULL_PROPS */))
}

script$v.render = render$v;
script$v.__file = "packages/tabs/tab-bar.vue";

var cssClasses$6 = MDCTabIndicatorFoundation.cssClasses;
var script$w = {
  name: 'mcw-tab-indicator',
  props: {
    fade: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },
  setup: function setup(props) {
    var uiState = reactive({
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
    var foundation;
    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      computeContentClientRect: function computeContentClientRect() {
        return uiState.contentEl.getBoundingClientRect();
      },
      setContentStyleProperty: function setContentStyleProperty(prop, value) {
        return uiState.styles = _objectSpread2(_objectSpread2({}, uiState.styles), {}, _defineProperty({}, prop, value));
      }
    };

    var deactivate = function deactivate() {
      return foundation.deactivate();
    };

    var computeContentClientRect = function computeContentClientRect() {
      return foundation.computeContentClientRect();
    };

    var activate = function activate(previousIndicatorClientRect) {
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        adapter.addClass(cssClasses$6.ACTIVE);
        return;
      }

      var currentClientRect = computeContentClientRect();
      var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      var xPosition = previousIndicatorClientRect.left - currentClientRect.left; // THE FIX - use request animation frame to ensure framework has rendered DOM

      requestAnimationFrame(function () {
        adapter.addClass(cssClasses$6.NO_TRANSITION);
        adapter.setContentStyleProperty('transform', "translateX(".concat(xPosition, "px) scaleX(").concat(widthDelta, ")"));
        requestAnimationFrame(function () {
          adapter.removeClass(cssClasses$6.NO_TRANSITION);
          adapter.addClass(cssClasses$6.ACTIVE);
          adapter.setContentStyleProperty('transform', '');
        });
      });
    };

    onMounted(function () {
      foundation = props.fade ? new MDCFadingTabIndicatorFoundation(adapter) : new MDCSlidingTabIndicatorFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      activate: activate,
      deactivate: deactivate,
      computeContentClientRect: computeContentClientRect
    });
  }
};

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
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

script$w.render = render$w;
script$w.__file = "packages/tabs/tab-indicator.vue";

var script$x = {
  name: 'mcw-tab-scroller',
  setup: function setup() {
    var uiState = reactive({
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
    var foundation;

    var getScrollPosition = function getScrollPosition() {
      return foundation.getScrollPosition();
    };

    var getScrollContentWidth = function getScrollContentWidth() {
      return uiState.content.offsetWidth;
    };

    var incrementScroll = function incrementScroll(scrollXIncrement) {
      return foundation.incrementScroll(scrollXIncrement);
    };

    var scrollTo = function scrollTo(scrollX) {
      return foundation.scrollTo(scrollX);
    };

    var onTransitionEnd = function onTransitionEnd(evt) {
      return foundation.handleTransitionEnd(evt);
    };

    var areaListeners = {
      mousedown: function mousedown(evt) {
        return foundation.handleInteraction(evt);
      },
      wheel: function wheel(evt) {
        return foundation.handleInteraction(evt);
      },
      pointerdown: function pointerdown(evt) {
        return foundation.handleInteraction(evt);
      },
      touchstart: function touchstart(evt) {
        return foundation.handleInteraction(evt);
      },
      keydown: function keydown(evt) {
        return foundation.handleInteraction(evt);
      }
    };
    var adapter = {
      eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
        return matches(evtTarget, selector);
      },
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      addScrollAreaClass: function addScrollAreaClass(className) {
        return uiState.areaClasses = _objectSpread2(_objectSpread2({}, uiState.areaClasses), {}, _defineProperty({}, className, true));
      },
      setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
        return uiState.areaStyles = _objectSpread2(_objectSpread2({}, uiState.areaStyles), {}, _defineProperty({}, prop, value));
      },
      setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
        return uiState.contentStyles = _objectSpread2(_objectSpread2({}, uiState.contentStyles), {}, _defineProperty({}, prop, value));
      },
      getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
        return window.getComputedStyle(uiState.content).getPropertyValue(propName);
      },
      setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
        return uiState.area.scrollLeft = scrollX;
      },
      getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
        return uiState.area.scrollLeft;
      },
      getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
        return uiState.content.offsetWidth;
      },
      getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
        return uiState.area.offsetWidth;
      },
      computeScrollAreaClientRect: function computeScrollAreaClientRect() {
        return uiState.area.getBoundingClientRect();
      },
      computeScrollContentClientRect: function computeScrollContentClientRect() {
        return uiState.content.getBoundingClientRect();
      },
      computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight$1() {
        return computeHorizontalScrollbarHeight(document);
      }
    };
    onMounted(function () {
      foundation = new MDCTabScrollerFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      scrollTo: scrollTo,
      incrementScroll: incrementScroll,
      getScrollPosition: getScrollPosition,
      getScrollContentWidth: getScrollContentWidth,
      areaListeners: areaListeners,
      onTransitionEnd: onTransitionEnd
    });
  }
};

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
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
        onTransitionend: _cache[1] || (_cache[1] = (...args) => (_ctx.onTransitionEnd(...args)))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 36 /* STYLE, HYDRATE_EVENTS */)
    ], 16 /* FULL_PROPS */)
  ], 2 /* CLASS */))
}

script$x.render = render$x;
script$x.__file = "packages/tabs/tab-scroller.vue";

var tabId_ = 0;
var script$y = {
  name: 'mcw-tab',
  inheritAttrs: false,
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    minWidth: Boolean
  },
  components: {
    CustomLink: CustomLink
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var uiState = reactive({
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

    var _useRipplePlugin = useRipplePlugin$1(toRef(uiState, 'root')),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var _inject = inject('mcwTabList'),
        fade = _inject.fade,
        stacked = _inject.stacked,
        spanContent = _inject.spanContent,
        tabList = _inject.tabList;

    uiState.classes['mdc-tab--stacked'] = stacked;
    var hasIcon = computed(function () {
      if (props.icon || slots.icon) {
        return props.icon ? extractIconProp(props.icon) : {};
      }

      return false;
    });
    var hasText = computed(function () {
      return !!slots.default;
    });
    var linkAttrs = computed(function () {
      return _objectSpread2(_objectSpread2({}, attrs), uiState.rootAttrs);
    });
    var foundation;
    var tabId = "__mcw-tab-".concat(tabId_++);
    var rootEl;

    var activate = function activate(computeIndicatorClientRect) {
      return foundation.activate(computeIndicatorClientRect);
    };

    var deactivate = function deactivate() {
      return foundation.deactivate();
    };

    var isActive = function isActive() {
      return foundation.isActive();
    };

    var setActive = function setActive(isActive) {
      if (isActive) {
        uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, {
          'mdc-tab--active': true
        }), uiState.tabIndicator.activate();
      }
    };

    var computeIndicatorClientRect = function computeIndicatorClientRect() {
      return uiState.tabIndicator.computeContentClientRect();
    };

    var computeDimensions = function computeDimensions() {
      return foundation.computeDimensions();
    };

    var focus = function focus() {
      return rootEl.focus();
    };

    var onClick = function onClick(evt) {
      return foundation.handleClick(evt);
    };

    var adapter = {
      setAttr: function setAttr(attr, value) {
        return uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, _defineProperty({}, attr, value));
      },
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return !!uiState.classes[className];
      },
      activateIndicator: function activateIndicator(previousIndicatorClientRect) {
        return uiState.tabIndicator.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: function deactivateIndicator() {
        return uiState.tabIndicator.deactivate();
      },
      notifyInteracted: function notifyInteracted() {
        return emitCustomEvent(rootEl, MDCTabFoundation$1.strings.INTERACTED_EVENT, {
          tabId: tabId
        }, true
        /* bubble */
        );
      },
      getOffsetLeft: function getOffsetLeft() {
        return rootEl.offsetLeft;
      },
      getOffsetWidth: function getOffsetWidth() {
        return rootEl.offsetWidth;
      },
      getContentOffsetLeft: function getContentOffsetLeft() {
        return uiState.content.offsetLeft;
      },
      getContentOffsetWidth: function getContentOffsetWidth() {
        return uiState.content.offsetWidth;
      },
      focus: function focus() {
        return rootEl.focus();
      }
    };
    onMounted(function () {
      rootEl = uiState.root.$el;
      foundation = new MDCTabFoundation$1(adapter);
      foundation.init();
      tabList.value.push({
        id: tabId,
        activate: activate,
        deactivate: deactivate,
        focus: focus,
        computeIndicatorClientRect: computeIndicatorClientRect,
        computeDimensions: computeDimensions,
        isActive: isActive
      });
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      hasIcon: hasIcon,
      hasText: hasText,
      onClick: onClick,
      setActive: setActive,
      tabId: tabId,
      fade: fade,
      spanContent: spanContent,
      rippleClasses: rippleClasses,
      styles: styles,
      linkAttrs: linkAttrs
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
      classes: iconProp.reduce(function (result, value) {
        return Object.assign(result, _defineProperty({}, value, true));
      }, {})
    };
  } else if (_typeof(iconProp) === 'object') {
    return {
      classes: iconProp.className.split(' ').reduce(function (result, value) {
        return Object.assign(result, _defineProperty({}, value, true));
      }, {}),
      content: iconProp.textContent
    };
  }
}

const _hoisted_1$k = {
  ref: "content",
  class: "mdc-tab__content"
};
const _hoisted_2$h = {
  key: 1,
  class: "mdc-tab__text-label"
};

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_tab_indicator = resolveComponent("mcw-tab-indicator");
  const _component_custom_link = resolveComponent("custom-link");

  return (openBlock(), createBlock(_component_custom_link, {
    id: _ctx.tabId,
    ref: "root",
    link: _ctx.linkAttrs,
    class: _ctx.classes,
    style: _ctx.styles,
    onClick: _ctx.onClick
  }, {
    default: withCtx(() => [
      createVNode("span", _hoisted_1$k, [
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
          ? (openBlock(), createBlock("span", _hoisted_2$h, [
              renderSlot(_ctx.$slots, "default")
            ]))
          : createCommentVNode("v-if", true),
        (_ctx.spanContent)
          ? createVNode(_component_mcw_tab_indicator, {
              key: 2,
              ref: "tabIndicator",
              fade: _ctx.fade
            }, null, 8 /* PROPS */, ["fade"])
          : createCommentVNode("v-if", true),
        createVNode("span", {
          ref: "rippleSurface",
          class: ["mdc-tab__ripple", _ctx.rippleClasses],
          style: _ctx.styles
        }, null, 6 /* CLASS, STYLE */)
      ], 512 /* NEED_PATCH */),
      (!_ctx.spanContent)
        ? createVNode(_component_mcw_tab_indicator, {
            key: 0,
            ref: "tabIndicator",
            fade: _ctx.fade
          }, null, 8 /* PROPS */, ["fade"])
        : createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8 /* PROPS */, ["id", "link", "class", "style", "onClick"]))
}

script$y.render = render$y;
script$y.__file = "packages/tabs/tab.vue";

var tabs = BasePlugin({
  mcwTab: script$y,
  mcwTabBar: script$v,
  mcwTabScroller: script$x,
  mcwTabIndicator: script$w
});

var script$z = {
  name: 'mcw-character-counter',
  setup: function setup() {
    var uiState = reactive({
      textContent: '',
      foundation: {}
    });
    var adapter = {
      setContent: function setContent(content) {
        uiState.textContent = content;
      }
    };
    onMounted(function () {
      uiState.foundation = new MDCTextFieldCharacterCounterFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(function () {
      uiState.foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }
};

const _hoisted_1$l = { class: "mdc-text-field-character-counter" };

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$l, toDisplayString(_ctx.textContent), 1 /* TEXT */))
}

script$z.render = render$z;
script$z.__file = "packages/textfield/character-counter.vue";

var script$A = {
  name: 'mcw-textfield-helper-text',
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String
  },
  setup: function setup(props) {
    var uiState = reactive({
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
    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return Boolean(uiState.classes[className]);
      },
      setAttr: function setAttr(attr, value) {
        return uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, _defineProperty({}, attr, value));
      },
      removeAttr: function removeAttr(attr) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$rootAttrs = uiState.rootAttrs,
            removed = _uiState$rootAttrs[attr],
            rest = _objectWithoutProperties(_uiState$rootAttrs, [attr].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setContent: function setContent(content) {
        return uiState.helpertext = content;
      }
    };
    watch(function () {
      return props.persistent;
    }, function (nv) {
      return uiState.foundation.setPersistent(nv);
    });
    watch(function () {
      return props.validation;
    }, function (nv) {
      return uiState.foundation.setValidation(nv);
    });
    onMounted(function () {
      uiState.foundation = new MDCTextFieldHelperTextFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(function () {
      uiState.foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }
};

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", mergeProps({ class: _ctx.classes }, _ctx.rootAttrs), toDisplayString(_ctx.helpertext), 17 /* TEXT, FULL_PROPS */))
}

script$A.render = render$A;
script$A.__file = "packages/textfield/textfield-helper-text.vue";

var script$B = {
  name: 'textfield-icon',
  props: {
    disabled: Boolean,
    trailing: Boolean,
    trailingIcon: Boolean
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var uiState = reactive({
      classes: _defineProperty({
        'mdc-text-field__icon': 1
      }, "mdc-text-field__icon--".concat(props.trailing || props.trailingIcon ? 'trailing' : 'leading'), 1),
      rootAttrs: {
        tabindex: props.disabled ? '-1' : '0',
        role: props.disabled ? void 0 : 'button'
      },
      root: null,
      foundation: {}
    });
    var adapter = {
      getAttr: function getAttr(attr) {
        return uiState.rootAttrs[attr];
      },
      setAttr: function setAttr(attr, value) {
        return uiState.rootAttrs = _objectSpread2(_objectSpread2({}, uiState.rootAttrs), {}, _defineProperty({}, attr, value));
      },
      removeAttr: function removeAttr(attr) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$rootAttrs = uiState.rootAttrs,
            removed = _uiState$rootAttrs[attr],
            rest = _objectWithoutProperties(_uiState$rootAttrs, [attr].map(_toPropertyKey));

        uiState.rootAttrs = rest;
      },
      setContent: function setContent()
      /* content */
      {// set content is done through vue in templates
        // so we dont expose a method to set content
        // thus this is a no-op
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return uiState.root.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return uiState.root.removeEventListener(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        emitCustomEvent(uiState.root, MDCTextFieldIconFoundation.strings.ICON_EVENT, {}, true
        /* shouldBubble  */
        );
        emit('click');
      }
    };
    onMounted(function () {
      uiState.foundation = new MDCTextFieldIconFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(function () {
      uiState.foundation.destroy();
    });
    return _objectSpread2({}, toRefs(uiState));
  }
};

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", mergeProps({
    ref: "root",
    class: ["material-icons", _ctx.classes]
  }, _ctx.rootAttrs), [
    renderSlot(_ctx.$slots, "default")
  ], 16 /* FULL_PROPS */))
}

script$B.render = render$B;
script$B.__file = "packages/textfield/textfield-icon.vue";

var strings$b = MDCTextFieldFoundation.strings;
var uid_$1 = 0;
var script$C = {
  name: 'mcw-textfield',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'model'
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validator: function validator(value) {
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
      default: function _default() {
        return true;
      }
    },
    prefix: String,
    suffix: String,
    characterCounter: Boolean,
    characterCounterInternal: Boolean
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        $root = _ref.root.$root,
        slots = _ref.slots,
        listeners = _ref.listeners;
    var uiState = reactive({
      text: props.value,
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
    var foundation;
    var rippleClasses;
    var rippleStyles;

    if (!props.multiline && !props.outline) {
      var _useRipplePlugin = useRipplePlugin$1(toRef(uiState, 'root')),
          classes = _useRipplePlugin.classes,
          styles = _useRipplePlugin.styles;

      rippleClasses = classes;
      rippleStyles = styles;
    }

    var inputAriaControls = computed(function () {
      return props.helptext ? uiState.helpTextId : undefined;
    });
    var hasLabel = computed(function () {
      return !props.outline && props.label;
    });
    var hasOutlineLabel = computed(function () {
      return props.outline && props.label;
    });
    var hasLineRipple = computed(function () {
      return !(props.outline || props.multiline);
    });
    var hasHelptext = computed(function () {
      return slots.helpText || props.helptext;
    });
    var internalCharacterCounter = computed(function () {
      return props.characterCounter && props.characterCounterInternal;
    });
    var helperCharacterCounter = computed(function () {
      return props.characterCounter && !(props.multiline && props.characterCounterInternal);
    });
    var hasHelpline = computed(function () {
      return props.helptext || helperCharacterCounter.value;
    });
    var rootClasses = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses), uiState.classes);
    });

    var inputListeners = _objectSpread2(_objectSpread2({}, listeners), {}, {
      input: function input(_ref2) {
        var value = _ref2.target.value;
        return emit('model', value);
      }
    });

    var focus = function focus() {
      var _uiState$input;

      return (_uiState$input = uiState.input) === null || _uiState$input === void 0 ? void 0 : _uiState$input.focus();
    };

    var isValid = function isValid() {
      return foundation.isValid();
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.classes = _objectSpread2(_objectSpread2({}, uiState.classes), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$classes = uiState.classes,
            removed = _uiState$classes[className],
            rest = _objectWithoutProperties(_uiState$classes, [className].map(_toPropertyKey));

        uiState.classes = rest;
      },
      hasClass: function hasClass(className) {
        return Boolean(uiState.classes[className]);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        uiState.root.addEventListener(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        uiState.root.removeEventListener(evtType, handler);
      },
      isFocused: function isFocused() {
        return document.activeElement === uiState.input;
      },
      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
        var getAttributesList = function getAttributesList(mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          });
        };

        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var targetNode = uiState.input;
        var config = {
          attributes: true
        };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        observer.disconnect();
      },
      // input adapter methods
      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
        uiState.input.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
        uiState.input.removeEventListener(evtType, handler, applyPassive());
      },
      getNativeInput: function getNativeInput() {
        return uiState.input;
      },
      // label adapter methods
      shakeLabel: function shakeLabel(shouldShake) {
        var _uiState$labelEl;

        (_uiState$labelEl = uiState.labelEl) === null || _uiState$labelEl === void 0 ? void 0 : _uiState$labelEl.shake(shouldShake);
      },
      floatLabel: function floatLabel(shouldFloat) {
        var _uiState$labelEl2;

        (_uiState$labelEl2 = uiState.labelEl) === null || _uiState$labelEl2 === void 0 ? void 0 : _uiState$labelEl2.float(shouldFloat);
      },
      hasLabel: function hasLabel() {
        return !!uiState.labelEl || !!uiState.notchedEl;
      },
      getLabelWidth: function getLabelWidth() {
        return uiState.labelEl.getWidth();
      },
      // line ripple adapter methods
      deactivateLineRipple: function deactivateLineRipple() {
        var _uiState$lineRippleEl;

        return (_uiState$lineRippleEl = uiState.lineRippleEl) === null || _uiState$lineRippleEl === void 0 ? void 0 : _uiState$lineRippleEl.deactivate();
      },
      activateLineRipple: function activateLineRipple() {
        var _uiState$lineRippleEl2;

        return (_uiState$lineRippleEl2 = uiState.lineRippleEl) === null || _uiState$lineRippleEl2 === void 0 ? void 0 : _uiState$lineRippleEl2.activate();
      },
      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
        var _uiState$lineRippleEl3;

        return (_uiState$lineRippleEl3 = uiState.lineRippleEl) === null || _uiState$lineRippleEl3 === void 0 ? void 0 : _uiState$lineRippleEl3.setRippleCenter(normalizedX);
      },
      // outline adapter methods
      hasOutline: function hasOutline() {
        return !!props.outline;
      },
      notchOutline: function notchOutline(notchWidth, isRtl) {
        return uiState.labelEl.notch(notchWidth, isRtl);
      },
      closeOutline: function closeOutline() {
        return uiState.labelEl.closeNotch();
      }
    };
    watch(function () {
      return props.disabled;
    }, function (nv) {
      var _foundation;

      return (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.setDisabled(nv);
    });
    watch(function () {
      return props.required;
    }, function (nv) {
      uiState.input && (uiState.input.required = nv);
    });
    watch(function () {
      return props.valid;
    }, function (nv) {
      if (typeof nv !== 'undefined') {
        var _foundation2;

        (_foundation2 = foundation) === null || _foundation2 === void 0 ? void 0 : _foundation2.setValid(nv);
      }
    });
    watch(function () {
      return props.value;
    }, function (nv) {
      if (foundation) {
        if (nv !== foundation.getValue()) {
          foundation.setValue(nv);
        }
      }
    });
    onMounted(function () {
      var _uiState$characterCou, _uiState$helpertext;

      var leadingIconEl = uiState.wrapper.querySelector(strings$b.LEADING_ICON_SELECTOR);
      var trailingIconEl = uiState.wrapper.querySelector(strings$b.TRAILING_ICON_SELECTOR);
      foundation = new MDCTextFieldFoundation(_objectSpread2({}, adapter), {
        characterCounter: (_uiState$characterCou = uiState.characterCounterEl) === null || _uiState$characterCou === void 0 ? void 0 : _uiState$characterCou.foundation,
        helperText: (_uiState$helpertext = uiState.helpertext) === null || _uiState$helpertext === void 0 ? void 0 : _uiState$helpertext.foundation,
        leadingIcon: leadingIconEl === null || leadingIconEl === void 0 ? void 0 : leadingIconEl.__vue__.foundation,
        trailingIcon: trailingIconEl === null || trailingIconEl === void 0 ? void 0 : trailingIconEl.__vue__.foundation
      });
      foundation.init();
      foundation.setValue(props.value);
      props.disabled && foundation.setDisabled(props.disabled);
      uiState.input && (uiState.input.required = props.required);

      if (typeof props.valid !== 'undefined') {
        foundation.setValid(props.valid);
      }
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      inputAriaControls: inputAriaControls,
      hasLabel: hasLabel,
      hasOutlineLabel: hasOutlineLabel,
      inputListeners: inputListeners,
      hasLineRipple: hasLineRipple,
      hasHelptext: hasHelptext,
      hasHelpline: hasHelpline,
      focus: focus,
      helperCharacterCounter: helperCharacterCounter,
      internalCharacterCounter: internalCharacterCounter,
      rootClasses: rootClasses,
      rippleStyles: rippleStyles,
      isValid: isValid
    });
  },
  components: {
    mcwLineRipple: script$h,
    mcwNotchedOutline: script$n
  }
};

const _hoisted_1$m = {
  ref: "wrapper",
  class: "textfield-container"
};
const _hoisted_2$i = {
  key: 0,
  class: "mdc-text-field__ripple"
};
const _hoisted_3$d = {
  key: 1,
  class: "mdc-text-field__affix mdc-text-field__affix--prefix"
};
const _hoisted_4$a = {
  key: 2,
  class: "mdc-text-field__affix mdc-text-field__affix--suffix"
};
const _hoisted_5$5 = {
  key: 0,
  class: "mdc-text-field__resizer"
};
const _hoisted_6$3 = {
  key: 2,
  class: "mdc-text-field-helper-line"
};

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");
  const _component_mcw_notched_outline = resolveComponent("mcw-notched-outline");
  const _component_mcw_line_ripple = resolveComponent("mcw-line-ripple");
  const _component_mcw_character_counter = resolveComponent("mcw-character-counter");
  const _component_mcw_textfield_helper_text = resolveComponent("mcw-textfield-helper-text");

  return (openBlock(), createBlock("div", _hoisted_1$m, [
    (!_ctx.multiline)
      ? (openBlock(), createBlock("label", {
          key: 0,
          ref: "root",
          class: _ctx.rootClasses,
          style: _ctx.rippleStyles
        }, [
          (!_ctx.outline)
            ? (openBlock(), createBlock("span", _hoisted_2$i))
            : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "leading"),
          renderSlot(_ctx.$slots, "leadingIcon"),
          (_ctx.prefix)
            ? (openBlock(), createBlock("span", _hoisted_3$d, toDisplayString(_ctx.prefix), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          createVNode("input", mergeProps({
            ref: "input",
            class: _ctx.inputClasses
          }, _ctx.$attrs, {
            type: _ctx.type,
            minlength: _ctx.minlength,
            maxlength: _ctx.maxlength,
            "aria-label": _ctx.label,
            "aria-controls": _ctx.inputAriaControls,
            "aria-labelledby": _ctx.labelId,
            "aria-describedby": _ctx.inputAriaControls
          }, toHandlers(_ctx.inputListeners)), null, 16 /* FULL_PROPS */, ["type", "minlength", "maxlength", "aria-label", "aria-controls", "aria-labelledby", "aria-describedby"]),
          (_ctx.suffix)
            ? (openBlock(), createBlock("span", _hoisted_4$a, toDisplayString(_ctx.suffix), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          (_ctx.hasLabel)
            ? createVNode(_component_mcw_floating_label, {
                key: 3,
                ref: "labelEl",
                id: _ctx.labelId,
                required: _ctx.required
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1
              }, 8 /* PROPS */, ["id", "required"])
            : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "trailingIcon"),
          renderSlot(_ctx.$slots, "trailing"),
          (_ctx.outline)
            ? createVNode(_component_mcw_notched_outline, {
                key: 4,
                ref: "labelEl"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1
              }, 512 /* NEED_PATCH */)
            : createCommentVNode("v-if", true),
          (_ctx.hasLineRipple)
            ? createVNode(_component_mcw_line_ripple, {
                key: 5,
                ref: "lineRippleEl"
              }, null, 512 /* NEED_PATCH */)
            : createCommentVNode("v-if", true)
        ], 6 /* CLASS, STYLE */))
      : (openBlock(), createBlock("label", {
          key: 1,
          ref: "root",
          class: _ctx.classes
        }, [
          (_ctx.resizer)
            ? (openBlock(), createBlock("span", _hoisted_5$5, [
                createVNode("textarea", mergeProps({
                  ref: "input",
                  class: _ctx.inputClasses
                }, _ctx.$attrs, {
                  minlength: _ctx.minlength,
                  maxlength: _ctx.maxlength,
                  "aria-label": _ctx.label,
                  "aria-controls": _ctx.inputAriaControls,
                  cols: _ctx.cols,
                  rows: _ctx.rows
                }, toHandlers(_ctx.inputListeners)), null, 16 /* FULL_PROPS */, ["minlength", "maxlength", "aria-label", "aria-controls", "cols", "rows"])
              ]))
            : (openBlock(), createBlock("textarea", mergeProps({
                key: 1,
                ref: "input",
                class: _ctx.inputClasses
              }, _ctx.$attrs, {
                minlength: _ctx.minlength,
                maxlength: _ctx.maxlength,
                "aria-label": _ctx.label,
                "aria-controls": _ctx.inputAriaControls,
                cols: _ctx.cols,
                rows: _ctx.rows
              }, toHandlers(_ctx.inputListeners)), null, 16 /* FULL_PROPS */, ["minlength", "maxlength", "aria-label", "aria-controls", "cols", "rows"])),
          (_ctx.internalCharacterCounter)
            ? createVNode(_component_mcw_character_counter, {
                key: 2,
                ref: "characterCounterEl"
              }, null, 512 /* NEED_PATCH */)
            : createCommentVNode("v-if", true),
          (_ctx.outline)
            ? createVNode(_component_mcw_notched_outline, {
                key: 3,
                ref: "labelEl"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
                ]),
                _: 1
              }, 512 /* NEED_PATCH */)
            : createCommentVNode("v-if", true)
        ], 2 /* CLASS */)),
    (_ctx.hasHelpline)
      ? (openBlock(), createBlock("div", _hoisted_6$3, [
          (_ctx.helptext)
            ? createVNode(_component_mcw_textfield_helper_text, {
                key: 0,
                ref: "helpertext",
                id: _ctx.helpTextId,
                helptext: _ctx.helptext,
                persistent: _ctx.helptextPersistent,
                validation: _ctx.helptextValidation
              }, null, 8 /* PROPS */, ["id", "helptext", "persistent", "validation"])
            : createCommentVNode("v-if", true),
          (_ctx.helperCharacterCounter)
            ? createVNode(_component_mcw_character_counter, {
                key: 1,
                ref: "characterCounterEl"
              }, null, 512 /* NEED_PATCH */)
            : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true)
  ], 512 /* NEED_PATCH */))
}

script$C.render = render$C;
script$C.__file = "packages/textfield/textfield.vue";

var textfield = BasePlugin({
  mcwTextfield: script$C,
  mcwTextfieldIcon: script$B,
  mcwCharacterCounter: script$z,
  mcwTextfieldHelperText: script$A,
  mcwLineRipple: script$h,
  mcwNotchedOutline: script$n,
  mcwFloatingLabel: script$c
});

var cssClasses$7 = MDCTopAppBarFoundation.cssClasses,
    strings$c = MDCTopAppBarFoundation.strings;
var script$D = {
  name: 'mcw-top-app-bar',
  props: {
    tag: {
      type: String,
      default: 'header'
    },
    scrollTarget: HTMLElement
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        listeners = _ref.listeners;
    var uiState = reactive({
      rootStyles: {},
      rootClasses: {
        'mdc-top-app-bar': true
      },
      myScrollTarget: props.scrollTarget || window,
      root: null
    });
    var foundation;
    var navIcon;
    var iconRipples = [];

    var handleNavigationClick = function handleNavigationClick(event) {
      return foundation.handleNavigationClick(event);
    };

    var handleTargetScroll = function handleTargetScroll(evt) {
      return foundation.handleTargetScroll(evt);
    };

    var handleWindowResize = function handleWindowResize(evt) {
      return foundation.handleWindowResize(evt);
    };

    var adapter = {
      addClass: function addClass(className) {
        return uiState.rootClasses = _objectSpread2(_objectSpread2({}, uiState.rootClasses), {}, _defineProperty({}, className, true));
      },
      removeClass: function removeClass(className) {
        // eslint-disable-next-line no-unused-vars
        var _uiState$rootClasses = uiState.rootClasses,
            removed = _uiState$rootClasses[className],
            rest = _objectWithoutProperties(_uiState$rootClasses, [className].map(_toPropertyKey));

        uiState.rootClasses = rest;
      },
      hasClass: function hasClass(className) {
        return Boolean(uiState.rootClasses[className]);
      },
      setStyle: function setStyle(property, value) {
        return uiState.rootStyles = _objectSpread2(_objectSpread2({}, uiState.rootStyles), {}, _defineProperty({}, property, value));
      },
      getTopAppBarHeight: function getTopAppBarHeight() {
        return uiState.root.clientHeight;
      },
      notifyNavigationIconClicked: function notifyNavigationIconClicked() {
        emit('nav', {});
        emitCustomEvent(uiState.root, strings$c.NAVIGATION_EVENT, {},
        /** shouldBubble */
        true);
      },
      getViewportScrollY: function getViewportScrollY() {
        var st = uiState.myScrollTarget;
        return st.pageYOffset !== void 0 ? st.pageYOffset : st.scrollTop;
      },
      getTotalActionItems: function getTotalActionItems() {
        return uiState.root.querySelectorAll(strings$c.ACTION_ITEM_SELECTOR).length;
      }
    };
    watch(function () {
      return props.scrollTarget;
    }, function (nv, ov) {
      if (nv !== ov) {
        uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);
        uiState.myScrollTarget = nv;
        uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);
      }
    });

    var setScrollTarget = function setScrollTarget(nv) {
      uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);
      uiState.myScrollTarget = nv;
      uiState.myScrollTarget.addEventListener('scroll', handleTargetScroll);
    };

    onMounted(function () {
      var isFixed = uiState.root.classList.contains(cssClasses$7.FIXED_CLASS);
      var isShort = uiState.root.classList.contains(cssClasses$7.SHORT_CLASS);

      if (isShort) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (isFixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      } // todo: hunt down icons for ripples


      navIcon = uiState.root.querySelector(strings$c.NAVIGATION_ICON_SELECTOR); // Get all icons in the toolbar and instantiate the ripples

      var icons = [].slice.call(uiState.root.querySelectorAll(strings$c.ACTION_ITEM_SELECTOR));

      if (navIcon) {
        navIcon.addEventListener('click', handleNavigationClick);
        icons.push(navIcon);
      }

      iconRipples = icons.map(function (icon) {
        var ripple = new RippleElement(icon);
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
    onBeforeUnmount(function () {
      var _uiState$myScrollTarg;

      if (navIcon) {
        navIcon.removeEventListener('click', handleNavigationClick);
      }

      iconRipples.forEach(function (iconRipple) {
        return iconRipple.destroy();
      });
      uiState.myScrollTarget.removeEventListener('scroll', handleTargetScroll);
      (_uiState$myScrollTarg = uiState.myScrollTarget) === null || _uiState$myScrollTarg === void 0 ? void 0 : _uiState$myScrollTarg.removeEventListener('scroll', foundation.handleTargetScroll);
      var isFixed = uiState.root.classList.contains(cssClasses$7.FIXED_CLASS);
      var isShort = uiState.root.classList.contains(cssClasses$7.SHORT_CLASS);

      if (!isShort && !isFixed) {
        window.removeEventListener('resize', handleWindowResize);
      }

      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      listeners: listeners,
      setScrollTarget: setScrollTarget
    });
  }
};

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
    ref: "root",
    class: _ctx.rootClasses,
    style: _ctx.rootStyles
  }, toHandlers(_ctx.listeners)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16 /* FULL_PROPS */, ["class", "style"]))
}

script$D.render = render$D;
script$D.__file = "packages/top-app-bar/top-app-bar.vue";

var topAppBar = BasePlugin({
  mcwTopAppBar: script$D // mcwFixedAdjust,
  // mcwTopAppBarIcon,
  // mcwTopAppBarRow,
  // mcwTopAppBarSection,
  // mcwTopAppBarTitle,

});

var index$1 = {
  install: function install(vm) {
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
    vm.use(select);
    vm.use(slider);
    vm.use(snackbar);
    vm.use(switchControl);
    vm.use(tabs);
    vm.use(textfield);
    vm.use(topAppBar);
  }
};

export default index$1;
export { index as base, button, card, checkbox, chips, circularProgress, dataTable, dialog, drawer, fab, floatingLabel, iconButton, layoutGrid, lineRipple, linearProgress, list, materialIcon, menu, notchedOutline, radio, select, slider, snackbar, switchControl, tabs, textfield, topAppBar };
