import { closest, matches } from '@material/dom/ponyfill.js';
import { MDCListFoundation } from '@material/list/foundation.js';
import {
  // computed,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';

const { strings, cssClasses } = MDCListFoundation;

export default {
  name: 'mcw-list',

  props: {
    nonInteractive: { type: Boolean, default: false },
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    singleSelection: Boolean,
    wrapFocus: Boolean,
    textualList: Boolean,
    modelValue: { type: [String, Number, Array] },
    tag: { type: String, default: 'ul' },
    ariaOrientation: { type: String, default: 'vertical' },
    thumbnailList: Boolean,
    iconList: Boolean,
    videoList: Boolean,
    typeAhead: Boolean,
  },

  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-list': 1,
        'mdc-list--dense': props.dense,
        'mdc-list--avatar-list': props.avatarList,
        'mdc-list--two-line': props.twoLine,
        'mdc-list--non-interactive': props.nonInteractive,
        'mdc-list--textual-list': props.textualList,
        'mdc-list--icon-list': props.iconList,
        'mdc-list--thumbnail-list': props.thumbnailList,
        'mdc-list--video-list': props.videoList,
      },
      rootAttrs: { 'aria-orientation': props.ariaOrientation },
      listn: 0,
      listRoot: null,
    });

    const singleSelection = ref(props.singleSelection);
    // const selectedIndex = ref(props.modelValue);

    let foundation;
    let slotObserver;

    if (singleSelection.value) {
      uiState.rootAttrs.role = 'listbox';
    }
    const listItems = ref({});

    // keep a hash of child list items
    // so we can set classes and attributes
    const registerListItem = item => {
      listItems.value[item.itemId] = item;
    };

    provide('registerListItem', registerListItem);

    // const selIndex = computed({
    //   get() {
    //     return selectedIndex.value;
    //   },
    //   set(nv) {
    //     selectedIndex.value = nv;
    //     emit('update:modelValue', nv);
    //   },
    // });

    const setSingleSelection = isSingleSelectionList => {
      singleSelection.value = isSingleSelectionList;
      foundation.setSingleSelection(isSingleSelectionList);
    };

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
      const elements = Array.prototype.slice.call(
        uiState.listRoot.querySelectorAll(`.${cssClasses.LIST_ITEM_CLASS}`),
      );

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
    const getListItemIndex = event_ => {
      const myItemId = event_.target.dataset.myitemid;

      // if clicked on a list item then just search
      if (myItemId !== void 0) {
        const lei = listElements.value.findIndex(
          ({ dataset: { myitemid } }) => myitemid === myItemId,
        );

        return lei;
      }

      // if the click wasnt on a list item
      // search up the DOM

      const eventTarget = event_.target;
      const nearestParent = closest(
        eventTarget,
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
      foundation.setVerticalOrientation(props.ariaOrientation == 'vertical');

      // List items need to have at least tabindex=-1 to be focusable.
      for (const ele of Array.prototype.slice.call(
        uiState.listRoot.querySelectorAll('.mdc-list-item:not([tabindex])'),
      )) {
        ele.setAttribute('tabindex', -1);
      }

      // Child button/a elements are not tabbable until the list item is focused.
      for (const ele of Array.prototype.slice.call(
        uiState.listRoot.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS),
      ))
        ele.setAttribute('tabindex', -1);

      foundation.layout();
    };

    const initializeListType = () => {
      const checkboxListItems = uiState.listRoot.querySelectorAll(
        strings.ARIA_ROLE_CHECKBOX_SELECTOR,
      );

      const radioSelectedListItem = uiState.listRoot.querySelector(
        strings.ARIA_CHECKED_RADIO_SELECTOR,
      );

      if (checkboxListItems.length > 0) {
        const preselectedItems = uiState.listRoot.querySelectorAll(
          strings.ARIA_CHECKED_CHECKBOX_SELECTOR,
        );

        setSelectedIndex(
          Array.prototype.map.call(preselectedItems, listItem =>
            listElements.value.indexOf(listItem),
          ),
        );
      } else if (radioSelectedListItem) {
        setSelectedIndex(listElements.value.indexOf(radioSelectedListItem));
      }
    };

    const getPrimaryText = item => {
      const primaryText = item.querySelector(
        `.${cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS}`,
      );
      if (primaryText) {
        return primaryText.textContent || '';
      }

      const singleLineText = item.querySelector(
        `.${cssClasses.LIST_ITEM_TEXT_CLASS}`,
      );
      return (singleLineText && singleLineText.textContent) || '';
    };

    const setEnabled = (itemIndex, isEnabled) => {
      foundation.setEnabled(itemIndex, isEnabled);
    };

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
      const target = event_.target;

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
      foundation.handleClick(index, toggleCheckbox);
    };

    // set up the listeners and bind in the template with v-on
    const rootListeners = {
      click: event => handleClickEvent(event),
      focusin: event => {
        handleFocusInEvent(event);
      },
      focusout: event => {
        handleFocusOutEvent(event);
      },
      keydown: event => handleKeydownEvent(event),
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
        return toggleElement.checked;
      },

      isFocusInsideList: () => {
        const root = uiState.listRoot;
        return (
          root &&
          root !== document.activeElement &&
          root.contains(document.activeElement)
        );
      },

      isRootFocused: () => document.activeElement === uiState.listRoot,

      listItemAtIndexHasClass: (index, className) => {
        const listItem = getListItemByIndex(index);

        listItem?.classList.contains(className);
      },

      notifyAction: index => {
        emitCustomEvent(
          uiState.listRoot,
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

        const event = document.createEvent('Event');
        event.initEvent('update:modelValue', true, true);
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

    // watch(
    //   () => props.singleSelection,
    //   nv => foundation.setSingleSelection(nv),
    // );

    watch(
      () => props.modelValue,
      nv => {
        if (Array.isArray(nv)) {
          foundation.setSelectedIndex(nv);
        } else if (props.modelValue != nv) {
          foundation.setSelectedIndex(nv);
        }
      },
    );

    watch(
      () => props.wrapFocus,
      nv => foundation.setWrapFocus(nv),
    );

    watch(
      () => props.ariaOrientation,
      nv => foundation.setVerticalOrientation(nv === 'vertical'),
    );

    watch(
      () => props.typeAhead,
      nv => foundation.setHasTypeahead(nv),
    );

    onMounted(() => {
      updateListElements();
      foundation = new MDCListFoundation(adapter);
      foundation.init();

      // if a single selection list need to ensure the selected item has the selected or activated class
      if (
        singleSelection.value &&
        typeof props.modelValue === 'number' &&
        !isNaN(props.modelValue)
      ) {
        const index = props.modelValue;
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
            props.modelValue,
            'mdc-list-item--selected',
          );
        }
        adapter.setAttributeForElementIndex(index, 'tabindex', 0);
        foundation.setSingleSelection(true);
        foundation.setSelectedIndex(index);
      }

      layout();
      initializeListType();

      foundation.setWrapFocus(props.wrapFocus);
      foundation.setVerticalOrientation(props.ariaOrientation === 'vertical');

      if (props.typeAhead) {
        foundation.setHasTypeahead(props.typeAhead);
      }

      // the list content could change outside of this component
      // so use a mutation observer to trigger an update
      slotObserver = new MutationObserver((mutationList, observer) => {
        updateListElements();
      });
      slotObserver.observe(uiState.listRoot, {
        childList: true,
        // subtree: true,
      });
    });

    onBeforeUnmount(() => {
      slotObserver.disconnect();
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      listItems,
      listElements,
      rootListeners,
      layout,
      setEnabled,
      typeaheadMatchItem,
      typeaheadInProgress,
      // selIndex,
      getSelectedIndex,
      setSelectedIndex,
      getPrimaryText,
      setSingleSelection,
    };
  },
};
