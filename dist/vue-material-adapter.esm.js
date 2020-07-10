import { h, toRefs, ref, shallowReactive, onMounted, onBeforeUnmount, computed, reactive, toRef, watch, provide, inject } from '@vue/composition-api';
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
import { cssClasses as cssClasses$7, events, selectors, dataAttributes, SortValue, messages } from '@material/data-table';
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
        var definition = vm.extend(component);
        vm.component(mcwName, definition);
        vm.component(mdcName, definition);
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "custom-link",
    _vm._g(
      {
        ref: "root",
        class: _vm.classes,
        style: _vm.styles,
        attrs: { link: _vm.$attrs, tag: "button" }
      },
      _vm.listeners
    ),
    [
      _c("div", { staticClass: "mdc-button__ripple" }),
      _vm._v(" "),
      _vm.haveIcon
        ? _vm._t("icon", [
            _c(
              "i",
              {
                staticClass: "material-icons mdc-button__icon",
                attrs: { "aria-hidden": "true" }
              },
              [_vm._v(_vm._s(_vm.icon))]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("span", { staticClass: "mdc-button__label" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _vm.haveTrailingIcon
        ? _vm._t("trailingIcon", [
            _c(
              "i",
              {
                staticClass: "material-icons mdc-button__icon",
                attrs: { "aria-hidden": "true" }
              },
              [_vm._v(_vm._s(_vm.trailingIcon))]
            )
          ])
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var button = BasePlugin({
  mcwButton: __vue_component__
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

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "custom-link",
    _vm._g(
      {
        ref: "root",
        class: _vm.classes,
        style: _vm.styles,
        attrs: { tabIndex: "0", link: _vm.$attrs }
      },
      _vm.listeners
    ),
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

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
  mcwCardPrimaryAction: __vue_component__$1,
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

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasLabel
    ? _c(
        "div",
        { staticClass: "mdc-checkbox-wrapper", class: _vm.formFieldClasses },
        [
          _c(
            "div",
            { ref: "root", class: _vm.rootClasses, style: _vm.styles },
            [
              _c("input", {
                ref: "control",
                staticClass: "mdc-checkbox__native-control",
                attrs: { id: _vm.checkboxId, name: _vm.name, type: "checkbox" },
                domProps: { value: _vm.value },
                on: { change: _vm.onChange }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "mdc-checkbox__background" }, [
                _c(
                  "svg",
                  {
                    staticClass: "mdc-checkbox__checkmark",
                    attrs: { viewBox: "0 0 24 24" }
                  },
                  [
                    _c("path", {
                      staticClass: "mdc-checkbox__checkmark-path",
                      attrs: {
                        fill: "none",
                        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mdc-checkbox__mixedmark" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mdc-checkbox__ripple" })
            ]
          ),
          _vm._v(" "),
          _c(
            "label",
            { ref: "labelEl", attrs: { for: _vm.checkboxId } },
            [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
            2
          )
        ]
      )
    : _c("div", { ref: "root", class: _vm.rootClasses, style: _vm.styles }, [
        _c("input", {
          ref: "control",
          staticClass: "mdc-checkbox__native-control",
          attrs: { id: _vm.checkboxId, name: _vm.name, type: "checkbox" },
          domProps: { value: _vm.value },
          on: { change: _vm.onChange }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-checkbox__background" }, [
          _c(
            "svg",
            {
              staticClass: "mdc-checkbox__checkmark",
              attrs: { viewBox: "0 0 24 24" }
            },
            [
              _c("path", {
                staticClass: "mdc-checkbox__checkmark-path",
                attrs: { fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-checkbox__mixedmark" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-checkbox__ripple" })
      ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

var checkbox = BasePlugin({
  mcwCheckbox: __vue_component__$2
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

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { ref: "root", staticClass: "mdc-chip__checkmark" }, [
    _c(
      "svg",
      {
        staticClass: "mdc-chip__checkmark-svg",
        attrs: { viewBox: "-2 -3 30 30" }
      },
      [
        _c("path", {
          staticClass: "mdc-chip__checkmark-path",
          attrs: {
            fill: "none",
            stroke: "black",
            d: "M1.73,12.91 8.1,19.28 22.79,4.59"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

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

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._g(
      { ref: "root", class: _vm.classes, attrs: { role: "grid" } },
      _vm.myListeners
    ),
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

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

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._g(
      {
        ref: "root",
        staticClass: "mdc-chip",
        class: _vm.classes,
        style: _vm.styles,
        attrs: { role: "row" }
      },
      _vm.myListeners
    ),
    [
      _c("div", { staticClass: "mdc-chip__ripple" }),
      _vm._v(" "),
      _vm._t("leading-icon", [
        _vm.haveleadingIcon
          ? _c(
              "i",
              {
                ref: "leading-icon",
                staticClass:
                  "material-icons mdc-chip__icon mdc-chip__icon--leading"
              },
              [_vm._v(_vm._s(_vm.leadingIcon))]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.isFilter
        ? _c("mcw-chip-checkmark", { ref: "checkmarkEl" })
        : _vm._e(),
      _vm._v(" "),
      _c("span", { attrs: { role: "gridcell" } }, [
        _c(
          "span",
          {
            staticClass: "mdc-chip__primary-action",
            attrs: { role: _vm.isFilter ? "checkbox" : "button", tabindex: "0" }
          },
          [
            _c(
              "span",
              { staticClass: "mdc-chip__text" },
              [_vm._t("default")],
              2
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._t("trailing-icon", [
        _vm.havetrailingIcon
          ? _c(
              "span",
              { attrs: { role: "gridcell" } },
              [
                _c("mcw-chip-trailing-action", { ref: "trailingAction" }, [
                  _vm._v(_vm._s(_vm.trailingIcon))
                ])
              ],
              1
            )
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

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

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      ref: "root",
      staticClass: "mdc-chip-trailing-action",
      class: _vm.classes,
      style: _vm.styles,
      attrs: { "aria-label": "Remove chip", tabindex: "-1" },
      on: { click: _vm.onClick, keydown: _vm.onKeydown }
    },
    [
      _c("span", { staticClass: "mdc-chip-trailing-action__ripple" }),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "mdc-chip-trailing-action__icon material-icons" },
        [_vm._t("default")],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

var chips = BasePlugin({
  mcwChip: __vue_component__$5,
  mcwChipSet: __vue_component__$4,
  mcwChipCheckmark: __vue_component__$3,
  mcwChipTrailingAction: __vue_component__$6
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

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      { ref: "root", class: _vm.classes, attrs: { role: "progressbar" } },
      "div",
      _vm.rootAttrs,
      false
    ),
    [
      _c(
        "div",
        { staticClass: "mdc-circular-progress__determinate-container" },
        [
          _c(
            "svg",
            {
              staticClass: "mdc-circular-progress__determinate-circle-graphic",
              attrs: {
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              _c(
                "circle",
                _vm._b(
                  { staticClass: "mdc-circular-progress__determinate-circle" },
                  "circle",
                  _vm.circleAttrs,
                  false
                )
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mdc-circular-progress__indeterminate-container" },
        [
          _c("div", { staticClass: "mdc-circular-progress__spinner-layer" }, [
            _c(
              "div",
              {
                staticClass:
                  "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass:
                      "mdc-circular-progress__indeterminate-circle-graphic",
                    attrs: {
                      viewBox: "0 0 48 48",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c(
                      "circle",
                      _vm._b({}, "circle", _vm.indeterminateAttrs, false)
                    )
                  ]
                )
              ]
            ),
            _c("div", { staticClass: "mdc-circular-progress__gap-patch" }, [
              _c(
                "svg",
                {
                  staticClass:
                    "mdc-circular-progress__indeterminate-circle-graphic",
                  attrs: {
                    viewBox: "0 0 48 48",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c(
                    "circle",
                    _vm._b({}, "circle", _vm.indeterminateAttrs, false)
                  )
                ]
              )
            ]),
            _c(
              "div",
              {
                staticClass:
                  "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass:
                      "mdc-circular-progress__indeterminate-circle-graphic",
                    attrs: {
                      viewBox: "0 0 48 48",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c(
                      "circle",
                      _vm._b({}, "circle", _vm.indeterminateAttrs, false)
                    )
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

var circularProgress = BasePlugin({
  mcwCircularProgress: __vue_component__$7
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

    var cssClasses = cssClasses$7,
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

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { ref: "root", staticClass: "mdc-data-table", class: _vm.classes },
    [
      _c(
        "div",
        { staticClass: "mdc-data-table__table-container" },
        [_vm._t("default")],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

var dataTable = BasePlugin({
  mcwDataTable: __vue_component__$8
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
    mcwButton: __vue_component__
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

/* script */
const __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "root",
      class: _vm.classes,
      style: _vm.styles,
      on: { click: _vm.onClick, keydown: _vm.onKeydown }
    },
    [
      _c("div", { ref: "container", staticClass: "mdc-dialog__container" }, [
        _c(
          "div",
          {
            ref: "surface",
            staticClass: "mdc-dialog__surface",
            attrs: {
              role: "alertdialog",
              "aria-modal": "true",
              "aria-labelledby": _vm.ariaLabelledby,
              "aria-describedby": _vm.ariaDescribedby
            }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdc-dialog__scrim" })
    ]
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    undefined,
    undefined,
    undefined
  );

var dialog = BasePlugin({
  mcwDialog: __vue_component__$9,
  mcwDialogTitle: mcwDialogTitle,
  mcwDialogFooter: mcwDialogFooter,
  mcwDialogButton: mcwDialogButton,
  mcwDialogContent: mcwDialogContent
});

var script$a = {
  name: 'mcw-drawer',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    modal: Boolean,
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
        'mdc-drawer--modal': 1
      },
      root: null,
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

    provide('mcwDrawer', {
      isModal: props.modal,
      close: close
    });
    var foundation;
    var focusTrap_;
    var list_;
    var previousFocus_;

    var initialSyncWithDOM = function initialSyncWithDOM() {
      var MODAL = MDCDismissibleDrawerFoundation.cssClasses.MODAL;

      if (uiState.drawer.classList.contains(MODAL)) {
        var SCRIM_SELECTOR = MDCDismissibleDrawerFoundation.strings.SCRIM_SELECTOR;
        var scrim_ = uiState.drawer.parentElement.querySelector(SCRIM_SELECTOR);

        var handleScrimClick_ = function handleScrimClick_() {
          return foundation.handleScrimClick();
        };

        scrim_.addEventListener('click', handleScrimClick_);
        focusTrap_ = createFocusTrapInstance$1(uiState.drawer, focusTrapFactory_);
      }

      var handleKeydown_ = function handleKeydown_(evt) {
        return foundation.handleKeydown(evt);
      };

      var handleTransitionEnd_ = function handleTransitionEnd_(evt) {
        return foundation.handleTransitionEnd(evt);
      };

      uiState.root.addEventListener('keydown', handleKeydown_);
      uiState.root.addEventListener('transitionend', handleTransitionEnd_);
    };

    var onOpen_ = function onOpen_(value) {
      if (props.open) {
        var _foundation;

        (_foundation = foundation) === null || _foundation === void 0 ? void 0 : _foundation.open();
      } else {
        var _foundation2;

        (_foundation2 = foundation) === null || _foundation2 === void 0 ? void 0 : _foundation2.close();
      }
    };

    var onChange = function onChange(event) {
      emit('change', event);
      $root.$emit('vma:layout');
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
        return uiState.drawer.classList.contains(className);
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

        if (uiState.drawer.contains(document.activeElement) && previousFocus) {
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
        emit('change', false);
        emit('close');
      },
      notifyOpen: function notifyOpen() {
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
      return onOpen_();
    });
    onMounted(function () {
      var _foundation3;

      var listEl = uiState.root.querySelector(".".concat(MDCListFoundation.cssClasses.ROOT));

      if (listEl) {
        list_ = listEl;
        list_.wrapFocus = true;
      }

      var _MDCDismissibleDrawer = MDCDismissibleDrawerFoundation.cssClasses,
          DISMISSIBLE = _MDCDismissibleDrawer.DISMISSIBLE,
          MODAL = _MDCDismissibleDrawer.MODAL;

      if (uiState.drawer.classList.contains(DISMISSIBLE)) {
        foundation = new MDCDismissibleDrawerFoundation(adapter);
      } else if (uiState.drawer.classList.contains(MODAL)) {
        foundation = new MDCModalDrawerFoundation(adapter);
      } else {
        throw new Error("mcwDrawer: Failed to instantiate component. Supported variants are ".concat(DISMISSIBLE, " and ").concat(MODAL, "."));
      }

      (_foundation3 = foundation) === null || _foundation3 === void 0 ? void 0 : _foundation3.init();
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
    onBeforeUnmount(function () {
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
      isOpen: isOpen
    });
  }
};

/* script */
const __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "root" }, [
    _c(
      "aside",
      { ref: "drawer", class: _vm.classes },
      [
        _vm._t("header"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mdc-drawer__content" },
          [_vm._t("default")],
          2
        )
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mdc-drawer-scrim" }),
    _vm._v(" "),
    _vm.toolbarSpacer
      ? _c("div", { staticClass: "mdc-top-app-bar--fixed-adjust" })
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$a = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    undefined,
    undefined,
    undefined
  );

var mcwDrawerDivider = {
  name: 'mcw-drawer-divider',
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      return h('hr', {
        class: {
          'mdc-list-divider': 1
        }
      });
    };
  }
};

var mcwDrawerHeader = {
  name: 'mcw-drawer-header',
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return h('div', {
        class: 'mdc-drawer__header'
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var dispatchProps = {
  event: String,
  'event-target': Object,
  'event-args': Array
};
var script$b = {
  name: 'mcw-drawer-item',
  inheritAttrs: false,
  props: _objectSpread2(_objectSpread2({}, dispatchProps), {}, {
    startIcon: String,
    modalClose: {
      type: Boolean,
      default: true
    },
    activated: Boolean,
    exactActiveClass: {
      type: String,
      default: 'mdc-list-item--activated'
    }
  }),
  components: {
    CustomLink: CustomLink
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        listeners = _ref.listeners,
        slots = _ref.slots,
        $root = _ref.root;
    var root = ref(null);
    var uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-drawer-item': 1
      }
    });

    var _useRipplePlugin = useRipplePlugin$1(root),
        rippleClasses = _useRipplePlugin.classes,
        styles = _useRipplePlugin.styles;

    var mcwDrawer = inject('mcwDrawer');
    var classes = computed(function () {
      return _objectSpread2(_objectSpread2({}, rippleClasses.value), uiState.classes);
    });
    var mylisteners = computed(function () {
      return _objectSpread2(_objectSpread2({}, listeners), {}, {
        click: function click(e) {
          mcwDrawer.isModal && props.modalClose && mcwDrawer.close();
          emit(e.type, e);
        }
      });
    });
    var itemClasses = computed(function () {
      return {
        'mdc-list-item--activated': props.activated
      };
    });
    var hasStartDetail = computed(function () {
      return props.startIcon || slots['start-detail'];
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      classes: classes,
      root: root,
      styles: styles,
      mylisteners: mylisteners,
      itemClasses: itemClasses,
      hasStartDetail: hasStartDetail
    });
  }
};

/* script */
const __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "custom-link",
    _vm._g(
      {
        ref: "root",
        class: [_vm.classes, _vm.itemClasses],
        style: _vm.styles,
        attrs: { link: _vm.$attrs }
      },
      _vm.mylisteners
    ),
    [
      _vm.hasStartDetail
        ? _c(
            "span",
            { staticClass: "mdc-list-item__graphic" },
            [
              _vm._t("start-detail", [
                _c(
                  "i",
                  {
                    staticClass: "material-icons",
                    attrs: { "aria-hidden": "true" }
                  },
                  [_vm._v(_vm._s(_vm.startIcon))]
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("span", { staticClass: "mdc-list-item__text" }, [_vm._t("default")], 2)
    ]
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$b = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    undefined,
    undefined
  );

var mcwDrawerList = {
  name: 'mcw-drawer-list',
  props: {
    dense: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return h('nav', {
        class: {
          'mdc-drawer-list': 1,
          'mdc-list': 1,
          'mdc-list--dense': props.dense
        }
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var drawer = BasePlugin({
  mcwDrawer: __vue_component__$a,
  mcwDrawerHeader: mcwDrawerHeader,
  mcwDrawerList: mcwDrawerList,
  mcwDrawerItem: __vue_component__$b,
  mcwDrawerDivider: mcwDrawerDivider
});

var script$c = {
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

/* script */
const __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "custom-link",
    _vm._g(
      {
        ref: "root",
        class: _vm.classes,
        style: _vm.styles,
        attrs: { role: "button", link: _vm.$attrs, tag: "button" }
      },
      _vm.listeners
    ),
    [
      _c("div", { staticClass: "mdc-fab__ripple" }),
      _vm._v(" "),
      _vm._t("icon", [
        _c("span", { staticClass: "mdc-fab__icon material-icons" }, [
          _vm._v(_vm._s(_vm.icon))
        ])
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "mdc-fab__label" },
        [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
        2
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$c = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    false,
    undefined,
    undefined,
    undefined
  );

var fab = BasePlugin({
  mcwFAB: __vue_component__$c
});

var script$d = {
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

/* script */
const __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { ref: "root", class: _vm.labelClasses },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$d = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    false,
    undefined,
    undefined,
    undefined
  );

var floatingLabel = BasePlugin({
  mcwFloatingLabel: __vue_component__$d
});

var script$e = {
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

/* script */
const __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.tag,
    {
      ref: "root",
      tag: "component",
      class: _vm.classes,
      style: _vm.styles,
      attrs: { "aria-pressed": "false", disabled: _vm.disabled },
      on: { click: _vm.onClick }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$e = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    false,
    undefined,
    undefined,
    undefined
  );

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
  mcwIconButton: __vue_component__$e,
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
var script$f = {
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

/* script */
const __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "mdc-layout-cell mdc-layout-grid__cell",
      class: _vm.classes
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$f = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    false,
    undefined,
    undefined,
    undefined
  );

var script$g = {
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

/* script */
const __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes }, [
    _c("div", { staticClass: "mdc-layout-grid__inner" }, [_vm._t("default")], 2)
  ])
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$g = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    false,
    undefined,
    undefined,
    undefined
  );

var script$h = {
  name: 'mcw-layout-inner-grid'
};

/* script */
const __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "mdc-layout-inner-grid mdc-layout-grid__inner" },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$h = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    false,
    undefined,
    undefined,
    undefined
  );

var layoutGrid = BasePlugin({
  mcwLayoutGrid: __vue_component__$g,
  mcwLayoutCell: __vue_component__$f,
  mcwLayoutInnerGrid: __vue_component__$h
});

var script$i = {
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

/* script */
const __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    class: _vm.lineClasses,
    style: _vm.lineStyles,
    on: { transitionend: _vm.onTransitionEnd }
  })
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$i = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    false,
    undefined,
    undefined,
    undefined
  );

var lineRipple = BasePlugin({
  mcwLineRipple: __vue_component__$i
});

var progressPropType_ = {
  type: [Number, String],
  validator: function validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};
var script$j = {
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

/* script */
const __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      { ref: "root", class: _vm.classes, attrs: { role: "progressbar" } },
      "div",
      _vm.rootAttrs,
      false
    ),
    [
      _c("div", { ref: "buffer", staticClass: "mdc-linear-progress__buffer" }, [
        _c("div", {
          staticClass: "mdc-linear-progress__buffer-bar",
          style: _vm.bufferbarStyles
        }),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-linear-progress__buffer-dots" })
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "primary",
          staticClass:
            "mdc-linear-progress__bar mdc-linear-progress__primary-bar",
          style: _vm.primaryStyles
        },
        [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "secondary",
          staticClass:
            "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
        },
        [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
      )
    ]
  )
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$j = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    false,
    undefined,
    undefined,
    undefined
  );

var linearProgress = BasePlugin({
  mcwLinearProgress: __vue_component__$j
});

var script$k = {
  props: {
    twoLine: String,
    disabled: Boolean,
    icon: [String, Boolean],
    groupIcon: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var isTwoLine = computed(function () {
      return props.twoLine || slots['secondary-text'];
    });
    var classes = computed(function () {
      return {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled
      };
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
    return {
      isTwoLine: isTwoLine,
      classes: classes,
      needGraphic: needGraphic,
      listIcon: listIcon,
      groupClasses: groupClasses
    };
  }
};

/* script */
const __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classes }, [
    _c("span", { staticClass: "mdc-list-item__ripple" }),
    _vm._v(" "),
    _vm.needGraphic
      ? _c(
          "span",
          { staticClass: "mdc-list-item__graphic", class: _vm.groupClasses },
          [
            _vm._t("graphic", [
              _vm.listIcon
                ? _c("i", { staticClass: "material-icons" }, [
                    _vm._v(_vm._s(_vm.listIcon))
                  ])
                : _vm._e()
            ])
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.isTwoLine
      ? _c("span", { staticClass: "mdc-list-item__text" }, [
          _c(
            "span",
            { staticClass: "mdc-list-item__primary-text" },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "mdc-list-item__secondary-text" },
            [_vm._t("secondary-text", [_vm._v(_vm._s(_vm.twoLine))])],
            2
          )
        ])
      : _c(
          "span",
          { staticClass: "mdc-list-item__text" },
          [_vm._t("default")],
          2
        )
  ])
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = undefined;
  /* scoped */
  const __vue_scope_id__$k = undefined;
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$k = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    false,
    undefined,
    undefined,
    undefined
  );

var strings$4 = MDCListFoundation.strings,
    cssClasses$1 = MDCListFoundation.cssClasses;
var script$l = {
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
    var emit = _ref.emit;
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
      // eslint-disable-next-line no-unused-vars
      var xx = uiState.listn; // for dependency

      return [].slice.call(uiState.listRoot.querySelectorAll(".".concat(cssClasses$1.LIST_ITEM_CLASS)));
    });

    var getListItemIndex = function getListItemIndex(evt) {
      var eventTarget = evt.target;
      var nearestParent = closest(eventTarget, ".".concat(cssClasses$1.LIST_ITEM_CLASS, ", .").concat(cssClasses$1.ROOT)); // Get the index of the element if it is a list item.

      if (nearestParent && matches(nearestParent, ".".concat(cssClasses$1.LIST_ITEM_CLASS))) {
        return listElements.value.indexOf(nearestParent);
      }

      return -1;
    };

    var layout = function layout() {
      foundation.setVerticalOrientation(props.ariaOrientation == 'vertical'); // List items need to have at least tabindex=-1 to be focusable.

      [].slice.call(uiState.listRoot.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      }); // Child button/a elements are not tabbable until the list item is focused.

      [].slice.call(uiState.listRoot.querySelectorAll(strings$4.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
      foundation.layout();
    };

    var initializeListType = function initializeListType() {
      var checkboxListItems = uiState.listRoot.querySelectorAll(strings$4.ARIA_ROLE_CHECKBOX_SELECTOR);
      var radioSelectedListItem = uiState.listRoot.querySelector(strings$4.ARIA_CHECKED_RADIO_SELECTOR);

      if (checkboxListItems.length) {
        var preselectedItems = uiState.listRoot.querySelectorAll(strings$4.ARIA_CHECKED_CHECKBOX_SELECTOR);
        selIndex.value = [].map.call(preselectedItems, function (listItem) {
          return listElements.value.indexOf(listItem);
        });
      } else if (radioSelectedListItem) {
        selIndex.value = listElements.value.indexOf(radioSelectedListItem);
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

      var toggleCheckbox = !matches(target, strings$4.CHECKBOX_RADIO_SELECTOR);
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

        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = listElements.value[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
        return listElements.value[index].getAttribute(attr);
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
        var listItem = listElements.value[index];
        return !!listItem.querySelector(strings$4.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function hasRadioAtIndex(index) {
        var listItem = listElements.value[index];
        return !!listItem.querySelector(strings$4.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
        var listItem = listElements.value[index];
        var toggleEl = listItem.querySelector(strings$4.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function isFocusInsideList() {
        return uiState.listRoot.contains(document.activeElement);
      },
      isRootFocused: function isRootFocused() {
        return document.activeElement === uiState.listRoot;
      },
      listItemAtIndexHasClass: function listItemAtIndexHasClass(index, className) {
        listElements.value[index].classList.contains(className);
      },
      notifyAction: function notifyAction(index) {
        emitCustomEvent(uiState.listRoot, strings$4.ACTION_EVENT, {
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
        var element = listElements.value[index];

        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
        var element = listElements.value[index];

        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
        var listItem = listElements.value[index];
        var toggleEl = listItem.querySelector(strings$4.CHECKBOX_RADIO_SELECTOR);
        toggleEl && (toggleEl.checked = isChecked);
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl === null || toggleEl === void 0 ? void 0 : toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = listElements.value[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(strings$4.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
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
      selIndex: selIndex
    });
  }
};

/* script */
const __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.tag,
    _vm._g(
      _vm._b(
        { ref: "listRoot", tag: "component", class: _vm.classes },
        "component",
        _vm.rootAttrs,
        false
      ),
      _vm.rootListeners
    ),
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  const __vue_inject_styles__$l = undefined;
  /* scoped */
  const __vue_scope_id__$l = undefined;
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$l = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    false,
    undefined,
    undefined,
    undefined
  );

var list = BasePlugin({
  mcwList: __vue_component__$l,
  mcwListItem: __vue_component__$k
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

var strings$5 = MDCMenuSurfaceFoundation.strings,
    cssClasses$2 = MDCMenuSurfaceFoundation.cssClasses;
var script$m = {
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
        emitCustomEvent(uiState.root, strings$5.CLOSED_EVENT, {});
        emit('change', false);
      },
      notifyOpen: function notifyOpen() {
        emitCustomEvent(uiState.root, strings$5.OPENED_EVENT, {});
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

/* script */
const __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._g({ ref: "root", class: _vm.classes }, _vm.rootListeners),
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  const __vue_inject_styles__$m = undefined;
  /* scoped */
  const __vue_scope_id__$m = undefined;
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$m = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    false,
    undefined,
    undefined,
    undefined
  );

var cssClasses$3 = MDCMenuFoundation.cssClasses,
    strings$6 = MDCMenuFoundation.strings;
var DefaultFocusState_ = {
  NONE: 0,
  LIST_ROOT: 1,
  FIRST_ITEM: 2,
  LAST_ITEM: 3
};
var script$n = {
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
      foundation.handleItemAction(items.value[index]);
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
      uiState.menuSurface.foundation.setFixedPosition(isFixed);
    };

    var hoistMenuToBody = function hoistMenuToBody() {
      uiState.menuSurface.foundation.hoistMenuToBody();
    };

    var setIsHoisted = function setIsHoisted(isHoisted) {
      uiState.menuSurface.foundation.setIsHoisted(isHoisted);
    };

    var setAbsolutePosition = function setAbsolutePosition(x, y) {
      uiState.menuSurface.foundation.setAbsolutePosition(x, y);
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
        var list = items.value;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
        var list = items.value;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
        var list = items.value;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
        var list = items.value;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: function elementContainsClass(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function closeSurface(skipRestoreFocus) {
        uiState.menuSurface.close(skipRestoreFocus);
        emit('change', false);
      },
      getElementIndex: function getElementIndex(element) {
        return items.value.indexOf(element);
      },
      notifySelected: function notifySelected(evtData) {
        emitCustomEvent(rootEl, strings$6.SELECTED_EVENT, {
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
        return items.value[index].focus();
      },
      focusListRoot: function focusListRoot() {
        return uiState.menuSurface.querySelector(strings$6.LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
        return !!closest(items.value[index], ".".concat(cssClasses$3.MENU_SELECTION_GROUP));
      },
      getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
        var selectionGroupEl = closest(items.value[index], ".".concat(cssClasses$3.MENU_SELECTION_GROUP));
        var selectedItemEl = selectionGroupEl.querySelector(".".concat(cssClasses$3.MENU_SELECTED_LIST_ITEM));
        return selectedItemEl ? items.value.indexOf(selectedItemEl) : -1;
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

/* script */
const __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "mcw-menu-surface",
    {
      ref: "menuSurface",
      staticClass: "mdc-menu",
      attrs: { "quick-open": _vm.quickOpen, open: _vm.menuOpen },
      on: {
        keydown: _vm.handleKeydown,
        change: _vm.onChange,
        "MDCMenuSurface:opened": _vm.handleMenuSurfaceOpened
      }
    },
    [
      _c(
        "mcw-list",
        {
          ref: "list",
          attrs: {
            role: "menu",
            "aria-hidden": "true",
            "wrap-focus": _vm.myWrapFocus,
            tabindex: "-1",
            "type-ahead": _vm.typeAhead,
            "single-selection": _vm.singleSelection
          },
          on: { change: _vm.handleAction }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  const __vue_inject_styles__$n = undefined;
  /* scoped */
  const __vue_scope_id__$n = undefined;
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$n = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    false,
    undefined,
    undefined,
    undefined
  );

var menu = BasePlugin({
  mcwMenu: __vue_component__$n,
  mcwMenuSurface: __vue_component__$m,
  mcwMenuItem: mcwMenuItem,
  mcwMenuAnchor: mcwMenuAnchor
});

var cssClasses$4 = MDCNotchedOutlineFoundation.cssClasses;
var script$o = {
  name: 'mcw-notched-outline',
  components: {
    mcwFloatingLabel: __vue_component__$d
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

/* script */
const __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { ref: "outlined", class: _vm.outlinedClasses }, [
    _c("span", { staticClass: "mdc-notched-outline__leading" }),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "mdc-notched-outline__notch", style: _vm.notchStyles },
      [
        _vm.$slots.default
          ? _c("mcw-floating-label", { ref: "labelEl" }, [_vm._t("default")], 2)
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("span", { staticClass: "mdc-notched-outline__trailing" })
  ])
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = undefined;
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$o = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    false,
    undefined,
    undefined,
    undefined
  );

var notchedOutline = BasePlugin({
  mcwNotchedOutline: __vue_component__$o
});

var radioId_ = 0;
var script$p = {
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

/* script */
const __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.label
    ? _c(
        "div",
        { staticClass: "mdc-radio-wrapper", class: _vm.formFieldClasses },
        [
          _c(
            "div",
            { ref: "root", class: _vm.rootClasses, style: _vm.styles },
            [
              _c(
                "input",
                _vm._b(
                  {
                    ref: "controlEl",
                    staticClass: "mdc-radio__native-control",
                    attrs: {
                      id: _vm.radioId,
                      name: _vm.name,
                      type: "radio",
                      disabled: _vm.disabled
                    },
                    domProps: {
                      value: _vm.value,
                      checked: _vm.picked == _vm.value
                    },
                    on: { change: _vm.onChange }
                  },
                  "input",
                  _vm.$attrs,
                  false
                )
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "mdc-radio__ripple" })
            ]
          ),
          _vm._v(" "),
          _c(
            "label",
            { ref: "labelEl", attrs: { for: _vm.radioId } },
            [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
            2
          )
        ]
      )
    : _c("div", { ref: "root", class: _vm.rootClasses, style: _vm.styles }, [
        _c(
          "input",
          _vm._b(
            {
              ref: "controlEl",
              staticClass: "mdc-radio__native-control",
              attrs: {
                id: _vm.radioId,
                name: _vm.name,
                type: "radio",
                disabled: _vm.disabled
              },
              domProps: { value: _vm.value, checked: _vm.picked == _vm.value },
              on: { change: _vm.onChange }
            },
            "input",
            _vm.$attrs,
            false
          )
        ),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-radio__ripple" })
      ])
};
var __vue_staticRenderFns__$p = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mdc-radio__background" }, [
      _c("div", { staticClass: "mdc-radio__outer-circle" }),
      _vm._v(" "),
      _c("div", { staticClass: "mdc-radio__inner-circle" })
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mdc-radio__background" }, [
      _c("div", { staticClass: "mdc-radio__outer-circle" }),
      _vm._v(" "),
      _c("div", { staticClass: "mdc-radio__inner-circle" })
    ])
  }
];
__vue_render__$p._withStripped = true;

  /* style */
  const __vue_inject_styles__$p = undefined;
  /* scoped */
  const __vue_scope_id__$p = undefined;
  /* module identifier */
  const __vue_module_identifier__$p = undefined;
  /* functional template */
  const __vue_is_functional_template__$p = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$p = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    false,
    undefined,
    undefined,
    undefined
  );

var radio = BasePlugin({
  mcwRadio: __vue_component__$p
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

var script$q = {
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

/* script */
const __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "i",
    _vm._g(
      _vm._b(
        { ref: "root", class: _vm.classes, style: _vm.styles },
        "i",
        _vm.rootAttrs,
        false
      ),
      _vm.rootListeners
    ),
    [_vm._v(_vm._s(_vm.icon))]
  )
};
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

  /* style */
  const __vue_inject_styles__$q = undefined;
  /* scoped */
  const __vue_scope_id__$q = undefined;
  /* module identifier */
  const __vue_module_identifier__$q = undefined;
  /* functional template */
  const __vue_is_functional_template__$q = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$q = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    false,
    undefined,
    undefined,
    undefined
  );

var strings$7 = MDCSelectFoundation.strings;
var uid_ = 0;
var script$r = {
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

    var handleMenuItemAction = function handleMenuItemAction(_ref2) {
      var index = _ref2.index;
      return foundation.handleMenuItemAction(index);
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
        return uiState.menu.$el.querySelector(strings$7.SELECTED_ITEM_SELECTOR);
      },
      getMenuItemAttr: function getMenuItemAttr(menuItem, attr) {
        return menuItem.getAttribute(attr);
      },
      setSelectedText: function setSelectedText(text) {
        return uiState.selectedTextContent = text;
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
        return menuItems.value[index].focus();
      },
      getMenuItemCount: function getMenuItemCount() {
        return menuItems.value.length;
      },
      getMenuItemValues: function getMenuItemValues() {
        return menuItems.value.map(function (el) {
          return el.getAttribute(strings$7.VALUE_ATTR) || '';
        });
      },
      getMenuItemTextAtIndex: function getMenuItemTextAtIndex(index) {
        return menuItems.value[index].textContent;
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
        emitCustomEvent(uiState.root, strings$7.CHANGE_EVENT, {
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

    var refreshIndex = function refreshIndex() {
      var items = menuItems.value.map(function (el) {
        return el.getAttribute(strings$7.VALUE_ATTR) || '';
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
      refreshIndex: refreshIndex
    });
  },
  components: {
    SelectHelperText: SelectHelperText,
    SelectIcon: __vue_component__$q
  }
}; // ===
// Private functions
// ===

function getNormalizedXCoordinate(evt) {
  var targetClientRect = evt.target.getBoundingClientRect();
  var xCoordinate = evt.clientX;
  return xCoordinate - targetClientRect.left;
}

/* script */
const __vue_script__$r = script$r;

/* template */
var __vue_render__$r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "select-wrapper" },
    [
      _c(
        "div",
        { ref: "root", class: _vm.rootClasses },
        [
          _c(
            "div",
            _vm._b(
              {
                ref: "anchorEl",
                staticClass: "mdc-select__anchor",
                class: _vm.rippleClasses,
                style: _vm.rippleStyles,
                attrs: {
                  role: "button",
                  "aria-haspopup": "listbox",
                  "aria-required": _vm.required
                },
                on: {
                  click: _vm.handleClick,
                  keydown: _vm.handleKeydown,
                  focus: _vm.handleFocus,
                  blur: _vm.handleBlur
                }
              },
              "div",
              _vm.selectAnchorAttrs,
              false
            ),
            [
              _vm.leadingIcon
                ? _c("select-icon", {
                    ref: "leadingIconEl",
                    attrs: {
                      icon: _vm.leadingIcon,
                      tabindex: "0",
                      role: "button"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              !_vm.outlined
                ? _c("span", { staticClass: "mdc-select__ripple" })
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "mdc-select__selected-text" }, [
                _vm._v(_vm._s(_vm.selectedTextContent))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "mdc-select__dropdown-icon" }, [
                _c(
                  "svg",
                  {
                    staticClass: "mdc-select__dropdown-icon-graphic",
                    attrs: { viewBox: "7 10 10 5" }
                  },
                  [
                    _c("polygon", {
                      staticClass: "mdc-select__dropdown-icon-inactive",
                      attrs: {
                        stroke: "none",
                        "fill-rule": "evenodd",
                        points: "7 10 12 15 17 10"
                      }
                    }),
                    _vm._v(" "),
                    _c("polygon", {
                      staticClass: "mdc-select__dropdown-icon-active",
                      attrs: {
                        stroke: "none",
                        "fill-rule": "evenodd",
                        points: "7 15 12 10 17 15"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.outlined
                ? [
                    _c("mcw-notched-outline", { ref: "outlineEl" }, [
                      _vm._v(_vm._s(_vm.label))
                    ])
                  ]
                : [
                    _c("mcw-floating-label", { ref: "labelEl" }, [
                      _vm._v(_vm._s(_vm.label))
                    ]),
                    _vm._v(" "),
                    _c("mdc-line-ripple", { ref: "lineRippleEl" })
                  ]
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "mcw-menu",
            {
              ref: "menu",
              staticClass: "mdc-select__menu",
              class: _vm.menuClasses,
              attrs: { role: "listbox" },
              on: { change: _vm.handleChange, select: _vm.handleMenuItemAction }
            },
            [_vm._t("default")],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.helptext
        ? _c("select-helper-text", {
            ref: "helperTextEl",
            attrs: {
              id: _vm.helpId,
              helptextPersistent: _vm.helptextPersistent,
              helptextValidation: _vm.helptextValidation,
              helptext: _vm.helptext
            }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

  /* style */
  const __vue_inject_styles__$r = undefined;
  /* scoped */
  const __vue_scope_id__$r = undefined;
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$r = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    false,
    undefined,
    undefined,
    undefined
  );

var select = BasePlugin({
  mcwSelect: __vue_component__$r
});

var script$s = {
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

/* script */
const __vue_script__$s = script$s;

/* template */
var __vue_render__$s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      {
        ref: "root",
        class: _vm.classes,
        attrs: { tabindex: "0", role: "slider", "aria-label": "Select value" }
      },
      "div",
      _vm.sliderAttrs,
      false
    ),
    [
      _c("div", { staticClass: "mdc-slider__track-container" }, [
        _c("div", { staticClass: "mdc-slider__track", style: _vm.trackStyles }),
        _vm._v(" "),
        _vm.hasMarkers
          ? _c("div", {
              ref: "trackMarkerContainer",
              staticClass: "mdc-slider__track-marker-container",
              style: _vm.markerBkgdShorthand
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "thumbContainer",
          staticClass: "mdc-slider__thumb-container",
          style: _vm.thumbStyles
        },
        [
          _vm.discrete
            ? _c("div", { staticClass: "mdc-slider__pin" }, [
                _c("span", { staticClass: "mdc-slider__pin-value-marker" }, [
                  _vm._v(_vm._s(_vm.markerValue))
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "mdc-slider__thumb",
              attrs: { width: "21", height: "21" }
            },
            [_c("circle", { attrs: { cx: "10.5", cy: "10.5", r: "7.875" } })]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-slider__focus-ring" })
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

  /* style */
  const __vue_inject_styles__$s = undefined;
  /* scoped */
  const __vue_scope_id__$s = undefined;
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$s = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    false,
    undefined,
    undefined,
    undefined
  );

var slider = BasePlugin({
  mcwSlider: __vue_component__$s
});

var noop = function noop() {};

var script$t = {
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

/* script */
const __vue_script__$t = script$t;

/* template */
var __vue_render__$t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "mcw-snackbar",
    _vm._g(
      _vm._b({ attrs: { open: _vm.open } }, "mcw-snackbar", _vm.snack, false),
      _vm.listeners
    )
  )
};
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

  /* style */
  const __vue_inject_styles__$t = undefined;
  /* scoped */
  const __vue_scope_id__$t = undefined;
  /* module identifier */
  const __vue_module_identifier__$t = undefined;
  /* functional template */
  const __vue_is_functional_template__$t = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$t = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    false,
    undefined,
    undefined,
    undefined
  );

var strings$8 = MDCSnackbarFoundation.strings,
    numbers = MDCSnackbarFoundation.numbers;
var script$u = {
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

      labelEl.setAttribute(strings$8.ARIA_LIVE_LABEL_TEXT_ATTR, props.message);
      setTimeout(function () {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

        labelEl.removeAttribute(strings$8.ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

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
        emit(strings$8.CLOSED_EVENT, reason ? {
          reason: reason
        } : {});
        emit('change', false);
        emit('hide');
      },
      notifyClosing: function notifyClosing(reason) {
        emit(strings$8.CLOSING_EVENT, reason ? {
          reason: reason
        } : {});
        emit('update:reason', reason);
      },
      notifyOpened: function notifyOpened() {
        emit(strings$8.OPENED_EVENT, {});
        emit('change', true);
        emit('show', {});
      },
      notifyOpening: function notifyOpening() {
        return emit(strings$8.OPENING_EVENT, {});
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
  return Boolean(closest(target, strings$8.ACTION_SELECTOR));
}

function isActionIcon_(target) {
  return Boolean(closest(target, strings$8.DISMISS_SELECTOR));
}

/* script */
const __vue_script__$u = script$u;

/* template */
var __vue_render__$u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.rootClasses }, [
    _c(
      "div",
      {
        staticClass: "mdc-snackbar__surface",
        on: { click: _vm.surfaceClickHandler }
      },
      [
        _c(
          "div",
          {
            ref: "labelEl",
            staticClass: "mdc-snackbar__label",
            attrs: { role: "status", "aria-live": "polite" }
          },
          [
            _vm.showMessage
              ? [_vm._v(_vm._s(_vm.message))]
              : _c(
                  "span",
                  {
                    staticStyle: {
                      display: "inline-block",
                      width: "0",
                      height: "'1px'"
                    }
                  },
                  [_vm._v(" ")]
                )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-snackbar__actions" }, [
          _vm.actionText
            ? _c(
                "button",
                _vm._g(
                  {
                    ref: "actionEl",
                    staticClass: "mdc-button mdc-snackbar__action",
                    attrs: { type: "button" }
                  },
                  _vm.$listeners
                ),
                [
                  _c("div", { staticClass: "mdc-button__ripple" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "mdc-button__label" }, [
                    _vm._v("Retry")
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showDismissAction
            ? _c(
                "button",
                {
                  staticClass:
                    "mdc-icon-button mdc-snackbar__dismiss material-icons",
                  attrs: { type: "button", title: "Dismiss" }
                },
                [_vm._v("\n        close\n      ")]
              )
            : _vm._e()
        ])
      ]
    )
  ])
};
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$u = undefined;
  /* scoped */
  const __vue_scope_id__$u = undefined;
  /* module identifier */
  const __vue_module_identifier__$u = undefined;
  /* functional template */
  const __vue_is_functional_template__$u = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$u = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$u,
    __vue_script__$u,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    false,
    undefined,
    undefined,
    undefined
  );

var snackbar = BasePlugin({
  mcwSnackbar: __vue_component__$u,
  mcwSnackbarQueue: __vue_component__$t
});

var switchId_ = 0;
var script$v = {
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

/* script */
const __vue_script__$v = script$v;

/* template */
var __vue_render__$v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "mdc-switch-wrapper",
      class: {
        "mdc-form-field": _vm.hasLabel,
        "mdc-form-field--align-end": _vm.hasLabel && _vm.alignEnd
      }
    },
    [
      _c(
        "div",
        {
          ref: "root",
          staticClass: "mdc-switch",
          class: _vm.classes,
          style: _vm.styles
        },
        [
          _c("div", { staticClass: "mdc-switch__track" }),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-switch__thumb-underlay" }, [
            _c("div", { staticClass: "mdc-switch__thumb" }),
            _vm._v(" "),
            _c(
              "input",
              _vm._b(
                {
                  staticClass: "mdc-switch__native-control",
                  attrs: {
                    name: _vm.name,
                    id: _vm.switchId,
                    type: "checkbox",
                    role: "switch",
                    disabled: _vm.nativeControlDisabled
                  },
                  domProps: {
                    value: _vm.value,
                    checked: _vm.nativeControlChecked
                  },
                  on: { change: _vm.onChanged }
                },
                "input",
                _vm.nativeAttrs,
                false
              )
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.hasLabel
        ? _c(
            "label",
            { staticClass: "mdc-switch-label", attrs: { for: _vm.switchId } },
            [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
            2
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$v = [];
__vue_render__$v._withStripped = true;

  /* style */
  const __vue_inject_styles__$v = undefined;
  /* scoped */
  const __vue_scope_id__$v = undefined;
  /* module identifier */
  const __vue_module_identifier__$v = undefined;
  /* functional template */
  const __vue_is_functional_template__$v = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$v = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
    __vue_inject_styles__$v,
    __vue_script__$v,
    __vue_scope_id__$v,
    __vue_is_functional_template__$v,
    __vue_module_identifier__$v,
    false,
    undefined,
    undefined,
    undefined
  );

var switchControl = BasePlugin({
  mcwSwitch: __vue_component__$v
});

var strings$9 = MDCTabBarFoundation.strings;
var script$w = {
  name: 'mcw-tab-bar',
  props: {
    activeTabIndex: [Number, String],
    fade: Boolean,
    stacked: Boolean,
    spanContent: Boolean
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
      return [].slice.call(root.value.querySelectorAll(strings$9.TAB_SELECTOR));
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
        emitCustomEvent(root.value, strings$9.TAB_ACTIVATED_EVENT, {
          index: index
        }, true);
        emit('change', index);
      }
    };
    onMounted(function () {
      foundation = foundation = new MDCTabBarFoundation(adapter);
      foundation.init(); // ensure active tab

      foundation.activateTab(props.activeTabIndex || 0);

      for (var i = 0; i < tabList.value.length; i++) {
        if (tabList.value[i].active) {
          foundation.scrollIntoView(i);
          break;
        }
      }
    });
    onBeforeUnmount(function () {
      foundation.destroy();
    });
    return {
      root: root,
      scroller: scroller,
      listeners: listeners
    };
  }
};

/* script */
const __vue_script__$w = script$w;

/* template */
var __vue_render__$w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._g(
      { ref: "root", staticClass: "mdc-tab-bar", attrs: { role: "tablist" } },
      _vm.listeners
    ),
    [_c("mcw-tab-scroller", { ref: "scroller" }, [_vm._t("default")], 2)],
    1
  )
};
var __vue_staticRenderFns__$w = [];
__vue_render__$w._withStripped = true;

  /* style */
  const __vue_inject_styles__$w = undefined;
  /* scoped */
  const __vue_scope_id__$w = undefined;
  /* module identifier */
  const __vue_module_identifier__$w = undefined;
  /* functional template */
  const __vue_is_functional_template__$w = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$w = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
    __vue_inject_styles__$w,
    __vue_script__$w,
    __vue_scope_id__$w,
    __vue_is_functional_template__$w,
    __vue_module_identifier__$w,
    false,
    undefined,
    undefined,
    undefined
  );

var cssClasses$5 = MDCTabIndicatorFoundation.cssClasses;
var script$x = {
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
        adapter.addClass(cssClasses$5.ACTIVE);
        return;
      }

      var currentClientRect = computeContentClientRect();
      var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      var xPosition = previousIndicatorClientRect.left - currentClientRect.left; // THE FIX - use request animation frame to ensure framework has rendered DOM

      requestAnimationFrame(function () {
        adapter.addClass(cssClasses$5.NO_TRANSITION);
        adapter.setContentStyleProperty('transform', "translateX(".concat(xPosition, "px) scaleX(").concat(widthDelta, ")"));
        requestAnimationFrame(function () {
          adapter.removeClass(cssClasses$5.NO_TRANSITION);
          adapter.addClass(cssClasses$5.ACTIVE);
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

/* script */
const __vue_script__$x = script$x;

/* template */
var __vue_render__$x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { staticClass: "mdc-tab-indicator", class: _vm.classes }, [
    _c(
      "span",
      _vm._b(
        {
          ref: "contentEl",
          staticClass: "mdc-tab-indicator__content",
          class: _vm.contentClasses,
          style: _vm.styles
        },
        "span",
        _vm.contentAttrs,
        false
      ),
      [_vm._v(_vm._s(_vm.icon))]
    )
  ])
};
var __vue_staticRenderFns__$x = [];
__vue_render__$x._withStripped = true;

  /* style */
  const __vue_inject_styles__$x = undefined;
  /* scoped */
  const __vue_scope_id__$x = undefined;
  /* module identifier */
  const __vue_module_identifier__$x = undefined;
  /* functional template */
  const __vue_is_functional_template__$x = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$x = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
    __vue_inject_styles__$x,
    __vue_script__$x,
    __vue_scope_id__$x,
    __vue_is_functional_template__$x,
    __vue_module_identifier__$x,
    false,
    undefined,
    undefined,
    undefined
  );

var script$y = {
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

/* script */
const __vue_script__$y = script$y;

/* template */
var __vue_render__$y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes }, [
    _c(
      "div",
      _vm._g(
        { ref: "area", class: _vm.areaClasses, style: _vm.areaStyles },
        _vm.areaListeners
      ),
      [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "mdc-tab-scroller__scroll-content",
            style: _vm.contentStyles,
            on: { transitionend: _vm.onTransitionEnd }
          },
          [_vm._t("default")],
          2
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$y = [];
__vue_render__$y._withStripped = true;

  /* style */
  const __vue_inject_styles__$y = undefined;
  /* scoped */
  const __vue_scope_id__$y = undefined;
  /* module identifier */
  const __vue_module_identifier__$y = undefined;
  /* functional template */
  const __vue_is_functional_template__$y = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$y = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
    __vue_inject_styles__$y,
    __vue_script__$y,
    __vue_scope_id__$y,
    __vue_is_functional_template__$y,
    __vue_module_identifier__$y,
    false,
    undefined,
    undefined,
    undefined
  );

var tabId_ = 0;
var script$z = {
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

/* script */
const __vue_script__$z = script$z;

/* template */
var __vue_render__$z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "custom-link",
    {
      ref: "root",
      class: _vm.classes,
      style: _vm.styles,
      attrs: { id: _vm.tabId, link: _vm.linkAttrs },
      on: { click: _vm.onClick }
    },
    [
      _c(
        "span",
        { ref: "content", staticClass: "mdc-tab__content" },
        [
          _vm.hasIcon
            ? _c(
                "i",
                {
                  ref: "iconEl",
                  staticClass: "mdc-tab__icon",
                  class: _vm.hasIcon.classes,
                  attrs: { slot: "icon", tabindex: "0", "aria-hidden": "true" },
                  slot: "icon"
                },
                [_vm._v(_vm._s(_vm.hasIcon.content))]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hasText
            ? _c(
                "span",
                { staticClass: "mdc-tab__text-label" },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.spanContent
            ? _c("mcw-tab-indicator", {
                ref: "tabIndicator",
                attrs: { fade: _vm.fade }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("span", {
            ref: "rippleSurface",
            staticClass: "mdc-tab__ripple",
            class: _vm.rippleClasses,
            style: _vm.styles
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.spanContent
        ? _c("mcw-tab-indicator", {
            ref: "tabIndicator",
            attrs: { fade: _vm.fade }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$z = [];
__vue_render__$z._withStripped = true;

  /* style */
  const __vue_inject_styles__$z = undefined;
  /* scoped */
  const __vue_scope_id__$z = undefined;
  /* module identifier */
  const __vue_module_identifier__$z = undefined;
  /* functional template */
  const __vue_is_functional_template__$z = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$z = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
    __vue_inject_styles__$z,
    __vue_script__$z,
    __vue_scope_id__$z,
    __vue_is_functional_template__$z,
    __vue_module_identifier__$z,
    false,
    undefined,
    undefined,
    undefined
  );

var tabs = BasePlugin({
  mcwTab: __vue_component__$z,
  mcwTabBar: __vue_component__$w,
  mcwTabScroller: __vue_component__$y,
  mcwTabIndicator: __vue_component__$x
});

var script$A = {
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

/* script */
const __vue_script__$A = script$A;

/* template */
var __vue_render__$A = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "mdc-text-field-character-counter" }, [
    _vm._v(_vm._s(_vm.textContent))
  ])
};
var __vue_staticRenderFns__$A = [];
__vue_render__$A._withStripped = true;

  /* style */
  const __vue_inject_styles__$A = undefined;
  /* scoped */
  const __vue_scope_id__$A = undefined;
  /* module identifier */
  const __vue_module_identifier__$A = undefined;
  /* functional template */
  const __vue_is_functional_template__$A = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$A = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
    __vue_inject_styles__$A,
    __vue_script__$A,
    __vue_scope_id__$A,
    __vue_is_functional_template__$A,
    __vue_module_identifier__$A,
    false,
    undefined,
    undefined,
    undefined
  );

var TextfieldHelperText = {
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

/* script */
const __vue_script__$B = TextfieldHelperText;

/* template */
var __vue_render__$B = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b({ class: _vm.classes }, "div", _vm.rootAttrs, false),
    [_vm._v(_vm._s(_vm.helpertext))]
  )
};
var __vue_staticRenderFns__$B = [];
__vue_render__$B._withStripped = true;

  /* style */
  const __vue_inject_styles__$B = undefined;
  /* scoped */
  const __vue_scope_id__$B = undefined;
  /* module identifier */
  const __vue_module_identifier__$B = undefined;
  /* functional template */
  const __vue_is_functional_template__$B = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$B = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
    __vue_inject_styles__$B,
    __vue_script__$B,
    __vue_scope_id__$B,
    __vue_is_functional_template__$B,
    __vue_module_identifier__$B,
    false,
    undefined,
    undefined,
    undefined
  );

var script$B = {
  name: 'textfield-icon',
  props: {
    disabled: Boolean,
    leading: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var uiState = reactive({
      classes: _defineProperty({
        'mdc-text-field__icon': 1
      }, "mdc-text-field__icon--".concat(props.leading ? 'leading' : 'trailing'), 1),
      rootAttrs: {},
      textContent: null,
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
      setContent: function setContent(content) {
        uiState.root.textContent = content;
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

/* script */
const __vue_script__$C = script$B;

/* template */
var __vue_render__$C = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "i",
    _vm._b(
      { ref: "root", staticClass: "material-icons", class: _vm.classes },
      "i",
      _vm.rootAttrs,
      false
    ),
    [_vm.textContent ? [_vm._v(_vm._s(_vm.textContent))] : _vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$C = [];
__vue_render__$C._withStripped = true;

  /* style */
  const __vue_inject_styles__$C = undefined;
  /* scoped */
  const __vue_scope_id__$C = undefined;
  /* module identifier */
  const __vue_module_identifier__$C = undefined;
  /* functional template */
  const __vue_is_functional_template__$C = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$C = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
    __vue_inject_styles__$C,
    __vue_script__$C,
    __vue_scope_id__$C,
    __vue_is_functional_template__$C,
    __vue_module_identifier__$C,
    false,
    undefined,
    undefined,
    undefined
  );

var strings$a = MDCTextFieldFoundation.strings;
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
        'mdc-text-field--with-leading-icon': Boolean(slots.leadingIcon),
        'mdc-text-field--with-trailing-icon': Boolean(slots.trailingIcon),
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

      var leadingIconEl = uiState.wrapper.querySelector(strings$a.LEADING_ICON_SELECTOR);
      var trailingIconEl = uiState.wrapper.querySelector(strings$a.TRAILING_ICON_SELECTOR);
      foundation = new MDCTextFieldFoundation(_objectSpread2({}, adapter), {
        characterCounter: (_uiState$characterCou = uiState.characterCounterEl) === null || _uiState$characterCou === void 0 ? void 0 : _uiState$characterCou.foundation,
        helperText: (_uiState$helpertext = uiState.helpertext) === null || _uiState$helpertext === void 0 ? void 0 : _uiState$helpertext.foundation,
        leadingIcon: leadingIconEl === null || leadingIconEl === void 0 ? void 0 : leadingIconEl.__vue__.foundation,
        trailingIcon: trailingIconEl === null || trailingIconEl === void 0 ? void 0 : trailingIconEl.__vue__.foundation
      });
      foundation.init();
      foundation.setValue(props.value);
      foundation.setDisabled(props.disabled);
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
      rippleStyles: rippleStyles
    });
  },
  components: {
    TextfieldHelperText: TextfieldHelperText,
    TextfieldIcon: __vue_component__$C
  }
};

/* script */
const __vue_script__$D = script$C;

/* template */
var __vue_render__$D = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "wrapper", staticClass: "textfield-container" }, [
    !_vm.multiline
      ? _c(
          "label",
          { ref: "root", class: _vm.rootClasses, style: _vm.rippleStyles },
          [
            !_vm.outline
              ? _c("span", { staticClass: "mdc-text-field__ripple" })
              : _vm._e(),
            _vm._v(" "),
            _vm._t("leadingIcon"),
            _vm._v(" "),
            _vm.prefix
              ? _c(
                  "span",
                  {
                    staticClass:
                      "mdc-text-field__affix mdc-text-field__affix--prefix"
                  },
                  [_vm._v(_vm._s(_vm.prefix))]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "input",
              _vm._g(
                _vm._b(
                  {
                    ref: "input",
                    class: _vm.inputClasses,
                    attrs: {
                      type: _vm.type,
                      minlength: _vm.minlength,
                      maxlength: _vm.maxlength,
                      "aria-label": _vm.label,
                      "aria-controls": _vm.inputAriaControls,
                      "aria-labelledby": _vm.labelId,
                      "aria-describedby": _vm.inputAriaControls
                    }
                  },
                  "input",
                  _vm.$attrs,
                  false
                ),
                _vm.inputListeners
              )
            ),
            _vm._v(" "),
            _vm.suffix
              ? _c(
                  "span",
                  {
                    staticClass:
                      "mdc-text-field__affix mdc-text-field__affix--suffix"
                  },
                  [_vm._v(_vm._s(_vm.suffix))]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.hasLabel
              ? _c(
                  "mcw-floating-label",
                  {
                    ref: "labelEl",
                    attrs: { id: _vm.labelId, required: _vm.required }
                  },
                  [_vm._v(_vm._s(_vm.label))]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._t("trailingIcon"),
            _vm._v(" "),
            _vm.outline
              ? _c("mcw-notched-outline", { ref: "labelEl" }, [
                  _vm._v(_vm._s(_vm.label))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.hasLineRipple
              ? _c("mcw-line-ripple", { ref: "lineRippleEl" })
              : _vm._e()
          ],
          2
        )
      : _c(
          "label",
          { ref: "root", class: _vm.classes },
          [
            _vm.resizer
              ? _c("span", { staticClass: "mdc-text-field__resizer" }, [
                  _c(
                    "textarea",
                    _vm._g(
                      _vm._b(
                        {
                          ref: "input",
                          class: _vm.inputClasses,
                          attrs: {
                            minlength: _vm.minlength,
                            maxlength: _vm.maxlength,
                            "aria-label": _vm.label,
                            "aria-controls": _vm.inputAriaControls,
                            cols: _vm.cols,
                            rows: _vm.rows
                          }
                        },
                        "textarea",
                        _vm.$attrs,
                        false
                      ),
                      _vm.inputListeners
                    )
                  )
                ])
              : _c(
                  "textarea",
                  _vm._g(
                    _vm._b(
                      {
                        ref: "input",
                        class: _vm.inputClasses,
                        attrs: {
                          minlength: _vm.minlength,
                          maxlength: _vm.maxlength,
                          "aria-label": _vm.label,
                          "aria-controls": _vm.inputAriaControls,
                          cols: _vm.cols,
                          rows: _vm.rows
                        }
                      },
                      "textarea",
                      _vm.$attrs,
                      false
                    ),
                    _vm.inputListeners
                  )
                ),
            _vm._v(" "),
            _vm.internalCharacterCounter
              ? _c("mcw-character-counter", { ref: "characterCounterEl" })
              : _vm._e(),
            _vm._v(" "),
            _vm.outline
              ? _c("mcw-notched-outline", { ref: "labelEl" }, [
                  _vm._v(_vm._s(_vm.label))
                ])
              : _vm._e()
          ],
          1
        ),
    _vm._v(" "),
    _vm.hasHelpline
      ? _c(
          "div",
          { staticClass: "mdc-text-field-helper-line" },
          [
            _vm.helptext
              ? _c("mcw-textfield-helper-text", {
                  ref: "helpertext",
                  attrs: {
                    id: _vm.helpTextId,
                    helptext: _vm.helptext,
                    persistent: _vm.helptextPersistent,
                    validation: _vm.helptextValidation
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.helperCharacterCounter
              ? _c("mcw-character-counter", { ref: "characterCounterEl" })
              : _vm._e()
          ],
          1
        )
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$D = [];
__vue_render__$D._withStripped = true;

  /* style */
  const __vue_inject_styles__$D = undefined;
  /* scoped */
  const __vue_scope_id__$D = undefined;
  /* module identifier */
  const __vue_module_identifier__$D = undefined;
  /* functional template */
  const __vue_is_functional_template__$D = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$D = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
    __vue_inject_styles__$D,
    __vue_script__$D,
    __vue_scope_id__$D,
    __vue_is_functional_template__$D,
    __vue_module_identifier__$D,
    false,
    undefined,
    undefined,
    undefined
  );

var textfield = BasePlugin({
  mcwTextfield: __vue_component__$D,
  mcwTextfieldIcon: __vue_component__$C,
  mcwCharacterCounter: __vue_component__$A,
  mcwTextfieldHelperText: __vue_component__$B
});

var mcwFixedAdjust = {
  name: 'mcw-fixed-adjust',
  props: {
    tag: {
      type: String,
      default: 'main'
    },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean
  },
  setup: function setup(props, _ref) {
    var listeners = _ref.listeners,
        slots = _ref.slots;
    return function () {
      var _ref2, _slots$default;

      var base = 'mdc-top-app-bar';
      var suffix = '-fixed-adjust';
      return h(props.tag, {
        class: [(_ref2 = {}, _defineProperty(_ref2, base + '--short' + suffix, props.short), _defineProperty(_ref2, base + '--dense' + suffix, props.dense && !props.prominent), _defineProperty(_ref2, base + '--dense-prominent' + suffix, props.dense && props.prominent), _defineProperty(_ref2, base + '--prominent' + suffix, !props.dense && props.prominent), _defineProperty(_ref2, base + '-' + suffix, !props.short && !props.dense && !props.prominent), _ref2)]
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var mcwTopAppBarIcon = {
  name: 'mcw-top-app-bar-icon',
  props: {
    actionItem: Boolean
  },
  setup: function setup(props, _ref) {
    var listeners = _ref.listeners,
        slots = _ref.slots;
    return function () {
      var _slots$default;

      return h('button', {
        class: {
          'mdc-icon-button': 1,
          'material-icons': 1,
          'mdc-top-app-bar__action-item': props.actionItem,
          'mdc-top-app-bar__navigation-icon': !props.actionItem
        },
        on: listeners
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var mcwTopAppBarRow = {
  name: 'mcw-top-app-bar-row',
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
        class: ['mdc-top-app-bar__row']
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var mcwTopAppBarSection = {
  name: 'mcw-top-app-bar-section',
  props: {
    align: {
      type: String,
      default: function _default() {
        return 'start';
      }
    },
    tag: {
      type: String,
      default: function _default() {
        return 'div';
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var classes = ['mdc-top-app-bar__section'];
    props.align == 'start' && classes.push('mdc-top-app-bar__section--align-start');
    props.align == 'end' && classes.push('mdc-top-app-bar__section--align-end');
    return function () {
      var _slots$default;

      return h(props.tag, {
        class: classes
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var mcwTopAppBarTitle = {
  name: 'mcw-top-app-bar-title',
  props: {
    tag: {
      type: String,
      default: function _default() {
        return 'span';
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return h(props.tag, {
        class: ['mdc-top-app-bar__title']
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var cssClasses$6 = MDCTopAppBarFoundation.cssClasses,
    strings$b = MDCTopAppBarFoundation.strings;
var script$D = {
  name: 'mcw-top-app-bar',
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    fixed: Boolean,
    dense: Boolean,
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
      rootStyles: {
        top: '0'
      },
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': props.dense,
        'mdc-top-app-bar--short': props.short,
        'mdc-top-app-bar--short-collapsed': props.shortCollapsed,
        'mdc-top-app-bar--prominent': props.prominent,
        'mdc-top-app-bar--fixed': props.fixed
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

    var handleWindowResize;
    var handleTargetScroll;
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
        emitCustomEvent(uiState.root, strings$b.NAVIGATION_EVENT, {},
        /** shouldBubble */
        true);
      },
      getViewportScrollY: function getViewportScrollY() {
        var st = uiState.myScrollTarget;
        return st.pageYOffset ? st.pageYOffset : st.scrollTop;
      },
      getTotalActionItems: function getTotalActionItems() {
        return uiState.root.querySelectorAll(".".concat(cssClasses$6.ACTION_ITEM)).length;
      }
    };
    watch(function () {
      return props.scrollTarget;
    }, function (nv, ov) {
      if (nv !== ov) {
        uiState.myScrollTarget.removeEventListener('scroll', foundation.handleTargetScroll);
        uiState.myScrollTarget = nv;
        uiState.myScrollTarget.addEventListener('scroll', foundation.handleTargetScroll);
      }
    });
    onMounted(function () {
      var short = props.short,
          shortCollapsed = props.shortCollapsed,
          fixed = props.fixed;

      if (short || shortCollapsed) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (fixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      }

      handleWindowResize = foundation.handleWindowResize.bind(foundation);
      handleTargetScroll = foundation.handleWindowResize.bind(foundation); // todo: hunt down icons for ripples

      navIcon = uiState.root.querySelector(strings$b.NAVIGATION_ICON_SELECTOR); // Get all icons in the toolbar and instantiate the ripples

      var icons = [].slice.call(uiState.root.querySelectorAll(strings$b.ACTION_ITEM_SELECTOR));

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
      var isFixed = uiState.root.classList.contains(cssClasses$6.FIXED_CLASS);
      var isShort = uiState.root.classList.contains(cssClasses$6.SHORT_CLASS);

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
      var isFixed = uiState.root.classList.contains(cssClasses$6.FIXED_CLASS);
      var isShort = uiState.root.classList.contains(cssClasses$6.SHORT_CLASS);

      if (!isShort && !isFixed) {
        window.removeEventListener('resize', handleWindowResize);
      }

      foundation.destroy();
    });
    return _objectSpread2(_objectSpread2({}, toRefs(uiState)), {}, {
      listeners: listeners
    });
  }
};

/* script */
const __vue_script__$E = script$D;

/* template */
var __vue_render__$E = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.tag,
    _vm._g(
      {
        ref: "root",
        tag: "component",
        class: _vm.rootClasses,
        style: _vm.rootStyles
      },
      _vm.listeners
    ),
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$E = [];
__vue_render__$E._withStripped = true;

  /* style */
  const __vue_inject_styles__$E = undefined;
  /* scoped */
  const __vue_scope_id__$E = undefined;
  /* module identifier */
  const __vue_module_identifier__$E = undefined;
  /* functional template */
  const __vue_is_functional_template__$E = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$E = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
    __vue_inject_styles__$E,
    __vue_script__$E,
    __vue_scope_id__$E,
    __vue_is_functional_template__$E,
    __vue_module_identifier__$E,
    false,
    undefined,
    undefined,
    undefined
  );

var topAppBar = BasePlugin({
  mcwTopAppBar: __vue_component__$E,
  mcwFixedAdjust: mcwFixedAdjust,
  mcwTopAppBarIcon: mcwTopAppBarIcon,
  mcwTopAppBarRow: mcwTopAppBarRow,
  mcwTopAppBarSection: mcwTopAppBarSection,
  mcwTopAppBarTitle: mcwTopAppBarTitle
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
