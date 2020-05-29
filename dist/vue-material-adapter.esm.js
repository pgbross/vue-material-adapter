import { applyPassive } from '@material/dom/events';
import { matches, closest } from '@material/dom/ponyfill';
import { MDCRippleFoundation } from '@material/ripple';
import { supportsCssVariables } from '@material/ripple/util';
import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation';
import { getCorrectEventName } from '@material/animation';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { announce } from '@material/dom/announce';
import { MDCDataTableFoundation } from '@material/data-table/foundation';
import { MDCCheckbox } from '@material/checkbox';
import * as test from '@material/data-table';
import { strings as strings$4 } from '@material/data-table';
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

function BasePlugin(components) {
  return {
    version: '__VERSION__',
    install: vm => {
      Object.entries(components).forEach(([key, component]) => {
        const name = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

        // eslint-disable-next-line no-unused-vars
        const [pfx, ...rest] = name.split('-');

        const mdcName = ['mdc', ...rest].join('-');
        const mcwName = ['mcw', ...rest].join('-');

        const definition = vm.extend(component);

        vm.component(mcwName, definition);
        vm.component(mdcName, definition);
      });
    },
    components,
  };
}

const CustomButton = {
  name: 'custom-button',
  functional: true,
  props: {
    link: Object,
  },
  render(
    createElement,
    {
      children,
      data,
      props: { link, tag },
      parent: { $router, $root },
    },
  ) {
    let element;

    if (link && $router) {
      // router-link case
      element = $root.$options.components['RouterLink'];
      data.props = { tag, ...link };
      data.attrs.role = 'button';
      if (data.on.click) {
        data.nativeOn = { click: data.on.click };
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
  },
};

const CustomButtonMixin = {
  props: {
    href: String,
    disabled: Boolean,
    to: [String, Object],
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
  },
  computed: {
    link() {
      return (
        this.to && {
          to: this.to,
          exact: this.exact,
          append: this.append,
          replace: this.replace,
          activeClass: this.activeClass,
          exactActiveClass: this.exactActiveClass,
        }
      );
    },
  },
  components: {
    CustomButton,
  },
};

/* global CustomEvent */

function emitCustomEvent(el, evtType, evtData, shouldBubble = false) {
  let evt;
  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble,
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  }
  el.dispatchEvent(evt);
}

const CustomLink = {
  name: 'custom-link',
  functional: true,
  props: {
    tag: { type: String, default: 'a' },
    link: Object,
  },
  render(
    createElement,
    {
      data,
      children,
      props: { link, tag },
      parent: { $router, $root },
    },
  ) {
    let element;

    if (link && $router) {
      // router-link case
      element = $root.$options.components['RouterLink'];
      data.props = { tag, ...link };
      if (data.on.click) {
        data.nativeOn = { click: data.on.click };
      }
    } else {
      // element fallback
      element = tag;
    }

    return createElement(element, data, children);
  },
};

const CustomLinkMixin = {
  props: {
    to: [String, Object],
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
  },
  computed: {
    link() {
      return (
        this.to && {
          to: this.to,
          exact: this.exact,
          append: this.append,
          replace: this.replace,
          activeClass: this.activeClass,
          exactActiveClass: this.exactActiveClass,
        }
      );
    },
  },
  components: {
    CustomLink,
  },
};

/* eslint-disable quote-props */
const DispatchEventMixin = {
  props: {
    event: String,
    'event-target': Object,
    'event-args': Array,
  },
  methods: {
    dispatchEvent(evt) {
      evt && this.$emit(evt.type, evt);
      if (this.event) {
        const target = this.eventTarget || this.$root;
        const args = this.eventArgs || [];
        target.$emit(this.event, ...args);
      }
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: e => this.dispatchEvent(e),
      };
    },
  },
};

const DispatchFocusMixin = {
  data() {
    return { hasFocus: false };
  },
  methods: {
    onMouseDown() {
      this._active = true;
    },
    onMouseUp() {
      this._active = false;
    },
    onFocusEvent() {
      // dispatch async to let time to other focus event to propagate
      setTimeout(() => this.dispatchFocusEvent(), 0);
    },
    onBlurEvent() {
      // dispatch async to let time to other focus event to propagate
      // also filtur blur if mousedown
      this._active || setTimeout(() => this.dispatchFocusEvent(), 0);
    },
    dispatchFocusEvent() {
      const hasFocus =
        this.$el === document.activeElement ||
        this.$el.contains(document.activeElement);
      if (hasFocus != this.hasFocus) {
        this.$emit(hasFocus ? 'focus' : 'blur');
        this.hasFocus = hasFocus;
      }
    },
  },
  mounted() {
    this.$el.addEventListener('focusin', this.onFocusEvent);
    this.$el.addEventListener('focusout', this.onBlurEvent);
    this.$el.addEventListener('mousedown', this.onMouseDown);
    this.$el.addEventListener('mouseup', this.onMouseUp);
  },
  beforeDestroy() {
    this.$el.removeEventListener('focusin', this.onFocusEvent);
    this.$el.removeEventListener('focusout', this.onBlurEvent);
    this.$el.removeEventListener('mousedown', this.onMouseDown);
    this.$el.removeEventListener('mouseup', this.onMouseUp);
  },
};

const scope =
  Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';

const VMAUniqueIdMixin = {
  beforeCreate() {
    this.vma_uid_ = scope + this._uid;
  },
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

class RippleBase extends MDCRippleFoundation {
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

const RippleMixin = {
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

var mcwButtonBase = {
  name: 'mcw-button-base',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  // note RippleMixin defines data(){ return {classes:{}, styles: {} }; }
  render(createElement) {
    const nodes = [
      createElement('div', { class: { 'mdc-button__ripple': 1 } }),
      createElement(
        'span',
        { class: { 'mdc-button__label': 1 } },
        this.$slots.default,
      ),
    ];
    if (this.$slots.icon || this.icon) {
      nodes.unshift(
        this.$slots.icon ||
          createElement(
            'i',
            {
              class: {
                'material-icons': 1,
                'mdc-button__icon': 1,
              },
              attrs: { 'aria-hidden': true },
            },
            this.icon,
          ),
      );
    }

    if (this.$slots.trailingIcon || this.trailingIcon) {
      nodes.push(
        this.$slots.trailingIcon ||
          createElement(
            'i',
            {
              class: {
                'material-icons': 1,
                'mdc-button__icon': 1,
              },
              attrs: { 'aria-hidden': true },
            },
            this.trailingIcon,
          ),
      );
    }

    return createElement(
      'custom-button',
      {
        class: this.classes,
        style: this.styles,
        attrs: { disabled: this.disabled },
        props: {
          href: this.href,
          link: this.link,
        },
        on: this.listeners,
        ref: 'root',
      },
      nodes,
    );
  },
};

var mcwButton = {
  name: 'mcw-button',
  extends: mcwButtonBase,
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String,
  },
  data() {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated && !this.raised,
        'mdc-button--outlined': this.outlined,
      },
    };
  },
  watch: {
    raised() {
      this.$set(this.classes, 'mdc-button--raised', this.raised);
    },
    unelevated() {
      this.$set(this.classes, 'mdc-button--unelevated', this.unelevated);
    },
    outlined() {
      this.$set(this.classes, 'mdc-button--outlined', this.outlined);
    },
  },
};

var button = BasePlugin({
  mcwButton,
});

