import { resolveDynamicComponent, h, ref, computed, onMounted, onBeforeUnmount, openBlock, createElementBlock, renderSlot, normalizeProps, guardReactiveProps, mergeProps, reactive, watch, toRefs, resolveComponent, normalizeClass, normalizeStyle, createVNode, withCtx, createElementVNode, toDisplayString, createCommentVNode, withModifiers, shallowReactive, defineComponent, createBlock, toRef, createSlots, createTextVNode, inject, getCurrentInstance, Fragment, provide, renderList, nextTick, toHandlers, watchEffect } from 'vue';
import { MDCFormFieldFoundation } from '@material/form-field/foundation.js';
import { MDCBannerFoundation } from '@material/banner/index.js';
import { FocusTrap } from '@material/dom/focus-trap.js';
import { applyPassive } from '@material/dom/events.js';
import { matches, closest } from '@material/dom/ponyfill.js';
import { MDCRippleFoundation } from '@material/ripple/index.js';
import { supportsCssVariables } from '@material/ripple/util.js';
import { getCorrectEventName } from '@material/animation/index.js';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation.js';
import { MDCChipPrimaryActionFoundation, MDCChipTrailingActionFoundation } from '@material/chips/action/index.js';
import { MDCChipSetFoundation } from '@material/chips/chip-set/index.js';
import { announce } from '@material/dom/announce.js';
import { MDCChipFoundation } from '@material/chips/chip/foundation.js';
import { MDCCircularProgressFoundation } from '@material/circular-progress/foundation.js';
import { cssClasses as cssClasses$7, MDCDataTableFoundation, selectors, dataAttributes, SortValue, messages } from '@material/data-table/index.js';
import { MDCDialogFoundation } from '@material/dialog/foundation.js';
import * as util from '@material/dialog/util.js';
import { MDCDismissibleDrawerFoundation } from '@material/drawer/dismissible/foundation.js';
import { MDCModalDrawerFoundation } from '@material/drawer/modal/foundation.js';
import * as util$1 from '@material/drawer/util.js';
import { MDCListFoundation } from '@material/list/foundation.js';
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation.js';
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import { MDCLinearProgressFoundation } from '@material/linear-progress/foundation.js';
import { cssClasses as cssClasses$8, MDCListFoundation as MDCListFoundation$1, strings as strings$b } from '@material/list/index.js';
import { getCorrectPropertyName } from '@material/animation/util.js';
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation.js';
import { MDCMenuFoundation } from '@material/menu/foundation.js';
import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation.js';
import { MDCRadioFoundation } from '@material/radio/foundation.js';
import { MDCSegmentedButtonSegmentFoundation } from '@material/segmented-button/segment/index.js';
import { MDCSegmentedButtonFoundation } from '@material/segmented-button/index.js';
import { MDCSelectFoundation } from '@material/select/foundation.js';
import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';
import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { MDCSliderFoundation, cssClasses as cssClasses$9, Thumb, events } from '@material/slider';
import { MDCSnackbarFoundation } from '@material/snackbar/foundation.js';
import { CssClasses, MDCSwitchRenderFoundation } from '@material/switch/index.js';
import { MDCTabBarFoundation } from '@material/tab-bar/foundation.js';
import { MDCFadingTabIndicatorFoundation } from '@material/tab-indicator/fading-foundation.js';
import { MDCTabIndicatorFoundation } from '@material/tab-indicator/foundation.js';
import { MDCSlidingTabIndicatorFoundation } from '@material/tab-indicator/sliding-foundation.js';
import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation.js';
import * as util$2 from '@material/tab-scroller/util.js';
import MDCTabFoundation from '@material/tab/foundation.js';
import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield/character-counter/foundation.js';
import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text/foundation.js';
import { MDCTextFieldIconFoundation } from '@material/textfield/icon/foundation.js';
import { MDCTextFieldFoundation } from '@material/textfield/foundation.js';
import { MDCTooltipFoundation, events as events$1, CssClasses as CssClasses$1 } from '@material/tooltip';
import { MDCFixedTopAppBarFoundation } from '@material/top-app-bar/fixed/foundation.js';
import { MDCShortTopAppBarFoundation } from '@material/top-app-bar/short/foundation.js';
import { MDCTopAppBarFoundation } from '@material/top-app-bar/standard/foundation.js';

function BasePlugin(components) {
  return {
    version: "__VERSION__",
    install: (vm) => {
      for (const [key, component] of Object.entries(components)) {
        const name = key.replace(/([\da-z])([A-Z])/g, "$1-$2").toLowerCase();
        const [pfx, ...rest] = name.split("-");
        const mdcName = ["mdc", ...rest].join("-");
        const mcwName = ["mcw", ...rest].join("-");
        const haveComponent = vm._context.components[mcwName];
        if (!haveComponent) {
          vm.component(mcwName, component);
          vm.component(mdcName, component);
        }
      }
    },
    components
  };
}

function emitCustomEvent(element, eventType, eventData, shouldBubble = false) {
  if (element) {
    eventType = eventType.toLowerCase();
    const event_ = typeof CustomEvent === "function" ? new CustomEvent(eventType, {
      detail: eventData,
      bubbles: shouldBubble
    }) : createCustomEvent(eventType, shouldBubble, eventData);
    element.dispatchEvent(event_);
  }
}
const createCustomEvent = (eventType, shouldBubble, eventData) => {
  const event_ = document.createEvent("CustomEvent");
  return event_.initCustomEvent(eventType, shouldBubble, false, eventData);
};

const CustomLink = {
  name: "custom-link",
  props: {
    tag: String,
    to: [String, Object]
  },
  setup(props, { slots, attrs }) {
    return () => {
      var _a;
      const { to, href, tag } = props;
      const routerLink = resolveDynamicComponent("router-link");
      if (to && routerLink) {
        const rtag = tag != null ? tag : "a";
        return h(routerLink, {
          custom: true,
          ...attrs,
          to
        }, {
          default: (props2) => {
            var _a2;
            return h(rtag, {
              ...attrs,
              onClick: (event_) => {
                event_.__itemId = attrs.itemId;
                props2.navigate(event_);
              }
            }, (_a2 = slots.default) == null ? void 0 : _a2.call(slots));
          }
        });
      }
      const element = href ? "a" : tag != null ? tag : "a";
      const role = href ? "button" : element !== "button" ? "button" : void 0;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return h(element, { ...attrs, role }, { default: () => children });
    };
  }
};

var formFieldWrapper = {
  props: {
    activate: Function,
    deactivate: Function,
    alignEnd: Boolean,
    forId: String
  },
  inheritAttrs: false,
  setup(props, { slots, attrs }) {
    const labelElement = ref();
    let formField;
    const hasLabel = !!slots.label;
    const formFieldClasses = computed(() => {
      return {
        "mdc-form-field": hasLabel,
        "mdc-form-field--align-end": hasLabel && props.alignEnd
      };
    });
    onMounted(() => {
      if (props.hasLabel) {
        formField = new MDCFormFieldFoundation({
          registerInteractionHandler: (type, handler) => {
            labelElement.value.addEventListener(type, handler);
          },
          deregisterInteractionHandler: (type, handler) => {
            labelElement.value.removeEventListener(type, handler);
          },
          activateInputRipple: () => {
            props == null ? void 0 : props.activate();
          },
          deactivateInputRipple: () => {
            props == null ? void 0 : props.deactivate();
          }
        });
        formField.init();
      }
    });
    onBeforeUnmount(() => {
      formField == null ? void 0 : formField.destroy();
    });
    return () => {
      var _a, _b;
      const cl = {};
      if (attrs.class) {
        for (const c of attrs.class.split(" ")) {
          cl[c] = 1;
        }
      }
      if (hasLabel) {
        return h("div", {
          class: {
            ...formFieldClasses.value,
            ...cl
          }
        }, [
          (_a = slots.default) == null ? void 0 : _a.call(slots),
          h("label", {
            for: props.forId,
            ref: labelElement
          }, [(_b = slots.label) == null ? void 0 : _b.call(slots)])
        ]);
      }
      return slots.default();
    };
  }
};

var touchWrapper = {
  inheritAttrs: false,
  props: { isTouch: Boolean },
  setup(props, { slots }) {
    return () => {
      if (props.isTouch) {
        return h("div", { class: "mdc-touch-target-wrapper" }, [
          slots.default()
        ]);
      }
      return slots.default();
    };
  }
};

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BasePlugin: BasePlugin,
  emitCustomEvent: emitCustomEvent,
  CustomLink: CustomLink,
  formFieldWrapper: formFieldWrapper,
  touchWrapper: touchWrapper
});

var script$r = {
  inheritAttrs: false,
  props: {
    fixed: Boolean
  },
  setup() {
    return {};
  }
};

const _hoisted_1$n = {
  key: 0,
  class: "mdc-banner__fixed"
};
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.fixed ? (openBlock(), createElementBlock("div", _hoisted_1$n, [
    renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.$attrs)))
  ])) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
}

script$r.render = render$r;
script$r.__file = "src/banner/banner-content.vue";

const focusTrapFactory_$2 = (element, options) => new FocusTrap(element, options);
var script$q = {
  name: "mcw-banner",
  props: {
    centered: Boolean,
    modelValue: Boolean,
    text: String,
    primaryAction: String,
    secondaryAction: String,
    mobile: Boolean,
    fixed: Boolean,
    disableAutoClose: Boolean,
    icon: { type: String, default: () => "" }
  },
  components: { bannerContent: script$r },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        "mdc-banner--centered": props.centered,
        "mdc-banner--mobile-stacked": props.mobile
      },
      styles: {},
      root: void 0,
      contentEl: void 0,
      primaryActionEl: void 0
    });
    let foundation;
    let focusTrap;
    const onOpen = (nv) => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close(nv);
      }
    };
    const close = (reason) => {
      foundation.close(reason);
    };
    const onContentClick = (target) => {
      if (target == 1) {
        foundation.handleSecondaryActionClick(props.disableAutoClose);
      } else {
        foundation.handlePrimaryActionClick(props.disableAutoClose);
      }
    };
    const adapter = {
      addClass: (className) => {
        uiState.classes = { ...uiState.classes, [className]: true };
        uiState.root.classList.add(className);
      },
      getContentHeight: () => {
        return uiState.contentEl.offsetHeight;
      },
      notifyClosed: (reason) => {
        emit("mdcbanner:closed", { reason });
      },
      notifyClosing: (reason) => {
        emit("update:modelValue", false);
        emit("mdcbanner:closing", { reason });
      },
      notifyOpened: () => emit("mdcbanner:opened", {}),
      notifyOpening: () => {
        emit("mdcbanner:opening", {});
      },
      notifyActionClicked: (action) => {
        emit("mdcbanner:actionclicked", { action });
      },
      releaseFocus: () => {
        focusTrap.releaseFocus();
      },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setStyleProperty: (property, value) => uiState.styles = { ...uiState.styles, [property]: value },
      trapFocus: () => {
        focusTrap.trapFocus();
      }
    };
    const haveIcon = computed(() => !!props.icon);
    watch(() => props.modelValue, (nv) => {
      onOpen(nv);
    });
    onMounted(() => {
      focusTrap = focusTrapFactory_$2(uiState.root, {
        initialFocusEl: uiState.primaryActionEl
      });
      foundation = new MDCBannerFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation == null ? void 0 : foundation.destroy();
    });
    return { ...toRefs(uiState), onContentClick, haveIcon, close };
  }
};

const _hoisted_1$m = {
  class: "mdc-banner__content",
  role: "alertdialog",
  "aria-live": "assertive",
  ref: "contentEl"
};
const _hoisted_2$l = { class: "mdc-banner__graphic-text-wrapper" };
const _hoisted_3$i = {
  key: 0,
  class: "mdc-banner__graphic",
  role: "img",
  alt: ""
};
const _hoisted_4$d = { class: "material-icons mdc-banner__icon" };
const _hoisted_5$a = { class: "mdc-banner__text" };
const _hoisted_6$9 = { class: "mdc-banner__actions" };
const _hoisted_7$6 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-button__ripple" }, null, -1);
const _hoisted_8$4 = { class: "mdc-button__label" };
const _hoisted_9$3 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-button__ripple" }, null, -1);
const _hoisted_10$2 = { class: "mdc-button__label" };
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_banner_content = resolveComponent("banner-content");
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: normalizeClass(["mdc-banner", _ctx.classes]),
    role: "banner",
    style: normalizeStyle(_ctx.styles)
  }, [
    createVNode(_component_banner_content, { fixed: _ctx.fixed }, {
      default: withCtx(() => [
        createElementVNode("div", _hoisted_1$m, [
          createElementVNode("div", _hoisted_2$l, [
            _ctx.haveIcon ? (openBlock(), createElementBlock("div", _hoisted_3$i, [
              createElementVNode("i", _hoisted_4$d, toDisplayString(_ctx.icon), 1)
            ])) : createCommentVNode("v-if", true),
            createElementVNode("div", _hoisted_5$a, toDisplayString(_ctx.text), 1)
          ]),
          createElementVNode("div", _hoisted_6$9, [
            _ctx.secondaryAction ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "mdc-button mdc-banner__secondary-action",
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.onContentClick(1), ["stop"]))
            }, [
              _hoisted_7$6,
              createElementVNode("div", _hoisted_8$4, toDisplayString(_ctx.secondaryAction), 1)
            ])) : createCommentVNode("v-if", true),
            createElementVNode("button", {
              type: "button",
              class: "mdc-button mdc-banner__primary-action",
              ref: "primaryActionEl",
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.onContentClick(0), ["stop"]))
            }, [
              _hoisted_9$3,
              createElementVNode("div", _hoisted_10$2, toDisplayString(_ctx.primaryAction), 1)
            ], 512)
          ])
        ], 512)
      ]),
      _: 1
    }, 8, ["fixed"])
  ], 6);
}

script$q.render = render$q;
script$q.__file = "src/banner/banner.vue";

var banner = BasePlugin({
  mcwBanner: script$q
});

