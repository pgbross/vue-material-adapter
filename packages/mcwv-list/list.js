import mcwListFoundation from '@material/list/foundation';
import { emitCustomEvent } from '@mcwv/base';

const ARIA_ORIENTATION = 'aria-orientation';
const VERTICAL = 'vertical';
const CHECKBOX_TYPE = 'checkbox';

const {
  strings: {
    CHECKBOX_SELECTOR,
    RADIO_SELECTOR,
    CHECKBOX_RADIO_SELECTOR,
    ACTION_EVENT,
    ENABLED_ITEMS_SELECTOR,
    FOCUSABLE_CHILD_ELEMENTS,
  },
  cssClasses: {
    LIST_ITEM_CLASS,
    ROOT,
    LIST_ITEM_ACTIVATED_CLASS,
    LIST_ITEM_SELECTED_CLASS,
  },
} = mcwListFoundation;

export const mcwList = {
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
    return {
      focusListItemAtIndex: -1,
      followHrefAtIndex: -1,
      toggleCheckboxAtIndex: -1,
      // listItemAttributes: {index: {attr: value}}
      listItemAttributes: {},
      // listItemClassNames: {index: Array<String>}
      listItemClassNames: {},
      // listItemChildrenTabIndex: {index: Number}
      listItemChildrenTabIndex: {},
    };
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
      return [].slice.call(this.$el.querySelectorAll(ENABLED_ITEMS_SELECTOR));
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
        .call(this.$el.querySelectorAll(FOCUSABLE_CHILD_ELEMENTS))
        .forEach(ele => ele.setAttribute('tabindex', -1));
    },

    initializeListType() {
      // Automatically set single selection if selected/activated classes are present.
      const preselectedElement = this.$el.querySelector(
        `.${LIST_ITEM_ACTIVATED_CLASS}, .${LIST_ITEM_SELECTED_CLASS}`,
      );

      if (preselectedElement) {
        if (preselectedElement.classList.contains(LIST_ITEM_ACTIVATED_CLASS)) {
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
        !eventTarget.classList.contains(LIST_ITEM_CLASS) &&
        !eventTarget.classList.contains(ROOT)
      ) {
        eventTarget = eventTarget.parentElement;
      }

      // Get the index of the element if it is a list item.
      if (eventTarget.classList.contains(LIST_ITEM_CLASS)) {
        index = this.listElements.indexOf(eventTarget);
      }

      return index;
    },
  },
  mounted() {
    const { wrapFocus } = this;

    const adapter = {
      getListItemCount: () => this.listItemCount,
      getFocusedElementIndex: () => -1,
      setAttributeForElementIndex: (index, attr, value) => {
        const { listItemAttributes } = this;
        if (!listItemAttributes[index]) {
          this.$set(this.listItemAttributes, `${index}`, {});
        }
        this.$set(this.listItemAttributes[index], attr, value);
      },
      addClassForElementIndex: (index, className) => {
        const { listItemClassNames } = this;
        if (!listItemClassNames[index]) {
          this.$set(this.listItemClassNames, `${index}`, []);
        }
        listItemClassNames[index].push(className);
      },
      removeClassForElementIndex: (index, className) => {
        const { listItemClassNames } = this;
        if (!listItemClassNames[index]) {
          return;
        }
        const i = listItemClassNames[index].indexOf(className);
        if (i >= 0) {
          listItemClassNames[index].splice(i, 1);
        }
      },
      focusItemAtIndex: index => {
        this.focusItemAtIndex = index;
      },
      getAttributeForElementIndex: () => null,
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        // const { listItemChildrenTabIndex } = this;
        this.$set(
          this.listItemChildrenTabIndex,
          `${listItemIndex}`,
          tabIndexValue,
        );
        // listItemChildrenTabIndex[listItemIndex] = tabIndexValue;
      },
      hasCheckboxAtIndex: index => {
        const listItems = this.$refs.listItem || [];
        const listItem = listItems[index];

        return listItem && !!listItem.$el.querySelector(CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: index => {
        const listItems = this.$refs.listItem || [];
        const listItem = listItems[index];
        return listItem && !!listItem.$el.querySelector(RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: index => {
        const listItems = this.$refs.listItem || [];
        const listItem = listItems[index];

        const toggleEl = listItem.$el.querySelector(CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItems = this.$refs.listItem || [];
        const listItem = listItems[index];

        const toggleEl = listItem.$el.querySelector(CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
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
      isFocusInsideList: () => {
        return this.$el.contains(document.activeElement);
      },
    };

    this.foundation = new mcwListFoundation(adapter);

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
    const {
      tag,
      ariaOrientation,
      $scopedSlots: slots,
      focusListItemAtIndex,
      followHrefAtIndex,
      toggleCheckboxAtIndex,
      listItemAttributes,
      listItemClassNames,
      listItemChildrenTabIndex,
    } = this;

    const mdt = (slots.default && slots.default()) || [];
    this.listItemCount = 0;

    const nodes = mdt.map(vn => {
      if (
        !vn.tag ||
        !vn.componentOptions ||
        vn.componentOptions.tag !== 'mdc-list-item'
      ) {
        return vn;
      }

      const index = this.listItemCount++;

      const data = vn.data || {};

      return createElement(
        'mdc-list-item',
        {
          props: {
            ...data.props,
            classNamesFromList: listItemClassNames[index],
            shouldToggleCheckbox: toggleCheckboxAtIndex === index,
            shouldFollowHref: followHrefAtIndex === index,
            shouldFocus: focusListItemAtIndex === index,
            childrenTabIndex: listItemChildrenTabIndex[index],
            nonInteractive: this.nonInteractive,
          },
          attrs: {
            ...data.attrs,
            attributesFromList: listItemAttributes[index],
          },
          on: {
            click: evt => this.handleClickEvent(evt),
            keydown: evt => this.handleKeydownEvent(evt, index),
            focusin: evt => this.handleFocusInEvent(evt, index),
            focusout: evt => this.handleFocusOutEvent(evt, index),
          },
          ref: 'listItem',
          refInFor: true,
        },
        vn.componentOptions.children,
      );
    });

    return createElement(
      tag,
      {
        class: this.classes,
        attrs: { 'aria-orientation': ariaOrientation },
      },
      nodes,
    );
  },
};

// ===
// Private functions
// ===

function isCheckbox(element) {
  return element.type === CHECKBOX_TYPE;
}
