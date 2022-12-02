import { reactive, toRefs } from 'vue';

const ondelete = () => {
  console.log('ondelete');
};

export default {
  setup() {
    const uiState = reactive({
      textField: '',
      enabled: true,
      password: '',
    });
    return { ...toRefs(uiState), ondelete };
  },
};
