const noop = () => {};

export default {
  name: 'mcw-snackbar-queue',
  data() {
    return {
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
    };
  },
  render(createElement) {
    return createElement('mcw-snackbar', {
      props: {
        open: this.open,
        ...this.snack,
      },
      on: this.listeners,
    });
  },
  methods: {
    handleSnack({
      timeoutMs = 5000,
      closeOnEscape,
      message = '',
      actionText = '',
      dismissAction = true,
      stacked,
      leading,
      actionHandler = noop,
    }) {
      this.queue.push(() => {
        this.snack = {
          timeoutMs,
          closeOnEscape,
          message,
          actionText,
          actionHandler,
          dismissAction,
          stacked,
          leading,
        };
        this.actionHandler = actionHandler;
        this.open = true;
      });
      if (this.queue.length === 1) {
        this.queue[0]();
      }
    },
    handleClosed() {
      this.open = false;
      this.queue.shift();
      if (this.queue.length > 0) {
        this.$nextTick(() => this.queue[0]());
      }
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        'MDCSnackbar:closed': ({ reason }) => {
          if (this.actionHandler && reason === 'action') {
            this.actionHandler({ reason });
          }
          this.handleClosed();
          this.$emit('closed', { reason });
        },
      };
    },
  },
};
