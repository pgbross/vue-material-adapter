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
const DefaultFocusState_ = {
  NONE: 0,
  LIST_ROOT: 1,
  FIRST_ITEM: 2,
  LAST_ITEM: 3,
};

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
    singleSelection: Boolean,
    defaultFocusState: { type: String, default: () => 'LIST_ROOT' },
  },

  setup(props, { emit }) {
    const uiState = reactive({
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true,
      menuSurface: null,
      list: null,
    });

    let foundation;
    let rootElement;

    const items = computed(() => uiState.list?.listElements ?? []);
    const listItems = computed(() => uiState.list.listItems ?? []);

    const getListItemByIndex = index => {
      const element = items.value[index];
      const myItemId = element.dataset.myitemid;
      return listItems.value[myItemId];
    };

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
      foundation.handleItemAction(items.value[index]);
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

    const setDefaultFocusState = focusState => {
      if (typeof focusState == 'string') {
        focusState = DefaultFocusState_[focusState];
      }
      foundation.setDefaultFocusState(focusState);
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
    const getOptionByIndex = index => {
      const itms = items.value;

      if (index < itms.length) {
        return itms[index];
      }
      return null;
    };

    const getPrimaryTextAtIndex = index => {
      const item = getOptionByIndex(index);
      if (item && uiState.list) {
        return uiState.list.getPrimaryText(item) || '';
      }
      return '';
    };

    const setFixedPosition = isFixed => {
      uiState.menuSurface.setFixedPosition(isFixed);
    };

    const hoistMenuToBody = () => {
      uiState.menuSurface.hoistMenuToBody();
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

    const adapter = {
      addClassToElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const listItem = getListItemByIndex(index);
        listItem.classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attribute, value) => {
        const listItem = getListItemByIndex(index);
        listItem.setAttribute(attribute, value);
      },
      removeAttributeFromElementAtIndex: (index, attribute) => {
        const listItem = getListItemByIndex(index);
        listItem.removeAttribute(attribute);
      },
      elementContainsClass: (element, className) =>
        element.classList.contains(className),

      closeSurface: skipRestoreFocus => {
        uiState.menuSurface.close(skipRestoreFocus);
        emit('update:modelValue', false);
      },

      getElementIndex: element => {
        return items.value.findIndex(element_ => element_ == element);
      },

      notifySelected: eventData => {
        emitCustomEvent(rootElement, strings.SELECTED_EVENT, {
          index: eventData.index,
          item: items.value[eventData.index],
        });

        emit('select', {
          index: eventData.index,
          item: items.value[eventData.index],
        });
      },

      getMenuItemCount: () => items.value.length,

      focusItemAtIndex: index => items.value[index].focus(),
      focusListRoot: () => {
        uiState.menuSurface.$el.querySelector(strings.LIST_SELECTOR).focus();
      },

      isSelectableItemAtIndex: index =>
        !!closest(items.value[index], `.${cssClasses.MENU_SELECTION_GROUP}`),

      getSelectedSiblingOfItemAtIndex: index => {
        const selectionGroupElement = closest(
          items.value[index],
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        );
        const selectedItemEl = selectionGroupElement.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`,
        );
        return selectedItemEl
          ? items.value.findIndex(element => element == selectedItemEl)
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
      rootElement = uiState.menuSurface.$el;
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
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      handleAction,
      handleKeydown,
      onChange,
      handleMenuSurfaceOpened,
      handleMenuSurfaceClosed,
      setAbsolutePosition,
      setIsHoisted,
      hoistMenuToBody,
      setFixedPosition,
      getOptionByIndex,
      setAnchorMargin,
      setAnchorElement,
      setAnchorCorner,
      getSelectedIndex,
      setSelectedIndex,
      setDefaultFocusState,
      wrapFocus,
      surfaceOpen,
      layout,
      getPrimaryTextAtIndex,
      items,
      // listItems,
      typeaheadInProgress,
      typeaheadMatchItem,
      setSingleSelection,
    };
  },
};
