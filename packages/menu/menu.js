import { closest } from '@material/dom/ponyfill';
import { MDCMenuFoundation } from '@material/menu/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';
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
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: [Boolean, Object],
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

    const handleMenuSurfaceOpened = () => foundation.handleMenuSurfaceOpened();

    const onChange = item => {
      uiState.menuOpen = item;
      emit('change', item);
    };

    const listen = (evtType, handler, options) => {
      uiState.menuSurface.addEventListener(evtType, handler, options);
    };
    const unlisten = (evtType, handler, options) => {
      uiState.menuSurface.removeEventListener(evtType, handler, options);
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
      uiState.menuSurface.foundation.setFixedPosition(isFixed);
    };

    const hoistMenuToBody = () => {
      uiState.menuSurface.foundation.hoistMenuToBody();
    };

    const setIsHoisted = isHoisted => {
      uiState.menuSurface.foundation.setIsHoisted(isHoisted);
    };

    const setAbsolutePosition = (x, y) => {
      uiState.menuSurface.foundation.setAbsolutePosition(x, y);
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
        const list = items.value;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const list = items.value;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const list = items.value;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const list = items.value;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: (element, className) =>
        element.classList.contains(className),
      closeSurface: skipRestoreFocus => {
        uiState.menuSurface.close(skipRestoreFocus);
        emit('change', false);
      },

      getElementIndex: element => {
        return items.value.indexOf(element);
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
        uiState.menuSurface.querySelector(strings.LIST_SELECTOR).focus(),

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
        return selectedItemEl ? items.value.indexOf(selectedItemEl) : -1;
      },
    };

    watch(
      () => props.open,
      nv => {
        uiState.menuOpen = nv;
      },
    );

    onMounted(() => {
      rootEl = uiState.menuSurface.$el;
      uiState.menuOpen = props.open;
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
      setAbsolutePosition,
      setIsHoisted,
      hoistMenuToBody,
      setFixedPosition,
      getOptionByIndex,
      setAnchorMargin,
      setAnchorElement,
      setAnchorCorner,
      setSelectedIndex,
      listen,
      unlisten,
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