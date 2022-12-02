import { onMounted, reactive, toRefs } from 'vue';

const onAction = ({ detail }) => {
  console.log(detail.index);
};

export default {
  setup() {
    const uiState = reactive({
      selected: 1,
      listSelected: [],
      radioSelected: 'cat',
      checkboxSelected: [false, false],
      picked: '1',
      test: true,
      show2a: false,
    });

    onMounted(() => {
      setTimeout(() => {
        uiState.show2a = true;
      }, 5000);
    });

    return { ...toRefs(uiState), onAction };
  },
};
