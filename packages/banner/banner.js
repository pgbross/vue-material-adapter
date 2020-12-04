import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { MDCBannerFoundation } from '@material/banner';
import bannerContent from './banner-content.vue';

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
    icon: String,
  },
  components: { bannerContent },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-banner--centered': props.centered,
        'mdc-banner--mobile-stacked': props.mobile,
      },
      styles: {},
      root: null,
      contentEl: null,
    });
    let foundation;

    const onOpen = nv => {
      if (nv) {
        foundation.open();
      } else {
        foundation.close();
      }
    };

    const onContentClick = ({ target }) => {
      if (target == 1) {
        foundation.handleSecondaryActionClick();
      } else {
        foundation.handlePrimaryActionClick();
      }
    };

    const adapter = {
      addClass: className => {
        uiState.classes = { ...uiState.classes, [className]: true };
        uiState.root.classList.add(className);
      },

      getContentHeight: () => {
        return uiState.contentEl.$el.offsetHeight;
      },

      notifyOpening: () => {
        emit('mdcbanner:opening', {});
      },
      notifyOpened: () => emit('mdcbanner:opened', {}),
      notifyClosing: reason => {
        emit('update:modelValue', false);
        emit('mdcbanner:closing', { reason });
      },
      notifyClosed: reason => {
        emit('mdcbanner:closed', { reason });
      },

      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      setStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),
    };

    watch(
      () => props.modelValue,
      nv => {
        onOpen(nv);
      },
    );

    onMounted(() => {
      foundation = new MDCBannerFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation?.destroy();
    });

    return { ...toRefs(uiState), onContentClick };
  },
};
