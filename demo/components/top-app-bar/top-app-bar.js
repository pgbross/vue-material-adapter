import { onMounted, reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      buttonText: '',
      navigation: false,
      navigationCount: 0,
      scrollTarget: undefined,
      root: undefined,
    });

    const onNav = () => {
      uiState.navigation = true;
      uiState.navigationCount += 1;
    };

    onMounted(() => {
      const demoElement = uiState.root.querySelector('.mcw-demo');
      uiState.scrollTarget = demoElement;
    });

    return { ...toRefs(uiState), onNav };
  },
};
