import MDCListFoundation from '@material/list/foundation';
import { emitCustomEvent } from '@mcwv/base';

const ARIA_ORIENTATION = 'aria-orientation';
const VERTICAL = 'vertical';
const CHECKBOX_TYPE = 'checkbox';

export default {
  name: 'mdc-list',
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
    return {
      state: {
        focusListItemAtIndex: -1,
        followHrefAtIndex: -1,
        toggleCheckboxAtIndex: -1,
        // listItemAttributes: {index: {attr: value}}
        listItemAttributes: {
          0: {
            tabIndex: 0,
          },
        },
        // listItemClassNames: {index: Array<String>}
        listItemClassNames: {},
        // listItemChildrenTabIndex: {index: Number}
        listItemChildrenTabIndex: {},
      },
    };
  },
  render(createElement) {
    const { tag, ariaOrientation, $scopedSlots: slots } = this;

    const mdt = (slots.default && slots.default()) || [];
    this.listItemCount = 0;
    const {
      focusListItemAtIndex,
      followHrefAtIndex,
      toggleCheckboxAtIndex,
      listItemAttributes,
      listItemClassNames,
      listItemChildrenTabIndex,
    } = this.state;

    mdt.forEach(vn => {
      if (!vn.tag || vn.componentOptions.tag !== 'mdc-list-item') {
        return;
      }
      const index = this.listItemCount++;

      const liProps = {
        shouldFocus: focusListItemAtIndex === index,
        shouldFollowHref: followHrefAtIndex === index,
        shouldToggleCheckbox: toggleCheckboxAtIndex === index,
        attributesFromList: listItemAttributes[index],
        classNamesFromList: listItemClassNames[index],
        childrenTabIndex: listItemChildrenTabIndex[index],
      };

      const data = vn.data || (vn.data = {});
      const props = data.props || (data.props = {});
      const attrs = data.attrs || (data.attrs = {});
      const on = data.on || (data.on = {});

      data.props = { ...props, ...liProps };
      data.on = {
        ...on,
        click: evt => this.handleClickEvent(evt),
        keydown: evt => this.handleKeydownEvent(evt, index),
        focusin: evt => this.handleFocusInEvent(evt, index),
        focusout: evt => this.handleFocusOutEvent(evt, index),
      };
      data.attrs = { ...attrs, ...listItemAttributes[index] };
    });

    return createElement(
      tag,
      {
        class: this.classes,
        attrs: { 'aria-orientation': ariaOrientation },
        // on: {
        //   click: evt => this.handleClickEvent(evt),
        //   keydown: evt => this.handleKeydownEvent(evt),
        //   focusin: evt => this.handleFocusInEvent(evt),
        //   focusout: evt => this.handleFocusOutEvent(evt),
        // },
      },
      slots.default && slots.default(),
    );
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
        'mdc-list--non-interactive': !this.interactive,
      };
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

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = isCheckbox(evt.target);
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
    const { singleSelection, wrapFocus, selectedIndex } = this;

    const adapter = {
      getListItemCount: () => this.listItemCount,
      getFocusedElementIndex: () => -1,
      setAttributeForElementIndex: (index, attr, value) => {
        const { listItemAttributes } = this.state;
        if (!listItemAttributes[index]) {
          // listItemAttributes[index] = {};
          this.$set(this.state.listItemAttributes, `${index}`, {});
        }
        this.state.listItemAttributes[index][attr] = value;
      },
      addClassForElementIndex: (index, className) => {
        const { listItemClassNames } = this.state;
        if (!listItemClassNames[index]) {
          // listItemAttributes[index] = {};
          this.$set(this.state.listItemClassNames, `${index}`, []);
        }
        this.state.listItemAttributes[index].push(className);
      },
      removeClassForElementIndex: (index, className) => {
        const { listItemClassNames } = this.state;
        if (!listItemClassNames[index]) {
          return;
        }

        if (index >= 0) {
          listItemClassNames[index].splice(index, 1);
          this.$set(
            this.state.listItemClassNames,
            `${index}`,
            listItemClassNames,
          );
        }
      },
      focusItemAtIndex: index => {
        this.state.focusItemAtIndex = index;
      },
      getAttributeForElementIndex: () => null,
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const { listItemChildrenTabIndex } = this.state;
        listItemChildrenTabIndex[listItemIndex] = tabIndexValue;
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
    };

    this.foundation = new MDCListFoundation(adapter);

    this.foundation.init();

    this.foundation.setSingleSelection(singleSelection);

    if (
      singleSelection &&
      typeof selectedIndex === 'number' &&
      !isNaN(selectedIndex)
    ) {
      this.foundation.setSelectedIndex(selectedIndex);
    }

    this.foundation.setWrapFocus(wrapFocus);
    this.foundation.setVerticalOrientation(this[ARIA_ORIENTATION] === VERTICAL);

    this.layout();
  },
};

// ===
// Private functions
// ===

function isCheckbox(element) {
  return element.type === CHECKBOX_TYPE;
}
