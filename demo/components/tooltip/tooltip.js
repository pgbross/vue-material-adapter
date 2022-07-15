export default {
  data() {
    return {};
  },
  computed: {},

  mounted() {},
  methods: {
    addEventListenerHandlerFn(event, handler) {
      const section = document.querySelector('.mdc-drawer-app-content');

      section?.addEventListener(event, handler);
    },

    removeEventListenerHandlerFn(event, handler) {
      const section = document.querySelector('.mdc-drawer-app-content');

      section?.removeEventListener(event, handler);
    },
  },
};
