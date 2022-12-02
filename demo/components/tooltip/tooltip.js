const addEventListenerHandlerFunction = (event, handler) => {
  const section = document.querySelector('.mdc-drawer-app-content');

  section?.addEventListener(event, handler);
};

const removeEventListenerHandlerFunction = (event, handler) => {
  const section = document.querySelector('.mdc-drawer-app-content');

  section?.removeEventListener(event, handler);
};

export default {
  setup() {
    return {
      addEventListenerHandlerFn: addEventListenerHandlerFunction,
      removeEventListenerHandlerFn: removeEventListenerHandlerFunction,
    };
  },
};
