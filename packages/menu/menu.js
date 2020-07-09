import { closest } from '@material/dom/ponyfill';
import { MDCMenuFoundation } from '@material/menu/foundation';
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
    const menuSurface = ref(null);
    const list = ref(null);

    const uiState = reactive({
      classes: {},
      styles: {},
      menuOpen: false,
      myWrapFocus: true,
    });

    let foundation;
    let rootEl;

    const items = computed(() => list.value.listElements ?? []);

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

    const selectedIndex = computed(() => list.value?.selIndex.value);

    const layout = () => list.value?.layout();

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
      menuSurface.value.addEventListener(evtType, handler, options);
    };
    const unlisten = (evtType, handler, options) => {
      menuSurface.value.removeEventListener(evtType, handler, options);
    };

    const setDefaultFocusState = focusState => {
      if (typeof focusState == 'string') {
        focusState = DefaultFocusState_[focusState];
      }
      foundation.setDefaultFocusState(focusState);
    };
    const setAnchorCorner = corner => {
      menuSurface.value.setAnchorCorner(corner);
    };
    const setAnchorElement = element => {
      menuSurface.value.setMenuSurfaceAnchorElement(element);
    };
    const setSelectedIndex = index =>
      list.value && (list.value.selIndex.value = index);

    const setAnchorMargin = margin => {
      menuSurface.value.setAnchorMargin(margin);
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
      if (item && list.value) {
        return list.valie.getPrimaryText(item) || '';
      }
      return '';
    };

    const setFixedPosition = isFixed => {
      menuSurface.value.foundation.setFixedPosition(isFixed);
    };

    const hoistMenuToBody = () => {
      menuSurface.value.foundation.hoistMenuToBody();
    };

    const setIsHoisted = isHoisted => {
      menuSurface.value.foundation.setIsHoisted(isHoisted);
    };

    const setAbsolutePosition = (x, y) => {
      menuSurface.value.foundation.setAbsolutePosition(x, y);
    };

    const typeaheadInProgress = () => list.value.typeAheadInProgress ?? false;

    const typeaheadMatchItem = (nextChar, startingIndex) => {
      if (list.value) {
        return list.value.typeaheadMatchItem(nextChar, startingIndex);
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
        menuSurface.value.close(skipRestoreFocus);
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
        menuSurface.value.querySelector(strings.LIST_SELECTOR).focus(),

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
      rootEl = menuSurface.value.$el;
      uiState.menuOpen = props.open;
      foundation = new MDCMenuFoundation(adapter);
      foundation.init();

      if (props.fixed) {
        menuSurface.value.setFixedPosition(props.fixed);
      }

      if (props.absolutePosition) {
        const [x, y] = props.absolutePosition;
        menuSurface.value.setAbsolutePosition(x, y);
      }
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      menuSurface,
      list,
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

  watchX: {},

  computedX: {},

  methodsX: {},
  renderX(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    return createElement(
      'mcw-menu-surface',
      {
        class: { 'mdc-menu': 1 },
        ref: 'menuSurface_',
        attrs: { 'quick-open': this.quickOpen, open: this.menuOpen },
        on: {
          change: evt => this.onChange(evt),
          keydown: evt => this.handleKeydown(evt),
          'MDCMenuSurface:opened': evt => this.handleMenuSurfaceOpened(evt),
        },
      },
      [
        createElement(
          'mcw-list',
          {
            ref: 'list',
            props: { wrapFocus: this.myWrapFocus },
            on: { change: index => this.handleAction({ detail: { index } }) },
          },
          scopedSlots.default?.(),
        ),
      ],
    );
  },
};
