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
        const list = this.listItems();
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const list = this.listItems();
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const list = this.listItems();
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const list = this.listItems();
        list[index].removeAttribute(attr);
      },
      elementContainsClass: (element, className) =>
        element.classList.contains(className),
      closeSurface: skipRestoreFocus => {
        this.$refs.menuSurface_.close(skipRestoreFocus);
        this.$emit('change', false);
      },

      getElementIndex: element => {
        return this.listItems().indexOf(element);
      },

      isSelectableItemAtIndex: index =>
        !!closest(
          this.listItems()[index],
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        ),
      getSelectedSiblingOfItemAtIndex: index => {
        const selectionGroupEl = closest(
          this.listItems()[index],
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        );
        const selectedItemEl = selectionGroupEl.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`,
        );
        return selectedItemEl ? this.listItems().indexOf(selectedItemEl) : -1;
      },
      notifySelected: evtData => {
        emitCustomEvent(this.$el, strings.SELECTED_EVENT, {
          index: evtData.index,
          item: this.listItems()[evtData.index],
        });

        this.$emit('select', {
          index: evtData.index,
          item: this.listItems()[evtData.index],
        });
      },
      getMenuItemCount: () => this.listItems().length,
      focusItemAtIndex: index => this.listItems()[index].focus(),
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
    listItems() {
      return this.$refs.list ? this.$refs.list.getListElements() : [];
    },
    listen(evtType, handler, options) {
      this.$el.addEventListener(evtType, handler, options);
    },
    unlisten(evtType, handler, options) {
      this.$el.removeEventListener(evtType, handler, options);
    },
    handleAction({ detail: { index } }) {
      this.foundation.handleItemAction(this.listItems()[index]);
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
      const items = this.listItems();

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
          scopedSlots.default?.(),
        ),
      ],
    );
  },
};
