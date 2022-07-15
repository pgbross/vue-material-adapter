import { closest } from '@material/dom/ponyfill.js';
import { MDCMenuFoundation } from '@material/menu/foundation.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';

const { cssClasses, strings } = MDCMenuFoundation;

export default {
  name: 'mcw-menu',

  props: {
    modelValue: [Boolean, Object],
    quickOpen: Boolean,
    anchorCorner: [String, Number],
    anchorMargin: Object,
    fixed: Boolean,
    absolutePosition: Array,
    typeAhead: Boolean,
    singleSelection: { type: Boolean, default: () => true },
    defaultFocusState: { type: String, default: () => 'LIST_ROOT' },
  },

  setup(props, { emit }) {
    const uiState = reactive({
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true,
      menuSurface: undefined,
      list: undefined,
    });

    let foundation;

    const getListItemByIndex = index => {
      return uiState.list?.getListItemByIndex(index);
    };

    const getListElementByIndex = index =>
      uiState.list?.getListElementByIndex(index);

    const surfaceOpen = computed({
      get() {
        return uiState.menuOpen;
      },
      set(value) {
        uiState.menuOpen = value;
      },
    });

    const wrapFocus = computed({
      get() {
        return uiState.myWrapFocus;
      },
      set(nv) {
        uiState.myWrapFocus = nv;
      },
    });

    const layout = () => uiState.list?.layout();

    const handleAction = index => {
      foundation.handleItemAction(getListElementByIndex(index));
    };

    const handleKeydown = event_ => foundation.handleKeydown(event_);

    const handleMenuSurfaceOpened = () => {
      foundation.handleMenuSurfaceOpened();
      emit('mdcmenusurface:opened');
    };

    const handleMenuSurfaceClosed = () => {
      emit('mdcmenusurface:closed');
    };

    const onChange = item => {
      uiState.menuOpen = item;
      emit('update:modelValue', item);
    };

    const setAnchorCorner = corner => {
      uiState.menuSurface.setAnchorCorner(corner);
    };
    const setAnchorElement = element => {
      uiState.menuSurface.setMenuSurfaceAnchorElement(element);
    };
    const setSelectedIndex = index => uiState.list?.setSelectedIndex(index);

    const getSelectedIndex = () => uiState.list?.getSelectedIndex() ?? -1;

    const setAnchorMargin = margin => {
      uiState.menuSurface.setAnchorMargin(margin);
    };

    const getPrimaryTextAtIndex = index => {
      const item = getListElementByIndex(index);
      if (item && uiState.list) {
        return uiState.list.getPrimaryText(item) || '';
      }
      return '';
    };

    const setFixedPosition = isFixed => {
      uiState.menuSurface.setFixedPosition(isFixed);
    };

    const setIsHoisted = isHoisted => {
      uiState.menuSurface.setIsHoisted(isHoisted);
    };

    const setAbsolutePosition = (x, y) => {
      uiState.menuSurface.setAbsolutePosition(x, y);
    };

    const typeaheadInProgress = () => uiState.list.typeAheadInProgress ?? false;

    const typeaheadMatchItem = (nextChar, startingIndex) => {
      if (uiState.list) {
        return uiState.list.typeaheadMatchItem(nextChar, startingIndex);
      }
      return -1;
    };

    const setSingleSelection = singleSelection =>
      uiState.list?.setSingleSelection(singleSelection);

    const focusItemAtIndex = index => getListItemByIndex(index).focus();
    const getMenuItemCount = () => uiState.list.getListItemCount();

    const adapter = {
      addClassToElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.addClass(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.removeClass(className);
      },
      addAttributeToElementAtIndex: (index, attribute, value) => {
        const listItem = getListItemByIndex(index);
        listItem.setAttribute(attribute, value);
      },
      removeAttributeFromElementAtIndex: (index, attribute) => {
        const listItem = getListItemByIndex(index);
        listItem.removeAttribute(attribute);
      },

      getAttributeFromElementAtIndex: (index, attribute) => {
        const listItem = getListItemByIndex(index);

        return listItem.getAttribute(attribute);
      },

      elementContainsClass: (element, className) =>
        element.classList.contains(className),

      closeSurface: skipRestoreFocus => {
        uiState.menuSurface.close(skipRestoreFocus);
        emit('update:modelValue', false);
      },

      getElementIndex: element => {
        return uiState.list?.getListElementIndex(element);
      },

      notifySelected: eventData => {
        const item = getListElementByIndex(eventData.index);

        const rootElement = uiState.menuSurface.$el;

        emitCustomEvent(rootElement, strings.SELECTED_EVENT, {
          index: eventData.index,
          item,
        });

        emit('select', {
          index: eventData.index,
          item,
        });
      },

      getMenuItemCount,

      focusItemAtIndex,
      focusListRoot: () => {
        uiState.list.focus();
      },

      isSelectableItemAtIndex: index => {
        const item = getListElementByIndex(index);

        return !!closest(item, `.${cssClasses.MENU_SELECTION_GROUP}`);
      },

      getSelectedSiblingOfItemAtIndex: index => {
        const item = getListElementByIndex(index);
        const selectionGroupElement = closest(
          item,
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        );
        const selectedItemElement = selectionGroupElement.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`,
        );

        return selectedItemElement
          ? uiState.list.getListElementIndex(selectedItemElement)
          : -1;
      },
    };

    watch(
      () => props.modelValue,
      nv => {
        uiState.menuOpen = nv;
      },
    );

    onMounted(() => {
      uiState.menuOpen = props.modelValue;

      foundation = new MDCMenuFoundation(adapter);
      foundation.init();

      if (props.fixed) {
        uiState.menuSurface.setFixedPosition(props.fixed);
      }

      if (props.absolutePosition) {
        const [x, y] = props.absolutePosition;
        uiState.menuSurface.setAbsolutePosition(x, y);
      }

      foundation.setDefaultFocusState(props.defaultFocusState);
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    const getMenuItemValues = attribute => {
      const le = uiState.list?.listElements;
      const returnValue = le.map(
        element => element.getAttribute(attribute) || '',
      );

      return returnValue;
    };

    const getMenuItemTextAtIndex = index =>
      uiState.list?.listElements[index]?.textContent;

    return {
      ...toRefs(uiState),
      handleAction,
      handleKeydown,
      onChange,
      handleMenuSurfaceOpened,
      handleMenuSurfaceClosed,
      setAbsolutePosition,
      setIsHoisted,
      setFixedPosition,
      setAnchorMargin,
      setAnchorElement,
      setAnchorCorner,
      getSelectedIndex,
      setSelectedIndex,
      wrapFocus,
      surfaceOpen,
      layout,
      getPrimaryTextAtIndex,
      typeaheadInProgress,
      typeaheadMatchItem,
      setSingleSelection,
      focusItemAtIndex,
      getMenuItemCount,
      getMenuItemValues,
      getMenuItemTextAtIndex,
    };
  },
};
