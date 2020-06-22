/* eslint-disable quote-props */
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation';
import { emitCustomEvent } from '~/base/index.js';
import * as util from '@material/menu-surface/util';

const { strings, cssClasses } = MDCMenuSurfaceFoundation;

export default {
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
            emitCustomEvent(this.$el, strings.CLOSED_EVENT, {});

            this.$emit('change', false);
          },
          notifyOpen: () => {
            emitCustomEvent(this.$el, strings.OPENED_EVENT, {});

            this.$emit('change', true);
          },
          isElementInContainer: el => this.$el.contains(el),
          isRtl: () =>
            getComputedStyle(this.$el).getPropertyValue('direction') === 'rtl',
          setTransformOrigin: origin => {
            this.$el.style.setProperty(
              `${util.getTransformPropertyName(window)}-origin`,
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
      this.$el.parentElement.classList.contains(cssClasses.ANCHOR)
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
        this.$set(this.classes, cssClasses.FIXED, true);
      } else {
        this.$delete(this.classes, cssClasses.FIXED);
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
      scopedSlots.default?.(),
    );
  },
};
