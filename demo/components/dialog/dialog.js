export default {
  filters: {
    clean(value) {
      return value.replace(/\s/g, '-');
    },
  },
  data() {
    return {
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
    };
  },

  methods: {
    clean(value) {
      return value.replace(/\s/g, '-');
    },
    onOpen(action) {
      this[`open${action}`] = !this[`open${action}`];
    },
    onClosed({ action }) {
      this.hasBeenOpened = true;
      this.action =
        action === 'dismiss'
          ? 'Declined... Maybe next time?'
          : ('Accepted, thanks!', console.log(action));

      console.dir(this.checkboxSelected);
    },
    checkValidationAndClose() {
      if (this.valid) {
        this.valid = false;
        this.openValidate = false;
        this.action = 'Task complete, submitting...';
      } else {
        this.action = 'Please complete the task before submitting!';
      }
    },
  },
};