class RippleElement extends MDCRippleFoundation {
  constructor(element, state, { unbounded = false, ...options } = {}) {
    var _a;
    const $element = (_a = element.$el) != null ? _a : element;
    super({
      addClass: (className) => {
        if (state) {
          state.classes = { ...state.classes, [className]: true };
        } else {
          $element.classList.add(className);
        }
      },
      browserSupportsCssVars: () => supportsCssVariables(window),
      computeBoundingRect: () => $element.getBoundingClientRect(),
      containsEventTarget: (target) => $element.contains(target),
      deregisterDocumentInteractionHandler: (eventType, handler) => document.documentElement.removeEventListener(eventType, handler, applyPassive()),
      deregisterInteractionHandler: (event_, handler) => $element.removeEventListener(event_, handler, applyPassive()),
      deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => matches($element, ":active"),
      isSurfaceDisabled: () => false,
      isUnbounded: () => this.unbounded_,
      registerDocumentInteractionHandler: (eventType, handler) => document.documentElement.addEventListener(eventType, handler, applyPassive()),
      registerInteractionHandler: (event_, handler) => {
        $element.addEventListener(event_, handler, applyPassive());
      },
      registerResizeHandler: (handler) => {
        return window.addEventListener("resize", handler);
      },
      removeClass: (className) => {
        if (state) {
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
      ...options
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
function useRipplePlugin(root, options) {
  const ripple = ref();
  const state = shallowReactive({ classes: {}, styles: {} });
  const activate = () => {
    var _a;
    return (_a = ripple.value) == null ? void 0 : _a.activate();
  };
  const deactivate = () => {
    var _a;
    return (_a = ripple.value) == null ? void 0 : _a.deactivate();
  };
  onMounted(() => {
    ripple.value = new RippleElement(root.value, state, options);
    ripple.value.init();
  });
  onBeforeUnmount(() => {
    ripple.value.destroy();
  });
  return { ...toRefs(state), activate, deactivate };
}

var script$p = defineComponent({
  name: "mcw-button",
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String,
    isTouch: Boolean
  },
  components: { CustomLink },
  setup(props, { slots }) {
    const root = ref();
    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const haveIcon = computed(() => {
      var _a;
      return (_a = slots.icon) != null ? _a : props.icon;
    });
    const haveTrailingIcon = computed(() => {
      var _a;
      return (_a = slots.trailingIcon) != null ? _a : props.trailingIcon;
    });
    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        "mdc-button": true,
        "mdc-button--raised": props.raised,
        "mdc-button--unelevated": props.unelevated && !props.raised,
        "mdc-button--outlined": props.outlined,
        "mdc-button--icon-leading": haveIcon.value,
        "mdc-button--icon-trailing": haveTrailingIcon.value
      };
    });
    return {
      styles,
      classes,
      root,
      haveIcon,
      haveTrailingIcon
    };
  }
});

const _hoisted_1$l = /* @__PURE__ */ createElementVNode("div", { class: "mdc-button__ripple" }, null, -1);
const _hoisted_2$k = {
  key: 0,
  class: "mdc-button__touch"
};
const _hoisted_3$h = /* @__PURE__ */ createElementVNode("span", { class: "mdc-button__focus-ring" }, null, -1);
const _hoisted_4$c = {
  class: "material-icons mdc-button__icon",
  "aria-hidden": "true"
};
const _hoisted_5$9 = { class: "mdc-button__label" };
const _hoisted_6$8 = {
  class: "material-icons mdc-button__icon",
  "aria-hidden": "true"
};
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");
  return openBlock(), createBlock(_component_custom_link, {
    ref: "root",
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.styles),
    tag: "button"
  }, {
    default: withCtx(() => [
      _hoisted_1$l,
      _ctx.isTouch ? (openBlock(), createElementBlock("span", _hoisted_2$k)) : createCommentVNode("v-if", true),
      _hoisted_3$h,
      _ctx.haveIcon ? renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
        createElementVNode("i", _hoisted_4$c, toDisplayString(_ctx.icon), 1)
      ]) : createCommentVNode("v-if", true),
      createElementVNode("span", _hoisted_5$9, [
        renderSlot(_ctx.$slots, "default")
      ]),
      _ctx.haveTrailingIcon ? renderSlot(_ctx.$slots, "trailingIcon", { key: 2 }, () => [
        createElementVNode("i", _hoisted_6$8, toDisplayString(_ctx.trailingIcon), 1)
      ]) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["class", "style"]);
}

script$p.render = render$p;
script$p.__file = "src/button/button.vue";

var button = BasePlugin({
  mcwButton: script$p
});

var mcwCardActionButtons = {
  name: "mcw-card-action-buttons",
  setup(props, { slots }) {
    return () => {
      var _a;
      return h("div", {
        class: ["mdc-card__action-buttons"]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
};

var mcwCardActionIcons = {
  name: "mcw-card-action-icons",
  setup(props, { slots }) {
    return () => {
      var _a;
      return h("div", {
        class: ["mdc-card__action-icons"]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
};

var mcwCardActions = {
  name: "mcw-card-actions",
  props: {
    fullBleed: Boolean
  },
  setup(props, { slots }) {
    return () => {
      var _a;
      return h("section", {
        class: [
          {
            "mdc-card__actions": 1,
            "mdc-card__actions--full-bleed": props.fullBleed
          }
        ]
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

var mcwCardMedia = {
  name: "mcw-card-media",
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
  setup(props, { slots }) {
    return () => {
      var _a;
      const nodes = [];
      const content = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (content) {
        nodes.push(h("div", { class: ["mdc-card__media-content", props.contentClass] }, content));
      }
      return h("section", {
        class: {
          "mdc-card__media": 1,
          "mdc-card__media--square": props.square,
          "mdc-card__media--16-9": props.wide && !props.square
        },
        style: {
          backgroundImage: `url(${props.src})`
        }
      }, nodes);
    };
  }
};

var mcwCardPrimaryAction = {
  name: "mcw-card-primary-action",
  setup(props, { slots }) {
    const root = ref();
    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, "mdc-card__primary-action": 1 };
    });
    return () => {
      return h(CustomLink, { ref: root, class: classes.value, style: styles, tabindex: "0" }, () => [slots.default(), h("div", { class: "mdc-card__ripple" })]);
    };
  }
};

var mcwCard = {
  name: "mcw-card",
  props: {
    outlined: Boolean
  },
  setup(props, { attrs, slots }) {
    return () => {
      var _a;
      const { outlined } = props;
      return h("div", {
        class: [
          {
            "mdc-card": 1,
            "mdc-card--outlined": outlined
          }
        ],
        ...attrs
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

var card = BasePlugin({
  mcwCard,
  mcwCardPrimaryAction,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons
});

var checkboxContent = {
  props: {
    activate: Function,
    deactivate: Function,
    alignEnd: Boolean,
    checkboxId: String
  },
  inheritAttrs: false,
  setup(props, { slots }) {
    const labelElement = ref();
    let formField;
    const hasLabel = !!slots.label;
    const formFieldClasses = computed(() => {
      return {
        "mdc-form-field": hasLabel,
        "mdc-form-field--align-end": hasLabel && props.alignEnd
      };
    });
    onMounted(() => {
      if (props.hasLabel) {
        formField = new MDCFormFieldFoundation({
          registerInteractionHandler: (type, handler) => {
            labelElement.value.addEventListener(type, handler);
          },
          deregisterInteractionHandler: (type, handler) => {
            labelElement.value.removeEventListener(type, handler);
          },
          activateInputRipple: () => {
            props == null ? void 0 : props.activate();
          },
          deactivateInputRipple: () => {
            props == null ? void 0 : props.deactivate();
          }
        });
        formField.init();
      }
    });
    onBeforeUnmount(() => {
      formField == null ? void 0 : formField.destroy();
    });
    return () => {
      var _a, _b;
      if (hasLabel) {
        return h("div", { class: { "mdc-checkbox-wrapper": 1, ...formFieldClasses.value } }, [
          (_a = slots.default) == null ? void 0 : _a.call(slots),
          h("label", {
            for: props.checkboxId,
            ref: labelElement
          }, [(_b = slots.label) == null ? void 0 : _b.call(slots)])
        ]);
      }
      return slots.default();
    };
  }
};

const CB_PROTO_PROPS = ["checked", "indeterminate"];
let checkboxId_ = 0;
var script$o = {
  name: "mcw-checkbox",
  props: {
    modelValue: { type: [Boolean, Array], default: () => false },
    indeterminate: { type: Boolean, default: () => false },
    disabled: Boolean,
    label: String,
    alignEnd: Boolean,
    value: {
      type: [String, Number],
      default() {
        return "on";
      }
    },
    name: String
  },
  inheritAttrs: false,
  setup(props, { emit, slots }) {
    const uiState = reactive({
      classes: { "mdc-checkbox": 1 },
      control: void 0,
      labelEl: void 0,
      root: void 0
    });
    let foundation;
    const checkboxId = `__mcw-checkbox-${checkboxId_++}`;
    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate
    } = useRipplePlugin(toRef(uiState, "root"), {
      isUnbounded: () => true,
      isSurfaceActive: () => {
        return matches(uiState.control, ":active");
      },
      registerInteractionHandler: (event_, handler) => {
        uiState.control.addEventListener(event_, handler, applyPassive());
      },
      deregisterInteractionHandler: (event_, handler) => {
        uiState.control.removeEventListener(event_, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      }
    });
    const rootClasses = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });
    const hasLabel = computed(() => !!(props.label || slots.default));
    const onChange = ({ target: { indeterminate, checked } }) => {
      emit("update:indeterminate", indeterminate);
      if (Array.isArray(props.modelValue)) {
        const index = props.modelValue.indexOf(props.value);
        if (checked) {
          index < 0 && emit("update:modelValue", [...props.modelValue, props.value]);
        } else {
          index > -1 && emit("update:modelValue", [
            ...props.modelValue.slice(0, index),
            ...props.modelValue.slice(index + 1)
          ]);
        }
      } else {
        emitCustomEvent(uiState.root, "mdccheckbox:change", {}, true);
        emit("update:modelValue", checked);
      }
    };
    const isChecked = () => uiState.control.checked;
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      forceLayout: () => uiState.root.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => true,
      isChecked: () => uiState.control.checked,
      isIndeterminate: () => uiState.control.indeterminate,
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      removeNativeControlAttr: (attribute) => {
        uiState.control.removeAttribute(attribute);
      },
      setNativeControlAttr: (attribute, value) => {
        uiState.control.setAttribute(attribute, value);
      },
      setNativeControlDisabled: (disabled) => uiState.control.disabled = disabled
    };
    const handleAnimationEnd = () => foundation.handleAnimationEnd();
    const setChecked = (checked) => {
      uiState.control.checked = Array.isArray(checked) ? checked.includes(props.value) : checked;
    };
    const setIndeterminate = (indeterminate) => {
      uiState.control && (uiState.control.indeterminate = indeterminate);
    };
    const installPropertyChangeHooks_ = () => {
      const nativeCallback = uiState.control;
      const callbackProto = Object.getPrototypeOf(nativeCallback);
      for (const controlState of CB_PROTO_PROPS) {
        const desc = Object.getOwnPropertyDescriptor(callbackProto, controlState);
        if (validDescriptor(desc)) {
          const nativeCallbackDesc = {
            get: desc.get,
            set: (state) => {
              desc.set.call(nativeCallback, state);
              foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          };
          Object.defineProperty(nativeCallback, controlState, nativeCallbackDesc);
        }
      }
    };
    const uninstallPropertyChangeHooks_ = () => {
      const nativeCallback = uiState.control;
      const callbackProto = Object.getPrototypeOf(nativeCallback);
      for (const controlState of CB_PROTO_PROPS) {
        const desc = Object.getOwnPropertyDescriptor(callbackProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCallback, controlState, desc);
        }
      }
    };
    watch(() => props.disabled, (nv, ov) => {
      nv != ov && (foundation == null ? void 0 : foundation.setDisabled(nv));
    });
    watch(() => props.modelValue, (nv, ov) => {
      nv != ov && setChecked(nv);
    });
    watch(() => props.indeterminate, (nv, ov) => {
      nv != ov && setIndeterminate(nv);
    });
    const checkboxHelpers = {
      setIndeterminate,
      isChecked,
      setChecked,
      isIndeterminate: () => uiState.control.indeterminate
    };
    onMounted(() => {
      foundation = new MDCCheckboxFoundation(adapter);
      uiState.root.addEventListener(getCorrectEventName(window, "animationend"), handleAnimationEnd);
      uiState.root.__checkboxHelpers = checkboxHelpers;
      installPropertyChangeHooks_();
      foundation.init();
      setChecked(props.modelValue);
      foundation.setDisabled(props.disabled);
      setIndeterminate(props.indeterminate);
    });
    onBeforeUnmount(() => {
      uiState.root.removeEventListener(getCorrectEventName(window, "animationend"), handleAnimationEnd);
      uninstallPropertyChangeHooks_();
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      rootClasses,
      onChange,
      styles,
      hasLabel,
      setChecked,
      setIndeterminate,
      isChecked,
      checkboxId,
      activate,
      deactivate
    };
  },
  components: { checkboxContent }
};
function validDescriptor(inputPropertyDesc) {
  return !!inputPropertyDesc && typeof inputPropertyDesc.set === "function";
}

const _hoisted_1$k = ["id", "name", "value"];
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("div", { class: "mdc-checkbox__background" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    class: "mdc-checkbox__checkmark",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ createElementVNode("path", {
      class: "mdc-checkbox__checkmark-path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ createElementVNode("div", { class: "mdc-checkbox__mixedmark" })
], -1);
const _hoisted_3$g = /* @__PURE__ */ createElementVNode("div", { class: "mdc-checkbox__ripple" }, null, -1);
const _hoisted_4$b = /* @__PURE__ */ createElementVNode("div", { class: "mdc-checkbox__focus-ring" }, null, -1);
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox_content = resolveComponent("checkbox-content");
  return openBlock(), createBlock(_component_checkbox_content, {
    activate: _ctx.activate,
    deactivate: _ctx.deactivate,
    checkboxId: _ctx.checkboxId
  }, createSlots({
    default: withCtx(() => [
      createElementVNode("div", mergeProps({
        ref: "root",
        class: _ctx.rootClasses,
        style: _ctx.styles
      }, _ctx.$attrs), [
        createElementVNode("input", {
          id: _ctx.checkboxId,
          ref: "control",
          name: _ctx.name,
          value: _ctx.value,
          type: "checkbox",
          class: "mdc-checkbox__native-control",
          onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
        }, null, 40, _hoisted_1$k),
        _hoisted_2$j,
        _hoisted_3$g,
        _hoisted_4$b
      ], 16)
    ]),
    _: 2
  }, [
    _ctx.hasLabel ? {
      name: "label",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ])
    } : void 0
  ]), 1032, ["activate", "deactivate", "checkboxId"]);
}

script$o.render = render$o;
script$o.__file = "src/checkbox/checkbox.vue";

var checkbox = BasePlugin({
  mcwCheckbox: script$o
});

var script$n = {
  props: {
    primary: { type: Boolean },
    trailingAction: { type: Boolean },
    icon: { type: String },
    presentational: { type: Boolean }
  },
  setup(props) {
    const uiState = reactive({ rippleEl: void 0, root: void 0 });
    const { classes: rippleClasses, styles } = useRipplePlugin(toRef(uiState, "root"), {
      unbounded: true,
      computeBoundingRect: () => uiState.rippleEl.getBoundingClientRect()
    });
    const registerAction = inject("registerAction");
    const mcwChipSet = inject("mcwChipSet");
    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes,
        "mdc-evolution-chip__action--presentational": props.presentational
      };
    });
    let foundation;
    const isFilter = mcwChipSet.role === "listbox";
    const adapter = {
      emitEvent: (eventName, eventDetail) => {
        emitCustomEvent(uiState.root, eventName, eventDetail, true);
      },
      focus: () => {
        uiState.root.focus();
      },
      getAttribute: (attributeName) => uiState.root.getAttribute(attributeName),
      getElementID: () => {
        return uiState.root.id;
      },
      removeAttribute: (name) => {
        uiState.root.removeAttribute(name);
      },
      setAttribute: (name, value) => {
        uiState.root.setAttribute(name, value);
      }
    };
    const setDisabled = (isDisabled2) => {
      foundation.setDisabled(isDisabled2);
    };
    const isDisabled = () => {
      return foundation.isDisabled();
    };
    const setFocus = (behavior) => {
      foundation.setFocus(behavior);
    };
    const isFocusable = () => {
      return foundation.isFocusable();
    };
    const setSelected = (isSelected2) => {
      foundation.setSelected(isSelected2);
    };
    const isSelected = () => {
      return foundation.isSelected();
    };
    const isSelectable = () => {
      return foundation.isSelectable();
    };
    const actionType = () => {
      return foundation.actionType();
    };
    const handleClick = () => {
      foundation.handleClick();
    };
    const handleKeydown = (event) => foundation.handleKeydown(event);
    onMounted(() => {
      foundation = props.primary ? new MDCChipPrimaryActionFoundation(adapter) : new MDCChipTrailingActionFoundation(adapter);
      foundation.init();
      registerAction(getCurrentInstance().ctx);
    });
    return {
      ...toRefs(uiState),
      classes,
      styles,
      setDisabled,
      isDisabled,
      setFocus,
      isFocusable,
      setSelected,
      isSelected,
      isSelectable,
      actionType,
      isFilter,
      handleClick,
      handleKeydown
    };
  }
};

const _hoisted_1$j = {
  ref: "rippleEl",
  class: "mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
};
const _hoisted_2$i = { class: "mdc-evolution-chip__graphic" };
const _hoisted_3$f = {
  key: 0,
  class: "mdc-evolution-chip__icon mdc-evolution-chip__icon--primary material-icons"
};
const _hoisted_4$a = /* @__PURE__ */ createElementVNode("span", { class: "mdc-evolution-chip__checkmark" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    class: "mdc-evolution-chip__checkmark-svg",
    viewBox: "-2 -3 30 30"
  }, [
    /* @__PURE__ */ createElementVNode("path", {
      class: "mdc-evolution-chip__checkmark-path",
      fill: "none",
      stroke: "black",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ])
], -1);
const _hoisted_5$8 = /* @__PURE__ */ createElementVNode("span", { class: "mdc-evolution-chip__text-label" }, "Chip label", -1);
const _hoisted_6$7 = {
  ref: "rippleEl",
  class: "mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
};
const _hoisted_7$5 = {
  key: 0,
  class: "mdc-evolution-chip__graphic"
};
const _hoisted_8$3 = { class: "mdc-evolution-chip__icon mdc-evolution-chip__icon--primary material-icons" };
const _hoisted_9$2 = { class: "mdc-evolution-chip__text-label" };
const _hoisted_10$1 = {
  ref: "rippleEl",
  class: "mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"
};
const _hoisted_11$1 = { class: "mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing material-icons" };
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.primary ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    _ctx.isFilter ? (openBlock(), createElementBlock("span", {
      key: 0,
      ref: "root",
      class: "mdc-evolution-chip__action mdc-evolution-chip__action--primary",
      role: "option",
      "aria-selected": "false",
      tabindex: "0",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
      onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
    }, [
      createElementVNode("span", _hoisted_1$j, null, 512),
      createElementVNode("span", _hoisted_2$i, [
        _ctx.icon ? (openBlock(), createElementBlock("span", _hoisted_3$f, toDisplayString(_ctx.icon), 1)) : createCommentVNode("v-if", true),
        createCommentVNode(" optional "),
        _hoisted_4$a
      ]),
      _hoisted_5$8
    ], 544)) : (openBlock(), createElementBlock("button", {
      key: 1,
      ref: "root",
      class: normalizeClass(["mdc-evolution-chip__action mdc-evolution-chip__action--primary", _ctx.classes]),
      style: normalizeStyle(_ctx.styles),
      type: "button",
      tabindex: "0"
    }, [
      createElementVNode("span", _hoisted_6$7, null, 512),
      _ctx.icon ? (openBlock(), createElementBlock("span", _hoisted_7$5, [
        createElementVNode("span", _hoisted_8$3, toDisplayString(_ctx.icon), 1)
      ])) : createCommentVNode("v-if", true),
      createElementVNode("span", _hoisted_9$2, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 6))
  ], 64)) : (openBlock(), createElementBlock("button", {
    key: 1,
    ref: "root",
    class: "mdc-evolution-chip__action mdc-evolution-chip__action--trailing",
    type: "button",
    tabindex: "-1",
    "data-mdc-deletable": "true",
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onKeydown: _cache[3] || (_cache[3] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    createElementVNode("span", _hoisted_10$1, null, 512),
    createElementVNode("span", _hoisted_11$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 544));
}

script$n.render = render$n;
script$n.__file = "src/chips/chip-action.vue";

var script$m = {
  name: "mcw-chip-checkmark",
  setup() {
    const width = ref(0);
    const root = ref();
    onMounted(() => width.value = root.value.getBoundingClientRect().height);
    return { width, root };
  }
};

const _hoisted_1$i = {
  ref: "root",
  class: "mdc-chip__checkmark"
};
const _hoisted_2$h = /* @__PURE__ */ createElementVNode("svg", {
  class: "mdc-chip__checkmark-svg",
  viewBox: "-2 -3 30 30"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    class: "mdc-chip__checkmark-path",
    fill: "none",
    stroke: "black",
    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
  })
], -1);
const _hoisted_3$e = [
  _hoisted_2$h
];
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1$i, _hoisted_3$e, 512);
}

script$m.render = render$m;
script$m.__file = "src/chips/chip-checkmark.vue";

var script$l = {
  name: "mcw-chip-set",
  props: {
    multiSelectable: { type: Boolean },
    orientation: { type: String, default: () => "horizontal" },
    overflow: { type: Boolean },
    role: { type: String, default: () => "grid" }
  },
  setup(props) {
    const uiState = reactive({
      classes: { "mdc-evolution-chip-set--overflow": props.overflow },
      myListeners: {},
      attrs: {},
      root: void 0
    });
    let foundation;
    const chips = [];
    if (props.role == "listbox") {
      uiState.attrs["aria-orientation"] = props.orientation;
      if (props.multiSelectable) {
        uiState.attrs["aria-multiselectable"] = "true";
      }
    }
    const registerChip = (chip) => {
      chips.push(chip);
    };
    provide("registerChip", registerChip);
    const isIndexValid = (index) => {
      return index > -1 && index < chips.length;
    };
    const adapter = {
      announceMessage: (message) => {
        announce(message);
      },
      emitEvent: (eventName, eventDetail) => {
        emitCustomEvent(uiState.root, eventName, eventDetail, true);
      },
      getAttribute: (attributeName) => uiState.root.getAttribute(attributeName),
      getChipActionsAtIndex: (index) => {
        if (!isIndexValid(index))
          return [];
        return chips[index].getActions();
      },
      getChipCount: () => {
        return chips.length;
      },
      getChipIdAtIndex: (index) => {
        if (!isIndexValid(index)) {
          return "";
        }
        return chips[index].getElementID();
      },
      getChipIndexById: (id) => chips.findIndex((chip) => chip.getElementID() === id),
      isChipFocusableAtIndex: (index, action) => {
        if (!isIndexValid(index)) {
          return false;
        }
        return chips[index].isActionFocusable(action);
      },
      isChipSelectableAtIndex: (index, action) => {
        if (!isIndexValid(index)) {
          return false;
        }
        return chips[index].isActionSelectable(action);
      },
      isChipSelectedAtIndex: (index, action) => {
        if (!isIndexValid(index))
          return false;
        return chips.value[index].isActionSelected(action);
      },
      removeChipAtIndex: (index) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips[index].remove();
        chips.splice(index, 1);
      },
      setChipFocusAtIndex: (index, action, focus) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips[index].setActionFocus(action, focus);
      },
      setChipSelectedAtIndex: (index, action, selected) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips[index].setActionSelected(action, selected);
      },
      startChipAnimationAtIndex: (index, animation) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips[index].startAnimation(animation);
      }
    };
    provide("mcwChipSet", {
      role: props.role,
      singleSelection: !props.multiSelectable
    });
    const handleChipAnimation = (event) => {
      foundation.handleChipAnimation(event);
    };
    const handleChipInteraction = (event) => {
      foundation.handleChipInteraction(event);
    };
    const handleChipNavigation = (event) => foundation.handleChipNavigation(event);
    const removeChip = (index) => {
      if (!isIndexValid(index)) {
        return;
      }
      chips[index].remove();
      chips.splice(index, 1);
    };
    onMounted(() => {
      foundation = new MDCChipSetFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      handleChipAnimation,
      handleChipInteraction,
      handleChipNavigation,
      removeChip
    };
  }
};

const _hoisted_1$h = ["role"];
const _hoisted_2$g = {
  class: "mdc-evolution-chip-set__chips",
  role: "presentation"
};
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    ref: "root",
    class: ["mdc-evolution-chip-set", _ctx.classes],
    role: _ctx.role,
    "onMdcchip:animation": _cache[0] || (_cache[0] = (...args) => _ctx.handleChipAnimation && _ctx.handleChipAnimation(...args)),
    "onMdcchip:interaction": _cache[1] || (_cache[1] = (...args) => _ctx.handleChipInteraction && _ctx.handleChipInteraction(...args)),
    "onMdcchip:navigation": _cache[2] || (_cache[2] = (...args) => _ctx.handleChipNavigation && _ctx.handleChipNavigation(...args))
  }, _ctx.attrs), [
    createElementVNode("span", _hoisted_2$g, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 16, _hoisted_1$h);
}

script$l.render = render$l;
script$l.__file = "src/chips/chip-set.vue";

let chipItemId_ = 0;
var script$k = {
  name: "mcw-chip",
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    avatar: { type: Boolean },
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default() {
        return true;
      }
    },
    disabled: { type: Boolean },
    selected: { type: Boolean },
    presentational: { type: Boolean }
  },
  setup(props, { slots }) {
    const uiState = reactive({
      classes: {
        "mdc-evolution-chip--disabled": props.disabled,
        "mdc-evolution-chip--selected": props.selected
      },
      leadingClasses: {
        "mdc-chip__icon": 1,
        "mdc-chip__icon--leading": 1,
        "material-icons": 1
      },
      styles: {},
      myListeners: {},
      root: void 0,
      checkmarkEl: void 0,
      trailingAction: void 0
    });
    const registerChip = inject("registerChip");
    const mcwChipSet = inject("mcwChipSet");
    const id = chipItemId_++;
    let foundation;
    const actions = /* @__PURE__ */ new Map();
    const registerAction = (action) => {
      actions.set(action.actionType(), action);
    };
    provide("registerAction", registerAction);
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      emitEvent: (eventName, eventDetail) => {
        emitCustomEvent(uiState.root, eventName, eventDetail, true);
      },
      getActions: () => {
        const actionKeys = [];
        for (const [key] of actions) {
          actionKeys.push(key);
        }
        return actionKeys;
      },
      getAttribute: (attributeName) => uiState.root.getAttribute(attributeName),
      getElementID: () => uiState.root.id,
      getOffsetWidth: () => {
        return uiState.root.offsetWidth;
      },
      hasClass: (className) => uiState.root.classList.contains(className),
      isActionSelectable: (actionType) => {
        const action = actions.get(actionType);
        if (action) {
          return action.isSelectable();
        }
        return false;
      },
      isActionSelected: (actionType) => {
        const action = actions.get(actionType);
        if (action) {
          return action.isSelected();
        }
        return false;
      },
      isActionFocusable: (actionType) => {
        const action = actions.get(actionType);
        if (action) {
          return action.isFocusable();
        }
        return false;
      },
      isActionDisabled: (actionType) => {
        const action = actions.get(actionType);
        if (action) {
          return action.isDisabled();
        }
        return false;
      },
      isRTL: () => window.getComputedStyle(uiState.root).getPropertyValue("direction") === "rtl",
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setActionDisabled: (actionType, isDisabled2) => {
        const action = actions.get(actionType);
        if (action) {
          action.setDisabled(isDisabled2);
        }
      },
      setActionFocus: (actionType, behavior) => {
        const action = actions.get(actionType);
        if (action) {
          action.setFocus(behavior);
        }
      },
      setActionSelected: (actionType, isSelected) => {
        const action = actions.get(actionType);
        if (action) {
          action.setSelected(isSelected);
        }
      },
      setStyleProperty: (property, value) => uiState.styles = { ...uiState.styles, [property]: value }
    };
    const hasleadingIcon = computed(() => {
      const slot = slots["leading-icon"];
      return slot && slot[0] || !!props.leadingIcon;
    });
    const hasTrailingAction = computed(() => {
      const slot = slots["trailing-icon"];
      return slot && slot[0] || !!props.trailingIcon;
    });
    const classes = computed(() => {
      return {
        ...uiState.classes,
        "mdc-evolution-chip--with-trailing-action": hasTrailingAction.value,
        "mdc-evolution-chip--with-primary-graphic": hasleadingIcon.value || mcwChipSet.role === "listbox",
        "mdc-evolution-chip--with-primary-icon": hasleadingIcon.value,
        "mdc-evolution-chip--selectable": mcwChipSet.role === "listbox",
        "mdc-evolution-chip--filter": mcwChipSet.role === "listbox",
        "mdc-evolution-chip--with-avatar": props.avatar
      };
    });
    const remove = () => {
      const parent = uiState.root.parentNode;
      if (parent !== null) {
        uiState.root.remove();
      }
    };
    const getActions = () => {
      return foundation.getActions();
    };
    const getElementID = () => {
      return foundation.getElementID();
    };
    const isDisabled = () => {
      return foundation.isDisabled();
    };
    const setDisabled = (isDisabled2) => {
      foundation.setDisabled(isDisabled2);
    };
    const isActionFocusable = (action) => {
      return foundation.isActionFocusable(action);
    };
    const isActionSelectable = (action) => {
      return foundation.isActionSelectable(action);
    };
    const isActionSelected = (action) => {
      return foundation.isActionSelected(action);
    };
    const setActionFocus = (action, focus) => {
      foundation.setActionFocus(action, focus);
    };
    const setActionSelected = (action, isSelected) => {
      foundation.setActionSelected(action, isSelected);
    };
    const startAnimation = (animation) => {
      foundation.startAnimation(animation);
    };
    registerChip(getCurrentInstance().ctx);
    const handleActionInteraction = (event) => {
      foundation.handleActionInteraction(event);
    };
    const handleActionNavigation = (event) => {
      foundation.handleActionNavigation(event);
    };
    const handleAnimationEnd = (event) => {
      foundation.handleAnimationEnd(event);
    };
    const handleTransitionEnd = (event) => {
      foundation.handleTransitionEnd(event);
    };
    onMounted(() => {
      foundation = new MDCChipFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      classes,
      id,
      remove,
      getActions,
      getElementID,
      isDisabled,
      setDisabled,
      isActionFocusable,
      isActionSelectable,
      isActionSelected,
      setActionFocus,
      setActionSelected,
      startAnimation,
      hasleadingIcon,
      hasTrailingAction,
      handleAnimationEnd,
      handleActionInteraction,
      handleActionNavigation,
      handleTransitionEnd
    };
  }
};

const _hoisted_1$g = {
  class: "mdc-evolotion-chip__cell mdc-evolution-chip__cell--primary",
  role: "gridcell"
};
const _hoisted_2$f = {
  key: 0,
  class: "mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing",
  role: "gridcell"
};
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_chip_action = resolveComponent("mcw-chip-action");
  return openBlock(), createElementBlock("span", {
    ref: "root",
    class: normalizeClass(["mdc-evolution-chip", _ctx.classes]),
    role: "row",
    "onMdcchipaction:interaction": _cache[0] || (_cache[0] = (...args) => _ctx.handleActionInteraction && _ctx.handleActionInteraction(...args)),
    "onMdcchipaction:navigation": _cache[1] || (_cache[1] = (...args) => _ctx.handleActionNavigation && _ctx.handleActionNavigation(...args)),
    onAnimationend: _cache[2] || (_cache[2] = (...args) => _ctx.handleAnimationEnd && _ctx.handleAnimationEnd(...args)),
    onTransitionend: _cache[3] || (_cache[3] = (...args) => _ctx.handleTransitionEnd && _ctx.handleTransitionEnd(...args))
  }, [
    createElementVNode("span", _hoisted_1$g, [
      createVNode(_component_mcw_chip_action, {
        primary: "",
        icon: _ctx.leadingIcon,
        presentational: _ctx.presentational
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["icon", "presentational"])
    ]),
    _ctx.hasTrailingAction ? (openBlock(), createElementBlock("span", _hoisted_2$f, [
      createVNode(_component_mcw_chip_action, { "trailing-action": "" }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.trailingIcon), 1)
        ]),
        _: 1
      })
    ])) : createCommentVNode("v-if", true)
  ], 34);
}

script$k.render = render$k;
script$k.__file = "src/chips/chip.vue";

var chips = BasePlugin({
  mcwChip: script$k,
  mcwChipSet: script$l,
  mcwChipCheckmark: script$m,
  mcwChipAction: script$n
});

const ProgressPropertyType = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};
var script$j = {
  name: "mcw-circular-progress",
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    medium: Boolean,
    progress: ProgressPropertyType,
    tag: { type: String, default: "div" },
    label: { type: String },
    fourColor: Boolean
  },
  setup(props) {
    const uiState = reactive({
      classes: {
        "mdc-circular-progress": 1,
        "mdc-circular-progress--medium": props.medium,
        "mdc-circular-progress--large": !props.medium
      },
      rootAttrs: !props.medium ? { style: { width: "48px", height: "48px" } } : { style: { width: "36px", height: "36px" } },
      circleAttrs: getCircleAttributes(props.medium, false),
      trackAttrs: getTrackAttributes(props.medium),
      indeterminateAttrs: getCircleAttributes(props.medium, true),
      viewbox: props.medium ? "0 0 36 36" : "0 0 48 48",
      root: void 0
    });
    let foundation;
    const adapter = {
      addClass: (className) => {
        uiState.classes = { ...uiState.classes, [className]: true };
      },
      getDeterminateCircleAttribute: (attributeName) => {
        return uiState.circleAttrs[attributeName];
      },
      hasClass: (className) => uiState.root.classList.contains(className),
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      removeAttribute: (attributeName) => {
        const { [attributeName]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setAttribute: (attributeName, value) => {
        uiState.rootAttrs = { ...uiState.rootAttrs, [attributeName]: value };
      },
      setDeterminateCircleAttribute: (attributeName, value) => uiState.circleAttrs = {
        ...uiState.circleAttrs,
        [attributeName]: value
      }
    };
    const rootAttributes = computed(() => {
      return {
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "1",
        "aria-label": props.label,
        ...uiState.rootAttrs
      };
    });
    watch(() => props.open, (nv) => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close();
      }
    });
    watch(() => props.progress, (nv) => {
      foundation.setProgress(Number(nv));
    });
    watch(() => props.indeterminate, (nv) => {
      foundation.setDeterminate(!nv);
    });
    const colorClass = (index) => {
      return props.fourColor ? `mdc-circular-progress__color-${index}` : void 0;
    };
    const colors = Array.from({ length: props.fourColor ? 4 : 1 }, (_, index) => index + 1);
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
    return { ...toRefs(uiState), rootAttributes, colors, colorClass };
  }
};
function getCircleAttributes(medium = false, indeterminate = true) {
  return medium ? {
    cx: "16",
    cy: "16",
    r: "12.5",
    "stroke-dasharray": "78.54",
    "stroke-dashoffset": indeterminate ? "39.27" : "78.54",
    "stroke-width": "3"
  } : {
    cx: "24",
    cy: "24",
    r: "18",
    "stroke-dasharray": "113.097",
    "stroke-dashoffset": indeterminate ? "56.549" : "113.097",
    "stroke-width": "4"
  };
}
function getTrackAttributes(medium = false) {
  const {
    ["stroke-dasharray"]: sda,
    ["stroke-dashoffset"]: sdo,
    ...rest
  } = getCircleAttributes(medium);
  return rest;
}

const _hoisted_1$f = { class: "mdc-circular-progress__determinate-container" };
const _hoisted_2$e = ["viewBox"];
const _hoisted_3$d = { class: "mdc-circular-progress__indeterminate-container" };
const _hoisted_4$9 = { class: "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left" };
const _hoisted_5$7 = ["viewBox"];
const _hoisted_6$6 = { class: "mdc-circular-progress__gap-patch" };
const _hoisted_7$4 = ["viewBox"];
const _hoisted_8$2 = { class: "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right" };
const _hoisted_9$1 = ["viewBox"];
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode("must be no space between divs"),
    createCommentVNode(" prettier-ignore "),
    createElementVNode("div", mergeProps({
      ref: "root",
      class: _ctx.classes,
      role: "progressbar"
    }, _ctx.rootAttributes), [
      createElementVNode("div", _hoisted_1$f, [
        (openBlock(), createElementBlock("svg", {
          class: "mdc-circular-progress__determinate-circle-graphic",
          viewBox: _ctx.viewbox,
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          createElementVNode("circle", mergeProps({ class: "mdc-circular-progress__determinate-track" }, _ctx.trackAttrs), null, 16),
          createElementVNode("circle", mergeProps({ class: "mdc-circular-progress__determinate-circle" }, _ctx.circleAttrs), null, 16)
        ], 8, _hoisted_2$e))
      ]),
      createElementVNode("div", _hoisted_3$d, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.colors, (index) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["mdc-circular-progress__spinner-layer", _ctx.colorClass(index)]),
            key: index
          }, [
            createElementVNode("div", _hoisted_4$9, [
              (openBlock(), createElementBlock("svg", {
                class: "mdc-circular-progress__indeterminate-circle-graphic",
                viewBox: _ctx.viewbox,
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createElementVNode("circle", normalizeProps(guardReactiveProps(_ctx.indeterminateAttrs)), null, 16)
              ], 8, _hoisted_5$7)),
              createCommentVNode("must be no space between divs")
            ]),
            createElementVNode("div", _hoisted_6$6, [
              (openBlock(), createElementBlock("svg", {
                class: "mdc-circular-progress__indeterminate-circle-graphic",
                viewBox: _ctx.viewbox,
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createElementVNode("circle", normalizeProps(guardReactiveProps(_ctx.indeterminateAttrs)), null, 16)
              ], 8, _hoisted_7$4))
            ]),
            createElementVNode("div", _hoisted_8$2, [
              (openBlock(), createElementBlock("svg", {
                class: "mdc-circular-progress__indeterminate-circle-graphic",
                viewBox: _ctx.viewbox,
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createElementVNode("circle", normalizeProps(guardReactiveProps(_ctx.indeterminateAttrs)), null, 16)
              ], 8, _hoisted_9$1))
            ])
          ], 2);
        }), 128))
      ])
    ], 16)
  ], 2112);
}

script$j.render = render$j;
script$j.__file = "src/circular-progress/circular-progress.vue";

var circularProgress = BasePlugin({
  mcwCircularProgress: script$j
});

