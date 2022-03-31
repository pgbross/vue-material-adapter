import { closest, matches } from '@material/dom/ponyfill.js';
import {
  cssClasses,
  MDCListFoundation,
  strings,
} from '@material/list/index.js';
import {
  h,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';

const getPrimaryText = item => {
  const primaryText = item.querySelector(
    `.${cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS}`,
  );

  return primaryText?.textContent ?? '';
};

export default {
  name: 'mcw-list',

  props: {
    multiSelectable: Boolean,
    wrapFocus: Boolean,
    textualList: Boolean,
    modelValue: { type: [String, Number, Array] },
    typeAhead: Boolean,
    vertical: { typee: Boolean, default: () => true },
    role: { type: String },
  },

  setup(props, { emit, slots, expose }) {
    const uiState = reactive({
      classes: { 'mdc-list': true },
      listn: 0,

      rootAttrs: {
        'aria-orientation': props.vertical ? 'vertical' : 'horizontal',
      },
    });

    const listRoot = ref();

    if (props.multiSelectable) {
      uiState.rootAttrs['aria-multiselectable'] = 'true';
    }

    let foundation;
    let slotObserver;
    const isInteractive = props.role === 'listbox' || props.role === 'menu';

    const listItems = ref({});

    // keep a hash of child list items
    // so we can set classes and attributes
    const registerListItem = item => (listItems.value[item.itemId] = item);

    provide('registerListItem', registerListItem);
    provide('mcwList', { isInteractive });

    const setSingleSelection = isSingleSelectionList =>
      foundation.setSingleSelection(isSingleSelectionList);

    const setSelectedIndex = index => {
      foundation.setSelectedIndex(index);
    };

    const getSelectedIndex = () => foundation.getSelectedIndex();

    // keep list of child elements that will have their item id in a data attribute
    // so we can find the listItem from events or by index.

    const listElements = ref([]);

    // all the child list elements
    // may be refreshed if the list items are rerendered for example
    const updateListElements = () => {
      const elements = [
        ...listRoot.value.querySelectorAll(`.${cssClasses.LIST_ITEM_CLASS}`),
      ];

      listElements.value = elements;
    };

    // find the list item by index.
    // The list elements are in DOM order, so find it by index,
    // then use its item id to lookup in the list item hash
    const getListItemByIndex = index => {
      const element = listElements.value[index];
      if (element) {
        const myItemId = element.dataset.myitemid;
        return listItems.value[myItemId];
      }
    };

    // find the index of a list item from the event target
    const getListItemIndex = eventOrElement => {
      const { target } = eventOrElement;

      if (target) {
        const myItemId = target.dataset.myitemid;

        // if clicked on a list item then just search
        if (myItemId !== undefined) {
          const listElementIndex = listElements.value.findIndex(
            ({ dataset: { myitemid } }) => myitemid === myItemId,
          );

          return listElementIndex;
        }
      }

      // if the click wasnt on a list item
      // search up the DOM

      const element = target ?? eventOrElement;
      const nearestParent = closest(
        element,
        `.${cssClasses.LIST_ITEM_CLASS}, .${cssClasses.ROOT}`,
      );

      // Get the index of the element if it is a list item.
      if (
        nearestParent &&
        matches(nearestParent, `.${cssClasses.LIST_ITEM_CLASS}`)
      ) {
        return listElements.value.indexOf(nearestParent);
      }

      return -1;
    };

    const layout = () => {
      foundation.setVerticalOrientation(props.vertical);

      // List items need to have at least tabindex=-1 to be focusable.
      for (const itemElements of listRoot.value.querySelectorAll(
        '.mdc-list-item:not([tabindex])',
      )) {
        itemElements.setAttribute('tabindex', -1);
      }

      // Child button/a elements are not tabbable until the list item is focused.
      for (const focusableChildElements of listRoot.value.querySelectorAll(
        strings.FOCUSABLE_CHILD_ELEMENTS,
      )) {
        focusableChildElements.setAttribute('tabindex', -1);
      }

      foundation.setUseSelectedAttribute(true);
      foundation.layout();
    };

    const initializeListType = () => {
      if (isInteractive) {
        const selection = [
          ...listRoot.value.querySelectorAll(strings.SELECTED_ITEM_SELECTOR),
        ].map(listItem => listElements.indexOf(listItem));

        if (matches(listRoot.value, strings.ARIA_MULTI_SELECTABLE_SELECTOR)) {
          foundation.setSelectedIndex(selection);
        } else if (selection.length > 0) {
          foundation.setSelectedIndex(selection[0]);
        }
        return;
      }

      const checkboxListItems = listRoot.value.querySelectorAll(
        strings.ARIA_ROLE_CHECKBOX_SELECTOR,
      );

      const radioSelectedListItem = listRoot.value.querySelector(
        strings.ARIA_CHECKED_RADIO_SELECTOR,
      );

      if (checkboxListItems.length > 0) {
        const preselectedItems = listRoot.value.querySelectorAll(
          strings.ARIA_CHECKED_CHECKBOX_SELECTOR,
        );

        foundation.setSelectedIndex(
          Array.prototype.map.call(preselectedItems, listItem =>
            listElements.value.indexOf(listItem),
          ),
        );
      } else if (radioSelectedListItem) {
        foundation.setSelectedIndex(
          listElements.value.indexOf(radioSelectedListItem),
        );
      }
    };

    const setEnabled = (itemIndex, isEnabled) =>
      foundation.setEnabled(itemIndex, isEnabled);

    const typeaheadMatchItem = (nextChar, startingIndex) => {
      return foundation.typeaheadMatchItem(
        nextChar,
        startingIndex,
        /** skipFocus */ true,
      );
    };

    const handleFocusInEvent = event_ => {
      const index = getListItemIndex(event_);
      foundation.handleFocusIn(event_, index);
    };

    const handleFocusOutEvent = event_ => {
      const index = getListItemIndex(event_);
      foundation.handleFocusOut(event_, index);
    };

    const handleKeydownEvent = event_ => {
      const index = getListItemIndex(event_);
      const target = event_.target;
      foundation.handleKeydown(
        event_,
        target.classList.contains(cssClasses.LIST_ITEM_CLASS),
        index,
      );
    };

    const handleClickEvent = event_ => {
      const index = getListItemIndex(event_);

      const toggleCheckbox = !matches(
        event_.target,
        strings.CHECKBOX_RADIO_SELECTOR,
      );
      foundation.handleClick(index, toggleCheckbox);
    };

    const typeaheadInProgress = () => foundation.isTypeaheadInProgress();

    const adapter = {
      addClassForElementIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem?.classList.add(className);
      },

      focusItemAtIndex: index => {
        const element = listElements.value[index];
        if (element) {
          element.focus();
        }
      },

      getAttributeForElementIndex: (index, attribute) => {
        const listItem = getListItemByIndex(index);

        return listItem?.getAttribute(attribute);
      },

      getFocusedElementIndex: () =>
        listElements.value.indexOf(document.activeElement),

      getListItemCount: () => listElements.value.length,

      getPrimaryTextAtIndex: index => getPrimaryText(listElements.value[index]),

      hasCheckboxAtIndex: index => {
        const listItem = listElements.value[index];
        return listItem && !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },

      hasRadioAtIndex: index => {
        const listItem = listElements.value[index];
        return listItem && !!listItem.querySelector(strings.RADIO_SELECTOR);
      },

      isCheckboxCheckedAtIndex: index => {
        const listItem = listElements.value[index];
        const toggleElement = listItem.querySelector(strings.CHECKBOX_SELECTOR);
        return toggleElement?.checked;
      },

      isFocusInsideList: () => {
        const root = listRoot.value;
        return (
          root &&
          root !== document.activeElement &&
          root.contains(document.activeElement)
        );
      },

      isRootFocused: () => document.activeElement === listRoot.value,

      listItemAtIndexHasClass: (index, className) => {
        const listItem = getListItemByIndex(index);

        listItem?.classList.contains(className);
      },

      notifyAction: index => {
        emitCustomEvent(
          listRoot.value,
          strings.ACTION_EVENT,
          { index },
          /** shouldBubble */ true,
        );

        if (Array.isArray(props.modelValue)) {
          emit('update:modelValue', foundation.getSelectedIndex());
        } else {
          emit('update:modelValue', index);
        }
      },

      notifySelectionChange: changedIndices => {
        emit(
          strings.SELECTION_CHANGE_EVENT.toLowerCase(),
          { changedIndices },
          /** shouldBubble */ true,
        );
      },

      removeClassForElementIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem?.classList.remove(className);
      },

      setAttributeForElementIndex: (index, attribute, value) => {
        const listItem = getListItemByIndex(index);
        listItem?.setAttribute(attribute, value);
      },

      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = listElements.value[index];
        const toggleElement = listItem.querySelector(
          strings.CHECKBOX_RADIO_SELECTOR,
        );
        toggleElement && (toggleElement.checked = isChecked);

        const event = new CustomEvent('update:modelValue', [true, false]);
        toggleElement?.dispatchEvent(event);
      },

      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = listElements.value[listItemIndex];
        const listItemChildren = Array.prototype.slice.call(
          element.querySelectorAll(strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),
        );
        for (const element_ of listItemChildren) {
          const listItem =
            listItems.value[element_.dataset.myitemid] ?? element_;

          listItem.setAttribute('tabindex', tabIndexValue);
        }
      },
    };

    watch(
      () => props.modelValue,
      nv => {
        if (Array.isArray(nv) || props.modelValue != nv) {
          foundation.setSelectedIndex(nv);
        }
      },
    );

    watch(
      () => props.wrapFocus,
      nv => foundation.setWrapFocus(nv),
    );

    watch(
      () => props.vertical,
      nv => foundation.setVerticalOrientation(nv),
    );

    watch(
      () => props.typeAhead,
      nv => foundation.setHasTypeahead(nv),
    );

    const initialFocusIndex = () => {
      const selectedIndex = foundation.getSelectedIndex();

      if (Array.isArray(selectedIndex) && selectedIndex.length > 0) {
        return selectedIndex[0];
      }
      if (typeof selectedIndex === 'number' && selectedIndex !== -1) {
        return selectedIndex;
      }
      const element = listRoot.value.querySelector(
        `.mdc-list-item:not(.mdc-list-item--disabled)`,
      );
      if (element === null) {
        return -1;
      }
      return getListItemIndex(element);
    };

    const ensureFocusable = () => {
      if (
        isInteractive &&
        !listRoot.value.querySelector(`.mdc-list-item[tabindex="0"]`)
      ) {
        const index = initialFocusIndex();
        if (index !== -1) {
          listElements.value[index].tabIndex = 0;
        }
      }
    };

    onMounted(() => {
      updateListElements();
      foundation = new MDCListFoundation(adapter);
      foundation.init();

      const { modelValue, wrapFocus, typeAhead, vertical, multiSelectable } =
        props;
      // if a single selection list need to ensure the selected item has the selected or activated class
      if (
        multiSelectable != true &&
        typeof modelValue === 'number' &&
        !Number.isNaN(modelValue)
      ) {
        const index = modelValue;
        const hasSelectedClass = adapter.listItemAtIndexHasClass(
          index,
          cssClasses.LIST_ITEM_SELECTED_CLASS,
        );
        const hasActivatedClass = adapter.listItemAtIndexHasClass(
          index,
          cssClasses.LIST_ITEM_ACTIVATED_CLASS,
        );
        if (!(hasSelectedClass || hasActivatedClass)) {
          adapter.addClassForElementIndex(
            modelValue,
            'mdc-list-item--selected',
          );
        }
        adapter.setAttributeForElementIndex(index, 'tabindex', 0);
        foundation.setSingleSelection(true);
        foundation.setSelectedIndex(index);
      }

      layout();
      initializeListType();
      ensureFocusable();

      foundation.setWrapFocus(wrapFocus);
      foundation.setVerticalOrientation(vertical);

      if (typeAhead) {
        foundation.setHasTypeahead(typeAhead);
      }

      // the list content could change outside of this component
      // so use a mutation observer to trigger an update
      slotObserver = new MutationObserver(() => {
        updateListElements();
      });
      slotObserver.observe(listRoot.value, {
        childList: true,
        // subtree: true,
      });
    });

    onBeforeUnmount(() => {
      slotObserver.disconnect();
      foundation.destroy();
    });

    expose({
      setSingleSelection,
      setSelectedIndex,
      getSelectedIndex,
      setEnabled,
      typeaheadMatchItem,
      typeaheadInProgress,
    });

    return () => {
      return h(
        'ul',
        {
          ref: listRoot,
          class: uiState.classes,
          onClick: handleClickEvent,
          onKeydown: handleKeydownEvent,
          onFocusin: handleFocusInEvent,
          onFocusout: handleFocusOutEvent,
          role: 'role',
          ...uiState.rootAttrs,
        },
        slots.default(),
      );
    };
  },
};
