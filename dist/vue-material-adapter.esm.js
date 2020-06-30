import { applyPassive } from '@material/dom/events';
import { matches, closest } from '@material/dom/ponyfill';
import { MDCRippleFoundation } from '@material/ripple';
import { supportsCssVariables } from '@material/ripple/util';
import { createElement } from '@vue/composition-api';
import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation';
import { getCorrectEventName } from '@material/animation';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { announce } from '@material/dom/announce';
import { MDCDataTableFoundation } from '@material/data-table/foundation';
import { MDCCheckbox } from '@material/checkbox';
import { strings as strings$5, cssClasses as cssClasses$5, events } from '@material/data-table';
import { MDCDialogFoundation } from '@material/dialog/foundation';
import { createFocusTrapInstance, isScrollable, areTopsMisaligned } from '@material/dialog/util';
import { matches as matches$1, closest as closest$1 } from '@material/dom/ponyfill.js';
import { FocusTrap } from '@material/dom/focus-trap.js';
import { createFocusTrapInstance as createFocusTrapInstance$1 } from '@material/drawer/util';
import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation';
import { MDCModalDrawerFoundation } from '@material/drawer/modal/foundation';
import { MDCListFoundation } from '@material/list/foundation';
import { FocusTrap as FocusTrap$1 } from '@material/dom/focus-trap';
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation';
import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation';
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation';
import { MDCLinearProgressFoundation } from '@material/linear-progress/foundation';
import { MDCMenuFoundation } from '@material/menu/foundation';
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation';
import { getTransformPropertyName } from '@material/menu-surface/util';
import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation';
import { MDCRadioFoundation } from '@material/radio/foundation';
import { MDCSelectFoundation } from '@material/select/foundation';
import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';
import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { MDCSliderFoundation } from '@material/slider/foundation';
import { MDCSnackbarFoundation } from '@material/snackbar/foundation';
import { MDCSwitchFoundation } from '@material/switch/foundation';
import { MDCTabBarFoundation } from '@material/tab-bar/foundation';
import { MDCTabIndicatorFoundation } from '@material/tab-indicator/foundation';
import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation';
import { computeHorizontalScrollbarHeight } from '@material/tab-scroller/util';
import MDCTabFoundation from '@material/tab/foundation';
import { MDCTextFieldFoundation } from '@material/textfield/foundation';
import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text/foundation';
import { MDCTextFieldIconFoundation } from '@material/textfield/icon/foundation.js';
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

var CustomButton = {
  name: 'custom-button',
  functional: true,
  props: {
    link: Object
  },
  render: function render(createElement, _ref) {
    var children = _ref.children,
        data = _ref.data,
        _ref$props = _ref.props,
        link = _ref$props.link,
        tag = _ref$props.tag,
        _ref$parent = _ref.parent,
        $router = _ref$parent.$router,
        $root = _ref$parent.$root;
    var element;

    if (link && $router) {
      // router-link case
      element = $root.$options.components['RouterLink'];
      data.props = _objectSpread2({
        tag: tag
      }, link);
      data.attrs.role = 'button';

      if (data.on.click) {
        data.nativeOn = {
          click: data.on.click
        };
      }
    } else if (data.attrs && data.attrs.href) {
      // href case
      element = 'a';
      data.attrs.role = 'button';
    } else {
      // button fallback
      element = 'button';
    }

    return createElement(element, data, children);
  }
};
var CustomButtonMixin = {
  props: {
    href: String,
    disabled: Boolean,
    to: [String, Object],
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String
  },
  computed: {
    link: function link() {
      return this.to && {
        to: this.to,
        exact: this.exact,
        append: this.append,
        replace: this.replace,
        activeClass: this.activeClass,
        exactActiveClass: this.exactActiveClass
      };
    }
  },
  components: {
    CustomButton: CustomButton
  }
};

/* global CustomEvent */
function emitCustomEvent(el, evtType, evtData) {
  var shouldBubble = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var evt;

  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  }

  el.dispatchEvent(evt);
}

var CustomLink = {
  name: 'custom-link',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    link: Object
  },
  render: function render(createElement, _ref) {
    var data = _ref.data,
        children = _ref.children,
        _ref$props = _ref.props,
        link = _ref$props.link,
        tag = _ref$props.tag,
        _ref$parent = _ref.parent,
        $router = _ref$parent.$router,
        $root = _ref$parent.$root;
    var element;

    if (link && $router) {
      // router-link case
      element = $root.$options.components['RouterLink'];
      data.props = _objectSpread2({
        tag: tag
      }, link);

      if (data.on.click) {
        data.nativeOn = {
          click: data.on.click
        };
      }
    } else {
      // element fallback
      element = tag;
    }

    return createElement(element, data, children);
  }
};
var CustomLinkMixin = {
  props: {
    to: [String, Object],
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String
  },
  computed: {
    link: function link() {
      return this.to && {
        to: this.to,
        exact: this.exact,
        append: this.append,
        replace: this.replace,
        activeClass: this.activeClass,
        exactActiveClass: this.exactActiveClass
      };
    }
  },
  components: {
    CustomLink: CustomLink
  }
};

/* eslint-disable quote-props */
var DispatchEventMixin = {
  props: {
    event: String,
    'event-target': Object,
    'event-args': Array
  },
  methods: {
    dispatchEvent: function dispatchEvent(evt) {
      evt && this.$emit(evt.type, evt);

      if (this.event) {
        var target = this.eventTarget || this.$root;
        var args = this.eventArgs || [];
        target.$emit.apply(target, [this.event].concat(_toConsumableArray(args)));
      }
    }
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        click: function click(e) {
          return _this.dispatchEvent(e);
        }
      });
    }
  }
};

var DispatchFocusMixin = {
  data: function data() {
    return {
      hasFocus: false
    };
  },
  methods: {
    onMouseDown: function onMouseDown() {
      this._active = true;
    },
    onMouseUp: function onMouseUp() {
      this._active = false;
    },
    onFocusEvent: function onFocusEvent() {
      var _this = this;

      // dispatch async to let time to other focus event to propagate
      setTimeout(function () {
        return _this.dispatchFocusEvent();
      }, 0);
    },
    onBlurEvent: function onBlurEvent() {
      var _this2 = this;

      // dispatch async to let time to other focus event to propagate
      // also filtur blur if mousedown
      this._active || setTimeout(function () {
        return _this2.dispatchFocusEvent();
      }, 0);
    },
    dispatchFocusEvent: function dispatchFocusEvent() {
      var hasFocus = this.$el === document.activeElement || this.$el.contains(document.activeElement);

      if (hasFocus != this.hasFocus) {
        this.$emit(hasFocus ? 'focus' : 'blur');
        this.hasFocus = hasFocus;
      }
    }
  },
  mounted: function mounted() {
    this.$el.addEventListener('focusin', this.onFocusEvent);
    this.$el.addEventListener('focusout', this.onBlurEvent);
    this.$el.addEventListener('mousedown', this.onMouseDown);
    this.$el.addEventListener('mouseup', this.onMouseUp);
  },
  beforeDestroy: function beforeDestroy() {
    this.$el.removeEventListener('focusin', this.onFocusEvent);
    this.$el.removeEventListener('focusout', this.onBlurEvent);
    this.$el.removeEventListener('mousedown', this.onMouseDown);
    this.$el.removeEventListener('mouseup', this.onMouseUp);
  }
};

var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';
var VMAUniqueIdMixin = {
  beforeCreate: function beforeCreate() {
    this.vma_uid_ = scope + this._uid;
  }
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BasePlugin: BasePlugin,
  CustomButton: CustomButton,
  CustomButtonMixin: CustomButtonMixin,
  emitCustomEvent: emitCustomEvent,
  CustomLink: CustomLink,
  CustomLinkMixin: CustomLinkMixin,
  DispatchEventMixin: DispatchEventMixin,
  DispatchFocusMixin: DispatchFocusMixin,
  VMAUniqueIdMixin: VMAUniqueIdMixin
});

var RippleBase = /*#__PURE__*/function (_MDCRippleFoundation) {
  _inherits(RippleBase, _MDCRippleFoundation);

  var _super = _createSuper(RippleBase);

  function RippleBase(vm, options) {
    _classCallCheck(this, RippleBase);

    return _super.call(this, _objectSpread2({
      addClass: function addClass(className) {
        vm.$set(vm.classes, className, true);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return vm.$el.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return vm.$el.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        vm.$el.removeEventListener(evt, handler, applyPassive());
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
        return matches(vm.$el, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return vm.disabled;
      },
      isUnbounded: function isUnbounded() {
        return false;
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        vm.$el.addEventListener(evt, handler, applyPassive());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        vm.$delete(vm.classes, className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        vm.$set(vm.styles, varName, value);
      }
    }, options));
  }

  return RippleBase;
}(MDCRippleFoundation); // todo: can this be combined with the ripplebase implementation depending on whether a vm or element is passed?

var RippleElement = /*#__PURE__*/function (_MDCRippleFoundation2) {
  _inherits(RippleElement, _MDCRippleFoundation2);

  var _super2 = _createSuper(RippleElement);

  function RippleElement(element, options) {
    var _this;

    _classCallCheck(this, RippleElement);

    var $el = element;
    _this = _super2.call(this, _objectSpread2({
      addClass: function addClass(className) {
        return $el.classList.add(className);
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
        return $el.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return $el.style.setProperty(varName, value);
      }
    }, options));
    _this.unbounded_ = false;
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
var RippleMixin = {
  data: function data() {
    return {
      classes: {},
      styles: {}
    };
  },
  mounted: function mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.ripple.destroy();
  }
};

var mcwButtonBase = {
  name: 'mcw-button-base',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  // note RippleMixin defines data(){ return {classes:{}, styles: {} }; }
  render: function render(createElement) {
    var nodes = [createElement('div', {
      class: {
        'mdc-button__ripple': 1
      }
    }), createElement('span', {
      class: {
        'mdc-button__label': 1
      }
    }, this.$slots.default)];

    if (this.$slots.icon || this.icon) {
      nodes.unshift(this.$slots.icon || createElement('i', {
        class: {
          'material-icons': 1,
          'mdc-button__icon': 1
        },
        attrs: {
          'aria-hidden': true
        }
      }, this.icon));
    }

    if (this.$slots.trailingIcon || this.trailingIcon) {
      nodes.push(this.$slots.trailingIcon || createElement('i', {
        class: {
          'material-icons': 1,
          'mdc-button__icon': 1
        },
        attrs: {
          'aria-hidden': true
        }
      }, this.trailingIcon));
    }

    return createElement('custom-button', {
      class: this.classes,
      style: this.styles,
      attrs: {
        disabled: this.disabled
      },
      props: {
        href: this.href,
        link: this.link
      },
      on: this.listeners,
      ref: 'root'
    }, nodes);
  }
};

var mcwButton = {
  name: 'mcw-button',
  extends: mcwButtonBase,
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String
  },
  data: function data() {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated && !this.raised,
        'mdc-button--outlined': this.outlined
      }
    };
  },
  watch: {
    raised: function raised() {
      this.$set(this.classes, 'mdc-button--raised', this.raised);
    },
    unelevated: function unelevated() {
      this.$set(this.classes, 'mdc-button--unelevated', this.unelevated);
    },
    outlined: function outlined() {
      this.$set(this.classes, 'mdc-button--outlined', this.outlined);
    }
  }
};

