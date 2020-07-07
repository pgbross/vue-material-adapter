import { closest, matches } from '@material/dom/ponyfill';
import { MDCListFoundation } from '@material/list/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from '@vue/composition-api';
import { emitCustomEvent } from '~/base/index.js';

const ARIA_ORIENTATION = 'aria-orientation';
const VERTICAL = 'vertical';

const { strings, cssClasses } = MDCListFoundation;

export default {
  name: 'mcw-list',
  model: {
    prop: 'selectedIndex',
    event: 'change',
  },
  props: {
    nonInteractive: { type: Boolean, default: false },
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    singleSelection: Boolean,
    wrapFocus: Boolean,
    textualList: Boolean,
    selectedIndex: { type: [String, Number, Array] },
    tag: { type: String, default: 'ul' },
    [ARIA_ORIENTATION]: { type: String, default: VERTICAL },
    thumbnailList: Boolean,
    iconList: Boolean,
    videoList: Boolean,
    typeAhead: Boolean,
  },

  setup(props, { emit }) {
    const listRoot = ref(null);
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
      selectedIndex: props.selectedIndex,
    });

    let foundation;
    let slotObserver;

    if (props.singleSelection) {
      uiState.rootAttrs.role = 'listbox';
    }

    const selIndex = computed({
      get() {
        return uiState.selectedIndex;
      },
      set(nv) {
        uiState.selectedIndex = nv;
        emit('change', nv);
      },
    });

    const listElements = computed(() => {
      // eslint-disable-next-line no-unused-vars
      const xx = uiState.listn; // for dependency

      return [].slice.call(
        listRoot.value.querySelectorAll(`.${cssClasses.LIST_ITEM_CLASS}`),
      );
    });

    const getListItemIndex = evt => {
      const eventTarget = evt.target;
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
      foundation.setVerticalOrientation(props.ariaOrientation == VERTICAL);

      // List items need to have at least tabindex=-1 to be focusable.
      [].slice
        .call(listRoot.value.querySelectorAll('.mdc-list-item:not([tabindex])'))
        .forEach(ele => {
          ele.setAttribute('tabindex', -1);
        });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice
        .call(listRoot.value.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS))
        .forEach(ele => ele.setAttribute('tabindex', -1));

      foundation.layout();
    };

    const initializeListType = () => {
      const checkboxListItems = listRoot.value.querySelectorAll(
        strings.ARIA_ROLE_CHECKBOX_SELECTOR,
      );

      const radioSelectedListItem = listRoot.value.querySelector(
        strings.ARIA_CHECKED_RADIO_SELECTOR,
      );

      if (checkboxListItems.length) {
        const preselectedItems = listRoot.value.querySelectorAll(
          strings.ARIA_CHECKED_CHECKBOX_SELECTOR,
        );

        selIndex.value = [].map.call(preselectedItems, listItem =>
          listElements.value.indexOf(listItem),
        );
      } else if (radioSelectedListItem) {
        selIndex.value = listElements.value.indexOf(radioSelectedListItem);
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

    const handleFocusInEvent = evt => {
      const index = getListItemIndex(evt);
      foundation.handleFocusIn(evt, index);
    };

    const handleFocusOutEvent = evt => {
      const index = getListItemIndex(evt);
      foundation.handleFocusOut(evt, index);
    };

    const handleKeydownEvent = evt => {
      const index = getListItemIndex(evt);
      const target = evt.target;
      foundation.handleKeydown(
        evt,
        target.classList.contains(cssClasses.LIST_ITEM_CLASS),
        index,
      );
    };

    const handleClickEvent = evt => {
      const index = getListItemIndex(evt);
      const target = evt.target;

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
      foundation.handleClick(index, toggleCheckbox);
    };

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

    const adapter = {
      addClassForElementIndex: (index, className) => {
        const element = listElements.value[index];
        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: index => {
        const element = listElements.value[index];
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: (index, attr) =>
        listElements.value[index].getAttribute(attr),

      getFocusedElementIndex: () =>
        listElements.value.indexOf(document.activeElement),

      getListItemCount: () => listElements.value.length,

      getPrimaryTextAtIndex: index => getPrimaryText(listElements.value[index]),

      hasCheckboxAtIndex: index => {
        const listItem = listElements.value[index];
        return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },

      hasRadioAtIndex: index => {
        const listItem = listElements.value[index];
        return !!listItem.querySelector(strings.RADIO_SELECTOR);
      },

      isCheckboxCheckedAtIndex: index => {
        const listItem = listElements.value[index];
        const toggleEl = listItem.querySelector(strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },

      isFocusInsideList: () => {
        return listRoot.value.contains(document.activeElement);
      },

      isRootFocused: () => document.activeElement === listRoot.value,

      listItemAtIndexHasClass: (index, className) => {
        listElements.value[index].classList.contains(className);
      },

      notifyAction: index => {
        emitCustomEvent(
          listRoot.value,
          strings.ACTION_EVENT,
          { index },
          /** shouldBubble */ true,
        );

        if (Array.isArray(props.selectedIndex)) {
          emit('change', foundation.getSelectedIndex());
        } else {
          emit('change', index);
        }
      },

      removeClassForElementIndex: (index, className) => {
        const element = listElements.value[index];
        if (element) {
          element.classList.remove(className);
        }
      },

      setAttributeForElementIndex: (index, attr, value) => {
        const element = listElements.value[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },

      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = listElements.value[index];
        const toggleEl = listItem.querySelector(
          strings.CHECKBOX_RADIO_SELECTOR,
        );
        toggleEl && (toggleEl.checked = isChecked);

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl?.dispatchEvent(event);
      },

      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = listElements.value[listItemIndex];
        const listItemChildren = [].slice.call(
          element.querySelectorAll(strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),
        );
        listItemChildren.forEach(el =>
          el.setAttribute('tabindex', tabIndexValue),
        );
      },
    };

    watch(
      () => props.singleSelection,
      nv => foundation.setSingleSelection(nv),
    );

    watch(
      () => props.selectedIndex,
      nv => {
        if (Array.isArray(nv)) {
          foundation.setSelectedIndex(nv);
        } else if (props.selectedIndex != nv) {
          uiState.selectedIndex = nv;
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
      nv => foundation.setVerticalOrientation(nv === VERTICAL),
    );

    watch(
      () => props.typeAhead,
      nv => foundation.setHasTypeahead(nv),
    );

    onMounted(() => {
      foundation = new MDCListFoundation(adapter);
      foundation.init();

      // if a single selection list need to ensure the selected item has the selected or activated class
      if (
        props.singleSelection &&
        typeof props.selectedIndex === 'number' &&
        !isNaN(props.selectedIndex)
      ) {
        const i = props.selectedIndex;
        const hasSelectedClass = adapter.listItemAtIndexHasClass(
          i,
          cssClasses.LIST_ITEM_SELECTED_CLASS,
        );
        const hasActivatedClass = adapter.listItemAtIndexHasClass(
          i,
          cssClasses.LIST_ITEM_ACTIVATED_CLASS,
        );
        if (!(hasSelectedClass || hasActivatedClass)) {
          adapter.addClassForElementIndex(
            props.selectedIndex,
            'mdc-list-item--selected',
          );
        }
        adapter.setAttributeForElementIndex(i, 'tabindex', 0);
        foundation.setSingleSelection(true);
        foundation.setSelectedIndex(i);
      }

      layout();
      initializeListType();

      foundation.setWrapFocus(props.wrapFocus);
      foundation.setVerticalOrientation(props[ARIA_ORIENTATION] === VERTICAL);

      if (props.typeAhead) {
        foundation.setHasTypeahead(props.typeAhead);
      }

      // the list content could change outside of this component
      // so use a mutation observer to trigger an update by
      // incrementing the dependency variable "listn" referenced
      // in the computed that selects the list elements
      slotObserver = new MutationObserver((mutationList, observer) => {
        uiState.listn++;
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

    return {
      ...toRefs(uiState),
      listRoot,
      listElements,
      rootListeners,
      layout,
      setEnabled,
      typeaheadMatchItem,
    };
  },
};
