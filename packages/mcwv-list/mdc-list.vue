<template>
  <ul
    :class="classes"
    class="mdc-list"
    :aria-orientation="orientation"
    @click="handleClickEvent"
    @keydown="handleKeydownEvent"
    @focusin="handleFocusInEvent"
    @focusout="handleFocusOutEvent"
  >
    <slot />
  </ul>
</template>

<script>
import MDCListFoundation from '@material/list/foundation';
import { matches } from '@material/dom/ponyfill';
import { emitCustomEvent } from '@mcwv/base';

export default {
  name: 'mdc-list',
  props: {
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    bordered: Boolean,
    interactive: { type: Boolean, default: true },
    singleSelection: Boolean,
    vertical: { type: Boolean, default: true },
  },
  provide() {
    return { mdcList: this };
  },
  computed: {
    classes() {
      return {
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatarList,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--bordered': this.bordered,
        'mdc-list--non-interactive': !this.interactive,
      };
    },

    orientation() {
      return this.vertical ? 'vertical' : 'horizontal';
    },

    listElements() {
      return [].slice.call(
        this.$el.querySelectorAll(
          MDCListFoundation.strings.ENABLED_ITEMS_SELECTOR,
        ),
      );
    },
  },
  methods: {
    handleFocusInEvent(evt) {
      const index = this.getListItemIndex(evt);
      this.foundation.handleFocusIn(evt, index);
    },
    handleFocusOutEvent(evt) {
      const index = this.getListItemIndex(evt);
      this.foundation.handleFocusOut(evt, index);
    },

    handleKeydownEvent(evt) {
      const index = this.getListItemIndex(evt);

      if (index >= 0) {
        this.foundation.handleKeydown(
          evt,
          evt.target.classList.contains(
            MDCListFoundation.cssClasses.LIST_ITEM_CLASS,
          ),
          index,
        );
      }
    },
    handleClickEvent(evt) {
      const index = this.getListItemIndex(evt);

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = !matches(
        evt.target,
        MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR,
      );
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
        .call(
          this.$el.querySelectorAll(
            MDCListFoundation.strings.FOCUSABLE_CHILD_ELEMENTS,
          ),
        )
        .forEach(ele => ele.setAttribute('tabindex', -1));
    },

    initializeListType() {
      // Automatically set single selection if selected/activated classes are present.
      const preselectedElement = this.$el.querySelector(
        `.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}, .${
          MDCListFoundation.cssClasses.LIST_ITEM_SELECTED_CLASS
        }`,
      );

      if (preselectedElement) {
        if (
          preselectedElement.classList.contains(
            MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS,
          )
        ) {
          this.foundation.setUseActivatedClass(true);
        }

        this.singleSelection = true;
        this.selectedIndex = this.listElements.indexOf(preselectedElement);
      }
    },

    getListItemIndex(evt) {
      let eventTarget = evt.target;
      let index = -1;

      // Find the first ancestor that is a list item or the list.
      while (
        !eventTarget.classList.contains(
          MDCListFoundation.cssClasses.LIST_ITEM_CLASS,
        ) &&
        !eventTarget.classList.contains(MDCListFoundation.cssClasses.ROOT)
      ) {
        eventTarget = eventTarget.parentElement;
      }

      // Get the index of the element if it is a list item.
      if (
        eventTarget.classList.contains(
          MDCListFoundation.cssClasses.LIST_ITEM_CLASS,
        )
      ) {
        index = this.listElements.indexOf(eventTarget);
      }

      return index;
    },
  },
  mounted() {
    this.foundation = new MDCListFoundation({
      getListItemCount: () => this.listElements.length,
      getFocusedElementIndex: () =>
        this.listElements.indexOf(document.activeElement),
      setAttributeForElementIndex: (index, attr, value) => {
        const element = this.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },
      removeAttributeForElementIndex: (index, attr) => {
        const element = this.listElements[index];
        if (element) {
          element.removeAttribute(attr);
        }
      },
      addClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.add(className);
        }
      },
      removeClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.remove(className);
        }
      },
      focusItemAtIndex: index => {
        const element = this.listElements[index];
        if (element) {
          element.focus();
        }
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = this.listElements[listItemIndex];
        const listItemChildren = [].slice.call(
          element.querySelectorAll(
            MDCListFoundation.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX,
          ),
        );
        listItemChildren.forEach(ele =>
          ele.setAttribute('tabindex', tabIndexValue),
        );
      },
      followHref: index => {
        const listItem = this.listElements[index];
        if (listItem && listItem.href) {
          listItem.click();
        }
      },
      hasCheckboxAtIndex: index => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(
          MDCListFoundation.strings.CHECKBOX_SELECTOR,
        );
      },
      hasRadioAtIndex: index => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(
          MDCListFoundation.strings.RADIO_SELECTOR,
        );
      },
      isCheckboxCheckedAtIndex: index => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector(
          MDCListFoundation.strings.CHECKBOX_SELECTOR,
        );
        return toggleEl.checked;
      },
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector(
          MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR,
        );
        toggleEl.checked = isChecked;

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
      },

      notifyAction: index => {
        emitCustomEvent(
          this.$el,
          MDCListFoundation.strings.ACTION_EVENT,
          { index },
          /** shouldBubble */ true,
        );
      },
      isFocusInsideList: () => {
        return this.$el.contains(document.activeElement);
      },
    });

    this.foundation.init();

    this.foundation.setSingleSelection(this.singleSelection);

    this.foundation.setVerticalOrientation(this.vertical);

    this.layout();
  },
};
</script>
