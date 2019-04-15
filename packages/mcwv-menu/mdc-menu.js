/* eslint-disable quote-props */
import { MDCMenuFoundation } from '@material/menu/foundation';
import { emitCustomEvent } from '@mcwv/base';

const template = `  <mdc-menu-surface
    ref="root"
    class="mdc-menu"
    :quick-open="quickOpen"
    :open="open"
    @change="onChange"
    @keydown="handleKeydown"
  >
    <mdc-list ref="list" @MDCList:action.native="handleAction">
      <slot/>
    </mdc-list>
  </mdc-menu-surface>`;

export default {
  name: 'mdc-menu',
  template,
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
    };
  },
  provide() {
    return { mdcMenu: this };
  },
  watch: {
    // anchorCorner(nv) {
    //   this.foundation.setAnchorCorner(Number(nv))
    // },
    // anchorMargin(nv) {
    //   this.foundation.setAnchorMargin(nv)
    // }
  },
  mounted() {
    this._previousFocus = undefined;

    this.foundation = new MDCMenuFoundation({
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
      closeSurface: () => {
        this.$emit('change', false);
      },
      getElementIndex: element => {
        return this.items.indexOf(element);
      },
      getParentElement: element => element.parentElement,
      getSelectedElementIndex: selectionGroup => {
        const idx = this.items.indexOf(
          selectionGroup.querySelector(
            `.${MDCMenuFoundation.cssClasses.MENU_SELECTED_LIST_ITEM}`,
          ),
        );
        return idx;
      },
      notifySelected: evtData => {
        emitCustomEvent(this.$el, MDCMenuFoundation.strings.SELECTED_EVENT, {
          index: evtData.index,
          item: this.items[evtData.index],
        });

        this.$emit('select', {
          index: evtData.index,
          item: this.items[evtData.index],
        });
      },
    });

    this.foundation.init();
  },
  beforeDestroy() {
    this._previousFocus = null;
    this.foundation.destroy();
  },

  computed: {
    items() {
      return this.$refs.list.listElements;
    },
  },

  methods: {
    handleAction({ detail: { index } }) {
      this.foundation.handleItemAction(this.items[index]);
    },

    handleKeydown(evt) {
      this.foundation.handleKeydown(evt);
    },
    onChange(item) {
      this.$emit('change', item);
    },
    // onOpen_(value) {
    //   if (value) {
    //     this.foundation.open(typeof value === 'object' ? value : void 0)
    //   } else {
    //     this.foundation.close()
    //   }
    // },
    // show(options) {
    //   this.foundation.open(options)
    // },
    // hide() {
    //   this.foundation.close()
    // },
    // isOpen() {
    //   return this.foundation ? this.foundation.isOpen() : false
    // }
  },
};
