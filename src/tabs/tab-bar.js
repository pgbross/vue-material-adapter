import { MDCTabBarFoundation } from '@material/tab-bar/foundation.js';
import { h, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue';
import { emitCustomEvent } from '../base/index.js';
import { mcwTabScroller } from './index.js';

const { strings } = MDCTabBarFoundation;

export default {
  name: 'mcw-tab-bar',

  props: {
    fade: Boolean,
    stacked: Boolean,
    spanContent: Boolean,
    modelValue: Number,
    focusOnActivate: { type: Boolean, default: () => true },
    useAutomaticActivation: { type: Boolean, default: () => true },
  },

  setup(props, { emit, attrs, slots, expose }) {
    const scroller = ref();
    const root = ref();

    const tabList = [];

    provide('mcwTabList', {
      fade: props.fade,
      stacked: props.stacked,
      spanContent: props.spanContent,
      tabList,
    });

    let foundation;

    const getTabElements_ = () => {
      return Array.prototype.slice.call(
        root.value.querySelectorAll(strings.TAB_SELECTOR),
      );
    };

    const activateTab = index => foundation.activateTab(index);

    const adapter = {
      scrollTo: scrollX => scroller.value.scrollTo(scrollX),

      incrementScroll: scrollXIncrement =>
        scroller.value.incrementScroll(scrollXIncrement),

      getScrollPosition: () => scroller.value.getScrollPosition(),

      getScrollContentWidth: () => scroller.value.getScrollContentWidth(),

      getOffsetWidth: () => root.value.offsetWidth,

      isRTL: () =>
        window.getComputedStyle(root.value).getPropertyValue('direction') ===
        'rtl',

      setActiveTab: index => {
        foundation.activateTab(index);
      },

      activateTabAtIndex: (index, clientRect) => {
        tabList[index].activate(clientRect);
      },

      deactivateTabAtIndex: index => tabList[index]?.deactivate(),

      focusTabAtIndex: index => tabList[index].focus(),

      getTabIndicatorClientRectAtIndex: index =>
        tabList[index]?.computeIndicatorClientRect(),

      getTabDimensionsAtIndex: index => tabList[index].computeDimensions(),

      getPreviousActiveTabIndex: () => {
        for (const [index, element] of tabList.entries()) {
          if (element.isActive()) {
            return index;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = getTabElements_();
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },

      getIndexOfTabById: id => {
        for (const [index, element] of tabList.entries()) {
          if (element.id === id) {
            return index;
          }
        }
        return -1;
      },

      getTabListLength: () => tabList.length,

      notifyTabActivated: index => {
        emitCustomEvent(
          root.value,
          strings.TAB_ACTIVATED_EVENT,
          { index },
          true,
        );

        emit('update:modelValue', Number(index));
      },
    };

    onMounted(() => {
      foundation = foundation = new MDCTabBarFoundation(adapter);
      foundation.init();

      // ensure active tab
      props.modelValue !== void 0;
      foundation.activateTab(Number(props.modelValue) || 0);

      for (const [index, element] of tabList.entries()) {
        if (element.active) {
          foundation.scrollIntoView(index);
          break;
        }
      }

      foundation.setUseAutomaticActivation(props.useAutomaticActivation);

      for (const tab of tabList) {
        tab.focusOnActivate(props.focusOnActivate);
      }

      // watch for changes in the modelValue
      // note watchEffect does not give the correct behaviour
      watch(
        () => props.modelValue,
        nv => {
          foundation.activateTab(Number(nv));
        },
      );
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    expose({ activateTab });

    return () => {
      return h(
        'div',
        {
          ref: root,
          role: 'tablist',
          class: 'mdc-tab-bar',

          onChange: attrs.onChange,
          'onMdctab:interacted': event_ => {
            foundation.handleTabInteraction(event_);
          },
          'onMdc-tab:interacted': event_ => {
            foundation.handleTabInteraction(event_);
          },
          keydown: event_ => foundation.handleKeyDown(event_),
        },
        [h(mcwTabScroller, { ref: scroller }, () => [slots.default()])],
      );
    };
  },
};
