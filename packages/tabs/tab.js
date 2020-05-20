/* eslint-disable quote-props */
import MDCTabFoundation from '@material/tab/foundation';
import {
  CustomLinkMixin,
  DispatchEventMixin,
  emitCustomEvent,
  VMAUniqueIdMixin,
} from '~/base/index.js';

export default {
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