var mcwCard = {
  name: 'mcw-card',
  props: {
    outlined: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { outlined },
      data: { attrs, staticClass },
      scopedSlots,
    },
  ) {
    return createElement(
      'div',
      {
        class: [
          {
            'mdc-card': 1,
            'mdc-card--outlined': outlined,
          },
          staticClass,
        ],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwCardActionButtons = {
  name: 'mcw-card-action-buttons',
  functional: true,
  render(
    createElement,
    {
      scopedSlots,
      data: { attrs, staticClass, staticStyle },
    },
  ) {
    const vNodes = (scopedSlots.default && scopedSlots.default()) || [];

    if (vNodes) {
      // add icon class to children
      vNodes.forEach(vNode => {
        if (vNode.tag && vNode.data) {
          vNode.data.staticClass = `mdc-card__action mdc-card__action--button ${vNode
            .data.staticClass || ''}`;
        }
      });
    }

    return createElement(
      'div',
      {
        class: ['mdc-card__action-buttons', staticClass],
        style: staticStyle,
        attrs,
      },
      vNodes,
    );
  },
};

var mcwCardActionIcons = {
  name: 'mcw-card-action-icons',
  functional: true,
  render(
    createElement,
    {
      scopedSlots,
      data: { attrs, staticClass, staticStyle },
    },
  ) {
    const vNodes = (scopedSlots.default && scopedSlots.default()) || [];

    if (vNodes) {
      // add icon class to children
      vNodes.forEach(vNode => {
        if (vNode.tag && vNode.data) {
          vNode.data.staticClass = `mdc-card__action mdc-card__action--icon ${vNode
            .data.staticClass || ''}`;
        }
      });
    }

    return createElement(
      'div',
      {
        class: ['mdc-card__action-icons', staticClass],
        style: staticStyle,
        attrs,
      },
      vNodes,
    );
  },
};

var mcwCardActions = {
  name: 'mcw-card-actions',
  functional: true,
  props: {
    fullBleed: Boolean,
  },
  render(
    createElement,
    {
      props: { fullBleed },
      data: { staticClass, attrs },
      scopedSlots,
    },
  ) {
    return createElement(
      'section',
      {
        class: [
          {
            'mdc-card__actions': 1,
            'mdc-card__actions--full-bleed': fullBleed,
          },
          staticClass,
        ],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwCardMedia = {
  name: 'mcw-card-media',
  functional: true,
  props: {
    src: String,
    square: {
      type: Boolean,
      default() {
        return false;
      },
    },
    wide: {
      type: Boolean,
      default() {
        return false;
      },
    },
    contentClass: String,
  },
  render(
    createElement,
    {
      props: { src, square, wide, contentClass },
      data: { staticStyle },
      scopedSlots,
    },
  ) {
    const nodes = [];

    const content = scopedSlots.default && scopedSlots.default();
    if (content) {
      nodes.push(
        createElement(
          'div',
          { class: ['mdc-card__media-content', contentClass] },
          content,
        ),
      );
    }

    return createElement(
      'section',
      {
        class: {
          'mdc-card__media': 1,
          'mdc-card__media--square': square,
          'mdc-card__media--16-9': wide && !square,
        },
        style: {
          backgroundImage: `url(${src})`,
          ...staticStyle,
        },
      },
      nodes,
    );
  },
};

var mcwCardPrimaryAction = {
  name: 'mcw-card-primary-action',
  mixins: [DispatchEventMixin, CustomLinkMixin, RippleMixin],
  data() {
    return {
      classes: { 'mdc-card__primary-action': 1 },
    };
  },
  render(createElement) {
    const { $scopedSlots: slots } = this;
    return createElement(
      'custom-link',
      {
        class: this.classes,
        style: this.styles, // from RippleMixin
        props: { link: this.link },
        on: this.listeners,
      },
      slots.default && slots.default(),
    );
  },
};

var card = BasePlugin({
  mcwCard,
  mcwCardPrimaryAction,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons,
});

const ProgressPropType = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

function getCircleAttrs(medium = false, indeterminate = true) {
  return medium
    ? {
        cx: '16',
        cy: '16',
        r: '12.5',
        'stroke-dasharray': '78.54',
        'stroke-dashoffset': indeterminate ? '39.27' : '78.54',
      }
    : {
        cx: '24',
        cy: '24',
        r: '18',
        'stroke-dasharray': '113.097',
        'stroke-dashoffset': indeterminate ? '56.549' : '113.097',
      };
}

var mcwCircularProgress = {
  name: 'mcw-circular-progress',
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    medium: Boolean,
    progress: ProgressPropType,
    tag: { type: String, default: 'div' },
  },
  data() {
    return {
      classes: {
        'mdc-circular-progress': 1,
        'mdc-circular-progress--medium': this.medium,
        'mdc-circular-progress--large': !this.medium,
      },
      rootAttrs: {},
      circleAttrs: getCircleAttrs(this.medium, false),
      indeterminateAttrs: getCircleAttrs(this.medium, true),
    };
  },
  watch: {
    open(nv) {
      if (nv) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    progress(nv) {
      this.foundation.setProgress(Number(nv));
    },

    indeterminate(nv) {
      this.foundation.setDeterminate(!nv);
    },
  },

  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.classes, className, true);
      },

      getDeterminateCircleAttribute: attributeName => {
        return this.circleAttrs[attributeName];
      },

      hasClass: className => this.$el.classList.contains(className),
      removeClass: className => this.$delete(this.classes, className),

      removeAttribute: attributeName => {
        this.$delete(this.rootAttrs, attributeName);
      },

      setAttribute: (attributeName, value) => {
        this.$set(this.rootAttrs, attributeName, value);
      },

      setDeterminateCircleAttribute: (attributeName, value) =>
        this.$set(this.circleAttrs, attributeName, value),
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
  beforeDestroy() {
    this.foundation.destroy();
  },

  methods: {
    renderCircle(createElement, mode) {
      const svgClass_ = {
        determinate: 'mdc-circular-progress__determinate-circle-graphic',
        indeterminate: 'mdc-circular-progress__indeterminate-circle-graphic',
      };

      const circleOptions = {
        attrs:
          mode === 'determinate' ? this.circleAttrs : this.indeterminateAttrs,
      };

      if (mode === 'determinate') {
        circleOptions.class = 'mdc-circular-progress__determinate-circle';
      }

      return createElement(
        'svg',
        {
          attrs: {
            viewbox: '0 0 48 48',
            xmlns: '"http://www.w3.org/2000/svg"',
          },
          class: svgClass_[mode],
        },
        [createElement('circle', circleOptions)],
      );
    },
  },

  render(createElement) {
    const determinateNode = createElement(
      'div',
      { class: 'mdc-circular-progress__determinate-container' },
      [this.renderCircle(createElement, 'determinate')],
    );

    const indeterminateNode = createElement(
      'div',
      {
        class: 'mdc-circular-progress__indeterminate-container',
        // domProps: { innerHTML: indeterminateHtml_ },
      },
      [
        createElement(
          'div',
          { class: 'mdc-circular-progress__spinner-layer' },
          [
            createElement(
              'div',
              {
                class:
                  'mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left',
              },
              [this.renderCircle(createElement, 'indeterminate')],
            ),
            createElement(
              'div',
              {
                class: 'mdc-circular-progress__gap-patch',
              },
              [this.renderCircle(createElement, 'indeterminate')],
            ),
            createElement(
              'div',
              {
                class:
                  'mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right',
              },
              [this.renderCircle(createElement, 'indeterminate')],
            ),
          ],
        ),
      ],
    );

    return createElement(
      this.tag,
      {
        class: this.classes,
        attrs: { role: 'progressbar', ...this.rootAttrs },
      },
      [determinateNode, indeterminateNode],
    );
  },
};

var circularProgress = BasePlugin({
  mcwCircularProgress,
});

/* eslint-disable quote-props */

const CB_PROTO_PROPS = ['checked', 'indeterminate'];

var mcwCheckbox = {
  name: 'mcw-checkbox',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: [Boolean, Array],
    indeterminate: Boolean,
    disabled: Boolean,
    label: String,
    'align-end': Boolean,
    value: {
      type: [String, Number],
      default() {
        return 'on';
      },
    },
    name: String,
  },
  data() {
    return {
      styles: {},
      classes: { 'mdc-checkbox': 1 },
    };
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
    formFieldClasses() {
      return {
        'mdc-form-field': this.hasLabel,
        'mdc-form-field--align-end': this.hasLabel && this.alignEnd,
      };
    },
  },
  watch: {
    checked: 'setChecked',
    disabled(value) {
      this.foundation.setDisabled(value);
    },
    indeterminate: 'setIndeterminate',
  },

  mounted() {
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      forceLayout: () => this.$refs.root.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => true,
      isChecked: () => this.$refs.control.checked,
      isIndeterminate: () => this.$refs.control.indeterminate,
      removeClass: className => this.$delete(this.classes, className),
      removeNativeControlAttr: attr => {
        this.$refs.control.removeAttribute(attr);
      },
      setNativeControlAttr: (attr, value) => {
        this.$refs.control.setAttribute(attr, value);
      },

      setNativeControlDisabled: disabled =>
        (this.$refs.control.disabled = disabled),
    };

    this.foundation = new MDCCheckboxFoundation(adapter);

    this.handleAnimationEnd_ = () => this.foundation.handleAnimationEnd();

    this.$el.addEventListener(
      getCorrectEventName(window, 'animationend'),
      this.handleAnimationEnd_,
    );

    this.installPropertyChangeHooks_();

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => RippleBase.isSurfaceActive(this.$refs.control),
      registerInteractionHandler: (evt, handler) => {
        this.$refs.control.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$refs.control.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return this.$refs.root.getBoundingClientRect();
      },
    });

    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => {
        this.$refs.label.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$refs.label.removeEventListener(type, handler);
      },
      activateInputRipple: () => {
        this.ripple && this.ripple.activate();
      },
      deactivateInputRipple: () => {
        this.ripple && this.ripple.deactivate();
      },
    });

    this.foundation.init();
    this.ripple.init();
    this.formField.init();
    this.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);
    this.setIndeterminate(this.indeterminate);
  },
  beforeDestroy() {
    this.$el.removeEventListener(
      getCorrectEventName(window, 'animationend'),
      this.handleAnimationEnd_,
    );

    this.formField.destroy();
    this.ripple.destroy();

    this.uninstallPropertyChangeHooks_();
    this.foundation.destroy();
  },
  methods: {
    setChecked(checked) {
      this.$refs.control.checked = Array.isArray(checked)
        ? checked.indexOf(this.value) > -1
        : checked;
    },
    setIndeterminate(indeterminate) {
      this.$refs.control.indeterminate = indeterminate;
    },

    onChange(checked, indeterminate) {
      // note indeterminate will not currently work with the array model
      this.$emit('update:indeterminate', indeterminate);

      if (Array.isArray(this.checked)) {
        const idx = this.checked.indexOf(this.value);
        if (checked) {
          idx < 0 && this.$emit('change', this.checked.concat(this.value));
        } else {
          idx > -1 &&
            this.$emit(
              'change',
              this.checked.slice(0, idx).concat(this.checked.slice(idx + 1)),
            );
        }
      } else {
        this.$emit('change', checked);
      }
    },

    installPropertyChangeHooks_() {
      const nativeCb = this.$refs.control;
      const cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(controlState => {
        const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          const nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */ ({
            get: desc.get,
            set: state => {
              desc.set.call(nativeCb, state);
              this.foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable,
          });
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    },

    uninstallPropertyChangeHooks_() {
      const nativeCb = this.$refs.control;
      const cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(controlState => {
        const desc = /** @type {!ObjectPropertyDescriptor} */ (Object.getOwnPropertyDescriptor(
          cbProto,
          controlState,
        ));
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const inputElement = createElement('input', {
      attrs: {
        name: this.name,
        value: this.value,
        type: 'checkbox',
        id: this.vma_uid_,
        disabled: this.disabled,
      },
      class: { 'mdc-checkbox__native-control': 1 },
      on: {
        change: ({ target: { indeterminate, checked } }) =>
          this.onChange(checked, indeterminate),
      },
      ref: 'control',
    });

    const background = createElement(
      'div',
      { class: { 'mdc-checkbox__background': 1 } },
      [
        createElement(
          'svg',
          {
            class: { 'mdc-checkbox__checkmark': 1 },
            attrs: { viewBox: '0 0 24 24' },
          },
          [
            createElement('path', {
              class: { 'mdc-checkbox__checkmark-path': 1 },
              attrs: {
                fill: 'none',
                stroke: 'white',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
              },
            }),
          ],
        ),
        createElement('div', { class: { 'mdc-checkbox__mixedmark': 1 } }),
      ],
    );

    const checkboxElement = createElement(
      'div',
      { class: this.classes, style: this.styles, ref: 'root' },
      [
        inputElement,
        background,
        createElement('div', { class: ['mdc-checkbox__ripple'] }),
      ],
    );
    const labelElement = createElement(
      'label',
      { attrs: { for: this.vma_uid_ }, ref: 'label' },
      (scopedSlots.default && scopedSlots.default()) || this.label,
    );

    return createElement('div', { class: this.formFieldClasses }, [
      checkboxElement,
      labelElement,
    ]);
  },
};

// ===
// Private functions
// ===

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

var checkbox = BasePlugin({
  mcwCheckbox,
});

var mcwChipCheckmark = {
  name: 'mcw-chip-checkmark',
  data() {
    return { width: 0 };
  },

  render(createElement) {
    return createElement('div', { class: { 'mdc-chip__checkmark': 1 } }, [
      createElement(
        'svg',
        {
          class: { 'mdc-chip__checkmark-svg': 1 },
          attrs: { viewBox: '-2 -3 30 30' },
        },
        [
          createElement('path', {
            class: { 'mdc-chip__checkmark-path': 1 },
            attrs: {
              fill: 'none',
              stroke: 'black',
              d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
            },
          }),
        ],
      ),
    ]);
  },
  mounted() {
    this.width = this.$el.getBoundingClientRect().height;
  },
};

const {
  INTERACTION_EVENT,
  SELECTION_EVENT,
  REMOVAL_EVENT,
  NAVIGATION_EVENT,
} = MDCChipFoundation.strings;

const { CHIP_SELECTOR } = MDCChipSetFoundation.strings;

let idCounter = 0;

var mcwChipSet = {
  name: 'mcw-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean],
  },
  provide() {
    return { mcwChipSet: this };
  },
  data() {
    return {
      classes: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input,
      },
      listn: 0,
    };
  },

  computed: {
    chipElements() {
      // eslint-disable-next-line no-unused-vars
      const xx = this.listn; // for dependency

      return [].slice.call(this.$el.querySelectorAll(CHIP_SELECTOR));
    },
    chips_() {
      return this.chipElements.map(el => {
        el.id = el.id || `mdc-chip-${++idCounter}`;

        return el.__vue__;
      });
    },
  },

  mounted() {
    // do not delete this reference as it triggers initial chip list instantiation.
    this.chips_;
    this.foundation = new MDCChipSetFoundation({
      announceMessage: message => {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: index => {
        const chip = this.chips_[index];

        chip && chip.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: index => {
        const chip = this.chips_[index];
        chip && chip.focusTrailingAction();
      },
      getChipListCount: () => {
        return this.chips_.length;
      },
      getIndexOfChipById: chipId => {
        return this.chips_.findIndex(({ id }) => id == chipId);
      },
      hasClass: className => this.$el.classList.contains(className),
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',
      removeChipAtIndex: index => {
        if (index >= 0 && index < this.chips_.length) {
          // tell chip to remove itself from the DOM
          this.chips_[index].remove();
          this.chips_.splice(index, 1);
        }
      },

      removeFocusFromChipAtIndex: index => {
        this.chips_[index].removeFocus();
      },

      selectChipAtIndex: (index, selected, shouldNotifyClients) => {
        if (index >= 0 && index < this.chips_.length) {
          this.chips_[index].setSelectedFromChipSet(
            selected,
            shouldNotifyClients,
          );
        }
      },
    });

    this.foundation.init();

    // the chips could change outside of this component
    // so use a mutation observer to trigger an update by
    // incrementing the dependency variable "listn" referenced
    // in the computed that selects the chip elements
    this.slotObserver = new MutationObserver((mutationList, observer) => {
      this.listn++;
    });
    this.slotObserver.observe(this.$refs.listRoot, {
      childList: true,
      // subtree: true,
    });
  },

  beforeDestroy() {
    this.slotObserver.disconnect();
    this.foundation.destroy();
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'div',
      {
        class: this.classes,
        attrs: { role: 'grid' },
        on: {
          [INTERACTION_EVENT]: ({ detail }) =>
            this.foundation.handleChipInteraction(detail),
          [SELECTION_EVENT]: ({ detail }) =>
            this.foundation.handleChipSelection(detail),
          [REMOVAL_EVENT]: ({ detail }) =>
            this.foundation.handleChipRemoval(detail),
          [NAVIGATION_EVENT]: ({ detail }) =>
            this.foundation.handleChipNavigation(detail),
        },
        ref: 'listRoot',
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

const {
  INTERACTION_EVENT: INTERACTION_EVENT$1,
  SELECTION_EVENT: SELECTION_EVENT$1,
  REMOVAL_EVENT: REMOVAL_EVENT$1,
  TRAILING_ICON_INTERACTION_EVENT,
  PRIMARY_ACTION_SELECTOR,
  TRAILING_ACTION_SELECTOR,
  NAVIGATION_EVENT: NAVIGATION_EVENT$1,
} = MDCChipFoundation.strings;

var mcwChip = {
  name: 'mcw-chip',
  mixins: [CustomLinkMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  inject: ['mcwChipSet'],
  data() {
    return {
      classes: {
        'mdc-chip': true,
      },
      leadingClasses: {
        'mdc-chip__icon': 1,
        'mdc-chip__icon--leading': 1,
        'material-icons': 1,
      },
      styles: {},
      primaryAttrs: {},
      trailingAttrs: {},
    };
  },
  watch: {
    shouldRemoveOnTrailingIconClick(shouldRemove) {
      this.foundation.setShouldRemoveOnTrailingIconClick(shouldRemove);
    },
  },
  computed: {
    id() {
      return this.$el.id;
    },
    selected: {
      get() {
        return this.foundation.isSelected();
      },
      set(nv) {
        this.foundation.setSelected(nv);
      },
    },
    isFilter() {
      return this.mcwChipSet && this.mcwChipSet.filter;
    },
    isInput() {
      return this.mcwChipSet && this.mcwChipSet.input;
    },
    haveleadingIcon() {
      const slot = this.$slots['leading-icon'];
      return (slot && slot[0]) || !!this.leadingIcon;
    },
    havetrailingIcon() {
      const slot = this.$slots['trailing-icon'];

      return this.isInput && ((slot && slot[0]) || !!this.trailingIcon);
    },
  },
  methods: {
    setSelectedFromChipSet(selected, shouldNotifyClients) {
      this.foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    },

    focusPrimaryAction() {
      this.foundation.focusPrimaryAction();
    },

    focusTrailingAction() {
      this.foundation.focusTrailingAction();
    },
    removeFocus() {
      this.foundation.removeFocus();
    },
    toggleSelected() {
      this.foundation.toggleSelected();
    },
    isSelected() {
      return this.foundation.isSelected();
    },

    remove() {
      const parent = this.$el.parentNode;
      if (parent != null) {
        parent.removeChild(this.$el);
      }
    },

    renderLeadingIcon(createElement) {
      const {
        $slots: { ['leading-icon']: slot },
      } = this;
      const v0 = slot && slot[0];

      if (v0) {
        const { staticClass = '' } = v0.data;
        const haveClasses =
          staticClass && staticClass.indexOf('mdc-chip__icon') > -1;
        if (!haveClasses) {
          v0.data.staticClass = `mdc-chip__icon mdc-chip__icon--leading ${staticClass}`;
        }
        return slot;
      }

      return createElement(
        'i',
        {
          class: this.leadingClasses,
          ref: 'leading-icon',
        },
        this.leadingIcon,
      );
    },

    renderTrailingIcon(createElement) {
      const {
        $slots: { ['trailing-icon']: slot },
      } = this;

      const v0 = slot && slot[0];
      if (v0) {
        const { staticClass = '' } = v0.data;
        const haveClasses =
          staticClass && staticClass.indexOf('mdc-chip__icon') > -1;
        if (!haveClasses) {
          v0.data.staticClass = `mdc-chip__icon mdc-chip__icon--trailing mdc-chip__trailing-action${staticClass}`;
          v0.data.on = {
            ...v0.data.on,
            click: evt => {
              this.foundation.handleTrailingIconInteraction(evt);
            },
            keydown: evt => this.foundation.handleTrailingIconInteraction(evt),
          };
        }
        return slot;
      }

      return createElement('span', { attrs: { role: 'gridcell' } }, [
        createElement(
          'i',
          {
            class: {
              'mdc-chip__icon': 1,
              'mdc-chip__icon--trailing': 1,
              'material-icons': 1,
              // 'mdc-chip__trailing-action': 1,
            },
            attrs: { ...this.trailingAttrs },
            ref: 'trailing-icon',
            on: {
              click: evt => this.foundation.handleTrailingIconInteraction(evt),
              keydown: evt =>
                this.foundation.handleTrailingIconInteraction(evt),
            },
          },
          this.trailingIcon,
        ),
      ]);
    },
  },
  mounted() {
    this.trailingAction_ = this.$el.querySelector(TRAILING_ACTION_SELECTOR);

    this.foundation = new MDCChipFoundation({
      addClass: className => this.$set(this.classes, className, true),
      addClassToLeadingIcon: className => {
        this.$set(this.leadingClasses, className, true);

        // if no ref, then using slot, so just add class directly
        if (!this.$refs['leading-icon'] && this.haveleadingIcon) {
          const item = this.$slots['leading-icon'][0];
          (item.elm || item).classList.add(className);
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      focusPrimaryAction: () => {
        const {
          $refs: {
            primaryAction = this.$el.querySelector(PRIMARY_ACTION_SELECTOR),
          },
        } = this;

        primaryAction && primaryAction.focus();
      },
      focusTrailingAction: () => {
        this.trailingAction_ && this.trailingAction_.focus();
      },
      getAttribute: attr => this.$el.getAttribute(attr),
      getCheckmarkBoundingClientRect: () => {
        return this.$refs.checkmarkEl
          ? this.$refs.checkmarkEl.$el.getBoundingClientRect()
          : null;
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(this.$el).getPropertyValue(propertyName),
      getRootBoundingClientRect: () => this.$el.getBoundingClientRect(),
      hasClass: className => this.$el.classList.contains(className),
      hasLeadingIcon: () => !!this.haveleadingIcon,
      hasTrailingAction: () => !!this.trailingAction_,
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',

      notifyInteraction: () => {
        emitCustomEvent(
          this.$el,
          INTERACTION_EVENT$1,
          {
            chipId: this.id,
          },
          true,
        );
      },
      notifyNavigation: (key, source) =>
        emitCustomEvent(
          this.$el,
          NAVIGATION_EVENT$1,
          {
            chipId: this.id,
            key,
            source,
          },
          true,
        ),
      notifyRemoval: removedAnnouncement => {
        emitCustomEvent(
          this.$el,
          REMOVAL_EVENT$1,
          { chipId: this.id, root: this.$el, removedAnnouncement },
          true,
        );
      },
      notifySelection: selected =>
        emitCustomEvent(
          this.$el,
          SELECTION_EVENT$1,
          { chipId: this.id, selected: selected },
          true /* shouldBubble */,
        ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          this.$el,
          TRAILING_ICON_INTERACTION_EVENT,
          {
            chipId: this.id,
          },
          true,
        );
      },
      removeClass: className => this.$delete(this.classes, className),
      removeClassFromLeadingIcon: className => {
        this.$delete(this.leadingClasses, className);

        // if no ref, then using slot, so just remove class directly
        if (!this.$refs['leading-icon'] && this.haveleadingIcon) {
          const item = this.$slots['leading-icon'][0];
          (item.elm || item).classList.remove(className);
        }
      },

      setPrimaryActionAttr: (attr, value) => {
        this.$set(this.primaryAttrs, attr, value);
      },
      setStyleProperty: (property, value) =>
        this.$set(this.styles, property, value),
      setTrailingActionAttr: (attr, value) => {
        if (this.trailingAction_) {
          this.trailingAction_.setAttribute(attr, value);
        }
      },
    });

    this.foundation.init();

    this.primaryAttrs.tabindex = this.isFilter ? 0 : -1;

    if (
      this.shouldRemoveOnTrailingIconClick !==
      this.foundation.getShouldRemoveOnTrailingIconClick()
    ) {
      this.foundation.setShouldRemoveOnTrailingIconClick(
        this.shouldRemoveOnTrailingIconClick,
      );
    }

    this.ripple = new RippleBase(this, {
      computeBoundingRect: () => this.foundation.getDimensions(),
    });
    this.ripple.init();
  },
  beforeDestroy() {
    this.ripple.destroy();
    if (this.trailingAction_) {
      this.trailingAction_.destroy();
    }
    this.foundation.destroy();
  },

  render(createElement) {
    const {
      $scopedSlots: scopedSlots,
      haveleadingIcon,
      havetrailingIcon,
      isFilter,
      primaryAttrs,
    } = this;

    const role = isFilter ? 'checkbox' : 'button';

    const on = {
      click: evt => this.foundation.handleInteraction(evt),
      keydown: evt => this.foundation.handleInteraction(evt),
      transitionend: evt => this.foundation.handleTransitionEnd(evt),
      focusin: evt => this.foundation.handleFocusIn(evt),
      focusout: evt => this.foundation.handleFocusOut(evt),
    };
    if (this.trailingAction_) {
      on[INTERACTION_EVENT$1] = evt =>
        this.foundation.handleTrailingIconInteraction(evt);
    }

    return createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        attrs: { role: 'row' },
        on,
      },
      [
        createElement('div', { class: { 'mdc-chip__ripple': 1 } }),
        haveleadingIcon && this.renderLeadingIcon(createElement),
        isFilter && createElement(mcwChipCheckmark, { ref: 'checkmarkEl' }),

        createElement('span', { attrs: { role: 'gridcell' } }, [
          createElement(
            'span',
            {
              attrs: { role, tabindex: 0, ...primaryAttrs },
              class: { 'mdc-chip__primary-action': 1 },
              ref: 'primaryAction',
            },
            [
              createElement(
                'span',
                {
                  class: ['mdc-chip__text'],
                },
                scopedSlots.default && scopedSlots.default(),
              ),
            ],
          ),
        ]),
        havetrailingIcon && this.renderTrailingIcon(createElement),
      ],
    );
  },
};

var chips = BasePlugin({
  mcwChip,
  mcwChipSet,
  mcwChipCheckmark,
});

var mcwDataTable = {
  name: 'mcw-data-table',
  data() {
    return {};
  },
  methods: {
    getRows() {
      return this.foundation.getRows();
    },
    layout() {
      this.foundation.layout();
    },
    getRowByIndex_(index) {
      return this.getRows()[index];
    },

    getRowIdByIndex_(index) {
      return this.getRowByIndex_(index).getAttribute(
        strings$4.DATA_ROW_ID_ATTR,
      );
    },
  },
  mounted() {
    this.checkboxFactory_ = el => new MDCCheckbox(el);

    const { cssClasses, events, strings } = test;
    const adapter = {
      addClassAtRowIndex: (rowIndex, className) =>
        this.getRows()[rowIndex].classList.add(className),
      getRowCount: () => this.getRows().length,
      getRowElements: () =>
        [].slice.call(this.$el.querySelectorAll(strings.ROW_SELECTOR)),
      getRowIdAtIndex: rowIndex =>
        this.getRows()[rowIndex].getAttribute(strings.DATA_ROW_ID_ATTR),
      getRowIndexByChildElement: el => {
        return this.getRows().indexOf(closest(el, strings.ROW_SELECTOR));
      },
      getSelectedRowCount: () =>
        this.$el.querySelectorAll(strings.ROW_SELECTED_SELECTOR).length,
      isCheckboxAtRowIndexChecked: rowIndex =>
        this.rowCheckboxList_[rowIndex].checked,
      isHeaderRowCheckboxChecked: () => this.headerRowCheckbox_.checked,
      isRowsSelectable: () =>
        !!this.$el.querySelector(strings.ROW_CHECKBOX_SELECTOR),
      notifyRowSelectionChanged: data => {
        this.$emit(
          events.ROW_SELECTION_CHANGED,
          {
            row: this.getRowByIndex_(data.rowIndex),
            rowId: this.getRowIdByIndex_(data.rowIndex),
            rowIndex: data.rowIndex,
            selected: data.selected,
          },
          /** shouldBubble */ true,
        );
      },
      notifySelectedAll: () =>
        this.$emit(events.SELECTED_ALL, {}, /** shouldBubble */ true),
      notifyUnselectedAll: () =>
        this.$emit(events.UNSELECTED_ALL, {}, /** shouldBubble */ true),
      registerHeaderRowCheckbox: () => {
        if (this.headerRowCheckbox_) {
          this.headerRowCheckbox_.destroy();
        }

        const checkboxEl = this.$el.querySelector(
          strings.HEADER_ROW_CHECKBOX_SELECTOR,
        );
        this.headerRowCheckbox_ = this.checkboxFactory_(checkboxEl);
      },
      registerRowCheckboxes: () => {
        if (this.rowCheckboxList_) {
          this.rowCheckboxList_.forEach(checkbox => checkbox.destroy());
        }

        this.rowCheckboxList_ = [];
        this.getRows().forEach(rowEl => {
          const checkbox = this.checkboxFactory_(
            rowEl.querySelector(strings.ROW_CHECKBOX_SELECTOR),
          );
          this.rowCheckboxList_.push(checkbox);
        });
      },
      removeClassAtRowIndex: (rowIndex, className) => {
        this.getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: (rowIndex, attr, value) => {
        this.getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: checked => {
        this.headerRowCheckbox_.checked = checked;
      },
      setHeaderRowCheckboxIndeterminate: indeterminate => {
        this.headerRowCheckbox_.indeterminate = indeterminate;
      },
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
        this.rowCheckboxList_[rowIndex].checked = checked;
      },
    };

    this.foundation = new MDCDataTableFoundation(adapter);
    this.foundation.init();

    this.headerRow_ = this.$el.querySelector(`.${cssClasses.HEADER_ROW}`);
    this.handleHeaderRowCheckboxChange_ = () =>
      this.foundation.handleHeaderRowCheckboxChange();
    this.headerRow_.addEventListener(
      'change',
      this.handleHeaderRowCheckboxChange_,
    );

    this.content_ = this.$el.querySelector(`.${cssClasses.CONTENT}`);
    this.handleRowCheckboxChange_ = event =>
      this.foundation.handleRowCheckboxChange(event);
    this.content_.addEventListener('change', this.handleRowCheckboxChange_);

    this.layout();
  },
  beforeDestroy() {
    this.headerRow_.removeEventListener(
      'change',
      this.handleHeaderRowCheckboxChange_,
    );
    this.content_.removeEventListener('change', this.handleRowCheckboxChange_);

    if (this.headerRowCheckbox_) {
      this.headerRowCheckbox_.destroy();
    }
    if (this.rowCheckboxList_) {
      this.rowCheckboxList_.forEach(checkbox => checkbox.destroy());
    }
    this.foundation.destroy();
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    return createElement(
      'div',
      {
        class: ['mdc-data-table'],
        attrs: {},
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var dataTable = BasePlugin({
  mcwDataTable,
});

const BASE = 'mdc-dialog';
const cssClasses = {
  BASE,
  CONTAINER: `${BASE}__container`,
  SURFACE: `${BASE}__surface`,
  TITLE: `${BASE}__title`,
  CONTENT: `${BASE}__content`,
  ACTIONS: `${BASE}__actions`,
  BUTTON: `${BASE}__button`,
  DEFAULT_BUTTON: `${BASE}__button--default`,
  SCRIM: `${BASE}__scrim`,
};

const LAYOUT_EVENTS = ['resize', 'orientationchange'];

/* eslint-disable quote-props */

var mcwDialog = {
  name: 'mcw-dialog',
  components: {
    mcwButton: mcwButton,
  },
  mixins: [VMAUniqueIdMixin],
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    autoStackButtons: Boolean,
    escapeKeyAction: String,
    scrollable: Boolean,
    open: Boolean,
    role: String,
    scrimClickAction: { type: String, default: 'close' },
    tag: { type: String, default: 'div' },
    id: { type: String, default: 'mcw-dialog' },
  },
  data() {
    return {
      labelledBy: null,
      describedBy: null,
      classes: { 'mdc-dialog': 1 },
      styles: {},
    };
  },
  watch: {
    open: 'onOpen_',
  },

  mounted() {
    const strings = MDCDialogFoundation.strings;

    const { open, autoStackButtons, escapeKeyAction, scrimClickAction } = this;

    this.buttons_ = [].slice.call(this.$el.querySelectorAll(cssClasses.BUTTON));
    this.defaultButton = this.$el.querySelector(
      `[${strings.BUTTON_DEFAULT_ATTRIBUTE}]`,
    );

    this.focusTrapFactory_ = el => new FocusTrap(el);

    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetMatches: (target, selector) => matches$1(target, selector),
      trapFocus: initialFocusEl => this.focusTrap && this.focusTrap.trapFocus(),
      releaseFocus: () => this.focusTrap && this.focusTrap.releaseFocus(),
      getInitialFocusEl: () => this.getInitialFocusEl_(),
      isContentScrollable: () =>
        !!this.$refs.contentEl && isScrollable(this.$refs.contentEl),
      areButtonsStacked: () => areTopsMisaligned(this.buttons_),

      getActionFromEvent: event => {
        const elem = closest$1(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
        return elem && elem.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: () => {
        const defaultButton = this.defaultButton;
        if (defaultButton) {
          defaultButton.click();
        }
      },
      reverseButtons: () => {
        const buttons = this.buttons_;
        return (
          buttons &&
          buttons
            .reverse()
            .forEach(
              button =>
                button.parentElement &&
                button.parentElement.appendChild(button),
            )
        );
      },
      notifyOpening: () => {
        this.$emit(strings.OPENING_EVENT, {});
        LAYOUT_EVENTS.forEach(evt =>
          window.addEventListener(evt, this.handleLayout),
        );
        document.addEventListener('keydown', this.handleDocumentKeyDown);
      },
      notifyOpened: () => this.$emit(strings.OPENED_EVENT, {}),
      notifyClosing: action => {
        this.$emit('change', false);
        // console.log(action)
        this.$emit(strings.CLOSING_EVENT, action ? { action } : {});
        LAYOUT_EVENTS.forEach(evt =>
          window.removeEventListener(evt, this.handleLayout),
        );
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
      },
      notifyClosed: action => {
        this.$emit(strings.CLOSED_EVENT, action ? { action } : {});
      },
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
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    handleLayout() {
      this.foundation.layout();
    },
    handleDocumentKeyDown(e) {
      this.foundation.handleDocumentKeydown(e);
    },
    getInitialFocusEl_() {
      return document.querySelector(
        `[${MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE}]`,
      );
    },
    onOpen_(value) {
      if (value) {
        if (this.$refs.container) {
          this.focusTrap = createFocusTrapInstance(
            this.$el,
            this.focusTrapFactory_,
            this.getInitialFocusEl_() || void 0,
          );
        }
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    onCancel() {
      if (this.$listeners['validateCancel']) {
        this.$emit('validateCancel', {
          cancel: (notify = true) => {
            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              this.$emit('change', false);
            }
            this.foundation.cancel(notify);
          },
        });
      } else {
        this.foundation.cancel(true);
      }
    },
    onAccept() {
      if (this.$listeners['validate']) {
        this.$emit('validate', {
          accept: (notify = true) => {
            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              this.$emit('change', false);
            }
            this.foundation.accept(notify);
          },
        });
      } else {
        this.foundation.accept(true);
      }
    },
  },

  render(createElement) {
    const mdt =
      (this.$scopedSlots.default && this.$scopedSlots.default()) || [];

    mdt.forEach(
      ({ tag: childTag, data: { props, class: classes, attrs } = {} }, i) => {
        if (childTag === 'template' && props.tag) {
          const kind = props.tag.split('-').pop();

          mdt[i] = createElement(
            props.tag,
            {
              class: classes,
              attrs,
              scopedSlots: {
                [kind]: ({ id, content }) => {
                  if (kind === 'title' || kind === 'content') {
                    const cdata = content.data || (content.data = {});
                    const cattrs = cdata.attrs || (cdata.attrs = {});
                    cattrs.id = id || `${this.id}-${kind}`;
                    this[kind === 'title' ? 'labelledBy' : 'describedBy'] =
                      cattrs.id;
                  }
                  if (kind === 'content') {
                    const cdata = content.data || (content.data = {});
                    cdata.ref = 'contentEl';
                  }
                  return content;
                },
              },
            },
            mdt[i].children,
          );
        }
      },
    );

    return createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        attrs: {
          id: this.id,
        },
        ref: 'root',
        on: {
          click: evt => this.foundation.handleClick(evt),
          keydown: evt => this.foundation.handleKeydown(evt),
        },
      },
      [
        createElement(
          'div',
          {
            class: cssClasses.CONTAINER,
            ref: 'container',
          },
          [
            createElement(
              'div',
              {
                class: cssClasses.SURFACE,
                attrs: {
                  'aria-modal': 'true',
                  'aria-labelledby': this.labelledBy,
                  'aria-describedby': this.describedBy,
                  role: 'alertdialog',
                },
              },
              this.$scopedSlots.default && this.$scopedSlots.default(),
            ),
          ],
        ),

        createElement('div', { class: 'mdc-dialog__scrim' }),
      ],
    );
  },
};

var mcwDialogButton = {
  name: 'mcw-dialog-button',
  functional: true,
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean,
  },

  render(
    createElement,
    {
      props: { action, isDefault, isInitialFocus },
      data: { staticClass, attrs },
      scopedSlots,
    },
  ) {
    return createElement(
      'mcw-button',
      {
        class: [staticClass, cssClasses.BUTTON],
        attrs: {
          ...attrs,
          'data-mdc-dialog-action': action,
          'data-mdc-dialog-button-default': isDefault,
          'data-mdc-dialog-initial-focus': isInitialFocus,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwDialogContent = {
  name: 'mcw-dialog-content',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },

  render(createElement, context) {
    const {
      scopedSlots: slots,
      props: { id, tag },
      data: { class: classes, staticClass, attrs },
    } = context;

    // if we have the scope, just defer to it
    if (slots.content) {
      const content = createElement(
        tag,
        { class: classes, attrs },
        slots.default(),
      );
      return slots.content({ id, content });
    }

    // if no scope, parent will create it
    // note, can't use same element type as that would be an infinite loop
    return createElement(
      'template',
      {
        props: { tag: 'mdc-dialog-content' },
        attrs,
        class: [staticClass, cssClasses.CONTENT],
      },
      slots.default && slots.default(),
    );
  },
};

var mcwDialogFooter = {
  name: 'mcw-dialog-footer',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'footer';
      },
    },
  },

  render(createElement, context) {
    const {
      scopedSlots: slots,
      props: { id, tag },
      data: { class: classes, staticClass, attrs },
    } = context;

    // if we have the scope, just defer to it
    if (slots.footer) {
      const content = createElement(
        tag,
        { class: classes, attrs },
        slots.default(),
      );
      return slots.footer({ id, content });
    }

    // if no scope, parent will create it
    // note, can't use same element type as that would be an infinite loop
    return createElement(
      'template',
      {
        props: { tag: 'mdc-dialog-footer' },
        attrs,
        class: [staticClass, cssClasses.ACTIONS],
      },
      slots.default && slots.default(),
    );
  },
};

var mcwDialogTitle = {
  name: 'mcw-dialog-title',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'h2';
      },
    },
    id: {},
  },

  render(createElement, context) {
    const {
      scopedSlots: slots,
      props: { id, tag },
      data: { class: classes, staticClass, attrs },
    } = context;

    // if we have the scope, just defer to it
    if (slots.title) {
      const content = createElement(
        tag,
        { class: classes, attrs },
        slots.default(),
      );
      return slots.title({ id, content });
    }

    // if no scope, parent will create it
    // note, can't use same element type as that would be an infinite loop
    return createElement(
      'template',
      {
        props: { tag: 'mdc-dialog-title' },
        attrs,
        class: [staticClass, cssClasses.TITLE],
      },
      slots.default && slots.default(),
    );
  },
};

var dialog = BasePlugin({
  mcwDialog,
  mcwDialogTitle,
  mcwDialogFooter,
  mcwDialogButton,
  mcwDialogContent,
});

var mcwDrawer = {
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

    this.focusTrapFactory_ = el => new FocusTrap$1(el);

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
      trapFocus: () => this.focusTrap_.trapFocus(),
      releaseFocus: () => this.focusTrap_.releaseFocus(),
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
        this.focusTrap_ = createFocusTrapInstance$1(
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

var mcwDrawerDivider = {
  name: 'mcw-drawer-divider',
  functional: true,
  render(createElement) {
    return createElement('hr', {
      class: {
        'mdc-list-divider': 1,
      },
    });
  },
};

var mcwDrawerHeader = {
  name: 'mcw-drawer-header',
  functional: true,
  render(createElement, { scopedSlots }) {
    return createElement(
      'div',
      {
        class: 'mdc-drawer__header',
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwDrawerItem = {
  name: 'mcw-drawer-item',
  inject: ['mcwDrawer'],
  mixins: [DispatchEventMixin, CustomLinkMixin],
  props: {
    startIcon: String,
    modalClose: {
      type: Boolean,
      default: true,
    },
    activated: Boolean,
    exactActiveClass: {
      type: String,
      default: 'mdc-list-item--activated',
    },
  },
  data() {
    return {
      classes: {
        'mdc-list-item': 1,
        'mdc-drawer-item': 1,
      },
      styles: {},
    };
  },

  computed: {
    mylisteners() {
      return {
        ...this.$listeners,
        click: e => {
          this.mcwDrawer.isModal && this.modalClose && this.mcwDrawer.close();
          this.dispatchEvent(e);
        },
      };
    },
    itemClasses() {
      return {
        'mdc-list-item--activated': this.activated,
      };
    },
    hasStartDetail() {
      return this.startIcon || this.$slots['start-detail'];
    },
  },
  mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy() {
    this.ripple && this.ripple.destroy();
    this.ripple = null;
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const nodes = [
      createElement(
        'span',
        { class: { 'mdc-list-item__text': 1 } },
        scopedSlots.default && scopedSlots.default(),
      ),
    ];

    if (this.hasStartDetail) {
      nodes.unshift(
        createElement('span', { class: { 'mdc-list-item__graphic': 1 } }, [
          this.$slots['start-detail'] ||
            createElement(
              'i',
              {
                class: { 'material-icons': 1 },
                attrs: { 'aria-hidden': 'true' },
              },
              this.startIcon,
            ),
        ]),
      );
    }

    return createElement(
      'custom-link',
      {
        class: { ...this.classes, ...this.itemClasses },
        styles: this.styles,
        attrs: { link: this.link },
        on: this.mylisteners,
      },
      nodes,
    );
  },
};

var mcwDrawerList = {
  name: 'mcw-drawer-list',
  functional: true,
  props: {
    dense: Boolean,
  },
  render(
    createElement,
    {
      props: { dense },
      scopedSlots,
    },
  ) {
    return createElement(
      'nav',
      {
        class: {
          'mdc-drawer-list': 1,
          'mdc-list': 1,
          'mdc-list--dense': dense,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var drawer = BasePlugin({
  mcwDrawer,
  mcwDrawerHeader,
  mcwDrawerList,
  mcwDrawerItem,
  mcwDrawerDivider,
});

var mcwFAB = {
  name: 'mcw-fab',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String,
  },
  data() {
    return {
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': this.mini,
        'mdc-fab--extended': this.label || this.$slots.default,
        'mdc-fab--exited': this.exited,
      },
    };
  },
  watch: {
    icon() {
      this.$set(this.classes, 'material-icons', this.icon);
    },
    mini() {
      this.$set(this.classes, 'mdc-fab--mini', this.mini);
    },
    exited() {
      this.$set(this.classes, 'mdc-fab--exited', this.exited);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const nodes = [createElement('div', { class: { 'mdc-fab__ripple': 1 } })];

    const iconSlot = scopedSlots.icon && scopedSlots.icon();
    if (iconSlot) {
      const v0 = iconSlot[0];
      if (v0) {
        const { staticClass = '' } = v0.data;
        const haveClasses =
          staticClass && staticClass.indexOf('mdc-fab__icon') > -1;
        if (!haveClasses) {
          v0.data.staticClass = `mdc-fab__icon ${staticClass}`;
        }
      }
      nodes.push(iconSlot);
    } else {
      nodes.push(
        createElement(
          'span',
          { class: ['mdc-fab__icon', 'material-icons'] },
          this.icon,
        ),
      );
    }

    const labelOrSlot =
      this.label || (scopedSlots.default && scopedSlots.default());
    if (labelOrSlot) {
      nodes.push(
        createElement('span', { class: { 'mdc-fab__label': 1 } }, labelOrSlot),
      );
    }

    return createElement(
      'custom-button',
      {
        class: this.classes,
        styles: this.styles,
        attrs: { href: this.href, link: this.link },
        on: this.listeners,
      },
      nodes,
    );
  },
};

var fab = BasePlugin({
  mcwFAB,
});

var mcwFloatingLabel = {
  name: 'mcw-floating-label',
  data() {
    return {
      labelClasses: { 'mdc-floating-label': true },
    };
  },

  mounted() {
    this.foundation = new MDCFloatingLabelFoundation({
      addClass: className => {
        this.$set(this.labelClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.labelClasses, className);
      },
      getWidth: () => this.$el.scrollWidth,
      registerInteractionHandler: (evtType, handler) => {
        this.$el.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: (evtType, handler) => {
        this.$el.removeEventListener(evtType, handler);
      },
    });
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },

  methods: {
    getWidth() {
      return this.foundation.getWidth();
    },

    float(shouldFloat) {
      this.foundation.float(shouldFloat);
    },

    shake(shouldShake) {
      this.foundation.shake(shouldShake);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    return createElement(
      'span',
      { class: this.labelClasses },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var floatingLabel = BasePlugin({
  mcwFloatingLabel,
});

/* eslint-disable quote-props */

var mcwIconButton = {
  name: 'mcw-icon-button',
  model: {
    prop: 'isOn',
    event: 'change',
  },
  props: {
    isOn: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      classes: {
        'mdc-icon-button': 1,
        'material-icons': 1,
      },
      styles: {},
    };
  },

  watch: {
    isOn: 'onOn_',
  },

  mounted() {
    const { CHANGE_EVENT } = MDCIconButtonToggleFoundation.strings;
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => Boolean(this.classes[className]),
      setAttr: (attrName, attrValue) =>
        this.$el.setAttribute(attrName, attrValue),
      getAttr: attrName => this.$el.getAttribute(attrName),
      notifyChange: evtData => {
        this.$emit(CHANGE_EVENT, evtData);
        this.$emit('change', evtData.isOn);
      },
    };

    this.foundation = new MDCIconButtonToggleFoundation(adapter);
    this.foundation.init();

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
    });
    this.ripple.init();
    this.foundation.toggle(this.isOn);
  },

  beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
  methods: {
    onOn_(isOn) {
      if (this.isOn !== isOn) {
        this.foundation.toggle(isOn);
      }
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const isLink = Boolean(this.$attrs.href);
    const tag = isLink ? 'a' : 'button';
    return createElement(
      tag,
      {
        class: this.classes,
        style: this.styles,
        on: { click: evt => this.foundation.handleClick(evt) },
        attrs: {
          ...this.$attrs,
          'aria-pressed': 'false',
          disabled: this.disabled,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwIconToggle = {
  name: 'mcw-icon-toggle',
  functional: true,
  props: {
    isOn: Boolean,
  },

  render(
    createElement,
    {
      props: { isOn },
      scopedSlots,
    },
  ) {
    return createElement(
      'div',
      {
        class: {
          'mdc-icon-button__icon': true,
          'mdc-icon-button__icon--on': isOn,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var iconButton = BasePlugin({
  mcwIconButton,
  mcwIconToggle,
});

const spanOptions = {
  type: [String, Number],
  default: null,
  validator: function(value) {
    const num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  },
};

var mcwLayoutCell = {
  name: 'mcw-layout-cell',
  functional: true,
  props: {
    span: spanOptions,
    order: spanOptions,
    phone: spanOptions,
    tablet: spanOptions,
    desktop: spanOptions,
    align: {
      type: String,
      validator: function(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1;
      },
    },
  },

  render(
    createElement,
    {
      props: { span, order, phone, tablet, desktop, align },
      scopedSlots,
      data: { staticClass = '' },
    },
  ) {
    const classes = {
      'mdc-layout-cell': 1,
      'mdc-layout-grid__cell': 1,
    };
    staticClass.split(' ').forEach(c => (classes[c] = 1));

    if (span) {
      classes[`mdc-layout-grid__cell--span-${span}`] = 1;
    }

    if (order) {
      classes[`mdc-layout-grid__cell--order-${order}`] = 1;
    }

    if (phone) {
      classes[`mdc-layout-grid__cell--span-${phone}-phone`] = 1;
    }

    if (tablet) {
      classes[`mdc-layout-grid__cell--span-${tablet}-tablet`] = 1;
    }

    if (desktop) {
      classes[`mdc-layout-grid__cell--span-${desktop}-desktop`] = 1;
    }

    if (align) {
      classes[`mdc-layout-grid__cell--align-${align}`] = 1;
    }

    return createElement(
      'div',
      {
        class: classes,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwLayoutGrid = {
  name: 'mcw-layout-grid',
  props: {
    'fixed-column-width': Boolean,
    'align-left': Boolean,
    'align-right': Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { fixedColumnWidth, alignLeft, alignRight },
      data: { attrs, staticClass, staticStyle },
      scopedSlots,
    },
  ) {
    return createElement(
      'div',
      {
        class: [
          staticClass,
          {
            'mdc-layout-grid': true,
            'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
            'mdc-layout-grid--align-left': alignLeft,
            'mdc-layout-grid--align-right': alignRight,
          },
        ],
        style: staticStyle,
        attrs,
      },
      [
        createElement(
          'div',
          {
            class: ['mdc-layout-grid__inner'],
          },
          scopedSlots.default && scopedSlots.default(),
        ),
      ],
    );
  },
};

var mcwLayoutInnerGrid = {
  name: 'mcw-layout-inner-grid',
  functional: true,
  render(createElement, { scopedSlots }) {
    return createElement(
      'div',
      {
        class: {
          'mdc-layout-inner-grid': 1,
          'mdc-layout-grid__inner': 1,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var layoutGrid = BasePlugin({
  mcwLayoutGrid,
  mcwLayoutCell,
  mcwLayoutInnerGrid,
});

var mcwLineRipple = {
  name: 'mcw-line-ripple',

  props: {
    rippleCenter: { type: [Number, String], default: 0 },
    active: Boolean,
  },
  data() {
    return {
      lineClasses: { 'mdc-line-ripple': 1 },
      lineStyles: {},
    };
  },

  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.lineClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.lineClasses, className);
      },
      hasClass: className => {
        return Boolean(this.lineClasses[className]);
      },
      setStyle: (name, value) => {
        this.$set(this.lineStyles, name, value);
      },
    };

    // note: do not call the property 'foundation' as the tests will then
    // expext all methods to be implemented, and we handle transitionend locally
    this.foundation_ = new MDCLineRippleFoundation(adapter);
    this.foundation_.init();
  },

  beforeDestroy() {
    this.foundation_.destroy();
  },

  methods: {
    setRippleCenter(xCoordinate) {
      this.foundation_.setRippleCenter(xCoordinate);
    },
    activate() {
      this.foundation_.activate();
    },

    deactivate() {
      this.foundation_.deactivate();
    },
  },
  render(createElement) {
    return createElement('span', {
      class: this.lineClasses,
      style: this.lineStyles,
      on: { transitionend: evt => this.foundation_.handleTransitionEnd(evt) },
    });
  },
};

var lineRipple = BasePlugin({
  mcwLineRipple,
});

const ProgressPropType$1 = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  },
};

var mcwLinearProgress = {
  name: 'mcw-linear-progress',
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    reversed: Boolean,
    progress: ProgressPropType$1,
    buffer: ProgressPropType$1,
    bufferingDots: { type: Boolean, default: true },
    tag: { type: String, default: 'div' },
  },
  data() {
    return {
      classes: {
        'mdc-linear-progress': 1,
      },
      bufferbarStyles: {},
      primaryStyles: {},
      rootAttrs: {},
    };
  },
  watch: {
    open(nv) {
      if (nv) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    progress(nv) {
      this.foundation.setProgress(Number(nv));
    },
    buffer(nv) {
      this.foundation.setBuffer(Number(nv));
    },
    indeterminate(nv) {
      this.foundation.setDeterminate(!nv);
    },
    reversed(nv) {
      this.foundation.setReverse(nv);
    },
  },

  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.classes, className, true);
      },
      forceLayout: () => this.$el.offsetWidth,
      setBufferBarStyle: (styleProperty, value) => {
        this.$set(this.bufferbarStyles, styleProperty, value);
      },
      setPrimaryBarStyle: (styleProperty, value) => {
        this.$set(this.primaryStyles, styleProperty, value);
      },
      hasClass: className => this.$el.classList.contains(className),
      removeClass: className => this.$delete(this.classes, className),
      setAttribute: (attributeName, value) => {
        this.$set(this.rootAttrs, attributeName, value);
      },
      removeAttribute: attributeName => {
        this.$delete(this.rootAttrs, attributeName);
      },
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
  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement) {
    const nodes = [
      createElement(
        'div',
        {
          ref: 'buffer',
          class: 'mdc-linear-progress__buffer',
        },
        [
          createElement('div', {
            class: 'mdc-linear-progress__buffer-bar',
            style: this.bufferbarStyles,
          }),
          createElement('div', {
            class: 'mdc-linear-progress__buffer-dots',
          }),
        ],
      ),
      createElement(
        'div',
        {
          ref: 'primary',
          class: 'mdc-linear-progress__bar mdc-linear-progress__primary-bar',
          style: this.primaryStyles,
        },
        [
          createElement('span', {
            class: 'mdc-linear-progress__bar-inner',
          }),
        ],
      ),
      createElement(
        'div',
        {
          ref: 'secondary',
          class: 'mdc-linear-progress__bar  mdc-linear-progress__secondary-bar',
        },
        [
          createElement('span', {
            class: 'mdc-linear-progress__bar-inner',
          }),
        ],
      ),
    ];

    return createElement(
      this.tag,
      {
        class: this.classes,
        attrs: { role: 'progressbar', ...this.rootAttrs },
      },
      nodes,
    );
  },
};

var linearProgress = BasePlugin({
  mcwLinearProgress,
});

const ARIA_ORIENTATION = 'aria-orientation';
const VERTICAL = 'vertical';
const RADIO_CHECKED_RADIO_SELECTOR = `input[type="radio"][checked="checked"]`;

const { strings, cssClasses: cssClasses$1 } = MDCListFoundation;

var mcwList = {
  name: 'mcw-list',
  model: {
    prop: 'selectedIndex',
    event: 'change',
  },
  props: {
    nonInteractive: { type: Boolean, default: false },
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    singleSelection: Boolean,
    wrapFocus: Boolean,
    selectedIndex: { type: [Number, Array] },
    tag: { type: String, default: 'ul' },
    [ARIA_ORIENTATION]: { type: String, default: VERTICAL },
  },

  data() {
    return {
      listn: 0,
    };
  },

  watch: {
    singleSelection(nv) {
      this.foundation.setSingleSelection(nv);
    },
    selectedIndex(nv) {
      if (Array.isArray(nv)) {
        this.foundation.setSelectedIndex(nv);
      } else if (this.selectedIndex != nv) {
        this.foundation.setSelectedIndex(nv);
      }
    },
    wrapFocus(nv) {
      this.foundation.setWrapFocus(nv);
    },
    ariaOrientation(nv) {
      this.foundation.setVerticalOrientation(nv === VERTICAL);
    },
  },
  computed: {
    selIndex: {
      get() {
        return this.selectedIndex;
      },
      set(nv) {
        this.$emit('change', nv);
      },
    },
    classes() {
      return {
        'mdc-list': 1,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatarList,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--non-interactive': this.nonInteractive,
      };
    },
    listElements() {
      // eslint-disable-next-line no-unused-vars
      const xx = this.listn; // for dependency

      return [].slice.call(
        this.$el.querySelectorAll(`.${cssClasses$1.LIST_ITEM_CLASS}`),
      );
    },
  },

  methods: {
    handleFocusInEvent(evt, index) {
      this.foundation.handleFocusIn(evt, index);
    },
    handleFocusOutEvent(evt, index) {
      this.foundation.handleFocusOut(evt, index);
    },

    handleKeydownEvent(evt) {
      const index = this.getListItemIndex(evt);
      const target = evt.target;
      this.foundation.handleKeydown(
        evt,
        target.classList.contains(cssClasses$1.LIST_ITEM_CLASS),
        index,
      );
    },
    handleClickEvent(evt) {
      const index = this.getListItemIndex(evt);
      const target = evt.target;

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
      this.foundation.handleClick(index, toggleCheckbox);
    },

    layout() {
      this.foundation.setVerticalOrientation(this.ariaOrientation == VERTICAL);

      // List items need to have at least tabindex=-1 to be focusable.
      [].slice
        .call(this.$el.querySelectorAll('.mdc-list-item:not([tabindex])'))
        .forEach(ele => {
          ele.setAttribute('tabindex', -1);
        });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice
        .call(this.$el.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS))
        .forEach(ele => ele.setAttribute('tabindex', -1));

      this.foundation.layout();
    },

    initializeListType() {
      const checkboxListItems = this.$el.querySelectorAll(
        strings.ARIA_ROLE_CHECKBOX_SELECTOR,
      );
      const singleSelectedListItem = this.$el.querySelector(`
        .${cssClasses$1.LIST_ITEM_ACTIVATED_CLASS},
        .${cssClasses$1.LIST_ITEM_SELECTED_CLASS}
      `);
      let radioSelectedListItem = this.$el.querySelector(
        strings.ARIA_CHECKED_RADIO_SELECTOR,
      );

      if (!radioSelectedListItem) {
        const radioSelectedInput = this.$el.querySelector(
          RADIO_CHECKED_RADIO_SELECTOR,
        );
        if (radioSelectedInput) {
          radioSelectedListItem = closest(
            radioSelectedInput,
            `[role="radio"].${cssClasses$1.LIST_ITEM_CLASS}`,
          );
        }
      }

      if (checkboxListItems.length) {
        const preselectedItems = this.$el.querySelectorAll(
          strings.ARIA_CHECKED_CHECKBOX_SELECTOR,
        );
        this.selIndex = [].map.call(preselectedItems, listItem =>
          this.listElements.indexOf(listItem),
        );
      } else if (singleSelectedListItem) {
        if (
          singleSelectedListItem.classList.contains(
            cssClasses$1.LIST_ITEM_ACTIVATED_CLASS,
          )
        ) {
          this.foundation.setUseActivatedClass(true);
        }

        this.singleSelection = true;
        this.selIndex = this.listElements.indexOf(singleSelectedListItem);
      } else if (radioSelectedListItem) {
        const selIndex = this.listElements.indexOf(radioSelectedListItem);
        this.foundation.setSelectedIndex(selIndex);
        this.selIndex = selIndex;

        radioSelectedListItem.setAttribute('tabindex', '0');
      }
    },

    getListItemIndex(evt) {
      const eventTarget = evt.target;
      const nearestParent = closest(
        eventTarget,
        `.${cssClasses$1.LIST_ITEM_CLASS}, .${cssClasses$1.ROOT}`,
      );

      // Get the index of the element if it is a list item.
      if (
        nearestParent &&
        matches(nearestParent, `.${cssClasses$1.LIST_ITEM_CLASS}`)
      ) {
        return this.listElements.indexOf(nearestParent);
      }

      return -1;
    },
  },
  mounted() {
    const { wrapFocus } = this;

    const adapter = {
      addClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: index => {
        const element = this.listElements[index];
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: (index, attr) =>
        this.listElements[index].getAttribute(attr),

      getFocusedElementIndex: () =>
        this.listElements.indexOf(document.activeElement),

      getListItemCount: () => this.listElements.length,

      hasCheckboxAtIndex: index => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },

      hasRadioAtIndex: index => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.RADIO_SELECTOR);
      },

      isCheckboxCheckedAtIndex: index => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector(strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },

      isFocusInsideList: () => {
        return this.$el.contains(document.activeElement);
      },

      isRootFocused: () => document.activeElement === this.$el,

      listItemAtIndexHasClass: (index, className) => {
        this.listElements[index].classList.contains(className);
      },

      notifyAction: index => {
        emitCustomEvent(
          this.$el,
          strings.ACTION_EVENT,
          { index },
          /** shouldBubble */ true,
        );

        if (Array.isArray(this.selectedIndex)) {
          this.$emit('change', this.foundation.getSelectedIndex());
        } else {
          this.$emit('change', index);
        }
      },

      removeClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.remove(className);
        }
      },

      setAttributeForElementIndex: (index, attr, value) => {
        const element = this.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },

      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector(
          strings.CHECKBOX_RADIO_SELECTOR,
        );
        toggleEl && (toggleEl.checked = isChecked);

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl && toggleEl.dispatchEvent(event);
      },

      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = this.listElements[listItemIndex];
        const listItemChildren = [].slice.call(
          element.querySelectorAll(strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),
        );
        listItemChildren.forEach(el =>
          el.setAttribute('tabindex', tabIndexValue),
        );
      },
    };

    this.foundation = new MDCListFoundation(adapter);

    this.foundation.init();
    this.foundation.layout();
    this.initializeListType();

    this.foundation.setSingleSelection(this.singleSelection);

    if (
      this.singleSelection &&
      typeof this.selectedIndex === 'number' &&
      !isNaN(this.selectedIndex)
    ) {
      this.foundation.setSelectedIndex(this.selectedIndex);
    }

    this.foundation.setWrapFocus(wrapFocus);
    this.foundation.setVerticalOrientation(this[ARIA_ORIENTATION] === VERTICAL);

    this.layout();

    // the list content could change outside of this component
    // so use a mutation observer to trigger an update by
    // incrementing the dependency variable "listn" referenced
    // in the computed that selects the list elements
    this.slotObserver = new MutationObserver((mutationList, observer) => {
      this.listn++;
    });
    this.slotObserver.observe(this.$refs.listRoot, {
      childList: true,
      // subtree: true,
    });
  },

  beforeDestroy() {
    this.slotObserver.disconnect();
  },

  render(createElement) {
    const { tag, ariaOrientation, singleSelection, $scopedSlots: slots } = this;

    const attrs = { 'aria-orientation': ariaOrientation };
    if (singleSelection) {
      attrs.role = 'listbox';
    }

    return createElement(
      tag,
      {
        class: this.classes,
        attrs,
        on: {
          click: event => this.handleClickEvent(event),
          focusin: event => this.handleFocusInEvent(event),
          focusout: event => this.handleFocusOutEvent(event),
          keydown: event => this.handleKeydownEvent(event),
        },
        ref: 'listRoot',
      },
      slots.default && slots.default(),
    );
  },
};

var mcwListDivider = {
  name: 'mcw-list-divider',
  props: {
    inset: Boolean,
    padded: Boolean,
    role: {
      type: String,
      default() {
        return 'separator';
      },
    },
    tag: {
      type: String,
      default() {
        return 'li';
      },
    },
  },
  functional: true,
  render(
    createElement,
    {
      props: { tag, inset, padded, role, staticClass, attrs },
    },
  ) {
    return createElement(tag, {
      class: [
        'mdc-list-divider',
        staticClass,
        {
          'mdc-list-divider--inset': inset,
          'mdc-list-divider--padded': padded,
        },
      ],
      attrs: { ...attrs, role },
    });
  },
};

var mcwListGroupSubHeader = {
  name: 'mcw-list-group-sub-header',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'h3';
      },
    },
  },
  render(
    createElement,
    {
      scopedSlots,
      props: { tag },
      staticClass,
      attrs,
    },
  ) {
    return createElement(
      tag,
      {
        class: ['mdc-list-group__subheader', staticClass],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwListGroup = {
  name: 'mcw-list-group',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
  render(
    createElement,
    {
      props: { tag },
      scopedSlots,
      staticClass,
      attrs,
    },
  ) {
    return createElement(
      tag,
      {
        class: ['mdc-list-group', staticClass],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var list = BasePlugin({
  mcwList,
  mcwListDivider,
  mcwListGroup,
  mcwListGroupSubHeader,
});

var mcwMaterialIcon = {
  name: 'mcw-material-icon',
  props: {
    hasRipple: Boolean,
    icon: String,
    tag: { type: String, default: 'i' },
  },
  data() {
    return {
      classes: {
        'material-icons': true,
        'material-icons--ripple-surface': this.hasRipple,
      },
      styles: {}, // for ripple support
    };
  },

  mounted() {
    if (this.hasRipple) {
      this.ripple = new RippleBase(this, {
        isUnbounded: () => true,
      });
      this.ripple.init();
    }
  },

  beforeDestroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  },
  render(createElement) {
    const { tag } = this;
    return createElement(
      tag,
      {
        class: this.classes,
        on: this.$listeners,
        style: this.styles,
      },
      this.icon,
    );
  },
};

var materialIcon = BasePlugin({
  mcwMaterialIcon,
});

/* eslint-disable quote-props */

var mcwMenu = {
  name: 'mcw-menu',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: [Boolean, Object],
    'quick-open': Boolean,
    'anchor-corner': [String, Number],
    'anchor-margin': Object,
  },
  data() {
    return {
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true,
    };
  },
  watch: {
    open(nv) {
      this.menuOpen = nv;
    },
  },
  mounted() {
    this._previousFocus = undefined;
    const { cssClasses, strings } = MDCMenuFoundation;

    const adapter = {
      addClassToElementAtIndex: (index, className) => {
        const list = this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const list = this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const list = this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const list = this.items;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: (element, className) =>
        element.classList.contains(className),
      closeSurface: skipRestoreFocus => {
        this.$refs.menuSurface_.close(skipRestoreFocus);
        this.$emit('change', false);
      },

      getElementIndex: element => {
        return this.items.indexOf(element);
      },

      isSelectableItemAtIndex: index =>
        !!closest(this.items[index], `.${cssClasses.MENU_SELECTION_GROUP}`),
      getSelectedSiblingOfItemAtIndex: index => {
        const selectionGroupEl = closest(
          this.items[index],
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        );
        const selectedItemEl = selectionGroupEl.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`,
        );
        return selectedItemEl ? this.items.indexOf(selectedItemEl) : -1;
      },
      notifySelected: evtData => {
        emitCustomEvent(this.$el, strings.SELECTED_EVENT, {
          index: evtData.index,
          item: this.items[evtData.index],
        });

        this.$emit('select', {
          index: evtData.index,
          item: this.items[evtData.index],
        });
      },
      getMenuItemCount: () => this.items.length,
      focusItemAtIndex: index => this.items[index].focus(),
      focusListRoot: () =>
        this.$el.querySelector(strings.LIST_SELECTOR).focus(),
    };

    this.menuOpen = this.open;
    this.foundation = new MDCMenuFoundation(adapter);

    this.foundation.init();
  },
  beforeDestroy() {
    this._previousFocus = null;
    this.foundation.destroy();
  },

  computed: {
    items() {
      return this.$refs.list ? this.$refs.list.listElements : [];
    },
    surfaceOpen: {
      get() {
        return this.menuOpen;
      },
      set(value) {
        this.menuOpen = value;
      },
    },
    wrapFocus: {
      get() {
        return this.myWrapFocus;
      },
      set(nv) {
        this.myWrapFocus = nv;
      },
    },
  },

  methods: {
    listen(evtType, handler, options) {
      this.$el.addEventListener(evtType, handler, options);
    },
    unlisten(evtType, handler, options) {
      this.$el.removeEventListener(evtType, handler, options);
    },
    handleAction({ detail: { index } }) {
      this.foundation.handleItemAction(this.items[index]);
    },

    handleKeydown(evt) {
      this.foundation.handleKeydown(evt);
    },
    onChange(item) {
      this.menuOpen = item;
      this.$emit('change', item);
    },
    handleMenuSurfaceOpened() {
      this.foundation.handleMenuSurfaceOpened();
    },
    setDefaultFocusState(focusState) {
      this.foundation.setDefaultFocusState(focusState);
    },
    setAnchorCorner(corner) {
      this.$refs.menuSurface_.foundation.setAnchorCorner(corner);
    },
    setAnchorElement(element) {
      this.$refs.menuSurface_.setMenuSurfaceAnchorElement(element);
    },
    setSelectedIndex(index) {
      this.foundation.setSelectedIndex(index);
    },
    setAnchorMargin(margin) {
      this.$refs.menuSurface_.foundation.setAnchorMargin(margin);
    },
    getOptionByIndex(index) {
      const items = this.items;

      if (index < items.length) {
        return items[index];
      }
      return null;
    },
    setFixedPosition(isFixed) {
      this.$refs.menuSurface_.foundation.setFixedPosition(isFixed);
    },

    hoistMenuToBody() {
      this.$refs.menuSurface_.foundation.hoistMenuToBody();
    },

    setIsHoisted(isHoisted) {
      this.$refs.menuSurface_.foundation.setIsHoisted(isHoisted);
    },

    setAbsolutePosition(x, y) {
      this.$refs.menuSurface_.foundation.setAbsolutePosition(x, y);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    return createElement(
      'mcw-menu-surface',
      {
        class: { 'mdc-menu': 1 },
        ref: 'menuSurface_',
        attrs: { 'quick-open': this.quickOpen, open: this.menuOpen },
        on: {
          change: evt => this.onChange(evt),
          keydown: evt => this.handleKeydown(evt),
          'MDCMenuSurface:opened': evt => this.handleMenuSurfaceOpened(evt),
        },
        // nativeOn: { 'MDCList:action': evt => this.handleAction(evt) },
      },
      [
        createElement(
          'mcw-list',
          {
            ref: 'list',
            props: { wrapFocus: this.myWrapFocus },
            on: { change: index => this.handleAction({ detail: { index } }) },
          },
          scopedSlots.default && scopedSlots.default(),
        ),
      ],
    );
  },
};

var mcwMenuAnchor = {
  name: 'mcw-menu-anchor',
  functional: true,
  render(createElement, { scopedSlots }) {
    return createElement(
      'div',
      {
        class: {
          'mdc-menu-anchor': 1,
          'mdc-menu-surface--anchor': 1,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

/* eslint-disable quote-props */
var mcwMenuItem = {
  name: 'mcw-menu-item',
  props: {
    disabled: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { disabled },
      scopedSlots,
    },
  ) {
    return createElement(
      'li',
      {
        class: {
          'mdc-menu-divider': 1,
          'mdc-list-divider': 1,
        },
        attrs: {
          tabindex: disabled ? '-1' : '0',
          'aria-disabled': disabled,
          role: 'menuitem',
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

/* eslint-disable quote-props */

const { strings: strings$1, cssClasses: cssClasses$2 } = MDCMenuSurfaceFoundation;

var mcwMenuSurface = {
  name: 'mcw-menu-surface',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: [Boolean, Object],
    'quick-open': Boolean,
    'anchor-corner': [String, Number],
    'anchor-margin': Object,
  },
  data() {
    return {
      classes: {
        'mdc-menu': 1,
        'mdc-menu-surface': 1,
      },
    };
  },

  watch: {
    open: 'onOpen_',
    quickOpen(nv) {
      this.foundation.setQuickOpen(nv);
    },
  },

  mounted() {
    this._previousFocus = undefined;

    this.foundation = new MDCMenuSurfaceFoundation(
      Object.assign(
        {
          addClass: className => this.$set(this.classes, className, true),
          removeClass: className => this.$delete(this.classes, className),
          hasClass: className => this.$el.classList.contains(className),
          hasAnchor: () => !!this.anchorElement,
          notifyClose: () => {
            emitCustomEvent(this.$el, strings$1.CLOSED_EVENT, {});

            this.$emit('change', false);
          },
          notifyOpen: () => {
            emitCustomEvent(this.$el, strings$1.OPENED_EVENT, {});

            this.$emit('change', true);
          },
          isElementInContainer: el => this.$el.contains(el),
          isRtl: () =>
            getComputedStyle(this.$el).getPropertyValue('direction') === 'rtl',
          setTransformOrigin: origin => {
            this.$el.style.setProperty(
              `${getTransformPropertyName(window)}-origin`,
              origin,
            );
          },
        },
        this.getFocusAdapterMethods(),
        this.getDimensionAdapterMethods(),
      ),
    );

    if (
      this.$el.parentElement &&
      this.$el.parentElement.classList.contains(cssClasses$2.ANCHOR)
    ) {
      this.anchorElement = this.$el.parentElement;
    }

    this.foundation.init();
  },
  beforeDestroy() {
    this._previousFocus = null;

    this.foundation.destroy();
  },

  methods: {
    handleBodyClick(evt) {
      this.foundation.handleBodyClick(evt);
    },

    registerBodyClickListener() {
      document.body.addEventListener('click', this.handleBodyClick);
    },
    deregisterBodyClickListener() {
      document.body.removeEventListener('click', this.handleBodyClick);
    },
    handleKeydown(evt) {
      this.foundation.handleKeydown(evt);
    },
    getFocusAdapterMethods() {
      return {
        isFocused: () => document.activeElement === this.$el,
        saveFocus: () => {
          this.previousFocus_ = document.activeElement;
        },
        restoreFocus: () => {
          if (this.$el.contains(document.activeElement)) {
            if (this.previousFocus_ && this.previousFocus_.focus) {
              this.previousFocus_.focus();
            }
          }
        },
      };
    },
    getDimensionAdapterMethods() {
      return {
        getInnerDimensions: () => {
          return {
            width: this.$el.offsetWidth,
            height: this.$el.offsetHeight,
          };
        },
        getAnchorDimensions: () =>
          this.anchorElement
            ? this.anchorElement.getBoundingClientRect()
            : null,
        getWindowDimensions: () => {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        getBodyDimensions: () => {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
          };
        },
        getWindowScroll: () => {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        setPosition: position => {
          this.$el.style.left =
            'left' in position ? `${position.left}px` : null;
          this.$el.style.right =
            'right' in position ? `${position.right}px` : null;
          this.$el.style.top = 'top' in position ? `${position.top}px` : null;
          this.$el.style.bottom =
            'bottom' in position ? `${position.bottom}px` : null;
        },
        setMaxHeight: height => {
          this.$el.style.maxHeight = height;
        },
      };
    },

    onOpen_(value) {
      const method = value ? 'open' : 'close';
      this.foundation[method]();
    },
    hoistMenuToBody() {
      document.body.appendChild(this.$el.parentElement.removeChild(this.$el));
      this.setIsHoisted(true);
    },
    setIsHoisted(isHoisted) {
      this.foundation.setIsHoisted(isHoisted);
    },

    setFixedPosition(isFixed) {
      if (isFixed) {
        this.$set(this.classes, cssClasses$2.FIXED, true);
      } else {
        this.$delete(this.classes, cssClasses$2.FIXED);
      }

      this.foundation.setFixedPosition(isFixed);
    },
    setAbsolutePosition(x, y) {
      this.foundation.setAbsolutePosition(x, y);
      this.setIsHoisted(true);
    },
    setAnchorCorner(corner) {
      this.foundation.setAnchorCorner(corner);
    },
    setAnchorMargin(margin) {
      this.foundation.setAnchorMargin(margin);
    },
    setMenuSurfaceAnchorElement(element) {
      this.anchorElement = element;
    },
    show(options) {
      this.foundation.open(options);
    },
    hide() {
      this.close();
    },
    close(skipRestoreFocus = false) {
      this.foundation.close(skipRestoreFocus);
    },
    isOpen() {
      return this.foundation ? this.foundation.isOpen() : false;
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'div',
      {
        class: this.classes,
        on: {
          keydown: evt => this.handleKeydown(evt),
          'MDCMenuSurface:opened': evt => this.registerBodyClickListener(evt),
          'MDCMenuSurface:closed': evt => this.deregisterBodyClickListener(evt),
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var menu = BasePlugin({
  mcwMenu,
  mcwMenuSurface,
  mcwMenuItem,
  mcwMenuAnchor,
});

var mcwNotchedOutline = {
  name: 'mcw-notched-outline',

  data() {
    return {
      outlinedClasses: { 'mdc-notched-outline': true },
      notchStyles: {},
    };
  },

  mounted() {
    const {
      OUTLINE_UPGRADED,
      NO_LABEL,
    } = MDCNotchedOutlineFoundation.cssClasses;

    const adapter = {
      addClass: className => {
        this.$set(this.outlinedClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.outlinedClasses, className);
      },

      setNotchWidthProperty: width =>
        this.$set(this.notchStyles, 'width', `${width}px`),
      removeNotchWidthProperty: () => this.$delete(this.notchStyles, 'width'),
    };

    this.foundation = new MDCNotchedOutlineFoundation(adapter);
    this.foundation.init();

    const key = this.$slots.default ? OUTLINE_UPGRADED : NO_LABEL;
    this.$set(this.outlinedClasses, key, true);
  },

  beforeDestroy() {
    this.foundation.destroy();
  },

  methods: {
    notch(notchWidth) {
      this.foundation.notch(notchWidth);
    },

    closeNotch() {
      this.foundation.closeNotch();
    },
    float(shouldFloat) {
      this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat);
    },

    shake(shouldShake) {
      this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake);
    },

    getWidth() {
      return this.$refs.labelEl.getWidth();
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const notchEl = createElement(
      'span',
      {
        class: 'mdc-notched-outline__notch',
        style: this.notchStyles,
      },
      [
        scopedSlots.default &&
          createElement(
            mcwFloatingLabel,
            { ref: 'labelEl' },
            scopedSlots.default(),
          ),
      ],
    );

    return createElement('span', { class: this.outlinedClasses }, [
      createElement('span', { class: 'mdc-notched-outline__leading' }),
      notchEl,
      createElement('span', { class: 'mdc-notched-outline__trailing' }),
    ]);
  },
};

var notchedOutline = BasePlugin({
  mcwNotchedOutline,
});

/* eslint-disable quote-props */

var mcwRadio = {
  name: 'mcw-radio',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'picked',
    event: 'change',
  },
  props: {
    label: String,
    'align-end': Boolean,
    radioClasses: String,
    name: { type: String, required: true },
    id: { type: String, required: true },
    value: String,
    picked: String,
    disabled: Boolean,
    checked: Boolean,
  },
  data() {
    return {
      classes: { 'mdc-radio': 1 },
      styles: {},
    };
  },
  watch: {
    checked: 'setChecked',
    picked: 'onPicked',
    disabled(value) {
      this.foundation.setDisabled(value);
    },
  },

  mounted() {
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      setNativeControlDisabled: disabled =>
        this.$refs.controlEl && this.$refs.controlEl.disabled == disabled,
    };

    // add foundation
    this.foundation = new MDCRadioFoundation(adapter);

    // add ripple
    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,

      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (evt, handler) => {
        this.$refs.controlEl.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$refs.controlEl.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return this.$refs.root.getBoundingClientRect();
      },
    });

    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => {
        this.$refs.labelEl &&
          this.$refs.labelEl.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$refs.labelEl &&
          this.$refs.labelEl.removeEventListener(type, handler);
      },
      activateInputRipple: () => {
        this.ripple && this.ripple.activate();
      },
      deactivateInputRipple: () => {
        this.ripple && this.ripple.deactivate();
      },
    });

    this.foundation.init();
    this.ripple.init();
    this.formField.init();

    const { checked, disabled, picked, value } = this;

    this.foundation.setDisabled(disabled);
    this.setChecked(checked || picked == value);

    // if checked, need to sync any change of value
    checked && this.onChange();
  },

  methods: {
    onChange() {
      const nativeValue = this.$refs.controlEl.value;
      nativeValue != this.picked &&
        this.$emit('change', this.$refs.controlEl.value);
    },
    onPicked(nv) {
      this.setChecked(nv == this.$refs.controlEl.value);
    },
    setChecked(checked) {
      this.$refs.controlEl.checked = checked;
    },
  },

  beforeDestroy() {
    this.formField.destroy();
    this.ripple.destroy();
    this.foundation.destroy();
  },

  render(createElement) {
    const {
      alignEnd,
      value,
      disabled,
      picked,
      $attrs: attrs,
      $listeners: listeners,
      id,
      label,
      name,
    } = this;

    const backgroundEl = createElement(
      'div',
      {
        class: { 'mdc-radio__background': 1 },
      },
      [
        createElement('div', { class: 'mdc-radio__outer-circle' }),
        createElement('div', { class: 'mdc-radio__inner-circle' }),
      ],
    );

    const inputEl = createElement('input', {
      class: ['mdc-radio__native-control'],
      attrs: {
        ...attrs,
        name,
        id,
        type: 'radio',
        value,
        checked: picked == value,
        disabled,
      },
      ref: 'controlEl',
      on: {
        ...listeners,
        change: evt => this.onChange(evt),
      },
    });

    const radioEl = createElement(
      'div',
      {
        class: [this.classes, this.radioClasses],
        style: this.styles,
        ref: 'root',
      },
      [
        inputEl,
        backgroundEl,
        createElement('div', { class: { 'mdc-radio__ripple': 1 } }),
      ],
    );

    if (!label) {
      return radioEl;
    }

    return createElement(
      'div',
      {
        class: {
          'mdc-form-field': 1,
          'mdc-form-field--align-end': alignEnd,
        },
      },
      [
        radioEl,
        createElement('label', { ref: 'labelEl', attrs: { for: id } }, label),
      ],
    );
  },
};

var radio = BasePlugin({ mcwRadio });

var SelectHelperText = {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
  },
  data() {
    return {
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': this.helptextPersistent,
        'mdc-select-helper-text--validation-msg': this.helptextValidation,
      },
      attrs: { 'aria-hidden': 'true' },
    };
  },
  watch: {
    helptextPersistent() {
      this.foundation.setPersistent(this.helptextPersistent);
    },
    helptextValidation() {
      this.foundation.setValidation(this.helptextValidation);
    },
  },

  mounted() {
    this.foundation = new MDCSelectHelperTextFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      hasClass: className => Boolean(this.classes[className]),

      setAttr: (attr, value) => {
        this.$set(this.attrs, attr, value);
        // this.$el.setAttribute(attr, value);
      },
      removeAttr: attr => {
        this.$delete(this.attrs, attr);
        // this.$el.removeAttribute(attr);
      },

      setContent: (/* content */) => {
        // help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      },
    });

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'p',
      {
        class: this.classes,
        attrs: this.attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var SelectIcon = {
  name: 'select-icon',
  props: {
    icon: String,
  },
  data() {
    return {
      classes: {
        'material-icons': true,
        'mdc-select__icon': true,
      },
      styles: {},
    };
  },

  mounted() {
    this.foundation = new MDCSelectIconFoundation(
      Object.assign({
        getAttr: attr => this.$el.getAttribute(attr),
        setAttr: (attr, value) => this.$el.setAttribute(attr, value),
        removeAttr: attr => this.$el.removeAttribute(attr),
        setContent: content => {
          this.$el.textContent = content;
        },
        registerInteractionHandler: (evtType, handler) =>
          this.$el.addEventListener(evtType, handler),
        deregisterInteractionHandler: (evtType, handler) =>
          this.$el.removeEventListener(evtType, handler),
        notifyIconAction: () => {
          this.$emit('click');

          emitCustomEvent(
            this.$el,
            MDCSelectIconFoundation.strings.ICON_EVENT,
            {},
            true /* shouldBubble  */,
          );
        },
      }),
    );

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement) {
    return createElement(
      'i',
      {
        class: this.classes,
        style: this.styles,
        attrs: this.$attrs,
        on: this.$listeners,
      },
      this.icon,
    );
  },
};

const { strings: strings$2 } = MDCSelectFoundation;

var mcwSelect = {
  name: 'mcw-select',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
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
    id: { type: String },
  },
  mixins: [VMAUniqueIdMixin],
  data() {
    return {
      styles: {},
      classes: {},
      selectedTextContent: '',
      selTextAttrs: {},
      selectAnchorAttrs: {},
    };
  },

  components: { SelectHelperText, SelectIcon },
  computed: {
    rootClasses() {
      return {
        'mdc-select': 1,
        'mdc-select--outlined': this.outlined,
        'mdc-select--with-leading-icon': this.leadingIcon,
        'mdc-select--disabled': this.disabled,
        'mdc-select--no-label': !this.label,
        ...this.classes,
      };
    },

    selectedTextAttrs() {
      const helpId = `help-${this.vma_uid_}`;

      const attrs = { ...this.selTextAttrs };
      if (this.helptext) {
        attrs['aria-controls'] = helpId;
        attrs['aria-describedBy'] = helpId;
      }
      return attrs;
    },

    selectAriaControls() {
      return this.helptext ? 'help-' + this.vma_uid_ : undefined;
    },
  },
  watch: {
    disabled(value) {
      const { foundation } = this;
      foundation && foundation.updateDisabledStyle(value);
    },
    value: 'refreshIndex',
  },

  mounted() {
    this.menuSetup_();
    const {
      $refs: { helperTextEl, leadingIconEl },
    } = this;

    this.foundation = new MDCSelectFoundation(
      Object.assign({
        // common methods
        addClass: className => this.$set(this.classes, className, true),
        removeClass: className => this.$delete(this.classes, className),
        hasClass: className => Boolean(this.rootClasses[className]),
        setRippleCenter: normalizedX => {
          const {
            $refs: { lineRippleEl },
          } = this;

          lineRippleEl && lineRippleEl.setRippleCenter(normalizedX);
        },
        activateBottomLine: () => {
          const {
            $refs: { lineRippleEl },
          } = this;
          lineRippleEl && lineRippleEl.foundation_.activate();
        },
        deactivateBottomLine: () => {
          const {
            $refs: { lineRippleEl },
          } = this;
          lineRippleEl && lineRippleEl.foundation_.deactivate();
        },

        notifyChange: value => {
          const index = this.selectedIndex;
          emitCustomEvent(
            this.$el,
            strings$2.CHANGE_EVENT,
            { value, index },
            true /* shouldBubble  */,
          );
          value != this.value && this.$emit('change', value);
        },

        // select methods
        getSelectedMenuItem: () => {
          return this.menuElement_.querySelector(
            strings$2.SELECTED_ITEM_SELECTOR,
          );
        },
        getMenuItemAttr: (menuItem, attr) => menuItem.getAttribute(attr),

        setSelectedText: text => {
          this.selectedTextContent = text;
        },
        isSelectAnchorFocused: () => {
          return document.activeElement === this.$refs.anchorEl;
        },

        getSelectAnchorAttr: attr => {
          return this.selectAnchorAttrs[attr];
        },

        setSelectAnchorAttr: (attr, value) => {
          this.$set(this.selectAnchorAttrs, attr, value);
        },
        openMenu: () => {
          this.menu_.surfaceOpen = true;
        },
        closeMenu: () => {
          this.menu_.surfaceOpen = false;
        },

        getAnchorElement: () => this.$refs.anchorEl,
        setMenuAnchorElement: anchorEl => this.menu_.setAnchorElement(anchorEl),
        setMenuAnchorCorner: anchorCorner =>
          this.menu_.setAnchorCorner(anchorCorner),

        setMenuWrapFocus: wrapFocus => (this.menu_.wrapFocus = wrapFocus),
        setAttributeAtIndex: (index, attributeName, attributeValue) =>
          this.menu_.items[index].setAttribute(attributeName, attributeValue),
        removeAttributeAtIndex: (index, attributeName) =>
          this.menu_.items[index].removeAttribute(attributeName),
        focusMenuItemAtIndex: index => {
          this.menu_.items[index].focus();
        },
        getMenuItemCount: () => this.menu_.items.length,
        getMenuItemValues: () =>
          this.menu_.items.map(el => el.getAttribute(strings$2.VALUE_ATTR) || ''),
        getMenuItemTextAtIndex: index => this.menu_.items[index].textContent,
        addClassAtIndex: (index, className) => {
          this.menu_.items[index].classList.add(className);
        },
        removeClassAtIndex: (index, className) => {
          this.menu_.items[index].classList.remove(className);
        },

        // outline methods
        hasOutline: () => {
          return this.outlined;
        },
        notchOutline: labelWidth => {
          const {
            $refs: { outlineEl },
          } = this;
          outlineEl && outlineEl.notch(labelWidth);
        },
        closeOutline: () => {
          const {
            $refs: { outlineEl },
          } = this;
          outlineEl && outlineEl.closeNotch();
        },
        // label methods
        hasLabel: () => {
          return !!this.label;
        },
        floatLabel: value => {
          const {
            $refs: { labelEl, outlineEl },
          } = this;
          (labelEl || outlineEl).float(value);
        },
        getLabelWidth: () => {
          const {
            $refs: { labelEl },
          } = this;
          return labelEl && labelEl.getWidth();
        },
      }),
      {
        helperText: helperTextEl && helperTextEl.foundation,

        leadingIcon: leadingIconEl && leadingIconEl.foundation,
      },
    );

    if (this.menu_) {
      this.menu_.listen(
        MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
        this.handleMenuClosed,
      );
      this.menu_.listen(
        MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
        this.handleMenuOpened,
      );
      this.menu_.listen(
        MDCMenuFoundation.strings.SELECTED_EVENT,
        this.handleMenuItemAction,
      );
    }

    this.foundation.init();
    // this.foundation.handleChange(false);

    // initial sync with DOM
    this.refreshIndex();
    // this.slotObserver = new MutationObserver(() => this.refreshIndex());
    // this.slotObserver.observe(this.$refs.native_control, {
    //   childList: true,
    //   subtree: true,
    // });

    if (!this.outlined) {
      this.ripple = new RippleBase(this);
      this.ripple.init();
    }
  },

  beforeDestroy() {
    // this.slotObserver.disconnect();
    if (this.menu_) {
      this.menu_.unlisten(
        MDCMenuSurfaceFoundation.strings.SELECTED_EVENT,
        this.handleMenuItemAction,
      );

      this.menu_.unlisten(
        MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
        this.handleMenuOpened,
      );

      this.menu_.unlisten(
        MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
        this.handleMenuClosed,
      );
    }

    const foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();

    this.ripple && this.ripple.destroy();
  },

  methods: {
    handleMenuOpened() {
      this.foundation.handleMenuOpened();
    },
    handleMenuClosed() {
      this.foundation.handleMenuClosed();
    },
    handleMenuItemAction(evt) {
      this.foundation.handleMenuItemAction(evt.detail.index);
    },
    handleChange() {
      this.foundation.handleChange(true);
    },

    handleFocus() {
      this.foundation.handleFocus();
    },

    handleBlur() {
      this.foundation.handleBlur();
    },

    handleClick(evt) {
      this.$refs.anchorEl.focus();
      this.handleFocus();
      this.foundation.handleClick(this.getNormalizedXCoordinate(evt));
    },

    getNormalizedXCoordinate(evt) {
      const targetClientRect = evt.target.getBoundingClientRect();
      const xCoordinate = evt.clientX;
      return xCoordinate - targetClientRect.left;
    },

    menuSetup_() {
      this.menuElement_ = this.$el.querySelector(
        MDCSelectFoundation.strings.MENU_SELECTOR,
      );
      if (this.menuElement_) {
        this.menu_ = this.menuElement_.__vue__;
      }
    },
    refreshIndex() {
      const items = this.menu_.items.map(
        el => el.getAttribute(strings$2.VALUE_ATTR) || '',
      );

      const idx = items.findIndex(value => {
        return this.value === value;
      });
      this.foundation.setSelectedIndex(idx);
    },
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const helpId = `help-${this.vma_uid_}`;

    const anchorNodes = [
      createElement('span', { class: ['mdc-select__ripple'] }),
      createElement('input', {
        class: {
          'mdc-select__selected-text': 1,
        },
        attrs: {
          disabled: true,
          readonly: true,
          value: this.selectedTextContent,
          ...this.selectedTextAttrs,
        },
        ref: 'selectedTextEl',
      }),
      createElement('i', { class: { 'mdc-select__dropdown-icon': 1 } }),
    ];

    if (this.outlined) {
      anchorNodes.push(
        createElement(mcwNotchedOutline, { ref: 'outlineEl' }, this.label),
      );
    } else {
      anchorNodes.push(
        createElement(mcwFloatingLabel, { ref: 'labelEl' }, this.label),
        createElement(mcwLineRipple, { ref: 'lineRippleEl' }, this.label),
      );
    }
    if (this.leadingIcon) {
      anchorNodes.unshift(
        createElement('select-icon', {
          attrs: { icon: this.leadingIcon, 'tab-index': '0', role: 'button' },
          ref: 'leadingIconEl',
        }),
      );
    }

    const anchorEl = createElement(
      'div',
      {
        class: { 'mdc-select__anchor': 1 },
        attrs: this.selectAnchorAttrs,
        ref: 'anchorEl',
        on: {
          click: evt => this.handleClick(evt),
          focus: () => this.handleFocus(),
          blur: () => this.handleBlur(),
        },
      },
      anchorNodes,
    );

    const nodes = [anchorEl, scopedSlots.default && scopedSlots.default()];

    if (this.helptext) {
      nodes.push(
        createElement(
          'select-helper-text',
          {
            attrs: {
              helptextPersistent: this.helptextPersistent,
              helptextValidation: this.helptextValidation,
              id: helpId,
            },
            ref: 'helperTextEl',
          },
          [this.helptext],
        ),
      );
    }
    return createElement(
      'div',
      {
        class: this.rootClasses,
      },
      nodes,
    );
  },
};

var select = BasePlugin({
  mcwSelect,
});

/* eslint-disable quote-props */

var mcwSlider = {
  name: 'mcw-slider',
  mixins: [DispatchFocusMixin],
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: [Number, String],
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String], default: 0 },
    discrete: Boolean,
    displayMarkers: Boolean,
    disabled: Boolean,
    layoutOn: String,
    layoutOnSource: { type: Object, required: false },
  },
  data() {
    let stepSize = this.step;
    if (this.discrete && !stepSize) {
      stepSize = 1;
    }
    return {
      classes: {
        'mdc-slider': 1,
        'mdc-slider--discrete': this.discrete,
        'mdc-slider--display-markers': this.discrete && this.displayMarkers,
      },
      sliderAttrs: {},
      trackStyles: {},
      lastTrackMarkersStyles: {},
      markerBkgdShorthand: {},
      thumbStyles: {},
      markerValue: '',
      numMarkers: 0,
      stepSize,
    };
  },

  computed: {
    hasMarkers() {
      return this.discrete && this.displayMarkers;
    },
  },
  watch: {
    value(nv) {
      if (this.foundation.getValue() !== Number(nv)) {
        this.foundation.setValue(nv);
      }
    },
    min(nv) {
      this.foundation.setMin(Number(nv));
    },
    max(nv) {
      this.foundation.setMax(Number(nv));
    },
    step(nv) {
      this.foundation.setStep(Number(nv));
    },
    disabled(nv) {
      this.foundation.setDisabled(nv);
    },
  },
  mounted() {
    const adapter = {
      hasClass: className => this.$el.classList.contains(className),
      addClass: className => {
        this.$set(this.classes, className, true);
      },
      removeClass: className => {
        this.$delete(this.classes, className, true);
      },
      getAttribute: name => this.$el.getAttribute(name),
      setAttribute: (name, value) => this.$set(this.sliderAttrs, name, value),
      removeAttribute: name => this.$delete(this.sliderAttrs, name),

      computeBoundingRect: () => this.$el.getBoundingClientRect(),
      getTabIndex: () => this.$el.tabIndex,
      registerInteractionHandler: (type, handler) => {
        this.$el.addEventListener(type, handler, applyPassive());
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$el.removeEventListener(type, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        this.$refs.thumbContainer.addEventListener(
          type,
          handler,
          applyPassive(),
        );
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        this.$refs.thumbContainer.removeEventListener(
          type,
          handler,
          applyPassive(),
        );
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.$emit('input', this.foundation.getValue());
      },
      notifyChange: () => {
        this.$emit('change', this.foundation.getValue());
      },
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.$set(this.thumbStyles, propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.$set(this.trackStyles, propertyName, value);
      },
      setMarkerValue: value => {
        this.markerValue = value;
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
      setTrackMarkers: (step, max, min) => {
        const stepStr = step.toLocaleString();
        const maxStr = max.toLocaleString();
        const minStr = min.toLocaleString();
        // keep calculation in css for better rounding/subpixel behavior
        const markerAmount = `((${maxStr} - ${minStr}) / ${stepStr})`;
        const markerWidth = `2px`;
        const markerBkgdImage = `linear-gradient(to right, currentColor ${markerWidth}, transparent 0)`;
        const markerBkgdLayout = `0 center / calc((100% - ${markerWidth}) / ${markerAmount}) 100% repeat-x`;
        const markerBkgdShorthand = `${markerBkgdImage} ${markerBkgdLayout}`;
        this.$set(this.markerBkgdShorthand, 'background', markerBkgdShorthand);
      },
      isRTL: () => getComputedStyle(this.$el).direction === 'rtl',
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
  beforeDestroy() {
    this.$root.$off('vma:layout', this.layout);
    if (this.layoutOnEventSource) {
      this.layoutOnEventSource.$off(this.layoutOn, this.layout);
    }
    this.foundation.destroy();
  },
  methods: {
    layout() {
      this.$nextTick(() => {
        this.foundation && this.foundation.layout();
      });
    },
  },
  render(createElement) {
    const trackContainer = createElement(
      'div',
      {
        class: 'mdc-slider__track-container',
      },
      [
        createElement('div', {
          style: this.trackStyles,
          class: 'mdc-slider__track',
        }),
        this.hasMarkers &&
          createElement('div', {
            class: { 'mdc-slider__track-marker-container': 1 },
            style: this.markerBkgdShorthand,
            ref: 'trackMarkerContainer',
          }),
      ],
    );

    const thumbContainer = createElement(
      'div',
      {
        class: 'mdc-slider__thumb-container',
        style: this.thumbStyles,
        ref: 'thumbContainer',
      },
      [
        this.discrete &&
          createElement('div', { class: 'mdc-slider__pin' }, [
            createElement(
              'span',
              { class: 'mdc-slider__pin-value-marker' },
              this.markerValue,
            ),
          ]),
        createElement(
          'svg',
          { class: 'mdc-slider__thumb', attrs: { width: 21, height: 21 } },
          [
            createElement('circle', {
              attrs: { cx: 10.5, cy: 10.5, r: 7.875 },
            }),
          ],
        ),
        createElement('div', { class: 'mdc-slider__focus-ring' }),
      ],
    );

    return createElement(
      'div',
      {
        class: this.classes,
        attrs: {
          tabindex: '0',
          role: 'slider',
          'aria-label': 'Select value',
          ...this.sliderAttrs,
        },
      },
      [trackContainer, thumbContainer],
    );
  },
};

var slider = BasePlugin({
  mcwSlider,
});

const noop = () => {};

var mcwSnackbarQueue = {
  name: 'mcw-snackbar-queue',
  data() {
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
        stacked: false,
      },
    };
  },
  render(createElement) {
    return createElement('mcw-snackbar', {
      props: {
        open: this.open,
        ...this.snack,
      },
      on: this.listeners,
    });
  },
  methods: {
    handleSnack({
      timeoutMs = 5000,
      closeOnEscape,
      message = '',
      actionText = '',
      dismissAction = true,
      stacked,
      leading,
      actionHandler = noop,
    }) {
      this.queue.push(() => {
        this.snack = {
          timeoutMs,
          closeOnEscape,
          message,
          actionText,
          actionHandler,
          dismissAction,
          stacked,
          leading,
        };
        this.actionHandler = actionHandler;
        this.open = true;
      });
      if (this.queue.length === 1) {
        this.queue[0]();
      }
    },
    handleClosed() {
      this.open = false;
      this.queue.shift();
      if (this.queue.length > 0) {
        this.$nextTick(() => this.queue[0]());
      }
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        'MDCSnackbar:closed': ({ reason }) => {
          if (this.actionHandler && reason === 'action') {
            this.actionHandler({ reason });
          }
          this.handleClosed();
          this.$emit('closed', { reason });
        },
      };
    },
  },
};

/* eslint-disable quote-props */

const { strings: strings$3, numbers } = MDCSnackbarFoundation;

var mcwSnackbar = {
  name: 'mcw-snackbar',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: Boolean,
    stacked: Boolean,
    leading: Boolean,
    message: String,
    actionText: String,
    timeoutMs: [String, Number],
    closeOnEscape: { type: Boolean, default: true },
    dismissAction: { type: [String, Boolean], default: true },
    reason: String,
  },
  data() {
    return {
      classes: {},
      hidden: false,
      actionHidden: false,
      showMessage: true,
    };
  },
  watch: {
    open: 'onOpen_',
    timeoutMs: 'onTimeoutMs_',
    closeOnEscape: 'onCloseOnEscape_',
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeydownEvent);
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      announce: () => this.announce(this.$refs.labelEl),
      notifyOpening: () => this.$emit(strings$3.OPENING_EVENT, {}),
      notifyOpened: () => {
        this.$emit(strings$3.OPENED_EVENT, {});
        this.$emit('change', true);
        this.$emit('show', {});
      },
      notifyClosing: reason => {
        this.$emit(strings$3.CLOSING_EVENT, reason ? { reason } : {});
        this.$emit('update:reason', reason);
      },
      notifyClosed: reason => {
        this.$emit(strings$3.CLOSED_EVENT, reason ? { reason } : {});
        this.$emit('change', false);
        this.$emit('hide');
      },
    };

    const { closeOnEscape, timeoutMs } = this;
    this.foundation = new MDCSnackbarFoundation(adapter);
    this.foundation.init();

    if (timeoutMs !== void 0) {
      this.foundation.setTimeoutMs(timeoutMs);
    }

    this.foundation.setCloseOnEscape(closeOnEscape);
  },
  computed: {
    rootClasses() {
      return {
        'mdc-snackbar': 1,
        'mdc-snackbar--leading': this.leading,
        'mdc-snackbar--stacked': this.stacked,
      };
    },
    showDismissAction() {
      return typeof this.dismissAction === 'string'
        ? this.dismissAction != 'false'
        : this.dismissAction;
    },
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydownEvent);
    this.foundation.destroy();
  },
  methods: {
    onTimeoutMs_(value) {
      if (value !== void 0) {
        this.foundation.setTimeoutMs(value);
      }
    },
    onCloseOnEscape_(nv) {
      this.foundation.setCloseOnEscape(nv);
    },
    onOpen_(value) {
      if (value) {
        this.foundation.open();
      } else {
        const { reason } = this;
        this.foundation.close(reason ? reason : '');
      }
    },
    surfaceClickHandler(evt) {
      if (this.isActionButton_(evt.target)) {
        this.foundation.handleActionButtonClick(evt);
      } else if (this.isActionIcon_(evt.target)) {
        this.foundation.handleActionIconClick(evt);
      }
    },

    handleKeydownEvent(evt) {
      this.foundation.handleKeyDown(evt);
    },

    isActionButton_(target) {
      return Boolean(closest(target, strings$3.ACTION_SELECTOR));
    },

    isActionIcon_(target) {
      return Boolean(closest(target, strings$3.DISMISS_SELECTOR));
    },

    announce(ariaEl, labelEl = ariaEl) {
      const priority = ariaEl.getAttribute('aria-live');

      const text = this.message;
      if (!text) {
        return;
      }

      // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.
      ariaEl.setAttribute('aria-live', 'off');

      // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
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
      this.showMessage = false;

      // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
      // CSS generated content is normally announced by screen readers
      // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
      // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.
      labelEl.setAttribute(strings$3.ARIA_LIVE_LABEL_TEXT_ATTR, this.message);

      setTimeout(() => {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority);

        // Remove the message from the ::before pseudo-element.
        labelEl.removeAttribute(strings$3.ARIA_LIVE_LABEL_TEXT_ATTR);

        // Restore the original label text, which will be announced by screen readers.
        this.showMessage = true;
      }, numbers.ARIA_LIVE_DELAY_MS);
    },
  },
  render(createElement) {
    const surfaceNodes = [
      createElement(
        'div',
        {
          class: { 'mdc-snackbar__label': 1 },
          attrs: { role: 'status', 'aria-live': 'polite' },
          ref: 'labelEl',
        },
        [
          this.showMessage
            ? this.message
            : createElement('span', {
                style: { display: 'inline-block', width: 0, height: '1px' },
                domProps: {
                  innerHTML: '&nbsp;',
                },
              }),
        ],
      ),
    ];

    if (this.showDismissAction || this.actionText) {
      const buttonNodes = [];

      if (this.actionText) {
        buttonNodes.push(
          createElement(
            'button',
            {
              class: {
                'mdc-button': 1,
                'mdc-snackbar__action': 1,
              },
              attrs: { type: 'button' },
              ref: 'actionEl',
              on: this.$listeners,
            },
            this.actionText,
          ),
        );
      }

      if (this.showDismissAction) {
        buttonNodes.push(
          createElement(
            'button',
            {
              class: {
                'mdc-icon-button': 1,
                'mdc-snackbar__dismiss': 1,
                'material-icons': 1,
              },
              attrs: { title: 'Dismiss' },
            },
            ['close'],
          ),
        );
      }
      surfaceNodes.push(
        createElement(
          'div',
          { class: { 'mdc-snackbar__actions': 1 } },
          buttonNodes,
        ),
      );
    }

    return createElement(
      'div',
      { class: { ...this.rootClasses, ...this.classes }, ref: 'root' },
      [
        createElement(
          'div',
          {
            class: { 'mdc-snackbar__surface': 1 },
            on: { click: evt => this.surfaceClickHandler(evt) },
          },
          surfaceNodes,
        ),
      ],
    );
  },
};

var snackbar = BasePlugin({
  mcwSnackbar,
  mcwSnackbarQueue,
});

var mcwSwitch = {
  name: 'mcw-switch',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String,
  },
  data() {
    return {
      classes: { 'mdc-switch': 1 },
      styles: {},
      nativeControlChecked: this.checked,
      nativeControlDisabled: this.disabled,
      nativeAttrs: {},
    };
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
  },
  watch: {
    checked(value) {
      this.foundation && this.foundation.setChecked(value);
    },
    disabled(value) {
      this.foundation && this.foundation.setDisabled(value);
    },
  },

  mounted() {
    this.foundation = new MDCSwitchFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      setNativeControlChecked: checked => (this.nativeControlChecked = checked),
      setNativeControlDisabled: disabled =>
        (this.nativeControlDisabled = disabled),

      setNativeControlAttr: (attr, value) => {
        this.nativeAttrs[attr] = value;
      },
    });
    this.foundation.init();
    this.foundation.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    onChanged(event) {
      this.foundation && this.foundation.handleChange(event);
      this.$emit('change', event.target.checked);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const nodes = [
      createElement('div', { class: this.classes, style: this.styles }, [
        createElement('div', { class: { 'mdc-switch__track': 1 } }),
        createElement('div', { class: { 'mdc-switch__thumb-underlay': 1 } }, [
          createElement('div', { class: { 'mdc-switch__thumb': 1 } }),
          createElement('input', {
            class: { 'mdc-switch__native-control': 1 },
            attrs: {
              ...this.nativeAttrs,
              name: this.name,
              id: this.vma_uid_,
              value: this.value,
              type: 'checkbox',
              role: 'switch',
              checked: this.nativeControlChecked,
              disabled: this.nativeControlDisabled,
            },
            on: { change: evt => this.onChanged(evt) },
          }),
        ]),
      ]),

      this.hasLabel &&
        createElement(
          'label',
          {
            class: { 'mdc-switch-label': 1 },
            attrs: { for: this.vma_uid_ },
          },
          (scopedSlots.default && scopedSlots.default()) || this.label,
        ),
    ];

    return createElement(
      'div',
      {
        class: {
          'mdc-form-field': this.hasLabel,
          'mdc-form-field--align-end': this.hasLabel && this.alignEnd,
        },
      },
      nodes,
    );
  },
};

var switchControl = BasePlugin({
  mcwSwitch,
});

var mcwTabBar = {
  name: 'mcw-tab-bar',
  data() {
    return {
      classes: { 'mdc-tab-bar': 1 },
      indicatorStyles: {},
      tabList: [],
    };
  },
  props: { activeTabIndex: [Number, String] },
  provide() {
    return { mcwTabBar: this };
  },

  mounted() {
    this.foundation = new MDCTabBarFoundation({
      scrollTo: scrollX => this.$refs.scroller.scrollTo(scrollX),
      incrementScroll: scrollXIncrement =>
        this.$refs.scroller.incrementScroll(scrollXIncrement),
      getScrollPosition: () => this.$refs.scroller.getScrollPosition(),
      getScrollContentWidth: () => this.$refs.scroller.getScrollContentWidth(),
      getOffsetWidth: () => this.$el.offsetWidth,
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',
      setActiveTab: index => {
        this.foundation.activateTab(index);
      },
      activateTabAtIndex: (index, clientRect) => {
        this.tabList[index].activate(clientRect);
      },
      deactivateTabAtIndex: index => {
        this.tabList[index] && this.tabList[index].deactivate();
      },
      focusTabAtIndex: index => this.tabList[index].focus(),
      getTabIndicatorClientRectAtIndex: index => {
        return (
          this.tabList[index] &&
          this.tabList[index].computeIndicatorClientRect()
        );
      },
      getTabDimensionsAtIndex: index => {
        return this.tabList[index].computeDimensions();
      },
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < this.tabList.length; i++) {
          if (this.tabList[i].isActive()) {
            return i;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = this.getTabElements_();
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: id => {
        for (let i = 0; i < this.tabList.length; i++) {
          if (this.tabList[i].id === id) {
            return i;
          }
        }
        return -1;
      },
      getTabListLength: () => this.tabList.length,
      notifyTabActivated: index => {
        emitCustomEvent(
          this.$el,
          MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT,
          { index },
          true,
        );

        this.$emit('change', index);
      },
    });
    this.foundation.init();
    // ensure active tab
    this.foundation.activateTab(this.activeTabIndex || 0);
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        'MDCTab:interacted': event => this.handleInteraction(event),
        // eslint-disable-next-line quote-props
        keydown: event => this.handleKeyDown(event),
      };
    },
  },
  methods: {
    handleInteraction(evt) {
      this.foundation.handleTabInteraction(evt);
    },

    handleKeyDown(evt) {
      this.foundation.handleKeyDown(evt);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      'div',
      { class: this.classes, on: this.listeners, attrs: { role: 'tablist' } },
      [
        createElement(
          'mdc-tab-scroller',
          {
            ref: 'scroller',
          },
          scopedSlots.default && scopedSlots.default(),
        ),
      ],
    );
  },
};

const { cssClasses: cssClasses$3 } = MDCTabIndicatorFoundation;

var mcwTabIndicator = {
  name: 'mcw-tab-indicator',
  data() {
    return { classes: { 'mdc-tab-indicator': 1 }, styles: {} };
  },

  mounted() {
    this.adapter_ = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      computeContentClientRect: () =>
        this.$refs.content.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) => {
        this.$set(this.styles, prop, value);
      },
    };

    this.foundation = new MDCTabIndicatorFoundation(this.adapter_);
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    deactivate() {
      this.adapter_.removeClass(cssClasses$3.ACTIVE);
    },
    computeContentClientRect() {
      return this.foundation.computeContentClientRect();
    },
    activate(previousIndicatorClientRect) {
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        this.adapter_.addClass(cssClasses$3.ACTIVE);
        return;
      }

      const currentClientRect = this.computeContentClientRect();
      const widthDelta =
        previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition =
        previousIndicatorClientRect.left - currentClientRect.left;
      this.foundation.adapter_.addClass(cssClasses$3.NO_TRANSITION);
      this.adapter_.setContentStyleProperty(
        'transform',
        `translateX(${xPosition}px) scaleX(${widthDelta})`,
      );
      // THE FIX
      requestAnimationFrame(() => {
        this.adapter_.removeClass(cssClasses$3.NO_TRANSITION);
        this.adapter_.addClass(cssClasses$3.ACTIVE);
        this.adapter_.setContentStyleProperty('transform', '');
      });
    },
  },
  render(createElement) {
    return createElement('span', { class: this.classes }, [
      createElement('span', {
        class: {
          'mdc-tab-indicator__content': 1,
          'mdc-tab-indicator__content--underline': 1,
        },
        style: this.styles,
        ref: 'content',
      }),
    ]);
  },
};

var mcwTabRipple = {
  name: 'mcw-tab-ripple',

  data() {
    return {
      classes: {
        'mdc-tab__ripple': 1,
        'mdc-tab-ripple': 1,
      },
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
  render(createElement) {
    return createElement('span', { class: this.classes, style: this.styles });
  },
};

var mcwTabScroller = {
  name: 'mcw-tab-scroller',
  data() {
    return {
      classes: { 'mdc-tab-scroller': 1 },
      areaClasses: { 'mdc-tab-scroller__scroll-area': 1 },
      areaStyles: {},
      contentStyles: {},
    };
  },

  mounted() {
    this.foundation = new MDCTabScrollerFoundation({
      eventTargetMatchesSelector: (evtTarget, selector) => {
        return matches(evtTarget, selector);
      },
      addClass: className => this.$set(this.classes, className, true),

      removeClass: className => this.$delete(this.classes, className),
      addScrollAreaClass: className =>
        this.$set(this.areaClasses, className, true),
      setScrollAreaStyleProperty: (prop, value) =>
        this.$set(this.areaStyles, prop, value),
      setScrollContentStyleProperty: (prop, value) =>
        this.$set(this.contentStyles, prop, value),
      getScrollContentStyleValue: propName =>
        window.getComputedStyle(this.$refs.content).getPropertyValue(propName),
      setScrollAreaScrollLeft: scrollX =>
        (this.$refs.area.scrollLeft = scrollX),
      getScrollAreaScrollLeft: () => this.$refs.area.scrollLeft,
      getScrollContentOffsetWidth: () => this.$refs.content.offsetWidth,
      getScrollAreaOffsetWidth: () => this.$refs.area.offsetWidth,
      computeScrollAreaClientRect: () =>
        this.$refs.area.getBoundingClientRect(),
      computeScrollContentClientRect: () =>
        this.$refs.content.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () =>
        computeHorizontalScrollbarHeight(document),
    });
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    getScrollPosition() {
      return this.foundation.getScrollPosition();
    },
    getScrollContentWidth() {
      return this.$refs.content.offsetWidth;
    },
    incrementScroll(scrollXIncrement) {
      this.foundation.incrementScroll(scrollXIncrement);
    },
    scrollTo(scrollX) {
      this.foundation.scrollTo(scrollX);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const areaEl = createElement(
      'div',
      {
        class: this.areaClasses,
        style: this.areaStyles,
        ref: 'area',
        on: {
          mousedown: evt => this.foundation.handleInteraction(evt),
          wheel: evt => this.foundation.handleInteraction(evt),
          pointerdown: evt => this.foundation.handleInteraction(evt),
          touchstart: evt => this.foundation.handleInteraction(evt),
          keydown: evt => this.foundation.handleInteraction(evt),
        },
      },
      [
        createElement(
          'div',
          {
            class: { 'mdc-tab-scroller__scroll-content': 1 },
            style: this.contentStyles,
            ref: 'content',
            on: {
              transitionend: evt => this.foundation.handleTransitionEnd(evt),
            },
          },
          scopedSlots.default && scopedSlots.default(),
        ),
      ],
    );

    return createElement('div', { class: this.classes }, [areaEl]);
  },
};

/* eslint-disable quote-props */

var mcwTab = {
  name: 'mcw-tab',
  mixins: [CustomLinkMixin, DispatchEventMixin, VMAUniqueIdMixin],
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    stacked: Boolean,
    minWidth: Boolean,
  },
  data() {
    return {
      classes: {
        'mdc-tab': 1,
        'mdc-tab--stacked': this.stacked,
        'mdc-tab--min-width': this.minWidth,
      },
      styles: {},
    };
  },

  inject: ['mcwTabBar'],
  computed: {
    hasIcon() {
      const { $scopedSlots: scopedSlots } = this;
      if (this.icon || (scopedSlots.icon && scopedSlots.icon())) {
        return this.icon ? extractIconProp(this.icon) : {};
      }
      return false;
    },
    hasText() {
      const { $scopedSlots: scopedSlots } = this;
      return !!(scopedSlots.default && scopedSlots.default());
    },
  },
  watch: {
    active(value) {},
  },

  mounted() {
    this.id = this.vma_uid_;
    this.foundation = new MDCTabFoundation({
      setAttr: (attr, value) => this.$el.setAttribute(attr, value),
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      activateIndicator: previousIndicatorClientRect => {
        this.$refs.tabIndicator.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: () => {
        this.$refs.tabIndicator.deactivate();
      },
      notifyInteracted: () =>
        emitCustomEvent(
          this.$el,
          MDCTabFoundation.strings.INTERACTED_EVENT,
          { tabId: this.id },
          true /* bubble */,
        ),
      getOffsetLeft: () => this.$el.offsetLeft,
      getOffsetWidth: () => this.$el.offsetWidth,
      getContentOffsetLeft: () => this.$refs.content.offsetLeft,
      getContentOffsetWidth: () => this.$refs.content.offsetWidth,
      focus: () => this.$el.focus(),
    });
    this.foundation.init();

    // console.log('tab mounted')

    this.mcwTabBar.tabList.push(this);

    // this.setActive(this.active)
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    activate(computeIndicatorClientRect) {
      this.foundation.activate(computeIndicatorClientRect);
    },

    deactivate() {
      this.foundation.deactivate();
    },

    isActive() {
      return this.foundation.isActive();
    },
    setActive(isActive) {
      if (isActive) {
        this.$set(this.classes, 'mdc-tab--active', true),
          this.$refs.tabIndicator.activate();
      }
    },
    computeIndicatorClientRect() {
      return this.$refs.tabIndicator.computeContentClientRect();
    },

    computeDimensions() {
      return this.foundation.computeDimensions();
    },

    focus() {
      this.$el.focus();
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const contentNodes = [];

    if (this.hasIcon) {
      contentNodes.push(
        createElement(
          'i',
          {
            class: { ...this.hasIcon.classes, 'mdc-tab__icon': 1 },
            attrs: { tabindex: '0', 'aria-hidden': 'true' },
            ref: 'icon',
          },
          (scopedSlots.icon && scopedSlots.icon()) || this.hasIcon.content,
        ),
      );
    }
    if (this.hasText) {
      contentNodes.push(
        createElement(
          'span',
          { class: { 'mdc-tab__text-label': 1 } },
          scopedSlots.default && scopedSlots.default(),
        ),
      );
    }

    const spanEl = createElement(
      'span',
      {
        class: { 'mdc-tab__content': 1 },
        ref: 'content',
      },
      contentNodes,
    );

    const nodes = [
      spanEl,
      createElement('mdc-tab-indicator', { ref: 'tabIndicator' }),
      createElement('mdc-tab-ripple'),
    ];

    return createElement(
      'custom-link',
      {
        class: this.classes,
        style: this.styles,
        attrs: {
          link: this.link,
          role: 'tab',
          'aria-selected': 'false',
          tabindex: '-1',
        },
        on: { click: evt => this.foundation.handleClick(evt) },
      },
      nodes,
    );
  },
};

// ===
// Private functions
// ===

function extractIconProp(iconProp) {
  if (typeof iconProp === 'string') {
    return {
      classes: { 'material-icons': true },
      content: iconProp,
    };
  } else if (iconProp instanceof Array) {
    return {
      classes: iconProp.reduce(
        (result, value) => Object.assign(result, { [value]: true }),
        {},
      ),
    };
  } else if (typeof iconProp === 'object') {
    return {
      classes: iconProp.className
        .split(' ')
        .reduce(
          (result, value) => Object.assign(result, { [value]: true }),
          {},
        ),
      content: iconProp.textContent,
    };
  }
}

var tabs = BasePlugin({
  mcwTab,
  mcwTabBar,
  mcwTabScroller,
  mcwTabIndicator,
  mcwTabRipple,
});

var TextfieldHelperText = {
  name: 'textfield-helper-text',
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String,
  },
  data() {
    return {
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.persistent,
        'mdc-text-field-helper-text--validation-msg': this.validation,
      },
    };
  },

  watch: {
    persistent() {
      this.foundation.setPersistent(this.persistent);
    },
    validation() {
      this.foundation.setValidation(this.validation);
    },
  },
  mounted() {
    this.foundation = new MDCTextFieldHelperTextFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      hasClass: className => Boolean(this.classes[className]),

      setAttr: (attr, value) => {
        this.$el.setAttribute(attr, value);
      },
      removeAttr: attr => {
        this.$el.removeAttribute(attr);
      },
      setContent: (/* content */) => {
        // help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      },
    });

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const defaultSlot = scopedSlots.default && scopedSlots.default();

    const classes = classNames(this.classes);
    if (defaultSlot) {
      return defaultSlot[0];
    }
    return createElement('div', { class: 'mdc-text-field-helper-line' }, [
      createElement(
        'div',
        { class: classes, attrs: this.$attrs },
        this.helptext,
      ),
    ]);
  },
};

// ===
// Private functions
// ===

const hasOwn = {}.hasOwnProperty;

function classNames() {
  const classes = [];

  for (let i = 0; i < arguments.length; i++) {
    // eslint-disable-next-line prefer-rest-params
    const arg = arguments[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      // eslint-disable-next-line prefer-spread
      const inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
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
      default() {
        return true;
      },
    },
  },

  mounted() {
    this.foundation = new MDCTextFieldIconFoundation(
      Object.assign({
        getAttr: attr => this.$el.getAttribute(attr),
        setAttr: (attr, value) => this.$el.setAttribute(attr, value),
        removeAttr: attr => this.$el.removeAttribute(attr),
        setContent: content => {
          this.$el.textContent = content;
        },
        registerInteractionHandler: (evtType, handler) =>
          this.$el.addEventListener(evtType, handler),
        deregisterInteractionHandler: (evtType, handler) =>
          this.$el.removeEventListener(evtType, handler),
        notifyIconAction: () => {
          this.$emit('click');
          emitCustomEvent(
            this.$el,
            MDCTextFieldIconFoundation.strings.ICON_EVENT,
            {},
            true /* shouldBubble  */,
          );
        },
      }),
    );

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement, context) {
    const node = context.children[0];
    const {
      props: { leading },
    } = context;
    node.data.class = `mdc-text-field__icon mdc-text-field__icon--${
      leading ? 'leading' : 'trailing'
    }`;
    return node;
  },
};

/* eslint-disable quote-props */

var mcwTextfield = {
  name: 'mcw-textfield',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        return (
          [
            'text',
            'email',
            'search',
            'password',
            'tel',
            'url',
            'number',
          ].indexOf(value) !== -1
        );
      },
    },
    label: String,
    outline: Boolean,
    disabled: Boolean,
    required: Boolean,
    valid: { type: Boolean, default: undefined },
    fullwidth: Boolean,
    multiline: Boolean,
    size: { type: [Number, String], default: 20 },
    minlength: { type: [Number, String], default: undefined },
    maxlength: { type: [Number, String], default: undefined },
    rows: { type: [Number, String], default: 8 },
    cols: { type: [Number, String], default: 40 },
    id: { type: String },
    helptext: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
  },
  data: function () {
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
        'mdc-text-field--no-label': !this.label,
      },
      styles: {},
      inputClasses: {
        'mdc-text-field__input': true,
      },
      labelClasses: {
        'mdc-floating-label': true,
      },
      lineRippleClasses: {
        'mdc-line-ripple': true,
      },
      lineRippleStyles: {},
      outlineClasses: {},
      notchStyles: {},
    };
  },

  components: { TextfieldHelperText, TextfieldIcon },
  computed: {
    inputPlaceHolder() {
      return this.fullwidth ? this.label : undefined;
    },
    inputAriaControls() {
      return this.help ? 'help-' + this.vma_uid_ : undefined;
    },
    hasLabel() {
      return !this.fullwidth && !this.outline && this.label;
    },

    hasOutlineLabel() {
      return this.hasOutline && this.label;
    },
    hasOutline() {
      return !this.fullwidth && this.outline;
    },
    hasLineRipple() {
      return !this.hasOutline && !this.multiline;
    },

    hasHelptext() {
      const { $scopedSlots: scopedSlots } = this;

      return (scopedSlots.helpText && scopedSlots.helpText()) || this.helptext;
    },
  },
  watch: {
    disabled() {
      this.foundation && this.foundation.setDisabled(this.disabled);
    },
    required() {
      this.$refs.input && (this.$refs.input.required = this.required);
    },
    valid() {
      if (typeof this.valid !== 'undefined') {
        this.foundation && this.foundation.setValid(this.valid);
      }
    },

    value(value) {
      if (this.foundation) {
        if (value !== this.foundation.getValue()) {
          this.foundation.setValue(value);
        }
      }
    },
  },
  mounted() {
    this.foundation = new MDCTextFieldFoundation(
      Object.assign(
        {
          addClass: className => {
            this.$set(this.classes, className, true);
          },
          removeClass: className => {
            this.$delete(this.classes, className);
          },
          hasClass: className => {
            this.$refs.root.classList.contains(className);
          },
          registerTextFieldInteractionHandler: (evtType, handler) => {
            this.$refs.root.addEventListener(evtType, handler);
          },
          deregisterTextFieldInteractionHandler: (evtType, handler) => {
            this.$refs.root.removeEventListener(evtType, handler);
          },
          isFocused: () => {
            return document.activeElement === this.$refs.input;
          },

          registerValidationAttributeChangeHandler: handler => {
            const getAttributesList = mutationsList =>
              mutationsList.map(mutation => mutation.attributeName);
            const observer = new MutationObserver(mutationsList =>
              handler(getAttributesList(mutationsList)),
            );
            const targetNode = this.$refs.input;
            const config = { attributes: true };
            observer.observe(targetNode, config);
            return observer;
          },
          deregisterValidationAttributeChangeHandler: observer => {
            observer.disconnect();
          },
        },
        this.getInputAdapterMethods(),
        this.getLabelAdapterMethods(),
        this.getLineRippleAdapterMethods(),
        this.getOutlineAdapterMethods(),
      ),
      {
        helperText: this.$refs.helpertextEl
          ? this.$refs.helpertextEl.foundation
          : void 0,
        leadingIcon: this.$refs.leadingIconEl
          ? this.$refs.leadingIconEl.foundation
          : void 0,
        trailingIcon: this.$refs.trailingIconEl
          ? this.$refs.trailingIconEl.foundation
          : void 0,
      },
    );
    this.foundation.init();
    this.foundation.setValue(this.value);
    this.foundation.setDisabled(this.disabled);
    this.$refs.input && (this.$refs.input.required = this.required);
    if (typeof this.valid !== 'undefined') {
      this.foundation.setValid(this.valid);
    }

    const isTextArea = this.$refs.root.classList.contains(
      'mdc-text-field--textarea',
    );
    const isOutlined = this.$refs.root.classList.contains(
      'mdc-text-field--outlined',
    );

    if (!isTextArea && !isOutlined) {
      this.ripple = new RippleBase(this, {
        isSurfaceActive: () => matches(this.$refs.input, ':active'),
        registerInteractionHandler: (evtType, handler) => {
          this.$refs.input.addEventListener(evtType, handler, applyPassive());
        },
        deregisterInteractionHandler: (evtType, handler) =>
          this.$refs.input.removeEventListener(
            evtType,
            handler,
            applyPassive(),
          ),
      });
      this.ripple.init();
    }
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    getInputAdapterMethods() {
      return {
        registerInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.addEventListener(evtType, handler, applyPassive());
        },
        deregisterInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.removeEventListener(
            evtType,
            handler,
            applyPassive(),
          );
        },
        getNativeInput: () => {
          return this.$refs.input;
        },
      };
    },
    getLabelAdapterMethods() {
      return {
        shakeLabel: shouldShake => {
          this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake);
        },
        floatLabel: shouldFloat => {
          this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat);
        },
        hasLabel: () => {
          return !!this.$refs.labelEl || !!this.$refs.notchedEl;
        },
        getLabelWidth: () => {
          return this.$refs.labelEl && this.$refs.labelEl.getWidth();
        },
      };
    },
    getLineRippleAdapterMethods() {
      return {
        deactivateLineRipple: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.deactivate();
          }
        },
        activateLineRipple: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.activate();
          }
        },
        setLineRippleTransformOrigin: normalizedX => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.setRippleCenter(normalizedX);
          }
        },
      };
    },
    getOutlineAdapterMethods() {
      return {
        hasOutline: () => !!this.hasOutline,
        notchOutline: (notchWidth, isRtl) =>
          this.$refs.labelEl.notch(notchWidth, isRtl),
        closeOutline: () => this.$refs.labelEl.closeNotch(),
      };
    },
    updateValue(value) {
      this.$emit('model', value);
    },
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const rootNodes = [];

    const leadingIconSlot =
      scopedSlots.leadingIcon && scopedSlots.leadingIcon();
    if (leadingIconSlot) {
      rootNodes.push(
        createElement(
          'textfield-icon',
          { ref: 'leadingIconEl', props: { leading: true } },
          leadingIconSlot,
        ),
      );
    }

    if (this.multiline) {
      rootNodes.push(
        createElement('textarea', {
          class: this.inputClasses,
          attrs: {
            ...this.$attrs,
            id: this.vma_uid_,
            minlength: this.minlength,
            maxlength: this.maxlength,
            placeholder: this.inputPlaceHolder,
            'aria-label': this.inputPlaceHolder,
            'aria-controls': this.inputAriaControls,
            rows: this.rows,
            cols: this.cols,
          },
          ref: 'input',
          on: {
            ...this.$listeners,
            input: evt => this.updateValue(evt.target.value),
          },
        }),
      );
    } else {
      rootNodes.push(
        createElement('span', {
          class: 'mdc-text-field__ripple',

          ref: 'ripple',
        }),
      );
      rootNodes.push(
        createElement('input', {
          class: this.inputClasses,
          attrs: {
            ...this.$attrs,
            id: this.vma_uid_,
            type: this.type,
            minlength: this.minlength,
            maxlength: this.maxlength,
            placeholder: this.inputPlaceHolder,
            'aria-label': this.inputPlaceHolder,
            'aria-controls': this.inputAriaControls,
            'aria-labelledby': `label-${this.vma_uid_}`,
          },
          ref: 'input',
          on: {
            ...this.$listeners,
            input: evt => this.updateValue(evt.target.value),
          },
        }),
      );
    }

    if (this.hasLabel) {
      rootNodes.push(
        createElement(
          mcwFloatingLabel,
          {
            attrs: { id: `label-${this.vma_uid_}` },
            ref: 'labelEl',
          },
          this.label,
        ),
      );
    }

    const trailingIconSlot =
      scopedSlots.trailingIcon && scopedSlots.trailingIcon();

    if (trailingIconSlot) {
      rootNodes.push(
        createElement(
          'textfield-icon',
          { ref: 'trailingIconEl', props: { leading: false } },
          trailingIconSlot,
        ),
      );
    }

    if (this.hasOutline) {
      rootNodes.push(
        createElement(
          mcwNotchedOutline,
          {
            ref: 'labelEl',
          },
          this.label,
        ),
      );
    }

    if (this.hasLineRipple) {
      rootNodes.push(
        createElement(mcwLineRipple, {
          ref: 'lineRippleEl',
        }),
      );
    }

    const rootEl = createElement(
      'label',
      {
        class: this.classes,
        style: this.styles,
        ref: 'root',
      },
      rootNodes,
    );

    const nodes = [rootEl];

    const helpTextSlot = scopedSlots.helpText && scopedSlots.helpText();

    if (this.hasHelptext) {
      nodes.push(
        createElement(
          'textfield-helper-text',
          {
            attrs: {
              id: `help${this.vma_uid_}`,
              helptext: this.helptext,
              persistent: this.helptextPersistent,
              validation: this.helptextValidation,
            },
            ref: 'helpertextEl',
          },
          helpTextSlot,
        ),
      );
    }

    return createElement(
      'div',
      {
        style: { width: this.fullwidth ? '100%' : void 0 },
        attrs: { id: this.id },
      },
      nodes,
    );
  },
};

var textfield = BasePlugin({
  mcwTextfield,
});

const BASE$1 = 'mdc-top-app-bar';
const SECTION = `${BASE$1}__section`;
const cssClasses$4 = {
  BASE: BASE$1,
  ROW: `${BASE$1}__row`,
  SECTION,
  SECTION_START: `${SECTION}--align-start`,
  SECTION_END: `${SECTION}--align-end`,
  FIXED: `${BASE$1}--fixed`,
  SHORT: `${BASE$1}--short`,
  SHORT_COLLAPSED: `${BASE$1}--short-collapsed`,
  PROMINENT: `${BASE$1}--prominent`,
  DENSE: `${BASE$1}--dense`,
  TITLE: `${BASE$1}__title`,
  ACTION_ITEM: `${BASE$1}__action-item`,
  NAV_ICON: `${BASE$1}__navigation-icon`,
};

var mcwTopAppBar = {
  name: 'mcw-top-app-bar',
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    fixed: Boolean,
    dense: Boolean,
    tag: { type: String, default: 'header' },
    scrollTarget: HTMLElement,
  },
  data() {
    return {
      rootStyles: { top: '0' },
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.shortCollapsed,
        'mdc-top-app-bar--prominent': this.prominent,
        'mdc-top-app-bar--fixed': this.fixed,
      },
      myScrollTarget: null,
    };
  },

  watch: {
    scrollTarget(nv, ov) {
      if (nv !== ov) {
        this.myScrollTarget.removeEventListener(
          'scroll',
          this.foundation_.handleTargetScroll,
        );
        this.myScrollTarget = nv;
        this.myScrollTarget.addEventListener(
          'scroll',
          this.foundation_.handleTargetScroll,
        );
      }
    },
  },
  methods: {
    handleNavigationClick_(event) {
      this.foundation_.handleNavigationClick(event);
    },
  },

  mounted() {
    const {
      strings: { NAVIGATION_EVENT, NAVIGATION_ICON_SELECTOR },
    } = MDCTopAppBarFoundation;

    const adapter = {
      addClass: className => this.$set(this.rootClasses, className, true),
      removeClass: className => this.$delete(this.rootClasses, className),
      hasClass: className => Boolean(this.rootClasses[className]),
      setStyle: (property, value) =>
        this.$set(this.rootStyles, property, value),
      getTopAppBarHeight: () => this.$el.clientHeight,
      notifyNavigationIconClicked: () => {
        this.$emit('nav', {});
        emitCustomEvent(
          this.$el,
          NAVIGATION_EVENT,
          {},
          /** shouldBubble */ true,
        );
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
      getViewportScrollY: () => window.pageYOffset,
      getTotalActionItems: () =>
        this.$refs.root.querySelectorAll(`.${cssClasses$4.ACTION_ITEM}`).length,
    };

    const { short, shortCollapsed, fixed } = this;
    if (short || shortCollapsed) {
      this.foundation_ = new MDCShortTopAppBarFoundation(adapter);
    } else if (fixed) {
      this.foundation_ = new MDCFixedTopAppBarFoundation(adapter);
    } else {
      this.foundation_ = new MDCTopAppBarFoundation(adapter);
    }

    this.navIcon_ = this.$el.querySelector(NAVIGATION_ICON_SELECTOR);

    if (this.navIcon_) {
      this.navIcon_.addEventListener('click', this.handleNavigationClick_);
    }

    this.myScrollTarget = this.scrollTarget || window;
    this.foundation_.init();
  },
  beforeDestroy() {
    if (this.navIcon_) {
      this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
    }

    this.myScrollTarget &&
      this.myScrollTarget.removeEventListener(
        'scroll',
        this.foundation_.handleTargetScroll,
      );
    this.foundation_.destroy();
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      this.tag,
      {
        class: this.rootClasses,
        style: this.rootStyles,
        ref: 'root',
        on: this.$listeners,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwFixedAdjust = {
  name: 'mcw-fixed-adjust',
  functional: true,
  props: {
    tag: { type: String, default: 'main' },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean,
  },

  render(
    createElement,
    {
      props: { short, dense, prominent, tag },
      scopedSlots,
      data: { attrs, staticStyle, staticClass },
    },
  ) {
    const base = 'mdc-top-app-bar';
    const suffix = '-fixed-adjust';
    return createElement(
      tag,
      {
        class: [
          {
            [base + '--short' + suffix]: short,
            [base + '--dense' + suffix]: dense && !prominent,
            [base + '--dense-prominent' + suffix]: dense && prominent,
            [base + '--prominent' + suffix]: !dense && prominent,
            [base + '-' + suffix]: !short && !dense && !prominent,
          },
          staticClass,
        ],
        style: staticStyle,
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwTopAppBarAction = {
  name: 'mcw-top-app-bar-action',
  mixins: [DispatchEventMixin, RippleMixin],
  props: {
    tag: { type: String, default: 'a' },
    icon: String,
    iconClasses: Object,
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      this.tag,
      {
        class: {
          'mdc-icon-button': 1,
          'mdc-top-app-bar-action': true,
          'mdc-top-app-bar--action': true,
          'mdc-top-app-bar__action-item': true,
          'material-icons': !!this.icon && !this.$slots.default,
        },
        attrs: this.$attrs,
        on: this.$listeners,
      },
      (scopedSlots.default && scopedSlots.default()) || [this.icon],
    );
  },
};

var mcwTopAppBarIcon = {
  name: 'mcw-top-app-bar-icon',
  props: { actionItem: Boolean, navIcon: Boolean },

  render(createElement) {
    const {
      $attrs: attrs,
      $scopedSlots: scopedSlots,
      actionItem,
      navIcon,
    } = this;
    const slot = (scopedSlots.default && scopedSlots.default()) || [];
    const nodes = slot.map(vn => {
      if (!vn.tag || !vn.componentOptions) {
        const data = vn.data || (vn.data = {});
        data.staticClass = `${
          actionItem ? cssClasses$4.ACTION_ITEM : cssClasses$4.NAV_ICON
        } ${data.staticClass || ''} mdc-icon-button`;
        data.attrs = { ...data.attrs, ...attrs };
        return vn;
      }

      const data = vn.data || {};
      return createElement(
        vn.componentOptions.tag,
        {
          class: {
            'mdc-icon-button': 1,
            [cssClasses$4.ACTION_ITEM]: actionItem,
            [cssClasses$4.NAV_ICON]: navIcon,
          },
          props: {
            ...vn.componentOptions.propsData,
          },
          attrs: {
            ...data.attrs,
            tag: 'button',
          },
          on: vn.componentOptions.listeners,
        },
        vn.componentOptions.children,
      );
    });

    return nodes;
  },
};

var mcwTopAppBarRow = {
  name: 'mcw-top-app-bar-row',
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
  functional: true,

  render(
    createElement,
    {
      props: { tag },
      scopedSlots,
      data: { attrs, staticClass },
    },
  ) {
    return createElement(
      tag,
      { class: [cssClasses$4.ROW, staticClass], attrs },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwTopAppBarSection = {
  name: 'mcw-top-app-bar-section',
  props: {
    align: {
      type: String,
      default() {
        return 'start';
      },
    },
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
  functional: true,

  render(
    createElement,
    {
      props: { tag, align },
      scopedSlots,
      data: { attrs, staticClass },
    },
  ) {
    const classes = [cssClasses$4.SECTION, staticClass];

    align == 'start' && classes.push(cssClasses$4.SECTION_START);
    align == 'end' && classes.push(cssClasses$4.SECTION_END);

    return createElement(
      tag,
      { class: classes, attrs },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var mcwTopAppBarTitle = {
  name: 'mcw-top-app-bar-title',
  props: {
    tag: {
      type: String,
      default() {
        return 'span';
      },
    },
  },
  functional: true,

  render(
    createElement,
    {
      props: { tag },
      scopedSlots,
      data: { attrs, staticClass },
    },
  ) {
    return createElement(
      tag,
      { class: [cssClasses$4.TITLE, staticClass], attrs },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

var topAppBar = BasePlugin({
  mcwTopAppBar,
  mcwTopAppBarAction,
  mcwFixedAdjust,
  mcwTopAppBarIcon,
  mcwTopAppBarRow,
  mcwTopAppBarSection,
  mcwTopAppBarTitle,
});

function mcwTypoMixin(
  defaultTag,
  defaultClassModifier,
  name = `mdc-${defaultTag}`,
) {
  return {
    functional: true,
    props: {
      tag: {
        type: String,
        default: defaultTag,
      },
      classModifier: {
        type: String,
        default: defaultClassModifier,
      },
    },
    render(
      createElement,
      {
        props: { tag, classModifier },
        scopedSlots,
        listeners,
        data: { attrs },
      },
    ) {
      return createElement(
        tag,
        {
          class: {
            [name]: true,
            'mdc-typography': true,
            [`mdc-typography--${classModifier}`]: true,
          },
          attrs,
          on: listeners,
        },
        scopedSlots.default && scopedSlots.default(),
      );
    },
  };
}

const mcwHeadline1 = {
  name: 'mcw-headline1',
  functional: true,
  mixins: [mcwTypoMixin('h1', 'headline1')],
};

const mcwHeadline2 = {
  name: 'mcw-headline2',
  functional: true,
  mixins: [mcwTypoMixin('h2', 'headline2')],
};

const mcwHeadline3 = {
  name: 'mcw-headline3',
  functional: true,
  mixins: [mcwTypoMixin('h3', 'headline3')],
};

const mcwHeadline4 = {
  name: 'mcw-headline4',
  functional: true,
  mixins: [mcwTypoMixin('h4', 'headline4')],
};

const mcwHeadline5 = {
  name: 'mcw-headline5',
  functional: true,
  mixins: [mcwTypoMixin('h5', 'headline5')],
};

const mcwHeadline6 = {
  name: 'mcw-headline6',
  functional: true,
  mixins: [mcwTypoMixin('h6', 'headline6')],
};

const mcwSubtitle1 = {
  name: 'mcw-subtitle1',
  functional: true,
  mixins: [mcwTypoMixin('h6', 'subtitle1')],
};
const mcwSubtitle2 = {
  name: 'mcw-subtitle2',
  functional: true,
  mixins: [mcwTypoMixin('h6', 'subtitle2')],
};

const mcwBody1 = {
  name: 'mcw-body1',
  functional: true,
  mixins: [mcwTypoMixin('p', 'body1')],
};

const mcwBody2 = {
  name: 'mcw-body2',
  functional: true,
  mixins: [mcwTypoMixin('p', 'body2')],
};

const mcwButton1 = {
  name: 'mcw-button1',
  functional: true,
  mixins: [mcwTypoMixin('span', 'button', 'mdc-button1')],
};

const mcwCaption = {
  name: 'mcw-caption',
  functional: true,
  mixins: [mcwTypoMixin('span', 'caption')],
};

const mcwOverline = {
  name: 'mcw-overline',
  functional: true,
  mixins: [mcwTypoMixin('span', 'overline')],
};

var typography = BasePlugin({
  mcwHeadline1,
  mcwHeadline2,
  mcwHeadline3,
  mcwHeadline4,
  mcwHeadline5,
  mcwHeadline6,
  mcwOverline,
  mcwSubtitle1,
  mcwSubtitle2,
  mcwBody1,
  mcwBody2,
  mcwButton1,
  mcwCaption,
});

var index$1 = {
  install(vm) {
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
  },
};

export default index$1;
export { index as base, button, card, checkbox, chips, circularProgress, dataTable, dialog, drawer, fab, floatingLabel, iconButton, layoutGrid, lineRipple, linearProgress, list, materialIcon, menu, notchedOutline, radio, select, slider, snackbar, switchControl, tabs, textfield, topAppBar, typography };
