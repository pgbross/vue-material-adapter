import { closest } from '@material/dom/ponyfill';
import { MDCMenuFoundation } from '@material/menu/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from 'vue';
import { emitCustomEvent } from '~/base/index.js';

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
    let rootEl;

    const items = computed(() => uiState.list.listElements ?? []);

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

    const selectedIndex = computed(() => uiState.list?.selIndex.value);

    const layout = () => uiState.list?.layout();

    const handleAction = index => {
      foundation.handleItemAction(items.value[index]);
    };

    const handleKeydown = evt => foundation.handleKeydown(evt);

    const handleMenuSurfaceOpened = () => {
      foundation.handleMenuSurfaceOpened();
      emit('mdc-menu-surface-opened');
    };

    const handleMenuSurfaceClosed = () => {
      emit('mdc-menu-surface-closed');
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
    const setSelectedIndex = index =>
      uiState.list && (uiState.list.selIndex.value = index);

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

    const adapter = {
      addClassToElementAtIndex: (index, className) => {
        const item = items.value[index];
        item.classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const item = items.value[index];
        item.classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const item = items.value[index];
        item.setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const item = items.value[index];
        item.removeAttribute(attr);
      },
      elementContainsClass: (element, className) =>
        element.classList.contains(className),

      closeSurface: skipRestoreFocus => {
        uiState.menuSurface.close(skipRestoreFocus);
        emit('update:modelValue', false);
      },

      getElementIndex: element => {
        return items.value.findIndex($el => $el == element);
      },

      notifySelected: evtData => {
        emitCustomEvent(rootEl, strings.SELECTED_EVENT, {
          index: evtData.index,
          item: items.value[evtData.index],
        });

        emit('select', {
          index: evtData.index,
          item: items.value[evtData.index],
        });
      },

      getMenuItemCount: () => items.value.length,

      focusItemAtIndex: index => items.value[index].focus(),
      focusListRoot: () =>
        uiState.menuSurface.$el.querySelector(strings.LIST_SELECTOR).focus(),

      isSelectableItemAtIndex: index =>
        !!closest(items.value[index], `.${cssClasses.MENU_SELECTION_GROUP}`),

      getSelectedSiblingOfItemAtIndex: index => {
        const selectionGroupEl = closest(
          items.value[index],
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        );
        const selectedItemEl = selectionGroupEl.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`,
        );
        return selectedItemEl
          ? items.value.findIndex($el => $el == selectedItemEl)
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
      rootEl = uiState.menuSurface.$el;
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
      setSelectedIndex,
      setDefaultFocusState,
      wrapFocus,
      surfaceOpen,
      layout,
      selectedIndex,
      getPrimaryTextAtIndex,
      items,
      typeaheadInProgress,
      typeaheadMatchItem,
    };
  },
};
