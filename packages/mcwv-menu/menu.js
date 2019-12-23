/* eslint-disable quote-props */
import { MDCMenuFoundation } from '@material/menu/foundation';
import { emitCustomEvent } from '@mcwv/base';
import { closest } from '@material/dom/ponyfill';

export default {
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
      myWrapFocus: this.wrapFocus,
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
        this.$refs.root.close(skipRestoreFocus);
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
      this.$refs.root.foundation.setAnchorCorner(corner);
    },
    setAnchorElement(element) {
      this.$refs.root.setMenuSurfaceAnchorElement(element);
    },
    setSelectedIndex(index) {
      this.foundation.setSelectedIndex(index);
    },
    setAnchorMargin(margin) {
      this.$refs.root.foundation.setAnchorMargin(margin);
    },
    getOptionByIndex(index) {
      const items = this.items;

      if (index < items.length) {
        return this.items[index];
      }
      return null;
    },
    setFixedPosition(isFixed) {
      this.$refs.root.foundation.setFixedPosition(isFixed);
    },

    hoistMenuToBody() {
      this.$refs.root.foundation.hoistMenuToBody();
    },

    setIsHoisted(isHoisted) {
      this.$refs.root.foundation.setIsHoisted(isHoisted);
    },

    setAbsolutePosition(x, y) {
      this.$refs.root.foundation.setAbsolutePosition(x, y);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    return createElement(
      'mcw-menu-surface',
      {
        class: { 'mdc-menu': 1 },
        ref: 'root',
        attrs: { 'quick-open': this.quickOpen, open: this.menuOpen },
        on: {
          change: evt => this.onChange(evt),
          keydown: evt => this.handleKeydown(evt),
          'MDCMenuSurface:opened': evt => this.handleMenuSurfaceOpened(evt),
        },
        nativeOn: { 'MDCList:action': evt => this.handleAction(evt) },
      },
      [
        createElement(
          'mcw-list',
          {
            ref: 'list',
            props: { wrapFocus: this.myWrapFocus },
          },
          scopedSlots.default && scopedSlots.default(),
        ),
      ],
    );
  },
};
