import { h, nextTick, reactive, watch } from 'vue';
import { mcwSnackbar } from './index.js';

const noop = () => {};

export default {
  name: 'mcw-snackbar-queue',
  props: { snack: Object },
  setup(props, { emit, attrs, expose }) {
    const uiState = reactive({
      open: false,
    });

    let actionHandler_;
    const queue = [];

    let snack;

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
      queue.push(() => {
        snack = {
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
      if (queue.length === 1) {
        queue[0]();
      }
    };

    const handleClosed = () => {
      uiState.open = false;
      queue.shift();

      if (queue.length > 0) {
        nextTick(() => queue[0]());
      }
    };

    watch(
      () => props.snack,
      nv => {
        if (nv) {
          handleSnack(nv);
          emit('update:snack');
        }
      },
    );

    expose({ handleSnack });

    return () => {
      return h(mcwSnackbar, {
        modelValue: uiState.open,
        ...snack,
        'onUpdate:reason': event => {
          attrs['update:reason']?.(event);
        },
        'onMdcsnackbar:closed': ({ reason }) => {
          if (actionHandler_ && reason === 'action') {
            actionHandler_({ reason });
          }
          handleClosed();
          emit('closed', { reason });
        },
      });
    };
  },
};
