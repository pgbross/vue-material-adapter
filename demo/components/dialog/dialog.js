import { reactive, toRefs } from 'vue';

const clean = value => {
  return value.replace(/\s/g, '-');
};

export default {
  setup() {
    const uiState = reactive({
      openBasic: false,
      openSimple: false,
      openAlert: false,
      openConfirmation: false,
      openScrolling: false,
      openValidate: false,
      valid: false,
      action: '',
      selectedIndex: -1,
      choices: ['Never gonna give you up', 'Host cross buns', 'None'],
      picked: '',
      hasBeenOpened: false,
      checkboxSelected: [false, false, true],
    });

    const onOpen = action => {
      uiState[`open${action}`] = !uiState[`open${action}`];
    };
    const onClosed = ({ action }) => {
      uiState.hasBeenOpened = true;
      uiState.action =
        action === 'dismiss'
          ? 'Declined... Maybe next time?'
          : ('Accepted, thanks!', console.log(action));

      console.log(uiState.checkboxSelected);
    };
    const checkValidationAndClose = () => {
      if (uiState.valid) {
        uiState.valid = false;
        uiState.openValidate = false;
        uiState.action = 'Task complete, submitting...';
      } else {
        uiState.action = 'Please complete the task before submitting!';
      }
    };

    return {
      ...toRefs(uiState),
      onClosed,
      onOpen,
      checkValidationAndClose,
      clean,
    };
  },
};
