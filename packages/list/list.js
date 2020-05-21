import { MDCListFoundation } from '@material/list/foundation';
import { emitCustomEvent } from '~/base/index.js';

import { closest, matches } from '@material/dom/ponyfill';

const ARIA_ORIENTATION = 'aria-orientation';
const VERTICAL = 'vertical';
const RADIO_CHECKED_RADIO_SELECTOR = `input[type="radio"][checked="checked"]`;

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
    selectedIndex: { type: [Number, Array] },
    tag: { type: String, default: 'ul' },
    [ARIA_ORIENTATION]: { type: String, default: VERTICAL },
  },

  data() {
    return {
      listn: 0,
    };
  },

  watch: {
    singleSelection(nv) {
      this.foundation.setSingleSelection(nv);
    },
    selectedIndex(nv) {
      if (Array.isArray(nv)) {
        this.foundation.setSelectedIndex(nv);
      } else if (this.selectedIndex != nv) {
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
    selIndex: {
      get() {
        return this.selectedIndex;
      },
      set(nv) {
        this.$emit('change', nv);
      },
    },
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
      // eslint-disable-next-line no-unused-vars
      const xx = this.listn; // for dependency

      return [].slice.call(
        this.$el.querySelectorAll(`.${cssClasses.LIST_ITEM_CLASS}`),
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

    handleKeydownEvent(evt) {
      const index = this.getListItemIndex(evt);
      const target = evt.target;
      this.foundation.handleKeydown(
        evt,
        target.classList.contains(cssClasses.LIST_ITEM_CLASS),
        index,
      );
    },
    handleClickEvent(evt) {
      const index = this.getListItemIndex(evt);
      const target = evt.target;

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
      this.foundation.handleClick(index, toggleCheckbox);
    },

    layout() {
      this.foundation.setVerticalOrientation(this.ariaOrientation == VERTICAL);

      // List items need to have at least tabindex=-1 to be focusable.
      [].slice
        .call(this.$el.querySelectorAll('.mdc-list-item:not([tabindex])'))
        .forEach(ele => {
          ele.setAttribute('tabindex', -1);
        });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice
        .call(this.$el.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS))
        .forEach(ele => ele.setAttribute('tabindex', -1));

      this.foundation.layout();
    },

    initializeListType() {
      const checkboxListItems = this.$el.querySelectorAll(
        strings.ARIA_ROLE_CHECKBOX_SELECTOR,
      );
      const singleSelectedListItem = this.$el.querySelector(`
        .${cssClasses.LIST_ITEM_ACTIVATED_CLASS},
        .${cssClasses.LIST_ITEM_SELECTED_CLASS}
      `);
      let radioSelectedListItem = this.$el.querySelector(
        strings.ARIA_CHECKED_RADIO_SELECTOR,
      );

      if (!radioSelectedListItem) {
        const radioSelectedInput = this.$el.querySelector(
          RADIO_CHECKED_RADIO_SELECTOR,
        );
        if (radioSelectedInput) {
          radioSelectedListItem = closest(
            radioSelectedInput,
            `[role="radio"].${cssClasses.LIST_ITEM_CLASS}`,
          );
        }
      }

      if (checkboxListItems.length) {
        const preselectedItems = this.$el.querySelectorAll(
          strings.ARIA_CHECKED_CHECKBOX_SELECTOR,
        );
        this.selIndex = [].map.call(preselectedItems, listItem =>
          this.listElements.indexOf(listItem),
        );
      } else if (singleSelectedListItem) {
        if (
          singleSelectedListItem.classList.contains(
            cssClasses.LIST_ITEM_ACTIVATED_CLASS,
          )
        ) {
          this.foundation.setUseActivatedClass(true);
        }

        this.singleSelection = true;
        this.selIndex = this.listElements.indexOf(singleSelectedListItem);
      } else if (radioSelectedListItem) {
        const selIndex = this.listElements.indexOf(radioSelectedListItem);
        this.foundation.setSelectedIndex(selIndex);
        this.selIndex = selIndex;

        radioSelectedListItem.setAttribute('tabindex', '0');
      }
    },

    getListItemIndex(evt) {
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
        return this.listElements.indexOf(nearestParent);
      }

      return -1;
    },
  },
  mounted() {
    const { wrapFocus } = this;

    const adapter = {
      addClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: index => {
        const element = this.listElements[index];
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: (index, attr) =>
        this.listElements[index].getAttribute(attr),

      getFocusedElementIndex: () =>
        this.listElements.indexOf(document.activeElement),

      getListItemCount: () => this.listElements.length,

      hasCheckboxAtIndex: index => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },

      hasRadioAtIndex: index => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.RADIO_SELECTOR);
      },

      isCheckboxCheckedAtIndex: index => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector(strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },

      isFocusInsideList: () => {
        return this.$el.contains(document.activeElement);
      },

      isRootFocused: () => document.activeElement === this.$el,

      listItemAtIndexHasClass: (index, className) => {
        this.listElements[index].classList.contains(className);
      },

      notifyAction: index => {
        emitCustomEvent(
          this.$el,
          strings.ACTION_EVENT,
          { index },
          /** shouldBubble */ true,
        );

        if (Array.isArray(this.selectedIndex)) {
          this.$emit('change', this.foundation.getSelectedIndex());
        } else {
          this.$emit('change', index);
        }
      },

      removeClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.remove(className);
        }
      },

      setAttributeForElementIndex: (index, attr, value) => {
        const element = this.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },

      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector(
          strings.CHECKBOX_RADIO_SELECTOR,
        );
        toggleEl && (toggleEl.checked = isChecked);

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl && toggleEl.dispatchEvent(event);
      },

      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = this.listElements[listItemIndex];
        const listItemChildren = [].slice.call(
          element.querySelectorAll(strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),
        );
        listItemChildren.forEach(el =>
          el.setAttribute('tabindex', tabIndexValue),
        );
      },
    };

    this.foundation = new MDCListFoundation(adapter);

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

    // the list content could change outside of this component
    // so use a mutation observer to trigger an update by
    // incrementing the dependency variable "listn" referenced
    // in the computed that selects the list elements
    this.slotObserver = new MutationObserver((mutationList, observer) => {
      this.listn++;
    });
    this.slotObserver.observe(this.$refs.listRoot, {
      childList: true,
      // subtree: true,
    });
  },

  beforeDestroy() {
    this.slotObserver.disconnect();
  },

  render(createElement) {
    const { tag, ariaOrientation, singleSelection, $scopedSlots: slots } = this;

    const attrs = { 'aria-orientation': ariaOrientation };
    if (singleSelection) {
      attrs.role = 'listbox';
    }

    return createElement(
      tag,
      {
        class: this.classes,
        attrs,
        on: {
          click: event => this.handleClickEvent(event),
          focusin: event => this.handleFocusInEvent(event),
          focusout: event => this.handleFocusOutEvent(event),
          keydown: event => this.handleKeydownEvent(event),
        },
        ref: 'listRoot',
      },
      slots.default && slots.default(),
    );
  },
};
