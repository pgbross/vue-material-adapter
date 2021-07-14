import { computed, nextTick, reactive, toRefs, watch } from 'vue';

const noop = () => {};

export default {
  name: 'mcw-snackbar-queue',
  props: { snack: Object },
  setup(props, { emit, attrs }) {
    const uiState = reactive({
      open: false,
      queue: [],
      snack: {
        timeoutMs: 5000,
        closeOnEscape: false,
        message: '',
        actionText: '',
        dismissAction: true,
        leading: false,
        stacked: false,
      },
    });

    let actionHandler_;

    const handleSnack = ({
      timeoutMs = 5000,
      closeOnEscape,
      message = '',
      actionText = '',
      dismissAction = true,
      stacked,
      leading,
      actionHandler = noop,
    }) => {
      uiState.queue.push(() => {
        uiState.snack = {
          timeoutMs,
          closeOnEscape,
          message,
          actionText,
          actionHandler,
          dismissAction,
          stacked,
          leading,
        };
        actionHandler_ = actionHandler;
        uiState.open = true;
      });
      if (uiState.queue.length === 1) {
        uiState.queue[0]();
      }
    };

    const handleClosed = () => {
      uiState.open = false;
      uiState.queue.shift();
      if (uiState.queue.length > 0) {
        nextTick(() => uiState.queue[0]());
      }
    };

    const listeners = computed(() => {
      return {
        'update:reason': attrs['update:reason'],
        'mdcsnackbar:closed': ({ reason }) => {
          if (actionHandler_ && reason === 'action') {
            actionHandler_({ reason });
          }
          handleClosed();
          emit('closed', { reason });
        },
      };
    });

    watch(
      () => props.snack,
      nv => {
        if (nv) {
          handleSnack(nv);
          emit('update:snack');
        }
      },
    );

    return { ...toRefs(uiState), handleSnack, listeners };
  },
};
