import { MDCBannerFoundation } from '@material/banner/index.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from 'vue';
import bannerContent from './banner-content.vue';
import { FocusTrap } from '@material/dom/focus-trap.js';

const focusTrapFactory_ = (element, options) => new FocusTrap(element, options);

export default {
  name: 'mcw-banner',
  props: {
    centered: Boolean,
    modelValue: Boolean,
    text: String,
    primaryAction: String,
    secondaryAction: String,
    mobile: Boolean,
    fixed: Boolean,
    disableAutoClose: Boolean,
    icon: { type: String, default: () => '' },
  },
  components: { bannerContent },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-banner--centered': props.centered,
        'mdc-banner--mobile-stacked': props.mobile,
      },
      styles: {},
      root: undefined,
      contentEl: undefined,
      primaryActionEl: undefined,
    });
    let foundation;
    let focusTrap;

    const onOpen = nv => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close(nv);
      }
    };

    const close = reason => {
      foundation.close(reason);
    };

    const onContentClick = target => {
      if (target == 1) {
        foundation.handleSecondaryActionClick(props.disableAutoClose);
      } else {
        foundation.handlePrimaryActionClick(props.disableAutoClose);
      }
    };

    const adapter = {
      addClass: className => {
        uiState.classes = { ...uiState.classes, [className]: true };

        // add class immediately otherwise vue rendering makes it happen in the wrong order, but also
        // need it on classes so vue rendering/repaints keep the value.
        uiState.root.classList.add(className);
      },

      getContentHeight: () => {
        return uiState.contentEl.offsetHeight;
      },

      notifyClosed: reason => {
        emit('mdcbanner:closed', { reason });
      },

      notifyClosing: reason => {
        emit('update:modelValue', false); // todo: maybe need to handle auto close
        emit('mdcbanner:closing', { reason });
      },

      notifyOpened: () => emit('mdcbanner:opened', {}),

      notifyOpening: () => {
        emit('mdcbanner:opening', {});
      },

      notifyActionClicked: action => {
        emit('mdcbanner:actionclicked', { action });
      },

      releaseFocus: () => {
        focusTrap.releaseFocus();
      },

      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      setStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),
      trapFocus: () => {
        focusTrap.trapFocus();
      },
    };

    const haveIcon = computed(() => !!props.icon);
    watch(
      () => props.modelValue,
      nv => {
        onOpen(nv);
      },
    );

    onMounted(() => {
      focusTrap = focusTrapFactory_(uiState.root, {
        initialFocusEl: uiState.primaryActionEl,
      });

      foundation = new MDCBannerFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation?.destroy();
    });

    return { ...toRefs(uiState), onContentClick, haveIcon, close };
  },
};
