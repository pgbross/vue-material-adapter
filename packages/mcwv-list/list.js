import MDCListFoundation from '@material/list/foundation';
import { emitCustomEvent } from '@mcwv/base';

import { closest, matches } from '@material/dom/ponyfill';

const ARIA_ORIENTATION = 'aria-orientation';
const VERTICAL = 'vertical';

const {
  strings: {
    CHECKBOX_SELECTOR,
    RADIO_SELECTOR,
    CHECKBOX_RADIO_SELECTOR,
    ACTION_EVENT,
    FOCUSABLE_CHILD_ELEMENTS,
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX,
    ARIA_ROLE_CHECKBOX_SELECTOR,
    ARIA_CHECKED_RADIO_SELECTOR,
    ARIA_CHECKED_CHECKBOX_SELECTOR,
  },
  cssClasses: {
    LIST_ITEM_CLASS,
    ROOT,
    LIST_ITEM_ACTIVATED_CLASS,
    LIST_ITEM_SELECTED_CLASS,
  },
} = MDCListFoundation;

export default {
  name: 'mcw-list',
  props: {
    nonInteractive: { type: Boolean, default: false },
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    singleSelection: Boolean,
    wrapFocus: Boolean,
    selectedIndex: Number,
    tag: { type: String, default: 'ul' },
    [ARIA_ORIENTATION]: { type: String, default: VERTICAL },
  },

  data() {
    return {};
  },

  watch: {
    singleSelection(nv) {
      this.foundation.setSingleSelection(nv);
    },
    selectedIndex(nv) {
      if (typeof nv === 'number' && !isNaN(nv)) {
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
      return [].slice.call(this.$el.querySelectorAll(`.${LIST_ITEM_CLASS}`));
    },
  },

  methods: {
    handleFocusInEvent(evt, index) {
      this.foundation.handleFocusIn(evt, index);
    },
    handleFocusOutEvent(evt, index) {
      this.foundation.handleFocusOut(evt, index);
    },

    handleKeydownEvent(evt, index) {
      this.foundation.handleKeydown(evt, true, index);
    },
    handleClickEvent(evt) {
      const index = this.getListItemIndex(evt);
      const target = evt.target;

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = !matches(target, CHECKBOX_RADIO_SELECTOR);
      this.foundation.handleClick(index, toggleCheckbox);
    },

    layout() {
      // List items need to have at least tabindex=-1 to be focusable.
      [].slice
        .call(this.$el.querySelectorAll('.mdc-list-item:not([tabindex])'))
        .forEach(ele => {
          ele.setAttribute('tabindex', -1);
        });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice
        .call(this.$el.querySelectorAll(FOCUSABLE_CHILD_ELEMENTS))
        .forEach(ele => ele.setAttribute('tabindex', -1));

      this.foundation.layout();
    },

    initializeListType() {
      const checkboxListItems = this.$el.querySelectorAll(
        ARIA_ROLE_CHECKBOX_SELECTOR,
      );
      const singleSelectedListItem = this.$el.querySelector(`
        .${LIST_ITEM_ACTIVATED_CLASS},
        .${LIST_ITEM_SELECTED_CLASS}
      `);
      const radioSelectedListItem = this.$el.querySelector(
        ARIA_CHECKED_RADIO_SELECTOR,
      );

      if (checkboxListItems.length) {
        const preselectedItems = this.$el.querySelectorAll(
          ARIA_CHECKED_CHECKBOX_SELECTOR,
        );
        this.selectedIndex = [].map.call(preselectedItems, listItem =>
          this.listElements.indexOf(listItem),
        );
      } else if (singleSelectedListItem) {
        if (
          singleSelectedListItem.classList.contains(LIST_ITEM_ACTIVATED_CLASS)
        ) {
          this.foundation.setUseActivatedClass(true);
        }

        this.singleSelection = true;
        this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
      } else if (radioSelectedListItem) {
        this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
      }
    },

    getListItemIndex(evt) {
      const eventTarget = evt.target;
      const nearestParent = closest(
        eventTarget,
        `.${LIST_ITEM_CLASS}, .${ROOT}`,
      );

      // Get the index of the element if it is a list item.
      if (nearestParent && matches(nearestParent, `.${LIST_ITEM_CLASS}`)) {
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
        return !!listItem.querySelector(CHECKBOX_SELECTOR);
      },

      hasRadioAtIndex: index => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(RADIO_SELECTOR);
      },

      isCheckboxCheckedAtIndex: index => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector(CHECKBOX_SELECTOR);
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
          ACTION_EVENT,
          { index },
          /** shouldBubble */ true,
        );
        this.$emit('action', { index });
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
        const toggleEl = listItem.querySelector(CHECKBOX_RADIO_SELECTOR);
        toggleEl && (toggleEl.checked = isChecked);

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl && toggleEl.dispatchEvent(event);
      },

      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = this.listElements[listItemIndex];
        const listItemChildren = [].slice.call(
          element.querySelectorAll(CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),
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
        },
      },
      slots.default && slots.default(),
    );
  },
};