const getSortStatusMessageBySortValue = (sortValue) => {
  switch (sortValue) {
    case SortValue.ASCENDING:
      return messages.SORTED_IN_ASCENDING;
    case SortValue.DESCENDING:
      return messages.SORTED_IN_DESCENDING;
    default:
      return "";
  }
};
var mcwDataTable = {
  name: "mcw-data-table",
  props: { sticky: { type: Boolean } },
  setup(props, { emit, expose, slots }) {
    const uiState = reactive({
      classes: {
        "mdc-data-table": true,
        "mdc-data-table--sticky-header": props.sticky
      }
    });
    const root = ref();
    let foundation;
    let headerRow;
    let rowCheckboxList = [];
    let content;
    let headerRowCheckbox;
    const getRows = () => foundation.getRows();
    const layout = () => foundation.layout();
    const getRowByIndex_ = (index) => getRows()[index];
    const getSelectedRowIds = () => foundation.getSelectedRowIds();
    const getHeaderCells = () => [
      ...root.value.querySelectorAll(selectors.HEADER_CELL)
    ];
    const getRowIdByIndex_ = (index) => getRowByIndex_(index).getAttribute(dataAttributes.ROW_ID);
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      getHeaderCellElements: () => getHeaderCells(),
      getHeaderCellCount: () => getHeaderCells().length,
      getAttributeByHeaderCellIndex: (index, attribute) => getHeaderCells()[index].getAttribute(attribute),
      setAttributeByHeaderCellIndex: (index, attribute, value) => getHeaderCells()[index].setAttribute(attribute, value),
      setClassNameByHeaderCellIndex: (index, className) => getHeaderCells()[index].classList.add(className),
      removeClassNameByHeaderCellIndex: (index, className) => getHeaderCells()[index].classList.remove(className),
      notifySortAction: (data) => {
        emit("mdc-data-table:sorted", {
          data
        }, true);
      },
      getTableContainerHeight: () => {
        const tableContainer = root.value.querySelector`.${cssClasses$7.CONTAINER}`;
        if (!tableContainer) {
          throw new Error("MDCDataTable: Table container element not found.");
        }
        return tableContainer.getBoundingClientRect().height;
      },
      getTableHeaderHeight: () => {
        const tableHeader = root.value.querySelector(selectors.HEADER_ROW);
        if (!tableHeader) {
          throw new Error("MDCDataTable: Table header element not found.");
        }
        return tableHeader.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (styles) => {
        const progressIndicator = root.value.querySelector(selectors.PROGRESS_INDICATOR);
        if (!progressIndicator) {
          throw new Error("MDCDataTable: Progress indicator element not found.");
        }
        Object.assign(progressIndicator.style, styles);
      },
      addClassAtRowIndex: (rowIndex, className) => getRows()[rowIndex].classList.add(className),
      getRowCount: () => getRows().length,
      getRowElements: () => [...root.value.querySelectorAll(selectors.ROW)],
      getRowIdAtIndex: (rowIndex) => getRows()[rowIndex].getAttribute(dataAttributes.ROW_ID),
      getRowIndexByChildElement: (element) => getRows().indexOf(closest(element, selectors.ROW)),
      getSelectedRowCount: () => root.value.querySelectorAll(selectors.ROW_SELECTED).length,
      isCheckboxAtRowIndexChecked: (rowIndex) => rowCheckboxList[rowIndex].isChecked(),
      isHeaderRowCheckboxChecked: () => headerRowCheckbox.isChecked(),
      isRowsSelectable: () => !!root.value.querySelector(selectors.ROW_CHECKBOX),
      notifyRowSelectionChanged: (data) => {
        emit("mdcdatatable:rowselectionchanged", {
          row: getRowByIndex_(data.rowIndex),
          rowId: getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected
        });
      },
      notifySelectedAll: () => emit("mdcdatatable:selectedall", {}),
      notifyUnselectedAll: () => emit("mdcdatatable:unselectedall", {}),
      registerHeaderRowCheckbox: () => {
        const checkboxElement = root.value.querySelector(selectors.HEADER_ROW_CHECKBOX);
        headerRowCheckbox = checkboxElement.__checkboxHelpers;
      },
      registerRowCheckboxes: () => {
        rowCheckboxList = [];
        for (const rowElement of getRows()) {
          const element = rowElement.querySelector(selectors.ROW_CHECKBOX);
          const checkbox = element.__checkboxHelpers;
          rowCheckboxList.push(checkbox);
        }
      },
      removeClassAtRowIndex: (rowIndex, className) => getRows()[rowIndex].classList.remove(className),
      setAttributeAtRowIndex: (rowIndex, attribute, value) => getRows()[rowIndex].setAttribute(attribute, value),
      setHeaderRowCheckboxChecked: (checked) => headerRowCheckbox.setChecked(checked),
      setHeaderRowCheckboxIndeterminate: (indeterminate) => headerRowCheckbox.setIndeterminate(indeterminate),
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) => rowCheckboxList[rowIndex].setChecked(checked),
      setSortStatusLabelByHeaderCellIndex: (columnIndex, sortValue) => {
        const headerCell = getHeaderCells()[columnIndex];
        const sortStatusLabel = headerCell.querySelector(selectors.SORT_STATUS_LABEL);
        if (!sortStatusLabel) {
          return;
        }
        sortStatusLabel.textContent = getSortStatusMessageBySortValue(sortValue);
      }
    };
    const handleHeaderRowClick = (event) => {
      const headerCell = closest(event.target, selectors.HEADER_CELL_WITH_SORT);
      if (!headerCell) {
        return;
      }
      const columnId = headerCell.getAttribute(dataAttributes.COLUMN_ID);
      const columnIndex = getHeaderCells().indexOf(headerCell);
      if (columnIndex === -1) {
        return;
      }
      foundation.handleSortAction({ columnId, columnIndex, headerCell });
    };
    const handleHeaderRowCheckboxChange = () => foundation.handleHeaderRowCheckboxChange();
    const handleRowCheckboxChange = (event) => foundation.handleRowCheckboxChange(event);
    const handleContentClick = (event) => {
      const dataRowElement = closest(event.target, selectors.ROW);
      if (!dataRowElement) {
        return;
      }
      foundation.handleRowClick({
        rowId: getRowIdByRowElement(dataRowElement),
        row: dataRowElement
      });
    };
    onMounted(() => {
      headerRow = root.value.querySelector(`.${cssClasses$7.HEADER_ROW}`);
      headerRow.addEventListener("mdccheckbox:change", handleHeaderRowCheckboxChange);
      headerRow.addEventListener("click", handleHeaderRowClick);
      content = root.value.querySelector(`.${cssClasses$7.CONTENT}`);
      content.addEventListener("click", handleContentClick);
      content.addEventListener("mdccheckbox:change", handleRowCheckboxChange);
      foundation = new MDCDataTableFoundation(adapter);
      foundation.init();
      layout();
    });
    onBeforeUnmount(() => {
      headerRow.removeEventListener("mdccheckbox:change", handleHeaderRowCheckboxChange);
      headerRow.removeEventListener("click", handleHeaderRowClick);
      content.removeEventListener("mdccheckbox:change", handleRowCheckboxChange);
      content.removeEventListener("click", handleContentClick);
      foundation.destroy();
    });
    expose({ getSelectedRowIds, layout });
    return () => {
      return h("div", { ref: root, class: uiState.classes }, [
        h("div", { class: "mdc-data-table__table-container" }, [
          slots.default()
        ])
      ]);
    };
  }
};
function getRowIdByRowElement(rowElement) {
  return rowElement.getAttribute(dataAttributes.ROW_ID);
}

var dataTable = BasePlugin({
  mcwDataTable
});

var mcwDialogButton = {
  name: "mcw-dialog-button",
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean
  },
  setup(props, { attrs, slots }) {
    return () => {
      return h(resolveComponent("mcw-button"), {
        ...attrs,
        class: ["mdc-button", "mdc-dialog__button"],
        "data-mdc-dialog-action": props.action,
        "data-mdc-dialog-button-default": props.isDefault,
        "data-mdc-dialog-initial-focus": props.isInitialFocus
      }, { default: () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      } });
    };
  }
};

var mcwDialogContent = {
  name: "mcw-dialog-content",
  props: {
    tag: {
      type: String,
      default() {
        return "div";
      }
    }
  },
  setup(props, { slots }) {
    return () => {
      var _a;
      return h(props.tag, {
        class: ["mdc-dialog__content"]
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

var mcwDialogFooter = {
  name: "mcw-dialog-footer",
  props: {
    tag: {
      type: String,
      default() {
        return "div";
      }
    }
  },
  setup(props, { slots }) {
    return () => {
      var _a;
      return h(props.tag, {
        class: ["mdc-dialog__actions"]
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

var mcwDialogTitle = {
  name: "mcw-dialog-title",
  props: {
    tag: {
      type: String,
      default() {
        return "h2";
      }
    }
  },
  setup(props, { slots }) {
    return () => {
      var _a;
      return h(props.tag, {
        class: ["mdc-dialog__title"]
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

const { cssClasses: cssClasses$6, strings: strings$a } = MDCDialogFoundation;
const LAYOUT_EVENTS = ["resize", "orientationchange"];
const getInitialFocusElement_ = () => {
  return document.querySelector(`[${strings$a.INITIAL_FOCUS_ATTRIBUTE}]`);
};
const focusTrapFactory_$1 = (element, options) => new FocusTrap(element, options);
var script$i = {
  name: "mcw-dialog",
  components: {
    mcwButton: script$p
  },
  props: {
    autoStackButtons: Boolean,
    escapeKeyAction: String,
    scrollable: Boolean,
    modelValue: Boolean,
    role: String,
    scrimClickAction: { type: String, default: "close" },
    tag: { type: String, default: "div" },
    ariaLabelledby: String,
    ariaDescribedby: String
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: { "mdc-dialog": 1 },
      styles: {},
      container: void 0,
      root: void 0
    });
    let foundation;
    let content_;
    let buttons_;
    let focusTrap;
    let defaultButton;
    const handleLayout = () => {
      foundation.layout();
    };
    const handleDocumentKeyDown = (event_) => {
      foundation.handleDocumentKeydown(event_);
    };
    const onClick = (event_) => {
      foundation.handleClick(event_);
    };
    const onKeydown = (event_) => {
      foundation.handleKeydown(event_);
    };
    const onOpen = (nv) => {
      if (nv) {
        if (uiState.container) {
          focusTrap = util.createFocusTrapInstance(uiState.root, focusTrapFactory_$1, getInitialFocusElement_() || void 0);
        }
        foundation.open();
      } else {
        foundation.close();
      }
    };
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => uiState.root.classList.contains(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetMatches: (target, selector) => matches(target, selector),
      trapFocus: () => focusTrap == null ? void 0 : focusTrap.trapFocus(),
      releaseFocus: () => focusTrap == null ? void 0 : focusTrap.releaseFocus(),
      getInitialFocusEl: () => getInitialFocusElement_(),
      isContentScrollable: () => util.isScrollable(content_),
      areButtonsStacked: () => util.areTopsMisaligned(buttons_),
      getActionFromEvent: (event) => {
        const element = closest(event.target, `[${strings$a.ACTION_ATTRIBUTE}]`);
        return element == null ? void 0 : element.getAttribute(strings$a.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: () => {
        if (defaultButton && !defaultButton.disabled) {
          defaultButton.click();
        }
      },
      reverseButtons: () => {
        const buttons = buttons_;
        return buttons && buttons.reverse().forEach((button) => {
          var _a;
          return (_a = button.parentElement) == null ? void 0 : _a.appendChild(button);
        });
      },
      notifyOpening: () => {
        emit("mdcdialog:opening", {});
        for (const event_ of LAYOUT_EVENTS)
          window.addEventListener(event_, handleLayout);
        document.addEventListener("keydown", handleDocumentKeyDown);
      },
      notifyOpened: () => emit("mdcdialog:opened", {}),
      notifyClosing: (action) => {
        emit("update:modelValue", false);
        emit("mdcdialog:closing", action ? { action } : {});
        for (const event_ of LAYOUT_EVENTS)
          window.removeEventListener(event_, handleLayout);
        document.removeEventListener("keydown", handleDocumentKeyDown);
      },
      notifyClosed: (action) => {
        emit("mdcdialog:closed", action ? { action } : {});
      }
    };
    watch(() => props.modelValue, (nv) => {
      onOpen(nv);
    });
    onMounted(() => {
      const {
        modelValue,
        autoStackButtons,
        escapeKeyAction,
        scrimClickAction
      } = props;
      buttons_ = Array.prototype.slice.call(uiState.root.querySelectorAll(cssClasses$6.BUTTON));
      defaultButton = uiState.root.querySelector(`[${strings$a.BUTTON_DEFAULT_ATTRIBUTE}]`);
      const container = uiState.root.querySelector(strings$a.CONTAINER_SELECTOR);
      if (!container) {
        throw new Error(`Dialog component requires a ${strings$a.CONTAINER_SELECTOR} container element`);
      }
      content_ = uiState.root.querySelector(strings$a.CONTENT_SELECTOR);
      foundation = new MDCDialogFoundation(adapter);
      foundation.init();
      if (!autoStackButtons) {
        foundation.setAutoStackButtons(autoStackButtons);
      }
      if (typeof escapeKeyAction === "string") {
        foundation.setEscapeKeyAction(escapeKeyAction);
      }
      if (typeof scrimClickAction === "string") {
        foundation.setScrimClickAction(scrimClickAction);
      }
      onOpen(modelValue);
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      handleLayout,
      handleDocumentKeyDown,
      onKeydown,
      onClick
    };
  }
};

const _hoisted_1$e = {
  ref: "container",
  class: "mdc-dialog__container"
};
const _hoisted_2$d = ["aria-labelledby", "aria-describedby"];
const _hoisted_3$c = /* @__PURE__ */ createElementVNode("div", { class: "mdc-dialog__scrim" }, null, -1);
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.styles),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
    onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.onKeydown && _ctx.onKeydown(...args))
  }, [
    createElementVNode("div", _hoisted_1$e, [
      createElementVNode("div", {
        ref: "surface",
        class: "mdc-dialog__surface",
        role: "alertdialog",
        "aria-modal": "true",
        "aria-labelledby": _ctx.ariaLabelledby,
        "aria-describedby": _ctx.ariaDescribedby
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_2$d)
    ], 512),
    _hoisted_3$c
  ], 38);
}

script$i.render = render$i;
script$i.__file = "src/dialog/dialog.vue";

var dialog = BasePlugin({
  mcwDialog: script$i,
  mcwDialogTitle,
  mcwDialogFooter,
  mcwDialogButton,
  mcwDialogContent
});

const { strings: strings$9, cssClasses: cssClasses$5 } = MDCDismissibleDrawerFoundation;
const focusTrapFactory_ = (element, options) => new FocusTrap(element, options);
var script$h = {
  name: "mcw-drawer",
  props: {
    modelValue: Boolean,
    modal: Boolean,
    dismissible: Boolean,
    toolbarSpacer: Boolean
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        "mdc-drawer": 1,
        "mdc-drawer--modal": props.modal,
        "mdc-drawer--dismissible": props.dismissible && !props.modal
      },
      drawer: void 0
    });
    const show = () => foundation.open();
    const close = () => foundation.close();
    const toggle = () => foundation.isOpen() ? foundation.close() : foundation.open();
    const isOpen = () => foundation.isOpen();
    let foundation;
    let focusTrap_;
    let previousFocus_;
    const handleScrimClick = () => foundation.handleScrimClick();
    const handleKeydown = (event_) => foundation.handleKeydown(event_);
    const handleTransitionEnd = (event_) => foundation.handleTransitionEnd(event_);
    const onChange = (event) => emit("update:modelValue", event);
    const onListAction = () => props.modal && close();
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => !!uiState.classes[className],
      elementHasClass: (element, className) => element.classList.contains(className),
      saveFocus: () => {
        previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        const previousFocus = previousFocus_ == null ? void 0 : previousFocus_.focus;
        if (previousFocus && uiState.drawer.contains(document.activeElement)) {
          previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemElement = uiState.drawer.querySelector(`.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`);
        if (activeNavItemElement) {
          activeNavItemElement.focus();
        }
      },
      notifyClose: () => {
        emitCustomEvent(uiState.drawer, strings$9.CLOSE_EVENT, {}, true);
        emit("update:modelValue", false);
        emit("close");
      },
      notifyOpen: () => {
        emitCustomEvent(uiState.drawer, strings$9.OPEN_EVENT, {}, true);
        emit("update:modelValue", true);
        emit("open");
      },
      trapFocus: () => focusTrap_.trapFocus(),
      releaseFocus: () => focusTrap_.releaseFocus()
    };
    watch(() => props.modelValue, (nv) => {
      if (nv) {
        foundation == null ? void 0 : foundation.open();
      } else {
        foundation == null ? void 0 : foundation.close();
      }
    });
    onMounted(() => {
      const { DISMISSIBLE, MODAL } = cssClasses$5;
      if (props.dismissible) {
        foundation = new MDCDismissibleDrawerFoundation(adapter);
      } else if (props.modal) {
        foundation = new MDCModalDrawerFoundation(adapter);
      } else {
        throw new Error(`mcwDrawer: Failed to instantiate component. Supported variants are ${DISMISSIBLE} and ${MODAL}.`);
      }
      foundation.init();
      if (props.modal) {
        focusTrap_ = util$1.createFocusTrapInstance(uiState.drawer, focusTrapFactory_);
      }
    });
    onBeforeUnmount(() => {
      foundation.close();
      foundation.destroy();
      foundation = void 0;
    });
    return {
      ...toRefs(uiState),
      onChange,
      show,
      close,
      toggle,
      isOpen,
      onListAction,
      handleScrimClick,
      handleKeydown,
      handleTransitionEnd
    };
  }
};

const _hoisted_1$d = { class: "mdc-drawer__content" };
const _hoisted_2$c = {
  key: 1,
  class: "drawer-wrapper"
};
const _hoisted_3$b = { class: "mdc-drawer__content" };
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_list = resolveComponent("mcw-list");
  return !_ctx.modal ? (openBlock(), createElementBlock("aside", {
    key: 0,
    ref: "drawer",
    class: normalizeClass(_ctx.classes),
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
    onTransitionend: _cache[1] || (_cache[1] = (...args) => _ctx.handleTransitionEnd && _ctx.handleTransitionEnd(...args))
  }, [
    renderSlot(_ctx.$slots, "header"),
    createElementVNode("div", _hoisted_1$d, [
      createVNode(_component_mcw_list, {
        "wrap-focus": true,
        tag: "nav",
        "onMdclist:action": _ctx.onListAction,
        "multi-selectable": false,
        "selected-index": 0,
        role: "menu"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["onMdclist:action"])
    ])
  ], 34)) : (openBlock(), createElementBlock("div", _hoisted_2$c, [
    createElementVNode("aside", {
      ref: "drawer",
      class: normalizeClass(_ctx.classes),
      onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
      onTransitionend: _cache[3] || (_cache[3] = (...args) => _ctx.handleTransitionEnd && _ctx.handleTransitionEnd(...args))
    }, [
      renderSlot(_ctx.$slots, "header"),
      createElementVNode("div", _hoisted_3$b, [
        createVNode(_component_mcw_list, {
          "wrap-focus": true,
          tag: "nav",
          "multi-selectable": false,
          "selected-index": 0,
          role: "menu",
          "onMdclist:action": _ctx.onListAction
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["onMdclist:action"])
      ])
    ], 34),
    _ctx.modal ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "mdc-drawer-scrim",
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleScrimClick && _ctx.handleScrimClick(...args))
    })) : createCommentVNode("v-if", true)
  ]));
}

script$h.render = render$h;
script$h.__file = "src/drawer/drawer.vue";

var drawer = BasePlugin({
  mcwDrawer: script$h
});

var script$g = {
  name: "mcw-fab",
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String,
    isTouch: Boolean
  },
  inheritAttrs: false,
  components: { CustomLink, touchWrapper },
  setup(props, { slots }) {
    const root = ref();
    const uiState = reactive({
      classes: {
        "mdc-fab": 1,
        "mdc-fab--mini": props.mini,
        "mdc-fab--extended": props.label || slots.default,
        "mdc-fab--exited": props.exited
      }
    });
    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });
    watch(() => props.icon, (nv) => {
      uiState.classes = { ...uiState.classes, "material-icons": nv };
    });
    watch(() => props.mini, (nv) => {
      uiState.classes = { ...uiState.classes, "mdc-fab--mini": nv };
    });
    watch(() => props.exited, (nv) => {
      uiState.classes = { ...uiState.classes, "mdc-fab--exited": nv };
    });
    return { ...toRefs(uiState), classes, root, styles };
  }
};

const _hoisted_1$c = /* @__PURE__ */ createElementVNode("div", { class: "mdc-fab__ripple" }, null, -1);
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("div", { class: "mdc-fab__focus-ring" }, null, -1);
const _hoisted_3$a = { class: "mdc-fab__icon material-icons" };
const _hoisted_4$8 = { class: "mdc-fab__label" };
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");
  const _component_touch_wrapper = resolveComponent("touch-wrapper");
  return openBlock(), createBlock(_component_touch_wrapper, { isTouch: _ctx.isTouch }, {
    default: withCtx(() => [
      createVNode(_component_custom_link, mergeProps({
        ref: "root",
        class: _ctx.classes,
        style: _ctx.styles,
        tag: "button"
      }, _ctx.$attrs), {
        default: withCtx(() => [
          _hoisted_1$c,
          _hoisted_2$b,
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createElementVNode("span", _hoisted_3$a, toDisplayString(_ctx.icon), 1)
          ]),
          createElementVNode("span", _hoisted_4$8, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ])
          ])
        ]),
        _: 3
      }, 16, ["class", "style"])
    ]),
    _: 3
  }, 8, ["isTouch"]);
}

script$g.render = render$g;
script$g.__file = "src/fab/fab.vue";

var fab = BasePlugin({
  mcwFAB: script$g
});

var mcwFloatingLabel = {
  name: "mcw-floating-label",
  props: { required: { type: Boolean } },
  setup(props, { slots, expose }) {
    const uiState = reactive({
      labelClasses: {
        "mdc-floating-label": true,
        "mdc-floating-label--required": props.required
      }
    });
    let foundation;
    const root = ref();
    const adapter = {
      addClass: (className) => uiState.labelClasses = {
        ...uiState.labelClasses,
        [className]: true
      },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.labelClasses;
        uiState.labelClasses = rest;
      },
      getWidth: () => root.value.scrollWidth,
      registerInteractionHandler: (eventType, handler) => {
        root.value.addEventListener(eventType, handler);
      },
      deregisterInteractionHandler: (eventType, handler) => {
        root.value.removeEventListener(eventType, handler);
      }
    };
    const getWidth = () => {
      return foundation.getWidth();
    };
    const setRequired = (isRequired) => {
      return foundation.setRequired(isRequired);
    };
    const float = (shouldFloat) => {
      foundation.float(shouldFloat);
    };
    const shake = (shouldShake) => {
      foundation.shake(shouldShake);
    };
    onMounted(() => {
      foundation = new MDCFloatingLabelFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    expose({ getWidth, float, shake, setRequired });
    return () => {
      return h("span", { ref: root, class: uiState.labelClasses }, [
        slots.default()
      ]);
    };
  }
};

var floatingLabel = BasePlugin({
  mcwFloatingLabel
});

var script$f = {
  name: "mcw-icon-button",
  inheritAttrs: false,
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    isTouch: Boolean
  },
  setup(props, { emit, attrs }) {
    const uiState = reactive({
      classes: {
        "mdc-icon-button": 1,
        "material-icons": 1
      },
      root: void 0
    });
    const { CHANGE_EVENT } = MDCIconButtonToggleFoundation.strings;
    const { classes: rippleClasses, styles } = useRipplePlugin(toRef(uiState, "root"), {
      isUnbounded: () => true
    });
    let foundation;
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => Boolean(uiState.classes[className]),
      setAttr: (attributeName, attributeValue) => uiState.root.setAttribute(attributeName, attributeValue),
      getAttr: (attributeName) => uiState.root.getAttribute(attributeName),
      notifyChange: (eventData) => {
        emit(CHANGE_EVENT, eventData);
        emit("update:modelValue", eventData.isOn);
      }
    };
    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes
      };
    });
    watch(() => props.modelValue, (nv) => {
      foundation.toggle(nv);
    });
    const tag = computed(() => attrs.href ? "a" : "button");
    const onClick = (event_) => foundation.handleClick(event_);
    onMounted(() => {
      foundation = new MDCIconButtonToggleFoundation(adapter);
      foundation.init();
      foundation.toggle(props.modelValue);
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return { ...toRefs(uiState), classes, styles, tag, onClick };
  },
  components: { touchWrapper }
};

const _hoisted_1$b = {
  class: "mdc-icon-button__ripple",
  ref: "rippleEl"
};
const _hoisted_2$a = {
  key: 0,
  class: "mdc-icon-button__touch"
};
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_touch_wrapper = resolveComponent("touch-wrapper");
  return openBlock(), createBlock(_component_touch_wrapper, { isTouch: _ctx.isTouch }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
        class: _ctx.classes,
        style: _ctx.styles,
        ref: "root",
        onClick: _ctx.onClick,
        "aria-pressed": "false",
        disabled: _ctx.disabled
      }, _ctx.$attrs), {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$b, null, 512),
          renderSlot(_ctx.$slots, "default"),
          _ctx.isTouch ? (openBlock(), createElementBlock("div", _hoisted_2$a)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["class", "style", "onClick", "disabled"]))
    ]),
    _: 3
  }, 8, ["isTouch"]);
}

script$f.render = render$f;
script$f.__file = "src/icon-button/icon-button.vue";

