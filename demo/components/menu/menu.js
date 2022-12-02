import { reactive, toRefs } from 'vue';

const onSelect = data => {
  console.log(data);
};
export default {
  setup() {
    const uiState = reactive({
      open: false,
      openGroup: false,
    });

    return { ...toRefs(uiState), onSelect };
  },
};