var button = BasePlugin({
  mcwButton: mcwButton
});

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
      return createElement('div', {
        class: [{
          'mdc-card': 1,
          'mdc-card--outlined': outlined
        } // staticClass,
        ],
        attrs: attrs
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
};

var mcwCardActionButtons = {
  name: 'mcw-card-action-buttons',
  functional: true,
  render: function render(createElement, _ref) {
    var scopedSlots = _ref.scopedSlots,
        _ref$data = _ref.data,
        attrs = _ref$data.attrs,
        staticClass = _ref$data.staticClass,
        staticStyle = _ref$data.staticStyle;
    var vNodes = scopedSlots.default && scopedSlots.default() || [];

    if (vNodes) {
      // add icon class to children
      vNodes.forEach(function (vNode) {
        if (vNode.tag && vNode.data) {
          vNode.data.staticClass = "mdc-card__action mdc-card__action--button ".concat(vNode.data.staticClass || '');
        }
      });
    }

    return createElement('div', {
      class: ['mdc-card__action-buttons', staticClass],
      style: staticStyle,
      attrs: attrs
    }, vNodes);
  }
};

var mcwCardActionIcons = {
  name: 'mcw-card-action-icons',
  functional: true,
  render: function render(createElement, _ref) {
    var scopedSlots = _ref.scopedSlots,
        _ref$data = _ref.data,
        attrs = _ref$data.attrs,
        staticClass = _ref$data.staticClass,
        staticStyle = _ref$data.staticStyle;
    var vNodes = scopedSlots.default && scopedSlots.default() || [];

    if (vNodes) {
      // add icon class to children
      vNodes.forEach(function (vNode) {
        if (vNode.tag && vNode.data) {
          vNode.data.staticClass = "mdc-card__action mdc-card__action--icon ".concat(vNode.data.staticClass || '');
        }
      });
    }

    return createElement('div', {
      class: ['mdc-card__action-icons', staticClass],
      style: staticStyle,
      attrs: attrs
    }, vNodes);
  }
};

var mcwCardActions = {
  name: 'mcw-card-actions',
  functional: true,
  props: {
    fullBleed: Boolean
  },
  render: function render(createElement, _ref) {
    var fullBleed = _ref.props.fullBleed,
        _ref$data = _ref.data,
        staticClass = _ref$data.staticClass,
        attrs = _ref$data.attrs,
        scopedSlots = _ref.scopedSlots;
    return createElement('section', {
      class: [{
        'mdc-card__actions': 1,
        'mdc-card__actions--full-bleed': fullBleed
      }, staticClass],
      attrs: attrs
    }, scopedSlots.default && scopedSlots.default());
  }
};

var mcwCardMedia = {
  name: 'mcw-card-media',
  functional: true,
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
  render: function render(createElement, _ref) {
    var _ref$props = _ref.props,
        src = _ref$props.src,
        square = _ref$props.square,
        wide = _ref$props.wide,
        contentClass = _ref$props.contentClass,
        staticStyle = _ref.data.staticStyle,
        scopedSlots = _ref.scopedSlots;
    var nodes = [];
    var content = scopedSlots.default && scopedSlots.default();

    if (content) {
      nodes.push(createElement('div', {
        class: ['mdc-card__media-content', contentClass]
      }, content));
    }

    return createElement('section', {
      class: {
        'mdc-card__media': 1,
        'mdc-card__media--square': square,
        'mdc-card__media--16-9': wide && !square
      },
      style: _objectSpread2({
        backgroundImage: "url(".concat(src, ")")
      }, staticStyle)
    }, nodes);
  }
};

var mcwCardPrimaryAction = {
  name: 'mcw-card-primary-action',
  mixins: [DispatchEventMixin, CustomLinkMixin, RippleMixin],
  data: function data() {
    return {
      classes: {
        'mdc-card__primary-action': 1
      }
    };
  },
  render: function render(createElement) {
    var _slots$default;

    var slots = this.$scopedSlots;
    return createElement('custom-link', {
      class: this.classes,
      style: this.styles,
      // from RippleMixin
      attrs: _objectSpread2({
        tabIndex: 0
      }, this.$attrs),
      props: {
        link: this.link
      },
      on: this.listeners
    }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
  }
};

var card = BasePlugin({
  mcwCard: mcwCard,
  mcwCardPrimaryAction: mcwCardPrimaryAction,
  mcwCardMedia: mcwCardMedia,
  mcwCardActions: mcwCardActions,
  mcwCardActionButtons: mcwCardActionButtons,
  mcwCardActionIcons: mcwCardActionIcons
});

var ProgressPropType = {
  type: [Number, String],
  validator: function validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};

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

var script = {
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
  data: function data() {
    return {
      classes: {
        'mdc-circular-progress': 1,
        'mdc-circular-progress--medium': this.medium,
        'mdc-circular-progress--large': !this.medium
      },
      rootAttrs: {},
      circleAttrs: getCircleAttrs(this.medium, false),
      indeterminateAttrs: getCircleAttrs(this.medium, true)
    };
  },
  watch: {
    open: function open(nv) {
      if (nv) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    progress: function progress(nv) {
      this.foundation.setProgress(Number(nv));
    },
    indeterminate: function indeterminate(nv) {
      this.foundation.setDeterminate(!nv);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        _this.$set(_this.classes, className, true);
      },
      getDeterminateCircleAttribute: function getDeterminateCircleAttribute(attributeName) {
        return _this.circleAttrs[attributeName];
      },
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      removeAttribute: function removeAttribute(attributeName) {
        _this.$delete(_this.rootAttrs, attributeName);
      },
      setAttribute: function setAttribute(attributeName, value) {
        _this.$set(_this.rootAttrs, attributeName, value);
      },
      setDeterminateCircleAttribute: function setDeterminateCircleAttribute(attributeName, value) {
        return _this.$set(_this.circleAttrs, attributeName, value);
      }
    };
    this.foundation = new MDCCircularProgressFoundation(adapter);
    this.foundation.init();
    this.foundation.setProgress(Number(this.progress));
    this.foundation.setDeterminate(!this.indeterminate);

    if (this.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
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
    "div",
    _vm._b(
      { class: _vm.classes, attrs: { role: "progressbar" } },
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

var circularProgress = BasePlugin({
  mcwCircularProgress: __vue_component__
});

/* eslint-disable quote-props */
var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var script$1 = {
  name: 'mcw-checkbox',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
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
  data: function data() {
    return {
      styles: {},
      classes: {
        'mdc-checkbox': 1
      }
    };
  },
  computed: {
    hasLabel: function hasLabel() {
      return this.label || this.$slots.default;
    },
    formFieldClasses: function formFieldClasses() {
      return {
        'mdc-form-field': this.hasLabel,
        'mdc-form-field--align-end': this.hasLabel && this.alignEnd
      };
    }
  },
  watch: {
    checked: 'setChecked',
    disabled: function disabled(value) {
      this.foundation.setDisabled(value);
    },
    indeterminate: 'setIndeterminate'
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      forceLayout: function forceLayout() {
        return _this.$refs.root.offsetWidth;
      },
      hasNativeControl: function hasNativeControl() {
        return true;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return true;
      },
      isChecked: function isChecked() {
        return _this.$refs.control.checked;
      },
      isIndeterminate: function isIndeterminate() {
        return _this.$refs.control.indeterminate;
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      removeNativeControlAttr: function removeNativeControlAttr(attr) {
        _this.$refs.control.removeAttribute(attr);
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        _this.$refs.control.setAttribute(attr, value);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.$refs.control.disabled = disabled;
      }
    };
    this.foundation = new MDCCheckboxFoundation(adapter);

    this.handleAnimationEnd_ = function () {
      return _this.foundation.handleAnimationEnd();
    };

    this.$el.addEventListener(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.installPropertyChangeHooks_();
    this.ripple = new RippleBase(this, {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return RippleBase.isSurfaceActive(_this.$refs.control);
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        _this.$refs.control.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        _this.$refs.control.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.$refs.root.getBoundingClientRect();
      }
    });
    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        _this.$refs.label.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        _this.$refs.label.removeEventListener(type, handler);
      },
      activateInputRipple: function activateInputRipple() {
        _this.ripple && _this.ripple.activate();
      },
      deactivateInputRipple: function deactivateInputRipple() {
        _this.ripple && _this.ripple.deactivate();
      }
    });
    this.foundation.init();
    this.ripple.init();
    this.formField.init();
    this.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);
    this.setIndeterminate(this.indeterminate);
  },
  beforeDestroy: function beforeDestroy() {
    this.$el.removeEventListener(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.formField.destroy();
    this.ripple.destroy();
    this.uninstallPropertyChangeHooks_();
    this.foundation.destroy();
  },
  methods: {
    setChecked: function setChecked(checked) {
      this.$refs.control.checked = Array.isArray(checked) ? checked.indexOf(this.value) > -1 : checked;
    },
    setIndeterminate: function setIndeterminate(indeterminate) {
      this.$refs.control.indeterminate = indeterminate;
    },
    onChange: function onChange(_ref) {
      var _ref$target = _ref.target,
          indeterminate = _ref$target.indeterminate,
          checked = _ref$target.checked;
      // note indeterminate will not currently work with the array model
      this.$emit('update:indeterminate', indeterminate);

      if (Array.isArray(this.checked)) {
        var idx = this.checked.indexOf(this.value);

        if (checked) {
          idx < 0 && this.$emit('change', this.checked.concat(this.value));
        } else {
          idx > -1 && this.$emit('change', this.checked.slice(0, idx).concat(this.checked.slice(idx + 1)));
        }
      } else {
        this.$emit('change', checked);
      }
    },
    installPropertyChangeHooks_: function installPropertyChangeHooks_() {
      var _this2 = this;

      var nativeCb = this.$refs.control;
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

              _this2.foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          };
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    },
    uninstallPropertyChangeHooks_: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.$refs.control;
      var cbProto = Object.getPrototypeOf(nativeCb);
      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc =
        /** @type {!ObjectPropertyDescriptor} */
        Object.getOwnPropertyDescriptor(cbProto, controlState);

        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }
  }
}; // ===
// Private functions
// ===

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "mdc-checkbox-wrapper", class: _vm.formFieldClasses },
    [
      _c("div", { ref: "root", class: _vm.classes, style: _vm.styles }, [
        _c("input", {
          ref: "control",
          staticClass: "mdc-checkbox__native-control",
          attrs: { id: _vm.vma_uid_, name: _vm.name, type: "checkbox" },
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
      ]),
      _vm._v(" "),
      _c(
        "label",
        { ref: "label", attrs: { for: _vm.vma_uid_ } },
        [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
        2
      )
    ]
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

var checkbox = BasePlugin({
  mcwCheckbox: __vue_component__$1
});

var mcwChipCheckmark = {
  name: 'mcw-chip-checkmark',
  data: function data() {
    return {
      width: 0
    };
  },
  render: function render(createElement) {
    return createElement('div', {
      class: {
        'mdc-chip__checkmark': 1
      }
    }, [createElement('svg', {
      class: {
        'mdc-chip__checkmark-svg': 1
      },
      attrs: {
        viewBox: '-2 -3 30 30'
      }
    }, [createElement('path', {
      class: {
        'mdc-chip__checkmark-path': 1
      },
      attrs: {
        fill: 'none',
        stroke: 'black',
        d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
      }
    })])]);
  },
  mounted: function mounted() {
    this.width = this.$el.getBoundingClientRect().height;
  }
};

var _MDCChipFoundation$st = MDCChipFoundation.strings,
    INTERACTION_EVENT = _MDCChipFoundation$st.INTERACTION_EVENT,
    SELECTION_EVENT = _MDCChipFoundation$st.SELECTION_EVENT,
    REMOVAL_EVENT = _MDCChipFoundation$st.REMOVAL_EVENT,
    NAVIGATION_EVENT = _MDCChipFoundation$st.NAVIGATION_EVENT;
var CHIP_SELECTOR = MDCChipSetFoundation.strings.CHIP_SELECTOR;
var idCounter = 0;
var mcwChipSet = {
  name: 'mcw-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean]
  },
  provide: function provide() {
    return {
      mcwChipSet: this
    };
  },
  data: function data() {
    return {
      classes: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input
      },
      listn: 0
    };
  },
  computed: {
    chipElements: function chipElements() {
      // eslint-disable-next-line no-unused-vars
      var xx = this.listn; // for dependency

      return [].slice.call(this.$el.querySelectorAll(CHIP_SELECTOR));
    },
    chips_: function chips_() {
      return this.chipElements.map(function (el) {
        el.id = el.id || "mdc-chip-".concat(++idCounter);
        return el.__vue__;
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    // do not delete this reference as it triggers initial chip list instantiation.
    this.chips_;
    this.foundation = new MDCChipSetFoundation({
      announceMessage: function announceMessage(message) {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: function focusChipPrimaryActionAtIndex(index) {
        var chip = _this.chips_[index];
        chip && chip.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: function focusChipTrailingActionAtIndex(index) {
        var chip = _this.chips_[index];
        chip && chip.focusTrailingAction();
      },
      getChipListCount: function getChipListCount() {
        return _this.chips_.length;
      },
      getIndexOfChipById: function getIndexOfChipById(chipId) {
        return _this.chips_.findIndex(function (_ref) {
          var id = _ref.id;
          return id == chipId;
        });
      },
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.$el).getPropertyValue('direction') === 'rtl';
      },
      removeChipAtIndex: function removeChipAtIndex(index) {
        if (index >= 0 && index < _this.chips_.length) {
          // tell chip to remove itself from the DOM
          _this.chips_[index].remove();

          _this.chips_.splice(index, 1);
        }
      },
      removeFocusFromChipAtIndex: function removeFocusFromChipAtIndex(index) {
        _this.chips_[index].removeFocus();
      },
      selectChipAtIndex: function selectChipAtIndex(index, selected, shouldNotifyClients) {
        if (index >= 0 && index < _this.chips_.length) {
          _this.chips_[index].setSelectedFromChipSet(selected, shouldNotifyClients);
        }
      }
    });
    this.foundation.init(); // the chips could change outside of this component
    // so use a mutation observer to trigger an update by
    // incrementing the dependency variable "listn" referenced
    // in the computed that selects the chip elements

    this.slotObserver = new MutationObserver(function (mutationList, observer) {
      _this.listn++;
    });
    this.slotObserver.observe(this.$refs.listRoot, {
      childList: true // subtree: true,

    });
  },
  beforeDestroy: function beforeDestroy() {
    this.slotObserver.disconnect();
    this.foundation.destroy();
  },
  render: function render(createElement) {
    var _this2 = this,
        _on;

    var scopedSlots = this.$scopedSlots;
    return createElement('div', {
      class: this.classes,
      attrs: {
        role: 'grid'
      },
      on: (_on = {}, _defineProperty(_on, INTERACTION_EVENT, function (_ref2) {
        var detail = _ref2.detail;
        return _this2.foundation.handleChipInteraction(detail);
      }), _defineProperty(_on, SELECTION_EVENT, function (_ref3) {
        var detail = _ref3.detail;
        return _this2.foundation.handleChipSelection(detail);
      }), _defineProperty(_on, REMOVAL_EVENT, function (_ref4) {
        var detail = _ref4.detail;
        return _this2.foundation.handleChipRemoval(detail);
      }), _defineProperty(_on, NAVIGATION_EVENT, function (_ref5) {
        var detail = _ref5.detail;
        return _this2.foundation.handleChipNavigation(detail);
      }), _on),
      ref: 'listRoot'
    }, scopedSlots.default && scopedSlots.default());
  }
};

var _MDCChipFoundation$st$1 = MDCChipFoundation.strings,
    INTERACTION_EVENT$1 = _MDCChipFoundation$st$1.INTERACTION_EVENT,
    SELECTION_EVENT$1 = _MDCChipFoundation$st$1.SELECTION_EVENT,
    REMOVAL_EVENT$1 = _MDCChipFoundation$st$1.REMOVAL_EVENT,
    TRAILING_ICON_INTERACTION_EVENT = _MDCChipFoundation$st$1.TRAILING_ICON_INTERACTION_EVENT,
    PRIMARY_ACTION_SELECTOR = _MDCChipFoundation$st$1.PRIMARY_ACTION_SELECTOR,
    TRAILING_ACTION_SELECTOR = _MDCChipFoundation$st$1.TRAILING_ACTION_SELECTOR,
    NAVIGATION_EVENT$1 = _MDCChipFoundation$st$1.NAVIGATION_EVENT;
var mcwChip = {
  name: 'mcw-chip',
  mixins: [CustomLinkMixin],
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
  inject: ['mcwChipSet'],
  data: function data() {
    return {
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
      trailingAttrs: {}
    };
  },
  watch: {
    shouldRemoveOnTrailingIconClick: function shouldRemoveOnTrailingIconClick(shouldRemove) {
      this.foundation.setShouldRemoveOnTrailingIconClick(shouldRemove);
    }
  },
  computed: {
    id: function id() {
      return this.$el.id;
    },
    selected: {
      get: function get() {
        return this.foundation.isSelected();
      },
      set: function set(nv) {
        this.foundation.setSelected(nv);
      }
    },
    isFilter: function isFilter() {
      return this.mcwChipSet && this.mcwChipSet.filter;
    },
    isInput: function isInput() {
      return this.mcwChipSet && this.mcwChipSet.input;
    },
    haveleadingIcon: function haveleadingIcon() {
      var slot = this.$slots['leading-icon'];
      return slot && slot[0] || !!this.leadingIcon;
    },
    havetrailingIcon: function havetrailingIcon() {
      var slot = this.$slots['trailing-icon'];
      return this.isInput && (slot && slot[0] || !!this.trailingIcon);
    }
  },
  methods: {
    setSelectedFromChipSet: function setSelectedFromChipSet(selected, shouldNotifyClients) {
      this.foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    },
    focusPrimaryAction: function focusPrimaryAction() {
      this.foundation.focusPrimaryAction();
    },
    focusTrailingAction: function focusTrailingAction() {
      this.foundation.focusTrailingAction();
    },
    removeFocus: function removeFocus() {
      this.foundation.removeFocus();
    },
    toggleSelected: function toggleSelected() {
      this.foundation.toggleSelected();
    },
    isSelected: function isSelected() {
      return this.foundation.isSelected();
    },
    remove: function remove() {
      var parent = this.$el.parentNode;

      if (parent != null) {
        parent.removeChild(this.$el);
      }
    },
    renderLeadingIcon: function renderLeadingIcon(createElement) {
      var slot = this.$slots['leading-icon'];
      var v0 = slot && slot[0];

      if (v0) {
        var _v0$data$staticClass = v0.data.staticClass,
            staticClass = _v0$data$staticClass === void 0 ? '' : _v0$data$staticClass;
        var haveClasses = staticClass && staticClass.indexOf('mdc-chip__icon') > -1;

        if (!haveClasses) {
          v0.data.staticClass = "mdc-chip__icon mdc-chip__icon--leading ".concat(staticClass);
        }

        return slot;
      }

      return createElement('i', {
        class: this.leadingClasses,
        ref: 'leading-icon'
      }, this.leadingIcon);
    },
    renderTrailingIcon: function renderTrailingIcon(createElement) {
      var _this = this;

      var slot = this.$slots['trailing-icon'];
      var v0 = slot && slot[0];

      if (v0) {
        var _v0$data$staticClass2 = v0.data.staticClass,
            staticClass = _v0$data$staticClass2 === void 0 ? '' : _v0$data$staticClass2;
        var haveClasses = staticClass && staticClass.indexOf('mdc-chip__icon') > -1;

        if (!haveClasses) {
          v0.data.staticClass = "mdc-chip__icon mdc-chip__icon--trailing mdc-chip__trailing-action".concat(staticClass);
          v0.data.on = _objectSpread2(_objectSpread2({}, v0.data.on), {}, {
            click: function click(evt) {
              _this.foundation.handleTrailingIconInteraction(evt);
            },
            keydown: function keydown(evt) {
              return _this.foundation.handleTrailingIconInteraction(evt);
            }
          });
        }

        return slot;
      }

      return createElement('span', {
        attrs: {
          role: 'gridcell'
        }
      }, [createElement('i', {
        class: {
          'mdc-chip__icon': 1,
          'mdc-chip__icon--trailing': 1,
          'material-icons': 1 // 'mdc-chip__trailing-action': 1,

        },
        attrs: _objectSpread2({}, this.trailingAttrs),
        ref: 'trailing-icon',
        on: {
          click: function click(evt) {
            return _this.foundation.handleTrailingIconInteraction(evt);
          },
          keydown: function keydown(evt) {
            return _this.foundation.handleTrailingIconInteraction(evt);
          }
        }
      }, this.trailingIcon)]);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.trailingAction_ = this.$el.querySelector(TRAILING_ACTION_SELECTOR);
    this.foundation = new MDCChipFoundation({
      addClass: function addClass(className) {
        return _this2.$set(_this2.classes, className, true);
      },
      addClassToLeadingIcon: function addClassToLeadingIcon(className) {
        _this2.$set(_this2.leadingClasses, className, true); // if no ref, then using slot, so just add class directly


        if (!_this2.$refs['leading-icon'] && _this2.haveleadingIcon) {
          var item = _this2.$slots['leading-icon'][0];
          (item.elm || item).classList.add(className);
        }
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target.classList.contains(className);
      },
      focusPrimaryAction: function focusPrimaryAction() {
        var _this2$$refs$primaryA = _this2.$refs.primaryAction,
            primaryAction = _this2$$refs$primaryA === void 0 ? _this2.$el.querySelector(PRIMARY_ACTION_SELECTOR) : _this2$$refs$primaryA;
        primaryAction && primaryAction.focus();
      },
      focusTrailingAction: function focusTrailingAction() {
        _this2.trailingAction_ && _this2.trailingAction_.focus();
      },
      getAttribute: function getAttribute(attr) {
        return _this2.$el.getAttribute(attr);
      },
      getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
        return _this2.$refs.checkmarkEl ? _this2.$refs.checkmarkEl.$el.getBoundingClientRect() : null;
      },
      getComputedStyleValue: function getComputedStyleValue(propertyName) {
        return window.getComputedStyle(_this2.$el).getPropertyValue(propertyName);
      },
      getRootBoundingClientRect: function getRootBoundingClientRect() {
        return _this2.$el.getBoundingClientRect();
      },
      hasClass: function hasClass(className) {
        return _this2.$el.classList.contains(className);
      },
      hasLeadingIcon: function hasLeadingIcon() {
        return !!_this2.haveleadingIcon;
      },
      hasTrailingAction: function hasTrailingAction() {
        return !!_this2.trailingAction_;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this2.$el).getPropertyValue('direction') === 'rtl';
      },
      notifyInteraction: function notifyInteraction() {
        emitCustomEvent(_this2.$el, INTERACTION_EVENT$1, {
          chipId: _this2.id
        }, true);
      },
      notifyNavigation: function notifyNavigation(key, source) {
        return emitCustomEvent(_this2.$el, NAVIGATION_EVENT$1, {
          chipId: _this2.id,
          key: key,
          source: source
        }, true);
      },
      notifyRemoval: function notifyRemoval(removedAnnouncement) {
        emitCustomEvent(_this2.$el, REMOVAL_EVENT$1, {
          chipId: _this2.id,
          root: _this2.$el,
          removedAnnouncement: removedAnnouncement
        }, true);
      },
      notifySelection: function notifySelection(selected) {
        return emitCustomEvent(_this2.$el, SELECTION_EVENT$1, {
          chipId: _this2.id,
          selected: selected
        }, true
        /* shouldBubble */
        );
      },
      notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
        emitCustomEvent(_this2.$el, TRAILING_ICON_INTERACTION_EVENT, {
          chipId: _this2.id
        }, true);
      },
      removeClass: function removeClass(className) {
        return _this2.$delete(_this2.classes, className);
      },
      removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
        _this2.$delete(_this2.leadingClasses, className); // if no ref, then using slot, so just remove class directly


        if (!_this2.$refs['leading-icon'] && _this2.haveleadingIcon) {
          var item = _this2.$slots['leading-icon'][0];
          (item.elm || item).classList.remove(className);
        }
      },
      setPrimaryActionAttr: function setPrimaryActionAttr(attr, value) {
        _this2.$set(_this2.primaryAttrs, attr, value);
      },
      setStyleProperty: function setStyleProperty(property, value) {
        return _this2.$set(_this2.styles, property, value);
      },
      setTrailingActionAttr: function setTrailingActionAttr(attr, value) {
        if (_this2.trailingAction_) {
          _this2.trailingAction_.setAttribute(attr, value);
        }
      }
    });
    this.foundation.init();
    this.primaryAttrs.tabindex = this.isFilter ? 0 : -1;

    if (this.shouldRemoveOnTrailingIconClick !== this.foundation.getShouldRemoveOnTrailingIconClick()) {
      this.foundation.setShouldRemoveOnTrailingIconClick(this.shouldRemoveOnTrailingIconClick);
    }

    this.ripple = new RippleBase(this, {
      computeBoundingRect: function computeBoundingRect() {
        return _this2.foundation.getDimensions();
      }
    });
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
  render: function render(createElement) {
    var _this3 = this,
        _scopedSlots$default;

    var scopedSlots = this.$scopedSlots,
        haveleadingIcon = this.haveleadingIcon,
        havetrailingIcon = this.havetrailingIcon,
        isFilter = this.isFilter,
        primaryAttrs = this.primaryAttrs;
    var role = isFilter ? 'checkbox' : 'button';
    var on = {
      click: function click(evt) {
        return _this3.foundation.handleInteraction(evt);
      },
      keydown: function keydown(evt) {
        return _this3.foundation.handleInteraction(evt);
      },
      transitionend: function transitionend(evt) {
        return _this3.foundation.handleTransitionEnd(evt);
      },
      focusin: function focusin(evt) {
        return _this3.foundation.handleFocusIn(evt);
      },
      focusout: function focusout(evt) {
        return _this3.foundation.handleFocusOut(evt);
      }
    };

    if (this.trailingAction_) {
      on[INTERACTION_EVENT$1] = function (evt) {
        return _this3.foundation.handleTrailingIconInteraction(evt);
      };
    }

    return createElement('div', {
      class: this.classes,
      style: this.styles,
      attrs: {
        role: 'row'
      },
      on: on
    }, [createElement('div', {
      class: {
        'mdc-chip__ripple': 1
      }
    }), haveleadingIcon && this.renderLeadingIcon(createElement), isFilter && createElement(mcwChipCheckmark, {
      ref: 'checkmarkEl'
    }), createElement('span', {
      attrs: {
        role: 'gridcell'
      }
    }, [createElement('span', {
      attrs: _objectSpread2({
        role: role,
        tabindex: 0
      }, primaryAttrs),
      class: {
        'mdc-chip__primary-action': 1
      },
      ref: 'primaryAction'
    }, [createElement('span', {
      class: ['mdc-chip__text']
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots))])]), havetrailingIcon && this.renderTrailingIcon(createElement)]);
  }
};

var chips = BasePlugin({
  mcwChip: mcwChip,
  mcwChipSet: mcwChipSet,
  mcwChipCheckmark: mcwChipCheckmark
});

var script$2 = {
  name: 'mcw-data-table',
  data: function data() {
    return {};
  },
  methods: {
    getRows: function getRows() {
      return this.foundation.getRows();
    },
    layout: function layout() {
      this.foundation.layout();
    },
    getRowByIndex_: function getRowByIndex_(index) {
      return this.getRows()[index];
    },
    getRowIdByIndex_: function getRowIdByIndex_(index) {
      return this.getRowByIndex_(index).getAttribute(strings$5.DATA_ROW_ID_ATTR);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.checkboxFactory_ = function (el) {
      return new MDCCheckbox(el);
    };

    var cssClasses = cssClasses$5,
        events$1 = events,
        strings = strings$5;
    var adapter = {
      addClassAtRowIndex: function addClassAtRowIndex(rowIndex, className) {
        return _this.getRows()[rowIndex].classList.add(className);
      },
      getRowCount: function getRowCount() {
        return _this.getRows().length;
      },
      getRowElements: function getRowElements() {
        return [].slice.call(_this.$el.querySelectorAll(strings.ROW_SELECTOR));
      },
      getRowIdAtIndex: function getRowIdAtIndex(rowIndex) {
        return _this.getRows()[rowIndex].getAttribute(strings.DATA_ROW_ID_ATTR);
      },
      getRowIndexByChildElement: function getRowIndexByChildElement(el) {
        return _this.getRows().indexOf(closest(el, strings.ROW_SELECTOR));
      },
      getSelectedRowCount: function getSelectedRowCount() {
        return _this.$el.querySelectorAll(strings.ROW_SELECTED_SELECTOR).length;
      },
      isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked(rowIndex) {
        return _this.rowCheckboxList_[rowIndex].checked;
      },
      isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
        return _this.headerRowCheckbox_.checked;
      },
      isRowsSelectable: function isRowsSelectable() {
        return !!_this.$el.querySelector(strings.ROW_CHECKBOX_SELECTOR);
      },
      notifyRowSelectionChanged: function notifyRowSelectionChanged(data) {
        _this.$emit(events$1.ROW_SELECTION_CHANGED, {
          row: _this.getRowByIndex_(data.rowIndex),
          rowId: _this.getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected
        },
        /** shouldBubble */
        true);
      },
      notifySelectedAll: function notifySelectedAll() {
        return _this.$emit(events$1.SELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      notifyUnselectedAll: function notifyUnselectedAll() {
        return _this.$emit(events$1.UNSELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
        if (_this.headerRowCheckbox_) {
          _this.headerRowCheckbox_.destroy();
        }

        var checkboxEl = _this.$el.querySelector(strings.HEADER_ROW_CHECKBOX_SELECTOR);

        _this.headerRowCheckbox_ = _this.checkboxFactory_(checkboxEl);
      },
      registerRowCheckboxes: function registerRowCheckboxes() {
        if (_this.rowCheckboxList_) {
          _this.rowCheckboxList_.forEach(function (checkbox) {
            return checkbox.destroy();
          });
        }

        _this.rowCheckboxList_ = [];

        _this.getRows().forEach(function (rowEl) {
          var checkbox = _this.checkboxFactory_(rowEl.querySelector(strings.ROW_CHECKBOX_SELECTOR));

          _this.rowCheckboxList_.push(checkbox);
        });
      },
      removeClassAtRowIndex: function removeClassAtRowIndex(rowIndex, className) {
        _this.getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: function setAttributeAtRowIndex(rowIndex, attr, value) {
        _this.getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked(checked) {
        _this.headerRowCheckbox_.checked = checked;
      },
      setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate(indeterminate) {
        _this.headerRowCheckbox_.indeterminate = indeterminate;
      },
      setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex(rowIndex, checked) {
        _this.rowCheckboxList_[rowIndex].checked = checked;
      }
    };
    this.foundation = new MDCDataTableFoundation(adapter);
    this.foundation.init();
    this.headerRow_ = this.$el.querySelector(".".concat(cssClasses.HEADER_ROW));

    this.handleHeaderRowCheckboxChange_ = function () {
      return _this.foundation.handleHeaderRowCheckboxChange();
    };

    this.headerRow_.addEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_ = this.$el.querySelector(".".concat(cssClasses.CONTENT));

    this.handleRowCheckboxChange_ = function (event) {
      return _this.foundation.handleRowCheckboxChange(event);
    };

    this.content_.addEventListener('change', this.handleRowCheckboxChange_);
    this.layout();
  },
  beforeDestroy: function beforeDestroy() {
    this.headerRow_.removeEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_.removeEventListener('change', this.handleRowCheckboxChange_);

    if (this.headerRowCheckbox_) {
      this.headerRowCheckbox_.destroy();
    }

    if (this.rowCheckboxList_) {
      this.rowCheckboxList_.forEach(function (checkbox) {
        return checkbox.destroy();
      });
    }

    this.foundation.destroy();
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "mdc-data-table" }, [_vm._t("default")], 2)
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

var dataTable = BasePlugin({
  mcwDataTable: __vue_component__$2
});

var cssClasses = MDCDialogFoundation.cssClasses;
var script$3 = {
  name: 'mcw-dialog',
  components: {
    mcwButton: mcwButton
  },
  mixins: [VMAUniqueIdMixin],
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
    labelledBy: String,
    describedBy: String
  },
  data: function data() {
    return {
      classes: {
        'mdc-dialog': 1
      },
      styles: {}
    };
  },
  watch: {
    open: 'onOpen_'
  },
  mounted: function mounted() {
    var _this = this;

    var LAYOUT_EVENTS = ['resize', 'orientationchange'];
    var strings = MDCDialogFoundation.strings;
    var open = this.open,
        autoStackButtons = this.autoStackButtons,
        escapeKeyAction = this.escapeKeyAction,
        scrimClickAction = this.scrimClickAction;
    this.buttons_ = [].slice.call(this.$el.querySelectorAll(cssClasses.BUTTON));
    this.defaultButton = this.$el.querySelector("[".concat(strings.BUTTON_DEFAULT_ATTRIBUTE, "]"));
    var container = this.$el.querySelector(strings.CONTAINER_SELECTOR);

    if (!container) {
      throw new Error("Dialog component requires a ".concat(strings.CONTAINER_SELECTOR, " container element"));
    }

    this.content_ = this.$el.querySelector(strings.CONTENT_SELECTOR);

    this.focusTrapFactory_ = function (el) {
      return new FocusTrap(el);
    };

    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
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
        return _this.focusTrap && _this.focusTrap.trapFocus();
      },
      releaseFocus: function releaseFocus() {
        return _this.focusTrap && _this.focusTrap.releaseFocus();
      },
      getInitialFocusEl: function getInitialFocusEl() {
        return _this.getInitialFocusEl_();
      },
      isContentScrollable: function isContentScrollable() {
        return isScrollable(_this.content_);
      },
      areButtonsStacked: function areButtonsStacked() {
        return areTopsMisaligned(_this.buttons_);
      },
      getActionFromEvent: function getActionFromEvent(event) {
        var elem = closest$1(event.target, "[".concat(strings.ACTION_ATTRIBUTE, "]"));
        return elem === null || elem === void 0 ? void 0 : elem.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: function clickDefaultButton() {
        var _this$defaultButton;

        (_this$defaultButton = _this.defaultButton) === null || _this$defaultButton === void 0 ? void 0 : _this$defaultButton.click();
      },
      reverseButtons: function reverseButtons() {
        var buttons = _this.buttons_;
        return buttons && buttons.reverse().forEach(function (button) {
          var _button$parentElement;

          return (_button$parentElement = button.parentElement) === null || _button$parentElement === void 0 ? void 0 : _button$parentElement.appendChild(button);
        });
      },
      notifyOpening: function notifyOpening() {
        _this.$emit(strings.OPENING_EVENT, {});

        LAYOUT_EVENTS.forEach(function (evt) {
          return window.addEventListener(evt, _this.handleLayout);
        });
        document.addEventListener('keydown', _this.handleDocumentKeyDown);
      },
      notifyOpened: function notifyOpened() {
        return _this.$emit(strings.OPENED_EVENT, {});
      },
      notifyClosing: function notifyClosing(action) {
        _this.$emit('change', false);

        _this.$emit(strings.CLOSING_EVENT, action ? {
          action: action
        } : {});

        LAYOUT_EVENTS.forEach(function (evt) {
          return window.removeEventListener(evt, _this.handleLayout);
        });
        document.removeEventListener('keydown', _this.handleDocumentKeyDown);
      },
      notifyClosed: function notifyClosed(action) {
        _this.$emit(strings.CLOSED_EVENT, action ? {
          action: action
        } : {});
      }
    };
    this.foundation = new MDCDialogFoundation(adapter);
    this.foundation.init();

    if (!autoStackButtons) {
      this.foundation.setAutoStackButtons(autoStackButtons);
    }

    if (typeof escapeKeyAction === 'string') {
      // set even if empty string
      this.foundation.setEscapeKeyAction(escapeKeyAction);
    }

    if (typeof scrimClickAction === 'string') {
      // set even if empty string
      this.foundation.setScrimClickAction(scrimClickAction);
    }

    this.onOpen_(open);
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    handleLayout: function handleLayout() {
      this.foundation.layout();
    },
    handleDocumentKeyDown: function handleDocumentKeyDown(e) {
      this.foundation.handleDocumentKeydown(e);
    },
    getInitialFocusEl_: function getInitialFocusEl_() {
      return document.querySelector("[".concat(MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE, "]"));
    },
    onOpen_: function onOpen_(value) {
      if (value) {
        if (this.$refs.container) {
          this.focusTrap = createFocusTrapInstance(this.$el, this.focusTrapFactory_, this.getInitialFocusEl_() || void 0);
        }

        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    onClick: function onClick(evt) {
      this.foundation.handleClick(evt);
    },
    onKeydown: function onKeydown(evt) {
      this.foundation.handleKeydown(evt);
    }
  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
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
              "aria-labelledby": _vm.labelledBy,
              "aria-describedby": _vm.describedBy
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

var mcwDialogButton = {
  name: 'mcw-dialog-button',
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean
  },
  render: function render(createElement) {
    var _this$$scopedSlots$de, _this$$scopedSlots;

    var action = this.action,
        isDefault = this.isDefault,
        isInitialFocus = this.isInitialFocus;

    var onClick = this.$listeners['click'] || function () {};

    return createElement('mcw-button', {
      class: ['mdc-dialog__button'],
      attrs: {
        'data-mdc-dialog-action': action,
        'data-mdc-dialog-button-default': isDefault,
        'data-mdc-dialog-initial-focus': isInitialFocus
      },
      on: {
        click: onClick
      }
    }, (_this$$scopedSlots$de = (_this$$scopedSlots = this.$scopedSlots).default) === null || _this$$scopedSlots$de === void 0 ? void 0 : _this$$scopedSlots$de.call(_this$$scopedSlots));
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
  render: function render(createElement, context) {
    var _slots$default;

    var slots = this.$scopedSlots,
        tag = this.tag;
    return createElement(tag, {
      class: ['mdc-dialog__content']
    }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
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
  render: function render(createElement) {
    var _this$$scopedSlots$de, _this$$scopedSlots;

    return createElement(this.tag, {
      class: ['mdc-dialog__actions']
    }, (_this$$scopedSlots$de = (_this$$scopedSlots = this.$scopedSlots).default) === null || _this$$scopedSlots$de === void 0 ? void 0 : _this$$scopedSlots$de.call(_this$$scopedSlots));
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
  render: function render(createElement) {
    var _slots$default;

    var slots = this.$scopedSlots,
        tag = this.tag;
    return createElement(tag, {
      class: ['mdc-dialog__title']
    }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
  }
};

var dialog = BasePlugin({
  mcwDialog: __vue_component__$3,
  mcwDialogTitle: mcwDialogTitle,
  mcwDialogFooter: mcwDialogFooter,
  mcwDialogButton: mcwDialogButton,
  mcwDialogContent: mcwDialogContent
});

var mcwDrawer = {
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
  provide: function provide() {
    return {
      mcwDrawer: this
    };
  },
  data: function data() {
    return {
      classes: {
        'mdc-drawer': 1,
        'mdc-drawer--modal': 1
      }
    };
  },
  computed: {
    type: function type() {},
    isModal: function isModal() {
      return this.modal;
    }
  },
  watch: {
    open: 'onOpen_'
  },
  mounted: function mounted() {
    var _this = this;

    this.drawer_ = this.$refs.drawer;
    var listEl = this.$el.querySelector(".".concat(MDCListFoundation.cssClasses.ROOT));

    if (listEl) {
      this.list_ = listEl;
      this.list_.wrapFocus = true;
    }

    this.focusTrapFactory_ = function (el) {
      return new FocusTrap$1(el);
    };

    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return _this.drawer_.classList.contains(className);
      },
      elementHasClass: function elementHasClass(element, className) {
        return element.classList.contains(className);
      },
      saveFocus: function saveFocus() {
        _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        var previousFocus = _this.previousFocus_ && _this.previousFocus_.focus;

        if (_this.drawer_.contains(document.activeElement) && previousFocus) {
          _this.previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: function focusActiveNavigationItem() {
        var activeNavItemEl = _this.drawer_.querySelector(".".concat(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS));

        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function notifyClose() {
        _this.$emit('change', false);

        _this.$emit('close');
      },
      notifyOpen: function notifyOpen() {
        _this.$emit('change', true);

        _this.$emit('open');
      },
      trapFocus: function trapFocus() {
        return _this.focusTrap_.trapFocus();
      },
      releaseFocus: function releaseFocus() {
        return _this.focusTrap_.releaseFocus();
      }
    };
    var _MDCDismissibleDrawer = MDCDismissibleDrawerFoundation.cssClasses,
        DISMISSIBLE = _MDCDismissibleDrawer.DISMISSIBLE,
        MODAL = _MDCDismissibleDrawer.MODAL;

    if (this.drawer_.classList.contains(DISMISSIBLE)) {
      this.foundation = new MDCDismissibleDrawerFoundation(adapter);
    } else if (this.drawer_.classList.contains(MODAL)) {
      this.foundation = new MDCModalDrawerFoundation(adapter);
    } else {
      throw new Error("mcwDrawer: Failed to instantiate component. Supported variants are ".concat(DISMISSIBLE, " and ").concat(MODAL, "."));
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
  beforeDestroy: function beforeDestroy() {
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
    initialSyncWithDOM: function initialSyncWithDOM() {
      var _this2 = this;

      var MODAL = MDCDismissibleDrawerFoundation.cssClasses.MODAL;

      if (this.drawer_.classList.contains(MODAL)) {
        var SCRIM_SELECTOR = MDCDismissibleDrawerFoundation.strings.SCRIM_SELECTOR;
        this.scrim_ = this.drawer_.parentElement.querySelector(SCRIM_SELECTOR);

        this.handleScrimClick_ = function () {
          return _this2.foundation.handleScrimClick();
        };

        this.scrim_.addEventListener('click', this.handleScrimClick_);
        this.focusTrap_ = createFocusTrapInstance$1(this.drawer_, this.focusTrapFactory_);
      }

      this.handleKeydown_ = function (evt) {
        return _this2.foundation.handleKeydown(evt);
      };

      this.handleTransitionEnd_ = function (evt) {
        return _this2.foundation.handleTransitionEnd(evt);
      };

      this.$el.addEventListener('keydown', this.handleKeydown_);
      this.$el.addEventListener('transitionend', this.handleTransitionEnd_);
    },
    onOpen_: function onOpen_(value) {
      if (this.open) {
        this.foundation && this.foundation.open();
      } else {
        this.foundation && this.foundation.close();
      }
    },
    onChange: function onChange(event) {
      this.$emit('change', event);
      this.$root.$emit('vma:layout');
    },
    show: function show() {
      this.foundation.open();
    },
    close: function close() {
      this.foundation.close();
    },
    toggle: function toggle() {
      this.foundation.isOpen() ? this.foundation.close() : this.foundation.open();
    },
    isOpen: function isOpen() {
      return this.foundation.isOpen();
    }
  },
  render: function render(createElement) {
    var _scopedSlots$default, _scopedSlots$header;

    var scopedSlots = this.$scopedSlots;
    var asideNodes = [createElement('div', {
      class: {
        'mdc-drawer__content': 1
      }
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots))];
    var headerSlot = (_scopedSlots$header = scopedSlots.header) === null || _scopedSlots$header === void 0 ? void 0 : _scopedSlots$header.call(scopedSlots);

    if (headerSlot) {
      asideNodes.unshift(headerSlot);
    }

    var asideElement = createElement('aside', {
      class: this.classes,
      ref: 'drawer'
    }, asideNodes);
    var nodes = [asideElement, createElement('div', {
      class: {
        'mdc-drawer-scrim': 1
      }
    })];

    if (this.toolbarSpacer) {
      nodes.push(createElement('div', {
        class: {
          'mdc-top-app-bar--fixed-adjust': 1
        }
      }));
    }

    return createElement('div', {}, nodes);
  }
};

var mcwDrawerDivider = {
  name: 'mcw-drawer-divider',
  functional: true,
  render: function render(createElement) {
    return createElement('hr', {
      class: {
        'mdc-list-divider': 1
      }
    });
  }
};

var mcwDrawerHeader = {
  name: 'mcw-drawer-header',
  functional: true,
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var scopedSlots = _ref.scopedSlots;
    return createElement('div', {
      class: 'mdc-drawer__header'
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

var script$4 = {
  name: 'mcw-drawer-item',
  inject: ['mcwDrawer'],
  mixins: [DispatchEventMixin, CustomLinkMixin],
  props: {
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
  },
  data: function data() {
    return {
      classes: {
        'mdc-list-item': 1,
        'mdc-drawer-item': 1
      },
      styles: {}
    };
  },
  computed: {
    mylisteners: function mylisteners() {
      var _this = this;

      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        click: function click(e) {
          _this.mcwDrawer.isModal && _this.modalClose && _this.mcwDrawer.close();

          _this.dispatchEvent(e);
        }
      });
    },
    itemClasses: function itemClasses() {
      return {
        'mdc-list-item--activated': this.activated
      };
    },
    hasStartDetail: function hasStartDetail() {
      return this.startIcon || this.$slots['start-detail'];
    }
  },
  mounted: function mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.ripple && this.ripple.destroy();
    this.ripple = null;
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
    "custom-link",
    _vm._g(
      {
        class: [_vm.classes, _vm.itemClasses],
        style: _vm.styles,
        attrs: { link: _vm.link }
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

var mcwDrawerList = {
  name: 'mcw-drawer-list',
  functional: true,
  props: {
    dense: Boolean
  },
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var dense = _ref.props.dense,
        scopedSlots = _ref.scopedSlots;
    return createElement('nav', {
      class: {
        'mdc-drawer-list': 1,
        'mdc-list': 1,
        'mdc-list--dense': dense
      }
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

var drawer = BasePlugin({
  mcwDrawer: mcwDrawer,
  mcwDrawerHeader: mcwDrawerHeader,
  mcwDrawerList: mcwDrawerList,
  mcwDrawerItem: __vue_component__$4,
  mcwDrawerDivider: mcwDrawerDivider
});

var script$5 = {
  name: 'mcw-fab',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String
  },
  data: function data() {
    return {
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': this.mini,
        'mdc-fab--extended': this.label || this.$slots.default,
        'mdc-fab--exited': this.exited
      }
    };
  },
  watch: {
    icon: function icon() {
      this.$set(this.classes, 'material-icons', this.icon);
    },
    mini: function mini() {
      this.$set(this.classes, 'mdc-fab--mini', this.mini);
    },
    exited: function exited() {
      this.$set(this.classes, 'mdc-fab--exited', this.exited);
    }
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
    "custom-button",
    _vm._g(
      {
        class: _vm.classes,
        style: _vm.styles,
        attrs: { href: _vm.href, link: _vm.link }
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

var fab = BasePlugin({
  mcwFAB: __vue_component__$5
});

var script$6 = {
  name: 'mcw-floating-label',
  data: function data() {
    return {
      labelClasses: {
        'mdc-floating-label': true
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCFloatingLabelFoundation({
      addClass: function addClass(className) {
        _this.$set(_this.labelClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.labelClasses, className);
      },
      getWidth: function getWidth() {
        return _this.$el.scrollWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        _this.$el.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        _this.$el.removeEventListener(evtType, handler);
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    getWidth: function getWidth() {
      return this.foundation.getWidth();
    },
    float: function float(shouldFloat) {
      this.foundation.float(shouldFloat);
    },
    shake: function shake(shouldShake) {
      this.foundation.shake(shouldShake);
    }
  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { class: _vm.labelClasses }, [_vm._t("default")], 2)
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

var floatingLabel = BasePlugin({
  mcwFloatingLabel: __vue_component__$6
});

var mcwIconButton = {
  name: 'mcw-icon-button',
  model: {
    prop: 'isOn',
    event: 'change'
  },
  props: {
    isOn: Boolean,
    disabled: Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-icon-button': 1,
        'material-icons': 1
      },
      styles: {}
    };
  },
  watch: {
    isOn: 'onOn_'
  },
  mounted: function mounted() {
    var _this = this;

    var CHANGE_EVENT = MDCIconButtonToggleFoundation.strings.CHANGE_EVENT;
    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return Boolean(_this.classes[className]);
      },
      setAttr: function setAttr(attrName, attrValue) {
        return _this.$el.setAttribute(attrName, attrValue);
      },
      getAttr: function getAttr(attrName) {
        return _this.$el.getAttribute(attrName);
      },
      notifyChange: function notifyChange(evtData) {
        _this.$emit(CHANGE_EVENT, evtData);

        _this.$emit('change', evtData.isOn);
      }
    };
    this.foundation = new MDCIconButtonToggleFoundation(adapter);
    this.foundation.init();
    this.ripple = new RippleBase(this, {
      isUnbounded: function isUnbounded() {
        return true;
      }
    });
    this.ripple.init();
    this.foundation.toggle(this.isOn);
  },
  beforeDestroy: function beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
  methods: {
    onOn_: function onOn_(isOn) {
      if (this.isOn !== isOn) {
        this.foundation.toggle(isOn);
      }
    }
  },
  render: function render(createElement) {
    var _this2 = this,
        _scopedSlots$default;

    var scopedSlots = this.$scopedSlots;
    var isLink = Boolean(this.$attrs.href);
    var tag = isLink ? 'a' : 'button';
    return createElement(tag, {
      class: this.classes,
      style: this.styles,
      on: {
        click: function click(evt) {
          return _this2.foundation.handleClick(evt);
        }
      },
      attrs: _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        'aria-pressed': 'false',
        disabled: this.disabled
      })
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

var mcwIconToggle = {
  name: 'mcw-icon-toggle',
  functional: true,
  props: {
    isOn: Boolean
  },
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var isOn = _ref.props.isOn,
        scopedSlots = _ref.scopedSlots;
    return createElement('i', {
      class: {
        'material-icons': 1,
        'mdc-icon-button__icon': true,
        'mdc-icon-button__icon--on': isOn
      }
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

var iconButton = BasePlugin({
  mcwIconButton: mcwIconButton,
  mcwIconToggle: mcwIconToggle
});

var spanOptions = {
  type: [String, Number],
  default: null,
  validator: function validator(value) {
    var num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  }
};
var script$7 = {
  name: 'mcw-layout-cell',
  props: {
    span: spanOptions,
    order: spanOptions,
    phone: spanOptions,
    tablet: spanOptions,
    desktop: spanOptions,
    align: {
      type: String,
      validator: function validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes: function classes() {
      var cssClasses = [];

      if (this.span) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(this.span));
      }

      if (this.order) {
        cssClasses.push("mdc-layout-grid__cell--order-".concat(this.order));
      }

      if (this.phone) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(this.phone, "-phone"));
      }

      if (this.tablet) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(this.tablet, "-tablet"));
      }

      if (this.desktop) {
        cssClasses.push("mdc-layout-grid__cell--span-".concat(this.desktop, "-desktop"));
      }

      if (this.align) {
        cssClasses.push("mdc-layout-grid__cell--align-".concat(this.align));
      }

      return cssClasses;
    }
  }
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
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

var script$8 = {
  name: 'mcw-layout-grid',
  props: {
    fixedColumWidth: Boolean,
    alignLeft: Boolean,
    alignRight: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
        'mdc-layout-grid--align-left': this.alignLeft,
        'mdc-layout-grid--align-right': this.alignRight
      };
    }
  }
};

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes }, [
    _c("div", { staticClass: "mdc-layout-grid__inner" }, [_vm._t("default")], 2)
  ])
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

var script$9 = {
  name: 'mcw-layout-inner-grid'
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
    { staticClass: "mdc-layout-inner-grid mdc-layout-grid__inner" },
    [_vm._t("default")],
    2
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

var layoutGrid = BasePlugin({
  mcwLayoutGrid: __vue_component__$8,
  mcwLayoutCell: __vue_component__$7,
  mcwLayoutInnerGrid: __vue_component__$9
});

var mcwLineRipple = {
  name: 'mcw-line-ripple',
  props: {
    rippleCenter: {
      type: [Number, String],
      default: 0
    },
    active: Boolean
  },
  data: function data() {
    return {
      lineClasses: {
        'mdc-line-ripple': 1
      },
      lineStyles: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        _this.$set(_this.lineClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.lineClasses, className);
      },
      hasClass: function hasClass(className) {
        return Boolean(_this.lineClasses[className]);
      },
      setStyle: function setStyle(name, value) {
        _this.$set(_this.lineStyles, name, value);
      }
    }; // note: do not call the property 'foundation' as the tests will then
    // expext all methods to be implemented, and we handle transitionend locally

    this.foundation_ = new MDCLineRippleFoundation(adapter);
    this.foundation_.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation_.destroy();
  },
  methods: {
    setRippleCenter: function setRippleCenter(xCoordinate) {
      this.foundation_.setRippleCenter(xCoordinate);
    },
    activate: function activate() {
      this.foundation_.activate();
    },
    deactivate: function deactivate() {
      this.foundation_.deactivate();
    }
  },
  render: function render(createElement) {
    var _this2 = this;

    return createElement('span', {
      class: this.lineClasses,
      style: this.lineStyles,
      on: {
        transitionend: function transitionend(evt) {
          return _this2.foundation_.handleTransitionEnd(evt);
        }
      }
    });
  }
};

var lineRipple = BasePlugin({
  mcwLineRipple: mcwLineRipple
});

var ProgressPropType$1 = {
  type: [Number, String],
  validator: function validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};
var script$a = {
  name: 'mcw-linear-progress',
  props: {
    open: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean,
    reversed: Boolean,
    progress: ProgressPropType$1,
    buffer: ProgressPropType$1,
    bufferingDots: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data: function data() {
    return {
      classes: {
        'mdc-linear-progress': 1
      },
      bufferbarStyles: {},
      primaryStyles: {},
      rootAttrs: {}
    };
  },
  watch: {
    open: function open(nv) {
      if (nv) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    progress: function progress(nv) {
      this.foundation.setProgress(Number(nv));
    },
    buffer: function buffer(nv) {
      this.foundation.setBuffer(Number(nv));
    },
    indeterminate: function indeterminate(nv) {
      this.foundation.setDeterminate(!nv);
    },
    reversed: function reversed(nv) {
      this.foundation.setReverse(nv);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        _this.$set(_this.classes, className, true);
      },
      forceLayout: function forceLayout() {
        return _this.$el.offsetWidth;
      },
      setBufferBarStyle: function setBufferBarStyle(styleProperty, value) {
        _this.$set(_this.bufferbarStyles, styleProperty, value);
      },
      setPrimaryBarStyle: function setPrimaryBarStyle(styleProperty, value) {
        _this.$set(_this.primaryStyles, styleProperty, value);
      },
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      setAttribute: function setAttribute(attributeName, value) {
        _this.$set(_this.rootAttrs, attributeName, value);
      },
      removeAttribute: function removeAttribute(attributeName) {
        _this.$delete(_this.rootAttrs, attributeName);
      }
    };
    this.foundation = new MDCLinearProgressFoundation(adapter);
    this.foundation.init();
    this.foundation.setReverse(this.reversed);
    this.foundation.setProgress(Number(this.progress));
    this.foundation.setBuffer(Number(this.buffer));
    this.foundation.setDeterminate(!this.indeterminate);

    if (this.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  }
};

/* script */
const __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      { class: _vm.classes, attrs: { role: "progressbar" } },
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

var linearProgress = BasePlugin({
  mcwLinearProgress: __vue_component__$a
});

var ARIA_ORIENTATION = 'aria-orientation';
var VERTICAL = 'vertical';
var RADIO_CHECKED_RADIO_SELECTOR = "input[type=\"radio\"][checked=\"checked\"]";
var strings = MDCListFoundation.strings,
    cssClasses$1 = MDCListFoundation.cssClasses;
var mcwList = {
  name: 'mcw-list',
  model: {
    prop: 'selectedIndex',
    event: 'change'
  },
  props: _defineProperty({
    nonInteractive: {
      type: Boolean,
      default: false
    },
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    singleSelection: Boolean,
    wrapFocus: Boolean,
    selectedIndex: {
      type: [Number, Array]
    },
    tag: {
      type: String,
      default: 'ul'
    }
  }, ARIA_ORIENTATION, {
    type: String,
    default: VERTICAL
  }),
  data: function data() {
    return {
      listn: 0
    };
  },
  watch: {
    singleSelection: function singleSelection(nv) {
      this.foundation.setSingleSelection(nv);
    },
    selectedIndex: function selectedIndex(nv) {
      if (Array.isArray(nv)) {
        this.foundation.setSelectedIndex(nv);
      } else if (this.selectedIndex != nv) {
        this.foundation.setSelectedIndex(nv);
      }
    },
    wrapFocus: function wrapFocus(nv) {
      this.foundation.setWrapFocus(nv);
    },
    ariaOrientation: function ariaOrientation(nv) {
      this.foundation.setVerticalOrientation(nv === VERTICAL);
    }
  },
  computed: {
    selIndex: {
      get: function get() {
        return this.selectedIndex;
      },
      set: function set(nv) {
        this.$emit('change', nv);
      }
    },
    classes: function classes() {
      return {
        'mdc-list': 1,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatarList,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--non-interactive': this.nonInteractive
      };
    },
    listElements: function listElements() {
      // eslint-disable-next-line no-unused-vars
      var xx = this.listn; // for dependency

      return [].slice.call(this.$el.querySelectorAll(".".concat(cssClasses$1.LIST_ITEM_CLASS)));
    }
  },
  methods: {
    handleFocusInEvent: function handleFocusInEvent(evt, index) {
      this.foundation.handleFocusIn(evt, index);
    },
    handleFocusOutEvent: function handleFocusOutEvent(evt, index) {
      this.foundation.handleFocusOut(evt, index);
    },
    handleKeydownEvent: function handleKeydownEvent(evt) {
      var index = this.getListItemIndex(evt);
      var target = evt.target;
      this.foundation.handleKeydown(evt, target.classList.contains(cssClasses$1.LIST_ITEM_CLASS), index);
    },
    handleClickEvent: function handleClickEvent(evt) {
      var index = this.getListItemIndex(evt);
      var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

      var toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
      this.foundation.handleClick(index, toggleCheckbox);
    },
    layout: function layout() {
      this.foundation.setVerticalOrientation(this.ariaOrientation == VERTICAL); // List items need to have at least tabindex=-1 to be focusable.

      [].slice.call(this.$el.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      }); // Child button/a elements are not tabbable until the list item is focused.

      [].slice.call(this.$el.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
      this.foundation.layout();
    },
    initializeListType: function initializeListType() {
      var _this = this;

      var checkboxListItems = this.$el.querySelectorAll(strings.ARIA_ROLE_CHECKBOX_SELECTOR);
      var singleSelectedListItem = this.$el.querySelector("\n        .".concat(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS, ",\n        .").concat(cssClasses$1.LIST_ITEM_SELECTED_CLASS, "\n      "));
      var radioSelectedListItem = this.$el.querySelector(strings.ARIA_CHECKED_RADIO_SELECTOR);

      if (!radioSelectedListItem) {
        var radioSelectedInput = this.$el.querySelector(RADIO_CHECKED_RADIO_SELECTOR);

        if (radioSelectedInput) {
          radioSelectedListItem = closest(radioSelectedInput, "[role=\"radio\"].".concat(cssClasses$1.LIST_ITEM_CLASS));
        }
      }

      if (checkboxListItems.length) {
        var preselectedItems = this.$el.querySelectorAll(strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
        this.selIndex = [].map.call(preselectedItems, function (listItem) {
          return _this.listElements.indexOf(listItem);
        });
      } else if (singleSelectedListItem) {
        if (singleSelectedListItem.classList.contains(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS)) {
          this.foundation.setUseActivatedClass(true);
        }

        this.singleSelection = true;
        this.selIndex = this.listElements.indexOf(singleSelectedListItem);
      } else if (radioSelectedListItem) {
        var selIndex = this.listElements.indexOf(radioSelectedListItem);
        this.foundation.setSelectedIndex(selIndex);
        this.selIndex = selIndex;
        radioSelectedListItem.setAttribute('tabindex', '0');
      }
    },
    getListItemIndex: function getListItemIndex(evt) {
      var eventTarget = evt.target;
      var nearestParent = closest(eventTarget, ".".concat(cssClasses$1.LIST_ITEM_CLASS, ", .").concat(cssClasses$1.ROOT)); // Get the index of the element if it is a list item.

      if (nearestParent && matches(nearestParent, ".".concat(cssClasses$1.LIST_ITEM_CLASS))) {
        return this.listElements.indexOf(nearestParent);
      }

      return -1;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var wrapFocus = this.wrapFocus;
    var adapter = {
      addClassForElementIndex: function addClassForElementIndex(index, className) {
        var element = _this2.listElements[index];

        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = _this2.listElements[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
        return _this2.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function getFocusedElementIndex() {
        return _this2.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function getListItemCount() {
        return _this2.listElements.length;
      },
      hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
        var listItem = _this2.listElements[index];
        return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function hasRadioAtIndex(index) {
        var listItem = _this2.listElements[index];
        return !!listItem.querySelector(strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
        var listItem = _this2.listElements[index];
        var toggleEl = listItem.querySelector(strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function isFocusInsideList() {
        return _this2.$el.contains(document.activeElement);
      },
      isRootFocused: function isRootFocused() {
        return document.activeElement === _this2.$el;
      },
      listItemAtIndexHasClass: function listItemAtIndexHasClass(index, className) {
        _this2.listElements[index].classList.contains(className);
      },
      notifyAction: function notifyAction(index) {
        emitCustomEvent(_this2.$el, strings.ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);

        if (Array.isArray(_this2.selectedIndex)) {
          _this2.$emit('change', _this2.foundation.getSelectedIndex());
        } else {
          _this2.$emit('change', index);
        }
      },
      removeClassForElementIndex: function removeClassForElementIndex(index, className) {
        var element = _this2.listElements[index];

        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
        var element = _this2.listElements[index];

        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
        var listItem = _this2.listElements[index];
        var toggleEl = listItem.querySelector(strings.CHECKBOX_RADIO_SELECTOR);
        toggleEl && (toggleEl.checked = isChecked);
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl && toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = _this2.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    this.foundation = new MDCListFoundation(adapter);
    this.foundation.init();
    this.foundation.layout();
    this.initializeListType();
    this.foundation.setSingleSelection(this.singleSelection);

    if (this.singleSelection && typeof this.selectedIndex === 'number' && !isNaN(this.selectedIndex)) {
      this.foundation.setSelectedIndex(this.selectedIndex);
    }

    this.foundation.setWrapFocus(wrapFocus);
    this.foundation.setVerticalOrientation(this[ARIA_ORIENTATION] === VERTICAL);
    this.layout(); // the list content could change outside of this component
    // so use a mutation observer to trigger an update by
    // incrementing the dependency variable "listn" referenced
    // in the computed that selects the list elements

    this.slotObserver = new MutationObserver(function (mutationList, observer) {
      _this2.listn++;
    });
    this.slotObserver.observe(this.$refs.listRoot, {
      childList: true // subtree: true,

    });
  },
  beforeDestroy: function beforeDestroy() {
    this.slotObserver.disconnect();
  },
  render: function render(createElement) {
    var _this3 = this;

    var tag = this.tag,
        ariaOrientation = this.ariaOrientation,
        singleSelection = this.singleSelection,
        slots = this.$scopedSlots;
    var attrs = {
      'aria-orientation': ariaOrientation
    };

    if (singleSelection) {
      attrs.role = 'listbox';
    }

    return createElement(tag, {
      class: this.classes,
      attrs: attrs,
      on: {
        click: function click(event) {
          return _this3.handleClickEvent(event);
        },
        focusin: function focusin(event) {
          return _this3.handleFocusInEvent(event);
        },
        focusout: function focusout(event) {
          return _this3.handleFocusOutEvent(event);
        },
        keydown: function keydown(event) {
          return _this3.handleKeydownEvent(event);
        }
      },
      ref: 'listRoot'
    }, slots.default && slots.default());
  }
};

var mcwListDivider = {
  name: 'mcw-list-divider',
  props: {
    inset: Boolean,
    padded: Boolean,
    role: {
      type: String,
      default: function _default() {
        return 'separator';
      }
    },
    tag: {
      type: String,
      default: function _default() {
        return 'li';
      }
    }
  },
  functional: true,
  render: function render(createElement, _ref) {
    var _ref$props = _ref.props,
        tag = _ref$props.tag,
        inset = _ref$props.inset,
        padded = _ref$props.padded,
        role = _ref$props.role,
        staticClass = _ref$props.staticClass,
        attrs = _ref$props.attrs;
    return createElement(tag, {
      class: ['mdc-list-divider', staticClass, {
        'mdc-list-divider--inset': inset,
        'mdc-list-divider--padded': padded
      }],
      attrs: _objectSpread2(_objectSpread2({}, attrs), {}, {
        role: role
      })
    });
  }
};

var mcwListGroupSubHeader = {
  name: 'mcw-list-group-sub-header',
  functional: true,
  props: {
    tag: {
      type: String,
      default: function _default() {
        return 'h3';
      }
    }
  },
  render: function render(createElement, _ref) {
    var scopedSlots = _ref.scopedSlots,
        tag = _ref.props.tag,
        staticClass = _ref.staticClass,
        attrs = _ref.attrs;
    return createElement(tag, {
      class: ['mdc-list-group__subheader', staticClass],
      attrs: attrs
    }, scopedSlots.default && scopedSlots.default());
  }
};

var mcwListGroup = {
  name: 'mcw-list-group',
  functional: true,
  props: {
    tag: {
      type: String,
      default: function _default() {
        return 'div';
      }
    }
  },
  render: function render(createElement, _ref) {
    var tag = _ref.props.tag,
        scopedSlots = _ref.scopedSlots,
        staticClass = _ref.staticClass,
        attrs = _ref.attrs;
    return createElement(tag, {
      class: ['mdc-list-group', staticClass],
      attrs: attrs
    }, scopedSlots.default && scopedSlots.default());
  }
};

var list = BasePlugin({
  mcwList: mcwList,
  mcwListDivider: mcwListDivider,
  mcwListGroup: mcwListGroup,
  mcwListGroupSubHeader: mcwListGroupSubHeader
});

var mcwMaterialIcon = {
  name: 'mcw-material-icon',
  props: {
    hasRipple: Boolean,
    icon: String,
    tag: {
      type: String,
      default: 'i'
    }
  },
  data: function data() {
    return {
      classes: {
        'material-icons': true,
        'material-icons--ripple-surface': this.hasRipple
      },
      styles: {} // for ripple support

    };
  },
  mounted: function mounted() {
    if (this.hasRipple) {
      this.ripple = new RippleBase(this, {
        isUnbounded: function isUnbounded() {
          return true;
        }
      });
      this.ripple.init();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  },
  render: function render(createElement) {
    var tag = this.tag;
    return createElement(tag, {
      class: this.classes,
      on: this.$listeners,
      style: this.styles
    }, this.icon);
  }
};

var materialIcon = BasePlugin({
  mcwMaterialIcon: mcwMaterialIcon
});

/* eslint-disable quote-props */
var mcwMenu = {
  name: 'mcw-menu',
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
  data: function data() {
    return {
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true
    };
  },
  watch: {
    open: function open(nv) {
      this.menuOpen = nv;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this._previousFocus = undefined;
    var cssClasses = MDCMenuFoundation.cssClasses,
        strings = MDCMenuFoundation.strings;
    var adapter = {
      addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
        var list = _this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
        var list = _this.items;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: function elementContainsClass(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function closeSurface(skipRestoreFocus) {
        _this.$refs.menuSurface_.close(skipRestoreFocus);

        _this.$emit('change', false);
      },
      getElementIndex: function getElementIndex(element) {
        return _this.items.indexOf(element);
      },
      isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
        return !!closest(_this.items[index], ".".concat(cssClasses.MENU_SELECTION_GROUP));
      },
      getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
        var selectionGroupEl = closest(_this.items[index], ".".concat(cssClasses.MENU_SELECTION_GROUP));
        var selectedItemEl = selectionGroupEl.querySelector(".".concat(cssClasses.MENU_SELECTED_LIST_ITEM));
        return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
      },
      notifySelected: function notifySelected(evtData) {
        emitCustomEvent(_this.$el, strings.SELECTED_EVENT, {
          index: evtData.index,
          item: _this.items[evtData.index]
        });

        _this.$emit('select', {
          index: evtData.index,
          item: _this.items[evtData.index]
        });
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.items.length;
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        return _this.items[index].focus();
      },
      focusListRoot: function focusListRoot() {
        return _this.$el.querySelector(strings.LIST_SELECTOR).focus();
      }
    };
    this.menuOpen = this.open;
    this.foundation = new MDCMenuFoundation(adapter);
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this._previousFocus = null;
    this.foundation.destroy();
  },
  computed: {
    items: function items() {
      return this.$refs.list ? this.$refs.list.listElements : [];
    },
    surfaceOpen: {
      get: function get() {
        return this.menuOpen;
      },
      set: function set(value) {
        this.menuOpen = value;
      }
    },
    wrapFocus: {
      get: function get() {
        return this.myWrapFocus;
      },
      set: function set(nv) {
        this.myWrapFocus = nv;
      }
    }
  },
  methods: {
    listen: function listen(evtType, handler, options) {
      this.$el.addEventListener(evtType, handler, options);
    },
    unlisten: function unlisten(evtType, handler, options) {
      this.$el.removeEventListener(evtType, handler, options);
    },
    handleAction: function handleAction(_ref) {
      var index = _ref.detail.index;
      this.foundation.handleItemAction(this.items[index]);
    },
    handleKeydown: function handleKeydown(evt) {
      this.foundation.handleKeydown(evt);
    },
    onChange: function onChange(item) {
      this.menuOpen = item;
      this.$emit('change', item);
    },
    handleMenuSurfaceOpened: function handleMenuSurfaceOpened() {
      this.foundation.handleMenuSurfaceOpened();
    },
    setDefaultFocusState: function setDefaultFocusState(focusState) {
      this.foundation.setDefaultFocusState(focusState);
    },
    setAnchorCorner: function setAnchorCorner(corner) {
      this.$refs.menuSurface_.foundation.setAnchorCorner(corner);
    },
    setAnchorElement: function setAnchorElement(element) {
      this.$refs.menuSurface_.setMenuSurfaceAnchorElement(element);
    },
    setSelectedIndex: function setSelectedIndex(index) {
      this.foundation.setSelectedIndex(index);
    },
    setAnchorMargin: function setAnchorMargin(margin) {
      this.$refs.menuSurface_.foundation.setAnchorMargin(margin);
    },
    getOptionByIndex: function getOptionByIndex(index) {
      var items = this.items;

      if (index < items.length) {
        return items[index];
      }

      return null;
    },
    setFixedPosition: function setFixedPosition(isFixed) {
      this.$refs.menuSurface_.foundation.setFixedPosition(isFixed);
    },
    hoistMenuToBody: function hoistMenuToBody() {
      this.$refs.menuSurface_.foundation.hoistMenuToBody();
    },
    setIsHoisted: function setIsHoisted(isHoisted) {
      this.$refs.menuSurface_.foundation.setIsHoisted(isHoisted);
    },
    setAbsolutePosition: function setAbsolutePosition(x, y) {
      this.$refs.menuSurface_.foundation.setAbsolutePosition(x, y);
    }
  },
  render: function render(createElement) {
    var _this2 = this,
        _scopedSlots$default;

    var scopedSlots = this.$scopedSlots;
    return createElement('mcw-menu-surface', {
      class: {
        'mdc-menu': 1
      },
      ref: 'menuSurface_',
      attrs: {
        'quick-open': this.quickOpen,
        open: this.menuOpen
      },
      on: {
        change: function change(evt) {
          return _this2.onChange(evt);
        },
        keydown: function keydown(evt) {
          return _this2.handleKeydown(evt);
        },
        'MDCMenuSurface:opened': function MDCMenuSurfaceOpened(evt) {
          return _this2.handleMenuSurfaceOpened(evt);
        }
      }
    }, [createElement('mcw-list', {
      ref: 'list',
      props: {
        wrapFocus: this.myWrapFocus
      },
      on: {
        change: function change(index) {
          return _this2.handleAction({
            detail: {
              index: index
            }
          });
        }
      }
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots))]);
  }
};

var mcwMenuAnchor = {
  name: 'mcw-menu-anchor',
  functional: true,
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var scopedSlots = _ref.scopedSlots;
    return createElement('div', {
      class: {
        'mdc-menu-anchor': 1,
        'mdc-menu-surface--anchor': 1
      }
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

/* eslint-disable quote-props */
var mcwMenuItem = {
  name: 'mcw-menu-item',
  props: {
    disabled: Boolean
  },
  functional: true,
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var disabled = _ref.props.disabled,
        scopedSlots = _ref.scopedSlots;
    return createElement('li', {
      class: {
        'mdc-menu-divider': 1,
        'mdc-list-divider': 1
      },
      attrs: {
        tabindex: disabled ? '-1' : '0',
        'aria-disabled': disabled,
        role: 'menuitem'
      }
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

/* eslint-disable quote-props */
var strings$1 = MDCMenuSurfaceFoundation.strings,
    cssClasses$2 = MDCMenuSurfaceFoundation.cssClasses;
var mcwMenuSurface = {
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
  data: function data() {
    return {
      classes: {
        'mdc-menu': 1,
        'mdc-menu-surface': 1
      }
    };
  },
  watch: {
    open: 'onOpen_',
    quickOpen: function quickOpen(nv) {
      this.foundation.setQuickOpen(nv);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this._previousFocus = undefined;
    this.foundation = new MDCMenuSurfaceFoundation(Object.assign({
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      hasAnchor: function hasAnchor() {
        return !!_this.anchorElement;
      },
      notifyClose: function notifyClose() {
        emitCustomEvent(_this.$el, strings$1.CLOSED_EVENT, {});

        _this.$emit('change', false);
      },
      notifyOpen: function notifyOpen() {
        emitCustomEvent(_this.$el, strings$1.OPENED_EVENT, {});

        _this.$emit('change', true);
      },
      isElementInContainer: function isElementInContainer(el) {
        return _this.$el.contains(el);
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this.$el).getPropertyValue('direction') === 'rtl';
      },
      setTransformOrigin: function setTransformOrigin(origin) {
        _this.$el.style.setProperty("".concat(getTransformPropertyName(window), "-origin"), origin);
      }
    }, this.getFocusAdapterMethods(), this.getDimensionAdapterMethods()));

    if (this.$el.parentElement && this.$el.parentElement.classList.contains(cssClasses$2.ANCHOR)) {
      this.anchorElement = this.$el.parentElement;
    }

    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this._previousFocus = null;
    this.foundation.destroy();
  },
  methods: {
    handleBodyClick: function handleBodyClick(evt) {
      this.foundation.handleBodyClick(evt);
    },
    registerBodyClickListener: function registerBodyClickListener() {
      document.body.addEventListener('click', this.handleBodyClick);
    },
    deregisterBodyClickListener: function deregisterBodyClickListener() {
      document.body.removeEventListener('click', this.handleBodyClick);
    },
    handleKeydown: function handleKeydown(evt) {
      this.foundation.handleKeydown(evt);
    },
    getFocusAdapterMethods: function getFocusAdapterMethods() {
      var _this2 = this;

      return {
        isFocused: function isFocused() {
          return document.activeElement === _this2.$el;
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.$el.contains(document.activeElement)) {
            if (_this2.previousFocus_ && _this2.previousFocus_.focus) {
              _this2.previousFocus_.focus();
            }
          }
        }
      };
    },
    getDimensionAdapterMethods: function getDimensionAdapterMethods() {
      var _this3 = this;

      return {
        getInnerDimensions: function getInnerDimensions() {
          return {
            width: _this3.$el.offsetWidth,
            height: _this3.$el.offsetHeight
          };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this3.anchorElement ? _this3.anchorElement.getBoundingClientRect() : null;
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
          _this3.$el.style.left = 'left' in position ? "".concat(position.left, "px") : null;
          _this3.$el.style.right = 'right' in position ? "".concat(position.right, "px") : null;
          _this3.$el.style.top = 'top' in position ? "".concat(position.top, "px") : null;
          _this3.$el.style.bottom = 'bottom' in position ? "".concat(position.bottom, "px") : null;
        },
        setMaxHeight: function setMaxHeight(height) {
          _this3.$el.style.maxHeight = height;
        }
      };
    },
    onOpen_: function onOpen_(value) {
      var method = value ? 'open' : 'close';
      this.foundation[method]();
    },
    hoistMenuToBody: function hoistMenuToBody() {
      document.body.appendChild(this.$el.parentElement.removeChild(this.$el));
      this.setIsHoisted(true);
    },
    setIsHoisted: function setIsHoisted(isHoisted) {
      this.foundation.setIsHoisted(isHoisted);
    },
    setFixedPosition: function setFixedPosition(isFixed) {
      if (isFixed) {
        this.$set(this.classes, cssClasses$2.FIXED, true);
      } else {
        this.$delete(this.classes, cssClasses$2.FIXED);
      }

      this.foundation.setFixedPosition(isFixed);
    },
    setAbsolutePosition: function setAbsolutePosition(x, y) {
      this.foundation.setAbsolutePosition(x, y);
      this.setIsHoisted(true);
    },
    setAnchorCorner: function setAnchorCorner(corner) {
      this.foundation.setAnchorCorner(corner);
    },
    setAnchorMargin: function setAnchorMargin(margin) {
      this.foundation.setAnchorMargin(margin);
    },
    setMenuSurfaceAnchorElement: function setMenuSurfaceAnchorElement(element) {
      this.anchorElement = element;
    },
    show: function show(options) {
      this.foundation.open(options);
    },
    hide: function hide() {
      this.close();
    },
    close: function close() {
      var skipRestoreFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.foundation.close(skipRestoreFocus);
    },
    isOpen: function isOpen() {
      return this.foundation ? this.foundation.isOpen() : false;
    }
  },
  render: function render(createElement) {
    var _this4 = this,
        _scopedSlots$default;

    var scopedSlots = this.$scopedSlots;
    return createElement('div', {
      class: this.classes,
      on: {
        keydown: function keydown(evt) {
          return _this4.handleKeydown(evt);
        },
        'MDCMenuSurface:opened': function MDCMenuSurfaceOpened(evt) {
          return _this4.registerBodyClickListener(evt);
        },
        'MDCMenuSurface:closed': function MDCMenuSurfaceClosed(evt) {
          return _this4.deregisterBodyClickListener(evt);
        }
      }
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

var menu = BasePlugin({
  mcwMenu: mcwMenu,
  mcwMenuSurface: mcwMenuSurface,
  mcwMenuItem: mcwMenuItem,
  mcwMenuAnchor: mcwMenuAnchor
});

var script$b = {
  name: 'mcw-notched-outline',
  components: {
    mcwFloatingLabel: __vue_component__$6
  },
  data: function data() {
    return {
      outlinedClasses: {
        'mdc-notched-outline': true
      },
      notchStyles: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    var _MDCNotchedOutlineFou = MDCNotchedOutlineFoundation.cssClasses,
        OUTLINE_UPGRADED = _MDCNotchedOutlineFou.OUTLINE_UPGRADED,
        NO_LABEL = _MDCNotchedOutlineFou.NO_LABEL;
    var adapter = {
      addClass: function addClass(className) {
        _this.$set(_this.outlinedClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.outlinedClasses, className);
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return _this.$set(_this.notchStyles, 'width', "".concat(width, "px"));
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        return _this.$delete(_this.notchStyles, 'width');
      }
    };
    this.foundation = new MDCNotchedOutlineFoundation(adapter);
    this.foundation.init();
    var key = this.$slots.default ? OUTLINE_UPGRADED : NO_LABEL;
    this.$set(this.outlinedClasses, key, true);
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    notch: function notch(notchWidth) {
      this.foundation.notch(notchWidth);
    },
    closeNotch: function closeNotch() {
      this.foundation.closeNotch();
    },
    float: function float(shouldFloat) {
      this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat);
    },
    shake: function shake(shouldShake) {
      this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake);
    },
    getWidth: function getWidth() {
      var _this$$refs$labelEl;

      return (_this$$refs$labelEl = this.$refs.labelEl) === null || _this$$refs$labelEl === void 0 ? void 0 : _this$$refs$labelEl.getWidth();
    }
  }
};

/* script */
const __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { ref: "outlined", class: _vm.outlinedClasses }, [
    _c("span", { staticClass: "mdc-notched-outline__leading" }),
    _vm._v(" "),
    _c(
      "span",
      {
        ref: "notchEl",
        staticClass: "mdc-notched-outline__notch",
        style: _vm.notchStyles
      },
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

var notchedOutline = BasePlugin({
  mcwNotchedOutline: __vue_component__$b
});

var script$c = {
  name: 'mcw-radio',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
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
      type: String,
      required: true
    },
    value: String,
    picked: String,
    disabled: Boolean,
    checked: Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-radio': 1
      },
      styles: {}
    };
  },
  watch: {
    checked: 'setChecked',
    picked: 'onPicked',
    disabled: function disabled(value) {
      this.foundation.setDisabled(value);
    }
  },
  computed: {
    rootClasses: function rootClasses() {
      return _objectSpread2(_objectSpread2({}, this.classes), this.radioClasses);
    },
    formFieldClasses: function formFieldClasses() {
      return {
        'mdc-form-field': 1,
        'mdc-form-field--align-end': this.alignEnd
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.$refs.controlEl && _this.$refs.controlEl.disabled == disabled;
      }
    }; // add foundation

    this.foundation = new MDCRadioFoundation(adapter); // add ripple

    this.ripple = new RippleBase(this, {
      isUnbounded: function isUnbounded() {
        return true;
      },
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: function isSurfaceActive() {
        return false;
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        _this.$refs.controlEl.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        _this.$refs.controlEl.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.$refs.root.getBoundingClientRect();
      }
    });
    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        _this.$refs.labelEl && _this.$refs.labelEl.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        _this.$refs.labelEl && _this.$refs.labelEl.removeEventListener(type, handler);
      },
      activateInputRipple: function activateInputRipple() {
        _this.ripple && _this.ripple.activate();
      },
      deactivateInputRipple: function deactivateInputRipple() {
        _this.ripple && _this.ripple.deactivate();
      }
    });
    this.foundation.init();
    this.ripple.init();
    this.formField.init();
    var checked = this.checked,
        disabled = this.disabled,
        picked = this.picked,
        value = this.value;
    this.foundation.setDisabled(disabled);
    this.setChecked(checked || picked == value); // if checked, need to sync any change of value

    checked && this.onChange();
  },
  methods: {
    onChange: function onChange() {
      var nativeValue = this.$refs.controlEl.value;
      nativeValue != this.picked && this.$emit('change', this.$refs.controlEl.value);
    },
    onPicked: function onPicked(nv) {
      this.setChecked(nv == this.$refs.controlEl.value);
    },
    setChecked: function setChecked(checked) {
      this.$refs.controlEl.checked = checked;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.formField.destroy();
    this.ripple.destroy();
    this.foundation.destroy();
  },
  renderX: function renderX(createElement) {
    var _this2 = this;

    var alignEnd = this.alignEnd,
        value = this.value,
        disabled = this.disabled,
        picked = this.picked,
        attrs = this.$attrs,
        listeners = this.$listeners,
        id = this.id,
        label = this.label,
        name = this.name;
    var backgroundEl = createElement('div', {
      class: {
        'mdc-radio__background': 1
      }
    }, [createElement('div', {
      class: 'mdc-radio__outer-circle'
    }), createElement('div', {
      class: 'mdc-radio__inner-circle'
    })]);
    var inputEl = createElement('input', {
      class: ['mdc-radio__native-control'],
      attrs: _objectSpread2(_objectSpread2({}, attrs), {}, {
        name: name,
        id: id,
        type: 'radio',
        value: value,
        checked: picked == value,
        disabled: disabled
      }),
      ref: 'controlEl',
      on: _objectSpread2(_objectSpread2({}, listeners), {}, {
        change: function change(evt) {
          return _this2.onChange(evt);
        }
      })
    });
    var radioEl = createElement('div', {
      class: [this.classes, this.radioClasses],
      style: this.styles,
      ref: 'root'
    }, [inputEl, backgroundEl, createElement('div', {
      class: {
        'mdc-radio__ripple': 1
      }
    })]);

    if (!label) {
      return radioEl;
    }

    return createElement('div', {
      class: {
        'mdc-form-field': 1,
        'mdc-form-field--align-end': alignEnd
      }
    }, [radioEl, createElement('label', {
      ref: 'labelEl',
      attrs: {
        for: id
      }
    }, label)]);
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
    "div",
    { staticClass: "mdc-radio-wrapper", class: _vm.formFieldClasses },
    [
      _c("div", { ref: "root", class: _vm.rootClasses, style: _vm.styles }, [
        _c(
          "input",
          _vm._b(
            {
              ref: "controlEl",
              staticClass: "mdc-radio__native-control",
              attrs: {
                id: _vm.vma_uid_,
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
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-radio__ripple" })
      ]),
      _vm._v(" "),
      _c(
        "label",
        { ref: "labelEl", attrs: { for: _vm.vma_uid_ } },
        [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$c = [
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

var radio = BasePlugin({
  mcwRadio: __vue_component__$c
});

var SelectHelperText = {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': this.helptextPersistent,
        'mdc-select-helper-text--validation-msg': this.helptextValidation
      },
      attrs: {
        'aria-hidden': 'true'
      }
    };
  },
  watch: {
    helptextPersistent: function helptextPersistent() {
      this.foundation.setPersistent(this.helptextPersistent);
    },
    helptextValidation: function helptextValidation() {
      this.foundation.setValidation(this.helptextValidation);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCSelectHelperTextFoundation({
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return Boolean(_this.classes[className]);
      },
      setAttr: function setAttr(attr, value) {
        _this.$set(_this.attrs, attr, value); // this.$el.setAttribute(attr, value);

      },
      removeAttr: function removeAttr(attr) {
        _this.$delete(_this.attrs, attr); // this.$el.removeAttribute(attr);

      },
      setContent: function setContent()
      /* content */
      {// help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  render: function render(createElement) {
    var scopedSlots = this.$scopedSlots;
    return createElement('p', {
      class: this.classes,
      attrs: this.attrs
    }, scopedSlots.default && scopedSlots.default());
  }
};

var SelectIcon = {
  name: 'select-icon',
  props: {
    icon: String
  },
  data: function data() {
    return {
      classes: {
        'material-icons': true,
        'mdc-select__icon': true
      },
      styles: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCSelectIconFoundation(Object.assign({
      getAttr: function getAttr(attr) {
        return _this.$el.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.$el.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.$el.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.$el.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.$el.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.$el.removeEventListener(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        _this.$emit('click');

        emitCustomEvent(_this.$el, MDCSelectIconFoundation.strings.ICON_EVENT, {}, true
        /* shouldBubble  */
        );
      }
    }));
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  render: function render(createElement) {
    return createElement('i', {
      class: this.classes,
      style: this.styles,
      attrs: this.$attrs,
      on: this.$listeners
    }, this.icon);
  }
};

var strings$2 = MDCSelectFoundation.strings;
var mcwSelect = {
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
    id: {
      type: String
    }
  },
  mixins: [VMAUniqueIdMixin],
  data: function data() {
    return {
      styles: {},
      classes: {},
      selectedTextContent: '',
      selTextAttrs: {},
      selectAnchorAttrs: {}
    };
  },
  components: {
    SelectHelperText: SelectHelperText,
    SelectIcon: SelectIcon
  },
  computed: {
    rootClasses: function rootClasses() {
      return _objectSpread2({
        'mdc-select': 1,
        'mdc-select--outlined': this.outlined,
        'mdc-select--with-leading-icon': this.leadingIcon,
        'mdc-select--disabled': this.disabled,
        'mdc-select--no-label': !this.label
      }, this.classes);
    },
    selectedTextAttrs: function selectedTextAttrs() {
      var helpId = "help-".concat(this.vma_uid_);

      var attrs = _objectSpread2({}, this.selTextAttrs);

      if (this.helptext) {
        attrs['aria-controls'] = helpId;
        attrs['aria-describedBy'] = helpId;
      }

      return attrs;
    },
    selectAriaControls: function selectAriaControls() {
      return this.helptext ? 'help-' + this.vma_uid_ : undefined;
    }
  },
  watch: {
    disabled: function disabled(value) {
      var foundation = this.foundation;
      foundation && foundation.updateDisabledStyle(value);
    },
    value: 'refreshIndex'
  },
  mounted: function mounted() {
    var _this = this;

    this.menuSetup_();
    var _this$$refs = this.$refs,
        helperTextEl = _this$$refs.helperTextEl,
        leadingIconEl = _this$$refs.leadingIconEl;
    this.foundation = new MDCSelectFoundation(Object.assign({
      // common methods
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return Boolean(_this.rootClasses[className]);
      },
      setRippleCenter: function setRippleCenter(normalizedX) {
        var lineRippleEl = _this.$refs.lineRippleEl;
        lineRippleEl && lineRippleEl.setRippleCenter(normalizedX);
      },
      activateBottomLine: function activateBottomLine() {
        var lineRippleEl = _this.$refs.lineRippleEl;
        lineRippleEl && lineRippleEl.foundation_.activate();
      },
      deactivateBottomLine: function deactivateBottomLine() {
        var lineRippleEl = _this.$refs.lineRippleEl;
        lineRippleEl && lineRippleEl.foundation_.deactivate();
      },
      notifyChange: function notifyChange(value) {
        var index = _this.selectedIndex;
        emitCustomEvent(_this.$el, strings$2.CHANGE_EVENT, {
          value: value,
          index: index
        }, true
        /* shouldBubble  */
        );
        value != _this.value && _this.$emit('change', value);
      },
      // select methods
      getSelectedMenuItem: function getSelectedMenuItem() {
        return _this.menuElement_.querySelector(strings$2.SELECTED_ITEM_SELECTOR);
      },
      getMenuItemAttr: function getMenuItemAttr(menuItem, attr) {
        return menuItem.getAttribute(attr);
      },
      setSelectedText: function setSelectedText(text) {
        _this.selectedTextContent = text;
      },
      isSelectAnchorFocused: function isSelectAnchorFocused() {
        return document.activeElement === _this.$refs.anchorEl;
      },
      getSelectAnchorAttr: function getSelectAnchorAttr(attr) {
        return _this.selectAnchorAttrs[attr];
      },
      setSelectAnchorAttr: function setSelectAnchorAttr(attr, value) {
        _this.$set(_this.selectAnchorAttrs, attr, value);
      },
      openMenu: function openMenu() {
        _this.menu_.surfaceOpen = true;
      },
      closeMenu: function closeMenu() {
        _this.menu_.surfaceOpen = false;
      },
      getAnchorElement: function getAnchorElement() {
        return _this.$refs.anchorEl;
      },
      setMenuAnchorElement: function setMenuAnchorElement(anchorEl) {
        return _this.menu_.setAnchorElement(anchorEl);
      },
      setMenuAnchorCorner: function setMenuAnchorCorner(anchorCorner) {
        return _this.menu_.setAnchorCorner(anchorCorner);
      },
      setMenuWrapFocus: function setMenuWrapFocus(wrapFocus) {
        return _this.menu_.wrapFocus = wrapFocus;
      },
      setAttributeAtIndex: function setAttributeAtIndex(index, attributeName, attributeValue) {
        return _this.menu_.items[index].setAttribute(attributeName, attributeValue);
      },
      removeAttributeAtIndex: function removeAttributeAtIndex(index, attributeName) {
        return _this.menu_.items[index].removeAttribute(attributeName);
      },
      focusMenuItemAtIndex: function focusMenuItemAtIndex(index) {
        _this.menu_.items[index].focus();
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.menu_.items.length;
      },
      getMenuItemValues: function getMenuItemValues() {
        return _this.menu_.items.map(function (el) {
          return el.getAttribute(strings$2.VALUE_ATTR) || '';
        });
      },
      getMenuItemTextAtIndex: function getMenuItemTextAtIndex(index) {
        return _this.menu_.items[index].textContent;
      },
      addClassAtIndex: function addClassAtIndex(index, className) {
        _this.menu_.items[index].classList.add(className);
      },
      removeClassAtIndex: function removeClassAtIndex(index, className) {
        _this.menu_.items[index].classList.remove(className);
      },
      // outline methods
      hasOutline: function hasOutline() {
        return _this.outlined;
      },
      notchOutline: function notchOutline(labelWidth) {
        var outlineEl = _this.$refs.outlineEl;
        outlineEl && outlineEl.notch(labelWidth);
      },
      closeOutline: function closeOutline() {
        var outlineEl = _this.$refs.outlineEl;
        outlineEl && outlineEl.closeNotch();
      },
      // label methods
      hasLabel: function hasLabel() {
        return !!_this.label;
      },
      floatLabel: function floatLabel(value) {
        var _this$$refs2 = _this.$refs,
            labelEl = _this$$refs2.labelEl,
            outlineEl = _this$$refs2.outlineEl;
        (labelEl || outlineEl).float(value);
      },
      getLabelWidth: function getLabelWidth() {
        var labelEl = _this.$refs.labelEl;
        return labelEl && labelEl.getWidth();
      }
    }), {
      helperText: helperTextEl && helperTextEl.foundation,
      leadingIcon: leadingIconEl && leadingIconEl.foundation
    });

    if (this.menu_) {
      this.menu_.listen(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, this.handleMenuClosed);
      this.menu_.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuOpened);
      this.menu_.listen(MDCMenuFoundation.strings.SELECTED_EVENT, this.handleMenuItemAction);
    }

    this.foundation.init(); // this.foundation.handleChange(false);
    // initial sync with DOM

    this.refreshIndex(); // this.slotObserver = new MutationObserver(() => this.refreshIndex());
    // this.slotObserver.observe(this.$refs.native_control, {
    //   childList: true,
    //   subtree: true,
    // });

    if (!this.outlined) {
      this.ripple = new RippleBase(this);
      this.ripple.init();
    }
  },
  beforeDestroy: function beforeDestroy() {
    // this.slotObserver.disconnect();
    if (this.menu_) {
      this.menu_.unlisten(MDCMenuSurfaceFoundation.strings.SELECTED_EVENT, this.handleMenuItemAction);
      this.menu_.unlisten(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuOpened);
      this.menu_.unlisten(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, this.handleMenuClosed);
    }

    var foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    handleMenuOpened: function handleMenuOpened() {
      this.foundation.handleMenuOpened();
    },
    handleMenuClosed: function handleMenuClosed() {
      this.foundation.handleMenuClosed();
    },
    handleMenuItemAction: function handleMenuItemAction(evt) {
      this.foundation.handleMenuItemAction(evt.detail.index);
    },
    handleChange: function handleChange() {
      this.foundation.handleChange(true);
    },
    handleFocus: function handleFocus() {
      this.foundation.handleFocus();
    },
    handleBlur: function handleBlur() {
      this.foundation.handleBlur();
    },
    handleClick: function handleClick(evt) {
      this.$refs.anchorEl.focus();
      this.handleFocus();
      this.foundation.handleClick(this.getNormalizedXCoordinate(evt));
    },
    getNormalizedXCoordinate: function getNormalizedXCoordinate(evt) {
      var targetClientRect = evt.target.getBoundingClientRect();
      var xCoordinate = evt.clientX;
      return xCoordinate - targetClientRect.left;
    },
    menuSetup_: function menuSetup_() {
      this.menuElement_ = this.$el.querySelector(MDCSelectFoundation.strings.MENU_SELECTOR);

      if (this.menuElement_) {
        this.menu_ = this.menuElement_.__vue__;
      }
    },
    refreshIndex: function refreshIndex() {
      var _this2 = this;

      var items = this.menu_.items.map(function (el) {
        return el.getAttribute(strings$2.VALUE_ATTR) || '';
      });
      var idx = items.findIndex(function (value) {
        return _this2.value === value;
      });
      this.foundation.setSelectedIndex(idx);
    }
  },
  render: function render(createElement) {
    var _this3 = this;

    var scopedSlots = this.$scopedSlots;
    var helpId = "help-".concat(this.vma_uid_);
    var anchorNodes = [createElement('span', {
      class: ['mdc-select__ripple']
    }), createElement('input', {
      class: {
        'mdc-select__selected-text': 1
      },
      attrs: _objectSpread2({
        disabled: true,
        readonly: true,
        value: this.selectedTextContent
      }, this.selectedTextAttrs),
      ref: 'selectedTextEl'
    }), createElement('i', {
      class: {
        'mdc-select__dropdown-icon': 1
      }
    })];

    if (this.outlined) {
      anchorNodes.push(createElement(__vue_component__$b, {
        ref: 'outlineEl'
      }, this.label));
    } else {
      anchorNodes.push(createElement(__vue_component__$6, {
        ref: 'labelEl'
      }, this.label), createElement(mcwLineRipple, {
        ref: 'lineRippleEl'
      }, this.label));
    }

    if (this.leadingIcon) {
      anchorNodes.unshift(createElement('select-icon', {
        attrs: {
          icon: this.leadingIcon,
          'tab-index': '0',
          role: 'button'
        },
        ref: 'leadingIconEl'
      }));
    }

    var anchorEl = createElement('div', {
      class: {
        'mdc-select__anchor': 1
      },
      attrs: this.selectAnchorAttrs,
      ref: 'anchorEl',
      on: {
        click: function click(evt) {
          return _this3.handleClick(evt);
        },
        focus: function focus() {
          return _this3.handleFocus();
        },
        blur: function blur() {
          return _this3.handleBlur();
        }
      }
    }, anchorNodes);
    var nodes = [anchorEl, scopedSlots.default && scopedSlots.default()];

    if (this.helptext) {
      nodes.push(createElement('select-helper-text', {
        attrs: {
          helptextPersistent: this.helptextPersistent,
          helptextValidation: this.helptextValidation,
          id: helpId
        },
        ref: 'helperTextEl'
      }, [this.helptext]));
    }

    return createElement('div', {
      class: this.rootClasses
    }, nodes);
  }
};

var select = BasePlugin({
  mcwSelect: mcwSelect
});

var script$d = {
  name: 'mcw-slider',
  mixins: [DispatchFocusMixin],
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
  data: function data() {
    var stepSize = this.step;

    if (this.discrete && !stepSize) {
      stepSize = 1;
    }

    return {
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': this.discrete,
        'mdc-slider--display-markers': this.discrete && this.displayMarkers
      },
      sliderAttrs: {},
      trackStyles: {},
      lastTrackMarkersStyles: {},
      markerBkgdShorthand: {},
      thumbStyles: {},
      markerValue: '',
      numMarkers: 0,
      stepSize: stepSize
    };
  },
  computed: {
    hasMarkers: function hasMarkers() {
      return this.discrete && this.displayMarkers;
    }
  },
  watch: {
    value: function value(nv) {
      if (this.foundation.getValue() !== Number(nv)) {
        this.foundation.setValue(nv);
      }
    },
    min: function min(nv) {
      this.foundation.setMin(Number(nv));
    },
    max: function max(nv) {
      this.foundation.setMax(Number(nv));
    },
    step: function step(nv) {
      this.foundation.setStep(Number(nv));
    },
    disabled: function disabled(nv) {
      this.foundation.setDisabled(nv);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      addClass: function addClass(className) {
        _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.classes, className, true);
      },
      getAttribute: function getAttribute(name) {
        return _this.$el.getAttribute(name);
      },
      setAttribute: function setAttribute(name, value) {
        return _this.$set(_this.sliderAttrs, name, value);
      },
      removeAttribute: function removeAttribute(name) {
        return _this.$delete(_this.sliderAttrs, name);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.$el.getBoundingClientRect();
      },
      getTabIndex: function getTabIndex() {
        return _this.$el.tabIndex;
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        _this.$el.addEventListener(type, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        _this.$el.removeEventListener(type, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
        _this.$refs.thumbContainer.addEventListener(type, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
        _this.$refs.thumbContainer.removeEventListener(type, handler, applyPassive());
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
        _this.$emit('input', _this.foundation.getValue());
      },
      notifyChange: function notifyChange() {
        _this.$emit('change', _this.foundation.getValue());
      },
      setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
        _this.$set(_this.thumbStyles, propertyName, value);
      },
      setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
        _this.$set(_this.trackStyles, propertyName, value);
      },
      setMarkerValue: function setMarkerValue(value) {
        _this.markerValue = value;
      },
      // appendTrackMarkers: numMarkers => {
      //   this.numMarkers = numMarkers;
      // },
      // removeTrackMarkers: () => {
      //   this.numMarkers = 0;
      // },
      // setLastTrackMarkersStyleProperty: (propertyName, value) => {
      //   this.$set(this.lastTrackMarkersStyles, propertyName, value);
      // },
      setTrackMarkers: function setTrackMarkers(step, max, min) {
        var stepStr = step.toLocaleString();
        var maxStr = max.toLocaleString();
        var minStr = min.toLocaleString(); // keep calculation in css for better rounding/subpixel behavior

        var markerAmount = "((".concat(maxStr, " - ").concat(minStr, ") / ").concat(stepStr, ")");
        var markerWidth = "2px";
        var markerBkgdImage = "linear-gradient(to right, currentColor ".concat(markerWidth, ", transparent 0)");
        var markerBkgdLayout = "0 center / calc((100% - ".concat(markerWidth, ") / ").concat(markerAmount, ") 100% repeat-x");
        var markerBkgdShorthand = "".concat(markerBkgdImage, " ").concat(markerBkgdLayout);

        _this.$set(_this.markerBkgdShorthand, 'background', markerBkgdShorthand);
      },
      isRTL: function isRTL() {
        return getComputedStyle(_this.$el).direction === 'rtl';
      }
    };
    this.foundation = new MDCSliderFoundation(adapter);
    this.foundation.init();
    this.foundation.setDisabled(this.disabled);

    if (Number(this.min) <= this.foundation.getMax()) {
      this.foundation.setMin(Number(this.min));
      this.foundation.setMax(Number(this.max));
    } else {
      this.foundation.setMax(Number(this.max));
      this.foundation.setMin(Number(this.min));
    }

    this.foundation.setStep(Number(this.stepSize));
    this.foundation.setValue(Number(this.value));

    if (this.hasMarkers) {
      this.foundation.setupTrackMarker();
    }

    this.$root.$on('vma:layout', this.layout);

    if (this.layoutOn) {
      this.layoutOnEventSource = this.layoutOnSource || this.$root;
      this.layoutOnEventSource.$on(this.layoutOn, this.layout);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$root.$off('vma:layout', this.layout);

    if (this.layoutOnEventSource) {
      this.layoutOnEventSource.$off(this.layoutOn, this.layout);
    }

    this.foundation.destroy();
  },
  methods: {
    layout: function layout() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.foundation && _this2.foundation.layout();
      });
    }
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
    "div",
    _vm._b(
      {
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

var slider = BasePlugin({
  mcwSlider: __vue_component__$d
});

var noop = function noop() {};

var mcwSnackbarQueue = {
  name: 'mcw-snackbar-queue',
  data: function data() {
    return {
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
    };
  },
  render: function render(createElement) {
    return createElement('mcw-snackbar', {
      props: _objectSpread2({
        open: this.open
      }, this.snack),
      on: this.listeners
    });
  },
  methods: {
    handleSnack: function handleSnack(_ref) {
      var _this = this;

      var _ref$timeoutMs = _ref.timeoutMs,
          timeoutMs = _ref$timeoutMs === void 0 ? 5000 : _ref$timeoutMs,
          closeOnEscape = _ref.closeOnEscape,
          _ref$message = _ref.message,
          message = _ref$message === void 0 ? '' : _ref$message,
          _ref$actionText = _ref.actionText,
          actionText = _ref$actionText === void 0 ? '' : _ref$actionText,
          _ref$dismissAction = _ref.dismissAction,
          dismissAction = _ref$dismissAction === void 0 ? true : _ref$dismissAction,
          stacked = _ref.stacked,
          leading = _ref.leading,
          _ref$actionHandler = _ref.actionHandler,
          actionHandler = _ref$actionHandler === void 0 ? noop : _ref$actionHandler;
      this.queue.push(function () {
        _this.snack = {
          timeoutMs: timeoutMs,
          closeOnEscape: closeOnEscape,
          message: message,
          actionText: actionText,
          actionHandler: actionHandler,
          dismissAction: dismissAction,
          stacked: stacked,
          leading: leading
        };
        _this.actionHandler = actionHandler;
        _this.open = true;
      });

      if (this.queue.length === 1) {
        this.queue[0]();
      }
    },
    handleClosed: function handleClosed() {
      var _this2 = this;

      this.open = false;
      this.queue.shift();

      if (this.queue.length > 0) {
        this.$nextTick(function () {
          return _this2.queue[0]();
        });
      }
    }
  },
  computed: {
    listeners: function listeners() {
      var _this3 = this;

      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        'MDCSnackbar:closed': function MDCSnackbarClosed(_ref2) {
          var reason = _ref2.reason;

          if (_this3.actionHandler && reason === 'action') {
            _this3.actionHandler({
              reason: reason
            });
          }

          _this3.handleClosed();

          _this3.$emit('closed', {
            reason: reason
          });
        }
      });
    }
  }
};

var strings$3 = MDCSnackbarFoundation.strings,
    numbers = MDCSnackbarFoundation.numbers;
var mcwSnackbar = {
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
  data: function data() {
    return {
      classes: {},
      hidden: false,
      actionHidden: false,
      showMessage: true
    };
  },
  watch: {
    open: 'onOpen_',
    timeoutMs: 'onTimeoutMs_',
    closeOnEscape: 'onCloseOnEscape_'
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('keydown', this.handleKeydownEvent);
    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      announce: function announce() {
        return _this.announce(_this.$refs.labelEl);
      },
      notifyOpening: function notifyOpening() {
        return _this.$emit(strings$3.OPENING_EVENT, {});
      },
      notifyOpened: function notifyOpened() {
        _this.$emit(strings$3.OPENED_EVENT, {});

        _this.$emit('change', true);

        _this.$emit('show', {});
      },
      notifyClosing: function notifyClosing(reason) {
        _this.$emit(strings$3.CLOSING_EVENT, reason ? {
          reason: reason
        } : {});

        _this.$emit('update:reason', reason);
      },
      notifyClosed: function notifyClosed(reason) {
        _this.$emit(strings$3.CLOSED_EVENT, reason ? {
          reason: reason
        } : {});

        _this.$emit('change', false);

        _this.$emit('hide');
      }
    };
    var closeOnEscape = this.closeOnEscape,
        timeoutMs = this.timeoutMs;
    this.foundation = new MDCSnackbarFoundation(adapter);
    this.foundation.init();

    if (timeoutMs !== void 0) {
      this.foundation.setTimeoutMs(timeoutMs);
    }

    this.foundation.setCloseOnEscape(closeOnEscape);
  },
  computed: {
    rootClasses: function rootClasses() {
      return {
        'mdc-snackbar': 1,
        'mdc-snackbar--leading': this.leading,
        'mdc-snackbar--stacked': this.stacked
      };
    },
    showDismissAction: function showDismissAction() {
      return typeof this.dismissAction === 'string' ? this.dismissAction != 'false' : this.dismissAction;
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydownEvent);
    this.foundation.destroy();
  },
  methods: {
    onTimeoutMs_: function onTimeoutMs_(value) {
      if (value !== void 0) {
        this.foundation.setTimeoutMs(value);
      }
    },
    onCloseOnEscape_: function onCloseOnEscape_(nv) {
      this.foundation.setCloseOnEscape(nv);
    },
    onOpen_: function onOpen_(value) {
      if (value) {
        this.foundation.open();
      } else {
        var reason = this.reason;
        this.foundation.close(reason ? reason : '');
      }
    },
    surfaceClickHandler: function surfaceClickHandler(evt) {
      if (this.isActionButton_(evt.target)) {
        this.foundation.handleActionButtonClick(evt);
      } else if (this.isActionIcon_(evt.target)) {
        this.foundation.handleActionIconClick(evt);
      }
    },
    handleKeydownEvent: function handleKeydownEvent(evt) {
      this.foundation.handleKeyDown(evt);
    },
    isActionButton_: function isActionButton_(target) {
      return Boolean(closest(target, strings$3.ACTION_SELECTOR));
    },
    isActionIcon_: function isActionIcon_(target) {
      return Boolean(closest(target, strings$3.DISMISS_SELECTOR));
    },
    announce: function announce(ariaEl) {
      var _this2 = this;

      var labelEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ariaEl;
      var priority = ariaEl.getAttribute('aria-live');
      var text = this.message;

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

      this.showMessage = false; // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
      // CSS generated content is normally announced by screen readers
      // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
      // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.

      labelEl.setAttribute(strings$3.ARIA_LIVE_LABEL_TEXT_ATTR, this.message);
      setTimeout(function () {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

        labelEl.removeAttribute(strings$3.ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

        _this2.showMessage = true;
      }, numbers.ARIA_LIVE_DELAY_MS);
    }
  },
  render: function render(createElement) {
    var _this3 = this;

    var surfaceNodes = [createElement('div', {
      class: {
        'mdc-snackbar__label': 1
      },
      attrs: {
        role: 'status',
        'aria-live': 'polite'
      },
      ref: 'labelEl'
    }, [this.showMessage ? this.message : createElement('span', {
      style: {
        display: 'inline-block',
        width: 0,
        height: '1px'
      },
      domProps: {
        innerHTML: '&nbsp;'
      }
    })])];

    if (this.showDismissAction || this.actionText) {
      var buttonNodes = [];

      if (this.actionText) {
        buttonNodes.push(createElement('button', {
          class: {
            'mdc-button': 1,
            'mdc-snackbar__action': 1
          },
          attrs: {
            type: 'button'
          },
          ref: 'actionEl',
          on: this.$listeners
        }, this.actionText));
      }

      if (this.showDismissAction) {
        buttonNodes.push(createElement('button', {
          class: {
            'mdc-icon-button': 1,
            'mdc-snackbar__dismiss': 1,
            'material-icons': 1
          },
          attrs: {
            title: 'Dismiss'
          }
        }, ['close']));
      }

      surfaceNodes.push(createElement('div', {
        class: {
          'mdc-snackbar__actions': 1
        }
      }, buttonNodes));
    }

    return createElement('div', {
      class: _objectSpread2(_objectSpread2({}, this.rootClasses), this.classes),
      ref: 'root'
    }, [createElement('div', {
      class: {
        'mdc-snackbar__surface': 1
      },
      on: {
        click: function click(evt) {
          return _this3.surfaceClickHandler(evt);
        }
      }
    }, surfaceNodes)]);
  }
};

var snackbar = BasePlugin({
  mcwSnackbar: mcwSnackbar,
  mcwSnackbarQueue: mcwSnackbarQueue
});

var script$e = {
  name: 'mcw-switch',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
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
    name: String
  },
  data: function data() {
    return {
      classes: {
        'mdc-switch': 1
      },
      styles: {},
      nativeControlChecked: this.checked,
      nativeControlDisabled: this.disabled,
      nativeAttrs: {}
    };
  },
  computed: {
    hasLabel: function hasLabel() {
      return this.label || this.$slots.default;
    }
  },
  watch: {
    checked: function checked(value) {
      this.foundation && this.foundation.setChecked(value);
    },
    disabled: function disabled(value) {
      this.foundation && this.foundation.setDisabled(value);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCSwitchFoundation({
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      setNativeControlChecked: function setNativeControlChecked(checked) {
        return _this.nativeControlChecked = checked;
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControlDisabled = disabled;
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        _this.nativeAttrs[attr] = value;
      }
    });
    this.foundation.init();
    this.foundation.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    onChanged: function onChanged(event) {
      this.foundation && this.foundation.handleChange(event);
      this.$emit('change', event.target.checked);
    }
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
        { staticClass: "mdc-switch", class: _vm.classes, style: _vm.styles },
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
                  ref: "control",
                  staticClass: "mdc-switch__native-control",
                  attrs: {
                    name: _vm.name,
                    id: _vm.vma_uid_,
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
            { staticClass: "mdc-switch-label", attrs: { for: _vm.vma_uid_ } },
            [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
            2
          )
        : _vm._e()
    ]
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

var switchControl = BasePlugin({
  mcwSwitch: __vue_component__$e
});

var mcwTabBar = {
  name: 'mcw-tab-bar',
  data: function data() {
    return {
      classes: {
        'mdc-tab-bar': 1
      },
      indicatorStyles: {},
      tabList: []
    };
  },
  props: {
    activeTabIndex: [Number, String]
  },
  provide: function provide() {
    return {
      mcwTabBar: this
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCTabBarFoundation({
      scrollTo: function scrollTo(scrollX) {
        return _this.$refs.scroller.scrollTo(scrollX);
      },
      incrementScroll: function incrementScroll(scrollXIncrement) {
        return _this.$refs.scroller.incrementScroll(scrollXIncrement);
      },
      getScrollPosition: function getScrollPosition() {
        return _this.$refs.scroller.getScrollPosition();
      },
      getScrollContentWidth: function getScrollContentWidth() {
        return _this.$refs.scroller.getScrollContentWidth();
      },
      getOffsetWidth: function getOffsetWidth() {
        return _this.$el.offsetWidth;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.$el).getPropertyValue('direction') === 'rtl';
      },
      setActiveTab: function setActiveTab(index) {
        _this.foundation.activateTab(index);
      },
      activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
        _this.tabList[index].activate(clientRect);
      },
      deactivateTabAtIndex: function deactivateTabAtIndex(index) {
        _this.tabList[index] && _this.tabList[index].deactivate();
      },
      focusTabAtIndex: function focusTabAtIndex(index) {
        return _this.tabList[index].focus();
      },
      getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
        return _this.tabList[index] && _this.tabList[index].computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
        return _this.tabList[index].computeDimensions();
      },
      getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
        for (var i = 0; i < _this.tabList.length; i++) {
          if (_this.tabList[i].isActive()) {
            return i;
          }
        }

        return -1;
      },
      getFocusedTabIndex: function getFocusedTabIndex() {
        var tabElements = _this.getTabElements_();

        var activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: function getIndexOfTabById(id) {
        for (var i = 0; i < _this.tabList.length; i++) {
          if (_this.tabList[i].id === id) {
            return i;
          }
        }

        return -1;
      },
      getTabListLength: function getTabListLength() {
        return _this.tabList.length;
      },
      notifyTabActivated: function notifyTabActivated(index) {
        emitCustomEvent(_this.$el, MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT, {
          index: index
        }, true);

        _this.$emit('change', index);
      }
    });
    this.foundation.init(); // ensure active tab

    this.foundation.activateTab(this.activeTabIndex || 0);
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  computed: {
    listeners: function listeners() {
      var _this2 = this;

      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        'MDCTab:interacted': function MDCTabInteracted(event) {
          return _this2.handleInteraction(event);
        },
        // eslint-disable-next-line quote-props
        keydown: function keydown(event) {
          return _this2.handleKeyDown(event);
        }
      });
    }
  },
  methods: {
    handleInteraction: function handleInteraction(evt) {
      this.foundation.handleTabInteraction(evt);
    },
    handleKeyDown: function handleKeyDown(evt) {
      this.foundation.handleKeyDown(evt);
    }
  },
  render: function render(createElement) {
    var scopedSlots = this.$scopedSlots;
    return createElement('div', {
      class: this.classes,
      on: this.listeners,
      attrs: {
        role: 'tablist'
      }
    }, [createElement('mdc-tab-scroller', {
      ref: 'scroller'
    }, scopedSlots.default && scopedSlots.default())]);
  }
};

var cssClasses$3 = MDCTabIndicatorFoundation.cssClasses;
var mcwTabIndicator = {
  name: 'mcw-tab-indicator',
  data: function data() {
    return {
      classes: {
        'mdc-tab-indicator': 1
      },
      styles: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.adapter_ = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      computeContentClientRect: function computeContentClientRect() {
        return _this.$refs.content.getBoundingClientRect();
      },
      setContentStyleProperty: function setContentStyleProperty(prop, value) {
        _this.$set(_this.styles, prop, value);
      }
    };
    this.foundation = new MDCTabIndicatorFoundation(this.adapter_);
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    deactivate: function deactivate() {
      this.adapter_.removeClass(cssClasses$3.ACTIVE);
    },
    computeContentClientRect: function computeContentClientRect() {
      return this.foundation.computeContentClientRect();
    },
    activate: function activate(previousIndicatorClientRect) {
      var _this2 = this;

      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        this.adapter_.addClass(cssClasses$3.ACTIVE);
        return;
      }

      var currentClientRect = this.computeContentClientRect();
      var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      this.foundation.adapter_.addClass(cssClasses$3.NO_TRANSITION);
      this.adapter_.setContentStyleProperty('transform', "translateX(".concat(xPosition, "px) scaleX(").concat(widthDelta, ")")); // THE FIX

      requestAnimationFrame(function () {
        _this2.adapter_.removeClass(cssClasses$3.NO_TRANSITION);

        _this2.adapter_.addClass(cssClasses$3.ACTIVE);

        _this2.adapter_.setContentStyleProperty('transform', '');
      });
    }
  },
  render: function render(createElement) {
    return createElement('span', {
      class: this.classes
    }, [createElement('span', {
      class: {
        'mdc-tab-indicator__content': 1,
        'mdc-tab-indicator__content--underline': 1
      },
      style: this.styles,
      ref: 'content'
    })]);
  }
};

var mcwTabRipple = {
  name: 'mcw-tab-ripple',
  data: function data() {
    return {
      classes: {
        'mdc-tab__ripple': 1,
        'mdc-tab-ripple': 1
      },
      styles: {}
    };
  },
  mounted: function mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.ripple.destroy();
  },
  render: function render(createElement) {
    return createElement('span', {
      class: this.classes,
      style: this.styles
    });
  }
};

var mcwTabScroller = {
  name: 'mcw-tab-scroller',
  data: function data() {
    return {
      classes: {
        'mdc-tab-scroller': 1
      },
      areaClasses: {
        'mdc-tab-scroller__scroll-area': 1
      },
      areaStyles: {},
      contentStyles: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCTabScrollerFoundation({
      eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
        return matches(evtTarget, selector);
      },
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      addScrollAreaClass: function addScrollAreaClass(className) {
        return _this.$set(_this.areaClasses, className, true);
      },
      setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
        return _this.$set(_this.areaStyles, prop, value);
      },
      setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
        return _this.$set(_this.contentStyles, prop, value);
      },
      getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
        return window.getComputedStyle(_this.$refs.content).getPropertyValue(propName);
      },
      setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
        return _this.$refs.area.scrollLeft = scrollX;
      },
      getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
        return _this.$refs.area.scrollLeft;
      },
      getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
        return _this.$refs.content.offsetWidth;
      },
      getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
        return _this.$refs.area.offsetWidth;
      },
      computeScrollAreaClientRect: function computeScrollAreaClientRect() {
        return _this.$refs.area.getBoundingClientRect();
      },
      computeScrollContentClientRect: function computeScrollContentClientRect() {
        return _this.$refs.content.getBoundingClientRect();
      },
      computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight$1() {
        return computeHorizontalScrollbarHeight(document);
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    getScrollPosition: function getScrollPosition() {
      return this.foundation.getScrollPosition();
    },
    getScrollContentWidth: function getScrollContentWidth() {
      return this.$refs.content.offsetWidth;
    },
    incrementScroll: function incrementScroll(scrollXIncrement) {
      this.foundation.incrementScroll(scrollXIncrement);
    },
    scrollTo: function scrollTo(scrollX) {
      this.foundation.scrollTo(scrollX);
    }
  },
  render: function render(createElement) {
    var _this2 = this;

    var scopedSlots = this.$scopedSlots;
    var areaEl = createElement('div', {
      class: this.areaClasses,
      style: this.areaStyles,
      ref: 'area',
      on: {
        mousedown: function mousedown(evt) {
          return _this2.foundation.handleInteraction(evt);
        },
        wheel: function wheel(evt) {
          return _this2.foundation.handleInteraction(evt);
        },
        pointerdown: function pointerdown(evt) {
          return _this2.foundation.handleInteraction(evt);
        },
        touchstart: function touchstart(evt) {
          return _this2.foundation.handleInteraction(evt);
        },
        keydown: function keydown(evt) {
          return _this2.foundation.handleInteraction(evt);
        }
      }
    }, [createElement('div', {
      class: {
        'mdc-tab-scroller__scroll-content': 1
      },
      style: this.contentStyles,
      ref: 'content',
      on: {
        transitionend: function transitionend(evt) {
          return _this2.foundation.handleTransitionEnd(evt);
        }
      }
    }, scopedSlots.default && scopedSlots.default())]);
    return createElement('div', {
      class: this.classes
    }, [areaEl]);
  }
};

var mcwTab = {
  name: 'mcw-tab',
  mixins: [CustomLinkMixin, DispatchEventMixin, VMAUniqueIdMixin],
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    stacked: Boolean,
    minWidth: Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-tab': 1,
        'mdc-tab--stacked': this.stacked,
        'mdc-tab--min-width': this.minWidth
      },
      styles: {}
    };
  },
  inject: ['mcwTabBar'],
  computed: {
    hasIcon: function hasIcon() {
      var scopedSlots = this.$scopedSlots;

      if (this.icon || scopedSlots.icon && scopedSlots.icon()) {
        return this.icon ? extractIconProp(this.icon) : {};
      }

      return false;
    },
    hasText: function hasText() {
      var scopedSlots = this.$scopedSlots;
      return !!(scopedSlots.default && scopedSlots.default());
    }
  },
  watch: {
    active: function active(value) {}
  },
  mounted: function mounted() {
    var _this = this;

    this.id = this.vma_uid_;
    this.foundation = new MDCTabFoundation({
      setAttr: function setAttr(attr, value) {
        return _this.$el.setAttribute(attr, value);
      },
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      activateIndicator: function activateIndicator(previousIndicatorClientRect) {
        _this.$refs.tabIndicator.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: function deactivateIndicator() {
        _this.$refs.tabIndicator.deactivate();
      },
      notifyInteracted: function notifyInteracted() {
        return emitCustomEvent(_this.$el, MDCTabFoundation.strings.INTERACTED_EVENT, {
          tabId: _this.id
        }, true
        /* bubble */
        );
      },
      getOffsetLeft: function getOffsetLeft() {
        return _this.$el.offsetLeft;
      },
      getOffsetWidth: function getOffsetWidth() {
        return _this.$el.offsetWidth;
      },
      getContentOffsetLeft: function getContentOffsetLeft() {
        return _this.$refs.content.offsetLeft;
      },
      getContentOffsetWidth: function getContentOffsetWidth() {
        return _this.$refs.content.offsetWidth;
      },
      focus: function focus() {
        return _this.$el.focus();
      }
    });
    this.foundation.init(); // console.log('tab mounted')

    this.mcwTabBar.tabList.push(this); // this.setActive(this.active)
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    activate: function activate(computeIndicatorClientRect) {
      this.foundation.activate(computeIndicatorClientRect);
    },
    deactivate: function deactivate() {
      this.foundation.deactivate();
    },
    isActive: function isActive() {
      return this.foundation.isActive();
    },
    setActive: function setActive(isActive) {
      if (isActive) {
        this.$set(this.classes, 'mdc-tab--active', true), this.$refs.tabIndicator.activate();
      }
    },
    computeIndicatorClientRect: function computeIndicatorClientRect() {
      return this.$refs.tabIndicator.computeContentClientRect();
    },
    computeDimensions: function computeDimensions() {
      return this.foundation.computeDimensions();
    },
    focus: function focus() {
      this.$el.focus();
    }
  },
  render: function render(createElement) {
    var _this2 = this;

    var scopedSlots = this.$scopedSlots;
    var contentNodes = [];

    if (this.hasIcon) {
      contentNodes.push(createElement('i', {
        class: _objectSpread2(_objectSpread2({}, this.hasIcon.classes), {}, {
          'mdc-tab__icon': 1
        }),
        attrs: {
          tabindex: '0',
          'aria-hidden': 'true'
        },
        ref: 'icon'
      }, scopedSlots.icon && scopedSlots.icon() || this.hasIcon.content));
    }

    if (this.hasText) {
      contentNodes.push(createElement('span', {
        class: {
          'mdc-tab__text-label': 1
        }
      }, scopedSlots.default && scopedSlots.default()));
    }

    var spanEl = createElement('span', {
      class: {
        'mdc-tab__content': 1
      },
      ref: 'content'
    }, contentNodes);
    var nodes = [spanEl, createElement('mdc-tab-indicator', {
      ref: 'tabIndicator'
    }), createElement('mdc-tab-ripple')];
    return createElement('custom-link', {
      class: this.classes,
      style: this.styles,
      attrs: {
        link: this.link,
        role: 'tab',
        'aria-selected': 'false',
        tabindex: '-1'
      },
      on: {
        click: function click(evt) {
          return _this2.foundation.handleClick(evt);
        }
      }
    }, nodes);
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

var tabs = BasePlugin({
  mcwTab: mcwTab,
  mcwTabBar: mcwTabBar,
  mcwTabScroller: mcwTabScroller,
  mcwTabIndicator: mcwTabIndicator,
  mcwTabRipple: mcwTabRipple
});

var TextfieldHelperText = {
  name: 'textfield-helper-text',
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String
  },
  data: function data() {
    return {
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.persistent,
        'mdc-text-field-helper-text--validation-msg': this.validation
      }
    };
  },
  watch: {
    persistent: function persistent() {
      this.foundation.setPersistent(this.persistent);
    },
    validation: function validation() {
      this.foundation.setValidation(this.validation);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCTextFieldHelperTextFoundation({
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return Boolean(_this.classes[className]);
      },
      setAttr: function setAttr(attr, value) {
        _this.$el.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        _this.$el.removeAttribute(attr);
      },
      setContent: function setContent()
      /* content */
      {// help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  render: function render(createElement) {
    var scopedSlots = this.$scopedSlots;
    var defaultSlot = scopedSlots.default && scopedSlots.default();
    var classes = classNames(this.classes);

    if (defaultSlot) {
      return defaultSlot[0];
    }

    return createElement('div', {
      class: 'mdc-text-field-helper-line'
    }, [createElement('div', {
      class: classes,
      attrs: this.$attrs
    }, this.helptext)]);
  }
}; // ===
// Private functions
// ===

var hasOwn = {}.hasOwnProperty;

function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    // eslint-disable-next-line prefer-rest-params
    var arg = arguments[i];
    if (!arg) continue;

    var argType = _typeof(arg);

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      // eslint-disable-next-line prefer-spread
      var inner = classNames.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

var TextfieldIcon = {
  name: 'textfield-icon',
  functional: true,
  props: {
    disabled: Boolean,
    leading: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCTextFieldIconFoundation(Object.assign({
      getAttr: function getAttr(attr) {
        return _this.$el.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.$el.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.$el.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.$el.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.$el.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.$el.removeEventListener(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        _this.$emit('click');

        emitCustomEvent(_this.$el, MDCTextFieldIconFoundation.strings.ICON_EVENT, {}, true
        /* shouldBubble  */
        );
      }
    }));
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  render: function render(createElement, context) {
    var node = context.children[0];
    var leading = context.props.leading;
    node.data.class = "mdc-text-field__icon mdc-text-field__icon--".concat(leading ? 'leading' : 'trailing');
    return node;
  }
};

var mcwTextfield = {
  name: 'mcw-textfield',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
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
    fullwidth: Boolean,
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
    helptextValidation: Boolean
  },
  data: function data() {
    return {
      text: this.value,
      classes: {
        'mdc-textfield': true,
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--fullwidth': this.fullwidth,
        'mdc-text-field--textarea': this.multiline,
        'mdc-text-field--outlined': !this.fullwidth && this.outline,
        'mdc-text-field--with-leading-icon': Boolean(this.$slots.leadingIcon),
        'mdc-text-field--with-trailing-icon': Boolean(this.$slots.trailingIcon),
        'mdc-text-field--filled': Boolean(!this.outline),
        'mdc-text-field--no-label': !this.label
      },
      styles: {},
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
      notchStyles: {}
    };
  },
  components: {
    TextfieldHelperText: TextfieldHelperText,
    TextfieldIcon: TextfieldIcon
  },
  computed: {
    inputPlaceHolder: function inputPlaceHolder() {
      return this.fullwidth ? this.label : undefined;
    },
    inputAriaControls: function inputAriaControls() {
      return this.help ? 'help-' + this.vma_uid_ : undefined;
    },
    hasLabel: function hasLabel() {
      return !this.fullwidth && !this.outline && this.label;
    },
    hasOutlineLabel: function hasOutlineLabel() {
      return this.hasOutline && this.label;
    },
    hasOutline: function hasOutline() {
      return !this.fullwidth && this.outline;
    },
    hasLineRipple: function hasLineRipple() {
      return !this.hasOutline && !this.multiline;
    },
    hasHelptext: function hasHelptext() {
      var scopedSlots = this.$scopedSlots;
      return scopedSlots.helpText && scopedSlots.helpText() || this.helptext;
    }
  },
  watch: {
    disabled: function disabled() {
      this.foundation && this.foundation.setDisabled(this.disabled);
    },
    required: function required() {
      this.$refs.input && (this.$refs.input.required = this.required);
    },
    valid: function valid() {
      if (typeof this.valid !== 'undefined') {
        this.foundation && this.foundation.setValid(this.valid);
      }
    },
    value: function value(_value) {
      if (this.foundation) {
        if (_value !== this.foundation.getValue()) {
          this.foundation.setValue(_value);
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCTextFieldFoundation(Object.assign({
      addClass: function addClass(className) {
        _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        _this.$refs.root.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        _this.$refs.root.addEventListener(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        _this.$refs.root.removeEventListener(evtType, handler);
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.$refs.input;
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
        var targetNode = _this.$refs.input;
        var config = {
          attributes: true
        };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        observer.disconnect();
      }
    }, this.getInputAdapterMethods(), this.getLabelAdapterMethods(), this.getLineRippleAdapterMethods(), this.getOutlineAdapterMethods()), {
      helperText: this.$refs.helpertextEl ? this.$refs.helpertextEl.foundation : void 0,
      leadingIcon: this.$refs.leadingIconEl ? this.$refs.leadingIconEl.foundation : void 0,
      trailingIcon: this.$refs.trailingIconEl ? this.$refs.trailingIconEl.foundation : void 0
    });
    this.foundation.init();
    this.foundation.setValue(this.value);
    this.foundation.setDisabled(this.disabled);
    this.$refs.input && (this.$refs.input.required = this.required);

    if (typeof this.valid !== 'undefined') {
      this.foundation.setValid(this.valid);
    }

    var isTextArea = this.$refs.root.classList.contains('mdc-text-field--textarea');
    var isOutlined = this.$refs.root.classList.contains('mdc-text-field--outlined');

    if (!isTextArea && !isOutlined) {
      this.ripple = new RippleBase(this, {
        isSurfaceActive: function isSurfaceActive() {
          return matches(_this.$refs.input, ':active');
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          _this.$refs.input.addEventListener(evtType, handler, applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this.$refs.input.removeEventListener(evtType, handler, applyPassive());
        }
      });
      this.ripple.init();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    getInputAdapterMethods: function getInputAdapterMethods() {
      var _this2 = this;

      return {
        registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
          _this2.$refs.input.addEventListener(evtType, handler, applyPassive());
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
          _this2.$refs.input.removeEventListener(evtType, handler, applyPassive());
        },
        getNativeInput: function getNativeInput() {
          return _this2.$refs.input;
        }
      };
    },
    getLabelAdapterMethods: function getLabelAdapterMethods() {
      var _this3 = this;

      return {
        shakeLabel: function shakeLabel(shouldShake) {
          _this3.$refs.labelEl && _this3.$refs.labelEl.shake(shouldShake);
        },
        floatLabel: function floatLabel(shouldFloat) {
          _this3.$refs.labelEl && _this3.$refs.labelEl.float(shouldFloat);
        },
        hasLabel: function hasLabel() {
          return !!_this3.$refs.labelEl || !!_this3.$refs.notchedEl;
        },
        getLabelWidth: function getLabelWidth() {
          return _this3.$refs.labelEl.getWidth();
        }
      };
    },
    getLineRippleAdapterMethods: function getLineRippleAdapterMethods() {
      var _this4 = this;

      return {
        deactivateLineRipple: function deactivateLineRipple() {
          if (_this4.$refs.lineRippleEl) {
            _this4.$refs.lineRippleEl.deactivate();
          }
        },
        activateLineRipple: function activateLineRipple() {
          if (_this4.$refs.lineRippleEl) {
            _this4.$refs.lineRippleEl.activate();
          }
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
          if (_this4.$refs.lineRippleEl) {
            _this4.$refs.lineRippleEl.setRippleCenter(normalizedX);
          }
        }
      };
    },
    getOutlineAdapterMethods: function getOutlineAdapterMethods() {
      var _this5 = this;

      return {
        hasOutline: function hasOutline() {
          return !!_this5.hasOutline;
        },
        notchOutline: function notchOutline(notchWidth, isRtl) {
          return _this5.$refs.labelEl.notch(notchWidth, isRtl);
        },
        closeOutline: function closeOutline() {
          return _this5.$refs.labelEl.closeNotch();
        }
      };
    },
    updateValue: function updateValue(value) {
      this.$emit('model', value);
    },
    focus: function focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    }
  },
  render: function render(createElement) {
    var _this6 = this;

    var scopedSlots = this.$scopedSlots;
    var rootNodes = [];
    var leadingIconSlot = scopedSlots.leadingIcon && scopedSlots.leadingIcon();

    if (leadingIconSlot) {
      rootNodes.push(createElement('textfield-icon', {
        ref: 'leadingIconEl',
        props: {
          leading: true
        }
      }, leadingIconSlot));
    }

    if (this.multiline) {
      rootNodes.push(createElement('textarea', {
        class: this.inputClasses,
        attrs: _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
          id: this.vma_uid_,
          minlength: this.minlength,
          maxlength: this.maxlength,
          placeholder: this.inputPlaceHolder,
          'aria-label': this.inputPlaceHolder,
          'aria-controls': this.inputAriaControls,
          rows: this.rows,
          cols: this.cols
        }),
        ref: 'input',
        on: _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
          input: function input(evt) {
            return _this6.updateValue(evt.target.value);
          }
        })
      }));
    } else {
      rootNodes.push(createElement('span', {
        class: 'mdc-text-field__ripple',
        ref: 'ripple'
      }));
      rootNodes.push(createElement('input', {
        class: this.inputClasses,
        attrs: _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
          id: this.vma_uid_,
          type: this.type,
          minlength: this.minlength,
          maxlength: this.maxlength,
          placeholder: this.inputPlaceHolder,
          'aria-label': this.inputPlaceHolder,
          'aria-controls': this.inputAriaControls,
          'aria-labelledby': "label-".concat(this.vma_uid_)
        }),
        ref: 'input',
        on: _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
          input: function input(evt) {
            return _this6.updateValue(evt.target.value);
          }
        })
      }));
    }

    if (this.hasLabel) {
      rootNodes.push(createElement(__vue_component__$6, {
        attrs: {
          id: "label-".concat(this.vma_uid_)
        },
        ref: 'labelEl'
      }, this.label));
    }

    var trailingIconSlot = scopedSlots.trailingIcon && scopedSlots.trailingIcon();

    if (trailingIconSlot) {
      rootNodes.push(createElement('textfield-icon', {
        ref: 'trailingIconEl',
        props: {
          leading: false
        }
      }, trailingIconSlot));
    }

    if (this.hasOutline) {
      rootNodes.push(createElement(__vue_component__$b, {
        ref: 'labelEl'
      }, this.label));
    }

    if (this.hasLineRipple) {
      rootNodes.push(createElement(mcwLineRipple, {
        ref: 'lineRippleEl'
      }));
    }

    var rootEl = createElement('label', {
      class: this.classes,
      style: this.styles,
      ref: 'root'
    }, rootNodes);
    var nodes = [rootEl];
    var helpTextSlot = scopedSlots.helpText && scopedSlots.helpText();

    if (this.hasHelptext) {
      nodes.push(createElement('textfield-helper-text', {
        attrs: {
          id: "help".concat(this.vma_uid_),
          helptext: this.helptext,
          persistent: this.helptextPersistent,
          validation: this.helptextValidation
        },
        ref: 'helpertextEl'
      }, helpTextSlot));
    }

    return createElement('div', {
      style: {
        width: this.fullwidth ? '100%' : void 0
      },
      attrs: {
        id: this.id
      }
    }, nodes);
  }
};

var textfield = BasePlugin({
  mcwTextfield: mcwTextfield
});

var cssClasses$4 = MDCTopAppBarFoundation.cssClasses,
    strings$4 = MDCTopAppBarFoundation.strings;
var mcwTopAppBar = {
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
  data: function data() {
    return {
      rootStyles: {
        top: '0'
      },
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.shortCollapsed,
        'mdc-top-app-bar--prominent': this.prominent,
        'mdc-top-app-bar--fixed': this.fixed
      },
      myScrollTarget: null
    };
  },
  watch: {
    scrollTarget: function scrollTarget(nv, ov) {
      if (nv !== ov) {
        this.myScrollTarget.removeEventListener('scroll', this.foundation_.handleTargetScroll);
        this.myScrollTarget = nv;
        this.myScrollTarget.addEventListener('scroll', this.foundation_.handleTargetScroll);
      }
    }
  },
  methods: {
    handleNavigationClick_: function handleNavigationClick_(event) {
      this.foundation_.handleNavigationClick(event);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.rootClasses, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.rootClasses, className);
      },
      hasClass: function hasClass(className) {
        return Boolean(_this.rootClasses[className]);
      },
      setStyle: function setStyle(property, value) {
        return _this.$set(_this.rootStyles, property, value);
      },
      getTopAppBarHeight: function getTopAppBarHeight() {
        return _this.$el.clientHeight;
      },
      notifyNavigationIconClicked: function notifyNavigationIconClicked() {
        _this.$emit('nav', {});

        emitCustomEvent(_this.$el, strings$4.NAVIGATION_EVENT, {},
        /** shouldBubble */
        true);
      },
      //  registerScrollHandler: handler => {
      //         if (this.myScrollTarget) {
      //           this.myScrollTarget.addEventListener('scroll', handler);
      //         } else {
      //           window.addEventListener('scroll', handler);
      //         }
      //       },
      //       deregisterScrollHandler: handler => {
      //         if (this.myScrollTarget) {
      //           this.myScrollTarget.removeEventListener('scroll', handler);
      //         } else {
      //           window.removeEventListener('scroll', handler);
      //         }
      //       },
      getViewportScrollY: function getViewportScrollY() {
        return window.pageYOffset;
      },
      getTotalActionItems: function getTotalActionItems() {
        return _this.$refs.root.querySelectorAll(".".concat(cssClasses$4.ACTION_ITEM)).length;
      }
    };
    var short = this.short,
        shortCollapsed = this.shortCollapsed,
        fixed = this.fixed;

    if (short || shortCollapsed) {
      this.foundation_ = new MDCShortTopAppBarFoundation(adapter);
    } else if (fixed) {
      this.foundation_ = new MDCFixedTopAppBarFoundation(adapter);
    } else {
      this.foundation_ = new MDCTopAppBarFoundation(adapter);
    } // todo: hunt down icons for ripples


    this.navIcon_ = this.$el.querySelector(strings$4.NAVIGATION_ICON_SELECTOR);

    if (this.navIcon_) {
      this.navIcon_.addEventListener('click', this.handleNavigationClick_);
    }

    this.myScrollTarget = this.scrollTarget || window;
    this.foundation_.init(); // Get all icons in the toolbar and instantiate the ripples

    var icons = [].slice.call(this.$el.querySelectorAll(strings$4.ACTION_ITEM_SELECTOR));

    if (this.navIcon_) {
      icons.push(this.navIcon_);
    }

    this.iconRipples_ = icons.map(function (icon) {
      var ripple = new RippleElement(icon);
      ripple.init();
      ripple.unbounded = true;
      return ripple;
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.navIcon_) {
      this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
    }

    this.iconRipples_.forEach(function (iconRipple) {
      return iconRipple.destroy();
    });
    this.myScrollTarget && this.myScrollTarget.removeEventListener('scroll', this.foundation_.handleTargetScroll);
    this.foundation_.destroy();
  },
  render: function render(createElement) {
    var scopedSlots = this.$scopedSlots;
    return createElement(this.tag, {
      class: this.rootClasses,
      style: this.rootStyles,
      ref: 'root',
      on: this.$listeners
    }, scopedSlots.default && scopedSlots.default());
  }
};

var mcwFixedAdjust = {
  name: 'mcw-fixed-adjust',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'main'
    },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean
  },
  render: function render(createElement, _ref) {
    var _ref2, _scopedSlots$default;

    var _ref$props = _ref.props,
        short = _ref$props.short,
        dense = _ref$props.dense,
        prominent = _ref$props.prominent,
        tag = _ref$props.tag,
        scopedSlots = _ref.scopedSlots,
        _ref$data = _ref.data,
        attrs = _ref$data.attrs,
        staticStyle = _ref$data.staticStyle,
        staticClass = _ref$data.staticClass;
    var base = 'mdc-top-app-bar';
    var suffix = '-fixed-adjust';
    return createElement(tag, {
      class: [(_ref2 = {}, _defineProperty(_ref2, base + '--short' + suffix, short), _defineProperty(_ref2, base + '--dense' + suffix, dense && !prominent), _defineProperty(_ref2, base + '--dense-prominent' + suffix, dense && prominent), _defineProperty(_ref2, base + '--prominent' + suffix, !dense && prominent), _defineProperty(_ref2, base + '-' + suffix, !short && !dense && !prominent), _ref2), staticClass],
      style: staticStyle,
      attrs: attrs
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

var mcwTopAppBarIcon = {
  name: 'mcw-top-app-bar-icon',
  props: {
    actionItem: Boolean
  },
  render: function render(createElement) {
    var _scopedSlots$default;

    var attrs = this.$attrs,
        scopedSlots = this.$scopedSlots,
        actionItem = this.actionItem,
        listeners = this.$listeners;
    return createElement('button', {
      class: {
        'mdc-icon-button': 1,
        'material-icons': 1,
        'mdc-top-app-bar__action-item': actionItem,
        'mdc-top-app-bar__navigation-icon': !actionItem
      },
      attrs: attrs,
      on: _objectSpread2({}, listeners)
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
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
  functional: true,
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var tag = _ref.props.tag,
        scopedSlots = _ref.scopedSlots,
        _ref$data = _ref.data,
        attrs = _ref$data.attrs,
        staticClass = _ref$data.staticClass;
    return createElement(tag, {
      class: ['mdc-top-app-bar__row', staticClass],
      attrs: attrs
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
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
  functional: true,
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var _ref$props = _ref.props,
        tag = _ref$props.tag,
        align = _ref$props.align,
        scopedSlots = _ref.scopedSlots,
        _ref$data = _ref.data,
        attrs = _ref$data.attrs,
        staticClass = _ref$data.staticClass;
    var classes = ['mdc-top-app-bar__section', staticClass];
    align == 'start' && classes.push('mdc-top-app-bar__section--align-start');
    align == 'end' && classes.push('mdc-top-app-bar__section--align-end');
    return createElement(tag, {
      class: classes,
      attrs: attrs
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
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
  functional: true,
  render: function render(createElement, _ref) {
    var _scopedSlots$default;

    var tag = _ref.props.tag,
        scopedSlots = _ref.scopedSlots,
        _ref$data = _ref.data,
        attrs = _ref$data.attrs,
        staticClass = _ref$data.staticClass;
    return createElement(tag, {
      class: ['mdc-top-app-bar__title', staticClass],
      attrs: attrs
    }, (_scopedSlots$default = scopedSlots.default) === null || _scopedSlots$default === void 0 ? void 0 : _scopedSlots$default.call(scopedSlots));
  }
};

var topAppBar = BasePlugin({
  mcwTopAppBar: mcwTopAppBar,
  mcwFixedAdjust: mcwFixedAdjust,
  mcwTopAppBarIcon: mcwTopAppBarIcon,
  mcwTopAppBarRow: mcwTopAppBarRow,
  mcwTopAppBarSection: mcwTopAppBarSection,
  mcwTopAppBarTitle: mcwTopAppBarTitle
});

function mcwTypoMixin(defaultTag, defaultClassModifier) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mdc-".concat(defaultTag);
  return {
    functional: true,
    props: {
      tag: {
        type: String,
        default: defaultTag
      },
      classModifier: {
        type: String,
        default: defaultClassModifier
      }
    },
    render: function render(createElement, _ref) {
      var _class;

      var _ref$props = _ref.props,
          tag = _ref$props.tag,
          classModifier = _ref$props.classModifier,
          scopedSlots = _ref.scopedSlots,
          listeners = _ref.listeners,
          attrs = _ref.data.attrs;
      return createElement(tag, {
        class: (_class = {}, _defineProperty(_class, name, true), _defineProperty(_class, 'mdc-typography', true), _defineProperty(_class, "mdc-typography--".concat(classModifier), true), _class),
        attrs: attrs,
        on: listeners
      }, scopedSlots.default && scopedSlots.default());
    }
  };
}

var mcwHeadline1 = {
  name: 'mcw-headline1',
  functional: true,
  mixins: [mcwTypoMixin('h1', 'headline1')]
};
var mcwHeadline2 = {
  name: 'mcw-headline2',
  functional: true,
  mixins: [mcwTypoMixin('h2', 'headline2')]
};
var mcwHeadline3 = {
  name: 'mcw-headline3',
  functional: true,
  mixins: [mcwTypoMixin('h3', 'headline3')]
};
var mcwHeadline4 = {
  name: 'mcw-headline4',
  functional: true,
  mixins: [mcwTypoMixin('h4', 'headline4')]
};
var mcwHeadline5 = {
  name: 'mcw-headline5',
  functional: true,
  mixins: [mcwTypoMixin('h5', 'headline5')]
};
var mcwHeadline6 = {
  name: 'mcw-headline6',
  functional: true,
  mixins: [mcwTypoMixin('h6', 'headline6')]
};
var mcwSubtitle1 = {
  name: 'mcw-subtitle1',
  functional: true,
  mixins: [mcwTypoMixin('h6', 'subtitle1')]
};
var mcwSubtitle2 = {
  name: 'mcw-subtitle2',
  functional: true,
  mixins: [mcwTypoMixin('h6', 'subtitle2')]
};
var mcwBody1 = {
  name: 'mcw-body1',
  functional: true,
  mixins: [mcwTypoMixin('p', 'body1')]
};
var mcwBody2 = {
  name: 'mcw-body2',
  functional: true,
  mixins: [mcwTypoMixin('p', 'body2')]
};
var mcwButton1 = {
  name: 'mcw-button1',
  functional: true,
  mixins: [mcwTypoMixin('span', 'button', 'mdc-button1')]
};
var mcwCaption = {
  name: 'mcw-caption',
  functional: true,
  mixins: [mcwTypoMixin('span', 'caption')]
};
var mcwOverline = {
  name: 'mcw-overline',
  functional: true,
  mixins: [mcwTypoMixin('span', 'overline')]
};

var typography = BasePlugin({
  mcwHeadline1: mcwHeadline1,
  mcwHeadline2: mcwHeadline2,
  mcwHeadline3: mcwHeadline3,
  mcwHeadline4: mcwHeadline4,
  mcwHeadline5: mcwHeadline5,
  mcwHeadline6: mcwHeadline6,
  mcwOverline: mcwOverline,
  mcwSubtitle1: mcwSubtitle1,
  mcwSubtitle2: mcwSubtitle2,
  mcwBody1: mcwBody1,
  mcwBody2: mcwBody2,
  mcwButton1: mcwButton1,
  mcwCaption: mcwCaption
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
    vm.use(typography);
  }
};

export default index$1;
export { index as base, button, card, checkbox, chips, circularProgress, dataTable, dialog, drawer, fab, floatingLabel, iconButton, layoutGrid, lineRipple, linearProgress, list, materialIcon, menu, notchedOutline, radio, select, slider, snackbar, switchControl, tabs, textfield, topAppBar, typography };
