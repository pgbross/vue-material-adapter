import { MDCTabBarFoundation } from '@material/tab-bar/foundation.js';
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue';
import { emitCustomEvent } from '../base/index.js';

const { strings } = MDCTabBarFoundation;

export default {
  name: 'mcw-tab-bar',

  props: {
    fade: Boolean,
    stacked: Boolean,
    spanContent: Boolean,
    modelValue: Number,
  },

  setup(props, { emit, attrs }) {
    const scroller = ref(null);
    const root = ref(null);

    const tabList = ref([]);

    provide('mcwTabList', {
      fade: props.fade,
      stacked: props.stacked,
      spanContent: props.spanContent,
      tabList,
    });

    const listeners = computed(() => {
      return {
        change: attrs.onChange,
        'mdctab:interacted': event_ => {
          foundation.handleTabInteraction(event_);
        },
        'mdc-tab:interacted': event_ => {
          foundation.handleTabInteraction(event_);
        },
        keydown: event_ => foundation.handleKeyDown(event_),
      };
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
        tabList.value[index].activate(clientRect);
      },
      deactivateTabAtIndex: index => tabList.value[index]?.deactivate(),

      focusTabAtIndex: index => tabList.value[index].focus(),
      getTabIndicatorClientRectAtIndex: index =>
        tabList.value[index]?.computeIndicatorClientRect(),
      getTabDimensionsAtIndex: index =>
        tabList.value[index].computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (let index = 0; index < tabList.value.length; index++) {
          if (tabList.value[index].isActive()) {
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
        for (let index = 0; index < tabList.value.length; index++) {
          if (tabList.value[index].id === id) {
            return index;
          }
        }
        return -1;
      },
      getTabListLength: () => tabList.value.length,
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

      for (let index = 0; index < tabList.value.length; index++) {
        if (tabList.value[index].active) {
          foundation.scrollIntoView(index);
          break;
        }
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

    return { root, scroller, listeners, activateTab };
  },
};
