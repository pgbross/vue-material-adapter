import { computed, inject, reactive, ref, toRefs } from '@vue/composition-api';
import { CustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/ripple-plugin.js';

const dispatchProps = {
  event: String,
  'event-target': Object,
  'event-args': Array,
};

export default {
  name: 'mcw-drawer-item',
  inheritAttrs: false,
  props: {
    ...dispatchProps,
    startIcon: String,
    modalClose: {
      type: Boolean,
      default: true,
    },
    activated: Boolean,
    exactActiveClass: {
      type: String,
      default: 'mdc-list-item--activated',
    },
  },
  components: { CustomLink },
  setup(props, { emit, listeners, slots, root: $root }) {
    const root = ref(null);
    const uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-drawer-item': 1,
      },
    });
    const { classes: rippleClasses, styles } = useRipplePlugin(root);

    const mcwDrawer = inject('mcwDrawer');

    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const mylisteners = computed(() => {
      return {
        ...listeners,
        click: e => {
          mcwDrawer.isModal && props.modalClose && mcwDrawer.close();
          emit(e.type, e);
        },
      };
    });

    const itemClasses = computed(() => {
      return {
        'mdc-list-item--activated': props.activated,
      };
    });

    const hasStartDetail = computed(() => {
      return props.startIcon || slots['start-detail'];
    });

    return {
      ...toRefs(uiState),
      classes,
      root,
      styles,
      mylisteners,
      itemClasses,
      hasStartDetail,
    };
  },
};
