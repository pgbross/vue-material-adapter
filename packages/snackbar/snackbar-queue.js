import { computed, reactive, toRefs } from 'vue';

const noop = () => {};

export default {
  name: 'mcw-snackbar-queue',
  setup(props, { emit, $listeners, root: $root }) {
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
        $root.$nextTick(() => uiState.queue[0]());
      }
    };

    const listeners = computed(() => {
      return {
        ...$listeners,
        'MDCSnackbar:closed': ({ reason }) => {
          if (actionHandler_ && reason === 'action') {
            actionHandler_({ reason });
          }
          handleClosed();
          emit('closed', { reason });
        },
      };
    });

    return { ...toRefs(uiState), handleSnack, listeners };
  },
};