var mcwIconToggle = {
  name: "mcw-icon-toggle",
  props: {
    isOn: Boolean
  },
  setup(props, { slots }) {
    return () => {
      var _a;
      return h("i", {
        class: {
          "material-icons": 1,
          "mdc-icon-button__icon": true,
          "mdc-icon-button__icon--on": props.isOn
        }
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

var iconButton = BasePlugin({
  mcwIconButton: script$f,
  mcwIconToggle
});

const spanOptions_ = {
  type: [String, Number],
  default: void 0,
  validator: (value) => {
    const number = Number(value);
    return Number.isFinite(number) && number <= 12 && number > 0;
  }
};
var mcwLayoutCell = {
  name: "mcw-layout-cell",
  props: {
    span: spanOptions_,
    order: spanOptions_,
    phone: spanOptions_,
    tablet: spanOptions_,
    desktop: spanOptions_,
    align: {
      type: String,
      validator: (value) => ["top", "bottom", "middle"].includes(value)
    }
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const cssClasses = {};
      if (props.span) {
        cssClasses[`mdc-layout-grid__cell--span-${props.span}`] = true;
      }
      if (props.order) {
        cssClasses[`mdc-layout-grid__cell--order-${props.order}`] = true;
      }
      if (props.phone) {
        cssClasses[`mdc-layout-grid__cell--span-${props.phone}-phone`] = true;
      }
      if (props.tablet) {
        cssClasses[`mdc-layout-grid__cell--span-${props.tablet}-tablet`] = true;
      }
      if (props.desktop) {
        cssClasses[`mdc-layout-grid__cell--span-${props.desktop}-desktop`] = true;
      }
      if (props.align) {
        cssClasses[`mdc-layout-grid__cell--align-${props.align}`] = true;
      }
      return cssClasses;
    });
    return () => {
      var _a;
      return h("div", {
        class: {
          "mdc-layout-cell": true,
          "mdc-layout-grid__cell": true,
          ...classes.value
        }
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
};

var mcwLayoutGrid = {
  name: "mcw-layout-grid",
  props: {
    fixedColumWidth: Boolean,
    alignLeft: Boolean,
    alignRight: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return {
        "mdc-layout-grid": true,
        "mdc-layout-grid--fixed-column-width": props.fixedColumnWidth,
        "mdc-layout-grid--align-left": props.alignLeft,
        "mdc-layout-grid--align-right": props.alignRight
      };
    });
    return () => {
      var _a;
      return h("div", {
        class: classes.value
      }, [h("div", { class: "mdc-layout-grid__inner" }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
};

var mcwLayoutInnerGrid = {
  name: "mcw-layout-inner-grid",
  setup(props, { slots }) {
    return () => {
      return h("div", { class: "mdc-layout-inner-grid mdc-layout-grid__inner" }, [slots.default()]);
    };
  }
};

var layoutGrid = BasePlugin({
  mcwLayoutGrid,
  mcwLayoutCell,
  mcwLayoutInnerGrid
});

var mcwLineRipple = {
  name: "mcw-line-ripple",
  setup(props, { expose }) {
    const uiState = reactive({
      lineClasses: { "mdc-line-ripple": 1 },
      lineStyles: {}
    });
    let foundation_;
    const adapter = {
      addClass: (className) => uiState.lineClasses = {
        ...uiState.lineClasses,
        [className]: true
      },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.lineClasses;
        uiState.lineClasses = rest;
      },
      hasClass: (className) => {
        return Boolean(uiState.lineClasses[className]);
      },
      setStyle: (name, value) => uiState.lineStyles = {
        ...uiState.lineStyles,
        [name]: value
      }
    };
    expose({
      activate: () => foundation_.activate(),
      deactivate: () => foundation_.deactivate(),
      setRippleCenter: (xCoordinate) => foundation_.setRippleCenter(xCoordinate)
    });
    onMounted(() => {
      foundation_ = new MDCLineRippleFoundation(adapter);
      foundation_.init();
    });
    onBeforeUnmount(() => {
      foundation_.destroy();
    });
    return () => {
      return h("span", {
        class: uiState.lineClasses,
        style: uiState.lineStyles,
        ontransitionend: (event_) => foundation_.handleTransitionEnd(event_)
      });
    };
  }
};

var lineRipple = BasePlugin({
  mcwLineRipple
});

const progressPropertyType_ = {
  type: [Number, String],
  validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};
var script$e = {
  name: "mcw-linear-progress",
  props: {
    open: { type: Boolean, default: true },
    indeterminate: Boolean,
    progress: progressPropertyType_,
    buffer: progressPropertyType_,
    bufferingDots: { type: Boolean, default: true },
    tag: { type: String, default: "div" }
  },
  setup(props) {
    const uiState = reactive({
      classes: {
        "mdc-linear-progress": 1
      },
      bufferbarStyles: {},
      primaryStyles: {},
      rootAttrs: { "aria-valuemin": 0, "aria-valuemax": 1 },
      rootStyles: {},
      root: void 0
    });
    let foundation;
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      forceLayout: () => uiState.root.offsetWidth,
      setBufferBarStyle: (styleProperty, value) => uiState.bufferbarStyles = {
        ...uiState.bufferbarStyles,
        [styleProperty]: value
      },
      setPrimaryBarStyle: (styleProperty, value) => uiState.primaryStyles = {
        ...uiState.primaryStyles,
        [styleProperty]: value
      },
      hasClass: (className) => uiState.root.classList.contains(className),
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setAttribute: (attributeName, value) => uiState.rootAttrs = {
        ...uiState.rootAttrs,
        [attributeName]: value
      },
      removeAttribute: (attributeName) => {
        const { [attributeName]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setStyle: (name, value) => {
        uiState.rootStyles = {
          ...uiState.rootStyles,
          [name]: value
        };
      },
      attachResizeObserver: (callback) => {
        if (window.ResizeObserver) {
          const ro = new ResizeObserver(callback);
          ro.observe(uiState.root);
          return ro;
        }
        return;
      },
      getWidth: () => uiState.root.offsetWidth
    };
    const openOrClose = (nv) => foundation[nv ? "open" : "close"]();
    watch(() => props.open, (nv) => {
      openOrClose(nv);
    });
    watch(() => props.progress, (nv) => {
      foundation.setProgress(Number(nv));
    });
    watch(() => props.buffer, (nv) => {
      foundation.setBuffer(Number(nv));
    });
    watch(() => props.indeterminate, (nv) => {
      foundation.setDeterminate(!nv);
    });
    const onTransitionEnd = (event) => {
      foundation.handleTransitionEnd(event);
    };
    onMounted(() => {
      foundation = new MDCLinearProgressFoundation(adapter);
      foundation.init();
      foundation.setProgress(Number(props.progress));
      foundation.setBuffer(Number(props.buffer));
      foundation.setDeterminate(!props.indeterminate);
      openOrClose(props.open);
    });
    onBeforeUnmount(() => foundation.destroy());
    return { ...toRefs(uiState), onTransitionEnd };
  }
};

const _hoisted_1$a = { class: "mdc-linear-progress__buffer" };
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-linear-progress__buffer-dots" }, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createElementVNode("span", { class: "mdc-linear-progress__bar-inner" }, null, -1);
const _hoisted_4$7 = [
  _hoisted_3$9
];
const _hoisted_5$6 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar" }, [
  /* @__PURE__ */ createElementVNode("span", { class: "mdc-linear-progress__bar-inner" })
], -1);
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "root",
    class: _ctx.classes,
    style: _ctx.rootStyles,
    role: "progressbar"
  }, _ctx.rootAttrs, {
    onTransitionend: _cache[0] || (_cache[0] = (...args) => _ctx.onTransitionEnd && _ctx.onTransitionEnd(...args))
  }), [
    createElementVNode("div", _hoisted_1$a, [
      createElementVNode("div", {
        class: "mdc-linear-progress__buffer-bar",
        style: normalizeStyle(_ctx.bufferbarStyles)
      }, null, 4),
      _hoisted_2$9
    ]),
    createElementVNode("div", {
      class: "mdc-linear-progress__bar mdc-linear-progress__primary-bar",
      style: normalizeStyle(_ctx.primaryStyles)
    }, _hoisted_4$7, 4),
    _hoisted_5$6
  ], 16);
}

script$e.render = render$e;
script$e.__file = "src/linear-progress/linear-progress.vue";

var linearProgress = BasePlugin({
  mcwLinearProgress: script$e
});

let itemId = 0;
const slotNames = {
  START: "start",
  END: "end",
  SECONDARY_TEXT: "secondary-text",
  GRAPHIC: "graphic",
  META: "meta"
};
const startNames_ = /* @__PURE__ */ new Set([
  "avatar",
  "icon",
  "thumbnail",
  "checkbox",
  "radio",
  "switch",
  "image",
  "video"
]);
const endNames_ = /* @__PURE__ */ new Set(["icon", "meta", "checkbox", "radio", "switch"]);
var script$d = {
  name: "mcw-list-item",
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    id: String,
    start: { type: String, validator: (value) => startNames_.has(value) },
    end: { type: String, validator: (value) => endNames_.has(value) }
  },
  components: { CustomLink },
  setup(props, { slots, attrs }) {
    const root = ref();
    const myItemId = itemId++;
    const hasSlot = (name) => !!slots[name];
    const isTwoLine = computed(() => {
      return hasSlot(slotNames.SECONDARY_TEXT);
    });
    const hasSecondaryText = hasSlot(slotNames.SECONDARY_TEXT);
    const hasStart = hasSlot(slotNames.START) && !!props.start;
    const hasEnd = hasSlot(slotNames.END) && !!props.end;
    const { isInteractive, registerListItem } = inject("mcwList");
    const uiState = reactive({
      classes: {
        "mdc-list-item": 1,
        "mdc-list-item--disabled": props.disabled,
        "mdc-list-item--with-one-line": !isTwoLine.value,
        "mdc-list-item--with-two-lines": isTwoLine.value,
        [`mdc-list-item--with-leading-${props.start}`]: hasStart,
        [`mdc-list-item--with-trailing-${props.end}`]: hasEnd,
        "mdc-list-item--non-iteractive": !isInteractive
      },
      attrs: {}
    });
    if (attrs.class) {
      uiState.classes[attrs.class] = 1;
    }
    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const focus = () => {
      var _a;
      return ((_a = root.value.$el) != null ? _a : root.value).focus();
    };
    const myAttributes = computed(() => ({
      ...attrs,
      class: { ...rippleClasses.value, ...uiState.classes },
      style: styles.value,
      ...uiState.attrs
    }));
    const getPrimaryText = () => {
      var _a, _b;
      const primaryText = ((_a = root.value.$el) != null ? _a : root.value).querySelector(`.${cssClasses$8.LIST_ITEM_PRIMARY_TEXT_CLASS}`);
      return (_b = primaryText == null ? void 0 : primaryText.textContent) != null ? _b : "";
    };
    registerListItem({
      itemId: myItemId,
      setAttribute: (attribute, value) => uiState.attrs = { ...uiState.attrs, [attribute]: value },
      getAttribute: (attribute) => myAttributes.value[attribute],
      removeAttribute: (attribute) => {
        const { [attribute]: removed, ...rest } = myAttributes.value;
        myAttributes.value = rest;
      },
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => !!uiState.classes[className],
      getPrimaryText,
      focus
    });
    return {
      ...toRefs(uiState),
      focus,
      root,
      isTwoLine,
      myAttrs: myAttributes,
      myItemId,
      hasStart,
      hasEnd,
      isInteractive,
      hasSecondaryText
    };
  }
};

const _hoisted_1$9 = {
  key: 0,
  class: "mdc-list-item__ripple"
};
const _hoisted_2$8 = {
  key: 1,
  class: "mdc-list-item__start"
};
const _hoisted_3$8 = ["id"];
const _hoisted_4$6 = { class: "mdc-list-item__primary-text" };
const _hoisted_5$5 = {
  key: 0,
  class: "mdc-list-item__secondary-text"
};
const _hoisted_6$5 = {
  key: 2,
  class: "mdc-list-item__end"
};
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_link = resolveComponent("custom-link");
  return openBlock(), createBlock(_component_custom_link, mergeProps({ ref: "root" }, _ctx.myAttrs, {
    tag: "a",
    "data-myItemId": _ctx.myItemId
  }), {
    default: withCtx(() => [
      _ctx.isInteractive ? (openBlock(), createElementBlock("span", _hoisted_1$9)) : createCommentVNode("v-if", true),
      _ctx.hasStart ? (openBlock(), createElementBlock("span", _hoisted_2$8, [
        renderSlot(_ctx.$slots, "start")
      ])) : createCommentVNode("v-if", true),
      createElementVNode("span", {
        class: "mdc-list-item__content",
        id: _ctx.id
      }, [
        createElementVNode("span", _hoisted_4$6, [
          renderSlot(_ctx.$slots, "default")
        ]),
        _ctx.hasSecondaryText ? (openBlock(), createElementBlock("span", _hoisted_5$5, [
          renderSlot(_ctx.$slots, "secondary-text")
        ])) : createCommentVNode("v-if", true)
      ], 8, _hoisted_3$8),
      _ctx.hasEnd ? (openBlock(), createElementBlock("span", _hoisted_6$5, [
        renderSlot(_ctx.$slots, "end")
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16, ["data-myItemId"]);
}

script$d.render = render$d;
script$d.__file = "src/list/list-item.vue";

var mcwList = {
  name: "mcw-list",
  props: {
    multiSelectable: Boolean,
    wrapFocus: Boolean,
    textualList: Boolean,
    modelValue: { type: [String, Number, Array] },
    typeAhead: Boolean,
    vertical: { typee: Boolean, default: () => true },
    role: { type: String }
  },
  setup(props, { emit, slots, expose }) {
    const uiState = reactive({
      classes: { "mdc-list": true },
      listn: 0,
      rootAttrs: {
        "aria-orientation": props.vertical ? "vertical" : "horizontal"
      }
    });
    const listRoot = ref();
    if (props.multiSelectable) {
      uiState.rootAttrs["aria-multiselectable"] = "true";
    }
    let foundation;
    let slotObserver;
    const isInteractive = props.role === "listbox" || props.role === "menu";
    const listItems = {};
    const listElements = ref([]);
    const updateListElements = (rootElement) => {
      listElements.value = [
        ...rootElement.querySelectorAll(`.${cssClasses$8.LIST_ITEM_CLASS}`)
      ];
    };
    provide("mcwList", {
      isInteractive,
      registerListItem: (item) => listItems[item.itemId] = item
    });
    const getListItemByIndex = (index) => {
      const element = listElements.value[index];
      if (element) {
        const myItemId = element.dataset.myitemid;
        return listItems[myItemId];
      }
    };
    const layout = () => {
      foundation.setVerticalOrientation(props.vertical);
      for (const itemElement of listRoot.value.querySelectorAll(".mdc-list-item:not([tabindex])")) {
        const id = itemElement.dataset.myitemid;
        const item = listItems[id];
        item.setAttribute("tabindex", -1);
      }
      for (const focusableChildElements of listRoot.value.querySelectorAll(strings$b.FOCUSABLE_CHILD_ELEMENTS)) {
        focusableChildElements.setAttribute("tabindex", -1);
      }
      foundation.setUseSelectedAttribute(true);
      foundation.layout();
    };
    const initializeListType = () => {
      if (isInteractive) {
        const selection = [
          ...listRoot.value.querySelectorAll(strings$b.SELECTED_ITEM_SELECTOR)
        ].map((listItem) => listElements.value.indexOf(listItem));
        if (matches(listRoot.value, strings$b.ARIA_MULTI_SELECTABLE_SELECTOR)) {
          foundation.setSelectedIndex(selection);
        } else if (selection.length > 0) {
          foundation.setSelectedIndex(selection[0]);
        }
        return;
      }
      const checkboxListItems = listRoot.value.querySelectorAll(strings$b.ARIA_ROLE_CHECKBOX_SELECTOR);
      const radioSelectedListItem = listRoot.value.querySelector(strings$b.ARIA_CHECKED_RADIO_SELECTOR);
      if (checkboxListItems.length > 0) {
        const preselectedItems = listRoot.value.querySelectorAll(strings$b.ARIA_CHECKED_CHECKBOX_SELECTOR);
        foundation.setSelectedIndex(Array.prototype.map.call(preselectedItems, (listItem) => listElements.value.indexOf(listItem)));
      } else if (radioSelectedListItem) {
        foundation.setSelectedIndex(listElements.value.indexOf(radioSelectedListItem));
      }
    };
    const handleFocusInEvent = (event_) => {
      const index = getListItemIndex(event_, listElements.value);
      foundation.handleFocusIn(event_, index);
    };
    const handleFocusOutEvent = (event_) => {
      const index = getListItemIndex(event_, listElements.value);
      foundation.handleFocusOut(event_, index);
    };
    const handleKeydownEvent = (event_) => {
      const index = getListItemIndex(event_, listElements.value);
      const target = event_.target;
      foundation.handleKeydown(event_, target.classList.contains(cssClasses$8.LIST_ITEM_CLASS), index);
    };
    const handleClickEvent = (event_) => {
      const index = getListItemIndex(event_, listElements.value);
      const isCheckboxAlreadyUpdatedInAdapter = matches(event_.target, strings$b.CHECKBOX_RADIO_SELECTOR);
      foundation.handleClick(index, isCheckboxAlreadyUpdatedInAdapter, event_);
    };
    const adapter = {
      addClassForElementIndex: (index, className) => {
        var _a;
        return (_a = getListItemByIndex(index)) == null ? void 0 : _a.addClass(className);
      },
      focusItemAtIndex: (index) => {
        const element = listElements.value[index];
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: (index, attribute) => {
        var _a;
        return (_a = getListItemByIndex(index)) == null ? void 0 : _a.getAttribute(attribute);
      },
      getFocusedElementIndex: () => listElements.value.indexOf(document.activeElement),
      getListItemCount: () => listElements.value.length,
      getPrimaryTextAtIndex: (index) => {
        var _a;
        return (_a = getListItemByIndex(index)) == null ? void 0 : _a.getPrimaryText();
      },
      hasCheckboxAtIndex: (index) => {
        const listItem = listElements.value[index];
        const returnValue = listItem && !!listItem.querySelector(strings$b.CHECKBOX_SELECTOR);
        return returnValue;
      },
      hasRadioAtIndex: (index) => {
        const listItem = listElements.value[index];
        return listItem && !!listItem.querySelector(strings$b.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: (index) => {
        const listItem = listElements.value[index];
        const toggleElement = listItem.querySelector(strings$b.CHECKBOX_SELECTOR);
        return toggleElement == null ? void 0 : toggleElement.checked;
      },
      isFocusInsideList: () => {
        const root = listRoot.value;
        return root !== document.activeElement && (root == null ? void 0 : root.contains(document.activeElement));
      },
      isRootFocused: () => document.activeElement === listRoot.value,
      listItemAtIndexHasClass: (index, className) => {
        var _a;
        return (_a = getListItemByIndex(index)) == null ? void 0 : _a.hasClass(className);
      },
      notifyAction: (index) => {
        emitCustomEvent(listRoot.value, strings$b.ACTION_EVENT, { index }, true);
        if (Array.isArray(props.modelValue)) {
          emit("update:modelValue", foundation.getSelectedIndex());
        } else {
          emit("update:modelValue", index);
        }
      },
      notifySelectionChange: (changedIndices) => {
        emit(strings$b.SELECTION_CHANGE_EVENT.toLowerCase(), { changedIndices }, true);
      },
      removeClassForElementIndex: (index, className) => {
        var _a;
        return (_a = getListItemByIndex(index)) == null ? void 0 : _a.removeClass(className);
      },
      setAttributeForElementIndex: (index, attribute, value) => {
        var _a;
        return (_a = getListItemByIndex(index)) == null ? void 0 : _a.setAttribute(attribute, value);
      },
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = listElements.value[index];
        const toggleElement = listItem.querySelector(strings$b.CHECKBOX_RADIO_SELECTOR);
        toggleElement && (toggleElement.checked = isChecked);
        const event = new CustomEvent("update:modelValue", [true, false]);
        toggleElement == null ? void 0 : toggleElement.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        var _a;
        const element = listElements.value[listItemIndex];
        const listItemChildren = Array.prototype.slice.call(element.querySelectorAll(strings$b.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        for (const element_ of listItemChildren) {
          const listItem = (_a = listItems[element_.dataset.myitemid]) != null ? _a : element_;
          listItem.setAttribute("tabindex", tabIndexValue);
        }
      }
    };
    watch(() => props.modelValue, (nv) => {
      if (Array.isArray(nv) || props.modelValue != nv) {
        foundation.setSelectedIndex(nv);
      }
    });
    watch(() => props.wrapFocus, (nv) => foundation.setWrapFocus(nv));
    watch(() => props.vertical, (nv) => foundation.setVerticalOrientation(nv));
    watch(() => props.typeAhead, (nv) => foundation.setHasTypeahead(nv));
    const ensureFocusable = () => {
      if (isInteractive && !listRoot.value.querySelector(`.mdc-list-item[tabindex="0"]`)) {
        const index = getInitialFocusIndex(foundation, listRoot.value, listElements.value);
        if (index !== -1) {
          listElements.value[index].tabIndex = 0;
        }
      }
    };
    onMounted(() => {
      updateListElements(listRoot.value);
      foundation = new MDCListFoundation$1(adapter);
      foundation.init();
      setSelectedIfSingleSelectionList(props, foundation, adapter);
      const { wrapFocus, typeAhead, vertical } = props;
      layout();
      initializeListType();
      ensureFocusable();
      foundation.setWrapFocus(wrapFocus);
      foundation.setVerticalOrientation(vertical);
      if (typeAhead) {
        foundation.setHasTypeahead(typeAhead);
      }
      slotObserver = new MutationObserver(() => {
        updateListElements(listRoot.value);
      });
      slotObserver.observe(listRoot.value, {
        childList: true
      });
    });
    onBeforeUnmount(() => {
      slotObserver.disconnect();
      foundation.destroy();
    });
    expose({
      setSingleSelection: (isSingleSelectionList) => foundation.setSingleSelection(isSingleSelectionList),
      setSelectedIndex: (index) => foundation.setSelectedIndex(index),
      getSelectedIndex: () => foundation.getSelectedIndex(),
      setEnabled: (itemIndex, isEnabled) => foundation.setEnabled(itemIndex, isEnabled),
      typeaheadMatchItem: (nextChar, startingIndex) => foundation.typeaheadMatchItem(nextChar, startingIndex, true),
      typeaheadInProgress: () => foundation.isTypeaheadInProgress(),
      listElements,
      getListItemByIndex,
      getListElementByIndex: (index) => listElements.value[index],
      getListElementIndex: (element) => {
        return listElements.value.findIndex((element_) => element_ == element);
      },
      getListItemCount: () => listElements.value.length,
      focus: () => {
        listRoot.value.focus();
      }
    });
    return () => {
      return h("ul", {
        ref: listRoot,
        class: uiState.classes,
        onClick: handleClickEvent,
        onKeydown: handleKeydownEvent,
        onFocusin: handleFocusInEvent,
        onFocusout: handleFocusOutEvent,
        role: "role",
        ...uiState.rootAttrs
      }, slots.default());
    };
  }
};
const getListItemIndex = (eventOrElement, listElements) => {
  const { target } = eventOrElement;
  if (target) {
    const myItemId = target.dataset.myitemid;
    if (myItemId !== void 0) {
      const listElementIndex = listElements.findIndex(({ dataset: { myitemid } }) => myitemid === myItemId);
      return listElementIndex;
    }
  }
  const element = target != null ? target : eventOrElement;
  const nearestParent = closest(element, `.${cssClasses$8.LIST_ITEM_CLASS}, .${cssClasses$8.ROOT}`);
  if (nearestParent && matches(nearestParent, `.${cssClasses$8.LIST_ITEM_CLASS}`)) {
    return listElements.value.indexOf(nearestParent);
  }
  return -1;
};
const getInitialFocusIndex = (foundation, rootElement, listElements) => {
  const selectedIndex = foundation.getSelectedIndex();
  if (Array.isArray(selectedIndex) && selectedIndex.length > 0) {
    return selectedIndex[0];
  }
  if (typeof selectedIndex === "number" && selectedIndex !== -1) {
    return selectedIndex;
  }
  const element = rootElement.querySelector(`.mdc-list-item:not(.mdc-list-item--disabled)`);
  if (element === null) {
    return -1;
  }
  return getListItemIndex(element, listElements);
};
function setSelectedIfSingleSelectionList(props, foundation, adapter) {
  const { modelValue, multiSelectable } = props;
  if (multiSelectable != true && typeof modelValue === "number" && !Number.isNaN(modelValue)) {
    const index = modelValue;
    const hasSelectedClass = adapter.listItemAtIndexHasClass(index, cssClasses$8.LIST_ITEM_SELECTED_CLASS);
    const hasActivatedClass = adapter.listItemAtIndexHasClass(index, cssClasses$8.LIST_ITEM_ACTIVATED_CLASS);
    if (!(hasSelectedClass || hasActivatedClass)) {
      adapter.addClassForElementIndex(modelValue, "mdc-list-item--selected");
    }
    adapter.setAttributeForElementIndex(index, "tabindex", 0);
    foundation.setSingleSelection(true);
    foundation.setSelectedIndex(index);
  }
}

var list = BasePlugin({
  mcwList,
  mcwListItem: script$d
});

var mcwMaterialIcon = {
  name: "mcw-material-icon",
  props: {
    icon: String,
    tag: { type: String, default: "i" }
  },
  setup(props, { attrs }) {
    return () => {
      return h(props.tag, { ...attrs, class: "material-icons" }, props.icon);
    };
  }
};

var materialIcon = BasePlugin({
  mcwMaterialIcon
});

var mcwMenuAnchor = {
  name: "mcw-menu-anchor",
  setup(props, { slots }) {
    return () => {
      var _a;
      return h("div", {
        class: {
          "mdc-menu-surface--anchor": 1
        }
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

var mcwMenuItem = {
  name: "mcw-menu-item",
  props: {
    disabled: Boolean
  },
  setup(props, { slots }) {
    return () => {
      var _a;
      return h("li", {
        class: {
          "mdc-menu-divider": 1,
          "mdc-list-divider": 1
        },
        tabindex: props.disabled ? "-1" : "0",
        "aria-disabled": props.disabled,
        role: "menuitem"
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

const { cssClasses: cssClasses$4, strings: strings$8 } = MDCMenuSurfaceFoundation;
var mcwMenuSurface = {
  name: "mcw-menu-surface",
  props: {
    modelValue: [Boolean, Object],
    "quick-open": Boolean,
    "anchor-corner": [String, Number],
    "anchor-margin": Object
  },
  setup(props, { emit, slots, expose }) {
    const uiState = reactive({
      classes: {
        "mdc-menu-surface": 1
      }
    });
    const root = ref();
    let foundation;
    let anchorElement;
    let previousFocus_;
    const handleBodyClick = (event_) => foundation.handleBodyClick(event_);
    const registerBodyClickListener = () => document.body.addEventListener("click", handleBodyClick);
    const deregisterBodyClickListener = () => document.body.removeEventListener("click", handleBodyClick);
    const handleKeydown = (event_) => foundation.handleKeydown(event_);
    const getFocusAdapterMethods = () => ({
      isFocused: () => document.activeElement === root.value,
      saveFocus: () => {
        previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        var _a;
        if (((_a = root.value) == null ? void 0 : _a.contains(document.activeElement)) && previousFocus_ && previousFocus_.focus) {
          previousFocus_.focus();
        }
      }
    });
    const getDimensionAdapterMethods = () => ({
      getInnerDimensions: () => ({
        width: root.value.offsetWidth,
        height: root.value.offsetHeight
      }),
      getAnchorDimensions: () => anchorElement == null ? void 0 : anchorElement.getBoundingClientRect(),
      getWindowDimensions: () => ({
        width: window.innerWidth,
        height: window.innerHeight
      }),
      getBodyDimensions: () => ({
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }),
      getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      setPosition: (position) => {
        root.value.style.left = "left" in position ? `${position.left}px` : void 0;
        root.value.style.right = "right" in position ? `${position.right}px` : void 0;
        root.value.style.top = "top" in position ? `${position.top}px` : void 0;
        root.value.style.bottom = "bottom" in position ? `${position.bottom}px` : void 0;
      },
      setMaxHeight: (height) => root.value.style.maxHeight = height
    });
    const onOpen_ = (value) => foundation[value ? "open" : "close"]();
    const setIsHoisted = (isHoisted) => foundation.setIsHoisted(isHoisted);
    const hoistMenuToBody = () => {
      root.value.remove();
      document.body.append(root.value);
      setIsHoisted(true);
    };
    const setFixedPosition = (isFixed) => {
      if (isFixed) {
        uiState.classes = { ...uiState.classes, [cssClasses$4.FIXED]: true };
      } else {
        const { [cssClasses$4.FIXED]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      }
      foundation.setFixedPosition(isFixed);
    };
    const setAbsolutePosition = (x, y) => {
      foundation.setAbsolutePosition(x, y);
      setIsHoisted(true);
    };
    const setAnchorCorner = (corner) => foundation.setAnchorCorner(corner);
    const setAnchorMargin = (margin) => foundation.setAnchorMargin(margin);
    const setMenuSurfaceAnchorElement = (element) => anchorElement = element;
    const show = (options) => foundation.open(options);
    const close = (skipRestoreFocus = false) => foundation.close(skipRestoreFocus);
    const hide = () => close();
    const isOpen = () => {
      var _a;
      return (_a = foundation == null ? void 0 : foundation.isOpen()) != null ? _a : false;
    };
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => root.value.classList.contains(className),
      hasAnchor: () => !!anchorElement,
      notifyClose: () => {
        root.value && emitCustomEvent(root.value, strings$8.CLOSED_EVENT, {});
        deregisterBodyClickListener();
        emit("mdcmenusurface:closed");
        emit("update:modelValue", false);
      },
      notifyOpen: () => {
        emitCustomEvent(root.value, strings$8.OPENED_EVENT, {});
        registerBodyClickListener();
        emit("mdcmenusurface:opened");
        emit("update:modelValue", true);
      },
      isElementInContainer: (element) => {
        var _a;
        return (_a = root.value) == null ? void 0 : _a.contains(element);
      },
      isRtl: () => getComputedStyle(root.value).getPropertyValue("direction") === "rtl",
      setTransformOrigin: (origin) => {
        root.value.style.setProperty(`${getCorrectPropertyName(window, "transform")}-origin`, origin);
      }
    };
    watch(() => props.modelValue, (nv) => onOpen_(nv));
    watch(() => props.quickOpen, (nv) => foundation.setQuickOpen(nv));
    onMounted(() => {
      var _a;
      foundation = new MDCMenuSurfaceFoundation({
        ...adapter,
        ...getFocusAdapterMethods(),
        ...getDimensionAdapterMethods()
      });
      foundation.init();
      if ((_a = root.value.parentElement) == null ? void 0 : _a.classList.contains(cssClasses$4.ANCHOR)) {
        anchorElement = root.value.parentElement;
      }
    });
    onBeforeUnmount(() => {
      previousFocus_ = void 0;
      foundation.destroy();
    });
    expose({
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
    return () => {
      var _a;
      return h("div", {
        ref: root,
        class: uiState.classes,
        onKeydown: (event_) => handleKeydown(event_)
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
};

const { cssClasses: cssClasses$3, strings: strings$7 } = MDCMenuFoundation;
var script$c = {
  name: "mcw-menu",
  props: {
    modelValue: [Boolean, Object],
    quickOpen: Boolean,
    anchorCorner: [String, Number],
    anchorMargin: Object,
    fixed: Boolean,
    absolutePosition: Array,
    typeAhead: Boolean,
    singleSelection: { type: Boolean, default: () => true },
    defaultFocusState: { type: String, default: () => "LIST_ROOT" }
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true,
      menuSurface: void 0,
      list: void 0
    });
    let foundation;
    const getListItemByIndex = (index) => {
      var _a;
      return (_a = uiState.list) == null ? void 0 : _a.getListItemByIndex(index);
    };
    const getListElementByIndex = (index) => {
      var _a;
      return (_a = uiState.list) == null ? void 0 : _a.getListElementByIndex(index);
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
      var _a;
      return (_a = uiState.list) == null ? void 0 : _a.layout();
    };
    const handleAction = (index) => {
      foundation.handleItemAction(getListElementByIndex(index));
    };
    const handleKeydown = (event_) => foundation.handleKeydown(event_);
    const handleMenuSurfaceOpened = () => {
      foundation.handleMenuSurfaceOpened();
      emit("mdcmenusurface:opened");
    };
    const handleMenuSurfaceClosed = () => {
      emit("mdcmenusurface:closed");
    };
    const onChange = (item) => {
      uiState.menuOpen = item;
      emit("update:modelValue", item);
    };
    const setAnchorCorner = (corner) => {
      uiState.menuSurface.setAnchorCorner(corner);
    };
    const setAnchorElement = (element) => {
      uiState.menuSurface.setMenuSurfaceAnchorElement(element);
    };
    const setSelectedIndex = (index) => {
      var _a;
      return (_a = uiState.list) == null ? void 0 : _a.setSelectedIndex(index);
    };
    const getSelectedIndex = () => {
      var _a, _b;
      return (_b = (_a = uiState.list) == null ? void 0 : _a.getSelectedIndex()) != null ? _b : -1;
    };
    const setAnchorMargin = (margin) => {
      uiState.menuSurface.setAnchorMargin(margin);
    };
    const getPrimaryTextAtIndex = (index) => {
      const item = getListElementByIndex(index);
      if (item && uiState.list) {
        return uiState.list.getPrimaryText(item) || "";
      }
      return "";
    };
    const setFixedPosition = (isFixed) => {
      uiState.menuSurface.setFixedPosition(isFixed);
    };
    const setIsHoisted = (isHoisted) => {
      uiState.menuSurface.setIsHoisted(isHoisted);
    };
    const setAbsolutePosition = (x, y) => {
      uiState.menuSurface.setAbsolutePosition(x, y);
    };
    const typeaheadInProgress = () => {
      var _a;
      return (_a = uiState.list.typeAheadInProgress) != null ? _a : false;
    };
    const typeaheadMatchItem = (nextChar, startingIndex) => {
      if (uiState.list) {
        return uiState.list.typeaheadMatchItem(nextChar, startingIndex);
      }
      return -1;
    };
    const setSingleSelection = (singleSelection) => {
      var _a;
      return (_a = uiState.list) == null ? void 0 : _a.setSingleSelection(singleSelection);
    };
    const focusItemAtIndex = (index) => getListItemByIndex(index).focus();
    const getMenuItemCount = () => uiState.list.getListItemCount();
    const adapter = {
      addClassToElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.addClass(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.removeClass(className);
      },
      addAttributeToElementAtIndex: (index, attribute, value) => {
        const listItem = getListItemByIndex(index);
        listItem.setAttribute(attribute, value);
      },
      removeAttributeFromElementAtIndex: (index, attribute) => {
        const listItem = getListItemByIndex(index);
        listItem.removeAttribute(attribute);
      },
      getAttributeFromElementAtIndex: (index, attribute) => {
        const listItem = getListItemByIndex(index);
        return listItem.getAttribute(attribute);
      },
      elementContainsClass: (element, className) => element.classList.contains(className),
      closeSurface: (skipRestoreFocus) => {
        uiState.menuSurface.close(skipRestoreFocus);
        emit("update:modelValue", false);
      },
      getElementIndex: (element) => {
        var _a;
        return (_a = uiState.list) == null ? void 0 : _a.getListElementIndex(element);
      },
      notifySelected: (eventData) => {
        const item = getListElementByIndex(eventData.index);
        const rootElement = uiState.menuSurface.$el;
        emitCustomEvent(rootElement, strings$7.SELECTED_EVENT, {
          index: eventData.index,
          item
        });
        emit("select", {
          index: eventData.index,
          item
        });
      },
      getMenuItemCount,
      focusItemAtIndex,
      focusListRoot: () => {
        uiState.list.focus();
      },
      isSelectableItemAtIndex: (index) => {
        const item = getListElementByIndex(index);
        return !!closest(item, `.${cssClasses$3.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (index) => {
        const item = getListElementByIndex(index);
        const selectionGroupElement = closest(item, `.${cssClasses$3.MENU_SELECTION_GROUP}`);
        const selectedItemElement = selectionGroupElement.querySelector(`.${cssClasses$3.MENU_SELECTED_LIST_ITEM}`);
        return selectedItemElement ? uiState.list.getListElementIndex(selectedItemElement) : -1;
      }
    };
    watch(() => props.modelValue, (nv) => {
      uiState.menuOpen = nv;
    });
    onMounted(() => {
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
      foundation.setDefaultFocusState(props.defaultFocusState);
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    const getMenuItemValues = (attribute) => {
      var _a;
      const le = (_a = uiState.list) == null ? void 0 : _a.listElements;
      const returnValue = le.map((element) => element.getAttribute(attribute) || "");
      return returnValue;
    };
    const getMenuItemTextAtIndex = (index) => {
      var _a, _b;
      return (_b = (_a = uiState.list) == null ? void 0 : _a.listElements[index]) == null ? void 0 : _b.textContent;
    };
    return {
      ...toRefs(uiState),
      handleAction,
      handleKeydown,
      onChange,
      handleMenuSurfaceOpened,
      handleMenuSurfaceClosed,
      setAbsolutePosition,
      setIsHoisted,
      setFixedPosition,
      setAnchorMargin,
      setAnchorElement,
      setAnchorCorner,
      getSelectedIndex,
      setSelectedIndex,
      wrapFocus,
      surfaceOpen,
      layout,
      getPrimaryTextAtIndex,
      typeaheadInProgress,
      typeaheadMatchItem,
      setSingleSelection,
      focusItemAtIndex,
      getMenuItemCount,
      getMenuItemValues,
      getMenuItemTextAtIndex
    };
  }
};

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_list = resolveComponent("mcw-list");
  const _component_mcw_menu_surface = resolveComponent("mcw-menu-surface");
  return openBlock(), createBlock(_component_mcw_menu_surface, {
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
        "multi-selectable": !_ctx.singleSelection
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["wrap-focus", "onUpdate:modelValue", "type-ahead", "multi-selectable"])
    ]),
    _: 3
  }, 8, ["quick-open", "modelValue", "onKeydown", "onUpdate:modelValue", "onMdcmenusurface:opened", "onMdcmenusurface:closed"]);
}

script$c.render = render$c;
script$c.__file = "src/menu/menu.vue";

var menu = BasePlugin({
  mcwMenu: script$c,
  mcwMenuSurface,
  mcwMenuItem,
  mcwMenuAnchor,
  mcwList
});

const { cssClasses: cssClasses$2 } = MDCNotchedOutlineFoundation;
var mcwNotchedOutline = {
  name: "mcw-notched-outline",
  components: { mcwFloatingLabel },
  setup(props, { slots, expose }) {
    const uiState = reactive({
      outlinedClasses: { "mdc-notched-outline": true },
      notchStyles: {},
      labelEl: void 0
    });
    let foundation;
    const adapter = {
      addClass: (className) => uiState.outlinedClasses = {
        ...uiState.outlinedClasses,
        [className]: true
      },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.outlinedClasses;
        uiState.outlinedClasses = rest;
      },
      setNotchWidthProperty: (width) => uiState.notchStyles = { ...uiState.notchStyles, width: `${width}px` },
      removeNotchWidthProperty: () => {
        const { width: removed, ...rest } = uiState.notchStyles;
        uiState.notchStyles = rest;
      }
    };
    const notch = (notchWidth) => {
      foundation.notch(notchWidth);
    };
    const closeNotch = () => {
      foundation.closeNotch();
    };
    const float = (shouldFloat) => {
      var _a;
      (_a = uiState.labelEl) == null ? void 0 : _a.float(shouldFloat);
    };
    const shake = (shouldShake) => {
      var _a;
      (_a = uiState.labelEl) == null ? void 0 : _a.shake(shouldShake);
    };
    const getWidth = () => {
      var _a;
      return (_a = uiState.labelEl) == null ? void 0 : _a.getWidth();
    };
    expose({ getWidth, shake, float, closeNotch, notch });
    onMounted(() => {
      foundation = new MDCNotchedOutlineFoundation(adapter);
      foundation.init();
      const key = slots.default ? cssClasses$2.OUTLINE_UPGRADED : cssClasses$2.NO_LABEL;
      uiState.outlinedClasses = { ...uiState.outlinedClasses, [key]: true };
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    const labelReference = toRef(uiState, "labelEl");
    return () => {
      const floatingLabel = slots.default && h(mcwFloatingLabel, { ref: labelReference }, () => [slots.default()]);
      return h("span", { class: uiState.outlinedClasses }, [
        h("span", { class: "mdc-notched-outline__leading" }),
        h("span", { class: "mdc-notched-outline__notch", style: uiState.notchStyles }, [floatingLabel]),
        h("span", { class: "mdc-notched-outline__trailing" })
      ]);
    };
  }
};

var notchedOutline = BasePlugin({
  mcwNotchedOutline
});

let radioId_ = 0;
var script$b = {
  name: "mcw-radio",
  props: {
    label: String,
    alignEnd: Boolean,
    radioClasses: String,
    name: { type: String, required: true },
    id: { type: String },
    value: String,
    modelValue: String,
    disabled: Boolean,
    checked: Boolean
  },
  setup(props, { emit }) {
    var _a;
    const uiState = reactive({
      classes: { "mdc-radio": 1 },
      controlEl: void 0,
      root: void 0
    });
    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate
    } = useRipplePlugin(toRef(uiState, "root"), {
      isUnbounded: () => true,
      isSurfaceActive: () => false,
      registerInteractionHandler: (event_, handler) => {
        uiState.controlEl.addEventListener(event_, handler, applyPassive());
      },
      deregisterInteractionHandler: (event_, handler) => {
        uiState.controlEl.removeEventListener(event_, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      }
    });
    let foundation;
    const radioId = (_a = props.id) != null ? _a : `__mcw-radio-${radioId_++}`;
    const rootClasses = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes,
        ...props.radioClasses
      };
    });
    const onChange = () => {
      const nativeValue = uiState.controlEl.value;
      nativeValue != props.modelValue && emit("update:modelValue", uiState.controlEl.value);
    };
    const setChecked = (checked) => {
      uiState.controlEl.checked = checked;
    };
    const onPicked = (nv) => {
      setChecked(nv == uiState.controlEl.value);
    };
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setNativeControlDisabled: (disabled) => uiState.controlEl && uiState.controlEl.disabled == disabled
    };
    watch(() => props.checked, (nv) => {
      setChecked(nv);
    });
    watch(() => props.disabled, (nv) => {
      foundation.setDisabled(nv);
    });
    watch(() => props.modelValue, (nv) => {
      onPicked(nv);
    });
    onMounted(() => {
      foundation = new MDCRadioFoundation(adapter);
      foundation.init();
      const { checked, disabled, modelValue, value } = props;
      foundation.setDisabled(disabled);
      setChecked(checked || modelValue == value);
      checked && onChange();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      rootClasses,
      styles,
      onChange,
      onPicked,
      setChecked,
      radioId,
      activate,
      deactivate
    };
  },
  components: { formFieldWrapper }
};

const _hoisted_1$8 = ["id", "name", "value", "checked", "disabled"];
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-radio__background" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "mdc-radio__outer-circle" }),
  /* @__PURE__ */ createElementVNode("div", { class: "mdc-radio__inner-circle" })
], -1);
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-radio__ripple" }, null, -1);
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_form_field_wrapper = resolveComponent("form-field-wrapper");
  return openBlock(), createBlock(_component_form_field_wrapper, {
    class: "mdc-radio-wrapper",
    activate: _ctx.activate,
    deactivate: _ctx.deactivate,
    alignEnd: _ctx.alignEnd,
    forId: _ctx.radioId
  }, createSlots({
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "root",
        class: normalizeClass(_ctx.rootClasses),
        style: normalizeStyle(_ctx.styles)
      }, [
        createElementVNode("input", mergeProps({
          ref: "controlEl",
          id: _ctx.radioId,
          name: _ctx.name,
          type: "radio",
          class: "mdc-radio__native-control",
          onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
        }, _ctx.$attrs, {
          value: _ctx.value,
          checked: _ctx.modelValue == _ctx.value,
          disabled: _ctx.disabled
        }), null, 16, _hoisted_1$8),
        _hoisted_2$7,
        _hoisted_3$7
      ], 6)
    ]),
    _: 2
  }, [
    _ctx.label ? {
      name: "label",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ])
    } : void 0
  ]), 1032, ["activate", "deactivate", "alignEnd", "forId"]);
}

script$b.render = render$b;
script$b.__file = "src/radio/radio.vue";

var radio = BasePlugin({ mcwRadio: script$b });

var script$a = {
  name: "mcw-segment",
  props: {
    icon: String,
    label: String,
    ripple: { type: Boolean, default: () => true }
  },
  setup(props, { attrs }) {
    var _a, _b;
    const uiState = reactive({
      classes: {},
      attrs: {},
      root: void 0
    });
    let foundation;
    const { getNextSegmentIndex, isSingleSelect, isTouch } = inject("segmented-button");
    if (isTouch) {
      uiState.classes["mdc-segmented-button--touch"] = true;
    }
    uiState.attrs = isSingleSelect ? { role: "radio", "aria-checked": (_a = attrs["aria-checked"]) != null ? _a : "false" } : { "aria-pressed": (_b = attrs["aria-pressed"]) != null ? _b : "false" };
    const getSegmentId = () => foundation.getSegmentId();
    const isSelected = () => foundation.isSelected();
    const setSelected = () => foundation.setSelected();
    const setUnselected = () => foundation.setUnselected();
    const segmentIndex = getNextSegmentIndex({
      getSegmentId,
      isSelected,
      setSelected,
      setUnselected
    });
    const { classes: rippleClasses, styles } = useRipplePlugin(toRef(uiState, "root"), {
      computeBoundingRect: () => {
        return foundation.getDimensions();
      }
    });
    const myAttributes = computed(() => {
      return {
        ...uiState.attrs,
        class: { ...rippleClasses.value, ...uiState.classes },
        styles: styles.value
      };
    });
    const onClick = () => foundation.handleClick();
    const adapter = {
      isSingleSelect: () => {
        return isSingleSelect;
      },
      getAttr: (name) => uiState.root.getAttribute(name),
      setAttr: (attributeName, value) => {
        uiState.attrs = { ...uiState.attrs, [attributeName]: value };
      },
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      hasClass: (className) => !!uiState.classes[className],
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      notifySelectedChange: (selected) => {
        emitCustomEvent(uiState.root, "selected", {
          index: segmentIndex,
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
      foundation == null ? void 0 : foundation.destroy();
    });
    return { ...toRefs(uiState), myAttrs: myAttributes, onClick, isTouch };
  },
  components: { touchWrapper }
};

const _hoisted_1$7 = {
  key: 0,
  class: "mdc-segmented-button__ripple"
};
const _hoisted_2$6 = {
  key: 1,
  class: "material-icons mdc-segmented-button__icon"
};
const _hoisted_3$6 = {
  key: 2,
  class: "mdc-segmented-button__touch"
};
const _hoisted_4$5 = {
  key: 3,
  class: "mdc-segmented-button__label"
};
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_touch_wrapper = resolveComponent("touch-wrapper");
  return openBlock(), createBlock(_component_touch_wrapper, { isTouch: _ctx.isTouch }, {
    default: withCtx(() => [
      createElementVNode("button", mergeProps({
        ref: "root",
        class: "mdc-segmented-button__segment"
      }, _ctx.myAttrs, {
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }), [
        _ctx.ripple ? (openBlock(), createElementBlock("div", _hoisted_1$7)) : createCommentVNode("v-if", true),
        _ctx.icon ? (openBlock(), createElementBlock("i", _hoisted_2$6, toDisplayString(_ctx.icon), 1)) : createCommentVNode("v-if", true),
        _ctx.isTouch ? (openBlock(), createElementBlock("div", _hoisted_3$6)) : createCommentVNode("v-if", true),
        _ctx.label ? (openBlock(), createElementBlock("div", _hoisted_4$5, toDisplayString(_ctx.label), 1)) : createCommentVNode("v-if", true)
      ], 16)
    ]),
    _: 1
  }, 8, ["isTouch"]);
}

script$a.render = render$a;
script$a.__file = "src/segmented-button/segment.vue";

var mcwSegmentedButton = {
  name: "mcw-segmented-button",
  props: {
    singleSelect: Boolean,
    touch: Boolean,
    modelValue: { type: [Number, Array] }
  },
  setup(props, { emit, slots }) {
    const uiState = reactive({
      classes: {
        "mdc-segmented-button--single-select": props.singleSelect
      },
      styles: {},
      contentEl: void 0
    });
    const rootElement = ref();
    let foundation;
    let segmentIndex = 0;
    const segments_ = [];
    const getNextSegmentIndex = (segment) => {
      const sg = { ...segment, index: segmentIndex++ };
      segments_.push(sg);
      return sg.index;
    };
    provide("segmented-button", {
      getNextSegmentIndex,
      isSingleSelect: props.singleSelect,
      isTouch: props.touch
    });
    const mappedSegments = computed(() => segments_.map(({ index, isSelected, getSegmentId }) => ({
      index,
      selected: isSelected(),
      segmentId: getSegmentId()
    })));
    const onSelected = ({ detail }) => {
      foundation.handleSelected(detail);
    };
    const adapter = {
      hasClass: (className) => rootElement.value.classList.contains(className),
      getSegments: () => {
        return mappedSegments.value;
      },
      selectSegment: (indexOrSegmentId) => {
        const segmentDetail = mappedSegments.value.find((_segmentDetail) => _segmentDetail.index === indexOrSegmentId || _segmentDetail.segmentId === indexOrSegmentId);
        if (segmentDetail) {
          segments_[segmentDetail.index].setSelected();
        }
      },
      unselectSegment: (indexOrSegmentId) => {
        const segmentDetail = mappedSegments.value.find((_segmentDetail) => _segmentDetail.index === indexOrSegmentId || _segmentDetail.segmentId === indexOrSegmentId);
        if (segmentDetail) {
          segments_[segmentDetail.index].setUnselected();
        }
      },
      notifySelectedChange: (detail) => {
        emit("change", detail);
        if (Array.isArray(props.modelValue)) {
          const { selected, index } = detail;
          const index_ = props.modelValue.indexOf(index);
          if (selected) {
            index_ < 1 && emit("update:modelValue", [...props.modelValue, index]);
          } else {
            index_ > -1 && emit("update:modelValue", [
              ...props.modelValue.slice(0, index_),
              ...props.modelValue.slice(index_ + 1)
            ]);
          }
        } else {
          emit("update:modelValue", detail.index);
        }
      }
    };
    const role = computed(() => props.singleSelect ? "radiogroup" : "group");
    onMounted(() => {
      foundation = new MDCSegmentedButtonFoundation(adapter);
      foundation.init();
      if (props.singleSelect && props.modelValue !== void 0) {
        foundation.selectSegment(props.modelValue);
      }
      watch(() => props.modelValue, (nv) => {
        if (Array.isArray(nv)) {
          const selectedSegments = mappedSegments.value.filter(({ selected }) => selected).map(({ index }) => index);
          for (const v of nv) {
            if (!selectedSegments.includes(v)) {
              foundation.selectSegment(v);
            }
          }
          for (const v of selectedSegments) {
            if (!nv.includes(v)) {
              foundation.unselectSegment(v);
            }
          }
        } else {
          foundation.selectSegment(nv);
          foundation.handleSelected({ index: nv });
        }
      });
    });
    onBeforeUnmount(() => {
      foundation == null ? void 0 : foundation.destroy();
    });
    return () => {
      return h("div", {
        ref: rootElement,
        class: {
          "mdc-segmented-button": 1,
          ...uiState.classes
        },
        role: role.value,
        onSelected
      }, [slots.default()]);
    };
  }
};

var segmentedButton = BasePlugin({
  mcwSegmentedButton,
  mcwSegment: script$a
});

var SelectHelperText = {
  name: "select-helper-text",
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    helptext: String
  },
  setup(props, { expose, attrs }) {
    const uiState = reactive({
      classes: {
        "mdc-select-helper-text": true,
        "mdc-select-helper-text--validation-msg-persistent": props.helptextPersistent,
        "mdc-select-helper-text--validation-msg": props.helptextValidation
      },
      attrs: {},
      myHelptext: props.helptext
    });
    const foundation = ref();
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => Boolean(uiState.classes[className]),
      getAttr: (attribute) => {
        var _a;
        return (_a = uiState.attrs[attribute]) != null ? _a : attrs[attribute];
      },
      setAttr: (attribute, value) => uiState.attrs = { ...uiState.attrs, [attribute]: value },
      removeAttr: (attribute) => {
        const { [attribute]: removed, ...rest } = uiState.attrs;
        uiState.attrs = rest;
      },
      setContent: (content) => {
        uiState.myHelptext = content;
      }
    };
    watch(() => props.helptextPersistent, (nv) => foundation.value.setPersistent(nv));
    watch(() => props.helptextValidation, (nv) => foundation.value.setValidation(nv));
    watch(() => props.helptext, (nv) => uiState.myHelptext = nv);
    onMounted(() => {
      foundation.value = new MDCSelectHelperTextFoundation(adapter);
      foundation.value.init();
    });
    onBeforeUnmount(() => {
      foundation.value.destroy();
    });
    expose({ foundation });
    return () => {
      return h("p", { class: uiState.classes, ...uiState.attrs }, [
        uiState.myHelptext
      ]);
    };
  }
};

const { strings: strings$6 } = MDCSelectIconFoundation;
var SelectIcon = {
  name: "select-icon",
  props: {
    icon: String
  },
  setup(props, { emit, expose }) {
    const uiState = reactive({
      classes: {
        "material-icons": true,
        "mdc-select__icon": true
      },
      styles: {},
      rootAttrs: {},
      rootListeners: {}
    });
    const root = ref();
    const foundation = ref();
    const adapter = {
      getAttr: (attribute) => uiState.rootAttrs[attribute],
      setAttr: (attribute, value) => uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value },
      removeAttr: (attribute) => {
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: (content) => {
        uiState.root.textContent = content;
      },
      registerInteractionHandler: (eventType, handler) => {
        const lower = eventType.toLowerCase();
        uiState.rootListeners = {
          ...uiState.rootListeners,
          [`on${lower[0].toUpperCase()}${lower.slice(1)}`]: handler
        };
      },
      deregisterInteractionHandler: (eventType) => {
        const lower = eventType.toLowerCase();
        const {
          [`on${lower[0].toUpperCase()}${lower.slice(1)}`]: removed,
          ...rest
        } = uiState.rootListeners;
        uiState.rootListeners = rest;
      },
      notifyIconAction: () => {
        emit("click");
        emitCustomEvent(uiState.root, strings$6.ICON_EVENT, {}, true);
      }
    };
    onMounted(() => {
      foundation.value = new MDCSelectIconFoundation(adapter);
      foundation.value.init();
    });
    onBeforeUnmount(() => {
      foundation.value.destroy();
    });
    expose({ foundation });
    return () => {
      return h("i", {
        ref: root,
        class: uiState.classes,
        style: uiState.styles,
        ...uiState.rootAttrs,
        ...uiState.rootListeners
      }, [props.icon]);
    };
  }
};

const { strings: strings$5 } = MDCSelectFoundation;
let uid_$1 = 0;
var script$9 = {
  name: "mcw-select",
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
    menuFullwidth: { type: Boolean, default: () => true }
  },
  setup(props, { emit }) {
    const uiState = reactive({
      styles: {},
      classes: {},
      selectedTextContent: "",
      selTextAttrs: {},
      selectAnchorAttrs: {},
      helpId: `help-mcw-select-${uid_$1++}`,
      menuClasses: { "mdc-menu-surface--fullwidth": props.menuFullwidth },
      root: void 0,
      helperTextEl: void 0,
      leadingIconEl: void 0,
      lineRippleEl: void 0,
      outlineEl: void 0,
      labelEl: void 0,
      menu: void 0,
      anchorEl: void 0
    });
    let rippleClasses;
    let rippleStyles;
    if (props.outlined) {
      const { classes, styles } = useRipplePlugin(toRef(uiState, "anchorEl"), {
        registerInteractionHandler: (eventType, handler) => {
          uiState.anchorEl.addEventListener(eventType, handler);
        },
        deregisterInteractionHandler: (eventType, handler) => {
          uiState.anchorEl.removeEventListener(eventType, handler);
        }
      });
      rippleClasses = classes;
      rippleStyles = styles;
    }
    const rootClasses = computed(() => {
      return {
        "mdc-select": 1,
        "mdc-select--required": props.required,
        "mdc-select--filled": !props.outlined,
        "mdc-select--outlined": props.outlined,
        "mdc-select--with-leading-icon": props.leadingIcon,
        "mdc-select--disabled": props.disabled,
        "mdc-select--no-label": !props.label,
        ...uiState.classes
      };
    });
    let foundation;
    let labelElement;
    const handleFocus = () => foundation.handleFocus();
    const handleBlur = () => foundation.handleBlur();
    const handleClick = (event_) => {
      uiState.anchorEl.focus();
      handleFocus();
      foundation.handleClick(getNormalizedXCoordinate(event_));
    };
    const handleKeydown = (event_) => foundation.handleKeydown(event_);
    const handleChange = (isOpen) => foundation[`handleMenu${isOpen ? "Opened" : "Closed"}`]();
    const layout = () => foundation.layout();
    const handleMenuOpened = () => foundation.handleMenuOpened();
    const handleMenuClosed = () => foundation.handleMenuClosed();
    const handleMenuItemAction = ({ index }) => foundation.handleMenuItemAction(index);
    const layoutOptions = () => {
      foundation.layoutOptions();
      uiState.menu.layout();
    };
    if (props.helptext) {
      uiState.selectAnchorAttrs["aria-controls"] = uiState.helpId;
      uiState.selectAnchorAttrs["aria-describedBy"] = uiState.helpId;
    }
    const adapter = {
      getMenuItemAttr: (menuItem, attribute) => menuItem.getAttribute(attribute),
      setSelectedText: (text) => uiState.selectedTextContent = text,
      isSelectAnchorFocused: () => document.activeElement === uiState.anchorEl,
      getSelectAnchorAttr: (attribute) => uiState.selectAnchorAttrs[attribute],
      setSelectAnchorAttr: (attribute, value) => uiState.selectAnchorAttrs = {
        ...uiState.selectAnchorAttrs,
        [attribute]: value
      },
      removeSelectAnchorAttr: (attribute) => {
        const { [attribute]: removed, ...rest } = uiState.selectAnchorAttrs;
        uiState.selectAnchorAttrs = rest;
      },
      addMenuClass: (className) => uiState.menuClasses = { ...uiState.menuClasses, [className]: true },
      removeMenuClass: (className) => {
        const { [className]: removed, ...rest } = uiState.menuClasses;
        uiState.menuClasses = rest;
      },
      openMenu: () => uiState.menu.surfaceOpen = true,
      closeMenu: () => uiState.menu.surfaceOpen = false,
      getAnchorElement: () => uiState.anchorEl,
      setMenuAnchorElement: (anchorElement) => uiState.menu.setAnchorElement(anchorElement),
      setMenuAnchorCorner: (anchorCorner) => uiState.menu.setAnchorCorner(anchorCorner),
      setMenuWrapFocus: (wrapFocus) => uiState.menu.wrapFocus = wrapFocus,
      getSelectedIndex: () => {
        var _a, _b;
        const index = (_b = (_a = uiState.menu) == null ? void 0 : _a.getSelectedIndex()) != null ? _b : -1;
        return Array.isArray(index) ? index[0] : index;
      },
      setSelectedIndex: (index) => uiState.menu.setSelectedIndex(index),
      focusMenuItemAtIndex: (index) => uiState.menu.focusItemAtIndex(index),
      getMenuItemCount: () => uiState.menu.getMenuItemCount(),
      getMenuItemValues: () => {
        var _a;
        return (_a = uiState.menu) == null ? void 0 : _a.getMenuItemValues(strings$5.VALUE_ATTR);
      },
      getMenuItemTextAtIndex: (index) => {
        var _a;
        return (_a = uiState.menu) == null ? void 0 : _a.getMenuItemTextAtIndex(index);
      },
      isTypeaheadInProgress: () => uiState.menu.typeaheadInProgress(),
      typeaheadMatchItem: (nextChar, startingIndex) => {
        var _a;
        return (_a = uiState.menu) == null ? void 0 : _a.typeaheadMatchItem(nextChar, startingIndex);
      },
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => Boolean(rootClasses.value[className]),
      setRippleCenter: (normalizedX) => {
        var _a;
        return (_a = uiState.lineRippleEl) == null ? void 0 : _a.setRippleCenter(normalizedX);
      },
      activateBottomLine: () => {
        var _a;
        return (_a = uiState.lineRippleEl) == null ? void 0 : _a.activate();
      },
      deactivateBottomLine: () => {
        var _a;
        return (_a = uiState.lineRippleEl) == null ? void 0 : _a.deactivate();
      },
      notifyChange: (value) => {
        const index = foundation.getSelectedIndex();
        emitCustomEvent(uiState.root, strings$5.CHANGE_EVENT, { value, index }, true);
        value != props.modelValue && emit("update:modelValue", value);
      },
      hasOutline: () => props.outlined,
      notchOutline: (labelWidth) => {
        var _a;
        return (_a = uiState.outlineEl) == null ? void 0 : _a.notch(labelWidth);
      },
      closeOutline: () => {
        var _a;
        return (_a = uiState.outlineEl) == null ? void 0 : _a.closeNotch();
      },
      hasLabel: () => !!props.label,
      floatLabel: (shouldFloat) => {
        var _a;
        return (_a = uiState.labelEl || uiState.outlineEl) == null ? void 0 : _a.float(shouldFloat);
      },
      getLabelWidth: () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = uiState.labelEl) == null ? void 0 : _a.getWidth()) != null ? _b : labelElement == null ? void 0 : labelElement.scrollWidth) != null ? _c : 0;
      },
      setLabelRequired: (isRequired) => {
        var _a;
        return (_a = uiState.labelEl) == null ? void 0 : _a.setRequired(isRequired);
      }
    };
    const setFixedPosition = (isFixed) => uiState.menu.setFixedPosition(isFixed);
    const refreshIndex = () => {
      var _a;
      const menuItemValues = (_a = uiState.menu) == null ? void 0 : _a.getMenuItemValues(strings$5.VALUE_ATTR);
      const index = menuItemValues.indexOf(props.modelValue);
      uiState.menu.setSelectedIndex(index);
      return index;
    };
    watch(() => props.disabled, (nv) => foundation == null ? void 0 : foundation.updateDisabledStyle(nv));
    watch(() => props.modelValue, () => {
      const index = refreshIndex();
      foundation.setSelectedIndex(index);
    });
    onMounted(() => {
      var _a, _b;
      uiState.menu.hasTypeahead = true;
      uiState.menu.setSingleSelection = true;
      foundation = new MDCSelectFoundation(adapter, {
        helperText: (_a = uiState.helperTextEl) == null ? void 0 : _a.foundation,
        leadingIcon: (_b = uiState.leadingIconEl) == null ? void 0 : _b.foundation
      });
      refreshIndex();
      foundation.init();
      labelElement = uiState.root.querySelector(".mdc-floating-label");
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
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
      handleMenuItemAction,
      refreshIndex,
      setFixedPosition,
      handleMenuOpened,
      handleMenuClosed
    };
  },
  components: { SelectHelperText, SelectIcon }
};
function getNormalizedXCoordinate(event_) {
  const targetClientRect = event_.target.getBoundingClientRect();
  const xCoordinate = event_.clientX;
  return xCoordinate - targetClientRect.left;
}

const _hoisted_1$6 = { class: "select-wrapper" };
const _hoisted_2$5 = ["aria-required"];
const _hoisted_3$5 = {
  key: 1,
  class: "mdc-select__ripple"
};
const _hoisted_4$4 = { class: "mdc-select__selected-text-container" };
const _hoisted_5$4 = { class: "mdc-select__selected-text" };
const _hoisted_6$4 = /* @__PURE__ */ createElementVNode("span", { class: "mdc-select__dropdown-icon" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    class: "mdc-select__dropdown-icon-graphic",
    viewBox: "7 10 10 5"
  }, [
    /* @__PURE__ */ createElementVNode("polygon", {
      class: "mdc-select__dropdown-icon-inactive",
      stroke: "none",
      "fill-rule": "evenodd",
      points: "7 10 12 15 17 10"
    }),
    /* @__PURE__ */ createElementVNode("polygon", {
      class: "mdc-select__dropdown-icon-active",
      stroke: "none",
      "fill-rule": "evenodd",
      points: "7 15 12 10 17 15"
    })
  ])
], -1);
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_select_icon = resolveComponent("select-icon");
  const _component_mcw_notched_outline = resolveComponent("mcw-notched-outline");
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");
  const _component_mcw_line_ripple = resolveComponent("mcw-line-ripple");
  const _component_mcw_menu = resolveComponent("mcw-menu");
  const _component_select_helper_text = resolveComponent("select-helper-text");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", mergeProps({ ref: "root" }, _ctx.$attrs, { class: _ctx.rootClasses }), [
      createElementVNode("div", mergeProps({
        ref: "anchorEl",
        class: ["mdc-select__anchor", _ctx.rippleClasses],
        style: _ctx.rippleStyles,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
        onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args))
      }, _ctx.selectAnchorAttrs, {
        role: "button",
        "aria-haspopup": "listbox",
        "aria-required": _ctx.required
      }), [
        _ctx.leadingIcon ? (openBlock(), createBlock(_component_select_icon, {
          key: 0,
          ref: "leadingIconEl",
          icon: _ctx.leadingIcon,
          tabindex: "0",
          role: "button"
        }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
        !_ctx.outlined ? (openBlock(), createElementBlock("span", _hoisted_3$5)) : createCommentVNode("v-if", true),
        createElementVNode("span", _hoisted_4$4, [
          createElementVNode("span", _hoisted_5$4, toDisplayString(_ctx.selectedTextContent), 1)
        ]),
        _hoisted_6$4,
        _ctx.outlined ? (openBlock(), createBlock(_component_mcw_notched_outline, {
          key: 2,
          ref: "outlineEl"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ]),
          _: 1
        }, 512)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(_component_mcw_floating_label, { ref: "labelEl" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ]),
            _: 1
          }, 512),
          createVNode(_component_mcw_line_ripple, { ref: "lineRippleEl" }, null, 512)
        ], 64))
      ], 16, _hoisted_2$5),
      createVNode(_component_mcw_menu, {
        ref: "menu",
        class: normalizeClass(["mdc-select__menu", _ctx.menuClasses]),
        "onUpdate:modelValue": _ctx.handleChange,
        onSelect: _ctx.handleMenuItemAction,
        "onMdcMenuSurface:opened": _ctx.handleMenuOpened,
        "onMdcMenuSurface:closed": _ctx.handleMenuClosed,
        role: "listbox",
        "type-ahead": ""
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "onUpdate:modelValue", "onSelect", "onMdcMenuSurface:opened", "onMdcMenuSurface:closed"])
    ], 16),
    _ctx.helptext ? (openBlock(), createBlock(_component_select_helper_text, {
      key: 0,
      ref: "helperTextEl",
      id: _ctx.helpId,
      helptextPersistent: _ctx.helptextPersistent,
      helptextValidation: _ctx.helptextValidation,
      helptext: _ctx.helptext
    }, null, 8, ["id", "helptextPersistent", "helptextValidation", "helptext"])) : createCommentVNode("v-if", true)
  ]);
}

script$9.render = render$9;
script$9.__file = "src/select/select.vue";

var select = BasePlugin({
  mcwSelect: script$9,
  mcwNotchedOutline,
  mcwLineRipple,
  mcwFloatingLabel
});

const getThumbName = (thumb, suffix) => {
  const thumbName = thumb == Thumb.END ? "endThumb" : "startThumb";
  return `${thumbName}${suffix}`;
};
let valueToAriaValueTextFunction = () => {
};
const setValueToAriaValueTextFunction = (mapFunction) => {
  valueToAriaValueTextFunction = mapFunction;
};
var script$8 = {
  name: "mcw-slider",
  props: {
    modelValue: [Number, String],
    start: [Number, String],
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String], default: 1 },
    discrete: Boolean,
    tickMarks: Boolean,
    disabled: Boolean,
    range: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const uiState = reactive({
      skipInitialUIUpdate: false,
      dir: void 0,
      marks: [],
      classes: {
        "mdc-slider": 1,
        "mdc-slider--discrete": props.discrete,
        "mdc-slider--tick-marks": props.discrete && props.tickMarks,
        "mdc-slider--range": props.range
      },
      startValueText: "",
      startThumbClasses: {},
      startThumbAttrs: {
        "aria-valuenow": "0"
      },
      test: 50,
      endValueText: "",
      endThumbClasses: {},
      endThumbAttrs: {
        "aria-valuenow": "0"
      },
      inputs: [],
      thumbs: [],
      root: void 0,
      startThumb: void 0,
      endThumb: void 0,
      trackActive: void 0
    });
    let foundation;
    const getThumbElement = (thumb) => {
      return thumb === Thumb.END ? uiState.thumbs[uiState.thumbs.length - 1] : uiState.thumbs[0];
    };
    const setInputReference = (element) => uiState.inputs.push(element);
    const setThumbReference = (element) => uiState.thumbs.push(element);
    const getInput = (thumb) => {
      return thumb === Thumb.END ? uiState.inputs[uiState.inputs.length - 1] : uiState.inputs[0];
    };
    const adapter = {
      hasClass: (className) => uiState.root.classList.contains(className),
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      addThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, "Classes");
        uiState[thumbName] = { ...uiState[thumbName], [className]: true };
      },
      removeThumbClass: (className, thumb) => {
        const thumbName = getThumbName(thumb, "Classes");
        const { [className]: removed, ...rest } = uiState[thumbName];
        uiState[thumbName] = rest;
      },
      getAttribute: (name) => uiState.root.getAttribute(name),
      getInputValue: (thumb) => getInput(thumb).value,
      setInputValue: (value, thumb) => {
        getInput(thumb).value = value;
      },
      getInputAttribute: (attribute, thumb) => {
        if (attribute == "value") {
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
      focusInput: (thumb) => {
        getInput(thumb).focus();
      },
      isInputFocused: (thumb) => getInput(thumb) === document.activeElement,
      shouldHideFocusStylesForPointerEvents: () => false,
      getThumbKnobWidth: (thumb) => {
        var _a;
        return (_a = getThumbElement(thumb).querySelector(`.${cssClasses$9.THUMB_KNOB}`)) == null ? void 0 : _a.getBoundingClientRect().width;
      },
      getThumbBoundingClientRect: (thumb) => getThumbElement(thumb).getBoundingClientRect(),
      getBoundingClientRect: () => uiState.root.getBoundingClientRect(),
      getValueIndicatorContainerWidth: (thumb) => {
        var _a;
        return (_a = getThumbElement(thumb).querySelector(`.${cssClasses$9.VALUE_INDICATOR_CONTAINER}`)) == null ? void 0 : _a.getBoundingClientRect().width;
      },
      isRTL: () => getComputedStyle(uiState.root).direction === "rtl",
      setThumbStyleProperty: (propertyName, value, thumb) => {
        getThumbElement(thumb).style.setProperty(propertyName, value);
      },
      removeThumbStyleProperty: (propertyName, thumb) => getThumbElement(thumb).style.removeProperty(propertyName),
      setTrackActiveStyleProperty: (propertyName, value) => uiState.trackActive.style.setProperty(propertyName, value),
      removeTrackActiveStyleProperty: (propertyName) => {
        uiState.trackActive.style.removeProperty(propertyName);
      },
      setValueIndicatorText: (value, thumb) => {
        const thumbName = thumb == Thumb.END ? "endValueText" : "startValueText";
        uiState[thumbName] = String(value);
      },
      getValueToAriaValueTextFn: () => valueToAriaValueTextFunction,
      updateTickMarks: (tickMarks) => {
        uiState.marks = tickMarks.map((mark) => mark == 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
      },
      setPointerCapture: (pointerId) => uiState.root.setPointerCapture(pointerId),
      emitChangeEvent: (value, thumb) => {
        emitCustomEvent(uiState.root, events.CHANGE, { value, thumb });
        const eventName = thumb == Thumb.END ? "update:modelValue" : "update:start";
        emit(eventName, value);
      },
      emitInputEvent: (value, thumb) => {
        emitCustomEvent(uiState.root, events.INPUT, { value, thumb });
      },
      emitDragStartEvent: () => {
      },
      emitDragEndEvent: () => {
      },
      registerEventHandler: (eventType, handler) => uiState.root.addEventListener(eventType, handler),
      deregisterEventHandler: (eventType, handler) => uiState.root.removeEventListener(eventType, handler),
      registerThumbEventHandler: (thumb, eventType, handler) => getThumbElement(thumb).addEventListener(eventType, handler),
      deregisterThumbEventHandler: (thumb, eventType, handler) => getThumbElement(thumb).removeEventListener(eventType, handler),
      registerInputEventHandler: (thumb, eventType, handler) => {
        getInput(thumb).addEventListener(eventType, handler);
      },
      deregisterInputEventHandler: (thumb, eventType, handler) => {
        getInput(thumb).removeEventListener(eventType, handler);
      },
      registerBodyEventHandler: (eventType, handler) => document.body.addEventListener(eventType, handler),
      deregisterBodyEventHandler: (eventType, handler) => document.body.removeEventListener(eventType, handler),
      registerWindowEventHandler: (eventType, handler) => window.addEventListener(eventType, handler),
      deregisterWindowEventHandler: (eventType, handler) => window.removeEventListener(eventType, handler)
    };
    watch(() => props.modelValue, (nv) => {
      if (foundation.getValue() !== Number(nv)) {
        foundation.setValue(nv);
      }
    });
    watch(() => props.start, (nv) => {
      if (foundation.getValueStart() !== Number(nv)) {
        foundation.setValueStart(nv);
      }
    });
    watch(() => props.disabled, (nv) => {
      foundation.setDisabled(nv);
    });
    onMounted(() => {
      uiState.dir = getComputedStyle(uiState.root).direction;
      if (props.range) {
        uiState.startThumbAttrs["aria-valuemin"] = props.min;
        uiState.startThumbAttrs["aria-valuemax"] = props.max;
        uiState.startThumbAttrs["aria-valuenow"] = props.start;
        uiState.startValueText = String(props.start);
      }
      uiState.endThumbAttrs["aria-valuemin"] = props.min;
      uiState.endThumbAttrs["aria-valuemax"] = props.max;
      uiState.endThumbAttrs["aria-valuenow"] = props.modelValue;
      uiState.endValueText = String(props.modelValue);
      foundation = new MDCSliderFoundation(adapter);
      foundation.init();
      foundation.layout({ skipUpdateUI: uiState.skipInitialUIUpdate });
      foundation.setDisabled(props.disabled);
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      setValueToAriaValueTextFn: setValueToAriaValueTextFunction,
      setInputRef: setInputReference,
      setThumbRef: setThumbReference
    };
  }
};

const _hoisted_1$5 = ["min", "max", "step", "value"];
const _hoisted_2$4 = ["min", "max", "step", "value"];
const _hoisted_3$4 = { class: "mdc-slider__track" };
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-slider__track--inactive" }, null, -1);
const _hoisted_5$3 = { class: "mdc-slider__track--active" };
const _hoisted_6$3 = ["dir"];
const _hoisted_7$3 = {
  key: 0,
  class: "mdc-slider__tick-marks"
};
const _hoisted_8$1 = {
  key: 0,
  class: "mdc-slider__value-indicator-container",
  "aria-hidden": "true"
};
const _hoisted_9 = { class: "mdc-slider__value-indicator" };
const _hoisted_10 = { class: "mdc-slider__value-indicator-text" };
const _hoisted_11 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-slider__thumb-knob" }, null, -1);
const _hoisted_12 = {
  key: 0,
  class: "mdc-slider__value-indicator-container",
  "aria-hidden": "true"
};
const _hoisted_13 = { class: "mdc-slider__value-indicator" };
const _hoisted_14 = { class: "mdc-slider__value-indicator-text" };
const _hoisted_15 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-slider__thumb-knob" }, null, -1);
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: normalizeClass(_ctx.classes)
  }, [
    _ctx.range ? (openBlock(), createElementBlock("input", {
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
    }, null, 8, _hoisted_1$5)) : createCommentVNode("v-if", true),
    createElementVNode("input", {
      ref: _ctx.setInputRef,
      class: "mdc-slider__input",
      type: "range",
      min: _ctx.min,
      max: _ctx.max,
      step: _ctx.step,
      value: _ctx.modelValue,
      name: "volume",
      "aria-label": "slider"
    }, null, 8, _hoisted_2$4),
    createElementVNode("div", _hoisted_3$4, [
      _hoisted_4$3,
      createElementVNode("div", _hoisted_5$3, [
        createElementVNode("div", {
          ref: "trackActive",
          dir: _ctx.dir,
          class: "mdc-slider__track--active_fill"
        }, null, 8, _hoisted_6$3)
      ]),
      _ctx.tickMarks ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.marks, (mark, index) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(mark),
            key: mark + index
          }, null, 2);
        }), 128))
      ])) : createCommentVNode("v-if", true)
    ]),
    _ctx.range ? (openBlock(), createElementBlock("div", mergeProps({
      key: 1,
      ref: _ctx.setThumbRef,
      class: [_ctx.startThumbClasses, "mdc-slider__thumb"],
      tabindex: "0",
      role: "slider",
      "aria-label": "slider"
    }, _ctx.startThumbAttrs), [
      _ctx.discrete ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
        createElementVNode("div", _hoisted_9, [
          createElementVNode("span", _hoisted_10, toDisplayString(_ctx.startValueText), 1)
        ])
      ])) : createCommentVNode("v-if", true),
      _hoisted_11
    ], 16)) : createCommentVNode("v-if", true),
    createElementVNode("div", mergeProps({
      ref: _ctx.setThumbRef,
      class: [_ctx.endThumbClasses, "mdc-slider__thumb"],
      tabindex: "0",
      role: "slider",
      "aria-label": "slider"
    }, _ctx.endThumbAttrs), [
      _ctx.discrete ? (openBlock(), createElementBlock("div", _hoisted_12, [
        createElementVNode("div", _hoisted_13, [
          createElementVNode("span", _hoisted_14, toDisplayString(_ctx.endValueText), 1)
        ])
      ])) : createCommentVNode("v-if", true),
      _hoisted_15
    ], 16)
  ], 2);
}

script$8.render = render$8;
script$8.__file = "src/slider/slider.vue";

var slider = BasePlugin({
  mcwSlider: script$8
});

const noop = () => {
};
var mcwSnackbarQueue = {
  name: "mcw-snackbar-queue",
  props: { snack: Object },
  setup(props, { emit, attrs, expose }) {
    const uiState = reactive({
      open: false
    });
    let actionHandler_;
    const queue = [];
    let snack;
    const handleSnack = ({
      timeoutMs = 5e3,
      closeOnEscape,
      message = "",
      actionText = "",
      dismissAction = true,
      stacked,
      leading,
      actionHandler = noop
    }) => {
      queue.push(() => {
        snack = {
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
      if (queue.length === 1) {
        queue[0]();
      }
    };
    const handleClosed = () => {
      uiState.open = false;
      queue.shift();
      if (queue.length > 0) {
        nextTick(() => queue[0]());
      }
    };
    watch(() => props.snack, (nv) => {
      if (nv) {
        handleSnack(nv);
        emit("update:snack");
      }
    });
    expose({ handleSnack });
    return () => {
      return h(script$7, {
        modelValue: uiState.open,
        ...snack,
        "onUpdate:reason": (event) => {
          var _a;
          (_a = attrs["update:reason"]) == null ? void 0 : _a.call(attrs, event);
        },
        "onMdcsnackbar:closed": ({ reason }) => {
          if (actionHandler_ && reason === "action") {
            actionHandler_({ reason });
          }
          handleClosed();
          emit("closed", { reason });
        }
      });
    };
  }
};

const { strings: strings$4, numbers } = MDCSnackbarFoundation;
var script$7 = {
  name: "mcw-snackbar",
  props: {
    modelValue: Boolean,
    stacked: Boolean,
    leading: Boolean,
    message: String,
    actionText: String,
    timeoutMs: [String, Number],
    closeOnEscape: { type: Boolean, default: true },
    dismissAction: { type: [String, Boolean], default: true },
    reason: String
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {},
      hidden: false,
      actionHidden: false,
      showMessage: true,
      labelEl: void 0
    });
    let foundation;
    const rootClasses = computed(() => {
      return {
        "mdc-snackbar--leading": props.leading,
        "mdc-snackbar--stacked": props.stacked,
        ...uiState.classes
      };
    });
    const showDismissAction = computed(() => {
      return typeof props.dismissAction === "string" ? props.dismissAction != "false" : props.dismissAction;
    });
    const handleKeydownEvent = (event_) => foundation.handleKeyDown(event_);
    const announce = (ariaElement, labelElement = ariaElement) => {
      const priority = ariaElement.getAttribute("aria-live");
      const text = props.message;
      if (!text) {
        return;
      }
      ariaElement.setAttribute("aria-live", "off");
      uiState.showMessage = false;
      labelElement.setAttribute(strings$4.ARIA_LIVE_LABEL_TEXT_ATTR, props.message);
      setTimeout(() => {
        ariaElement.setAttribute("aria-live", priority);
        labelElement.removeAttribute(strings$4.ARIA_LIVE_LABEL_TEXT_ATTR);
        uiState.showMessage = true;
      }, numbers.ARIA_LIVE_DELAY_MS);
    };
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      announce: () => announce(uiState.labelEl),
      notifyClosed: (reason) => {
        emit(strings$4.CLOSED_EVENT.toLowerCase(), reason ? { reason } : {});
        emit("update:modelValue", false);
        emit("hide");
      },
      notifyClosing: (reason) => {
        emit(strings$4.CLOSING_EVENT, reason ? { reason } : {});
        emit("update:reason", reason);
      },
      notifyOpened: () => {
        emit(strings$4.OPENED_EVENT.toLowerCase(), {});
        emit("update:modelValue", true);
        emit("show", {});
      },
      notifyOpening: () => emit(strings$4.OPENING_EVENT, {}),
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      }
    };
    const surfaceClickHandler = (event_) => {
      if (isActionButton_(event_.target)) {
        foundation.handleActionButtonClick(event_);
      } else if (isActionIcon_(event_.target)) {
        foundation.handleActionIconClick(event_);
      }
    };
    watch(() => props.modelValue, (nv) => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close(props.reason ? props.reason : "");
      }
    });
    watch(() => props.timeoutMs, (nv) => {
      if (nv !== void 0) {
        foundation.setTimeoutMs(nv);
      }
    });
    watch(() => props.closeOnEscape, (nv) => foundation.setCloseOnEscape(nv));
    onMounted(() => {
      window.addEventListener("keydown", handleKeydownEvent);
      foundation = new MDCSnackbarFoundation(adapter);
      foundation.init();
      if (props.timeoutMs !== void 0) {
        foundation.setTimeoutMs(props.timeoutMs);
      }
      foundation.setCloseOnEscape(props.closeOnEscape);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleKeydownEvent);
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      rootClasses,
      showDismissAction,
      surfaceClickHandler
    };
  }
};
function isActionButton_(target) {
  return Boolean(closest(target, strings$4.ACTION_SELECTOR));
}
function isActionIcon_(target) {
  return Boolean(closest(target, strings$4.DISMISS_SELECTOR));
}

const _hoisted_1$4 = {
  ref: "labelEl",
  class: "mdc-snackbar__label",
  "aria-atomic": "false"
};
const _hoisted_2$3 = {
  key: 1,
  style: { "display": "inline-block", "width": "0", "height": "'1px'" }
};
const _hoisted_3$3 = {
  class: "mdc-snackbar__actions",
  "aria-atomic": "true"
};
const _hoisted_4$2 = {
  key: 0,
  type: "button",
  class: "mdc-button mdc-snackbar__action"
};
const _hoisted_5$2 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-button__ripple" }, null, -1);
const _hoisted_6$2 = { class: "mdc-button__label" };
const _hoisted_7$2 = {
  key: 1,
  type: "button",
  class: "mdc-icon-button mdc-snackbar__dismiss material-icons",
  title: "Dismiss"
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(["mdc-snackbar", _ctx.rootClasses])
  }, [
    createElementVNode("div", {
      class: "mdc-snackbar__surface",
      role: "status",
      "aria-relevant": "additions",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.surfaceClickHandler && _ctx.surfaceClickHandler(...args))
    }, [
      createElementVNode("div", _hoisted_1$4, [
        _ctx.showMessage ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.message), 1)
        ], 64)) : (openBlock(), createElementBlock("span", _hoisted_2$3, "\xA0"))
      ], 512),
      createElementVNode("div", _hoisted_3$3, [
        _ctx.actionText ? (openBlock(), createElementBlock("button", _hoisted_4$2, [
          _hoisted_5$2,
          createElementVNode("span", _hoisted_6$2, toDisplayString(_ctx.actionText), 1)
        ])) : createCommentVNode("v-if", true),
        _ctx.showDismissAction ? (openBlock(), createElementBlock("button", _hoisted_7$2, " close ")) : createCommentVNode("v-if", true)
      ])
    ])
  ], 2);
}

script$7.render = render$7;
script$7.__file = "src/snackbar/snackbar.vue";

var snackbar = BasePlugin({
  mcwSnackbar: script$7,
  mcwSnackbarQueue
});

let switchId_ = 0;
var script$6 = {
  name: "mcw-switch",
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String,
    id: String
  },
  setup(props, { slots, emit }) {
    var _a;
    const uiState = reactive({
      classes: { [CssClasses.SELECTED]: props.modelValue },
      attrs: {},
      root: void 0,
      rippleEl: void 0
    });
    const state = {
      disabled: props.disabled,
      processing: false,
      selected: props.modelValue
    };
    const { classes: rippleClasses, styles } = useRipplePlugin(toRef(uiState, "root"), {
      unbounded: true,
      computeBoundingRect: () => uiState.rippleEl.getBoundingClientRect()
    });
    let foundation;
    const switchId = (_a = props.id) != null ? _a : `__mcw-switch-${switchId_++}`;
    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });
    const hasLabel = computed(() => {
      return !!props.label || slots.default;
    });
    const adapter = {
      addClass: (className) => {
        uiState.classes = { ...uiState.classes, [className]: true };
        if (className.endsWith("unselected")) {
          props.modelValue && emit("update:modelValue", false);
        } else if (className.endsWith("selected")) {
          !props.modelValue && emit("update:modelValue", true);
        }
      },
      hasClass: (className) => uiState.root.classList.contains(className),
      isDisabled: () => uiState.root.disabled,
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setAriaChecked: (ariaChecked) => uiState.attrs["aria-checked"] = ariaChecked,
      setDisabled: (disabled) => {
        uiState.root.disabled = disabled;
      },
      state
    };
    watch(() => props.modelValue, (nv) => {
      state.selected = nv;
    });
    watch(() => props.disabled, (nv) => {
      state.disabled = nv;
    });
    const handleClick = (event) => {
      foundation.handleClick(event);
    };
    onMounted(() => {
      if (props.disabled) {
        uiState.root.disabled = true;
      }
      foundation = new MDCSwitchRenderFoundation(adapter);
      foundation.init();
      foundation.initFromDOM();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      classes,
      hasLabel,
      styles,
      switchId,
      handleClick
    };
  },
  components: { formFieldWrapper }
};

const _hoisted_1$3 = ["id"];
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-switch__track" }, null, -1);
const _hoisted_3$2 = { class: "mdc-switch__handle-track" };
const _hoisted_4$1 = { class: "mdc-switch__handle" };
const _hoisted_5$1 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-switch__shadow" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "mdc-elevation-overlay" })
], -1);
const _hoisted_6$1 = {
  ref: "rippleEl",
  class: "mdc-switch__ripple"
};
const _hoisted_7$1 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-switch__icons" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    class: "mdc-switch__icon mdc-switch__icon--on",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" })
  ]),
  /* @__PURE__ */ createElementVNode("svg", {
    class: "mdc-switch__icon mdc-switch__icon--off",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M20 13H4v-2h16v2z" })
  ])
], -1);
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_form_field_wrapper = resolveComponent("form-field-wrapper");
  return openBlock(), createBlock(_component_form_field_wrapper, {
    class: "mdc-switch-wrapper",
    alignEnd: _ctx.alignEnd,
    forId: _ctx.switchId
  }, createSlots({
    default: withCtx(() => [
      createElementVNode("button", mergeProps({
        ref: "root",
        id: _ctx.switchId,
        class: ["mdc-switch", _ctx.classes],
        style: _ctx.styles
      }, _ctx.attrs, {
        type: "button",
        role: "switch",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }), [
        _hoisted_2$2,
        createElementVNode("div", _hoisted_3$2, [
          createElementVNode("div", _hoisted_4$1, [
            _hoisted_5$1,
            createElementVNode("div", _hoisted_6$1, null, 512),
            _hoisted_7$1
          ])
        ])
      ], 16, _hoisted_1$3)
    ]),
    _: 2
  }, [
    _ctx.label ? {
      name: "label",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ])
    } : void 0
  ]), 1032, ["alignEnd", "forId"]);
}

script$6.render = render$6;
script$6.__file = "src/switch/switch.vue";

var switchControl = BasePlugin({
  mcwSwitch: script$6
});

const { strings: strings$3 } = MDCTabBarFoundation;
var mcwTabBar = {
  name: "mcw-tab-bar",
  props: {
    fade: Boolean,
    stacked: Boolean,
    spanContent: Boolean,
    modelValue: Number,
    focusOnActivate: { type: Boolean, default: () => true },
    useAutomaticActivation: { type: Boolean, default: () => true }
  },
  setup(props, { emit, attrs, slots, expose }) {
    const scroller = ref();
    const root = ref();
    const tabList = [];
    provide("mcwTabList", {
      fade: props.fade,
      stacked: props.stacked,
      spanContent: props.spanContent,
      tabList
    });
    let foundation;
    const getTabElements_ = () => {
      return Array.prototype.slice.call(root.value.querySelectorAll(strings$3.TAB_SELECTOR));
    };
    const activateTab = (index) => foundation.activateTab(index);
    const adapter = {
      scrollTo: (scrollX) => scroller.value.scrollTo(scrollX),
      incrementScroll: (scrollXIncrement) => scroller.value.incrementScroll(scrollXIncrement),
      getScrollPosition: () => scroller.value.getScrollPosition(),
      getScrollContentWidth: () => scroller.value.getScrollContentWidth(),
      getOffsetWidth: () => root.value.offsetWidth,
      isRTL: () => window.getComputedStyle(root.value).getPropertyValue("direction") === "rtl",
      setActiveTab: (index) => {
        foundation.activateTab(index);
      },
      activateTabAtIndex: (index, clientRect) => {
        tabList[index].activate(clientRect);
      },
      deactivateTabAtIndex: (index) => {
        var _a;
        return (_a = tabList[index]) == null ? void 0 : _a.deactivate();
      },
      focusTabAtIndex: (index) => tabList[index].focus(),
      getTabIndicatorClientRectAtIndex: (index) => {
        var _a;
        return (_a = tabList[index]) == null ? void 0 : _a.computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: (index) => tabList[index].computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (const [index, element] of tabList.entries()) {
          if (element.isActive()) {
            return index;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = getTabElements_();
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: (id) => {
        for (const [index, element] of tabList.entries()) {
          if (element.id === id) {
            return index;
          }
        }
        return -1;
      },
      getTabListLength: () => tabList.length,
      notifyTabActivated: (index) => {
        emitCustomEvent(root.value, strings$3.TAB_ACTIVATED_EVENT, { index }, true);
        emit("update:modelValue", Number(index));
      }
    };
    onMounted(() => {
      foundation = foundation = new MDCTabBarFoundation(adapter);
      foundation.init();
      props.modelValue !== void 0;
      foundation.activateTab(Number(props.modelValue) || 0);
      for (const [index, element] of tabList.entries()) {
        if (element.active) {
          foundation.scrollIntoView(index);
          break;
        }
      }
      foundation.setUseAutomaticActivation(props.useAutomaticActivation);
      for (const tab of tabList) {
        tab.focusOnActivate(props.focusOnActivate);
      }
      watch(() => props.modelValue, (nv) => {
        foundation.activateTab(Number(nv));
      });
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    expose({ activateTab });
    return () => {
      return h("div", {
        ref: root,
        role: "tablist",
        class: "mdc-tab-bar",
        onChange: attrs.onChange,
        "onMdctab:interacted": (event_) => {
          foundation.handleTabInteraction(event_);
        },
        "onMdc-tab:interacted": (event_) => {
          foundation.handleTabInteraction(event_);
        },
        keydown: (event_) => foundation.handleKeyDown(event_)
      }, [h(mcwTabScroller, { ref: scroller }, () => [slots.default()])]);
    };
  }
};

const { cssClasses: cssClasses$1 } = MDCTabIndicatorFoundation;
var mcwTabIndicator = {
  name: "mcw-tab-indicator",
  props: { fade: { type: Boolean }, icon: { type: String } },
  setup(props, { expose }) {
    const uiState = reactive({
      classes: { "mdc-tab-indicator--fade": props.fade },
      styles: {}
    });
    let foundation;
    const contentElement = ref();
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      computeContentClientRect: () => contentElement.value.getBoundingClientRect(),
      setContentStyleProperty: (property, value) => uiState.styles = { ...uiState.styles, [property]: value }
    };
    const deactivate = () => foundation.deactivate();
    const computeContentClientRect = () => foundation.computeContentClientRect();
    const activate = (previousIndicatorClientRect) => {
      if (props.fade) {
        foundation.activate(previousIndicatorClientRect);
        return;
      }
      if (!previousIndicatorClientRect) {
        adapter.addClass(cssClasses$1.ACTIVE);
        return;
      }
      const currentClientRect = computeContentClientRect();
      const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      requestAnimationFrame(() => {
        adapter.addClass(cssClasses$1.NO_TRANSITION);
        adapter.setContentStyleProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
        requestAnimationFrame(() => {
          adapter.removeClass(cssClasses$1.NO_TRANSITION);
          adapter.addClass(cssClasses$1.ACTIVE);
          adapter.setContentStyleProperty("transform", "");
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
    expose({ activate, deactivate, computeContentClientRect });
    return () => {
      return h("span", { class: { "mdc-tab-indicator": true, ...uiState.classes } }, [
        h("span", {
          ref: contentElement,
          class: {
            "mdc-tab-indicator__content": true,
            "mdc-tab-indicator__content--underline": !props.icon,
            "mdc-tab-indicator__content--icon": !!props.icon,
            "material-icons": !!props.icon
          },
          style: uiState.styles,
          "aria-hidden": !!props.icon
        }, [props.icon])
      ]);
    };
  }
};

var mcwTabScroller = {
  name: "mcw-tab-scroller",
  setup(props, { slots, expose }) {
    const uiState = reactive({
      classes: { "mdc-tab-scroller": 1 },
      areaClasses: { "mdc-tab-scroller__scroll-area": 1 },
      areaStyles: {},
      contentStyles: {}
    });
    let foundation;
    const content = ref();
    const area = ref();
    const getScrollPosition = () => foundation.getScrollPosition();
    const getScrollContentWidth = () => content.value.offsetWidth;
    const incrementScroll = (scrollXIncrement) => foundation.incrementScroll(scrollXIncrement);
    const scrollTo = (scrollX) => foundation.scrollTo(scrollX);
    const adapter = {
      eventTargetMatchesSelector: (eventTarget, selector) => {
        return matches(eventTarget, selector);
      },
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      addScrollAreaClass: (className) => uiState.areaClasses = { ...uiState.areaClasses, [className]: true },
      setScrollAreaStyleProperty: (property, value) => uiState.areaStyles = { ...uiState.areaStyles, [property]: value },
      setScrollContentStyleProperty: (property, value) => uiState.contentStyles = {
        ...uiState.contentStyles,
        [property]: value
      },
      getScrollContentStyleValue: (propertyName) => window.getComputedStyle(content.value).getPropertyValue(propertyName),
      setScrollAreaScrollLeft: (scrollX) => area.value.scrollLeft = scrollX,
      getScrollAreaScrollLeft: () => area.value.scrollLeft,
      getScrollContentOffsetWidth: () => content.value.offsetWidth,
      getScrollAreaOffsetWidth: () => area.value.offsetWidth,
      computeScrollAreaClientRect: () => area.value.getBoundingClientRect(),
      computeScrollContentClientRect: () => content.value.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => util$2.computeHorizontalScrollbarHeight(document)
    };
    onMounted(() => {
      foundation = new MDCTabScrollerFoundation(adapter);
      foundation.init();
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    expose({
      scrollTo,
      incrementScroll,
      getScrollContentWidth,
      getScrollPosition
    });
    return () => {
      return h("div", { class: uiState.classes }, [
        h("div", {
          ref: area,
          class: uiState.areaClasses,
          onMousedown: (event_) => foundation.handleInteraction(event_),
          onWheel: (event_) => foundation.handleInteraction(event_),
          onPointerdown: (event_) => foundation.handleInteraction(event_),
          onTouchstart: (event_) => foundation.handleInteraction(event_),
          onKeydown: (event_) => foundation.handleInteraction(event_),
          style: uiState.areaStyles
        }, [
          h("div", {
            ref: content,
            class: "mdc-tab-scroller__scroll-content",
            style: content.valueStyles,
            onTransitionend: (event_) => {
              foundation.handleTransitionEnd(event_);
            }
          }, slots.default())
        ])
      ]);
    };
  }
};

const { strings: strings$2 } = MDCTabFoundation;
let tabId_ = 0;
var script$5 = {
  name: "mcw-tab",
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    minWidth: Boolean
  },
  components: { CustomLink },
  setup(props, { slots }) {
    const uiState = reactive({
      classes: {
        "mdc-tab": 1,
        "mdc-tab--min-width": props.minWidth
      },
      rootAttrs: {
        role: "tab",
        "aria-selected": "false",
        tabindex: "-1",
        tag: "button"
      },
      styles: {},
      content: void 0,
      iconEl: void 0,
      tabIndicator: void 0,
      root: void 0,
      rippleSurface: void 0
    });
    const { classes: rippleClasses, styles: rippleStyles } = useRipplePlugin(toRef(uiState, "root"));
    const { fade, stacked, spanContent, tabList } = inject("mcwTabList");
    uiState.classes["mdc-tab--stacked"] = stacked;
    const hasIcon = computed(() => {
      if (props.icon || slots.icon) {
        return props.icon ? extractIconProperty(props.icon) : {};
      }
      return false;
    });
    const hasText = computed(() => {
      return !!slots.default;
    });
    let foundation;
    const tabId = `__mcw-tab-${tabId_++}`;
    let rootElement;
    const activate = (computeIndicatorClientRect2) => foundation.activate(computeIndicatorClientRect2);
    const deactivate = () => foundation.deactivate();
    const isActive = () => foundation.isActive();
    const computeIndicatorClientRect = () => uiState.tabIndicator.computeContentClientRect();
    const computeDimensions = () => foundation.computeDimensions();
    const focus = () => rootElement.focus();
    const onClick = (event_) => {
      foundation.handleClick(event_);
    };
    const adapter = {
      setAttr: (attribute, value) => uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value },
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => !!uiState.classes[className],
      activateIndicator: (previousIndicatorClientRect) => uiState.tabIndicator.activate(previousIndicatorClientRect),
      deactivateIndicator: () => uiState.tabIndicator.deactivate(),
      notifyInteracted: () => {
        emitCustomEvent(rootElement, strings$2.INTERACTED_EVENT, { tabId }, true);
      },
      getOffsetLeft: () => rootElement.offsetLeft,
      getOffsetWidth: () => rootElement.offsetWidth,
      getContentOffsetLeft: () => uiState.content.offsetLeft,
      getContentOffsetWidth: () => uiState.content.offsetWidth,
      focus: () => rootElement.focus()
    };
    const focusOnActivate = (focusOnActivate2) => {
      foundation.setFocusOnActivate(focusOnActivate2);
    };
    onMounted(() => {
      rootElement = uiState.root.$el.nodeType === 3 ? uiState.root.$el.nextSibling : uiState.root.$el;
      foundation = new MDCTabFoundation(adapter);
      foundation.init();
      tabList.push({
        id: tabId,
        activate,
        deactivate,
        focus,
        computeIndicatorClientRect,
        computeDimensions,
        isActive,
        focusOnActivate
      });
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      hasIcon,
      hasText,
      onClick,
      tabId,
      fade,
      spanContent,
      rippleClasses,
      rippleStyles
    };
  }
};
function extractIconProperty(iconProperty) {
  if (typeof iconProperty === "string") {
    return {
      classes: { "material-icons": true },
      content: iconProperty
    };
  } else if (Array.isArray(iconProperty)) {
    return {
      classes: Object.fromEntries(iconProperty.map((value) => [value, true]))
    };
  } else if (typeof iconProperty === "object") {
    return {
      classes: Object.fromEntries(iconProperty.className.split(" ").map((value) => [value, true])),
      content: iconProperty.textContent
    };
  }
}

const _hoisted_1$2 = {
  ref: "content",
  class: "mdc-tab__content"
};
const _hoisted_2$1 = {
  key: 1,
  class: "mdc-tab__text-label"
};
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("div", { class: "mdc-tab__focus-ring" }, null, -1);
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_tab_indicator = resolveComponent("mcw-tab-indicator");
  const _component_custom_link = resolveComponent("custom-link");
  return openBlock(), createBlock(_component_custom_link, mergeProps({
    id: _ctx.tabId,
    ref: "root"
  }, _ctx.rootAttrs, {
    class: _ctx.classes,
    style: _ctx.styles,
    onClick: _ctx.onClick
  }), {
    default: withCtx(() => [
      createElementVNode("span", _hoisted_1$2, [
        _ctx.hasIcon ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
          createElementVNode("i", {
            ref: "iconEl",
            class: normalizeClass(["mdc-tab__icon", _ctx.hasIcon.classes]),
            tabindex: "0",
            "aria-hidden": "true"
          }, toDisplayString(_ctx.hasIcon.content), 3)
        ]) : createCommentVNode("v-if", true),
        _ctx.hasText ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("v-if", true),
        _ctx.spanContent ? (openBlock(), createBlock(_component_mcw_tab_indicator, {
          key: 2,
          ref: "tabIndicator",
          fade: _ctx.fade
        }, null, 8, ["fade"])) : createCommentVNode("v-if", true)
      ], 512),
      !_ctx.spanContent ? (openBlock(), createBlock(_component_mcw_tab_indicator, {
        key: 0,
        ref: "tabIndicator",
        fade: _ctx.fade
      }, null, 8, ["fade"])) : createCommentVNode("v-if", true),
      createElementVNode("span", {
        ref: "rippleSurface",
        class: normalizeClass(["mdc-tab__ripple", _ctx.rippleClasses]),
        style: normalizeStyle(_ctx.styles)
      }, null, 6),
      _hoisted_3$1
    ]),
    _: 3
  }, 16, ["id", "class", "style", "onClick"]);
}

script$5.render = render$5;
script$5.__file = "src/tabs/tab.vue";

var tabs = BasePlugin({
  mcwTab: script$5,
  mcwTabBar,
  mcwTabScroller,
  mcwTabIndicator
});

var script$4 = {
  name: "mcw-character-counter",
  setup() {
    const uiState = reactive({ textContent: "", foundation: {} });
    const adapter = {
      setContent: (content) => {
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
    return { ...toRefs(uiState) };
  }
};

const _hoisted_1$1 = { class: "mdc-text-field-character-counter" };
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString(_ctx.textContent), 1);
}

script$4.render = render$4;
script$4.__file = "src/textfield/character-counter.vue";

var script$3 = {
  name: "mcw-textfield-helper-text",
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String
  },
  setup(props) {
    const uiState = reactive({
      classes: {
        "mdc-text-field-helper-text": true,
        "mdc-text-field-helper-text--persistent": props.persistent,
        "mdc-text-field-helper-text--validation-msg": props.validation
      },
      rootAttrs: { "aria-hidden": true },
      foundation: {}
    });
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => Boolean(uiState.classes[className]),
      getAttr: (attribute) => uiState.rootAttrs[attribute],
      setAttr: (attribute, value) => uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value },
      removeAttr: (attribute) => {
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: (content) => uiState.helpertext = content
    };
    watch(() => props.persistent, (nv) => uiState.foundation.setPersistent(nv));
    watch(() => props.validation, (nv) => uiState.foundation.setValidation(nv));
    onMounted(() => {
      uiState.foundation = new MDCTextFieldHelperTextFoundation(adapter);
      uiState.foundation.init();
    });
    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });
    return { ...toRefs(uiState) };
  }
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: _ctx.classes }, _ctx.rootAttrs), toDisplayString(_ctx.helptext), 17);
}

script$3.render = render$3;
script$3.__file = "src/textfield/textfield-helper-text.vue";

const { strings: strings$1 } = MDCTextFieldIconFoundation;
var script$2 = {
  name: "textfield-icon",
  props: {
    disabled: Boolean,
    trailing: Boolean,
    trailingIcon: Boolean
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        "mdc-text-field__icon": 1,
        [`mdc-text-field__icon--${props.trailing || props.trailingIcon ? "trailing" : "leading"}`]: 1
      },
      rootAttrs: {
        tabindex: props.disabled ? "-1" : "0",
        role: props.disabled ? void 0 : "button"
      },
      root: void 0,
      foundation: {}
    });
    const addIconFoundation = inject("addIconFoundation");
    const adapter = {
      getAttr: (attribute) => uiState.rootAttrs[attribute],
      setAttr: (attribute, value) => uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value },
      removeAttr: (attribute) => {
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: () => {
      },
      registerInteractionHandler: (eventType, handler) => uiState.root.addEventListener(eventType, handler),
      deregisterInteractionHandler: (eventType, handler) => uiState.root.removeEventListener(eventType, handler),
      notifyIconAction: () => {
        emitCustomEvent(uiState.root, strings$1.ICON_EVENT, {}, true);
        emit("click");
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
    return { ...toRefs(uiState) };
  }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", mergeProps({
    ref: "root",
    class: ["material-icons", _ctx.classes]
  }, _ctx.rootAttrs), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}

script$2.render = render$2;
script$2.__file = "src/textfield/textfield-icon.vue";

let uid_ = 0;
const getAttributesList = (mutationsList) => mutationsList.map((mutation) => mutation.attributeName);
var script$1 = {
  name: "mcw-textfield",
  inheritAttrs: false,
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: "text",
      validator: function(value) {
        return [
          "text",
          "email",
          "search",
          "password",
          "tel",
          "url",
          "number"
        ].includes(value);
      }
    },
    label: String,
    outline: Boolean,
    disabled: Boolean,
    required: Boolean,
    valid: { type: Boolean, default: void 0 },
    multiline: Boolean,
    size: { type: [Number, String], default: 20 },
    minlength: { type: [Number, String], default: void 0 },
    maxlength: { type: [Number, String], default: void 0 },
    rows: { type: [Number, String], default: 8 },
    cols: { type: [Number, String], default: 40 },
    id: { type: String },
    helptext: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    resizer: { type: Boolean, default: () => true },
    prefix: String,
    suffix: String,
    characterCounter: Boolean,
    characterCounterInternal: Boolean,
    useNativeValidation: { type: Boolean, default: () => true }
  },
  setup(props, { emit, slots, attrs }) {
    const uiState = reactive({
      text: props.modelValue,
      classes: {
        "mdc-textfield": true,
        "mdc-text-field": true,
        "mdc-text-field--upgraded": true,
        "mdc-text-field--disabled": props.disabled,
        "mdc-text-field--textarea": props.multiline,
        "mdc-text-field--outlined": !props.fullwidth && props.outline,
        "mdc-text-field--with-leading-icon": Boolean(slots.leadingIcon || slots.leading),
        "mdc-text-field--with-trailing-icon": Boolean(slots.trailingIcon || slots.trailing),
        "mdc-text-field--filled": Boolean(!props.outline),
        "mdc-text-field--no-label": !props.label
      },
      inputClasses: {
        "mdc-text-field__input": true
      },
      inputAttrs: {},
      labelClasses: {
        "mdc-floating-label": true
      },
      lineRippleClasses: {
        "mdc-line-ripple": true
      },
      lineRippleStyles: {},
      outlineClasses: {},
      notchStyles: {},
      helpTextId: `mcw-help-${uid_++}`,
      labelId: `mcw-label-${uid_}`,
      root: void 0,
      wrapper: void 0,
      helpertext: void 0,
      input: void 0,
      labelEl: void 0,
      lineRippleEl: void 0,
      characterCounterEl: void 0,
      helpertextEl: void 0
    });
    let foundation;
    let rippleClasses;
    let rippleStyles;
    const icons = ref({});
    const addIconFoundation = ({ foundation: foundation2, trailing }) => {
      icons.value[trailing ? "trailing" : "leading"] = foundation2;
    };
    provide("addIconFoundation", addIconFoundation);
    if (!props.multiline && !props.outline) {
      const { classes, styles } = useRipplePlugin(toRef(uiState, "root"));
      rippleClasses = classes;
      rippleStyles = styles;
    }
    const inputAriaControls = computed(() => {
      return props.helptext ? uiState.helpTextId : void 0;
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
    const rootClasses = computed(() => ({
      ...rippleClasses,
      ...uiState.classes
    }));
    const inputListeners = {
      input: ({ target: { value } }) => emit("update:modelValue", value)
    };
    const focus = () => {
      var _a;
      return (_a = uiState.input) == null ? void 0 : _a.focus();
    };
    const isValid = () => foundation.isValid();
    const inputAttributes = computed(() => {
      const { class: _, ...rest } = attrs;
      return {
        ...rest,
        ...uiState.inputAttrs
      };
    });
    const adapter = {
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: (className) => Boolean(uiState.classes[className]),
      registerTextFieldInteractionHandler: (eventType, handler) => {
        uiState.root.addEventListener(eventType, handler);
      },
      deregisterTextFieldInteractionHandler: (eventType, handler) => {
        uiState.root.removeEventListener(eventType, handler);
      },
      isFocused: () => {
        return document.activeElement === uiState.input;
      },
      registerValidationAttributeChangeHandler: (handler) => {
        const observer = new MutationObserver((mutationsList) => handler(getAttributesList(mutationsList)));
        const targetNode = uiState.input;
        const config = { attributes: true };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: (observer) => {
        observer.disconnect();
      },
      registerInputInteractionHandler: (eventType, handler) => {
        uiState.input.addEventListener(eventType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: (eventType, handler) => {
        uiState.input.removeEventListener(eventType, handler, applyPassive());
      },
      getNativeInput: () => {
        return uiState.input;
      },
      setInputAttr: (attribute, value) => {
        uiState.inputAttrs = { ...uiState.inputAttrs, [attribute]: value };
      },
      removeInputAttr: (attribute) => {
        const { [attribute]: removed, ...rest } = uiState.inputAttrs;
        uiState.inputAttrs = rest;
      },
      shakeLabel: (shouldShake) => {
        var _a;
        (_a = uiState.labelEl) == null ? void 0 : _a.shake(shouldShake);
      },
      floatLabel: (shouldFloat) => {
        var _a;
        (_a = uiState.labelEl) == null ? void 0 : _a.float(shouldFloat);
      },
      hasLabel: () => {
        return !!uiState.labelEl || !!uiState.notchedEl;
      },
      getLabelWidth: () => {
        return uiState.labelEl.getWidth();
      },
      deactivateLineRipple: () => {
        var _a;
        return (_a = uiState.lineRippleEl) == null ? void 0 : _a.deactivate();
      },
      activateLineRipple: () => {
        var _a;
        return (_a = uiState.lineRippleEl) == null ? void 0 : _a.activate();
      },
      setLineRippleTransformOrigin: (normalizedX) => {
        var _a;
        return (_a = uiState.lineRippleEl) == null ? void 0 : _a.setRippleCenter(normalizedX);
      },
      hasOutline: () => !!props.outline,
      notchOutline: (notchWidth, isRtl) => uiState.labelEl.notch(notchWidth, isRtl),
      closeOutline: () => uiState.labelEl.closeNotch()
    };
    watch(() => props.disabled, (nv) => foundation == null ? void 0 : foundation.setDisabled(nv));
    watch(() => props.required, (nv) => {
      uiState.input && (uiState.input.required = nv);
    });
    watch(() => props.valid, (nv) => {
      if (typeof nv !== "undefined") {
        foundation == null ? void 0 : foundation.setValid(nv);
      }
    });
    watch(() => props.useNativeValidation, (nv) => {
      if (typeof nv !== "undefined") {
        foundation == null ? void 0 : foundation.setUseNativeValidation(nv);
      }
    });
    watch(() => props.modelValue, (nv) => {
      if (foundation && nv !== foundation.getValue()) {
        foundation.setValue(nv);
      }
    });
    onMounted(() => {
      var _a, _b, _c, _d;
      foundation = new MDCTextFieldFoundation({ ...adapter }, {
        characterCounter: (_a = uiState.characterCounterEl) == null ? void 0 : _a.foundation,
        helperText: (_b = uiState.helpertext) == null ? void 0 : _b.foundation,
        leadingIcon: (_c = icons.leading) == null ? void 0 : _c.foundation,
        trailingIcon: (_d = icons.trailing) == null ? void 0 : _d.foundation
      });
      foundation.init();
      foundation.setValue(props.modelValue);
      props.disabled && foundation.setDisabled(props.disabled);
      uiState.input && (uiState.input.required = props.required);
      if (typeof props.valid !== "undefined") {
        foundation.setValid(props.valid);
      }
    });
    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
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
      inputAttrs: inputAttributes
    };
  },
  components: { mcwLineRipple, mcwNotchedOutline }
};

const _hoisted_1 = {
  key: 0,
  class: "mdc-text-field__ripple"
};
const _hoisted_2 = {
  key: 3,
  class: "mdc-text-field__affix mdc-text-field__affix--prefix"
};
const _hoisted_3 = ["type", "minlength", "maxlength", "aria-label", "aria-controls", "aria-labelledby", "aria-describedby"];
const _hoisted_4 = {
  key: 4,
  class: "mdc-text-field__affix mdc-text-field__affix--suffix"
};
const _hoisted_5 = {
  key: 1,
  class: "mdc-text-field__resizer"
};
const _hoisted_6 = ["minlength", "maxlength", "aria-label", "aria-controls", "cols", "rows"];
const _hoisted_7 = ["minlength", "maxlength", "aria-label", "aria-controls", "cols", "rows"];
const _hoisted_8 = {
  key: 2,
  class: "mdc-text-field-helper-line"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mcw_floating_label = resolveComponent("mcw-floating-label");
  const _component_mcw_notched_outline = resolveComponent("mcw-notched-outline");
  const _component_mcw_line_ripple = resolveComponent("mcw-line-ripple");
  const _component_mcw_character_counter = resolveComponent("mcw-character-counter");
  const _component_mcw_textfield_helper_text = resolveComponent("mcw-textfield-helper-text");
  return openBlock(), createElementBlock("div", {
    ref: "wrapper",
    class: normalizeClass(["textfield-container", _ctx.$attrs.class])
  }, [
    !_ctx.multiline ? (openBlock(), createElementBlock("label", {
      key: 0,
      ref: "root",
      class: normalizeClass(_ctx.rootClasses),
      style: normalizeStyle(_ctx.rippleStyles)
    }, [
      !_ctx.outline ? (openBlock(), createElementBlock("span", _hoisted_1)) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "leading"),
      renderSlot(_ctx.$slots, "leadingIcon"),
      _ctx.hasLabel ? (openBlock(), createBlock(_component_mcw_floating_label, {
        key: 1,
        ref: "labelEl",
        id: _ctx.labelId,
        required: _ctx.required
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 8, ["id", "required"])) : createCommentVNode("v-if", true),
      _ctx.outline ? (openBlock(), createBlock(_component_mcw_notched_outline, {
        key: 2,
        ref: "labelEl"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 512)) : createCommentVNode("v-if", true),
      _ctx.prefix ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.prefix), 1)) : createCommentVNode("v-if", true),
      createElementVNode("input", mergeProps({
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
      }, toHandlers(_ctx.inputListeners)), null, 16, _hoisted_3),
      _ctx.suffix ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.suffix), 1)) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "trailingIcon"),
      renderSlot(_ctx.$slots, "trailing"),
      _ctx.hasLineRipple ? (openBlock(), createBlock(_component_mcw_line_ripple, {
        key: 5,
        ref: "lineRippleEl"
      }, null, 512)) : createCommentVNode("v-if", true)
    ], 6)) : (openBlock(), createElementBlock("label", {
      key: 1,
      ref: "root",
      class: normalizeClass(_ctx.classes)
    }, [
      _ctx.outline ? (openBlock(), createBlock(_component_mcw_notched_outline, {
        key: 0,
        ref: "labelEl"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 512)) : createCommentVNode("v-if", true),
      _ctx.resizer ? (openBlock(), createElementBlock("span", _hoisted_5, [
        createElementVNode("textarea", mergeProps({
          ref: "input",
          class: _ctx.inputClasses
        }, _ctx.inputAttrs, {
          minlength: _ctx.minlength,
          maxlength: _ctx.maxlength,
          "aria-label": _ctx.label,
          "aria-controls": _ctx.inputAriaControls,
          cols: _ctx.cols,
          rows: _ctx.rows
        }, toHandlers(_ctx.inputListeners)), null, 16, _hoisted_6)
      ])) : (openBlock(), createElementBlock("textarea", mergeProps({
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
      }, toHandlers(_ctx.inputListeners)), null, 16, _hoisted_7)),
      _ctx.internalCharacterCounter ? (openBlock(), createBlock(_component_mcw_character_counter, {
        key: 3,
        ref: "characterCounterEl"
      }, null, 512)) : createCommentVNode("v-if", true)
    ], 2)),
    _ctx.hasHelpline ? (openBlock(), createElementBlock("div", _hoisted_8, [
      _ctx.helptext ? (openBlock(), createBlock(_component_mcw_textfield_helper_text, {
        key: 0,
        ref: "helpertext",
        id: _ctx.helpTextId,
        helptext: _ctx.helptext,
        persistent: _ctx.helptextPersistent,
        validation: _ctx.helptextValidation
      }, null, 8, ["id", "helptext", "persistent", "validation"])) : createCommentVNode("v-if", true),
      _ctx.helperCharacterCounter ? (openBlock(), createBlock(_component_mcw_character_counter, {
        key: 1,
        ref: "characterCounterEl"
      }, null, 512)) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true)
  ], 2);
}

script$1.render = render$1;
script$1.__file = "src/textfield/textfield.vue";

var textfield = BasePlugin({
  mcwTextfield: script$1,
  mcwTextfieldIcon: script$2,
  mcwCharacterCounter: script$4,
  mcwTextfieldHelperText: script$3,
  mcwLineRipple,
  mcwNotchedOutline,
  mcwFloatingLabel
});

var script = {
  name: "mcw-tooltip",
  props: {
    position: { type: [Object, String] },
    boundaryType: { type: [String, Number] },
    showDelay: { type: Number },
    hideDelay: { type: Number },
    addEventListenerHandlerFn: { type: Function },
    removeEventListenerHandlerFn: { type: Function },
    rich: Boolean
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: { "mdc-tooltip--rich": props.rich },
      styles: {},
      surfaceStyle: {},
      rootAttrs: { "aria-hidden": true },
      root: void 0,
      isTooltipPersistent: false,
      isTooltipRich: false
    });
    let foundation;
    let anchorElement;
    const adapter = {
      getAttribute: (name) => {
        return uiState.root.getAttribute(name);
      },
      setAttribute: (attributeName, value) => {
        uiState.rootAttrs = { ...uiState.rootAttrs, [attributeName]: value };
      },
      removeAttribute: (attribute) => {
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      addClass: (className) => uiState.classes = { ...uiState.classes, [className]: true },
      hasClass: (className) => uiState.root.classList.contains(className),
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      getComputedStyleProperty: (propertyName) => {
        return window.getComputedStyle(uiState.root).getPropertyValue(propertyName);
      },
      setStyleProperty: (property, value) => uiState.styles = { ...uiState.styles, [property]: value },
      setSurfaceAnimationStyleProperty: (propertyName, value) => {
        uiState.surfaceStyle = {
          ...uiState.surfaceStyle,
          [propertyName]: value
        };
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
        return anchorElement ? anchorElement.getBoundingClientRect() : void 0;
      },
      getParentBoundingRect: () => {
        var _a, _b;
        return (_b = (_a = uiState.root.parentElement) == null ? void 0 : _a.getBoundingClientRect()) != null ? _b : void 0;
      },
      getAnchorAttribute: (attribute) => {
        return anchorElement ? anchorElement.getAttribute(attribute) : void 0;
      },
      setAnchorAttribute: (attribute, value) => {
        anchorElement == null ? void 0 : anchorElement.setAttribute(attribute, value);
      },
      isRTL: () => getComputedStyle(uiState.root).direction === "rtl",
      anchorContainsElement: (element) => {
        return !!(anchorElement == null ? void 0 : anchorElement.contains(element));
      },
      tooltipContainsElement: (element) => {
        return uiState.root.contains(element);
      },
      focusAnchorElement: () => {
        anchorElement == null ? void 0 : anchorElement.focus();
      },
      registerEventHandler: (event_, handler) => {
        uiState.root.addEventListener(event_, handler);
      },
      deregisterEventHandler: (event_, handler) => {
        uiState.root.removeEventListener(event_, handler);
      },
      registerAnchorEventHandler: (event_, handler) => {
        anchorElement == null ? void 0 : anchorElement.addEventListener(event_, handler);
      },
      deregisterAnchorEventHandler: (event_, handler) => {
        anchorElement == null ? void 0 : anchorElement.removeEventListener(event_, handler);
      },
      registerDocumentEventHandler: (event_, handler) => {
        document.body.addEventListener(event_, handler);
      },
      deregisterDocumentEventHandler: (event_, handler) => {
        document.body.removeEventListener(event_, handler);
      },
      registerWindowEventHandler: (event_, handler) => {
        window.addEventListener(event_, handler);
      },
      deregisterWindowEventHandler: (event_, handler) => {
        window.removeEventListener(event_, handler);
      },
      notifyHidden: () => {
        emit(events$1.HIDDEN.toLowerCase(), {});
      },
      getTooltipCaretBoundingRect: () => {
        const caret = uiState.root.querySelector < HTMLElement > `.${CssClasses$1.TOOLTIP_CARET_TOP}`;
        if (!caret) {
          return;
        }
        return caret.getBoundingClientRect();
      },
      setTooltipCaretStyle: (propertyName, value) => {
        const topCaret = uiState.root.querySelector < HTMLElement > `.${CssClasses$1.TOOLTIP_CARET_TOP}`;
        const bottomCaret = uiState.root.querySelector < HTMLElement > `.${CssClasses$1.TOOLTIP_CARET_BOTTOM}`;
        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.style.setProperty(propertyName, value);
        bottomCaret.style.setProperty(propertyName, value);
      },
      clearTooltipCaretStyles: () => {
        const topCaret = uiState.root.querySelector < HTMLElement > `.${CssClasses$1.TOOLTIP_CARET_TOP}`;
        const bottomCaret = uiState.root.querySelector < HTMLElement > `.${CssClasses$1.TOOLTIP_CARET_BOTTOM}`;
        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.removeAttribute("style");
        bottomCaret.removeAttribute("style");
      },
      getActiveElement: () => {
        return document.activeElement;
      }
    };
    const handleMouseEnter = () => {
      foundation.handleAnchorMouseEnter();
    };
    const handleFocus = (event_) => {
      foundation.handleAnchorFocus(event_);
    };
    const handleMouseLeave = () => {
      foundation.handleAnchorMouseLeave();
    };
    const handleTouchstart = () => {
      foundation.handleAnchorTouchstart();
    };
    const handleTouchend = () => {
      foundation.handleAnchorTouchend();
    };
    const handleBlur = (event_) => {
      foundation.handleAnchorBlur(event_);
    };
    const handleTransitionEnd = () => {
      foundation.handleTransitionEnd();
    };
    const handleClick = () => {
      foundation.handleAnchorClick();
    };
    const onPosition = (position) => {
      if (position) {
        let xPos;
        let yPos;
        if (typeof position == "string") {
          [xPos, yPos = xPos] = position.split(",");
        } else {
          ({ xPos, yPos } = position);
        }
        foundation.setTooltipPosition({
          xPos: toXposition(xPos),
          yPos: toYposition(yPos)
        });
      }
    };
    const onBoundaryType = (type) => {
      if (type != void 0) {
        foundation.setAnchorBoundaryType(toAnchorBoundaryType(type));
      }
    };
    onMounted(() => {
      const tooltipId = uiState.root.getAttribute("id");
      if (!tooltipId) {
        throw new Error("MDCTooltip: Tooltip component must have an id.");
      }
      anchorElement = document.querySelector(`[aria-describedby="${tooltipId}"]`) || document.querySelector(`[data-tooltip-id="${tooltipId}"]`);
      if (!anchorElement) {
        throw new Error("MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id] anchor element.");
      }
      foundation = new MDCTooltipFoundation(adapter);
      foundation.init();
      uiState.isTooltipRich = foundation.isRich();
      uiState.isTooltipPersistent = foundation.isPersistent();
      if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
        anchorElement.addEventListener("click", handleClick);
      } else {
        anchorElement.addEventListener("mouseenter", handleMouseEnter);
        anchorElement.addEventListener("focus", handleFocus);
        anchorElement.addEventListener("mouseleave", handleMouseLeave);
        anchorElement.addEventListener("touchstart", handleTouchstart);
        anchorElement.addEventListener("touchend", handleTouchend);
      }
      anchorElement.addEventListener("blur", handleBlur);
      if (props.showDelay !== void 0) {
        foundation.setShowDelay(props.showDelay);
      }
      if (props.hideDelay !== void 0) {
        foundation.setHideDelay(props.hideDelay);
      }
      if (props.addEventListenerHandlerFn) {
        foundation.attachScrollHandler(props.addEventListenerHandlerFn);
      }
      if (props.removeEventListenerHandlerFn) {
        foundation.removeScrollHandler(props.removeEventListenerHandlerFn);
      }
      watchEffect(() => onPosition(props.position));
      watchEffect(() => onBoundaryType(props.boundaryType));
    });
    onBeforeUnmount(() => {
      if (anchorElement) {
        if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
          anchorElement.removeEventListener("click", handleClick);
        } else {
          anchorElement.removeEventListener("mouseenter", handleMouseEnter);
          anchorElement.removeEventListener("focus", handleFocus);
          anchorElement.removeEventListener("mouseleave", handleMouseLeave);
          anchorElement.removeEventListener("touchstart", handleTouchstart);
          anchorElement.removeEventListener("touchend", handleTouchend);
          anchorElement.removeEventListener("blur", handleBlur);
        }
      }
      foundation == null ? void 0 : foundation.destroy();
    });
    return { ...toRefs(uiState), handleTransitionEnd };
  }
};
const XPosition_ = { detected: 0, start: 1, center: 2, end: 3 };
function toXposition(x) {
  var _a;
  return typeof x == "string" ? (_a = XPosition_[x]) != null ? _a : 0 : x;
}
const YPosition_ = { detected: 0, above: 1, below: 2 };
function toYposition(y) {
  var _a;
  return typeof y == "string" ? (_a = YPosition_[y]) != null ? _a : 0 : y;
}
const AnchorBoundaryType_ = { bounded: 0, unbounded: 1 };
function toAnchorBoundaryType(type) {
  var _a;
  return typeof type == "string" ? (_a = AnchorBoundaryType_[type]) != null ? _a : "0" : type;
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "root",
    class: ["mdc-tooltip", _ctx.classes]
  }, _ctx.rootAttrs, {
    style: _ctx.styles,
    role: "tooltip",
    onTransitionend: _cache[0] || (_cache[0] = (...args) => _ctx.handleTransitionEnd && _ctx.handleTransitionEnd(...args))
  }), [
    createElementVNode("div", {
      style: normalizeStyle(_ctx.surfaceStyle),
      class: "mdc-tooltip__surface mdc-tooltip__surface-animation"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 16);
}

script.render = render;
script.__file = "src/tooltip/tooltip.vue";

var tooltip = BasePlugin({
  mcwTooltip: script
});

const { cssClasses, strings } = MDCTopAppBarFoundation;
var mcwTopAppBar = {
  name: "mcw-top-app-bar",
  props: {
    tag: { type: String, default: "header" },
    scrollTarget: HTMLElement
  },
  emits: ["nav"],
  setup(props, { emit, slots, expose }) {
    const uiState = reactive({
      rootStyles: {},
      rootClasses: {
        "mdc-top-app-bar": true
      }
    });
    const root = ref();
    let foundation;
    let navIcon;
    let iconRipples = [];
    let myScrollTarget = props.scrollTarget || window;
    const handleNavigationClick = (event) => foundation.handleNavigationClick(event);
    const handleTargetScroll = (event_) => foundation.handleTargetScroll(event_);
    const handleWindowResize = (event_) => foundation.handleWindowResize(event_);
    const adapter = {
      addClass: (className) => uiState.rootClasses = { ...uiState.rootClasses, [className]: true },
      removeClass: (className) => {
        const { [className]: removed, ...rest } = uiState.rootClasses;
        uiState.rootClasses = rest;
      },
      hasClass: (className) => Boolean(uiState.rootClasses[className]),
      setStyle: (property, value) => uiState.rootStyles = { ...uiState.rootStyles, [property]: value },
      getTopAppBarHeight: () => root.value.clientHeight,
      notifyNavigationIconClicked: () => {
        emit("nav", {});
        emitCustomEvent(root.value, strings.NAVIGATION_EVENT, {}, true);
      },
      getViewportScrollY: () => {
        const st = myScrollTarget;
        return st.scrollY !== void 0 ? st.scrollY : st.scrollTop;
      },
      getTotalActionItems: () => root.value.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length
    };
    watch(() => props.scrollTarget, (nv, ov) => {
      if (nv !== ov) {
        myScrollTarget.removeEventListener("scroll", handleTargetScroll);
        myScrollTarget = nv;
        myScrollTarget.addEventListener("scroll", handleTargetScroll);
      }
    });
    const setScrollTarget = (nv) => {
      myScrollTarget.removeEventListener("scroll", handleTargetScroll);
      myScrollTarget = nv;
      myScrollTarget.addEventListener("scroll", handleTargetScroll);
    };
    onMounted(() => {
      const isFixed = root.value.classList.contains(cssClasses.FIXED_CLASS);
      const isShort = root.value.classList.contains(cssClasses.SHORT_CLASS);
      if (isShort) {
        foundation = new MDCShortTopAppBarFoundation(adapter);
      } else if (isFixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter);
      } else {
        foundation = new MDCTopAppBarFoundation(adapter);
      }
      navIcon = root.value.querySelector(strings.NAVIGATION_ICON_SELECTOR);
      const icons = Array.prototype.slice.call(root.value.querySelectorAll(strings.ACTION_ITEM_SELECTOR));
      if (navIcon) {
        navIcon.addEventListener("click", handleNavigationClick);
        icons.push(navIcon);
      }
      iconRipples = icons.map((icon) => {
        const ripple = new RippleElement(icon);
        ripple.init();
        ripple.unbounded = true;
        return ripple;
      });
      myScrollTarget.addEventListener("scroll", handleTargetScroll);
      if (!isShort && !isFixed) {
        window.addEventListener("resize", handleWindowResize);
      }
      foundation.init();
    });
    onBeforeUnmount(() => {
      if (navIcon) {
        navIcon.removeEventListener("click", handleNavigationClick);
      }
      for (const iconRipple of iconRipples) {
        iconRipple.destroy();
      }
      myScrollTarget.removeEventListener("scroll", handleTargetScroll);
      const isFixed = root.value.classList.contains(cssClasses.FIXED_CLASS);
      const isShort = root.value.classList.contains(cssClasses.SHORT_CLASS);
      if (!isShort && !isFixed) {
        window.removeEventListener("resize", handleWindowResize);
      }
      foundation.destroy();
    });
    expose({ setScrollTarget });
    return () => {
      return h(props.tag, { ref: root, class: uiState.rootClasses, style: uiState.rootStyles }, [slots.default()]);
    };
  }
};

var topAppBar = BasePlugin({
  mcwTopAppBar
});

var index = {
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

export { banner, index$1 as base, button, card, checkbox, chips, circularProgress, dataTable, index as default, dialog, drawer, fab, floatingLabel, iconButton, layoutGrid, lineRipple, linearProgress, list, materialIcon, menu, notchedOutline, radio, segmentedButton, select, slider, snackbar, switchControl, tabs, textfield, tooltip, topAppBar };
