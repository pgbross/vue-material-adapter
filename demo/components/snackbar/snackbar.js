import { reactive, toRefs, watch } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      open: false,
      n: 0,
      action: '',
      reason: '',
      snack: {},
      bar: undefined,
    });

    const onReason = reason => {
      uiState.reason = reason == 'action' ? 'Took action' : 'Declined action';
    };

    const showSimple = () => {
      uiState.open = !uiState.open;
      uiState.open && uiState.n++;
    };
    const showBaseline = () => {
      const nextSnack = {
        message: `Can't send photo. Retry in 5 seconds.`,
        timeoutMs: 5000,
        actionText: 'Retry',
        actionHandler: ({ reason }) => {
          alert(`Action, reason: ${reason}`);
        },
        closeOnEscape: false,
      };

      uiState.snack = nextSnack;
      // this.$refs.bar.handleSnack(nextSnack);
    };
    const showStacked = () => {
      uiState.bar.handleSnack({
        message: `This item already has the label "travel". You can add a new label.`,
        timeoutMs: 5000,
        actionText: 'Add a new label',
        stacked: true,
      });
    };

    const showLeading = () => {
      const nextSnack = {
        message: `Your photo has been archived.`,
        timeoutMs: 5000,
        actionText: 'Undo',
        leading: true,
      };

      uiState.snack = nextSnack;
    };

    watch(
      () => uiState.snack,
      nv => {
        console.log(nv);
      },
    );

    return {
      ...toRefs(uiState),
      showBaseline,
      showLeading,
      showSimple,
      showStacked,
      onReason,
    };
  },
  watchaa: {
    snack(nv) {
      console.dir(nv);
    },
  },
  methods: {},
};
